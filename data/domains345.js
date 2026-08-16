(function(){
  "use strict";

  const SOURCE = "AWS_AI_Practitioner_Study_Guide.docx";
  const guide = window.GUIDE_HIERARCHY || {domains:[], subtaskTitles:{}};

  function domainFor(objective){
    return Number(String(objective).split(".")[0]);
  }

  function taskCodeFor(objective){
    return String(objective).split(".").slice(0, 2).join(".");
  }

  function domainTitle(domainNumber){
    const domain = guide.domains.find(item => item.number === domainNumber);
    return domain ? domain.title : "Domain " + domainNumber;
  }

  function taskTitle(objective){
    const domain = guide.domains.find(item => item.number === domainFor(objective));
    const task = domain && domain.tasks.find(item => item.taskCode === taskCodeFor(objective));
    return task ? task.taskTitle : "";
  }

  function subtaskTitle(objective){
    return guide.subtaskTitles[objective] || objective;
  }

  function meta(roundId, objective, title, cardType, difficulty, tags){
    const domainNumber = domainFor(objective);
    const taskCode = taskCodeFor(objective);
    return {
      domainId:"domain-" + domainNumber,
      domainTitle:domainTitle(domainNumber),
      taskId:"task-" + taskCode.replace(".","-"),
      taskTitle:taskTitle(objective),
      subtaskId:objective,
      subtaskTitle:subtaskTitle(objective),
      cardSetId:roundId,
      cardSetTitle:title,
      cardType:cardType || "Mixed review",
      difficulty:difficulty || "Foundational",
      tags:tags || [],
      sourceSection:"Master Study Guide §" + objective + " " + subtaskTitle(objective)
    };
  }

  function card(round, n, text, answer, extra){
    const id = round.id + "-" + String(n).padStart(2, "0");
    return Object.assign({
      id,
      text,
      answer,
      explanation:(extra && extra.explanation) || "Restore the source structure from " + round.hierarchy.sourceSection + ".",
      hierarchy:Object.assign({}, round.hierarchy, {cardId:id})
    }, extra || {});
  }

  function decorate(config, round){
    const h = meta(config.id, config.objective, config.title, config.cardType, config.difficulty, config.tags || []);
    const merged = Object.assign({
      activity:"match",
      checkLabel:"Check source structure",
      sourceNote:h.sourceSection + ". Converted from the guide's named table, comparison, sequence, or statement set.",
      objective:config.objective,
      objectiveCodes:[config.objective],
      hierarchy:h,
      completionCallout:{
        title:"Source structure restored",
        text:"Review the completed table, sequence, or service mapping before moving on."
      }
    }, round);
    merged.cards = (merged.cards || []).map(function(item, idx){
      return card(merged, idx + 1, item.text, item.answer, item);
    });
    return merged;
  }

  function destinations(list){
    return list.map(item => ({id:item[0], label:item[1], sub:item[2] || ""}));
  }

  function matchRound(config){
    return decorate(config, {
      id:config.id,
      title:config.title,
      instructions:config.instructions || "Match each loose card to the visible source label.",
      slotLabel:config.slotLabel || "Source label",
      capacity:config.capacity,
      destinations:destinations(config.slots),
      cards:config.items
    });
  }

  function matrixRound(config){
    const slots = [];
    const cards = [];
    config.rows.forEach(function(row){
      config.columns.forEach(function(column){
        const value = row.values[column.id];
        if(value === undefined) return;
        slots.push([row.id + "-" + column.id, row.label + " / " + column.label]);
        cards.push({
          text:value,
          answer:row.id + "-" + column.id,
          explanation:row.label + " is completed by the " + column.label + " cell from the guide table."
        });
      });
    });
    return decorate(config, {
      id:config.id,
      title:config.title,
      layout:"matrix",
      activity:"match",
      instructions:config.instructions || "Complete the guide table by placing each loose cell under the correct row and column.",
      table:{rows:config.rows.map(row => ({id:row.id, label:row.label})), columns:config.columns},
      destinations:destinations(slots),
      cards
    });
  }

  function sequenceRound(config){
    const slotPrefix = config.slotPrefix || "Step";
    return decorate(config, {
      id:config.id,
      title:config.title,
      activity:"match",
      instructions:config.instructions || "Restore the source sequence in order.",
      destinations:config.steps.map(function(step, idx){ return {id:"step-" + (idx + 1), label:slotPrefix + " " + (idx + 1), sub:"Place the correct source step here."}; }),
      cards:config.steps.map(function(step, idx){ return {text:step, answer:"step-" + (idx + 1), explanation:step + " belongs in position " + (idx + 1) + " of the guide sequence."}; })
    });
  }

  function stageRound(config){
    const h = meta(config.id, config.objective, config.title, config.cardType || "Ordering", config.difficulty, config.tags || []);
    const round = {
      id:config.id,
      title:config.title,
      activity:"match",
      instructions:config.instructions || "Restore the guide diagram by placing each stage name and explanation in order.",
      checkLabel:"Check source structure",
      sourceNote:h.sourceSection + ". Converted from the guide's RAG pipeline diagram.",
      objective:config.objective,
      objectiveCodes:[config.objective],
      hierarchy:h,
      slotTypes:[
        {key:"stageName", label:"Stage name"},
        {key:"whatConsists", label:"What it consists of"}
      ],
      destinations:config.stages.map(function(stage, idx){
        return {id:stage.id, label:(config.slotPrefix || "Stage") + " " + (idx + 1), sub:"Place the source stage name and explanation here."};
      }),
      concepts:config.stages.map(function(stage, idx){
        const concept = {
          id:stage.id,
          name:(config.slotPrefix || "Stage") + " " + (idx + 1),
          stageName:stage.stageName,
          whatConsists:stage.whatConsists,
          explanation:stage.stageName + " belongs in position " + (idx + 1) + " of the guide diagram."
        };
        concept.hierarchy = Object.assign({}, h, {cardId:stage.id});
        return concept;
      }),
      completionCallout:{
        title:"RAG pipeline restored",
        text:"Review the completed guide diagram: ingestion happens when documents are prepared, then each request moves through query, retrieval, augmentation, and generation."
      }
    };
    return round;
  }

  function tfRound(config){
    return decorate(config, {
      id:config.id,
      title:config.title,
      layout:"true-false",
      activity:"true-false",
      instructions:config.instructions || "Sort each statement as true or false, then review the source-derived reason.",
      destinations:destinations([["true","True"],["false","False"]]),
      cards:config.statements.map(function(item){
        return {text:item.statement, answer:String(item.correct), explanation:item.reason};
      })
    });
  }

  const rounds3 = [
    matrixRound({
      id:"d3-311-model-selection-criteria-table",
      objective:"3.1.1",
      title:"Model Selection Criteria Table",
      cardType:"Table completion",
      difficulty:"Foundational",
      tags:["FM selection","Amazon Bedrock"],
      columns:[{id:"question", label:"Question to ask"}, {id:"effect", label:"How it affects selection"}],
      rows:[
        {id:"modality", label:"Modality", values:{question:"Does the use case need text, image, video, speech, or multimodal input and output?", effect:"Eliminates models that cannot process the required input or produce the required output."}},
        {id:"capability", label:"Accuracy and capability", values:{question:"How complex is the reasoning, generation, or domain task?", effect:"Pushes selection toward stronger models when task quality matters more than speed or cost."}},
        {id:"latency", label:"Latency", values:{question:"How quickly must the model return a response?", effect:"Favors smaller or faster models for interactive and real-time workloads."}},
        {id:"cost", label:"Cost", values:{question:"What is the expected token volume and budget per interaction?", effect:"Favors cheaper models, shorter prompts, batching, or caching for high-volume workloads."}},
        {id:"compliance", label:"Compliance", values:{question:"Does the workload have legal, privacy, or regulated-industry constraints?", effect:"Acts as a hard feasibility filter before optimizing for price or speed."}},
        {id:"region", label:"Region availability", values:{question:"Is the model available in the Region where the workload must run?", effect:"Prevents choosing a model that cannot satisfy residency or deployment requirements."}},
        {id:"context", label:"Input/output length", values:{question:"Will the full prompt, retrieved context, and answer fit in the context window?", effect:"Requires a model with enough context length or a different design such as chunking or RAG."}},
        {id:"custom", label:"Customization support", values:{question:"Does the model support the required customization method?", effect:"Matters when prompt engineering or RAG is not enough to shape behavior."}},
        {id:"cache", label:"Prompt caching", values:{question:"Can a stable prompt prefix be reused across requests?", effect:"Can reduce latency and cost when repeated context is sent to supported models."}}
      ]
    }),
    matchRound({
      id:"d3-311-hard-filter-vs-optimization",
      objective:"3.1.1",
      title:"Hard Constraint or Optimization?",
      cardType:"Comparison",
      difficulty:"Foundational",
      tags:["FM selection"],
      slots:[["hard","Hard feasibility filter"],["optimize","Optimization after feasibility"]],
      items:[
        {text:"Required modality", answer:"hard"}, {text:"Compliance requirement", answer:"hard"}, {text:"Required AWS Region", answer:"hard"}, {text:"Context window that can fit the request", answer:"hard"},
        {text:"Lower latency after the model is feasible", answer:"optimize"}, {text:"Lower token cost after constraints are met", answer:"optimize"}, {text:"Smaller model for sufficient quality", answer:"optimize"}, {text:"Prompt caching for repeated prefixes", answer:"optimize"}
      ]
    }),
    matchRound({
      id:"d3-311-nova-model-selection",
      objective:"3.1.1",
      title:"Amazon Nova Model Selection",
      cardType:"Service matching",
      difficulty:"Intermediate",
      tags:["Amazon Nova","FM selection"],
      slots:[["micro","Amazon Nova Micro"],["lite","Amazon Nova Lite"],["pro","Amazon Nova Pro"],["premier","Amazon Nova Premier"]],
      items:[
        {text:"Text-only model focused on very low latency and low cost", answer:"micro"},
        {text:"Multimodal, low-cost model for fast image, video, and text tasks", answer:"lite"},
        {text:"Balanced multimodal model for stronger capability across common workloads", answer:"pro"},
        {text:"Most capable Nova model and teacher candidate for distillation where supported", answer:"premier"}
      ]
    }),
    matrixRound({
      id:"d3-312-inference-parameter-table",
      objective:"3.1.2",
      title:"Inference Parameter Table",
      cardType:"Table completion",
      difficulty:"Foundational",
      tags:["Inference parameters"],
      columns:[{id:"controls", label:"What it controls"}, {id:"raise", label:"Raise it to"}, {id:"lower", label:"Lower it to"}],
      rows:[
        {id:"temperature", label:"Temperature", values:{controls:"Randomness of token selection.", raise:"Increase creativity and variety.", lower:"Increase determinism, consistency and repeatability."}},
        {id:"top-p", label:"Top-p", values:{controls:"The cumulative probability threshold used to determine the candidate token set.", raise:"Allow a broader probability mass and usually more diverse token choices.", lower:"Restrict sampling to a narrower probability mass of the most likely tokens."}},
        {id:"top-k", label:"Top-k", values:{controls:"The fixed number of highest-probability tokens considered.", raise:"Consider a larger fixed number of candidate tokens.", lower:"Consider a smaller fixed number of candidate tokens."}},
        {id:"max-output", label:"Maximum output length", values:{controls:"Hard cap on the number of tokens generated.", raise:"Permit longer answers.", lower:"Force shorter answers and reduce token cost and latency."}},
        {id:"stop", label:"Stop sequences", values:{controls:"Strings or patterns that halt generation when produced.", raise:"Not applicable — stop sequences are configured rather than increased.", lower:"Use them to end generation cleanly at a defined structural boundary."}}
      ]
    }),
    matchRound({
      id:"d3-312-inference-parameters-in-practice",
      objective:"3.1.2",
      title:"Inference Parameters in Practice",
      cardType:"Scenario",
      difficulty:"Intermediate",
      tags:["Inference parameters","Scenario practice"],
      instructions:"Match concrete generation requirements to the inference parameter or adjustment that best solves them.",
      slotLabel:"Best adjustment",
      slots:[
        ["lower-temperature","Lower temperature"],
        ["raise-temperature","Raise temperature"],
        ["top-p","Top-p"],
        ["top-k","Top-k"],
        ["lower-max-output","Lower maximum output length"],
        ["raise-max-output","Raise maximum output length"],
        ["stop-sequence","Stop sequence"]
      ],
      items:[
        {text:"A bank extracts the same fields from loan applications into a fixed JSON structure and wants the result to be highly repeatable between runs.", answer:"lower-temperature"},
        {text:"A marketing team asks the same model for several alternative campaign headlines and wants the outputs to differ noticeably from one another.", answer:"raise-temperature"},
        {text:"The candidate set should contain however many of the most likely next tokens are needed to cover approximately 90% of the model's probability distribution.", answer:"top-p"},
        {text:"For one prediction, only a few tokens account for nearly all of the probability. For another, probability is spread across many tokens. The application should allow the candidate-set size to adapt automatically to this difference.", answer:"top-p"},
        {text:"At every generation step, the application should consider a fixed pool of the 20 most probable next-token candidates.", answer:"top-k"},
        {text:"The development team wants the candidate pool to remain the same size regardless of whether probability is concentrated among a few tokens or spread across many.", answer:"top-k"},
        {text:"A support assistant produces unnecessarily long responses, increasing both response time and token charges.", answer:"lower-max-output"},
        {text:"A report-generation task repeatedly stops before the model can finish all of the required sections.", answer:"raise-max-output"},
        {text:"A generated structured response should terminate when a predefined closing delimiter appears instead of continuing with additional commentary.", answer:"stop-sequence"},
        {text:"Generation should end as soon as the model produces the marker \"### END\".", answer:"stop-sequence"}
      ]
    }),
    tfRound({
      id:"d3-312-inference-parameter-truths",
      objective:"3.1.2",
      title:"Temperature and Sampling Truth Check",
      cardType:"True/false",
      difficulty:"Foundational",
      tags:["Inference parameters"],
      statements:[
        {statement:"Temperature controls output variability, not factual correctness.", correct:true, reason:"Factuality comes from grounding, evaluation, and controls beyond sampling settings."},
        {statement:"Setting temperature to zero guarantees that the model cannot hallucinate.", correct:false, reason:"A deterministic answer can still be wrong or unsupported."},
        {statement:"Maximum output length can control cost because generated tokens are billable.", correct:true, reason:"Shorter generated responses reduce output tokens."},
        {statement:"Stop sequences are used to end generation at a desired delimiter or boundary.", correct:true, reason:"They are a formatting and boundary control."}
      ]
    }),
    sequenceRound({
      id:"d3-313-rag-ingestion-order",
      objective:"3.1.3",
      title:"RAG Ingestion Order",
      cardType:"Ordering",
      difficulty:"Foundational",
      tags:["RAG","Knowledge Bases"],
      steps:["Collect source documents","Chunk documents","Create embeddings","Store vectors in a vector database"]
    }),
    stageRound({
      id:"d3-313-rag-query-order",
      objective:"3.1.3",
      title:"RAG Query Order",
      cardType:"Ordering",
      difficulty:"Foundational",
      tags:["RAG","Knowledge Bases"],
      instructions:"Restore the RAG pipeline diagram from the guide. Each placement card needs the stage name and the source explanation for what that stage consists of.",
      slotPrefix:"RAG stage",
      stages:[
        {id:"rag-stage-1", stageName:"Ingestion", whatConsists:"Documents are collected, chunked into passages, converted to embeddings by an embedding model, and stored with their vectors in a vector database."},
        {id:"rag-stage-2", stageName:"Query", whatConsists:"The user question is embedded with the same embedding model that was used for the documents."},
        {id:"rag-stage-3", stageName:"Retrieval", whatConsists:"A similarity search finds the nearest passages to the question vector. Optionally the results are re-ranked."},
        {id:"rag-stage-4", stageName:"Augmentation", whatConsists:"The retrieved passages are inserted into the prompt as context, alongside the question and the system instructions."},
        {id:"rag-stage-5", stageName:"Generation", whatConsists:"The foundation model answers using the supplied context, and can cite the source passages."}
      ]
    }),
    matrixRound({
      id:"d3-313-rag-vs-fine-tuning",
      objective:"3.1.3",
      title:"RAG or Fine-Tuning Comparison",
      cardType:"Comparison",
      difficulty:"Intermediate",
      tags:["RAG","Fine-tuning"],
      columns:[{id:"rag", label:"RAG"}, {id:"tuning", label:"Fine-tuning"}],
      rows:[
        {id:"weights", label:"Model weights", values:{rag:"Does not change model weights.", tuning:"Changes or adapts model behavior through training."}},
        {id:"knowledge", label:"External knowledge", values:{rag:"Supplies retrieved knowledge at inference time.", tuning:"Learns patterns from training data rather than fetching fresh facts."}},
        {id:"fresh", label:"Changing information", values:{rag:"Best fit for frequently changing or private knowledge.", tuning:"Poor fit when facts change often."}},
        {id:"citations", label:"Citations", values:{rag:"Can provide source citations from retrieved passages.", tuning:"Does not inherently cite sources."}}
      ]
    }),
    matchRound({
      id:"d3-313-bedrock-knowledge-bases",
      objective:"3.1.3",
      title:"Bedrock Knowledge Bases Capability Match",
      cardType:"Service matching",
      difficulty:"Intermediate",
      tags:["Amazon Bedrock Knowledge Bases","RAG"],
      capacity:"many",
      slots:[["does","What Knowledge Bases does"],["not","What Knowledge Bases does not do"]],
      items:[
        {text:"Orchestrates ingestion, chunking, embeddings, vector storage integration, retrieval, and citations for RAG", answer:"does"},
        {text:"Retrieves structured data where the configured source supports it", answer:"does"},
        {text:"Pre-trains a foundation model from scratch", answer:"not"},
        {text:"Changes the base model weights", answer:"not"},
        {text:"Builds the user interface for the application", answer:"not"}
      ]
    }),
    matrixRound({
      id:"d3-314-vector-store-table",
      objective:"3.1.4",
      title:"AWS Vector Store Table",
      cardType:"Table completion",
      difficulty:"Intermediate",
      tags:["Vector databases","RAG"],
      columns:[{id:"capability", label:"Vector capability"}, {id:"choose", label:"Choose it when..."}],
      rows:[
        {id:"opensearch", label:"Amazon OpenSearch Service", values:{capability:"Vector engine with k-NN search, including OpenSearch Serverless. The default vector store for Bedrock Knowledge Bases.", choose:"You want a purpose-built search and vector engine, and hybrid keyword plus semantic search."}},
        {id:"aurora", label:"Amazon Aurora (PostgreSQL-compatible)", values:{capability:"Vector storage and similarity search through the pgvector extension.", choose:"You already run Aurora and want vectors beside your relational data. Newly added to the in-scope list in v1.1."}},
        {id:"rds", label:"Amazon RDS for PostgreSQL", values:{capability:"Vector storage and search through pgvector.", choose:"You need a managed PostgreSQL vector store without Aurora."}},
        {id:"neptune", label:"Amazon Neptune", values:{capability:"Graph database with vector search over graph data (Neptune Analytics).", choose:"Relationships between entities matter as much as semantic similarity."}}
      ]
    }),
    matchRound({
      id:"d3-314-vector-service-scenarios",
      objective:"3.1.4",
      title:"Use Case to Vector Service",
      cardType:"Scenario",
      difficulty:"Intermediate",
      tags:["Vector databases"],
      slots:[["opensearch","OpenSearch"],["aurora","Aurora PostgreSQL"],["rds","RDS for PostgreSQL"],["neptune","Neptune"]],
      items:[
        {text:"Hybrid keyword and semantic search for a document portal", answer:"opensearch"},
        {text:"Embeddings stored beside existing Aurora relational customer records", answer:"aurora"},
        {text:"Managed PostgreSQL vector storage without Aurora", answer:"rds"},
        {text:"Knowledge graph relationships plus vector similarity", answer:"neptune"}
      ]
    }),
    matrixRound({
      id:"d3-315-customization-cost-table",
      objective:"3.1.5",
      title:"Customization Cost Tradeoff Table",
      cardType:"Table completion",
      difficulty:"Intermediate",
      tags:["Customization","Cost"],
      columns:[{id:"changes", label:"What it changes"}, {id:"cost", label:"Relative cost"}, {id:"best", label:"Best for"}],
      rows:[
        {id:"prompt", label:"Prompt engineering", values:{changes:"Changes instructions sent at inference time.", cost:"Lowest.", best:"Fast behavior and formatting improvements."}},
        {id:"rag", label:"RAG", values:{changes:"Adds retrieved external context at inference time.", cost:"Low to medium.", best:"Fresh, private, or source-cited knowledge."}},
        {id:"distill", label:"Model distillation", values:{changes:"Transfers behavior from a larger teacher to a smaller model.", cost:"Medium.", best:"High-volume narrow tasks needing lower latency or cost."}},
        {id:"fine-tune", label:"Fine-tuning", values:{changes:"Adapts model weights for behavior or style.", cost:"Medium to high.", best:"Persistent style, format, or task behavior."}},
        {id:"continued", label:"Continued pre-training", values:{changes:"Continues training on large domain corpora.", cost:"High.", best:"Deep domain language adaptation."}},
        {id:"scratch", label:"Pre-training from scratch", values:{changes:"Builds a model from the beginning.", cost:"Highest.", best:"Rare cases with massive data, compute, and model ownership needs."}}
      ]
    }),
    sequenceRound({
      id:"d3-315-cost-ladder",
      objective:"3.1.5",
      title:"Customization Cost Ladder",
      cardType:"Ordering",
      difficulty:"Foundational",
      tags:["Customization","Cost"],
      steps:["Prompt engineering","RAG","Model distillation","Fine-tuning","Continued pre-training","Pre-training from scratch"]
    }),
    matchRound({
      id:"d3-315-customization-use-when",
      objective:"3.1.5",
      title:"Customization Approach: Use When",
      cardType:"Use case",
      difficulty:"Foundational",
      tags:["Customization","Cost","Use when"],
      instructions:"Match each requirement to the customization cost tradeoff approach the guide says to use when that requirement is the deciding factor.",
      slotLabel:"Use when",
      slots:[
        ["prompt","Prompt engineering"],
        ["rag","RAG"],
        ["distill","Model distillation"],
        ["fine-tune","Fine-tuning"],
        ["continued","Continued pre-training"],
        ["scratch","Pre-training from scratch"]
      ],
      items:[
        {text:"Fast behavior and formatting improvements.", answer:"prompt"},
        {text:"Fresh, private, or source-cited knowledge.", answer:"rag"},
        {text:"High-volume narrow tasks needing lower latency or cost.", answer:"distill"},
        {text:"Persistent style, format, or task behavior.", answer:"fine-tune"},
        {text:"Deep domain language adaptation.", answer:"continued"},
        {text:"Rare cases with massive data, compute, and model ownership needs.", answer:"scratch"}
      ]
    }),
    matchRound({
      id:"d3-316-agent-assistant-workflow",
      objective:"3.1.6",
      title:"Agent, Assistant, or Fixed Workflow?",
      cardType:"Comparison",
      difficulty:"Foundational",
      tags:["Agents","Bedrock Agents"],
      capacity:"many",
      slots:[["agent","Agent"],["assistant","Assistant"],["workflow","Fixed workflow"]],
      items:[
        {text:"Plans dynamically across several steps and chooses tools", answer:"agent"},
        {text:"Answers questions or helps a user but primarily responds", answer:"assistant"},
        {text:"Follows predetermined branches and ordered steps", answer:"workflow"},
        {text:"Uses external APIs and state to complete a business action", answer:"agent"},
        {text:"Summarizes a document without taking action", answer:"assistant"}
      ]
    }),
    matchRound({
      id:"d3-316-agent-services",
      objective:"3.1.6",
      title:"Relevant AWS Agent Services",
      cardType:"Service matching",
      difficulty:"Intermediate",
      tags:["Bedrock Agents","AgentCore","Bedrock Flows"],
      slots:[["bedrock-agents","Amazon Bedrock Agents"],["agentcore","Amazon Bedrock AgentCore"],["identity","AgentCore Identity"],["observability","AgentCore Observability"],["flows","Bedrock Flows"]],
      items:[
        {text:"Builds agents that can reason, select actions, and invoke tools or APIs", answer:"bedrock-agents"},
        {text:"Provides runtime capabilities for deploying and operating agents", answer:"agentcore"},
        {text:"Gives agents identity and authorization integration for inbound and outbound access", answer:"identity"},
        {text:"Traces, monitors, and helps debug agent behavior", answer:"observability"},
        {text:"Composes prompt, model, and service steps into a visual workflow", answer:"flows"}
      ]
    }),
    matchRound({
      id:"d3-321-prompt-constructs",
      objective:"3.2.1",
      title:"Prompt Construct to Definition",
      cardType:"Definition",
      difficulty:"Foundational",
      tags:["Prompt engineering"],
      slots:[["instruction","Instruction"],["context","Context"],["input","Input data"],["output","Output indicator"],["negative","Negative prompt"],["system","System prompt"]],
      items:[
        {text:"The task the model should perform", answer:"instruction"},
        {text:"Background information the model should use", answer:"context"},
        {text:"The specific content to transform, classify, summarize, or answer about", answer:"input"},
        {text:"The requested structure, format, or schema of the response", answer:"output"},
        {text:"Instructions about what to avoid", answer:"negative"},
        {text:"Higher-level behavioral instruction supplied outside the user prompt", answer:"system"}
      ]
    }),
    matrixRound({
      id:"d3-322-prompt-technique-table",
      objective:"3.2.2",
      title:"Prompt Engineering Technique Table",
      cardType:"Table completion",
      difficulty:"Foundational",
      tags:["Prompt engineering"],
      columns:[{id:"means", label:"What it means"}, {id:"use", label:"Use it when"}, {id:"tradeoff", label:"Tradeoff"}],
      rows:[
        {id:"zero", label:"Zero-shot", values:{means:"No examples are included.", use:"The task is simple or familiar to the model.", tradeoff:"Lowest example-token cost."}},
        {id:"one", label:"One-shot", values:{means:"One example is included.", use:"A single pattern is enough to show the desired format.", tradeoff:"Uses more context than zero-shot."}},
        {id:"few", label:"Few-shot", values:{means:"Several examples are included.", use:"The model needs examples of a format or mapping.", tradeoff:"Examples consume context and tokens per request."}},
        {id:"cot", label:"Chain-of-thought", values:{means:"Prompts the model to reason through steps where appropriate.", use:"A task benefits from decomposition.", tradeoff:"Can increase output length and cost."}},
        {id:"template", label:"Prompt template", values:{means:"Reusable prompt structure with variables.", use:"You need consistent prompts across requests.", tradeoff:"Requires versioning and testing as it evolves."}}
      ]
    }),
    matchRound({
      id:"d3-323-prompt-practice-benefit",
      objective:"3.2.3",
      title:"Prompt Practice to Benefit",
      cardType:"Use case",
      difficulty:"Foundational",
      tags:["Prompt engineering"],
      slots:[["specific","Be specific and concise"],["format","State output format"],["context","Provide relevant context"],["examples","Use examples"],["guardrail","Apply Guardrails"],["delimit","Use delimiters"]],
      items:[
        {text:"Reduces ambiguity in the model instruction", answer:"specific"},
        {text:"Makes output easier for an application to parse", answer:"format"},
        {text:"Gives the model the facts it should use", answer:"context"},
        {text:"Shows unusual or custom response patterns", answer:"examples"},
        {text:"Adds policy enforcement outside the prompt", answer:"guardrail"},
        {text:"Separates instruction from user-supplied content", answer:"delimit"}
      ]
    }),
    matrixRound({
      id:"d3-324-prompt-risk-table",
      objective:"3.2.4",
      title:"Prompt Engineering Risk Table",
      cardType:"Table completion",
      difficulty:"Intermediate",
      tags:["Prompt risk","Security"],
      columns:[{id:"definition", label:"Definition"}, {id:"mitigation", label:"Mitigation"}],
      rows:[
        {id:"injection", label:"Prompt injection", values:{definition:"User content tries to override instructions or manipulate tool use.", mitigation:"Use delimiters, external authorization, input validation, and Guardrails."}},
        {id:"jailbreak", label:"Jailbreaking", values:{definition:"Attempts to bypass safety constraints.", mitigation:"Use Guardrails, safety evaluation, and application controls."}},
        {id:"leaking", label:"Prompt leaking", values:{definition:"The model reveals hidden prompt content or sensitive instructions.", mitigation:"Avoid secrets in prompts and separate secrets into Secrets Manager."}},
        {id:"poisoning", label:"Poisoning", values:{definition:"Knowledge sources or training data are contaminated to influence outputs.", mitigation:"Protect write access, track lineage, and validate source quality."}}
      ]
    }),
    matchRound({
      id:"d3-325-prompt-management-capabilities",
      objective:"3.2.5",
      title:"Bedrock Prompt Management Capabilities",
      cardType:"Service matching",
      difficulty:"Intermediate",
      tags:["Bedrock Prompt Management"],
      slots:[["library","Central prompt library"],["versions","Versioning"],["variables","Variables"],["testing","Testing before promotion"],["identifier","Reference by identifier"],["flows","Integration with Bedrock Flows"]],
      items:[
        {text:"Reuse approved prompts across teams and applications", answer:"library"},
        {text:"Track and promote prompt changes safely", answer:"versions"},
        {text:"Insert request-specific values into a controlled prompt", answer:"variables"},
        {text:"Evaluate a prompt before it becomes the production version", answer:"testing"},
        {text:"Let applications call a managed prompt instead of copying text", answer:"identifier"},
        {text:"Use managed prompts inside composed Bedrock workflows", answer:"flows"}
      ]
    }),
    matrixRound({
      id:"d3-331-training-approach-table",
      objective:"3.3.1",
      title:"Training Approach Table",
      cardType:"Table completion",
      difficulty:"Intermediate",
      tags:["Foundation model training"],
      columns:[{id:"happens", label:"What happens"}, {id:"data", label:"Data required"}, {id:"owner", label:"Who normally does it"}],
      rows:[
        {id:"pretrain", label:"Pre-training", values:{happens:"A base model learns broad patterns from massive corpora.", data:"Huge unlabelled general corpus.", owner:"Model providers or organizations with very large compute."}},
        {id:"continued", label:"Continued pre-training", values:{happens:"Training continues on domain-specific unlabelled data.", data:"Large unlabelled domain corpus.", owner:"Specialized teams adapting a model to domain language."}},
        {id:"fine", label:"Fine-tuning", values:{happens:"A model is trained on labelled examples for behavior or task fit.", data:"Prompt-response pairs or labelled task data.", owner:"Teams customizing a foundation model."}},
        {id:"distill", label:"Distillation", values:{happens:"A smaller model learns from a stronger teacher model.", data:"Teacher model outputs or demonstrations.", owner:"Teams optimizing cost and latency."}}
      ]
    }),
    sequenceRound({id:"d3-331-training-lifecycle-order", objective:"3.3.1", title:"Training Lifecycle Order", cardType:"Ordering", difficulty:"Foundational", tags:["Foundation model training"], steps:["Collect and prepare data","Train or adapt the model","Evaluate model behavior","Deploy for inference","Monitor and improve over time"]}),
    matchRound({
      id:"d3-332-fine-tuning-methods",
      objective:"3.3.2",
      title:"Fine-Tuning Method to Definition",
      cardType:"Definition",
      difficulty:"Intermediate",
      tags:["Fine-tuning"],
      slots:[["instruction","Instruction tuning"],["domain","Domain adaptation"],["transfer","Transfer learning"],["continued","Continued pre-training"],["rlhf","RLHF"]],
      items:[
        {text:"Teaches the model to follow instructions using instruction-response examples", answer:"instruction"},
        {text:"Improves fit to vocabulary and patterns in a domain", answer:"domain"},
        {text:"Starts from a learned model and adapts it to a related task", answer:"transfer"},
        {text:"Uses large unlabelled domain text to continue model training", answer:"continued"},
        {text:"Uses human preference rankings and a reward signal", answer:"rlhf"}
      ]
    }),
    sequenceRound({id:"d3-332-rlhf-order", objective:"3.3.2", title:"RLHF Order", cardType:"Ordering", difficulty:"Intermediate", tags:["Fine-tuning","RLHF"], steps:["Humans rank outputs","Train a reward model","Optimize the model against the reward signal"]}),
    matrixRound({
      id:"d3-333-fine-tuning-data-requirements",
      objective:"3.3.3",
      title:"Fine-Tuning Data Requirement Table",
      cardType:"Table completion",
      difficulty:"Intermediate",
      tags:["Fine-tuning data"],
      columns:[{id:"good", label:"What good looks like"}, {id:"failure", label:"What goes wrong without it"}],
      rows:[
        {id:"curation", label:"Curation", values:{good:"Relevant, high-quality examples are selected intentionally.", failure:"Noise teaches the wrong behavior."}},
        {id:"governance", label:"Governance", values:{good:"Permissions, lineage, retention, and usage rights are clear.", failure:"The project creates compliance or privacy risk."}},
        {id:"size", label:"Size", values:{good:"Enough examples for the customization method.", failure:"The model does not learn the target pattern reliably."}},
        {id:"labeling", label:"Labelling", values:{good:"Labels or responses are accurate and consistent.", failure:"The model learns inconsistent outputs."}},
        {id:"represent", label:"Representativeness", values:{good:"Examples reflect the real users and tasks.", failure:"The model performs poorly for missing groups or cases."}},
        {id:"balance", label:"Balance and diversity", values:{good:"Classes, styles, and edge cases are not skewed.", failure:"The model overfits common examples and fails rare cases."}},
        {id:"preference", label:"RLHF preference data", values:{good:"Human rankings capture preferred outputs.", failure:"The reward signal optimizes the wrong behavior."}}
      ]
    }),
    matrixRound({
      id:"d3-341-evaluation-approach-table",
      objective:"3.4.1",
      title:"Evaluation Approach Table",
      cardType:"Table completion",
      difficulty:"Intermediate",
      tags:["Evaluation"],
      columns:[{id:"works", label:"How it works"}, {id:"strength", label:"Strength"}, {id:"weakness", label:"Weakness"}],
      rows:[
        {id:"bench", label:"Benchmark datasets", values:{works:"Run the model against established datasets.", strength:"Comparable and repeatable.", weakness:"May not match your business task."}},
        {id:"auto", label:"Automated metrics", values:{works:"Compute scores such as ROUGE, BLEU, BERTScore, or perplexity.", strength:"Fast and scalable.", weakness:"Cannot fully judge usefulness or safety."}},
        {id:"human", label:"Human evaluation", values:{works:"People judge quality, helpfulness, safety, or preference.", strength:"Captures nuanced task fitness.", weakness:"Slower and more expensive."}},
        {id:"judge", label:"LLM-as-a-judge", values:{works:"A model grades outputs using a rubric.", strength:"Scales qualitative evaluation.", weakness:"Needs validation because the judge can be biased or wrong."}}
      ]
    }),
    matrixRound({
      id:"d3-342-metric-table",
      objective:"3.4.2",
      title:"Foundation Model Metric Table",
      cardType:"Table completion",
      difficulty:"Intermediate",
      tags:["Evaluation metrics"],
      columns:[{id:"measures", label:"What it measures"}, {id:"use", label:"Primary use"}, {id:"limit", label:"Limitation"}],
      rows:[
        {id:"rouge", label:"ROUGE", values:{measures:"Overlap with reference text.", use:"Summarization.", limit:"Overlap does not prove factuality or usefulness."}},
        {id:"bleu", label:"BLEU", values:{measures:"N-gram overlap with reference translations.", use:"Translation.", limit:"Can miss valid paraphrases."}},
        {id:"bertscore", label:"BERTScore", values:{measures:"Semantic similarity using embeddings.", use:"Paraphrase and semantic match.", limit:"Still depends on references and does not prove safety."}},
        {id:"llmjudge", label:"LLM-as-a-judge", values:{measures:"Rubric-based model judgment.", use:"Open-ended helpfulness and quality.", limit:"The judge can be inconsistent or biased."}},
        {id:"perplexity", label:"Perplexity", values:{measures:"How well a model predicts sequence tokens.", use:"Model-development sequence prediction.", limit:"Lower perplexity does not guarantee better user outcomes."}}
      ]
    }),
    matchRound({
      id:"d3-343-business-question-metric",
      objective:"3.4.3",
      title:"Business Question to Metric",
      cardType:"Use case",
      difficulty:"Foundational",
      tags:["Business metrics"],
      slots:[["productivity","Productivity"],["adoption","Adoption"],["commercial","Commercial outcome"],["economic","Economic viability"],["safety","Safety"]],
      items:[
        {text:"Tasks completed per hour", answer:"productivity"},
        {text:"Repeat usage and adoption rate", answer:"adoption"},
        {text:"Conversion or resolution rate", answer:"commercial"},
        {text:"Cost per interaction", answer:"economic"},
        {text:"Complaint volume or guardrail intervention rate", answer:"safety"}
      ]
    }),
    matrixRound({
      id:"d3-344-application-evaluation-table",
      objective:"3.4.4",
      title:"FM Application Evaluation Table",
      cardType:"Table completion",
      difficulty:"Intermediate",
      tags:["Application evaluation"],
      columns:[{id:"evaluate", label:"What to evaluate"}, {id:"failure", label:"Typical failure mode"}],
      rows:[
        {id:"rag", label:"RAG", values:{evaluate:"Retrieval quality, groundedness, answer relevance, and citation accuracy.", failure:"Answer looks fluent but is unsupported or cites the wrong source."}},
        {id:"agents", label:"Agents", values:{evaluate:"Task completion, tool selection, steps, recovery, cost, and safety.", failure:"Agent chooses the wrong tool or takes unsafe actions."}},
        {id:"workflows", label:"Workflows", values:{evaluate:"Each step, handoff, validation, and output quality.", failure:"One fixed step fails and downstream output becomes wrong."}}
      ]
    }),
    matrixRound({
      id:"d3-345-alignment-metric-table",
      objective:"3.4.5",
      title:"Business Objective Alignment Metrics",
      cardType:"Table completion",
      difficulty:"Foundational",
      tags:["Business metrics"],
      columns:[{id:"definition", label:"Definition"}, {id:"poor", label:"What a poor result indicates"}],
      rows:[
        {id:"completion", label:"Task completion rate", values:{definition:"Share of user tasks successfully completed.", poor:"The application is not solving the intended workflow."}},
        {id:"satisfaction", label:"User satisfaction", values:{definition:"User rating or sentiment about the AI experience.", poor:"Outputs may be technically correct but not useful."}},
        {id:"cost", label:"Cost per interaction", values:{definition:"Average cost to serve one request or task.", poor:"The solution may not be economically viable."}},
        {id:"escalation", label:"Escalation rate", values:{definition:"How often work moves to a human or fallback path.", poor:"The AI cannot handle the intended cases."}},
        {id:"resolution", label:"Time to resolution", values:{definition:"Time required to complete the user outcome.", poor:"The system is too slow or adds friction."}}
      ]
    })
  ];

  const rounds4 = [
    matrixRound({
      id:"d4-411-responsible-ai-feature-table",
      objective:"4.1.1",
      title:"Responsible AI Feature Table",
      cardType:"Table completion",
      difficulty:"Foundational",
      tags:["Responsible AI"],
      columns:[{id:"meaning", label:"Meaning"}, {id:"failure", label:"How it fails in practice"}],
      rows:[
        {id:"bias", label:"Bias", values:{meaning:"Systematic error or skew in data, model, or outcomes.", failure:"One group receives consistently worse outputs."}},
        {id:"fairness", label:"Fairness", values:{meaning:"Comparable treatment and outcomes across relevant groups.", failure:"A model favors one population without justification."}},
        {id:"inclusivity", label:"Inclusivity", values:{meaning:"Design and data account for diverse users and contexts.", failure:"The system excludes users it is meant to serve."}},
        {id:"robustness", label:"Robustness", values:{meaning:"Reliable behavior across expected variation and stress.", failure:"Small input changes produce unsafe or unstable outputs."}},
        {id:"safety", label:"Safety", values:{meaning:"Avoiding harmful, dangerous, or inappropriate outputs.", failure:"The model gives harmful instructions or content."}},
        {id:"veracity", label:"Veracity", values:{meaning:"Truthfulness and grounding of outputs.", failure:"The model presents unsupported claims as fact."}}
      ]
    }),
    matrixRound({
      id:"d4-412-guardrails-capability-table",
      objective:"4.1.2",
      title:"Amazon Bedrock Guardrails Capabilities",
      cardType:"Service matching",
      difficulty:"Intermediate",
      tags:["Bedrock Guardrails"],
      columns:[{id:"does", label:"What it does"}, {id:"property", label:"Responsible AI property supported"}],
      rows:[
        {id:"content", label:"Content filters", values:{does:"Detect and block harmful content categories.", property:"Safety."}},
        {id:"denied", label:"Denied topics", values:{does:"Block topics the application should not discuss.", property:"Safety and policy alignment."}},
        {id:"word", label:"Word filters", values:{does:"Filter specific words or phrases.", property:"Safety and brand control."}},
        {id:"sensitive", label:"Sensitive-information filters", values:{does:"Detect or redact sensitive data such as PII.", property:"Privacy and security."}},
        {id:"grounding", label:"Contextual grounding checks", values:{does:"Check whether answers are grounded in provided source context.", property:"Veracity."}},
        {id:"reasoning", label:"Automated reasoning checks", values:{does:"Validate responses against logical rules where configured.", property:"Trustworthiness and correctness."}}
      ]
    }),
    matchRound({
      id:"d4-413-responsible-selection-practices",
      objective:"4.1.3",
      title:"Responsible Model Selection Practices",
      cardType:"Use case",
      difficulty:"Foundational",
      tags:["Responsible AI","Model selection"],
      slots:[["small","Smallest sufficient model"],["reuse","Reuse pre-trained models"],["prompt-rag","Prompt engineering and RAG before fine-tuning"],["distill","Distillation"],["batch","Batch inference"],["license","Licensing and provenance"]],
      items:[
        {text:"Reduces cost, latency, and resource use when quality is sufficient", answer:"small"},
        {text:"Avoids unnecessary training from scratch", answer:"reuse"},
        {text:"Solves many behavior or knowledge needs before more expensive customization", answer:"prompt-rag"},
        {text:"Uses a smaller student model for efficient repeated tasks", answer:"distill"},
        {text:"Runs noninteractive jobs efficiently instead of forcing real-time inference", answer:"batch"},
        {text:"Confirms the model and data can legally be used", answer:"license"}
      ]
    }),
    matrixRound({
      id:"d4-414-legal-risk-table",
      objective:"4.1.4",
      title:"Legal Risk Table",
      cardType:"Table completion",
      difficulty:"Intermediate",
      tags:["Legal risk","Responsible AI"],
      columns:[{id:"appears", label:"How it appears"}, {id:"mitigation", label:"Mitigation"}],
      rows:[
        {id:"ip", label:"IP infringement", values:{appears:"Outputs or training data violate copyright or licensing.", mitigation:"Use approved sources, provenance, review, and licensing checks."}},
        {id:"bias", label:"Biased outputs", values:{appears:"Protected or underrepresented groups receive harmful treatment.", mitigation:"Use representative data, subgroup testing, and fairness review."}},
        {id:"trust", label:"Loss of trust", values:{appears:"Users cannot rely on or understand AI behavior.", mitigation:"Disclose AI use, explain limits, and monitor quality."}},
        {id:"enduser", label:"End-user risk", values:{appears:"The system gives harmful advice or unsafe actions.", mitigation:"Human review, Guardrails, and scoped use cases."}},
        {id:"hallucination", label:"Hallucinations", values:{appears:"Unsupported claims are presented as facts.", mitigation:"Use RAG, grounding checks, citations, and validation."}}
      ]
    }),
    matrixRound({
      id:"d4-415-dataset-characteristic-table",
      objective:"4.1.5",
      title:"Good Dataset Characteristics",
      cardType:"Table completion",
      difficulty:"Foundational",
      tags:["Datasets","Responsible AI"],
      columns:[{id:"meaning", label:"Meaning"}, {id:"absent", label:"Consequence if absent"}],
      rows:[
        {id:"inclusive", label:"Inclusivity", values:{meaning:"Covers the people and situations the system serves.", absent:"Some users are excluded or harmed."}},
        {id:"diverse", label:"Diversity", values:{meaning:"Contains meaningful variation across examples.", absent:"The model fails outside narrow patterns."}},
        {id:"curated", label:"Curated sources", values:{meaning:"Sources are selected for quality, rights, and relevance.", absent:"Noise, low-quality, or unlicensed data enters the system."}},
        {id:"balance", label:"Balance", values:{meaning:"Classes and groups are not badly skewed.", absent:"The model overpredicts common cases and misses rare ones."}}
      ]
    }),
    matrixRound({
      id:"d4-416-bias-variance-table",
      objective:"4.1.6",
      title:"Bias-Variance Table Completion",
      cardType:"Comparison",
      difficulty:"Intermediate",
      tags:["Bias","Variance"],
      columns:[{id:"symptom", label:"Train/test symptom"}, {id:"meaning", label:"Meaning"}, {id:"remedy", label:"Typical remedy"}],
      rows:[
        {id:"high-bias", label:"High bias", values:{symptom:"Poor training and test performance.", meaning:"Underfitting; the model is too simple or misses patterns.", remedy:"Use better features, more capable model, or train longer."}},
        {id:"high-variance", label:"High variance", values:{symptom:"Good training performance but poor test performance.", meaning:"Overfitting; the model memorizes training data.", remedy:"Use more data, regularization, simpler model, or validation."}},
        {id:"tradeoff", label:"Bias-variance tradeoff", values:{symptom:"Changing complexity moves errors between underfit and overfit.", meaning:"Optimization balances simplicity and flexibility.", remedy:"Tune model complexity using validation data."}}
      ]
    }),
    matchRound({
      id:"d4-417-monitoring-tool-match",
      objective:"4.1.7",
      title:"Responsible AI Monitoring Tools",
      cardType:"Service matching",
      difficulty:"Intermediate",
      tags:["SageMaker Clarify","Model Monitor","A2I"],
      slots:[["clarify","SageMaker Clarify"],["monitor","SageMaker Model Monitor"],["a2i","Amazon A2I"],["subgroup","Subgroup analysis"],["label","Label-quality analysis"],["audits","Human audits"],["guardrails","Bedrock Guardrails"]],
      items:[
        {text:"Detects bias and explains feature attribution", answer:"clarify"},
        {text:"Watches deployed model quality and drift over time", answer:"monitor"},
        {text:"Routes predictions or outputs to human review workflows", answer:"a2i"},
        {text:"Compares performance across groups", answer:"subgroup"},
        {text:"Checks whether training labels are reliable", answer:"label"},
        {text:"People inspect model behavior, documentation, and edge cases", answer:"audits"},
        {text:"Filters and grounds generative AI inputs and outputs at inference", answer:"guardrails"}
      ]
    }),
    matrixRound({
      id:"d4-421-transparency-explainability-matrix",
      objective:"4.2.1",
      title:"Transparency versus Explainability Matrix",
      cardType:"Comparison",
      difficulty:"Foundational",
      tags:["Transparency","Explainability"],
      columns:[{id:"transparency", label:"Transparency"}, {id:"explainability", label:"Explainability"}],
      rows:[
        {id:"meaning", label:"Meaning", values:{transparency:"Visibility into model, data, process, or documentation.", explainability:"Understanding why a model produced a specific output."}},
        {id:"decision", label:"Per-decision understanding", values:{transparency:"May describe the system without explaining a decision.", explainability:"Focuses on reasons for a decision or prediction."}},
        {id:"documentation", label:"Documentation", values:{transparency:"Model cards, data sheets, and source documentation.", explainability:"Feature attribution, examples, or explanations."}},
        {id:"fit", label:"Best fit", values:{transparency:"Governance, procurement, and disclosure.", explainability:"User trust, debugging, and regulated decisions."}}
      ]
    }),
    matchRound({
      id:"d4-422-explainability-tool-match",
      objective:"4.2.2",
      title:"Transparency and Explainability Tools",
      cardType:"Service matching",
      difficulty:"Intermediate",
      tags:["Model Cards","Clarify","Model Evaluation"],
      slots:[["cards","SageMaker Model Cards"],["clarify","SageMaker Clarify"],["evaluation","Bedrock Model Evaluation"],["open","Open-source models"],["docs","Data and licensing documentation"],["pdp","Partial-dependence plots"],["importance","Feature importance"]],
      items:[
        {text:"Documents model purpose, risk, evaluation, and intended use", answer:"cards"},
        {text:"Provides bias analysis and feature attribution", answer:"clarify"},
        {text:"Compares model quality using automatic or human evaluation", answer:"evaluation"},
        {text:"Can expose more implementation details than closed models", answer:"open"},
        {text:"Shows where data came from and how it may be used", answer:"docs"},
        {text:"Shows how changing a feature affects predicted outcome", answer:"pdp"},
        {text:"Identifies which features influenced model output most", answer:"importance"}
      ]
    }),
    matrixRound({
      id:"d4-423-tradeoff-table",
      objective:"4.2.3",
      title:"Safety, Transparency, and Performance Tradeoffs",
      cardType:"Table completion",
      difficulty:"Intermediate",
      tags:["Tradeoffs"],
      columns:[{id:"tension", label:"Tension"}, {id:"resolution", label:"Resolution"}],
      rows:[
        {id:"interpret", label:"Interpretability versus performance", values:{tension:"More complex models may perform better but be harder to interpret.", resolution:"Match model complexity to risk and explanation needs."}},
        {id:"security", label:"Transparency versus security", values:{tension:"Too much detail can expose prompts, controls, or attack paths.", resolution:"Disclose useful information without revealing secrets or defenses."}},
        {id:"usability", label:"Explanation detail versus usability", values:{tension:"Long technical explanations can overwhelm users.", resolution:"Tailor explanation depth to audience and decision risk."}}
      ]
    }),
    matchRound({
      id:"d4-424-human-centered-design",
      objective:"4.2.4",
      title:"Human-Centred Design Principles",
      cardType:"Use case",
      difficulty:"Foundational",
      tags:["Human-centred design"],
      slots:[["disclose","Disclose AI use"],["level","Explain at user level"],["feedback","Feedback mechanisms"],["recourse","Human recourse"],["limits","Confidence and limitations"],["actual","Design for actual user"]],
      items:[
        {text:"Tell users when they are interacting with AI", answer:"disclose"},
        {text:"Use language the target user can understand", answer:"level"},
        {text:"Let users report incorrect or harmful outputs", answer:"feedback"},
        {text:"Provide a way to appeal, escalate, or get human help", answer:"recourse"},
        {text:"Show uncertainty and boundaries of the system", answer:"limits"},
        {text:"Validate the interface with real user needs and context", answer:"actual"}
      ]
    })
  ];

  const rounds5 = [
    matrixRound({
      id:"d5-511-security-service-table",
      objective:"5.1.1",
      title:"Security Service to Purpose",
      cardType:"Service matching",
      difficulty:"Intermediate",
      tags:["Security","AWS services"],
      columns:[{id:"purpose", label:"Purpose"}],
      rows:[
        {id:"iam", label:"AWS IAM", values:{purpose:"Controls who can access AWS resources and what actions they may take."}},
        {id:"agent-id", label:"AgentCore Identity", values:{purpose:"Gives agents identity and authorization integration."}},
        {id:"kms", label:"AWS KMS", values:{purpose:"Creates and manages encryption keys."}},
        {id:"secrets", label:"AWS Secrets Manager", values:{purpose:"Stores, retrieves, and rotates secrets."}},
        {id:"macie", label:"Amazon Macie", values:{purpose:"Discovers and classifies sensitive data such as PII in S3."}},
        {id:"privatelink", label:"AWS PrivateLink", values:{purpose:"Provides private connectivity to services without public internet paths."}},
        {id:"guardrails", label:"Amazon Bedrock Guardrails", values:{purpose:"Applies content, denied-topic, sensitive-data, and grounding controls."}}
      ]
    }),
    matchRound({
      id:"d5-511-aws-customer-responsibility",
      objective:"5.1.1",
      title:"AWS or Customer Responsibility?",
      cardType:"Comparison",
      difficulty:"Foundational",
      tags:["Shared responsibility"],
      slots:[["aws","AWS responsibility"],["customer","Customer responsibility"]],
      items:[
        {text:"Security of the cloud infrastructure", answer:"aws"},
        {text:"Physical facilities and managed service infrastructure", answer:"aws"},
        {text:"Least-privilege IAM policies", answer:"customer"},
        {text:"Protecting prompts, data sources, and application code", answer:"customer"},
        {text:"Choosing encryption, logging, and guardrail configuration", answer:"customer"}
      ]
    }),
    matchRound({
      id:"d5-512-lineage-catalog-citation",
      objective:"5.1.2",
      title:"Lineage, Catalogue, Citation, or Model Card?",
      cardType:"Definition",
      difficulty:"Foundational",
      tags:["Data lineage","Governance"],
      slots:[["lineage","Data lineage"],["catalog","Data cataloguing"],["citation","Source citation"],["model-card","SageMaker Model Cards"],["glue","AWS Glue Data Catalog"],["kb","Bedrock Knowledge Bases"]],
      items:[
        {text:"Tracks where data came from and how it changed", answer:"lineage"},
        {text:"Organizes datasets with metadata for discovery and governance", answer:"catalog"},
        {text:"Shows which source supports a generated answer", answer:"citation"},
        {text:"Documents model purpose, performance, risk, and intended use", answer:"model-card"},
        {text:"AWS metadata catalog for data assets", answer:"glue"},
        {text:"Can return citations from retrieved RAG sources", answer:"kb"}
      ]
    }),
    matrixRound({
      id:"d5-513-secure-data-practice-table",
      objective:"5.1.3",
      title:"Secure Data Engineering Practice Table",
      cardType:"Table completion",
      difficulty:"Intermediate",
      tags:["Secure data engineering"],
      columns:[{id:"purpose", label:"Purpose"}, {id:"aws", label:"AWS implementation"}],
      rows:[
        {id:"quality", label:"Data quality", values:{purpose:"Keep data accurate, complete, and fit for model use.", aws:"Validation jobs, data quality checks, and governed pipelines."}},
        {id:"privacy", label:"Privacy-enhancing techniques", values:{purpose:"Reduce exposure of personal or sensitive data.", aws:"Masking, minimization, tokenization, or de-identification."}},
        {id:"access", label:"Access control", values:{purpose:"Limit who can read, write, or modify data.", aws:"IAM, S3 policies, and Lake Formation permissions."}},
        {id:"integrity", label:"Integrity", values:{purpose:"Protect data from unauthorized or accidental change.", aws:"S3 versioning, checks, and controlled write paths."}},
        {id:"encryption", label:"Encryption", values:{purpose:"Protect data at rest and in transit.", aws:"KMS and TLS."}},
        {id:"retention", label:"Retention and deletion", values:{purpose:"Keep data only as long as needed.", aws:"S3 lifecycle policies and deletion processes."}}
      ]
    }),
    matrixRound({
      id:"d5-514-security-consideration-table",
      objective:"5.1.4",
      title:"Security and Privacy Consideration Table",
      cardType:"Table completion",
      difficulty:"Intermediate",
      tags:["Security","Privacy"],
      columns:[{id:"angle", label:"Security angle"}, {id:"control", label:"Control"}],
      rows:[
        {id:"injection", label:"Prompt injection", values:{angle:"User input attempts to override instructions or manipulate tools.", control:"Input validation, tool permission checks, delimiters, and Guardrails."}},
        {id:"leakage", label:"Data leakage prevention", values:{angle:"Sensitive data appears in prompts, logs, or outputs.", control:"Macie, PII filters, minimization, and logging controls."}},
        {id:"output", label:"Output filtering and validation", values:{angle:"Generated output is unsafe, malformed, or out of policy.", control:"Guardrails and application validation."}},
        {id:"audit", label:"Audit trail and logging", values:{angle:"Teams need evidence of actions and operations.", control:"CloudTrail, CloudWatch, Bedrock invocation logging, and AgentCore Observability."}},
        {id:"vuln", label:"Threat and vulnerability management", values:{angle:"Application or infrastructure weaknesses need detection.", control:"Inspector and security monitoring."}},
        {id:"network", label:"Infrastructure protection", values:{angle:"Traffic should avoid public internet exposure where required.", control:"PrivateLink and VPC design."}}
      ]
    }),
    sequenceRound({
      id:"d5-515-hallucination-defense-order",
      objective:"5.1.5",
      title:"Hallucination Defense Order",
      cardType:"Ordering",
      difficulty:"Foundational",
      tags:["Grounding","Hallucination defense"],
      steps:["Ground","Check","Validate","Score and route","Log and learn"]
    }),
    matchRound({
      id:"d5-515-service-to-defense-layer",
      objective:"5.1.5",
      title:"AWS Service to Defense Layer",
      cardType:"Service matching",
      difficulty:"Intermediate",
      tags:["Grounding","Guardrails"],
      slots:[["kb","Bedrock Knowledge Bases"],["grounding","Guardrails contextual grounding checks"],["validation","Application output validation"],["confidence","Confidence scoring"],["a2i","Amazon A2I"],["logging","Logging"],["abstain","Abstention instructions"]],
      items:[
        {text:"Retrieve source passages for the answer", answer:"kb"},
        {text:"Check whether response claims are supported by source context", answer:"grounding"},
        {text:"Reject malformed JSON or unsupported application output", answer:"validation"},
        {text:"Estimate whether the response should be trusted or escalated", answer:"confidence"},
        {text:"Route uncertain or high-risk cases to humans", answer:"a2i"},
        {text:"Capture prompts, outputs, and outcomes for review", answer:"logging"},
        {text:"Tell the model to say it does not know when evidence is missing", answer:"abstain"}
      ]
    }),
    matchRound({
      id:"d5-521-governance-service-match",
      objective:"5.2.1",
      title:"Governance and Compliance Services",
      cardType:"Service matching",
      difficulty:"Intermediate",
      tags:["Governance","Compliance"],
      slots:[["cloudtrail","AWS CloudTrail"],["config","AWS Config"],["audit","AWS Audit Manager"],["artifact","AWS Artifact"],["inspector","Amazon Inspector"],["trusted","AWS Trusted Advisor"],["cloudwatch","Amazon CloudWatch"]],
      items:[
        {text:"Records API actions and who did what", answer:"cloudtrail"},
        {text:"Records and evaluates resource configuration state", answer:"config"},
        {text:"Collects evidence for audits", answer:"audit"},
        {text:"Provides AWS compliance reports and agreements", answer:"artifact"},
        {text:"Finds software vulnerabilities and exposure", answer:"inspector"},
        {text:"Provides best-practice recommendations", answer:"trusted"},
        {text:"Provides metrics, logs, alarms, and operational visibility", answer:"cloudwatch"}
      ]
    }),
    matrixRound({
      id:"d5-522-data-governance-strategy-table",
      objective:"5.2.2",
      title:"Data Governance Strategy Table",
      cardType:"Table completion",
      difficulty:"Intermediate",
      tags:["Data governance"],
      columns:[{id:"meaning", label:"Meaning"}, {id:"aws", label:"AWS implementation"}],
      rows:[
        {id:"lifecycle", label:"Data lifecycle", values:{meaning:"Manage data from creation through archival and deletion.", aws:"S3 lifecycle policies and S3 Glacier."}},
        {id:"logging", label:"Logging", values:{meaning:"Record events and requests for traceability.", aws:"CloudTrail and Bedrock invocation logging."}},
        {id:"residency", label:"Residency", values:{meaning:"Control where data is stored and processed.", aws:"Region selection and service availability checks."}},
        {id:"monitoring", label:"Monitoring and observation", values:{meaning:"Watch behavior, quality, and operations over time.", aws:"CloudWatch, Model Monitor, and AgentCore Observability."}},
        {id:"retention", label:"Retention", values:{meaning:"Define how long data is kept.", aws:"Retention policies and lifecycle expiration."}},
        {id:"classification", label:"Classification and ownership", values:{meaning:"Label sensitivity and assign accountability.", aws:"Glue Data Catalog, Macie, and Lake Formation."}}
      ]
    }),
    matchRound({
      id:"d5-523-governance-elements",
      objective:"5.2.3",
      title:"Governance Element to Good Practice",
      cardType:"Use case",
      difficulty:"Foundational",
      tags:["Governance protocols"],
      slots:[["policies","Policies"],["cadence","Review cadence"],["strategies","Review strategies"],["frameworks","Frameworks"],["transparency","Transparency standards"],["training","Team training"]],
      items:[
        {text:"Define allowed AI use, data handling, and required controls", answer:"policies"},
        {text:"Set periodic review rather than one-time approval", answer:"cadence"},
        {text:"Use risk-based checks, audits, and monitoring", answer:"strategies"},
        {text:"Map controls to recognized governance or compliance structures", answer:"frameworks"},
        {text:"Document disclosure, explanations, and model information", answer:"transparency"},
        {text:"Teach teams how to follow AI governance requirements", answer:"training"}
      ]
    }),
    sequenceRound({
      id:"d5-523-security-scope-order",
      objective:"5.2.3",
      title:"Generative AI Security Scope Order",
      cardType:"Ordering",
      difficulty:"Intermediate",
      tags:["Security Scoping Matrix"],
      steps:["Scope 1 — Consumer app","Scope 2 — Enterprise app","Scope 3 — Pre-trained model API","Scope 4 — Fine-tuned model","Scope 5 — Self-trained model"]
    }),
    matchRound({
      id:"d5-523-scenario-to-scope",
      objective:"5.2.3",
      title:"Scenario to Security Scope",
      cardType:"Scenario",
      difficulty:"Intermediate",
      tags:["Security Scoping Matrix"],
      slots:[["s1","Scope 1 — Consumer app"],["s2","Scope 2 — Enterprise app"],["s3","Scope 3 — Pre-trained model API"],["s4","Scope 4 — Fine-tuned model"],["s5","Scope 5 — Self-trained model"]],
      items:[
        {text:"Employee uses a public consumer AI chat application", answer:"s1"},
        {text:"Company deploys an enterprise AI application for employees", answer:"s2"},
        {text:"Application calls a hosted pre-trained FM through an API", answer:"s3"},
        {text:"Organization fine-tunes a model with its own data", answer:"s4"},
        {text:"Organization trains its own model from scratch", answer:"s5"}
      ]
    })
  ];

  function activity(domainNumber, rounds, order, title, taskStatement, objectiveCodes, description){
    return {
      id:"domain" + domainNumber + "-source-structure-games",
      domain:domainNumber,
      taskStatement:taskStatement,
      objectiveCodes:objectiveCodes,
      title:title,
      shortDescription:description,
      activityType:"Table completion, service matching, ordering, and true/false",
      estimatedTime:domainNumber === 3 ? "90 min" : "60 min",
      difficulty:"Foundational to Intermediate",
      module:"hub-card-engine",
      order:order,
      sourceFile:SOURCE,
      available:true,
      rounds:rounds
    };
  }

  window.DOMAINS_345_ACTIVITIES = [
    activity(3, rounds3, 3000, "Domain 3 Source-Structure Games", "Tasks 3.1-3.4", ["3.1.1","3.1.2","3.1.3","3.1.4","3.1.5","3.1.6","3.2.1","3.2.2","3.2.3","3.2.4","3.2.5","3.3.1","3.3.2","3.3.3","3.4.1","3.4.2","3.4.3","3.4.4","3.4.5"], "Objective-by-objective activities for FM selection, inference, RAG, vector stores, customization, agents, prompting, training, fine-tuning, and evaluation."),
    activity(4, rounds4, 4000, "Domain 4 Source-Structure Games", "Tasks 4.1-4.2", ["4.1.1","4.1.2","4.1.3","4.1.4","4.1.5","4.1.6","4.1.7","4.2.1","4.2.2","4.2.3","4.2.4"], "Objective-by-objective activities for responsible AI features, Guardrails, legal risk, datasets, bias and variance, monitoring, transparency, explainability, tradeoffs, and human-centred design."),
    activity(5, rounds5, 5000, "Domain 5 Source-Structure Games", "Tasks 5.1-5.2", ["5.1.1","5.1.2","5.1.3","5.1.4","5.1.5","5.2.1","5.2.2","5.2.3"], "Objective-by-objective activities for security services, lineage and citation, secure data engineering, runtime security, hallucination defense, governance services, data governance, and security scoping.")
  ];
})();
