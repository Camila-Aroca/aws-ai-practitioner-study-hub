#!/usr/bin/env node
// Coverage validator for the EN/ES localization layer. Mirrors the read-only vm-loading
// pattern used by validate-hub.js. Confirms: every English UI string and content field that
// needs a Spanish translation has one (non-empty); no unexpected/renamed keys exist in the ES
// maps; and the ES maps never define an id/answer-key/type field (the structural guarantee
// that keeps scoring logic untouched by translation - see data/i18n/apply-locale.js).

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = __dirname;
const errors = [];
function fail(message){ errors.push(message); }
function assert(condition, message){ if(!condition) fail(message); }

function loadContext(files){
  const context = {window:{}, console};
  context.window.window = context.window;
  vm.createContext(context);
  files.forEach(f => vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), context, {filename:f}));
  return context;
}

const en = loadContext([
  "data/domain1.js",
  "data/legacy-activities.js",
  "data/guide-hierarchy.js",
  "data/exams/domain1-exam-config.js",
  "data/exams/domain1-question-bank.js",
  "data/exam-center/cyu-question-bank.js",
  "data/exam-center/supplemental-approved-question-bank.js",
  "data/reinforcement/domain1-reinforcement.js",
  "data/domain2-addendum.js",
  "data/domains345.js",
  "data/study-hub.js"
]);

const esFiles = fs.readdirSync(path.join(ROOT, "data/i18n/es")).filter(f => f.endsWith(".js")).sort().map(f => "data/i18n/es/" + f);
const es = loadContext(["data/i18n/ui-strings.js"].concat(esFiles));

const hub = en.window.HUB_DATA;
const w = en.window;
const ew = es.window;

// ---------- UI chrome strings ----------
const uiEn = (ew.UI_STRINGS || {}).en || {};
const uiEs = (ew.UI_STRINGS || {}).es || {};
Object.keys(uiEn).forEach(key => {
  if(uiEs[key] === undefined) fail("UI_STRINGS.es missing key: " + key);
  else if(String(uiEs[key]).trim() === "") fail("UI_STRINGS.es has empty value for key: " + key);
});
Object.keys(uiEs).forEach(key => {
  if(uiEn[key] === undefined) fail("UI_STRINGS.es has unexpected extra key not in English: " + key);
});

// ---------- generic coverage checker ----------
// Walks an EN id -> {field: text} manifest (built the same way extract-i18n-sources.js does)
// and checks it against a loaded I18N_ES_* map.
function checkCoverage(label, enManifest, esMap){
  esMap = esMap || {};
  let checked = 0;
  Object.keys(enManifest).forEach(key => {
    const enFields = enManifest[key];
    const esRow = esMap[key];
    if(!esRow){
      fail(label + ": missing ES entry for " + key);
      return;
    }
    Object.keys(enFields).forEach(field => {
      const enVal = enFields[field];
      if(enVal === undefined || enVal === null || String(enVal).trim() === "") return; // nothing to translate
      checked++;
      const esVal = esRow[field];
      if(esVal === undefined || esVal === null || String(esVal).trim() === ""){
        fail(label + ": " + key + " missing/empty ES field '" + field + "'");
      }
    });
  });
  Object.keys(esMap).forEach(key => {
    if(!enManifest[key]) fail(label + ": ES has unexpected extra key not in English: " + key);
  });
  return checked;
}

function put(bucket, key, fields){
  const clean = {};
  Object.keys(fields).forEach(k => {
    const v = fields[k];
    if(v === undefined || v === null) return;
    if(typeof v === "string" && v.trim() === "") return;
    clean[k] = v;
  });
  if(Object.keys(clean).length) bucket[key] = clean;
}

// ---------- domains, guide hierarchy, enum values, addendum meta ----------
const domainsManifest = {};
(hub.domains || []).forEach(d => put(domainsManifest, "domain-" + d.number, {title:d.title, description:d.description}));
checkCoverage("domains", domainsManifest, ew.I18N_ES_DOMAINS);

