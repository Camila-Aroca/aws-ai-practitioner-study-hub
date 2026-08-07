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
const rounds = activity ? activity.rounds : [];
const ladderIndex = rounds.findIndex(round => round.id === "d3-315-cost-ladder");
const useWhenIndex = rounds.findIndex(round => round.id === "d3-315-customization-use-when");
const round = rounds[useWhenIndex];
const errors = [];

if(ladderIndex < 0) errors.push("Missing Customization Cost Ladder.");
if(useWhenIndex < 0) errors.push("Missing Customization Approach: Use When.");
if(ladderIndex >= 0 && useWhenIndex !== ladderIndex + 1) errors.push("Customization Use When set must appear immediately after Customization Cost Ladder.");

if(round){
  if(round.hierarchy.subtaskId !== "3.1.5") errors.push("Customization Use When must belong to objective 3.1.5.");
  if(round.slotLabel !== "Use when") errors.push("Customization Use When slot label must be 'Use when'.");
  const slots = (round.destinations || []).map(slot => slot.label);
  ["Prompt engineering","RAG","Model distillation","Fine-tuning","Continued pre-training","Pre-training from scratch"].forEach(label => {
    if(!slots.includes(label)) errors.push(`Missing approach destination: ${label}`);
  });
  const cards = (round.cards || []).map(card => card.text);
  [
    "Fast behavior and formatting improvements.",
    "Fresh, private, or source-cited knowledge.",
    "High-volume narrow tasks needing lower latency or cost.",
    "Persistent style, format, or task behavior.",
    "Deep domain language adaptation.",
    "Rare cases with massive data, compute, and model ownership needs."
  ].forEach(text => {
    if(!cards.includes(text)) errors.push(`Missing use-when card: ${text}`);
  });
  if((round.cards || []).length !== 6) errors.push(`Expected 6 use-when cards, got ${(round.cards || []).length}.`);
}

if(errors.length){
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Validated Customization Approach: Use When placement and cards.");
