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
const cardIds = new Set();
const cardPairs = new Set();
const supportedTypes = new Set(["Definition","Service identification","Use case","Scenario","Comparison","Feature recognition","Exam clue","Mixed review"]);

if(!hub) errors.push("Missing HUB_DATA.");
if(!guide) errors.push("Missing GUIDE_HIERARCHY.");

const subtasks = new Set();
if(guide){
  guide.domains.filter(domain => domain.number === 1 || domain.number === 2).forEach(domain => {
    domain.tasks.forEach(task => {
      task.subtasks.forEach(subtask => subtasks.add(subtask.subtaskId));
    });
  });
}

function cardsFor(round){
  if(round.cards) return round.cards.map(card => ({id:card.id, front:card.text, back:card.answer || (card.answers || []).join("|"), raw:card}));
  if(round.items) return round.items.map(card => ({id:card.id, front:card.text, back:card.target || (card.targets || []).join("|"), raw:card}));
  if(round.concepts){
    const slotTypes = round.slotTypes || [{key:"answer"}];
    return round.concepts.flatMap(concept => slotTypes.map(type => ({
      id:concept.id + "|" + type.key,
      front:concept.name + " — " + (type.label || type.key),
      back:concept[type.key],
      raw:concept
    })));
  }
  return [];
}

if(hub){
  hub.activities.filter(activity => (activity.domain === 1 || activity.domain === 2) && activity.module === "hub-card-engine").forEach(activity => {
    (activity.rounds || []).forEach(round => {
      if(!round.hierarchy) errors.push(`${activity.id}/${round.id} missing hierarchy metadata`);
      if(round.hierarchy){
        ["domainId","domainTitle","taskId","taskTitle","subtaskId","subtaskTitle","cardSetId","cardSetTitle","cardType","difficulty","tags","sourceSection"].forEach(field => {
          if(round.hierarchy[field] === undefined || round.hierarchy[field] === null || round.hierarchy[field] === "") errors.push(`${activity.id}/${round.id} hierarchy missing ${field}`);
        });
        if(!subtasks.has(round.hierarchy.subtaskId)) errors.push(`${activity.id}/${round.id} references nonexistent subtask ${round.hierarchy.subtaskId}`);
        if(!supportedTypes.has(round.hierarchy.cardType)) errors.push(`${activity.id}/${round.id} unsupported card type ${round.hierarchy.cardType}`);
      }
      const cards = cardsFor(round);
      if(!cards.length) errors.push(`${activity.id}/${round.id} is an empty card set`);
      cards.forEach(card => {
        const stableId = `${activity.id}/${round.id}/${card.id}`;
        if(cardIds.has(stableId)) errors.push(`Duplicate card id ${stableId}`);
        cardIds.add(stableId);
        if(!String(card.front || "").trim()) errors.push(`${stableId} has empty front`);
        if(!String(card.back || "").trim()) errors.push(`${stableId} has empty back`);
        const pair = `${String(card.front || "").trim().toLowerCase()}|||${String(card.back || "").trim().toLowerCase()}`;
        if(cardPairs.has(pair)) errors.push(`Duplicate front/back pair: ${card.front}`);
        cardPairs.add(pair);
        if(!card.raw.hierarchy) errors.push(`${stableId} missing card hierarchy metadata`);
      });
    });
  });
}

if(errors.length){
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated guide hierarchy metadata for ${cardIds.size} Domain 1/2 cards across ${subtasks.size} guide subtasks.`);
