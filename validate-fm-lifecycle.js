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
  "data/domain2-addendum.js",
  "data/study-hub.js"
].forEach(file => {
  vm.runInContext(fs.readFileSync(file, "utf8"), context, {filename:file});
});

const hub = context.window.HUB_DATA;
const activity = hub.activities.find(item => item.id === "domain2-genai-fundamentals");
const sequenceRound = activity && activity.rounds.find(item => item.id === "sequence");
const round = activity && activity.rounds.find(item => item.id === "fm-lifecycle-definitions");
const errors = [];
const expected = [
  ["c-d2-fm-life-def-01-data-selection", 1, "Data selection", "data-selection"],
  ["c-d2-fm-life-def-02-model-selection", 2, "Model selection", "model-selection"],
  ["c-d2-fm-life-def-03-pre-training", 3, "Pre-training", "pre-training"],
  ["c-d2-fm-life-def-04-fine-tuning", 4, "Fine-tuning", "fine-tuning"],
  ["c-d2-fm-life-def-05-evaluation", 5, "Evaluation", "evaluation"],
  ["c-d2-fm-life-def-06-deployment", 6, "Deployment", "deployment"],
  ["c-d2-fm-life-def-07-feedback", 7, "Feedback", "feedback"]
];

if(!activity) errors.push("Missing Domain 2 activity.");
if(!sequenceRound) errors.push("Missing original sequence-only round.");
if(sequenceRound && sequenceRound.id !== "sequence") errors.push("Original sequence-only round ID changed.");
if(!round) errors.push("Missing fm-lifecycle-definitions round.");

if(round){
  if(round.title !== "2.1.3 — Foundation Model Lifecycle Definitions") errors.push("Unexpected round title.");
  if(round.activity !== "match") errors.push("Round must use match activity.");
  if(round.checkLabel !== "Check definitions") errors.push("Missing Check definitions label.");
  if(!round.completionCallout || round.completionCallout.title !== "Remember for the exam") errors.push("Missing exam reminder callout.");
  if(!round.hierarchy || round.hierarchy.subtaskId !== "2.1.3") errors.push("Round must map to subtask 2.1.3.");
  if(!round.destinations || round.destinations.length !== 7) errors.push("Expected seven stage-name destinations.");
  if(!round.cards || round.cards.length !== 7) errors.push("Expected seven definition cards.");
  expected.forEach(([id, order, name, answer], index) => {
    const card = round.cards.find(item => item.id === id);
    if(!card) errors.push(`Missing card ${id}`);
    if(card){
      if(card.order !== order) errors.push(`${id} has order ${card.order}, expected ${order}`);
      if(card.answer !== answer) errors.push(`${id} answers ${card.answer}, expected ${answer}`);
      if(card.text.includes(name + " —")) errors.push(`${id} should contain the definition, not the stage name prompt`);
      if(card.text.length < 80) errors.push(`${id} definition is too short to teach the stage meaning`);
      if(!card.hierarchy || card.hierarchy.subtaskId !== "2.1.3") errors.push(`${id} missing 2.1.3 card hierarchy`);
    }
    const slot = round.destinations[index];
    if(!slot || slot.id !== answer) errors.push(`Slot ${index + 1} should be ${answer}`);
    if(slot && !slot.label.includes(name)) errors.push(`Slot ${index + 1} should display ${name}`);
  });
}

if(errors.length){
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Validated Objective 2.1.3 sequence-only set plus lifecycle definition-matching activity.");