const guideManifest = {};
const gh = hub.guideHierarchy || w.GUIDE_HIERARCHY;
(gh.domains || []).forEach(d => {
  put(guideManifest, "gdomain:" + d.domainId, {title:d.title});
  (d.tasks || []).forEach(t => put(guideManifest, "gtask:" + t.taskId, {taskTitle:t.taskTitle}));
});
Object.keys(gh.subtaskTitles || {}).forEach(id => put(guideManifest, "gsubtask:" + id, {title:gh.subtaskTitles[id]}));
checkCoverage("guide-hierarchy", guideManifest, ew.I18N_ES_GUIDE_HIERARCHY);

// ---------- activities + rounds (+ matrix tables) ----------
const activitiesManifest = {};
const roundsManifest = {};
const matrixManifest = {};

function walkRound(activity, round){
  const rk = activity.id + "::" + round.id;
  put(roundsManifest, rk, {
    title: round.title, instructions: round.instructions, sourceNote: round.sourceNote,
    footnote: round.footnote, slotLabel: round.slotLabel, checkLabel: round.checkLabel, intro: round.intro,
    completionCalloutTitle: round.completionCallout && round.completionCallout.title,
    completionCalloutText: round.completionCallout && round.completionCallout.text
  });
  (round.destinations || []).forEach(dest => put(roundsManifest, rk + "::dest:" + dest.id, {label:dest.label, sub:dest.sub}));
  (round.cards || []).forEach(card => put(roundsManifest, rk + "::card:" + card.id, {text:card.text, explanation:card.explanation}));
  (round.targets || []).forEach(target => put(roundsManifest, rk + "::target:" + target.id, {name:target.name || target.label, sub:target.sub}));
  (round.items || []).forEach(item => { if(typeof item !== "string") put(roundsManifest, rk + "::item:" + item.id, {text:item.text}); });
  (round.slotTypes || []).forEach(st => put(roundsManifest, rk + "::slottype:" + st.key, {label:st.label}));
  (round.concepts || []).forEach(concept => {
    const fields = {};
    Object.keys(concept).forEach(k => { if(k !== "id" && typeof concept[k] === "string") fields[k] = concept[k]; });
    put(roundsManifest, rk + "::concept:" + concept.id, fields);
  });
  if(round.table){
    put(matrixManifest, rk + "::rowHeader", {text:round.table.rowHeader});
    (round.table.columns || []).forEach(c => put(matrixManifest, rk + "::col:" + c.id, {label:c.label}));
    (round.table.rows || []).forEach(r => put(matrixManifest, rk + "::row:" + r.id, {label:r.label}));
  }
}

(hub.activities || []).forEach(activity => {
  put(activitiesManifest, "activity:" + activity.id, {
    title: activity.title, shortDescription: activity.shortDescription, activityType: activity.activityType
  });
  (activity.rounds || []).forEach(round => walkRound(activity, round));
});
checkCoverage("activities", activitiesManifest, ew.I18N_ES_ACTIVITIES);
checkCoverage("rounds", roundsManifest, ew.I18N_ES_ROUNDS);
checkCoverage("matrix-tables", matrixManifest, ew.I18N_ES_MATRIX_TABLES);

