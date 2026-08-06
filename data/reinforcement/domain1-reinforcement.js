(function(){
  "use strict";

  function item(id, objective, type, stem, options, correctAnswers, explanation, decidingClue, closestDistractor, whyClosestDistractorIsWrong, linkUnitId){
    return {
      id,
      task: objective.split(".").slice(0,2).join("."),
      objective,
      type,
      stem,
      options: options.map(function(text, index){ return {id:String.fromCharCode(97 + index), text:text}; }),
      correctAnswers,
      explanation,
      decidingClue,
      closestDistractor,
      whyClosestDistractorIsWrong,
      sourceReference: "Derived from missed exam concept",
      linkUnitId: linkUnitId || null
    };
  }

  const inferenceReview = {
    summary: "Choose the mode from the shape of the request, not from the word \"large\" alone. Whole dataset on a schedule is batch. One large or slow arriving request is asynchronous. One immediate interactive request is real-time. Immediate interactive traffic with long idle periods is serverless.",
    table: [
      ["Real-time inference", "One arriving request needs an immediate answer", "interactive, checkout, sub-second, while the user waits"],
      ["Batch inference or Batch Transform", "A whole dataset is processed together, often on a schedule", "every night, once per month, millions of records, report by morning"],
      ["Asynchronous inference", "Individual requests are queued because payloads are large or processing is slow", "large file, up to 1 GB, one hour, user returns later"],
      ["Serverless inference", "Interactive response is needed, but traffic is intermittent enough that idle cost matters", "long idle periods, unpredictable traffic, scale to zero, pay only when used"]
    ],
    clues: [
      "Ask first: dataset or individual request?",
      "Then ask: must the caller wait?",
      "Then check: unusually large or slow payload?",
      "Finally ask: is idle endpoint cost the problem?"
    ],
    traps: [
      "Asynchronous inference is not low-latency real-time inference; it is for queued, long-running individual requests.",
      "Serverless is not batch. It still serves individual interactive requests, but can scale down during idle periods."
    ],
    comparisons: [
      ["Batch versus asynchronous", "Batch processes a dataset job; asynchronous processes individual queued requests."],
      ["Real-time versus serverless", "Both can be interactive; serverless is chosen when traffic is sporadic and idle cost dominates."],
      ["Asynchronous versus real-time", "Asynchronous allows the caller to come back later; real-time answers while the caller waits."],
      ["Batch versus serverless", "Batch has no always-on endpoint between jobs; serverless is an endpoint pattern for intermittent request traffic."]
    ]
  };

  const inferencePractice = [
    item("reinforce-d1-inference-001","1.1.3","multiple-choice","A public health agency scores a complete historical dataset once each month and writes the results to Amazon S3 for a morning report.",["Real-time inference","Batch Transform","Asynchronous inference","Serverless inference"],["b"],"The input is a whole dataset and the work runs on a monthly schedule, so Batch Transform is the fit.","complete historical dataset once each month","Asynchronous inference","Asynchronous inference handles individual queued requests, not a scheduled full-dataset job."),
    item("reinforce-d1-inference-002","1.1.3","multiple-choice","A media team sends individual 900 MB video files for quality scoring. Each request can take 40 minutes, and the submitter checks the stored result later.",["Asynchronous inference","Batch Transform","Real-time inference","Serverless inference"],["a"],"Large individual payloads with long processing and later retrieval point to asynchronous inference.","individual 900 MB video files; checks the stored result later","Batch Transform","Batch is for a dataset job, not separately arriving queued requests."),
    item("reinforce-d1-inference-003","1.1.3","multiple-choice","A shopping cart calls a fraud model while the buyer waits at checkout. The answer must return in under a second.",["Batch Transform","Asynchronous inference","Real-time inference","Serverless inference"],["c"],"The buyer is waiting for one immediate answer, so real-time inference fits.","while the buyer waits; under a second","Serverless inference","Serverless can also be interactive, but the stem does not mention idle periods or avoiding idle cost."),
    item("reinforce-d1-inference-004","1.1.3","multiple-choice","An internal compliance tool gets a few interactive requests per week. Users need an answer right away, and the team does not want to pay for idle endpoint capacity.",["Serverless inference","Batch Transform","Asynchronous inference","Provisioned real-time inference"],["a"],"The request is interactive, but traffic is sparse and idle cost is the main concern, so serverless inference fits.","few interactive requests per week; do not pay for idle endpoint capacity","Provisioned real-time inference","A provisioned endpoint can be fast, but it keeps capacity running through idle periods."),
    item("reinforce-d1-inference-005","1.1.3","multiple-choice","A bank recomputes risk scores for all active customers every Sunday night. Analysts read the output table on Monday.",["Asynchronous inference","Serverless inference","Real-time inference","Batch Transform"],["d"],"A scheduled full-population scoring job is batch inference.","all active customers every Sunday night","Asynchronous inference","Asynchronous is for individual requests that are queued and completed later."),
    item("reinforce-d1-inference-006","1.1.3","multiple-choice","A mobile app recommends the next article immediately after a reader opens the home screen.",["Real-time inference","Batch Transform","Asynchronous inference","Serverless inference"],["a"],"The app needs one immediate response for an interactive action.","immediately after a reader opens the home screen","Batch Transform","Batch cannot answer while a user is waiting in an app."),
    item("reinforce-d1-inference-007","1.1.3","multiple-choice","A lab uploads individual genomic files that are too large for synchronous calls. The job is queued and a completion notification is sent later.",["Real-time inference","Batch Transform","Asynchronous inference","Serverless inference"],["c"],"Individual large files and queued completion are asynchronous clues.","individual genomic files; queued; notification later","Batch Transform","Nothing says the lab is processing one complete dataset on a schedule."),
    item("reinforce-d1-inference-008","1.1.3","multiple-choice","A campaign tool sits idle most days, then receives a small burst of interactive predictions after each newsletter launch. Cold starts are acceptable.",["Serverless inference","Batch Transform","Asynchronous inference","Always-on real-time endpoint"],["a"],"Serverless inference fits intermittent interactive traffic when cold starts are acceptable.","idle most days; interactive predictions; cold starts acceptable","Always-on real-time endpoint","An always-on endpoint pays for idle capacity."),
    item("reinforce-d1-inference-009","1.1.3","multiple-choice","A city processes millions of sensor records after midnight and stores anomaly scores before staff arrive.",["Batch Transform","Real-time inference","Asynchronous inference","Serverless inference"],["a"],"Millions of records processed offline on a schedule is batch.","millions of records after midnight","Asynchronous inference","Asynchronous handles individual long-running requests, not a scheduled dataset sweep."),
    item("reinforce-d1-inference-010","1.1.3","multiple-choice","A web form validates a submitted image and must show accept or reject before the user can continue.",["Batch Transform","Asynchronous inference","Real-time inference","Offline inference"],["c"],"The user cannot continue until the answer is returned, so this is real-time.","must show accept or reject before the user can continue","Asynchronous inference","Asynchronous would let the user return later, which does not meet the requirement."),
    item("reinforce-d1-inference-011","1.1.3","multiple-choice","A document service accepts one 700 MB PDF at a time and stores extraction results when the long-running model finishes.",["Asynchronous inference","Serverless inference","Batch Transform","Real-time inference"],["a"],"One large request with stored results after long processing is asynchronous inference.","one 700 MB PDF at a time; stores results when finished","Batch Transform","The stem is about individually arriving documents, not a whole scheduled dataset."),
    item("reinforce-d1-inference-012","1.1.3","multiple-choice","A seasonal calculator gets immediate prediction requests only during quarterly planning week and otherwise sits unused.",["Serverless inference","Batch Transform","Asynchronous inference","Provisioned real-time inference"],["a"],"Immediate requests plus long idle periods point to serverless inference.","immediate prediction requests only during quarterly planning week","Batch Transform","The app still needs interactive responses; it is not an offline dataset job."),
    item("reinforce-d1-inference-013","1.1.3","multiple-choice","A subscription business scores every account in a CSV export at the end of each day. No application calls the model during the day.",["Real-time inference","Batch Transform","Asynchronous inference","Serverless inference"],["b"],"A daily CSV export processed together is a batch job.","every account in a CSV export at the end of each day","Serverless inference","Serverless is for request traffic, not scheduled file processing."),
    item("reinforce-d1-inference-014","1.1.3","multiple-choice","A call-center desktop shows a churn-risk hint as soon as an agent opens the customer record.",["Real-time inference","Batch Transform","Asynchronous inference","Monthly batch scoring"],["a"],"The agent needs an immediate hint inside an interactive workflow.","as soon as an agent opens the customer record","Batch Transform","Monthly scoring would not satisfy the immediate screen update requirement."),
    item("reinforce-d1-inference-015","1.1.3","multiple-choice","A research portal receives one satellite image request at a time. Each image is large, processing takes minutes, and users receive a link when ready.",["Asynchronous inference","Real-time inference","Serverless inference","Batch Transform"],["a"],"One large, slow request with later delivery is asynchronous.","one satellite image request at a time; users receive a link when ready","Real-time inference","Real-time would answer while the user waits."),
    item("reinforce-d1-inference-016","1.1.3","multiple-choice","A demo app may be unused for weeks, but when a visitor tries it, the visitor expects an on-screen prediction response.",["Batch Transform","Serverless inference","Asynchronous inference","Scheduled inference"],["b"],"The visitor still needs an interactive response, and idle periods make scale-to-zero attractive.","unused for weeks; visitor expects on-screen prediction","Batch Transform","Batch does not serve an on-screen interactive visitor request.")
  ];

  const servicePractice = [
    item("reinforce-d1-services-001","1.2.5","multiple-choice","A business analyst wants dashboards, visualizations, AI-generated insights, and natural-language questions over sales data.",["Amazon Athena","Amazon Quick","Amazon Redshift","AWS Glue"],["b"],"Amazon Quick is the BI and dashboarding service with natural-language data exploration.","dashboards; visualizations; natural-language questions","Amazon Athena","Athena runs serverless SQL queries; it is not the dashboard and BI layer.","domain1-aws-services"),
    item("reinforce-d1-services-002","1.3.4","multiple-choice","A data engineer needs to run ad hoc SQL directly over files in Amazon S3 without managing a data warehouse.",["Amazon Quick","Amazon Athena","Amazon Redshift","AWS Glue"],["b"],"Athena is the serverless SQL query service for data in S3.","SQL directly over files in S3","Amazon Redshift","Redshift is a data warehouse, not the lightweight serverless SQL-over-S3 choice.","domain1-aws-services"),
    item("reinforce-d1-services-003","1.3.4","multiple-choice","A company needs a managed data warehouse for high-performance analytics over curated enterprise data.",["AWS Glue","Amazon Quick","Amazon Redshift","Amazon Athena"],["c"],"Redshift is the AWS data warehouse service.","managed data warehouse","Amazon Athena","Athena queries data in place but is not the data warehouse answer.","domain1-aws-services"),
    item("reinforce-d1-services-004","1.3.4","multiple-choice","A team must catalog data and build ETL jobs that transform raw files into analytics-ready tables.",["AWS Glue","Amazon Quick","Amazon Athena","Amazon Redshift"],["a"],"Glue is used for ETL and the Data Catalog.","catalog data; ETL jobs","Amazon Quick","Quick is for BI consumption, not the ETL/catalog stage.","domain1-aws-services"),
    item("reinforce-d1-services-005","1.2.5","multiple-choice","A social platform wants to detect harmful language in English comments without training its own model.",["Amazon Polly","Amazon Comprehend","Amazon Lex","Amazon Rekognition"],["b"],"Amazon Comprehend includes text trust and safety features such as toxicity detection.","harmful language in comments","Amazon Rekognition","Rekognition analyzes images and video, not text comments.","domain1-aws-services"),
    item("reinforce-d1-services-006","1.2.5","multiple-response","Which TWO AWS services can identify sentiment in written hotel reviews when one option is a purpose-built NLP service and the other is a foundation-model service?",["Amazon Comprehend","Amazon Polly","Amazon Bedrock","Amazon Transcribe","Amazon Rekognition"],["a","c"],"Comprehend is the purpose-built text analytics service; Bedrock foundation models can classify sentiment through prompting.","sentiment in written reviews; two services","Amazon Polly","Polly turns text into speech; it does not analyze sentiment.","domain1-aws-services"),
    item("reinforce-d1-services-007","1.2.5","multiple-choice","A product needs generated summaries and open-ended analysis from a foundation model.",["Amazon Comprehend","Amazon Bedrock","Amazon Polly","Amazon Lex"],["b"],"Bedrock is the managed service for using foundation models for generation and prompting.","generated summaries; foundation model","Amazon Comprehend","Comprehend extracts predefined NLP signals; it is not the general FM generation service.","domain1-aws-services"),
    item("reinforce-d1-services-008","1.2.5","multiple-choice","A company wants to turn written announcements into spoken narration.",["Amazon Polly","Amazon Transcribe","Amazon Lex","Amazon Comprehend"],["a"],"Polly converts text to speech.","written announcements into spoken narration","Amazon Transcribe","Transcribe does the reverse: speech to text.","domain1-aws-services"),
    item("reinforce-d1-services-009","1.2.5","multiple-choice","A telecom team wants to study recorded support calls. What is the necessary first AWS AI service step?",["Amazon Comprehend","Amazon Polly","Amazon Transcribe","Amazon Kendra"],["c"],"Recorded audio must be converted to text with Transcribe before text analysis.","recorded support calls; first step","Amazon Comprehend","Comprehend can analyze the transcript later, but it does not directly transcribe audio.","domain1-aws-services"),
    item("reinforce-d1-services-010","1.2.5","multiple-choice","A travel company needs a voice and text bot that captures intents and slots for booking changes.",["Amazon Lex","Amazon Polly","Amazon Transcribe","Amazon Textract"],["a"],"Lex is the conversational interface service for bots, intents, and slots.","voice and text bot; intents and slots","Amazon Polly","Polly only produces speech output; it does not manage dialog intents.","domain1-aws-services"),
    item("reinforce-d1-services-011","1.2.5","multiple-choice","An online learning company wants intelligent enterprise search across a large repository of educational materials.",["Amazon Textract","Amazon Kendra","Amazon Comprehend","Amazon Bedrock"],["b"],"Kendra is the intelligent enterprise search service for document repositories.","enterprise search across a repository","Amazon Textract","Textract extracts fields from documents; it does not search across repositories.","domain1-aws-services"),
    item("reinforce-d1-services-012","1.2.5","multiple-choice","A lender scans application PDFs and must extract tables, forms, and key-value fields.",["Amazon Kendra","Amazon Textract","Amazon Comprehend","Amazon Rekognition"],["b"],"Textract extracts text and structured document elements from scanned documents.","scans PDFs; extract tables and forms","Amazon Kendra","Kendra searches documents; it does not extract structured fields from scans.","domain1-aws-services"),
    item("reinforce-d1-services-013","1.2.5","multiple-choice","A team already has clean text from support tickets and wants to extract entities and key phrases.",["Amazon Textract","Amazon Comprehend","Amazon Kendra","Amazon Transcribe"],["b"],"Comprehend analyzes existing text for entities, key phrases, sentiment, and related NLP signals.","clean text; extract entities and key phrases","Amazon Textract","Textract is for extracting text from documents first.","domain1-aws-services"),
    item("reinforce-d1-services-014","1.3.4","multiple-choice","Several ML teams need to share reusable variables for training and inference with consistent definitions.",["SageMaker Data Wrangler","SageMaker Feature Store","SageMaker Clarify","SageMaker Model Cards"],["b"],"Feature Store centrally stores, shares, and manages ML features.","share reusable variables; consistent definitions","SageMaker Data Wrangler","Data Wrangler prepares and transforms data; it is not the central feature repository.","domain1-aws-services"),
    item("reinforce-d1-services-015","1.3.4","multiple-choice","A team needs to prepare, clean, and transform tabular data before training.",["SageMaker Feature Store","SageMaker Data Wrangler","SageMaker Model Registry","SageMaker Model Monitor"],["b"],"Data Wrangler is the data preparation and transformation tool.","prepare, clean, and transform data","SageMaker Feature Store","Feature Store stores reusable features after they are created or ingested.","domain1-aws-services"),
    item("reinforce-d1-services-016","1.3.4","multiple-choice","A model risk team needs bias analysis and explainability reports for a SageMaker model.",["SageMaker Clarify","SageMaker Model Cards","SageMaker Feature Store","AWS Glue"],["a"],"Clarify supports bias detection and explainability.","bias analysis and explainability","SageMaker Model Cards","Model Cards document a model; they are not the bias/explainability analyzer.","domain1-aws-services"),
    item("reinforce-d1-services-017","1.3.4","multiple-choice","A team needs standardized documentation for intended use, caveats, and evaluation details of a model.",["SageMaker Model Cards","SageMaker Feature Store","SageMaker Data Wrangler","Amazon Athena"],["a"],"Model Cards are for model documentation.","standardized documentation; intended use; caveats","SageMaker Feature Store","Feature Store manages features, not model documentation.","domain1-aws-services"),
    item("reinforce-d1-services-018","1.3.4","multiple-choice","A platform team wants to keep, manage, version, approve, and deploy several trained models.",["SageMaker Canvas","SageMaker Model Registry","SageMaker Model Monitor","AWS Audit Manager"],["b"],"Model Registry manages model versions and lifecycle approval status.","version, approve, and deploy trained models","SageMaker Model Monitor","Model Monitor watches deployed model quality and drift; it does not register versions.","domain1-aws-services"),
    item("reinforce-d1-services-019","1.3.4","multiple-choice","After deployment, a team wants alerts when data quality changes or model drift appears.",["SageMaker Model Registry","SageMaker Model Monitor","SageMaker Canvas","SageMaker Feature Store"],["b"],"Model Monitor is for monitoring deployed model quality and drift.","after deployment; drift appears","SageMaker Model Registry","The registry tracks versions and approval status, not live drift.","domain1-aws-services"),
    item("reinforce-d1-services-020","1.3.4","multiple-choice","A business user wants to build a no-code ML model from a spreadsheet.",["SageMaker Canvas","SageMaker Model Registry","SageMaker Model Monitor","AWS Audit Manager"],["a"],"Canvas is SageMaker's no-code ML workspace for business users.","business user; no-code ML model","SageMaker Model Registry","Registry manages trained model versions after creation.","domain1-aws-services")
  ];

  const lifecyclePractice = [
    item("reinforce-d1-lifecycle-001","1.3.1","multiple-choice","A bank is starting an ML fraud project. When should the team first identify legal constraints, regulatory obligations, acceptable risk, and success metrics?",["While establishing the business goal","After model training","Only after deployment","After monitoring detects drift"],["a"],"Obligations and success metrics shape the problem definition before data collection and processing.","starting an ML project; legal constraints; success metrics","After model training","Training can implement constraints only after they have been identified."),
    item("reinforce-d1-lifecycle-002","1.3.6","multiple-choice","Which metric best reflects production runtime operating efficiency for an online model?",["Training time per epoch","Average inference latency","Customer satisfaction","Number of training examples"],["b"],"Average inference latency measures response time during inference in production.","production runtime operating efficiency","Training time per epoch","Epoch time measures training, not production inference."),
    item("reinforce-d1-lifecycle-003","1.3.4","multiple-choice","A team wants reusable features shared across training and inference.",["SageMaker Feature Store","SageMaker Model Registry","SageMaker Model Monitor","Amazon CloudWatch"],["a"],"Feature Store stores and shares features with consistent definitions.","reusable features shared across training and inference","Model Registry","Registry manages model versions, not feature values."),
    item("reinforce-d1-lifecycle-004","1.3.5","multiple-choice","A deployed model's prediction distribution changes after customer behavior shifts. Which service directly monitors model quality and drift?",["SageMaker Model Monitor","SageMaker Model Registry","SageMaker Feature Store","AWS Glue"],["a"],"Model Monitor is the SageMaker feature for monitoring deployed model quality and drift.","deployed model; distribution changes","Model Registry","Registry tracks versions and approval status."),
    item("reinforce-d1-lifecycle-005","1.3.5","multiple-choice","A team wants operational logs, metrics, and alarms for an inference endpoint.",["Amazon CloudWatch","SageMaker Feature Store","SageMaker Model Cards","Amazon Textract"],["a"],"CloudWatch provides operational logs, metrics, and alarms.","operational logs, metrics, and alarms","SageMaker Model Cards","Model Cards document model information."),
    item("reinforce-d1-lifecycle-006","1.3.4","multiple-choice","A release process requires each approved model version to trigger deployment automation.",["SageMaker Model Registry","SageMaker Data Wrangler","SageMaker Feature Store","Amazon Comprehend"],["a"],"Model Registry supports versioning and approval status that can drive deployment workflows.","approved model version; deployment automation","Feature Store","Feature Store is not the model approval workflow."),
    item("reinforce-d1-lifecycle-007","1.3.1","multiple-choice","Which pipeline order is most defensible?",["Train model, define business goal, collect data, deploy","Define business goal, collect data, prepare features, train, deploy, monitor","Deploy, monitor, collect data, train","Prepare features, deploy, define business goal, monitor"],["b"],"The business goal comes first, followed by data, preparation, training, deployment, and monitoring.","business goal comes first","Train model first","Training before defining the problem risks optimizing the wrong outcome."),
    item("reinforce-d1-lifecycle-008","1.3.6","multiple-choice","A leader asks whether an AI project increased renewal revenue. What kind of metric is this?",["Model performance metric","Training metric","Business metric","Runtime latency metric"],["c"],"Renewal revenue measures business impact, not model mechanics.","increased renewal revenue","Model performance metric","Model metrics evaluate predictions, not business value directly.")
  ];

  const evaluationPractice = [
    item("reinforce-d1-eval-001","1.1.1","multiple-choice","A churn model is excellent on training data but weak for new customers. Among the options, what is the best remedy?",["Train for more epochs","Increase regularization strength","Reduce regularization strength","Add random features"],["b"],"The pattern indicates overfitting; stronger regularization can reduce complexity and improve generalization.","excellent training performance; weak new-customer performance","Train for more epochs","More epochs can make overfitting worse."),
    item("reinforce-d1-eval-002","1.3.6","multiple-choice","A defect classifier asks for the proportion of all images classified correctly.",["Precision","Recall","Accuracy","RMSE"],["c"],"Accuracy is the proportion of all predictions that are correct.","proportion of all images classified correctly","Precision","Precision is only about positive predictions."),
    item("reinforce-d1-eval-003","1.3.6","multiple-choice","A fraud team wants fewer legitimate orders sent to manual review among the orders the model flags as fraud.",["Recall","Precision","MAE","Training loss"],["b"],"Precision answers: of the predicted positives, how many were actually positive?","legitimate orders among the flagged orders","Recall","Recall focuses on missed fraud, not false alarms among flagged cases."),
    item("reinforce-d1-eval-004","1.3.6","multiple-choice","A screening team cares most about detecting as many genuinely ill patients as possible.",["Recall","Precision","Accuracy","RMSE"],["a"],"Recall measures the proportion of actual positives detected.","detecting as many genuinely ill patients as possible","Precision","Precision would reduce false positives, not missed ill patients."),
    item("reinforce-d1-eval-005","1.3.6","multiple-choice","A moderation model needs one score that balances precision and recall.",["Accuracy","F1 score","MAE","Training time"],["b"],"F1 balances precision and recall.","balances precision and recall","Accuracy","Accuracy can hide minority-class errors."),
    item("reinforce-d1-eval-006","1.3.6","multiple-choice","A home-price model predicts dollar values, and the team wants average absolute error in dollars.",["MAE","Accuracy","Precision","Recall"],["a"],"Mean absolute error reports average absolute numeric prediction error.","average absolute error in dollars","Accuracy","Accuracy is for classification, not numeric price errors."),
    item("reinforce-d1-eval-007","1.3.6","multiple-choice","A demand forecast team wants a regression error metric that penalizes large errors more strongly.",["F1 score","RMSE","Recall","Precision"],["b"],"RMSE squares errors before averaging, so larger errors count more heavily.","penalizes large errors more strongly","MAE","MAE treats each absolute error linearly."),
    item("reinforce-d1-eval-008","1.1.1","multiple-choice","A model performs poorly on both training and validation data. Which term fits best?",["Overfitting","Underfitting","Regularization","Inference"],["b"],"Weak training and validation performance suggests the model is too simple or undertrained.","poorly on both training and validation","Overfitting","Overfitting has strong training performance and weak unseen-data performance.")
  ];

  function examples(list){ return list.map(function(item){ return {
    scenario:item.stem,
    workload:item.stem.split(".")[0] + ".",
    clues:item.decidingClue,
    answer:item.options.find(function(option){ return option.id === item.correctAnswers[0]; }).text,
    whyCorrect:item.explanation,
    closestAlternative:item.closestDistractor,
    whyAlternativeFails:item.whyClosestDistractorIsWrong
  }; }); }

  const mixedCheckpoint = [
    inferencePractice[0], inferencePractice[1], inferencePractice[3], inferencePractice[5], inferencePractice[8], inferencePractice[10], inferencePractice[15],
    servicePractice[0], servicePractice[4], servicePractice[8], servicePractice[10], servicePractice[13], servicePractice[17], servicePractice[18],
    lifecyclePractice[0], lifecyclePractice[1], lifecyclePractice[4],
    evaluationPractice[0], evaluationPractice[2], evaluationPractice[5]
  ].map(function(base, index){
    return Object.assign({}, base, {
      id: "reinforce-d1-checkpoint-" + String(index + 1).padStart(3,"0"),
      sourceReference: "Parallel checkpoint scenario",
      linkUnitId: base.objective === "1.1.3" ? "domain1-inference" : base.objective === "1.2.5" || base.objective === "1.3.4" ? "domain1-aws-services" : base.objective === "1.1.1" || base.id.indexOf("eval") > -1 ? "domain1-model-evaluation" : "domain1-reinforcement-lifecycle"
    });
  });

  window.DOMAIN1_REINFORCEMENT_UNITS = [
    {
      id:"domain1-inference",
      title:"Real-time, Batch, Asynchronous, or Serverless?",
      shortTitle:"Inference modes",
      weakArea:"Batch and asynchronous inference are still being confused.",
      reason:"Recommended when Objective 1.1.3 is below 70% or inference-mode questions are missed.",
      objectives:["1.1.3"],
      taskStatement:"Domain 1 Reinforcement Units",
      estimatedTime:"20 min",
      difficulty:"Priority reinforcement",
      relatedActivityId:"domain1-task11-12",
      order:1381,
      rapidReview:inferenceReview,
      guidedExamples:examples([inferencePractice[0], inferencePractice[1], inferencePractice[3]]),
      practice:inferencePractice,
      checkpoint:inferencePractice.slice(0,6),
      masteryPercent:85,
      immediateCheckpointFeedback:true
    },
    {
      id:"domain1-aws-services",
      title:"Which AWS Service Actually Fits?",
      shortTitle:"AWS service selection",
      weakArea:"Review purpose-built language services versus foundation-model capabilities.",
      reason:"Recommended when Objective 1.2.5 or 1.3.4 service-selection results are below 70%.",
      objectives:["1.2.5","1.3.4"],
      taskStatement:"Domain 1 Reinforcement Units",
      estimatedTime:"25 min",
      difficulty:"Service distinctions",
      relatedActivityId:"domain1-pipeline-services",
      order:1382,
      rapidReview:{
        summary:"Pick the service from the job verb: visualize, query, warehouse, transform, understand text, generate with a foundation model, transcribe speech, speak text, converse, search documents, extract scanned fields, share features, register models, or monitor deployed behavior.",
        table:[
          ["Amazon Quick", "BI dashboards, visualizations, AI insights, natural-language questions over business data", "Not Athena SQL, Redshift warehouse, or Glue ETL"],
          ["Amazon Comprehend", "Purpose-built NLP: sentiment, entities, key phrases, PII, toxicity", "Bedrock can analyze text through prompting, but Comprehend is the direct managed NLP answer"],
          ["Transcribe / Polly / Lex", "Speech to text / text to speech / conversational bots", "Analyze transcripts after Transcribe; do not send raw calls to Comprehend"],
          ["Kendra / Textract", "Enterprise search / scanned document extraction", "Search for relevant documents versus extract fields from a document"],
          ["Feature Store / Model Registry / Model Monitor", "Reusable features / model versions and approval / deployed quality and drift", "Do not swap lifecycle storage with production monitoring"]
        ],
        clues:["Dashboard means Quick.", "Speech-to-text means Transcribe.", "Enterprise search means Kendra.", "Reusable features means Feature Store.", "Model versions and approval means Model Registry."],
        traps:["Comprehend analyzes text, not original audio.", "Model Registry does not monitor drift; Model Monitor does."],
        comparisons:[["Quick versus Athena", "Quick is BI and visualization; Athena is serverless SQL."],["Comprehend versus Bedrock", "Comprehend is purpose-built NLP; Bedrock is foundation-model access."],["Kendra versus Textract", "Kendra finds documents; Textract extracts fields."],["Feature Store versus Model Registry", "Features are model inputs; registry entries are trained model versions."]]
      },
      guidedExamples:examples([servicePractice[0], servicePractice[8], servicePractice[17]]),
      practice:servicePractice,
      checkpoint:servicePractice.slice(0,7),
      masteryPercent:85,
      immediateCheckpointFeedback:true
    },
    {
      id:"domain1-reinforcement-lifecycle",
      title:"From Business Goal to Production",
      shortTitle:"Lifecycle and MLOps",
      weakArea:"Review the differences among Feature Store, Model Registry, Model Monitor, and CloudWatch.",
      reason:"Recommended when lifecycle, pipeline-stage, MLOps, or runtime-metric objectives are below 70%.",
      objectives:["1.3.1","1.3.4","1.3.5","1.3.6"],
      taskStatement:"Domain 1 Reinforcement Units",
      estimatedTime:"15 min",
      difficulty:"Production concepts",
      relatedActivityId:"domain1-mlops",
      order:1383,
      rapidReview:{
        summary:"Problem definition comes before data work. Runtime metrics describe production behavior. MLOps tools separate feature reuse, model version control, deployed model monitoring, and operational alarms.",
        table:[["Business goal", "Problem, success metrics, legal constraints, regulatory obligations, acceptable risk", "Established before data processing"],["Feature Store", "Reusable features and consistency", "Feature management"],["Model Registry", "Model versions, approval, deployment lifecycle", "Lifecycle state"],["Model Monitor", "Model quality and drift after deployment", "ML monitoring"],["CloudWatch", "Logs, metrics, alarms", "Operations monitoring"]],
        clues:["Regulatory obligations first appear during business-goal definition.", "Average inference latency is runtime.", "Training time per epoch is not runtime."],
        traps:["Later stages verify compliance, but the obligations must be known up front.", "Customer satisfaction is a business metric, not a model performance metric."],
        comparisons:[["Registry versus monitor", "Registry manages model versions; monitor watches deployed behavior."],["Feature Store versus CloudWatch", "Feature Store stores ML inputs; CloudWatch records operational telemetry."]]
      },
      guidedExamples:examples([lifecyclePractice[0], lifecyclePractice[1], lifecyclePractice[3]]),
      practice:lifecyclePractice,
      checkpoint:lifecyclePractice.slice(0,6),
      masteryPercent:85,
      immediateCheckpointFeedback:true
    },
    {
      id:"domain1-model-evaluation",
      title:"What Is the Model Doing Wrong?",
      shortTitle:"Model fit and metrics",
      weakArea:"Review overfitting, regularization, and metric selection clues.",
      reason:"Recommended when fit or evaluation metric objectives are below 70%.",
      objectives:["1.1.1","1.3.6"],
      taskStatement:"Domain 1 Reinforcement Units",
      estimatedTime:"15 min",
      difficulty:"Model evaluation",
      relatedActivityId:"domain1-metrics",
      order:1384,
      rapidReview:{
        summary:"Strong training performance plus weak unseen-data performance means overfitting. Among typical answer choices, increasing regularization is a good remedy because it reduces complexity. Classification metrics depend on which error matters; regression metrics describe numeric error.",
        table:[["Accuracy", "All correct predictions divided by all predictions", "Use when classes are balanced and every error is similar"],["Precision", "Positive predictions that are truly positive", "Use when false positives are costly"],["Recall", "Actual positives that were detected", "Use when false negatives are costly"],["F1", "Balance between precision and recall", "Use when both false positives and false negatives matter"],["MAE / RMSE", "Average numeric error / numeric error with stronger penalty for large misses", "Use for regression"]],
        clues:["Training strong, new data weak = overfitting.", "Flagged items that are actually fraud = precision.", "Ill patients detected = recall.", "Dollar prediction error = MAE or RMSE."],
        traps:["More epochs can worsen overfitting.", "Accuracy can hide failure on rare positives."],
        comparisons:[["Precision versus recall", "Precision reduces wasted positive flags; recall reduces missed actual positives."],["MAE versus RMSE", "RMSE penalizes larger errors more heavily."]]
      },
      guidedExamples:examples([evaluationPractice[0], evaluationPractice[2], evaluationPractice[5]]),
      practice:evaluationPractice,
      checkpoint:evaluationPractice.slice(0,6),
      masteryPercent:85,
      immediateCheckpointFeedback:true
    },
    {
      id:"domain1-reinforcement-checkpoint",
      title:"Domain 1 Reinforcement Checkpoint",
      shortTitle:"Mixed checkpoint",
      weakArea:"Mixed review across the current Domain 1 weak areas.",
      reason:"Use after the focused units to verify the distinctions transfer to new wording.",
      objectives:["1.1.3","1.2.5","1.3.1","1.3.4","1.3.5","1.3.6","1.1.1"],
      taskStatement:"Domain 1 Reinforcement Units",
      estimatedTime:"25 min",
      difficulty:"Mixed checkpoint",
      relatedActivityId:"domain1-simulated-exam",
      order:1385,
      rapidReview:{
        summary:"This checkpoint mixes the reinforced distinctions without immediate first-attempt feedback. Use it to test whether the clues are automatic across changed wording.",
        table:[["Inference modes", "7 questions", "dataset/schedule, request latency, large payload, idle traffic"],["AWS service selection", "7 questions", "BI, NLP, speech, search, extraction, SageMaker lifecycle"],["Lifecycle and MLOps", "3 questions", "business goal, runtime metrics, production monitoring"],["Model fit and evaluation", "3 questions", "overfitting, regularization, classification and regression metrics"]],
        clues:["Read the business requirement first, then choose the service or metric.", "The exact noun is less important than the clue that makes the answer necessary."],
        traps:["Do not reuse the last answer pattern blindly.", "No immediate correctness is shown until the first pass is complete."],
        comparisons:[["Focused units versus checkpoint", "Focused units teach the clue; this checkpoint tests transfer."]]
      },
      guidedExamples:[],
      practice:[],
      checkpoint:mixedCheckpoint,
      masteryPercent:85,
      immediateCheckpointFeedback:false
    }
  ];
})();
