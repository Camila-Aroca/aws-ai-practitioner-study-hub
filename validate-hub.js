const fs = require("fs");
const vm = require("vm");

const context = {window:{}};
context.window.window = context.window;
vm.createContext(context);

["data/domain1.js","data/legacy-activities.js","data/study-hub.js"].forEach(file => {
  vm.runInContext(fs.readFileSync(file, "utf8"), context, {filename:file});
});

const hub = context.window.HUB_DATA;
const errors = [];
const ids = new Set();
const required = ["id","domain","taskStatement","objectiveCodes","title","shortDescription","activityType","estimatedTime","difficulty","module","order","sourceFile","available","rounds"];

if(!hub) errors.push("Missing HUB_DATA.");
if(hub){
  hub.activities.forEach(activity => {
    required.forEach(field => {
      if(activity[field] === undefined || activity[field] === null || activity[field] === "") errors.push(`${activity.id || "(no id)"} missing ${field}`);
    });
    if(ids.has(activity.id)) errors.push(`Duplicate activity id: ${activity.id}`);
    ids.add(activity.id);
    if(!Number.isInteger(activity.domain) || activity.domain < 1 || activity.domain > 5) errors.push(`${activity.id} has invalid domain ${activity.domain}`);
    if(!activity.rounds.length) errors.push(`${activity.id} has no rounds`);
    const roundIds = new Set();
    activity.rounds.forEach(round => {
      if(roundIds.has(round.id)) errors.push(`${activity.id} duplicate round id ${round.id}`);
      roundIds.add(round.id);
      if(!round.cards && !round.items && !round.concepts) errors.push(`${activity.id}/${round.id} has no cards, items, or concepts`);
    });
  });
  const sorted = hub.activities.slice().sort((a,b) => a.order - b.order);
  sorted.forEach((activity, idx) => {
    if(idx && sorted[idx - 1].order === activity.order) errors.push(`Duplicate order ${activity.order}`);
  });
}

if(errors.length){
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${hub.activities.length} registered activities across ${hub.domains.length} domains.`);
