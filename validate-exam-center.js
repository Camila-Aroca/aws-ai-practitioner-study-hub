#!/usr/bin/env node

const crypto = require("crypto");

global.window = global;
require("./data/guide-hierarchy.js");
require("./data/exam-center/cyu-question-bank.js");
require("./data/exam-center/supplemental-approved-question-bank.js");

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
assert(Array.isArray(global.APPROVED_SUPPLEMENTAL_QUESTIONS), "approved supplemental question list is missing");
assert(global.APPROVED_SUPPLEMENTAL_QUESTIONS.length === 10, "expected exactly 10 approved supplemental questions");

questions.forEach(question => {
  assert(!ids.has(question.id), "duplicate question id " + question.id);
  ids.add(question.id);
  assert(!stems.has(question.stem), "duplicate stem: " + question.stem);
  stems.add(question.stem);
  assert(question.sourceType === "master-study-guide-cyu" || question.sourceType === "supplemental-approved", question.id + " has unsupported source type");
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

const supplemental = questions.filter(question => question.sourceType === "supplemental-approved");
assert(supplemental.length === 10, "bank should contain exactly 10 supplemental-approved questions");
supplemental.forEach(question => {
  assert(question.domain === 3, question.id + " is not mapped to Domain 3");
  assert(question.task === "3.2", question.id + " is not mapped to Task 3.2");
  assert(question.objective === "3.2.2", question.id + " is not mapped to Objective 3.2.2");
  assert(question.type === "multiple-choice", question.id + " should remain multiple-choice");
  assert(question.options.length === 4, question.id + " should keep four provided answer choices");
});

const expectedSupplementalAnswers = {
  "supplemental-3-2-2-q1":"c",
  "supplemental-3-2-2-q2":"b",
  "supplemental-3-2-2-q3":"d",
  "supplemental-3-2-2-q4":"a",
  "supplemental-3-2-2-q5":"c",
  "supplemental-3-2-2-q6":"b",
  "supplemental-3-2-2-q7":"d",
  "supplemental-3-2-2-q8":"a",
  "supplemental-3-2-2-q9":"c",
  "supplemental-3-2-2-q10":"b"
};
const expectedSupplementalHashes = {
  "supplemental-3-2-2-q1":"23055815e44b6c5429669d56c04e1cbedb263d0c2ff17b43f2fef3acf53dbf43",
  "supplemental-3-2-2-q2":"2591525e85bfeb81e71c1a5e5403bf528bc37d4b9b3ae3025644ef580359ce09",
  "supplemental-3-2-2-q3":"c6126b6121e462df786335d0839857ea87e27290071b3e58a8c6af5964440083",
  "supplemental-3-2-2-q4":"ee4319f4a30475abd202ccd697031f526b285934996a7c27de478e1395bb05de",
  "supplemental-3-2-2-q5":"67c944feb4934ac552c9f577568a630c3d12e3cb5125fb63b4045f5f2b2369d9",
  "supplemental-3-2-2-q6":"f3793454ede5d75a06eefa7f4f4cafd7a55010353fcf8befba631aad19bbcefc",
  "supplemental-3-2-2-q7":"207fdd378ae9fe951f6ddd70dcc50d8f3cbd14f873adb5ee6e74b859c79dccd2",
  "supplemental-3-2-2-q8":"ce0cd62f58e1eb8c85072ede40a1a5a36bd4d4ebbb108d0684fc50e0b903c338",
  "supplemental-3-2-2-q9":"b16de82abbe1bc4001169f39585618ff315a4bbc76c539a2634ae840704206e8",
  "supplemental-3-2-2-q10":"b5d6895a1a2de3aae6c29e8008911fabacad4bdd054cf6de56380d5f62fe34c5"
};
Object.entries(expectedSupplementalAnswers).forEach(([id, answer]) => {
  const question = questions.find(item => item.id === id);
  assert(question, id + " is missing from the bank");
  assert(question.correctAnswers.length === 1 && question.correctAnswers[0] === answer, id + " correct answer changed");
  const hash = crypto.createHash("sha256").update(JSON.stringify({
    stem:question.stem,
    options:question.options,
    correctAnswers:question.correctAnswers,
    explanation:question.explanation,
    takeaway:question.takeaway,
    difficulty:question.difficulty,
    objective:question.objective,
    domain:question.domain,
    task:question.task
  })).digest("hex");
  assert(hash === expectedSupplementalHashes[id], id + " approved wording, explanation, answer choices, or metadata changed");
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
  console.log("Supplemental approved:", supplemental.length);
  console.log("Audit:", bank.distractorLengthBalancingAudit[0].status);
}
