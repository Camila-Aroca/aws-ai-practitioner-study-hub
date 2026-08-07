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
  "data/domains345.js",
  "data/study-hub.js"
].forEach(file => {
  vm.runInContext(fs.readFileSync(file, "utf8"), context, {filename:file});
});

const hub = context.window.HUB_DATA;
const guide = context.window.GUIDE_HIERARCHY;
const expected = [
  "3.1.1","3.1.2","3.1.3","3.1.4","3.1.5","3.1.6",
  "3.2.1","3.2.2","3.2.3","3.2.4","3.2.5",
  "3.3.1","3.3.2","3.3.3",
  "3.4.1","3.4.2","3.4.3","3.4.4","3.4.5",
  "4.1.1","4.1.2","4.1.3","4.1.4","4.1.5","4.1.6","4.1.7",
  "4.2.1","4.2.2","4.2.3","4.2.4",
  "5.1.1","5.1.2","5.1.3","5.1.4","5.1.5",
  "5.2.1","5.2.2","5.2.3"
];
const errors = [];
const counts = {};
let cards = 0;

if(!hub) errors.push("Missing HUB_DATA.");
if(!guide) errors.push("Missing GUIDE_HIERARCHY.");

function cardCount(round){
  if(round.cards) return round.cards.length;
  if(round.items) return round.items.length;
  if(round.concepts) return round.concepts.length * (round.slotTypes || [{key:"answer"}]).length;
  return round.questionCount || 0;
}

if(hub){
  hub.activities
    .filter(activity => activity.domain >= 3 && activity.domain <= 5 && activity.module === "hub-card-engine")
    .forEach(activity => {
      activity.rounds.forEach(round => {
        const h = round.hierarchy;
        if(!h) errors.push(`${activity.id}/${round.id} is missing hierarchy metadata`);
        if(h){
          counts[h.subtaskId] = (counts[h.subtaskId] || 0) + 1;
          if(!expected.includes(h.subtaskId)) errors.push(`${activity.id}/${round.id} has unexpected objective ${h.subtaskId}`);
          if(h.sourceSection.indexOf("Master Study Guide §" + h.subtaskId) !== 0) errors.push(`${activity.id}/${round.id} source section is not objective-specific`);
        }
        const total = cardCount(round);
        cards += total;
        if(total < 3) errors.push(`${activity.id}/${round.id} has fewer than 3 cards`);
        if(round.layout === "matrix" && (!round.table || !round.destinations || !round.cards)) errors.push(`${activity.id}/${round.id} matrix round missing table, destinations, or cards`);
        if(round.layout === "true-false" && (!round.cards || !round.cards.every(card => card.explanation))) errors.push(`${activity.id}/${round.id} true/false round needs explanations`);
        (round.cards || []).forEach(card => {
          if(!card.hierarchy) errors.push(`${activity.id}/${round.id}/${card.id} missing card hierarchy`);
          if(!String(card.text || "").trim()) errors.push(`${activity.id}/${round.id}/${card.id} has empty text`);
          if(!String(card.answer || "").trim()) errors.push(`${activity.id}/${round.id}/${card.id} has empty answer`);
        });
      });
    });
}

expected.forEach(objective => {
  if(!counts[objective]) errors.push(`Objective ${objective} has no dedicated Domain 3-5 activity`);
});

if(errors.length){
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${Object.keys(counts).length} Domain 3-5 objectives, ${Object.values(counts).reduce((a,b) => a + b, 0)} card sets, and ${cards} cards.`);
