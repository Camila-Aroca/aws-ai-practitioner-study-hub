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
const round = activity && activity.rounds.find(item => item.id === "d3-314-vector-store-table");
const errors = [];

if(!round){
  errors.push("Missing AWS Vector Store Table round.");
}else{
  const columns = (round.table && round.table.columns || []).map(column => column.label);
  const expectedColumns = ["Vector capability", "Choose it when..."];
  if(JSON.stringify(columns) !== JSON.stringify(expectedColumns)) errors.push(`Vector table columns changed: ${columns.join(", ")}`);
  if((round.cards || []).length !== 8) errors.push(`Vector table should have 8 loose cards, got ${(round.cards || []).length}.`);
  const text = (round.cards || []).map(card => card.text).join("\n");
  [
    "Vector engine with k-NN search, including OpenSearch Serverless. The default vector store for Bedrock Knowledge Bases.",
    "You want a purpose-built search and vector engine, and hybrid keyword plus semantic search.",
    "Vector storage and similarity search through the pgvector extension.",
    "You already run Aurora and want vectors beside your relational data. Newly added to the in-scope list in v1.1.",
    "Vector storage and search through pgvector.",
    "You need a managed PostgreSQL vector store without Aurora.",
    "Graph database with vector search over graph data (Neptune Analytics).",
    "Relationships between entities matter as much as semantic similarity."
  ].forEach(expected => {
    if(!text.includes(expected)) errors.push(`Missing source table text: ${expected}`);
  });
  if(text.includes("Distinguishing feature")) errors.push("Vector table should not include a Distinguishing feature card.");
  const rows = (round.table && round.table.rows || []).map(row => row.label);
  ["Amazon OpenSearch Service", "Amazon Aurora (PostgreSQL-compatible)", "Amazon RDS for PostgreSQL", "Amazon Neptune"].forEach(service => {
    if(!rows.includes(service)) errors.push(`Missing service row: ${service}`);
  });
}

if(errors.length){
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Validated AWS Vector Store Table against source Table 3.3 shape and wording.");
