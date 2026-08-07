const fs = require("fs");
const vm = require("vm");

const context = {window:{}};
context.window.window = context.window;
vm.createContext(context);

[
  "data/guide-hierarchy.js",
  "data/domains345.js"
].forEach(file => {
  vm.runInContext(fs.readFileSync(file, "utf8"), context, {filename:file});
});

const activity = context.window.DOMAINS_345_ACTIVITIES.find(item => item.id === "domain3-source-structure-games");
const round = activity && activity.rounds.find(item => item.id === "d3-316-agent-assistant-workflow");
const errors = [];

if(!round){
  errors.push("Missing Agent, Assistant, or Fixed Workflow round.");
}else{
  if(round.capacity !== "many") errors.push("Agent, Assistant, or Fixed Workflow must allow multiple cards per slot.");
  const counts = (round.cards || []).reduce((acc, card) => {
    acc[card.answer] = (acc[card.answer] || 0) + 1;
    return acc;
  }, {});
  if((counts.agent || 0) < 2) errors.push("Agent slot needs multiple correct loose cards.");
  if((counts.assistant || 0) < 2) errors.push("Assistant slot needs multiple correct loose cards.");
  if((round.destinations || []).length !== 3) errors.push("Expected Agent, Assistant, and Fixed workflow destinations.");
}

if(errors.length){
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Validated Agent, Assistant, or Fixed Workflow multi-card slots.");