// ---------- reinforcement units ----------
const reinforcementManifest = {};
(w.DOMAIN1_REINFORCEMENT_UNITS || []).forEach(unit => {
  put(reinforcementManifest, "unit:" + unit.id, {title:unit.title, shortTitle:unit.shortTitle, weakArea:unit.weakArea, reason:unit.reason});
  if(unit.rapidReview){
    const rr = unit.rapidReview;
    put(reinforcementManifest, "unit:" + unit.id + "::rapidReview", {summary:rr.summary});
    (rr.table || []).forEach((row, i) => row.forEach((cell, j) => put(reinforcementManifest, "unit:" + unit.id + "::rapidReview::table:" + i + ":" + j, {text:cell})));
    (rr.clues || []).forEach((c, i) => put(reinforcementManifest, "unit:" + unit.id + "::rapidReview::clue:" + i, {text:c}));
    (rr.traps || []).forEach((c, i) => put(reinforcementManifest, "unit:" + unit.id + "::rapidReview::trap:" + i, {text:c}));
    (rr.comparisons || []).forEach((pair, i) => put(reinforcementManifest, "unit:" + unit.id + "::rapidReview::comparison:" + i, {label:pair[0], text:pair[1]}));
  }
  const seen = new Set();
  (unit.practice || []).concat(unit.checkpoint || []).forEach(item => {
    if(seen.has(item.id)) return;
    seen.add(item.id);
    put(reinforcementManifest, "item:" + item.id, {stem:item.stem, explanation:item.explanation, decidingClue:item.decidingClue, whyClosestDistractorIsWrong:item.whyClosestDistractorIsWrong});
    (item.options || []).forEach(opt => put(reinforcementManifest, "item:" + item.id + "::opt:" + opt.id, {text:opt.text}));
  });
});
checkCoverage("reinforcement", reinforcementManifest, ew.I18N_ES_REINFORCEMENT);

// ---------- domain1 exam question bank ----------
const d1qManifest = {};
(w.DOMAIN1_QUESTIONS || []).forEach(q => {
  put(d1qManifest, "q:" + q.id, {stem:q.stem, explanation:q.explanation});
  (q.options || []).forEach(opt => put(d1qManifest, "q:" + q.id + "::opt:" + opt.id, {text:opt.text}));
  Object.keys(q.distractorExplanations || {}).forEach(k => put(d1qManifest, "q:" + q.id + "::distractor:" + k, {text:q.distractorExplanations[k]}));
});
checkCoverage("domain1-question-bank", d1qManifest, ew.I18N_ES_DOMAIN1_QUESTIONS);

// ---------- CYU + supplemental question banks ----------
function walkCyu(list, manifest){
  (list || []).forEach(q => {
    put(manifest, "q:" + q.id, {stem:q.stem, explanation:q.explanation, takeaway:q.takeaway, sequenceLogic:q.sequenceLogic, decisiveDetail:q.decisiveDetail});
    (q.options || []).forEach(opt => put(manifest, "q:" + q.id + "::opt:" + opt.id, {text:opt.text}));
    Object.keys(q.incorrectOptionExplanations || {}).forEach(k => put(manifest, "q:" + q.id + "::incorrect:" + k, {text:q.incorrectOptionExplanations[k]}));
    if(q.type === "ordering" && Array.isArray(q.items) && q.items.length){
      q.items.forEach((text, i) => put(manifest, "q:" + q.id + "::orderitem:" + i, {text}));
    }
    if(q.type === "matching"){
      (q.matchingPrompts || []).forEach((text, i) => put(manifest, "q:" + q.id + "::matchprompt:" + i, {text}));
      (q.matchingOptions || []).forEach((text, i) => put(manifest, "q:" + q.id + "::matchoption:" + i, {text}));
    }
    // Structural guarantee: the question's own answer-key fields must never appear as
    // translatable keys anyone could accidentally overlay - checked directly, not via manifest.
  });
}
const cyuManifest = {};
walkCyu((w.CYU_QUESTION_BANK || {}).questions, cyuManifest);
checkCoverage("cyu-question-bank", cyuManifest, ew.I18N_ES_CYU);

const supplementalManifest = {};
walkCyu(w.APPROVED_SUPPLEMENTAL_QUESTIONS, supplementalManifest);
checkCoverage("supplemental-question-bank", supplementalManifest, ew.I18N_ES_SUPPLEMENTAL);

