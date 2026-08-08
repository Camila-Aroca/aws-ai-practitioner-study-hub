#!/usr/bin/env node

global.window = global;
require("./data/guide-hierarchy.js");
require("./data/exam-center/cyu-question-bank.js");

const bank = global.CYU_QUESTION_BANK;
const questions = bank.questions || [];
const config = {
  questionCount: 65,
  domainWeights: {1: 20, 2: 24, 3: 28, 4: 14, 5: 14}
};

function fail(message){
  console.error("FAIL:", message);
  process.exitCode = 1;
}

function assert(condition, message){
  if(!condition) fail(message);
}

function shuffle(arr){
  return arr.slice();
}

function allocation(){
  const counts = questions.reduce((acc, q) => {
    acc[q.domain] = (acc[q.domain] || 0) + 1;
    return acc;
  }, {});
  const rows = Object.entries(config.domainWeights).map(([domain, weight]) => {
    const exact = config.questionCount * weight / 100;
    return {domain:Number(domain), exact, count:Math.floor(exact), capacity:counts[domain] || 0};
  });
  let remaining = config.questionCount - rows.reduce((sum, row) => sum + row.count, 0);
  rows.sort((a,b) => (b.exact - Math.floor(b.exact)) - (a.exact - Math.floor(a.exact))).forEach(row => {
    if(remaining > 0 && row.count < row.capacity){
      row.count++;
      remaining--;
    }
  });
  while(remaining > 0){
    const row = rows.find(item => item.count < item.capacity);
    if(!row) break;
    row.count++;
    remaining--;
  }
  rows.forEach(row => {
    if(row.count > row.capacity){
      remaining += row.count - row.capacity;
      row.count = row.capacity;
    }
  });
  while(remaining > 0){
    const row = rows.find(item => item.count < item.capacity);
    if(!row) break;
    row.count++;
    remaining--;
  }
  return rows.sort((a,b) => a.domain - b.domain);
}

function buildAttempt(){
  const ids = allocation().flatMap(row => shuffle(questions.filter(q => q.domain === row.domain).map(q => q.id)).slice(0, row.count));
  return ids.slice(0, config.questionCount);
}

const objectives = new Set(Object.keys(global.GUIDE_HIERARCHY.subtaskTitles));
const ids = new Set();
const stems = new Set();

assert(bank.questionCount === questions.length, "questionCount does not match questions length");
assert(questions.length >= config.questionCount, "not enough questions for a full simulated exam");
assert(Array.isArray(bank.excluded), "excluded audit list is missing");
assert(Array.isArray(bank.distractorLengthBalancingAudit) && bank.distractorLengthBalancingAudit.length > 0, "distractor length audit is missing");

questions.forEach(question => {
  assert(!ids.has(question.id), "duplicate question id " + question.id);
  ids.add(question.id);
  assert(!stems.has(question.stem), "duplicate stem: " + question.stem);
  stems.add(question.stem);
  assert(question.sourceType === "master-study-guide-cyu", question.id + " is not marked as Master Study Guide CYU source");
  assert(question.domain >= 1 && question.domain <= 5, question.id + " has invalid domain");
  assert(objectives.has(question.objective), question.id + " has objective not present in guide hierarchy: " + question.objective);
  assert(question.explanation && question.explanation.length > 10, question.id + " is missing sourced explanation");
  if(question.type === "multiple-choice" || question.type === "multiple-response"){
    const optionIds = new Set((question.options || []).map(option => option.id));
    assert(optionIds.size >= 2, question.id + " has too few options");
    (question.correctAnswers || []).forEach(answer => assert(optionIds.has(answer), question.id + " has invalid correct answer " + answer));
    assert(question.type !== "multiple-choice" || question.correctAnswers.length === 1, question.id + " MC must have exactly one correct answer");
    assert(question.type !== "multiple-response" || question.correctAnswers.length > 1, question.id + " MR must have more than one correct answer");
  }else if(question.type === "ordering"){
    assert((question.items || []).length === (question.correctOrder || []).length, question.id + " ordering item/key length mismatch");
    const itemSet = new Set(question.items || []);
    (question.correctOrder || []).forEach(item => assert(itemSet.has(item), question.id + " ordering key contains unknown item"));
  }else if(question.type === "matching"){
    const prompts = new Set(question.matchingPrompts || []);
    const options = new Set(question.matchingOptions || []);
    assert((question.correctMatches || []).length === prompts.size, question.id + " matching key/prompt length mismatch");
    (question.correctMatches || []).forEach(match => {
      assert(prompts.has(match.prompt), question.id + " matching key contains unknown prompt");
      assert(options.has(match.answer), question.id + " matching key contains unknown answer");
    });
  }else{
    fail(question.id + " has unsupported type " + question.type);
  }
});

const rows = allocation();
const total = rows.reduce((sum, row) => sum + row.count, 0);
assert(total === config.questionCount, "exam allocation does not total 65");
rows.forEach(row => assert(row.count <= row.capacity, "domain " + row.domain + " allocation exceeds available questions"));

const attempt = buildAttempt();
assert(attempt.length === config.questionCount, "generated attempt is not 65 questions");
assert(new Set(attempt).size === attempt.length, "generated attempt contains duplicate questions");

if(!process.exitCode){
  console.log("Exam center validation passed");
  console.log("Questions:", questions.length);
  console.log("Domain allocation:", rows.map(row => `D${row.domain}:${row.count}`).join(" "));
  console.log("Excluded:", bank.excluded.length);
  console.log("Audit:", bank.distractorLengthBalancingAudit[0].status);
}
