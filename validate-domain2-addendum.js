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
const addendum = context.window.DOMAIN2_ADDENDUM;
const activity = context.window.DOMAIN2_ADDENDUM_ACTIVITY;
const errors = [];
const validObjectives = new Set(["2.1.1","2.1.2","2.1.3","2.1.4","2.1.5","2.1.6","2.2.3","2.3.1","2.3.4"]);
const requiredMappings = [
  ["Discriminative vs Generative Comparison", "matrix"],
  ["Latent Space: True or False", "true-false"],
  ["GAN Training Order", ""],
  ["GAN Components", "matrix"],
  ["FM Lifecycle Order", ""],
  ["FM Stage Definitions", ""],
  ["Real-Life Activity to FM Stage", ""],
  ["AWS Activity to FM Stage", ""],
  ["Bedrock Pricing Comparison", "matrix"],
  ["Conversation Context Table", "matrix"],
  ["RAG Query Path", ""],
  ["S3, Embeddings, and Vector Store", "matrix"],
  ["SLM vs LLM Comparison", "matrix"],
  ["Bedrock Feature Purpose Matching", ""],
  ["Bedrock, SageMaker AI, or JumpStart?", ""],
  ["AWS Service Purpose Matching", ""],
  ["PartyRock: What It Is and Is Not", "matrix"],
  ["Quick, Q Business, and Kiro Names", "matrix"]
];
const bannedSlotLabels = [
  "Provider-heavy stage",
  "Practitioner-facing step",
  "Supporting role",
  "Concept layer",
  "Operational pattern",
  "Lifecycle bridge"
];

function countRound(round){
  if(round.cards) return round.cards.length;
  if(round.items) return round.items.length;
  const types = round.slotTypes || [{key:"answer"}];
  return (round.concepts || []).length * types.length;
}

if(!addendum) errors.push("Missing DOMAIN2_ADDENDUM.");
if(!activity) errors.push("Missing DOMAIN2_ADDENDUM_ACTIVITY.");
if(hub && !hub.domain2Addendum) errors.push("HUB_DATA missing domain2Addendum registry.");
if(hub && !hub.activities.some(item => item.id === "domain2-addendum")) errors.push("HUB_DATA does not register addendum activity.");

