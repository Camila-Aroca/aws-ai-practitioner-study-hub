const fs = require("fs");
const vm = require("vm");

const context = {window:{}};
context.window.window = context.window;
vm.createContext(context);

[
  "data/domain1.js",
  "data/legacy-activities.js",
  "data/guide-hierarchy.js",
  "data/exams/domain1-exam-config.js",
  "data/exams/domain1-question-bank.js",
  "data/reinforcement/domain1-reinforcement.js",
  "data/study-hub.js"
].forEach(file => {
  vm.runInContext(fs.readFileSync(file, "utf8"), context, {filename:file});
});

const hub = context.window.HUB_DATA;
const guide = context.window.GUIDE_HIERARCHY;
const errors = [];

function countRound(round){
  if(round.questionCount) return round.questionCount;
  if(round.cards) return round.cards.length;
  if(round.items) return round.items.length;
  const types = round.slotTypes || [{key:"answer"}];
  return (round.concepts || []).length * types.length;
}

function guideSets(domainNumber){
  const rows = [];
  hub.activities
    .filter(activity => activity.domain === domainNumber && activity.module === "hub-card-engine")
    .forEach(activity => {
      (activity.rounds || []).forEach(round => {
        if(!round.hierarchy) return;
        rows.push({
          activityId:activity.id,
          roundId:round.id,
          route:`#/activity/${activity.id}/${round.id}`,
          taskId:round.hierarchy.taskId,
          subtaskId:round.hierarchy.subtaskId,
          count:countRound(round)
        });
      });
    });
  return rows;
}

[1,2].forEach(domainNumber => {
  const domain = guide.domains.find(item => item.number === domainNumber);
  if(!domain) errors.push(`Missing guide domain ${domainNumber}`);
  const sets = guideSets(domainNumber);
  const seen = new Set();
  sets.forEach(set => {
    const key = `${set.activityId}/${set.roundId}`;
    if(seen.has(key)) errors.push(`Duplicate sidebar card-set entry ${key}`);
    seen.add(key);
    if(!set.route || !set.route.startsWith("#/activity/")) errors.push(`${key} missing stable activity route`);
    if(!set.count) errors.push(`${key} has zero card count`);
    const task = domain.tasks.find(item => item.taskId === set.taskId);
    if(!task) errors.push(`${key} references missing task ${set.taskId}`);
    if(task && !task.subtasks.some(item => item.subtaskId === set.subtaskId)) errors.push(`${key} references subtask ${set.subtaskId} outside ${set.taskId}`);
  });
  domain.tasks.forEach(task => {
    const taskSets = sets.filter(set => set.taskId === task.taskId);
    if(!taskSets.length) errors.push(`Domain ${domainNumber} ${task.taskId} has no sidebar card sets`);
    task.subtasks.forEach(subtask => {
      const count = taskSets.filter(set => set.subtaskId === subtask.subtaskId).length;
      if(!count) errors.push(`Domain ${domainNumber} subtask ${subtask.subtaskId} has no sidebar card sets`);
    });
  });
});

if(errors.length){
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated hierarchical sidebar model for ${guideSets(1).length + guideSets(2).length} Domain 1/2 card-set links.`);
