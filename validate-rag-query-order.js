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
const round = activity && activity.rounds.find(item => item.id === "d3-313-rag-query-order");
const errors = [];
const expectedStages = ["Ingestion", "Query", "Retrieval", "Augmentation", "Generation"];
const expectedSnippets = [
  "Documents are collected, chunked into passages, converted to embeddings",
  "The user question is embedded with the same embedding model",
  "A similarity search finds the nearest passages",
  "The retrieved passages are inserted into the prompt as context",
  "The foundation model answers using the supplied context"
];

if(!round){
  errors.push("Missing d3-313-rag-query-order.");
}else{
  if(round.title !== "RAG Query Order") errors.push("RAG Query Order title changed.");
  if(!round.concepts || round.concepts.length !== 5) errors.push("RAG Query Order must have five RAG stages.");
  const labels = (round.destinations || []).map(destination => destination.label);
  const expectedLabels = ["RAG stage 1", "RAG stage 2", "RAG stage 3", "RAG stage 4", "RAG stage 5"];
  if(JSON.stringify(labels) !== JSON.stringify(expectedLabels)) errors.push(`Destination labels must be neutral RAG stage labels: ${labels.join(", ")}`);
  const slotLabels = (round.slotTypes || []).map(slot => slot.label);
  if(JSON.stringify(slotLabels) !== JSON.stringify(["Stage name", "What it consists of"])) errors.push(`Slot labels changed: ${slotLabels.join(", ")}`);
  (round.concepts || []).forEach((concept, index) => {
    if(concept.stageName !== expectedStages[index]) errors.push(`Stage ${index + 1} should be ${expectedStages[index]}, got ${concept.stageName}`);
    if(!String(concept.whatConsists || "").includes(expectedSnippets[index])) errors.push(`Stage ${index + 1} explanation does not match guide diagram.`);
    if(!concept.hierarchy || concept.hierarchy.subtaskId !== "3.1.3") errors.push(`Stage ${index + 1} missing 3.1.3 hierarchy metadata.`);
  });
}

if(errors.length){
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Validated RAG Query Order as a two-slot RAG pipeline diagram activity.");
