(function(){
  "use strict";

  const STORAGE_KEY = "aif-c01-study-hub-progress";
  const OLD_DOMAIN1_KEY = "aif-c01-domain1-card-match-progress-v1";
  const data = window.HUB_DATA;
  const activities = data.activities;
  const addendum = data.domain2Addendum || null;
  const reinforcementUnits = window.DOMAIN1_REINFORCEMENT_UNITS || [];
  const cyuBank = window.CYU_QUESTION_BANK || {questions:[], excluded:[], distractorLengthBalancingAudit:[]};
  const cyuQuestions = cyuBank.questions || [];
  const fullExamConfig = {
    questionCount:65,
    timeLimitMinutes:90,
    preparationTarget:80,
    domainWeights:{1:20, 2:24, 3:28, 4:14, 5:14}
  };

  const els = {
    app: document.getElementById("app"),
    sidebar: document.getElementById("sidebar"),
    menu: document.getElementById("menuButton"),
    reset: document.getElementById("resetProgress"),
    export: document.getElementById("exportProgress"),
    import: document.getElementById("importProgress"),
    langEn: document.getElementById("langBtnEn"),
    langEs: document.getElementById("langBtnEs")
  };

  const LANG_KEY = window.I18N_LANG_KEY || "aif-c01-study-hub-lang";

  function getLang(){
    let stored = null;
    try{ stored = localStorage.getItem(LANG_KEY); }catch(err){}
    return stored === "es" ? "es" : "en";
  }

  function updateStaticChrome(){
    document.title = t("app.title");
    const eyebrow = document.getElementById("topbarEyebrow");
    const title = document.getElementById("topbarTitle");
    const footerOrg = document.getElementById("footerOrg");
    const footerText = document.getElementById("footerText");
    if(eyebrow) eyebrow.textContent = t("app.eyebrow");
    if(title) title.textContent = t("app.title");
    els.menu.textContent = t("app.menu");
    els.export.textContent = t("app.exportProgress");
    els.import.textContent = t("app.importProgress");
    els.reset.textContent = t("app.resetProgress");
    if(footerOrg) footerOrg.textContent = t("app.footerOrg");
    if(footerText) footerText.textContent = t("app.footerText");
    if(els.langEn) els.langEn.setAttribute("aria-pressed", String(getLang() === "en"));
    if(els.langEs) els.langEs.setAttribute("aria-pressed", String(getLang() === "es"));
  }

  function setLang(lang){
    const next = lang === "es" ? "es" : "en";
    try{ localStorage.setItem(LANG_KEY, next); }catch(err){}
    if(window.applyLocale) window.applyLocale(next);
    document.documentElement.lang = next;
    updateStaticChrome();
  }

  // Applies the saved (or default) language to the data and static chrome before the
  // very first render, so a returning Spanish-preference user never sees an English flash.
  setLang(getLang());

  // Captures which card sits in which slot / which true-false answers are selected, so an
  // in-progress (unchecked) attempt survives a language switch instead of resetting to the
  // loose-card bank. Only meaningful on a card-round or true/false screen.
  function captureBoardState(){
    if(!activeActivity || !activeRoundId) return null;
    const placements = Array.from(document.querySelectorAll(".slot")).map(slot => ({
      expects: slot.dataset.expects,
      cardIds: Array.from(slot.querySelectorAll(".card")).map(el => el.dataset.cardId)
    })).filter(entry => entry.cardIds.length);
    const tfAnswers = Array.from(document.querySelectorAll(".tf-item")).map(item => ({
      cardId: item.dataset.cardId,
      answer: item.dataset.answer
    })).filter(entry => entry.answer);
    if(!placements.length && !tfAnswers.length) return null;
    return {activityId:activeActivity.id, roundId:activeRoundId, placements, tfAnswers};
  }

  function restoreBoardState(state){
    if(!state || !activeActivity || activeActivity.id !== state.activityId || activeRoundId !== state.roundId) return;
    state.placements.forEach(entry => {
      const slot = document.querySelector('.slot[data-expects="' + CSS.escape(entry.expects) + '"]');
      if(!slot) return;
      entry.cardIds.forEach(cardId => {
        const el = document.querySelector('.card[data-card-id="' + CSS.escape(cardId) + '"]');
        if(el) slot.appendChild(el);
      });
    });
    state.tfAnswers.forEach(entry => {
      const item = document.querySelector('.tf-item[data-card-id="' + CSS.escape(entry.cardId) + '"]');
      if(!item) return;
      item.dataset.answer = entry.answer;
      item.querySelectorAll(".tf-choice").forEach(choice => choice.classList.toggle("is-selected", choice.dataset.value === entry.answer));
    });
    if(document.getElementById("bank")) refreshBankEmpty();
    updateTally();
  }

  function switchLanguage(lang){
    if(lang === getLang()) return;
    const boardState = captureBoardState();
    setLang(lang);
    route();
    restoreBoardState(boardState);
  }

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

  const STATUS_KEYS = {
    "Mastered":"status.mastered", "In progress":"status.inProgress", "Completed":"status.completed",
    "Not started":"status.notStarted", "Review again":"status.reviewAgain", "Recommended":"status.recommended",
    "Revealed":"status.revealed"
  };
  function statusLabel(status){
    return STATUS_KEYS[status] ? t(STATUS_KEYS[status]) : status;
  }

  // taskStatement is stored in English on the data objects because it is also used for
  // internal matching (see renderGuideTask's "Task "+code .includes check) - only translate
  // it at display time, never in the underlying data.
  const TASK_STATEMENT_KEYS = {
    "Domain 1 Reinforcement Units":"taskStatement.d1ReinforcementUnits",
    "Domain 1 review":"taskStatement.d1Review",
    "Domain 2 — Addendum":"taskStatement.d2Addendum",
    "Task 1.3":"taskStatement.task13",
    "Tasks 1.1-1.2":"taskStatement.tasks1112",
    "Tasks 2.1-2.3":"taskStatement.tasks2123",
    "Tasks 3.1-3.4":"taskStatement.tasks3134",
    "Tasks 4.1-4.2":"taskStatement.tasks4142",
    "Tasks 5.1-5.2":"taskStatement.tasks5152"
  };
  function taskStatementLabel(ts){
    return TASK_STATEMENT_KEYS[ts] ? t(TASK_STATEMENT_KEYS[ts]) : ts;
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
    }else if(hash.startsWith("#/exam-center")){
      renderExamCenter();
    }else if(hash.startsWith("#/question-bank")){
      renderQuestionBank(hash);
    }else if(hash.startsWith("#/full-exam")){
      renderFullExam(hash);
    }else if(hash.startsWith("#/link-hub")){
      renderLinkHub();
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
    const home = navLink("#/home", t("nav.home"));
    els.sidebar.appendChild(home);
    data.domains.forEach(domain => {
      const group = document.createElement("section");
      group.className = "nav-domain";
      const link = navLink("#/domain/" + domain.number, t("nav.domain", {n:domain.number}));
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
    els.sidebar.appendChild(navLink("#/exam-center", t("nav.examCenter")));
    els.sidebar.appendChild(navLink("#/link-hub", t("nav.linkHub")));
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
      taskNode.appendChild(sidebarToggle("task-" + task.taskId, t("nav.task") + " " + task.taskCode + " " + task.taskTitle, firstRoute(taskSets), taskSets.reduce((sum,set) => sum + set.cardCount, 0), taskOpen, "nav-task-toggle"));
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
    toggle.setAttribute("aria-label", t(open ? "nav.collapse" : "nav.expand", {text}));
    toggle.textContent = open ? "⌄" : "›";
    const link = navLink(route, text);
    link.classList.add(className + "-link");
    const meta = document.createElement("span");
    meta.className = "nav-count";
    meta.textContent = t("nav.cardsCount", {n:count});
    meta.setAttribute("aria-label", t("nav.cardsCount", {n:count}));
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
    count.setAttribute("aria-label", t("nav.cardsCount", {n:set.cardCount}));
    if(rp.mastered){
      const done = document.createElement("span");
      done.className = "nav-done";
      done.textContent = "✓";
      done.setAttribute("aria-label", t("nav.mastered"));
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
    const a = navLink(addendum.overviewRoute, t("nav.overview"));
    a.classList.add("nav-cardset");
    const count = document.createElement("span");
    count.className = "nav-count";
    count.textContent = t("nav.path");
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
        <p class="objective-label">${t("home.eyebrow")}</p>
        <h2>${t("home.heading")}</h2>
        <p>${t("home.intro")}</p>
        <div class="hero-actions">
          <button class="act" id="continueBtn" type="button">${continueActivity ? t("home.continueStudying") : t("home.startStudying")}</button>
          <button class="act ghost" id="reviewBtn" type="button">${t("home.reviewWeak")}</button>
        </div>
      </section>
      <section class="summary-grid" aria-label="${t("home.progressLabel")}">
        <div class="summary-card"><span>${t("home.activitiesMastered")}</span><b>${mastered} / ${total}</b></div>
        <div class="summary-card"><span>${t("home.activitiesStarted")}</span><b>${completed} / ${total}</b></div>
        <div class="summary-card"><span>${t("home.overallProgress")}</span><b>${Math.round((mastered / total) * 100)}%</b></div>
      </section>
      <section class="page-section">
        <h2>${t("home.domainsHeading")}</h2>
        <div class="domain-grid">${data.domains.map(domainCard).join("")}</div>
      </section>
      <section class="page-section">
        <h2>${t("home.examCenterHeading")}</h2>
        <div class="domain-grid">
          <article class="domain-card">
            <p class="objective-label">${t("home.questionBankLabel")}</p>
            <h3>${t("home.questionBankTitle")}</h3>
            <p>${t("home.questionBankDesc", {n:cyuQuestions.length})}</p>
            <button class="act ghost route-button" data-route="#/question-bank" type="button">${t("home.openQuestionBank")}</button>
          </article>
          <article class="domain-card">
            <p class="objective-label">${t("home.fullSimLabel")}</p>
            <h3>${t("home.fullSimTitle")}</h3>
            <p>${t("home.fullSimDesc")}</p>
            <button class="act ghost route-button" data-route="#/full-exam" type="button">${t("home.openSimExam")}</button>
          </article>
        </div>
      </section>
      <section class="two-col">
        <div class="page-section">
          <h2>${t("home.reviewWeakHeading")}</h2>
          ${weak.length ? activityList(weak) : `<p class="muted">${t("home.noWeakAreas")}</p>`}
        </div>
        <div class="page-section">
          <h2>${t("home.recentlyCompletedHeading")}</h2>
          ${recent.length ? activityList(recent) : `<p class="muted">${t("home.noRecent")}</p>`}
        </div>
      </section>
      <section class="page-section">
        <h2>${t("home.linkHubHeading")}</h2>
        <p>${t("home.linkHubIntro")}</p>
        <div class="badge-row">
          <a class="objective-badge" href="https://www.meetup.com/aws-cloud-club-in-chile/" target="_blank" rel="noopener noreferrer">Meetup</a>
          <a class="objective-badge" href="https://www.linkedin.com/company/aws-sbg-duoc-avaras/about/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a class="objective-badge" href="https://www.instagram.com/aws.sbg.duocavaras/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a class="objective-badge" href="https://chat.whatsapp.com/EZbJ86mQNEhDEFB1HoELn8" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a class="objective-badge" href="https://github.com/AWS-SBG-AntonioVaras" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a class="objective-badge" href="https://aws-sbg-antoniovaras.github.io/Web-SBG/" target="_blank" rel="noopener noreferrer">Website</a>
          <button class="objective-badge route-button" data-route="#/link-hub" type="button">${t("home.viewAll")}</button>
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

  const sbgLinks = [
    {label:"Meetup", url:"https://www.meetup.com/aws-cloud-club-in-chile/", descKey:"sbg.meetup.desc"},
    {label:"LinkedIn", url:"https://www.linkedin.com/company/aws-sbg-duoc-avaras/about/", descKey:"sbg.linkedin.desc"},
    {label:"Instagram", url:"https://www.instagram.com/aws.sbg.duocavaras/", descKey:"sbg.instagram.desc"},
    {label:"WhatsApp", url:"https://chat.whatsapp.com/EZbJ86mQNEhDEFB1HoELn8", descKey:"sbg.whatsapp.desc"},
    {label:"GitHub", url:"https://github.com/AWS-SBG-AntonioVaras", descKey:"sbg.github.desc"},
    {labelKey:"sbg.website.label", url:"https://aws-sbg-antoniovaras.github.io/Web-SBG/", descKey:"sbg.website.desc"},
    {labelKey:"sbg.lastevent.label", url:"https://github.com/AWS-SBG-AntonioVaras/Introduccion-a-la-nube-2026", descKey:"sbg.lastevent.desc"}
  ];

  function linkHubCard(link){
    const label = link.labelKey ? t(link.labelKey) : link.label;
    return `<article class="domain-card">
      <p class="objective-label">${escapeHTML(label)}</p>
      <h3>${escapeHTML(label)}</h3>
      <p>${escapeHTML(t(link.descKey))}</p>
      <a class="act" href="${escapeHTML(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(t("linkHub.openPrefix", {label}))}</a>
    </article>`;
  }

  function renderLinkHub(){
    els.app.innerHTML = `
      <section class="hero-panel">
        <p class="objective-label">${t("linkHub.eyebrow")}</p>
        <h2>${t("linkHub.heading")}</h2>
        <p>${t("linkHub.intro")}</p>
      </section>
      <section class="page-section">
        <div class="domain-grid">${sbgLinks.map(linkHubCard).join("")}</div>
      </section>
    `;
    wireRouteButtons();
  }

  function domainCard(domain){
    const acts = domainActivities(domain.number);
    const mastered = acts.filter(activity => activityStats(activity).status === "Mastered").length;
    return `<article class="domain-card">
      <p class="objective-label">${t("domainCard.label", {n:domain.number})}</p>
      <h3>${domain.title}</h3>
      <p>${domain.description}</p>
      <div class="progress-bar" aria-label="${t("domainCard.masteredAria", {mastered, total:acts.length})}"><span style="width:${acts.length ? mastered / acts.length * 100 : 0}%"></span></div>
      <p class="domain-meta">${t("domainCard.masteredOf", {mastered, total:acts.length})}${acts.length ? "" : t("domainCard.moreComingLater")}</p>
      <button class="act ghost route-button" data-route="#/domain/${domain.number}" type="button">${t("domainCard.openDomain")}</button>
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
        <p class="objective-label">${t("domainCard.label", {n:domain.number})}</p>
        <h2>${domain.title}</h2>
        <p class="muted">${domain.description}</p>
        ${number === 1 ? `<div class="hero-actions"><button class="act route-button" data-route="#/activity/${recommendedReinforcementRoute()}" type="button">${t("home.reviewWeak")}</button></div>` : ""}
      </section>
      ${renderGuideHierarchy(number, acts)}
      ${reinforcement.length ? `
      <section class="page-section">
        <h3>${t("domain.reinforcementHeading")}</h3>
        <div class="activity-list reinforcement-list">${reinforcement.map(reinforcementCard).join("")}</div>
      </section>` : ""}
      <section class="page-section">
        ${acts.length ? groupedActivities(acts) : `<p class="source-note">${t("domain.moreActivities")}</p>`}
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
        <p class="objective-label">${t("addendum.eyebrow")}</p>
        <h2>${escapeHTML(addendum.title)}</h2>
        <p>${escapeHTML(addendum.description)}</p>
        <div class="hero-actions">
          <button class="act route-button" data-route="${next ? addendumRoundRoute(next) : addendumRoundRoute(activity.rounds[0])}" type="button">${stats.completed ? t("addendum.continueBtn") : t("addendum.startBtn")}</button>
          <button class="act ghost route-button" data-route="${next ? addendumRoundRoute(next) : addendumRoundRoute(finalRound)}" type="button">${t("addendum.reviewIncorrect")}</button>
          <button class="act ghost route-button" data-route="${addendumRoundRoute(finalRound)}" type="button">${t("addendum.mixedReview")}</button>
        </div>
      </section>
      <section class="summary-grid" aria-label="${t("addendum.progressLabel")}">
        <div class="summary-card"><span>${t("addendum.cardSets")}</span><b>${activity.rounds.length}</b></div>
        <div class="summary-card"><span>${t("addendum.totalCards")}</span><b>${totalCards}</b></div>
        <div class="summary-card"><span>${t("addendum.setsCompleted")}</span><b>${stats.completed} / ${stats.totalRounds}</b></div>
        <div class="summary-card"><span>${t("addendum.setsMastered")}</span><b>${stats.mastered} / ${stats.totalRounds}</b></div>
        <div class="summary-card"><span>${t("addendum.cardsAttempted")}</span><b>${attemptedCards} / ${totalCards}</b></div>
        <div class="summary-card"><span>${t("addendum.cardsMastered")}</span><b>${masteredCards} / ${totalCards}</b></div>
      </section>
      <section class="page-section addendum-progress">
        <div class="progress-bar" aria-label="${t("addendum.masteredAria", {mastered:stats.mastered, total:stats.totalRounds})}"><span style="width:${stats.totalRounds ? stats.mastered / stats.totalRounds * 100 : 0}%"></span></div>
        <p class="domain-meta">${t("addendum.suggestedOrderNote")}</p>
      </section>
      <section class="page-section addendum-filters">
        <h3>${t("addendum.filterHeading")}</h3>
        <div class="badge-row">${Object.entries(objectiveCounts).map(([objective, count]) => `<span class="objective-badge">${t("addendum.expandsBadge", {objective, count})}</span>`).join("")}</div>
      </section>
      <section class="page-section addendum-units">
        <h3>${t("addendum.studyOrderHeading")}</h3>
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
    const objectives = compressObjectiveCodes(round.objectiveCodes || activity.objectiveCodes);
    const description = (round.instructions || "").split(". ")[0] + ".";
    const isChallenge = /challenge/i.test(round.difficulty || round.title || "") || (round.tags || []).includes("challenge");
    return `<article class="activity-card addendum-unit">
      <div>
        <p class="objective-label">${t("addendumCard.expandsLabel", {objectives:escapeHTML(objectives), difficulty:escapeHTML(round.hierarchy.difficulty), mode:isChallenge ? t("addendumCard.normalChallenge") : t("addendumCard.normalMode")})}</p>
        <h4>${escapeHTML(round.title)}</h4>
        <p>${escapeHTML(description)}</p>
        <p class="domain-meta">${t("addendumCard.meta", {total, status:statusLabel(status), best, priority:escapeHTML(round.hierarchy.priority)})}</p>
      </div>
      <div class="activity-status">
        <span class="status-pill">${statusLabel(status)}</span>
        <button class="act route-button" data-route="${addendumRoundRoute(round)}" type="button">${rp.attempts ? t("addendumCard.continue") : t("addendumCard.start")}</button>
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
    return `<section class="page-section guide-browser" aria-label="${t("guide.hierarchyLabel")}">
      <div class="guide-browser-head">
        <div>
          <p class="objective-label">${t("guide.hierarchyEyebrow", {weight:guide.weight})}</p>
          <h3>${t("guide.browseHeading")}</h3>
          <p class="muted">${t("guide.browseIntro")}</p>
        </div>
        ${domainFirst ? `<button class="act ghost route-button" data-route="#/activity/${domainFirst.id}" type="button">${t("guide.mixedReview", {n:number})}</button>` : ""}
      </div>
      <div class="guide-task-list">
        ${guide.tasks.map(task => renderGuideTask(number, task, sets, acts)).join("")}
      </div>
      <p class="domain-meta">${t("guide.setsAcrossDomain", {sets:sets.length, cards:domainTotal, n:number})}</p>
    </section>`;
  }

  function renderGuideTask(number, task, sets, acts){
    const taskSets = sets.filter(set => set.taskId === task.taskId);
    const taskCards = taskSets.reduce((sum, set) => sum + set.cardCount, 0);
    const taskActivity = acts.find(activity => activity.module === "hub-card-engine" && (activity.taskStatement || "").includes("Task " + task.taskCode));
    return `<details class="guide-task" open>
      <summary>
        <span><strong>${t("nav.task")} ${task.taskCode}</strong> ${escapeHTML(task.taskTitle)}</span>
        <b>${t("guide.setsCards", {sets:taskSets.length, cards:taskCards})}</b>
      </summary>
      <div class="guide-task-actions">
        ${taskActivity ? `<button class="act ghost route-button" data-route="#/activity/${taskActivity.id}" type="button">${t("guide.taskCombinedReview", {code:task.taskCode})}</button>` : ""}
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
        <p class="objective-label">${t("guide.subtaskLabel", {id:subtask.subtaskId})}</p>
        <h4>${escapeHTML(subtask.subtaskTitle)}</h4>
        <span>${subtaskSets.length ? t("guide.setsCards", {sets:subtaskSets.length, cards}) : t("guide.noTargetedSet")}</span>
      </header>
      ${subtaskSets.length ? `<div class="guide-cardsets">${subtaskSets.map(renderGuideCardSet).join("")}</div>` : `<p class="muted">${t("guide.coveredElsewhere")}</p>`}
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
        <p class="domain-meta">${t("guide.setMeta", {count:set.cardCount, status:statusLabel(status), best})}</p>
      </div>
      <button class="act route-button" data-route="#/activity/${set.activityId}/${set.roundId}" type="button">${t("guide.openSet")}</button>
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
          cardType:h.cardType || t("guide.mixedReviewCardType"),
          difficulty:h.difficulty || activity.difficulty || t("enum.difficultyFoundational"),
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
        <p class="objective-label">${compressObjectiveCodes(activity.objectiveCodes)} · ${activity.activityType}</p>
        <h4>${activity.title}</h4>
        <p>${rec.reason || activity.shortDescription}</p>
        <p class="domain-meta">${t("reinforcementCard.meta", {latest:stats.latestPercent || 0, best:stats.bestPercent})}</p>
      </div>
      <div class="activity-status">
        <span class="status-pill">${statusLabel(stats.status)}</span>
        ${rec.urgent ? `<span>${t("reinforcementCard.weakArea")}</span>` : ""}
        <button class="act route-button" data-route="#/activity/${activity.id}" type="button">${stats.completed ? t("reinforcementCard.review") : t("reinforcementCard.start")}</button>
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
        <h3>${taskStatementLabel(task)}</h3>
        <div class="activity-list">${list.map(activityCard).join("")}</div>
      </section>
    `).join("");
  }

  function activityCard(activity){
    const stats = activityStats(activity);
    return `<article class="activity-card">
      <div>
        <p class="objective-label">${compressObjectiveCodes(activity.objectiveCodes)} · ${activity.activityType}</p>
        <h4>${activity.title}</h4>
        <p>${activity.shortDescription}</p>
        <p class="domain-meta">${t("activityCard.meta", {rounds:activity.rounds.length, cards:countCards(activity), time:activity.estimatedTime, difficulty:activity.difficulty})}</p>
      </div>
      <div class="activity-status">
        <span class="status-pill">${statusLabel(stats.status)}</span>
        <span>${t("groupedActivities.bestPercent", {pct:stats.bestPercent})}</span>
        <button class="act route-button" data-route="#/activity/${activity.id}" type="button">${t("activityCard.open")}</button>
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
            <p class="objective-label">${t("activity.eyebrow", {domain:activity.domain, task:taskStatementLabel(activity.taskStatement), objectives:compressObjectiveCodes(round.objectiveCodes || activity.objectiveCodes)})}</p>
            <h2>${activity.title}</h2>
            <p>${activity.shortDescription}</p>
          </div>
          <div class="activity-links">
            <button class="link-button route-button" data-route="#/home" type="button">${t("activity.dashboard")}</button>
            <button class="link-button route-button" data-route="${inAddendum ? addendum.overviewRoute : "#/domain/" + activity.domain}" type="button">${inAddendum ? t("activity.backToAddendum") : t("activity.backToDomain")}</button>
          </div>
        </header>
        <nav class="activity-nav" aria-label="${t("activity.sequenceLabel")}">
          ${nav.prev ? `<button class="act ghost route-button" data-route="${inAddendum ? addendumRoundRoute(nav.prev) : "#/activity/" + nav.prev.id}" type="button">${inAddendum ? t("activity.prevAddendumSet") : t("activity.prevActivity")}</button>` : ""}
          ${nav.next ? `<button class="act ghost route-button" data-route="${inAddendum ? addendumRoundRoute(nav.next) : "#/activity/" + nav.next.id}" type="button">${inAddendum ? t("activity.nextAddendumSet") : t("activity.nextActivity")}</button>` : ""}
        </nav>
        <nav class="rounds" id="roundTabs" role="tablist" aria-label="${t("activity.roundsLabel")}">${activity.rounds.map(roundTab).join("")}</nav>
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
          <h3>${t("activity.looseCards")}</h3>
          <span class="hint">${t("activity.hint")}</span>
        </div>
        <div class="bank" id="bank" aria-label="${t("activity.unplacedCardsLabel")}"></div>
        <div class="board" id="board"></div>
        <div class="controls">
          <button class="act" id="btnCheck" type="button">${round.checkLabel || t("activity.checkAnswers")}</button>
          <button class="act ghost" id="btnShuffle" type="button">${t("activity.shuffleLooseCards")}</button>
          <button class="act ghost" id="btnClear" type="button">${t("activity.clearBoard")}</button>
          <button class="act ghost" id="btnReveal" type="button">${t("activity.revealAnswers")}</button>
        </div>
        <section class="feedback" aria-live="polite">
          <p class="verdict" id="verdict"></p>
          <div class="explanations" id="explanations" hidden></div>
        </section>
      </section>
    `;
    wireRouteButtons();
    const roundTabs = document.getElementById("roundTabs");
    if (roundTabs) {
      roundTabs.addEventListener("click", (e) => {
        const tab = e.target.closest(".round-tab");
        if (tab) {
          setRoute("#/activity/" + activity.id + "/" + tab.dataset.round);
        }
      });
    }
    renderRoundBoard();
  }

  function roundTab(round){
    const rp = roundProgress(activeActivity.id, round.id);
    return `<button class="round-tab ${rp.mastered ? "is-mastered" : ""}" type="button" role="tab" data-round="${round.id}" aria-selected="${round.id === activeRoundId}">${round.title} <span class="tab-count">${t("nav.cardsCount", {n:totalForRound(round)})}</span></button>`;
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
        slotTypes:round.slotTypes || [{key:"answer", label:round.slotLabel || t("round.defaultAnswerLabel")}],
        capacity:round.capacity || (round.activity === "sort" ? "many" : "one"),
        cards:round.cards.map(card => Object.assign({}, card, {answers:Array.isArray(card.answers) ? card.answers : [card.answer]}))
      };
    }
    if(round.mode === "buckets"){
      return {
        intro:round.intro || "",
        footnote:round.footnote,
        destinations:round.targets,
        slotTypes:[{key:"answer", label:t("round.dropHere")}],
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
    const types = round.slotTypes || [{key:"answer", label:t("round.defaultAnswerLabel")}];
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
          <button class="tf-choice" type="button" data-value="true">${t("tf.true")}</button>
          <button class="tf-choice" type="button" data-value="false">${t("tf.false")}</button>
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
        mark.textContent = t("board.misplaced", {n:wrong.length});
        mark.className = "mark no";
      }else{
        slot.classList.add("is-correct");
        mark.textContent = cards.length === 1 ? t("board.correctSingle") : t("board.correctPlural", {n:cards.length});
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
    if(!filled) verdict.textContent = t("board.placeCardsFirst");
    else if(mastered){
      verdict.textContent = t("board.allCorrectMastered", {total});
      verdict.className = "verdict win";
      showCompletionActions();
    }else if(correct === total) verdict.textContent = t("board.correctButRevealed");
    else verdict.textContent = t("board.partialCorrect", {correct, total});
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
    if(!answered) verdict.textContent = t("tf.chooseFirst");
    else if(mastered){
      verdict.textContent = t("tf.allStatementsCorrect", {total});
      verdict.className = "verdict win";
      showCompletionActions();
    }else if(correct === total) verdict.textContent = t("board.correctButRevealed");
    else verdict.textContent = t("tf.partialCorrect", {correct, total});
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
    document.getElementById("verdict").textContent = t("board.answersRevealed");
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
      mark.textContent = t("round.defaultAnswerLabel");
      mark.className = "mark ok";
    });
    const rp = roundProgress(activeActivity.id, activeRoundId);
    rp.revealed = true;
    rp.total = norm.cards.length;
    saveProgress();
    updateTally();
    refreshBankEmpty();
    document.getElementById("verdict").textContent = t("board.answersRevealed");
  }

  function showCompletionActions(){
    const box = document.getElementById("explanations");
    const nextRound = nextRoundId();
    const callout = currentRound().completionCallout;
    const inAddendum = isAddendumActivity(activeActivity);
    box.hidden = false;
    box.innerHTML = `${callout ? `<div class="exam-tip"><h3>${escapeHTML(callout.title)}</h3><p>${escapeHTML(callout.text)}</p></div>` : ""}
      <h3>${t("completion.nextStep")}</h3>
      <button class="act ghost" id="retryRound" type="button">${t("completion.retry")}</button>
      ${nextRound ? `<button class="act" id="nextRound" type="button">${t("completion.nextRound")}</button>` : `<button class="act" id="nextActivity" type="button">${t("completion.nextActivity")}</button>`}
      <button class="act ghost route-button" data-route="${inAddendum ? addendum.overviewRoute : "#/domain/" + activeActivity.domain}" type="button">${inAddendum ? t("completion.returnToAddendum") : t("completion.returnToDomain")}</button>`;
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
      p.textContent = t("board.allPlaced");
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
    return t("progress.bestOf", {best:rp.bestScore || 0, total:totalForRound(round)}) + (rp.mastered ? t("progress.masteredSuffix") : rp.revealed ? t("progress.revealedSuffix") : "");
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
            <p class="objective-label">${t("activity.eyebrow", {domain:1, task:taskStatementLabel(unit.taskStatement), objectives:unit.objectives.join(", ")})}</p>
            <h2>${unit.title}</h2>
            <p>${unit.reason}</p>
          </div>
          <div class="activity-links">
            <button class="link-button route-button" data-route="#/home" type="button">${t("activity.dashboard")}</button>
            <button class="link-button route-button" data-route="#/domain/1" type="button">${t("activity.backToDomain")}</button>
          </div>
        </header>
        <section class="summary-grid">
          <div class="summary-card"><span>${t("reinforce.status")}</span><b>${statusLabel(stats.status)}</b></div>
          <div class="summary-card"><span>${t("reinforce.bestCheckpoint")}</span><b>${stats.bestPercent}%</b></div>
          <div class="summary-card"><span>${t("reinforce.practiceItems")}</span><b>${(unit.practice || []).length}</b></div>
          <div class="summary-card"><span>${t("reinforce.checkpoint")}</span><b>${(unit.checkpoint || []).length}</b></div>
        </section>
        ${renderRapidReview(unit)}
        ${renderGuidedExamples(unit)}
        ${renderPractice(unit, rp)}
        ${renderCheckpoint(unit, rp)}
        <div class="controls">
          <button class="act ghost route-button" data-route="#/activity/${unit.relatedActivityId}" type="button">${t("reinforce.openRelated")}</button>
          <button class="act ghost" id="repeatUnit" type="button">${t("reinforce.repeatUnit")}</button>
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
      <p class="objective-label">${t("reinforce.stage1")}</p>
      <h3>${t("reinforce.decidingClues")}</h3>
      <p>${escapeHTML(review.summary)}</p>
      <div class="comparison-table" role="table">
        ${review.table.map(row => `<div role="row"><b role="cell">${escapeHTML(row[0])}</b><span role="cell">${escapeHTML(row[1])}</span><em role="cell">${escapeHTML(row[2])}</em></div>`).join("")}
      </div>
      <div class="reinforce-grid">
        <div><h4>${t("reinforce.clues")}</h4><ul>${review.clues.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul></div>
        <div><h4>${t("reinforce.commonTraps")}</h4><ul>${review.traps.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul></div>
      </div>
      <div class="mini-comparisons">${(review.comparisons || []).map(row => `<p><strong>${escapeHTML(row[0])}:</strong> ${escapeHTML(row[1])}</p>`).join("")}</div>
    </section>`;
  }

  function renderGuidedExamples(unit){
    if(!unit.guidedExamples.length) return "";
    return `<section class="reinforce-section">
      <p class="objective-label">${t("reinforce.stage2")}</p>
      <h3>${t("reinforce.reasoningVisible")}</h3>
      <div class="guided-grid">${unit.guidedExamples.map(example => `<article class="guided-card">
        <h4>${escapeHTML(example.answer)}</h4>
        <p>${escapeHTML(example.scenario)}</p>
        <p><strong>${t("reinforce.requirement")}</strong> ${escapeHTML(example.workload)}</p>
        <p><strong>${t("reinforce.wordsThatMatter")}</strong> ${escapeHTML(example.clues)}</p>
        <p><strong>${t("reinforce.whyThisFits")}</strong> ${escapeHTML(example.whyCorrect)}</p>
        <p><strong>${t("reinforce.closestDistractor")}</strong> ${escapeHTML(example.closestAlternative)}. ${escapeHTML(example.whyAlternativeFails)}</p>
      </article>`).join("")}</div>
    </section>`;
  }

  function renderPractice(unit, rp){
    if(!unit.practice.length) return "";
    return `<section class="reinforce-section">
      <p class="objective-label">${t("reinforce.stage3")}</p>
      <h3>${t("reinforce.shortScenarios")}</h3>
      <div class="practice-list">${unit.practice.map((question, index) => renderPracticeItem(question, index, rp.practiceAnswers[question.id])).join("")}</div>
    </section>`;
  }

  function renderPracticeItem(question, index, saved){
    const selected = saved ? saved.selected || [] : [];
    const answered = !!saved;
    const correct = answered && isCorrectSelection(question, selected);
    const inputType = question.type === "multiple-response" ? "checkbox" : "radio";
    return `<article class="practice-card ${answered ? correct ? "is-correct" : "is-wrong" : ""}" data-question-id="${question.id}">
      <p class="objective-label">${t("reinforce.objectiveLabel", {n:index + 1, objective:question.objective})}${question.type === "multiple-response" ? t("reinforce.selectN", {n:question.correctAnswers.length}) : ""}</p>
      <h4>${escapeHTML(question.stem)}</h4>
      <form class="options-form">${question.options.map(option => `<label class="option-row"><input type="${inputType}" name="practice-${question.id}" value="${option.id}" ${selected.includes(option.id) ? "checked" : ""}> <span>${escapeHTML(option.text)}</span></label>`).join("")}</form>
      <button class="act practice-submit" type="button">${answered ? t("reinforce.updateAnswer") : t("reinforce.submit")}</button>
      <div class="practice-feedback" ${answered ? "" : "hidden"}>${answered ? renderImmediateFeedback(question, selected, correct) : ""}</div>
    </article>`;
  }

  function renderImmediateFeedback(question, selected, correct){
    return `<p class="${correct ? "verdict win" : "verdict"}">${correct ? t("reinforce.correct") : t("reinforce.notQuite")} ${escapeHTML(question.explanation)}</p>
      <p><strong>${t("reinforce.decidingClueLabel")}</strong> ${escapeHTML(question.decidingClue)}</p>
      <p><strong>${t("reinforce.closestDistractor")}</strong> ${escapeHTML(question.closestDistractor)}. ${escapeHTML(question.whyClosestDistractorIsWrong)}</p>
      <p class="domain-meta">${t("reinforce.selectedCorrectSource", {selected:escapeHTML(selected.join(", ") || t("reinforce.none")), correct:escapeHTML(question.correctAnswers.join(", ")), source:escapeHTML(question.sourceReference)})}</p>`;
  }

  function wirePractice(unit, activity){
    document.querySelectorAll(".practice-submit").forEach(button => {
      button.addEventListener("click", () => {
        const card = button.closest(".practice-card");
        const question = findReinforcementQuestion(unit, card.dataset.questionId);
        const selected = Array.from(card.querySelectorAll("input:checked")).map(input => input.value).sort();
        if(!selected.length){ card.querySelector(".practice-feedback").hidden = false; card.querySelector(".practice-feedback").innerHTML = `<p class="verdict">${t("reinforce.chooseAnswerFirst")}</p>`; return; }
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
      <p class="objective-label">${t("reinforce.stage4")}</p>
      <h3>${unit.id === "domain1-reinforcement-checkpoint" ? t("reinforce.mixedCheckpointTitle") : t("reinforce.checkpoint")}</h3>
      <p class="muted">${unit.immediateCheckpointFeedback ? t("reinforce.immediateFeedbackDesc") : t("reinforce.delayedFeedbackDesc")}</p>
      <button class="act" id="startCheckpoint" type="button">${t("reinforce.startCheckpoint")}</button>
    </section>`;
    if(session.complete) return renderCheckpointResult(unit, rp, session);
    const ids = session.phase === "retry" ? session.retryIds : session.questionIds;
    const question = findReinforcementQuestion(unit, ids[session.currentIndex]);
    const selected = session.answers[question.id] || [];
    const answered = !!session.submitted[question.id];
    const showFeedback = answered && unit.immediateCheckpointFeedback;
    return `<section class="reinforce-section checkpoint-panel">
      <p class="objective-label">${t("reinforce.stage4Phase", {phase:session.phase === "retry" ? t("reinforce.retry") : t("reinforce.firstPass")})}</p>
      <h3>${t("reinforce.questionOf", {n:session.currentIndex + 1, total:ids.length})}</h3>
      <p class="question-stem">${escapeHTML(question.stem)}</p>
      <form class="options-form">${renderReinforcementOptions(question, selected, "checkpoint-" + question.id)}</form>
      <div class="checkpoint-actions">
        <button class="act" id="submitCheckpointAnswer" type="button">${answered ? session.currentIndex === ids.length - 1 ? t("reinforce.continue") : t("reinforce.next") : t("reinforce.submitAnswer")}</button>
        <button class="act ghost" id="restartCheckpoint" type="button">${t("reinforce.restartCheckpoint")}</button>
      </div>
      <div class="practice-feedback" ${showFeedback ? "" : "hidden"}>${showFeedback ? renderImmediateFeedback(question, selected, isCorrectSelection(question, selected)) : ""}</div>
    </section>`;
  }

  function renderReinforcementOptions(question, selected, name){
    const inputType = question.type === "multiple-response" ? "checkbox" : "radio";
    const hint = question.type === "multiple-response" ? `<p class="mrq-hint">${t("reinforce.selectHint", {word:numberWord(question.correctAnswers.length)})}</p>` : "";
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
      <p class="objective-label">${t("checkpointResult.stage")}</p>
      <h3>${t("checkpointResult.scoreLine", {correct:result.correct, total:result.total, pct:result.percent})}</h3>
      <p class="${result.percent >= (unit.masteryPercent || 85) ? "verdict win" : "verdict"}">${result.percent >= (unit.masteryPercent || 85) ? t("checkpointResult.mastered") : t("checkpointResult.reviewAgain")}</p>
      <div class="summary-grid">${Object.entries(result.byObjective).map(([objective, row]) => `<div class="summary-card"><span>${objective}</span><b>${row.correct}/${row.total} · ${percent(row)}%</b></div>`).join("")}</div>
      ${result.missedQuestionIds.length ? `<h4>${t("checkpointResult.reviewIncorrect")}</h4>${result.missedQuestionIds.map(id => {
        const question = findReinforcementQuestion(unit, id);
        const route = question.linkUnitId || unit.id;
        return `<details class="review-item"><summary>${escapeHTML(question.stem)}</summary>
          ${renderImmediateFeedback(question, (session.firstPassAnswers && session.firstPassAnswers[id]) || session.answers[id] || [], false)}
          <button class="link-button route-button" data-route="#/activity/${route}" type="button">${t("checkpointResult.openLinked")}</button>
        </details>`;
      }).join("")}` : `<p class="muted">${t("checkpointResult.noIncorrect")}</p>`}
      <button class="act" id="finishCheckpoint" type="button">${t("checkpointResult.continueReviewing")}</button>
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

  function examCenterProgress(){
    progress.examCenter = progress.examCenter || {};
    progress.examCenter.questionHistory = progress.examCenter.questionHistory || {};
    progress.examCenter.questionBank = progress.examCenter.questionBank || null;
    progress.examCenter.fullExam = progress.examCenter.fullExam || {attempts:[], activeAttempt:null, lastResult:null};
    return progress.examCenter;
  }

  function renderExamCenter(){
    if(examTimerId) clearInterval(examTimerId);
    activeActivity = null;
    const domainCounts = cyuDomainCounts();
    const typeCounts = cyuTypeCounts();
    const ec = examCenterProgress();
    const latest = ec.fullExam.lastResult || (ec.fullExam.attempts || [])[0];
    els.app.innerHTML = `
      <section class="hero-panel">
        <p class="objective-label">${t("examCenter.eyebrow")}</p>
        <h2>${t("examCenter.heading")}</h2>
        <p>${t("examCenter.intro")}</p>
        <div class="hero-actions">
          <button class="act route-button" data-route="#/question-bank" type="button">${t("home.openQuestionBank")}</button>
          <button class="act ghost route-button" data-route="#/full-exam/start" type="button">${t("examCenter.startFullExam")}</button>
        </div>
      </section>
      <section class="summary-grid" aria-label="${t("examCenter.summaryLabel")}">
        <div class="summary-card"><span>${t("examCenter.totalQuestions")}</span><b>${cyuQuestions.length}</b></div>
        <div class="summary-card"><span>${t("examCenter.objectivesCovered")}</span><b>${Object.keys(cyuObjectiveCounts()).length}</b></div>
        <div class="summary-card"><span>${t("examCenter.fullExam")}</span><b>${t("examCenter.nQuestions", {n:fullExamConfig.questionCount})}</b></div>
        <div class="summary-card"><span>${t("examCenter.timer")}</span><b>${t("examCenter.nMinutes", {n:fullExamConfig.timeLimitMinutes})}</b></div>
      </section>
      <section class="page-section">
        <h3>${t("examCenter.domainCoverage")}</h3>
        <div class="summary-grid">${Object.entries(domainCounts).map(([domain, count]) => `<div class="summary-card"><span>${t("domainCard.label", {n:domain})}</span><b>${count}</b></div>`).join("")}</div>
      </section>
      <section class="two-col">
        <div class="page-section">
          <h3>${t("examCenter.questionTypes")}</h3>
          <div class="badge-row">${Object.entries(typeCounts).map(([type, count]) => `<span class="objective-badge">${escapeHTML(cyuTypeLabel(type))} · ${count}</span>`).join("")}</div>
        </div>
        <div class="page-section">
          <h3>${t("examCenter.latestSimulation")}</h3>
          ${latest ? `<p class="domain-meta">${t("examCenter.resultLine", {correct:latest.correct, total:latest.total, pct:latest.percent, date:escapeHTML(latest.completedAt ? new Date(latest.completedAt).toLocaleString() : t("examCenter.submitted"))})}</p>
          <button class="act ghost route-button" data-route="#/full-exam/result/${latest.id}" type="button">${t("examCenter.reviewResults")}</button>` : `<p class="muted">${t("examCenter.noAttemptYet")}</p>`}
        </div>
      </section>
    `;
    wireRouteButtons();
  }

  function renderQuestionBank(hash){
    if(examTimerId) clearInterval(examTimerId);
    activeActivity = null;
    const parts = hash.split("/");
    if(parts.length <= 2 || !parts[2]){
      renderQuestionBankHome();
      return;
    }
    const mode = parts[2];
    const value = decodeURIComponent(parts.slice(3).join("/"));
    const key = mode + ":" + value;
    const ids = questionBankIds(mode, value);
    renderQuestionBankSession(key, ids.length ? ids : cyuQuestions.map(question => question.id));
  }

  function renderQuestionBankHome(){
    const domainCounts = cyuDomainCounts();
    const objectiveCounts = cyuObjectiveCounts();
    const history = examCenterProgress().questionHistory;
    const missed = cyuQuestions.filter(question => {
      const row = history[question.id];
      return row && ((row.incorrectCount || 0) > 0 || (row.unansweredCount || 0) > 0);
    }).length;
    const unseen = cyuQuestions.filter(question => !history[question.id] || !history[question.id].lastSeenDate).length;
    els.app.innerHTML = `
      <section class="page-section">
        <p class="objective-label">${t("home.questionBankLabel")}</p>
        <h2>${t("home.questionBankTitle")}</h2>
        <p class="muted">${t("qbank.intro")}</p>
        <div class="hero-actions">
          <button class="act route-button" data-route="#/question-bank/filter/all" type="button">${t("qbank.reviewAll")}</button>
          <button class="act ghost route-button" data-route="#/question-bank/filter/missed" type="button">${t("qbank.missed")}</button>
          <button class="act ghost route-button" data-route="#/question-bank/filter/unseen" type="button">${t("qbank.unseen")}</button>
          <button class="act ghost route-button" data-route="#/question-bank/filter/mixed" type="button">${t("qbank.mixed30")}</button>
        </div>
      </section>
      <section class="summary-grid">
        <div class="summary-card"><span>${t("qbank.total")}</span><b>${cyuQuestions.length}</b></div>
        <div class="summary-card"><span>${t("qbank.missedOrUnanswered")}</span><b>${missed}</b></div>
        <div class="summary-card"><span>${t("qbank.unseen")}</span><b>${unseen}</b></div>
        <div class="summary-card"><span>${t("qbank.excluded")}</span><b>${(cyuBank.excluded || []).length}</b></div>
      </section>
      <section class="page-section">
        <h3>${t("qbank.browseByDomain")}</h3>
        <div class="activity-list">${Object.entries(domainCounts).map(([domain, count]) => `<article class="activity-card">
          <div><p class="objective-label">${t("domainCard.label", {n:domain})}</p><h4>${escapeHTML(domainTitle(Number(domain)))}</h4><p class="domain-meta">${t("examCenter.nQuestions", {n:count})}</p></div>
          <button class="act route-button" data-route="#/question-bank/domain/${domain}" type="button">${t("qbank.practice")}</button>
        </article>`).join("")}</div>
      </section>
      <section class="page-section">
        <h3>${t("qbank.browseByObjective")}</h3>
        <div class="activity-list">${Object.entries(objectiveCounts).map(([objective, count]) => `<article class="activity-card">
          <div><p class="objective-label">${escapeHTML(objective)}</p><h4>${escapeHTML(objectiveTitle(objective))}</h4><p class="domain-meta">${t("qbank.nQuestionsPlural", {n:count, s:count === 1 ? "" : t("qbank.pluralSuffix")})}</p></div>
          <button class="act ghost route-button" data-route="#/question-bank/objective/${encodeURIComponent(objective)}" type="button">${t("qbank.practice")}</button>
        </article>`).join("")}</div>
      </section>
    `;
    wireRouteButtons();
  }

  function renderQuestionBankSession(key, questionIds){
    const ec = examCenterProgress();
    if(!ec.questionBank || ec.questionBank.key !== key){
      ec.questionBank = {key, questionIds:questionIds.slice(), currentIndex:0, answers:{}, checked:{}, viewed:{}};
      saveProgress();
    }
    const session = ec.questionBank;
    const index = Math.max(0, Math.min(session.currentIndex || 0, session.questionIds.length - 1));
    session.currentIndex = index;
    const question = cyuQuestionById(session.questionIds[index]);
    if(!question){ renderQuestionBankHome(); return; }
    recordCyuView(question.id, "bank", session.viewed);
    const answer = session.answers[question.id];
    const wasChecked = !!session.checked[question.id];
    els.app.innerHTML = `
      <section class="page-section">
        <div class="exam-head">
          <div>
            <p class="objective-label">${t("qbank.sessionEyebrow", {n:index + 1, total:session.questionIds.length})}</p>
            <h2>${escapeHTML(question.objective)} · ${escapeHTML(objectiveTitle(question.objective))}</h2>
            <p class="domain-meta">${t("qbank.domainType", {domain:question.domain, type:escapeHTML(cyuTypeLabel(question.type)), source:escapeHTML(question.source || t("qbank.masterCyuSource"))})}</p>
          </div>
          <button class="act ghost route-button" data-route="#/question-bank" type="button">${t("qbank.bankHome")}</button>
        </div>
      </section>
      <section class="page-section">
        ${renderCyuQuestionForm(question, answer, "qb", false, null)}
        <div class="hero-actions">
          <button class="act" id="checkBankAnswer" type="button">${wasChecked ? t("qbank.updateCheck") : t("qbank.checkAnswer")}</button>
          <button class="act ghost" id="prevBankQuestion" type="button" ${index === 0 ? "disabled" : ""}>${t("qbank.previous")}</button>
          ${index === session.questionIds.length - 1
            ? `<button class="act ghost route-button" data-route="#/question-bank" type="button">${t("qbank.backToBank")}</button>`
            : `<button class="act ghost" id="nextBankQuestion" type="button">${t("qbank.next")}</button>`}
        </div>
        ${wasChecked ? renderCyuFeedback(question, answer, isCyuCorrect(question, answer)) : ""}
      </section>
    `;
    wireCyuAnswerInputs(question, answer, "qb", value => {
      session.answers[question.id] = value;
      saveProgress();
    });
    document.getElementById("checkBankAnswer").addEventListener("click", () => {
      session.answers[question.id] = readCyuAnswer(question, "qb");
      if(!session.checked[question.id]) recordCyuResult(question.id, session.answers[question.id], isCyuCorrect(question, session.answers[question.id]));
      session.checked[question.id] = true;
      saveProgress();
      renderQuestionBankSession(key, session.questionIds);
    });
    document.getElementById("prevBankQuestion").addEventListener("click", () => {
      session.currentIndex = Math.max(0, index - 1);
      saveProgress();
      renderQuestionBankSession(key, session.questionIds);
    });
    const nextBank = document.getElementById("nextBankQuestion");
    if(nextBank) nextBank.addEventListener("click", () => {
      session.currentIndex = Math.min(session.questionIds.length - 1, index + 1);
      saveProgress();
      renderQuestionBankSession(key, session.questionIds);
    });
    wireRouteButtons();
  }

  function renderFullExam(hash){
    const ec = examCenterProgress();
    const full = ec.fullExam;
    const parts = hash.split("/");
    if(parts[2] === "start"){
      renderFullExamStart();
      return;
    }
    if(parts[2] === "result" && parts[3]){
      const result = (full.attempts || []).find(item => item.id === parts[3]) || full.lastResult;
      if(result) renderFullExamResults(result);
      else renderFullExamStart();
      return;
    }
    if(full.activeAttempt && !full.activeAttempt.submitted){
      const remaining = full.activeAttempt.expiresAt - Date.now();
      if(remaining <= 0){
        submitFullExam(true);
      }else{
        renderFullExamQuestion();
      }
      return;
    }
    if(full.lastResult){
      renderFullExamResults(full.lastResult);
      return;
    }
    renderFullExamStart();
  }

  function renderFullExamStart(){
    if(examTimerId) clearInterval(examTimerId);
    const ec = examCenterProgress();
    const latest = ec.fullExam.lastResult;
    els.app.innerHTML = `
      <section class="hero-panel">
        <p class="objective-label">${t("fullExam.eyebrow")}</p>
        <h2>${t("fullExam.headingCount", {count:fullExamConfig.questionCount, minutes:fullExamConfig.timeLimitMinutes})}</h2>
        <p>${t("fullExam.intro")}</p>
        <div class="hero-actions">
          <button class="act" id="startFullExam" type="button">${t("fullExam.startNew")}</button>
          ${latest ? `<button class="act ghost route-button" data-route="#/full-exam/result/${latest.id}" type="button">${t("fullExam.reviewLatest")}</button>` : ""}
        </div>
      </section>
      <section class="page-section">
        <h3>${t("fullExam.samplingPlan")}</h3>
        <div class="summary-grid">${fullExamAllocation().map(row => `<div class="summary-card"><span>${t("domainCard.label", {n:row.domain})}</span><b>${t("examCenter.nQuestions", {n:row.count})}</b></div>`).join("")}</div>
      </section>
      <section class="page-section">
        <p class="source-note">${t("fullExam.readinessNote")}</p>
      </section>
    `;
    document.getElementById("startFullExam").addEventListener("click", () => {
      ec.fullExam.activeAttempt = buildFullExamAttempt();
      ec.fullExam.lastResult = null;
      saveProgress();
      renderFullExamQuestion();
    });
    wireRouteButtons();
  }

  function renderFullExamQuestion(){
    const full = examCenterProgress().fullExam;
    const attempt = full.activeAttempt;
    if(!attempt){ renderFullExamStart(); return; }
    const index = Math.max(0, Math.min(attempt.currentIndex || 0, attempt.questionIds.length - 1));
    attempt.currentIndex = index;
    const question = cyuQuestionById(attempt.questionIds[index]);
    if(!question){ renderFullExamStart(); return; }
    const answer = attempt.answers[question.id];
    els.app.innerHTML = `
      <section class="page-section">
        <div class="exam-head">
          <div>
            <p class="objective-label">${t("fullExam.questionEyebrow", {n:index + 1, total:attempt.questionIds.length})}</p>
            <h2>${t("fullExam.timedAttempt")}</h2>
            <p class="domain-meta">${t("fullExam.noFeedback")}</p>
          </div>
          <div class="exam-timer" id="fullExamTimer" aria-live="polite"></div>
        </div>
        <div class="exam-progress">${attempt.questionIds.map((id, idx) => fullExamNavButton(attempt, id, idx)).join("")}</div>
      </section>
      <section class="page-section">
        ${renderCyuQuestionForm(question, answer, "full", true, attempt)}
        <div class="hero-actions">
          <button class="act ghost" id="prevFullQuestion" type="button" ${index === 0 ? "disabled" : ""}>${t("qbank.previous")}</button>
          <button class="act ghost" id="flagFullQuestion" type="button">${attempt.flagged[question.id] ? t("fullExam.unflag") : t("fullExam.flag")}</button>
          ${index === attempt.questionIds.length - 1
            ? `<button class="act" id="finishFullExam" type="button">${t("fullExam.finishExam")}</button>`
            : `<button class="act ghost" id="nextFullQuestion" type="button">${t("qbank.next")}</button>`}
        </div>
      </section>
    `;
    updateFullExamTimer();
    if(examTimerId) clearInterval(examTimerId);
    examTimerId = setInterval(updateFullExamTimer, 1000);
    wireCyuAnswerInputs(question, answer, "full", value => {
      attempt.answers[question.id] = value;
      saveProgress();
      updateFullExamNav();
    });
    document.querySelectorAll(".question-jump").forEach(button => {
      button.addEventListener("click", () => {
        attempt.answers[question.id] = readCyuAnswer(question, "full");
        attempt.currentIndex = Number(button.dataset.index);
        saveProgress();
        renderFullExamQuestion();
      });
    });
    document.getElementById("prevFullQuestion").addEventListener("click", () => moveFullExam(-1));
    const nextFull = document.getElementById("nextFullQuestion");
    if(nextFull) nextFull.addEventListener("click", () => moveFullExam(1));
    document.getElementById("flagFullQuestion").addEventListener("click", () => {
      attempt.flagged[question.id] = !attempt.flagged[question.id];
      saveProgress();
      renderFullExamQuestion();
    });
    const finishFull = document.getElementById("finishFullExam");
    if(finishFull) finishFull.addEventListener("click", () => {
      attempt.answers[question.id] = readCyuAnswer(question, "full");
      saveProgress();
      const answered = attempt.questionIds.filter(id => isCyuAnswered(cyuQuestionById(id), attempt.answers[id])).length;
      if(confirm(t("fullExam.confirmSubmit", {answered, total:attempt.questionIds.length}))) submitFullExam(false);
    });
  }

  function renderFullExamResults(result){
    if(examTimerId) clearInterval(examTimerId);
    const weakObjectives = result.byObjective.filter(row => row.total && row.percent < fullExamConfig.preparationTarget);
    els.app.innerHTML = `
      <section class="hero-panel">
        <p class="objective-label">${t("fullExam.resultEyebrow")}</p>
        <h2>${t("checkpointResult.scoreLine", {correct:result.correct, total:result.total, pct:result.percent})}</h2>
        <p>${result.automaticSubmit ? t("fullExam.autoSubmitted") : t("fullExam.submitted")}${t("fullExam.targetBand", {pct:fullExamConfig.preparationTarget})}</p>
        <div class="hero-actions">
          <button class="act route-button" data-route="#/full-exam/start" type="button">${t("fullExam.startAnother")}</button>
          <button class="act ghost route-button" data-route="#/question-bank/filter/missed" type="button">${t("fullExam.practiceMissed")}</button>
        </div>
      </section>
      <section class="summary-grid">
        <div class="summary-card"><span>${t("fullExam.correct")}</span><b>${result.correct}</b></div>
        <div class="summary-card"><span>${t("fullExam.incorrect")}</span><b>${result.incorrect}</b></div>
        <div class="summary-card"><span>${t("fullExam.unanswered")}</span><b>${result.unanswered}</b></div>
        <div class="summary-card"><span>${t("fullExam.timeUsed")}</span><b>${formatDuration(result.timeUsedMs)}</b></div>
      </section>
      <section class="page-section">
        <h3>${t("fullExam.domainDiagnostics")}</h3>
        <div class="activity-list">${result.byDomain.map(row => diagnosticCard(t("domainCard.label", {n:row.domain}), domainTitle(row.domain), row)).join("")}</div>
      </section>
      <section class="page-section">
        <h3>${t("fullExam.objectiveRemediation")}</h3>
        ${weakObjectives.length ? `<div class="activity-list">${weakObjectives.map(row => remediationCard(row)).join("")}</div>` : `<p class="muted">${t("fullExam.noObjectiveBelow", {pct:fullExamConfig.preparationTarget})}</p>`}
      </section>
      <section class="page-section">
        <h3>${t("fullExam.crossDomainPatterns")}</h3>
        ${renderPatternDiagnostics(result)}
      </section>
      <section class="page-section">
        <h3>${t("fullExam.reviewEveryQuestion")}</h3>
        <div class="review-list">${result.review.map((item, idx) => renderExamReviewItem(item, idx)).join("")}</div>
      </section>
    `;
    wireRouteButtons();
  }

  function questionBankIds(mode, value){
    if(mode === "domain") return cyuQuestions.filter(question => String(question.domain) === String(value)).map(question => question.id);
    if(mode === "objective") return cyuQuestions.filter(question => question.objective === value).map(question => question.id);
    if(mode === "filter"){
      const history = examCenterProgress().questionHistory;
      if(value === "missed") return cyuQuestions.filter(question => {
        const row = history[question.id];
        return row && ((row.incorrectCount || 0) > 0 || (row.unansweredCount || 0) > 0);
      }).map(question => question.id);
      if(value === "unseen") return cyuQuestions.filter(question => !history[question.id] || !history[question.id].lastSeenDate).map(question => question.id);
      if(value === "mixed") return shuffle(cyuQuestions.map(question => question.id)).slice(0, 30);
    }
    return cyuQuestions.map(question => question.id);
  }

  function cyuDomainCounts(){
    return cyuQuestions.reduce((counts, question) => {
      counts[question.domain] = (counts[question.domain] || 0) + 1;
      return counts;
    }, {});
  }

  function cyuObjectiveCounts(){
    return cyuQuestions.reduce((counts, question) => {
      counts[question.objective] = (counts[question.objective] || 0) + 1;
      return counts;
    }, {});
  }

  function cyuTypeCounts(){
    return cyuQuestions.reduce((counts, question) => {
      counts[question.type] = (counts[question.type] || 0) + 1;
      return counts;
    }, {});
  }

  function cyuQuestionById(id){
    return cyuQuestions.find(question => question.id === id);
  }

  function domainTitle(domain){
    const match = data.domains.find(item => item.number === Number(domain));
    return match ? match.title : t("domainCard.label", {n:domain});
  }

  function objectiveTitle(objective){
    const hierarchy = data.guideHierarchy && data.guideHierarchy.subtaskTitles;
    return hierarchy && hierarchy[objective] ? hierarchy[objective] : t("objective.fallbackLabel", {id:objective});
  }

  function cyuTypeLabel(type){
    return type === "multiple-choice" ? t("cyuType.multipleChoice") : type === "multiple-response" ? t("cyuType.multipleResponse") : type === "ordering" ? t("cyuType.ordering") : type === "matching" ? t("cyuType.matching") : type;
  }

  function renderCyuQuestionForm(question, answer, prefix, activeExam, attempt){
    const text = question.stemHtml || escapeHTML(question.stem || "");
    return `<div class="exam-question" data-question-id="${escapeHTML(question.id)}">
      <p class="objective-label">${activeExam ? t("cyu.questionLabel") : escapeHTML(cyuTypeLabel(question.type))}</p>
      <h3>${text}</h3>
      ${question.type === "ordering" ? renderCyuOrdering(question, answer, prefix, activeExam, attempt) : question.type === "matching" ? renderCyuMatching(question, answer, prefix, activeExam, attempt) : renderCyuOptions(question, answer, prefix, activeExam, attempt)}
    </div>`;
  }

  function renderCyuOptions(question, answer, prefix, activeExam, attempt){
    const selected = Array.isArray(answer) ? answer : [];
    const ids = activeExam && attempt && attempt.optionOrders[question.id] ? attempt.optionOrders[question.id] : question.options.map(option => option.id);
    const type = question.type === "multiple-response" ? "checkbox" : "radio";
    const name = prefix + "-" + question.id;
    return `<div class="option-stack" role="group" aria-label="${t("cyu.answerOptions")}">
      ${question.type === "multiple-response" ? `<p class="domain-meta">${t("cyu.selectAllApply")}</p>` : ""}
      ${ids.map(id => {
        const option = question.options.find(item => item.id === id);
        if(!option) return "";
        return `<label class="option-row"><input type="${type}" name="${escapeHTML(name)}" value="${escapeHTML(option.id)}" ${selected.includes(option.id) ? "checked" : ""}> <span>${escapeHTML(option.id.toUpperCase())}. ${escapeHTML(option.text)}</span></label>`;
      }).join("")}
    </div>`;
  }

  function renderCyuOrdering(question, answer, prefix, activeExam, attempt){
    const chosen = Array.isArray(answer) ? answer : [];
    const items = activeExam && attempt && attempt.itemOrders[question.id] ? attempt.itemOrders[question.id] : shuffle((question.items || question.orderItems || question.correctOrder || []).slice());
    return `<div class="match-list">${(question.correctOrder || []).map((_, idx) => `<label class="match-row"><span>${t("cyu.position", {n:idx + 1})}</span><select data-cyu-order="${idx}" id="${escapeHTML(prefix)}-order-${idx}">
      <option value="">${t("cyu.chooseItem")}</option>
      ${items.map(item => `<option value="${escapeHTML(item)}" ${chosen[idx] === item ? "selected" : ""}>${escapeHTML(item)}</option>`).join("")}
    </select></label>`).join("")}</div>`;
  }

  function renderCyuMatching(question, answer, prefix, activeExam, attempt){
    const selected = answer && !Array.isArray(answer) ? answer : {};
    const options = activeExam && attempt && attempt.matchingOptionOrders[question.id] ? attempt.matchingOptionOrders[question.id] : shuffle((question.matchingOptions || []).slice());
    return `<div class="match-list">${(question.matchingPrompts || []).map((prompt, idx) => `<label class="match-row"><span>${escapeHTML(prompt)}</span><select data-cyu-match="${idx}" data-prompt="${escapeHTML(prompt)}" id="${escapeHTML(prefix)}-match-${idx}">
      <option value="">${t("cyu.chooseMatch")}</option>
      ${options.map(option => `<option value="${escapeHTML(option)}" ${selected[prompt] === option ? "selected" : ""}>${escapeHTML(option)}</option>`).join("")}
    </select></label>`).join("")}</div>`;
  }

  function wireCyuAnswerInputs(question, answer, prefix, onChange){
    document.querySelectorAll(".exam-question input, .exam-question select").forEach(input => {
      input.addEventListener("change", () => onChange(readCyuAnswer(question, prefix)));
    });
  }

  function readCyuAnswer(question, prefix){
    if(question.type === "ordering"){
      return Array.from(document.querySelectorAll("[data-cyu-order]")).sort((a,b) => Number(a.dataset.cyuOrder) - Number(b.dataset.cyuOrder)).map(input => input.value).filter(Boolean);
    }
    if(question.type === "matching"){
      return Array.from(document.querySelectorAll("[data-cyu-match]")).reduce((answer, input) => {
        if(input.value) answer[input.dataset.prompt] = input.value;
        return answer;
      }, {});
    }
    return Array.from(document.querySelectorAll("input[name='" + CSS.escape(prefix + "-" + question.id) + "']:checked")).map(input => input.value);
  }

  function isCyuAnswered(question, answer){
    if(!question) return false;
    if(question.type === "matching") return answer && Object.keys(answer).length === (question.matchingPrompts || []).length;
    if(question.type === "ordering") return Array.isArray(answer) && answer.length === (question.correctOrder || []).length;
    return Array.isArray(answer) && answer.length > 0;
  }

  function isCyuCorrect(question, answer){
    if(!isCyuAnswered(question, answer)) return false;
    if(question.type === "matching"){
      return cyuMatches(question).every(match => answer[match.prompt] === match.answer);
    }
    if(question.type === "ordering"){
      const correct = question.correctOrder || [];
      return Array.isArray(answer) && answer.length === correct.length && answer.every((item, idx) => item === correct[idx]);
    }
    const selected = (answer || []).slice().sort();
    const correct = (question.correctAnswers || []).slice().sort();
    return selected.length === correct.length && selected.every((id, idx) => id === correct[idx]);
  }

  function cyuMatches(question){
    return question.correctMatches || question.matches || [];
  }

  function cyuIncorrectExplanations(question){
    if(Array.isArray(question.incorrectExplanations)) return question.incorrectExplanations;
    return Object.entries(question.incorrectOptionExplanations || {}).map(([id, text]) => id.toUpperCase() + ". " + text);
  }

  function renderCyuFeedback(question, answer, correct){
    return `<div class="${correct ? "feedback correct" : "feedback incorrect"}">
      <h4>${correct ? t("cyuFeedback.correct") : t("cyuFeedback.reviewThisOne")}</h4>
      <p><strong>${t("cyuFeedback.correctAnswer")}</strong> ${escapeHTML(cyuCorrectText(question))}</p>
      ${question.explanation ? `<p>${escapeHTML(question.explanation)}</p>` : ""}
      ${cyuIncorrectExplanations(question).length ? `<ul>${cyuIncorrectExplanations(question).map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>` : ""}
      ${question.takeaway ? `<p><strong>${t("cyuFeedback.takeaway")}</strong> ${escapeHTML(question.takeaway)}</p>` : ""}
      ${question.sequenceLogic ? `<p><strong>${t("cyuFeedback.sequenceLogic")}</strong> ${escapeHTML(question.sequenceLogic)}</p>` : ""}
      ${question.decisiveDetail ? `<p><strong>${t("cyuFeedback.decisiveDetail")}</strong> ${escapeHTML(question.decisiveDetail)}</p>` : ""}
      <p class="source-note">${escapeHTML(question.source || t("qbank.masterCyuSource"))} · ${escapeHTML(question.objective)} · ${escapeHTML(cyuTypeLabel(question.type))}</p>
    </div>`;
  }

  function cyuCorrectText(question){
    if(question.type === "matching") return cyuMatches(question).map(match => match.prompt + " -> " + match.answer).join("; ");
    if(question.type === "ordering") return (question.correctOrder || []).map((item, idx) => (idx + 1) + ". " + item).join("; ");
    return (question.correctAnswers || []).map(id => {
      const option = (question.options || []).find(item => item.id === id);
      return option ? id.toUpperCase() + ". " + option.text : id.toUpperCase();
    }).join("; ");
  }

  function cyuAnswerText(question, answer){
    if(!isCyuAnswered(question, answer)) return t("cyuFeedback.unanswered");
    if(question.type === "matching") return Object.entries(answer).map(([prompt, value]) => prompt + " -> " + value).join("; ");
    if(question.type === "ordering") return answer.map((item, idx) => (idx + 1) + ". " + item).join("; ");
    return answer.map(id => {
      const option = (question.options || []).find(item => item.id === id);
      return option ? id.toUpperCase() + ". " + option.text : id.toUpperCase();
    }).join("; ");
  }

  function recordCyuView(questionId, mode, viewedMap){
    viewedMap = viewedMap || {};
    if(viewedMap[questionId]) return;
    const history = examCenterProgress().questionHistory;
    history[questionId] = history[questionId] || {bankViews:0, examAppearances:0, correctCount:0, incorrectCount:0, unansweredCount:0, lastSeenDate:null};
    if(mode === "exam") history[questionId].examAppearances++;
    else history[questionId].bankViews++;
    history[questionId].lastSeenDate = new Date().toISOString();
    viewedMap[questionId] = true;
    saveProgress();
  }

  function recordCyuResult(questionId, answer, correct){
    const history = examCenterProgress().questionHistory;
    history[questionId] = history[questionId] || {bankViews:0, examAppearances:0, correctCount:0, incorrectCount:0, unansweredCount:0, lastSeenDate:null};
    if(!isCyuAnswered(cyuQuestionById(questionId), answer)) history[questionId].unansweredCount++;
    else if(correct) history[questionId].correctCount++;
    else history[questionId].incorrectCount++;
    history[questionId].lastSeenDate = new Date().toISOString();
  }

  function fullExamAllocation(){
    const byDomain = cyuDomainCounts();
    const raw = Object.entries(fullExamConfig.domainWeights).map(([domain, weight]) => {
      const exact = fullExamConfig.questionCount * weight / 100;
      return {domain:Number(domain), exact, count:Math.floor(exact), capacity:byDomain[domain] || 0};
    });
    let remaining = fullExamConfig.questionCount - raw.reduce((sum, row) => sum + row.count, 0);
    raw.sort((a,b) => (b.exact - Math.floor(b.exact)) - (a.exact - Math.floor(a.exact))).forEach(row => {
      if(remaining > 0 && row.count < row.capacity){ row.count++; remaining--; }
    });
    while(remaining > 0){
      const row = raw.find(item => item.count < item.capacity);
      if(!row) break;
      row.count++;
      remaining--;
    }
    raw.forEach(row => {
      if(row.count > row.capacity){
        remaining += row.count - row.capacity;
        row.count = row.capacity;
      }
    });
    while(remaining > 0){
      const row = raw.find(item => item.count < item.capacity);
      if(!row) break;
      row.count++;
      remaining--;
    }
    return raw.sort((a,b) => a.domain - b.domain);
  }

  function buildFullExamAttempt(){
    const allocation = fullExamAllocation();
    const ids = allocation.flatMap(row => shuffle(cyuQuestions.filter(question => question.domain === row.domain).map(question => question.id)).slice(0, row.count));
    const questionIds = shuffle(ids).slice(0, fullExamConfig.questionCount);
    const optionOrders = {};
    const itemOrders = {};
    const matchingOptionOrders = {};
    questionIds.forEach(id => {
      const question = cyuQuestionById(id);
      if(question.type === "ordering") itemOrders[id] = shuffle((question.items || question.orderItems || question.correctOrder || []).slice());
      else if(question.type === "matching") matchingOptionOrders[id] = shuffle((question.matchingOptions || []).slice());
      else optionOrders[id] = shuffle((question.options || []).map(option => option.id));
    });
    const startedAt = Date.now();
    return {
      id:"full-exam-" + startedAt,
      startedAt,
      expiresAt:startedAt + fullExamConfig.timeLimitMinutes * 60 * 1000,
      submitted:false,
      currentIndex:0,
      questionIds,
      optionOrders,
      itemOrders,
      matchingOptionOrders,
      answers:{},
      flagged:{},
      viewed:{}
    };
  }

  function moveFullExam(delta){
    const attempt = examCenterProgress().fullExam.activeAttempt;
    const question = cyuQuestionById(attempt.questionIds[attempt.currentIndex]);
    attempt.answers[question.id] = readCyuAnswer(question, "full");
    attempt.currentIndex = Math.max(0, Math.min(attempt.questionIds.length - 1, attempt.currentIndex + delta));
    saveProgress();
    renderFullExamQuestion();
  }

  function updateFullExamTimer(){
    const attempt = examCenterProgress().fullExam.activeAttempt;
    const timer = document.getElementById("fullExamTimer");
    if(!attempt || !timer) return;
    const remaining = Math.max(0, attempt.expiresAt - Date.now());
    timer.textContent = t("timer.remaining", {time:formatDuration(remaining)});
    timer.classList.toggle("is-warning", remaining <= 10 * 60 * 1000);
    timer.classList.toggle("is-danger", remaining <= 5 * 60 * 1000);
    if(remaining <= 0) submitFullExam(true);
  }

  function updateFullExamNav(){
    const attempt = examCenterProgress().fullExam.activeAttempt;
    const nav = document.querySelector(".exam-progress");
    if(nav) nav.innerHTML = attempt.questionIds.map((id, idx) => fullExamNavButton(attempt, id, idx)).join("");
  }

  function fullExamNavButton(attempt, id, index){
    const classes = ["question-jump"];
    if(index === attempt.currentIndex) classes.push("is-current");
    if(isCyuAnswered(cyuQuestionById(id), attempt.answers[id])) classes.push("is-answered");
    if(attempt.flagged[id]) classes.push("is-flagged");
    return `<button class="${classes.join(" ")}" type="button" data-index="${index}" aria-label="${t("d1exam.questionN", {n:index + 1})}">${index + 1}</button>`;
  }

  function submitFullExam(automatic){
    const full = examCenterProgress().fullExam;
    const attempt = full.activeAttempt;
    if(!attempt) return;
    if(examTimerId) clearInterval(examTimerId);
    attempt.submitted = true;
    attempt.completedAt = Date.now();
    attempt.automaticSubmit = !!automatic;
    const result = scoreFullExamAttempt(attempt);
    full.activeAttempt = null;
    full.lastResult = result;
    full.attempts = [result].concat(full.attempts || []).slice(0, 10);
    saveProgress();
    renderFullExamResults(result);
  }

  function scoreFullExamAttempt(attempt){
    const byDomain = {};
    const byObjective = {};
    const review = attempt.questionIds.map(id => {
      const question = cyuQuestionById(id);
      const answer = attempt.answers[id];
      const answered = isCyuAnswered(question, answer);
      const correct = answered && isCyuCorrect(question, answer);
      recordCyuView(id, "exam", attempt.viewed || {});
      recordCyuResult(id, answer, correct);
      byDomain[question.domain] = byDomain[question.domain] || {domain:question.domain, correct:0, incorrect:0, unanswered:0, total:0};
      byObjective[question.objective] = byObjective[question.objective] || {objective:question.objective, title:objectiveTitle(question.objective), correct:0, incorrect:0, unanswered:0, total:0};
      [byDomain[question.domain], byObjective[question.objective]].forEach(row => {
        row.total++;
        if(!answered) row.unanswered++;
        else if(correct) row.correct++;
        else row.incorrect++;
      });
      return {questionId:id, answer, answered, correct, flagged:!!attempt.flagged[id]};
    });
    const correct = review.filter(item => item.correct).length;
    const unanswered = review.filter(item => !item.answered).length;
    const incorrect = review.length - correct - unanswered;
    const byObjectiveRows = Object.values(byObjective).map(row => Object.assign(row, {percent:percent(row), topic:topicForObjective(row.objective)})).sort((a,b) => a.objective.localeCompare(b.objective, undefined, {numeric:true}));
    return {
      id:attempt.id,
      startedAt:new Date(attempt.startedAt).toISOString(),
      completedAt:new Date(attempt.completedAt).toISOString(),
      automaticSubmit:attempt.automaticSubmit,
      total:review.length,
      correct,
      incorrect,
      unanswered,
      percent:Math.round(correct / review.length * 100),
      timeUsedMs:Math.min(attempt.completedAt - attempt.startedAt, fullExamConfig.timeLimitMinutes * 60 * 1000),
      questionIds:attempt.questionIds.slice(),
      optionOrders:attempt.optionOrders,
      itemOrders:attempt.itemOrders,
      matchingOptionOrders:attempt.matchingOptionOrders,
      answers:attempt.answers,
      flagged:attempt.flagged,
      byDomain:Object.values(byDomain).map(row => Object.assign(row, {percent:percent(row)})).sort((a,b) => a.domain - b.domain),
      byObjective:byObjectiveRows,
      patterns:patternDiagnostics(byObjectiveRows),
      review
    };
  }

  function diagnosticCard(label, title, row){
    return `<article class="activity-card">
      <div><p class="objective-label">${escapeHTML(label)}</p><h4>${escapeHTML(title)}</h4><p class="domain-meta">${t("diagnostic.correctIncorrectUnanswered", {correct:row.correct, total:row.total, incorrect:row.incorrect, unanswered:row.unanswered})}</p></div>
      <span class="status-pill">${row.percent}%</span>
    </article>`;
  }

  function remediationCard(row){
    const routes = remediationRoutes(row.objective);
    return `<article class="activity-card">
      <div>
        <p class="objective-label">${escapeHTML(row.objective)} · ${escapeHTML(performanceLabel(row.percent))}</p>
        <h4>${escapeHTML(row.title)}</h4>
        <p class="domain-meta">${t("diagnostic.studySection", {correct:row.correct, total:row.total, objective:escapeHTML(row.objective)})}</p>
        ${routes.length ? `<div class="badge-row">${routes.map(route => `<button class="link-button route-button" data-route="${route.route}" type="button">${escapeHTML(route.label)}</button>`).join("")}</div>` : ""}
      </div>
      <span class="status-pill">${row.percent}%</span>
    </article>`;
  }

  function remediationRoutes(objective){
    const routes = [];
    activities.forEach(activity => {
      (activity.rounds || []).forEach(round => {
        const roundObjectives = []
          .concat(round.objectiveCodes || [])
          .concat(round.objective ? [round.objective] : [])
          .concat(round.hierarchy && round.hierarchy.subtaskId ? [round.hierarchy.subtaskId] : [])
          .concat(round.hierarchy && round.hierarchy.sourceObjectiveId ? [round.hierarchy.sourceObjectiveId] : []);
        const objectives = roundObjectives.length ? roundObjectives : (activity.objectiveCodes || []);
        if(objectives.includes(objective)) routes.push({label:round.title || activity.title, route:"#/activity/" + activity.id + "/" + round.id});
      });
    });
    return routes.slice(0, 3);
  }

  function patternDiagnostics(objectiveRows){
    const patterns = {};
    objectiveRows.forEach(row => {
      const topic = topicForObjective(row.objective);
      patterns[topic] = patterns[topic] || {topic, total:0, correct:0, incorrect:0, unanswered:0, objectives:[]};
      patterns[topic].total += row.total;
      patterns[topic].correct += row.correct;
      patterns[topic].incorrect += row.incorrect;
      patterns[topic].unanswered += row.unanswered;
      patterns[topic].objectives.push(row.objective);
    });
    return Object.values(patterns).map(row => Object.assign(row, {percent:percent(row)})).filter(row => row.total > 1 && row.percent < fullExamConfig.preparationTarget).sort((a,b) => a.percent - b.percent);
  }

  function renderPatternDiagnostics(result){
    if(!result.patterns || !result.patterns.length) return `<p class="muted">${t("pattern.noRecurring")}</p>`;
    return `<div class="activity-list">${result.patterns.map(row => `<article class="activity-card">
      <div><p class="objective-label">${escapeHTML(performanceLabel(row.percent))}</p><h4>${escapeHTML(row.topic)}</h4><p class="domain-meta">${t("pattern.correctObjectives", {correct:row.correct, total:row.total, list:row.objectives.map(escapeHTML).join(", ")})}</p></div>
      <span class="status-pill">${row.percent}%</span>
    </article>`).join("")}</div>`;
  }

  function topicForObjective(objective){
    if(/^4\./.test(objective)) return t("topic.responsibleAI");
    if(/^5\./.test(objective)) return t("topic.securityCompliance");
    if(/^3\.2\./.test(objective)) return t("topic.promptEngineering");
    if(/^3\.3\./.test(objective)) return t("topic.modelCustomization");
    if(/^3\.4\./.test(objective) || objective === "1.3.6") return t("topic.metricsEvaluation");
    if(["3.1.3","3.1.4","5.1.5","2.1.5"].includes(objective)) return t("topic.ragEmbeddings");
    if(["3.1.6","2.1.6"].includes(objective)) return t("topic.agentsAutomation");
    if(/^1\.3\./.test(objective)) return t("topic.mlLifecycle");
    if(/^2\./.test(objective)) return t("topic.genaiConcepts");
    if(/^1\./.test(objective)) return t("topic.aiFundamentals");
    return t("topic.generalReadiness");
  }

  function renderExamReviewItem(item, index){
    const question = cyuQuestionById(item.questionId);
    const cls = item.correct ? "correct" : item.answered ? "incorrect" : "feedback";
    return `<details class="review-item">
      <summary>${index + 1}. ${escapeHTML(question.objective)} · ${item.correct ? t("cyuFeedback.correct") : item.answered ? t("examReview.incorrect") : t("cyuFeedback.unanswered")}${item.flagged ? t("examReview.flaggedSuffix") : ""}</summary>
      <div class="${cls}">
        <p>${question.stemHtml || escapeHTML(question.stem)}</p>
        <p><strong>${t("examReview.yourAnswer")}</strong> ${escapeHTML(cyuAnswerText(question, item.answer))}</p>
        <p><strong>${t("cyuFeedback.correctAnswer")}</strong> ${escapeHTML(cyuCorrectText(question))}</p>
        ${question.explanation ? `<p>${escapeHTML(question.explanation)}</p>` : ""}
        ${renderReviewOptionList(question, item.answer)}
        ${question.takeaway ? `<p><strong>${t("cyuFeedback.takeaway")}</strong> ${escapeHTML(question.takeaway)}</p>` : ""}
        <p class="source-note">${t("examReview.sourceDomainType", {source:escapeHTML(question.source || t("qbank.masterCyuSource")), domain:question.domain, type:escapeHTML(cyuTypeLabel(question.type))})}</p>
      </div>
    </details>`;
  }

  function renderReviewOptionList(question, selectedAnswer){
    const options = question.options || [];
    if(!options.length) return "";
    const selected = Array.isArray(selectedAnswer) ? selectedAnswer : [];
    const correct = question.correctAnswers || [];
    return `<ul class="review-options">${options.map(option => {
      const isCorrect = correct.includes(option.id);
      const isSelected = selected.includes(option.id);
      const classes = ["review-option"];
      if(isCorrect) classes.push("is-correct");
      else if(isSelected) classes.push("is-wrong");
      const marker = isCorrect ? t("cyuFeedback.correct") : isSelected ? t("examReview.yourChoice") : "";
      const note = isCorrect ? "" : (question.distractorExplanations && question.distractorExplanations[option.id]) || (question.incorrectOptionExplanations && question.incorrectOptionExplanations[option.id]) || "";
      return `<li class="${classes.join(" ")}"><strong>${escapeHTML(option.id.toUpperCase())}.</strong> ${escapeHTML(option.text)}${marker ? ` <span class="review-option-marker">${marker}</span>` : ""}${note ? ` — ${escapeHTML(note)}` : ""}</li>`;
    }).join("")}</ul>`;
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
            <p class="objective-label">${t("d1exam.eyebrow")}</p>
            <h2>${t("d1exam.title")}</h2>
            <p>${t("d1exam.intro")}</p>
          </div>
          <div class="activity-links">
            <button class="link-button route-button" data-route="#/home" type="button">${t("activity.dashboard")}</button>
            <button class="link-button route-button" data-route="#/domain/1" type="button">${t("activity.backToDomain")}</button>
          </div>
        </header>
        <section class="exam-intro">
          <div class="summary-grid">
            <div class="summary-card"><span>${t("d1exam.questions")}</span><b>${config.questionCount}</b></div>
            <div class="summary-card"><span>${t("d1exam.timeLimit")}</span><b>${t("d1exam.nMin", {n:config.timeLimitMinutes})}</b></div>
            <div class="summary-card"><span>${t("d1exam.formats")}</span><b>MCQ + MRQ</b></div>
          </div>
          <ul class="exam-rules">
            <li>${t("d1exam.rule1")}</li>
            <li>${t("d1exam.rule2")}</li>
            <li>${t("d1exam.rule3")}</li>
            <li>${t("d1exam.rule4")}</li>
            <li>${t("d1exam.rule5")}</li>
          </ul>
          <fieldset class="mode-choice">
            <legend>${t("d1exam.mode")}</legend>
            <label><input type="radio" name="examMode" value="timed" checked> ${t("d1exam.timedExam")}</label>
            <label><input type="radio" name="examMode" value="untimed"> ${t("d1exam.untimedPractice")}</label>
          </fieldset>
          <button class="act" id="startExam" type="button">${t("d1exam.startExam")}</button>
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
            <p class="objective-label">${t("d1exam.title")}</p>
            <h2>${t("d1exam.questionOf", {n:attempt.currentIndex + 1, total:attempt.questionIds.length})}</h2>
          </div>
          <div class="exam-meta">
            <span id="examTimer" class="timer" aria-live="off"></span>
            <span id="timerAnnouncer" class="sr-only" aria-live="polite"></span>
            <span>${t("d1exam.nAnswered", {n:answered})}</span>
            <span>${t("d1exam.nFlagged", {n:flagged})}</span>
          </div>
        </header>
        <div class="exam-layout">
          <aside class="question-nav" aria-label="${t("d1exam.questionNav")}">${attempt.questionIds.map((id, i) => examNavButton(attempt, id, i)).join("")}</aside>
          <section class="question-panel">
            <p class="question-stem">${escapeHTML(question.stem)}</p>
            <form class="options-form" id="optionsForm">${renderQuestionOptions(question, attempt)}</form>
            <label class="flag-control"><input id="flagQuestion" type="checkbox" ${attempt.flagged[question.id] ? "checked" : ""}> ${t("d1exam.flagForReview")}</label>
            <div class="exam-actions">
              ${attempt.currentIndex ? `<button class="act ghost" id="prevQuestion" type="button">${t("qbank.previous")}</button>` : ""}
              <button class="act" id="${attempt.currentIndex === attempt.questionIds.length - 1 ? "submitExam" : "nextQuestion"}" type="button">${attempt.currentIndex === attempt.questionIds.length - 1 ? t("d1exam.submitExam") : t("qbank.next")}</button>
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
    const hint = question.type === "multiple-response" ? `<p class="mrq-hint">${t("reinforce.selectHint", {word:numberWord(required)})}</p>` : "";
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
        ? t("d1exam.confirmUnanswered", {n:unanswered.length})
        : t("d1exam.confirmSubmit");
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
            <p class="objective-label">${t("d1exam.resultsEyebrow")}</p>
            <h2>${t("checkpointResult.scoreLine", {correct:result.correct, total:result.total, pct:result.percent})}</h2>
            <p class="${result.percent >= config.passingPercent ? "verdict win" : "verdict"}">${result.percent >= config.passingPercent ? t("d1exam.abovePassing") : t("d1exam.belowPassing")}</p>
          </div>
          <div class="activity-links">
            <button class="link-button route-button" data-route="#/home" type="button">${t("activity.dashboard")}</button>
            <button class="link-button route-button" data-route="#/domain/1" type="button">${t("activity.backToDomain")}</button>
          </div>
        </header>
        <p class="source-note">${t("d1exam.scoringNote")}</p>
        <section class="summary-grid">
          <div class="summary-card"><span>${t("d1exam.timeUsed")}</span><b>${formatDuration(result.timeUsedMs)}</b></div>
          <div class="summary-card"><span>${t("d1exam.answered")}</span><b>${result.answeredQuestionIds.length}</b></div>
          <div class="summary-card"><span>${t("d1exam.unanswered")}</span><b>${result.unansweredQuestionIds.length}</b></div>
          <div class="summary-card"><span>${t("d1exam.flagged")}</span><b>${result.flaggedQuestionIds.length}</b></div>
        </section>
        <section class="two-col">
          <div class="page-section"><h3>${t("d1exam.taskResults")}</h3>${renderTaskResults(result)}</div>
          <div class="page-section"><h3>${t("d1exam.historicalAverages")}</h3>${renderExamAverages(history)}</div>
        </section>
        <section class="page-section"><h3>${t("d1exam.recommendedReview")}</h3>${renderReviewRecommendations(weak)}</section>
        <section class="page-section"><h3>${t("d1exam.objectiveResults")}</h3>${renderObjectiveResults(result)}</section>
        <section class="page-section"><h3>${t("d1exam.answerReview")}</h3>${renderAnswerReview(result)}</section>
        <div class="controls">
          <button class="act" id="newExamAttempt" type="button">${t("d1exam.newAttempt")}</button>
          <button class="act ghost route-button" data-route="#/domain/1" type="button">${t("d1exam.returnToDomain1")}</button>
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
    return ["1.1","1.2","1.3"].map(code => {
      const row = result.byTask["Task " + code] || {correct:0,total:0};
      return `<p class="result-row"><span>${t("d1exam.taskPrefix", {code})}</span><b>${row.correct} / ${row.total} · ${percent(row)}%</b></p>`;
    }).join("");
  }

  function renderObjectiveResults(result){
    const config = window.DOMAIN1_EXAM_CONFIG;
    return Object.keys(config.objectiveBlueprint).map(objective => {
      const row = result.byObjective[objective] || {correct:0,total:0};
      const pct = percent(row);
      return `<p class="result-row"><span>${objective} ${objectiveTitle(objective)}</span><b>${row.correct}/${row.total}, ${pct}% · ${performanceLabel(pct)}</b></p>`;
    }).join("");
  }

  function renderReviewRecommendations(weak){
    return weak.map(item => {
      const route = reviewRouteForObjective(item.objective);
      const unit = reinforcementForObjective(item.objective);
      return `<p class="result-row"><span>${item.objective} ${objectiveTitle(item.objective)}</span><b>${item.correct}/${item.total}, ${item.percent}%</b>${unit ? ` <button class="link-button route-button" data-route="#/activity/${unit.id}" type="button">${t("home.reviewWeak")}</button>` : route ? ` <button class="link-button route-button" data-route="${route}" type="button">${t("d1exam.openStudyActivity")}</button>` : ""}</p>`;
    }).join("");
  }

  function renderAnswerReview(result){
    return result.review.map((item, index) => {
      const question = questionById(item.questionId);
      const selected = item.selectedAnswers;
      return `<details class="review-item">
        <summary>${index + 1}. ${item.correct ? t("cyuFeedback.correct") : t("examReview.incorrect")} · ${escapeHTML(question.stem)}</summary>
        <p><strong>${t("examReview.yourAnswer")}</strong> ${answerText(question, selected) || t("cyuFeedback.unanswered")}</p>
        <p><strong>${t("cyuFeedback.correctAnswer")}</strong> ${answerText(question, question.correctAnswers)}</p>
        <p><strong>${t("d1exam.explanationLabel")}</strong> ${escapeHTML(question.explanation)}</p>
        ${renderReviewOptionList(question, selected)}
        <p class="domain-meta">${t("d1exam.taskObjectiveSource", {task:question.task, objective:question.objective, source:question.sourceReference})}</p>
        ${!item.correct && reinforcementForObjective(question.objective) ? `<button class="link-button route-button reinforcement-review-link" data-objective="${question.objective}" data-route="#/activity/${reinforcementForObjective(question.objective).id}" type="button">${t("d1exam.practiceDistinction")}</button>` : ""}
      </details>`;
    }).join("");
  }

  function renderExamHistory(history){
    if(!history.length) return `<section class="page-section"><h3>${t("d1exam.attemptHistory")}</h3><p class="muted">${t("d1exam.noAttemptsYet")}</p></section>`;
    return `<section class="page-section"><h3>${t("d1exam.attemptHistory")}</h3>${renderExamAverages(history)}</section>`;
  }

  function renderExamAverages(history){
    if(!history.length) return `<p class="muted">${t("d1exam.completeToHistory")}</p>`;
    const best = history.reduce((max, attempt) => Math.max(max, attempt.percent), 0);
    const avg = Math.round(history.reduce((sum, attempt) => sum + attempt.percent, 0) / history.length);
    const recent = history[0];
    const taskAvg = ["1.1","1.2","1.3"].map(code => {
      const values = history.map(attempt => percent(attempt.byTask["Task " + code] || {correct:0,total:0}));
      return `${t("d1exam.taskPrefix", {code})}: ${Math.round(values.reduce((a,b) => a + b, 0) / values.length)}%`;
    }).join(" · ");
    const repeated = repeatedWeakObjectives(history);
    return `<p class="result-row"><span>${t("d1exam.mostRecent")}</span><b>${recent.correct}/${recent.total}, ${recent.percent}%</b></p>
      <p class="result-row"><span>${t("d1exam.bestTotalScore")}</span><b>${best}%</b></p>
      <p class="result-row"><span>${t("d1exam.averageTotalScore")}</span><b>${avg}%</b></p>
      <p class="result-row"><span>${t("d1exam.taskAverages")}</span><b>${taskAvg}</b></p>
      <p class="result-row"><span>${t("d1exam.scoreTrend")}</span><b>${history.slice().reverse().map(a => a.percent + "%").join(" → ")}</b></p>
      <p class="result-row"><span>${t("d1exam.repeatedBelow70")}</span><b>${repeated.length ? repeated.join(", ") : t("d1exam.noneYet")}</b></p>`;
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
      ? t("recommend.reasonInference")
      : unit.id === "domain1-aws-services"
        ? t("recommend.reasonAwsServices")
        : unit.id === "domain1-reinforcement-lifecycle"
          ? t("recommend.reasonLifecycle")
          : unit.id === "domain1-model-evaluation"
            ? t("recommend.reasonModelEvaluation")
            : t("recommend.reasonMixedCheckpoint");
    const hasHistory = attempts.length > 0;
    return {
      recommended: unit.id === "domain1-reinforcement-checkpoint" ? domain1ReinforcementActivities().some(activity => activity.id !== unit.id && reinforcementProgress(activity.id).mastered) : objectiveHit || (!hasHistory && unit.id === "domain1-inference"),
      urgent: objectiveHit && !mastered,
      reason: mastered ? t("recommend.masteredKeepFresh") : completed ? t("recommend.reviewAgainFresh") : reason
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
    return `<button class="${classes.join(" ")}" type="button" data-index="${index}" aria-label="${t("d1exam.questionN", {n:index + 1})}">${index + 1}</button>`;
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
      timer.textContent = t("timer.elapsed", {time:formatDuration(elapsed)});
      return;
    }
    const limit = window.DOMAIN1_EXAM_CONFIG.timeLimitMinutes * 60 * 1000;
    const remaining = Math.max(0, limit - elapsed);
    timer.textContent = t("timer.remaining", {time:formatDuration(remaining)});
    timer.classList.toggle("is-warning", remaining <= 10 * 60 * 1000);
    timer.classList.toggle("is-danger", remaining <= 5 * 60 * 1000);
    const announcer = document.getElementById("timerAnnouncer");
    if(announcer && remaining <= 10 * 60 * 1000 && !attempt.warnedTen){
      attempt.warnedTen = true;
      announcer.textContent = t("timer.tenMinutes");
      saveProgress();
    }
    if(announcer && remaining <= 5 * 60 * 1000 && !attempt.warnedFive){
      attempt.warnedFive = true;
      announcer.textContent = t("timer.fiveMinutes");
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
    if(pct >= 85) return t("performance.strong");
    if(pct >= 70) return t("performance.passingRange");
    if(pct >= 50) return t("performance.reviewRecommended");
    return t("performance.priorityReview");
  }

  function numberWord(n){
    return n === 2 ? t("enum.numberTwo") : n === 3 ? t("enum.numberThree") : String(n);
  }

  function compressObjectiveCodes(codes){
    if(!codes || !codes.length) return "";
    const sorted = [...codes].sort();
    const groups = [];
    let start = sorted[0], prev = sorted[0];
    for(let i = 1; i < sorted.length; i++){
      const cur = sorted[i];
      if(isConsecutive(prev, cur)){
        prev = cur;
      }else{
        groups.push(start === prev ? start : start + "–" + prev);
        start = cur;
        prev = cur;
      }
    }
    groups.push(start === prev ? start : start + "–" + prev);
    return groups.join(", ");
  }

  function isConsecutive(a, b){
    const pa = a.split("."), pb = b.split(".");
    if(pa.length !== pb.length) return false;
    for(let i = 0; i < pa.length - 1; i++){
      if(pa[i] !== pb[i]) return false;
    }
    return Number(pa[pa.length - 1]) + 1 === Number(pb[pb.length - 1]);
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
    if(confirm(t("topbar.confirmReset"))){
      progress = {version:1,lastOpenedActivity:null,activities:{},migratedDomain1:true};
      saveProgress();
      route();
    }
  });
  els.export.addEventListener("click", () => {
    try {
      const dataStr = localStorage.getItem(STORAGE_KEY) || "{}";
      const blob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "aif-c01-study-hub-progress.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch(err) {
      alert("Error exporting progress: " + err.message);
    }
  });
  els.import.addEventListener("click", () => {
    if(confirm(t("topbar.confirmImport"))){
      const input = document.createElement("input");
      input.type = "file";
      input.accept = ".json";
      input.addEventListener("change", ev => {
        const file = ev.target.files[0];
        if(!file) return;
        const reader = new FileReader();
        reader.onload = e => {
          try {
            const parsed = JSON.parse(e.target.result);
            if (parsed && typeof parsed === "object") {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
              progress = loadProgress();
              route();
            } else {
              alert("Invalid progress file.");
            }
          } catch(err) {
            alert("Error parsing file: " + err.message);
          }
        };
        reader.readAsText(file);
      });
      input.click();
    }
  });
  if(els.langEn) els.langEn.addEventListener("click", () => switchLanguage("en"));
  if(els.langEs) els.langEs.addEventListener("click", () => switchLanguage("es"));
  window.addEventListener("hashchange", route);
  if(!location.hash) location.hash = "#/home";
  route();
})();
