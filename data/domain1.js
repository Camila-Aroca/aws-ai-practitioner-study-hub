(function(){
  "use strict";

  const domain1 = {
    id: "domain-1",
    title: "Domain 1: Fundamentals of AI and ML",
    tasks: [
      {
        id: "task-1-1",
        code: "Task 1.1",
        title: "AI concepts and terminology",
        objectives: ["1.1.1", "1.1.2", "1.1.3", "1.1.4", "1.1.5"]
      },
      {
        id: "task-1-2",
        code: "Task 1.2",
        title: "Practical AI use cases",
        objectives: ["1.2.1", "1.2.2", "1.2.3", "1.2.4", "1.2.5", "1.2.6"]
      }
    ],
    rounds: [
      {
        id: "d1-t11-vocab-1",
        taskId: "task-1-1",
        objective: "1.1.1",
        title: "Core AI Vocabulary, Part One",
        activity: "match",
        instructions: "Match each foundational term to the guide's definition or exam trap. Watch especially for the algorithm/model distinction.",
        sourceNote: "Guide §1.1.1: AI is the umbrella; ML learns from data; an algorithm is the learning procedure; a model is the trained artefact.",
        slotLabel: "Definition or distinguishing detail",
        destinations: [
          {id:"ai", label:"Artificial intelligence"},
          {id:"ml", label:"Machine learning"},
          {id:"dl", label:"Deep learning"},
          {id:"nn", label:"Neural network"},
          {id:"cv", label:"Computer vision"},
          {id:"nlp", label:"Natural language processing"},
          {id:"algorithm", label:"Algorithm"},
          {id:"model", label:"Model"}
        ],
        cards: [
          {id:"c-ai", text:"The broad field of systems that perform tasks normally requiring human intelligence.", answer:"ai", explanation:"AI includes ML, but also includes rules and expert systems that do not learn from data."},
          {id:"c-ml", text:"A subset of AI where systems learn patterns from data instead of following explicit rules.", answer:"ml", explanation:"The test is whether behavior came from data rather than a person-chosen rule."},
          {id:"c-dl", text:"ML that uses multi-layer neural networks to learn hierarchical representations, often from unstructured data.", answer:"dl", explanation:"Deep refers to layers, not to the business importance of the result."},
          {id:"c-nn", text:"A model architecture made of connected layers of nodes with weights adjusted during training.", answer:"nn", explanation:"A neural network is an architecture, not an AWS service."},
          {id:"c-cv", text:"The AI field concerned with extracting meaning from images and video.", answer:"cv", explanation:"Classifying an image is vision; generating a new image is generative AI."},
          {id:"c-nlp", text:"The AI field concerned with understanding and generating human language.", answer:"nlp", explanation:"The guide notes that NLP includes both understanding, such as Comprehend, and generation, such as an LLM."},
          {id:"c-algorithm", text:"The procedure used to learn a model from data, such as XGBoost, k-means, or gradient descent.", answer:"algorithm", explanation:"Algorithm equals the learning recipe; it produces the model."},
          {id:"c-model", text:"The trained artefact: learned parameters plus structure that maps input to output.", answer:"model", explanation:"The model is the result of training, not the process."}
        ]
      },
      {
        id: "d1-t11-vocab-2",
        taskId: "task-1-1",
        objective: "1.1.1",
        title: "Core AI Vocabulary, Part Two",
        activity: "match",
        instructions: "Place the training, inference, fairness, fit, and GenAI vocabulary cards. These terms are often swapped in distractors.",
        sourceNote: "Guide §1.1.1 and CYU 1.1: parameters are learned; hyperparameters are configured; agentic AI means goal + planning + tool use + action.",
        slotLabel: "Definition or deciding clue",
        destinations: [
          {id:"training", label:"Training"},
          {id:"inference", label:"Inference"},
          {id:"parameters", label:"Parameters"},
          {id:"hyperparameters", label:"Hyperparameters"},
          {id:"fit", label:"Fit"},
          {id:"bias", label:"Bias"},
          {id:"fairness", label:"Fairness"},
          {id:"llm", label:"Large language model"},
          {id:"genai", label:"Generative AI"},
          {id:"agentic", label:"Agentic AI"}
        ],
        cards: [
          {id:"c-training", text:"Adjusting a model's parameters with data so it performs a task well.", answer:"training", explanation:"The guide describes training as expensive, offline, and repeatable."},
          {id:"c-inference", text:"Using a trained model to produce output for new, unseen input.", answer:"inference", explanation:"Inference is the production activity you keep paying for."},
          {id:"c-parameters", text:"Values learned by the algorithm during training, such as weights or regression coefficients.", answer:"parameters", explanation:"CYU 1.1 contrasts these with learning rate, k, and layer count."},
          {id:"c-hyperparameters", text:"Settings chosen before training, such as learning rate, number of clusters, or number of layers.", answer:"hyperparameters", explanation:"If you can change it before seeing data, it is a hyperparameter."},
          {id:"c-fit", text:"How well the model captures the pattern: too simple underfits; memorising training noise overfits.", answer:"fit", explanation:"Good fit generalises to unseen data."},
          {id:"c-bias", text:"A systematic, unfair skew in outputs across groups, usually inherited from data.", answer:"bias", explanation:"This is the fairness sense of bias, separate from bias-variance."},
          {id:"c-fairness", text:"The property that a model does not produce systematically disadvantageous outcomes for groups.", answer:"fairness", explanation:"Fairness is the goal; bias detection is measurement."},
          {id:"c-llm", text:"A very large transformer-based model trained on text to predict and generate language.", answer:"llm", explanation:"All LLMs are foundation models; not all foundation models are LLMs."},
          {id:"c-genai", text:"AI that produces new content: text, image, audio, video, or code.", answer:"genai", explanation:"The output type is the giveaway: new content means generative."},
          {id:"c-agentic", text:"A model-driven system that plans, calls tools, and takes multi-step actions toward a goal.", answer:"agentic", explanation:"A one-question-at-a-time chatbot is not agentic unless it plans, uses tools, keeps state, and acts."}
        ]
      },
      {
        id: "d1-t11-hierarchy",
        taskId: "task-1-1",
        objective: "1.1.2",
        title: "The AI Hierarchy",
        activity: "order",
        instructions: "Place the five layers from broadest to narrowest. Each step adds one requirement.",
        sourceNote: "Guide §1.1.2: AI contains ML contains deep learning contains GenAI contains agentic AI.",
        destinations: [
          {id:"pos-1", label:"1. Broadest"},
          {id:"pos-2", label:"2. Learns from data"},
          {id:"pos-3", label:"3. Adds multi-layer neural networks"},
          {id:"pos-4", label:"4. Adds new content generation"},
          {id:"pos-5", label:"5. Adds autonomous multi-step action"}
        ],
        cards: [
          {id:"c-h-ai", text:"Artificial intelligence", answer:"pos-1", explanation:"Includes any system doing tasks normally requiring human intelligence, even hand-written rules."},
          {id:"c-h-ml", text:"Machine learning", answer:"pos-2", explanation:"Narrows AI to systems that learn patterns from data."},
          {id:"c-h-dl", text:"Deep learning", answer:"pos-3", explanation:"Narrows ML to multi-layer neural networks."},
          {id:"c-h-genai", text:"Generative AI", answer:"pos-4", explanation:"Built on deep learning architectures that generate content."},
          {id:"c-h-agentic", text:"Agentic AI", answer:"pos-5", explanation:"Adds goals, memory, tools, planning, and autonomous action."}
        ]
      },
      {
        id: "d1-t11-inference",
        taskId: "task-1-1",
        objective: "1.1.3",
        title: "Inference Types",
        activity: "match",
        instructions: "Each type gets two cards: one definition and one scenario clue. Use latency, payload size, and traffic pattern.",
        sourceNote: "Guide §1.1.3 and CYU 1.2: real-time = now, batch = bulk on a schedule, asynchronous = large/slow individual requests, serverless = spiky and idle.",
        slotTypes: [
          {key:"definition", label:"How it works"},
          {key:"scenario", label:"Best scenario"}
        ],
        destinations: [
          {id:"real-time", label:"Real-time inference"},
          {id:"batch", label:"Batch inference"},
          {id:"async", label:"Asynchronous inference"},
          {id:"serverless", label:"Serverless inference"}
        ],
        cards: [
          {id:"c-rt-def", text:"A persistent endpoint returns a prediction synchronously per request.", answer:"real-time|definition", explanation:"Best when an interactive app needs an immediate response."},
          {id:"c-rt-scn", text:"Fraud checks at checkout or live recommendations as a customer clicks.", answer:"real-time|scenario", explanation:"Deciding words include immediate, live, sub-second, or as the user clicks."},
          {id:"c-batch-def", text:"A job scores a whole dataset at once and writes results to storage.", answer:"batch|definition", explanation:"No endpoint needs to run between jobs."},
          {id:"c-batch-scn", text:"Score all customers weekly and store the results for morning review.", answer:"batch|scenario", explanation:"Whole dataset plus schedule is the batch fingerprint."},
          {id:"c-async-def", text:"Requests are queued; callers collect results later from a result location.", answer:"async|definition", explanation:"This handles individual requests that are too large or slow for synchronous use."},
          {id:"c-async-scn", text:"A clinician uploads a long diagnostic video and returns later for results.", answer:"async|scenario", explanation:"Large payload plus long processing plus user does not wait means asynchronous."},
          {id:"c-serverless-def", text:"A managed endpoint scales to zero between requests and starts on demand.", answer:"serverless|definition", explanation:"There can be a cold start, but idle capacity cost is avoided."},
          {id:"c-serverless-scn", text:"An internal tool has days with no traffic but needs fast responses when used.", answer:"serverless|scenario", explanation:"Intermittent traffic and not paying while idle point to serverless."}
        ]
      },
      {
        id: "d1-t11-data-types",
        taskId: "task-1-1",
        objective: "1.1.4",
        title: "Types of Data",
        activity: "match",
        instructions: "Match each data category. Remember: labelled/unlabelled is independent from structured/unstructured.",
        sourceNote: "Guide §1.1.4: a labelled folder of photos is both unstructured and labelled; a database table with no target is structured and unlabelled. Semi-structured JSON/XML is legitimate where it appears.",
        slotLabel: "Meaning or example",
        destinations: [
          {id:"labelled", label:"Labelled"},
          {id:"unlabelled", label:"Unlabelled"},
          {id:"structured", label:"Structured"},
          {id:"semi", label:"Semi-structured"},
          {id:"unstructured", label:"Unstructured"},
          {id:"tabular", label:"Tabular"},
          {id:"time-series", label:"Time-series"},
          {id:"image", label:"Image"},
          {id:"text", label:"Text"},
          {id:"audio", label:"Audio"}
        ],
        cards: [
          {id:"c-labelled", text:"Each record carries the correct answer, such as fraud or not fraud.", answer:"labelled", explanation:"Labels are targets, independent of whether the data itself is structured."},
          {id:"c-unlabelled", text:"Records have no target value attached.", answer:"unlabelled", explanation:"Raw clickstream with no outcome is one guide example."},
          {id:"c-structured", text:"Fixed schema, typically rows and columns, such as transactions in a relational table.", answer:"structured", explanation:"CSV and relational tables are structured."},
          {id:"c-semi", text:"JSON or XML: keys or tags give organization, but not a fixed relational schema.", answer:"semi", explanation:"The guide calls semi-structured the fifth answer that may appear as an option."},
          {id:"c-unstructured", text:"No predefined schema: free text, images, audio, video, or scanned contracts.", answer:"unstructured", explanation:"Ask whether it can be queried as-is with SQL; if not, it is likely unstructured."},
          {id:"c-tabular", text:"Rows and columns, the classic input shape for traditional ML.", answer:"tabular", explanation:"Examples include age, income, tenure, or claim counts."},
          {id:"c-time", text:"Values indexed by time where order and seasonality matter.", answer:"time-series", explanation:"Volta Logistics weekly shipment volume is the guide example."},
          {id:"c-image", text:"Pixel data, usually handled by deep learning.", answer:"image", explanation:"Andes Retail product photography is an example."},
          {id:"c-text", text:"Natural language handled by NLP or LLMs.", answer:"text", explanation:"Salud Norte clinical notes are a text-data example."},
          {id:"c-audio", text:"Waveform or recorded speech that may need transcription before text analysis.", answer:"audio", explanation:"The applications section treats call recordings and dictations as speech/audio workloads."}
        ]
      },
      {
        id: "d1-t11-learning",
        taskId: "task-1-1",
        objective: "1.1.5",
        title: "Learning Paradigms",
        activity: "match",
        instructions: "Match each learning type to its data requirement and output pattern.",
        sourceNote: "Guide §1.1.5: labels imply supervised; no labels imply unsupervised; few labels plus many unlabelled records imply semi-supervised; labels generated from raw data imply self-supervised; reward signal implies reinforcement.",
        slotTypes: [
          {key:"data", label:"Data it needs"},
          {key:"example", label:"Output or example"}
        ],
        destinations: [
          {id:"supervised", label:"Supervised learning"},
          {id:"unsupervised", label:"Unsupervised learning"},
          {id:"semi-supervised", label:"Semi-supervised learning"},
          {id:"self-supervised", label:"Self-supervised learning"},
          {id:"reinforcement", label:"Reinforcement learning"}
        ],
        cards: [
          {id:"c-supervised-data", text:"Labelled data with a known target.", answer:"supervised|data", explanation:"Classification and regression are canonical supervised tasks."},
          {id:"c-supervised-example", text:"Predict fraud/not fraud or a continuous number from examples.", answer:"supervised|example", explanation:"Category means classification; number means regression."},
          {id:"c-unsupervised-data", text:"Unlabelled data.", answer:"unsupervised|data", explanation:"The model discovers structure rather than learning a known target."},
          {id:"c-unsupervised-example", text:"Find clusters, reduce dimensions, or flag anomalies.", answer:"unsupervised|example", explanation:"Customer segmentation without predefined groups is clustering."},
          {id:"c-semi-data", text:"A small labelled set plus a large unlabelled set.", answer:"semi-supervised|data", explanation:"This is useful when labelling is expensive."},
          {id:"c-semi-example", text:"Salud Norte has hundreds of labelled scans and tens of thousands unlabelled.", answer:"semi-supervised|example", explanation:"The labelled examples anchor the task while unlabelled data adds signal."},
          {id:"c-self-data", text:"Unlabelled data where labels are generated from the data itself.", answer:"self-supervised|data", explanation:"Foundation model pre-training commonly uses this pattern."},
          {id:"c-self-example", text:"An LLM learns by predicting the next token in raw text.", answer:"self-supervised|example", explanation:"The raw sequence supplies the training signal."},
          {id:"c-rl-data", text:"An environment, possible actions, and a reward signal.", answer:"reinforcement|data", explanation:"There is no fixed labelled dataset in the usual sense."},
          {id:"c-rl-example", text:"Volta Logistics optimises routing decisions through trial and reward.", answer:"reinforcement|example", explanation:"The output is a policy that maximises cumulative reward."}
        ]
      },
      {
        id: "d1-t12-value",
        taskId: "task-1-2",
        objective: "1.2.1",
        title: "Where AI Creates Value",
        activity: "match",
        instructions: "Match each value pattern to its practical clue. Assistance, scale, and automation are separate.",
        sourceNote: "Guide §1.2.1: named value patterns include assisting human decision making, achieving scale, automating work, personalisation, and pattern discovery.",
        slotLabel: "Example or deciding clue",
        destinations: [
          {id:"assist", label:"Assisting human decisions"},
          {id:"scale", label:"Scalability"},
          {id:"automation", label:"Automation"},
          {id:"personalization", label:"Personalisation"},
          {id:"patterns", label:"Pattern discovery"}
        ],
        cards: [
          {id:"c-assist", text:"Cordillera Bank ranks the riskiest transactions, but analysts make the final decision.", answer:"assist", explanation:"If the human still decides, the model is assisting rather than automating."},
          {id:"c-scale", text:"Andes Retail tags 200,000 product photos, a volume a small team cannot handle manually.", answer:"scale", explanation:"The task is human-doable but not at the required volume."},
          {id:"c-automation", text:"Inbound support emails are routed end to end to the right queue.", answer:"automation", explanation:"A repetitive, bounded task is performed without a person."},
          {id:"c-personalization", text:"Each shopper receives a different homepage ranking.", answer:"personalization", explanation:"The output is individually relevant per user."},
          {id:"c-patterns", text:"The system finds behavior groups nobody defined in advance.", answer:"patterns", explanation:"Pattern discovery finds structure too large or high-dimensional for manual inspection."}
        ]
      },
      {
        id: "d1-t12-no-ai",
        taskId: "task-1-2",
        objective: "1.2.2",
        title: "When Not To Use AI",
        activity: "match",
        instructions: "Match each warning sign to the better non-ML recommendation or constraint. Some exam answers really are 'do not use ML.'",
        sourceNote: "Guide §1.2.2 and CYU 1.3: exact deterministic answers and failed cost-benefit are the two official triggers; no meaningful data, known formulas, and hard transparency constraints reinforce the same judgment.",
        slotLabel: "Why ML is wrong or what to use instead",
        destinations: [
          {id:"exact", label:"Deterministic answer required"},
          {id:"formula", label:"Exact formula exists"},
          {id:"no-data", label:"No meaningful historical data"},
          {id:"cost", label:"Cost-benefit fails"},
          {id:"transparent", label:"Full transparency required"}
        ],
        cards: [
          {id:"c-exact", text:"Predictions have uncertainty; write deterministic business rules when the answer must be guaranteed.", answer:"exact", explanation:"Words like exact, guaranteed, and precise figure point away from ML."},
          {id:"c-formula", text:"Implement the published calculation instead of learning an approximation.", answer:"formula", explanation:"Cordillera Bank loan repayment or statutory withholding is code, not a model."},
          {id:"c-no-data", text:"Instrument the process first and revisit modelling after enough history exists.", answer:"no-data", explanation:"No historical examples means there is nothing reliable to learn from."},
          {id:"c-cost", text:"Use a manual process or simple rules engine for low-value or low-volume work.", answer:"cost", explanation:"Data collection, labelling, training, monitoring, and retraining all cost money."},
          {id:"c-transparent", text:"Use an interpretable model or keep a human decision-maker if a black box cannot be defended.", answer:"transparent", explanation:"A high-accuracy model can still be unusable for regulated decisions."}
        ]
      },
      {
        id: "d1-t12-technique",
        taskId: "task-1-2",
        objective: "1.2.3",
        title: "Choose The ML Technique",
        activity: "match",
        instructions: "Read the output the business wants. Category, number, group, future series, ranked list, or outlier usually decides the technique.",
        sourceNote: "Guide §1.2.3 and CYU 1.4: regression outputs a value from record features; forecasting outputs future values of a time series. Classification uses predefined labels; clustering discovers groups.",
        slotLabel: "Scenario clue",
        destinations: [
          {id:"classification", label:"Classification"},
          {id:"regression", label:"Regression"},
          {id:"clustering", label:"Clustering"},
          {id:"dimensionality", label:"Dimensionality reduction"},
          {id:"forecasting", label:"Forecasting"},
          {id:"recommendation", label:"Recommendation"},
          {id:"anomaly", label:"Anomaly detection"}
        ],
        cards: [
          {id:"c-classification", text:"Will this customer churn in the next 90 days: yes or no?", answer:"classification", explanation:"A discrete category with labels is classification."},
          {id:"c-regression", text:"What will this repair cost?", answer:"regression", explanation:"A continuous numeric value from record features is regression."},
          {id:"c-clustering", text:"Which natural groups exist in our users when no segments are predefined?", answer:"clustering", explanation:"No predefined categories means clustering, not classification."},
          {id:"c-dim", text:"Compress 400 features to 20 while keeping most of the signal.", answer:"dimensionality", explanation:"Dimensionality reduction creates a lower-dimensional representation."},
          {id:"c-forecasting", text:"Project weekly shipment volume for the next quarter using four years of seasonal history.", answer:"forecasting", explanation:"Time order plus horizon plus seasonality means forecasting."},
          {id:"c-recommendation", text:"What should Andes Retail show this shopper next?", answer:"recommendation", explanation:"A per-user ranked list is recommendation."},
          {id:"c-anomaly", text:"Which sensor readings look nothing like normal operation?", answer:"anomaly", explanation:"Outliers or records that do not fit normal patterns are anomaly detection."}
        ]
      },
      {
        id: "d1-t12-applications",
        taskId: "task-1-2",
        objective: "1.2.4",
        title: "Real-World AI Applications",
        activity: "match",
        instructions: "Match each use case to the application category. Start with modality: pixels, words, audio, time series, documents, or action.",
        sourceNote: "Guide §1.2.4: v1.1 added knowledge bases and agentic AI. Answers from internal documents with citations is the knowledge-base/RAG pattern.",
        slotLabel: "Use case",
        destinations: [
          {id:"vision", label:"Computer vision"},
          {id:"nlp-app", label:"NLP"},
          {id:"speech", label:"Speech recognition"},
          {id:"recommend", label:"Recommendation"},
          {id:"fraud", label:"Fraud detection"},
          {id:"forecast", label:"Forecasting"},
          {id:"knowledge", label:"Knowledge bases"},
          {id:"agentic-app", label:"Agentic AI"}
        ],
        cards: [
          {id:"c-vision-app", text:"Detect damaged packaging from warehouse camera frames.", answer:"vision", explanation:"Pixels or video frames point to computer vision."},
          {id:"c-nlp-app", text:"Determine whether customer review text is positive or negative.", answer:"nlp-app", explanation:"Sentiment on text is NLP."},
          {id:"c-speech-app", text:"Turn recorded support calls into searchable text.", answer:"speech", explanation:"Audio to text is speech recognition/transcription."},
          {id:"c-recommend-app", text:"Rank products differently for each Andes Retail shopper.", answer:"recommend", explanation:"Personalised item ranking is recommendation."},
          {id:"c-fraud-app", text:"Score transactions for likely fraud so analysts can review the riskiest ones.", answer:"fraud", explanation:"Fraud scoring is a prediction application."},
          {id:"c-forecast-app", text:"Predict shipment volume for future weeks from historical volumes.", answer:"forecast", explanation:"Future values of a time-series mean forecasting."},
          {id:"c-knowledge-app", text:"Lumen Legal answers questions from its own case files with citations.", answer:"knowledge", explanation:"Internal documents plus grounded answers and citations is the knowledge-base pattern."},
          {id:"c-agentic-app", text:"A system resolves a delayed shipment by querying APIs, drafting an offer, applying it under a threshold, and escalating exceptions.", answer:"agentic-app", explanation:"Goal, planning, tool calls, state, and autonomous action are agentic."}
        ]
      },
      {
        id: "d1-t12-aws-language-speech",
        taskId: "task-1-2",
        objective: "1.2.5",
        title: "AWS Language And Speech Services",
        activity: "match",
        instructions: "Match each managed AWS AI service to its capability and trigger words.",
        sourceNote: "Guide §1.2.5 and CYU 1.5: Transcribe is audio to text; Polly is text to audio; Lex is the conversational interface with intents and slots.",
        slotTypes: [
          {key:"capability", label:"Capability"},
          {key:"trigger", label:"Trigger words"}
        ],
        destinations: [
          {id:"comprehend", label:"Amazon Comprehend"},
          {id:"transcribe", label:"Amazon Transcribe"},
          {id:"polly", label:"Amazon Polly"},
          {id:"translate", label:"Amazon Translate"},
          {id:"lex", label:"Amazon Lex"}
        ],
        cards: [
          {id:"c-comprehend-cap", text:"NLP over text: sentiment, entities, key phrases, language, topic modelling, and PII detection.", answer:"comprehend|capability", explanation:"Comprehend analyzes text that already exists."},
          {id:"c-comprehend-trg", text:"Sentiment, extract entities, detect PII in text, classify documents by topic.", answer:"comprehend|trigger", explanation:"A common pipeline is Textract first, then Comprehend."},
          {id:"c-transcribe-cap", text:"Speech to text, including speaker identification and custom vocabulary.", answer:"transcribe|capability", explanation:"Clinical dictation to searchable text points here."},
          {id:"c-transcribe-trg", text:"Convert audio to text, call recordings, captions.", answer:"transcribe|trigger", explanation:"Audio in, text out."},
          {id:"c-polly-cap", text:"Text to lifelike speech.", answer:"polly|capability", explanation:"Polly is the reverse of Transcribe."},
          {id:"c-polly-trg", text:"Read this aloud, voice response, audio version.", answer:"polly|trigger", explanation:"Text in, audio out."},
          {id:"c-translate-cap", text:"Neural machine translation between languages.", answer:"translate|capability", explanation:"Translate changes language, not modality."},
          {id:"c-translate-trg", text:"Translate, multilingual content.", answer:"translate|trigger", explanation:"Language-to-language conversion is the clue."},
          {id:"c-lex-cap", text:"Conversational interfaces: chatbots and voice bots with intents and slots.", answer:"lex|capability", explanation:"Lex can be the core of a voice assistant and uses Polly for spoken responses."},
          {id:"c-lex-trg", text:"Chatbot, IVR, collect booking details in conversation.", answer:"lex|trigger", explanation:"Conversation and slot collection distinguish Lex from standalone speech services."}
        ]
      },
      {
        id: "d1-t12-aws-vision-docs",
        taskId: "task-1-2",
        objective: "1.2.5",
        title: "AWS Vision, Documents, Search, And Recommendations",
        activity: "match",
        instructions: "Match the service to its capability and scenario. Pay attention to Textract versus Rekognition and Kendra versus a generative knowledge-base use case.",
        sourceNote: "Guide §1.2.5: Rekognition detects visual content and text in images; Textract understands document structure; Kendra is enterprise search; SageMaker AI is for building your own custom ML.",
        slotTypes: [
          {key:"capability", label:"Capability"},
          {key:"scenario", label:"Scenario"}
        ],
        destinations: [
          {id:"rekognition", label:"Amazon Rekognition"},
          {id:"textract", label:"Amazon Textract"},
          {id:"personalize", label:"Amazon Personalize"},
          {id:"kendra", label:"Amazon Kendra"},
          {id:"sagemaker", label:"Amazon SageMaker AI"}
        ],
        cards: [
          {id:"c-rekognition-cap", text:"Image and video analysis: objects, scenes, faces, text in images, and moderation.", answer:"rekognition|capability", explanation:"Text in a photo frame is Rekognition; structured document extraction is Textract."},
          {id:"c-rekognition-scn", text:"Moderate uploaded user photos or detect objects in product images.", answer:"rekognition|scenario", explanation:"Images and video are the deciding modality."},
          {id:"c-textract-cap", text:"Extract text, forms, tables, key-value pairs, handwriting, and layout from scanned documents.", answer:"textract|capability", explanation:"Forms, tables, fields, and invoices are Textract clues."},
          {id:"c-textract-scn", text:"Pull declared-income tables from scanned loan application forms.", answer:"textract|scenario", explanation:"The guide's CYU example uses scanned loan forms and tables."},
          {id:"c-personalize-cap", text:"Real-time personalised recommendations from user interaction data.", answer:"personalize|capability", explanation:"Personalize is not a general chatbot or summarizer."},
          {id:"c-personalize-scn", text:"Recommend products or create personalised ranking for each shopper.", answer:"personalize|scenario", explanation:"Users who bought, recommended items, and personalised ranking point here."},
          {id:"c-kendra-cap", text:"Intelligent enterprise search over documents with natural-language queries.", answer:"kendra|capability", explanation:"Kendra returns ranked documents and answers across repositories."},
          {id:"c-kendra-scn", text:"Search across SharePoint, Amazon S3, and Confluence for internal answers.", answer:"kendra|scenario", explanation:"Use Kendra when the scenario centers on enterprise search across repositories."},
          {id:"c-sagemaker-cap", text:"The platform for building, training, tuning, deploying, and monitoring custom ML models.", answer:"sagemaker|capability", explanation:"Use Amazon SageMaker AI when you train your own model or use a custom algorithm."},
          {id:"c-sagemaker-scn", text:"We have labelled data and need to train our own custom model.", answer:"sagemaker|scenario", explanation:"The guide uses Amazon SageMaker AI, not the older shorthand."}
        ]
      },
      {
        id: "d1-t12-traditional-vs-fm",
        taskId: "task-1-2",
        objective: "1.2.6",
        title: "Traditional ML Or Foundation Model",
        activity: "sort",
        instructions: "Sort each scenario or constraint into the better fit. Neither side is always better; the guide asks for the constraint that chooses.",
        sourceNote: "Guide §1.2.6: traditional ML wins for tabular labelled data, scores/classes/forecasts, explainability, regulation, predictable latency/cost, and determinism. Foundation models win for unstructured/open-ended tasks, generated content, little labelled data, assistive output, and acceptable token cost/latency.",
        destinations: [
          {id:"traditional", label:"Traditional ML model"},
          {id:"foundation", label:"Foundation model"}
        ],
        cards: [
          {id:"c-trad-tabular", text:"Tabular data with a well-defined target class or number.", answer:"traditional", explanation:"Traditional ML is strong for tabular supervised problems."},
          {id:"c-trad-credit", text:"Cordillera Bank must give feature-level reasons for declined credit applications.", answer:"traditional", explanation:"Regulated individual decisions with legal explanation requirements belong to interpretable traditional ML."},
          {id:"c-trad-latency", text:"Low, predictable latency and cost per prediction are binding constraints.", answer:"traditional", explanation:"Small traditional models can be cheaper and more predictable to serve."},
          {id:"c-trad-labels", text:"The team has many years of labelled historical outcomes.", answer:"traditional", explanation:"Abundant labelled data supports supervised training."},
          {id:"c-trad-determinism", text:"The same input should produce the same output every time.", answer:"traditional", explanation:"The guide lists determinism as a factor favoring traditional ML."},
          {id:"c-fm-unstructured", text:"The input is long unstructured text, images, audio, or video.", answer:"foundation", explanation:"Foundation models are useful for unstructured and open-ended tasks."},
          {id:"c-fm-summary", text:"Summarise 200-page regulatory circulars into advisory briefings.", answer:"foundation", explanation:"The guide's Cordillera Bank example uses a foundation model for advisory summarisation."},
          {id:"c-fm-no-labels", text:"No labelled training data exists, but zero-shot or few-shot capability is useful now.", answer:"foundation", explanation:"Foundation models can be useful immediately without a task-specific labelled dataset."},
          {id:"c-fm-conversation", text:"The output is generated content, reasoning over text, or a conversational interface.", answer:"foundation", explanation:"Generated prose and conversation are foundation model strengths."},
          {id:"c-fm-cost", text:"Token-based cost and higher latency are acceptable for the capability gained.", answer:"foundation", explanation:"Operational constraints can still allow an FM when capability matters more."}
        ]
      }
    ]
  };

  window.STUDY_DATA = window.STUDY_DATA || {domains: []};
  window.STUDY_DATA.domains.push(domain1);
})();
