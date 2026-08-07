(function(){
  "use strict";

  const baseDomain = window.STUDY_DATA && window.STUDY_DATA.domains
    ? window.STUDY_DATA.domains.find(domain => domain.id === "domain-1")
    : null;

  const domain1Intro = {
    id: "domain1-task11-12",
    domain: 1,
    taskStatement: "Tasks 1.1-1.2",
    objectiveCodes: ["1.1.1","1.1.2","1.1.3","1.1.4","1.1.5","1.2.1","1.2.2","1.2.3","1.2.4","1.2.5","1.2.6"],
    title: "Domain 1 Card Match: AI Concepts and Use Cases",
    shortDescription: "Core AI vocabulary, hierarchy, inference types, data types, learning paradigms, value patterns, ML techniques, AWS managed AI services, and traditional ML versus foundation models.",
    activityType: "Card matching, sorting, ordering",
    estimatedTime: "30 min",
    difficulty: "Foundational",
    module: "hub-card-engine",
    order: 1101,
    sourceFile: "index.html",
    available: true,
    rounds: baseDomain ? baseDomain.rounds : []
  };

  const domain1Exam = {
    id: "domain1-simulated-exam",
    domain: 1,
    taskStatement: "Domain 1 review",
    objectiveCodes: ["1.1.1","1.1.2","1.1.3","1.1.4","1.1.5","1.2.1","1.2.2","1.2.3","1.2.4","1.2.5","1.2.6","1.3.1","1.3.2","1.3.3","1.3.4","1.3.5","1.3.6"],
    title: "Domain 1 Simulated Exam",
    shortDescription: "A 60-question timed or untimed diagnostic exam covering every Domain 1 objective, with task and objective-level results.",
    activityType: "Multiple choice and multiple response",
    estimatedTime: "90 min",
    difficulty: "Exam simulation",
    module: "domain1-simulated-exam",
    order: 1399,
    sourceFile: "Question bank.docx; AWS_AI_Practitioner_Study_Guide.docx",
    available: true,
    rounds: [{id:"exam", title:"60-question exam", questionCount:60}]
  };

  const reinforcementActivities = (window.DOMAIN1_REINFORCEMENT_UNITS || []).map(function(unit){
    return {
      id: unit.id,
      domain: 1,
      taskStatement: unit.taskStatement,
      objectiveCodes: unit.objectives,
      title: unit.title,
      shortDescription: unit.reason,
      activityType: unit.id === "domain1-reinforcement-checkpoint" ? "Mixed checkpoint" : "Adaptive reinforcement unit",
      estimatedTime: unit.estimatedTime,
      difficulty: unit.difficulty,
      module: "domain1-reinforcement-unit",
      order: unit.order,
      sourceFile: "data/reinforcement/domain1-reinforcement.js; AWS_AI_Practitioner_Study_Guide.docx",
      available: true,
      rounds: [{id:"unit", title:unit.shortTitle, questionCount:(unit.practice || []).length + (unit.checkpoint || []).length}]
    };
  });

  const domain2AddendumActivity = window.DOMAIN2_ADDENDUM_ACTIVITY || null;
  const domains345Activities = window.DOMAINS_345_ACTIVITIES || [];

  window.HUB_DATA = {
    guideHierarchy: window.GUIDE_HIERARCHY,
    domain2Addendum: window.DOMAIN2_ADDENDUM,
    domains: [
      {number:1, title:"Fundamentals of AI and ML", description:"AI/ML concepts, use cases, development lifecycle, services, MLOps, and metrics."},
      {number:2, title:"Fundamentals of Generative AI", description:"Generative AI concepts, foundation models, agents, AWS GenAI services, value, limitations, and costs."},
      {number:3, title:"Applications of Foundation Models", description:"Prompting, RAG, model selection, customization, agent behavior, training, fine-tuning, and evaluation."},
      {number:4, title:"Guidelines for Responsible AI", description:"Responsible AI, transparency, explainability, bias and variance, monitoring, and human-centered design."},
      {number:5, title:"Security, Compliance, and Governance for AI Solutions", description:"Security services, data lineage, secure data engineering, hallucination defense, compliance, and governance."}
    ],
    activities: [domain1Intro].concat(window.HUB_LEGACY_ACTIVITIES || [], reinforcementActivities, domain2AddendumActivity ? [domain2AddendumActivity] : [], domains345Activities, [domain1Exam]).sort((a,b) => a.order - b.order)
  };
})();
