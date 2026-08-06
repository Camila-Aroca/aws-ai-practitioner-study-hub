(function(){
  "use strict";

  const subtaskTitles = {
    "1.1.1":"The core vocabulary",
    "1.1.2":"How AI, ML, deep learning, GenAI and agentic AI relate",
    "1.1.3":"Types of inferencing",
    "1.1.4":"Types of data in AI models",
    "1.1.5":"Types of AI/ML learning",
    "1.2.1":"Where AI and ML create value",
    "1.2.2":"When AI and ML are not appropriate",
    "1.2.3":"Selecting the right ML technique",
    "1.2.4":"Real-world AI applications",
    "1.2.5":"Capabilities of the AWS managed AI services",
    "1.2.6":"Traditional ML models versus foundation models",
    "1.3.1":"Components of an AI/ML pipeline",
    "1.3.2":"Sources of foundation models",
    "1.3.3":"Methods to use a model in production",
    "1.3.4":"AWS services for each stage of the pipeline",
    "1.3.5":"MLOps fundamentals",
    "1.3.6":"Model performance metrics and business metrics",
    "2.1.1":"Foundational GenAI concepts",
    "2.1.2":"Use cases for generative AI",
    "2.1.3":"The foundation model lifecycle",
    "2.1.4":"Token-based pricing and its effect on cost and performance",
    "2.1.5":"Context engineering",
    "2.1.6":"Foundational agentic AI concepts",
    "2.2.1":"Advantages of generative AI",
    "2.2.2":"Disadvantages and limitations",
    "2.2.3":"Factors in selecting a generative AI model",
    "2.2.4":"Business value and metrics",
    "2.3.1":"AWS services for building GenAI applications",
    "2.3.2":"Advantages of using AWS GenAI services",
    "2.3.3":"Benefits of AWS infrastructure for GenAI",
    "2.3.4":"Cost tradeoffs of AWS GenAI services"
  };

  const hierarchy = {
    domains: [
      {
        domainId:"domain-1",
        number:1,
        title:"Fundamentals of AI and ML",
        weight:"20%",
        tasks:[
          task("1.1","Explain basic AI concepts and terminologies",["1.1.1","1.1.2","1.1.3","1.1.4","1.1.5"]),
          task("1.2","Identify practical use cases for AI",["1.2.1","1.2.2","1.2.3","1.2.4","1.2.5","1.2.6"]),
          task("1.3","Describe the AI/ML development lifecycle",["1.3.1","1.3.2","1.3.3","1.3.4","1.3.5","1.3.6"])
        ]
      },
      {
        domainId:"domain-2",
        number:2,
        title:"Fundamentals of GenAI",
        weight:"24%",
        tasks:[
          task("2.1","Explain the basic concepts of generative AI",["2.1.1","2.1.2","2.1.3","2.1.4","2.1.5","2.1.6"]),
          task("2.2","Understand the capabilities and limitations of GenAI",["2.2.1","2.2.2","2.2.3","2.2.4"]),
          task("2.3","Describe AWS infrastructure and technologies for GenAI",["2.3.1","2.3.2","2.3.3","2.3.4"])
        ]
      }
    ],
    subtaskTitles:subtaskTitles
  };

  function task(code, title, objectives){
    return {
      taskId:"task-" + code.replace(".","-"),
      taskCode:code,
      taskTitle:title,
      subtasks:objectives.map(function(id){
        return {subtaskId:id, subtaskTitle:subtaskTitles[id] || id};
      })
    };
  }

  function subtaskTitle(id){ return hierarchy.subtaskTitles[id] || id; }
  function taskCodeFor(objective){ return objective.split(".").slice(0,2).join("."); }
  function taskTitleFor(objective){
    const domain = hierarchy.domains.find(function(item){ return item.number === Number(objective[0]); });
    const taskCode = taskCodeFor(objective);
    const t = domain && domain.tasks.find(function(item){ return item.taskCode === taskCode; });
    return t ? t.taskTitle : "";
  }
  function cardSetMeta(domainNumber, objective, title, cardType, difficulty, tags){
    return {
      domainId:"domain-" + domainNumber,
      domainTitle:domainNumber === 1 ? "Fundamentals of AI and ML" : "Fundamentals of GenAI",
      taskId:"task-" + taskCodeFor(objective).replace(".","-"),
      taskTitle:taskTitleFor(objective),
      subtaskId:objective,
      subtaskTitle:subtaskTitle(objective),
      cardSetId:"",
      cardSetTitle:title,
      cardType:cardType || "Mixed review",
      difficulty:difficulty || "Foundational",
      tags:tags || [],
      sourceSection:"Master Study Guide §" + objective + " " + subtaskTitle(objective)
    };
  }
  function annotateRound(round, domainNumber, objective, cardType, difficulty, tags){
    const meta = cardSetMeta(domainNumber, objective, round.title, cardType, difficulty, tags);
    meta.cardSetId = round.id;
    round.hierarchy = Object.assign({}, meta);
    round.taskId = round.taskId || meta.taskId;
    round.objective = round.objective || objective;
    const cards = round.cards || round.items || round.concepts || [];
    cards.forEach(function(card){
      card.hierarchy = card.hierarchy || Object.assign({}, meta, {
        cardId:card.id,
        cardSetId:round.id,
        cardSetTitle:round.title
      });
    });
  }

  function addDomain1Expansions(){
    const domain = window.STUDY_DATA && window.STUDY_DATA.domains && window.STUDY_DATA.domains.find(function(item){ return item.id === "domain-1"; });
    if(!domain) return;
    domain.tasks = hierarchy.domains[0].tasks.map(function(t){ return {id:t.taskId, code:"Task " + t.taskCode, title:t.taskTitle, objectives:t.subtasks.map(function(s){ return s.subtaskId; })}; });
    domain.rounds.push(serviceComparisonRound(), fmSourceRound(), productionMethodsRound(), pipelineServicesRound());
  }

  function addDomain2Expansions(){
    const activity = (window.HUB_LEGACY_ACTIVITIES || []).find(function(item){ return item.id === "domain2-genai-fundamentals"; });
    if(!activity) return;
    const lifecycle = activity.rounds.find(function(round){ return round.id === "sequence"; });
    if(lifecycle && lifecycle.concepts){
      lifecycle.concepts.forEach(function(concept){ concept.name = "FM lifecycle step"; });
    }
    const sequenceIndex = activity.rounds.findIndex(function(round){ return round.id === "sequence"; });
    const targetRound = foundationModelLifecycleDefinitionRound();
    if(sequenceIndex >= 0){
      activity.rounds.splice(sequenceIndex + 1, 0, targetRound);
    }else{
      activity.rounds.push(targetRound);
    }
    activity.rounds.push(genaiLimitationsRound(), bedrockCapabilityRound(), genaiServiceComparisonRound(), privacySafetyRound());
  }

  function serviceComparisonRound(){
    return {
      id:"d1-t125-service-comparisons",
      objective:"1.2.5",
      title:"AWS Managed AI Service Comparisons",
      activity:"match",
      instructions:"Match each confusing pair to the deciding exam distinction from the guide.",
      sourceNote:"Guide §1.2.5: service selection turns on input modality, output, and whether the service extracts, analyzes, searches, recommends, or converses.",
      slotLabel:"Key distinction",
      destinations:[
        {id:"textract-rekognition", label:"Textract vs Rekognition"},
        {id:"transcribe-comprehend", label:"Transcribe vs Comprehend"},
        {id:"polly-transcribe", label:"Polly vs Transcribe"},
        {id:"lex-polly", label:"Lex vs Polly"},
        {id:"kendra-kb", label:"Kendra vs Bedrock Knowledge Bases"},
        {id:"personalize-bedrock", label:"Personalize vs Bedrock"},
        {id:"quick-athena", label:"Amazon Quick vs Athena"},
        {id:"sagemaker-managed-ai", label:"SageMaker AI vs managed AI APIs"}
      ],
      cards:[
        {id:"c-d1-svc-textract-rekognition", text:"Documents with forms, tables, key-value pairs, handwriting, invoices, or applications point to Textract; objects, scenes, faces, moderation, or words in a photo point to Rekognition.", answer:"textract-rekognition", explanation:"Both can see text, but Textract understands document structure."},
        {id:"c-d1-svc-transcribe-comprehend", text:"Audio recordings must become text with Transcribe before Comprehend can analyze sentiment, entities, PII, key phrases, or toxicity.", answer:"transcribe-comprehend", explanation:"Comprehend analyzes text that already exists; it does not process raw audio."},
        {id:"c-d1-svc-polly-transcribe", text:"Text in and speech out is Polly; speech or audio in and text out is Transcribe.", answer:"polly-transcribe", explanation:"The direction of conversion is the entire clue."},
        {id:"c-d1-svc-lex-polly", text:"A bot that captures intents and slots is Lex; a service that only reads text aloud is Polly.", answer:"lex-polly", explanation:"Lex manages conversation flow. Polly supplies voice output."},
        {id:"c-d1-svc-kendra-kb", text:"Enterprise search across repositories points to Kendra; a generative answer grounded by retrieved chunks points to Bedrock Knowledge Bases.", answer:"kendra-kb", explanation:"Kendra searches and ranks documents; Knowledge Bases feed retrieved context into a foundation model."},
        {id:"c-d1-svc-personalize-bedrock", text:"User-item interaction data and personalized ranking point to Personalize; open-ended generation or summarization points to a foundation model on Bedrock.", answer:"personalize-bedrock", explanation:"Personalize is a recommender, not a general GenAI service."},
        {id:"c-d1-svc-quick-athena", text:"Dashboards, BI, visualizations, natural-language analysis, or agentic research point to Amazon Quick; SQL over data in S3 points to Athena.", answer:"quick-athena", explanation:"Quick is the business-user analytics experience; Athena is the serverless query engine."},
        {id:"c-d1-svc-sagemaker-managed", text:"Train, tune, deploy, or monitor your own custom model with SageMaker AI; call a pre-trained API service when the guide names a managed AI service.", answer:"sagemaker-managed-ai", explanation:"SageMaker AI is the ML platform; services like Comprehend and Textract are task-specific APIs."}
      ]
    };
  }

  function fmSourceRound(){
    return {
      id:"d1-t132-fm-sources",
      objective:"1.3.2",
      title:"Sources Of Foundation Models",
      activity:"match",
      instructions:"Match each source path to the clue that makes it appropriate.",
      sourceNote:"Guide §1.3.2: practitioners can use managed provider models, open-source pre-trained models, marketplace/model hubs, or train from scratch in rare high-resource cases.",
      slotLabel:"Best source",
      destinations:[
        {id:"bedrock", label:"Amazon Bedrock model provider"},
        {id:"jumpstart", label:"SageMaker JumpStart or model hub"},
        {id:"open-source", label:"Open-source pre-trained model"},
        {id:"from-scratch", label:"Train from scratch"},
        {id:"custom-import", label:"Import a supported custom model"}
      ],
      cards:[
        {id:"c-d1-fms-bedrock", text:"Use a fully managed API to leading foundation models from multiple providers without managing infrastructure.", answer:"bedrock", explanation:"Bedrock is the managed multi-provider FM access answer."},
        {id:"c-d1-fms-jumpstart", text:"Start from a pre-trained or open model plus solution templates and deploy it to SageMaker endpoints.", answer:"jumpstart", explanation:"JumpStart is the model hub path inside SageMaker AI."},
        {id:"c-d1-fms-open-source", text:"Use published weights when licensing and deployment control matter and the team can operate the model.", answer:"open-source", explanation:"Open-source models give control but add operational responsibility."},
        {id:"c-d1-fms-scratch", text:"Only choose this when the organization has extraordinary data, compute, money, and a reason existing FMs cannot satisfy.", answer:"from-scratch", explanation:"The guide treats pre-training an FM as expensive and uncommon for an AI practitioner."},
        {id:"c-d1-fms-import", text:"Bring a supported trained model into the managed foundation-model workflow instead of training or hosting it entirely yourself.", answer:"custom-import", explanation:"Custom import is a source/deployment path for existing supported weights."}
      ]
    };
  }

  function pipelineServicesRound(){
    return {
      id:"d1-t134-pipeline-expanded-services",
      objective:"1.3.4",
      title:"Pipeline Stage AWS Service Clues",
      activity:"match",
      instructions:"Match the scenario clue to the pipeline stage service or feature. This expands the guide's stage-by-stage service table.",
      sourceNote:"Guide §1.3.4 Table 1.10: services are grouped by ML pipeline stage, from storage and ETL through deployment, monitoring, and governance.",
      slotLabel:"Service or feature",
      destinations:[
        {id:"s3", label:"Amazon S3"},
        {id:"glue", label:"AWS Glue"},
        {id:"lake-formation", label:"AWS Lake Formation"},
        {id:"data-wrangler", label:"SageMaker Data Wrangler"},
        {id:"quick", label:"Amazon Quick"},
        {id:"athena", label:"Amazon Athena"},
        {id:"feature-store", label:"SageMaker Feature Store"},
        {id:"ground-truth", label:"SageMaker Ground Truth"},
        {id:"a2i", label:"Amazon Augmented AI"},
        {id:"model-monitor", label:"SageMaker Model Monitor"},
        {id:"cloudwatch", label:"Amazon CloudWatch"},
        {id:"clarify", label:"SageMaker Clarify"},
        {id:"model-cards", label:"SageMaker Model Cards"},
        {id:"model-registry", label:"SageMaker Model Registry"},
        {id:"cloudtrail-config", label:"CloudTrail or AWS Config"}
      ],
      cards:[
        {id:"c-d1-pipe-s3", text:"Default object storage or data lake location for training data, raw files, features, model artifacts, and batch outputs.", answer:"s3", explanation:"S3 is the default storage layer for ML data lakes."},
        {id:"c-d1-pipe-glue", text:"Serverless ETL jobs and a Data Catalog for preparing analytics-ready data.", answer:"glue", explanation:"Glue belongs to ingestion, preparation, and cataloging."},
        {id:"c-d1-pipe-lake", text:"Central permissions and governance for a data lake.", answer:"lake-formation", explanation:"Lake Formation controls access around lake data."},
        {id:"c-d1-pipe-wrangler", text:"Visual preparation and transformation of tabular data before training.", answer:"data-wrangler", explanation:"Data Wrangler is not the reusable feature repository."},
        {id:"c-d1-pipe-quick", text:"Business dashboards, visualizations, natural-language analysis, and agentic research over data.", answer:"quick", explanation:"Amazon Quick is the guide's analytics/BI name."},
        {id:"c-d1-pipe-athena", text:"Run serverless SQL queries over data, especially files in S3.", answer:"athena", explanation:"Athena is query, not dashboarding or ETL."},
        {id:"c-d1-pipe-feature", text:"Central, versioned repository for reusable feature definitions used consistently in training and inference.", answer:"feature-store", explanation:"Feature Store prevents teams from redefining the same feature differently."},
        {id:"c-d1-pipe-ground", text:"Build labelled datasets with human or managed labelling workflows.", answer:"ground-truth", explanation:"Ground Truth is the labelling service."},
        {id:"c-d1-pipe-a2i", text:"Insert human review into inference workflows when predictions need oversight.", answer:"a2i", explanation:"A2I means human-in-the-loop review, not dataset labelling."},
        {id:"c-d1-pipe-monitor", text:"Detect data quality drift and model quality drift after deployment.", answer:"model-monitor", explanation:"Model Monitor watches production ML behavior."},
        {id:"c-d1-pipe-cloudwatch", text:"Operational logs, metrics, alarms, and dashboards for running systems.", answer:"cloudwatch", explanation:"CloudWatch is operational monitoring, not model-specific drift analysis."},
        {id:"c-d1-pipe-clarify", text:"Bias and explainability analysis, including drift in bias or feature attribution.", answer:"clarify", explanation:"Clarify is the bias/explainability feature."},
        {id:"c-d1-pipe-cards", text:"Standardized documentation of model intended use, limitations, risk, and evaluation details.", answer:"model-cards", explanation:"Model Cards document; they do not version or monitor."},
        {id:"c-d1-pipe-registry", text:"Manage model versions, approval status, and promotion toward deployment.", answer:"model-registry", explanation:"Registry is lifecycle state for trained model packages."},
        {id:"c-d1-pipe-audit", text:"Audit API calls and check configuration compliance for governance.", answer:"cloudtrail-config", explanation:"CloudTrail records API activity; Config evaluates resource configuration."}
      ]
    };
  }

  function productionMethodsRound(){
    return {
      id:"d1-t133-production-methods",
      objective:"1.3.3",
      title:"Methods To Use A Model In Production",
      activity:"match",
      instructions:"Match each production method to the clue that makes it the best fit.",
      sourceNote:"Guide §1.3.3: production use can mean a managed API, a SageMaker endpoint, a batch job, serverless endpoint, asynchronous endpoint, or self-hosted deployment.",
      slotLabel:"Production method",
      destinations:[
        {id:"managed-api", label:"Managed API service"},
        {id:"sagemaker-endpoint", label:"SageMaker AI endpoint"},
        {id:"batch", label:"Batch or Batch Transform"},
        {id:"async", label:"Asynchronous endpoint"},
        {id:"serverless", label:"Serverless inference"},
        {id:"self-hosted", label:"Self-hosted on EC2, ECS, or EKS"},
        {id:"lambda", label:"AWS Lambda wrapper"}
      ],
      cards:[
        {id:"c-d1-prod-managed-api", text:"Use a pre-trained AWS AI or GenAI service where AWS operates the model and scaling and you call an API.", answer:"managed-api", explanation:"Bedrock and managed AI services remove model-hosting work."},
        {id:"c-d1-prod-sm-endpoint", text:"Deploy your own trained model to a managed endpoint while choosing instance and scaling configuration.", answer:"sagemaker-endpoint", explanation:"SageMaker AI endpoints sit between a managed API and fully self-hosted infrastructure."},
        {id:"c-d1-prod-batch", text:"Run offline scoring over a full dataset and write the output to storage.", answer:"batch", explanation:"Dataset plus schedule or offline job is the batch clue."},
        {id:"c-d1-prod-async", text:"Queue a single large or slow request and retrieve the result later.", answer:"async", explanation:"Asynchronous inference handles individual long-running requests."},
        {id:"c-d1-prod-serverless", text:"Serve intermittent interactive requests while scaling down during idle periods.", answer:"serverless", explanation:"Serverless inference is for spiky request traffic where idle cost matters."},
        {id:"c-d1-prod-self", text:"Run model containers yourself when the team needs maximum infrastructure control and accepts operational burden.", answer:"self-hosted", explanation:"Self-hosting increases control and responsibility."},
        {id:"c-d1-prod-lambda", text:"Use lightweight serverless compute to wrap orchestration or simple inference calls, not to host a large model directly.", answer:"lambda", explanation:"Lambda can front or coordinate inference workflows; model hosting usually belongs elsewhere."}
      ]
    };
  }

  function bedrockCapabilityRound(){
    return {
      id:"bedrockcaps",
      title:"Bedrock Capabilities",
      order:17,
      mode:"slots",
      intro:"Amazon Bedrock appears throughout Domain 2. Match each named capability to the problem it solves.",
      footnote:"Guide §2.3.1: Bedrock is model access plus Knowledge Bases, Guardrails, Agents, Flows, Prompt Management, Model Evaluation and customisation.",
      slotTypes:[{key:"solves", label:"Problem solved"}],
      concepts:[
        {id:"kb", name:"Bedrock Knowledge Bases", solves:"Managed RAG: chunk, embed, retrieve context from enterprise data and ground a model answer."},
        {id:"guardrails", name:"Bedrock Guardrails", solves:"Apply safety policies such as content filters, denied topics, PII redaction and contextual grounding checks across models."},
        {id:"agents", name:"Bedrock Agents", solves:"Let an FM plan and call APIs or tools to complete multi-step tasks."},
        {id:"flows", name:"Bedrock Flows", solves:"Orchestrate a GenAI workflow visually by connecting prompts, models, conditions and service calls."},
        {id:"promptmgmt", name:"Bedrock Prompt Management", solves:"Version, test and reuse prompts rather than copying prompt text across applications."},
        {id:"modeleval", name:"Bedrock Model Evaluation", solves:"Compare model outputs with automated or human evaluation before selecting a model."},
        {id:"customization", name:"Bedrock model customisation", solves:"Adapt a supported foundation model when prompting or RAG is not enough."}
      ]
    };
  }

  function foundationModelLifecycleDefinitionRound(){
    return {
      id:"fm-lifecycle-definitions",
      title:"2.1.3 — Foundation Model Lifecycle Definitions",
      order:3.5,
      activity:"match",
      checkLabel:"Check definitions",
      instructions:"Match each definition to the correct foundation-model lifecycle stage. Use the original Sequence set when you want to practice only the order.",
      sourceNote:"Master Study Guide §2.1.3: these are the seven exact lifecycle stages and their meanings.",
      completionCallout:{
        title:"Remember for the exam",
        text:"As an AI practitioner using Amazon Bedrock, you normally enter this lifecycle at step 5 or 6 because the foundation-model provider has already completed steps 1 through 4. This distinction often resolves cost and effort questions: using an existing foundation model is comparatively affordable, while creating and pre-training one is extremely expensive."
      },
      slotLabel:"Definition",
      destinations:[
        {id:"data-selection", label:"1. Data selection"},
        {id:"model-selection", label:"2. Model selection"},
        {id:"pre-training", label:"3. Pre-training"},
        {id:"fine-tuning", label:"4. Fine-tuning"},
        {id:"evaluation", label:"5. Evaluation"},
        {id:"deployment", label:"6. Deployment"},
        {id:"feedback", label:"7. Feedback"}
      ],
      cards:[
        {id:"c-d2-fm-life-def-01-data-selection", order:1, text:"Choose and curate the pre-training corpus: scale, diversity, quality, licensing, and removal of harmful or duplicated content.", answer:"data-selection", explanation:"Data selection is the corpus choice and curation stage."},
        {id:"c-d2-fm-life-def-02-model-selection", order:2, text:"Choose the architecture and scale: transformer or diffusion, parameter count, context length, and modalities.", answer:"model-selection", explanation:"Model selection chooses the architecture, size, context length, and supported modalities."},
        {id:"c-d2-fm-life-def-03-pre-training", order:3, text:"Self-supervised training on the unlabelled corpus. This is enormously expensive, is generally performed once, and is where the model's general capability comes from.", answer:"pre-training", explanation:"Pre-training is the expensive stage that creates the model's general capability."},
        {id:"c-d2-fm-life-def-04-fine-tuning", order:4, text:"Adapt the pre-trained model to a task, domain, or desired behaviour using a much smaller labelled dataset. This includes instruction tuning and RLHF.", answer:"fine-tuning", explanation:"Fine-tuning adapts the already pre-trained model to narrower behavior."},
        {id:"c-d2-fm-life-def-05-evaluation", order:5, text:"Evaluate the model using benchmark datasets, automated metrics, human evaluation, LLM-as-a-judge approaches, and safety and bias testing.", answer:"evaluation", explanation:"Evaluation measures capability, quality, safety, and bias."},
        {id:"c-d2-fm-life-def-06-deployment", order:6, text:"Serve the model through a managed API or self-hosted infrastructure, with appropriate guardrails and monitoring.", answer:"deployment", explanation:"Deployment makes the model available to applications."},
        {id:"c-d2-fm-life-def-07-feedback", order:7, text:"Collect real-world signals such as user ratings, escalations, and failure cases, and feed them back into fine-tuning and evaluation.", answer:"feedback", explanation:"Feedback closes the loop for later fine-tuning and evaluation."}
      ]
    };
  }

  function genaiLimitationsRound(){
    return {
      id:"limitations-detail",
      title:"GenAI Limitations And Mitigations",
      order:16.5,
      mode:"slots",
      intro:"Objective 2.2.2 names the limitations directly. Match each limitation to the practical exam clue and mitigation mindset.",
      footnote:"Guide §2.2.2: the correct answer is usually a mitigation such as grounding, validation, citations, human review or controls, not a model that magically has no limitation.",
      slotTypes:[{key:"clue", label:"Exam clue or mitigation"}],
      concepts:[
        {id:"hallucination", name:"Hallucination", clue:"The model invents plausible but false facts; mitigate with grounding, citations, validation and human review."},
        {id:"interpretability", name:"Interpretability", clue:"It is hard to explain exactly why a model produced an answer, especially for regulated decisions."},
        {id:"inaccuracy", name:"Inaccuracy", clue:"Outputs can be wrong even when fluent; evaluate against task-specific standards."},
        {id:"nondeterminism", name:"Nondeterminism", clue:"The same prompt can produce different outputs, so exact repeatability is not guaranteed."},
        {id:"costscale", name:"Cost at scale", clue:"Token costs, long prompts and long outputs become expensive at high request volume."},
        {id:"datacurrency", name:"Data currency", clue:"A model may not know recent facts unless connected to retrieval or current data sources."},
        {id:"biastoxicity", name:"Bias and toxicity", clue:"Models can reproduce harmful patterns from training data; use guardrails, filtering and evaluation."}
      ]
    };
  }

  function genaiServiceComparisonRound(){
    return {
      id:"genaisvccompare",
      title:"GenAI Service Comparisons",
      order:18,
      mode:"buckets",
      intro:"Sort the scenario clue into the AWS GenAI service or layer the guide says it points toward.",
      footnote:"Guide §2.3.1: service choice is mostly layer choice: model access, ML platform, model hub, agent runtime, agent SDK, IDE, assistant or BI workspace.",
      targets:[
        {id:"bedrock", name:"Amazon Bedrock"},
        {id:"sagemaker", name:"SageMaker AI"},
        {id:"jumpstart", name:"SageMaker JumpStart"},
        {id:"agentcore", name:"Bedrock AgentCore"},
        {id:"strands", name:"Strands Agents"},
        {id:"kiro", name:"Kiro"},
        {id:"amazonq", name:"Amazon Q"},
        {id:"quick", name:"Amazon Quick"}
      ],
      items:[
        {id:"cmp1", target:"bedrock", text:"Use a foundation model from multiple providers through a serverless managed API."},
        {id:"cmp2", target:"sagemaker", text:"Train and deploy your own custom ML model with full endpoint control."},
        {id:"cmp3", target:"jumpstart", text:"Deploy an open-source pre-trained model from a model hub into your own SageMaker environment."},
        {id:"cmp4", target:"agentcore", text:"Run a working agent prototype securely in production with managed memory, identity, gateway and observability."},
        {id:"cmp5", target:"strands", text:"Build an agent in code from a model, prompt and tools with minimal boilerplate."},
        {id:"cmp6", target:"kiro", text:"Use a spec-driven agentic IDE that writes requirements and design before coding."},
        {id:"cmp7", target:"amazonq", text:"Ask an AI assistant for help across AWS surfaces such as console and documentation."},
        {id:"cmp8", target:"quick", text:"Business users need dashboards, natural-language analysis, chat or automated research over business data."}
      ]
    };
  }

  function privacySafetyRound(){
    return {
      id:"privacy-safety",
      title:"AWS GenAI Privacy, Safety, And Compliance",
      order:19,
      mode:"slots",
      intro:"Match each AWS infrastructure or Bedrock capability to the advantage it provides for GenAI workloads.",
      footnote:"Guide §2.3.2–2.3.3: prompts and completions on Amazon Bedrock are not used to train base FMs and are not shared with model providers.",
      slotTypes:[{key:"gives", label:"What it gives"}],
      concepts:[
        {id:"iam", name:"AWS IAM", gives:"Fine-grained access control for who can invoke models, manage prompts or use data sources."},
        {id:"kms", name:"AWS KMS", gives:"Encryption with customer managed keys where required."},
        {id:"privatelink", name:"AWS PrivateLink", gives:"Private connectivity so traffic can stay off the public internet."},
        {id:"artifact", name:"AWS Artifact", gives:"On-demand access to compliance reports."},
        {id:"auditmanager", name:"AWS Audit Manager", gives:"Evidence collection and compliance assessment workflows."},
        {id:"cloudtrail", name:"AWS CloudTrail", gives:"Auditable records of API calls."},
        {id:"bedrockprivacy", name:"Bedrock data privacy", gives:"Prompts and completions are not used to train the underlying FMs or shared with model providers."},
        {id:"guardrails2", name:"Bedrock Guardrails", gives:"Consistent safety controls including filters, denied topics, PII redaction and grounding checks."}
      ]
    };
  }

  function annotateExisting(){
    const d1 = window.STUDY_DATA && window.STUDY_DATA.domains && window.STUDY_DATA.domains.find(function(item){ return item.id === "domain-1"; });
    if(d1){
      d1.rounds.forEach(function(round){
        const type = round.activity === "sort" ? "Scenario" : round.slotTypes ? "Feature recognition" : "Definition";
        annotateRound(round, 1, round.objective, type, round.objective === "1.1.1" ? "Foundational" : "Intermediate", inferTags(round.title));
      });
    }
    (window.HUB_LEGACY_ACTIVITIES || []).forEach(function(activity){
      (activity.rounds || []).forEach(function(round){
        const objective = objectiveForLegacyRound(activity, round.id, round);
        if(objective) annotateRound(round, activity.domain, objective, legacyType(round), activity.difficulty || "Intermediate", inferTags(round.title + " " + (round.intro || "")));
      });
    });
  }

  function objectiveForLegacyRound(activity, roundId, round){
    const activityId = activity.id;
    if(activityId === "domain2-genai-fundamentals"){
      return {
        core:"2.1.1", usecases:"2.1.2", sequence:"2.1.3", "fm-lifecycle-definitions":"2.1.3", levers:"2.1.4", leverfit:"2.1.4", context:"2.1.5", patterns:"2.1.6", stack:"2.1.6", memory:"2.1.6", advlim:"2.2.1", "limitations-detail":"2.2.2", selection:"2.2.3", bizmetrics:"2.2.4", layers:"2.3.1", trigger:"2.3.1", whyaws:"2.3.2", costtradeoffs:"2.3.4", bedrockcaps:"2.3.1", genaisvccompare:"2.3.1", "privacy-safety":"2.3.3"
      }[roundId];
    }
    return (activity.objectiveCodes && activity.objectiveCodes[0]) || round.objective;
  }

  function legacyType(round){
    if(round.mode === "buckets" || round.activity === "sort") return "Scenario";
    if((round.title || "").toLowerCase().indexOf("service") >= 0 || (round.intro || "").toLowerCase().indexOf("service") >= 0) return "Service identification";
    if((round.intro || "").toLowerCase().indexOf("scenario") >= 0) return "Scenario";
    return "Feature recognition";
  }

  function inferTags(text){
    const lower = String(text || "").toLowerCase();
    return ["aws services","service comparison","cost","agentic ai","metrics","mlops","context","foundation models","inference","data"].filter(function(tag){
      return lower.indexOf(tag.split(" ")[0]) >= 0;
    });
  }

  addDomain1Expansions();
  addDomain2Expansions();
  annotateExisting();
  window.GUIDE_HIERARCHY = hierarchy;
})();
