(function(){
  "use strict";
  window.I18N_ES_MATRIX_TABLES = Object.assign({}, window.I18N_ES_MATRIX_TABLES || {}, {
  "domain2-addendum::addendum-discriminative-generative-comparison::rowHeader": {
    "text": "Pregunta a hacer"
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::col:disc": {
    "label": "Modelo discriminativo"
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::col:gen": {
    "label": "Modelo generativo"
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::row:output": {
    "label": "Salida típica"
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::row:tasks": {
    "label": "Tareas comunes"
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::row:example": {
    "label": "Ejemplo"
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::row:aws": {
    "label": "Ruta típica de AWS"
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::row:distractor": {
    "label": "Prueba clave del distractor"
  },
  "domain2-addendum::addendum-gan-components::rowHeader": {
    "text": "Componente"
  },
  "domain2-addendum::addendum-gan-components::col:job": {
    "label": "Función durante el entrenamiento"
  },
  "domain2-addendum::addendum-gan-components::col:not": {
    "label": "Qué no es"
  },
  "domain2-addendum::addendum-gan-components::row:generator": {
    "label": "Generador"
  },
  "domain2-addendum::addendum-gan-components::row:discriminator": {
    "label": "Discriminador"
  },
  "domain2-addendum::addendum-gan-components::row:latent": {
    "label": "Vector latente / semilla"
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::rowHeader": {
    "text": "Caso de uso"
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::col:helps": {
    "label": "Por qué ayudan los datos sintéticos"
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::col:risk": {
    "label": "Riesgo principal a verificar"
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::row:augmentation": {
    "label": "Aumento de datos de entrenamiento"
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::row:testing": {
    "label": "Pruebas de software y análisis"
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::row:privacy": {
    "label": "Investigación sensible a la privacidad"
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::row:simulation": {
    "label": "Simulación y casos extremos"
  },
  "domain2-addendum::addendum-personalize-vs-bedrock::rowHeader": {
    "text": "Requisito"
  },
  "domain2-addendum::addendum-personalize-vs-bedrock::col:service": {
    "label": "Servicio o enfoque más adecuado"
  },
  "domain2-addendum::addendum-personalize-vs-bedrock::col:reason": {
    "label": "Razón"
  },
  "domain2-addendum::addendum-personalize-vs-bedrock::row:rank": {
    "label": "Clasificar productos para cada usuario según el historial de interacción"
  },
  "domain2-addendum::addendum-personalize-vs-bedrock::row:message": {
    "label": "Escribir un consejo o mensaje personalizado según la ubicación"
  },
  "domain2-addendum::addendum-personalize-vs-bedrock::row:both": {
    "label": "Clasificar y explicar a la vez"
  },
  "domain2-addendum::addendum-healthscribe-recognition::rowHeader": {
    "text": "Qué es"
  },
  "domain2-addendum::addendum-healthscribe-recognition::col:input": {
    "label": "Entradas y salidas"
  },
  "domain2-addendum::addendum-healthscribe-recognition::col:not": {
    "label": "Qué no reemplaza"
  },
  "domain2-addendum::addendum-healthscribe-recognition::col:clue": {
    "label": "Pista típica"
  },
  "domain2-addendum::addendum-healthscribe-recognition::row:healthscribe": {
    "label": "AWS HealthScribe"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::rowHeader": {
    "text": "Opción"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::col:billing": {
    "label": "Modalidad de facturación"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::col:latency": {
    "label": "Latencia / entrega"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::col:best": {
    "label": "Mejor uso"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::col:wrong": {
    "label": "Incorrecto cuando"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::row:ondemand": {
    "label": "Bajo demanda / Estándar"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::row:batch": {
    "label": "Inferencia por lotes"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::row:provisioned": {
    "label": "Rendimiento aprovisionado (Provisioned Throughput)"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::row:caching": {
    "label": "Caché de prompts"
  },
  "domain2-addendum::addendum-conversation-context-table::rowHeader": {
    "text": "Mecanismo"
  },
  "domain2-addendum::addendum-conversation-context-table::col:does": {
    "label": "Qué hace"
  },
  "domain2-addendum::addendum-conversation-context-table::col:sees": {
    "label": "¿El modelo ve información anterior?"
  },
  "domain2-addendum::addendum-conversation-context-table::row:previous": {
    "label": "Incluir mensajes anteriores en el prompt"
  },
  "domain2-addendum::addendum-conversation-context-table::row:summary": {
    "label": "Resumir turnos anteriores"
  },
  "domain2-addendum::addendum-conversation-context-table::row:memory": {
    "label": "Almacén de memoria a largo plazo"
  },
  "domain2-addendum::addendum-conversation-context-table::row:logging": {
    "label": "Registro de invocaciones del modelo"
  },
  "domain2-addendum::addendum-conversation-context-table::row:capacity": {
    "label": "Rendimiento aprovisionado (Provisioned Throughput)"
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::rowHeader": {
    "text": "Capa"
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::col:job": {
    "label": "Función principal"
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::col:mistake": {
    "label": "Error común"
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::row:s3": {
    "label": "Amazon S3"
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::row:embedding": {
    "label": "Modelo de embeddings"
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::row:vector": {
    "label": "Almacén / índice de vectores"
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::row:kb": {
    "label": "Amazon Bedrock Knowledge Bases"
  },
  "domain2-addendum::addendum-slm-llm-comparison::rowHeader": {
    "text": "Factor de selección"
  },
  "domain2-addendum::addendum-slm-llm-comparison::col:slm": {
    "label": "Ventaja del SLM"
  },
  "domain2-addendum::addendum-slm-llm-comparison::col:llm": {
    "label": "Ventaja del LLM"
  },
  "domain2-addendum::addendum-slm-llm-comparison::row:latency": {
    "label": "Latencia"
  },
  "domain2-addendum::addendum-slm-llm-comparison::row:hardware": {
    "label": "Huella de hardware"
  },
  "domain2-addendum::addendum-slm-llm-comparison::row:privacy": {
    "label": "Privacidad / localidad de los datos"
  },
  "domain2-addendum::addendum-slm-llm-comparison::row:offline": {
    "label": "Operación sin conexión"
  },
  "domain2-addendum::addendum-slm-llm-comparison::row:breadth": {
    "label": "Amplitud y razonamiento"
  },
  "domain2-addendum::addendum-slm-llm-comparison::row:cost": {
    "label": "Costo"
  },
  "domain2-addendum::addendum-partyrock-what-it-is::rowHeader": {
    "text": "PartyRock"
  },
  "domain2-addendum::addendum-partyrock-what-it-is::col:is": {
    "label": "Qué es"
  },
  "domain2-addendum::addendum-partyrock-what-it-is::col:for": {
    "label": "Para qué sirve"
  },
  "domain2-addendum::addendum-partyrock-what-it-is::col:not": {
    "label": "Qué no es"
  },
  "domain2-addendum::addendum-partyrock-what-it-is::row:partyrock": {
    "label": "PartyRock"
  },
  "domain2-addendum::addendum-current-name-table::rowHeader": {
    "text": "Redacción anterior en las preguntas"
  },
  "domain2-addendum::addendum-current-name-table::col:current": {
    "label": "Interpretación actual"
  },
  "domain2-addendum::addendum-current-name-table::col:distinction": {
    "label": "Distinción segura para el examen"
  },
  "domain2-addendum::addendum-current-name-table::row:qdev": {
    "label": "Amazon Q Developer"
  },
  "domain2-addendum::addendum-current-name-table::row:qbusiness": {
    "label": "Amazon Q Business"
  },
  "domain2-addendum::addendum-current-name-table::row:quick": {
    "label": "Amazon QuickSight / Quick Suite"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::col:question": {
    "label": "Pregunta a hacer"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::col:effect": {
    "label": "Cómo afecta la selección"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::row:modality": {
    "label": "Modalidad"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::row:capability": {
    "label": "Exactitud y capacidad"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::row:latency": {
    "label": "Latencia"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::row:cost": {
    "label": "Costo"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::row:compliance": {
    "label": "Cumplimiento"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::row:region": {
    "label": "Disponibilidad por región"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::row:context": {
    "label": "Longitud de entrada/salida"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::row:custom": {
    "label": "Soporte de personalización"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::row:cache": {
    "label": "Caché de prompts"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::col:controls": {
    "label": "Qué controla"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::col:raise": {
    "label": "Auméntalo para"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::col:lower": {
    "label": "Redúcelo para"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::row:temperature": {
    "label": "Temperatura"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::row:top-p": {
    "label": "Top-p"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::row:top-k": {
    "label": "Top-k"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::row:max-output": {
    "label": "Longitud máxima de salida"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::row:stop": {
    "label": "Secuencias de parada"
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning::col:rag": {
    "label": "RAG"
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning::col:tuning": {
    "label": "Ajuste fino (fine-tuning)"
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning::row:weights": {
    "label": "Pesos del modelo"
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning::row:knowledge": {
    "label": "Conocimiento externo"
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning::row:fresh": {
    "label": "Información cambiante"
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning::row:citations": {
    "label": "Citas"
  },
  "domain3-source-structure-games::d3-314-vector-store-table::col:capability": {
    "label": "Capacidad vectorial"
  },
  "domain3-source-structure-games::d3-314-vector-store-table::col:choose": {
    "label": "Elígelo cuando..."
  },
  "domain3-source-structure-games::d3-314-vector-store-table::row:opensearch": {
    "label": "Amazon OpenSearch Service"
  },
  "domain3-source-structure-games::d3-314-vector-store-table::row:aurora": {
    "label": "Amazon Aurora (compatible con PostgreSQL)"
  },
  "domain3-source-structure-games::d3-314-vector-store-table::row:rds": {
    "label": "Amazon RDS para PostgreSQL"
  },
  "domain3-source-structure-games::d3-314-vector-store-table::row:neptune": {
    "label": "Amazon Neptune"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::col:changes": {
    "label": "Qué cambia"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::col:cost": {
    "label": "Costo relativo"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::col:best": {
    "label": "Mejor para"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::row:prompt": {
    "label": "Ingeniería de prompts"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::row:rag": {
    "label": "RAG"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::row:distill": {
    "label": "Destilación de modelos"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::row:fine-tune": {
    "label": "Ajuste fino (fine-tuning)"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::row:continued": {
    "label": "Preentrenamiento continuado"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::row:scratch": {
    "label": "Preentrenamiento desde cero"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::col:means": {
    "label": "Qué significa"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::col:use": {
    "label": "Úsalo cuando"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::col:tradeoff": {
    "label": "Compensación"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::row:zero": {
    "label": "Zero-shot"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::row:one": {
    "label": "One-shot"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::row:few": {
    "label": "Few-shot"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::row:cot": {
    "label": "Cadena de pensamiento (chain-of-thought)"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::row:template": {
    "label": "Plantilla de prompt"
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table::col:definition": {
    "label": "Definición"
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table::col:mitigation": {
    "label": "Mitigación"
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table::row:injection": {
    "label": "Inyección de prompts (prompt injection)"
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table::row:jailbreak": {
    "label": "Jailbreaking"
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table::row:leaking": {
    "label": "Filtración de prompts (prompt leaking)"
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table::row:poisoning": {
    "label": "Envenenamiento (poisoning)"
  },
  "domain3-source-structure-games::d3-331-training-approach-table::col:happens": {
    "label": "Qué sucede"
  },
  "domain3-source-structure-games::d3-331-training-approach-table::col:data": {
    "label": "Datos requeridos"
  },
  "domain3-source-structure-games::d3-331-training-approach-table::col:owner": {
    "label": "Quién normalmente lo hace"
  },
  "domain3-source-structure-games::d3-331-training-approach-table::row:pretrain": {
    "label": "Preentrenamiento"
  },
  "domain3-source-structure-games::d3-331-training-approach-table::row:continued": {
    "label": "Preentrenamiento continuado"
  },
  "domain3-source-structure-games::d3-331-training-approach-table::row:fine": {
    "label": "Ajuste fino (fine-tuning)"
  },
  "domain3-source-structure-games::d3-331-training-approach-table::row:distill": {
    "label": "Destilación"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::col:good": {
    "label": "Cómo se ve lo correcto"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::col:failure": {
    "label": "Qué falla sin ello"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::row:curation": {
    "label": "Curación"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::row:governance": {
    "label": "Gobernanza"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::row:size": {
    "label": "Tamaño"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::row:labeling": {
    "label": "Etiquetado"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::row:represent": {
    "label": "Representatividad"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::row:balance": {
    "label": "Balance y diversidad"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::row:preference": {
    "label": "Datos de preferencia para RLHF"
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::col:works": {
    "label": "Cómo funciona"
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::col:strength": {
    "label": "Fortaleza"
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::col:weakness": {
    "label": "Debilidad"
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::row:bench": {
    "label": "Conjuntos de datos de referencia (benchmark)"
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::row:auto": {
    "label": "Métricas automatizadas"
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::row:human": {
    "label": "Evaluación humana"
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::row:judge": {
    "label": "LLM como juez (LLM-as-a-judge)"
  },
  "domain3-source-structure-games::d3-342-metric-table::col:measures": {
    "label": "Qué mide"
  },
  "domain3-source-structure-games::d3-342-metric-table::col:use": {
    "label": "Uso principal"
  },
  "domain3-source-structure-games::d3-342-metric-table::col:limit": {
    "label": "Limitación"
  },
  "domain3-source-structure-games::d3-342-metric-table::row:rouge": {
    "label": "ROUGE"
  },
  "domain3-source-structure-games::d3-342-metric-table::row:bleu": {
    "label": "BLEU"
  },
  "domain3-source-structure-games::d3-342-metric-table::row:bertscore": {
    "label": "BERTScore"
  },
  "domain3-source-structure-games::d3-342-metric-table::row:llmjudge": {
    "label": "LLM como juez (LLM-as-a-judge)"
  },
  "domain3-source-structure-games::d3-342-metric-table::row:perplexity": {
    "label": "Perplejidad"
  },
  "domain3-source-structure-games::d3-344-application-evaluation-table::col:evaluate": {
    "label": "Qué evaluar"
  },
  "domain3-source-structure-games::d3-344-application-evaluation-table::col:failure": {
    "label": "Modo de falla típico"
  },
  "domain3-source-structure-games::d3-344-application-evaluation-table::row:rag": {
    "label": "RAG"
  },
  "domain3-source-structure-games::d3-344-application-evaluation-table::row:agents": {
    "label": "Agentes"
  },
  "domain3-source-structure-games::d3-344-application-evaluation-table::row:workflows": {
    "label": "Flujos de trabajo"
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::col:definition": {
    "label": "Definición"
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::col:poor": {
    "label": "Qué indica un resultado deficiente"
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::row:completion": {
    "label": "Tasa de finalización de tareas"
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::row:satisfaction": {
    "label": "Satisfacción del usuario"
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::row:cost": {
    "label": "Costo por interacción"
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::row:escalation": {
    "label": "Tasa de escalamiento"
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::row:resolution": {
    "label": "Tiempo de resolución"
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::col:meaning": {
    "label": "Significado"
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::col:failure": {
    "label": "Cómo falla en la práctica"
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::row:bias": {
    "label": "Sesgo"
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::row:fairness": {
    "label": "Equidad"
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::row:inclusivity": {
    "label": "Inclusividad"
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::row:robustness": {
    "label": "Robustez"
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::row:safety": {
    "label": "Seguridad"
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::row:veracity": {
    "label": "Veracidad"
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::col:does": {
    "label": "Qué hace"
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::col:property": {
    "label": "Propiedad de IA responsable que respalda"
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::row:content": {
    "label": "Filtros de contenido"
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::row:denied": {
    "label": "Temas denegados"
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::row:word": {
    "label": "Filtros de palabras"
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::row:sensitive": {
    "label": "Filtros de información sensible"
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::row:grounding": {
    "label": "Verificaciones de fundamentación contextual (grounding)"
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::row:reasoning": {
    "label": "Verificaciones de razonamiento automatizado"
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::col:appears": {
    "label": "Cómo aparece"
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::col:mitigation": {
    "label": "Mitigación"
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::row:ip": {
    "label": "Infracción de propiedad intelectual"
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::row:bias": {
    "label": "Salidas sesgadas"
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::row:trust": {
    "label": "Pérdida de confianza"
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::row:enduser": {
    "label": "Riesgo para el usuario final"
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::row:hallucination": {
    "label": "Alucinaciones"
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table::col:meaning": {
    "label": "Significado"
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table::col:absent": {
    "label": "Consecuencia si está ausente"
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table::row:inclusive": {
    "label": "Inclusividad"
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table::row:diverse": {
    "label": "Diversidad"
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table::row:curated": {
    "label": "Fuentes curadas"
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table::row:balance": {
    "label": "Balance"
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::col:symptom": {
    "label": "Síntoma en entrenamiento/prueba"
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::col:meaning": {
    "label": "Significado"
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::col:remedy": {
    "label": "Remedio típico"
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::row:high-bias": {
    "label": "Sesgo alto"
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::row:high-variance": {
    "label": "Varianza alta"
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::row:tradeoff": {
    "label": "Compensación entre sesgo y varianza"
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix::col:transparency": {
    "label": "Transparencia"
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix::col:explainability": {
    "label": "Explicabilidad"
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix::row:meaning": {
    "label": "Significado"
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix::row:decision": {
    "label": "Comprensión por decisión individual"
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix::row:documentation": {
    "label": "Documentación"
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix::row:fit": {
    "label": "Mejor uso"
  },
  "domain4-source-structure-games::d4-423-tradeoff-table::col:tension": {
    "label": "Tensión"
  },
  "domain4-source-structure-games::d4-423-tradeoff-table::col:resolution": {
    "label": "Resolución"
  },
  "domain4-source-structure-games::d4-423-tradeoff-table::row:interpret": {
    "label": "Interpretabilidad versus desempeño"
  },
  "domain4-source-structure-games::d4-423-tradeoff-table::row:security": {
    "label": "Transparencia versus seguridad"
  },
  "domain4-source-structure-games::d4-423-tradeoff-table::row:usability": {
    "label": "Nivel de detalle de la explicación versus usabilidad"
  },
  "domain5-source-structure-games::d5-511-security-service-table::col:purpose": {
    "label": "Propósito"
  },
  "domain5-source-structure-games::d5-511-security-service-table::row:iam": {
    "label": "AWS IAM"
  },
  "domain5-source-structure-games::d5-511-security-service-table::row:agent-id": {
    "label": "AgentCore Identity"
  },
  "domain5-source-structure-games::d5-511-security-service-table::row:kms": {
    "label": "AWS KMS"
  },
  "domain5-source-structure-games::d5-511-security-service-table::row:secrets": {
    "label": "AWS Secrets Manager"
  },
  "domain5-source-structure-games::d5-511-security-service-table::row:macie": {
    "label": "Amazon Macie"
  },
  "domain5-source-structure-games::d5-511-security-service-table::row:privatelink": {
    "label": "AWS PrivateLink"
  },
  "domain5-source-structure-games::d5-511-security-service-table::row:guardrails": {
    "label": "Amazon Bedrock Guardrails"
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::col:purpose": {
    "label": "Propósito"
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::col:aws": {
    "label": "Implementación en AWS"
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::row:quality": {
    "label": "Calidad de los datos"
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::row:privacy": {
    "label": "Técnicas de mejora de la privacidad"
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::row:access": {
    "label": "Control de acceso"
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::row:integrity": {
    "label": "Integridad"
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::row:encryption": {
    "label": "Cifrado"
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::row:retention": {
    "label": "Retención y eliminación"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::col:angle": {
    "label": "El ángulo específico de la IA"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::col:control": {
    "label": "Control"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::row:injection": {
    "label": "Inyección de prompts (prompt injection)"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::row:leakage": {
    "label": "Prevención de fuga de datos"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::row:output": {
    "label": "Filtrado y validación de salida"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::row:audit": {
    "label": "Registro y auditoría de interacciones de IA"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::row:toxicity": {
    "label": "Toxicidad"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::row:appsec": {
    "label": "Seguridad de aplicaciones"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::row:vuln": {
    "label": "Detección de amenazas y gestión de vulnerabilidades"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::row:network": {
    "label": "Protección de infraestructura"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::row:encryption": {
    "label": "Cifrado en reposo y en tránsito"
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::col:meaning": {
    "label": "Significado"
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::col:aws": {
    "label": "Implementación en AWS"
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::row:lifecycle": {
    "label": "Ciclo de vida de los datos"
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::row:logging": {
    "label": "Registro"
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::row:residency": {
    "label": "Residencia de datos"
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::row:monitoring": {
    "label": "Monitoreo y observación"
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::row:retention": {
    "label": "Retención"
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::row:classification": {
    "label": "Clasificación y propiedad"
  }
});
})();