// ---------- structural guarantee: ES maps never carry id/answer-key/type fields ----------
const forbiddenFields = ["id", "correctAnswers", "correctOrder", "correctMatches", "type", "questionType", "answer", "answers", "target", "targets"];
[ew.I18N_ES_CYU, ew.I18N_ES_SUPPLEMENTAL, ew.I18N_ES_DOMAIN1_QUESTIONS, ew.I18N_ES_ROUNDS, ew.I18N_ES_REINFORCEMENT].forEach((map, idx) => {
  const label = ["I18N_ES_CYU","I18N_ES_SUPPLEMENTAL","I18N_ES_DOMAIN1_QUESTIONS","I18N_ES_ROUNDS","I18N_ES_REINFORCEMENT"][idx];
  Object.keys(map || {}).forEach(key => {
    const row = map[key];
    forbiddenFields.forEach(field => {
      if(Object.prototype.hasOwnProperty.call(row, field)) fail(label + "." + key + " illegally defines '" + field + "' - translation maps must never touch answer-key/id/type fields");
    });
  });
});

// ---------- enum dictionary coverage (values actually used anywhere in the data) ----------
const enums = ew.I18N_ES_ENUMS || {};
const usedEnumValues = {difficulty:new Set(), priority:new Set(), cardType:new Set(), activityType:new Set(), estimatedTime:new Set()};
(hub.activities || []).forEach(a => {
  if(a.difficulty) usedEnumValues.difficulty.add(a.difficulty);
  if(a.activityType) usedEnumValues.activityType.add(a.activityType);
  if(a.estimatedTime) usedEnumValues.estimatedTime.add(a.estimatedTime);
  (a.rounds || []).forEach(r => {
    if(r.hierarchy){
      if(r.hierarchy.difficulty) usedEnumValues.difficulty.add(r.hierarchy.difficulty);
      if(r.hierarchy.priority) usedEnumValues.priority.add(r.hierarchy.priority);
      if(r.hierarchy.cardType) usedEnumValues.cardType.add(r.hierarchy.cardType);
    }
    (r.cards || []).forEach(c => c.hierarchy && ["difficulty","priority","cardType"].forEach(f => c.hierarchy[f] && usedEnumValues[f].add(c.hierarchy[f])));
  });
});
(w.DOMAIN1_REINFORCEMENT_UNITS || []).forEach(u => {
  if(u.difficulty) usedEnumValues.difficulty.add(u.difficulty);
  if(u.estimatedTime) usedEnumValues.estimatedTime.add(u.estimatedTime);
});
Object.keys(usedEnumValues).forEach(category => {
  const table = enums[category] || {};
  usedEnumValues[category].forEach(value => {
    if(!table[value] || String(table[value]).trim() === "") fail("I18N_ES_ENUMS." + category + " missing/empty translation for value: " + JSON.stringify(value));
  });
});

// ---------- report ----------
if(errors.length){
  console.error(errors.length + " i18n coverage problem(s):");
  errors.slice(0, 200).forEach(e => console.error(" - " + e));
  if(errors.length > 200) console.error(" ... and " + (errors.length - 200) + " more");
  process.exitCode = 1;
}else{
  console.log("i18n coverage validation passed");
  console.log("UI strings checked:", Object.keys(uiEn).length);
  console.log("Domains:", Object.keys(domainsManifest).length, "Guide hierarchy entries:", Object.keys(guideManifest).length);
  console.log("Activities:", Object.keys(activitiesManifest).length, "Rounds/cards/etc entries:", Object.keys(roundsManifest).length);
  console.log("Matrix table headers:", Object.keys(matrixManifest).length);
  console.log("Reinforcement entries:", Object.keys(reinforcementManifest).length);
  console.log("Domain1 exam entries:", Object.keys(d1qManifest).length);
  console.log("CYU bank entries:", Object.keys(cyuManifest).length, "Supplemental entries:", Object.keys(supplementalManifest).length);
}
