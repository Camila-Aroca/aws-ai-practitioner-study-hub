(function(){
  "use strict";
  window.HUB_LEGACY_ACTIVITIES = [
  {
    "id": "domain1-mlops",
    "module": "hub-card-engine",
    "available": true,
    "rounds": [
      {
        "id": "mlops",
        "title": "Mlops",
        "order": 1,
        "intro": "Six concepts, each with a definition and a reason it matters. The definitions are the easy half. The 'why it matters' cards are where the exam gets its distractors, so place those deliberately rather than by elimination.",
        "slotTypes": [
          {
            "key": "means",
            "label": "What it means"
          },
          {
            "key": "why",
            "label": "Why it matters"
          }
        ],
        "concepts": [
          {
            "id": "exp",
            "name": "Experimentation",
            "means": "Tracking datasets, parameters, code versions and results so any run can be reproduced.",
            "why": "Without it you cannot explain why the model in production behaves as it does."
          },
          {
            "id": "rep",
            "name": "Repeatable processes",
            "means": "Automated, versioned pipelines rather than manual notebooks.",
            "why": "A model you cannot rebuild is a model you cannot fix."
          },
          {
            "id": "sca",
            "name": "Scalable systems",
            "means": "Infrastructure that handles growth in data volume, training frequency and inference traffic.",
            "why": "Prototypes that cannot scale never reach production."
          },
          {
            "id": "deb",
            "name": "Managing technical debt",
            "means": "Controlling the accumulation of undocumented glue code, orphaned features and stale pipelines.",
            "why": "ML systems accumulate debt faster than ordinary software because data dependencies are invisible."
          },
          {
            "id": "prd",
            "name": "Production readiness",
            "means": "Testing, monitoring, rollback, security review and documented ownership before launch.",
            "why": "A model that scores well offline can still be unfit to serve."
          },
          {
            "id": "mon",
            "name": "Model monitoring and retraining",
            "means": "Watching for data drift and model drift and retraining on a trigger or schedule.",
            "why": "The world changes; a static model silently degrades."
          }
        ]
      },
      {
        "id": "drift",
        "title": "Drift",
        "order": 2,
        "intro": "Only four cards, and they are the four most swapped items in this objective. The test is whether the inputs changed or whether the meaning of the inputs changed.",
        "slotTypes": [
          {
            "key": "means",
            "label": "What has changed"
          },
          {
            "key": "why",
            "label": "Example"
          }
        ],
        "concepts": [
          {
            "id": "dd",
            "name": "Data drift",
            "means": "The distribution of the incoming features has changed.",
            "why": "Your customers are younger than they were."
          },
          {
            "id": "md",
            "name": "Model drift (concept drift)",
            "means": "The relationship between the features and the target has changed.",
            "why": "What predicts fraud today is not what predicted it last year."
          }
        ]
      }
    ],
    "domain": 1,
    "taskStatement": "Task 1.3",
    "objectiveCodes": [
      "1.3.5"
    ],
    "title": "MLOps Card Match",
    "shortDescription": "Experimentation, repeatability, scalability, technical debt, production readiness, drift, monitoring, and retraining.",
    "activityType": "Card matching",
    "estimatedTime": "8 min",
    "difficulty": "Foundational",
    "order": 1305,
    "sourceFile": "mlops-matching-game.html"
  },
  {
    "id": "domain1-lifecycle",
    "module": "hub-card-engine",
    "available": true,
    "rounds": [
      {
        "id": "sequence",
        "title": "Sequence",
        "order": 1,
        "mode": "slots",
        "track": true,
        "intro": "Nine stages, and before anything else: can you put them back in order? Each position below just needs the right stage name — no descriptions yet, only sequence. This is the part of 1.3.1 that reads easiest and tests worst under exam pressure.",
        "footnote": "<strong>Worth knowing:</strong> stages 2 to 7 are typically iterative rather than linear in practice — teams loop back to exploration and pre-processing as they learn from training and evaluation. The exam still expects the canonical order shown here.",
        "slotTypes": [
          {
            "key": "stage",
            "label": "Which stage goes here?"
          }
        ],
        "concepts": [
          {
            "id": "p1",
            "name": "Step",
            "stage": "Data collection"
          },
          {
            "id": "p2",
            "name": "Step",
            "stage": "Exploratory data analysis (EDA)"
          },
          {
            "id": "p3",
            "name": "Step",
            "stage": "Data pre-processing"
          },
          {
            "id": "p4",
            "name": "Step",
            "stage": "Feature engineering"
          },
          {
            "id": "p5",
            "name": "Step",
            "stage": "Model training"
          },
          {
            "id": "p6",
            "name": "Step",
            "stage": "Hyperparameter tuning"
          },
          {
            "id": "p7",
            "name": "Step",
            "stage": "Evaluation"
          },
          {
            "id": "p8",
            "name": "Step",
            "stage": "Deployment"
          },
          {
            "id": "p9",
            "name": "Step",
            "stage": "Monitoring and retraining"
          }
        ]
      },
      {
        "id": "stages",
        "title": "Stages",
        "order": 2,
        "mode": "slots",
        "intro": "Same nine stages, now shown in their correct order. This round tests whether you know what actually happens at each one — matching the definition, not the sequence.",
        "footnote": "<strong>New in v1.1:</strong> objective 1.3.1 now asks you to ‘describe and differentiate’ pipeline components, not just list them — which is exactly what the next round tests directly.",
        "slotTypes": [
          {
            "key": "def",
            "label": "What happens at this stage"
          }
        ],
        "concepts": [
          {
            "id": "collect",
            "name": "1. Data collection",
            "def": "Gather raw data from source systems, logs, documents, sensors. Establish ownership and access."
          },
          {
            "id": "eda",
            "name": "2. Exploratory data analysis (EDA)",
            "def": "Understand distributions, missing values, outliers, class balance and obvious leakage."
          },
          {
            "id": "preproc",
            "name": "3. Data pre-processing",
            "def": "Clean, deduplicate, handle missing values, normalise, split into training, validation and test sets."
          },
          {
            "id": "feateng",
            "name": "4. Feature engineering",
            "def": "Create and select the input variables the model will actually learn from."
          },
          {
            "id": "train",
            "name": "5. Model training",
            "def": "Run the algorithm over the training set to learn parameters."
          },
          {
            "id": "tune",
            "name": "6. Hyperparameter tuning",
            "def": "Search configuration settings to improve validation performance."
          },
          {
            "id": "eval",
            "name": "7. Evaluation",
            "def": "Measure performance on held-out data using appropriate metrics."
          },
          {
            "id": "deploy",
            "name": "8. Deployment",
            "def": "Serve the model for real-time, batch, asynchronous or serverless inference."
          },
          {
            "id": "monitor",
            "name": "9. Monitoring and retraining",
            "def": "Watch for data drift, model drift and quality degradation; retrain on a trigger or schedule."
          }
        ]
      },
      {
        "id": "tradfm",
        "title": "Tradfm",
        "order": 3,
        "mode": "buckets",
        "intro": "Six dimensions, each described twice — once for a traditional ML pipeline, once for a foundation model pipeline. Sort each description into the pipeline it actually describes. This is objective 1.3.1's differentiation requirement, tested directly.",
        "footnote": "<strong>The pattern to notice:</strong> traditional ML centres on your labelled data and your training run. Foundation model pipelines centre on someone else's pre-training, with your effort shifting to prompts, retrieval and evaluating behaviour you didn't train.",
        "targets": [
          {
            "id": "trad",
            "name": "Traditional ML pipeline",
            "sub": "You built the model from your own data"
          },
          {
            "id": "fm",
            "name": "Foundation model pipeline",
            "sub": "You are building around someone else's model"
          }
        ],
        "items": [
          {
            "id": "d1",
            "target": "trad",
            "text": "Your labelled dataset is the whole basis of the model."
          },
          {
            "id": "d2",
            "target": "fm",
            "text": "The provider's pre-training corpus does the heavy lifting. Your data is used for grounding (RAG) or customisation."
          },
          {
            "id": "t1",
            "target": "trad",
            "text": "You train the model from scratch on your data."
          },
          {
            "id": "t2",
            "target": "fm",
            "text": "You usually do not train. You select a pre-trained FM and optionally customise it."
          },
          {
            "id": "f1",
            "target": "trad",
            "text": "Feature engineering is central and time-consuming."
          },
          {
            "id": "f2",
            "target": "fm",
            "text": "Feature engineering is largely replaced by prompt design, context engineering and retrieval."
          },
          {
            "id": "e1",
            "target": "trad",
            "text": "Evaluated with accuracy, precision, recall, F1, RMSE against ground truth."
          },
          {
            "id": "e2",
            "target": "fm",
            "text": "Evaluated with ROUGE, BLEU, BERTScore, human evaluation, LLM-as-a-judge, plus business metrics."
          },
          {
            "id": "p1",
            "target": "trad",
            "text": "Deployment means hosting an endpoint or running batch jobs."
          },
          {
            "id": "p2",
            "target": "fm",
            "text": "Deployment means calling a managed API such as Amazon Bedrock, or self-hosting."
          },
          {
            "id": "m1",
            "target": "trad",
            "text": "Monitoring watches for data drift, model drift, prediction distribution."
          },
          {
            "id": "m2",
            "target": "fm",
            "text": "Monitoring watches hallucination rate, groundedness, toxicity, cost per interaction, latency."
          }
        ]
      },
      {
        "id": "drift",
        "title": "Drift",
        "order": 4,
        "mode": "buckets",
        "intro": "Two kinds of drift, four scenarios — two you may already recognise from objective 1.3.5, two new ones from this section. Data drift changes what arrives. Model drift changes what it means once it arrives.",
        "footnote": "<strong>Data drift:</strong> the incoming data looks different from training. <strong>Model drift (concept drift):</strong> the relationship between the data and the right answer has changed, even when the data itself looks normal.",
        "targets": [
          {
            "id": "data",
            "name": "Data drift",
            "sub": "The input distribution has changed"
          },
          {
            "id": "model",
            "name": "Model drift (concept drift)",
            "sub": "What the input means has changed"
          }
        ],
        "items": [
          {
            "id": "g1",
            "target": "data",
            "text": "Your customers are younger than they were."
          },
          {
            "id": "g2",
            "target": "model",
            "text": "What predicts fraud today is not what predicted it last year."
          },
          {
            "id": "g3",
            "target": "data",
            "text": "A fraud model trained mainly on in-store purchases faces a shift as most customers begin shopping online."
          },
          {
            "id": "g4",
            "target": "model",
            "text": "A churn model wrongly flags customers who use their cards less often, after digital wallets become more common."
          }
        ]
      },
      {
        "id": "sources",
        "title": "Sources",
        "order": 5,
        "mode": "slots",
        "intro": "Three ways a foundation model can enter your system, each with a genuinely different tradeoff. The exam almost always wants the first one, and this round makes it obvious why.",
        "footnote": "<strong>Common mistake:</strong> training a foundation model from scratch is almost never the correct exam answer. It appears as a distractor in cost questions specifically because it is the most expensive option. Unless the stem explicitly says the organisation requires a model trained solely on its own proprietary corpus and has the budget and expertise, choose a pre-trained model.",
        "slotTypes": [
          {
            "key": "means",
            "label": "What it means"
          },
          {
            "key": "aws",
            "label": "On AWS"
          },
          {
            "key": "tradeoff",
            "label": "Tradeoff"
          }
        ],
        "concepts": [
          {
            "id": "proprietary",
            "name": "Proprietary FM via managed API",
            "means": "A commercial model you access but do not own or host.",
            "aws": "Amazon Bedrock: Amazon Nova, Anthropic Claude, Meta Llama, Mistral, Cohere and others through one API.",
            "tradeoff": "Fastest to production, no infrastructure, but you accept the provider's model and licensing."
          },
          {
            "id": "opensource",
            "name": "Open-source pre-trained model",
            "means": "Publicly available weights you can inspect, host and modify.",
            "aws": "Amazon SageMaker JumpStart provides open models ready to deploy; Bedrock Custom Model Import brings supported open weights into Bedrock.",
            "tradeoff": "Control and transparency, in exchange for operating the infrastructure."
          },
          {
            "id": "custom",
            "name": "Custom-trained model",
            "means": "You pre-train a model on your own corpus from scratch.",
            "aws": "Amazon SageMaker AI training infrastructure.",
            "tradeoff": "Maximum control, by far the highest cost and skill requirement. Rarely the right answer at practitioner level."
          }
        ]
      },
      {
        "id": "deploy",
        "title": "Deploy",
        "order": 6,
        "mode": "slots",
        "intro": "Two ways to put a model into production. A third option is hiding underneath them once you notice where SageMaker AI endpoints and self-hosting on EC2 or EKS actually sit.",
        "footnote": "<strong>Remember for the exam:</strong> Amazon Bedrock is the canonical managed API answer — serverless, no infrastructure, token-based pricing. Amazon SageMaker AI endpoints sit in between: AWS manages the plumbing but you choose and pay for instances. Deploying a model onto Amazon EC2 or Amazon EKS yourself is the self-hosted answer. Cost, control and operational burden increase from left to right.",
        "slotTypes": [
          {
            "key": "description",
            "label": "Description"
          },
          {
            "key": "youManage",
            "label": "You manage"
          },
          {
            "key": "awsManages",
            "label": "AWS manages"
          },
          {
            "key": "bestWhen",
            "label": "Best when"
          }
        ],
        "concepts": [
          {
            "id": "managed",
            "name": "Managed API service",
            "description": "Call a hosted model over an API. No servers involved.",
            "youManage": "Your prompts, data and application code.",
            "awsManages": "Model hosting, scaling, patching, availability.",
            "bestWhen": "Speed to market, variable load, no ML operations team."
          },
          {
            "id": "selfhosted",
            "name": "Self-hosted API",
            "description": "You deploy the model onto compute you control and expose your own endpoint.",
            "youManage": "Instances, containers, scaling, patching, model updates.",
            "awsManages": "The underlying infrastructure only.",
            "bestWhen": "You need a specific model, custom runtime, or strict placement control."
          }
        ]
      }
    ],
    "domain": 1,
    "taskStatement": "Task 1.3",
    "objectiveCodes": [
      "1.3.1",
      "1.3.2",
      "1.3.3"
    ],
    "title": "AI/ML Lifecycle Card Match",
    "shortDescription": "Pipeline stages, traditional ML versus FM pipelines, drift, FM sources, and production deployment methods.",
    "activityType": "Ordering, sorting, card matching",
    "estimatedTime": "18 min",
    "difficulty": "Intermediate",
    "order": 1301,
    "sourceFile": "lifecycle-matching-game.html"
  },
  {
    "id": "domain1-pipeline-services",
    "module": "hub-card-engine",
    "available": true,
    "rounds": [
      {
        "id": "flagship",
        "title": "Flagship",
        "order": 1,
        "mode": "slots",
        "intro": "One flagship service per stage — the same twelve stages, and the same countdown from the mind map: five data stages, four model stages, three run stages. If you can reproduce that shape from memory, you know how many flagships you're about to be tested on before you place a single card.",
        "footnote": "<strong>The countdown:</strong> 5 data · 4 model · 3 run. Store, prepare, explore, featurise, label — train, access FMs, build agents, author code — deploy, monitor, govern.",
        "slotTypes": [
          {
            "key": "service",
            "label": "Flagship service"
          },
          {
            "key": "contributes",
            "label": "What it contributes"
          }
        ],
        "concepts": [
          {
            "id": "storage",
            "name": "Data storage",
            "phase": "data",
            "service": "Amazon S3",
            "contributes": "The default data lake for ML training data and artefacts."
          },
          {
            "id": "ingest",
            "name": "Data ingestion and preparation",
            "phase": "data",
            "service": "AWS Glue",
            "contributes": "Serverless ETL and the Data Catalog."
          },
          {
            "id": "explore",
            "name": "Exploration and analysis",
            "phase": "data",
            "service": "Amazon Quick",
            "contributes": "BI dashboards, natural-language analysis and agentic research over your data."
          },
          {
            "id": "feature",
            "name": "Feature management",
            "phase": "data",
            "service": "SageMaker Feature Store",
            "contributes": "Central, versioned feature definitions reused in training and inference."
          },
          {
            "id": "label",
            "name": "Labelling",
            "phase": "data",
            "service": "SageMaker Ground Truth",
            "contributes": "Builds labelled training datasets."
          },
          {
            "id": "train",
            "name": "Training and tuning",
            "phase": "model",
            "service": "Amazon SageMaker AI",
            "contributes": "Trains custom models on your own data."
          },
          {
            "id": "genmodel",
            "name": "Generative model access",
            "phase": "model",
            "service": "Amazon Bedrock",
            "contributes": "Managed multi-provider foundation model API."
          },
          {
            "id": "agent",
            "name": "Agent development",
            "phase": "model",
            "service": "Amazon Bedrock AgentCore",
            "contributes": "Production runtime and infrastructure for agents."
          },
          {
            "id": "devtool",
            "name": "Developer tooling",
            "phase": "model",
            "service": "Kiro",
            "contributes": "Spec-driven agentic IDE."
          },
          {
            "id": "deploy",
            "name": "Deployment",
            "phase": "run",
            "service": "SageMaker AI endpoints or Amazon Bedrock",
            "contributes": "Real-time, serverless, asynchronous or batch — or self-host on Lambda, ECS, EKS or EC2."
          },
          {
            "id": "monitor",
            "name": "Monitoring",
            "phase": "run",
            "service": "SageMaker Model Monitor",
            "contributes": "Detects data and model quality drift."
          },
          {
            "id": "governance",
            "name": "Governance",
            "phase": "run",
            "service": "SageMaker Model Cards",
            "contributes": "Documents intended use, training data, evaluation results and approval status."
          }
        ]
      },
      {
        "id": "sort",
        "title": "Sort",
        "order": 2,
        "mode": "buckets",
        "intro": "Every service named in objective 1.3.4, sorted into its stage. This is the exhaustive version of round one — thirty-six services, some of which genuinely belong to two stages at once. Two cards are marked with a dagger for that reason; either of their valid stages counts as correct.",
        "footnote": "<strong>†</strong> Two services legitimately serve two stages. SageMaker JumpStart supplies pre-trained models for both training and generative model access. Amazon Bedrock is both the generative model access point and a deployment option. Placing either in either of its valid stages is correct.",
        "targets": [
          {
            "id": "storage",
            "name": "Data storage"
          },
          {
            "id": "ingest",
            "name": "Data ingestion and preparation"
          },
          {
            "id": "explore",
            "name": "Exploration and analysis"
          },
          {
            "id": "feature",
            "name": "Feature management"
          },
          {
            "id": "label",
            "name": "Labelling"
          },
          {
            "id": "train",
            "name": "Training and tuning"
          },
          {
            "id": "genmodel",
            "name": "Generative model access"
          },
          {
            "id": "agent",
            "name": "Agent development"
          },
          {
            "id": "devtool",
            "name": "Developer tooling"
          },
          {
            "id": "deploy",
            "name": "Deployment"
          },
          {
            "id": "monitor",
            "name": "Monitoring"
          },
          {
            "id": "governance",
            "name": "Governance"
          }
        ],
        "items": [
          {
            "id": "st1",
            "target": "storage",
            "text": "Amazon S3"
          },
          {
            "id": "st2",
            "target": "storage",
            "text": "Amazon S3 Glacier"
          },
          {
            "id": "st3",
            "target": "storage",
            "text": "Amazon Redshift"
          },
          {
            "id": "st4",
            "target": "storage",
            "text": "Amazon RDS"
          },
          {
            "id": "st5",
            "target": "storage",
            "text": "Amazon Aurora"
          },
          {
            "id": "in1",
            "target": "ingest",
            "text": "AWS Glue"
          },
          {
            "id": "in2",
            "target": "ingest",
            "text": "AWS Glue DataBrew"
          },
          {
            "id": "in3",
            "target": "ingest",
            "text": "Amazon EMR"
          },
          {
            "id": "in4",
            "target": "ingest",
            "text": "AWS Lake Formation"
          },
          {
            "id": "in5",
            "target": "ingest",
            "text": "SageMaker Data Wrangler"
          },
          {
            "id": "ex1",
            "target": "explore",
            "text": "Amazon Quick"
          },
          {
            "id": "ex2",
            "target": "explore",
            "text": "Amazon Athena"
          },
          {
            "id": "ex3",
            "target": "explore",
            "text": "SageMaker Studio notebooks"
          },
          {
            "id": "fe1",
            "target": "feature",
            "text": "SageMaker Feature Store"
          },
          {
            "id": "la1",
            "target": "label",
            "text": "SageMaker Ground Truth"
          },
          {
            "id": "la2",
            "target": "label",
            "text": "Amazon Augmented AI (A2I)"
          },
          {
            "id": "tr1",
            "target": "train",
            "text": "Amazon SageMaker AI"
          },
          {
            "id": "tr2",
            "targets": [
              "train",
              "genmodel"
            ],
            "primary": "train",
            "text": "SageMaker JumpStart †"
          },
          {
            "id": "ge1",
            "targets": [
              "genmodel",
              "deploy"
            ],
            "primary": "genmodel",
            "text": "Amazon Bedrock †"
          },
          {
            "id": "ag1",
            "target": "agent",
            "text": "Amazon Bedrock AgentCore"
          },
          {
            "id": "ag2",
            "target": "agent",
            "text": "Strands Agents"
          },
          {
            "id": "ag3",
            "target": "agent",
            "text": "Amazon Bedrock Agents"
          },
          {
            "id": "dt1",
            "target": "devtool",
            "text": "Kiro"
          },
          {
            "id": "dt2",
            "target": "devtool",
            "text": "Amazon Q"
          },
          {
            "id": "de1",
            "target": "deploy",
            "text": "SageMaker AI endpoints"
          },
          {
            "id": "de2",
            "target": "deploy",
            "text": "AWS Lambda"
          },
          {
            "id": "de3",
            "target": "deploy",
            "text": "Amazon ECS"
          },
          {
            "id": "de4",
            "target": "deploy",
            "text": "Amazon EKS"
          },
          {
            "id": "de5",
            "target": "deploy",
            "text": "Amazon EC2"
          },
          {
            "id": "mo1",
            "target": "monitor",
            "text": "SageMaker Model Monitor"
          },
          {
            "id": "mo2",
            "target": "monitor",
            "text": "Amazon CloudWatch"
          },
          {
            "id": "mo3",
            "target": "monitor",
            "text": "SageMaker Clarify"
          },
          {
            "id": "go1",
            "target": "governance",
            "text": "SageMaker Model Cards"
          },
          {
            "id": "go2",
            "target": "governance",
            "text": "SageMaker Model Registry"
          },
          {
            "id": "go3",
            "target": "governance",
            "text": "AWS CloudTrail"
          },
          {
            "id": "go4",
            "target": "governance",
            "text": "AWS Config"
          }
        ]
      },
      {
        "id": "rename",
        "title": "Rename",
        "order": 3,
        "mode": "slots",
        "intro": "The v1.1 example list changed noticeably, from SageMaker sub-features to this broader set: Amazon Bedrock, Amazon Q, Amazon Quick, Kiro and SageMaker AI. These five are the names most likely to be tested literally, and Amazon Quick specifically is the one the exam guide flags as worth learning by name.",
        "footnote": "<strong>Remember for the exam:</strong> Amazon Quick is the name to learn. Amazon QuickSight evolved into Amazon Quick Suite, adding agentic research, chat and automation on top of the familiar BI dashboards. The exam guide lists it simply as \"Amazon Quick\" under Analytics. If a stem mentions dashboards, natural-language questions over business data, or an agentic research assistant for business users, this is the service.",
        "slotTypes": [
          {
            "key": "stage",
            "label": "Pipeline stage(s)"
          },
          {
            "key": "does",
            "label": "What it does"
          }
        ],
        "concepts": [
          {
            "id": "bedrock",
            "name": "Amazon Bedrock",
            "stage": "Generative model access; Deployment",
            "does": "Managed multi-provider FM API — the way you access someone else's foundation model without hosting it yourself."
          },
          {
            "id": "amazonq",
            "name": "Amazon Q",
            "stage": "Developer tooling",
            "does": "AI assistant across AWS surfaces — the console, documentation, chat."
          },
          {
            "id": "quick",
            "name": "Amazon Quick",
            "stage": "Exploration and analysis",
            "does": "Evolved from Amazon QuickSight. BI dashboards plus natural-language analysis and agentic research over your data."
          },
          {
            "id": "kiro",
            "name": "Kiro",
            "stage": "Developer tooling",
            "does": "Spec-driven agentic IDE. Writes requirements and a design before it writes code."
          },
          {
            "id": "smai",
            "name": "SageMaker AI",
            "stage": "Training and tuning; Deployment",
            "does": "Trains custom models, and hosts them on real-time, serverless, asynchronous or batch endpoints."
          }
        ]
      },
      {
        "id": "family",
        "title": "Family",
        "order": 4,
        "mode": "buckets",
        "intro": "A fast final check on the same distinction the objective opens with. Is this a specific tool living inside the SageMaker AI platform, or is it a broader, standalone platform-level service — the kind of name that got added to the v1.1 example list?",
        "footnote": "<strong>The objective's own framing:</strong> \"the v1.1 example list changed noticeably, from SageMaker sub-features to a broader set.\" Both sets are worth knowing, and this round only tests whether you can tell which set a name belongs to.",
        "targets": [
          {
            "id": "subfeature",
            "name": "A SageMaker sub-capability",
            "sub": "A specific tool inside the SageMaker AI platform"
          },
          {
            "id": "platform",
            "name": "A broader platform-level service",
            "sub": "A named product in its own right"
          }
        ],
        "items": [
          {
            "id": "sf1",
            "target": "subfeature",
            "text": "SageMaker Feature Store"
          },
          {
            "id": "sf2",
            "target": "subfeature",
            "text": "SageMaker Ground Truth"
          },
          {
            "id": "sf3",
            "target": "subfeature",
            "text": "SageMaker Data Wrangler"
          },
          {
            "id": "sf4",
            "target": "subfeature",
            "text": "SageMaker Studio notebooks"
          },
          {
            "id": "sf5",
            "target": "subfeature",
            "text": "SageMaker JumpStart"
          },
          {
            "id": "sf6",
            "target": "subfeature",
            "text": "SageMaker Model Monitor"
          },
          {
            "id": "sf7",
            "target": "subfeature",
            "text": "SageMaker Clarify"
          },
          {
            "id": "sf8",
            "target": "subfeature",
            "text": "SageMaker Model Registry"
          },
          {
            "id": "sf9",
            "target": "subfeature",
            "text": "SageMaker Model Cards"
          },
          {
            "id": "pf1",
            "target": "platform",
            "text": "Amazon Bedrock"
          },
          {
            "id": "pf2",
            "target": "platform",
            "text": "Amazon Q"
          },
          {
            "id": "pf3",
            "target": "platform",
            "text": "Amazon Quick"
          },
          {
            "id": "pf4",
            "target": "platform",
            "text": "Kiro"
          },
          {
            "id": "pf5",
            "target": "platform",
            "text": "Amazon Bedrock AgentCore"
          },
          {
            "id": "pf6",
            "target": "platform",
            "text": "Strands Agents"
          },
          {
            "id": "pf7",
            "target": "platform",
            "text": "Amazon Bedrock Agents"
          }
        ]
      }
    ],
    "domain": 1,
    "taskStatement": "Task 1.3",
    "objectiveCodes": [
      "1.3.4"
    ],
    "title": "Pipeline Services Card Match",
    "shortDescription": "AWS services mapped to AI/ML pipeline stages, including v1.1 service-name changes.",
    "activityType": "Service selection, sorting, card matching",
    "estimatedTime": "15 min",
    "difficulty": "Intermediate",
    "order": 1304,
    "sourceFile": "pipeline-services-matching-game.html"
  },
  {
    "id": "domain1-metrics",
    "module": "hub-card-engine",
    "available": true,
    "rounds": [
      {
        "id": "model",
        "title": "Model",
        "order": 1,
        "mode": "slots",
        "intro": "Six metrics, each with a plain-language meaning, a formula and the situation that calls for it. You are never asked to calculate these on the exam, so the third column is the one that actually earns marks. Place the formulas quickly and spend your attention on 'choose it when'.",
        "footnote": "<strong>Memory hook:</strong> precision protects the innocent, recall catches the guilty. Precision is about not wrongly flagging things. Recall is about not letting things slip through. Read the scenario for which mistake hurts more, then choose.",
        "slotTypes": [
          {
            "key": "means",
            "label": "Plain-language meaning"
          },
          {
            "key": "formula",
            "label": "Formula"
          },
          {
            "key": "when",
            "label": "Choose it when…"
          }
        ],
        "concepts": [
          {
            "id": "acc",
            "name": "Accuracy",
            "means": "Of all predictions, how many were right?",
            "formula": "(TP + TN) / total",
            "when": "Classes are roughly balanced and all errors cost about the same."
          },
          {
            "id": "pre",
            "name": "Precision",
            "means": "Of the items we flagged as positive, how many really were?",
            "formula": "TP / (TP + FP)",
            "when": "A false positive is expensive: blocking a legitimate transaction, wrongly flagging a document."
          },
          {
            "id": "rec",
            "name": "Recall (sensitivity)",
            "means": "Of all the real positives, how many did we catch?",
            "formula": "TP / (TP + FN)",
            "when": "A false negative is expensive: a missed tumour, a missed fraud, a missed safety defect."
          },
          {
            "id": "f1",
            "name": "F1 score",
            "means": "The harmonic mean of precision and recall, in one number.",
            "formula": "2 × (P × R) / (P + R)",
            "when": "You need a single balanced figure, especially with imbalanced classes."
          },
          {
            "id": "auc",
            "name": "AUC-ROC",
            "means": "How well the model separates the classes across all thresholds.",
            "formula": "Area under the ROC curve",
            "when": "Comparing models independently of a chosen threshold."
          },
          {
            "id": "rms",
            "name": "RMSE / MAE",
            "means": "Average size of the numeric error.",
            "formula": "Root mean squared error / mean absolute error",
            "when": "Regression and forecasting problems."
          }
        ]
      },
      {
        "id": "business",
        "title": "Business",
        "order": 2,
        "mode": "slots",
        "intro": "The other family. These measure whether the system is worth operating rather than whether the model is statistically sound. The exam tests that you know they are a separate family, and that a model can score well on one while failing on the other.",
        "footnote": "<strong>Andes Retail, judged twice:</strong> the data science team reports an F1 of 0.81 on the churn model. The commercial team reports $340,000 in retained revenue against $95,000 of cost, an ROI of 258%. Both figures are correct, both are needed, and neither substitutes for the other.",
        "slotTypes": [
          {
            "key": "means",
            "label": "What it measures"
          },
          {
            "key": "use",
            "label": "Typical use"
          }
        ],
        "concepts": [
          {
            "id": "roi",
            "name": "Return on investment (ROI)",
            "means": "Net benefit relative to total cost of the initiative.",
            "use": "Justifying the project to a sponsor."
          },
          {
            "id": "cpu",
            "name": "Cost per user / per interaction",
            "means": "Total operating cost divided by usage.",
            "use": "Judging whether a GenAI assistant is economically viable at scale."
          },
          {
            "id": "dev",
            "name": "Development cost",
            "means": "One-off build cost: people, data, labelling, experimentation.",
            "use": "Comparing build against buy."
          },
          {
            "id": "fbk",
            "name": "Customer feedback",
            "means": "Satisfaction scores, thumbs up or down, complaint volume.",
            "use": "Detecting quality problems that offline metrics miss."
          },
          {
            "id": "cvr",
            "name": "Conversion rate / average revenue per user",
            "means": "Commercial effect of the model on behaviour.",
            "use": "Recommendation and personalisation systems."
          },
          {
            "id": "clv",
            "name": "Customer lifetime value",
            "means": "Long-run value of a customer relationship.",
            "use": "Justifying retention and personalisation investment."
          }
        ]
      },
      {
        "id": "scenario",
        "title": "Scenario",
        "order": 3,
        "mode": "buckets",
        "intro": "This is the round that resembles the actual exam. Each card is a scenario; drop it under the metric it calls for. Notice how rarely accuracy is the right answer, and notice that two scenarios can look similar while pointing in opposite directions.",
        "footnote": "<strong>The accuracy trap:</strong> if 0.2% of transactions are fraudulent, a model that predicts \"not fraud\" every single time is 99.8% accurate and completely useless. Whenever a stem mentions a rare event, imbalanced classes or a small positive class, accuracy is the wrong metric and is deliberately offered as a distractor.",
        "targets": [
          {
            "id": "acc",
            "name": "Accuracy",
            "sub": "Balanced classes, symmetric error cost"
          },
          {
            "id": "pre",
            "name": "Precision",
            "sub": "False positives are the expensive error"
          },
          {
            "id": "rec",
            "name": "Recall",
            "sub": "False negatives are the expensive error"
          },
          {
            "id": "f1",
            "name": "F1 score",
            "sub": "One balanced number, imbalanced classes"
          },
          {
            "id": "auc",
            "name": "AUC-ROC",
            "sub": "Comparing models across thresholds"
          },
          {
            "id": "rms",
            "name": "RMSE / MAE",
            "sub": "Numeric prediction"
          }
        ],
        "items": [
          {
            "id": "s1",
            "target": "rec",
            "text": "A hospital screens patients for a condition. Missing a genuinely ill patient is far more damaging than calling in a healthy one unnecessarily."
          },
          {
            "id": "s2",
            "target": "rec",
            "text": "A manufacturer must not let a safety-critical defect reach a customer, even if that means re-inspecting units that were fine."
          },
          {
            "id": "s3",
            "target": "pre",
            "text": "Blocking a legitimate customer payment causes complaints and lost sales. Letting a small amount of fraud through costs the bank less."
          },
          {
            "id": "s4",
            "target": "pre",
            "text": "A legal team flags documents for privileged review. Every wrongly flagged document consumes expensive lawyer hours."
          },
          {
            "id": "s5",
            "target": "f1",
            "text": "Classes are heavily imbalanced and leadership wants a single figure that balances both kinds of error."
          },
          {
            "id": "s6",
            "target": "auc",
            "text": "Two candidate models must be compared before anyone has decided what the decision threshold will be."
          },
          {
            "id": "s7",
            "target": "rms",
            "text": "Forecasting next quarter's weekly shipment volume for a logistics network."
          },
          {
            "id": "s8",
            "target": "rms",
            "text": "Predicting the expected repair cost of an insurance claim, in pesos."
          },
          {
            "id": "s9",
            "target": "acc",
            "text": "A roughly 50/50 dataset where a false positive and a false negative cost the business about the same."
          }
        ]
      },
      {
        "id": "family",
        "title": "Family",
        "order": 4,
        "mode": "buckets",
        "intro": "Twelve metrics, two families. This is a short round and the fastest way to check that you have not blurred the line. If it is measured against ground-truth labels it is a model metric; if it is measured in money, users or satisfaction it is a business metric.",
        "footnote": "<strong>Why this matters on the exam:</strong> questions frequently list metrics from both families in the same set of options. Knowing which family the question is asking about eliminates half the choices before you evaluate any of them.",
        "targets": [
          {
            "id": "model",
            "name": "Model performance metric",
            "sub": "Measured against ground-truth labels"
          },
          {
            "id": "business",
            "name": "Business metric",
            "sub": "Measured in money, users or satisfaction"
          }
        ],
        "items": [
          {
            "id": "f01",
            "target": "model",
            "text": "F1 score"
          },
          {
            "id": "f02",
            "target": "business",
            "text": "Return on investment (ROI)"
          },
          {
            "id": "f03",
            "target": "model",
            "text": "Recall"
          },
          {
            "id": "f04",
            "target": "business",
            "text": "Cost per interaction"
          },
          {
            "id": "f05",
            "target": "model",
            "text": "AUC-ROC"
          },
          {
            "id": "f06",
            "target": "business",
            "text": "Customer lifetime value"
          },
          {
            "id": "f07",
            "target": "model",
            "text": "RMSE"
          },
          {
            "id": "f08",
            "target": "business",
            "text": "Conversion rate"
          },
          {
            "id": "f09",
            "target": "model",
            "text": "Precision"
          },
          {
            "id": "f10",
            "target": "business",
            "text": "Development cost"
          },
          {
            "id": "f11",
            "target": "model",
            "text": "Accuracy"
          },
          {
            "id": "f12",
            "target": "business",
            "text": "Customer feedback"
          }
        ]
      }
    ],
    "domain": 1,
    "taskStatement": "Task 1.3",
    "objectiveCodes": [
      "1.3.6"
    ],
    "title": "Metrics Card Match",
    "shortDescription": "Model metrics, business metrics, the accuracy trap, and scenario-based metric selection.",
    "activityType": "Card matching and scenario sorting",
    "estimatedTime": "12 min",
    "difficulty": "Intermediate",
    "order": 1306,
    "sourceFile": "metrics-matching-game.html"
  },
  {
    "id": "domain2-genai-fundamentals",
    "module": "hub-card-engine",
    "available": true,
    "rounds": [
      {
        "id": "core",
        "title": "Core",
        "order": 1,
        "mode": "slots",
        "intro": "Ten terms from objective 2.1.1. These are the vocabulary layer for the rest of the domain — if any of these are shaky, everything built on top of them gets harder.",
        "footnote": "<strong>Transformer vs diffusion:</strong> transformers generate sequences token by token and dominate text. Diffusion models start from noise and denoise toward an image, and dominate image generation.",
        "slotTypes": [
          {
            "key": "def",
            "label": "Definition"
          }
        ],
        "concepts": [
          {
            "id": "token",
            "name": "Token",
            "def": "The unit a model actually processes. Text is split into tokens before anything else happens — whole words, fragments, or punctuation."
          },
          {
            "id": "chunking",
            "name": "Chunking",
            "def": "Splitting a long document into smaller passages before embedding them for retrieval."
          },
          {
            "id": "embedding",
            "name": "Embedding",
            "def": "A numerical vector representation of content in which semantically similar items land close together in the vector space."
          },
          {
            "id": "vector",
            "name": "Vector",
            "def": "The array of numbers itself — what an embedding actually is."
          },
          {
            "id": "vectordb",
            "name": "Vector database",
            "def": "A store that indexes embeddings so you can find the nearest neighbours to a query vector quickly."
          },
          {
            "id": "transformer",
            "name": "Transformer",
            "def": "The neural architecture behind essentially all modern LLMs, built on self-attention: weighing the relevance of every other token in the context."
          },
          {
            "id": "fm",
            "name": "Foundation model (FM)",
            "def": "A large model pre-trained on a broad, unlabelled corpus using self-supervised learning, adaptable to many downstream tasks."
          },
          {
            "id": "llm",
            "name": "Large language model (LLM)",
            "def": "A foundation model specialised to text, built on the transformer architecture. Every LLM is an FM; not every FM is an LLM."
          },
          {
            "id": "multimodal",
            "name": "Multi-modal model",
            "def": "Accepts or produces more than one modality — text plus image, video or audio."
          },
          {
            "id": "diffusion",
            "name": "Diffusion model",
            "def": "Generates images by starting from noise and iteratively removing it, guided by a prompt. The dominant architecture for image generation."
          }
        ]
      },
      {
        "id": "usecases",
        "title": "Usecases",
        "order": 2,
        "mode": "buckets",
        "intro": "The five C-and-F verbs from objective 2.1.2: Create, Condense, Converse, Convert, Find. Every generative AI use case in the exam guide falls into one of these five. Sort each example into its family.",
        "footnote": "<strong>Memory hook:</strong> if a scenario does not fit any of the five verbs, the task is probably not a generative AI task at all.",
        "targets": [
          {
            "id": "create",
            "name": "Create"
          },
          {
            "id": "condense",
            "name": "Condense"
          },
          {
            "id": "converse",
            "name": "Converse"
          },
          {
            "id": "convert",
            "name": "Convert"
          },
          {
            "id": "find",
            "name": "Find"
          }
        ],
        "items": [
          {
            "id": "c1",
            "target": "create",
            "text": "Marketing copy"
          },
          {
            "id": "c2",
            "target": "create",
            "text": "Image generation"
          },
          {
            "id": "c3",
            "target": "create",
            "text": "Code generation"
          },
          {
            "id": "n1",
            "target": "condense",
            "text": "Summarisation"
          },
          {
            "id": "n2",
            "target": "condense",
            "text": "Meeting notes"
          },
          {
            "id": "n3",
            "target": "condense",
            "text": "Extraction into structure"
          },
          {
            "id": "v1",
            "target": "converse",
            "text": "AI assistants"
          },
          {
            "id": "v2",
            "target": "converse",
            "text": "Customer service agents"
          },
          {
            "id": "v3",
            "target": "converse",
            "text": "Voice agents"
          },
          {
            "id": "t1",
            "target": "convert",
            "text": "Translation"
          },
          {
            "id": "t2",
            "target": "convert",
            "text": "Style and tone rewriting"
          },
          {
            "id": "t3",
            "target": "convert",
            "text": "Code migration"
          },
          {
            "id": "f1",
            "target": "find",
            "text": "Semantic search"
          },
          {
            "id": "f2",
            "target": "find",
            "text": "Knowledge bases"
          },
          {
            "id": "f3",
            "target": "find",
            "text": "Research assistants"
          }
        ]
      },
      {
        "id": "sequence",
        "title": "Sequence",
        "order": 3,
        "mode": "slots",
        "track": true,
        "intro": "Seven stages of the foundation model lifecycle, objective 2.1.3. No descriptions here — just put the stages back in order.",
        "footnote": "<strong>Remember for the exam:</strong> as an AI practitioner using Amazon Bedrock, you normally join this lifecycle at step 5 or 6 — the provider did steps 1 to 4. That is why using an FM is cheap while creating one is not.",
        "slotTypes": [
          {
            "key": "stage",
            "label": "Which stage goes here?"
          }
        ],
        "concepts": [
          {
            "id": "p1",
            "name": "Step",
            "stage": "Data selection"
          },
          {
            "id": "p2",
            "name": "Step",
            "stage": "Model selection"
          },
          {
            "id": "p3",
            "name": "Step",
            "stage": "Pre-training"
          },
          {
            "id": "p4",
            "name": "Step",
            "stage": "Fine-tuning"
          },
          {
            "id": "p5",
            "name": "Step",
            "stage": "Evaluation"
          },
          {
            "id": "p6",
            "name": "Step",
            "stage": "Deployment"
          },
          {
            "id": "p7",
            "name": "Step",
            "stage": "Feedback"
          }
        ]
      },
      {
        "id": "levers",
        "title": "Levers",
        "order": 4,
        "mode": "slots",
        "intro": "Eight cost levers from Table 2.1, objective 2.1.4. This is the highest-yield table in the whole domain for cost questions, which recur across Domains 2 and 3.",
        "footnote": "<strong>Common mistake:</strong> provisioned throughput is not a cost-saving measure by default. It buys guaranteed capacity, billed by the hour whether you use it or not. It only saves money at consistently high utilisation.",
        "slotTypes": [
          {
            "key": "reduces",
            "label": "How it reduces cost"
          },
          {
            "key": "when",
            "label": "When to use it"
          }
        ],
        "concepts": [
          {
            "id": "smaller",
            "name": "Choose a smaller model",
            "reduces": "Smaller models cost dramatically less per token.",
            "when": "Routine, well-bounded tasks: classification, extraction, short replies."
          },
          {
            "id": "shorten",
            "name": "Shorten the prompt",
            "reduces": "Fewer input tokens on every call.",
            "when": "Trim redundant instructions and retrieve fewer, better chunks."
          },
          {
            "id": "limit",
            "name": "Limit output length",
            "reduces": "Fewer, more expensive output tokens, and lower latency.",
            "when": "Set max tokens deliberately rather than leaving it high."
          },
          {
            "id": "caching",
            "name": "Prompt caching",
            "reduces": "Reuses a repeated prefix, charged at a reduced rate instead of full price on every call.",
            "when": "Long system prompts or a fixed document reused across many requests."
          },
          {
            "id": "batch",
            "name": "Batch inference",
            "reduces": "Asynchronous bulk processing at a substantial discount to on-demand.",
            "when": "Large offline jobs where latency does not matter."
          },
          {
            "id": "provisioned",
            "name": "Provisioned throughput",
            "reduces": "Reserved capacity billed by time rather than per token, with committed guaranteed throughput.",
            "when": "High, steady, predictable volume, or when a custom model requires it."
          },
          {
            "id": "distillation",
            "name": "Model distillation",
            "reduces": "Produces a smaller, faster, cheaper model that mimics a larger teacher on your task.",
            "when": "Very high volume on a narrow task where a frontier model is overkill."
          },
          {
            "id": "routing",
            "name": "Intelligent prompt routing",
            "reduces": "Routes simpler requests to a cheaper model and harder ones to a stronger model automatically.",
            "when": "Mixed workloads with a wide difficulty spread."
          }
        ]
      },
      {
        "id": "leverfit",
        "title": "Leverfit",
        "order": 5,
        "mode": "buckets",
        "intro": "Six levers, twelve scenarios drawn from the worked examples in objective 2.1.4. This is closer to how the exam actually asks cost questions — a situation, not a definition.",
        "footnote": "<strong>Andes Retail does the arithmetic:</strong> a 4,200-token system prompt sent with every one of 500,000 monthly requests is 2.1 billion input tokens spent re-sending the same text. Caching the fixed prefix and moving routine classification to a smaller model both cut cost without touching quality on the questions that need it.",
        "targets": [
          {
            "id": "caching",
            "name": "Prompt caching"
          },
          {
            "id": "batch",
            "name": "Batch inference"
          },
          {
            "id": "provisioned",
            "name": "Provisioned throughput"
          },
          {
            "id": "smaller",
            "name": "Smaller model"
          },
          {
            "id": "limit",
            "name": "Limit output length"
          },
          {
            "id": "routing",
            "name": "Intelligent prompt routing"
          }
        ],
        "items": [
          {
            "id": "s1",
            "target": "caching",
            "text": "A 4,200-token system prompt containing a policy document that never changes is sent with every one of 500,000 monthly requests."
          },
          {
            "id": "s2",
            "target": "caching",
            "text": "A long system prompt or fixed document is reused across many requests."
          },
          {
            "id": "s3",
            "target": "batch",
            "text": "80,000 delivery exception reports need summarising overnight; results are needed by 7 a.m. and nobody is waiting on an individual summary."
          },
          {
            "id": "s4",
            "target": "batch",
            "text": "A large offline job where latency does not matter, offered at a discount to on-demand rates."
          },
          {
            "id": "s5",
            "target": "provisioned",
            "text": "Traffic is steady, high and predictable, and the application requires guaranteed throughput."
          },
          {
            "id": "s6",
            "target": "provisioned",
            "text": "A custom model requires committed, reserved capacity."
          },
          {
            "id": "s7",
            "target": "smaller",
            "text": "3 million short support messages a month need classifying into 8 categories, and a small model already performs well."
          },
          {
            "id": "s8",
            "target": "smaller",
            "text": "A routine, well-bounded task: classification, extraction, or short replies."
          },
          {
            "id": "s9",
            "target": "limit",
            "text": "Responses are slow and expensive because the model keeps generating long answers."
          },
          {
            "id": "s10",
            "target": "limit",
            "text": "Setting max tokens deliberately, both as a cost control and a latency control."
          },
          {
            "id": "s11",
            "target": "routing",
            "text": "A mixed workload has a wide spread of difficulty, from trivial lookups to complex reasoning."
          },
          {
            "id": "s12",
            "target": "routing",
            "text": "Simple requests should go to a cheaper model automatically, harder ones to a stronger model."
          }
        ]
      },
      {
        "id": "context",
        "title": "Context",
        "order": 6,
        "mode": "slots",
        "intro": "Six things competing for space in a model's context window, objective 2.1.5. This is a new objective in v1.1 and the whole point is that the window is finite and every token in it is billed.",
        "footnote": "<strong>Common mistake:</strong> more context is not better context. Lumen Legal cut its retrieval from the top 20 chunks to the top 5 with re-ranking, and both prompt size and answer accuracy improved together.",
        "slotTypes": [
          {
            "key": "content",
            "label": "Typical content"
          },
          {
            "key": "decision",
            "label": "Engineering decision"
          }
        ],
        "concepts": [
          {
            "id": "system",
            "name": "System instructions",
            "content": "Role, tone, rules, output format, refusal policy.",
            "decision": "Keep stable and cache it; do not rewrite per request."
          },
          {
            "id": "retrieved",
            "name": "Retrieved context",
            "content": "Chunks pulled from a knowledge base by similarity.",
            "decision": "How many chunks, how large, re-ranked or not."
          },
          {
            "id": "history",
            "name": "Conversation history",
            "content": "Previous turns in a multi-turn session.",
            "decision": "Keep everything, keep the last N turns, or summarise older turns."
          },
          {
            "id": "tools",
            "name": "Tool definitions",
            "content": "Schemas describing the functions an agent may call.",
            "decision": "Expose only the tools relevant to the current task."
          },
          {
            "id": "fewshot",
            "name": "Few-shot examples",
            "content": "Demonstrations of the desired input-output behaviour.",
            "decision": "Enough to establish the pattern, no more."
          },
          {
            "id": "request",
            "name": "The user's actual request",
            "content": "The question being asked right now.",
            "decision": "Should never be crowded out by the above."
          }
        ]
      },
      {
        "id": "patterns",
        "title": "Patterns",
        "order": 7,
        "mode": "slots",
        "intro": "Five multi-agent patterns from Table 2.2, objective 2.1.6 — the densest objective in the guide. Learn how each works and what it's for.",
        "footnote": "<strong>Look for the coordinator:</strong> one agent above the others delegating to specialists means supervisor pattern. Peers handing off tasks with no fixed lead means swarm.",
        "slotTypes": [
          {
            "key": "works",
            "label": "How it works"
          },
          {
            "key": "best",
            "label": "Best for"
          }
        ],
        "concepts": [
          {
            "id": "single",
            "name": "Single agent",
            "works": "One agent with a set of tools handles the whole task.",
            "best": "Well-bounded tasks with a modest tool count."
          },
          {
            "id": "supervisor",
            "name": "Supervisor / orchestrator",
            "works": "A lead agent decomposes the goal and delegates sub-tasks to specialist agents, then assembles the result.",
            "best": "Complex tasks spanning several domains of expertise."
          },
          {
            "id": "astool",
            "name": "Agent as a tool",
            "works": "A specialist agent is exposed to another agent as if it were a callable tool.",
            "best": "Reusing a capable specialist without hard-wiring a hierarchy."
          },
          {
            "id": "swarm",
            "name": "Swarm / peer collaboration",
            "works": "Agents work as peers, handing tasks between themselves without a fixed supervisor.",
            "best": "Exploratory work where the right sequence is not known in advance."
          },
          {
            "id": "sequential",
            "name": "Sequential pipeline",
            "works": "Agents run in a fixed order, each consuming the previous output.",
            "best": "Deterministic, auditable workflows."
          }
        ]
      },
      {
        "id": "stack",
        "title": "Stack",
        "order": 8,
        "mode": "slots",
        "intro": "Five layers of the AWS agentic stack, Figure 2.5, objective 2.1.6. Learn which named component sits at which layer, from the application down to the model.",
        "footnote": "<strong>Common confusion:</strong> Strands Agents is the open-source SDK you build an agent with. AgentCore is the managed infrastructure you run it on in production. You build with Strands and run on AgentCore — complementary, not alternatives.",
        "slotTypes": [
          {
            "key": "component",
            "label": "Named component"
          },
          {
            "key": "does",
            "label": "What it does"
          }
        ],
        "concepts": [
          {
            "id": "appl",
            "name": "Application layer",
            "component": "The business application",
            "does": "Sets the goal and consumes the result."
          },
          {
            "id": "orch",
            "name": "Orchestration",
            "component": "Model-driven or workflow-driven",
            "does": "Decides which agent or step runs next, handles retries, enforces limits."
          },
          {
            "id": "framework",
            "name": "Agent framework",
            "component": "Strands Agents",
            "does": "Open-source SDK: define a model, a prompt and tools, and the SDK runs the agent loop."
          },
          {
            "id": "runtime",
            "name": "Agent runtime and infrastructure",
            "component": "Amazon Bedrock AgentCore",
            "does": "Runtime with session isolation, Memory, Gateway for MCP tools, Identity, Observability, Code Interpreter, Browser."
          },
          {
            "id": "model",
            "name": "Foundation model",
            "component": "Amazon Bedrock",
            "does": "The reasoning engine that plans, decides and generates."
          }
        ]
      },
      {
        "id": "memory",
        "title": "Memory",
        "order": 9,
        "mode": "buckets",
        "intro": "Two memory types, four statements. A short, sharp check on a distinction the exam likes to test with a single deciding word: session, or across sessions.",
        "footnote": "<strong>On AWS:</strong> Amazon Bedrock AgentCore Memory provides both managed short-term and long-term memory, so developers do not have to build persistence themselves.",
        "targets": [
          {
            "id": "short",
            "name": "Short-term (working) memory",
            "sub": "The session"
          },
          {
            "id": "long",
            "name": "Long-term memory",
            "sub": "Across sessions"
          }
        ],
        "items": [
          {
            "id": "m1",
            "target": "short",
            "text": "Held in the context window."
          },
          {
            "id": "m2",
            "target": "short",
            "text": "Lasts only for the current session."
          },
          {
            "id": "m3",
            "target": "long",
            "text": "Persisted outside the context window and retrieved when relevant."
          },
          {
            "id": "m4",
            "target": "long",
            "text": "Facts, preferences and past outcomes that survive across separate conversations, weeks apart."
          }
        ]
      },
      {
        "id": "advlim",
        "title": "Advlim",
        "order": 10,
        "mode": "buckets",
        "intro": "Five advantages, seven limitations, objectives 2.2.1 and 2.2.2. Sort each name into the list it belongs to — the exam sometimes swaps one from each list as a distractor.",
        "footnote": "<strong>Common mistake:</strong> hallucination is not a bug that can be patched away. On the exam the correct answers are always mitigations — grounding, validation, citation, human review — never “a model that does not hallucinate”.",
        "targets": [
          {
            "id": "adv",
            "name": "Advantage",
            "sub": "Objective 2.2.1"
          },
          {
            "id": "lim",
            "name": "Limitation",
            "sub": "Objective 2.2.2"
          }
        ],
        "items": [
          {
            "id": "a1",
            "target": "adv",
            "text": "Adaptability"
          },
          {
            "id": "a2",
            "target": "adv",
            "text": "Responsiveness"
          },
          {
            "id": "a3",
            "target": "adv",
            "text": "Conversational capability"
          },
          {
            "id": "a4",
            "target": "adv",
            "text": "Ability to generate content"
          },
          {
            "id": "a5",
            "target": "adv",
            "text": "Low barrier to entry"
          },
          {
            "id": "l1",
            "target": "lim",
            "text": "Hallucination"
          },
          {
            "id": "l2",
            "target": "lim",
            "text": "Interpretability"
          },
          {
            "id": "l3",
            "target": "lim",
            "text": "Inaccuracy"
          },
          {
            "id": "l4",
            "target": "lim",
            "text": "Nondeterminism"
          },
          {
            "id": "l5",
            "target": "lim",
            "text": "Cost at scale"
          },
          {
            "id": "l6",
            "target": "lim",
            "text": "Data currency"
          },
          {
            "id": "l7",
            "target": "lim",
            "text": "Bias and toxicity"
          }
        ]
      },
      {
        "id": "selection",
        "title": "Selection",
        "order": 11,
        "mode": "slots",
        "intro": "Nine factors for choosing a generative AI model, objective 2.2.3. The column that actually gets tested is where each factor bites — the concrete failure it causes.",
        "footnote": "<strong>Compliance is a hard filter:</strong> if a model cannot be used in a permitted Region, its quality is irrelevant. Apply compliance and modality first, then compare among the survivors.",
        "slotTypes": [
          {
            "key": "bites",
            "label": "Where it bites"
          }
        ],
        "concepts": [
          {
            "id": "modality",
            "name": "Model type and modality",
            "bites": "Image input rules out text-only models immediately."
          },
          {
            "id": "perf",
            "name": "Performance and capability",
            "bites": "Benchmarks help but your own evaluation set is what counts."
          },
          {
            "id": "cost",
            "name": "Cost",
            "bites": "A frontier model on a high-volume routine task is the classic overspend."
          },
          {
            "id": "latency",
            "name": "Latency",
            "bites": "Larger models are slower; interactive uses may need a smaller one."
          },
          {
            "id": "size",
            "name": "Model complexity and size",
            "bites": "Smaller means cheaper and faster, often with no quality loss on narrow tasks."
          },
          {
            "id": "constraints",
            "name": "Constraints",
            "bites": "A 200-page document needs a long context window or chunking."
          },
          {
            "id": "compliance",
            "name": "Compliance",
            "bites": "May eliminate otherwise ideal models outright."
          },
          {
            "id": "custom",
            "name": "Customisation",
            "bites": "Not every model on Bedrock supports every customisation path."
          },
          {
            "id": "multilingual",
            "name": "Multilingual",
            "bites": "English benchmark scores do not transfer automatically to Spanish."
          }
        ]
      },
      {
        "id": "bizmetrics",
        "title": "Bizmetrics",
        "order": 12,
        "mode": "slots",
        "intro": "Seven business value metrics, objective 2.2.4. These are the exact set named in the exam guide — learn the list, since they show up as answer options.",
        "footnote": "<strong>Model metrics answer “is this working?” Business metrics answer “is this worth doing?”</strong> Do not mix the two families.",
        "slotTypes": [
          {
            "key": "measures",
            "label": "What it measures"
          }
        ],
        "concepts": [
          {
            "id": "crossdomain",
            "name": "Cross-domain performance",
            "measures": "How well one model handles tasks across several business areas — the main argument for a shared FM platform."
          },
          {
            "id": "roi",
            "name": "Return on investment (ROI)",
            "measures": "Net benefit against total cost of the initiative."
          },
          {
            "id": "efficiency",
            "name": "Efficiency",
            "measures": "Time or effort saved per task, for example handling time in a contact centre."
          },
          {
            "id": "conversion",
            "name": "Conversion rate",
            "measures": "Proportion of interactions producing the desired commercial outcome."
          },
          {
            "id": "arpu",
            "name": "Average revenue per user",
            "measures": "Revenue effect of the AI feature per customer."
          },
          {
            "id": "accuracy",
            "name": "Accuracy",
            "measures": "How often the output is correct, judged against a business standard rather than a label set."
          },
          {
            "id": "clv",
            "name": "Customer lifetime value",
            "measures": "Long-run relationship value, used to justify retention and personalisation work."
          }
        ]
      },
      {
        "id": "layers",
        "title": "Layers",
        "order": 13,
        "mode": "slots",
        "intro": "Eight AWS services from Table 2.3, objective 2.3.1. Each sits at a different layer of the GenAI stack — the layer is often the fastest way to eliminate wrong answers.",
        "footnote": "<strong>Common mistake:</strong> naming has moved recently. Amazon QuickSight became Amazon Quick Suite, listed simply as “Amazon Quick” in the exam guide. Kiro is the stated successor to Amazon Q Developer for IDE-based assistance.",
        "slotTypes": [
          {
            "key": "layer",
            "label": "Layer"
          },
          {
            "key": "role",
            "label": "One-line role"
          }
        ],
        "concepts": [
          {
            "id": "bedrock",
            "name": "Amazon Bedrock",
            "layer": "Model access",
            "role": "Fully managed, serverless API to foundation models from multiple providers, plus Knowledge Bases, Guardrails, Agents, Flows, Prompt Management, Model Evaluation."
          },
          {
            "id": "smai",
            "name": "Amazon SageMaker AI",
            "layer": "ML platform",
            "role": "Build, train, tune, deploy and monitor custom models, with full control of instances and infrastructure."
          },
          {
            "id": "jumpstart",
            "name": "Amazon SageMaker JumpStart",
            "layer": "Model hub",
            "role": "Pre-trained and open-source models plus solution templates, deployable to your own SageMaker endpoints."
          },
          {
            "id": "agentcore",
            "name": "Amazon Bedrock AgentCore",
            "layer": "Agent infrastructure",
            "role": "Production runtime for agents: session isolation, Memory, Gateway, Identity, Observability, Code Interpreter and Browser."
          },
          {
            "id": "strands",
            "name": "Strands Agents",
            "layer": "Agent SDK",
            "role": "Open-source, model-driven SDK for building agents from a model, a prompt and a set of tools."
          },
          {
            "id": "kiro",
            "name": "Kiro",
            "layer": "Developer tooling",
            "role": "Spec-driven agentic IDE: generates requirements, design and task documents before writing code."
          },
          {
            "id": "amazonq",
            "name": "Amazon Q",
            "layer": "Assistant",
            "role": "AI assistant across AWS surfaces, including the console and documentation."
          },
          {
            "id": "quick",
            "name": "Amazon Quick",
            "layer": "Business intelligence and agentic workspace",
            "role": "Evolution of Amazon QuickSight: dashboards and BI plus agentic research, chat and workflow automation."
          }
        ]
      },
      {
        "id": "trigger",
        "title": "Trigger",
        "order": 14,
        "mode": "buckets",
        "intro": "The same eight services, this time matched to the phrase in a scenario that points to each one. This is the closest this domain gets to how the real exam presents a service-selection question.",
        "footnote": "<strong>Straight from Table 2.3:</strong> “choose it when the stem says…” — the exam guide frames service selection exactly this way.",
        "targets": [
          {
            "id": "bedrock",
            "name": "Amazon Bedrock"
          },
          {
            "id": "smai",
            "name": "Amazon SageMaker AI"
          },
          {
            "id": "jumpstart",
            "name": "Amazon SageMaker JumpStart"
          },
          {
            "id": "agentcore",
            "name": "Amazon Bedrock AgentCore"
          },
          {
            "id": "strands",
            "name": "Strands Agents"
          },
          {
            "id": "kiro",
            "name": "Kiro"
          },
          {
            "id": "amazonq",
            "name": "Amazon Q"
          },
          {
            "id": "quick",
            "name": "Amazon Quick"
          }
        ],
        "items": [
          {
            "id": "t1",
            "target": "bedrock",
            "text": "“we want to use a foundation model without managing infrastructure”"
          },
          {
            "id": "t2",
            "target": "smai",
            "text": "“we need to train our own model” or “we need full control of the endpoint”"
          },
          {
            "id": "t3",
            "target": "jumpstart",
            "text": "“we want an open-source model deployed into our own environment”"
          },
          {
            "id": "t4",
            "target": "agentcore",
            "text": "“we have a working agent prototype and need to run it securely in production”"
          },
          {
            "id": "t5",
            "target": "strands",
            "text": "“we want to build an agent in code with minimal boilerplate”"
          },
          {
            "id": "t6",
            "target": "kiro",
            "text": "“developers need an AI-assisted IDE that plans before it codes”"
          },
          {
            "id": "t7",
            "target": "amazonq",
            "text": "“help our staff query AWS or our business systems conversationally”"
          },
          {
            "id": "t8",
            "target": "quick",
            "text": "“business users need dashboards, natural-language analysis or automated research”"
          }
        ]
      },
      {
        "id": "whyaws",
        "title": "Whyaws",
        "order": 15,
        "mode": "slots",
        "intro": "Eleven reasons to build on AWS, combining the advantages of AWS GenAI services (2.3.2) and the infrastructure benefits (2.3.3). Different tables, same underlying question: what do you get for building here instead of elsewhere?",
        "footnote": "<strong>Remember for the exam:</strong> your prompts and completions are not used to train the underlying foundation models on Amazon Bedrock, and are not shared with model providers. This single fact is one of the most frequently examined in Domain 2 and Domain 5.",
        "slotTypes": [
          {
            "key": "gives",
            "label": "What it gives you"
          }
        ],
        "concepts": [
          {
            "id": "accessibility",
            "name": "Accessibility",
            "gives": "Multiple leading model providers behind one API and one set of credentials."
          },
          {
            "id": "barrier",
            "name": "Lower barrier to entry",
            "gives": "No GPU clusters to procure, no model to train, no ML PhD required."
          },
          {
            "id": "efficiency2",
            "name": "Efficiency",
            "gives": "Managed Knowledge Bases, Guardrails, Agents and evaluation replace components you would otherwise build."
          },
          {
            "id": "costeff",
            "name": "Cost-effectiveness",
            "gives": "Pay per token with no idle infrastructure, plus batch, caching and distillation as cost levers."
          },
          {
            "id": "speed",
            "name": "Speed to market",
            "gives": "A working prototype in hours instead of a training project in months."
          },
          {
            "id": "meeting",
            "name": "Meeting business objectives",
            "gives": "The same platform scales from experiment to production without re-platforming."
          },
          {
            "id": "security2",
            "name": "Security",
            "gives": "IAM for fine-grained access, AWS KMS for encryption with customer managed keys, AWS PrivateLink to keep traffic off the public internet."
          },
          {
            "id": "compliance2",
            "name": "Compliance",
            "gives": "AWS Artifact for compliance reports, AWS Audit Manager for evidence collection, AWS Config for configuration compliance, CloudTrail for an auditable API record."
          },
          {
            "id": "responsibility",
            "name": "Responsibility",
            "gives": "The AWS shared responsibility model sets a clear line between what AWS secures and what you secure."
          },
          {
            "id": "safety2",
            "name": "Safety",
            "gives": "Amazon Bedrock Guardrails apply content filters, denied topics, word filters, PII redaction and contextual grounding checks consistently across models."
          },
          {
            "id": "privacy",
            "name": "Data privacy",
            "gives": "Your prompts and completions are not used to train the underlying foundation models, and are not shared with model providers."
          }
        ]
      },
      {
        "id": "costtradeoffs",
        "title": "Costtradeoffs",
        "order": 16,
        "mode": "slots",
        "intro": "Seven cost tradeoffs from objective 2.3.4. Each is a genuine tension, not a free win — the guidance column is what the exam actually tests.",
        "footnote": "<strong>Ties back to 2.1.4:</strong> token-based pricing, provisioned throughput and custom-model cost all reappear here from the earlier cost-levers rounds. Same facts, framed as tradeoffs rather than levers.",
        "slotTypes": [
          {
            "key": "guidance",
            "label": "Guidance"
          }
        ],
        "concepts": [
          {
            "id": "respcost",
            "name": "Responsiveness vs cost",
            "guidance": "Match the model to the interaction. Interactive chat needs speed; nightly batch does not."
          },
          {
            "id": "availability",
            "name": "Availability and redundancy",
            "guidance": "Justify multi-Region deployment against an actual availability requirement."
          },
          {
            "id": "perfcost",
            "name": "Performance vs cost",
            "guidance": "Use the smallest model that clears your evaluation bar; consider intelligent prompt routing for mixed workloads."
          },
          {
            "id": "regional",
            "name": "Regional coverage",
            "guidance": "Check model availability early; it can eliminate a model outright."
          },
          {
            "id": "tokenpricing",
            "name": "Token-based pricing",
            "guidance": "Trim prompts, cap output, cache repeated prefixes."
          },
          {
            "id": "provisioned2",
            "name": "Provisioned throughput",
            "guidance": "Reserved capacity billed by time; predictable and guaranteed, but wasted when idle. Only at consistently high utilisation."
          },
          {
            "id": "custommodels",
            "name": "Custom models",
            "guidance": "Fine-tuning adds training cost plus ongoing storage and, often, provisioned hosting. Confirm that prompting and RAG genuinely cannot meet the requirement first."
          }
        ]
      }
    ],
    "domain": 2,
    "taskStatement": "Tasks 2.1-2.3",
    "objectiveCodes": [
      "2.1.1",
      "2.1.2",
      "2.1.3",
      "2.1.4",
      "2.1.5",
      "2.1.6",
      "2.2.1",
      "2.2.2",
      "2.2.3",
      "2.2.4",
      "2.3.1",
      "2.3.2",
      "2.3.3",
      "2.3.4"
    ],
    "title": "GenAI Fundamentals Card Match",
    "shortDescription": "Domain 2 vocabulary, use cases, lifecycle, context engineering, agents, AWS GenAI services, advantages, limitations, metrics, and cost tradeoffs.",
    "activityType": "Card matching, sorting, ordering",
    "estimatedTime": "35 min",
    "difficulty": "Intermediate",
    "order": 2101,
    "sourceFile": "genai-fundamentals-matching-game.html"
  }
];
})();