if(activity){
  if(activity.available !== false) errors.push("Addendum activity must be hidden from original Domain 2 lists.");
  if(!activity.hiddenFromDashboard) errors.push("Addendum activity must be hidden from regular dashboard stats.");
  if(activity.module === "hub-card-engine") errors.push("Addendum should use a custom module label so guide validators do not place it in original Domain 2.");
  if(activity.rounds.length < 25) errors.push(`Expected at least 25 direct-source addendum card sets, found ${activity.rounds.length}.`);

  const roundIds = new Set();
  const cardIds = new Set();
  const frontBack = new Set();
  const titles = new Set(activity.rounds.map(round => round.title));
  requiredMappings.forEach(([title, layout]) => {
    const found = activity.rounds.find(round => round.title === title);
    if(!found) errors.push(`Missing required direct-source set: ${title}`);
    if(found && layout && found.layout !== layout) errors.push(`${title} should use ${layout} interaction`);
  });

  activity.rounds.forEach((round, index) => {
    if(roundIds.has(round.id)) errors.push(`Duplicate round id: ${round.id}`);
    roundIds.add(round.id);
    if(round.order !== index + 1) errors.push(`${round.id} order ${round.order}, expected ${index + 1}`);
    if(!round.objectiveCodes || !round.objectiveCodes.length) errors.push(`${round.id} missing objectiveCodes`);
    (round.objectiveCodes || []).forEach(objective => {
      if(!validObjectives.has(objective)) errors.push(`${round.id} invalid objective ${objective}`);
    });
    if(!round.hierarchy || round.hierarchy.sectionId !== "domain-2-addendum") errors.push(`${round.id} missing addendum hierarchy metadata`);
    if(!round.sourceNote || !round.sourceNote.includes("Domain 2 Gap-Filling Addendum")) errors.push(`${round.id} missing addendum source note`);
    if(!round.destinations || !round.destinations.length) errors.push(`${round.id} has no destinations`);
    if(!countRound(round)) errors.push(`${round.id} is empty`);
    if(round.layout === "matrix"){
      if(!round.table || !round.table.rows || !round.table.columns) errors.push(`${round.id} matrix missing source table metadata`);
      const expectedCells = (round.table.rows || []).length * (round.table.columns || []).length;
      if(round.cards.length !== expectedCells) errors.push(`${round.id} should have one card per source table cell`);
    }
    if(round.layout === "true-false"){
      if(round.activity !== "true-false") errors.push(`${round.id} true/false layout should use true-false activity`);
      round.cards.forEach(card => {
        if(card.answer !== "true" && card.answer !== "false") errors.push(`${round.id}/${card.id} true/false card has invalid answer ${card.answer}`);
        if(!card.explanation) errors.push(`${round.id}/${card.id} missing source reason explanation`);
      });
    }
    const slotText = (round.destinations || []).map(dest => `${dest.label} ${dest.sub}`).join(" ");
    bannedSlotLabels.forEach(label => {
      if(slotText.includes(label)) errors.push(`${round.id} uses banned invented slot label ${label}`);
    });

    (round.cards || []).forEach(card => {
      const stable = `${round.id}/${card.id}`;
      if(cardIds.has(stable)) errors.push(`Duplicate card id ${stable}`);
      cardIds.add(stable);
      if(!String(card.text || "").trim()) errors.push(`${stable} empty text`);
      if(!String(card.answer || "").trim()) errors.push(`${stable} empty answer`);
      if(!round.destinations.some(dest => dest.id === card.answer)) errors.push(`${stable} answer ${card.answer} has no destination`);
      ["domainId","sectionId","sourceObjectiveId","cardSetId","cardId","cardType","difficulty","priority","tags","source","isAddendum","distractorBoundary"].forEach(field => {
        if(card[field] === undefined || card[field] === null || card[field] === "") errors.push(`${stable} missing ${field}`);
      });
      if(card.domainId !== 2 || card.sectionId !== "domain-2-addendum" || card.isAddendum !== true) errors.push(`${stable} has invalid addendum metadata`);
      card.sourceObjectiveId.split(",").forEach(objective => {
        if(!validObjectives.has(objective)) errors.push(`${stable} invalid source objective ${objective}`);
      });
      if(card.legacyName && !card.currentName) errors.push(`${stable} has legacyName without currentName guidance`);
      if(/always requires Provisioned Throughput/i.test(card.text) && !/older|outdated|obsolete/i.test(card.distractorBoundary + " " + (card.explanation || "") + " " + card.legacyName)) errors.push(`${stable} teaches outdated Provisioned Throughput wording without a boundary`);
      if(/guarantees no privacy risk/i.test(card.text) && !/reject|guarantee|privacy|false/i.test(card.distractorBoundary + " " + (card.explanation || ""))) errors.push(`${stable} synthetic-data overclaim lacks boundary`);
      const pair = `${card.text.trim().toLowerCase()}|||${String(card.answer).trim().toLowerCase()}`;
      if(frontBack.has(pair)) errors.push(`Duplicate card front/answer pair: ${card.text}`);
      frontBack.add(pair);
    });
  });

  const grouped = new Set((addendum.groups || []).flatMap(group => group.roundIds));
  activity.rounds.forEach(round => {
    if(!grouped.has(round.id)) errors.push(`${round.id} missing from addendum sidebar groups`);
  });
}

if(errors.length){
  console.error(errors.join("\n"));
  process.exit(1);
}

const totalCards = activity.rounds.reduce((sum, round) => sum + countRound(round), 0);
console.log(`Validated Domain 2 Addendum: ${activity.rounds.length} sets, ${totalCards} cards, ${addendum.groups.length} sidebar groups.`);
