const fs = require("fs");
const vm = require("vm");

const context = {window:{}};
context.window.window = context.window;
vm.createContext(context);

["data/domain1.js","data/legacy-activities.js","data/exams/domain1-exam-config.js","data/exams/domain1-question-bank.js","data/reinforcement/domain1-reinforcement.js","data/study-hub.js"].forEach(file => {
  vm.runInContext(fs.readFileSync(file, "utf8"), context, {filename:file});
});

const hub = context.window.HUB_DATA;
const errors = [];
const ids = new Set();
const required = ["id","domain","taskStatement","objectiveCodes","title","shortDescription","activityType","estimatedTime","difficulty","module","order","sourceFile","available","rounds"];

if(!hub) errors.push("Missing HUB_DATA.");
if(hub){
  hub.activities.forEach(activity => {
    required.forEach(field => {
      if(activity[field] === undefined || activity[field] === null || activity[field] === "") errors.push(`${activity.id || "(no id)"} missing ${field}`);
    });
    if(ids.has(activity.id)) errors.push(`Duplicate activity id: ${activity.id}`);
    ids.add(activity.id);
    if(!Number.isInteger(activity.domain) || activity.domain < 1 || activity.domain > 5) errors.push(`${activity.id} has invalid domain ${activity.domain}`);
    if(!activity.rounds.length) errors.push(`${activity.id} has no rounds`);
    const roundIds = new Set();
    activity.rounds.forEach(round => {
      if(roundIds.has(round.id)) errors.push(`${activity.id} duplicate round id ${round.id}`);
      roundIds.add(round.id);
      if(!round.cards && !round.items && !round.concepts && !round.questionCount) errors.push(`${activity.id}/${round.id} has no cards, items, concepts, or question count`);
    });
  });
  const sorted = hub.activities.slice().sort((a,b) => a.order - b.order);
  sorted.forEach((activity, idx) => {
    if(idx && sorted[idx - 1].order === activity.order) errors.push(`Duplicate order ${activity.order}`);
  });
}

const units = context.window.DOMAIN1_REINFORCEMENT_UNITS || [];
const requiredItemFields = ["id","task","objective","type","stem","options","correctAnswers","explanation","decidingClue","closestDistractor","whyClosestDistractorIsWrong","sourceReference"];
const unitIds = new Set();
units.forEach(unit => {
  if(unitIds.has(unit.id)) errors.push(`Duplicate reinforcement unit id: ${unit.id}`);
  unitIds.add(unit.id);
  ["id","title","objectives","rapidReview","guidedExamples","practice","checkpoint","masteryPercent","relatedActivityId"].forEach(field => {
    if(unit[field] === undefined || unit[field] === null) errors.push(`${unit.id || "(no unit)"} missing ${field}`);
  });
  if(!unit.objectives || !unit.objectives.length) errors.push(`${unit.id} has no objectives`);
  if(unit.id === "domain1-inference" && unit.practice.length < 16) errors.push("Inference unit needs at least 16 practice scenarios");
  if(unit.id === "domain1-aws-services" && unit.practice.length < 20) errors.push("Service unit needs at least 20 practice scenarios");
  if(unit.id === "domain1-reinforcement-checkpoint" && unit.checkpoint.length !== 20) errors.push("Mixed checkpoint needs exactly 20 questions");
  (unit.practice || []).concat(unit.checkpoint || []).forEach(item => {
    requiredItemFields.forEach(field => {
      if(item[field] === undefined || item[field] === null || item[field] === "") errors.push(`${item.id || "(no item)"} missing ${field}`);
    });
    if(!unit.objectives.includes(item.objective) && unit.id !== "domain1-reinforcement-checkpoint") errors.push(`${item.id} objective ${item.objective} is outside ${unit.id}`);
    if(!Array.isArray(item.correctAnswers) || !item.correctAnswers.length) errors.push(`${item.id} has no correct answer`);
    if(!Array.isArray(item.options) || item.options.length < 2) errors.push(`${item.id} has too few options`);
  });
});

if(errors.length){
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${hub.activities.length} registered activities across ${hub.domains.length} domains.`);
