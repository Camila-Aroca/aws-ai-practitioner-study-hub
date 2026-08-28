(function(){
  "use strict";

  // Runs after study-hub.js (so window.HUB_DATA etc. already exist) and after every
  // data/i18n/es/*.js file (so the I18N_ES_* translation maps already exist), but before
  // app.js. Exposes window.applyLocale(lang), which app.js calls once at boot and again
  // every time the user toggles the language.
  //
  // Strategy: mutate the live data objects IN PLACE, using a WeakMap-based shadow of the
  // pristine English values so switching back to English is always an exact restore (no
  // upfront clone, no drift). Fields that also drive internal comparisons (taskStatement,
  // "Task "+code keys, question type, ids, answer keys) are never touched here - only
  // free-text fields are. Fields whose "correct" value is the text itself (matching /
  // ordering questions) are re-derived from the newly translated text so scoring keeps
  // working in Spanish.

  const data = window.HUB_DATA;
  if(!data){ return; }

  const originals = new WeakMap();
  function original(obj, field){
    let store = originals.get(obj);
    if(!store){ store = {}; originals.set(obj, store); }
    if(!(field in store)) store[field] = obj[field];
    return store[field];
  }

  let currentMode = "en";
  function set(obj, field, esValue){
    if(!obj) return;
    if(currentMode === "es"){
      if(esValue === undefined || esValue === null || esValue === "") return;
      original(obj, field);
      obj[field] = esValue;
    }else{
      const store = originals.get(obj);
      if(store && (field in store)) obj[field] = store[field];
    }
  }

  function lookup(map, key){
    return map && Object.prototype.hasOwnProperty.call(map, key) ? map[key] : undefined;
  }

  // ---------- enum dictionaries (shared small vocab, applied wherever the field appears) ----------
  function enumSet(obj, field, category){
    if(!obj) return;
    const enums = window.I18N_ES_ENUMS || {};
    const table = enums[category] || {};
    const en = original(obj, field);
    set(obj, field, lookup(table, en));
  }

  // ---------- guidedExamples <-> practice-item linkage, computed once from pristine data ----------
  const guidedExampleLinks = new WeakMap(); // example object -> source practice item
  (window.DOMAIN1_REINFORCEMENT_UNITS || []).forEach(unit => {
    (unit.guidedExamples || []).forEach(example => {
      const source = (unit.practice || []).find(item => item.stem === example.scenario);
      if(source) guidedExampleLinks.set(example, source);
    });
  });

  // ---------- closestDistractor <-> option linkage, computed once from pristine data ----------
  const closestDistractorLinks = new WeakMap(); // item object -> option object
  function linkClosestDistractor(item){
    if(!item || !item.closestDistractor || !item.options) return;
    const match = item.options.find(option => option.text === item.closestDistractor);
    if(match) closestDistractorLinks.set(item, match);
  }
  (window.DOMAIN1_REINFORCEMENT_UNITS || []).forEach(unit => {
    (unit.practice || []).concat(unit.checkpoint || []).forEach(linkClosestDistractor);
  });

  // ---------- domains ----------
  function applyDomains(){
    const map = window.I18N_ES_DOMAINS || {};
    (data.domains || []).forEach(domain => {
      const row = lookup(map, "domain-" + domain.number) || {};
      set(domain, "title", row.title);
      set(domain, "description", row.description);
    });
  }

  // ---------- guide hierarchy ----------
  function applyGuideHierarchy(){
    const map = window.I18N_ES_GUIDE_HIERARCHY || {};
    const gh = data.guideHierarchy;
    if(!gh) return;
    (gh.domains || []).forEach(domain => {
      const drow = lookup(map, "gdomain:" + domain.domainId) || {};
      set(domain, "title", drow.title);
      (domain.tasks || []).forEach(task => {
        const trow = lookup(map, "gtask:" + task.taskId) || {};
        set(task, "taskTitle", trow.taskTitle);
        // task.subtasks[].subtaskTitle is a separate string COPY made at build time from
        // guideHierarchy.subtaskTitles[id], not a live reference - it needs its own pass.
        (task.subtasks || []).forEach(subtask => {
          const srow = lookup(map, "gsubtask:" + subtask.subtaskId) || {};
          set(subtask, "subtaskTitle", srow.title);
        });
      });
    });
    if(gh.subtaskTitles){
      Object.keys(gh.subtaskTitles).forEach(id => {
        const row = lookup(map, "gsubtask:" + id) || {};
        set(gh.subtaskTitles, id, row.title);
      });
    }
  }

  // ---------- activities + rounds ----------
  function applyRoundHierarchyMeta(hierarchy){
    if(!hierarchy) return;
    enumSet(hierarchy, "difficulty", "difficulty");
    enumSet(hierarchy, "priority", "priority");
    enumSet(hierarchy, "cardType", "cardType");
  }

  function applyRound(activityId, round, roundsMap){
    const rk = activityId + "::" + round.id;
    const row = lookup(roundsMap, rk) || {};
    set(round, "title", row.title);
    set(round, "instructions", row.instructions);
    set(round, "sourceNote", row.sourceNote);
    set(round, "footnote", row.footnote);
    set(round, "slotLabel", row.slotLabel);
    set(round, "checkLabel", row.checkLabel);
    set(round, "intro", row.intro);
    if(round.completionCallout){
      set(round.completionCallout, "title", row.completionCalloutTitle);
      set(round.completionCallout, "text", row.completionCalloutText);
    }
    applyRoundHierarchyMeta(round.hierarchy);

    if(round.table){
      const tableMap = window.I18N_ES_MATRIX_TABLES || {};
      const tRow = lookup(tableMap, rk + "::rowHeader") || {};
      set(round.table, "rowHeader", tRow.text);
      (round.table.columns || []).forEach(col => {
        const cRow = lookup(tableMap, rk + "::col:" + col.id) || {};
        set(col, "label", cRow.label);
      });
      (round.table.rows || []).forEach(tr => {
        const rRow = lookup(tableMap, rk + "::row:" + tr.id) || {};
        set(tr, "label", rRow.label);
      });
    }

    (round.destinations || []).forEach(dest => {
      const drow = lookup(roundsMap, rk + "::dest:" + dest.id) || {};
      set(dest, "label", drow.label);
      set(dest, "sub", drow.sub);
    });
    (round.cards || []).forEach(card => {
      const crow = lookup(roundsMap, rk + "::card:" + card.id) || {};
      set(card, "text", crow.text);
      set(card, "explanation", crow.explanation);
      applyRoundHierarchyMeta(card.hierarchy);
    });
    (round.targets || []).forEach(target => {
      const trow = lookup(roundsMap, rk + "::target:" + target.id) || {};
      set(target, "name", trow.name);
      set(target, "label", trow.name);
      set(target, "sub", trow.sub);
    });
    (round.items || []).forEach(item => {
      if(typeof item === "string") return;
      const irow = lookup(roundsMap, rk + "::item:" + item.id) || {};
      set(item, "text", irow.text);
    });
    (round.slotTypes || []).forEach(st => {
      const srow = lookup(roundsMap, rk + "::slottype:" + st.key) || {};
      set(st, "label", srow.label);
    });
    (round.concepts || []).forEach(concept => {
      const conRow = lookup(roundsMap, rk + "::concept:" + concept.id) || {};
      Object.keys(conRow).forEach(field => set(concept, field, conRow[field]));
    });
  }

  function applyActivities(){
    const actMap = window.I18N_ES_ACTIVITIES || {};
    const roundsMap = window.I18N_ES_ROUNDS || {};
    (data.activities || []).forEach(activity => {
      const row = lookup(actMap, "activity:" + activity.id) || {};
      set(activity, "title", row.title);
      set(activity, "shortDescription", row.shortDescription);
      set(activity, "activityType", row.activityType);
      // taskStatement is intentionally NOT translated on the data object - app.js's
      // taskStatementLabel() translates it only at render time, because the English
      // value is also used for internal matching (see renderGuideTask).
      enumSet(activity, "difficulty", "difficulty");
      enumSet(activity, "estimatedTime", "estimatedTime");
      (activity.rounds || []).forEach(round => applyRound(activity.id, round, roundsMap));
    });
  }

  // ---------- domain 2 addendum overview object (separate from the registered activity) ----------
  function applyAddendum(){
    const addendum = data.domain2Addendum;
    if(!addendum) return;
    const meta = window.I18N_ES_ADDENDUM_META || {};
    set(addendum, "title", currentMode === "es" ? "Dominio 2 — Addendum" : undefined);
    set(addendum, "description", meta.description);
    (addendum.groups || []).forEach(group => {
      const title = meta.groups ? meta.groups[group.id] : undefined;
      set(group, "title", title);
    });
  }

  // ---------- reinforcement units ----------
  function applyRapidReview(unitId, unit, map){
    const rr = unit.rapidReview;
    if(!rr) return;
    const summaryRow = lookup(map, "unit:" + unitId + "::rapidReview") || {};
    set(rr, "summary", summaryRow.summary);
    (rr.table || []).forEach((row, i) => {
      row.forEach((cell, j) => {
        const cellRow = lookup(map, "unit:" + unitId + "::rapidReview::table:" + i + ":" + j) || {};
        if(currentMode === "es" && cellRow.text){ original(row, j); row[j] = cellRow.text; }
        else if(currentMode === "en"){ const store = originals.get(row); if(store && (j in store)) row[j] = store[j]; }
      });
    });
    (rr.clues || []).forEach((_, i) => {
      const row = lookup(map, "unit:" + unitId + "::rapidReview::clue:" + i) || {};
      if(currentMode === "es" && row.text){ original(rr.clues, i); rr.clues[i] = row.text; }
      else if(currentMode === "en"){ const store = originals.get(rr.clues); if(store && (i in store)) rr.clues[i] = store[i]; }
    });
    (rr.traps || []).forEach((_, i) => {
      const row = lookup(map, "unit:" + unitId + "::rapidReview::trap:" + i) || {};
      if(currentMode === "es" && row.text){ original(rr.traps, i); rr.traps[i] = row.text; }
      else if(currentMode === "en"){ const store = originals.get(rr.traps); if(store && (i in store)) rr.traps[i] = store[i]; }
    });
    (rr.comparisons || []).forEach((pair, i) => {
      const row = lookup(map, "unit:" + unitId + "::rapidReview::comparison:" + i) || {};
      if(currentMode === "es"){
        if(row.label){ original(pair, 0); pair[0] = row.label; }
        if(row.text){ original(pair, 1); pair[1] = row.text; }
      }else{
        const store = originals.get(pair);
        if(store && (0 in store)) pair[0] = store[0];
        if(store && (1 in store)) pair[1] = store[1];
      }
    });
  }

  function applyReinforcementItem(item, map){
    const row = lookup(map, "item:" + item.id) || {};
    set(item, "stem", row.stem);
    set(item, "explanation", row.explanation);
    set(item, "decidingClue", row.decidingClue);
    set(item, "whyClosestDistractorIsWrong", row.whyClosestDistractorIsWrong);
    (item.options || []).forEach(opt => {
      const orow = lookup(map, "item:" + item.id + "::opt:" + opt.id) || {};
      set(opt, "text", orow.text);
    });
    // closestDistractor is derived from the linked option's (now-translated) text, not
    // translated independently, so it always stays consistent with the option it names.
    const linkedOption = closestDistractorLinks.get(item);
    set(item, "closestDistractor", linkedOption ? linkedOption.text : undefined);
  }

  function applyGuidedExample(example){
    const source = guidedExampleLinks.get(example);
    if(!source) return;
    set(example, "scenario", source.stem);
    set(example, "workload", currentMode === "es" ? source.stem.split(".")[0] + "." : undefined);
    set(example, "clues", source.decidingClue);
    const correctOption = (source.options || []).find(o => source.correctAnswers && source.correctAnswers[0] === o.id);
    set(example, "answer", correctOption ? correctOption.text : undefined);
    set(example, "whyCorrect", source.explanation);
    set(example, "closestAlternative", source.closestDistractor);
    set(example, "whyAlternativeFails", source.whyClosestDistractorIsWrong);
  }

  function applyReinforcement(){
    const map = window.I18N_ES_REINFORCEMENT || {};
    (window.DOMAIN1_REINFORCEMENT_UNITS || []).forEach(unit => {
      const row = lookup(map, "unit:" + unit.id) || {};
      set(unit, "title", row.title);
      set(unit, "shortTitle", row.shortTitle);
      set(unit, "weakArea", row.weakArea);
      set(unit, "reason", row.reason);
      // taskStatement intentionally not translated on the data object (see applyActivities).
      enumSet(unit, "difficulty", "difficulty");
      enumSet(unit, "estimatedTime", "estimatedTime");
      applyRapidReview(unit.id, unit, map);
      const seen = new Set();
      (unit.practice || []).concat(unit.checkpoint || []).forEach(item => {
        if(seen.has(item.id)) return;
        seen.add(item.id);
        applyReinforcementItem(item, map);
      });
      (unit.guidedExamples || []).forEach(applyGuidedExample);
    });
  }

  // ---------- question banks (shared shape for Domain1 exam, CYU bank, supplemental) ----------
  function applyMcMrFields(question, row){
    set(question, "stem", row.stem);
    set(question, "explanation", row.explanation);
    set(question, "takeaway", row.takeaway);
    set(question, "sequenceLogic", row.sequenceLogic);
    set(question, "decisiveDetail", row.decisiveDetail);
  }

  function applyDomain1Questions(){
    const map = window.I18N_ES_DOMAIN1_QUESTIONS || {};
    (window.DOMAIN1_QUESTIONS || []).forEach(question => {
      const row = lookup(map, "q:" + question.id) || {};
      set(question, "stem", row.stem);
      set(question, "explanation", row.explanation);
      (question.options || []).forEach(opt => {
        const orow = lookup(map, "q:" + question.id + "::opt:" + opt.id) || {};
        set(opt, "text", orow.text);
      });
      if(question.distractorExplanations){
        Object.keys(question.distractorExplanations).forEach(key => {
          const drow = lookup(map, "q:" + question.id + "::distractor:" + key) || {};
          set(question.distractorExplanations, key, drow.text);
        });
      }
    });
  }

  // Pristine (pre-translation) snapshots for the positional ordering/matching source
  // arrays, captured once at module load - used only to compute index lookups, never
  // mutated themselves.
  const orderingSourceCache = new WeakMap();
  const orderingFieldCache = new WeakMap();
  function cacheOrderingSource(question){
    const field = question.items && question.items.length ? "items" : question.orderItems && question.orderItems.length ? "orderItems" : "correctOrder";
    const sourceArr = question[field];
    if(!sourceArr || !sourceArr.length) return;
    orderingSourceCache.set(question, sourceArr.slice());
    orderingFieldCache.set(question, field);
  }
  ((window.CYU_QUESTION_BANK || {}).questions || []).filter(q => q.type === "ordering").forEach(cacheOrderingSource);
  (window.APPROVED_SUPPLEMENTAL_QUESTIONS || []).filter(q => q.type === "ordering").forEach(cacheOrderingSource);

  function applyOrderingDerivation(question, map){
    const englishSource = orderingSourceCache.get(question);
    const field = orderingFieldCache.get(question);
    if(!englishSource || !field) return;
    const englishCorrectOrder = original(question, "correctOrder");
    if(currentMode === "es"){
      const translated = englishSource.map((text, i) => {
        const row = lookup(map, "q:" + question.id + "::orderitem:" + i) || {};
        return row.text || text;
      });
      set(question, field, translated);
      if(Array.isArray(englishCorrectOrder) && englishCorrectOrder.length){
        const newOrder = englishCorrectOrder.map(text => {
          const idx = englishSource.indexOf(text);
          return idx >= 0 ? translated[idx] : text;
        });
        set(question, "correctOrder", newOrder);
        set(question, "correctRaw", newOrder.join("  →  "));
      }
    }else{
      set(question, field, undefined);
      set(question, "correctOrder", undefined);
      set(question, "correctRaw", undefined);
    }
  }

  function applyMatchingDerivation(question, map){
    if(!question.matchingPrompts || !question.matchingPrompts.length) return;
    const englishPrompts = original(question, "matchingPrompts");
    const englishOptions = original(question, "matchingOptions");
    const englishCorrectMatches = original(question, "correctMatches");
    if(currentMode === "es"){
      const translatedPrompts = englishPrompts.map((text, i) => {
        const row = lookup(map, "q:" + question.id + "::matchprompt:" + i) || {};
        return row.text || text;
      });
      const translatedOptions = (englishOptions || []).map((text, i) => {
        const row = lookup(map, "q:" + question.id + "::matchoption:" + i) || {};
        return row.text || text;
      });
      set(question, "matchingPrompts", translatedPrompts);
      set(question, "matchingOptions", translatedOptions);
      if(Array.isArray(englishCorrectMatches)){
        const newMatches = englishCorrectMatches.map(entry => {
          const pIdx = englishPrompts.indexOf(entry.prompt);
          const aIdx = (englishOptions || []).indexOf(entry.answer);
          return {
            prompt: pIdx >= 0 ? translatedPrompts[pIdx] : entry.prompt,
            answer: aIdx >= 0 ? translatedOptions[aIdx] : entry.answer
          };
        });
        set(question, "correctMatches", newMatches);
      }
    }else{
      set(question, "matchingPrompts", undefined);
      set(question, "matchingOptions", undefined);
      set(question, "correctMatches", undefined);
    }
  }

  function applyQuestionBank(questions, map){
    (questions || []).forEach(question => {
      const row = lookup(map, "q:" + question.id) || {};
      applyMcMrFields(question, row);
      (question.options || []).forEach(opt => {
        const orow = lookup(map, "q:" + question.id + "::opt:" + opt.id) || {};
        set(opt, "text", orow.text);
      });
      if(question.incorrectOptionExplanations){
        Object.keys(question.incorrectOptionExplanations).forEach(key => {
          const irow = lookup(map, "q:" + question.id + "::incorrect:" + key) || {};
          set(question.incorrectOptionExplanations, key, irow.text);
        });
      }
      if(question.type === "ordering") applyOrderingDerivation(question, map);
      if(question.type === "matching") applyMatchingDerivation(question, map);
    });
  }

  // ---------- public entry point ----------
  window.applyLocale = function(lang){
    currentMode = lang === "es" ? "es" : "en";
    applyDomains();
    applyGuideHierarchy();
    applyActivities();
    applyAddendum();
    applyReinforcement();
    applyDomain1Questions();
    applyQuestionBank((window.CYU_QUESTION_BANK || {}).questions, window.I18N_ES_CYU || {});
    applyQuestionBank(window.APPROVED_SUPPLEMENTAL_QUESTIONS, window.I18N_ES_SUPPLEMENTAL || {});
  };
})();
