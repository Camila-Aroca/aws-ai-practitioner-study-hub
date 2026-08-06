const fs = require("fs");
const vm = require("vm");

const context = {window:{}};
context.window.window = context.window;
vm.createContext(context);
["data/exams/domain1-exam-config.js","data/exams/domain1-question-bank.js"].forEach(file => {
  vm.runInContext(fs.readFileSync(file, "utf8"), context, {filename:file});
});

const config = context.window.DOMAIN1_EXAM_CONFIG;
const questions = context.window.DOMAIN1_QUESTIONS;
const errors = [];
const ids = new Set();
const byObjective = {};

const totalBlueprint = Object.values(config.objectiveBlueprint).reduce((sum, n) => sum + n, 0);
if(totalBlueprint !== config.questionCount) errors.push(`Blueprint sums to ${totalBlueprint}, expected ${config.questionCount}`);

questions.forEach(q => {
  if(ids.has(q.id)) errors.push(`Duplicate question id ${q.id}`);
  ids.add(q.id);
  ["domain","task","objective","type","difficulty","stem","options","correctAnswers","explanation","distractorExplanations","sourceType","sourceReference"].forEach(field => {
    if(q[field] === undefined || q[field] === null || q[field] === "") errors.push(`${q.id} missing ${field}`);
  });
  if(q.domain !== 1) errors.push(`${q.id} is not Domain 1`);
  if(!config.objectiveBlueprint[q.objective]) errors.push(`${q.id} has unsupported objective ${q.objective}`);
  if(q.type === "multiple-choice" && q.correctAnswers.length !== 1) errors.push(`${q.id} MCQ must have exactly one correct answer`);
  if(q.type === "multiple-response" && q.correctAnswers.length < 2) errors.push(`${q.id} MRQ must have at least two correct answers`);
  if(q.type === "multiple-choice" && q.options.length !== 4) errors.push(`${q.id} MCQ must have four options`);
  if(q.type === "multiple-response" && q.options.length < 5) errors.push(`${q.id} MRQ must have five or more options`);
  q.correctAnswers.forEach(answer => {
    if(!q.options.some(option => option.id === answer)) errors.push(`${q.id} correct answer ${answer} has no option`);
  });
  q.options.forEach(option => {
    if(!q.correctAnswers.includes(option.id) && !q.distractorExplanations[option.id]) errors.push(`${q.id} missing distractor explanation for ${option.id}`);
  });
  byObjective[q.objective] = (byObjective[q.objective] || 0) + 1;
});

Object.entries(config.objectiveBlueprint).forEach(([objective, count]) => {
  if((byObjective[objective] || 0) < count) errors.push(`${objective} has ${byObjective[objective] || 0}, needs ${count}`);
  if((byObjective[objective] || 0) < 2) errors.push(`${objective} has fewer than two questions`);
});

if(questions.length !== config.questionCount) errors.push(`Validated bank has ${questions.length}, expected ${config.questionCount}`);

if(errors.length){
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${questions.length} exam questions across ${Object.keys(config.objectiveBlueprint).length} objectives.`);
