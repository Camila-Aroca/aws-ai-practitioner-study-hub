const fs = require("fs");
const vm = require("vm");

const source = fs.readFileSync("data/domain1.js", "utf8");
const context = {window:{}};
vm.createContext(context);
vm.runInContext(source, context);

const domain = context.window.STUDY_DATA.domains.find(item => item.id === "domain-1");
const requiredObjectives = ["1.1.1","1.1.2","1.1.3","1.1.4","1.1.5","1.2.1","1.2.2","1.2.3","1.2.4","1.2.5","1.2.6"];
const errors = [];
const cardIds = new Set();

function slotTypes(round){
  return round.slotTypes || [{key:"answer"}];
}

function expectedFor(destination, type){
  return type.key === "answer" ? destination.id : destination.id + "|" + type.key;
}

if(!domain) errors.push("Missing domain-1 data.");

const objectives = new Set(domain.rounds.map(round => round.objective));
requiredObjectives.forEach(objective => {
  if(!objectives.has(objective)) errors.push(`Missing objective ${objective}`);
});

domain.rounds.forEach(round => {
  if(!round.id || !round.title || !round.activity) errors.push(`Round missing metadata: ${round.id || "(no id)"}`);
  const expectedSlots = new Set();
  slotTypes(round).forEach(type => {
    round.destinations.forEach(destination => expectedSlots.add(expectedFor(destination, type)));
  });
  const answers = new Set();
  round.cards.forEach(card => {
    if(cardIds.has(card.id)) errors.push(`Duplicate card id: ${card.id}`);
    cardIds.add(card.id);
    if(!card.answer) errors.push(`Card missing answer: ${card.id}`);
    if(!expectedSlots.has(card.answer)) errors.push(`Card ${card.id} points at missing slot ${card.answer}`);
    answers.add(card.answer);
  });
  if(round.activity !== "sort"){
    expectedSlots.forEach(slot => {
      if(!answers.has(slot)) errors.push(`Round ${round.id} has empty expected slot ${slot}`);
    });
  }
});

if(errors.length){
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${domain.rounds.length} rounds, ${cardIds.size} unique cards, and ${requiredObjectives.length} objectives.`);
