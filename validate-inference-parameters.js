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
const errors = [];

function fail(message){
  errors.push(message);
}

if(!activity){
  fail("Missing Domain 3 source-structure activity.");
}else{
  const tableIndex = activity.rounds.findIndex(round => round.id === "d3-312-inference-parameter-table");
  const scenarioIndex = activity.rounds.findIndex(round => round.id === "d3-312-inference-parameters-in-practice");
  const table = activity.rounds[tableIndex];
  const scenario = activity.rounds[scenarioIndex];

  if(!table) fail("Missing Inference Parameter Table.");
  if(!scenario) fail("Missing Inference Parameters in Practice.");
  if(table && scenario && scenarioIndex !== tableIndex + 1) fail("Scenario activity must appear immediately after the table.");

  if(table){
    const labels = (table.table && table.table.columns || []).map(column => column.label);
    const expected = ["What it controls", "Raise it to", "Lower it to"];
    if(JSON.stringify(labels) !== JSON.stringify(expected)) fail(`Inference table columns changed: ${labels.join(", ")}`);
    if(table.layout !== "matrix") fail("Inference table must remain a matrix table.");

    const byDestination = new Map(table.cards.map(card => [card.answer, card.text]));
    const text = table.cards.map(card => card.text).join(" ").toLowerCase();
    ["accuracy", "factual reliability", "truthfulness", "grounding"].forEach(term => {
      if(text.includes(term)) fail(`Temperature table wording should not imply ${term}.`);
    });
    if(!/cumulative probability threshold/i.test(byDestination.get("top-p-controls") || "")) fail("Top-p controls cell must teach cumulative probability threshold.");
    if(!/broader probability mass/i.test(byDestination.get("top-p-raise") || "")) fail("Top-p raise cell must teach broader probability mass.");
    if(!/narrower probability mass/i.test(byDestination.get("top-p-lower") || "")) fail("Top-p lower cell must teach narrower probability mass.");
    if(!/fixed number/i.test(byDestination.get("top-k-controls") || "")) fail("Top-k controls cell must teach fixed number.");
    if(!/larger fixed number/i.test(byDestination.get("top-k-raise") || "")) fail("Top-k raise cell must teach larger fixed number.");
    if(!/smaller fixed number/i.test(byDestination.get("top-k-lower") || "")) fail("Top-k lower cell must teach smaller fixed number.");
    if(!/hard cap/i.test(byDestination.get("max-output-controls") || "")) fail("Maximum output length must teach hard token cap.");
    if(!/cost and latency/i.test(byDestination.get("max-output-lower") || "")) fail("Lower maximum output length must connect to cost and latency.");
    if(!/strings or patterns/i.test(byDestination.get("stop-controls") || "")) fail("Stop sequences must teach strings or patterns.");
    if(!/configured rather than increased/i.test(byDestination.get("stop-raise") || "")) fail("Stop sequences raise cell must explain configuration rather than increase.");
    if(!/defined structural boundary/i.test(byDestination.get("stop-lower") || "")) fail("Stop sequences lower cell must explain clean boundary termination.");
  }

  if(scenario){
    if(scenario.title !== "Inference Parameters in Practice") fail("Scenario title changed.");
    if(scenario.cardType && scenario.cardType !== "Scenario") fail("Scenario set should be typed as Scenario.");
    if((scenario.cards || []).length !== 10) fail("Scenario set should contain 10 required cards.");
    const labels = (scenario.destinations || []).map(destination => destination.label.toLowerCase());
    (scenario.cards || []).forEach(card => {
      const lower = card.text.toLowerCase();
      labels.forEach(label => {
        if(lower.includes(label)) fail(`Scenario card leaks destination label "${label}": ${card.text}`);
      });
      ["cumulative probability threshold", "top-p", "top-k", "use the top"].forEach(leak => {
        if(lower.includes(leak)) fail(`Scenario card uses obvious terminology "${leak}": ${card.text}`);
      });
    });
    const answerCounts = scenario.cards.reduce((counts, card) => {
      counts[card.answer] = (counts[card.answer] || 0) + 1;
      return counts;
    }, {});
    ["lower-temperature","raise-temperature","top-p","top-k","lower-max-output","raise-max-output","stop-sequence"].forEach(answer => {
      if(!answerCounts[answer]) fail(`Scenario set missing answer ${answer}.`);
    });
  }
}

if(errors.length){
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Validated Inference Parameter Table structure, corrected terminology, and scenario-card design.");
