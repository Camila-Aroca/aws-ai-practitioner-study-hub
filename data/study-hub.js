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

  window.HUB_DATA = {
    domains: [
      {number:1, title:"Fundamentals of AI and ML", description:"AI/ML concepts, use cases, development lifecycle, services, MLOps, and metrics."},
      {number:2, title:"Fundamentals of Generative AI", description:"Generative AI concepts, foundation models, agents, AWS GenAI services, value, limitations, and costs."},
      {number:3, title:"Applications of Foundation Models", description:"Prompting, RAG, model selection, customization, and evaluation activities can be added here."},
      {number:4, title:"Guidelines for Responsible AI", description:"Responsible AI, transparency, explainability, and human-centered design activities can be added here."},
      {number:5, title:"Security, Compliance, and Governance for AI Solutions", description:"Security, compliance, governance, and data-protection activities can be added here."}
    ],
    activities: [domain1Intro].concat(window.HUB_LEGACY_ACTIVITIES || []).sort((a,b) => a.order - b.order)
  };
})();
