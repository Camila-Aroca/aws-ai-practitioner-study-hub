(function(){
  "use strict";
  window.I18N_ES_ROUNDS = Object.assign({}, window.I18N_ES_ROUNDS || {}, {
  "domain1-task11-12::d1-t11-vocab-1": {
    "title": "Vocabulario Central de IA, Parte Uno",
    "instructions": "Relaciona cada término fundamental con la definición o trampa de examen de la guía. Presta especial atención a la distinción entre algoritmo y modelo.",
    "sourceNote": "Guía §1.1.1: la IA es el término general; el aprendizaje automático (machine learning) aprende de los datos; un algoritmo es el procedimiento de aprendizaje; un modelo es el artefacto entrenado.",
    "slotLabel": "Definición o detalle distintivo"
  },
  "domain1-task11-12::d1-t11-vocab-1::dest:ai": {
    "label": "Inteligencia artificial"
  },
  "domain1-task11-12::d1-t11-vocab-1::dest:ml": {
    "label": "Aprendizaje automático"
  },
  "domain1-task11-12::d1-t11-vocab-1::dest:dl": {
    "label": "Aprendizaje profundo"
  },
  "domain1-task11-12::d1-t11-vocab-1::dest:nn": {
    "label": "Red neuronal"
  },
  "domain1-task11-12::d1-t11-vocab-1::dest:cv": {
    "label": "Visión artificial"
  },
  "domain1-task11-12::d1-t11-vocab-1::dest:nlp": {
    "label": "Procesamiento del lenguaje natural"
  },
  "domain1-task11-12::d1-t11-vocab-1::dest:algorithm": {
    "label": "Algoritmo"
  },
  "domain1-task11-12::d1-t11-vocab-1::dest:model": {
    "label": "Modelo"
  },
  "domain1-task11-12::d1-t11-vocab-1::card:c-ai": {
    "text": "El campo amplio de sistemas que realizan tareas que normalmente requieren inteligencia humana.",
    "explanation": "La IA incluye el aprendizaje automático (ML), pero también incluye reglas y sistemas expertos que no aprenden de los datos."
  },
  "domain1-task11-12::d1-t11-vocab-1::card:c-ml": {
    "text": "Un subconjunto de la IA en el que los sistemas aprenden patrones a partir de datos en lugar de seguir reglas explícitas.",
    "explanation": "La prueba consiste en determinar si el comportamiento proviene de los datos y no de una regla elegida por una persona."
  },
  "domain1-task11-12::d1-t11-vocab-1::card:c-dl": {
    "text": "Aprendizaje automático (ML) que usa redes neuronales de múltiples capas para aprender representaciones jerárquicas, a menudo a partir de datos no estructurados.",
    "explanation": "Profundo se refiere a las capas, no a la importancia comercial del resultado."
  },
  "domain1-task11-12::d1-t11-vocab-1::card:c-nn": {
    "text": "Una arquitectura de modelo compuesta por capas conectadas de nodos con pesos que se ajustan durante el entrenamiento.",
    "explanation": "Una red neuronal es una arquitectura, no un servicio de AWS."
  },
  "domain1-task11-12::d1-t11-vocab-1::card:c-cv": {
    "text": "El campo de la IA dedicado a extraer significado de imágenes y video.",
    "explanation": "Clasificar una imagen es visión artificial; generar una imagen nueva es IA generativa."
  },
  "domain1-task11-12::d1-t11-vocab-1::card:c-nlp": {
    "text": "El campo de la IA dedicado a comprender y generar lenguaje humano.",
    "explanation": "La guía señala que el procesamiento del lenguaje natural (NLP) incluye tanto la comprensión, como en Comprehend, como la generación, como en un LLM."
  },
  "domain1-task11-12::d1-t11-vocab-1::card:c-algorithm": {
    "text": "El procedimiento usado para aprender un modelo a partir de datos, como XGBoost, k-means o el descenso de gradiente.",
    "explanation": "Algoritmo equivale a la receta de aprendizaje; este produce el modelo."
  },
  "domain1-task11-12::d1-t11-vocab-1::card:c-model": {
    "text": "El artefacto entrenado: parámetros aprendidos más una estructura que asigna la entrada a la salida.",
    "explanation": "El modelo es el resultado del entrenamiento, no el proceso."
  },
  "domain1-task11-12::d1-t11-vocab-2": {
    "title": "Vocabulario Central de IA, Parte Dos",
    "instructions": "Coloca las tarjetas de vocabulario de entrenamiento, inferencia, equidad, ajuste e IA generativa. Estos términos suelen intercambiarse en los distractores.",
    "sourceNote": "Guía §1.1.1 y CYU 1.1: los parámetros se aprenden; los hiperparámetros se configuran; IA agéntica significa objetivo + planificación + uso de herramientas + acción.",
    "slotLabel": "Definición o pista decisiva"
  },
  "domain1-task11-12::d1-t11-vocab-2::dest:training": {
    "label": "Entrenamiento"
  },
  "domain1-task11-12::d1-t11-vocab-2::dest:inference": {
    "label": "Inferencia"
  },
  "domain1-task11-12::d1-t11-vocab-2::dest:parameters": {
    "label": "Parámetros"
  },
  "domain1-task11-12::d1-t11-vocab-2::dest:hyperparameters": {
    "label": "Hiperparámetros"
  },
  "domain1-task11-12::d1-t11-vocab-2::dest:fit": {
    "label": "Ajuste"
  },
  "domain1-task11-12::d1-t11-vocab-2::dest:bias": {
    "label": "Sesgo"
  },
  "domain1-task11-12::d1-t11-vocab-2::dest:fairness": {
    "label": "Equidad"
  },
  "domain1-task11-12::d1-t11-vocab-2::dest:llm": {
    "label": "Modelo de lenguaje grande"
  },
  "domain1-task11-12::d1-t11-vocab-2::dest:genai": {
    "label": "IA generativa"
  },
  "domain1-task11-12::d1-t11-vocab-2::dest:agentic": {
    "label": "IA agéntica"
  },
  "domain1-task11-12::d1-t11-vocab-2::card:c-training": {
    "text": "Ajustar los parámetros de un modelo con datos para que realice bien una tarea.",
    "explanation": "La guía describe el entrenamiento como costoso, sin conexión (offline) y repetible."
  },
  "domain1-task11-12::d1-t11-vocab-2::card:c-inference": {
    "text": "Usar un modelo entrenado para producir una salida a partir de una entrada nueva y no vista.",
    "explanation": "La inferencia es la actividad de producción por la que se sigue pagando."
  },
  "domain1-task11-12::d1-t11-vocab-2::card:c-parameters": {
    "text": "Valores aprendidos por el algoritmo durante el entrenamiento, como los pesos o los coeficientes de regresión.",
    "explanation": "CYU 1.1 contrasta estos valores con la tasa de aprendizaje, k y el número de capas."
  },
  "domain1-task11-12::d1-t11-vocab-2::card:c-hyperparameters": {
    "text": "Configuraciones elegidas antes del entrenamiento, como la tasa de aprendizaje, el número de clústeres o el número de capas.",
    "explanation": "Si se puede cambiar antes de ver los datos, es un hiperparámetro."
  },
  "domain1-task11-12::d1-t11-vocab-2::card:c-fit": {
    "text": "Qué tan bien captura el modelo el patrón: demasiado simple provoca subajuste (underfitting); memorizar el ruido del entrenamiento provoca sobreajuste (overfitting).",
    "explanation": "Un buen ajuste generaliza a datos no vistos."
  },
  "domain1-task11-12::d1-t11-vocab-2::card:c-bias": {
    "text": "Una desviación sistemática e injusta en los resultados entre grupos, usualmente heredada de los datos.",
    "explanation": "Este es el sentido de sesgo relacionado con la equidad, distinto del sesgo-varianza."
  },
  "domain1-task11-12::d1-t11-vocab-2::card:c-fairness": {
    "text": "La propiedad de que un modelo no produzca resultados sistemáticamente desfavorables para ciertos grupos.",
    "explanation": "La equidad es el objetivo; la detección de sesgo es la medición."
  },
  "domain1-task11-12::d1-t11-vocab-2::card:c-llm": {
    "text": "Un modelo muy grande basado en transformadores, entrenado con texto para predecir y generar lenguaje.",
    "explanation": "Todos los LLM son modelos fundacionales; no todos los modelos fundacionales son LLM."
  },
  "domain1-task11-12::d1-t11-vocab-2::card:c-genai": {
    "text": "IA que produce contenido nuevo: texto, imagen, audio, video o código.",
    "explanation": "El tipo de salida es la señal reveladora: contenido nuevo significa generativa."
  },
  "domain1-task11-12::d1-t11-vocab-2::card:c-agentic": {
    "text": "Un sistema impulsado por un modelo que planifica, llama a herramientas y realiza acciones de múltiples pasos hacia un objetivo.",
    "explanation": "Un chatbot que responde una pregunta a la vez no es agéntico a menos que planifique, use herramientas, mantenga estado y actúe."
  },
  "domain1-task11-12::d1-t11-hierarchy": {
    "title": "La Jerarquía de la IA",
    "instructions": "Coloca las cinco capas de la más amplia a la más específica. Cada paso agrega un requisito.",
    "sourceNote": "Guía §1.1.2: la IA contiene al aprendizaje automático, que contiene al aprendizaje profundo, que contiene a la IA generativa, que contiene a la IA agéntica."
  },
  "domain1-task11-12::d1-t11-hierarchy::dest:pos-1": {
    "label": "1. Más amplio"
  },
  "domain1-task11-12::d1-t11-hierarchy::dest:pos-2": {
    "label": "2. Aprende de los datos"
  },
  "domain1-task11-12::d1-t11-hierarchy::dest:pos-3": {
    "label": "3. Agrega redes neuronales de múltiples capas"
  },
  "domain1-task11-12::d1-t11-hierarchy::dest:pos-4": {
    "label": "4. Agrega la generación de contenido nuevo"
  },
  "domain1-task11-12::d1-t11-hierarchy::dest:pos-5": {
    "label": "5. Agrega la acción autónoma de múltiples pasos"
  },
  "domain1-task11-12::d1-t11-hierarchy::card:c-h-ai": {
    "text": "Inteligencia artificial",
    "explanation": "Incluye cualquier sistema que realice tareas que normalmente requieren inteligencia humana, incluso reglas escritas a mano."
  },
  "domain1-task11-12::d1-t11-hierarchy::card:c-h-ml": {
    "text": "Aprendizaje automático",
    "explanation": "Reduce la IA a sistemas que aprenden patrones a partir de datos."
  },
  "domain1-task11-12::d1-t11-hierarchy::card:c-h-dl": {
    "text": "Aprendizaje profundo",
    "explanation": "Reduce el aprendizaje automático a redes neuronales de múltiples capas."
  },
  "domain1-task11-12::d1-t11-hierarchy::card:c-h-genai": {
    "text": "IA generativa",
    "explanation": "Construida sobre arquitecturas de aprendizaje profundo que generan contenido."
  },
  "domain1-task11-12::d1-t11-hierarchy::card:c-h-agentic": {
    "text": "IA agéntica",
    "explanation": "Agrega objetivos, memoria, herramientas, planificación y acción autónoma."
  },
  "domain1-task11-12::d1-t11-inference": {
    "title": "Tipos de Inferencia",
    "instructions": "Cada tipo recibe dos tarjetas: una definición y una pista de escenario. Usa la latencia, el tamaño de la carga útil y el patrón de tráfico.",
    "sourceNote": "Guía §1.1.3 y CYU 1.2: en tiempo real = ahora, por lotes (batch) = de manera masiva según un cronograma, asíncrona = solicitudes individuales grandes/lentas, sin servidor (serverless) = tráfico irregular e inactividad."
  },
  "domain1-task11-12::d1-t11-inference::dest:real-time": {
    "label": "Inferencia en tiempo real"
  },
  "domain1-task11-12::d1-t11-inference::dest:batch": {
    "label": "Inferencia por lotes"
  },
  "domain1-task11-12::d1-t11-inference::dest:async": {
    "label": "Inferencia asíncrona"
  },
  "domain1-task11-12::d1-t11-inference::dest:serverless": {
    "label": "Inferencia sin servidor"
  },
  "domain1-task11-12::d1-t11-inference::card:c-rt-def": {
    "text": "Un endpoint persistente devuelve una predicción de forma síncrona por cada solicitud.",
    "explanation": "Ideal cuando una aplicación interactiva necesita una respuesta inmediata."
  },
  "domain1-task11-12::d1-t11-inference::card:c-rt-scn": {
    "text": "Verificaciones de fraude al momento del pago o recomendaciones en vivo mientras un cliente hace clic.",
    "explanation": "Las palabras decisivas incluyen inmediato, en vivo, en menos de un segundo o mientras el usuario hace clic."
  },
  "domain1-task11-12::d1-t11-inference::card:c-batch-def": {
    "text": "Un trabajo (job) califica todo un conjunto de datos a la vez y escribe los resultados en almacenamiento.",
    "explanation": "No es necesario que un endpoint funcione entre los trabajos."
  },
  "domain1-task11-12::d1-t11-inference::card:c-batch-scn": {
    "text": "Calificar a todos los clientes semanalmente y almacenar los resultados para la revisión matutina.",
    "explanation": "Todo el conjunto de datos más un cronograma es la marca distintiva del procesamiento por lotes."
  },
  "domain1-task11-12::d1-t11-inference::card:c-async-def": {
    "text": "Las solicitudes se ponen en cola; quienes las realizan recogen los resultados más tarde desde una ubicación de resultados.",
    "explanation": "Esto gestiona solicitudes individuales que son demasiado grandes o lentas para uso síncrono."
  },
  "domain1-task11-12::d1-t11-inference::card:c-async-scn": {
    "text": "Un médico sube un video de diagnóstico largo y regresa más tarde por los resultados.",
    "explanation": "Carga útil grande más procesamiento prolongado más el usuario no espera significa asíncrona."
  },
  "domain1-task11-12::d1-t11-inference::card:c-serverless-def": {
    "text": "Un endpoint administrado se reduce a cero entre solicitudes y se inicia bajo demanda.",
    "explanation": "Puede haber un arranque en frío (cold start), pero se evita el costo de capacidad inactiva."
  },
  "domain1-task11-12::d1-t11-inference::card:c-serverless-scn": {
    "text": "Una herramienta interna tiene días sin tráfico, pero necesita respuestas rápidas cuando se usa.",
    "explanation": "El tráfico intermitente y no pagar mientras está inactivo apuntan a sin servidor (serverless)."
  },
  "domain1-task11-12::d1-t11-inference::slottype:definition": {
    "label": "Cómo funciona"
  },
  "domain1-task11-12::d1-t11-inference::slottype:scenario": {
    "label": "Mejor escenario"
  },
  "domain1-task11-12::d1-t11-data-types": {
    "title": "Tipos de Datos",
    "instructions": "Relaciona cada categoría de datos. Recuerda: etiquetado/no etiquetado es independiente de estructurado/no estructurado.",
    "sourceNote": "Guía §1.1.4: una carpeta etiquetada de fotos es tanto no estructurada como etiquetada; una tabla de base de datos sin objetivo es estructurada y no etiquetada. El JSON/XML semiestructurado es legítimo donde aparece.",
    "slotLabel": "Significado o ejemplo"
  },
  "domain1-task11-12::d1-t11-data-types::dest:labelled": {
    "label": "Etiquetado"
  },
  "domain1-task11-12::d1-t11-data-types::dest:unlabelled": {
    "label": "No etiquetado"
  },
  "domain1-task11-12::d1-t11-data-types::dest:structured": {
    "label": "Estructurado"
  },
  "domain1-task11-12::d1-t11-data-types::dest:semi": {
    "label": "Semiestructurado"
  },
  "domain1-task11-12::d1-t11-data-types::dest:unstructured": {
    "label": "No estructurado"
  },
  "domain1-task11-12::d1-t11-data-types::dest:tabular": {
    "label": "Tabular"
  },
  "domain1-task11-12::d1-t11-data-types::dest:time-series": {
    "label": "Serie temporal"
  },
  "domain1-task11-12::d1-t11-data-types::dest:image": {
    "label": "Imagen"
  },
  "domain1-task11-12::d1-t11-data-types::dest:text": {
    "label": "Texto"
  },
  "domain1-task11-12::d1-t11-data-types::dest:audio": {
    "label": "Audio"
  },
  "domain1-task11-12::d1-t11-data-types::card:c-labelled": {
    "text": "Cada registro lleva la respuesta correcta, como fraude o no fraude.",
    "explanation": "Las etiquetas son objetivos, independientes de si los datos en sí están estructurados."
  },
  "domain1-task11-12::d1-t11-data-types::card:c-unlabelled": {
    "text": "Los registros no tienen un valor objetivo asociado.",
    "explanation": "Un flujo de clics (clickstream) sin procesar y sin resultado es un ejemplo de la guía."
  },
  "domain1-task11-12::d1-t11-data-types::card:c-structured": {
    "text": "Esquema fijo, típicamente filas y columnas, como transacciones en una tabla relacional.",
    "explanation": "El CSV y las tablas relacionales son estructurados."
  },
  "domain1-task11-12::d1-t11-data-types::card:c-semi": {
    "text": "JSON o XML: las claves o etiquetas dan organización, pero no un esquema relacional fijo.",
    "explanation": "La guía llama a semiestructurado la quinta respuesta que puede aparecer como opción."
  },
  "domain1-task11-12::d1-t11-data-types::card:c-unstructured": {
    "text": "Sin esquema predefinido: texto libre, imágenes, audio, video o contratos escaneados.",
    "explanation": "Pregunta si se puede consultar tal cual con SQL; si no, probablemente sea no estructurado."
  },
  "domain1-task11-12::d1-t11-data-types::card:c-tabular": {
    "text": "Filas y columnas, la forma de entrada clásica para el aprendizaje automático tradicional.",
    "explanation": "Los ejemplos incluyen edad, ingresos, antigüedad o número de reclamos."
  },
  "domain1-task11-12::d1-t11-data-types::card:c-time": {
    "text": "Valores indexados por tiempo donde el orden y la estacionalidad importan.",
    "explanation": "El volumen de envíos semanal de Volta Logistics es el ejemplo de la guía."
  },
  "domain1-task11-12::d1-t11-data-types::card:c-image": {
    "text": "Datos de píxeles, generalmente manejados por aprendizaje profundo.",
    "explanation": "La fotografía de productos de Andes Retail es un ejemplo."
  },
  "domain1-task11-12::d1-t11-data-types::card:c-text": {
    "text": "Lenguaje natural manejado por NLP o LLM.",
    "explanation": "Las notas clínicas de Salud Norte son un ejemplo de datos de texto."
  },
  "domain1-task11-12::d1-t11-data-types::card:c-audio": {
    "text": "Forma de onda o discurso grabado que puede necesitar transcripción antes del análisis de texto.",
    "explanation": "La sección de aplicaciones trata las grabaciones de llamadas y los dictados como cargas de trabajo de voz/audio."
  },
  "domain1-task11-12::d1-t11-learning": {
    "title": "Paradigmas de Aprendizaje",
    "instructions": "Relaciona cada tipo de aprendizaje con su requisito de datos y patrón de salida.",
    "sourceNote": "Guía §1.1.5: las etiquetas implican aprendizaje supervisado; la ausencia de etiquetas implica no supervisado; pocas etiquetas más muchos registros sin etiquetar implican semisupervisado; etiquetas generadas a partir de datos sin procesar implican autosupervisado; una señal de recompensa implica aprendizaje por refuerzo."
  },
  "domain1-task11-12::d1-t11-learning::dest:supervised": {
    "label": "Aprendizaje supervisado"
  },
  "domain1-task11-12::d1-t11-learning::dest:unsupervised": {
    "label": "Aprendizaje no supervisado"
  },
  "domain1-task11-12::d1-t11-learning::dest:semi-supervised": {
    "label": "Aprendizaje semisupervisado"
  },
  "domain1-task11-12::d1-t11-learning::dest:self-supervised": {
    "label": "Aprendizaje autosupervisado"
  },
  "domain1-task11-12::d1-t11-learning::dest:reinforcement": {
    "label": "Aprendizaje por refuerzo"
  },
  "domain1-task11-12::d1-t11-learning::card:c-supervised-data": {
    "text": "Datos etiquetados con un objetivo conocido.",
    "explanation": "La clasificación y la regresión son tareas supervisadas canónicas."
  },
  "domain1-task11-12::d1-t11-learning::card:c-supervised-example": {
    "text": "Predecir fraude/no fraude o un número continuo a partir de ejemplos.",
    "explanation": "Categoría significa clasificación; número significa regresión."
  },
  "domain1-task11-12::d1-t11-learning::card:c-unsupervised-data": {
    "text": "Datos no etiquetados.",
    "explanation": "El modelo descubre estructura en lugar de aprender un objetivo conocido."
  },
  "domain1-task11-12::d1-t11-learning::card:c-unsupervised-example": {
    "text": "Encontrar clústeres, reducir dimensiones o marcar anomalías.",
    "explanation": "La segmentación de clientes sin grupos predefinidos es agrupamiento (clustering)."
  },
  "domain1-task11-12::d1-t11-learning::card:c-semi-data": {
    "text": "Un pequeño conjunto etiquetado más un gran conjunto no etiquetado.",
    "explanation": "Esto es útil cuando el etiquetado es costoso."
  },
  "domain1-task11-12::d1-t11-learning::card:c-semi-example": {
    "text": "Salud Norte tiene cientos de exploraciones etiquetadas y decenas de miles sin etiquetar.",
    "explanation": "Los ejemplos etiquetados anclan la tarea mientras los datos no etiquetados agregan señal."
  },
  "domain1-task11-12::d1-t11-learning::card:c-self-data": {
    "text": "Datos no etiquetados donde las etiquetas se generan a partir de los mismos datos.",
    "explanation": "El preentrenamiento de modelos fundacionales usa comúnmente este patrón."
  },
  "domain1-task11-12::d1-t11-learning::card:c-self-example": {
    "text": "Un LLM aprende prediciendo el siguiente token en texto sin procesar.",
    "explanation": "La secuencia sin procesar proporciona la señal de entrenamiento."
  },
  "domain1-task11-12::d1-t11-learning::card:c-rl-data": {
    "text": "Un entorno, posibles acciones y una señal de recompensa.",
    "explanation": "No existe un conjunto de datos etiquetado fijo en el sentido habitual."
  },
  "domain1-task11-12::d1-t11-learning::card:c-rl-example": {
    "text": "Volta Logistics optimiza las decisiones de enrutamiento mediante prueba y recompensa.",
    "explanation": "La salida es una política que maximiza la recompensa acumulada."
  },
  "domain1-task11-12::d1-t11-learning::slottype:data": {
    "label": "Datos que necesita"
  },
  "domain1-task11-12::d1-t11-learning::slottype:example": {
    "label": "Salida o ejemplo"
  },
  "domain1-task11-12::d1-t12-value": {
    "title": "Dónde Crea Valor la IA",
    "instructions": "Relaciona cada patrón de valor con su pista práctica. Asistencia, escala y automatización son cosas distintas.",
    "sourceNote": "Guía §1.2.1: los patrones de valor nombrados incluyen asistir la toma de decisiones humanas, lograr escala, automatizar trabajo, personalización y descubrimiento de patrones.",
    "slotLabel": "Ejemplo o pista decisiva"
  },
  "domain1-task11-12::d1-t12-value::dest:assist": {
    "label": "Asistir decisiones humanas"
  },
  "domain1-task11-12::d1-t12-value::dest:scale": {
    "label": "Escalabilidad"
  },
  "domain1-task11-12::d1-t12-value::dest:automation": {
    "label": "Automatización"
  },
  "domain1-task11-12::d1-t12-value::dest:personalization": {
    "label": "Personalización"
  },
  "domain1-task11-12::d1-t12-value::dest:patterns": {
    "label": "Descubrimiento de patrones"
  },
  "domain1-task11-12::d1-t12-value::card:c-assist": {
    "text": "Cordillera Bank clasifica las transacciones más riesgosas, pero los analistas toman la decisión final.",
    "explanation": "Si el humano sigue decidiendo, el modelo está asistiendo en lugar de automatizar."
  },
  "domain1-task11-12::d1-t12-value::card:c-scale": {
    "text": "Andes Retail etiqueta 200,000 fotos de productos, un volumen que un equipo pequeño no puede manejar manualmente.",
    "explanation": "La tarea se puede hacer manualmente, pero no en el volumen requerido."
  },
  "domain1-task11-12::d1-t12-value::card:c-automation": {
    "text": "Los correos de soporte entrantes se enrutan de principio a fin a la cola correcta.",
    "explanation": "Una tarea repetitiva y acotada se realiza sin intervención de una persona."
  },
  "domain1-task11-12::d1-t12-value::card:c-personalization": {
    "text": "Cada comprador recibe una clasificación de página de inicio diferente.",
    "explanation": "La salida es relevante de forma individual para cada usuario."
  },
  "domain1-task11-12::d1-t12-value::card:c-patterns": {
    "text": "El sistema encuentra grupos de comportamiento que nadie definió de antemano.",
    "explanation": "El descubrimiento de patrones encuentra estructura demasiado grande o de alta dimensión para la inspección manual."
  },
  "domain1-task11-12::d1-t12-no-ai": {
    "title": "Cuándo No Usar IA",
    "instructions": "Relaciona cada señal de advertencia con la mejor recomendación o restricción no basada en aprendizaje automático (ML). Algunas respuestas del examen realmente son 'no usar ML.'",
    "sourceNote": "Guía §1.2.2 y CYU 1.3: las respuestas deterministas exactas y el análisis costo-beneficio fallido son los dos disparadores oficiales; la ausencia de datos significativos, las fórmulas conocidas y las restricciones estrictas de transparencia refuerzan el mismo juicio.",
    "slotLabel": "Por qué el ML es incorrecto o qué usar en su lugar"
  },
  "domain1-task11-12::d1-t12-no-ai::dest:exact": {
    "label": "Se requiere una respuesta determinista"
  },
  "domain1-task11-12::d1-t12-no-ai::dest:formula": {
    "label": "Existe una fórmula exacta"
  },
  "domain1-task11-12::d1-t12-no-ai::dest:no-data": {
    "label": "No hay datos históricos significativos"
  },
  "domain1-task11-12::d1-t12-no-ai::dest:cost": {
    "label": "El análisis costo-beneficio falla"
  },
  "domain1-task11-12::d1-t12-no-ai::dest:transparent": {
    "label": "Se requiere transparencia total"
  },
  "domain1-task11-12::d1-t12-no-ai::card:c-exact": {
    "text": "Las predicciones tienen incertidumbre; escribe reglas de negocio deterministas cuando la respuesta deba estar garantizada.",
    "explanation": "Palabras como exacto, garantizado y cifra precisa apuntan lejos del ML."
  },
  "domain1-task11-12::d1-t12-no-ai::card:c-formula": {
    "text": "Implementa el cálculo publicado en lugar de aprender una aproximación.",
    "explanation": "El pago de préstamos de Cordillera Bank o la retención fiscal reglamentaria es código, no un modelo."
  },
  "domain1-task11-12::d1-t12-no-ai::card:c-no-data": {
    "text": "Instrumenta primero el proceso y retoma el modelado después de que exista suficiente historial.",
    "explanation": "La ausencia de ejemplos históricos significa que no hay nada confiable de dónde aprender."
  },
  "domain1-task11-12::d1-t12-no-ai::card:c-cost": {
    "text": "Usa un proceso manual o un motor de reglas simple para trabajo de bajo valor o bajo volumen.",
    "explanation": "La recopilación de datos, el etiquetado, el entrenamiento, el monitoreo y el reentrenamiento cuestan dinero."
  },
  "domain1-task11-12::d1-t12-no-ai::card:c-transparent": {
    "text": "Usa un modelo interpretable o mantén a un tomador de decisiones humano si no se puede justificar una caja negra.",
    "explanation": "Un modelo de alta precisión puede seguir siendo inutilizable para decisiones reguladas."
  },
  "domain1-task11-12::d1-t12-technique": {
    "title": "Elige La Técnica de ML",
    "instructions": "Lee la salida que el negocio desea. Categoría, número, grupo, serie futura, lista clasificada o valor atípico suele decidir la técnica.",
    "sourceNote": "Guía §1.2.3 y CYU 1.4: la regresión produce un valor a partir de características de un registro; el pronóstico (forecasting) produce valores futuros de una serie temporal. La clasificación usa etiquetas predefinidas; el agrupamiento (clustering) descubre grupos.",
    "slotLabel": "Pista del escenario"
  },
  "domain1-task11-12::d1-t12-technique::dest:classification": {
    "label": "Clasificación"
  },
  "domain1-task11-12::d1-t12-technique::dest:regression": {
    "label": "Regresión"
  },
  "domain1-task11-12::d1-t12-technique::dest:clustering": {
    "label": "Agrupamiento"
  },
  "domain1-task11-12::d1-t12-technique::dest:dimensionality": {
    "label": "Reducción de dimensionalidad"
  },
  "domain1-task11-12::d1-t12-technique::dest:forecasting": {
    "label": "Pronóstico"
  },
  "domain1-task11-12::d1-t12-technique::dest:recommendation": {
    "label": "Recomendación"
  },
  "domain1-task11-12::d1-t12-technique::dest:anomaly": {
    "label": "Detección de anomalías"
  },
  "domain1-task11-12::d1-t12-technique::card:c-classification": {
    "text": "¿Este cliente abandonará el servicio en los próximos 90 días: sí o no?",
    "explanation": "Una categoría discreta con etiquetas es clasificación."
  },
  "domain1-task11-12::d1-t12-technique::card:c-regression": {
    "text": "¿Cuánto costará esta reparación?",
    "explanation": "Un valor numérico continuo a partir de las características de un registro es regresión."
  },
  "domain1-task11-12::d1-t12-technique::card:c-clustering": {
    "text": "¿Qué grupos naturales existen entre nuestros usuarios cuando no hay segmentos predefinidos?",
    "explanation": "La ausencia de categorías predefinidas significa agrupamiento, no clasificación."
  },
  "domain1-task11-12::d1-t12-technique::card:c-dim": {
    "text": "Comprimir 400 características a 20 conservando la mayor parte de la señal.",
    "explanation": "La reducción de dimensionalidad crea una representación de menor dimensión."
  },
  "domain1-task11-12::d1-t12-technique::card:c-forecasting": {
    "text": "Proyectar el volumen de envíos semanal para el próximo trimestre usando cuatro años de historial estacional.",
    "explanation": "Orden temporal más horizonte más estacionalidad significa pronóstico."
  },
  "domain1-task11-12::d1-t12-technique::card:c-recommendation": {
    "text": "¿Qué debería mostrarle Andes Retail a continuación a este comprador?",
    "explanation": "Una lista clasificada por usuario es recomendación."
  },
  "domain1-task11-12::d1-t12-technique::card:c-anomaly": {
    "text": "¿Qué lecturas de sensores no se parecen en nada al funcionamiento normal?",
    "explanation": "Los valores atípicos o registros que no encajan en los patrones normales son detección de anomalías."
  },
  "domain1-task11-12::d1-t12-applications": {
    "title": "Aplicaciones de IA en el Mundo Real",
    "instructions": "Relaciona cada caso de uso con la categoría de aplicación. Comienza con la modalidad: píxeles, palabras, audio, series temporales, documentos o acción.",
    "sourceNote": "Guía §1.2.4: la v1.1 agregó bases de conocimiento e IA agéntica. Responder a partir de documentos internos con citas es el patrón de base de conocimiento/RAG.",
    "slotLabel": "Caso de uso"
  },
  "domain1-task11-12::d1-t12-applications::dest:vision": {
    "label": "Visión artificial"
  },
  "domain1-task11-12::d1-t12-applications::dest:nlp-app": {
    "label": "NLP"
  },
  "domain1-task11-12::d1-t12-applications::dest:speech": {
    "label": "Reconocimiento de voz"
  },
  "domain1-task11-12::d1-t12-applications::dest:recommend": {
    "label": "Recomendación"
  },
  "domain1-task11-12::d1-t12-applications::dest:fraud": {
    "label": "Detección de fraude"
  },
  "domain1-task11-12::d1-t12-applications::dest:forecast": {
    "label": "Pronóstico"
  },
  "domain1-task11-12::d1-t12-applications::dest:knowledge": {
    "label": "Bases de conocimiento"
  },
  "domain1-task11-12::d1-t12-applications::dest:agentic-app": {
    "label": "IA agéntica"
  },
  "domain1-task11-12::d1-t12-applications::card:c-vision-app": {
    "text": "Detectar empaques dañados a partir de imágenes de cámaras de almacén.",
    "explanation": "Píxeles o cuadros de video apuntan a visión artificial."
  },
  "domain1-task11-12::d1-t12-applications::card:c-nlp-app": {
    "text": "Determinar si el texto de una reseña de cliente es positivo o negativo.",
    "explanation": "El análisis de sentimiento sobre texto es NLP."
  },
  "domain1-task11-12::d1-t12-applications::card:c-speech-app": {
    "text": "Convertir llamadas de soporte grabadas en texto que se pueda buscar.",
    "explanation": "De audio a texto es reconocimiento de voz/transcripción."
  },
  "domain1-task11-12::d1-t12-applications::card:c-recommend-app": {
    "text": "Clasificar los productos de forma distinta para cada comprador de Andes Retail.",
    "explanation": "La clasificación personalizada de artículos es recomendación."
  },
  "domain1-task11-12::d1-t12-applications::card:c-fraud-app": {
    "text": "Calificar transacciones por probabilidad de fraude para que los analistas revisen las más riesgosas.",
    "explanation": "La calificación de fraude es una aplicación de predicción."
  },
  "domain1-task11-12::d1-t12-applications::card:c-forecast-app": {
    "text": "Predecir el volumen de envíos para semanas futuras a partir de volúmenes históricos.",
    "explanation": "Valores futuros de una serie temporal significan pronóstico."
  },
  "domain1-task11-12::d1-t12-applications::card:c-knowledge-app": {
    "text": "Lumen Legal responde preguntas a partir de sus propios expedientes de casos con citas.",
    "explanation": "Documentos internos más respuestas fundamentadas y citas es el patrón de base de conocimiento."
  },
  "domain1-task11-12::d1-t12-applications::card:c-agentic-app": {
    "text": "Un sistema resuelve un envío retrasado consultando APIs, redactando una oferta, aplicándola por debajo de un umbral y escalando las excepciones.",
    "explanation": "Objetivo, planificación, llamadas a herramientas, estado y acción autónoma son características agénticas."
  },
  "domain1-task11-12::d1-t12-aws-language-speech": {
    "title": "Servicios de AWS de Idioma y Voz",
    "instructions": "Relaciona cada servicio de IA administrado de AWS con su capacidad y palabras clave.",
    "sourceNote": "Guía §1.2.5 y CYU 1.5: Transcribe convierte audio en texto; Polly convierte texto en audio; Lex es la interfaz conversacional con intents y slots."
  },
  "domain1-task11-12::d1-t12-aws-language-speech::dest:comprehend": {
    "label": "Amazon Comprehend"
  },
  "domain1-task11-12::d1-t12-aws-language-speech::dest:transcribe": {
    "label": "Amazon Transcribe"
  },
  "domain1-task11-12::d1-t12-aws-language-speech::dest:polly": {
    "label": "Amazon Polly"
  },
  "domain1-task11-12::d1-t12-aws-language-speech::dest:translate": {
    "label": "Amazon Translate"
  },
  "domain1-task11-12::d1-t12-aws-language-speech::dest:lex": {
    "label": "Amazon Lex"
  },
  "domain1-task11-12::d1-t12-aws-language-speech::card:c-comprehend-cap": {
    "text": "NLP sobre texto: sentimiento, entidades, frases clave, idioma, modelado de temas y detección de PII.",
    "explanation": "Comprehend analiza texto que ya existe."
  },
  "domain1-task11-12::d1-t12-aws-language-speech::card:c-comprehend-trg": {
    "text": "Sentimiento, extraer entidades, detectar PII en texto, clasificar documentos por tema.",
    "explanation": "Un flujo común es usar primero Textract y luego Comprehend."
  },
  "domain1-task11-12::d1-t12-aws-language-speech::card:c-transcribe-cap": {
    "text": "De voz a texto, incluyendo identificación de hablantes y vocabulario personalizado.",
    "explanation": "El dictado clínico convertido en texto buscable apunta aquí."
  },
  "domain1-task11-12::d1-t12-aws-language-speech::card:c-transcribe-trg": {
    "text": "Convertir audio en texto, grabaciones de llamadas, subtítulos.",
    "explanation": "Audio como entrada, texto como salida."
  },
  "domain1-task11-12::d1-t12-aws-language-speech::card:c-polly-cap": {
    "text": "De texto a voz realista.",
    "explanation": "Polly es lo inverso de Transcribe."
  },
  "domain1-task11-12::d1-t12-aws-language-speech::card:c-polly-trg": {
    "text": "Leer esto en voz alta, respuesta de voz, versión en audio.",
    "explanation": "Texto como entrada, audio como salida."
  },
  "domain1-task11-12::d1-t12-aws-language-speech::card:c-translate-cap": {
    "text": "Traducción automática neuronal entre idiomas.",
    "explanation": "Translate cambia el idioma, no la modalidad."
  },
  "domain1-task11-12::d1-t12-aws-language-speech::card:c-translate-trg": {
    "text": "Traducir, contenido multilingüe.",
    "explanation": "La conversión de un idioma a otro es la pista."
  },
  "domain1-task11-12::d1-t12-aws-language-speech::card:c-lex-cap": {
    "text": "Interfaces conversacionales: chatbots y bots de voz con intents y slots.",
    "explanation": "Lex puede ser el núcleo de un asistente de voz y usa Polly para las respuestas habladas."
  },
  "domain1-task11-12::d1-t12-aws-language-speech::card:c-lex-trg": {
    "text": "Chatbot, IVR, recopilar detalles de reserva en una conversación.",
    "explanation": "La conversación y la recopilación de slots distinguen a Lex de los servicios de voz independientes."
  },
  "domain1-task11-12::d1-t12-aws-language-speech::slottype:capability": {
    "label": "Capacidad"
  },
  "domain1-task11-12::d1-t12-aws-language-speech::slottype:trigger": {
    "label": "Palabras clave"
  },
  "domain1-task11-12::d1-t12-aws-vision-docs": {
    "title": "AWS Visión, Documentos, Búsqueda y Recomendaciones",
    "instructions": "Relaciona el servicio con su capacidad y escenario. Presta atención a Textract frente a Rekognition y a Kendra frente a un caso de uso de base de conocimiento generativa.",
    "sourceNote": "Guía §1.2.5: Rekognition detecta contenido visual y texto en imágenes; Textract comprende la estructura de documentos; Kendra es búsqueda empresarial; Amazon SageMaker AI es para crear tu propio ML personalizado."
  },
  "domain1-task11-12::d1-t12-aws-vision-docs::dest:rekognition": {
    "label": "Amazon Rekognition"
  },
  "domain1-task11-12::d1-t12-aws-vision-docs::dest:textract": {
    "label": "Amazon Textract"
  },
  "domain1-task11-12::d1-t12-aws-vision-docs::dest:personalize": {
    "label": "Amazon Personalize"
  },
  "domain1-task11-12::d1-t12-aws-vision-docs::dest:kendra": {
    "label": "Amazon Kendra"
  },
  "domain1-task11-12::d1-t12-aws-vision-docs::dest:sagemaker": {
    "label": "Amazon SageMaker AI"
  },
  "domain1-task11-12::d1-t12-aws-vision-docs::card:c-rekognition-cap": {
    "text": "Análisis de imágenes y video: objetos, escenas, rostros, texto en imágenes y moderación.",
    "explanation": "El texto en el marco de una foto es Rekognition; la extracción estructurada de documentos es Textract."
  },
  "domain1-task11-12::d1-t12-aws-vision-docs::card:c-rekognition-scn": {
    "text": "Moderar fotos subidas por usuarios o detectar objetos en imágenes de productos.",
    "explanation": "Las imágenes y el video son la modalidad decisiva."
  },
  "domain1-task11-12::d1-t12-aws-vision-docs::card:c-textract-cap": {
    "text": "Extraer texto, formularios, tablas, pares clave-valor, escritura a mano y diseño de documentos escaneados.",
    "explanation": "Formularios, tablas, campos y facturas son pistas de Textract."
  },
  "domain1-task11-12::d1-t12-aws-vision-docs::card:c-textract-scn": {
    "text": "Extraer tablas de ingresos declarados de formularios de solicitud de préstamo escaneados.",
    "explanation": "El ejemplo de CYU de la guía usa formularios de préstamo escaneados y tablas."
  },
  "domain1-task11-12::d1-t12-aws-vision-docs::card:c-personalize-cap": {
    "text": "Recomendaciones personalizadas en tiempo real a partir de datos de interacción de usuarios.",
    "explanation": "Personalize no es un chatbot general ni un resumidor."
  },
  "domain1-task11-12::d1-t12-aws-vision-docs::card:c-personalize-scn": {
    "text": "Recomendar productos o crear una clasificación personalizada para cada comprador.",
    "explanation": "Usuarios que compraron, artículos recomendados y clasificación personalizada apuntan aquí."
  },
  "domain1-task11-12::d1-t12-aws-vision-docs::card:c-kendra-cap": {
    "text": "Búsqueda empresarial inteligente sobre documentos con consultas en lenguaje natural.",
    "explanation": "Kendra devuelve documentos clasificados y respuestas a través de repositorios."
  },
  "domain1-task11-12::d1-t12-aws-vision-docs::card:c-kendra-scn": {
    "text": "Buscar en SharePoint, Amazon S3 y Confluence respuestas internas.",
    "explanation": "Usa Kendra cuando el escenario se centra en la búsqueda empresarial a través de repositorios."
  },
  "domain1-task11-12::d1-t12-aws-vision-docs::card:c-sagemaker-cap": {
    "text": "La plataforma para construir, entrenar, ajustar, implementar y monitorear modelos de ML personalizados.",
    "explanation": "Usa Amazon SageMaker AI cuando entrenas tu propio modelo o usas un algoritmo personalizado."
  },
  "domain1-task11-12::d1-t12-aws-vision-docs::card:c-sagemaker-scn": {
    "text": "Tenemos datos etiquetados y necesitamos entrenar nuestro propio modelo personalizado.",
    "explanation": "La guía usa Amazon SageMaker AI, no la abreviatura antigua."
  },
  "domain1-task11-12::d1-t12-aws-vision-docs::slottype:capability": {
    "label": "Capacidad"
  },
  "domain1-task11-12::d1-t12-aws-vision-docs::slottype:scenario": {
    "label": "Escenario"
  },
  "domain1-task11-12::d1-t12-traditional-vs-fm": {
    "title": "ML Tradicional O Modelo Fundacional",
    "instructions": "Clasifica cada escenario o restricción en la opción que mejor encaje. Ninguno de los dos lados es siempre mejor; la guía pide identificar la restricción que decide.",
    "sourceNote": "Guía §1.2.6: el ML tradicional gana para datos tabulares etiquetados, puntuaciones/clases/pronósticos, explicabilidad, regulación, latencia/costo predecibles y determinismo. Los modelos fundacionales ganan para tareas no estructuradas/abiertas, contenido generado, pocos datos etiquetados, salida asistiva y costo/latencia por token aceptables."
  },
  "domain1-task11-12::d1-t12-traditional-vs-fm::dest:traditional": {
    "label": "Modelo de ML tradicional"
  },
  "domain1-task11-12::d1-t12-traditional-vs-fm::dest:foundation": {
    "label": "Modelo fundacional"
  },
  "domain1-task11-12::d1-t12-traditional-vs-fm::card:c-trad-tabular": {
    "text": "Datos tabulares con una clase o número objetivo bien definido.",
    "explanation": "El ML tradicional es fuerte para problemas supervisados tabulares."
  },
  "domain1-task11-12::d1-t12-traditional-vs-fm::card:c-trad-credit": {
    "text": "Cordillera Bank debe dar razones a nivel de característica para las solicitudes de crédito rechazadas.",
    "explanation": "Las decisiones individuales reguladas con requisitos legales de explicación pertenecen al ML tradicional interpretable."
  },
  "domain1-task11-12::d1-t12-traditional-vs-fm::card:c-trad-latency": {
    "text": "La latencia y el costo bajos y predecibles por predicción son restricciones vinculantes.",
    "explanation": "Los modelos tradicionales pequeños pueden ser más económicos y predecibles de servir."
  },
  "domain1-task11-12::d1-t12-traditional-vs-fm::card:c-trad-labels": {
    "text": "El equipo tiene muchos años de resultados históricos etiquetados.",
    "explanation": "La abundancia de datos etiquetados respalda el entrenamiento supervisado."
  },
  "domain1-task11-12::d1-t12-traditional-vs-fm::card:c-trad-determinism": {
    "text": "La misma entrada debería producir la misma salida cada vez.",
    "explanation": "La guía enumera el determinismo como un factor que favorece al ML tradicional."
  },
  "domain1-task11-12::d1-t12-traditional-vs-fm::card:c-fm-unstructured": {
    "text": "La entrada es texto largo no estructurado, imágenes, audio o video.",
    "explanation": "Los modelos fundacionales son útiles para tareas no estructuradas y abiertas."
  },
  "domain1-task11-12::d1-t12-traditional-vs-fm::card:c-fm-summary": {
    "text": "Resumir circulares regulatorias de 200 páginas en informes asesores.",
    "explanation": "El ejemplo de Cordillera Bank de la guía usa un modelo fundacional para el resumen asesor."
  },
  "domain1-task11-12::d1-t12-traditional-vs-fm::card:c-fm-no-labels": {
    "text": "No existen datos de entrenamiento etiquetados, pero la capacidad zero-shot o few-shot es útil ahora mismo.",
    "explanation": "Los modelos fundacionales pueden ser útiles de inmediato sin un conjunto de datos etiquetado específico para la tarea."
  },
  "domain1-task11-12::d1-t12-traditional-vs-fm::card:c-fm-conversation": {
    "text": "La salida es contenido generado, razonamiento sobre texto o una interfaz conversacional.",
    "explanation": "La prosa generada y la conversación son fortalezas de los modelos fundacionales."
  },
  "domain1-task11-12::d1-t12-traditional-vs-fm::card:c-fm-cost": {
    "text": "El costo basado en tokens y una mayor latencia son aceptables por la capacidad obtenida.",
    "explanation": "Las restricciones operativas aún pueden permitir un modelo fundacional cuando la capacidad importa más."
  },
  "domain1-task11-12::d1-t125-service-comparisons": {
    "title": "Comparaciones de Servicios de IA Administrados de AWS",
    "instructions": "Relaciona cada par confuso con la distinción decisiva del examen según la guía.",
    "sourceNote": "Guía §1.2.5: la selección de servicio depende de la modalidad de entrada, la salida y si el servicio extrae, analiza, busca, recomienda o conversa.",
    "slotLabel": "Distinción clave"
  },
  "domain1-task11-12::d1-t125-service-comparisons::dest:textract-rekognition": {
    "label": "Textract vs Rekognition"
  },
  "domain1-task11-12::d1-t125-service-comparisons::dest:transcribe-comprehend": {
    "label": "Transcribe vs Comprehend"
  },
  "domain1-task11-12::d1-t125-service-comparisons::dest:polly-transcribe": {
    "label": "Polly vs Transcribe"
  },
  "domain1-task11-12::d1-t125-service-comparisons::dest:lex-polly": {
    "label": "Lex vs Polly"
  },
  "domain1-task11-12::d1-t125-service-comparisons::dest:kendra-kb": {
    "label": "Kendra vs Bedrock Knowledge Bases"
  },
  "domain1-task11-12::d1-t125-service-comparisons::dest:personalize-bedrock": {
    "label": "Personalize vs Bedrock"
  },
  "domain1-task11-12::d1-t125-service-comparisons::dest:quick-athena": {
    "label": "Amazon Quick vs Athena"
  },
  "domain1-task11-12::d1-t125-service-comparisons::dest:sagemaker-managed-ai": {
    "label": "SageMaker AI vs APIs de IA administradas"
  },
  "domain1-task11-12::d1-t125-service-comparisons::card:c-d1-svc-textract-rekognition": {
    "text": "Los documentos con formularios, tablas, pares clave-valor, escritura a mano, facturas o solicitudes apuntan a Textract; los objetos, escenas, rostros, moderación o palabras en una foto apuntan a Rekognition.",
    "explanation": "Ambos pueden ver texto, pero Textract comprende la estructura del documento."
  },
  "domain1-task11-12::d1-t125-service-comparisons::card:c-d1-svc-transcribe-comprehend": {
    "text": "Las grabaciones de audio deben convertirse en texto con Transcribe antes de que Comprehend pueda analizar el sentimiento, las entidades, la PII, las frases clave o la toxicidad.",
    "explanation": "Comprehend analiza texto que ya existe; no procesa audio sin procesar."
  },
  "domain1-task11-12::d1-t125-service-comparisons::card:c-d1-svc-polly-transcribe": {
    "text": "Texto como entrada y voz como salida es Polly; voz o audio como entrada y texto como salida es Transcribe.",
    "explanation": "La dirección de la conversión es toda la pista."
  },
  "domain1-task11-12::d1-t125-service-comparisons::card:c-d1-svc-lex-polly": {
    "text": "Un bot que captura intents y slots es Lex; un servicio que solo lee texto en voz alta es Polly.",
    "explanation": "Lex gestiona el flujo de la conversación. Polly proporciona la salida de voz."
  },
  "domain1-task11-12::d1-t125-service-comparisons::card:c-d1-svc-kendra-kb": {
    "text": "La búsqueda empresarial a través de repositorios apunta a Kendra; una respuesta generativa fundamentada en fragmentos recuperados apunta a Bedrock Knowledge Bases.",
    "explanation": "Kendra busca y clasifica documentos; Knowledge Bases alimenta el contexto recuperado a un modelo fundacional."
  },
  "domain1-task11-12::d1-t125-service-comparisons::card:c-d1-svc-personalize-bedrock": {
    "text": "Los datos de interacción usuario-artículo y la clasificación personalizada apuntan a Personalize; la generación o el resumen abiertos apuntan a un modelo fundacional en Bedrock.",
    "explanation": "Personalize es un sistema de recomendación, no un servicio general de IA generativa."
  },
  "domain1-task11-12::d1-t125-service-comparisons::card:c-d1-svc-quick-athena": {
    "text": "Los paneles, la inteligencia empresarial, las visualizaciones, el análisis en lenguaje natural o la investigación agéntica apuntan a Amazon Quick; SQL sobre datos en S3 apunta a Athena.",
    "explanation": "Quick es la experiencia de análisis para usuarios de negocio; Athena es el motor de consultas sin servidor."
  },
  "domain1-task11-12::d1-t125-service-comparisons::card:c-d1-svc-sagemaker-managed": {
    "text": "Entrena, ajusta, implementa o monitorea tu propio modelo personalizado con SageMaker AI; llama a una API preentrenada cuando la guía nombra un servicio de IA administrado.",
    "explanation": "SageMaker AI es la plataforma de ML; servicios como Comprehend y Textract son APIs específicas de tareas."
  },
  "domain1-task11-12::d1-t132-fm-sources": {
    "title": "Fuentes de Modelos Fundacionales",
    "instructions": "Relaciona cada ruta de origen con la pista que la hace apropiada.",
    "sourceNote": "Guía §1.3.2: los profesionales pueden usar modelos de proveedores administrados, modelos de código abierto preentrenados, mercados/centros de modelos (model hubs), o entrenar desde cero en casos raros de altos recursos.",
    "slotLabel": "Mejor fuente"
  },
  "domain1-task11-12::d1-t132-fm-sources::dest:bedrock": {
    "label": "Proveedor de modelos de Amazon Bedrock"
  },
  "domain1-task11-12::d1-t132-fm-sources::dest:jumpstart": {
    "label": "SageMaker JumpStart o centro de modelos"
  },
  "domain1-task11-12::d1-t132-fm-sources::dest:open-source": {
    "label": "Modelo preentrenado de código abierto"
  },
  "domain1-task11-12::d1-t132-fm-sources::dest:from-scratch": {
    "label": "Entrenar desde cero"
  },
  "domain1-task11-12::d1-t132-fm-sources::dest:custom-import": {
    "label": "Importar un modelo personalizado compatible"
  },
  "domain1-task11-12::d1-t132-fm-sources::card:c-d1-fms-bedrock": {
    "text": "Usa una API totalmente administrada hacia modelos fundacionales líderes de múltiples proveedores sin gestionar infraestructura.",
    "explanation": "Bedrock es la respuesta de acceso administrado y multiproveedor a modelos fundacionales."
  },
  "domain1-task11-12::d1-t132-fm-sources::card:c-d1-fms-jumpstart": {
    "text": "Comienza a partir de un modelo preentrenado o abierto más plantillas de solución e impleméntalo en endpoints de SageMaker.",
    "explanation": "JumpStart es la ruta del centro de modelos dentro de SageMaker AI."
  },
  "domain1-task11-12::d1-t132-fm-sources::card:c-d1-fms-open-source": {
    "text": "Usa pesos publicados cuando la licencia y el control de implementación importan y el equipo puede operar el modelo.",
    "explanation": "Los modelos de código abierto brindan control, pero agregan responsabilidad operativa."
  },
  "domain1-task11-12::d1-t132-fm-sources::card:c-d1-fms-scratch": {
    "text": "Elige esto solo cuando la organización tenga datos, cómputo y dinero extraordinarios, y una razón por la que los modelos fundacionales existentes no puedan satisfacerla.",
    "explanation": "La guía trata el preentrenamiento de un modelo fundacional como costoso y poco común para un profesional de IA."
  },
  "domain1-task11-12::d1-t132-fm-sources::card:c-d1-fms-import": {
    "text": "Trae un modelo entrenado compatible al flujo de trabajo administrado de modelos fundacionales en lugar de entrenarlo o alojarlo tú mismo por completo.",
    "explanation": "La importación personalizada es una ruta de origen/implementación para pesos compatibles existentes."
  },
  "domain1-task11-12::d1-t133-production-methods": {
    "title": "Métodos Para Usar Un Modelo En Producción",
    "instructions": "Relaciona cada método de producción con la pista que lo hace la mejor opción.",
    "sourceNote": "Guía §1.3.3: el uso en producción puede significar una API administrada, un endpoint de SageMaker, un trabajo por lotes, un endpoint sin servidor, un endpoint asíncrono o una implementación autoalojada.",
    "slotLabel": "Método de producción"
  },
  "domain1-task11-12::d1-t133-production-methods::dest:managed-api": {
    "label": "Servicio de API administrado"
  },
  "domain1-task11-12::d1-t133-production-methods::dest:sagemaker-endpoint": {
    "label": "Endpoint de SageMaker AI"
  },
  "domain1-task11-12::d1-t133-production-methods::dest:batch": {
    "label": "Batch o Batch Transform"
  },
  "domain1-task11-12::d1-t133-production-methods::dest:async": {
    "label": "Endpoint asíncrono"
  },
  "domain1-task11-12::d1-t133-production-methods::dest:serverless": {
    "label": "Inferencia sin servidor"
  },
  "domain1-task11-12::d1-t133-production-methods::dest:self-hosted": {
    "label": "Autoalojado en EC2, ECS o EKS"
  },
  "domain1-task11-12::d1-t133-production-methods::dest:lambda": {
    "label": "Envoltorio de AWS Lambda"
  },
  "domain1-task11-12::d1-t133-production-methods::card:c-d1-prod-managed-api": {
    "text": "Usa un servicio de IA o IA generativa de AWS preentrenado donde AWS opera el modelo y el escalado, y tú llamas a una API.",
    "explanation": "Bedrock y los servicios de IA administrados eliminan el trabajo de alojamiento del modelo."
  },
  "domain1-task11-12::d1-t133-production-methods::card:c-d1-prod-sm-endpoint": {
    "text": "Implementa tu propio modelo entrenado en un endpoint administrado mientras eliges la configuración de instancia y escalado.",
    "explanation": "Los endpoints de SageMaker AI se sitúan entre una API administrada y una infraestructura completamente autoalojada."
  },
  "domain1-task11-12::d1-t133-production-methods::card:c-d1-prod-batch": {
    "text": "Ejecuta calificación fuera de línea (offline) sobre un conjunto de datos completo y escribe la salida en almacenamiento.",
    "explanation": "Conjunto de datos más cronograma o trabajo fuera de línea es la pista de procesamiento por lotes."
  },
  "domain1-task11-12::d1-t133-production-methods::card:c-d1-prod-async": {
    "text": "Pon en cola una solicitud individual grande o lenta y recupera el resultado más tarde.",
    "explanation": "La inferencia asíncrona gestiona solicitudes individuales de larga duración."
  },
  "domain1-task11-12::d1-t133-production-methods::card:c-d1-prod-serverless": {
    "text": "Atiende solicitudes interactivas intermitentes mientras se reduce la escala durante los periodos inactivos.",
    "explanation": "La inferencia sin servidor es para tráfico de solicitudes irregular donde el costo inactivo importa."
  },
  "domain1-task11-12::d1-t133-production-methods::card:c-d1-prod-self": {
    "text": "Ejecuta contenedores de modelo tú mismo cuando el equipo necesita el máximo control de infraestructura y acepta la carga operativa.",
    "explanation": "El autoalojamiento aumenta el control y la responsabilidad."
  },
  "domain1-task11-12::d1-t133-production-methods::card:c-d1-prod-lambda": {
    "text": "Usa cómputo sin servidor ligero para envolver la orquestación o llamadas de inferencia simples, no para alojar directamente un modelo grande.",
    "explanation": "Lambda puede exponer o coordinar flujos de trabajo de inferencia; el alojamiento de modelos generalmente pertenece a otro lugar."
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services": {
    "title": "Pistas de Servicios de AWS por Etapa del Pipeline",
    "instructions": "Relaciona la pista del escenario con el servicio o función de la etapa del pipeline. Esto expande la tabla de servicios por etapa de la guía.",
    "sourceNote": "Guía §1.3.4 Tabla 1.10: los servicios se agrupan por etapa del pipeline de ML, desde almacenamiento y ETL hasta implementación, monitoreo y gobernanza.",
    "slotLabel": "Servicio o función"
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::dest:s3": {
    "label": "Amazon S3"
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::dest:glue": {
    "label": "AWS Glue"
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::dest:lake-formation": {
    "label": "AWS Lake Formation"
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::dest:data-wrangler": {
    "label": "SageMaker Data Wrangler"
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::dest:quick": {
    "label": "Amazon Quick"
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::dest:athena": {
    "label": "Amazon Athena"
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::dest:feature-store": {
    "label": "SageMaker Feature Store"
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::dest:ground-truth": {
    "label": "SageMaker Ground Truth"
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::dest:a2i": {
    "label": "Amazon Augmented AI"
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::dest:model-monitor": {
    "label": "SageMaker Model Monitor"
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::dest:cloudwatch": {
    "label": "Amazon CloudWatch"
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::dest:clarify": {
    "label": "SageMaker Clarify"
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::dest:model-cards": {
    "label": "SageMaker Model Cards"
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::dest:model-registry": {
    "label": "SageMaker Model Registry"
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::dest:cloudtrail-config": {
    "label": "CloudTrail o AWS Config"
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::card:c-d1-pipe-s3": {
    "text": "Almacenamiento de objetos predeterminado o ubicación de data lake para datos de entrenamiento, archivos sin procesar, características, artefactos de modelo y salidas por lotes.",
    "explanation": "S3 es la capa de almacenamiento predeterminada para los data lakes de ML."
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::card:c-d1-pipe-glue": {
    "text": "Trabajos ETL sin servidor y un Data Catalog para preparar datos listos para análisis.",
    "explanation": "Glue pertenece a la ingesta, preparación y catalogación."
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::card:c-d1-pipe-lake": {
    "text": "Permisos y gobernanza centralizados para un data lake.",
    "explanation": "Lake Formation controla el acceso a los datos del lake."
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::card:c-d1-pipe-wrangler": {
    "text": "Preparación y transformación visual de datos tabulares antes del entrenamiento.",
    "explanation": "Data Wrangler no es el repositorio de características reutilizable."
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::card:c-d1-pipe-quick": {
    "text": "Paneles de negocio, visualizaciones, análisis en lenguaje natural e investigación agéntica sobre datos.",
    "explanation": "Amazon Quick es el nombre de análisis/BI de la guía."
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::card:c-d1-pipe-athena": {
    "text": "Ejecuta consultas SQL sin servidor sobre datos, especialmente archivos en S3.",
    "explanation": "Athena es para consultas, no para paneles ni ETL."
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::card:c-d1-pipe-feature": {
    "text": "Repositorio central y versionado de definiciones de características reutilizables, usadas de forma consistente en entrenamiento e inferencia.",
    "explanation": "Feature Store evita que los equipos redefinan la misma característica de forma diferente."
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::card:c-d1-pipe-ground": {
    "text": "Construye conjuntos de datos etiquetados con flujos de trabajo de etiquetado humanos o administrados.",
    "explanation": "Ground Truth es el servicio de etiquetado."
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::card:c-d1-pipe-a2i": {
    "text": "Inserta revisión humana en los flujos de trabajo de inferencia cuando las predicciones necesitan supervisión.",
    "explanation": "A2I significa revisión humana en el ciclo (human-in-the-loop), no etiquetado de conjuntos de datos."
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::card:c-d1-pipe-monitor": {
    "text": "Detecta la deriva (drift) de calidad de datos y la deriva de calidad del modelo después de la implementación.",
    "explanation": "Model Monitor vigila el comportamiento del ML en producción."
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::card:c-d1-pipe-cloudwatch": {
    "text": "Registros operativos, métricas, alarmas y paneles para sistemas en ejecución.",
    "explanation": "CloudWatch es monitoreo operativo, no análisis de deriva específico del modelo."
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::card:c-d1-pipe-clarify": {
    "text": "Análisis de sesgo y explicabilidad, incluida la deriva en el sesgo o la atribución de características.",
    "explanation": "Clarify es la función de sesgo/explicabilidad."
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::card:c-d1-pipe-cards": {
    "text": "Documentación estandarizada del uso previsto, las limitaciones, el riesgo y los detalles de evaluación del modelo.",
    "explanation": "Model Cards documenta; no versiona ni monitorea."
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::card:c-d1-pipe-registry": {
    "text": "Gestiona las versiones del modelo, el estado de aprobación y la promoción hacia la implementación.",
    "explanation": "Registry es el estado del ciclo de vida de los paquetes de modelo entrenados."
  },
  "domain1-task11-12::d1-t134-pipeline-expanded-services::card:c-d1-pipe-audit": {
    "text": "Audita las llamadas a la API y verifica el cumplimiento de la configuración para la gobernanza.",
    "explanation": "CloudTrail registra la actividad de la API; Config evalúa la configuración de los recursos."
  },
  "domain1-lifecycle::sequence": {
    "title": "Secuencia",
    "footnote": "<strong>Vale la pena saberlo:</strong> las etapas 2 a 7 suelen ser iterativas en la práctica en lugar de lineales; los equipos vuelven a la exploración y el preprocesamiento a medida que aprenden del entrenamiento y la evaluación. El examen sigue esperando el orden canónico que se muestra aquí.",
    "intro": "Nueve etapas, y antes que nada: ¿puedes volver a ordenarlas? Cada posición de abajo solo necesita el nombre correcto de la etapa; todavía no hay descripciones, solo secuencia. Esta es la parte del objetivo 1.3.1 que parece más fácil de leer y que peor se responde bajo presión de examen."
  },
  "domain1-lifecycle::sequence::slottype:stage": {
    "label": "¿Qué etapa va aquí?"
  },
  "domain1-lifecycle::sequence::concept:p1": {
    "name": "Paso",
    "stage": "Recopilación de datos"
  },
  "domain1-lifecycle::sequence::concept:p2": {
    "name": "Paso",
    "stage": "Análisis exploratorio de datos (EDA)"
  },
  "domain1-lifecycle::sequence::concept:p3": {
    "name": "Paso",
    "stage": "Preprocesamiento de datos"
  },
  "domain1-lifecycle::sequence::concept:p4": {
    "name": "Paso",
    "stage": "Ingeniería de características"
  },
  "domain1-lifecycle::sequence::concept:p5": {
    "name": "Paso",
    "stage": "Entrenamiento del modelo"
  },
  "domain1-lifecycle::sequence::concept:p6": {
    "name": "Paso",
    "stage": "Ajuste de hiperparámetros"
  },
  "domain1-lifecycle::sequence::concept:p7": {
    "name": "Paso",
    "stage": "Evaluación"
  },
  "domain1-lifecycle::sequence::concept:p8": {
    "name": "Paso",
    "stage": "Implementación"
  },
  "domain1-lifecycle::sequence::concept:p9": {
    "name": "Paso",
    "stage": "Monitoreo y reentrenamiento"
  },
  "domain1-lifecycle::stages": {
    "title": "Etapas",
    "footnote": "<strong>Nuevo en la v1.1:</strong> el objetivo 1.3.1 ahora te pide 'describir y diferenciar' los componentes del pipeline, no solo enumerarlos, que es exactamente lo que evalúa directamente la siguiente ronda.",
    "intro": "Las mismas nueve etapas, ahora mostradas en su orden correcto. Esta ronda evalúa si sabes qué ocurre realmente en cada una: relacionar la definición, no la secuencia."
  },
  "domain1-lifecycle::stages::slottype:def": {
    "label": "Qué ocurre en esta etapa"
  },
  "domain1-lifecycle::stages::concept:collect": {
    "name": "1. Recopilación de datos",
    "def": "Reunir datos sin procesar de sistemas de origen, registros, documentos y sensores. Establecer la propiedad y el acceso."
  },
  "domain1-lifecycle::stages::concept:eda": {
    "name": "2. Análisis exploratorio de datos (EDA)",
    "def": "Comprender las distribuciones, los valores faltantes, los valores atípicos, el equilibrio de clases y las fugas de datos evidentes."
  },
  "domain1-lifecycle::stages::concept:preproc": {
    "name": "3. Preprocesamiento de datos",
    "def": "Limpiar, eliminar duplicados, gestionar los valores faltantes, normalizar y dividir en conjuntos de entrenamiento, validación y prueba."
  },
  "domain1-lifecycle::stages::concept:feateng": {
    "name": "4. Ingeniería de características",
    "def": "Crear y seleccionar las variables de entrada de las que el modelo realmente aprenderá."
  },
  "domain1-lifecycle::stages::concept:train": {
    "name": "5. Entrenamiento del modelo",
    "def": "Ejecutar el algoritmo sobre el conjunto de entrenamiento para aprender los parámetros."
  },
  "domain1-lifecycle::stages::concept:tune": {
    "name": "6. Ajuste de hiperparámetros",
    "def": "Buscar configuraciones para mejorar el rendimiento en la validación."
  },
  "domain1-lifecycle::stages::concept:eval": {
    "name": "7. Evaluación",
    "def": "Medir el rendimiento con datos reservados utilizando las métricas adecuadas."
  },
  "domain1-lifecycle::stages::concept:deploy": {
    "name": "8. Implementación",
    "def": "Poner el modelo a disposición para inferencia en tiempo real, por lotes, asíncrona o sin servidor (serverless)."
  },
  "domain1-lifecycle::stages::concept:monitor": {
    "name": "9. Monitoreo y reentrenamiento",
    "def": "Vigilar la deriva de datos (data drift), la deriva del modelo (model drift) y la degradación de la calidad; reentrenar según un disparador o una programación."
  },
  "domain1-lifecycle::tradfm": {
    "title": "TradFM",
    "footnote": "<strong>El patrón que hay que notar:</strong> el ML tradicional gira en torno a tus datos etiquetados y tu ejecución de entrenamiento. Los pipelines de modelos fundacionales giran en torno al preentrenamiento de otra persona, y tu esfuerzo se traslada a los prompts, la recuperación (retrieval) y la evaluación de un comportamiento que tú no entrenaste.",
    "intro": "Seis dimensiones, cada una descrita dos veces: una para un pipeline de ML tradicional y otra para un pipeline de modelo fundacional. Clasifica cada descripción según el pipeline que realmente describe. Este es el requisito de diferenciación del objetivo 1.3.1, evaluado de forma directa."
  },
  "domain1-lifecycle::tradfm::target:trad": {
    "name": "Pipeline de ML tradicional",
    "sub": "Construiste el modelo a partir de tus propios datos"
  },
  "domain1-lifecycle::tradfm::target:fm": {
    "name": "Pipeline de modelo fundacional",
    "sub": "Estás construyendo alrededor del modelo de otra persona"
  },
  "domain1-lifecycle::tradfm::item:d1": {
    "text": "Tu conjunto de datos etiquetado es la base completa del modelo."
  },
  "domain1-lifecycle::tradfm::item:d2": {
    "text": "El corpus de preentrenamiento del proveedor hace el trabajo pesado. Tus datos se usan para el anclaje (grounding, RAG) o la personalización."
  },
  "domain1-lifecycle::tradfm::item:t1": {
    "text": "Entrenas el modelo desde cero con tus datos."
  },
  "domain1-lifecycle::tradfm::item:t2": {
    "text": "Normalmente no entrenas. Seleccionas un FM preentrenado y, opcionalmente, lo personalizas."
  },
  "domain1-lifecycle::tradfm::item:f1": {
    "text": "La ingeniería de características es central y consume mucho tiempo."
  },
  "domain1-lifecycle::tradfm::item:f2": {
    "text": "La ingeniería de características queda en gran parte reemplazada por el diseño de prompts, la ingeniería de contexto y la recuperación (retrieval)."
  },
  "domain1-lifecycle::tradfm::item:e1": {
    "text": "Se evalúa con accuracy, precision, recall, F1 y RMSE frente a la verdad fundamental (ground truth)."
  },
  "domain1-lifecycle::tradfm::item:e2": {
    "text": "Se evalúa con ROUGE, BLEU, BERTScore, evaluación humana, LLM-as-a-judge, además de métricas de negocio."
  },
  "domain1-lifecycle::tradfm::item:p1": {
    "text": "La implementación significa alojar un endpoint o ejecutar trabajos por lotes."
  },
  "domain1-lifecycle::tradfm::item:p2": {
    "text": "La implementación significa llamar a una API administrada como Amazon Bedrock, o alojarlo tú mismo (self-hosting)."
  },
  "domain1-lifecycle::tradfm::item:m1": {
    "text": "El monitoreo vigila la deriva de datos, la deriva del modelo y la distribución de las predicciones."
  },
  "domain1-lifecycle::tradfm::item:m2": {
    "text": "El monitoreo vigila la tasa de alucinaciones, el anclaje (groundedness), la toxicidad, el costo por interacción y la latencia."
  },
  "domain1-lifecycle::drift": {
    "title": "Deriva",
    "footnote": "<strong>Deriva de datos (data drift):</strong> los datos entrantes se ven diferentes a los de entrenamiento. <strong>Deriva del modelo (concept drift):</strong> la relación entre los datos y la respuesta correcta ha cambiado, incluso cuando los datos en sí parecen normales.",
    "intro": "Dos tipos de deriva, cuatro escenarios: dos que quizás ya reconozcas del objetivo 1.3.5, y dos nuevos de esta sección. La deriva de datos cambia lo que llega. La deriva del modelo cambia lo que significa una vez que llega."
  },
  "domain1-lifecycle::drift::target:data": {
    "name": "Deriva de datos",
    "sub": "La distribución de la entrada ha cambiado"
  },
  "domain1-lifecycle::drift::target:model": {
    "name": "Deriva del modelo (concept drift)",
    "sub": "Lo que significa la entrada ha cambiado"
  },
  "domain1-lifecycle::drift::item:g1": {
    "text": "Tus clientes son más jóvenes de lo que eran."
  },
  "domain1-lifecycle::drift::item:g2": {
    "text": "Lo que predice el fraude hoy no es lo que lo predecía el año pasado."
  },
  "domain1-lifecycle::drift::item:g3": {
    "text": "Un modelo de fraude entrenado principalmente con compras en tienda física enfrenta un cambio cuando la mayoría de los clientes empieza a comprar en línea."
  },
  "domain1-lifecycle::drift::item:g4": {
    "text": "Un modelo de abandono (churn) marca incorrectamente a los clientes que usan sus tarjetas con menos frecuencia, después de que las billeteras digitales se vuelven más comunes."
  },
  "domain1-lifecycle::sources": {
    "title": "Fuentes",
    "footnote": "<strong>Error común:</strong> entrenar un modelo fundacional desde cero casi nunca es la respuesta correcta en el examen. Aparece como distractor en las preguntas sobre costos precisamente porque es la opción más cara. A menos que el enunciado diga explícitamente que la organización requiere un modelo entrenado únicamente con su propio corpus propietario y cuenta con el presupuesto y la experiencia necesarios, elige un modelo preentrenado.",
    "intro": "Tres formas en que un modelo fundacional puede entrar en tu sistema, cada una con una compensación (tradeoff) genuinamente distinta. El examen casi siempre quiere la primera, y esta ronda deja claro por qué."
  },
  "domain1-lifecycle::sources::slottype:means": {
    "label": "Qué significa"
  },
  "domain1-lifecycle::sources::slottype:aws": {
    "label": "En AWS"
  },
  "domain1-lifecycle::sources::slottype:tradeoff": {
    "label": "Compensación (tradeoff)"
  },
  "domain1-lifecycle::sources::concept:proprietary": {
    "name": "FM propietario a través de una API administrada",
    "means": "Un modelo comercial al que accedes, pero que no posees ni alojas.",
    "aws": "Amazon Bedrock: Amazon Nova, Anthropic Claude, Meta Llama, Mistral, Cohere y otros a través de una sola API.",
    "tradeoff": "El camino más rápido a producción, sin infraestructura, pero aceptas el modelo y la licencia del proveedor."
  },
  "domain1-lifecycle::sources::concept:opensource": {
    "name": "Modelo preentrenado de código abierto",
    "means": "Pesos disponibles públicamente que puedes inspeccionar, alojar y modificar.",
    "aws": "Amazon SageMaker JumpStart ofrece modelos abiertos listos para implementar; Bedrock Custom Model Import incorpora pesos abiertos compatibles a Bedrock.",
    "tradeoff": "Control y transparencia, a cambio de operar la infraestructura."
  },
  "domain1-lifecycle::sources::concept:custom": {
    "name": "Modelo entrenado a medida",
    "means": "Preentrenas un modelo con tu propio corpus desde cero.",
    "aws": "Infraestructura de entrenamiento de Amazon SageMaker AI.",
    "tradeoff": "Control máximo, con el costo y el requisito de habilidad, por mucho, más altos. Rara vez es la respuesta correcta a nivel de practitioner."
  },
  "domain1-lifecycle::deploy": {
    "title": "Implementación",
    "footnote": "<strong>Recuerda para el examen:</strong> Amazon Bedrock es la respuesta canónica de API administrada: sin servidor, sin infraestructura, precios basados en tokens. Los endpoints de Amazon SageMaker AI se ubican en un punto intermedio: AWS administra la infraestructura subyacente, pero tú eliges y pagas las instancias. Implementar un modelo tú mismo en Amazon EC2 o Amazon EKS es la respuesta de alojamiento propio (self-hosted). El costo, el control y la carga operativa aumentan de izquierda a derecha.",
    "intro": "Dos formas de poner un modelo en producción. Una tercera opción se esconde debajo de ellas en cuanto notas dónde se ubican realmente los endpoints de SageMaker AI y el alojamiento propio en EC2 o EKS."
  },
  "domain1-lifecycle::deploy::slottype:description": {
    "label": "Descripción"
  },
  "domain1-lifecycle::deploy::slottype:youManage": {
    "label": "Tú administras"
  },
  "domain1-lifecycle::deploy::slottype:awsManages": {
    "label": "AWS administra"
  },
  "domain1-lifecycle::deploy::slottype:bestWhen": {
    "label": "Ideal cuando"
  },
  "domain1-lifecycle::deploy::concept:managed": {
    "name": "Servicio de API administrada",
    "description": "Llamas a un modelo alojado a través de una API. No hay servidores involucrados.",
    "youManage": "Tus prompts, datos y código de la aplicación.",
    "awsManages": "El alojamiento del modelo, el escalado, los parches y la disponibilidad.",
    "bestWhen": "Velocidad de lanzamiento al mercado, carga variable, sin equipo de operaciones de ML."
  },
  "domain1-lifecycle::deploy::concept:selfhosted": {
    "name": "API alojada por ti (self-hosted)",
    "description": "Implementas el modelo en cómputo que tú controlas y expones tu propio endpoint.",
    "youManage": "Las instancias, los contenedores, el escalado, los parches y las actualizaciones del modelo.",
    "awsManages": "Solo la infraestructura subyacente.",
    "bestWhen": "Necesitas un modelo específico, un runtime personalizado o un control estricto de la ubicación."
  },
  "domain1-pipeline-services::flagship": {
    "title": "Insignia",
    "footnote": "<strong>La cuenta regresiva:</strong> 5 de datos · 4 de modelo · 3 de ejecución. Almacenar, preparar, explorar, generar características, etiquetar — entrenar, acceder a FMs, crear agentes, escribir código — implementar, monitorear, gobernar.",
    "intro": "Un servicio insignia por etapa: las mismas doce etapas, y la misma cuenta regresiva del mapa mental: cinco etapas de datos, cuatro etapas de modelo, tres etapas de ejecución. Si puedes reproducir esa estructura de memoria, ya sabes con cuántos servicios insignia serás evaluado antes de colocar una sola tarjeta."
  },
  "domain1-pipeline-services::flagship::slottype:service": {
    "label": "Servicio insignia"
  },
  "domain1-pipeline-services::flagship::slottype:contributes": {
    "label": "Qué aporta"
  },
  "domain1-pipeline-services::flagship::concept:storage": {
    "name": "Almacenamiento de datos",
    "phase": "data",
    "service": "Amazon S3",
    "contributes": "El data lake predeterminado para los datos de entrenamiento y los artefactos de ML."
  },
  "domain1-pipeline-services::flagship::concept:ingest": {
    "name": "Ingesta y preparación de datos",
    "phase": "data",
    "service": "AWS Glue",
    "contributes": "ETL sin servidor y el Data Catalog."
  },
  "domain1-pipeline-services::flagship::concept:explore": {
    "name": "Exploración y análisis",
    "phase": "data",
    "service": "Amazon Quick",
    "contributes": "Paneles de BI, análisis en lenguaje natural e investigación agéntica sobre tus datos."
  },
  "domain1-pipeline-services::flagship::concept:feature": {
    "name": "Gestión de características",
    "phase": "data",
    "service": "SageMaker Feature Store",
    "contributes": "Definiciones de características centralizadas y versionadas, reutilizadas en el entrenamiento y la inferencia."
  },
  "domain1-pipeline-services::flagship::concept:label": {
    "name": "Etiquetado",
    "phase": "data",
    "service": "SageMaker Ground Truth",
    "contributes": "Construye conjuntos de datos de entrenamiento etiquetados."
  },
  "domain1-pipeline-services::flagship::concept:train": {
    "name": "Entrenamiento y ajuste",
    "phase": "model",
    "service": "Amazon SageMaker AI",
    "contributes": "Entrena modelos personalizados con tus propios datos."
  },
  "domain1-pipeline-services::flagship::concept:genmodel": {
    "name": "Acceso a modelos generativos",
    "phase": "model",
    "service": "Amazon Bedrock",
    "contributes": "API administrada de modelos fundacionales multiproveedor."
  },
  "domain1-pipeline-services::flagship::concept:agent": {
    "name": "Desarrollo de agentes",
    "phase": "model",
    "service": "Amazon Bedrock AgentCore",
    "contributes": "Runtime e infraestructura de producción para agentes."
  },
  "domain1-pipeline-services::flagship::concept:devtool": {
    "name": "Herramientas para desarrolladores",
    "phase": "model",
    "service": "Kiro",
    "contributes": "IDE agéntico basado en especificaciones."
  },
  "domain1-pipeline-services::flagship::concept:deploy": {
    "name": "Implementación",
    "phase": "run",
    "service": "Endpoints de SageMaker AI o Amazon Bedrock",
    "contributes": "En tiempo real, sin servidor, asíncrona o por lotes; o alojamiento propio en Lambda, ECS, EKS o EC2."
  },
  "domain1-pipeline-services::flagship::concept:monitor": {
    "name": "Monitoreo",
    "phase": "run",
    "service": "SageMaker Model Monitor",
    "contributes": "Detecta la deriva de datos y de la calidad del modelo."
  },
  "domain1-pipeline-services::flagship::concept:governance": {
    "name": "Gobernanza",
    "phase": "run",
    "service": "SageMaker Model Cards",
    "contributes": "Documenta el uso previsto, los datos de entrenamiento, los resultados de evaluación y el estado de aprobación."
  },
  "domain1-pipeline-services::sort": {
    "title": "Clasificación",
    "footnote": "<strong>†</strong> Dos servicios sirven legítimamente a dos etapas. SageMaker JumpStart proporciona modelos preentrenados tanto para el entrenamiento como para el acceso a modelos generativos. Amazon Bedrock es a la vez el punto de acceso a modelos generativos y una opción de implementación. Colocar cualquiera de los dos en cualquiera de sus etapas válidas es correcto.",
    "intro": "Todos los servicios mencionados en el objetivo 1.3.4, clasificados según su etapa. Esta es la versión exhaustiva de la primera ronda: treinta y seis servicios, algunos de los cuales realmente pertenecen a dos etapas a la vez. Por esa razón, dos tarjetas están marcadas con una cruz (†); cualquiera de sus dos etapas válidas se considera correcta."
  },
  "domain1-pipeline-services::sort::target:storage": {
    "name": "Almacenamiento de datos"
  },
  "domain1-pipeline-services::sort::target:ingest": {
    "name": "Ingesta y preparación de datos"
  },
  "domain1-pipeline-services::sort::target:explore": {
    "name": "Exploración y análisis"
  },
  "domain1-pipeline-services::sort::target:feature": {
    "name": "Gestión de características"
  },
  "domain1-pipeline-services::sort::target:label": {
    "name": "Etiquetado"
  },
  "domain1-pipeline-services::sort::target:train": {
    "name": "Entrenamiento y ajuste"
  },
  "domain1-pipeline-services::sort::target:genmodel": {
    "name": "Acceso a modelos generativos"
  },
  "domain1-pipeline-services::sort::target:agent": {
    "name": "Desarrollo de agentes"
  },
  "domain1-pipeline-services::sort::target:devtool": {
    "name": "Herramientas para desarrolladores"
  },
  "domain1-pipeline-services::sort::target:deploy": {
    "name": "Implementación"
  },
  "domain1-pipeline-services::sort::target:monitor": {
    "name": "Monitoreo"
  },
  "domain1-pipeline-services::sort::target:governance": {
    "name": "Gobernanza"
  },
  "domain1-pipeline-services::sort::item:st1": {
    "text": "Amazon S3"
  },
  "domain1-pipeline-services::sort::item:st2": {
    "text": "Amazon S3 Glacier"
  },
  "domain1-pipeline-services::sort::item:st3": {
    "text": "Amazon Redshift"
  },
  "domain1-pipeline-services::sort::item:st4": {
    "text": "Amazon RDS"
  },
  "domain1-pipeline-services::sort::item:st5": {
    "text": "Amazon Aurora"
  },
  "domain1-pipeline-services::sort::item:in1": {
    "text": "AWS Glue"
  },
  "domain1-pipeline-services::sort::item:in2": {
    "text": "AWS Glue DataBrew"
  },
  "domain1-pipeline-services::sort::item:in3": {
    "text": "Amazon EMR"
  },
  "domain1-pipeline-services::sort::item:in4": {
    "text": "AWS Lake Formation"
  },
  "domain1-pipeline-services::sort::item:in5": {
    "text": "SageMaker Data Wrangler"
  },
  "domain1-pipeline-services::sort::item:ex1": {
    "text": "Amazon Quick"
  },
  "domain1-pipeline-services::sort::item:ex2": {
    "text": "Amazon Athena"
  },
  "domain1-pipeline-services::sort::item:ex3": {
    "text": "SageMaker Studio notebooks"
  },
  "domain1-pipeline-services::sort::item:fe1": {
    "text": "SageMaker Feature Store"
  },
  "domain1-pipeline-services::sort::item:la1": {
    "text": "SageMaker Ground Truth"
  },
  "domain1-pipeline-services::sort::item:la2": {
    "text": "Amazon Augmented AI (A2I)"
  },
  "domain1-pipeline-services::sort::item:tr1": {
    "text": "Amazon SageMaker AI"
  },
  "domain1-pipeline-services::sort::item:tr2": {
    "text": "SageMaker JumpStart †"
  },
  "domain1-pipeline-services::sort::item:ge1": {
    "text": "Amazon Bedrock †"
  },
  "domain1-pipeline-services::sort::item:ag1": {
    "text": "Amazon Bedrock AgentCore"
  },
  "domain1-pipeline-services::sort::item:ag2": {
    "text": "Strands Agents"
  },
  "domain1-pipeline-services::sort::item:ag3": {
    "text": "Amazon Bedrock Agents"
  },
  "domain1-pipeline-services::sort::item:dt1": {
    "text": "Kiro"
  },
  "domain1-pipeline-services::sort::item:dt2": {
    "text": "Amazon Q"
  },
  "domain1-pipeline-services::sort::item:de1": {
    "text": "Endpoints de SageMaker AI"
  },
  "domain1-pipeline-services::sort::item:de2": {
    "text": "AWS Lambda"
  },
  "domain1-pipeline-services::sort::item:de3": {
    "text": "Amazon ECS"
  },
  "domain1-pipeline-services::sort::item:de4": {
    "text": "Amazon EKS"
  },
  "domain1-pipeline-services::sort::item:de5": {
    "text": "Amazon EC2"
  },
  "domain1-pipeline-services::sort::item:mo1": {
    "text": "SageMaker Model Monitor"
  },
  "domain1-pipeline-services::sort::item:mo2": {
    "text": "Amazon CloudWatch"
  },
  "domain1-pipeline-services::sort::item:mo3": {
    "text": "SageMaker Clarify"
  },
  "domain1-pipeline-services::sort::item:go1": {
    "text": "SageMaker Model Cards"
  },
  "domain1-pipeline-services::sort::item:go2": {
    "text": "SageMaker Model Registry"
  },
  "domain1-pipeline-services::sort::item:go3": {
    "text": "AWS CloudTrail"
  },
  "domain1-pipeline-services::sort::item:go4": {
    "text": "AWS Config"
  },
  "domain1-pipeline-services::rename": {
    "title": "Renombrado",
    "footnote": "<strong>Recuerda para el examen:</strong> Amazon Quick es el nombre que hay que aprender. Amazon QuickSight evolucionó a Amazon Quick Suite, añadiendo investigación agéntica, chat y automatización sobre los ya conocidos paneles de BI. La guía del examen lo enumera simplemente como \"Amazon Quick\" dentro de Analytics. Si un enunciado menciona paneles, preguntas en lenguaje natural sobre datos de negocio, o un asistente de investigación agéntica para usuarios de negocio, este es el servicio.",
    "intro": "La lista de ejemplos de la v1.1 cambió notablemente, pasando de subfunciones de SageMaker a este conjunto más amplio: Amazon Bedrock, Amazon Q, Amazon Quick, Kiro y SageMaker AI. Estos cinco son los nombres con mayor probabilidad de ser evaluados literalmente, y Amazon Quick en particular es el que la guía del examen señala como importante de aprender por su nombre."
  },
  "domain1-pipeline-services::rename::slottype:stage": {
    "label": "Etapa(s) del pipeline"
  },
  "domain1-pipeline-services::rename::slottype:does": {
    "label": "Qué hace"
  },
  "domain1-pipeline-services::rename::concept:bedrock": {
    "name": "Amazon Bedrock",
    "stage": "Acceso a modelos generativos; Implementación",
    "does": "API administrada de FM multiproveedor: la forma de acceder al modelo fundacional de otra persona sin alojarlo tú mismo."
  },
  "domain1-pipeline-services::rename::concept:amazonq": {
    "name": "Amazon Q",
    "stage": "Herramientas para desarrolladores",
    "does": "Asistente de IA disponible en distintas superficies de AWS: la consola, la documentación, el chat."
  },
  "domain1-pipeline-services::rename::concept:quick": {
    "name": "Amazon Quick",
    "stage": "Exploración y análisis",
    "does": "Evolucionó a partir de Amazon QuickSight. Paneles de BI, más análisis en lenguaje natural e investigación agéntica sobre tus datos."
  },
  "domain1-pipeline-services::rename::concept:kiro": {
    "name": "Kiro",
    "stage": "Herramientas para desarrolladores",
    "does": "IDE agéntico basado en especificaciones. Redacta los requisitos y un diseño antes de escribir código."
  },
  "domain1-pipeline-services::rename::concept:smai": {
    "name": "SageMaker AI",
    "stage": "Entrenamiento y ajuste; Implementación",
    "does": "Entrena modelos personalizados y los aloja en endpoints en tiempo real, sin servidor, asíncronos o por lotes."
  },
  "domain1-pipeline-services::family": {
    "title": "Familia",
    "footnote": "<strong>El propio planteamiento del objetivo:</strong> \"la lista de ejemplos de la v1.1 cambió notablemente, pasando de subfunciones de SageMaker a un conjunto más amplio\". Ambos conjuntos vale la pena conocerlos, y esta ronda solo evalúa si puedes distinguir a qué conjunto pertenece un nombre.",
    "intro": "Una comprobación final rápida sobre la misma distinción con la que abre el objetivo. ¿Es esta una herramienta específica que vive dentro de la plataforma SageMaker AI, o es un servicio más amplio e independiente a nivel de plataforma, del tipo de nombre que se añadió a la lista de ejemplos de la v1.1?"
  },
  "domain1-pipeline-services::family::target:subfeature": {
    "name": "Una subfuncionalidad de SageMaker",
    "sub": "Una herramienta específica dentro de la plataforma SageMaker AI"
  },
  "domain1-pipeline-services::family::target:platform": {
    "name": "Un servicio más amplio a nivel de plataforma",
    "sub": "Un producto con nombre propio"
  },
  "domain1-pipeline-services::family::item:sf1": {
    "text": "SageMaker Feature Store"
  },
  "domain1-pipeline-services::family::item:sf2": {
    "text": "SageMaker Ground Truth"
  },
  "domain1-pipeline-services::family::item:sf3": {
    "text": "SageMaker Data Wrangler"
  },
  "domain1-pipeline-services::family::item:sf4": {
    "text": "SageMaker Studio notebooks"
  },
  "domain1-pipeline-services::family::item:sf5": {
    "text": "SageMaker JumpStart"
  },
  "domain1-pipeline-services::family::item:sf6": {
    "text": "SageMaker Model Monitor"
  },
  "domain1-pipeline-services::family::item:sf7": {
    "text": "SageMaker Clarify"
  },
  "domain1-pipeline-services::family::item:sf8": {
    "text": "SageMaker Model Registry"
  },
  "domain1-pipeline-services::family::item:sf9": {
    "text": "SageMaker Model Cards"
  },
  "domain1-pipeline-services::family::item:pf1": {
    "text": "Amazon Bedrock"
  },
  "domain1-pipeline-services::family::item:pf2": {
    "text": "Amazon Q"
  },
  "domain1-pipeline-services::family::item:pf3": {
    "text": "Amazon Quick"
  },
  "domain1-pipeline-services::family::item:pf4": {
    "text": "Kiro"
  },
  "domain1-pipeline-services::family::item:pf5": {
    "text": "Amazon Bedrock AgentCore"
  },
  "domain1-pipeline-services::family::item:pf6": {
    "text": "Strands Agents"
  },
  "domain1-pipeline-services::family::item:pf7": {
    "text": "Amazon Bedrock Agents"
  },
  "domain1-mlops::mlops": {
    "title": "MLOps",
    "intro": "Seis conceptos, cada uno con una definición y una razón por la que importa. Las definiciones son la mitad fácil. Las tarjetas de 'por qué importa' son de donde el examen saca sus distractores, así que colócalas con criterio en lugar de por eliminación."
  },
  "domain1-mlops::mlops::slottype:means": {
    "label": "Qué significa"
  },
  "domain1-mlops::mlops::slottype:why": {
    "label": "Por qué importa"
  },
  "domain1-mlops::mlops::concept:exp": {
    "name": "Experimentación",
    "means": "Hacer seguimiento de los conjuntos de datos, los parámetros, las versiones de código y los resultados para que cualquier ejecución pueda reproducirse.",
    "why": "Sin esto, no puedes explicar por qué el modelo en producción se comporta como lo hace."
  },
  "domain1-mlops::mlops::concept:rep": {
    "name": "Procesos repetibles",
    "means": "Pipelines automatizados y versionados en lugar de notebooks manuales.",
    "why": "Un modelo que no puedes reconstruir es un modelo que no puedes arreglar."
  },
  "domain1-mlops::mlops::concept:sca": {
    "name": "Sistemas escalables",
    "means": "Infraestructura que gestiona el crecimiento en el volumen de datos, la frecuencia de entrenamiento y el tráfico de inferencia.",
    "why": "Los prototipos que no pueden escalar nunca llegan a producción."
  },
  "domain1-mlops::mlops::concept:deb": {
    "name": "Gestión de la deuda técnica",
    "means": "Controlar la acumulación de código de conexión (glue code) sin documentar, características huérfanas y pipelines obsoletos.",
    "why": "Los sistemas de ML acumulan deuda más rápido que el software convencional porque las dependencias de datos son invisibles."
  },
  "domain1-mlops::mlops::concept:prd": {
    "name": "Preparación para producción",
    "means": "Pruebas, monitoreo, reversión (rollback), revisión de seguridad y propiedad documentada antes del lanzamiento.",
    "why": "Un modelo que obtiene buenos resultados sin conexión (offline) puede seguir sin estar listo para servir."
  },
  "domain1-mlops::mlops::concept:mon": {
    "name": "Monitoreo y reentrenamiento del modelo",
    "means": "Vigilar la deriva de datos y la deriva del modelo, y reentrenar según un disparador o una programación.",
    "why": "El mundo cambia; un modelo estático se degrada silenciosamente."
  },
  "domain1-mlops::drift": {
    "title": "Deriva",
    "intro": "Solo cuatro tarjetas, y son los cuatro elementos que más se confunden entre sí en este objetivo. La prueba consiste en determinar si las entradas cambiaron o si cambió el significado de las entradas."
  },
  "domain1-mlops::drift::slottype:means": {
    "label": "Qué ha cambiado"
  },
  "domain1-mlops::drift::slottype:why": {
    "label": "Ejemplo"
  },
  "domain1-mlops::drift::concept:dd": {
    "name": "Deriva de datos",
    "means": "La distribución de las características entrantes ha cambiado.",
    "why": "Tus clientes son más jóvenes de lo que eran."
  },
  "domain1-mlops::drift::concept:md": {
    "name": "Deriva del modelo (concept drift)",
    "means": "La relación entre las características y el objetivo (target) ha cambiado.",
    "why": "Lo que predice el fraude hoy no es lo que lo predecía el año pasado."
  },
  "domain1-metrics::model": {
    "title": "Modelo",
    "footnote": "<strong>Truco para recordar:</strong> la precisión (precision) protege a los inocentes, el recall atrapa a los culpables. La precisión trata de no marcar incorrectamente las cosas. El recall trata de no dejar que las cosas se escapen. Lee el escenario para saber qué error duele más y luego elige.",
    "intro": "Seis métricas, cada una con un significado en lenguaje sencillo, una fórmula y la situación que la requiere. En el examen nunca se te pide calcularlas, así que la tercera columna es la que realmente suma puntos. Coloca las fórmulas rápido y dedica tu atención a 'elígela cuando…'."
  },
  "domain1-metrics::model::slottype:means": {
    "label": "Significado en lenguaje sencillo"
  },
  "domain1-metrics::model::slottype:formula": {
    "label": "Fórmula"
  },
  "domain1-metrics::model::slottype:when": {
    "label": "Elígela cuando…"
  },
  "domain1-metrics::model::concept:acc": {
    "name": "Exactitud (Accuracy)",
    "means": "De todas las predicciones, ¿cuántas fueron correctas?",
    "formula": "(TP + TN) / total",
    "when": "Las clases están más o menos equilibradas y todos los errores cuestan aproximadamente lo mismo."
  },
  "domain1-metrics::model::concept:pre": {
    "name": "Precisión (Precision)",
    "means": "De los elementos que marcamos como positivos, ¿cuántos realmente lo eran?",
    "formula": "TP / (TP + FP)",
    "when": "Un falso positivo es costoso: bloquear una transacción legítima, marcar incorrectamente un documento."
  },
  "domain1-metrics::model::concept:rec": {
    "name": "Recall (sensibilidad)",
    "means": "De todos los positivos reales, ¿cuántos detectamos?",
    "formula": "TP / (TP + FN)",
    "when": "Un falso negativo es costoso: un tumor no detectado, un fraude no detectado, un defecto de seguridad no detectado."
  },
  "domain1-metrics::model::concept:f1": {
    "name": "Puntuación F1 (F1 score)",
    "means": "La media armónica de la precisión y el recall, en un solo número.",
    "formula": "2 × (P × R) / (P + R)",
    "when": "Necesitas una sola cifra equilibrada, especialmente con clases desbalanceadas."
  },
  "domain1-metrics::model::concept:auc": {
    "name": "AUC-ROC",
    "means": "Qué tan bien separa el modelo las clases en todos los umbrales.",
    "formula": "Área bajo la curva ROC",
    "when": "Comparar modelos independientemente del umbral elegido."
  },
  "domain1-metrics::model::concept:rms": {
    "name": "RMSE / MAE",
    "means": "Tamaño promedio del error numérico.",
    "formula": "Raíz del error cuadrático medio / error absoluto medio",
    "when": "Problemas de regresión y pronóstico (forecasting)."
  },
  "domain1-metrics::business": {
    "title": "Negocio",
    "footnote": "<strong>Andes Retail, evaluado dos veces:</strong> el equipo de ciencia de datos reporta un F1 de 0.81 en el modelo de abandono (churn). El equipo comercial reporta $340,000 en ingresos retenidos frente a $95,000 de costo, un ROI del 258%. Ambas cifras son correctas, ambas son necesarias, y ninguna sustituye a la otra.",
    "intro": "La otra familia. Estas miden si vale la pena operar el sistema, en lugar de si el modelo es estadísticamente sólido. El examen evalúa que sepas que son una familia separada, y que un modelo puede obtener buenos resultados en una mientras falla en la otra."
  },
  "domain1-metrics::business::slottype:means": {
    "label": "Qué mide"
  },
  "domain1-metrics::business::slottype:use": {
    "label": "Uso típico"
  },
  "domain1-metrics::business::concept:roi": {
    "name": "Retorno de la inversión (ROI)",
    "means": "Beneficio neto en relación con el costo total de la iniciativa.",
    "use": "Justificar el proyecto ante un patrocinador."
  },
  "domain1-metrics::business::concept:cpu": {
    "name": "Costo por usuario / por interacción",
    "means": "Costo operativo total dividido entre el uso.",
    "use": "Determinar si un asistente de IA generativa es económicamente viable a escala."
  },
  "domain1-metrics::business::concept:dev": {
    "name": "Costo de desarrollo",
    "means": "Costo único de construcción: personas, datos, etiquetado, experimentación.",
    "use": "Comparar construir frente a comprar."
  },
  "domain1-metrics::business::concept:fbk": {
    "name": "Retroalimentación del cliente",
    "means": "Puntuaciones de satisfacción, votos positivos o negativos, volumen de quejas.",
    "use": "Detectar problemas de calidad que las métricas sin conexión (offline) pasan por alto."
  },
  "domain1-metrics::business::concept:cvr": {
    "name": "Tasa de conversión / ingreso promedio por usuario",
    "means": "Efecto comercial del modelo sobre el comportamiento.",
    "use": "Sistemas de recomendación y personalización."
  },
  "domain1-metrics::business::concept:clv": {
    "name": "Valor de vida del cliente (customer lifetime value)",
    "means": "Valor a largo plazo de una relación con el cliente.",
    "use": "Justificar la inversión en retención y personalización."
  },
  "domain1-metrics::scenario": {
    "title": "Escenario",
    "footnote": "<strong>La trampa de la exactitud (accuracy):</strong> si el 0.2% de las transacciones son fraudulentas, un modelo que predice \"no es fraude\" todas las veces tiene una exactitud del 99.8% y es completamente inútil. Siempre que un enunciado mencione un evento poco frecuente, clases desbalanceadas o una clase positiva pequeña, la exactitud (accuracy) es la métrica incorrecta y se ofrece deliberadamente como distractor.",
    "intro": "Esta es la ronda que se parece al examen real. Cada tarjeta es un escenario; colócala bajo la métrica que corresponde. Fíjate en lo poco frecuente que es que la exactitud sea la respuesta correcta, y en que dos escenarios pueden parecerse mientras apuntan en direcciones opuestas."
  },
  "domain1-metrics::scenario::target:acc": {
    "name": "Exactitud (Accuracy)",
    "sub": "Clases equilibradas, costo de error simétrico"
  },
  "domain1-metrics::scenario::target:pre": {
    "name": "Precisión (Precision)",
    "sub": "Los falsos positivos son el error costoso"
  },
  "domain1-metrics::scenario::target:rec": {
    "name": "Recall",
    "sub": "Los falsos negativos son el error costoso"
  },
  "domain1-metrics::scenario::target:f1": {
    "name": "Puntuación F1 (F1 score)",
    "sub": "Una cifra equilibrada, clases desbalanceadas"
  },
  "domain1-metrics::scenario::target:auc": {
    "name": "AUC-ROC",
    "sub": "Comparar modelos en distintos umbrales"
  },
  "domain1-metrics::scenario::target:rms": {
    "name": "RMSE / MAE",
    "sub": "Predicción numérica"
  },
  "domain1-metrics::scenario::item:s1": {
    "text": "Un hospital hace pruebas de detección a los pacientes para una afección. Pasar por alto a un paciente realmente enfermo es mucho más perjudicial que llamar innecesariamente a uno sano."
  },
  "domain1-metrics::scenario::item:s2": {
    "text": "Un fabricante no debe permitir que un defecto crítico para la seguridad llegue a un cliente, incluso si eso significa volver a inspeccionar unidades que estaban en buen estado."
  },
  "domain1-metrics::scenario::item:s3": {
    "text": "Bloquear un pago legítimo de un cliente genera quejas y pérdida de ventas. Dejar pasar una pequeña cantidad de fraude le cuesta menos al banco."
  },
  "domain1-metrics::scenario::item:s4": {
    "text": "Un equipo legal marca documentos para una revisión privilegiada. Cada documento marcado incorrectamente consume costosas horas de abogados."
  },
  "domain1-metrics::scenario::item:s5": {
    "text": "Las clases están muy desbalanceadas y la dirección quiere una sola cifra que equilibre ambos tipos de error."
  },
  "domain1-metrics::scenario::item:s6": {
    "text": "Hay que comparar dos modelos candidatos antes de que alguien haya decidido cuál será el umbral de decisión."
  },
  "domain1-metrics::scenario::item:s7": {
    "text": "Pronosticar el volumen semanal de envíos del próximo trimestre para una red logística."
  },
  "domain1-metrics::scenario::item:s8": {
    "text": "Predecir el costo de reparación esperado de un reclamo de seguro, en pesos."
  },
  "domain1-metrics::scenario::item:s9": {
    "text": "Un conjunto de datos aproximadamente 50/50 donde un falso positivo y un falso negativo le cuestan al negocio aproximadamente lo mismo."
  },
  "domain1-metrics::family": {
    "title": "Familia",
    "footnote": "<strong>Por qué importa esto en el examen:</strong> las preguntas frecuentemente enumeran métricas de ambas familias dentro del mismo conjunto de opciones. Saber sobre qué familia pregunta la pregunta elimina la mitad de las opciones antes de evaluar cualquiera de ellas.",
    "intro": "Doce métricas, dos familias. Esta es una ronda corta y la forma más rápida de comprobar que no has confundido la línea que las separa. Si se mide frente a etiquetas de verdad fundamental (ground truth), es una métrica de modelo; si se mide en dinero, usuarios o satisfacción, es una métrica de negocio."
  },
  "domain1-metrics::family::target:model": {
    "name": "Métrica de rendimiento del modelo",
    "sub": "Medida frente a etiquetas de verdad fundamental (ground truth)"
  },
  "domain1-metrics::family::target:business": {
    "name": "Métrica de negocio",
    "sub": "Medida en dinero, usuarios o satisfacción"
  },
  "domain1-metrics::family::item:f01": {
    "text": "Puntuación F1 (F1 score)"
  },
  "domain1-metrics::family::item:f02": {
    "text": "Retorno de la inversión (ROI)"
  },
  "domain1-metrics::family::item:f03": {
    "text": "Recall"
  },
  "domain1-metrics::family::item:f04": {
    "text": "Costo por interacción"
  },
  "domain1-metrics::family::item:f05": {
    "text": "AUC-ROC"
  },
  "domain1-metrics::family::item:f06": {
    "text": "Valor de vida del cliente (customer lifetime value)"
  },
  "domain1-metrics::family::item:f07": {
    "text": "RMSE"
  },
  "domain1-metrics::family::item:f08": {
    "text": "Tasa de conversión"
  },
  "domain1-metrics::family::item:f09": {
    "text": "Precisión (Precision)"
  },
  "domain1-metrics::family::item:f10": {
    "text": "Costo de desarrollo"
  },
  "domain1-metrics::family::item:f11": {
    "text": "Exactitud (Accuracy)"
  },
  "domain1-metrics::family::item:f12": {
    "text": "Retroalimentación del cliente"
  },
  "domain1-inference::unit": {
    "title": "Modos de inferencia"
  },
  "domain1-aws-services::unit": {
    "title": "Selección de servicios de AWS"
  },
  "domain1-reinforcement-lifecycle::unit": {
    "title": "Ciclo de vida y MLOps"
  },
  "domain1-model-evaluation::unit": {
    "title": "Ajuste del modelo y métricas"
  },
  "domain1-reinforcement-checkpoint::unit": {
    "title": "Punto de control mixto"
  },
  "domain1-simulated-exam::exam": {
    "title": "Examen de 60 preguntas"
  }
});
})();
