(function(){
  "use strict";

  const STORAGE_KEY = "aif-c01-study-hub-progress";
  const OLD_DOMAIN1_KEY = "aif-c01-domain1-card-match-progress-v1";
  const data = window.HUB_DATA;
  const activities = data.activities;

  const els = {
    app: document.getElementById("app"),
    sidebar: document.getElementById("sidebar"),
    menu: document.getElementById("menuButton"),
    reset: document.getElementById("resetProgress")
  };

  let progress = loadProgress();
  let activeActivity = null;
  let activeRoundId = null;
  let held = null;
  let checked = false;
  let revealedThisAttempt = false;

  function loadProgress(){
    let stored = null;
    try{ stored = JSON.parse(localStorage.getItem(STORAGE_KEY)); }catch(err){}
    const next = stored && stored.version ? stored : {version:1,lastOpenedActivity:null,activities:{}};
    migrateOldDomain1(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    return next;
  }

  function migrateOldDomain1(next){
    if(next.migratedDomain1) return;
    let old = null;
    try{ old = JSON.parse(localStorage.getItem(OLD_DOMAIN1_KEY)); }catch(err){}
    if(old && old.rounds){
      next.activities["domain1-task11-12"] = next.activities["domain1-task11-12"] || {rounds:{}};
      Object.entries(old.rounds).forEach(([roundId, r]) => {
        next.activities["domain1-task11-12"].rounds[roundId] = {
          bestScore:r.bestScore || 0,
          lastScore:r.bestScore || 0,
          total:totalForRound(findActivity("domain1-task11-12").rounds.find(round => round.id === roundId)),
          attempts:r.completed ? 1 : 0,
          completed:!!r.completed,
          mastered:!!r.mastered,
          revealed:!!r.revealed,
          lastCompletedDate:r.completed ? new Date().toISOString() : null
        };
      });
    }
    next.migratedDomain1 = true;
  }

  function saveProgress(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  function findActivity(id){
    return activities.find(activity => activity.id === id);
  }

  function activityProgress(activityId){
    progress.activities[activityId] = progress.activities[activityId] || {rounds:{}};
    progress.activities[activityId].rounds = progress.activities[activityId].rounds || {};
    return progress.activities[activityId];
  }

  function roundProgress(activityId, roundId){
    const ap = activityProgress(activityId);
    ap.rounds[roundId] = ap.rounds[roundId] || {bestScore:0,lastScore:0,total:0,attempts:0,completed:false,mastered:false,revealed:false,lastCompletedDate:null};
    return ap.rounds[roundId];
  }

  function activityStats(activity){
    const rounds = activity.rounds || [];
    const states = rounds.map(round => roundProgress(activity.id, round.id));
    const mastered = states.filter(state => state.mastered).length;
    const completed = states.filter(state => state.completed || state.mastered).length;
    const revealed = states.some(state => state.revealed) && mastered < rounds.length;
    const attempts = states.reduce((sum,state) => sum + (state.attempts || 0), 0);
    const best = states.reduce((sum,state,idx) => {
      const total = state.total || totalForRound(rounds[idx]);
      return sum + (total ? (state.bestScore || 0) / total : 0);
    }, 0);
    return {
      mastered,
      completed,
      attempts,
      revealed,
      totalRounds:rounds.length,
      bestPercent:rounds.length ? Math.round((best / rounds.length) * 100) : 0,
      status: mastered === rounds.length ? "Mastered" : completed ? "In progress" : revealed ? "Revealed" : attempts ? "In progress" : "Not started"
    };
  }

  function domainActivities(number){
    return activities.filter(activity => activity.domain === number && activity.available !== false).sort((a,b) => a.order - b.order);
  }

  function route(){
    const hash = location.hash || "#/home";
    renderSidebar();
    if(hash.startsWith("#/domain/")){
      renderDomain(Number(hash.split("/")[2]));
    }else if(hash.startsWith("#/activity/")){
      renderActivity(hash.split("/")[2], hash.split("/")[3]);
    }else{
      renderHome();
    }
    els.sidebar.classList.remove("is-open");
    els.menu.setAttribute("aria-expanded","false");
    els.app.focus({preventScroll:true});
  }

  function setRoute(path){
    location.hash = path;
  }

  function renderSidebar(){
    els.sidebar.innerHTML = "";
    const home = navLink("#/home", "Home");
    els.sidebar.appendChild(home);
    data.domains.forEach(domain => {
      const group = document.createElement("section");
      group.className = "nav-domain";
      const link = navLink("#/domain/" + domain.number, "Domain " + domain.number);
      group.appendChild(link);
      const list = document.createElement("div");
      list.className = "nav-activities";
      domainActivities(domain.number).forEach(activity => {
        const a = navLink("#/activity/" + activity.id, activity.title);
        a.classList.add("nav-activity");
        list.appendChild(a);
      });
      group.appendChild(list);
      els.sidebar.appendChild(group);
    });
  }

  function navLink(href, text){
    const a = document.createElement("a");
    a.href = href;
    a.textContent = text;
    if(location.hash === href || (!location.hash && href === "#/home")) a.setAttribute("aria-current","page");
    return a;
  }

  function renderHome(){
    activeActivity = null;
    const total = activities.length;
    const mastered = activities.filter(activity => activityStats(activity).status === "Mastered").length;
    const completed = activities.filter(activity => activityStats(activity).completed > 0).length;
    const recent = recentlyCompleted();
    const weak = weakAreas();
    const continueActivity = findContinueActivity();

    els.app.innerHTML = `
      <section class="hero-panel">
        <p class="objective-label">Study dashboard</p>
        <h2>Choose the next useful thing to study.</h2>
        <p>Track progress across the integrated local activities, continue where you left off, or jump into weak areas that need another pass.</p>
        <div class="hero-actions">
          <button class="act" id="continueBtn" type="button">${continueActivity ? "Continue studying" : "Start studying"}</button>
          <button class="act ghost" id="reviewBtn" type="button">Review weak areas</button>
        </div>
      </section>
      <section class="summary-grid" aria-label="Overall progress">
        <div class="summary-card"><span>Activities mastered</span><b>${mastered} / ${total}</b></div>
        <div class="summary-card"><span>Activities started</span><b>${completed} / ${total}</b></div>
        <div class="summary-card"><span>Overall progress</span><b>${Math.round((mastered / total) * 100)}%</b></div>
      </section>
      <section class="page-section">
        <h2>Domains</h2>
        <div class="domain-grid">${data.domains.map(domainCard).join("")}</div>
      </section>
      <section class="two-col">
        <div class="page-section">
          <h2>Review weak areas</h2>
          ${weak.length ? activityList(weak) : `<p class="muted">No weak areas yet. Complete or check an activity and this will become useful.</p>`}
        </div>
        <div class="page-section">
          <h2>Recently completed</h2>
          ${recent.length ? activityList(recent) : `<p class="muted">Completed activities will appear here.</p>`}
        </div>
      </section>
    `;
    document.getElementById("continueBtn").addEventListener("click", () => {
      setRoute("#/activity/" + (continueActivity ? continueActivity.id : activities[0].id));
    });
    document.getElementById("reviewBtn").addEventListener("click", () => {
      const first = weak[0] || activities[0];
      setRoute("#/activity/" + first.id);
    });
    wireRouteButtons();
  }

  function domainCard(domain){
    const acts = domainActivities(domain.number);
    const mastered = acts.filter(activity => activityStats(activity).status === "Mastered").length;
    return `<article class="domain-card">
      <p class="objective-label">Domain ${domain.number}</p>
      <h3>${domain.title}</h3>
      <p>${domain.description}</p>
      <div class="progress-bar" aria-label="${mastered} of ${acts.length} activities mastered"><span style="width:${acts.length ? mastered / acts.length * 100 : 0}%"></span></div>
      <p class="domain-meta">${mastered} / ${acts.length} mastered${acts.length ? "" : " · More activities coming later"}</p>
      <button class="act ghost route-button" data-route="#/domain/${domain.number}" type="button">Open domain</button>
    </article>`;
  }

  function renderDomain(number){
    activeActivity = null;
    const domain = data.domains.find(item => item.number === number);
    const acts = domainActivities(number);
    if(!domain){ renderHome(); return; }
    els.app.innerHTML = `
      <section class="page-section">
        <p class="objective-label">Domain ${domain.number}</p>
        <h2>${domain.title}</h2>
        <p class="muted">${domain.description}</p>
        ${acts.length ? groupedActivities(acts) : `<p class="source-note">More activities coming later.</p>`}
      </section>
    `;
    wireRouteButtons();
  }

  function groupedActivities(acts){
    const groups = {};
    acts.forEach(activity => {
      groups[activity.taskStatement] = groups[activity.taskStatement] || [];
      groups[activity.taskStatement].push(activity);
    });
    return Object.entries(groups).map(([task, list]) => `
      <section class="task-group">
        <h3>${task}</h3>
        <div class="activity-list">${list.map(activityCard).join("")}</div>
      </section>
    `).join("");
  }

  function activityCard(activity){
    const stats = activityStats(activity);
    return `<article class="activity-card">
      <div>
        <p class="objective-label">${activity.objectiveCodes.join(", ")} · ${activity.activityType}</p>
        <h4>${activity.title}</h4>
        <p>${activity.shortDescription}</p>
        <p class="domain-meta">${activity.rounds.length} rounds · ${countCards(activity)} cards/questions · ${activity.estimatedTime} · ${activity.difficulty}</p>
      </div>
      <div class="activity-status">
        <span class="status-pill">${stats.status}</span>
        <span>Best ${stats.bestPercent}%</span>
        <button class="act route-button" data-route="#/activity/${activity.id}" type="button">Open</button>
      </div>
    </article>`;
  }

  function renderActivity(activityId, roundId){
    const activity = findActivity(activityId);
    if(!activity){ renderHome(); return; }
    activeActivity = activity;
    progress.lastOpenedActivity = activity.id;
    saveProgress();
    activeRoundId = roundId && activity.rounds.some(round => round.id === roundId) ? roundId : activity.rounds[0].id;
    checked = false;
    revealedThisAttempt = false;
    held = null;

    const round = currentRound();
    const nav = activityNav(activity);
    els.app.innerHTML = `
      <section class="activity-shell">
        <header class="activity-header">
          <div>
            <p class="objective-label">Domain ${activity.domain} · ${activity.taskStatement} · ${activity.objectiveCodes.join(", ")}</p>
            <h2>${activity.title}</h2>
            <p>${activity.shortDescription}</p>
          </div>
          <div class="activity-links">
            <button class="link-button route-button" data-route="#/home" type="button">Dashboard</button>
            <button class="link-button route-button" data-route="#/domain/${activity.domain}" type="button">Back to domain</button>
          </div>
        </header>
        <nav class="activity-nav" aria-label="Activity sequence">
          ${nav.prev ? `<button class="act ghost route-button" data-route="#/activity/${nav.prev.id}" type="button">Previous activity</button>` : ""}
          ${nav.next ? `<button class="act ghost route-button" data-route="#/activity/${nav.next.id}" type="button">Next activity</button>` : ""}
        </nav>
        <nav class="rounds" id="roundTabs" role="tablist" aria-label="Rounds">${activity.rounds.map(roundTab).join("")}</nav>
        <section class="round-panel">
          <div class="round-title-row">
            <div>
              <p class="objective-label">${activity.activityType}</p>
              <h3 id="roundTitle">${round.title}</h3>
            </div>
            <div class="round-progress" id="roundProgress"></div>
          </div>
          <p class="round-intro" id="roundIntro"></p>
          <p class="source-note" id="sourceNote"></p>
        </section>
        <div class="bank-head">
          <h3>Loose cards</h3>
          <span class="hint">Click a card, then click a slot. Dragging works too. Click a placed card to send it back.</span>
        </div>
        <div class="bank" id="bank" aria-label="Unplaced cards"></div>
        <div class="board" id="board"></div>
        <div class="controls">
          <button class="act" id="btnCheck" type="button">Check answers</button>
          <button class="act ghost" id="btnShuffle" type="button">Shuffle loose cards</button>
          <button class="act ghost" id="btnClear" type="button">Clear board</button>
          <button class="act ghost" id="btnReveal" type="button">Reveal answers</button>
        </div>
        <section class="feedback" aria-live="polite">
          <p class="verdict" id="verdict"></p>
          <div class="explanations" id="explanations" hidden></div>
        </section>
      </section>
    `;
    wireRouteButtons();
    document.querySelectorAll(".round-tab").forEach(tab => tab.addEventListener("click", () => setRoute("#/activity/" + activity.id + "/" + tab.dataset.round)));
    renderRoundBoard();
  }

  function roundTab(round){
    const rp = roundProgress(activeActivity.id, round.id);
    return `<button class="round-tab ${rp.mastered ? "is-mastered" : ""}" type="button" role="tab" data-round="${round.id}" aria-selected="${round.id === activeRoundId}">${round.title} <span class="tab-count">${totalForRound(round)} cards</span></button>`;
  }

  function renderRoundBoard(){
    const round = currentRound();
    const norm = normalizeRound(round);
    const bank = document.getElementById("bank");
    const board = document.getElementById("board");
    document.getElementById("roundIntro").textContent = norm.intro;
    document.getElementById("sourceNote").innerHTML = norm.footnote || norm.sourceNote || "";
    document.getElementById("roundProgress").textContent = progressText(activeActivity, round);
    bank.innerHTML = "";
    board.innerHTML = "";
    shuffle(norm.cards).forEach(card => bank.appendChild(makeCard(card)));
    norm.destinations.forEach((destination, index) => board.appendChild(makeDestination(destination, index, norm)));
    refreshBankEmpty();
    wireControls(norm);
    updateTally();
  }

  function normalizeRound(round){
    if(round.cards && round.destinations){
      return {
        intro:round.instructions || round.intro || "",
        footnote:round.footnote,
        sourceNote:round.sourceNote,
        destinations:round.destinations,
        slotTypes:round.slotTypes || [{key:"answer", label:round.slotLabel || "Answer"}],
        capacity:round.activity === "sort" ? "many" : "one",
        cards:round.cards.map(card => Object.assign({}, card, {answers:Array.isArray(card.answers) ? card.answers : [card.answer]}))
      };
    }
    if(round.mode === "buckets"){
      return {
        intro:round.intro || "",
        footnote:round.footnote,
        destinations:round.targets,
        slotTypes:[{key:"answer", label:"Drop here"}],
        capacity:"many",
        cards:round.items.map(item => ({
          id:item.id,
          text:item.text,
          answer:item.primary || item.target || (item.targets && item.targets[0]),
          answers:item.targets || [item.target],
          explanation:item.explanation || ""
        }))
      };
    }
    const types = round.slotTypes || [{key:"answer", label:"Answer"}];
    const cards = [];
    round.concepts.forEach(concept => {
      types.forEach(type => {
        cards.push({
          id:concept.id + "|" + type.key,
          text:concept[type.key],
          answer:expectedFor(concept.id, type.key),
          answers:[expectedFor(concept.id, type.key)]
        });
      });
    });
    return {
      intro:round.intro || "",
      footnote:round.footnote,
      destinations:round.concepts.map(concept => ({id:concept.id, label:concept.name, name:concept.name, sub:concept.sub})),
      slotTypes:types,
      capacity:"one",
      cards
    };
  }

  function makeDestination(destination, index, norm){
    const concept = document.createElement("section");
    concept.className = "concept";
    const head = document.createElement("div");
    head.className = "concept-head";
    head.innerHTML = `<span class="concept-index">${String(index + 1).padStart(2,"0")}</span><h4 class="concept-name">${destination.label || destination.name}</h4>${destination.sub ? `<p class="concept-sub">${destination.sub}</p>` : ""}`;
    concept.appendChild(head);
    norm.slotTypes.forEach(type => {
      const wrap = document.createElement("div");
      wrap.className = "slot-wrap";
      const slot = document.createElement("div");
      slot.className = "slot";
      slot.dataset.expects = expectedFor(destination.id, type.key);
      slot.dataset.capacity = norm.capacity;
      slot.tabIndex = 0;
      slot.setAttribute("role","button");
      slot.setAttribute("aria-label",(destination.label || destination.name) + " - " + type.label);
      wireSlot(slot);
      wrap.innerHTML = `<span class="slot-label">${type.label}</span>`;
      wrap.appendChild(slot);
      const mark = document.createElement("span");
      mark.className = "mark";
      wrap.appendChild(mark);
      concept.appendChild(wrap);
    });
    return concept;
  }

  function makeCard(card){
    const el = document.createElement("button");
    el.type = "button";
    el.className = "card";
    el.draggable = true;
    el.textContent = card.text;
    el.dataset.cardId = card.id;
    el.addEventListener("click", ev => {
      ev.stopPropagation();
      if(el.parentElement && el.parentElement.classList.contains("slot")) returnToBank(el);
      else toggleHeld(card.id, el);
    });
    el.addEventListener("dragstart", ev => {
      held = card.id;
      el.classList.add("is-dragging");
      try{ ev.dataTransfer.setData("text/plain", card.id); }catch(err){}
    });
    el.addEventListener("dragend", () => {
      held = null;
      el.classList.remove("is-dragging");
      clearHeldStyles();
    });
    return el;
  }

  function wireSlot(slot){
    slot.addEventListener("click", () => placeIntoSlot(slot));
    slot.addEventListener("keydown", ev => {
      if(ev.key === "Enter" || ev.key === " "){ ev.preventDefault(); placeIntoSlot(slot); }
    });
    slot.addEventListener("dragover", ev => { ev.preventDefault(); slot.classList.add("is-target"); });
    slot.addEventListener("dragleave", () => slot.classList.remove("is-target"));
    slot.addEventListener("drop", ev => {
      ev.preventDefault();
      slot.classList.remove("is-target");
      let id = "";
      try{ id = ev.dataTransfer.getData("text/plain"); }catch(err){}
      held = id || held;
      placeIntoSlot(slot);
    });
  }

  function wireControls(norm){
    document.getElementById("btnCheck").addEventListener("click", () => checkAnswers(norm));
    document.getElementById("btnShuffle").addEventListener("click", () => {
      const loose = Array.from(document.querySelectorAll("#bank .card")).map(el => norm.cards.find(card => card.id === el.dataset.cardId)).filter(Boolean);
      const bank = document.getElementById("bank");
      bank.innerHTML = "";
      shuffle(loose).forEach(card => bank.appendChild(makeCard(card)));
      refreshBankEmpty();
    });
    document.getElementById("btnClear").addEventListener("click", () => clearBoard(true));
    document.getElementById("btnReveal").addEventListener("click", () => revealAnswers(norm));
    const bank = document.getElementById("bank");
    bank.addEventListener("click", () => { held = null; clearHeldStyles(); });
    bank.addEventListener("dragover", ev => { ev.preventDefault(); bank.classList.add("is-target"); });
    bank.addEventListener("dragleave", () => bank.classList.remove("is-target"));
    bank.addEventListener("drop", ev => {
      ev.preventDefault();
      bank.classList.remove("is-target");
      let id = "";
      try{ id = ev.dataTransfer.getData("text/plain"); }catch(err){}
      const el = document.querySelector('.card[data-card-id="' + CSS.escape(id || held) + '"]');
      if(el) returnToBank(el);
    });
  }

  function placeIntoSlot(slot){
    if(!held) return;
    const el = document.querySelector('.card[data-card-id="' + CSS.escape(held) + '"]');
    if(!el) return;
    if(slot.dataset.capacity !== "many"){
      const existing = slot.querySelector(".card");
      if(existing && existing !== el) document.getElementById("bank").appendChild(existing);
    }
    slot.appendChild(el);
    held = null;
    clearHeldStyles();
    clearAfterMove();
  }

  function returnToBank(el){
    document.getElementById("bank").appendChild(el);
    held = null;
    clearHeldStyles();
    clearAfterMove();
  }

  function checkAnswers(norm){
    const slots = Array.from(document.querySelectorAll(".slot"));
    let correct = 0;
    let filled = 0;
    slots.forEach(slot => {
      clearSlotState(slot);
      const cards = Array.from(slot.querySelectorAll(".card"));
      if(!cards.length) return;
      filled += cards.length;
      const wrong = cards.filter(card => !cardAnswers(card.dataset.cardId, norm).includes(slot.dataset.expects));
      correct += cards.length - wrong.length;
      const mark = slot.parentElement.querySelector(".mark");
      if(wrong.length){
        slot.classList.add("is-wrong");
        mark.textContent = wrong.length + " misplaced; move and try again";
        mark.className = "mark no";
      }else{
        slot.classList.add("is-correct");
        mark.textContent = cards.length === 1 ? "Correct" : cards.length + " correct";
        mark.className = "mark ok";
      }
    });
    checked = true;
    const total = norm.cards.length;
    const mastered = correct === total && !revealedThisAttempt;
    const rp = roundProgress(activeActivity.id, activeRoundId);
    Object.assign(rp, {
      bestScore:Math.max(rp.bestScore || 0, correct),
      lastScore:correct,
      total,
      attempts:(rp.attempts || 0) + 1,
      completed:rp.completed || mastered,
      mastered:rp.mastered || mastered,
      revealed:rp.revealed || revealedThisAttempt,
      lastCompletedDate:mastered ? new Date().toISOString() : rp.lastCompletedDate
    });
    saveProgress();
    document.getElementById("roundProgress").textContent = progressText(activeActivity, currentRound());
    const verdict = document.getElementById("verdict");
    if(!filled) verdict.textContent = "Place some cards first, then check.";
    else if(mastered){
      verdict.textContent = "All " + total + " correct. This round is mastered.";
      verdict.className = "verdict win";
      showCompletionActions();
    }else if(correct === total) verdict.textContent = "All answers are correct, but this attempt used Reveal, so it is not counted as mastered.";
    else verdict.textContent = correct + " of " + total + " correct. Incorrect cards stay movable.";
    renderSidebar();
  }

  function revealAnswers(norm){
    clearBoard(false);
    revealedThisAttempt = true;
    norm.cards.forEach(card => {
      const slot = Array.from(document.querySelectorAll(".slot")).find(item => card.answers.includes(item.dataset.expects));
      const el = document.querySelector('.card[data-card-id="' + CSS.escape(card.id) + '"]');
      if(slot && el) slot.appendChild(el);
    });
    document.querySelectorAll(".slot").forEach(slot => {
      slot.classList.add("is-correct");
      const mark = slot.parentElement.querySelector(".mark");
      mark.textContent = "Answer";
      mark.className = "mark ok";
    });
    const rp = roundProgress(activeActivity.id, activeRoundId);
    rp.revealed = true;
    rp.total = norm.cards.length;
    saveProgress();
    updateTally();
    refreshBankEmpty();
    document.getElementById("verdict").textContent = "Answers revealed. This attempt will not count as mastered.";
  }

  function showCompletionActions(){
    const box = document.getElementById("explanations");
    const nextRound = nextRoundId();
    box.hidden = false;
    box.innerHTML = `<h3>Next step</h3>
      <button class="act ghost" id="retryRound" type="button">Retry</button>
      ${nextRound ? `<button class="act" id="nextRound" type="button">Continue to next round</button>` : `<button class="act" id="nextActivity" type="button">Continue to next activity</button>`}
      <button class="act ghost route-button" data-route="#/domain/${activeActivity.domain}" type="button">Return to domain</button>`;
    document.getElementById("retryRound").addEventListener("click", () => renderActivity(activeActivity.id, activeRoundId));
    const next = document.getElementById("nextRound") || document.getElementById("nextActivity");
    next.addEventListener("click", () => {
      if(nextRound) setRoute("#/activity/" + activeActivity.id + "/" + nextRound);
      else {
        const nav = activityNav(activeActivity);
        setRoute(nav.next ? "#/activity/" + nav.next.id : "#/home");
      }
    });
    wireRouteButtons();
  }

  function clearBoard(resetAttempt){
    if(resetAttempt) revealedThisAttempt = false;
    document.querySelectorAll(".slot .card").forEach(card => document.getElementById("bank").appendChild(card));
    document.querySelectorAll(".slot").forEach(clearSlotState);
    checked = false;
    document.getElementById("verdict").textContent = "";
    const ex = document.getElementById("explanations");
    ex.hidden = true;
    ex.innerHTML = "";
    refreshBankEmpty();
    updateTally();
  }

  function clearAfterMove(){
    if(checked) document.querySelectorAll(".slot").forEach(clearSlotState);
    checked = false;
    refreshBankEmpty();
    updateTally();
  }

  function clearSlotState(slot){
    slot.classList.remove("is-correct","is-wrong");
    const mark = slot.parentElement.querySelector(".mark");
    if(mark){ mark.textContent = ""; mark.className = "mark"; }
  }

  function cardAnswers(cardId, norm){
    const card = norm.cards.find(item => item.id === cardId);
    return card ? card.answers : [];
  }

  function expectedFor(destinationId, key){
    return key === "answer" ? destinationId : destinationId + "|" + key;
  }

  function totalForRound(round){
    if(!round) return 0;
    if(round.cards) return round.cards.length;
    if(round.items) return round.items.length;
    const types = round.slotTypes || [{key:"answer"}];
    return (round.concepts || []).length * types.length;
  }

  function countCards(activity){
    return activity.rounds.reduce((sum, round) => sum + totalForRound(round), 0);
  }

  function updateTally(){
    const placed = document.querySelectorAll(".slot .card").length;
    const total = totalForRound(currentRound());
    const title = document.getElementById("roundTitle");
    if(title) title.dataset.tally = placed + " / " + total;
  }

  function refreshBankEmpty(){
    const bank = document.getElementById("bank");
    if(!bank) return;
    const has = bank.querySelector(".card");
    const empty = bank.querySelector(".bank-empty");
    if(!has && !empty){
      const p = document.createElement("p");
      p.className = "bank-empty";
      p.textContent = "All cards placed. Check your answers below.";
      bank.appendChild(p);
    }
    if(has && empty) empty.remove();
  }

  function toggleHeld(id, el){
    if(held === id){ held = null; clearHeldStyles(); return; }
    held = id;
    clearHeldStyles();
    el.classList.add("is-held");
  }

  function clearHeldStyles(){
    document.querySelectorAll(".card.is-held").forEach(card => card.classList.remove("is-held"));
  }

  function shuffle(arr){
    const copy = arr.slice();
    for(let i = copy.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function currentRound(){
    return activeActivity.rounds.find(round => round.id === activeRoundId);
  }

  function progressText(activity, round){
    const rp = roundProgress(activity.id, round.id);
    return "Best " + (rp.bestScore || 0) + " / " + totalForRound(round) + (rp.mastered ? " · mastered" : rp.revealed ? " · revealed" : "");
  }

  function nextRoundId(){
    const idx = activeActivity.rounds.findIndex(round => round.id === activeRoundId);
    return activeActivity.rounds[idx + 1] && activeActivity.rounds[idx + 1].id;
  }

  function activityNav(activity){
    const idx = activities.findIndex(item => item.id === activity.id);
    return {prev:activities[idx - 1], next:activities[idx + 1]};
  }

  function findContinueActivity(){
    const last = progress.lastOpenedActivity && findActivity(progress.lastOpenedActivity);
    if(last && activityStats(last).status !== "Mastered") return last;
    return activities.find(activity => activityStats(activity).status !== "Mastered") || activities[0];
  }

  function weakAreas(){
    return activities.filter(activity => {
      const stats = activityStats(activity);
      return stats.status !== "Mastered" && (stats.attempts > 0 || stats.revealed || stats.bestPercent < 80);
    }).slice(0,5);
  }

  function recentlyCompleted(){
    return activities
      .map(activity => ({activity, date:lastCompletedDate(activity)}))
      .filter(item => item.date)
      .sort((a,b) => b.date.localeCompare(a.date))
      .slice(0,5)
      .map(item => item.activity);
  }

  function lastCompletedDate(activity){
    const states = Object.values(activityProgress(activity.id).rounds || {});
    return states.map(state => state.lastCompletedDate).filter(Boolean).sort().pop() || "";
  }

  function activityList(list){
    return `<div class="activity-list">${list.map(activityCard).join("")}</div>`;
  }

  function wireRouteButtons(){
    document.querySelectorAll(".route-button").forEach(button => {
      button.addEventListener("click", () => setRoute(button.dataset.route));
    });
  }

  els.menu.addEventListener("click", () => {
    const open = !els.sidebar.classList.contains("is-open");
    els.sidebar.classList.toggle("is-open", open);
    els.menu.setAttribute("aria-expanded", String(open));
  });
  els.reset.addEventListener("click", () => {
    if(confirm("Reset all local progress for the study hub?")){
      progress = {version:1,lastOpenedActivity:null,activities:{},migratedDomain1:true};
      saveProgress();
      route();
    }
  });
  window.addEventListener("hashchange", route);
  if(!location.hash) location.hash = "#/home";
  route();
})();
