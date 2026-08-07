(function(){
  "use strict";

  const STORAGE_KEY = "aif-c01-study-hub-progress";
  const OLD_DOMAIN1_KEY = "aif-c01-domain1-card-match-progress-v1";
  const data = window.HUB_DATA;
  const activities = data.activities;
  const addendum = data.domain2Addendum || null;
  const reinforcementUnits = window.DOMAIN1_REINFORCEMENT_UNITS || [];

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
  let examTimerId = null;

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

  function dashboardActivities(){
    return activities.filter(activity => activity.available !== false && !activity.hiddenFromDashboard);
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
    if(activity.module === "domain1-simulated-exam"){
      const ep = examProgress(activity.id);
      const attempts = ep.attempts || [];
      const best = attempts.reduce((max, attempt) => Math.max(max, attempt.percent || 0), 0);
      const latest = attempts[0];
      const completed = attempts.length ? 1 : 0;
      return {
        mastered: best >= 70 ? 1 : 0,
        completed,
        attempts: attempts.length,
        revealed: false,
        totalRounds: 1,
        bestPercent: Math.round(best),
        status: best >= 70 ? "Mastered" : ep.activeAttempt ? "In progress" : completed ? "Completed" : "Not started",
        latestPercent: latest ? latest.percent : 0
      };
    }
    if(activity.module === "domain1-reinforcement-unit"){
      const rp = reinforcementProgress(activity.id);
      const attempts = rp.attempts || [];
      const best = rp.bestScore || attempts.reduce((max, attempt) => Math.max(max, attempt.percent || 0), 0);
      const latest = attempts[0];
      return {
        mastered: rp.mastered ? 1 : 0,
        completed: attempts.length ? 1 : 0,
        attempts: attempts.length,
        revealed: false,
        totalRounds: 1,
        bestPercent: Math.round(best || 0),
        status: rp.mastered ? "Mastered" : latest ? "Review again" : recommendedReinforcement(activity.id).recommended ? "Recommended" : "Not started",
        latestPercent: latest ? latest.percent : 0
      };
    }
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
    return activities.filter(activity => activity.domain === number && activity.available !== false && !activity.hiddenFromDashboard).sort((a,b) => a.order - b.order);
  }

  function route(){
    const hash = location.hash || "#/home";
    renderSidebar();
    if(hash.startsWith("#/domain/")){
      renderDomain(Number(hash.split("/")[2]));
    }else if(hash.startsWith("#/addendum/domain2")){
      renderDomain2Addendum();
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
      if(data.guideHierarchy && data.guideHierarchy.domains.some(item => item.number === domain.number)){
        group.appendChild(makeSidebarHierarchy(domain.number));
      }else{
        const list = document.createElement("div");
        list.className = "nav-activities";
        domainActivities(domain.number).forEach(activity => {
          const a = navLink("#/activity/" + activity.id, activity.title);
          a.classList.add("nav-activity");
          list.appendChild(a);
        });
        group.appendChild(list);
      }
      els.sidebar.appendChild(group);
      if(domain.number === 2 && addendum) els.sidebar.appendChild(makeAddendumSidebar());
    });
    wireSidebarToggles();
  }

  function navLink(href, text){
    const a = document.createElement("a");
    a.href = href;
    a.textContent = text;
    if(currentSidebarHref() === href || (!location.hash && href === "#/home")) a.setAttribute("aria-current","page");
    return a;
  }

  function currentSidebarHref(){
    const hash = location.hash || "#/home";
    if(!hash.startsWith("#/activity/")) return hash;
    const parts = hash.split("/");
    const activity = findActivity(parts[2]);
    if(addendum && activity && activity.id === addendum.activityId && !parts[3] && activity.rounds && activity.rounds[0]){
      return "#/activity/" + activity.id + "/" + activity.rounds[0].id;
    }
    if(activity && activity.module === "hub-card-engine" && !parts[3] && activity.rounds && activity.rounds[0]){
      return "#/activity/" + activity.id + "/" + activity.rounds[0].id;
    }
    return hash;
  }

  function makeSidebarHierarchy(domainNumber){
    const wrap = document.createElement("div");
    wrap.className = "nav-guide";
    const guide = data.guideHierarchy.domains.find(domain => domain.number === domainNumber);
    const sets = guideCardSets(domainNumber, domainActivities(domainNumber));
    guide.tasks.forEach(task => {
      const taskSets = sets.filter(set => set.taskId === task.taskId);
      if(!taskSets.length) return;
      const taskOpen = isCurrentTask(task, taskSets);
      const taskNode = document.createElement("section");
      taskNode.className = "nav-task";
      taskNode.appendChild(sidebarToggle("task-" + task.taskId, "Task " + task.taskCode + " " + task.taskTitle, firstRoute(taskSets), taskSets.reduce((sum,set) => sum + set.cardCount, 0), taskOpen, "nav-task-toggle"));
      const taskPanel = document.createElement("div");
      taskPanel.id = "task-" + task.taskId;
      taskPanel.className = "nav-task-panel";
      taskPanel.hidden = !taskOpen;
      task.subtasks.forEach(subtask => {
        const subtaskSets = taskSets.filter(set => set.subtaskId === subtask.subtaskId);
        if(!subtaskSets.length) return;
        const subtaskOpen = isCurrentSubtask(subtask, subtaskSets);
        const subNode = document.createElement("section");
        subNode.className = "nav-subtask";
        subNode.appendChild(sidebarToggle("subtask-" + subtask.subtaskId.replace(/\./g,"-"), subtask.subtaskId + " " + subtask.subtaskTitle, firstRoute(subtaskSets), subtaskSets.reduce((sum,set) => sum + set.cardCount, 0), subtaskOpen, "nav-subtask-toggle"));
        const subPanel = document.createElement("div");
        subPanel.id = "subtask-" + subtask.subtaskId.replace(/\./g,"-");
        subPanel.className = "nav-cardsets";
        subPanel.hidden = !subtaskOpen;
        subtaskSets.forEach(set => subPanel.appendChild(sidebarCardSetLink(set)));
        subNode.appendChild(subPanel);
        taskPanel.appendChild(subNode);
      });
      taskNode.appendChild(taskPanel);
      wrap.appendChild(taskNode);
    });
    return wrap;
  }

  function sidebarToggle(panelId, text, route, count, open, className){
    const row = document.createElement("div");
    row.className = className + "-row";
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "nav-toggle " + className;
    toggle.dataset.panel = panelId;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-controls", panelId);
    toggle.setAttribute("aria-label", (open ? "Collapse " : "Expand ") + text);
    toggle.textContent = open ? "⌄" : "›";
    const link = navLink(route, text);
    link.classList.add(className + "-link");
    const meta = document.createElement("span");
    meta.className = "nav-count";
    meta.textContent = count + " cards";
    meta.setAttribute("aria-label", count + " cards");
    row.appendChild(toggle);
    row.appendChild(link);
    row.appendChild(meta);
    return row;
  }

  function sidebarCardSetLink(set){
    const a = navLink(set.route, set.title);
    a.classList.add("nav-cardset");
    const rp = roundProgress(set.activityId, set.roundId);
    const count = document.createElement("span");
    count.className = "nav-count";
    count.textContent = set.cardCount;
    count.setAttribute("aria-label", set.cardCount + " cards");
    if(rp.mastered){
      const done = document.createElement("span");
      done.className = "nav-done";
      done.textContent = "✓";
      done.setAttribute("aria-label", "mastered");
      a.appendChild(done);
    }
    a.appendChild(count);
    return a;
  }

  function makeAddendumSidebar(){
    const activity = findActivity(addendum.activityId);
    const group = document.createElement("section");
    group.className = "nav-domain nav-addendum";
    group.appendChild(navLink(addendum.overviewRoute, addendum.title));
    const wrap = document.createElement("div");
    wrap.className = "nav-guide";
    wrap.appendChild(addendumOverviewLink());
    (addendum.groups || []).forEach(item => wrap.appendChild(addendumGroupNode(activity, item)));
    group.appendChild(wrap);
    return group;
  }

  function addendumOverviewLink(){
    const a = navLink(addendum.overviewRoute, "Overview");
    a.classList.add("nav-cardset");
    const count = document.createElement("span");
    count.className = "nav-count";
    count.textContent = "path";
    a.appendChild(count);
    return a;
  }

  function addendumGroupNode(activity, group){
    const rounds = addendumRoundsForGroup(activity, group);
    const open = rounds.some(round => currentSidebarHref() === addendumRoundRoute(round));
    const node = document.createElement("section");
    node.className = "nav-task";
    node.appendChild(sidebarToggle("addendum-" + group.id, group.title, rounds[0] ? addendumRoundRoute(rounds[0]) : addendum.overviewRoute, rounds.reduce((sum, round) => sum + totalForRound(round), 0), open, "nav-task-toggle"));
    const panel = document.createElement("div");
    panel.id = "addendum-" + group.id;
    panel.className = "nav-cardsets";
    panel.hidden = !open;
    rounds.forEach(round => panel.appendChild(sidebarCardSetLink({
      activityId:activity.id,
      roundId:round.id,
      route:addendumRoundRoute(round),
      title:round.title,
      cardCount:totalForRound(round)
    })));
    node.appendChild(panel);
    return node;
  }

  function addendumRoundsForGroup(activity, group){
    if(!activity) return [];
    return group.roundIds.map(id => activity.rounds.find(round => round.id === id)).filter(Boolean);
  }

  function addendumRoundRoute(round){
    return "#/activity/" + addendum.activityId + "/" + round.id;
  }

  function wireSidebarToggles(){
    document.querySelectorAll(".nav-toggle").forEach(button => {
      button.addEventListener("click", () => {
        const panel = document.getElementById(button.dataset.panel);
        if(!panel) return;
        const open = button.getAttribute("aria-expanded") !== "true";
        button.setAttribute("aria-expanded", String(open));
        button.textContent = open ? "⌄" : "›";
        panel.hidden = !open;
      });
    });
  }

  function firstRoute(sets){
    return sets.length ? sets[0].route : "#/home";
  }

  function isCurrentTask(task, sets){
    const current = currentSidebarHref();
    return sets.some(set => current === set.route);
  }

  function isCurrentSubtask(subtask, sets){
    const current = currentSidebarHref();
    return sets.some(set => current === set.route);
  }

  function renderHome(){
    activeActivity = null;
    const visible = dashboardActivities();
    const total = visible.length;
    const mastered = visible.filter(activity => activityStats(activity).status === "Mastered").length;
    const completed = visible.filter(activity => activityStats(activity).completed > 0).length;
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
      setRoute("#/activity/" + (continueActivity ? continueActivity.id : visible[0].id));
    });
    document.getElementById("reviewBtn").addEventListener("click", () => {
      const first = weak[0] || visible[0];
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
    const reinforcement = number === 1 ? domain1ReinforcementActivities() : [];
    if(!domain){ renderHome(); return; }
    els.app.innerHTML = `
      <section class="page-section">
        <p class="objective-label">Domain ${domain.number}</p>
        <h2>${domain.title}</h2>
        <p class="muted">${domain.description}</p>
        ${number === 1 ? `<div class="hero-actions"><button class="act route-button" data-route="#/activity/${recommendedReinforcementRoute()}" type="button">Review weak areas</button></div>` : ""}
      </section>
      ${renderGuideHierarchy(number, acts)}
      ${reinforcement.length ? `
      <section class="page-section">
        <h3>Domain 1 Reinforcement Units</h3>
        <div class="activity-list reinforcement-list">${reinforcement.map(reinforcementCard).join("")}</div>
      </section>` : ""}
      <section class="page-section">
        ${acts.length ? groupedActivities(acts) : `<p class="source-note">More activities coming later.</p>`}
      </section>
    `;
    wireRouteButtons();
  }

  function renderDomain2Addendum(){
    activeActivity = null;
    const activity = addendum && findActivity(addendum.activityId);
    if(!addendum || !activity){ renderHome(); return; }
    const stats = activityStats(activity);
    const totalCards = countCards(activity);
    const masteredCards = addendumMasteredCards(activity);
    const attemptedCards = addendumAttemptedCards(activity);
    const objectiveCounts = addendumObjectiveCounts(activity);
    const next = nextAddendumRound(activity);
    const finalRound = activity.rounds.find(round => round.id === "addendum-final-review") || activity.rounds[activity.rounds.length - 1];
    els.app.innerHTML = `
      <section class="hero-panel addendum-hero">
        <p class="objective-label">Domain 2 addendum · focused gap review</p>
        <h2>${escapeHTML(addendum.title)}</h2>
        <p>${escapeHTML(addendum.description)}</p>
        <div class="hero-actions">
          <button class="act route-button" data-route="${next ? addendumRoundRoute(next) : addendumRoundRoute(activity.rounds[0])}" type="button">${stats.completed ? "Continue Addendum" : "Start Addendum"}</button>
          <button class="act ghost route-button" data-route="${next ? addendumRoundRoute(next) : addendumRoundRoute(finalRound)}" type="button">Review Incorrect Cards</button>
          <button class="act ghost route-button" data-route="${addendumRoundRoute(finalRound)}" type="button">Mixed Addendum Review</button>
        </div>
      </section>
      <section class="summary-grid" aria-label="Addendum progress">
        <div class="summary-card"><span>Card sets</span><b>${activity.rounds.length}</b></div>
        <div class="summary-card"><span>Total cards</span><b>${totalCards}</b></div>
        <div class="summary-card"><span>Sets completed</span><b>${stats.completed} / ${stats.totalRounds}</b></div>
        <div class="summary-card"><span>Sets mastered</span><b>${stats.mastered} / ${stats.totalRounds}</b></div>
        <div class="summary-card"><span>Cards attempted</span><b>${attemptedCards} / ${totalCards}</b></div>
        <div class="summary-card"><span>Cards mastered</span><b>${masteredCards} / ${totalCards}</b></div>
      </section>
      <section class="page-section addendum-progress">
        <div class="progress-bar" aria-label="${stats.mastered} of ${stats.totalRounds} addendum sets mastered"><span style="width:${stats.totalRounds ? stats.mastered / stats.totalRounds * 100 : 0}%"></span></div>
        <p class="domain-meta">Suggested study order is shown below. Free navigation is always available; later sets are not locked.</p>
      </section>
      <section class="page-section addendum-filters">
        <h3>Filter by Official Objective</h3>
        <div class="badge-row">${Object.entries(objectiveCounts).map(([objective, count]) => `<span class="objective-badge">EXPANDS ${objective} · ${count}</span>`).join("")}</div>
      </section>
      <section class="page-section addendum-units">
        <h3>Suggested Study Order</h3>
        ${addendum.groups.map(group => renderAddendumGroup(activity, group)).join("")}
      </section>
    `;
    wireRouteButtons();
  }

  function renderAddendumGroup(activity, group){
    const rounds = addendumRoundsForGroup(activity, group);
    return `<section class="task-group addendum-group" id="addendum-group-${group.id}">
      <h3>${escapeHTML(group.title)}</h3>
      <div class="activity-list">${rounds.map(round => renderAddendumRoundCard(activity, round)).join("")}</div>
    </section>`;
  }

  function renderAddendumRoundCard(activity, round){
    const rp = roundProgress(activity.id, round.id);
    const total = totalForRound(round);
    const best = rp.total ? Math.round((rp.bestScore || 0) / rp.total * 100) : 0;
    const status = rp.mastered ? "Mastered" : rp.attempts ? "In progress" : rp.revealed ? "Revealed" : "Not started";
    const objectives = (round.objectiveCodes || activity.objectiveCodes).join(", ");
    const description = (round.instructions || "").split(". ")[0] + ".";
    const isChallenge = /challenge/i.test(round.difficulty || round.title || "") || (round.tags || []).includes("challenge");
    return `<article class="activity-card addendum-unit">
      <div>
        <p class="objective-label">EXPANDS ${escapeHTML(objectives)} · ${escapeHTML(round.hierarchy.difficulty)} · ${isChallenge ? "Normal + Challenge" : "Normal mode"}</p>
        <h4>${escapeHTML(round.title)}</h4>
        <p>${escapeHTML(description)}</p>
        <p class="domain-meta">${total} cards · ${status} · Best ${best}% · ${escapeHTML(round.hierarchy.priority)}</p>
      </div>
      <div class="activity-status">
        <span class="status-pill">${status}</span>
        <button class="act route-button" data-route="${addendumRoundRoute(round)}" type="button">${rp.attempts ? "Continue" : "Start"}</button>
      </div>
    </article>`;
  }

  function nextAddendumRound(activity){
    return activity.rounds.find(round => !roundProgress(activity.id, round.id).mastered) || activity.rounds[0];
  }

  function addendumMasteredCards(activity){
    return activity.rounds.reduce((sum, round) => {
      const rp = roundProgress(activity.id, round.id);
      return sum + (rp.mastered ? totalForRound(round) : 0);
    }, 0);
  }

  function addendumAttemptedCards(activity){
    return activity.rounds.reduce((sum, round) => {
      const rp = roundProgress(activity.id, round.id);
      return sum + (rp.attempts || rp.revealed ? totalForRound(round) : 0);
    }, 0);
  }

  function addendumObjectiveCounts(activity){
    return activity.rounds.reduce((counts, round) => {
      (round.objectiveCodes || []).forEach(objective => {
        counts[objective] = (counts[objective] || 0) + totalForRound(round);
      });
      return counts;
    }, {});
  }

  function renderGuideHierarchy(number, acts){
    const guide = data.guideHierarchy && data.guideHierarchy.domains.find(item => item.number === number);
    if(!guide) return "";
    const sets = guideCardSets(number, acts);
    const domainTotal = sets.reduce((sum, set) => sum + set.cardCount, 0);
    const domainFirst = acts.find(activity => activity.module === "hub-card-engine");
    return `<section class="page-section guide-browser" aria-label="Master Study Guide hierarchy">
      <div class="guide-browser-head">
        <div>
          <p class="objective-label">Master Study Guide hierarchy · ${guide.weight}</p>
          <h3>Browse by task and subtask</h3>
          <p class="muted">Target one exact section of the guide, or launch the broader domain-level review activity.</p>
        </div>
        ${domainFirst ? `<button class="act ghost route-button" data-route="#/activity/${domainFirst.id}" type="button">Domain ${number} mixed review</button>` : ""}
      </div>
      <div class="guide-task-list">
        ${guide.tasks.map(task => renderGuideTask(number, task, sets, acts)).join("")}
      </div>
      <p class="domain-meta">${sets.length} targeted card sets · ${domainTotal} cards across Domain ${number}</p>
    </section>`;
  }

  function renderGuideTask(number, task, sets, acts){
    const taskSets = sets.filter(set => set.taskId === task.taskId);
    const taskCards = taskSets.reduce((sum, set) => sum + set.cardCount, 0);
    const taskActivity = acts.find(activity => activity.module === "hub-card-engine" && (activity.taskStatement || "").includes("Task " + task.taskCode));
    return `<details class="guide-task" open>
      <summary>
        <span><strong>Task ${task.taskCode}</strong> ${escapeHTML(task.taskTitle)}</span>
        <b>${taskSets.length} sets · ${taskCards} cards</b>
      </summary>
      <div class="guide-task-actions">
        ${taskActivity ? `<button class="act ghost route-button" data-route="#/activity/${taskActivity.id}" type="button">Task ${task.taskCode} combined review</button>` : ""}
      </div>
      <div class="guide-subtasks">
        ${task.subtasks.map(subtask => renderGuideSubtask(number, task, subtask, taskSets)).join("")}
      </div>
    </details>`;
  }

  function renderGuideSubtask(number, task, subtask, sets){
    const subtaskSets = sets.filter(set => set.subtaskId === subtask.subtaskId);
    const cards = subtaskSets.reduce((sum, set) => sum + set.cardCount, 0);
    return `<section class="guide-subtask">
      <header>
        <p class="objective-label">Subtask ${subtask.subtaskId}</p>
        <h4>${escapeHTML(subtask.subtaskTitle)}</h4>
        <span>${subtaskSets.length ? `${subtaskSets.length} sets · ${cards} cards` : "No targeted card set yet"}</span>
      </header>
      ${subtaskSets.length ? `<div class="guide-cardsets">${subtaskSets.map(renderGuideCardSet).join("")}</div>` : `<p class="muted">Covered only in broader review or exam content for now.</p>`}
    </section>`;
  }

  function renderGuideCardSet(set){
    const rp = roundProgress(set.activityId, set.roundId);
    const best = rp.total ? Math.round((rp.bestScore || 0) / rp.total * 100) : 0;
    const status = rp.mastered ? "Mastered" : rp.attempts ? "In progress" : "Not started";
    return `<article class="guide-cardset">
      <div>
        <p class="objective-label">${escapeHTML(set.cardType)} · ${escapeHTML(set.difficulty)}</p>
        <h5>${escapeHTML(set.title)}</h5>
        <p>${escapeHTML(set.sourceSection)}</p>
        <p class="domain-meta">${set.cardCount} cards · ${status} · Best ${best}%</p>
      </div>
      <button class="act route-button" data-route="#/activity/${set.activityId}/${set.roundId}" type="button">Open set</button>
    </article>`;
  }

  function guideCardSets(number, acts){
    const rows = [];
    acts.forEach(activity => {
      if(activity.module !== "hub-card-engine") return;
      (activity.rounds || []).forEach(round => {
        const h = round.hierarchy;
        if(!h || !h.subtaskId) return;
        rows.push({
          activityId:activity.id,
          roundId:round.id,
          route:"#/activity/" + activity.id + "/" + round.id,
          title:round.title,
          taskId:h.taskId,
          subtaskId:h.subtaskId,
          cardType:h.cardType || "Mixed review",
          difficulty:h.difficulty || activity.difficulty || "Foundational",
          sourceSection:h.sourceSection || "",
          cardCount:totalForRound(round)
        });
      });
    });
    return rows.sort((a,b) => a.subtaskId.localeCompare(b.subtaskId, undefined, {numeric:true}) || a.title.localeCompare(b.title));
  }

  function domain1ReinforcementActivities(){
    return domainActivities(1).filter(activity => activity.module === "domain1-reinforcement-unit");
  }

  function reinforcementCard(activity){
    const stats = activityStats(activity);
    const rec = recommendedReinforcement(activity.id);
    return `<article class="activity-card reinforcement-card">
      <div>
        <p class="objective-label">${activity.objectiveCodes.join(", ")} · ${activity.activityType}</p>
        <h4>${activity.title}</h4>
        <p>${rec.reason || activity.shortDescription}</p>
        <p class="domain-meta">Most recent ${stats.latestPercent || 0}% · Best ${stats.bestPercent}%</p>
      </div>
      <div class="activity-status">
        <span class="status-pill">${stats.status}</span>
        ${rec.urgent ? `<span>Weak area</span>` : ""}
        <button class="act route-button" data-route="#/activity/${activity.id}" type="button">${stats.completed ? "Review" : "Start"}</button>
      </div>
    </article>`;
  }

  function groupedActivities(acts){
    const groups = {};
    acts.filter(activity => activity.module !== "domain1-reinforcement-unit").forEach(activity => {
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
    if(activity.module === "domain1-simulated-exam"){
      renderDomain1Exam(activity);
      return;
    }
    if(activity.module === "domain1-reinforcement-unit"){
      renderReinforcementUnit(activity);
      return;
    }
    activeActivity = activity;
    progress.lastOpenedActivity = activity.id;
    saveProgress();
    activeRoundId = roundId && activity.rounds.some(round => round.id === roundId) ? roundId : activity.rounds[0].id;
    checked = false;
    revealedThisAttempt = false;
    held = null;

    const round = currentRound();
    const nav = activityNav(activity);
    const inAddendum = isAddendumActivity(activity);
    els.app.innerHTML = `
      <section class="activity-shell">
        <header class="activity-header">
          <div>
            <p class="objective-label">Domain ${activity.domain} · ${activity.taskStatement} · ${(round.objectiveCodes || activity.objectiveCodes).join(", ")}</p>
            <h2>${activity.title}</h2>
            <p>${activity.shortDescription}</p>
          </div>
          <div class="activity-links">
            <button class="link-button route-button" data-route="#/home" type="button">Dashboard</button>
            <button class="link-button route-button" data-route="${inAddendum ? addendum.overviewRoute : "#/domain/" + activity.domain}" type="button">${inAddendum ? "Back to addendum" : "Back to domain"}</button>
          </div>
        </header>
        <nav class="activity-nav" aria-label="Activity sequence">
          ${nav.prev ? `<button class="act ghost route-button" data-route="${inAddendum ? addendumRoundRoute(nav.prev) : "#/activity/" + nav.prev.id}" type="button">${inAddendum ? "Previous addendum set" : "Previous activity"}</button>` : ""}
          ${nav.next ? `<button class="act ghost route-button" data-route="${inAddendum ? addendumRoundRoute(nav.next) : "#/activity/" + nav.next.id}" type="button">${inAddendum ? "Next addendum set" : "Next activity"}</button>` : ""}
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
          <button class="act" id="btnCheck" type="button">${round.checkLabel || "Check answers"}</button>
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
    document.querySelector(".bank-head").hidden = norm.layout === "true-false";
    bank.hidden = norm.layout === "true-false";
    document.getElementById("btnShuffle").hidden = false;
    document.getElementById("roundIntro").textContent = norm.intro;
    document.getElementById("sourceNote").innerHTML = norm.footnote || norm.sourceNote || "";
    document.getElementById("roundProgress").textContent = progressText(activeActivity, round);
    bank.innerHTML = "";
    board.innerHTML = "";
    if(norm.layout === "true-false"){
      renderTrueFalseBoard(norm);
      wireTrueFalseControls(norm);
      return;
    }
    shuffle(norm.cards).forEach(card => bank.appendChild(makeCard(card)));
    if(norm.layout === "matrix") renderMatrixBoard(board, norm);
    else norm.destinations.forEach((destination, index) => board.appendChild(makeDestination(destination, index, norm)));
    refreshBankEmpty();
    wireControls(norm);
    updateTally();
  }

  function normalizeRound(round){
    if(round.cards && round.destinations){
      return {
        layout:round.layout || "",
        table:round.table,
        intro:round.instructions || round.intro || "",
        footnote:round.footnote,
        sourceNote:round.sourceNote,
        destinations:round.destinations,
        slotTypes:round.slotTypes || [{key:"answer", label:round.slotLabel || "Answer"}],
        capacity:round.capacity || (round.activity === "sort" ? "many" : "one"),
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

  function renderMatrixBoard(board, norm){
    const table = norm.table || {};
    const wrap = document.createElement("div");
    wrap.className = "matrix-wrap";
    const grid = document.createElement("div");
    grid.className = "source-matrix";
    const columns = table.columns || [];
    const rows = table.rows || [];
    grid.style.gridTemplateColumns = "minmax(8rem,.75fr) repeat(" + columns.length + ", minmax(11rem,1fr))";
    const corner = document.createElement("div");
    corner.className = "matrix-head matrix-corner";
    corner.textContent = table.rowHeader || "";
    grid.appendChild(corner);
    columns.forEach(column => {
      const head = document.createElement("div");
      head.className = "matrix-head";
      head.textContent = column.label;
      grid.appendChild(head);
    });
    rows.forEach(row => {
      const label = document.createElement("div");
      label.className = "matrix-row-label";
      label.textContent = row.label;
      grid.appendChild(label);
      columns.forEach(column => {
        const destination = norm.destinations.find(item => item.id === row.id + "-" + column.id);
        const cell = document.createElement("div");
        cell.className = "matrix-cell";
        cell.setAttribute("aria-label", column.label);
        const slot = document.createElement("div");
        slot.className = "slot";
        slot.dataset.expects = destination.id;
        slot.dataset.capacity = "one";
        slot.tabIndex = 0;
        slot.setAttribute("role","button");
        slot.setAttribute("aria-label", row.label + " - " + column.label);
        wireSlot(slot);
        const mark = document.createElement("span");
        mark.className = "mark";
        cell.appendChild(slot);
        cell.appendChild(mark);
        grid.appendChild(cell);
      });
    });
    wrap.appendChild(grid);
    board.appendChild(wrap);
  }

  function renderTrueFalseBoard(norm){
    const board = document.getElementById("board");
    board.innerHTML = "";
    const list = document.createElement("div");
    list.className = "tf-list";
    norm.cards.forEach((card, index) => {
      const item = document.createElement("section");
      item.className = "tf-item";
      item.dataset.cardId = card.id;
      item.innerHTML = `<div class="tf-statement"><span>${String(index + 1).padStart(2,"0")}</span><p>${escapeHTML(card.text)}</p></div>
        <div class="tf-actions" role="radiogroup" aria-label="${escapeHTML(card.text)}">
          <button class="tf-choice" type="button" data-value="true">True</button>
          <button class="tf-choice" type="button" data-value="false">False</button>
        </div>
        <p class="tf-reason" hidden></p>`;
      list.appendChild(item);
    });
    board.appendChild(list);
    document.querySelectorAll(".tf-choice").forEach(button => {
      button.addEventListener("click", () => {
        const item = button.closest(".tf-item");
        item.querySelectorAll(".tf-choice").forEach(choice => choice.classList.remove("is-selected"));
        button.classList.add("is-selected");
        item.dataset.answer = button.dataset.value;
        clearAfterTrueFalseMove();
      });
    });
    updateTally();
  }

  function wireTrueFalseControls(norm){
    document.getElementById("btnCheck").addEventListener("click", () => checkTrueFalse(norm));
    document.getElementById("btnShuffle").hidden = true;
    document.getElementById("btnClear").addEventListener("click", () => {
      document.querySelectorAll(".tf-item").forEach(item => {
        item.dataset.answer = "";
        item.classList.remove("is-correct","is-wrong");
        item.querySelectorAll(".tf-choice").forEach(choice => choice.classList.remove("is-selected"));
        const reason = item.querySelector(".tf-reason");
        reason.hidden = true;
        reason.textContent = "";
      });
      checked = false;
      revealedThisAttempt = false;
      document.getElementById("verdict").textContent = "";
      updateTally();
    });
    document.getElementById("btnReveal").addEventListener("click", () => revealTrueFalse(norm));
    updateTally();
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

  function checkTrueFalse(norm){
    const items = Array.from(document.querySelectorAll(".tf-item"));
    let correct = 0;
    let answered = 0;
    items.forEach(item => {
      item.classList.remove("is-correct","is-wrong");
      const card = norm.cards.find(entry => entry.id === item.dataset.cardId);
      const expected = String(card.answer);
      const given = item.dataset.answer || "";
      const reason = item.querySelector(".tf-reason");
      if(!given){
        reason.hidden = true;
        return;
      }
      answered += 1;
      reason.hidden = false;
      reason.textContent = card.explanation || card.distractorBoundary || "";
      if(given === expected){
        correct += 1;
        item.classList.add("is-correct");
      }else{
        item.classList.add("is-wrong");
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
    if(!answered) verdict.textContent = "Choose True or False for at least one statement first.";
    else if(mastered){
      verdict.textContent = "All " + total + " statements correct. This round is mastered.";
      verdict.className = "verdict win";
      showCompletionActions();
    }else if(correct === total) verdict.textContent = "All answers are correct, but this attempt used Reveal, so it is not counted as mastered.";
    else verdict.textContent = correct + " of " + total + " correct. Review the source reasons and retry missed statements.";
    renderSidebar();
  }

  function revealTrueFalse(norm){
    revealedThisAttempt = true;
    norm.cards.forEach(card => {
      const item = document.querySelector('.tf-item[data-card-id="' + CSS.escape(card.id) + '"]');
      if(!item) return;
      item.dataset.answer = String(card.answer);
      item.classList.remove("is-wrong");
      item.classList.add("is-correct");
      item.querySelectorAll(".tf-choice").forEach(choice => choice.classList.toggle("is-selected", choice.dataset.value === String(card.answer)));
      const reason = item.querySelector(".tf-reason");
      reason.hidden = false;
      reason.textContent = card.explanation || card.distractorBoundary || "";
    });
    const rp = roundProgress(activeActivity.id, activeRoundId);
    rp.revealed = true;
    rp.total = norm.cards.length;
    saveProgress();
    updateTally();
    document.getElementById("verdict").textContent = "Answers revealed. This attempt will not count as mastered.";
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
    const callout = currentRound().completionCallout;
    const inAddendum = isAddendumActivity(activeActivity);
    box.hidden = false;
    box.innerHTML = `${callout ? `<div class="exam-tip"><h3>${escapeHTML(callout.title)}</h3><p>${escapeHTML(callout.text)}</p></div>` : ""}
      <h3>Next step</h3>
      <button class="act ghost" id="retryRound" type="button">Retry</button>
      ${nextRound ? `<button class="act" id="nextRound" type="button">Continue to next round</button>` : `<button class="act" id="nextActivity" type="button">Continue to next activity</button>`}
      <button class="act ghost route-button" data-route="${inAddendum ? addendum.overviewRoute : "#/domain/" + activeActivity.domain}" type="button">${inAddendum ? "Return to addendum" : "Return to domain"}</button>`;
    document.getElementById("retryRound").addEventListener("click", () => renderActivity(activeActivity.id, activeRoundId));
    const next = document.getElementById("nextRound") || document.getElementById("nextActivity");
    next.addEventListener("click", () => {
      if(nextRound) setRoute("#/activity/" + activeActivity.id + "/" + nextRound);
      else {
        const nav = activityNav(activeActivity);
        setRoute(nav.next ? (inAddendum ? addendumRoundRoute(nav.next) : "#/activity/" + nav.next.id) : (inAddendum ? addendum.overviewRoute : "#/home"));
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

  function clearAfterTrueFalseMove(){
    if(checked) document.querySelectorAll(".tf-item").forEach(item => item.classList.remove("is-correct","is-wrong"));
    checked = false;
    document.getElementById("verdict").textContent = "";
    const ex = document.getElementById("explanations");
    ex.hidden = true;
    ex.innerHTML = "";
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
    if(round.questionCount) return round.questionCount;
    if(round.cards) return round.cards.length;
    if(round.items) return round.items.length;
    const types = round.slotTypes || [{key:"answer"}];
    return (round.concepts || []).length * types.length;
  }

  function countCards(activity){
    if(activity.module === "domain1-simulated-exam") return window.DOMAIN1_EXAM_CONFIG.questionCount;
    if(activity.module === "domain1-reinforcement-unit"){
      const unit = reinforcementUnit(activity.id);
      return unit ? (unit.practice || []).length + (unit.checkpoint || []).length : 0;
    }
    return activity.rounds.reduce((sum, round) => sum + totalForRound(round), 0);
  }

  function updateTally(){
    const placed = document.querySelectorAll(".tf-item[data-answer='true'], .tf-item[data-answer='false']").length || document.querySelectorAll(".slot .card").length;
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
    if(isAddendumActivity(activity)){
      const idx = activity.rounds.findIndex(round => round.id === activeRoundId);
      return {prev:activity.rounds[idx - 1], next:activity.rounds[idx + 1]};
    }
    const idx = activities.findIndex(item => item.id === activity.id);
    return {prev:activities[idx - 1], next:activities[idx + 1]};
  }

  function isAddendumActivity(activity){
    return !!(addendum && activity && activity.id === addendum.activityId);
  }

  function findContinueActivity(){
    const last = progress.lastOpenedActivity && findActivity(progress.lastOpenedActivity);
    const visible = dashboardActivities();
    if(last && visible.includes(last) && activityStats(last).status !== "Mastered") return last;
    return visible.find(activity => activityStats(activity).status !== "Mastered") || visible[0];
  }

  function weakAreas(){
    const recommended = domain1ReinforcementActivities().filter(activity => recommendedReinforcement(activity.id).recommended);
    const regular = dashboardActivities().filter(activity => {
      const stats = activityStats(activity);
      return activity.module !== "domain1-reinforcement-unit" && stats.status !== "Mastered" && (stats.attempts > 0 || stats.revealed || stats.bestPercent < 80);
    });
    return recommended.concat(regular).filter((activity, index, list) => list.findIndex(item => item.id === activity.id) === index).slice(0,5);
  }

  function recentlyCompleted(){
    return dashboardActivities()
      .map(activity => ({activity, date:lastCompletedDate(activity)}))
      .filter(item => item.date)
      .sort((a,b) => b.date.localeCompare(a.date))
      .slice(0,5)
      .map(item => item.activity);
  }

  function lastCompletedDate(activity){
    if(activity.module === "domain1-reinforcement-unit") return reinforcementProgress(activity.id).lastReviewed || "";
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

  function reinforcementUnit(id){
    return reinforcementUnits.find(unit => unit.id === id);
  }

  function reinforcementProgress(activityId){
    const ap = activityProgress(activityId);
    ap.reinforcement = ap.reinforcement || {attempts:[], bestScore:0, latestScore:0, mastered:false, missedQuestionIds:[], lastReviewed:null, practiceAnswers:{}, checkpointSession:null};
    ap.reinforcement.practiceAnswers = ap.reinforcement.practiceAnswers || {};
    ap.reinforcement.attempts = ap.reinforcement.attempts || [];
    return ap.reinforcement;
  }

  function renderReinforcementUnit(activity){
    if(examTimerId) clearInterval(examTimerId);
    activeActivity = activity;
    progress.lastOpenedActivity = activity.id;
    const rp = reinforcementProgress(activity.id);
    rp.lastReviewed = new Date().toISOString();
    saveProgress();
    const unit = reinforcementUnit(activity.id);
    if(!unit){ renderHome(); return; }
    const stats = activityStats(activity);
    els.app.innerHTML = `
      <section class="activity-shell reinforcement-shell">
        <header class="activity-header">
          <div>
            <p class="objective-label">Domain 1 · ${unit.taskStatement} · ${unit.objectives.join(", ")}</p>
            <h2>${unit.title}</h2>
            <p>${unit.reason}</p>
          </div>
          <div class="activity-links">
            <button class="link-button route-button" data-route="#/home" type="button">Dashboard</button>
            <button class="link-button route-button" data-route="#/domain/1" type="button">Back to domain</button>
          </div>
        </header>
        <section class="summary-grid">
          <div class="summary-card"><span>Status</span><b>${stats.status}</b></div>
          <div class="summary-card"><span>Best checkpoint</span><b>${stats.bestPercent}%</b></div>
          <div class="summary-card"><span>Practice items</span><b>${(unit.practice || []).length}</b></div>
          <div class="summary-card"><span>Checkpoint</span><b>${(unit.checkpoint || []).length}</b></div>
        </section>
        ${renderRapidReview(unit)}
        ${renderGuidedExamples(unit)}
        ${renderPractice(unit, rp)}
        ${renderCheckpoint(unit, rp)}
        <div class="controls">
          <button class="act ghost route-button" data-route="#/activity/${unit.relatedActivityId}" type="button">Open related study activity</button>
          <button class="act ghost" id="repeatUnit" type="button">Repeat unit</button>
        </div>
      </section>
    `;
    wireRouteButtons();
    wirePractice(unit, activity);
    wireCheckpoint(unit, activity);
    document.getElementById("repeatUnit").addEventListener("click", () => {
      const next = reinforcementProgress(activity.id);
      next.practiceAnswers = {};
      next.checkpointSession = null;
      saveProgress();
      renderReinforcementUnit(activity);
    });
    renderSidebar();
  }

  function renderRapidReview(unit){
    const review = unit.rapidReview;
    return `<section class="reinforce-section">
      <p class="objective-label">Stage 1 · Rapid review</p>
      <h3>Deciding clues</h3>
      <p>${escapeHTML(review.summary)}</p>
      <div class="comparison-table" role="table">
        ${review.table.map(row => `<div role="row"><b role="cell">${escapeHTML(row[0])}</b><span role="cell">${escapeHTML(row[1])}</span><em role="cell">${escapeHTML(row[2])}</em></div>`).join("")}
      </div>
      <div class="reinforce-grid">
        <div><h4>Clues</h4><ul>${review.clues.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul></div>
        <div><h4>Common traps</h4><ul>${review.traps.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul></div>
      </div>
      <div class="mini-comparisons">${(review.comparisons || []).map(row => `<p><strong>${escapeHTML(row[0])}:</strong> ${escapeHTML(row[1])}</p>`).join("")}</div>
    </section>`;
  }

  function renderGuidedExamples(unit){
    if(!unit.guidedExamples.length) return "";
    return `<section class="reinforce-section">
      <p class="objective-label">Stage 2 · Guided examples</p>
      <h3>Reasoning made visible</h3>
      <div class="guided-grid">${unit.guidedExamples.map(example => `<article class="guided-card">
        <h4>${escapeHTML(example.answer)}</h4>
        <p>${escapeHTML(example.scenario)}</p>
        <p><strong>Requirement:</strong> ${escapeHTML(example.workload)}</p>
        <p><strong>Words that matter:</strong> ${escapeHTML(example.clues)}</p>
        <p><strong>Why this fits:</strong> ${escapeHTML(example.whyCorrect)}</p>
        <p><strong>Closest distractor:</strong> ${escapeHTML(example.closestAlternative)}. ${escapeHTML(example.whyAlternativeFails)}</p>
      </article>`).join("")}</div>
    </section>`;
  }

  function renderPractice(unit, rp){
    if(!unit.practice.length) return "";
    return `<section class="reinforce-section">
      <p class="objective-label">Stage 3 · Active practice</p>
      <h3>Short scenarios with immediate feedback</h3>
      <div class="practice-list">${unit.practice.map((question, index) => renderPracticeItem(question, index, rp.practiceAnswers[question.id])).join("")}</div>
    </section>`;
  }

  function renderPracticeItem(question, index, saved){
    const selected = saved ? saved.selected || [] : [];
    const answered = !!saved;
    const correct = answered && isCorrectSelection(question, selected);
    const inputType = question.type === "multiple-response" ? "checkbox" : "radio";
    return `<article class="practice-card ${answered ? correct ? "is-correct" : "is-wrong" : ""}" data-question-id="${question.id}">
      <p class="objective-label">${index + 1}. Objective ${question.objective}${question.type === "multiple-response" ? " · Select " + question.correctAnswers.length : ""}</p>
      <h4>${escapeHTML(question.stem)}</h4>
      <form class="options-form">${question.options.map(option => `<label class="option-row"><input type="${inputType}" name="practice-${question.id}" value="${option.id}" ${selected.includes(option.id) ? "checked" : ""}> <span>${escapeHTML(option.text)}</span></label>`).join("")}</form>
      <button class="act practice-submit" type="button">${answered ? "Update answer" : "Submit"}</button>
      <div class="practice-feedback" ${answered ? "" : "hidden"}>${answered ? renderImmediateFeedback(question, selected, correct) : ""}</div>
    </article>`;
  }

  function renderImmediateFeedback(question, selected, correct){
    return `<p class="${correct ? "verdict win" : "verdict"}">${correct ? "Correct." : "Not quite."} ${escapeHTML(question.explanation)}</p>
      <p><strong>Deciding clue:</strong> ${escapeHTML(question.decidingClue)}</p>
      <p><strong>Closest distractor:</strong> ${escapeHTML(question.closestDistractor)}. ${escapeHTML(question.whyClosestDistractorIsWrong)}</p>
      <p class="domain-meta">Selected: ${escapeHTML(selected.join(", ") || "none")} · Correct: ${escapeHTML(question.correctAnswers.join(", "))} · ${escapeHTML(question.sourceReference)}</p>`;
  }

  function wirePractice(unit, activity){
    document.querySelectorAll(".practice-submit").forEach(button => {
      button.addEventListener("click", () => {
        const card = button.closest(".practice-card");
        const question = findReinforcementQuestion(unit, card.dataset.questionId);
        const selected = Array.from(card.querySelectorAll("input:checked")).map(input => input.value).sort();
        if(!selected.length){ card.querySelector(".practice-feedback").hidden = false; card.querySelector(".practice-feedback").innerHTML = `<p class="verdict">Choose an answer first.</p>`; return; }
        const correct = isCorrectSelection(question, selected);
        const rp = reinforcementProgress(activity.id);
        rp.practiceAnswers[question.id] = {selected, correct, answeredAt:new Date().toISOString()};
        rp.lastReviewed = new Date().toISOString();
        saveProgress();
        renderReinforcementUnit(activity);
      });
    });
  }

  function renderCheckpoint(unit, rp){
    const session = rp.checkpointSession;
    if(!session) return `<section class="reinforce-section">
      <p class="objective-label">Stage 4 · Mastery checkpoint</p>
      <h3>${unit.id === "domain1-reinforcement-checkpoint" ? "Mixed weak-area checkpoint" : "Checkpoint"}</h3>
      <p class="muted">${unit.immediateCheckpointFeedback ? "Answer one question at a time. Feedback appears after each submission, and incorrect questions return at the end." : "Answer one question at a time. Correctness and explanations appear after the first pass is complete."}</p>
      <button class="act" id="startCheckpoint" type="button">Start checkpoint</button>
    </section>`;
    if(session.complete) return renderCheckpointResult(unit, rp, session);
    const ids = session.phase === "retry" ? session.retryIds : session.questionIds;
    const question = findReinforcementQuestion(unit, ids[session.currentIndex]);
    const selected = session.answers[question.id] || [];
    const answered = !!session.submitted[question.id];
    const showFeedback = answered && unit.immediateCheckpointFeedback;
    return `<section class="reinforce-section checkpoint-panel">
      <p class="objective-label">Stage 4 · Mastery checkpoint · ${session.phase === "retry" ? "Retry" : "First pass"}</p>
      <h3>Question ${session.currentIndex + 1} of ${ids.length}</h3>
      <p class="question-stem">${escapeHTML(question.stem)}</p>
      <form class="options-form">${renderReinforcementOptions(question, selected, "checkpoint-" + question.id)}</form>
      <div class="checkpoint-actions">
        <button class="act" id="submitCheckpointAnswer" type="button">${answered ? session.currentIndex === ids.length - 1 ? "Continue" : "Next" : "Submit answer"}</button>
        <button class="act ghost" id="restartCheckpoint" type="button">Restart checkpoint</button>
      </div>
      <div class="practice-feedback" ${showFeedback ? "" : "hidden"}>${showFeedback ? renderImmediateFeedback(question, selected, isCorrectSelection(question, selected)) : ""}</div>
    </section>`;
  }

  function renderReinforcementOptions(question, selected, name){
    const inputType = question.type === "multiple-response" ? "checkbox" : "radio";
    const hint = question.type === "multiple-response" ? `<p class="mrq-hint">Select ${numberWord(question.correctAnswers.length)}.</p>` : "";
    return hint + question.options.map(option => `<label class="option-row"><input type="${inputType}" name="${name}${inputType === "checkbox" ? "-" + option.id : ""}" value="${option.id}" ${selected.includes(option.id) ? "checked" : ""}> <span>${escapeHTML(option.text)}</span></label>`).join("");
  }

  function wireCheckpoint(unit, activity){
    const start = document.getElementById("startCheckpoint");
    if(start) start.addEventListener("click", () => {
      const rp = reinforcementProgress(activity.id);
      rp.checkpointSession = {startedAt:Date.now(), questionIds:unit.checkpoint.map(q => q.id), retryIds:[], phase:"initial", currentIndex:0, answers:{}, firstPassAnswers:{}, submitted:{}, firstPassIncorrect:[], complete:false};
      saveProgress();
      renderReinforcementUnit(activity);
    });
    const restart = document.getElementById("restartCheckpoint");
    if(restart) restart.addEventListener("click", () => {
      reinforcementProgress(activity.id).checkpointSession = null;
      saveProgress();
      renderReinforcementUnit(activity);
    });
    const submit = document.getElementById("submitCheckpointAnswer");
    if(submit) submit.addEventListener("click", () => advanceCheckpoint(unit, activity));
    const finish = document.getElementById("finishCheckpoint");
    if(finish) finish.addEventListener("click", () => {
      reinforcementProgress(activity.id).checkpointSession = null;
      saveProgress();
      renderReinforcementUnit(activity);
    });
  }

  function advanceCheckpoint(unit, activity){
    const rp = reinforcementProgress(activity.id);
    const session = rp.checkpointSession;
    const ids = session.phase === "retry" ? session.retryIds : session.questionIds;
    const question = findReinforcementQuestion(unit, ids[session.currentIndex]);
    if(!session.submitted[question.id]){
      const selected = Array.from(document.querySelectorAll(".checkpoint-panel input:checked")).map(input => input.value).sort();
      if(!selected.length){ return; }
      session.answers[question.id] = selected;
      if(session.phase === "initial") session.firstPassAnswers[question.id] = selected.slice();
      session.submitted[question.id] = true;
      if(session.phase === "initial" && !isCorrectSelection(question, selected)) session.firstPassIncorrect.push(question.id);
      saveProgress();
      renderReinforcementUnit(activity);
      return;
    }
    if(session.currentIndex < ids.length - 1){
      session.currentIndex++;
      saveProgress();
      renderReinforcementUnit(activity);
      return;
    }
    if(session.phase === "initial" && session.firstPassIncorrect.length){
      if(unit.immediateCheckpointFeedback){
        session.phase = "retry";
        session.retryIds = session.firstPassIncorrect.slice();
        session.currentIndex = 0;
        session.retryIds.forEach(id => { delete session.submitted[id]; });
        saveProgress();
        renderReinforcementUnit(activity);
        return;
      }
    }
    completeCheckpoint(unit, activity);
  }

  function completeCheckpoint(unit, activity){
    const rp = reinforcementProgress(activity.id);
    const session = rp.checkpointSession;
    const firstPassCorrect = session.questionIds.length - session.firstPassIncorrect.length;
    const percentScore = Math.round(firstPassCorrect / session.questionIds.length * 100);
    const byObjective = {};
    session.questionIds.forEach(id => {
      const question = findReinforcementQuestion(unit, id);
      byObjective[question.objective] = byObjective[question.objective] || {correct:0,total:0};
      byObjective[question.objective].total++;
      if(!session.firstPassIncorrect.includes(id)) byObjective[question.objective].correct++;
    });
    const attempt = {
      id:"reinforcement-" + Date.now(),
      completedAt:new Date().toISOString(),
      total:session.questionIds.length,
      correct:firstPassCorrect,
      percent:percentScore,
      byObjective,
      missedQuestionIds:session.firstPassIncorrect.slice()
    };
    rp.attempts = [attempt].concat(rp.attempts || []).slice(0,10);
    rp.bestScore = Math.max(rp.bestScore || 0, percentScore);
    rp.latestScore = percentScore;
    rp.mastered = rp.mastered || percentScore >= (unit.masteryPercent || 85);
    rp.missedQuestionIds = session.firstPassIncorrect.slice();
    rp.lastReviewed = attempt.completedAt;
    session.complete = true;
    session.result = attempt;
    const ap = activityProgress(activity.id);
    ap.rounds.unit = {
      bestScore:Math.max((ap.rounds.unit && ap.rounds.unit.bestScore) || 0, firstPassCorrect),
      lastScore:firstPassCorrect,
      total:session.questionIds.length,
      attempts:rp.attempts.length,
      completed:true,
      mastered:rp.mastered,
      revealed:false,
      lastCompletedDate:attempt.completedAt
    };
    saveProgress();
    renderReinforcementUnit(activity);
  }

  function renderCheckpointResult(unit, rp, session){
    const result = session.result;
    return `<section class="reinforce-section checkpoint-result">
      <p class="objective-label">Stage 4 · Checkpoint result</p>
      <h3>${result.correct} / ${result.total} correct · ${result.percent}%</h3>
      <p class="${result.percent >= (unit.masteryPercent || 85) ? "verdict win" : "verdict"}">${result.percent >= (unit.masteryPercent || 85) ? "Mastery recorded." : "Review again before marking this distinction automatic."}</p>
      <div class="summary-grid">${Object.entries(result.byObjective).map(([objective, row]) => `<div class="summary-card"><span>${objective}</span><b>${row.correct}/${row.total} · ${percent(row)}%</b></div>`).join("")}</div>
      ${result.missedQuestionIds.length ? `<h4>Review incorrect first-pass answers</h4>${result.missedQuestionIds.map(id => {
        const question = findReinforcementQuestion(unit, id);
        const route = question.linkUnitId || unit.id;
        return `<details class="review-item"><summary>${escapeHTML(question.stem)}</summary>
          ${renderImmediateFeedback(question, (session.firstPassAnswers && session.firstPassAnswers[id]) || session.answers[id] || [], false)}
          <button class="link-button route-button" data-route="#/activity/${route}" type="button">Open linked reinforcement unit</button>
        </details>`;
      }).join("")}` : `<p class="muted">No incorrect first-pass answers.</p>`}
      <button class="act" id="finishCheckpoint" type="button">Continue reviewing</button>
    </section>`;
  }

  function findReinforcementQuestion(unit, id){
    return (unit.practice || []).concat(unit.checkpoint || []).find(question => question.id === id);
  }

  function isCorrectSelection(question, selected){
    const correct = question.correctAnswers.slice().sort();
    const value = (selected || []).slice().sort();
    return value.length === correct.length && value.every((id, idx) => id === correct[idx]);
  }

  function examProgress(activityId){
    const ap = activityProgress(activityId);
    ap.exam = ap.exam || {attempts:[], activeAttempt:null};
    return ap.exam;
  }

  function renderDomain1Exam(activity){
    if(examTimerId) clearInterval(examTimerId);
    activeActivity = activity;
    progress.lastOpenedActivity = activity.id;
    saveProgress();
    const ep = examProgress(activity.id);
    if(ep.activeAttempt && !ep.activeAttempt.submitted){
      renderExamQuestion(activity, ep.activeAttempt.currentIndex || 0);
    }else if(ep.lastResult){
      renderExamResults(activity, ep.lastResult);
    }else{
      renderExamStart(activity);
    }
    renderSidebar();
  }

  function renderExamStart(activity){
    const config = window.DOMAIN1_EXAM_CONFIG;
    const history = examProgress(activity.id).attempts || [];
    els.app.innerHTML = `
      <section class="activity-shell exam-shell">
        <header class="activity-header">
          <div>
            <p class="objective-label">Domain 1 · Tasks 1.1, 1.2, 1.3 · Exam simulation</p>
            <h2>Domain 1 Simulated Exam</h2>
            <p>Sixty questions covering all 17 Domain 1 objectives. Answers and explanations are shown only after final submission.</p>
          </div>
          <div class="activity-links">
            <button class="link-button route-button" data-route="#/home" type="button">Dashboard</button>
            <button class="link-button route-button" data-route="#/domain/1" type="button">Back to domain</button>
          </div>
        </header>
        <section class="exam-intro">
          <div class="summary-grid">
            <div class="summary-card"><span>Questions</span><b>${config.questionCount}</b></div>
            <div class="summary-card"><span>Simulation time limit</span><b>${config.timeLimitMinutes} min</b></div>
            <div class="summary-card"><span>Formats</span><b>MCQ + MRQ</b></div>
          </div>
          <ul class="exam-rules">
            <li>One question is displayed at a time.</li>
            <li>Answers are checked only after final submission.</li>
            <li>Unanswered questions count as incorrect.</li>
            <li>Multiple-response questions receive no partial credit.</li>
            <li>The 90 minutes label is this simulation's configured time limit, not a claim about the official exam duration.</li>
          </ul>
          <fieldset class="mode-choice">
            <legend>Mode</legend>
            <label><input type="radio" name="examMode" value="timed" checked> Timed Exam</label>
            <label><input type="radio" name="examMode" value="untimed"> Untimed Practice</label>
          </fieldset>
          <button class="act" id="startExam" type="button">Start Exam</button>
        </section>
        ${renderExamHistory(history)}
      </section>
    `;
    wireRouteButtons();
    document.getElementById("startExam").addEventListener("click", () => {
      const mode = document.querySelector('input[name="examMode"]:checked').value;
      startExamAttempt(activity, mode);
    });
  }

  function startExamAttempt(activity, mode){
    const ep = examProgress(activity.id);
    const attempt = buildExamAttempt(mode);
    ep.activeAttempt = attempt;
    delete ep.lastResult;
    saveProgress();
    renderExamQuestion(activity, 0);
  }

  function buildExamAttempt(mode){
    const config = window.DOMAIN1_EXAM_CONFIG;
    const questions = window.DOMAIN1_QUESTIONS;
    const selected = [];
    Object.entries(config.objectiveBlueprint).forEach(([objective, count]) => {
      selected.push.apply(selected, shuffle(questions.filter(q => q.objective === objective)).slice(0, count));
    });
    const ordered = shuffle(selected);
    const optionOrders = {};
    ordered.forEach(question => {
      optionOrders[question.id] = shuffle(question.options.map(option => option.id));
    });
    return {
      id:"attempt-" + Date.now(),
      mode,
      startedAt:Date.now(),
      currentIndex:0,
      questionIds:ordered.map(q => q.id),
      optionOrders,
      answers:{},
      flagged:{},
      submitted:false
    };
  }

  function renderExamQuestion(activity, index){
    if(examTimerId) clearInterval(examTimerId);
    const ep = examProgress(activity.id);
    const attempt = ep.activeAttempt;
    const config = window.DOMAIN1_EXAM_CONFIG;
    if(!attempt){ renderExamStart(activity); return; }
    attempt.currentIndex = Math.max(0, Math.min(index, attempt.questionIds.length - 1));
    saveProgress();
    const question = questionById(attempt.questionIds[attempt.currentIndex]);
    const answered = Object.values(attempt.answers).filter(value => value && value.length).length;
    const flagged = Object.keys(attempt.flagged).filter(id => attempt.flagged[id]).length;
    els.app.innerHTML = `
      <section class="activity-shell exam-shell">
        <header class="exam-header">
          <div>
            <p class="objective-label">Domain 1 Simulated Exam</p>
            <h2>Question ${attempt.currentIndex + 1} of ${attempt.questionIds.length}</h2>
          </div>
          <div class="exam-meta">
            <span id="examTimer" class="timer" aria-live="off"></span>
            <span id="timerAnnouncer" class="sr-only" aria-live="polite"></span>
            <span>${answered} answered</span>
            <span>${flagged} flagged</span>
          </div>
        </header>
        <div class="exam-layout">
          <aside class="question-nav" aria-label="Question navigator">${attempt.questionIds.map((id, i) => examNavButton(attempt, id, i)).join("")}</aside>
          <section class="question-panel">
            <p class="question-stem">${escapeHTML(question.stem)}</p>
            <form class="options-form" id="optionsForm">${renderQuestionOptions(question, attempt)}</form>
            <label class="flag-control"><input id="flagQuestion" type="checkbox" ${attempt.flagged[question.id] ? "checked" : ""}> Flag for review</label>
            <div class="exam-actions">
              ${attempt.currentIndex ? `<button class="act ghost" id="prevQuestion" type="button">Previous</button>` : ""}
              <button class="act" id="${attempt.currentIndex === attempt.questionIds.length - 1 ? "submitExam" : "nextQuestion"}" type="button">${attempt.currentIndex === attempt.questionIds.length - 1 ? "Submit Exam" : "Next"}</button>
            </div>
          </section>
        </div>
      </section>
    `;
    wireExamQuestion(activity, question);
    updateTimer(activity);
    if(attempt.mode === "timed") examTimerId = setInterval(() => updateTimer(activity), 1000);
  }

  function renderQuestionOptions(question, attempt){
    const selected = attempt.answers[question.id] || [];
    const order = attempt.optionOrders[question.id] || question.options.map(option => option.id);
    const required = question.correctAnswers.length;
    const hint = question.type === "multiple-response" ? `<p class="mrq-hint">Select ${numberWord(required)}.</p>` : "";
    return hint + order.map(optionId => {
      const option = question.options.find(item => item.id === optionId);
      const inputType = question.type === "multiple-response" ? "checkbox" : "radio";
      const name = question.type === "multiple-response" ? "answer-" + option.id : "answer";
      return `<label class="option-row"><input type="${inputType}" name="${name}" value="${option.id}" ${selected.includes(option.id) ? "checked" : ""}> <span>${escapeHTML(option.text)}</span></label>`;
    }).join("");
  }

  function wireExamQuestion(activity, question){
    document.querySelectorAll(".question-jump").forEach(button => {
      button.addEventListener("click", () => renderExamQuestion(activity, Number(button.dataset.index)));
    });
    document.querySelectorAll(".options-form input").forEach(input => {
      input.addEventListener("change", () => saveCurrentAnswer(question));
    });
    document.getElementById("flagQuestion").addEventListener("change", ev => {
      examProgress(activity.id).activeAttempt.flagged[question.id] = ev.target.checked;
      saveProgress();
      renderExamQuestion(activity, examProgress(activity.id).activeAttempt.currentIndex);
    });
    const prev = document.getElementById("prevQuestion");
    if(prev) prev.addEventListener("click", () => renderExamQuestion(activity, examProgress(activity.id).activeAttempt.currentIndex - 1));
    const next = document.getElementById("nextQuestion");
    if(next) next.addEventListener("click", () => renderExamQuestion(activity, examProgress(activity.id).activeAttempt.currentIndex + 1));
    const submit = document.getElementById("submitExam");
    if(submit) submit.addEventListener("click", () => confirmSubmitExam(activity, false));
  }

  function saveCurrentAnswer(question){
    const attempt = examProgress(activeActivity.id).activeAttempt;
    const values = Array.from(document.querySelectorAll(".options-form input:checked")).map(input => input.value);
    attempt.answers[question.id] = values;
    saveProgress();
  }

  function confirmSubmitExam(activity, automatic){
    const attempt = examProgress(activity.id).activeAttempt;
    const unanswered = attempt.questionIds.filter(id => !(attempt.answers[id] && attempt.answers[id].length));
    if(!automatic){
      const message = unanswered.length
        ? `${unanswered.length} questions are unanswered and will count as incorrect. Submit anyway?`
        : "Submit exam now? You will not be able to change answers.";
      if(!confirm(message)) return;
    }
    submitExam(activity, automatic);
  }

  function submitExam(activity, automatic){
    const ep = examProgress(activity.id);
    const attempt = ep.activeAttempt;
    const result = scoreAttempt(attempt, automatic);
    ep.attempts = [result].concat(ep.attempts || []).slice(0, 10);
    ep.lastResult = result;
    ep.activeAttempt = null;
    const ap = activityProgress(activity.id);
    ap.rounds.exam = {
      bestScore:Math.max((ap.rounds.exam && ap.rounds.exam.bestScore) || 0, result.correct),
      lastScore:result.correct,
      total:result.total,
      attempts:ep.attempts.length,
      completed:true,
      mastered:result.percent >= 70,
      revealed:false,
      lastCompletedDate:result.completedAt
    };
    saveProgress();
    renderExamResults(activity, result);
  }

  function scoreAttempt(attempt, automatic){
    const config = window.DOMAIN1_EXAM_CONFIG;
    const result = {
      id:attempt.id,
      completedAt:new Date().toISOString(),
      mode:attempt.mode,
      automaticSubmit:!!automatic,
      total:attempt.questionIds.length,
      correct:0,
      percent:0,
      timeUsedMs:Date.now() - attempt.startedAt,
      answeredQuestionIds:[],
      unansweredQuestionIds:[],
      flaggedQuestionIds:Object.keys(attempt.flagged).filter(id => attempt.flagged[id]),
      incorrectQuestionIds:[],
      byTask:{},
      byObjective:{},
      review:[]
    };
    attempt.questionIds.forEach(id => {
      const question = questionById(id);
      const selected = (attempt.answers[id] || []).slice().sort();
      const correct = question.correctAnswers.slice().sort();
      const isAnswered = selected.length > 0;
      const isCorrect = isAnswered && selected.length === correct.length && selected.every((value, idx) => value === correct[idx]);
      const task = "Task " + question.task;
      result.byTask[task] = result.byTask[task] || {correct:0,total:0};
      result.byObjective[question.objective] = result.byObjective[question.objective] || {correct:0,total:0};
      result.byTask[task].total++;
      result.byObjective[question.objective].total++;
      if(isAnswered) result.answeredQuestionIds.push(id);
      else result.unansweredQuestionIds.push(id);
      if(isCorrect){
        result.correct++;
        result.byTask[task].correct++;
        result.byObjective[question.objective].correct++;
      }else{
        result.incorrectQuestionIds.push(id);
      }
      result.review.push({questionId:id, selectedAnswers:selected, correct:isCorrect});
    });
    Object.keys(config.objectiveBlueprint).forEach(objective => {
      result.byObjective[objective] = result.byObjective[objective] || {correct:0,total:0};
    });
    result.percent = Math.round(result.correct / result.total * 100);
    return result;
  }

  function renderExamResults(activity, result){
    if(examTimerId) clearInterval(examTimerId);
    const history = examProgress(activity.id).attempts || [];
    const config = window.DOMAIN1_EXAM_CONFIG;
    const weak = weakestObjectives(result);
    els.app.innerHTML = `
      <section class="activity-shell exam-shell">
        <header class="activity-header">
          <div>
            <p class="objective-label">Domain 1 Simulated Exam · Results</p>
            <h2>${result.correct} / ${result.total} correct · ${result.percent}%</h2>
            <p class="${result.percent >= config.passingPercent ? "verdict win" : "verdict"}">${result.percent >= config.passingPercent ? "Above the study passing benchmark" : "Below the study passing benchmark"}</p>
          </div>
          <div class="activity-links">
            <button class="link-button route-button" data-route="#/home" type="button">Dashboard</button>
            <button class="link-button route-button" data-route="#/domain/1" type="button">Back to domain</button>
          </div>
        </header>
        <p class="source-note">AWS uses scaled scoring on the real certification exam. The 70% threshold in this study tool is an approximate preparation benchmark and does not predict an official AWS exam score.</p>
        <section class="summary-grid">
          <div class="summary-card"><span>Time used</span><b>${formatDuration(result.timeUsedMs)}</b></div>
          <div class="summary-card"><span>Answered</span><b>${result.answeredQuestionIds.length}</b></div>
          <div class="summary-card"><span>Unanswered</span><b>${result.unansweredQuestionIds.length}</b></div>
          <div class="summary-card"><span>Flagged</span><b>${result.flaggedQuestionIds.length}</b></div>
        </section>
        <section class="two-col">
          <div class="page-section"><h3>Task statement results</h3>${renderTaskResults(result)}</div>
          <div class="page-section"><h3>Historical averages</h3>${renderExamAverages(history)}</div>
        </section>
        <section class="page-section"><h3>Recommended review areas</h3>${renderReviewRecommendations(weak)}</section>
        <section class="page-section"><h3>Objective results</h3>${renderObjectiveResults(result)}</section>
        <section class="page-section"><h3>Answer review</h3>${renderAnswerReview(result)}</section>
        <div class="controls">
          <button class="act" id="newExamAttempt" type="button">Start a new attempt</button>
          <button class="act ghost route-button" data-route="#/domain/1" type="button">Return to Domain 1</button>
        </div>
      </section>
    `;
    wireRouteButtons();
    document.getElementById("newExamAttempt").addEventListener("click", () => {
      delete examProgress(activity.id).lastResult;
      saveProgress();
      renderExamStart(activity);
    });
    renderSidebar();
  }

  function renderTaskResults(result){
    return ["Task 1.1","Task 1.2","Task 1.3"].map(task => {
      const row = result.byTask[task] || {correct:0,total:0};
      return `<p class="result-row"><span>${task}</span><b>${row.correct} / ${row.total} · ${percent(row)}%</b></p>`;
    }).join("");
  }

  function renderObjectiveResults(result){
    const config = window.DOMAIN1_EXAM_CONFIG;
    return Object.keys(config.objectiveBlueprint).map(objective => {
      const row = result.byObjective[objective] || {correct:0,total:0};
      const pct = percent(row);
      return `<p class="result-row"><span>${objective} ${config.objectiveTitles[objective]}</span><b>${row.correct}/${row.total}, ${pct}% · ${performanceLabel(pct)}</b></p>`;
    }).join("");
  }

  function renderReviewRecommendations(weak){
    return weak.map(item => {
      const route = reviewRouteForObjective(item.objective);
      const unit = reinforcementForObjective(item.objective);
      return `<p class="result-row"><span>${item.objective} ${window.DOMAIN1_EXAM_CONFIG.objectiveTitles[item.objective]}</span><b>${item.correct}/${item.total}, ${item.percent}%</b>${unit ? ` <button class="link-button route-button" data-route="#/activity/${unit.id}" type="button">Review weak areas</button>` : route ? ` <button class="link-button route-button" data-route="${route}" type="button">Open study activity</button>` : ""}</p>`;
    }).join("");
  }

  function renderAnswerReview(result){
    return result.review.map((item, index) => {
      const question = questionById(item.questionId);
      const selected = item.selectedAnswers;
      return `<details class="review-item">
        <summary>${index + 1}. ${item.correct ? "Correct" : "Incorrect"} · ${escapeHTML(question.stem)}</summary>
        <p><strong>Your answer:</strong> ${answerText(question, selected) || "Unanswered"}</p>
        <p><strong>Correct answer:</strong> ${answerText(question, question.correctAnswers)}</p>
        <p><strong>Explanation:</strong> ${escapeHTML(question.explanation)}</p>
        <ul>${question.options.map(option => `<li><strong>${option.id.toUpperCase()}.</strong> ${escapeHTML(option.text)} ${question.correctAnswers.includes(option.id) ? "Correct." : escapeHTML(question.distractorExplanations[option.id] || "")}</li>`).join("")}</ul>
        <p class="domain-meta">Task ${question.task} · Objective ${question.objective} · ${question.sourceReference}</p>
        ${!item.correct && reinforcementForObjective(question.objective) ? `<button class="link-button route-button reinforcement-review-link" data-objective="${question.objective}" data-route="#/activity/${reinforcementForObjective(question.objective).id}" type="button">Practice this distinction</button>` : ""}
      </details>`;
    }).join("");
  }

  function renderExamHistory(history){
    if(!history.length) return `<section class="page-section"><h3>Attempt history</h3><p class="muted">No completed attempts yet.</p></section>`;
    return `<section class="page-section"><h3>Attempt history</h3>${renderExamAverages(history)}</section>`;
  }

  function renderExamAverages(history){
    if(!history.length) return `<p class="muted">Complete an attempt to build history.</p>`;
    const best = history.reduce((max, attempt) => Math.max(max, attempt.percent), 0);
    const avg = Math.round(history.reduce((sum, attempt) => sum + attempt.percent, 0) / history.length);
    const recent = history[0];
    const taskAvg = ["Task 1.1","Task 1.2","Task 1.3"].map(task => {
      const values = history.map(attempt => percent(attempt.byTask[task] || {correct:0,total:0}));
      return `${task}: ${Math.round(values.reduce((a,b) => a + b, 0) / values.length)}%`;
    }).join(" · ");
    const repeated = repeatedWeakObjectives(history);
    return `<p class="result-row"><span>Most recent</span><b>${recent.correct}/${recent.total}, ${recent.percent}%</b></p>
      <p class="result-row"><span>Best total score</span><b>${best}%</b></p>
      <p class="result-row"><span>Average total score</span><b>${avg}%</b></p>
      <p class="result-row"><span>Task averages</span><b>${taskAvg}</b></p>
      <p class="result-row"><span>Score trend</span><b>${history.slice().reverse().map(a => a.percent + "%").join(" → ")}</b></p>
      <p class="result-row"><span>Repeated below 70%</span><b>${repeated.length ? repeated.join(", ") : "None yet"}</b></p>`;
  }

  function weakestObjectives(result){
    return Object.entries(result.byObjective).map(([objective, row]) => ({
      objective,
      correct:row.correct,
      total:row.total,
      percent:percent(row),
      incorrect:row.total - row.correct
    })).sort((a,b) => a.percent - b.percent || b.incorrect - a.incorrect).slice(0,5);
  }

  function repeatedWeakObjectives(history){
    const counts = {};
    history.forEach(attempt => {
      Object.entries(attempt.byObjective || {}).forEach(([objective, row]) => {
        if(row.total && percent(row) < 70) counts[objective] = (counts[objective] || 0) + 1;
      });
    });
    return Object.entries(counts).filter(([, count]) => count > 1).sort((a,b) => b[1] - a[1]).map(([objective]) => objective);
  }

  function reinforcementForObjective(objective){
    const direct = reinforcementUnits.find(unit => unit.id !== "domain1-reinforcement-checkpoint" && unit.objectives.includes(objective));
    if(direct) return direct;
    if(["1.3.1","1.3.5","1.3.6"].includes(objective)) return reinforcementUnit("domain1-reinforcement-lifecycle");
    return null;
  }

  function recommendedReinforcementRoute(){
    const first = domain1ReinforcementActivities().find(activity => recommendedReinforcement(activity.id).recommended);
    return first ? first.id : "domain1-inference";
  }

  function recommendedReinforcement(activityId){
    const unit = reinforcementUnit(activityId);
    if(!unit) return {recommended:false, urgent:false, reason:""};
    const exam = examProgress("domain1-simulated-exam");
    const attempts = exam.attempts || [];
    const latest = attempts[0];
    const repeated = repeatedWeakObjectives(attempts);
    const objectiveHit = unit.objectives.some(objective => {
      const latestRow = latest && latest.byObjective && latest.byObjective[objective];
      const latestWeak = latestRow && latestRow.total && percent(latestRow) < 70;
      const missed = latest && (latest.review || []).some(item => {
        const question = questionById(item.questionId);
        return !item.correct && question && question.objective === objective;
      });
      return latestWeak || missed || repeated.includes(objective);
    });
    const completed = reinforcementProgress(activityId).attempts.length > 0;
    const mastered = reinforcementProgress(activityId).mastered;
    const reason = unit.id === "domain1-inference"
      ? "Batch and asynchronous inference are still being confused."
      : unit.id === "domain1-aws-services"
        ? "Review purpose-built AWS services versus adjacent service capabilities."
        : unit.id === "domain1-reinforcement-lifecycle"
          ? "Review lifecycle timing, runtime metrics, and MLOps service boundaries."
          : unit.id === "domain1-model-evaluation"
            ? "Review overfitting, regularization, and metric-selection clues."
            : "Use this mixed checkpoint after focused review.";
    const hasHistory = attempts.length > 0;
    return {
      recommended: unit.id === "domain1-reinforcement-checkpoint" ? domain1ReinforcementActivities().some(activity => activity.id !== unit.id && reinforcementProgress(activity.id).mastered) : objectiveHit || (!hasHistory && unit.id === "domain1-inference"),
      urgent: objectiveHit && !mastered,
      reason: mastered ? "Mastered. Keep available for spaced review." : completed ? "Review again to keep this distinction fresh." : reason
    };
  }

  function reviewRouteForObjective(objective){
    const matches = activities.filter(activity => activity.id !== "domain1-simulated-exam" && activity.module !== "domain1-reinforcement-unit" && activity.objectiveCodes.includes(objective));
    return matches[0] ? "#/activity/" + matches[0].id : "";
  }

  function examNavButton(attempt, id, index){
    const classes = ["question-jump"];
    if(index === attempt.currentIndex) classes.push("is-current");
    if(attempt.answers[id] && attempt.answers[id].length) classes.push("is-answered");
    if(attempt.flagged[id]) classes.push("is-flagged");
    return `<button class="${classes.join(" ")}" type="button" data-index="${index}" aria-label="Question ${index + 1}">${index + 1}</button>`;
  }

  function questionById(id){
    return window.DOMAIN1_QUESTIONS.find(question => question.id === id);
  }

  function updateTimer(activity){
    const attempt = examProgress(activity.id).activeAttempt;
    if(!attempt) return;
    const timer = document.getElementById("examTimer");
    if(!timer) return;
    const elapsed = Date.now() - attempt.startedAt;
    if(attempt.mode === "untimed"){
      timer.textContent = "Elapsed " + formatDuration(elapsed);
      return;
    }
    const limit = window.DOMAIN1_EXAM_CONFIG.timeLimitMinutes * 60 * 1000;
    const remaining = Math.max(0, limit - elapsed);
    timer.textContent = "Remaining " + formatDuration(remaining);
    timer.classList.toggle("is-warning", remaining <= 10 * 60 * 1000);
    timer.classList.toggle("is-danger", remaining <= 5 * 60 * 1000);
    const announcer = document.getElementById("timerAnnouncer");
    if(announcer && remaining <= 10 * 60 * 1000 && !attempt.warnedTen){
      attempt.warnedTen = true;
      announcer.textContent = "Ten minutes remaining.";
      saveProgress();
    }
    if(announcer && remaining <= 5 * 60 * 1000 && !attempt.warnedFive){
      attempt.warnedFive = true;
      announcer.textContent = "Five minutes remaining.";
      saveProgress();
    }
    if(remaining <= 0) submitExam(activity, true);
  }

  function formatDuration(ms){
    const total = Math.max(0, Math.floor(ms / 1000));
    const minutes = Math.floor(total / 60);
    const seconds = total % 60;
    return minutes + ":" + String(seconds).padStart(2, "0");
  }

  function answerText(question, ids){
    return ids.map(id => {
      const option = question.options.find(item => item.id === id);
      return option ? option.id.toUpperCase() + ". " + option.text : "";
    }).filter(Boolean).join("; ");
  }

  function percent(row){
    return row && row.total ? Math.round(row.correct / row.total * 100) : 0;
  }

  function performanceLabel(pct){
    if(pct >= 85) return "Strong";
    if(pct >= 70) return "Passing range";
    if(pct >= 50) return "Review recommended";
    return "Priority review";
  }

  function numberWord(n){
    return n === 2 ? "TWO" : n === 3 ? "THREE" : String(n);
  }

  function escapeHTML(value){
    return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[ch]));
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
