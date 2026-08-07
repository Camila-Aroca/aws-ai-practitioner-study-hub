(function(){
  "use strict";

  const SECTION_ID = "domain-2-addendum";
  const ACTIVITY_ID = "domain2-addendum";
  const SOURCE = "AIF-C01_Domain_2_Gap_Filling_Addendum(2).docx";

  function meta(roundId, objectives, title, difficulty, priority, tags){
    return {
      domainId:2,
      sectionId:SECTION_ID,
      sourceObjectiveId:objectives.join(","),
      cardSetId:roundId,
      cardSetTitle:title,
      difficulty,
      priority,
      tags,
      source:SOURCE,
      isAddendum:true
    };
  }

  function card(roundId, n, text, answer, cardType, difficulty, priority, tags, boundary, extra){
    const id = roundId + "-" + String(n).padStart(2,"0");
    return Object.assign({
      id,
      text,
      answer,
      hierarchy:meta(roundId, [], "", difficulty || "Intermediate", priority || "MUST KNOW", tags || []),
      domainId:2,
      sectionId:SECTION_ID,
      sourceObjectiveId:"",
      cardSetId:roundId,
      cardId:id,
      cardType:cardType || "Source cell",
      difficulty:difficulty || "Intermediate",
      priority:priority || "MUST KNOW",
      tags:tags || [],
      source:SOURCE,
      isAddendum:true,
      distractorBoundary:boundary || "",
      legacyName:"",
      currentName:""
    }, extra || {});
  }

  function destinations(list){
    return list.map(item => ({id:item[0], label:item[1], sub:item[2] || ""}));
  }

  function apply(round){
    (round.cards || []).forEach(item => {
      item.sourceObjectiveId = round.objectiveCodes.join(",");
      item.hierarchy.sourceObjectiveId = item.sourceObjectiveId;
      item.hierarchy.cardSetTitle = round.title;
    });
    return round;
  }

  function round(config){
    return apply(Object.assign({
      activity:"sort",
      checkLabel:"Check source structure",
      sourceNote:"Source: Domain 2 Gap-Filling Addendum. Expands objectives " + config.objectiveCodes.join(", ") + ".",
      footnote:"<strong>EXPANDS " + config.objectiveCodes.join(", ") + "</strong>",
      hierarchy:meta(config.id, config.objectiveCodes, config.title, config.difficulty, config.priority, config.tags),
      completionCallout:{
        title:"Source structure restored",
        text:"Review the completed source table, sequence, or service mapping before moving on."
      }
    }, config));
  }

  function matrixRound(config){
    const cards = [];
    let n = 1;
    config.table.rows.forEach(row => {
      config.table.columns.forEach(column => {
        const value = row.values[column.id];
        cards.push(card(config.id, n++, value, row.id + "-" + column.id, "Source table cell", config.difficulty, config.priority, config.tags, "Use the original row and column headers to place this cell."));
      });
    });
    return round(Object.assign({}, config, {
      layout:"matrix",
      activity:"match",
      destinations:config.table.rows.flatMap(row => config.table.columns.map(column => ({id:row.id + "-" + column.id, label:row.label + " / " + column.label}))),
      cards
    }));
  }

  function tfRound(config){
    return round(Object.assign({}, config, {
      layout:"true-false",
      activity:"true-false",
      destinations:destinations([["true","True"],["false","False"]]),
      cards:config.statements.map((item, idx) => card(config.id, idx + 1, item.statement, String(item.correct), "True/false", config.difficulty, config.priority, config.tags, item.reason, {explanation:item.reason}))
    }));
  }

  function sequenceRound(config){
    const slotPrefix = config.slotPrefix || "Step";
    return round(Object.assign({}, config, {
      activity:"match",
      destinations:config.steps.map((step, idx) => ({id:"step-" + (idx + 1), label:slotPrefix + " " + (idx + 1), sub:step.sub || "Place the correct source step here."})),
      cards:config.steps.map((step, idx) => card(config.id, idx + 1, step.name + (step.detail ? " — " + step.detail : ""), "step-" + (idx + 1), "Ordering", config.difficulty, config.priority, config.tags, "Restore the original source order."))
    }));
  }

  function matchRound(config){
    return round(Object.assign({}, config, {
      destinations:destinations(config.slots),
      cards:config.items.map((item, idx) => card(config.id, idx + 1, item.text, item.answer, item.type || "Matching", config.difficulty, item.priority || config.priority, config.tags.concat(item.tags || []), item.boundary || "Place this card under the visible source label it completes.", item.extra))
    }));
  }

  const rounds = [
    matrixRound({
      id:"addendum-discriminative-generative-comparison",
      title:"Discriminative vs Generative Comparison",
      order:1,
      objectiveCodes:["2.1.1"],
      difficulty:"Foundational",
      priority:"MUST KNOW",
      tags:["model-family","comparison-table"],
      instructions:"Restore the source comparison table. The row labels and model columns stay visible; place each removed answer cell back where it belongs.",
      table:{
        rowHeader:"Question to ask",
        columns:[{id:"disc", label:"Discriminative model"},{id:"gen", label:"Generative model"}],
        rows:[
          {id:"output", label:"Typical output", values:{disc:"Label, category, probability, score or number.", gen:"New text, image, audio, video, code or synthetic sample."}},
          {id:"tasks", label:"Common tasks", values:{disc:"Classification and regression.", gen:"Generation, summarisation, rewriting, image creation and synthetic data."}},
          {id:"example", label:"Example", values:{disc:"Fraud/not fraud; expected delivery time; churn probability.", gen:"Draft a response; create a product image; generate artificial transaction records."}},
          {id:"aws", label:"Typical AWS route", values:{disc:"A pre-trained AI API or a custom SageMaker AI model.", gen:"Amazon Bedrock or a generative model hosted through SageMaker AI/JumpStart."}},
          {id:"distractor", label:"Key distractor test", values:{disc:"The answer is only a label or number.", gen:"The answer must be new, open-ended content."}}
        ]
      }
    }),
    tfRound({
      id:"addendum-latent-space-true-false",
      title:"Latent Space: True or False",
      order:2,
      objectiveCodes:["2.1.1"],
      difficulty:"Foundational",
      priority:"MUST KNOW",
      tags:["latent-space","true-false"],
      instructions:"Answer each source statement, then review the original reason from the addendum.",
      statements:[
        {statement:"The latent space captures learned relationships among concepts.", correct:true, reason:"The geometry reflects patterns learned from data."},
        {statement:"It can support semantic similarity between inputs.", correct:true, reason:"Distances or angles between vectors can represent similarity."},
        {statement:"It must be stored in one specific database type.", correct:false, reason:"A latent representation is a model concept; vector databases are one way to index embeddings."},
        {statement:"It applies only to image data.", correct:false, reason:"Text, image, audio and multimodal models all learn internal representations."},
        {statement:"Every dimension has a clear human-readable meaning.", correct:false, reason:"The representation is distributed and often difficult to interpret dimension by dimension."}
      ]
    }),
    matchRound({
      id:"addendum-model-family-definitions",
      title:"Model Family Definitions",
      order:3,
      objectiveCodes:["2.1.1"],
      difficulty:"Foundational",
      priority:"MUST KNOW",
      tags:["transformer","diffusion","gan"],
      instructions:"Match each source definition to the visible model family name.",
      slots:[["transformer","Transformer"],["diffusion","Diffusion model"],["gan","Generative adversarial network"]],
      items:[
        {text:"Uses attention to model relationships across sequences of tokens.", answer:"transformer"},
        {text:"Generates by learning to reverse a gradual noising process.", answer:"diffusion"},
        {text:"Uses a generator and discriminator trained in competition.", answer:"gan"}
      ]
    }),
    matchRound({
      id:"addendum-model-family-mechanisms",
      title:"Transformer, Diffusion, or GAN?",
      order:4,
      objectiveCodes:["2.1.1"],
      difficulty:"Intermediate",
      priority:"MUST KNOW",
      tags:["model-family","mechanism"],
      instructions:"Place each unambiguous source clue under the model family it identifies.",
      slots:[["transformer","Transformer"],["diffusion","Diffusion model"],["gan","Generative adversarial network"]],
      items:[
        {text:"Attention.", answer:"transformer"},
        {text:"Token sequence.", answer:"transformer"},
        {text:"Iterative denoising.", answer:"diffusion"},
        {text:"Starts from noise.", answer:"diffusion"},
        {text:"Generator.", answer:"gan"},
        {text:"Discriminator.", answer:"gan"},
        {text:"Adversarial training.", answer:"gan"},
        {text:"Latent seed.", answer:"gan"}
      ]
    }),
    matchRound({
      id:"addendum-model-family-use-cases",
      title:"Model Family Use Cases",
      order:5,
      objectiveCodes:["2.1.1"],
      difficulty:"Intermediate",
      priority:"MUST KNOW",
      tags:["model-family","use-case"],
      instructions:"Match each clearly worded use case to the family named by the source clue.",
      slots:[["transformer","Transformer"],["diffusion","Diffusion model"],["gan","Generative adversarial network"]],
      items:[
        {text:"Summarising a document.", answer:"transformer"},
        {text:"Translating text.", answer:"transformer"},
        {text:"Generating an image from a text prompt using Stable Diffusion.", answer:"diffusion"},
        {text:"Generating synthetic transaction records through adversarial training.", answer:"gan"}
      ]
    }),
    round({
      id:"addendum-gan-training-order",
      title:"GAN Training Order",
      order:6,
      activity:"match",
      objectiveCodes:["2.1.1"],
      difficulty:"Foundational",
      priority:"MUST KNOW",
      tags:["gan","sequence"],
      instructions:"Restore the source GAN flow diagram. Each visible phase needs the phase name first, then the source-derived action for what that phase does.",
      slotTypes:[
        {key:"phaseName", label:"Name of the phase"},
        {key:"whatDoes", label:"What it does"}
      ],
      destinations:[
        {id:"phase-1", label:"Phase 1"},
        {id:"phase-2", label:"Phase 2"},
        {id:"phase-3", label:"Phase 3"},
        {id:"phase-4", label:"Phase 4"}
      ],
      concepts:[
        {id:"phase-1", name:"Phase 1", phaseName:"Random seed / latent vector", whatDoes:"Provides the compact numerical input that the generator maps into a sample."},
        {id:"phase-2", name:"Phase 2", phaseName:"Generator creates sample", whatDoes:"Produces a candidate synthetic sample intended to resemble the training distribution."},
        {id:"phase-3", name:"Phase 3", phaseName:"Discriminator compares real versus fake", whatDoes:"Estimates whether a sample is real or generated and supplies the learning signal."},
        {id:"phase-4", name:"Phase 4", phaseName:"Training feedback improves both", whatDoes:"Uses the adversarial feedback loop to improve the generator and discriminator."}
      ]
    }),
    matrixRound({
      id:"addendum-gan-components",
      title:"GAN Components",
      order:7,
      objectiveCodes:["2.1.1"],
      difficulty:"Intermediate",
      priority:"MUST KNOW",
      tags:["gan","component-table"],
      instructions:"Restore the source component table. Keep the GAN components visible and place the missing job and boundary cells.",
      table:{
        rowHeader:"Component",
        columns:[{id:"job", label:"Job during training"},{id:"not", label:"What it is not"}],
        rows:[
          {id:"generator", label:"Generator", values:{job:"Produces candidate synthetic samples intended to resemble the training distribution.", not:"A classifier used as the final business prediction."}},
          {id:"discriminator", label:"Discriminator", values:{job:"Estimates whether a sample is real or generated and supplies the learning signal.", not:"The part that creates the final synthetic data."}},
          {id:"latent", label:"Latent vector / seed", values:{job:"A compact numerical input that the generator maps into a sample.", not:"A row stored in a mandatory special-purpose database."}}
        ]
      }
    }),
    matchRound({
      id:"addendum-aws-image-implementation",
      title:"AWS Image and Model Implementation",
      order:8,
      objectiveCodes:["2.1.1","2.1.2","2.3.1"],
      difficulty:"Intermediate",
      priority:"MUST KNOW",
      tags:["bedrock","nova","stable-diffusion","rekognition"],
      instructions:"Keep the AWS names visible and match the source role for each.",
      slots:[["bedrock","Amazon Bedrock"],["nova","Amazon Nova"],["stable","Stable Diffusion through Amazon Bedrock"],["sagemaker","Amazon SageMaker AI / JumpStart"],["rekognition","Amazon Rekognition"]],
      items:[
        {text:"Managed platform for invoking foundation models and building GenAI applications.", answer:"bedrock"},
        {text:"AWS first-party foundation-model family accessed through Bedrock.", answer:"nova"},
        {text:"Diffusion-based text-to-image or image-to-image generation option through Bedrock.", answer:"stable"},
        {text:"Customer-controlled route for training or hosting a specialized image model.", answer:"sagemaker"},
        {text:"Analyzes existing images and returns labels or confidence.", answer:"rekognition"}
      ]
    }),
    matrixRound({
      id:"addendum-synthetic-data-use-cases",
      title:"Synthetic Data Use Cases",
      order:9,
      objectiveCodes:["2.1.1","2.1.2"],
      difficulty:"Intermediate",
      priority:"MUST KNOW",
      tags:["synthetic-data","use-case-table"],
      instructions:"Restore the addendum's synthetic-data table: why it helps and what risk must be verified.",
      table:{
        rowHeader:"Use case",
        columns:[{id:"helps", label:"Why synthetic data helps"},{id:"risk", label:"Main risk to verify"}],
        rows:[
          {id:"augmentation", label:"Training-data augmentation", values:{helps:"Adds examples for rare classes or conditions when real data is scarce.", risk:"Generated samples may amplify bias or fail to add useful diversity."}},
          {id:"testing", label:"Software and analytics testing", values:{helps:"Creates realistic-looking records without depending on production data.", risk:"Synthetic records must preserve the constraints that the system expects."}},
          {id:"privacy", label:"Privacy-sensitive research", values:{helps:"Reduces exposure of direct real-world records.", risk:"Poor generation can still leak or replicate sensitive patterns."}},
          {id:"simulation", label:"Simulation and edge cases", values:{helps:"Creates rare scenarios that are difficult or dangerous to collect.", risk:"Unrealistic synthetic cases can mislead evaluation."}}
        ]
      }
    }),
    matrixRound({
      id:"addendum-personalize-vs-bedrock",
      title:"Personalize vs Bedrock",
      order:10,
      objectiveCodes:["2.1.2"],
      difficulty:"Foundational",
      priority:"MUST KNOW",
      tags:["personalize","bedrock","comparison-table"],
      instructions:"Restore the recommendation-versus-generated-personalisation table.",
      table:{
        rowHeader:"Requirement",
        columns:[{id:"service", label:"Best-fitting service or approach"},{id:"reason", label:"Reason"}],
        rows:[
          {id:"rank", label:"Rank products for each user from behavioural interaction history", values:{service:"Amazon Personalize.", reason:"Purpose-built recommendation and ranking from user/item events."}},
          {id:"message", label:"Write a location-aware product tip or personalised message", values:{service:"Amazon Bedrock with a foundation model.", reason:"The requirement is generated natural-language content using supplied context."}},
          {id:"both", label:"Both rank and explain", values:{service:"Personalize for ranking, Bedrock for the explanation.", reason:"Use each system for the task it is designed to perform."}}
        ]
      }
    }),
    matrixRound({
      id:"addendum-healthscribe-recognition",
      title:"AWS HealthScribe Recognition",
      order:11,
      objectiveCodes:["2.1.2","2.3.1"],
      difficulty:"Foundational",
      priority:"RECOGNITION ONLY",
      tags:["healthscribe","purpose-built"],
      instructions:"Restore the HealthScribe recognition table. This stays lower priority, exactly as the addendum labels it.",
      table:{
        rowHeader:"What it is",
        columns:[{id:"input", label:"Inputs and outputs"},{id:"not", label:"What it does not replace"},{id:"clue", label:"Typical clue"}],
        rows:[
          {id:"healthscribe", label:"AWS HealthScribe", values:{input:"Patient-clinician conversation audio to rich transcript, speaker roles, medical terms and preliminary clinical notes.", not:"It is assistive; clinicians or medical scribes review and finalise the notes.", clue:"Clinical encounter, patient and clinician, draft note, transcript references."}}
        ]
      }
    }),
    sequenceRound({
      id:"addendum-fm-lifecycle-order",
      title:"FM Lifecycle Order",
      order:12,
      objectiveCodes:["2.1.3"],
      difficulty:"Foundational",
      priority:"MUST KNOW",
      tags:["fm-lifecycle","sequence"],
      instructions:"Restore the seven-stage foundation-model lifecycle sequence from the addendum.",
      slotPrefix:"Lifecycle stage",
      steps:[
        {name:"Data selection"},
        {name:"Model selection"},
        {name:"Pre-training"},
        {name:"Fine-tuning"},
        {name:"Evaluation"},
        {name:"Deployment"},
        {name:"Feedback"}
      ]
    }),
    matchRound({
      id:"addendum-fm-stage-definitions",
      title:"FM Stage Definitions",
      order:13,
      objectiveCodes:["2.1.3"],
      difficulty:"Foundational",
      priority:"MUST KNOW",
      tags:["fm-lifecycle","definitions"],
      instructions:"Keep the seven lifecycle stages visible and restore the source definition beside each stage.",
      slots:[["data","Data selection"],["selection","Model selection"],["pretraining","Pre-training"],["finetuning","Fine-tuning"],["evaluation","Evaluation"],["deployment","Deployment"],["feedback","Feedback"]],
      items:[
        {text:"Curate the pre-training corpus, licences and quality controls.", answer:"data"},
        {text:"Choose architecture, scale, modalities and context.", answer:"selection"},
        {text:"Large self-supervised training run.", answer:"pretraining"},
        {text:"Adapt the model with smaller task- or domain-specific data.", answer:"finetuning"},
        {text:"Compare model outputs against built-in or custom datasets and human judgement.", answer:"evaluation"},
        {text:"Expose the model for applications.", answer:"deployment"},
        {text:"Collect real-world quality, cost and failure signals.", answer:"feedback"}
      ]
    }),
    matchRound({
      id:"addendum-real-life-fm-stage",
      title:"Real-Life Activity to FM Stage",
      order:14,
      objectiveCodes:["2.1.3"],
      difficulty:"Intermediate",
      priority:"MUST KNOW",
      tags:["fm-lifecycle","examples"],
      instructions:"Match each atomic real-world activity to the visible lifecycle stage.",
      slots:[["data","Data selection"],["selection","Model selection"],["pretraining","Pre-training"],["finetuning","Fine-tuning"],["evaluation","Evaluation"],["deployment","Deployment"],["feedback","Feedback"]],
      items:[
        {text:"Remove duplicated and unlicensed documents from the training corpus.", answer:"data"},
        {text:"Choose between a transformer and a diffusion architecture.", answer:"selection"},
        {text:"Train on a massive unlabelled corpus.", answer:"pretraining"},
        {text:"Adapt the model using labelled instruction-response pairs.", answer:"finetuning"},
        {text:"Compare outputs using benchmarks and human reviewers.", answer:"evaluation"},
        {text:"Expose the model through an inference endpoint.", answer:"deployment"},
        {text:"Collect user ratings and failure cases.", answer:"feedback"}
      ]
    }),
    matchRound({
      id:"addendum-aws-activity-fm-stage",
      title:"AWS Activity to FM Stage",
      order:15,
      objectiveCodes:["2.1.3"],
      difficulty:"Intermediate",
      priority:"MUST KNOW",
      tags:["fm-lifecycle","aws-services"],
      instructions:"Use the actual lifecycle stage names as slots. Place each narrow AWS activity beside its stage.",
      slots:[["data","Data selection"],["selection","Model selection"],["pretraining","Pre-training"],["finetuning","Fine-tuning"],["evaluation","Evaluation"],["deployment","Deployment"],["feedback","Feedback"]],
      items:[
        {text:"Choose an existing Bedrock model or JumpStart model.", answer:"selection"},
        {text:"Store a customization dataset in Amazon S3.", answer:"finetuning"},
        {text:"Use Bedrock model customization.", answer:"finetuning"},
        {text:"Run Amazon Bedrock Model Evaluation.", answer:"evaluation"},
        {text:"Invoke a model through Amazon Bedrock.", answer:"deployment"},
        {text:"Deploy a custom model to a SageMaker endpoint.", answer:"deployment"},
        {text:"Use application logs to identify recurring failures.", answer:"feedback"}
      ]
    }),
    matrixRound({
      id:"addendum-bedrock-pricing-comparison",
      title:"Bedrock Pricing Comparison",
      order:16,
      objectiveCodes:["2.1.4","2.3.4"],
      difficulty:"Intermediate",
      priority:"MUST KNOW",
      tags:["bedrock","pricing","comparison-table"],
      instructions:"Restore the pricing comparison table using the named Bedrock options as rows.",
      table:{
        rowHeader:"Option",
        columns:[{id:"billing", label:"Billing shape"},{id:"latency", label:"Latency / delivery"},{id:"best", label:"Best fit"},{id:"wrong", label:"Wrong when"}],
        rows:[
          {id:"ondemand", label:"On-demand / Standard", values:{billing:"Pay for input and output tokens with no long-term capacity commitment.", latency:"Synchronous, interactive.", best:"Variable or early-stage traffic; ordinary chat and app calls.", wrong:"The workload needs guaranteed dedicated capacity at high steady volume."}},
          {id:"batch", label:"Batch inference", values:{billing:"Token-priced asynchronous jobs; select models can be priced below ordinary on-demand rates.", latency:"Results later, commonly through S3.", best:"Large offline summarisation, evaluation or generation jobs.", wrong:"A user is waiting for each response."}},
          {id:"provisioned", label:"Provisioned Throughput", values:{billing:"Dedicated model capacity billed over time/model units.", latency:"Predictable and reserved.", best:"High, steady utilisation; guaranteed throughput; some dedicated custom-model deployments.", wrong:"Traffic is low, spiky or unpredictable and capacity would sit idle."}},
          {id:"caching", label:"Prompt caching", values:{billing:"Cache-read and cache-write token rates for a repeated prompt prefix.", latency:"Can reduce repeated processing and latency.", best:"Long stable system prompts, documents or instructions reused across calls.", wrong:"Every prompt is substantially different."}}
        ]
      }
    }),
    matchRound({
      id:"addendum-bedrock-pricing-scenarios",
      title:"Bedrock Pricing Scenarios",
      order:17,
      objectiveCodes:["2.1.4","2.3.4"],
      difficulty:"Intermediate",
      priority:"MUST KNOW",
      tags:["bedrock","pricing","scenario"],
      instructions:"Use the named pricing or inference options as slots. Match each source-style scenario to the best fit.",
      slots:[["ondemand","On-demand"],["batch","Batch inference"],["provisioned","Provisioned Throughput"],["caching","Prompt caching"]],
      items:[
        {text:"Variable unpredictable traffic with interactive answers.", answer:"ondemand"},
        {text:"Large offline set in S3; no user waits for each response.", answer:"batch"},
        {text:"Stable high-volume workload needing dedicated guaranteed capacity.", answer:"provisioned"},
        {text:"Repeated long stable prompt prefix across many requests.", answer:"caching"}
      ]
    }),
    tfRound({
      id:"addendum-custom-bedrock-current-outdated",
      title:"Custom Bedrock Deployment: Current or Outdated",
      order:18,
      objectiveCodes:["2.1.4","2.3.4"],
      difficulty:"Exam-level",
      priority:"MUST KNOW",
      tags:["bedrock","custom-model","true-false"],
      instructions:"Answer the current-product statements directly from the addendum.",
      statements:[
        {statement:"Every custom Bedrock model always requires Provisioned Throughput.", correct:false, reason:"Older blanket rule. Current Bedrock supports on-demand deployment for supported custom models and imported models."},
        {statement:"Provisioned Throughput remains relevant for dedicated predictable capacity.", correct:true, reason:"Guaranteed throughput or dedicated capacity still points to Provisioned Throughput or reserved capacity where supported."},
        {statement:"A supported custom model with variable demand may use on-demand deployment if that path is supported.", correct:true, reason:"The correct answer depends on the requirement and current support matrix."},
        {statement:"An open-source model on the customer's own SageMaker endpoint is a Bedrock custom-model inference mode.", correct:false, reason:"That requirement points to SageMaker JumpStart plus a SageMaker endpoint, not Bedrock managed invocation."}
      ]
    }),
    matrixRound({
      id:"addendum-conversation-context-table",
      title:"Conversation Context Table",
      order:19,
      objectiveCodes:["2.1.5"],
      difficulty:"Foundational",
      priority:"MUST KNOW",
      tags:["conversation","context","memory"],
      instructions:"Restore the source table showing what the mechanism does and whether the model sees earlier information.",
      table:{
        rowHeader:"Mechanism",
        columns:[{id:"does", label:"What it does"},{id:"sees", label:"Does the model see earlier information?"}],
        rows:[
          {id:"previous", label:"Include previous messages in the prompt", values:{does:"Re-sends prior turns as part of the current request.", sees:"Yes, because the messages occupy the current context window."}},
          {id:"summary", label:"Summarise older turns", values:{does:"Compresses long history while retaining key state.", sees:"Yes, through the summary and recent verbatim turns."}},
          {id:"memory", label:"Long-term memory store", values:{does:"Persists selected facts outside the context and retrieves them when relevant.", sees:"Only when the application retrieves and injects them."}},
          {id:"logging", label:"Model invocation logging", values:{does:"Records requests/responses for monitoring and audit.", sees:"Not by logging alone."}},
          {id:"capacity", label:"Provisioned Throughput", values:{does:"Reserves capacity for inference.", sees:"No effect on conversational memory."}}
        ]
      }
    }),
    sequenceRound({
      id:"addendum-rag-query-path",
      title:"RAG Query Path",
      order:20,
      objectiveCodes:["2.1.5"],
      difficulty:"Foundational",
      priority:"MUST KNOW",
      tags:["rag","sequence"],
      instructions:"Restore the exact query-time RAG order from the addendum.",
      slotPrefix:"Query step",
      steps:[
        {name:"Embed the query"},
        {name:"Perform similarity search"},
        {name:"Retrieve and optionally rerank content"},
        {name:"Add retrieved content to the prompt"},
        {name:"Generate the answer and citations"}
      ]
    }),
    matrixRound({
      id:"addendum-s3-vector-store-comparison",
      title:"S3, Embeddings, and Vector Store",
      order:21,
      objectiveCodes:["2.1.5","2.3.1"],
      difficulty:"Intermediate",
      priority:"MUST KNOW",
      tags:["s3","embeddings","vector-store"],
      instructions:"Restore the source comparison table. Do not turn this into an abstract architecture-layer puzzle.",
      table:{
        rowHeader:"Layer",
        columns:[{id:"job", label:"Primary job"},{id:"mistake", label:"Common mistake"}],
        rows:[
          {id:"s3", label:"Amazon S3", values:{job:"Object storage for documents, audio, JSONL datasets, batch inputs, evaluation outputs and model artefacts.", mistake:"Calling S3 itself the ordinary similarity-search engine."}},
          {id:"embedding", label:"Embedding model", values:{job:"Transforms content or a query into numerical vectors that capture semantic relationships.", mistake:"Calling the embedding model a database."}},
          {id:"vector", label:"Vector store / index", values:{job:"Stores and searches vectors by similarity.", mistake:"Assuming the original files disappear or that vectors are human-readable summaries."}},
          {id:"kb", label:"Amazon Bedrock Knowledge Bases", values:{job:"Managed RAG capability that can orchestrate ingestion, chunking, embedding, vector storage/retrieval and generation.", mistake:"Confusing it with pure enterprise search or with the underlying S3 bucket."}}
        ]
      }
    }),
    matchRound({
      id:"addendum-multi-agent-patterns",
      title:"Multi-Agent Pattern Clues",
      order:22,
      objectiveCodes:["2.1.6"],
      difficulty:"Intermediate",
      priority:"MUST KNOW",
      tags:["agents","patterns"],
      instructions:"The source table lists each pattern and its deciding clue. Keep pattern names visible and restore the clue.",
      slots:[["single","Single agent with tools"],["supervisor","Supervisor / orchestrator"],["tool","Agent as a tool"],["swarm","Swarm / peer collaboration"],["pipeline","Sequential pipeline"]],
      items:[
        {text:"One agent handles the goal and calls several tools.", answer:"single"},
        {text:"A lead agent decomposes the goal, delegates to specialists and assembles the result.", answer:"supervisor"},
        {text:"One specialist agent is exposed as a callable capability to another.", answer:"tool"},
        {text:"Agents collaborate as peers without a fixed coordinator.", answer:"swarm"},
        {text:"Agents run in a predetermined order and pass output forward.", answer:"pipeline"}
      ]
    }),
    matrixRound({
      id:"addendum-slm-llm-comparison",
      title:"SLM vs LLM Comparison",
      order:23,
      objectiveCodes:["2.2.3"],
      difficulty:"Intermediate",
      priority:"MUST KNOW",
      tags:["slm","llm","comparison-table"],
      instructions:"Restore the SLM-versus-LLM comparison matrix.",
      table:{
        rowHeader:"Selection factor",
        columns:[{id:"slm", label:"SLM advantage"},{id:"llm", label:"LLM advantage"}],
        rows:[
          {id:"latency", label:"Latency", values:{slm:"Fast inference, especially when local to the device.", llm:"Can still be fast through managed cloud services, but generally heavier."}},
          {id:"hardware", label:"Hardware footprint", values:{slm:"Can fit constrained devices after optimisation/quantisation.", llm:"Usually requires stronger accelerator infrastructure."}},
          {id:"privacy", label:"Privacy / data locality", values:{slm:"Input can remain on-device or on-premises.", llm:"Managed cloud services provide strong security controls but data is sent to the service."}},
          {id:"offline", label:"Offline operation", values:{slm:"Can continue with intermittent or no connectivity.", llm:"Requires network access unless self-hosted locally."}},
          {id:"breadth", label:"Breadth and reasoning", values:{slm:"Best for narrow, well-bounded tasks.", llm:"Stronger general knowledge, complex reasoning and broad multimodal work."}},
          {id:"cost", label:"Cost", values:{slm:"Lower per-inference compute and data-transfer needs.", llm:"Can be economical through managed token pricing, but frontier models cost more."}}
        ]
      }
    }),
    matchRound({
      id:"addendum-slm-llm-scenarios",
      title:"SLM vs LLM Scenarios",
      order:24,
      objectiveCodes:["2.2.3"],
      difficulty:"Intermediate",
      priority:"MUST KNOW",
      tags:["slm","llm","scenario"],
      instructions:"Separate scenario practice from the comparison matrix. Choose SLM or LLM from the visible slots.",
      slots:[["slm","Small language model"],["llm","Large language model"]],
      items:[
        {text:"On-device appliance with low latency.", answer:"slm"},
        {text:"Broad multimodal assistant with complex reasoning.", answer:"llm"},
        {text:"Offline narrow classification or language task.", answer:"slm"},
        {text:"General-purpose enterprise assistant.", answer:"llm"}
      ]
    }),
    matchRound({
      id:"addendum-bedrock-feature-purpose",
      title:"Bedrock Feature Purpose Matching",
      order:25,
      objectiveCodes:["2.3.1"],
      difficulty:"Intermediate",
      priority:"MUST KNOW",
      tags:["bedrock","features"],
      instructions:"Use the successful service-card pattern: keep Bedrock feature names visible and match one problem solved to each.",
      slots:[["kb","Bedrock Knowledge Bases"],["guardrails","Bedrock Guardrails"],["agents","Bedrock Agents"],["flows","Bedrock Flows"],["prompts","Bedrock Prompt Management"],["evaluation","Bedrock Model Evaluation"],["customization","Bedrock model customization"]],
      items:[
        {text:"Managed RAG over enterprise data.", answer:"kb"},
        {text:"Apply content filters, denied topics, PII redaction and grounding checks.", answer:"guardrails"},
        {text:"Allow a model to plan and call tools.", answer:"agents"},
        {text:"Visually orchestrate prompts, models, conditions and service calls.", answer:"flows"},
        {text:"Version and reuse prompts.", answer:"prompts"},
        {text:"Compare model outputs using automatic or human evaluation.", answer:"evaluation"},
        {text:"Adapt a supported foundation model when prompting or RAG is insufficient.", answer:"customization"}
      ]
    }),
    matchRound({
      id:"addendum-bedrock-sagemaker-jumpstart-definition",
      title:"Bedrock, SageMaker AI, or JumpStart?",
      order:26,
      objectiveCodes:["2.3.1"],
      difficulty:"Intermediate",
      priority:"MUST KNOW",
      tags:["bedrock","sagemaker","jumpstart"],
      instructions:"Keep the three AWS service names visible. Match one direct purpose/use case card at a time.",
      slots:[["bedrock","Amazon Bedrock"],["sagemaker","Amazon SageMaker AI"],["jumpstart","SageMaker JumpStart"]],
      items:[
        {text:"Managed access to foundation models through a unified API.", answer:"bedrock"},
        {text:"Best when the team does not want to manage model infrastructure.", answer:"bedrock"},
        {text:"Train, tune, deploy and monitor custom machine-learning models.", answer:"sagemaker"},
        {text:"Best when the team requires model artifacts and endpoint control.", answer:"sagemaker"},
        {text:"Discover and deploy pre-trained or open models to SageMaker endpoints.", answer:"jumpstart"},
        {text:"A model hub within the SageMaker ecosystem.", answer:"jumpstart"}
      ]
    }),
    matchRound({
      id:"addendum-aws-service-purpose-map",
      title:"AWS Service Purpose Matching",
      order:27,
      objectiveCodes:["2.3.1"],
      difficulty:"Intermediate",
      priority:"MUST KNOW",
      tags:["service-map","aws-services"],
      instructions:"Keep service names visible and restore each direct source purpose.",
      slots:[["bedrock","Amazon Bedrock"],["nova","Amazon Nova"],["stable","Stable Diffusion 3.5 Large"],["partyrock","PartyRock"],["quick","Amazon Quick"],["qbusiness","Amazon Q Business"],["kiro","Kiro"],["s3","Amazon S3"],["healthscribe","AWS HealthScribe"]],
      items:[
        {text:"Managed platform for building GenAI applications with many FMs.", answer:"bedrock"},
        {text:"Amazon first-party FM family accessed through Bedrock.", answer:"nova"},
        {text:"Stability AI text-to-image/image-to-image model available through Bedrock.", answer:"stable"},
        {text:"No-code browser playground powered by Bedrock.", answer:"partyrock", priority:"RECOGNITION ONLY"},
        {text:"Finished AI assistant/workspace for business data, research, dashboards and actions.", answer:"quick"},
        {text:"Legacy enterprise assistant over connected company data.", answer:"qbusiness", extra:{legacyName:"Amazon Q Business", currentName:"Amazon Quick lineage"}},
        {text:"Spec-driven agentic IDE/CLI for planning and coding.", answer:"kiro", extra:{legacyName:"Amazon Q Developer", currentName:"Kiro"}},
        {text:"Object storage for source documents, datasets, model artefacts and job outputs.", answer:"s3"},
        {text:"Patient-clinician audio to transcript and preliminary clinical notes.", answer:"healthscribe", priority:"RECOGNITION ONLY"}
      ]
    }),
    matrixRound({
      id:"addendum-partyrock-what-it-is",
      title:"PartyRock: What It Is and Is Not",
      order:28,
      objectiveCodes:["2.3.1"],
      difficulty:"Foundational",
      priority:"RECOGNITION ONLY",
      tags:["partyrock","what-it-is"],
      instructions:"Restore the PartyRock what-it-is / what-it-is-not comparison.",
      table:{
        rowHeader:"PartyRock",
        columns:[{id:"is", label:"What it is"},{id:"for", label:"What it is for"},{id:"not", label:"What it is not"}],
        rows:[
          {id:"partyrock", label:"PartyRock", values:{is:"A browser-based, no-code Amazon Bedrock playground for building and sharing simple GenAI applications.", for:"Learning, experimentation, prompt chaining, quick prototypes and demonstrations.", not:"Not a production hosting platform, enterprise assistant product, model hub or custom-training service."}}
        ]
      }
    }),
    matrixRound({
      id:"addendum-current-name-table",
      title:"Quick, Q Business, and Kiro Names",
      order:29,
      objectiveCodes:["2.3.1"],
      difficulty:"Intermediate",
      priority:"MUST KNOW",
      tags:["current-names","quick","kiro"],
      instructions:"Restore the current-name translation table from the addendum.",
      table:{
        rowHeader:"Older wording in questions",
        columns:[{id:"current", label:"Current interpretation"},{id:"distinction", label:"Exam-safe distinction"}],
        rows:[
          {id:"qdev", label:"Amazon Q Developer", values:{current:"Kiro for current IDE/CLI-based agentic development; Amazon Q Developer remains a transition name in some AWS surfaces.", distinction:"IDE that plans from specifications = Kiro."}},
          {id:"qbusiness", label:"Amazon Q Business", values:{current:"Legacy enterprise generative assistant over company data; new customers are directed toward Amazon Quick.", distinction:"Finished enterprise assistant = Q Business/Quick lineage, not Bedrock."}},
          {id:"quick", label:"Amazon QuickSight / Quick Suite", values:{current:"Current guide wording may use Amazon Quick; Quick includes business intelligence and agentic work capabilities.", distinction:"Business users, dashboards, research and action = Amazon Quick."}}
        ]
      }
    }),
    matchRound({
      id:"addendum-cost-deployment-scenarios",
      title:"Cost and Deployment Scenarios",
      order:30,
      objectiveCodes:["2.3.4"],
      difficulty:"Exam-level",
      priority:"MUST KNOW",
      tags:["cost","deployment"],
      instructions:"Use the named deployment or pricing choices as slots. Each card has one direct source-style clue.",
      slots:[["bedrock","Amazon Bedrock"],["partyrock","PartyRock"],["jumpstart","JumpStart / SageMaker endpoint"],["edge","Optimised SLM at the edge"],["provisioned","Provisioned Throughput or reserved capacity"],["batch","Batch inference"],["quick","Amazon Quick or legacy Q Business"],["healthscribe","AWS HealthScribe"]],
      items:[
        {text:"Fast prototype with no infrastructure for a no-code learning prototype.", answer:"partyrock", priority:"RECOGNITION ONLY"},
        {text:"Build a production GenAI app with managed FM access and no model infrastructure.", answer:"bedrock"},
        {text:"Open model inside customer-controlled environment.", answer:"jumpstart"},
        {text:"Lowest-latency inference on a device.", answer:"edge"},
        {text:"High steady guaranteed Bedrock capacity.", answer:"provisioned"},
        {text:"Large offline Bedrock job.", answer:"batch"},
        {text:"Enterprise employee assistant, no custom app build.", answer:"quick"},
        {text:"Clinical note workflow.", answer:"healthscribe", priority:"RECOGNITION ONLY"}
      ]
    })
  ];

  const groups = [
    {id:"model-foundations", title:"Model Foundations", roundIds:["addendum-discriminative-generative-comparison","addendum-latent-space-true-false","addendum-model-family-definitions","addendum-model-family-mechanisms","addendum-model-family-use-cases","addendum-gan-training-order","addendum-gan-components","addendum-aws-image-implementation"]},
    {id:"generative-use-cases", title:"Generative Use Cases", roundIds:["addendum-synthetic-data-use-cases","addendum-personalize-vs-bedrock","addendum-healthscribe-recognition"]},
    {id:"lifecycle-pricing", title:"Lifecycle and Pricing", roundIds:["addendum-fm-lifecycle-order","addendum-fm-stage-definitions","addendum-real-life-fm-stage","addendum-aws-activity-fm-stage","addendum-bedrock-pricing-comparison","addendum-bedrock-pricing-scenarios","addendum-custom-bedrock-current-outdated"]},
    {id:"context-rag-agents", title:"Context, RAG, and Agents", roundIds:["addendum-conversation-context-table","addendum-rag-query-path","addendum-s3-vector-store-comparison","addendum-multi-agent-patterns"]},
    {id:"slm-edge", title:"SLM and Edge", roundIds:["addendum-slm-llm-comparison","addendum-slm-llm-scenarios"]},
    {id:"aws-service-map", title:"AWS Service Map", roundIds:["addendum-bedrock-feature-purpose","addendum-bedrock-sagemaker-jumpstart-definition","addendum-aws-service-purpose-map","addendum-partyrock-what-it-is","addendum-current-name-table"]},
    {id:"final-challenge", title:"Cost and Deployment", roundIds:["addendum-cost-deployment-scenarios"]}
  ];

  window.DOMAIN2_ADDENDUM = {
    id:SECTION_ID,
    title:"Domain 2 — Addendum",
    activityId:ACTIVITY_ID,
    overviewRoute:"#/addendum/domain2",
    description:"Targeted review of Domain 2 concepts and AWS service distinctions exposed as gaps during practice tests.",
    groups,
    sourceFile:SOURCE
  };

  window.DOMAIN2_ADDENDUM_ACTIVITY = {
    id:ACTIVITY_ID,
    domain:2,
    taskStatement:"Domain 2 — Addendum",
    objectiveCodes:["2.1.1","2.1.2","2.1.3","2.1.4","2.1.5","2.1.6","2.2.3","2.3.1","2.3.4"],
    title:"Domain 2 — Addendum Card Review",
    shortDescription:"Focused source-structure review for Domain 2 comparison tables, true/false statements, ordered processes, service-purpose tables, pricing, RAG, and deployment decisions.",
    activityType:"Table completion, true/false, ordering, service matching",
    estimatedTime:"100 min",
    difficulty:"Foundational to exam-level",
    module:"domain2-addendum-card-engine",
    order:2299,
    sourceFile:SOURCE,
    available:false,
    hiddenFromDashboard:true,
    sectionId:SECTION_ID,
    isAddendum:true,
    rounds
  };
})();
