(function(){
  "use strict";
  window.I18N_ES_ROUNDS = Object.assign({}, window.I18N_ES_ROUNDS || {}, {
  "domain2-genai-fundamentals::core": {
    "title": "Núcleo",
    "footnote": "<strong>Transformer vs. difusión:</strong> los transformers generan secuencias token por token y dominan el texto. Los modelos de difusión parten de ruido y lo eliminan progresivamente hasta obtener una imagen, y dominan la generación de imágenes.",
    "intro": "Diez términos del objetivo 2.1.1. Son la capa de vocabulario para el resto del dominio: si alguno de estos términos no está firme, todo lo que se construye sobre ellos se vuelve más difícil."
  },
  "domain2-genai-fundamentals::core::slottype:def": {
    "label": "Definición"
  },
  "domain2-genai-fundamentals::core::concept:token": {
    "name": "Token",
    "def": "La unidad que un modelo realmente procesa. El texto se divide en tokens antes de que ocurra cualquier otra cosa: palabras completas, fragmentos o signos de puntuación."
  },
  "domain2-genai-fundamentals::core::concept:chunking": {
    "name": "Fragmentación (chunking)",
    "def": "Dividir un documento largo en pasajes más pequeños antes de generar sus embeddings para la recuperación."
  },
  "domain2-genai-fundamentals::core::concept:embedding": {
    "name": "Embedding",
    "def": "Una representación vectorial numérica del contenido en la que los elementos semánticamente similares quedan cerca unos de otros en el espacio vectorial."
  },
  "domain2-genai-fundamentals::core::concept:vector": {
    "name": "Vector",
    "def": "El arreglo de números en sí mismo: lo que un embedding realmente es."
  },
  "domain2-genai-fundamentals::core::concept:vectordb": {
    "name": "Base de datos vectorial",
    "def": "Un almacén que indexa embeddings para poder encontrar rápidamente los vecinos más cercanos a un vector de consulta."
  },
  "domain2-genai-fundamentals::core::concept:transformer": {
    "name": "Transformer",
    "def": "La arquitectura neuronal detrás de prácticamente todos los LLM modernos, basada en la autoatención (self-attention): ponderar la relevancia de cada uno de los demás tokens en el contexto."
  },
  "domain2-genai-fundamentals::core::concept:fm": {
    "name": "Modelo fundacional (FM)",
    "def": "Un modelo grande preentrenado con un corpus amplio y sin etiquetar mediante aprendizaje autosupervisado, adaptable a muchas tareas posteriores."
  },
  "domain2-genai-fundamentals::core::concept:llm": {
    "name": "Modelo de lenguaje grande (LLM)",
    "def": "Un modelo fundacional especializado en texto, construido sobre la arquitectura transformer. Todo LLM es un FM, pero no todo FM es un LLM."
  },
  "domain2-genai-fundamentals::core::concept:multimodal": {
    "name": "Modelo multimodal",
    "def": "Acepta o produce más de una modalidad: texto más imagen, video o audio."
  },
  "domain2-genai-fundamentals::core::concept:diffusion": {
    "name": "Modelo de difusión",
    "def": "Genera imágenes partiendo de ruido y eliminándolo de forma iterativa, guiado por un prompt. Es la arquitectura dominante para la generación de imágenes."
  },
  "domain2-genai-fundamentals::usecases": {
    "title": "Casos de uso",
    "footnote": "<strong>Regla mnemotécnica:</strong> si un escenario no encaja en ninguno de los cinco verbos, es probable que la tarea no sea una tarea de IA generativa en absoluto.",
    "intro": "Los cinco verbos C y F del objetivo 2.1.2: Crear (Create), Condensar (Condense), Conversar (Converse), Convertir (Convert), Encontrar (Find). Todo caso de uso de IA generativa en la guía del examen entra en una de estas cinco categorías. Clasifica cada ejemplo en su familia correspondiente."
  },
  "domain2-genai-fundamentals::usecases::target:create": {
    "name": "Crear"
  },
  "domain2-genai-fundamentals::usecases::target:condense": {
    "name": "Condensar"
  },
  "domain2-genai-fundamentals::usecases::target:converse": {
    "name": "Conversar"
  },
  "domain2-genai-fundamentals::usecases::target:convert": {
    "name": "Convertir"
  },
  "domain2-genai-fundamentals::usecases::target:find": {
    "name": "Encontrar"
  },
  "domain2-genai-fundamentals::usecases::item:c1": {
    "text": "Textos de marketing"
  },
  "domain2-genai-fundamentals::usecases::item:c2": {
    "text": "Generación de imágenes"
  },
  "domain2-genai-fundamentals::usecases::item:c3": {
    "text": "Generación de código"
  },
  "domain2-genai-fundamentals::usecases::item:n1": {
    "text": "Resumen"
  },
  "domain2-genai-fundamentals::usecases::item:n2": {
    "text": "Notas de reuniones"
  },
  "domain2-genai-fundamentals::usecases::item:n3": {
    "text": "Extracción hacia una estructura"
  },
  "domain2-genai-fundamentals::usecases::item:v1": {
    "text": "Asistentes de IA"
  },
  "domain2-genai-fundamentals::usecases::item:v2": {
    "text": "Agentes de servicio al cliente"
  },
  "domain2-genai-fundamentals::usecases::item:v3": {
    "text": "Agentes de voz"
  },
  "domain2-genai-fundamentals::usecases::item:t1": {
    "text": "Traducción"
  },
  "domain2-genai-fundamentals::usecases::item:t2": {
    "text": "Reescritura de estilo y tono"
  },
  "domain2-genai-fundamentals::usecases::item:t3": {
    "text": "Migración de código"
  },
  "domain2-genai-fundamentals::usecases::item:f1": {
    "text": "Búsqueda semántica"
  },
  "domain2-genai-fundamentals::usecases::item:f2": {
    "text": "Bases de conocimiento"
  },
  "domain2-genai-fundamentals::usecases::item:f3": {
    "text": "Asistentes de investigación"
  },
  "domain2-genai-fundamentals::sequence": {
    "title": "Secuencia",
    "footnote": "<strong>Recuerda para el examen:</strong> como AI Practitioner que usa Amazon Bedrock, normalmente te incorporas a este ciclo de vida en el paso 5 o 6; el proveedor ya hizo los pasos 1 a 4. Por eso usar un FM es económico, mientras que crear uno no lo es.",
    "intro": "Siete etapas del ciclo de vida del modelo fundacional, objetivo 2.1.3. Aquí no hay descripciones: solo debes poner las etapas en el orden correcto."
  },
  "domain2-genai-fundamentals::sequence::slottype:stage": {
    "label": "¿Qué etapa va aquí?"
  },
  "domain2-genai-fundamentals::sequence::concept:p1": {
    "name": "Etapa del ciclo de vida del FM",
    "stage": "Selección de datos"
  },
  "domain2-genai-fundamentals::sequence::concept:p2": {
    "name": "Etapa del ciclo de vida del FM",
    "stage": "Selección del modelo"
  },
  "domain2-genai-fundamentals::sequence::concept:p3": {
    "name": "Etapa del ciclo de vida del FM",
    "stage": "Preentrenamiento"
  },
  "domain2-genai-fundamentals::sequence::concept:p4": {
    "name": "Etapa del ciclo de vida del FM",
    "stage": "Ajuste fino (fine-tuning)"
  },
  "domain2-genai-fundamentals::sequence::concept:p5": {
    "name": "Etapa del ciclo de vida del FM",
    "stage": "Evaluación"
  },
  "domain2-genai-fundamentals::sequence::concept:p6": {
    "name": "Etapa del ciclo de vida del FM",
    "stage": "Implementación"
  },
  "domain2-genai-fundamentals::sequence::concept:p7": {
    "name": "Etapa del ciclo de vida del FM",
    "stage": "Retroalimentación"
  },
  "domain2-genai-fundamentals::fm-lifecycle-definitions": {
    "title": "2.1.3 — Definiciones del ciclo de vida del modelo fundacional",
    "instructions": "Relaciona cada definición con la etapa correcta del ciclo de vida del modelo fundacional. Usa el conjunto original de Secuencia cuando quieras practicar solo el orden.",
    "sourceNote": "Master Study Guide §2.1.3: estas son las siete etapas exactas del ciclo de vida y sus significados.",
    "slotLabel": "Definición",
    "checkLabel": "Verificar definiciones",
    "completionCalloutTitle": "Recuerda para el examen",
    "completionCalloutText": "Como AI Practitioner que usa Amazon Bedrock, normalmente entras a este ciclo de vida en el paso 5 o 6, porque el proveedor del modelo fundacional ya completó los pasos 1 a 4. Esta distinción suele resolver preguntas sobre costo y esfuerzo: usar un modelo fundacional existente es comparativamente económico, mientras que crear y preentrenar uno es extremadamente costoso."
  },
  "domain2-genai-fundamentals::fm-lifecycle-definitions::dest:data-selection": {
    "label": "1. Selección de datos"
  },
  "domain2-genai-fundamentals::fm-lifecycle-definitions::dest:model-selection": {
    "label": "2. Selección del modelo"
  },
  "domain2-genai-fundamentals::fm-lifecycle-definitions::dest:pre-training": {
    "label": "3. Preentrenamiento"
  },
  "domain2-genai-fundamentals::fm-lifecycle-definitions::dest:fine-tuning": {
    "label": "4. Ajuste fino (fine-tuning)"
  },
  "domain2-genai-fundamentals::fm-lifecycle-definitions::dest:evaluation": {
    "label": "5. Evaluación"
  },
  "domain2-genai-fundamentals::fm-lifecycle-definitions::dest:deployment": {
    "label": "6. Implementación"
  },
  "domain2-genai-fundamentals::fm-lifecycle-definitions::dest:feedback": {
    "label": "7. Retroalimentación"
  },
  "domain2-genai-fundamentals::fm-lifecycle-definitions::card:c-d2-fm-life-def-01-data-selection": {
    "text": "Elegir y curar el corpus de preentrenamiento: escala, diversidad, calidad, licenciamiento y eliminación de contenido dañino o duplicado.",
    "explanation": "La selección de datos es la etapa de elección y curación del corpus."
  },
  "domain2-genai-fundamentals::fm-lifecycle-definitions::card:c-d2-fm-life-def-02-model-selection": {
    "text": "Elegir la arquitectura y la escala: transformer o difusión, cantidad de parámetros, longitud de contexto y modalidades.",
    "explanation": "La selección del modelo define la arquitectura, el tamaño, la longitud de contexto y las modalidades admitidas."
  },
  "domain2-genai-fundamentals::fm-lifecycle-definitions::card:c-d2-fm-life-def-03-pre-training": {
    "text": "Entrenamiento autosupervisado sobre el corpus sin etiquetar. Es enormemente costoso, generalmente se realiza una sola vez, y es de donde proviene la capacidad general del modelo.",
    "explanation": "El preentrenamiento es la etapa costosa que crea la capacidad general del modelo."
  },
  "domain2-genai-fundamentals::fm-lifecycle-definitions::card:c-d2-fm-life-def-04-fine-tuning": {
    "text": "Adaptar el modelo preentrenado a una tarea, dominio o comportamiento deseado usando un conjunto de datos etiquetado mucho más pequeño. Esto incluye el ajuste por instrucciones (instruction tuning) y RLHF.",
    "explanation": "El ajuste fino (fine-tuning) adapta el modelo ya preentrenado a un comportamiento más específico."
  },
  "domain2-genai-fundamentals::fm-lifecycle-definitions::card:c-d2-fm-life-def-05-evaluation": {
    "text": "Evaluar el modelo usando conjuntos de datos de referencia (benchmark), métricas automatizadas, evaluación humana, enfoques de LLM como juez (LLM-as-a-judge), y pruebas de seguridad y sesgo.",
    "explanation": "La evaluación mide la capacidad, la calidad, la seguridad y el sesgo."
  },
  "domain2-genai-fundamentals::fm-lifecycle-definitions::card:c-d2-fm-life-def-06-deployment": {
    "text": "Servir el modelo a través de una API administrada o infraestructura autoalojada, con las barreras de protección (guardrails) y el monitoreo adecuados.",
    "explanation": "La implementación pone el modelo a disposición de las aplicaciones."
  },
  "domain2-genai-fundamentals::fm-lifecycle-definitions::card:c-d2-fm-life-def-07-feedback": {
    "text": "Recopilar señales del mundo real, como calificaciones de usuarios, escalamientos y casos de fallo, y retroalimentarlas hacia el ajuste fino y la evaluación.",
    "explanation": "La retroalimentación cierra el ciclo para el ajuste fino y la evaluación posteriores."
  },
  "domain2-genai-fundamentals::levers": {
    "title": "Palancas",
    "footnote": "<strong>Error común:</strong> el throughput aprovisionado (provisioned throughput) no es, por defecto, una medida de ahorro de costos. Compra capacidad garantizada, facturada por hora se use o no. Solo ahorra dinero con una utilización constantemente alta.",
    "intro": "Ocho palancas de costo de la Tabla 2.1, objetivo 2.1.4. Esta es la tabla más rentable de todo el dominio para las preguntas de costo, que se repiten en los dominios 2 y 3."
  },
  "domain2-genai-fundamentals::levers::slottype:reduces": {
    "label": "Cómo reduce el costo"
  },
  "domain2-genai-fundamentals::levers::slottype:when": {
    "label": "Cuándo usarla"
  },
  "domain2-genai-fundamentals::levers::concept:smaller": {
    "name": "Elegir un modelo más pequeño",
    "reduces": "Los modelos más pequeños cuestan drásticamente menos por token.",
    "when": "Tareas rutinarias y bien delimitadas: clasificación, extracción, respuestas cortas."
  },
  "domain2-genai-fundamentals::levers::concept:shorten": {
    "name": "Acortar el prompt",
    "reduces": "Menos tokens de entrada en cada llamada.",
    "when": "Recortar instrucciones redundantes y recuperar menos fragmentos, pero de mejor calidad."
  },
  "domain2-genai-fundamentals::levers::concept:limit": {
    "name": "Limitar la longitud de salida",
    "reduces": "Menos tokens de salida —los más costosos— y menor latencia.",
    "when": "Configurar deliberadamente el máximo de tokens en lugar de dejarlo alto."
  },
  "domain2-genai-fundamentals::levers::concept:caching": {
    "name": "Prompt caching (caché de prompts)",
    "reduces": "Reutiliza un prefijo repetido, cobrado a una tarifa reducida en lugar del precio completo en cada llamada.",
    "when": "Prompts de sistema largos o un documento fijo reutilizado en muchas solicitudes."
  },
  "domain2-genai-fundamentals::levers::concept:batch": {
    "name": "Inferencia por lotes (batch inference)",
    "reduces": "Procesamiento masivo asíncrono con un descuento sustancial respecto al modelo bajo demanda (on-demand).",
    "when": "Trabajos grandes fuera de línea donde la latencia no importa."
  },
  "domain2-genai-fundamentals::levers::concept:provisioned": {
    "name": "Throughput aprovisionado (provisioned throughput)",
    "reduces": "Capacidad reservada facturada por tiempo en lugar de por token, con un throughput garantizado comprometido.",
    "when": "Volumen alto, constante y predecible, o cuando un modelo personalizado lo requiere."
  },
  "domain2-genai-fundamentals::levers::concept:distillation": {
    "name": "Destilación de modelos (model distillation)",
    "reduces": "Produce un modelo más pequeño, más rápido y más económico que imita a un modelo maestro más grande en tu tarea.",
    "when": "Volumen muy alto en una tarea acotada donde un modelo de frontera (frontier model) es excesivo."
  },
  "domain2-genai-fundamentals::levers::concept:routing": {
    "name": "Enrutamiento inteligente de prompts (intelligent prompt routing)",
    "reduces": "Enruta automáticamente las solicitudes más simples a un modelo más económico y las más difíciles a un modelo más potente.",
    "when": "Cargas de trabajo mixtas con una amplia dispersión de dificultad."
  },
  "domain2-genai-fundamentals::leverfit": {
    "title": "Ajuste de palancas",
    "footnote": "<strong>Andes Retail hace las cuentas:</strong> un prompt de sistema de 4,200 tokens enviado con cada una de las 500,000 solicitudes mensuales equivale a 2.1 mil millones de tokens de entrada gastados en reenviar el mismo texto. Poner en caché el prefijo fijo y trasladar la clasificación rutinaria a un modelo más pequeño reducen el costo sin afectar la calidad en las preguntas que sí la necesitan.",
    "intro": "Seis palancas, doce escenarios extraídos de los ejemplos resueltos del objetivo 2.1.4. Esto se acerca más a cómo el examen realmente formula las preguntas de costo: una situación, no una definición."
  },
  "domain2-genai-fundamentals::leverfit::target:caching": {
    "name": "Prompt caching (caché de prompts)"
  },
  "domain2-genai-fundamentals::leverfit::target:batch": {
    "name": "Inferencia por lotes (batch inference)"
  },
  "domain2-genai-fundamentals::leverfit::target:provisioned": {
    "name": "Throughput aprovisionado (provisioned throughput)"
  },
  "domain2-genai-fundamentals::leverfit::target:smaller": {
    "name": "Modelo más pequeño"
  },
  "domain2-genai-fundamentals::leverfit::target:limit": {
    "name": "Limitar la longitud de salida"
  },
  "domain2-genai-fundamentals::leverfit::target:routing": {
    "name": "Enrutamiento inteligente de prompts (intelligent prompt routing)"
  },
  "domain2-genai-fundamentals::leverfit::item:s1": {
    "text": "Un prompt de sistema de 4,200 tokens que contiene un documento de políticas que nunca cambia se envía con cada una de las 500,000 solicitudes mensuales."
  },
  "domain2-genai-fundamentals::leverfit::item:s2": {
    "text": "Un prompt de sistema largo o un documento fijo se reutiliza en muchas solicitudes."
  },
  "domain2-genai-fundamentals::leverfit::item:s3": {
    "text": "80,000 informes de excepciones de entrega deben resumirse durante la noche; los resultados se necesitan para las 7 a.m. y nadie está esperando un resumen individual."
  },
  "domain2-genai-fundamentals::leverfit::item:s4": {
    "text": "Un trabajo grande fuera de línea donde la latencia no importa, ofrecido con un descuento respecto a las tarifas bajo demanda (on-demand)."
  },
  "domain2-genai-fundamentals::leverfit::item:s5": {
    "text": "El tráfico es constante, alto y predecible, y la aplicación requiere un throughput garantizado."
  },
  "domain2-genai-fundamentals::leverfit::item:s6": {
    "text": "Un modelo personalizado requiere capacidad reservada y comprometida."
  },
  "domain2-genai-fundamentals::leverfit::item:s7": {
    "text": "3 millones de mensajes de soporte cortos al mes deben clasificarse en 8 categorías, y un modelo pequeño ya funciona bien."
  },
  "domain2-genai-fundamentals::leverfit::item:s8": {
    "text": "Una tarea rutinaria y bien delimitada: clasificación, extracción o respuestas cortas."
  },
  "domain2-genai-fundamentals::leverfit::item:s9": {
    "text": "Las respuestas son lentas y costosas porque el modelo sigue generando respuestas largas."
  },
  "domain2-genai-fundamentals::leverfit::item:s10": {
    "text": "Configurar deliberadamente el máximo de tokens, tanto como control de costo como control de latencia."
  },
  "domain2-genai-fundamentals::leverfit::item:s11": {
    "text": "Una carga de trabajo mixta tiene una amplia dispersión de dificultad, desde búsquedas triviales hasta razonamiento complejo."
  },
  "domain2-genai-fundamentals::leverfit::item:s12": {
    "text": "Las solicitudes simples deben ir automáticamente a un modelo más económico, y las más difíciles, a un modelo más potente."
  },
  "domain2-genai-fundamentals::context": {
    "title": "Contexto",
    "footnote": "<strong>Error común:</strong> más contexto no es mejor contexto. Lumen Legal redujo su recuperación de los 20 fragmentos principales a los 5 principales con reordenamiento (re-ranking), y tanto el tamaño del prompt como la precisión de las respuestas mejoraron a la vez.",
    "intro": "Seis elementos que compiten por espacio en la ventana de contexto de un modelo, objetivo 2.1.5. Este es un objetivo nuevo en la v1.1, y el punto central es que la ventana es finita y cada token dentro de ella se factura."
  },
  "domain2-genai-fundamentals::context::slottype:content": {
    "label": "Contenido típico"
  },
  "domain2-genai-fundamentals::context::slottype:decision": {
    "label": "Decisión de ingeniería"
  },
  "domain2-genai-fundamentals::context::concept:system": {
    "name": "Instrucciones del sistema",
    "content": "Rol, tono, reglas, formato de salida, política de rechazo.",
    "decision": "Mantenerlas estables y ponerlas en caché; no reescribirlas en cada solicitud."
  },
  "domain2-genai-fundamentals::context::concept:retrieved": {
    "name": "Contexto recuperado",
    "content": "Fragmentos extraídos de una base de conocimiento por similitud.",
    "decision": "Cuántos fragmentos, de qué tamaño, con o sin reordenamiento (re-ranking)."
  },
  "domain2-genai-fundamentals::context::concept:history": {
    "name": "Historial de conversación",
    "content": "Turnos anteriores en una sesión de varios turnos.",
    "decision": "Conservar todo, conservar los últimos N turnos, o resumir los turnos más antiguos."
  },
  "domain2-genai-fundamentals::context::concept:tools": {
    "name": "Definiciones de herramientas",
    "content": "Esquemas que describen las funciones que un agente puede invocar.",
    "decision": "Exponer solo las herramientas relevantes para la tarea actual."
  },
  "domain2-genai-fundamentals::context::concept:fewshot": {
    "name": "Ejemplos few-shot",
    "content": "Demostraciones del comportamiento de entrada-salida deseado.",
    "decision": "Suficientes para establecer el patrón, no más."
  },
  "domain2-genai-fundamentals::context::concept:request": {
    "name": "La solicitud real del usuario",
    "content": "La pregunta que se está haciendo en este momento.",
    "decision": "Nunca debería quedar desplazada por lo anterior."
  },
  "domain2-genai-fundamentals::patterns": {
    "title": "Patrones",
    "footnote": "<strong>Busca al coordinador:</strong> un agente por encima de los demás que delega en especialistas indica un patrón de supervisor. Pares que se transfieren tareas entre sí sin un líder fijo indican un enjambre (swarm).",
    "intro": "Cinco patrones multiagente de la Tabla 2.2, objetivo 2.1.6, el objetivo más denso de la guía. Aprende cómo funciona cada uno y para qué sirve."
  },
  "domain2-genai-fundamentals::patterns::slottype:works": {
    "label": "Cómo funciona"
  },
  "domain2-genai-fundamentals::patterns::slottype:best": {
    "label": "Ideal para"
  },
  "domain2-genai-fundamentals::patterns::concept:single": {
    "name": "Agente único",
    "works": "Un solo agente con un conjunto de herramientas gestiona toda la tarea.",
    "best": "Tareas bien delimitadas con una cantidad modesta de herramientas."
  },
  "domain2-genai-fundamentals::patterns::concept:supervisor": {
    "name": "Supervisor / orquestador",
    "works": "Un agente líder descompone el objetivo y delega subtareas a agentes especialistas, y luego ensambla el resultado.",
    "best": "Tareas complejas que abarcan varios dominios de especialización."
  },
  "domain2-genai-fundamentals::patterns::concept:astool": {
    "name": "Agente como herramienta",
    "works": "Un agente especialista se expone a otro agente como si fuera una herramienta invocable.",
    "best": "Reutilizar un especialista capaz sin fijar una jerarquía rígida."
  },
  "domain2-genai-fundamentals::patterns::concept:swarm": {
    "name": "Enjambre (swarm) / colaboración entre pares",
    "works": "Los agentes trabajan como pares, transfiriéndose tareas entre sí sin un supervisor fijo.",
    "best": "Trabajo exploratorio donde no se conoce de antemano la secuencia correcta."
  },
  "domain2-genai-fundamentals::patterns::concept:sequential": {
    "name": "Canalización secuencial (pipeline)",
    "works": "Los agentes se ejecutan en un orden fijo, y cada uno consume la salida del anterior.",
    "best": "Flujos de trabajo deterministas y auditables."
  },
  "domain2-genai-fundamentals::stack": {
    "title": "Pila",
    "footnote": "<strong>Confusión común:</strong> Strands Agents es el SDK de código abierto con el que construyes un agente. AgentCore es la infraestructura administrada sobre la que lo ejecutas en producción. Construyes con Strands y ejecutas en AgentCore: son complementarios, no alternativas.",
    "intro": "Cinco capas de la pila agéntica de AWS, Figura 2.5, objetivo 2.1.6. Aprende qué componente específico se ubica en cada capa, desde la aplicación hasta el modelo."
  },
  "domain2-genai-fundamentals::stack::slottype:component": {
    "label": "Componente específico"
  },
  "domain2-genai-fundamentals::stack::slottype:does": {
    "label": "Qué hace"
  },
  "domain2-genai-fundamentals::stack::concept:appl": {
    "name": "Capa de aplicación",
    "component": "La aplicación de negocio",
    "does": "Define el objetivo y consume el resultado."
  },
  "domain2-genai-fundamentals::stack::concept:orch": {
    "name": "Orquestación",
    "component": "Impulsada por el modelo o por un flujo de trabajo",
    "does": "Decide qué agente o paso se ejecuta a continuación, gestiona los reintentos y aplica límites."
  },
  "domain2-genai-fundamentals::stack::concept:framework": {
    "name": "Framework de agentes",
    "component": "Strands Agents",
    "does": "SDK de código abierto: defines un modelo, un prompt y herramientas, y el SDK ejecuta el ciclo del agente."
  },
  "domain2-genai-fundamentals::stack::concept:runtime": {
    "name": "Runtime e infraestructura del agente",
    "component": "Amazon Bedrock AgentCore",
    "does": "Runtime con aislamiento de sesiones, Memory, Gateway para herramientas MCP, Identity, Observability, Code Interpreter y Browser."
  },
  "domain2-genai-fundamentals::stack::concept:model": {
    "name": "Modelo fundacional",
    "component": "Amazon Bedrock",
    "does": "El motor de razonamiento que planifica, decide y genera."
  },
  "domain2-genai-fundamentals::memory": {
    "title": "Memoria",
    "footnote": "<strong>En AWS:</strong> Amazon Bedrock AgentCore Memory ofrece memoria administrada tanto a corto como a largo plazo, de modo que los desarrolladores no tienen que construir la persistencia por su cuenta.",
    "intro": "Dos tipos de memoria, cuatro afirmaciones. Una verificación breve y precisa de una distinción que al examen le gusta evaluar con una sola palabra decisiva: sesión, o entre sesiones."
  },
  "domain2-genai-fundamentals::memory::target:short": {
    "name": "Memoria a corto plazo (de trabajo)",
    "sub": "La sesión"
  },
  "domain2-genai-fundamentals::memory::target:long": {
    "name": "Memoria a largo plazo",
    "sub": "Entre sesiones"
  },
  "domain2-genai-fundamentals::memory::item:m1": {
    "text": "Se mantiene en la ventana de contexto."
  },
  "domain2-genai-fundamentals::memory::item:m2": {
    "text": "Dura solo durante la sesión actual."
  },
  "domain2-genai-fundamentals::memory::item:m3": {
    "text": "Se persiste fuera de la ventana de contexto y se recupera cuando es relevante."
  },
  "domain2-genai-fundamentals::memory::item:m4": {
    "text": "Hechos, preferencias y resultados pasados que perduran entre conversaciones separadas, con semanas de diferencia."
  },
  "domain2-genai-fundamentals::advlim": {
    "title": "Ventajas y limitaciones",
    "footnote": "<strong>Error común:</strong> la alucinación (hallucination) no es un error que se pueda corregir con un parche. En el examen, las respuestas correctas siempre son mitigaciones —anclaje (grounding), validación, citación, revisión humana— nunca “un modelo que no alucina”.",
    "intro": "Cinco ventajas, siete limitaciones, objetivos 2.2.1 y 2.2.2. Clasifica cada nombre en la lista a la que pertenece; el examen a veces intercambia uno de cada lista como distractor."
  },
  "domain2-genai-fundamentals::advlim::target:adv": {
    "name": "Ventaja",
    "sub": "Objetivo 2.2.1"
  },
  "domain2-genai-fundamentals::advlim::target:lim": {
    "name": "Limitación",
    "sub": "Objetivo 2.2.2"
  },
  "domain2-genai-fundamentals::advlim::item:a1": {
    "text": "Adaptabilidad"
  },
  "domain2-genai-fundamentals::advlim::item:a2": {
    "text": "Capacidad de respuesta"
  },
  "domain2-genai-fundamentals::advlim::item:a3": {
    "text": "Capacidad conversacional"
  },
  "domain2-genai-fundamentals::advlim::item:a4": {
    "text": "Capacidad de generar contenido"
  },
  "domain2-genai-fundamentals::advlim::item:a5": {
    "text": "Baja barrera de entrada"
  },
  "domain2-genai-fundamentals::advlim::item:l1": {
    "text": "Alucinación (hallucination)"
  },
  "domain2-genai-fundamentals::advlim::item:l2": {
    "text": "Interpretabilidad"
  },
  "domain2-genai-fundamentals::advlim::item:l3": {
    "text": "Imprecisión"
  },
  "domain2-genai-fundamentals::advlim::item:l4": {
    "text": "No determinismo"
  },
  "domain2-genai-fundamentals::advlim::item:l5": {
    "text": "Costo a escala"
  },
  "domain2-genai-fundamentals::advlim::item:l6": {
    "text": "Actualidad de los datos"
  },
  "domain2-genai-fundamentals::advlim::item:l7": {
    "text": "Sesgo y toxicidad"
  },
  "domain2-genai-fundamentals::selection": {
    "title": "Selección",
    "footnote": "<strong>El cumplimiento es un filtro estricto:</strong> si un modelo no se puede usar en una Región permitida, su calidad es irrelevante. Aplica primero el cumplimiento y la modalidad, y luego compara entre los que queden.",
    "intro": "Nueve factores para elegir un modelo de IA generativa, objetivo 2.2.3. La columna que realmente se evalúa es dónde impacta cada factor: el fallo concreto que provoca."
  },
  "domain2-genai-fundamentals::selection::slottype:bites": {
    "label": "Dónde impacta"
  },
  "domain2-genai-fundamentals::selection::concept:modality": {
    "name": "Tipo de modelo y modalidad",
    "bites": "La entrada de imágenes descarta de inmediato los modelos solo de texto."
  },
  "domain2-genai-fundamentals::selection::concept:perf": {
    "name": "Rendimiento y capacidad",
    "bites": "Los benchmarks ayudan, pero lo que realmente cuenta es tu propio conjunto de evaluación."
  },
  "domain2-genai-fundamentals::selection::concept:cost": {
    "name": "Costo",
    "bites": "Un modelo de frontera (frontier model) en una tarea rutinaria de alto volumen es el clásico sobregasto."
  },
  "domain2-genai-fundamentals::selection::concept:latency": {
    "name": "Latencia",
    "bites": "Los modelos más grandes son más lentos; los usos interactivos pueden necesitar uno más pequeño."
  },
  "domain2-genai-fundamentals::selection::concept:size": {
    "name": "Complejidad y tamaño del modelo",
    "bites": "Más pequeño significa más económico y más rápido, a menudo sin pérdida de calidad en tareas acotadas."
  },
  "domain2-genai-fundamentals::selection::concept:constraints": {
    "name": "Restricciones",
    "bites": "Un documento de 200 páginas necesita una ventana de contexto larga o fragmentación (chunking)."
  },
  "domain2-genai-fundamentals::selection::concept:compliance": {
    "name": "Cumplimiento",
    "bites": "Puede eliminar por completo a modelos que de otro modo serían ideales."
  },
  "domain2-genai-fundamentals::selection::concept:custom": {
    "name": "Personalización",
    "bites": "No todos los modelos en Bedrock admiten todas las rutas de personalización."
  },
  "domain2-genai-fundamentals::selection::concept:multilingual": {
    "name": "Multilingüe",
    "bites": "Los puntajes de benchmarks en inglés no se trasladan automáticamente al español."
  },
  "domain2-genai-fundamentals::bizmetrics": {
    "title": "Métricas de negocio",
    "footnote": "<strong>Las métricas de modelo responden “¿esto está funcionando?”. Las métricas de negocio responden “¿vale la pena hacer esto?”.</strong> No mezcles ambas familias.",
    "intro": "Siete métricas de valor de negocio, objetivo 2.2.4. Este es exactamente el conjunto nombrado en la guía del examen: aprende la lista, ya que aparecen como opciones de respuesta."
  },
  "domain2-genai-fundamentals::bizmetrics::slottype:measures": {
    "label": "Qué mide"
  },
  "domain2-genai-fundamentals::bizmetrics::concept:crossdomain": {
    "name": "Rendimiento entre dominios",
    "measures": "Qué tan bien maneja un modelo tareas en varias áreas de negocio: el principal argumento a favor de una plataforma de FM compartida."
  },
  "domain2-genai-fundamentals::bizmetrics::concept:roi": {
    "name": "Retorno de la inversión (ROI)",
    "measures": "Beneficio neto frente al costo total de la iniciativa."
  },
  "domain2-genai-fundamentals::bizmetrics::concept:efficiency": {
    "name": "Eficiencia",
    "measures": "Tiempo o esfuerzo ahorrado por tarea, por ejemplo el tiempo de gestión en un centro de contacto."
  },
  "domain2-genai-fundamentals::bizmetrics::concept:conversion": {
    "name": "Tasa de conversión",
    "measures": "Proporción de interacciones que producen el resultado comercial deseado."
  },
  "domain2-genai-fundamentals::bizmetrics::concept:arpu": {
    "name": "Ingreso promedio por usuario",
    "measures": "Efecto en los ingresos de la función de IA por cliente."
  },
  "domain2-genai-fundamentals::bizmetrics::concept:accuracy": {
    "name": "Precisión",
    "measures": "Con qué frecuencia la salida es correcta, evaluada frente a un estándar de negocio en lugar de un conjunto de etiquetas."
  },
  "domain2-genai-fundamentals::bizmetrics::concept:clv": {
    "name": "Valor de vida del cliente",
    "measures": "Valor de la relación a largo plazo, usado para justificar el trabajo de retención y personalización."
  },
  "domain2-genai-fundamentals::layers": {
    "title": "Capas",
    "footnote": "<strong>Error común:</strong> la nomenclatura cambió recientemente. Amazon QuickSight pasó a llamarse Amazon Quick Suite, listado simplemente como “Amazon Quick” en la guía del examen. Kiro es el sucesor declarado de Amazon Q Developer para la asistencia basada en IDE.",
    "intro": "Ocho servicios de AWS de la Tabla 2.3, objetivo 2.3.1. Cada uno se ubica en una capa diferente de la pila de GenAI; la capa suele ser la forma más rápida de descartar respuestas incorrectas."
  },
  "domain2-genai-fundamentals::layers::slottype:layer": {
    "label": "Capa"
  },
  "domain2-genai-fundamentals::layers::slottype:role": {
    "label": "Rol en una línea"
  },
  "domain2-genai-fundamentals::layers::concept:bedrock": {
    "name": "Amazon Bedrock",
    "layer": "Acceso a modelos",
    "role": "API totalmente administrada y sin servidor hacia modelos fundacionales de múltiples proveedores, además de Knowledge Bases, Guardrails, Agents, Flows, Prompt Management y Model Evaluation."
  },
  "domain2-genai-fundamentals::layers::concept:smai": {
    "name": "Amazon SageMaker AI",
    "layer": "Plataforma de ML",
    "role": "Crear, entrenar, ajustar, implementar y monitorear modelos personalizados, con control total de las instancias y la infraestructura."
  },
  "domain2-genai-fundamentals::layers::concept:jumpstart": {
    "name": "Amazon SageMaker JumpStart",
    "layer": "Centro de modelos",
    "role": "Modelos preentrenados y de código abierto, además de plantillas de soluciones, implementables en tus propios endpoints de SageMaker."
  },
  "domain2-genai-fundamentals::layers::concept:agentcore": {
    "name": "Amazon Bedrock AgentCore",
    "layer": "Infraestructura de agentes",
    "role": "Runtime de producción para agentes: aislamiento de sesiones, Memory, Gateway, Identity, Observability, Code Interpreter y Browser."
  },
  "domain2-genai-fundamentals::layers::concept:strands": {
    "name": "Strands Agents",
    "layer": "SDK de agentes",
    "role": "SDK de código abierto e impulsado por el modelo para construir agentes a partir de un modelo, un prompt y un conjunto de herramientas."
  },
  "domain2-genai-fundamentals::layers::concept:kiro": {
    "name": "Kiro",
    "layer": "Herramientas para desarrolladores",
    "role": "IDE agéntico impulsado por especificaciones: genera documentos de requisitos, diseño y tareas antes de escribir código."
  },
  "domain2-genai-fundamentals::layers::concept:amazonq": {
    "name": "Amazon Q",
    "layer": "Asistente",
    "role": "Asistente de IA disponible en las distintas superficies de AWS, incluidas la consola y la documentación."
  },
  "domain2-genai-fundamentals::layers::concept:quick": {
    "name": "Amazon Quick",
    "layer": "Inteligencia de negocio y espacio de trabajo agéntico",
    "role": "Evolución de Amazon QuickSight: paneles y BI, además de investigación agéntica, chat y automatización de flujos de trabajo."
  },
  "domain2-genai-fundamentals::trigger": {
    "title": "Disparadores",
    "footnote": "<strong>Directo de la Tabla 2.3:</strong> “elígelo cuando el enunciado diga…”; así es exactamente como la guía del examen plantea la selección de servicios.",
    "intro": "Los mismos ocho servicios, esta vez relacionados con la frase de un escenario que apunta a cada uno. Esto es lo más cercano que este dominio llega a cómo el examen real presenta una pregunta de selección de servicio."
  },
  "domain2-genai-fundamentals::trigger::target:bedrock": {
    "name": "Amazon Bedrock"
  },
  "domain2-genai-fundamentals::trigger::target:smai": {
    "name": "Amazon SageMaker AI"
  },
  "domain2-genai-fundamentals::trigger::target:jumpstart": {
    "name": "Amazon SageMaker JumpStart"
  },
  "domain2-genai-fundamentals::trigger::target:agentcore": {
    "name": "Amazon Bedrock AgentCore"
  },
  "domain2-genai-fundamentals::trigger::target:strands": {
    "name": "Strands Agents"
  },
  "domain2-genai-fundamentals::trigger::target:kiro": {
    "name": "Kiro"
  },
  "domain2-genai-fundamentals::trigger::target:amazonq": {
    "name": "Amazon Q"
  },
  "domain2-genai-fundamentals::trigger::target:quick": {
    "name": "Amazon Quick"
  },
  "domain2-genai-fundamentals::trigger::item:t1": {
    "text": "“queremos usar un modelo fundacional sin gestionar infraestructura”"
  },
  "domain2-genai-fundamentals::trigger::item:t2": {
    "text": "“necesitamos entrenar nuestro propio modelo” o “necesitamos control total del endpoint”"
  },
  "domain2-genai-fundamentals::trigger::item:t3": {
    "text": "“queremos un modelo de código abierto implementado en nuestro propio entorno”"
  },
  "domain2-genai-fundamentals::trigger::item:t4": {
    "text": "“tenemos un prototipo de agente funcional y necesitamos ejecutarlo de forma segura en producción”"
  },
  "domain2-genai-fundamentals::trigger::item:t5": {
    "text": "“queremos construir un agente en código con un mínimo de código repetitivo (boilerplate)”"
  },
  "domain2-genai-fundamentals::trigger::item:t6": {
    "text": "“los desarrolladores necesitan un IDE asistido por IA que planifique antes de programar”"
  },
  "domain2-genai-fundamentals::trigger::item:t7": {
    "text": "“ayuden a nuestro personal a consultar AWS o nuestros sistemas de negocio de forma conversacional”"
  },
  "domain2-genai-fundamentals::trigger::item:t8": {
    "text": "“los usuarios de negocio necesitan paneles, análisis en lenguaje natural o investigación automatizada”"
  },
  "domain2-genai-fundamentals::whyaws": {
    "title": "Por qué AWS",
    "footnote": "<strong>Recuerda para el examen:</strong> tus prompts y las respuestas generadas (completions) no se usan para entrenar los modelos fundacionales subyacentes en Amazon Bedrock, y no se comparten con los proveedores de los modelos. Este único hecho es uno de los más evaluados en el Dominio 2 y el Dominio 5.",
    "intro": "Once razones para construir en AWS, combinando las ventajas de los servicios de GenAI de AWS (2.3.2) y los beneficios de infraestructura (2.3.3). Tablas distintas, la misma pregunta de fondo: ¿qué obtienes al construir aquí en lugar de en otro lugar?"
  },
  "domain2-genai-fundamentals::whyaws::slottype:gives": {
    "label": "Qué te da"
  },
  "domain2-genai-fundamentals::whyaws::concept:accessibility": {
    "name": "Accesibilidad",
    "gives": "Múltiples proveedores de modelos líderes detrás de una sola API y un solo conjunto de credenciales."
  },
  "domain2-genai-fundamentals::whyaws::concept:barrier": {
    "name": "Menor barrera de entrada",
    "gives": "Sin clústeres de GPU que adquirir, sin modelo que entrenar, sin necesidad de un doctorado en ML."
  },
  "domain2-genai-fundamentals::whyaws::concept:efficiency2": {
    "name": "Eficiencia",
    "gives": "Knowledge Bases, Guardrails, Agents y la evaluación administrados reemplazan componentes que de otro modo tendrías que construir."
  },
  "domain2-genai-fundamentals::whyaws::concept:costeff": {
    "name": "Rentabilidad",
    "gives": "Pago por token sin infraestructura inactiva, además de procesamiento por lotes, caché y destilación como palancas de costo."
  },
  "domain2-genai-fundamentals::whyaws::concept:speed": {
    "name": "Velocidad de salida al mercado",
    "gives": "Un prototipo funcional en horas en lugar de un proyecto de entrenamiento de meses."
  },
  "domain2-genai-fundamentals::whyaws::concept:meeting": {
    "name": "Cumplimiento de objetivos de negocio",
    "gives": "La misma plataforma escala del experimento a la producción sin necesidad de migrar de plataforma."
  },
  "domain2-genai-fundamentals::whyaws::concept:security2": {
    "name": "Seguridad",
    "gives": "IAM para acceso granular, AWS KMS para cifrado con llaves administradas por el cliente, y AWS PrivateLink para mantener el tráfico fuera de la Internet pública."
  },
  "domain2-genai-fundamentals::whyaws::concept:compliance2": {
    "name": "Cumplimiento",
    "gives": "AWS Artifact para informes de cumplimiento, AWS Audit Manager para la recopilación de evidencia, AWS Config para el cumplimiento de configuración, y CloudTrail para un registro auditable de la API."
  },
  "domain2-genai-fundamentals::whyaws::concept:responsibility": {
    "name": "Responsabilidad",
    "gives": "El modelo de responsabilidad compartida de AWS establece una línea clara entre lo que AWS asegura y lo que tú aseguras."
  },
  "domain2-genai-fundamentals::whyaws::concept:safety2": {
    "name": "Seguridad del contenido (safety)",
    "gives": "Amazon Bedrock Guardrails aplica filtros de contenido, temas denegados, filtros de palabras, redacción de PII y verificaciones de anclaje contextual (contextual grounding) de manera consistente en todos los modelos."
  },
  "domain2-genai-fundamentals::whyaws::concept:privacy": {
    "name": "Privacidad de datos",
    "gives": "Tus prompts y respuestas generadas (completions) no se usan para entrenar los modelos fundacionales subyacentes, y no se comparten con los proveedores de los modelos."
  },
  "domain2-genai-fundamentals::costtradeoffs": {
    "title": "Compensaciones de costos",
    "footnote": "<strong>Se conecta con 2.1.4:</strong> el precio basado en tokens, el throughput aprovisionado y el costo de los modelos personalizados reaparecen aquí desde las rondas anteriores de palancas de costo. Los mismos hechos, planteados como compensaciones en lugar de palancas.",
    "intro": "Siete compensaciones de costo del objetivo 2.3.4. Cada una es una tensión genuina, no una ganancia gratuita; la columna de orientación es lo que el examen realmente evalúa."
  },
  "domain2-genai-fundamentals::costtradeoffs::slottype:guidance": {
    "label": "Orientación"
  },
  "domain2-genai-fundamentals::costtradeoffs::concept:respcost": {
    "name": "Capacidad de respuesta frente a costo",
    "guidance": "Ajusta el modelo a la interacción. El chat interactivo necesita velocidad; el procesamiento por lotes nocturno no."
  },
  "domain2-genai-fundamentals::costtradeoffs::concept:availability": {
    "name": "Disponibilidad y redundancia",
    "guidance": "Justifica la implementación multi-Región frente a un requisito de disponibilidad real."
  },
  "domain2-genai-fundamentals::costtradeoffs::concept:perfcost": {
    "name": "Rendimiento frente a costo",
    "guidance": "Usa el modelo más pequeño que supere tu umbral de evaluación; considera el enrutamiento inteligente de prompts para cargas de trabajo mixtas."
  },
  "domain2-genai-fundamentals::costtradeoffs::concept:regional": {
    "name": "Cobertura regional",
    "guidance": "Verifica la disponibilidad del modelo desde el principio; puede eliminar un modelo por completo."
  },
  "domain2-genai-fundamentals::costtradeoffs::concept:tokenpricing": {
    "name": "Precio basado en tokens",
    "guidance": "Recorta los prompts, limita la salida, pon en caché los prefijos repetidos."
  },
  "domain2-genai-fundamentals::costtradeoffs::concept:provisioned2": {
    "name": "Throughput aprovisionado",
    "guidance": "Capacidad reservada facturada por tiempo; predecible y garantizada, pero desperdiciada cuando está inactiva. Solo conviene con una utilización constantemente alta."
  },
  "domain2-genai-fundamentals::costtradeoffs::concept:custommodels": {
    "name": "Modelos personalizados",
    "guidance": "El ajuste fino agrega costo de entrenamiento más almacenamiento continuo y, a menudo, hospedaje aprovisionado. Confirma primero que el prompting y RAG realmente no puedan cumplir con el requisito."
  },
  "domain2-genai-fundamentals::limitations-detail": {
    "title": "Limitaciones y mitigaciones de GenAI",
    "footnote": "Guía §2.2.2: la respuesta correcta normalmente es una mitigación, como anclaje (grounding), validación, citas, revisión humana o controles, no un modelo que mágicamente no tenga ninguna limitación.",
    "intro": "El objetivo 2.2.2 nombra las limitaciones directamente. Relaciona cada limitación con la pista práctica del examen y el enfoque de mitigación."
  },
  "domain2-genai-fundamentals::limitations-detail::slottype:clue": {
    "label": "Pista del examen o mitigación"
  },
  "domain2-genai-fundamentals::limitations-detail::concept:hallucination": {
    "name": "Alucinación (hallucination)",
    "clue": "El modelo inventa hechos plausibles pero falsos; se mitiga con anclaje (grounding), citas, validación y revisión humana."
  },
  "domain2-genai-fundamentals::limitations-detail::concept:interpretability": {
    "name": "Interpretabilidad",
    "clue": "Es difícil explicar exactamente por qué un modelo produjo una respuesta, especialmente en decisiones reguladas."
  },
  "domain2-genai-fundamentals::limitations-detail::concept:inaccuracy": {
    "name": "Imprecisión",
    "clue": "Las salidas pueden ser incorrectas incluso cuando son fluidas; evalúalas contra estándares específicos de la tarea."
  },
  "domain2-genai-fundamentals::limitations-detail::concept:nondeterminism": {
    "name": "No determinismo",
    "clue": "El mismo prompt puede producir salidas diferentes, por lo que no se garantiza una repetibilidad exacta."
  },
  "domain2-genai-fundamentals::limitations-detail::concept:costscale": {
    "name": "Costo a escala",
    "clue": "Los costos de tokens, los prompts largos y las salidas largas se vuelven costosos con un alto volumen de solicitudes."
  },
  "domain2-genai-fundamentals::limitations-detail::concept:datacurrency": {
    "name": "Actualidad de los datos",
    "clue": "Un modelo puede no conocer hechos recientes a menos que esté conectado a recuperación o a fuentes de datos actualizadas."
  },
  "domain2-genai-fundamentals::limitations-detail::concept:biastoxicity": {
    "name": "Sesgo y toxicidad",
    "clue": "Los modelos pueden reproducir patrones dañinos de los datos de entrenamiento; usa barreras de protección (guardrails), filtrado y evaluación."
  },
  "domain2-genai-fundamentals::bedrockcaps": {
    "title": "Capacidades de Bedrock",
    "footnote": "Guía §2.3.1: Bedrock es acceso a modelos más Knowledge Bases, Guardrails, Agents, Flows, Prompt Management, Model Evaluation y personalización.",
    "intro": "Amazon Bedrock aparece en todo el Dominio 2. Relaciona cada capacidad con el problema que resuelve."
  },
  "domain2-genai-fundamentals::bedrockcaps::slottype:solves": {
    "label": "Problema resuelto"
  },
  "domain2-genai-fundamentals::bedrockcaps::concept:kb": {
    "name": "Bedrock Knowledge Bases",
    "solves": "RAG administrado: fragmentar, generar embeddings, recuperar contexto de datos empresariales y anclar la respuesta de un modelo."
  },
  "domain2-genai-fundamentals::bedrockcaps::concept:guardrails": {
    "name": "Bedrock Guardrails",
    "solves": "Aplicar políticas de seguridad como filtros de contenido, temas denegados, redacción de PII y verificaciones de anclaje contextual en todos los modelos."
  },
  "domain2-genai-fundamentals::bedrockcaps::concept:agents": {
    "name": "Bedrock Agents",
    "solves": "Permitir que un FM planifique e invoque API o herramientas para completar tareas de varios pasos."
  },
  "domain2-genai-fundamentals::bedrockcaps::concept:flows": {
    "name": "Bedrock Flows",
    "solves": "Orquestar visualmente un flujo de trabajo de GenAI conectando prompts, modelos, condiciones y llamadas a servicios."
  },
  "domain2-genai-fundamentals::bedrockcaps::concept:promptmgmt": {
    "name": "Bedrock Prompt Management",
    "solves": "Versionar, probar y reutilizar prompts en lugar de copiar el texto del prompt entre aplicaciones."
  },
  "domain2-genai-fundamentals::bedrockcaps::concept:modeleval": {
    "name": "Bedrock Model Evaluation",
    "solves": "Comparar las salidas de los modelos mediante evaluación automatizada o humana antes de seleccionar un modelo."
  },
  "domain2-genai-fundamentals::bedrockcaps::concept:customization": {
    "name": "Personalización de modelos de Bedrock",
    "solves": "Adaptar un modelo fundacional compatible cuando el prompting o RAG no son suficientes."
  },
  "domain2-genai-fundamentals::genaisvccompare": {
    "title": "Comparaciones de servicios de GenAI",
    "footnote": "Guía §2.3.1: la elección de servicio es, en gran medida, una elección de capa: acceso a modelos, plataforma de ML, centro de modelos, runtime de agentes, SDK de agentes, IDE, asistente o espacio de trabajo de BI.",
    "intro": "Clasifica la pista del escenario según el servicio o capa de GenAI de AWS al que, según la guía, apunta."
  },
  "domain2-genai-fundamentals::genaisvccompare::target:bedrock": {
    "name": "Amazon Bedrock"
  },
  "domain2-genai-fundamentals::genaisvccompare::target:sagemaker": {
    "name": "SageMaker AI"
  },
  "domain2-genai-fundamentals::genaisvccompare::target:jumpstart": {
    "name": "SageMaker JumpStart"
  },
  "domain2-genai-fundamentals::genaisvccompare::target:agentcore": {
    "name": "Bedrock AgentCore"
  },
  "domain2-genai-fundamentals::genaisvccompare::target:strands": {
    "name": "Strands Agents"
  },
  "domain2-genai-fundamentals::genaisvccompare::target:kiro": {
    "name": "Kiro"
  },
  "domain2-genai-fundamentals::genaisvccompare::target:amazonq": {
    "name": "Amazon Q"
  },
  "domain2-genai-fundamentals::genaisvccompare::target:quick": {
    "name": "Amazon Quick"
  },
  "domain2-genai-fundamentals::genaisvccompare::item:cmp1": {
    "text": "Usar un modelo fundacional de múltiples proveedores a través de una API administrada y sin servidor."
  },
  "domain2-genai-fundamentals::genaisvccompare::item:cmp2": {
    "text": "Entrenar e implementar tu propio modelo de ML personalizado con control total del endpoint."
  },
  "domain2-genai-fundamentals::genaisvccompare::item:cmp3": {
    "text": "Implementar un modelo preentrenado de código abierto desde un centro de modelos en tu propio entorno de SageMaker."
  },
  "domain2-genai-fundamentals::genaisvccompare::item:cmp4": {
    "text": "Ejecutar un prototipo de agente funcional de forma segura en producción con memoria, identidad, gateway y observabilidad administrados."
  },
  "domain2-genai-fundamentals::genaisvccompare::item:cmp5": {
    "text": "Construir un agente en código a partir de un modelo, un prompt y herramientas, con un mínimo de código repetitivo (boilerplate)."
  },
  "domain2-genai-fundamentals::genaisvccompare::item:cmp6": {
    "text": "Usar un IDE agéntico impulsado por especificaciones que redacta los requisitos y el diseño antes de programar."
  },
  "domain2-genai-fundamentals::genaisvccompare::item:cmp7": {
    "text": "Pedirle ayuda a un asistente de IA en las distintas superficies de AWS, como la consola y la documentación."
  },
  "domain2-genai-fundamentals::genaisvccompare::item:cmp8": {
    "text": "Los usuarios de negocio necesitan paneles, análisis en lenguaje natural, chat o investigación automatizada sobre datos de negocio."
  },
  "domain2-genai-fundamentals::privacy-safety": {
    "title": "Privacidad, seguridad y cumplimiento de GenAI en AWS",
    "footnote": "Guía §2.3.2–2.3.3: los prompts y las respuestas generadas (completions) en Amazon Bedrock no se usan para entrenar los FM base y no se comparten con los proveedores de los modelos.",
    "intro": "Relaciona cada infraestructura de AWS o capacidad de Bedrock con la ventaja que ofrece para las cargas de trabajo de GenAI."
  },
  "domain2-genai-fundamentals::privacy-safety::slottype:gives": {
    "label": "Qué ofrece"
  },
  "domain2-genai-fundamentals::privacy-safety::concept:iam": {
    "name": "AWS IAM",
    "gives": "Control de acceso granular sobre quién puede invocar modelos, gestionar prompts o usar fuentes de datos."
  },
  "domain2-genai-fundamentals::privacy-safety::concept:kms": {
    "name": "AWS KMS",
    "gives": "Cifrado con llaves administradas por el cliente cuando se requiere."
  },
  "domain2-genai-fundamentals::privacy-safety::concept:privatelink": {
    "name": "AWS PrivateLink",
    "gives": "Conectividad privada para que el tráfico pueda mantenerse fuera de la Internet pública."
  },
  "domain2-genai-fundamentals::privacy-safety::concept:artifact": {
    "name": "AWS Artifact",
    "gives": "Acceso bajo demanda a informes de cumplimiento."
  },
  "domain2-genai-fundamentals::privacy-safety::concept:auditmanager": {
    "name": "AWS Audit Manager",
    "gives": "Flujos de trabajo de recopilación de evidencia y evaluación de cumplimiento."
  },
  "domain2-genai-fundamentals::privacy-safety::concept:cloudtrail": {
    "name": "AWS CloudTrail",
    "gives": "Registros auditables de las llamadas a la API."
  },
  "domain2-genai-fundamentals::privacy-safety::concept:bedrockprivacy": {
    "name": "Privacidad de datos en Bedrock",
    "gives": "Los prompts y las respuestas generadas (completions) no se usan para entrenar los FM subyacentes ni se comparten con los proveedores de los modelos."
  },
  "domain2-genai-fundamentals::privacy-safety::concept:guardrails2": {
    "name": "Bedrock Guardrails",
    "gives": "Controles de seguridad consistentes que incluyen filtros, temas denegados, redacción de PII y verificaciones de anclaje."
  },
  "domain2-addendum::addendum-discriminative-generative-comparison": {
    "title": "Comparación entre modelos discriminativos y generativos",
    "instructions": "Restaura la tabla comparativa de la fuente. Las etiquetas de fila y las columnas de modelos permanecen visibles; coloca cada celda de respuesta eliminada en el lugar que le corresponde.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.1.1.",
    "footnote": "<strong>AMPLÍA 2.1.1</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::dest:output-disc": {
    "label": "Salida típica / Modelo discriminativo"
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::dest:output-gen": {
    "label": "Salida típica / Modelo generativo"
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::dest:tasks-disc": {
    "label": "Tareas comunes / Modelo discriminativo"
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::dest:tasks-gen": {
    "label": "Tareas comunes / Modelo generativo"
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::dest:example-disc": {
    "label": "Ejemplo / Modelo discriminativo"
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::dest:example-gen": {
    "label": "Ejemplo / Modelo generativo"
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::dest:aws-disc": {
    "label": "Ruta típica en AWS / Modelo discriminativo"
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::dest:aws-gen": {
    "label": "Ruta típica en AWS / Modelo generativo"
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::dest:distractor-disc": {
    "label": "Prueba clave de distractor / Modelo discriminativo"
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::dest:distractor-gen": {
    "label": "Prueba clave de distractor / Modelo generativo"
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::card:addendum-discriminative-generative-comparison-01": {
    "text": "Etiqueta, categoría, probabilidad, puntuación o número."
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::card:addendum-discriminative-generative-comparison-02": {
    "text": "Texto, imagen, audio, video, código o muestra sintética nuevos."
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::card:addendum-discriminative-generative-comparison-03": {
    "text": "Clasificación y regresión."
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::card:addendum-discriminative-generative-comparison-04": {
    "text": "Generación, resumen, reescritura, creación de imágenes y datos sintéticos."
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::card:addendum-discriminative-generative-comparison-05": {
    "text": "Fraude/no fraude; tiempo de entrega estimado; probabilidad de abandono (churn)."
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::card:addendum-discriminative-generative-comparison-06": {
    "text": "Redactar una respuesta; crear una imagen de producto; generar registros de transacciones artificiales."
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::card:addendum-discriminative-generative-comparison-07": {
    "text": "Una API de IA preentrenada o un modelo personalizado de SageMaker AI."
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::card:addendum-discriminative-generative-comparison-08": {
    "text": "Amazon Bedrock o un modelo generativo alojado a través de SageMaker AI/JumpStart."
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::card:addendum-discriminative-generative-comparison-09": {
    "text": "La respuesta es solo una etiqueta o un número."
  },
  "domain2-addendum::addendum-discriminative-generative-comparison::card:addendum-discriminative-generative-comparison-10": {
    "text": "La respuesta debe ser contenido nuevo y abierto."
  },
  "domain2-addendum::addendum-latent-space-true-false": {
    "title": "Espacio latente: verdadero o falso",
    "instructions": "Responde cada enunciado de la fuente y luego revisa la razón original del anexo.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.1.1.",
    "footnote": "<strong>AMPLÍA 2.1.1</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-latent-space-true-false::dest:true": {
    "label": "Verdadero"
  },
  "domain2-addendum::addendum-latent-space-true-false::dest:false": {
    "label": "Falso"
  },
  "domain2-addendum::addendum-latent-space-true-false::card:addendum-latent-space-true-false-01": {
    "text": "El espacio latente captura las relaciones aprendidas entre conceptos.",
    "explanation": "La geometría refleja los patrones aprendidos a partir de los datos."
  },
  "domain2-addendum::addendum-latent-space-true-false::card:addendum-latent-space-true-false-02": {
    "text": "Puede respaldar la similitud semántica entre las entradas.",
    "explanation": "Las distancias o los ángulos entre vectores pueden representar la similitud."
  },
  "domain2-addendum::addendum-latent-space-true-false::card:addendum-latent-space-true-false-03": {
    "text": "Debe almacenarse en un tipo específico de base de datos.",
    "explanation": "Una representación latente es un concepto del modelo; las bases de datos vectoriales son una forma de indexar los embeddings."
  },
  "domain2-addendum::addendum-latent-space-true-false::card:addendum-latent-space-true-false-04": {
    "text": "Se aplica únicamente a datos de imagen.",
    "explanation": "Los modelos de texto, imagen, audio y multimodales aprenden todos representaciones internas."
  },
  "domain2-addendum::addendum-latent-space-true-false::card:addendum-latent-space-true-false-05": {
    "text": "Cada dimensión tiene un significado claro y legible para humanos.",
    "explanation": "La representación es distribuida y a menudo difícil de interpretar dimensión por dimensión."
  },
  "domain2-addendum::addendum-model-family-definitions": {
    "title": "Definiciones de familias de modelos",
    "instructions": "Relaciona cada definición de la fuente con el nombre visible de la familia de modelos.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.1.1.",
    "footnote": "<strong>AMPLÍA 2.1.1</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-model-family-definitions::dest:transformer": {
    "label": "Transformer"
  },
  "domain2-addendum::addendum-model-family-definitions::dest:diffusion": {
    "label": "Modelo de difusión"
  },
  "domain2-addendum::addendum-model-family-definitions::dest:gan": {
    "label": "Red generativa adversaria (GAN)"
  },
  "domain2-addendum::addendum-model-family-definitions::card:addendum-model-family-definitions-01": {
    "text": "Utiliza un mecanismo de atención para modelar las relaciones entre secuencias de tokens."
  },
  "domain2-addendum::addendum-model-family-definitions::card:addendum-model-family-definitions-02": {
    "text": "Genera aprendiendo a revertir un proceso gradual de adición de ruido."
  },
  "domain2-addendum::addendum-model-family-definitions::card:addendum-model-family-definitions-03": {
    "text": "Utiliza un generador y un discriminador entrenados en competencia."
  },
  "domain2-addendum::addendum-model-family-definitions::item:undefined": {
    "text": "Utiliza un generador y un discriminador entrenados en competencia."
  },
  "domain2-addendum::addendum-model-family-mechanisms": {
    "title": "¿Transformer, difusión o GAN?",
    "instructions": "Coloca cada pista inequívoca de la fuente bajo la familia de modelos que identifica.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.1.1.",
    "footnote": "<strong>AMPLÍA 2.1.1</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-model-family-mechanisms::dest:transformer": {
    "label": "Transformer"
  },
  "domain2-addendum::addendum-model-family-mechanisms::dest:diffusion": {
    "label": "Modelo de difusión"
  },
  "domain2-addendum::addendum-model-family-mechanisms::dest:gan": {
    "label": "Red generativa adversaria (GAN)"
  },
  "domain2-addendum::addendum-model-family-mechanisms::card:addendum-model-family-mechanisms-01": {
    "text": "Atención."
  },
  "domain2-addendum::addendum-model-family-mechanisms::card:addendum-model-family-mechanisms-02": {
    "text": "Secuencia de tokens."
  },
  "domain2-addendum::addendum-model-family-mechanisms::card:addendum-model-family-mechanisms-03": {
    "text": "Eliminación de ruido iterativa."
  },
  "domain2-addendum::addendum-model-family-mechanisms::card:addendum-model-family-mechanisms-04": {
    "text": "Parte del ruido."
  },
  "domain2-addendum::addendum-model-family-mechanisms::card:addendum-model-family-mechanisms-05": {
    "text": "Generador."
  },
  "domain2-addendum::addendum-model-family-mechanisms::card:addendum-model-family-mechanisms-06": {
    "text": "Discriminador."
  },
  "domain2-addendum::addendum-model-family-mechanisms::card:addendum-model-family-mechanisms-07": {
    "text": "Entrenamiento adversario."
  },
  "domain2-addendum::addendum-model-family-mechanisms::card:addendum-model-family-mechanisms-08": {
    "text": "Semilla latente."
  },
  "domain2-addendum::addendum-model-family-mechanisms::item:undefined": {
    "text": "Semilla latente."
  },
  "domain2-addendum::addendum-model-family-use-cases": {
    "title": "Casos de uso por familia de modelos",
    "instructions": "Relaciona cada caso de uso claramente redactado con la familia indicada por la pista de la fuente.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.1.1.",
    "footnote": "<strong>AMPLÍA 2.1.1</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-model-family-use-cases::dest:transformer": {
    "label": "Transformer"
  },
  "domain2-addendum::addendum-model-family-use-cases::dest:diffusion": {
    "label": "Modelo de difusión"
  },
  "domain2-addendum::addendum-model-family-use-cases::dest:gan": {
    "label": "Red generativa adversaria (GAN)"
  },
  "domain2-addendum::addendum-model-family-use-cases::card:addendum-model-family-use-cases-01": {
    "text": "Resumir un documento."
  },
  "domain2-addendum::addendum-model-family-use-cases::card:addendum-model-family-use-cases-02": {
    "text": "Traducir texto."
  },
  "domain2-addendum::addendum-model-family-use-cases::card:addendum-model-family-use-cases-03": {
    "text": "Generar una imagen a partir de un prompt de texto usando Stable Diffusion."
  },
  "domain2-addendum::addendum-model-family-use-cases::card:addendum-model-family-use-cases-04": {
    "text": "Generar registros de transacciones sintéticas mediante entrenamiento adversario."
  },
  "domain2-addendum::addendum-model-family-use-cases::item:undefined": {
    "text": "Generar registros de transacciones sintéticas mediante entrenamiento adversario."
  },
  "domain2-addendum::addendum-gan-training-order": {
    "title": "Orden de entrenamiento de una GAN",
    "instructions": "Restaura el diagrama de flujo de la GAN de la fuente. Cada fase visible necesita primero el nombre de la fase y luego la acción derivada de la fuente que describe lo que hace esa fase.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.1.1.",
    "footnote": "<strong>AMPLÍA 2.1.1</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-gan-training-order::dest:phase-1": {
    "label": "Fase 1"
  },
  "domain2-addendum::addendum-gan-training-order::dest:phase-2": {
    "label": "Fase 2"
  },
  "domain2-addendum::addendum-gan-training-order::dest:phase-3": {
    "label": "Fase 3"
  },
  "domain2-addendum::addendum-gan-training-order::dest:phase-4": {
    "label": "Fase 4"
  },
  "domain2-addendum::addendum-gan-training-order::slottype:phaseName": {
    "label": "Nombre de la fase"
  },
  "domain2-addendum::addendum-gan-training-order::slottype:whatDoes": {
    "label": "Qué hace"
  },
  "domain2-addendum::addendum-gan-training-order::concept:phase-1": {
    "name": "Fase 1",
    "phaseName": "Semilla aleatoria / vector latente",
    "whatDoes": "Proporciona la entrada numérica compacta que el generador transforma en una muestra."
  },
  "domain2-addendum::addendum-gan-training-order::concept:phase-2": {
    "name": "Fase 2",
    "phaseName": "El generador crea una muestra",
    "whatDoes": "Produce una muestra sintética candidata destinada a asemejarse a la distribución de entrenamiento."
  },
  "domain2-addendum::addendum-gan-training-order::concept:phase-3": {
    "name": "Fase 3",
    "phaseName": "El discriminador compara lo real frente a lo falso",
    "whatDoes": "Estima si una muestra es real o generada y proporciona la señal de aprendizaje."
  },
  "domain2-addendum::addendum-gan-training-order::concept:phase-4": {
    "name": "Fase 4",
    "phaseName": "La retroalimentación del entrenamiento mejora a ambos",
    "whatDoes": "Utiliza el ciclo de retroalimentación adversaria para mejorar el generador y el discriminador."
  },
  "domain2-addendum::addendum-gan-components": {
    "title": "Componentes de una GAN",
    "instructions": "Restaura la tabla de componentes de la fuente. Mantén visibles los componentes de la GAN y coloca las celdas faltantes de función y límites.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.1.1.",
    "footnote": "<strong>AMPLÍA 2.1.1</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-gan-components::dest:generator-job": {
    "label": "Generador / Función durante el entrenamiento"
  },
  "domain2-addendum::addendum-gan-components::dest:generator-not": {
    "label": "Generador / Lo que no es"
  },
  "domain2-addendum::addendum-gan-components::dest:discriminator-job": {
    "label": "Discriminador / Función durante el entrenamiento"
  },
  "domain2-addendum::addendum-gan-components::dest:discriminator-not": {
    "label": "Discriminador / Lo que no es"
  },
  "domain2-addendum::addendum-gan-components::dest:latent-job": {
    "label": "Vector latente / semilla / Función durante el entrenamiento"
  },
  "domain2-addendum::addendum-gan-components::dest:latent-not": {
    "label": "Vector latente / semilla / Lo que no es"
  },
  "domain2-addendum::addendum-gan-components::card:addendum-gan-components-01": {
    "text": "Produce muestras sintéticas candidatas destinadas a asemejarse a la distribución de entrenamiento."
  },
  "domain2-addendum::addendum-gan-components::card:addendum-gan-components-02": {
    "text": "Un clasificador utilizado como la predicción de negocio final."
  },
  "domain2-addendum::addendum-gan-components::card:addendum-gan-components-03": {
    "text": "Estima si una muestra es real o generada y proporciona la señal de aprendizaje."
  },
  "domain2-addendum::addendum-gan-components::card:addendum-gan-components-04": {
    "text": "La parte que crea los datos sintéticos finales."
  },
  "domain2-addendum::addendum-gan-components::card:addendum-gan-components-05": {
    "text": "Una entrada numérica compacta que el generador transforma en una muestra."
  },
  "domain2-addendum::addendum-gan-components::card:addendum-gan-components-06": {
    "text": "Una fila almacenada en una base de datos obligatoria de propósito especial."
  },
  "domain2-addendum::addendum-aws-image-implementation": {
    "title": "Implementación de imágenes y modelos en AWS",
    "instructions": "Mantén visibles los nombres de AWS y relaciona el rol de la fuente correspondiente a cada uno.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.1.1, 2.1.2, 2.3.1.",
    "footnote": "<strong>AMPLÍA 2.1.1, 2.1.2, 2.3.1</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-aws-image-implementation::dest:bedrock": {
    "label": "Amazon Bedrock"
  },
  "domain2-addendum::addendum-aws-image-implementation::dest:nova": {
    "label": "Amazon Nova"
  },
  "domain2-addendum::addendum-aws-image-implementation::dest:stable": {
    "label": "Stable Diffusion a través de Amazon Bedrock"
  },
  "domain2-addendum::addendum-aws-image-implementation::dest:sagemaker": {
    "label": "Amazon SageMaker AI / JumpStart"
  },
  "domain2-addendum::addendum-aws-image-implementation::dest:rekognition": {
    "label": "Amazon Rekognition"
  },
  "domain2-addendum::addendum-aws-image-implementation::card:addendum-aws-image-implementation-01": {
    "text": "Plataforma administrada para invocar modelos fundacionales y crear aplicaciones de IA generativa (GenAI)."
  },
  "domain2-addendum::addendum-aws-image-implementation::card:addendum-aws-image-implementation-02": {
    "text": "Familia de modelos fundacionales de primera parte de AWS, a la que se accede a través de Bedrock."
  },
  "domain2-addendum::addendum-aws-image-implementation::card:addendum-aws-image-implementation-03": {
    "text": "Opción de generación de texto a imagen o de imagen a imagen basada en difusión, disponible a través de Bedrock."
  },
  "domain2-addendum::addendum-aws-image-implementation::card:addendum-aws-image-implementation-04": {
    "text": "Ruta controlada por el cliente para entrenar o alojar un modelo de imagen especializado."
  },
  "domain2-addendum::addendum-aws-image-implementation::card:addendum-aws-image-implementation-05": {
    "text": "Analiza imágenes existentes y devuelve etiquetas o niveles de confianza."
  },
  "domain2-addendum::addendum-aws-image-implementation::item:undefined": {
    "text": "Analiza imágenes existentes y devuelve etiquetas o niveles de confianza."
  },
  "domain2-addendum::addendum-synthetic-data-use-cases": {
    "title": "Casos de uso de datos sintéticos",
    "instructions": "Restaura la tabla de datos sintéticos del anexo: por qué ayuda y qué riesgo debe verificarse.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.1.1, 2.1.2.",
    "footnote": "<strong>AMPLÍA 2.1.1, 2.1.2</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::dest:augmentation-helps": {
    "label": "Aumento de datos de entrenamiento / Por qué ayudan los datos sintéticos"
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::dest:augmentation-risk": {
    "label": "Aumento de datos de entrenamiento / Principal riesgo a verificar"
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::dest:testing-helps": {
    "label": "Pruebas de software y analítica / Por qué ayudan los datos sintéticos"
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::dest:testing-risk": {
    "label": "Pruebas de software y analítica / Principal riesgo a verificar"
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::dest:privacy-helps": {
    "label": "Investigación sensible a la privacidad / Por qué ayudan los datos sintéticos"
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::dest:privacy-risk": {
    "label": "Investigación sensible a la privacidad / Principal riesgo a verificar"
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::dest:simulation-helps": {
    "label": "Simulación y casos extremos / Por qué ayudan los datos sintéticos"
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::dest:simulation-risk": {
    "label": "Simulación y casos extremos / Principal riesgo a verificar"
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::card:addendum-synthetic-data-use-cases-01": {
    "text": "Agrega ejemplos para clases o condiciones poco frecuentes cuando los datos reales son escasos."
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::card:addendum-synthetic-data-use-cases-02": {
    "text": "Las muestras generadas pueden amplificar el sesgo o no lograr aportar diversidad útil."
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::card:addendum-synthetic-data-use-cases-03": {
    "text": "Crea registros con apariencia realista sin depender de datos de producción."
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::card:addendum-synthetic-data-use-cases-04": {
    "text": "Los registros sintéticos deben preservar las restricciones que el sistema espera."
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::card:addendum-synthetic-data-use-cases-05": {
    "text": "Reduce la exposición de registros directos del mundo real."
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::card:addendum-synthetic-data-use-cases-06": {
    "text": "Una generación deficiente aún puede filtrar o replicar patrones sensibles."
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::card:addendum-synthetic-data-use-cases-07": {
    "text": "Crea escenarios poco frecuentes que son difíciles o peligrosos de recolectar."
  },
  "domain2-addendum::addendum-synthetic-data-use-cases::card:addendum-synthetic-data-use-cases-08": {
    "text": "Los casos sintéticos poco realistas pueden distorsionar la evaluación."
  },
  "domain2-addendum::addendum-personalize-vs-bedrock": {
    "title": "Personalize frente a Bedrock",
    "instructions": "Restaura la tabla de recomendación frente a personalización generada.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.1.2.",
    "footnote": "<strong>AMPLÍA 2.1.2</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-personalize-vs-bedrock::dest:rank-service": {
    "label": "Clasificar productos para cada usuario según el historial de interacción conductual / Servicio o enfoque más adecuado"
  },
  "domain2-addendum::addendum-personalize-vs-bedrock::dest:rank-reason": {
    "label": "Clasificar productos para cada usuario según el historial de interacción conductual / Motivo"
  },
  "domain2-addendum::addendum-personalize-vs-bedrock::dest:message-service": {
    "label": "Redactar un consejo de producto o mensaje personalizado según la ubicación / Servicio o enfoque más adecuado"
  },
  "domain2-addendum::addendum-personalize-vs-bedrock::dest:message-reason": {
    "label": "Redactar un consejo de producto o mensaje personalizado según la ubicación / Motivo"
  },
  "domain2-addendum::addendum-personalize-vs-bedrock::dest:both-service": {
    "label": "Clasificar y explicar a la vez / Servicio o enfoque más adecuado"
  },
  "domain2-addendum::addendum-personalize-vs-bedrock::dest:both-reason": {
    "label": "Clasificar y explicar a la vez / Motivo"
  },
  "domain2-addendum::addendum-personalize-vs-bedrock::card:addendum-personalize-vs-bedrock-01": {
    "text": "Amazon Personalize."
  },
  "domain2-addendum::addendum-personalize-vs-bedrock::card:addendum-personalize-vs-bedrock-02": {
    "text": "Recomendación y clasificación creadas específicamente a partir de eventos de usuario/artículo."
  },
  "domain2-addendum::addendum-personalize-vs-bedrock::card:addendum-personalize-vs-bedrock-03": {
    "text": "Amazon Bedrock con un modelo fundacional."
  },
  "domain2-addendum::addendum-personalize-vs-bedrock::card:addendum-personalize-vs-bedrock-04": {
    "text": "El requisito es contenido en lenguaje natural generado utilizando el contexto proporcionado."
  },
  "domain2-addendum::addendum-personalize-vs-bedrock::card:addendum-personalize-vs-bedrock-05": {
    "text": "Personalize para la clasificación, Bedrock para la explicación."
  },
  "domain2-addendum::addendum-personalize-vs-bedrock::card:addendum-personalize-vs-bedrock-06": {
    "text": "Utiliza cada sistema para la tarea para la que fue diseñado."
  },
  "domain2-addendum::addendum-healthscribe-recognition": {
    "title": "Reconocimiento de AWS HealthScribe",
    "instructions": "Restaura la tabla de reconocimiento de HealthScribe. Esto sigue siendo de menor prioridad, tal como lo indica el anexo.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.1.2, 2.3.1.",
    "footnote": "<strong>AMPLÍA 2.1.2, 2.3.1</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-healthscribe-recognition::dest:healthscribe-input": {
    "label": "AWS HealthScribe / Entradas y salidas"
  },
  "domain2-addendum::addendum-healthscribe-recognition::dest:healthscribe-not": {
    "label": "AWS HealthScribe / Lo que no reemplaza"
  },
  "domain2-addendum::addendum-healthscribe-recognition::dest:healthscribe-clue": {
    "label": "AWS HealthScribe / Pista típica"
  },
  "domain2-addendum::addendum-healthscribe-recognition::card:addendum-healthscribe-recognition-01": {
    "text": "Audio de la conversación entre paciente y clínico convertido en una transcripción enriquecida, con roles de los interlocutores, términos médicos y notas clínicas preliminares."
  },
  "domain2-addendum::addendum-healthscribe-recognition::card:addendum-healthscribe-recognition-02": {
    "text": "Es una herramienta de asistencia; los clínicos o los escribas médicos revisan y finalizan las notas."
  },
  "domain2-addendum::addendum-healthscribe-recognition::card:addendum-healthscribe-recognition-03": {
    "text": "Encuentro clínico, paciente y clínico, borrador de nota, referencias de la transcripción."
  },
  "domain2-addendum::addendum-fm-lifecycle-order": {
    "title": "Orden del ciclo de vida de un FM",
    "instructions": "Restaura la secuencia de siete etapas del ciclo de vida del modelo fundacional presentada en el anexo.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.1.3.",
    "footnote": "<strong>AMPLÍA 2.1.3</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-fm-lifecycle-order::dest:step-1": {
    "label": "Etapa 1 del ciclo de vida",
    "sub": "Coloca aquí el paso correcto de la fuente."
  },
  "domain2-addendum::addendum-fm-lifecycle-order::dest:step-2": {
    "label": "Etapa 2 del ciclo de vida",
    "sub": "Coloca aquí el paso correcto de la fuente."
  },
  "domain2-addendum::addendum-fm-lifecycle-order::dest:step-3": {
    "label": "Etapa 3 del ciclo de vida",
    "sub": "Coloca aquí el paso correcto de la fuente."
  },
  "domain2-addendum::addendum-fm-lifecycle-order::dest:step-4": {
    "label": "Etapa 4 del ciclo de vida",
    "sub": "Coloca aquí el paso correcto de la fuente."
  },
  "domain2-addendum::addendum-fm-lifecycle-order::dest:step-5": {
    "label": "Etapa 5 del ciclo de vida",
    "sub": "Coloca aquí el paso correcto de la fuente."
  },
  "domain2-addendum::addendum-fm-lifecycle-order::dest:step-6": {
    "label": "Etapa 6 del ciclo de vida",
    "sub": "Coloca aquí el paso correcto de la fuente."
  },
  "domain2-addendum::addendum-fm-lifecycle-order::dest:step-7": {
    "label": "Etapa 7 del ciclo de vida",
    "sub": "Coloca aquí el paso correcto de la fuente."
  },
  "domain2-addendum::addendum-fm-lifecycle-order::card:addendum-fm-lifecycle-order-01": {
    "text": "Selección de datos"
  },
  "domain2-addendum::addendum-fm-lifecycle-order::card:addendum-fm-lifecycle-order-02": {
    "text": "Selección del modelo"
  },
  "domain2-addendum::addendum-fm-lifecycle-order::card:addendum-fm-lifecycle-order-03": {
    "text": "Preentrenamiento"
  },
  "domain2-addendum::addendum-fm-lifecycle-order::card:addendum-fm-lifecycle-order-04": {
    "text": "Ajuste fino (fine-tuning)"
  },
  "domain2-addendum::addendum-fm-lifecycle-order::card:addendum-fm-lifecycle-order-05": {
    "text": "Evaluación"
  },
  "domain2-addendum::addendum-fm-lifecycle-order::card:addendum-fm-lifecycle-order-06": {
    "text": "Implementación"
  },
  "domain2-addendum::addendum-fm-lifecycle-order::card:addendum-fm-lifecycle-order-07": {
    "text": "Retroalimentación"
  },
  "domain2-addendum::addendum-fm-stage-definitions": {
    "title": "Definiciones de las etapas de un FM",
    "instructions": "Mantén visibles las siete etapas del ciclo de vida y restaura la definición de la fuente junto a cada etapa.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.1.3.",
    "footnote": "<strong>AMPLÍA 2.1.3</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-fm-stage-definitions::dest:data": {
    "label": "Selección de datos"
  },
  "domain2-addendum::addendum-fm-stage-definitions::dest:selection": {
    "label": "Selección del modelo"
  },
  "domain2-addendum::addendum-fm-stage-definitions::dest:pretraining": {
    "label": "Preentrenamiento"
  },
  "domain2-addendum::addendum-fm-stage-definitions::dest:finetuning": {
    "label": "Ajuste fino (fine-tuning)"
  },
  "domain2-addendum::addendum-fm-stage-definitions::dest:evaluation": {
    "label": "Evaluación"
  },
  "domain2-addendum::addendum-fm-stage-definitions::dest:deployment": {
    "label": "Implementación"
  },
  "domain2-addendum::addendum-fm-stage-definitions::dest:feedback": {
    "label": "Retroalimentación"
  },
  "domain2-addendum::addendum-fm-stage-definitions::card:addendum-fm-stage-definitions-01": {
    "text": "Curar el corpus de preentrenamiento, las licencias y los controles de calidad."
  },
  "domain2-addendum::addendum-fm-stage-definitions::card:addendum-fm-stage-definitions-02": {
    "text": "Elegir la arquitectura, la escala, las modalidades y el contexto."
  },
  "domain2-addendum::addendum-fm-stage-definitions::card:addendum-fm-stage-definitions-03": {
    "text": "Una ejecución de entrenamiento autosupervisado a gran escala."
  },
  "domain2-addendum::addendum-fm-stage-definitions::card:addendum-fm-stage-definitions-04": {
    "text": "Adaptar el modelo con datos más reducidos, específicos de una tarea o un dominio."
  },
  "domain2-addendum::addendum-fm-stage-definitions::card:addendum-fm-stage-definitions-05": {
    "text": "Comparar las salidas del modelo con conjuntos de datos integrados o personalizados y con el juicio humano."
  },
  "domain2-addendum::addendum-fm-stage-definitions::card:addendum-fm-stage-definitions-06": {
    "text": "Exponer el modelo para su uso en aplicaciones."
  },
  "domain2-addendum::addendum-fm-stage-definitions::card:addendum-fm-stage-definitions-07": {
    "text": "Recopilar señales reales de calidad, costo y fallos."
  },
  "domain2-addendum::addendum-fm-stage-definitions::item:undefined": {
    "text": "Recopilar señales reales de calidad, costo y fallos."
  },
  "domain2-addendum::addendum-real-life-fm-stage": {
    "title": "Actividad de la vida real y su etapa del FM",
    "instructions": "Relaciona cada actividad concreta del mundo real con la etapa visible del ciclo de vida.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.1.3.",
    "footnote": "<strong>AMPLÍA 2.1.3</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-real-life-fm-stage::dest:data": {
    "label": "Selección de datos"
  },
  "domain2-addendum::addendum-real-life-fm-stage::dest:selection": {
    "label": "Selección del modelo"
  },
  "domain2-addendum::addendum-real-life-fm-stage::dest:pretraining": {
    "label": "Preentrenamiento"
  },
  "domain2-addendum::addendum-real-life-fm-stage::dest:finetuning": {
    "label": "Ajuste fino (fine-tuning)"
  },
  "domain2-addendum::addendum-real-life-fm-stage::dest:evaluation": {
    "label": "Evaluación"
  },
  "domain2-addendum::addendum-real-life-fm-stage::dest:deployment": {
    "label": "Implementación"
  },
  "domain2-addendum::addendum-real-life-fm-stage::dest:feedback": {
    "label": "Retroalimentación"
  },
  "domain2-addendum::addendum-real-life-fm-stage::card:addendum-real-life-fm-stage-01": {
    "text": "Eliminar documentos duplicados y sin licencia del corpus de entrenamiento."
  },
  "domain2-addendum::addendum-real-life-fm-stage::card:addendum-real-life-fm-stage-02": {
    "text": "Elegir entre una arquitectura transformer y una de difusión."
  },
  "domain2-addendum::addendum-real-life-fm-stage::card:addendum-real-life-fm-stage-03": {
    "text": "Entrenar con un corpus masivo sin etiquetar."
  },
  "domain2-addendum::addendum-real-life-fm-stage::card:addendum-real-life-fm-stage-04": {
    "text": "Adaptar el modelo utilizando pares etiquetados de instrucción-respuesta."
  },
  "domain2-addendum::addendum-real-life-fm-stage::card:addendum-real-life-fm-stage-05": {
    "text": "Comparar las salidas utilizando puntos de referencia (benchmarks) y revisores humanos."
  },
  "domain2-addendum::addendum-real-life-fm-stage::card:addendum-real-life-fm-stage-06": {
    "text": "Exponer el modelo mediante un endpoint de inferencia."
  },
  "domain2-addendum::addendum-real-life-fm-stage::card:addendum-real-life-fm-stage-07": {
    "text": "Recopilar calificaciones de usuarios y casos de fallo."
  },
  "domain2-addendum::addendum-real-life-fm-stage::item:undefined": {
    "text": "Recopilar calificaciones de usuarios y casos de fallo."
  },
  "domain2-addendum::addendum-aws-activity-fm-stage": {
    "title": "Actividad de AWS y su etapa del FM",
    "instructions": "Utiliza los nombres reales de las etapas del ciclo de vida como espacios. Coloca cada actividad específica de AWS junto a su etapa.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.1.3.",
    "footnote": "<strong>AMPLÍA 2.1.3</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-aws-activity-fm-stage::dest:data": {
    "label": "Selección de datos"
  },
  "domain2-addendum::addendum-aws-activity-fm-stage::dest:selection": {
    "label": "Selección del modelo"
  },
  "domain2-addendum::addendum-aws-activity-fm-stage::dest:pretraining": {
    "label": "Preentrenamiento"
  },
  "domain2-addendum::addendum-aws-activity-fm-stage::dest:finetuning": {
    "label": "Ajuste fino (fine-tuning)"
  },
  "domain2-addendum::addendum-aws-activity-fm-stage::dest:evaluation": {
    "label": "Evaluación"
  },
  "domain2-addendum::addendum-aws-activity-fm-stage::dest:deployment": {
    "label": "Implementación"
  },
  "domain2-addendum::addendum-aws-activity-fm-stage::dest:feedback": {
    "label": "Retroalimentación"
  },
  "domain2-addendum::addendum-aws-activity-fm-stage::card:addendum-aws-activity-fm-stage-01": {
    "text": "Elegir un modelo existente de Bedrock o un modelo de JumpStart."
  },
  "domain2-addendum::addendum-aws-activity-fm-stage::card:addendum-aws-activity-fm-stage-02": {
    "text": "Almacenar un conjunto de datos de personalización en Amazon S3."
  },
  "domain2-addendum::addendum-aws-activity-fm-stage::card:addendum-aws-activity-fm-stage-03": {
    "text": "Utilizar la personalización de modelos de Bedrock."
  },
  "domain2-addendum::addendum-aws-activity-fm-stage::card:addendum-aws-activity-fm-stage-04": {
    "text": "Ejecutar Amazon Bedrock Model Evaluation."
  },
  "domain2-addendum::addendum-aws-activity-fm-stage::card:addendum-aws-activity-fm-stage-05": {
    "text": "Invocar un modelo a través de Amazon Bedrock."
  },
  "domain2-addendum::addendum-aws-activity-fm-stage::card:addendum-aws-activity-fm-stage-06": {
    "text": "Implementar un modelo personalizado en un endpoint de SageMaker."
  },
  "domain2-addendum::addendum-aws-activity-fm-stage::card:addendum-aws-activity-fm-stage-07": {
    "text": "Utilizar los registros de la aplicación para identificar fallos recurrentes."
  },
  "domain2-addendum::addendum-aws-activity-fm-stage::item:undefined": {
    "text": "Utilizar los registros de la aplicación para identificar fallos recurrentes."
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison": {
    "title": "Comparación de precios de Bedrock",
    "instructions": "Restaura la tabla comparativa de precios utilizando las opciones de Bedrock indicadas como filas.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.1.4, 2.3.4.",
    "footnote": "<strong>AMPLÍA 2.1.4, 2.3.4</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::dest:ondemand-billing": {
    "label": "Bajo demanda / Estándar / Forma de facturación"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::dest:ondemand-latency": {
    "label": "Bajo demanda / Estándar / Latencia / entrega"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::dest:ondemand-best": {
    "label": "Bajo demanda / Estándar / Mejor caso de uso"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::dest:ondemand-wrong": {
    "label": "Bajo demanda / Estándar / No es adecuado cuando"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::dest:batch-billing": {
    "label": "Inferencia por lotes / Forma de facturación"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::dest:batch-latency": {
    "label": "Inferencia por lotes / Latencia / entrega"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::dest:batch-best": {
    "label": "Inferencia por lotes / Mejor caso de uso"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::dest:batch-wrong": {
    "label": "Inferencia por lotes / No es adecuado cuando"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::dest:provisioned-billing": {
    "label": "Provisioned Throughput / Forma de facturación"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::dest:provisioned-latency": {
    "label": "Provisioned Throughput / Latencia / entrega"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::dest:provisioned-best": {
    "label": "Provisioned Throughput / Mejor caso de uso"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::dest:provisioned-wrong": {
    "label": "Provisioned Throughput / No es adecuado cuando"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::dest:caching-billing": {
    "label": "Almacenamiento en caché de prompts / Forma de facturación"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::dest:caching-latency": {
    "label": "Almacenamiento en caché de prompts / Latencia / entrega"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::dest:caching-best": {
    "label": "Almacenamiento en caché de prompts / Mejor caso de uso"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::dest:caching-wrong": {
    "label": "Almacenamiento en caché de prompts / No es adecuado cuando"
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::card:addendum-bedrock-pricing-comparison-01": {
    "text": "Pagas por los tokens de entrada y salida, sin compromiso de capacidad a largo plazo."
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::card:addendum-bedrock-pricing-comparison-02": {
    "text": "Sincrónica e interactiva."
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::card:addendum-bedrock-pricing-comparison-03": {
    "text": "Tráfico variable o en etapa inicial; llamadas comunes de chat y de aplicaciones."
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::card:addendum-bedrock-pricing-comparison-04": {
    "text": "La carga de trabajo necesita capacidad dedicada garantizada con un volumen alto y constante."
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::card:addendum-bedrock-pricing-comparison-05": {
    "text": "Trabajos asíncronos con precio por token; algunos modelos seleccionados pueden tener un precio inferior a las tarifas habituales bajo demanda."
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::card:addendum-bedrock-pricing-comparison-06": {
    "text": "Resultados posteriores, comúnmente a través de S3."
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::card:addendum-bedrock-pricing-comparison-07": {
    "text": "Trabajos grandes de resumen, evaluación o generación fuera de línea."
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::card:addendum-bedrock-pricing-comparison-08": {
    "text": "Un usuario está esperando cada respuesta."
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::card:addendum-bedrock-pricing-comparison-09": {
    "text": "Capacidad de modelo dedicada facturada por tiempo/unidades de modelo."
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::card:addendum-bedrock-pricing-comparison-10": {
    "text": "Predecible y reservada."
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::card:addendum-bedrock-pricing-comparison-11": {
    "text": "Utilización alta y constante; rendimiento garantizado; algunas implementaciones dedicadas de modelos personalizados."
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::card:addendum-bedrock-pricing-comparison-12": {
    "text": "El tráfico es bajo, irregular o impredecible, y la capacidad quedaría inactiva."
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::card:addendum-bedrock-pricing-comparison-13": {
    "text": "Tarifas de tokens de lectura y escritura de caché para un prefijo de prompt repetido."
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::card:addendum-bedrock-pricing-comparison-14": {
    "text": "Puede reducir el procesamiento repetido y la latencia."
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::card:addendum-bedrock-pricing-comparison-15": {
    "text": "Prompts de sistema, documentos o instrucciones largos y estables que se reutilizan en varias llamadas."
  },
  "domain2-addendum::addendum-bedrock-pricing-comparison::card:addendum-bedrock-pricing-comparison-16": {
    "text": "Cada prompt es sustancialmente diferente."
  },
  "domain2-addendum::addendum-bedrock-pricing-scenarios": {
    "title": "Escenarios de precios de Bedrock",
    "instructions": "Utiliza las opciones de precios o inferencia indicadas como espacios. Relaciona cada escenario al estilo de la fuente con la opción más adecuada.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.1.4, 2.3.4.",
    "footnote": "<strong>AMPLÍA 2.1.4, 2.3.4</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-bedrock-pricing-scenarios::dest:ondemand": {
    "label": "Bajo demanda"
  },
  "domain2-addendum::addendum-bedrock-pricing-scenarios::dest:batch": {
    "label": "Inferencia por lotes"
  },
  "domain2-addendum::addendum-bedrock-pricing-scenarios::dest:provisioned": {
    "label": "Provisioned Throughput"
  },
  "domain2-addendum::addendum-bedrock-pricing-scenarios::dest:caching": {
    "label": "Almacenamiento en caché de prompts"
  },
  "domain2-addendum::addendum-bedrock-pricing-scenarios::card:addendum-bedrock-pricing-scenarios-01": {
    "text": "Tráfico variable e impredecible con respuestas interactivas."
  },
  "domain2-addendum::addendum-bedrock-pricing-scenarios::card:addendum-bedrock-pricing-scenarios-02": {
    "text": "Conjunto grande fuera de línea en S3; ningún usuario espera cada respuesta."
  },
  "domain2-addendum::addendum-bedrock-pricing-scenarios::card:addendum-bedrock-pricing-scenarios-03": {
    "text": "Carga de trabajo estable y de alto volumen que necesita capacidad dedicada garantizada."
  },
  "domain2-addendum::addendum-bedrock-pricing-scenarios::card:addendum-bedrock-pricing-scenarios-04": {
    "text": "Prefijo de prompt largo, estable y repetido en muchas solicitudes."
  },
  "domain2-addendum::addendum-bedrock-pricing-scenarios::item:undefined": {
    "text": "Prefijo de prompt largo, estable y repetido en muchas solicitudes."
  },
  "domain2-addendum::addendum-custom-bedrock-current-outdated": {
    "title": "Implementación personalizada de Bedrock: vigente u obsoleta",
    "instructions": "Responde los enunciados sobre el producto vigente directamente a partir del anexo.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.1.4, 2.3.4.",
    "footnote": "<strong>AMPLÍA 2.1.4, 2.3.4</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-custom-bedrock-current-outdated::dest:true": {
    "label": "Verdadero"
  },
  "domain2-addendum::addendum-custom-bedrock-current-outdated::dest:false": {
    "label": "Falso"
  },
  "domain2-addendum::addendum-custom-bedrock-current-outdated::card:addendum-custom-bedrock-current-outdated-01": {
    "text": "Todo modelo personalizado de Bedrock siempre requiere Provisioned Throughput.",
    "explanation": "Regla general anterior. La versión actual de Bedrock admite la implementación bajo demanda para los modelos personalizados y los modelos importados compatibles."
  },
  "domain2-addendum::addendum-custom-bedrock-current-outdated::card:addendum-custom-bedrock-current-outdated-02": {
    "text": "Provisioned Throughput sigue siendo relevante para obtener capacidad dedicada y predecible.",
    "explanation": "El rendimiento garantizado o la capacidad dedicada siguen apuntando a Provisioned Throughput o a la capacidad reservada, donde esté disponible."
  },
  "domain2-addendum::addendum-custom-bedrock-current-outdated::card:addendum-custom-bedrock-current-outdated-03": {
    "text": "Un modelo personalizado compatible con demanda variable puede utilizar la implementación bajo demanda si esa vía es compatible.",
    "explanation": "La respuesta correcta depende del requisito y de la matriz de compatibilidad vigente."
  },
  "domain2-addendum::addendum-custom-bedrock-current-outdated::card:addendum-custom-bedrock-current-outdated-04": {
    "text": "Un modelo de código abierto en el propio endpoint de SageMaker del cliente es un modo de inferencia de modelo personalizado de Bedrock.",
    "explanation": "Ese requisito apunta a SageMaker JumpStart junto con un endpoint de SageMaker, no a la invocación administrada de Bedrock."
  },
  "domain2-addendum::addendum-conversation-context-table": {
    "title": "Tabla de contexto de la conversación",
    "instructions": "Restaura la tabla de la fuente que muestra qué hace el mecanismo y si el modelo puede ver información anterior.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.1.5.",
    "footnote": "<strong>AMPLÍA 2.1.5</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-conversation-context-table::dest:previous-does": {
    "label": "Incluir mensajes anteriores en el prompt / Qué hace"
  },
  "domain2-addendum::addendum-conversation-context-table::dest:previous-sees": {
    "label": "Incluir mensajes anteriores en el prompt / ¿El modelo ve la información anterior?"
  },
  "domain2-addendum::addendum-conversation-context-table::dest:summary-does": {
    "label": "Resumir turnos anteriores / Qué hace"
  },
  "domain2-addendum::addendum-conversation-context-table::dest:summary-sees": {
    "label": "Resumir turnos anteriores / ¿El modelo ve la información anterior?"
  },
  "domain2-addendum::addendum-conversation-context-table::dest:memory-does": {
    "label": "Almacén de memoria a largo plazo / Qué hace"
  },
  "domain2-addendum::addendum-conversation-context-table::dest:memory-sees": {
    "label": "Almacén de memoria a largo plazo / ¿El modelo ve la información anterior?"
  },
  "domain2-addendum::addendum-conversation-context-table::dest:logging-does": {
    "label": "Registro de invocaciones del modelo / Qué hace"
  },
  "domain2-addendum::addendum-conversation-context-table::dest:logging-sees": {
    "label": "Registro de invocaciones del modelo / ¿El modelo ve la información anterior?"
  },
  "domain2-addendum::addendum-conversation-context-table::dest:capacity-does": {
    "label": "Provisioned Throughput / Qué hace"
  },
  "domain2-addendum::addendum-conversation-context-table::dest:capacity-sees": {
    "label": "Provisioned Throughput / ¿El modelo ve la información anterior?"
  },
  "domain2-addendum::addendum-conversation-context-table::card:addendum-conversation-context-table-01": {
    "text": "Reenvía los turnos anteriores como parte de la solicitud actual."
  },
  "domain2-addendum::addendum-conversation-context-table::card:addendum-conversation-context-table-02": {
    "text": "Sí, porque los mensajes ocupan la ventana de contexto actual."
  },
  "domain2-addendum::addendum-conversation-context-table::card:addendum-conversation-context-table-03": {
    "text": "Comprime el historial extenso conservando el estado clave."
  },
  "domain2-addendum::addendum-conversation-context-table::card:addendum-conversation-context-table-04": {
    "text": "Sí, mediante el resumen y los turnos recientes textuales."
  },
  "domain2-addendum::addendum-conversation-context-table::card:addendum-conversation-context-table-05": {
    "text": "Conserva hechos seleccionados fuera del contexto y los recupera cuando son relevantes."
  },
  "domain2-addendum::addendum-conversation-context-table::card:addendum-conversation-context-table-06": {
    "text": "Solo cuando la aplicación los recupera y los inyecta."
  },
  "domain2-addendum::addendum-conversation-context-table::card:addendum-conversation-context-table-07": {
    "text": "Registra las solicitudes/respuestas para supervisión y auditoría."
  },
  "domain2-addendum::addendum-conversation-context-table::card:addendum-conversation-context-table-08": {
    "text": "No solo mediante el registro."
  },
  "domain2-addendum::addendum-conversation-context-table::card:addendum-conversation-context-table-09": {
    "text": "Reserva capacidad para la inferencia."
  },
  "domain2-addendum::addendum-conversation-context-table::card:addendum-conversation-context-table-10": {
    "text": "No tiene efecto en la memoria conversacional."
  },
  "domain2-addendum::addendum-rag-query-path": {
    "title": "Ruta de consulta de RAG",
    "instructions": "Restaura el orden exacto de RAG en el momento de la consulta indicado en el anexo.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.1.5.",
    "footnote": "<strong>AMPLÍA 2.1.5</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-rag-query-path::dest:step-1": {
    "label": "Paso de consulta 1",
    "sub": "Coloca aquí el paso correcto de la fuente."
  },
  "domain2-addendum::addendum-rag-query-path::dest:step-2": {
    "label": "Paso de consulta 2",
    "sub": "Coloca aquí el paso correcto de la fuente."
  },
  "domain2-addendum::addendum-rag-query-path::dest:step-3": {
    "label": "Paso de consulta 3",
    "sub": "Coloca aquí el paso correcto de la fuente."
  },
  "domain2-addendum::addendum-rag-query-path::dest:step-4": {
    "label": "Paso de consulta 4",
    "sub": "Coloca aquí el paso correcto de la fuente."
  },
  "domain2-addendum::addendum-rag-query-path::dest:step-5": {
    "label": "Paso de consulta 5",
    "sub": "Coloca aquí el paso correcto de la fuente."
  },
  "domain2-addendum::addendum-rag-query-path::card:addendum-rag-query-path-01": {
    "text": "Generar el embedding de la consulta"
  },
  "domain2-addendum::addendum-rag-query-path::card:addendum-rag-query-path-02": {
    "text": "Realizar una búsqueda por similitud"
  },
  "domain2-addendum::addendum-rag-query-path::card:addendum-rag-query-path-03": {
    "text": "Recuperar y, opcionalmente, reordenar (rerank) el contenido"
  },
  "domain2-addendum::addendum-rag-query-path::card:addendum-rag-query-path-04": {
    "text": "Agregar el contenido recuperado al prompt"
  },
  "domain2-addendum::addendum-rag-query-path::card:addendum-rag-query-path-05": {
    "text": "Generar la respuesta y las citas"
  },
  "domain2-addendum::addendum-s3-vector-store-comparison": {
    "title": "S3, embeddings y almacén de vectores",
    "instructions": "Restaura la tabla comparativa de la fuente. No conviertas esto en un rompecabezas abstracto de capas de arquitectura.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.1.5, 2.3.1.",
    "footnote": "<strong>AMPLÍA 2.1.5, 2.3.1</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::dest:s3-job": {
    "label": "Amazon S3 / Función principal"
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::dest:s3-mistake": {
    "label": "Amazon S3 / Error común"
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::dest:embedding-job": {
    "label": "Modelo de embeddings / Función principal"
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::dest:embedding-mistake": {
    "label": "Modelo de embeddings / Error común"
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::dest:vector-job": {
    "label": "Almacén de vectores / índice / Función principal"
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::dest:vector-mistake": {
    "label": "Almacén de vectores / índice / Error común"
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::dest:kb-job": {
    "label": "Amazon Bedrock Knowledge Bases / Función principal"
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::dest:kb-mistake": {
    "label": "Amazon Bedrock Knowledge Bases / Error común"
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::card:addendum-s3-vector-store-comparison-01": {
    "text": "Almacenamiento de objetos para documentos, audio, conjuntos de datos JSONL, entradas por lotes, salidas de evaluación y artefactos de modelos."
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::card:addendum-s3-vector-store-comparison-02": {
    "text": "Llamar a S3 mismo el motor de búsqueda por similitud habitual."
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::card:addendum-s3-vector-store-comparison-03": {
    "text": "Transforma el contenido o una consulta en vectores numéricos que capturan las relaciones semánticas."
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::card:addendum-s3-vector-store-comparison-04": {
    "text": "Llamar al modelo de embeddings una base de datos."
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::card:addendum-s3-vector-store-comparison-05": {
    "text": "Almacena y busca vectores por similitud."
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::card:addendum-s3-vector-store-comparison-06": {
    "text": "Suponer que los archivos originales desaparecen o que los vectores son resúmenes legibles para humanos."
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::card:addendum-s3-vector-store-comparison-07": {
    "text": "Capacidad de RAG administrada que puede orquestar la ingesta, la fragmentación (chunking), la generación de embeddings, el almacenamiento/recuperación de vectores y la generación."
  },
  "domain2-addendum::addendum-s3-vector-store-comparison::card:addendum-s3-vector-store-comparison-08": {
    "text": "Confundirla con la búsqueda empresarial pura o con el bucket de S3 subyacente."
  },
  "domain2-addendum::addendum-multi-agent-patterns": {
    "title": "Pistas de patrones multiagente",
    "instructions": "La tabla de la fuente enumera cada patrón y su pista decisiva. Mantén visibles los nombres de los patrones y restaura la pista.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.1.6.",
    "footnote": "<strong>AMPLÍA 2.1.6</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-multi-agent-patterns::dest:single": {
    "label": "Agente único con herramientas"
  },
  "domain2-addendum::addendum-multi-agent-patterns::dest:supervisor": {
    "label": "Supervisor / orquestador"
  },
  "domain2-addendum::addendum-multi-agent-patterns::dest:tool": {
    "label": "Agente como herramienta"
  },
  "domain2-addendum::addendum-multi-agent-patterns::dest:swarm": {
    "label": "Enjambre (swarm) / colaboración entre pares"
  },
  "domain2-addendum::addendum-multi-agent-patterns::dest:pipeline": {
    "label": "Canalización secuencial (pipeline)"
  },
  "domain2-addendum::addendum-multi-agent-patterns::card:addendum-multi-agent-patterns-01": {
    "text": "Un solo agente gestiona el objetivo y llama a varias herramientas."
  },
  "domain2-addendum::addendum-multi-agent-patterns::card:addendum-multi-agent-patterns-02": {
    "text": "Un agente principal descompone el objetivo, delega en especialistas y ensambla el resultado."
  },
  "domain2-addendum::addendum-multi-agent-patterns::card:addendum-multi-agent-patterns-03": {
    "text": "Un agente especialista se expone como una capacidad invocable para otro."
  },
  "domain2-addendum::addendum-multi-agent-patterns::card:addendum-multi-agent-patterns-04": {
    "text": "Los agentes colaboran entre pares sin un coordinador fijo."
  },
  "domain2-addendum::addendum-multi-agent-patterns::card:addendum-multi-agent-patterns-05": {
    "text": "Los agentes se ejecutan en un orden predeterminado y transmiten la salida al siguiente."
  },
  "domain2-addendum::addendum-multi-agent-patterns::item:undefined": {
    "text": "Los agentes se ejecutan en un orden predeterminado y transmiten la salida al siguiente."
  },
  "domain2-addendum::addendum-slm-llm-comparison": {
    "title": "Comparación entre SLM y LLM",
    "instructions": "Restaura la matriz comparativa entre SLM y LLM.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.2.3.",
    "footnote": "<strong>AMPLÍA 2.2.3</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-slm-llm-comparison::dest:latency-slm": {
    "label": "Latencia / Ventaja del SLM"
  },
  "domain2-addendum::addendum-slm-llm-comparison::dest:latency-llm": {
    "label": "Latencia / Ventaja del LLM"
  },
  "domain2-addendum::addendum-slm-llm-comparison::dest:hardware-slm": {
    "label": "Huella de hardware / Ventaja del SLM"
  },
  "domain2-addendum::addendum-slm-llm-comparison::dest:hardware-llm": {
    "label": "Huella de hardware / Ventaja del LLM"
  },
  "domain2-addendum::addendum-slm-llm-comparison::dest:privacy-slm": {
    "label": "Privacidad / localidad de los datos / Ventaja del SLM"
  },
  "domain2-addendum::addendum-slm-llm-comparison::dest:privacy-llm": {
    "label": "Privacidad / localidad de los datos / Ventaja del LLM"
  },
  "domain2-addendum::addendum-slm-llm-comparison::dest:offline-slm": {
    "label": "Funcionamiento sin conexión / Ventaja del SLM"
  },
  "domain2-addendum::addendum-slm-llm-comparison::dest:offline-llm": {
    "label": "Funcionamiento sin conexión / Ventaja del LLM"
  },
  "domain2-addendum::addendum-slm-llm-comparison::dest:breadth-slm": {
    "label": "Amplitud y razonamiento / Ventaja del SLM"
  },
  "domain2-addendum::addendum-slm-llm-comparison::dest:breadth-llm": {
    "label": "Amplitud y razonamiento / Ventaja del LLM"
  },
  "domain2-addendum::addendum-slm-llm-comparison::dest:cost-slm": {
    "label": "Costo / Ventaja del SLM"
  },
  "domain2-addendum::addendum-slm-llm-comparison::dest:cost-llm": {
    "label": "Costo / Ventaja del LLM"
  },
  "domain2-addendum::addendum-slm-llm-comparison::card:addendum-slm-llm-comparison-01": {
    "text": "Inferencia rápida, especialmente cuando es local al dispositivo."
  },
  "domain2-addendum::addendum-slm-llm-comparison::card:addendum-slm-llm-comparison-02": {
    "text": "Aún puede ser rápida mediante servicios administrados en la nube, pero generalmente es más pesada."
  },
  "domain2-addendum::addendum-slm-llm-comparison::card:addendum-slm-llm-comparison-03": {
    "text": "Puede adaptarse a dispositivos con recursos limitados después de la optimización/cuantización."
  },
  "domain2-addendum::addendum-slm-llm-comparison::card:addendum-slm-llm-comparison-04": {
    "text": "Generalmente requiere una infraestructura de aceleradores más potente."
  },
  "domain2-addendum::addendum-slm-llm-comparison::card:addendum-slm-llm-comparison-05": {
    "text": "La entrada puede permanecer en el dispositivo o en las instalaciones locales."
  },
  "domain2-addendum::addendum-slm-llm-comparison::card:addendum-slm-llm-comparison-06": {
    "text": "Los servicios administrados en la nube ofrecen controles de seguridad sólidos, pero los datos se envían al servicio."
  },
  "domain2-addendum::addendum-slm-llm-comparison::card:addendum-slm-llm-comparison-07": {
    "text": "Puede continuar funcionando con conectividad intermitente o nula."
  },
  "domain2-addendum::addendum-slm-llm-comparison::card:addendum-slm-llm-comparison-08": {
    "text": "Requiere acceso a la red, a menos que se aloje localmente."
  },
  "domain2-addendum::addendum-slm-llm-comparison::card:addendum-slm-llm-comparison-09": {
    "text": "Es la mejor opción para tareas acotadas y bien delimitadas."
  },
  "domain2-addendum::addendum-slm-llm-comparison::card:addendum-slm-llm-comparison-10": {
    "text": "Mayor conocimiento general, razonamiento complejo y trabajo multimodal amplio."
  },
  "domain2-addendum::addendum-slm-llm-comparison::card:addendum-slm-llm-comparison-11": {
    "text": "Menores necesidades de cómputo y transferencia de datos por inferencia."
  },
  "domain2-addendum::addendum-slm-llm-comparison::card:addendum-slm-llm-comparison-12": {
    "text": "Puede ser económico mediante precios administrados por token, pero los modelos de vanguardia cuestan más."
  },
  "domain2-addendum::addendum-slm-llm-scenarios": {
    "title": "Escenarios de SLM frente a LLM",
    "instructions": "Separa la práctica de escenarios de la matriz comparativa. Elige SLM o LLM entre los espacios visibles.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.2.3.",
    "footnote": "<strong>AMPLÍA 2.2.3</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-slm-llm-scenarios::dest:slm": {
    "label": "Modelo de lenguaje pequeño"
  },
  "domain2-addendum::addendum-slm-llm-scenarios::dest:llm": {
    "label": "Modelo de lenguaje grande"
  },
  "domain2-addendum::addendum-slm-llm-scenarios::card:addendum-slm-llm-scenarios-01": {
    "text": "Dispositivo integrado con baja latencia."
  },
  "domain2-addendum::addendum-slm-llm-scenarios::card:addendum-slm-llm-scenarios-02": {
    "text": "Asistente multimodal amplio con razonamiento complejo."
  },
  "domain2-addendum::addendum-slm-llm-scenarios::card:addendum-slm-llm-scenarios-03": {
    "text": "Tarea acotada de clasificación o lenguaje sin conexión."
  },
  "domain2-addendum::addendum-slm-llm-scenarios::card:addendum-slm-llm-scenarios-04": {
    "text": "Asistente empresarial de propósito general."
  },
  "domain2-addendum::addendum-slm-llm-scenarios::item:undefined": {
    "text": "Asistente empresarial de propósito general."
  },
  "domain2-addendum::addendum-bedrock-feature-purpose": {
    "title": "Relación entre las funciones de Bedrock y su propósito",
    "instructions": "Utiliza el patrón exitoso de tarjetas de servicio: mantén visibles los nombres de las funciones de Bedrock y relaciona un problema resuelto con cada una.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.3.1.",
    "footnote": "<strong>AMPLÍA 2.3.1</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-bedrock-feature-purpose::dest:kb": {
    "label": "Bedrock Knowledge Bases"
  },
  "domain2-addendum::addendum-bedrock-feature-purpose::dest:guardrails": {
    "label": "Bedrock Guardrails"
  },
  "domain2-addendum::addendum-bedrock-feature-purpose::dest:agents": {
    "label": "Bedrock Agents"
  },
  "domain2-addendum::addendum-bedrock-feature-purpose::dest:flows": {
    "label": "Bedrock Flows"
  },
  "domain2-addendum::addendum-bedrock-feature-purpose::dest:prompts": {
    "label": "Bedrock Prompt Management"
  },
  "domain2-addendum::addendum-bedrock-feature-purpose::dest:evaluation": {
    "label": "Bedrock Model Evaluation"
  },
  "domain2-addendum::addendum-bedrock-feature-purpose::dest:customization": {
    "label": "Personalización de modelos de Bedrock"
  },
  "domain2-addendum::addendum-bedrock-feature-purpose::card:addendum-bedrock-feature-purpose-01": {
    "text": "RAG administrado sobre datos empresariales."
  },
  "domain2-addendum::addendum-bedrock-feature-purpose::card:addendum-bedrock-feature-purpose-02": {
    "text": "Aplicar filtros de contenido, temas denegados, redacción de PII y verificaciones de fundamentación (grounding)."
  },
  "domain2-addendum::addendum-bedrock-feature-purpose::card:addendum-bedrock-feature-purpose-03": {
    "text": "Permitir que un modelo planifique y llame a herramientas."
  },
  "domain2-addendum::addendum-bedrock-feature-purpose::card:addendum-bedrock-feature-purpose-04": {
    "text": "Orquestar visualmente prompts, modelos, condiciones y llamadas a servicios."
  },
  "domain2-addendum::addendum-bedrock-feature-purpose::card:addendum-bedrock-feature-purpose-05": {
    "text": "Versionar y reutilizar prompts."
  },
  "domain2-addendum::addendum-bedrock-feature-purpose::card:addendum-bedrock-feature-purpose-06": {
    "text": "Comparar las salidas de los modelos mediante evaluación automática o humana."
  },
  "domain2-addendum::addendum-bedrock-feature-purpose::card:addendum-bedrock-feature-purpose-07": {
    "text": "Adaptar un modelo fundacional compatible cuando el uso de prompts o RAG resulta insuficiente."
  },
  "domain2-addendum::addendum-bedrock-feature-purpose::item:undefined": {
    "text": "Adaptar un modelo fundacional compatible cuando el uso de prompts o RAG resulta insuficiente."
  },
  "domain2-addendum::addendum-bedrock-sagemaker-jumpstart-definition": {
    "title": "¿Bedrock, SageMaker AI o JumpStart?",
    "instructions": "Mantén visibles los tres nombres de servicios de AWS. Relaciona una tarjeta de propósito/caso de uso directo a la vez.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.3.1.",
    "footnote": "<strong>AMPLÍA 2.3.1</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-bedrock-sagemaker-jumpstart-definition::dest:bedrock": {
    "label": "Amazon Bedrock"
  },
  "domain2-addendum::addendum-bedrock-sagemaker-jumpstart-definition::dest:sagemaker": {
    "label": "Amazon SageMaker AI"
  },
  "domain2-addendum::addendum-bedrock-sagemaker-jumpstart-definition::dest:jumpstart": {
    "label": "SageMaker JumpStart"
  },
  "domain2-addendum::addendum-bedrock-sagemaker-jumpstart-definition::card:addendum-bedrock-sagemaker-jumpstart-definition-01": {
    "text": "Acceso administrado a modelos fundacionales a través de una API unificada."
  },
  "domain2-addendum::addendum-bedrock-sagemaker-jumpstart-definition::card:addendum-bedrock-sagemaker-jumpstart-definition-02": {
    "text": "Es la mejor opción cuando el equipo no desea administrar la infraestructura del modelo."
  },
  "domain2-addendum::addendum-bedrock-sagemaker-jumpstart-definition::card:addendum-bedrock-sagemaker-jumpstart-definition-03": {
    "text": "Entrenar, ajustar, implementar y supervisar modelos de aprendizaje automático personalizados."
  },
  "domain2-addendum::addendum-bedrock-sagemaker-jumpstart-definition::card:addendum-bedrock-sagemaker-jumpstart-definition-04": {
    "text": "Es la mejor opción cuando el equipo requiere control sobre los artefactos del modelo y el endpoint."
  },
  "domain2-addendum::addendum-bedrock-sagemaker-jumpstart-definition::card:addendum-bedrock-sagemaker-jumpstart-definition-05": {
    "text": "Descubrir e implementar modelos preentrenados o abiertos en endpoints de SageMaker."
  },
  "domain2-addendum::addendum-bedrock-sagemaker-jumpstart-definition::card:addendum-bedrock-sagemaker-jumpstart-definition-06": {
    "text": "Un centro de modelos (model hub) dentro del ecosistema de SageMaker."
  },
  "domain2-addendum::addendum-bedrock-sagemaker-jumpstart-definition::item:undefined": {
    "text": "Un centro de modelos (model hub) dentro del ecosistema de SageMaker."
  },
  "domain2-addendum::addendum-aws-service-purpose-map": {
    "title": "Relación entre servicios de AWS y su propósito",
    "instructions": "Mantén visibles los nombres de los servicios y restaura el propósito directo de cada uno según la fuente.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.3.1.",
    "footnote": "<strong>AMPLÍA 2.3.1</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-aws-service-purpose-map::dest:bedrock": {
    "label": "Amazon Bedrock"
  },
  "domain2-addendum::addendum-aws-service-purpose-map::dest:nova": {
    "label": "Amazon Nova"
  },
  "domain2-addendum::addendum-aws-service-purpose-map::dest:stable": {
    "label": "Stable Diffusion 3.5 Large"
  },
  "domain2-addendum::addendum-aws-service-purpose-map::dest:partyrock": {
    "label": "PartyRock"
  },
  "domain2-addendum::addendum-aws-service-purpose-map::dest:quick": {
    "label": "Amazon Quick"
  },
  "domain2-addendum::addendum-aws-service-purpose-map::dest:qbusiness": {
    "label": "Amazon Q Business"
  },
  "domain2-addendum::addendum-aws-service-purpose-map::dest:kiro": {
    "label": "Kiro"
  },
  "domain2-addendum::addendum-aws-service-purpose-map::dest:s3": {
    "label": "Amazon S3"
  },
  "domain2-addendum::addendum-aws-service-purpose-map::dest:healthscribe": {
    "label": "AWS HealthScribe"
  },
  "domain2-addendum::addendum-aws-service-purpose-map::card:addendum-aws-service-purpose-map-01": {
    "text": "Plataforma administrada para crear aplicaciones de IA generativa con múltiples FM."
  },
  "domain2-addendum::addendum-aws-service-purpose-map::card:addendum-aws-service-purpose-map-02": {
    "text": "Familia de FM de primera parte de Amazon, a la que se accede a través de Bedrock."
  },
  "domain2-addendum::addendum-aws-service-purpose-map::card:addendum-aws-service-purpose-map-03": {
    "text": "Modelo de texto a imagen/imagen a imagen de Stability AI disponible a través de Bedrock."
  },
  "domain2-addendum::addendum-aws-service-purpose-map::card:addendum-aws-service-purpose-map-04": {
    "text": "Entorno de pruebas (playground) sin código en el navegador, impulsado por Bedrock."
  },
  "domain2-addendum::addendum-aws-service-purpose-map::card:addendum-aws-service-purpose-map-05": {
    "text": "Asistente de IA/espacio de trabajo terminado para datos empresariales, investigación, paneles y acciones."
  },
  "domain2-addendum::addendum-aws-service-purpose-map::card:addendum-aws-service-purpose-map-06": {
    "text": "Asistente empresarial heredado sobre datos de la empresa conectados."
  },
  "domain2-addendum::addendum-aws-service-purpose-map::card:addendum-aws-service-purpose-map-07": {
    "text": "IDE/CLI agéntico basado en especificaciones para planificar y programar."
  },
  "domain2-addendum::addendum-aws-service-purpose-map::card:addendum-aws-service-purpose-map-08": {
    "text": "Almacenamiento de objetos para documentos fuente, conjuntos de datos, artefactos de modelos y salidas de trabajos."
  },
  "domain2-addendum::addendum-aws-service-purpose-map::card:addendum-aws-service-purpose-map-09": {
    "text": "Audio entre paciente y clínico convertido en transcripción y notas clínicas preliminares."
  },
  "domain2-addendum::addendum-aws-service-purpose-map::item:undefined": {
    "text": "Audio entre paciente y clínico convertido en transcripción y notas clínicas preliminares."
  },
  "domain2-addendum::addendum-partyrock-what-it-is": {
    "title": "PartyRock: qué es y qué no es",
    "instructions": "Restaura la comparación de qué es y qué no es PartyRock.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.3.1.",
    "footnote": "<strong>AMPLÍA 2.3.1</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-partyrock-what-it-is::dest:partyrock-is": {
    "label": "PartyRock / Qué es"
  },
  "domain2-addendum::addendum-partyrock-what-it-is::dest:partyrock-for": {
    "label": "PartyRock / Para qué sirve"
  },
  "domain2-addendum::addendum-partyrock-what-it-is::dest:partyrock-not": {
    "label": "PartyRock / Qué no es"
  },
  "domain2-addendum::addendum-partyrock-what-it-is::card:addendum-partyrock-what-it-is-01": {
    "text": "Un entorno de pruebas (playground) de Amazon Bedrock basado en el navegador y sin código, para crear y compartir aplicaciones sencillas de IA generativa."
  },
  "domain2-addendum::addendum-partyrock-what-it-is::card:addendum-partyrock-what-it-is-02": {
    "text": "Aprendizaje, experimentación, encadenamiento de prompts, prototipos rápidos y demostraciones."
  },
  "domain2-addendum::addendum-partyrock-what-it-is::card:addendum-partyrock-what-it-is-03": {
    "text": "No es una plataforma de alojamiento de producción, ni un producto de asistente empresarial, ni un centro de modelos, ni un servicio de entrenamiento personalizado."
  },
  "domain2-addendum::addendum-current-name-table": {
    "title": "Nombres de Quick, Q Business y Kiro",
    "instructions": "Restaura la tabla de traducción de nombres vigentes del anexo.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.3.1.",
    "footnote": "<strong>AMPLÍA 2.3.1</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-current-name-table::dest:qdev-current": {
    "label": "Amazon Q Developer / Interpretación vigente"
  },
  "domain2-addendum::addendum-current-name-table::dest:qdev-distinction": {
    "label": "Amazon Q Developer / Distinción segura para el examen"
  },
  "domain2-addendum::addendum-current-name-table::dest:qbusiness-current": {
    "label": "Amazon Q Business / Interpretación vigente"
  },
  "domain2-addendum::addendum-current-name-table::dest:qbusiness-distinction": {
    "label": "Amazon Q Business / Distinción segura para el examen"
  },
  "domain2-addendum::addendum-current-name-table::dest:quick-current": {
    "label": "Amazon QuickSight / Quick Suite / Interpretación vigente"
  },
  "domain2-addendum::addendum-current-name-table::dest:quick-distinction": {
    "label": "Amazon QuickSight / Quick Suite / Distinción segura para el examen"
  },
  "domain2-addendum::addendum-current-name-table::card:addendum-current-name-table-01": {
    "text": "Kiro para el desarrollo agéntico vigente basado en IDE/CLI; Amazon Q Developer sigue siendo un nombre de transición en algunas superficies de AWS."
  },
  "domain2-addendum::addendum-current-name-table::card:addendum-current-name-table-02": {
    "text": "El IDE que planifica a partir de especificaciones = Kiro."
  },
  "domain2-addendum::addendum-current-name-table::card:addendum-current-name-table-03": {
    "text": "Asistente generativo empresarial heredado sobre datos de la empresa; a los clientes nuevos se los dirige hacia Amazon Quick."
  },
  "domain2-addendum::addendum-current-name-table::card:addendum-current-name-table-04": {
    "text": "El asistente empresarial terminado = la línea de Q Business/Quick, no Bedrock."
  },
  "domain2-addendum::addendum-current-name-table::card:addendum-current-name-table-05": {
    "text": "La redacción vigente de la guía puede usar Amazon Quick; Quick incluye capacidades de inteligencia empresarial y trabajo agéntico."
  },
  "domain2-addendum::addendum-current-name-table::card:addendum-current-name-table-06": {
    "text": "Usuarios de negocio, paneles, investigación y acción = Amazon Quick."
  },
  "domain2-addendum::addendum-cost-deployment-scenarios": {
    "title": "Escenarios de costo e implementación",
    "instructions": "Utiliza las opciones de implementación o precios indicadas como espacios. Cada tarjeta tiene una pista directa al estilo de la fuente.",
    "sourceNote": "Fuente: Anexo de relleno de vacíos del Dominio 2. Amplía los objetivos 2.3.4.",
    "footnote": "<strong>AMPLÍA 2.3.4</strong>",
    "checkLabel": "Verificar la estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios de la fuente completada antes de continuar."
  },
  "domain2-addendum::addendum-cost-deployment-scenarios::dest:bedrock": {
    "label": "Amazon Bedrock"
  },
  "domain2-addendum::addendum-cost-deployment-scenarios::dest:partyrock": {
    "label": "PartyRock"
  },
  "domain2-addendum::addendum-cost-deployment-scenarios::dest:jumpstart": {
    "label": "JumpStart / endpoint de SageMaker"
  },
  "domain2-addendum::addendum-cost-deployment-scenarios::dest:edge": {
    "label": "SLM optimizado en el edge"
  },
  "domain2-addendum::addendum-cost-deployment-scenarios::dest:provisioned": {
    "label": "Provisioned Throughput o capacidad reservada"
  },
  "domain2-addendum::addendum-cost-deployment-scenarios::dest:batch": {
    "label": "Inferencia por lotes"
  },
  "domain2-addendum::addendum-cost-deployment-scenarios::dest:quick": {
    "label": "Amazon Quick o Q Business heredado"
  },
  "domain2-addendum::addendum-cost-deployment-scenarios::dest:healthscribe": {
    "label": "AWS HealthScribe"
  },
  "domain2-addendum::addendum-cost-deployment-scenarios::card:addendum-cost-deployment-scenarios-01": {
    "text": "Prototipo rápido sin infraestructura para un prototipo de aprendizaje sin código."
  },
  "domain2-addendum::addendum-cost-deployment-scenarios::card:addendum-cost-deployment-scenarios-02": {
    "text": "Crear una aplicación de IA generativa de producción con acceso administrado a FM y sin infraestructura de modelos."
  },
  "domain2-addendum::addendum-cost-deployment-scenarios::card:addendum-cost-deployment-scenarios-03": {
    "text": "Modelo abierto dentro de un entorno controlado por el cliente."
  },
  "domain2-addendum::addendum-cost-deployment-scenarios::card:addendum-cost-deployment-scenarios-04": {
    "text": "Inferencia con la latencia más baja en un dispositivo."
  },
  "domain2-addendum::addendum-cost-deployment-scenarios::card:addendum-cost-deployment-scenarios-05": {
    "text": "Capacidad de Bedrock alta, constante y garantizada."
  },
  "domain2-addendum::addendum-cost-deployment-scenarios::card:addendum-cost-deployment-scenarios-06": {
    "text": "Trabajo grande fuera de línea en Bedrock."
  },
  "domain2-addendum::addendum-cost-deployment-scenarios::card:addendum-cost-deployment-scenarios-07": {
    "text": "Asistente empresarial para empleados, sin creación de una aplicación personalizada."
  },
  "domain2-addendum::addendum-cost-deployment-scenarios::card:addendum-cost-deployment-scenarios-08": {
    "text": "Flujo de trabajo de notas clínicas."
  },
  "domain2-addendum::addendum-cost-deployment-scenarios::item:undefined": {
    "text": "Flujo de trabajo de notas clínicas."
  }
});
})();
