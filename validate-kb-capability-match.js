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
const round = activity && activity.rounds.find(item => item.id === "d3-313-bedrock-knowledge-bases");
const errors = [];

if(!round){
  errors.push("Missing Bedrock Knowledge Bases Capability Match round.");
}else{
  if(round.capacity !== "many") errors.push("Bedrock Knowledge Bases Capability Match must allow multiple cards per slot.");
  const destinations = (round.destinations || []).map(destination => destination.id).sort();
  if(JSON.stringify(destinations) !== JSON.stringify(["does","not"])) errors.push(`Expected does/not destinations, got ${destinations.join(", ")}`);
  const counts = (round.cards || []).reduce((acc, card) => {
    acc[card.answer] = (acc[card.answer] || 0) + 1;
    return acc;
  }, {});
  if((counts.does || 0) < 2) errors.push("The does slot needs multiple correct loose cards.");
  if((counts.not || 0) < 2) errors.push("The not slot needs multiple correct loose cards.");
}

if(errors.length){
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Validated Bedrock Knowledge Bases Capability Match multi-card slots.");
