(function(){
  "use strict";
  window.I18N_ES_CYU = Object.assign({}, window.I18N_ES_CYU || {}, {
  "q:cyu-2-1-q1": {
    "stem": "¿Qué es un token en el contexto de un modelo de lenguaje grande?",
    "explanation": "El texto se divide en tokens mediante un tokenizador antes de que el modelo lo procese. Los tokens son la unidad de medida para los límites de la ventana de contexto, para el precio y para la latencia de generación, por lo que la guía del examen los menciona primero entre los conceptos fundamentales.",
    "takeaway": "Los tokens son la unidad de medida del contexto, el costo y la velocidad. Tres cosas a la vez."
  },
  "q:cyu-2-1-q1::opt:a": {
    "text": "La unidad básica de texto que procesa el modelo, a menudo una palabra o un fragmento de palabra."
  },
  "q:cyu-2-1-q1::opt:b": {
    "text": "Un registro en la base de datos vectorial."
  },
  "q:cyu-2-1-q1::opt:c": {
    "text": "Una credencial de seguridad utilizada para autenticar llamadas a la API del modelo."
  },
  "q:cyu-2-1-q1::opt:d": {
    "text": "Un único peso numérico dentro de la red neuronal."
  },
  "q:cyu-2-1-q1::incorrect:b": {
    "text": "Los registros de la base de datos vectorial almacenan embeddings, que se generan a partir de tokens, pero no son tokens."
  },
  "q:cyu-2-1-q1::incorrect:c": {
    "text": "Los tokens de autenticación son un concepto no relacionado que comparte la palabra."
  },
  "q:cyu-2-1-q1::incorrect:d": {
    "text": "Un peso es un parámetro aprendido, no una unidad de entrada."
  },
  "q:cyu-2-1-q2": {
    "stem": "¿Por qué una búsqueda semántica sobre embeddings encuentra pasajes relevantes que una búsqueda por palabras clave pasa por alto?",
    "explanation": "Un modelo de embeddings mapea el contenido en un espacio vectorial donde la distancia refleja el significado. Dos pasajes que expresan la misma idea con palabras diferentes terminan próximos entre sí, de modo que una búsqueda de vecinos más cercanos los recupera incluso sin vocabulario compartido.",
    "takeaway": "Los embeddings coinciden en significado, no en palabras. Esa única frase responde la mayoría de las preguntas sobre embeddings."
  },
  "q:cyu-2-1-q2::opt:a": {
    "text": "Los embeddings eliminan las palabras vacías (stop words) antes de buscar."
  },
  "q:cyu-2-1-q2::opt:b": {
    "text": "Los embeddings ubican el contenido semánticamente similar cerca en el espacio vectorial, de modo que se compara el significado en lugar de la redacción exacta."
  },
  "q:cyu-2-1-q2::opt:c": {
    "text": "Los embeddings almacenan el texto original del documento junto con un índice de palabras clave."
  },
  "q:cyu-2-1-q2::opt:d": {
    "text": "Los embeddings comprimen los documentos para poder buscar en más al mismo tiempo."
  },
  "q:cyu-2-1-q2::incorrect:a": {
    "text": "La eliminación de palabras vacías es una técnica de búsqueda por palabras clave, no lo que hacen los embeddings."
  },
  "q:cyu-2-1-q2::incorrect:c": {
    "text": "Los embeddings son vectores numéricos; no incluyen un índice de palabras clave."
  },
  "q:cyu-2-1-q2::incorrect:d": {
    "text": "La compresión es un efecto secundario, no la razón por la que funciona la recuperación."
  },
  "q:cyu-2-1-q3": {
    "stem": "Un equipo está preparando un extenso manual de políticas para su recuperación. ¿Cuál es el propósito del chunking (fragmentación)?",
    "explanation": "Un manual completo no puede representarse de forma útil con un único embedding, y tampoco cabría razonablemente en un prompt. El chunking lo divide en pasajes que contienen cada uno una idea coherente, de modo que la recuperación devuelva contexto preciso y relevante.",
    "takeaway": "Si el fragmento es demasiado pequeño se pierde contexto; si es demasiado grande, el embedding se vuelve impreciso. Existe una disyuntiva real."
  },
  "q:cyu-2-1-q3::opt:a": {
    "text": "Dividir el documento en pasajes lo suficientemente pequeños como para generar embeddings y recuperarlos de forma significativa."
  },
  "q:cyu-2-1-q3::opt:b": {
    "text": "Traducir el documento al idioma nativo del modelo."
  },
  "q:cyu-2-1-q3::opt:c": {
    "text": "Reducir la cantidad de tokens facturados durante el entrenamiento."
  },
  "q:cyu-2-1-q3::opt:d": {
    "text": "Eliminar la información de identificación personal."
  },
  "q:cyu-2-1-q3::incorrect:b": {
    "text": "La traducción es una tarea independiente realizada por otro servicio o modelo."
  },
  "q:cyu-2-1-q3::incorrect:c": {
    "text": "El chunking es una consideración del momento de la recuperación; no se está realizando ningún entrenamiento."
  },
  "q:cyu-2-1-q3::incorrect:d": {
    "text": "La eliminación de PII es un paso de protección de datos, gestionado por herramientas como Amazon Comprehend o Amazon Macie."
  },
  "q:cyu-2-1-q4": {
    "stem": "¿Cuáles DOS afirmaciones sobre los modelos fundacionales y los modelos de lenguaje grandes son correctas?",
    "explanation": "Un modelo fundacional es cualquier modelo grande preentrenado de forma amplia y adaptable a muchas tareas. Los LLM son el subconjunto especializado en texto. El preentrenamiento suele ser autosupervisado sobre datos sin etiquetar, y existen modelos fundacionales tanto para imágenes, audio y video como para texto.",
    "takeaway": "El FM es el género, el LLM es una especie. El preentrenamiento es autosupervisado sobre datos sin etiquetar."
  },
  "q:cyu-2-1-q4::opt:a": {
    "text": "Todo modelo de lenguaje grande es un modelo fundacional."
  },
  "q:cyu-2-1-q4::opt:b": {
    "text": "Todo modelo fundacional es un modelo de lenguaje grande."
  },
  "q:cyu-2-1-q4::opt:c": {
    "text": "Los modelos fundacionales se preentrenan con datos amplios y luego se adaptan a muchas tareas posteriores."
  },
  "q:cyu-2-1-q4::opt:d": {
    "text": "Los modelos fundacionales deben entrenarse con datos etiquetados."
  },
  "q:cyu-2-1-q4::opt:e": {
    "text": "Los modelos fundacionales solo pueden producir texto."
  },
  "q:cyu-2-1-q4::incorrect:b": {
    "text": "Invierte la relación de contención; los modelos fundacionales de imagen y audio no son modelos de lenguaje."
  },
  "q:cyu-2-1-q4::incorrect:d": {
    "text": "El preentrenamiento es autosupervisado sobre corpus sin etiquetar. Las etiquetas aparecen más adelante, en el ajuste fino (fine-tuning)."
  },
  "q:cyu-2-1-q4::incorrect:e": {
    "text": "Los modelos fundacionales multimodales y de generación de imágenes producen salidas que no son texto."
  },
  "q:cyu-2-1-q5": {
    "stem": "Relacione cada concepto con su descripción.",
    "explanation": "Estos cinco términos se mencionan directamente en el objetivo 2.1.1 y son los candidatos más probables para una pregunta de relacionar en el Dominio 2. Cada uno tiene una propiedad definitoria inequívoca.",
    "takeaway": "Una línea por término. Si puede decir los cinco en diez segundos, este tipo de pregunta son puntos gratis."
  },
  "q:cyu-2-1-q5::matchprompt:0": {
    "text": "La unidad de texto que un modelo procesa y por la cual se factura"
  },
  "q:cyu-2-1-q5::matchprompt:1": {
    "text": "Un vector numérico en el que un significado similar implica una posición cercana"
  },
  "q:cyu-2-1-q5::matchprompt:2": {
    "text": "Dividir documentos extensos en pasajes recuperables"
  },
  "q:cyu-2-1-q5::matchprompt:3": {
    "text": "La arquitectura basada en atención detrás de los LLM modernos"
  },
  "q:cyu-2-1-q5::matchprompt:4": {
    "text": "Genera imágenes eliminando ruido de forma iterativa"
  },
  "q:cyu-2-1-q5::matchoption:0": {
    "text": "Token"
  },
  "q:cyu-2-1-q5::matchoption:1": {
    "text": "Embedding"
  },
  "q:cyu-2-1-q5::matchoption:2": {
    "text": "Chunking"
  },
  "q:cyu-2-1-q5::matchoption:3": {
    "text": "Transformer"
  },
  "q:cyu-2-1-q5::matchoption:4": {
    "text": "Modelo de difusión"
  },
  "q:cyu-2-1-q6": {
    "stem": "Andes Retail quiere un modelo que pueda aceptar una fotografía de producto junto con un brief escrito y devolver un texto de marketing que describa el artículo. ¿Qué característica del modelo se requiere?",
    "explanation": "La entrada combina una imagen y texto, mientras que la salida es texto. Aceptar más de una modalidad es la definición de un modelo multimodal. Amazon Nova Lite y Nova Pro aceptan entradas de texto, imagen y video, y devuelven texto.",
    "takeaway": "Cuente las modalidades del lado de la entrada y del lado de la salida por separado. Eso determina qué tipo de modelo necesita."
  },
  "q:cyu-2-1-q6::opt:a": {
    "text": "Un modelo unimodal, solo de texto"
  },
  "q:cyu-2-1-q6::opt:b": {
    "text": "Un modelo de difusión"
  },
  "q:cyu-2-1-q6::opt:c": {
    "text": "Un modelo de embeddings"
  },
  "q:cyu-2-1-q6::opt:d": {
    "text": "Un modelo fundacional multimodal"
  },
  "q:cyu-2-1-q6::incorrect:a": {
    "text": "Un modelo de solo texto no puede aceptar la fotografía."
  },
  "q:cyu-2-1-q6::incorrect:b": {
    "text": "Un modelo de difusión genera imágenes; aquí las imágenes son la entrada y el texto es la salida."
  },
  "q:cyu-2-1-q6::incorrect:c": {
    "text": "Un modelo de embeddings devuelve vectores, no texto legible."
  },
  "q:cyu-2-2-q1": {
    "stem": "Ordene las etapas del ciclo de vida del modelo fundacional.",
    "explanation": "El corpus debe curarse antes de poder entrenar con él. El preentrenamiento produce el modelo base de capacidad general. El ajuste fino (fine-tuning) adapta luego esa base a una tarea o comportamiento. La evaluación determina si el resultado es apto para lanzarse, y luego sigue la implementación.",
    "takeaway": "Seleccionar → preentrenar → ajustar (fine-tune) → evaluar → implementar → retroalimentación. El ajuste fino siempre viene después del preentrenamiento, nunca antes.",
    "sequenceLogic": "Cada etapa consume el artefacto producido por la anterior: corpus, luego modelo base, luego modelo adaptado, luego un modelo validado, luego un modelo en servicio. La selección del modelo se sitúa junto a la selección de datos al inicio, y la retroalimentación vuelve al ciclo después de la implementación."
  },
  "q:cyu-2-2-q1::orderitem:0": {
    "text": "Ajuste fino (fine-tuning)"
  },
  "q:cyu-2-2-q1::orderitem:1": {
    "text": "Selección de datos"
  },
  "q:cyu-2-2-q1::orderitem:2": {
    "text": "Implementación"
  },
  "q:cyu-2-2-q1::orderitem:3": {
    "text": "Preentrenamiento"
  },
  "q:cyu-2-2-q1::orderitem:4": {
    "text": "Evaluación"
  },
  "q:cyu-2-2-q2": {
    "stem": "¿Qué etapa del ciclo de vida del modelo fundacional representa la mayor parte del costo total de cómputo?",
    "explanation": "El preentrenamiento procesa billones de tokens en clústeres muy grandes durante semanas o meses. El ajuste fino usa órdenes de magnitud menos datos y cómputo, y el costo de implementación, aunque continuo, es mucho menor por unidad de trabajo.",
    "takeaway": "El preentrenamiento es el costoso. Esto sustenta toda respuesta del tipo \"por qué no entrenar su propio modelo\"."
  },
  "q:cyu-2-2-q2::opt:a": {
    "text": "Ajuste fino (fine-tuning)"
  },
  "q:cyu-2-2-q2::opt:b": {
    "text": "Preentrenamiento"
  },
  "q:cyu-2-2-q2::opt:c": {
    "text": "Implementación"
  },
  "q:cyu-2-2-q2::opt:d": {
    "text": "Selección de datos"
  },
  "q:cyu-2-2-q2::incorrect:a": {
    "text": "El ajuste fino es deliberadamente económico en comparación con el preentrenamiento; ese es justamente su propósito."
  },
  "q:cyu-2-2-q2::incorrect:c": {
    "text": "El costo de implementación se acumula con el tiempo, pero no se acerca al del preentrenamiento en un solo evento."
  },
  "q:cyu-2-2-q2::incorrect:d": {
    "text": "La selección de datos requiere mucho trabajo, pero, en comparación, no requiere tanto cómputo."
  },
  "q:cyu-2-2-q3": {
    "stem": "¿Cuáles DOS de las siguientes son casos de uso de IA generativa según se describen en la guía del examen?",
    "explanation": "Tanto el resumen como la generación de imágenes producen contenido nuevo, que es la propiedad definitoria de la IA generativa. El objetivo 2.1.2 menciona ambos explícitamente.",
    "takeaway": "Si la salida es un número, una etiqueta o un grupo, no es generativa. Si es contenido nuevo, sí lo es."
  },
  "q:cyu-2-2-q3::opt:a": {
    "text": "Resumir un contrato de 90 páginas en un informe de una página"
  },
  "q:cyu-2-2-q3::opt:b": {
    "text": "Predecir el volumen de envíos del próximo trimestre a partir de cuatro años de historial"
  },
  "q:cyu-2-2-q3::opt:c": {
    "text": "Generar imágenes de productos para una campaña de marketing"
  },
  "q:cyu-2-2-q3::opt:d": {
    "text": "Agrupar (clustering) a los clientes en segmentos de comportamiento"
  },
  "q:cyu-2-2-q3::opt:e": {
    "text": "Calificar solicitudes de crédito"
  },
  "q:cyu-2-2-q3::incorrect:b": {
    "text": "La previsión (forecasting) es una tarea tradicional de ML sobre datos de series temporales."
  },
  "q:cyu-2-2-q3::incorrect:d": {
    "text": "El clustering es ML tradicional no supervisado."
  },
  "q:cyu-2-2-q3::incorrect:e": {
    "text": "La calificación crediticia es clasificación supervisada y, en un contexto regulado, se mantiene deliberadamente como ML tradicional."
  },
  "q:cyu-2-2-q4": {
    "stem": "Volta Logistics quiere un asistente interno que responda preguntas operativas en una conversación, recuerde el hilo y haga preguntas aclaratorias. ¿A qué familia de casos de uso de IA generativa pertenece esto?",
    "explanation": "Una interfaz conversacional de múltiples turnos que mantiene el contexto y hace preguntas aclaratorias es el patrón de asistente de IA, que el objetivo 2.1.2 menciona directamente junto con los agentes de servicio al cliente.",
    "takeaway": "Diálogo de múltiples turnos que retiene contexto = asistente. Producción de un solo artefacto = generación de contenido."
  },
  "q:cyu-2-2-q4::opt:a": {
    "text": "Creación de contenido"
  },
  "q:cyu-2-2-q4::opt:b": {
    "text": "Generación de imágenes"
  },
  "q:cyu-2-2-q4::opt:c": {
    "text": "Generación de código"
  },
  "q:cyu-2-2-q4::opt:d": {
    "text": "Asistentes de IA y agentes conversacionales"
  },
  "q:cyu-2-2-q4::incorrect:a": {
    "text": "La creación de contenido abarca la producción de artefactos como textos o imágenes, no un diálogo sostenido."
  },
  "q:cyu-2-2-q4::incorrect:b": {
    "text": "No hay imágenes involucradas."
  },
  "q:cyu-2-2-q4::incorrect:c": {
    "text": "Nada aquí tiene que ver con escribir software."
  },
  "q:cyu-2-2-q5": {
    "stem": "Un profesional de Salud Norte usa un modelo fundacional a través de Amazon Bedrock, proporciona prompts y evalúa las respuestas junto con médicos clínicos. ¿En qué etapas del ciclo de vida del FM está participando directamente el profesional?",
    "explanation": "Cuando se consume un modelo a través de una API administrada, el proveedor ya ha completado la selección de datos, la selección del modelo, el preentrenamiento y, por lo general, el ajuste fino por instrucciones. Su trabajo se ubica en la evaluación, la implementación de la aplicación y el ciclo de retroalimentación que la mejora.",
    "takeaway": "Usar un FM significa unirse a su ciclo de vida en una etapa avanzada. Por eso es económico y rápido."
  },
  "q:cyu-2-2-q5::opt:a": {
    "text": "Preentrenamiento y ajuste fino"
  },
  "q:cyu-2-2-q5::opt:b": {
    "text": "Evaluación, implementación y retroalimentación"
  },
  "q:cyu-2-2-q5::opt:c": {
    "text": "Las siete etapas por igual"
  },
  "q:cyu-2-2-q5::opt:d": {
    "text": "Selección de datos y preentrenamiento"
  },
  "q:cyu-2-2-q5::incorrect:a": {
    "text": "Ni el preentrenamiento ni el ajuste fino están ocurriendo en el flujo de trabajo descrito."
  },
  "q:cyu-2-2-q5::incorrect:c": {
    "text": "Las etapas no se distribuyen equitativamente entre el proveedor y el consumidor; ese es precisamente el argumento económico de los modelos fundacionales."
  },
  "q:cyu-2-2-q5::incorrect:d": {
    "text": "El corpus y la ejecución del preentrenamiento pertenecen al proveedor del modelo."
  },
  "q:cyu-2-3-q1": {
    "stem": "En el precio basado en tokens para la inferencia de modelos fundacionales, ¿qué se factura?",
    "explanation": "El precio bajo demanda de los modelos fundacionales cuenta los tokens de entrada y los tokens de salida, y por lo general cobra más por la salida porque la generación es secuencial y requiere mucho cómputo. Ni la cantidad de llamadas ni el tiempo de actividad son la unidad de facturación.",
    "takeaway": "Tokens de entrada más tokens de salida, a tarifas distintas. La salida suele ser la mitad más costosa."
  },
  "q:cyu-2-3-q1::opt:a": {
    "text": "La cantidad de horas que el endpoint está en ejecución."
  },
  "q:cyu-2-3-q1::opt:b": {
    "text": "La cantidad de parámetros del modelo."
  },
  "q:cyu-2-3-q1::opt:c": {
    "text": "La cantidad de llamadas a la API realizadas, sin importar su longitud."
  },
  "q:cyu-2-3-q1::opt:d": {
    "text": "La cantidad de tokens de entrada y tokens de salida procesados, generalmente a tarifas diferentes."
  },
  "q:cyu-2-3-q1::incorrect:a": {
    "text": "La facturación por hora describe el throughput aprovisionado o un endpoint autoadministrado, no el precio de tokens bajo demanda."
  },
  "q:cyu-2-3-q1::incorrect:b": {
    "text": "La cantidad de parámetros influye en la tarifa por token, pero no se factura en sí misma."
  },
  "q:cyu-2-3-q1::incorrect:c": {
    "text": "Dos llamadas de longitudes muy distintas cuestan montos muy distintos."
  },
  "q:cyu-2-3-q2": {
    "stem": "Un equipo envía el mismo prompt de sistema de 5000 tokens con cada solicitud a un asistente de alto volumen. ¿Cuáles DOS cambios reducirían más directamente el costo de inferencia? (Seleccione DOS).",
    "explanation": "El almacenamiento en caché de prompts (prompt caching) reduce el cargo por un prefijo largo y repetido que se reenvía en cada llamada, que es exactamente el patrón descrito. Enrutar las solicitudes simples a un modelo más pequeño reduce la tarifa por token para la mayor parte del tráfico.",
    "takeaway": "Prefijo fijo repetido = almacenamiento en caché de prompts. Solicitudes sencillas = modelo más pequeño. Esas dos palancas responden la mayoría de las preguntas de costo."
  },
  "q:cyu-2-3-q2::opt:a": {
    "text": "Habilitar el almacenamiento en caché de prompts para la porción invariable del prompt."
  },
  "q:cyu-2-3-q2::opt:b": {
    "text": "Aumentar el ajuste de temperatura."
  },
  "q:cyu-2-3-q2::opt:c": {
    "text": "Trasladar las solicitudes rutinarias y sencillas a un modelo más pequeño y económico."
  },
  "q:cyu-2-3-q2::opt:d": {
    "text": "Aumentar el límite máximo de tokens de salida."
  },
  "q:cyu-2-3-q2::opt:e": {
    "text": "Cambiar de inferencia por lotes (batch) a inferencia bajo demanda."
  },
  "q:cyu-2-3-q2::incorrect:b": {
    "text": "La temperatura afecta la aleatoriedad de la salida, no el precio."
  },
  "q:cyu-2-3-q2::incorrect:d": {
    "text": "Aumentar el límite de salida permite respuestas más largas y costosas, y aumenta la latencia."
  },
  "q:cyu-2-3-q2::incorrect:e": {
    "text": "La inferencia por lotes es más económica que la inferencia bajo demanda, por lo que moverse en esa dirección aumenta el costo."
  },
  "q:cyu-2-3-q3": {
    "stem": "¿Qué cambio reduciría más directamente la latencia de una respuesta de un modelo fundacional?",
    "explanation": "Un modelo genera la salida un token a la vez, por lo que el tiempo para completar una respuesta está dominado por la cantidad de tokens que produce. Limitar la longitud de salida acorta directamente el tiempo de generación.",
    "takeaway": "La latencia sigue a los tokens de salida. El costo sigue a ambos, con mayor peso hacia la salida."
  },
  "q:cyu-2-3-q3::opt:a": {
    "text": "Reducir la cantidad máxima de tokens de salida."
  },
  "q:cyu-2-3-q3::opt:b": {
    "text": "Aumentar el tamaño del contexto recuperado."
  },
  "q:cyu-2-3-q3::opt:c": {
    "text": "Aumentar la temperatura."
  },
  "q:cyu-2-3-q3::opt:d": {
    "text": "Habilitar más filtros de contenido."
  },
  "q:cyu-2-3-q3::incorrect:b": {
    "text": "Más contexto recuperado significa más tokens de entrada que procesar, lo cual aumenta la latencia y el costo."
  },
  "q:cyu-2-3-q3::incorrect:c": {
    "text": "La temperatura cambia la distribución de muestreo, no la velocidad de generación."
  },
  "q:cyu-2-3-q3::incorrect:d": {
    "text": "El filtrado adicional agrega procesamiento en lugar de eliminarlo."
  },
  "q:cyu-2-3-q4": {
    "stem": "Volta Logistics ejecuta un trabajo nocturno que resume 80 000 informes de excepciones de entrega. Los resultados se necesitan antes de las 7 a. m. y ningún usuario espera un resumen individual. ¿Qué enfoque de precios e inferencia es más rentable?",
    "explanation": "La carga de trabajo es grande, fuera de línea, programada y tolerante a la latencia, que es precisamente el perfil para el cual se tarifica la inferencia por lotes. El modo por lotes se ofrece con un descuento sustancial respecto de las tarifas bajo demanda.",
    "takeaway": "Grande + fuera de línea + no urgente = por lotes. Este patrón se repite en los Dominios 1, 2 y 3."
  },
  "q:cyu-2-3-q4::opt:a": {
    "text": "Throughput aprovisionado reservado las 24 horas del día."
  },
  "q:cyu-2-3-q4::opt:b": {
    "text": "Inferencia por lotes, que procesa grandes volúmenes de forma asíncrona con un descuento respecto de las tarifas bajo demanda."
  },
  "q:cyu-2-3-q4::opt:c": {
    "text": "Un endpoint en tiempo real con autoescalado."
  },
  "q:cyu-2-3-q4::opt:d": {
    "text": "Inferencia bajo demanda con un modelo de vanguardia (frontier model), invocada de forma síncrona por cada informe."
  },
  "q:cyu-2-3-q4::incorrect:a": {
    "text": "Reservar capacidad las 24 horas para un trabajo que se ejecuta una vez por noche desperdicia la mayor parte de la reserva."
  },
  "q:cyu-2-3-q4::incorrect:c": {
    "text": "Un endpoint en tiempo real resuelve un problema de latencia que, según el enunciado, no existe."
  },
  "q:cyu-2-3-q4::incorrect:d": {
    "text": "La inferencia síncrona bajo demanda paga la tarifa completa por un trabajo que no tiene requisitos de latencia."
  },
  "q:cyu-2-4-q1": {
    "stem": "¿Qué afirmación describe mejor la ingeniería de contexto (context engineering)?",
    "explanation": "La ingeniería de contexto consiste en gestionar la ventana de contexto finita y facturada: instrucciones del sistema, documentos recuperados, historial de la conversación, definiciones de herramientas y ejemplos, junto con la solicitud del usuario propiamente dicha. Es más amplia que la ingeniería de prompts, que se ocupa de la redacción de las instrucciones.",
    "takeaway": "Ingeniería de prompts = cómo se redacta. Ingeniería de contexto = qué llega a entrar en la ventana."
  },
  "q:cyu-2-4-q1::opt:a": {
    "text": "Decidir qué información ocupa la ventana de contexto del modelo en cada llamada, y de qué forma."
  },
  "q:cyu-2-4-q1::opt:b": {
    "text": "Elegir la cantidad de capas de una red neuronal."
  },
  "q:cyu-2-4-q1::opt:c": {
    "text": "Reentrenar un modelo fundacional con datos específicos de un dominio."
  },
  "q:cyu-2-4-q1::opt:d": {
    "text": "Configurar el cifrado aplicado a los prompts en tránsito."
  },
  "q:cyu-2-4-q1::incorrect:b": {
    "text": "La arquitectura de la red es una decisión de diseño del modelo y está fuera del alcance de este rol."
  },
  "q:cyu-2-4-q1::incorrect:c": {
    "text": "Eso es ajuste fino o preentrenamiento continuado, cubierto en el Dominio 3."
  },
  "q:cyu-2-4-q1::incorrect:d": {
    "text": "El cifrado es un control de seguridad, cubierto en el Dominio 5."
  },
  "q:cyu-2-4-q2": {
    "stem": "Un asistente de RAG recupera los 25 fragmentos principales para cada pregunta. Los usuarios reportan respuestas lentas, ocasionalmente fuera de tema, y el costo por interacción es alto. ¿Cuál es la causa más probable?",
    "explanation": "Recuperar 25 fragmentos por consulta llena la ventana con material de relevancia decreciente. Eso aumenta los tokens de entrada, lo cual eleva el costo y la latencia, y agrega contenido distractor que puede desviar la respuesta del tema. Menos fragmentos, mejor clasificados, es el remedio estándar.",
    "takeaway": "Lento, costoso y ocasionalmente fuera de tema es la firma característica de la sobrerrecuperación."
  },
  "q:cyu-2-4-q2::opt:a": {
    "text": "El modelo de embeddings está produciendo vectores demasiado cortos."
  },
  "q:cyu-2-4-q2::opt:b": {
    "text": "La ventana de contexto es demasiado pequeña para el modelo elegido."
  },
  "q:cyu-2-4-q2::opt:c": {
    "text": "Se está suministrando demasiado contexto de relevancia marginal, lo cual diluye la señal e infla el costo y la latencia."
  },
  "q:cyu-2-4-q2::opt:d": {
    "text": "La temperatura está configurada demasiado baja."
  },
  "q:cyu-2-4-q2::incorrect:a": {
    "text": "La dimensionalidad de los embeddings es una propiedad del modelo y no es ajustable de esta manera."
  },
  "q:cyu-2-4-q2::incorrect:b": {
    "text": "Los síntomas describen demasiado contexto, no falta de espacio."
  },
  "q:cyu-2-4-q2::incorrect:d": {
    "text": "Una temperatura baja hace que la salida sea más determinista; no provoca respuestas fuera de tema ni un costo alto."
  },
  "q:cyu-2-4-q3": {
    "stem": "¿Cuáles DOS elementos suelen competir por espacio en la ventana de contexto de un modelo fundacional en un asistente de producción? (Seleccione DOS).",
    "explanation": "La ventana de contexto contiene lo que se envía al modelo en el momento de la inferencia. Tanto los pasajes recuperados como los turnos previos de la conversación forman parte de esa carga útil, y ambos crecen rápidamente.",
    "takeaway": "La ventana de contexto contiene únicamente lo que se envía en esta llamada. Nada de lo que el modelo ya aprendió la ocupa."
  },
  "q:cyu-2-4-q3::opt:a": {
    "text": "Los pesos aprendidos del modelo"
  },
  "q:cyu-2-4-q3::opt:b": {
    "text": "Los pasajes recuperados de la base de conocimiento"
  },
  "q:cyu-2-4-q3::opt:c": {
    "text": "El historial de la conversación de turnos anteriores"
  },
  "q:cyu-2-4-q3::opt:d": {
    "text": "La asignación de memoria de la GPU"
  },
  "q:cyu-2-4-q3::opt:e": {
    "text": "El conjunto de datos de entrenamiento"
  },
  "q:cyu-2-4-q3::incorrect:a": {
    "text": "Los pesos residen dentro del modelo y no forman parte de la ventana de contexto."
  },
  "q:cyu-2-4-q3::incorrect:d": {
    "text": "La memoria de la GPU es infraestructura, no contexto."
  },
  "q:cyu-2-4-q3::incorrect:e": {
    "text": "El conjunto de datos de entrenamiento se consumió durante el preentrenamiento y no se envía en la inferencia."
  },
  "q:cyu-2-4-q4": {
    "stem": "Una conversación de soporte de larga duración está comenzando a exceder la ventana de contexto del modelo. ¿Qué técnica de ingeniería de contexto aborda esto mientras preserva la continuidad?",
    "explanation": "Resumir el historial más antiguo lo comprime en muchos menos tokens conservando el estado esencial de la conversación, y mantener los turnos recientes textualmente preserva la continuidad inmediata. Esta es la gestión de memoria estándar para sesiones largas.",
    "takeaway": "Resumir los turnos antiguos, conservar los turnos nuevos. Es la misma idea que la gestión de memoria de agentes del objetivo 2.1.6."
  },
  "q:cyu-2-4-q4::opt:a": {
    "text": "Aumentar la temperatura para que las respuestas sean más cortas."
  },
  "q:cyu-2-4-q4::opt:b": {
    "text": "Cambiar a un modelo de embeddings."
  },
  "q:cyu-2-4-q4::opt:c": {
    "text": "Resumir los turnos más antiguos y conservar el resumen junto con los turnos más recientes."
  },
  "q:cyu-2-4-q4::opt:d": {
    "text": "Ajustar (fine-tune) el modelo con la conversación."
  },
  "q:cyu-2-4-q4::incorrect:a": {
    "text": "La temperatura no tiene relación con la longitud de la respuesta ni con el tamaño del contexto."
  },
  "q:cyu-2-4-q4::incorrect:b": {
    "text": "Los modelos de embeddings producen vectores; no pueden llevar adelante la conversación."
  },
  "q:cyu-2-4-q4::incorrect:d": {
    "text": "El ajuste fino es un proceso costoso y fuera de línea, y no es un mecanismo para manejar una conversación en vivo."
  },
  "q:cyu-2-5-q1": {
    "stem": "¿Cuál es el rol principal del Protocolo de Contexto de Modelo (Model Context Protocol, MCP) en los sistemas agénticos?",
    "explanation": "MCP es un estándar abierto que permite que cualquier agente compatible descubra e invoque las capacidades que expone un sistema, reemplazando las integraciones punto a punto hechas a medida. La guía del examen lo menciona específicamente por su rol en la conexión de agentes con sistemas externos.",
    "takeaway": "MCP = un conector estándar para herramientas. Su valor está en la reutilización, no en el rendimiento."
  },
  "q:cyu-2-5-q1::opt:a": {
    "text": "Cifra los datos en tránsito entre el agente y el modelo."
  },
  "q:cyu-2-5-q1::opt:b": {
    "text": "Mide la exactitud de las respuestas del agente."
  },
  "q:cyu-2-5-q1::opt:c": {
    "text": "Comprime los prompts para reducir el costo en tokens."
  },
  "q:cyu-2-5-q1::opt:d": {
    "text": "Proporciona un estándar abierto para conectar agentes con herramientas y fuentes de datos externas."
  },
  "q:cyu-2-5-q1::incorrect:a": {
    "text": "El cifrado en el transporte lo proporcionan TLS y los controles de seguridad de AWS, no MCP."
  },
  "q:cyu-2-5-q1::incorrect:b": {
    "text": "La evaluación es una disciplina independiente cubierta en el Dominio 3."
  },
  "q:cyu-2-5-q1::incorrect:c": {
    "text": "La compresión de prompts es una consideración de ingeniería de contexto, no relacionada con MCP."
  },
  "q:cyu-2-5-q2": {
    "stem": "¿Qué distinción separa correctamente Strands Agents de Amazon Bedrock AgentCore?",
    "explanation": "Strands Agents es un SDK con licencia Apache-2.0 que implementa el bucle de agente impulsado por el modelo: definir un modelo, un prompt y herramientas. AgentCore proporciona la capa de producción alrededor de los agentes: runtime con aislamiento de sesiones, memoria, un gateway MCP, identidad y observabilidad.",
    "takeaway": "Constrúyalo con Strands, ejecútelo en AgentCore. SDK frente a infraestructura."
  },
  "q:cyu-2-5-q2::opt:a": {
    "text": "Son dos nombres para el mismo servicio."
  },
  "q:cyu-2-5-q2::opt:b": {
    "text": "Strands Agents es un SDK de código abierto para construir agentes; AgentCore es infraestructura administrada para ejecutarlos en producción."
  },
  "q:cyu-2-5-q2::opt:c": {
    "text": "Strands Agents solo funciona con modelos de Amazon Nova; AgentCore solo funciona con modelos de Anthropic."
  },
  "q:cyu-2-5-q2::opt:d": {
    "text": "Strands Agents es un runtime administrado; AgentCore es un SDK de código abierto."
  },
  "q:cyu-2-5-q2::incorrect:a": {
    "text": "Son productos distintos que suelen usarse juntos."
  },
  "q:cyu-2-5-q2::incorrect:c": {
    "text": "Ambos son deliberadamente agnósticos respecto del modelo; AgentCore funciona con modelos dentro y fuera de Bedrock y con varios frameworks de código abierto."
  },
  "q:cyu-2-5-q2::incorrect:d": {
    "text": "Invierte los dos."
  },
  "q:cyu-2-5-q3": {
    "stem": "¿Cuáles DOS capacidades proporciona Amazon Bedrock AgentCore para agentes de producción? (Seleccione DOS).",
    "explanation": "AgentCore Memory proporciona memoria administrada de corto y largo plazo, de modo que los desarrolladores no tengan que construir la persistencia por su cuenta. AgentCore Gateway convierte las API existentes, las funciones de AWS Lambda y las especificaciones OpenAPI en herramientas que los agentes compatibles con MCP pueden descubrir e invocar.",
    "takeaway": "AgentCore: Runtime, Memory, Gateway, Identity, Observability, además de las herramientas Code Interpreter y Browser."
  },
  "q:cyu-2-5-q3::opt:a": {
    "text": "Memoria administrada de corto y largo plazo"
  },
  "q:cyu-2-5-q3::opt:b": {
    "text": "Etiquetado automático de conjuntos de datos de entrenamiento"
  },
  "q:cyu-2-5-q3::opt:c": {
    "text": "Un gateway que expone las API y las funciones de AWS Lambda como herramientas compatibles con MCP"
  },
  "q:cyu-2-5-q3::opt:d": {
    "text": "Optimización de consultas relacionales"
  },
  "q:cyu-2-5-q3::opt:e": {
    "text": "Seguridad física de los centros de datos de AWS"
  },
  "q:cyu-2-5-q3::incorrect:b": {
    "text": "El etiquetado de conjuntos de datos corresponde a Amazon SageMaker Ground Truth."
  },
  "q:cyu-2-5-q3::incorrect:d": {
    "text": "La optimización de consultas es una cuestión del motor de base de datos."
  },
  "q:cyu-2-5-q3::incorrect:e": {
    "text": "La seguridad de los centros de datos es una responsabilidad de AWS bajo el modelo de responsabilidad compartida, pero no es una función de AgentCore."
  },
  "q:cyu-2-5-q4": {
    "stem": "Volta Logistics construye un sistema en el que un agente líder recibe una queja de un cliente, la descompone y delega a un agente de seguimiento de envíos, un agente de facturación y un agente de políticas, y luego ensambla una única respuesta. ¿Qué patrón multiagente es este?",
    "explanation": "Un agente líder que descompone un objetivo, delega subtareas a especialistas y ensambla sus resultados es el patrón supervisor u orquestador. La presencia de un agente coordinador por encima de los especialistas es el detalle decisivo.",
    "takeaway": "Busque al coordinador. Un agente por encima de los demás significa patrón de supervisor."
  },
  "q:cyu-2-5-q4::opt:a": {
    "text": "Enjambre (swarm)"
  },
  "q:cyu-2-5-q4::opt:b": {
    "text": "Canalización secuencial (pipeline)"
  },
  "q:cyu-2-5-q4::opt:c": {
    "text": "Un único agente con muchas herramientas"
  },
  "q:cyu-2-5-q4::opt:d": {
    "text": "Patrón de supervisor u orquestador"
  },
  "q:cyu-2-5-q4::incorrect:a": {
    "text": "En un enjambre, los agentes actúan como pares sin un coordinador fijo."
  },
  "q:cyu-2-5-q4::incorrect:b": {
    "text": "Una canalización ejecuta pasos en un orden fijo; aquí el agente líder decide qué especialistas involucrar."
  },
  "q:cyu-2-5-q4::incorrect:c": {
    "text": "Aquí hay varios agentes distintos, no un único agente con herramientas."
  },
  "q:cyu-2-5-q5": {
    "stem": "Un agente necesita recordar la preferencia de entrega declarada por un cliente a través de conversaciones separadas por semanas. ¿Qué capacidad del agente aborda esto?",
    "explanation": "La ventana de contexto se borra entre sesiones, por lo que cualquier información que deba perdurar entre conversaciones debe persistirse externamente y recuperarse cuando sea relevante. Eso es la memoria de largo plazo, provista como una capacidad administrada por AgentCore Memory.",
    "takeaway": "Dentro de una sesión = corto plazo. A través de sesiones = largo plazo, persistida y recuperada."
  },
  "q:cyu-2-5-q5::opt:a": {
    "text": "Un ajuste de tokens máximos de salida más grande"
  },
  "q:cyu-2-5-q5::opt:b": {
    "text": "Memoria de largo plazo, persistida fuera de la ventana de contexto y recuperada cuando es relevante"
  },
  "q:cyu-2-5-q5::opt:c": {
    "text": "Memoria de corto plazo mantenida en la ventana de contexto"
  },
  "q:cyu-2-5-q5::opt:d": {
    "text": "Almacenamiento en caché de prompts"
  },
  "q:cyu-2-5-q5::incorrect:a": {
    "text": "La longitud de la salida no tiene nada que ver con el recuerdo entre sesiones."
  },
  "q:cyu-2-5-q5::incorrect:c": {
    "text": "La memoria de corto plazo dura solo durante la sesión actual."
  },
  "q:cyu-2-5-q5::incorrect:d": {
    "text": "El almacenamiento en caché de prompts reduce el costo de un prefijo repetido; no almacena datos específicos del cliente."
  },
  "q:cyu-2-5-q6": {
    "stem": "¿Qué distingue a un agente impulsado por el modelo de uno impulsado por un flujo de trabajo?",
    "explanation": "La distinción está en dónde reside el flujo de control. Los agentes impulsados por el modelo dejan que el modelo planifique y se adapte en tiempo de ejecución, lo cual es flexible pero menos predecible. Los sistemas impulsados por un flujo de trabajo codifican el camino de antemano, lo cual es auditable y determinista, pero rígido.",
    "takeaway": "El modelo decide = flexible pero menos predecible. El grafo decide = predecible pero rígido. Los procesos regulados suelen preferir el grafo."
  },
  "q:cyu-2-5-q6::opt:a": {
    "text": "En un agente impulsado por el modelo, el modelo fundacional decide el siguiente paso en tiempo de ejecución; en un sistema impulsado por un flujo de trabajo, un grafo predefinido lo determina."
  },
  "q:cyu-2-5-q6::opt:b": {
    "text": "Los agentes impulsados por el modelo no pueden invocar herramientas externas."
  },
  "q:cyu-2-5-q6::opt:c": {
    "text": "Los agentes impulsados por un flujo de trabajo siempre son más costosos."
  },
  "q:cyu-2-5-q6::opt:d": {
    "text": "Los agentes impulsados por el modelo no requieren un modelo fundacional."
  },
  "q:cyu-2-5-q6::incorrect:b": {
    "text": "La invocación de herramientas es central en los agentes impulsados por el modelo."
  },
  "q:cyu-2-5-q6::incorrect:c": {
    "text": "El costo depende del consumo de tokens y del diseño, no de qué paradigma se utilice."
  },
  "q:cyu-2-5-q6::incorrect:d": {
    "text": "Un agente impulsado por el modelo se define porque es el modelo el que toma las decisiones."
  },
  "q:cyu-2-6-q1": {
    "stem": "Un modelo fundacional afirma con confianza que una ley chilena de protección al consumidor contiene una cláusula que no existe. ¿Cómo se llama este fenómeno?",
    "explanation": "Una alucinación es una salida fluida y segura que es fácticamente incorrecta o fabricada. El modelo genera una continuación estadísticamente plausible en lugar de recuperar un hecho verificado, y la fluidez hace que el error sea difícil de detectar.",
    "takeaway": "Seguro y equivocado = alucinación. La solución es el anclaje (grounding), no un adjetivo distinto."
  },
  "q:cyu-2-6-q1::opt:a": {
    "text": "Alucinación"
  },
  "q:cyu-2-6-q1::opt:b": {
    "text": "Deriva de datos (data drift)"
  },
  "q:cyu-2-6-q1::opt:c": {
    "text": "Subajuste (underfitting)"
  },
  "q:cyu-2-6-q1::opt:d": {
    "text": "Sobreajuste (overfitting)"
  },
  "q:cyu-2-6-q1::incorrect:b": {
    "text": "La deriva de datos describe un cambio en la distribución de las entradas después de la implementación."
  },
  "q:cyu-2-6-q1::incorrect:c": {
    "text": "El subajuste significa que el modelo es demasiado simple para captar el patrón en absoluto."
  },
  "q:cyu-2-6-q1::incorrect:d": {
    "text": "El sobreajuste describe una falla de generalización en el momento del entrenamiento, diagnosticada al comparar el desempeño de entrenamiento y de validación."
  },
  "q:cyu-2-6-q2": {
    "stem": "¿Cuáles DOS son limitaciones de la IA generativa mencionadas en la guía del examen? (Seleccione DOS).",
    "explanation": "El objetivo 2.2.2 menciona las alucinaciones, la interpretabilidad, la inexactitud y el no determinismo. El no determinismo significa que el mismo prompt puede producir una salida diferente; la interpretabilidad significa que no se puede rastrear qué cómputo interno produjo una respuesta determinada.",
    "takeaway": "Las cuatro oficiales: alucinaciones, interpretabilidad, inexactitud, no determinismo."
  },
  "q:cyu-2-6-q2::opt:a": {
    "text": "No determinismo"
  },
  "q:cyu-2-6-q2::opt:b": {
    "text": "Incapacidad de procesar texto"
  },
  "q:cyu-2-6-q2::opt:c": {
    "text": "Interpretabilidad"
  },
  "q:cyu-2-6-q2::opt:d": {
    "text": "Requisito de datos de entrenamiento etiquetados antes de cualquier uso"
  },
  "q:cyu-2-6-q2::opt:e": {
    "text": "Incapacidad de ejecutarse en infraestructura en la nube"
  },
  "q:cyu-2-6-q2::incorrect:b": {
    "text": "El procesamiento de texto es una fortaleza central."
  },
  "q:cyu-2-6-q2::incorrect:d": {
    "text": "El uso zero-shot sin datos etiquetados es una de las principales ventajas de los modelos fundacionales."
  },
  "q:cyu-2-6-q2::incorrect:e": {
    "text": "Los modelos fundacionales se ejecutan en infraestructura en la nube por defecto."
  },
  "q:cyu-2-6-q3": {
    "stem": "Andes Retail necesita un modelo para clasificar 3 millones de mensajes de soporte cortos por mes en ocho categorías. La exactitud en esta tarea ya es alta con modelos pequeños. ¿Qué factor de selección debería predominar en la decisión?",
    "explanation": "La tarea es simple, las entradas son cortas y el volumen es muy alto. Bajo el precio basado en tokens, la tarifa por token multiplicada por 3 millones de solicitudes mensuales domina el costo total, por lo que un modelo más pequeño y económico que ya rinde bien es la elección correcta.",
    "takeaway": "Alto volumen más tarea simple equivale al modelo más pequeño que cumpla el umbral de calidad. No pague tarifas de vanguardia por trabajo rutinario."
  },
  "q:cyu-2-6-q3::opt:a": {
    "text": "Longitud máxima de la ventana de contexto"
  },
  "q:cyu-2-6-q3::opt:b": {
    "text": "Soporte de ajuste fino (fine-tuning)"
  },
  "q:cyu-2-6-q3::opt:c": {
    "text": "Soporte de entrada de video"
  },
  "q:cyu-2-6-q3::opt:d": {
    "text": "Costo por token, que favorece a un modelo más pequeño en este volumen"
  },
  "q:cyu-2-6-q3::incorrect:a": {
    "text": "Los mensajes cortos no exigen la ventana de contexto."
  },
  "q:cyu-2-6-q3::incorrect:b": {
    "text": "El enunciado indica que la exactitud ya es alta, por lo que no se requiere personalización."
  },
  "q:cyu-2-6-q3::incorrect:c": {
    "text": "No hay video en esta carga de trabajo."
  },
  "q:cyu-2-6-q4": {
    "stem": "¿Qué restricción probablemente eliminaría de la consideración, en Salud Norte, a un modelo fundacional que por lo demás rinde bien?",
    "explanation": "Las restricciones de cumplimiento normativo, incluida la residencia de datos, se mencionan en el objetivo 2.2.3 y actúan como filtros estrictos en lugar de disyuntivas. Si un modelo no puede usarse en una Región permitida, su calidad es irrelevante.",
    "takeaway": "El cumplimiento normativo es un filtro que se aplica primero. Las comparaciones de capacidad solo importan entre los modelos que lo superan."
  },
  "q:cyu-2-6-q4::opt:a": {
    "text": "El modelo tiene una cantidad de parámetros menor que las alternativas."
  },
  "q:cyu-2-6-q4::opt:b": {
    "text": "El modelo tiene una ventana de contexto grande."
  },
  "q:cyu-2-6-q4::opt:c": {
    "text": "El modelo no está disponible en una Región que satisfaga los requisitos de residencia de datos del hospital."
  },
  "q:cyu-2-6-q4::opt:d": {
    "text": "El modelo admite varios idiomas."
  },
  "q:cyu-2-6-q4::incorrect:a": {
    "text": "Ser más pequeño puede ser una ventaja en costo y latencia."
  },
  "q:cyu-2-6-q4::incorrect:b": {
    "text": "Una ventana de contexto grande es una capacidad, no una restricción."
  },
  "q:cyu-2-6-q4::incorrect:d": {
    "text": "El soporte multilingüe es un beneficio, especialmente para una implementación en español."
  },
  "q:cyu-2-6-q5": {
    "stem": "¿Qué ventaja de la IA generativa explica más directamente por qué un mismo modelo puede servir para resumir, redactar, clasificar y responder preguntas sin ejecuciones de entrenamiento separadas?",
    "explanation": "La adaptabilidad es la propiedad de un modelo fundacional que permite dirigir un único modelo preentrenado hacia muchas tareas posteriores mediante prompts, en lugar de mediante entrenamiento específico para cada tarea. El objetivo 2.2.1 la menciona en primer lugar.",
    "takeaway": "La adaptabilidad es la propiedad de \"un modelo, muchas tareas\". Es el argumento comercial a favor de una plataforma de FM compartida."
  },
  "q:cyu-2-6-q5::opt:a": {
    "text": "Explicabilidad"
  },
  "q:cyu-2-6-q5::opt:b": {
    "text": "Baja latencia"
  },
  "q:cyu-2-6-q5::opt:c": {
    "text": "Adaptabilidad"
  },
  "q:cyu-2-6-q5::opt:d": {
    "text": "Determinismo"
  },
  "q:cyu-2-6-q5::incorrect:a": {
    "text": "La explicabilidad es una debilidad conocida de los modelos fundacionales."
  },
  "q:cyu-2-6-q5::incorrect:b": {
    "text": "La latencia suele ser mayor que la de los modelos pequeños específicos para una tarea."
  },
  "q:cyu-2-6-q5::incorrect:d": {
    "text": "Los modelos generativos no son deterministas, lo cual es una limitación y no una ventaja."
  },
  "q:cyu-2-6-q6": {
    "stem": "Relacione cada métrica de negocio con lo que mide.",
    "explanation": "Estas cinco provienen de la lista de métricas de los objetivos 2.2.4 y 3.4.5. Cada una mide una dimensión distinta: alcance, economía unitaria, resultado comercial, valor a largo plazo y productividad.",
    "takeaway": "Las métricas de negocio responden \"¿vale la pena hacer esto?\". Las métricas del modelo responden \"¿está funcionando esto?\". No las mezcle."
  },
  "q:cyu-2-6-q6::matchprompt:0": {
    "text": "Qué tan bien un modelo sirve a varias áreas de negocio distintas"
  },
  "q:cyu-2-6-q6::matchprompt:1": {
    "text": "Costo operativo total dividido por la cantidad de interacciones de usuarios"
  },
  "q:cyu-2-6-q6::matchprompt:2": {
    "text": "Proporción de interacciones que producen el resultado comercial deseado"
  },
  "q:cyu-2-6-q6::matchprompt:3": {
    "text": "Valor a largo plazo de una relación con el cliente"
  },
  "q:cyu-2-6-q6::matchprompt:4": {
    "text": "Tiempo o esfuerzo ahorrado por tarea"
  },
  "q:cyu-2-6-q6::matchoption:0": {
    "text": "Desempeño entre dominios"
  },
  "q:cyu-2-6-q6::matchoption:1": {
    "text": "Costo por interacción"
  },
  "q:cyu-2-6-q6::matchoption:2": {
    "text": "Tasa de conversión"
  },
  "q:cyu-2-6-q6::matchoption:3": {
    "text": "Valor de vida del cliente (customer lifetime value)"
  },
  "q:cyu-2-6-q6::matchoption:4": {
    "text": "Eficiencia"
  },
  "q:cyu-2-6-q7": {
    "stem": "Un oficial de cumplimiento pide una garantía de que el asistente generativo de la empresa nunca producirá una afirmación incorrecta. ¿Cuál es la respuesta apropiada?",
    "explanation": "La alucinación es inherente a los modelos generativos, que producen continuaciones plausibles en lugar de hechos recuperados. La respuesta realista y evaluable en el examen es un conjunto de mitigaciones en capas: anclar (ground) el modelo en fuentes autorizadas, validar su salida, exigir citas y mantener a un humano en el ciclo (human in the loop) cuando lo que está en juego lo justifique.",
    "takeaway": "No existe un modelo libre de alucinaciones. Solo existen mitigaciones, y el examen espera que usted las mencione."
  },
  "q:cyu-2-6-q7::opt:a": {
    "text": "Ajustar el modelo (fine-tuning), lo cual elimina la alucinación."
  },
  "q:cyu-2-6-q7::opt:b": {
    "text": "Establecer la temperatura en cero, lo cual elimina los errores fácticos."
  },
  "q:cyu-2-6-q7::opt:c": {
    "text": "Tal garantía no es posible; reducir el riesgo mediante el anclaje (grounding) con RAG, la validación de la salida, la citación de fuentes y la revisión humana de las salidas de alto riesgo."
  },
  "q:cyu-2-6-q7::opt:d": {
    "text": "Seleccionar un modelo que haya sido certificado como libre de alucinaciones."
  },
  "q:cyu-2-6-q7::incorrect:a": {
    "text": "El ajuste fino cambia el estilo y el comportamiento en el dominio, y puede reducir ciertos errores, pero no elimina la fabricación."
  },
  "q:cyu-2-6-q7::incorrect:b": {
    "text": "Una temperatura de cero hace que la salida sea más determinista y repetible, no más correcta desde el punto de vista fáctico. Una respuesta segura pero equivocada simplemente pasa a estar equivocada de forma consistente."
  },
  "q:cyu-2-6-q7::incorrect:d": {
    "text": "Tal certificación no existe y ningún modelo está libre de alucinaciones."
  },
  "q:cyu-2-7-q1": {
    "stem": "Un equipo quiere invocar modelos fundacionales de varios proveedores a través de una única API, sin aprovisionar ni gestionar infraestructura alguna. ¿Qué servicio de AWS se ajusta a esto?",
    "explanation": "Amazon Bedrock es el servicio totalmente administrado y sin servidor (serverless) que expone modelos fundacionales de varios proveedores a través de una única API, sin infraestructura que aprovisionar. Esa combinación de acceso multiproveedor y cero infraestructura es exclusiva de Bedrock entre las opciones.",
    "takeaway": "FM de varios proveedores más sin servidor más una única API equivale a Bedrock. Es la respuesta única más común del Dominio 2."
  },
  "q:cyu-2-7-q1::opt:a": {
    "text": "Amazon Bedrock"
  },
  "q:cyu-2-7-q1::opt:b": {
    "text": "Amazon SageMaker AI"
  },
  "q:cyu-2-7-q1::opt:c": {
    "text": "Amazon EC2 con un modelo autoalojado"
  },
  "q:cyu-2-7-q1::opt:d": {
    "text": "Amazon Comprehend"
  },
  "q:cyu-2-7-q1::incorrect:b": {
    "text": "SageMaker AI es una plataforma para construir y alojar modelos en la que usted selecciona y paga por instancias."
  },
  "q:cyu-2-7-q1::incorrect:c": {
    "text": "El autoalojamiento en EC2 es lo opuesto a \"sin infraestructura que gestionar\"."
  },
  "q:cyu-2-7-q1::incorrect:d": {
    "text": "Comprehend es un servicio de PLN preentrenado, no una puerta de enlace de modelos fundacionales."
  },
  "q:cyu-2-7-q2": {
    "stem": "¿Qué servicio usaría un equipo para implementar un modelo de código abierto específico en endpoints dentro de su propio entorno de AWS, con acceso a los artefactos del modelo?",
    "explanation": "SageMaker JumpStart es el centro de modelos que proporciona modelos preentrenados y de código abierto junto con plantillas de soluciones, implementables en endpoints de SageMaker dentro de la propia cuenta del cliente.",
    "takeaway": "JumpStart = modelos abiertos y preentrenados en sus propios endpoints de SageMaker."
  },
  "q:cyu-2-7-q2::opt:a": {
    "text": "Inferencia bajo demanda de Amazon Bedrock"
  },
  "q:cyu-2-7-q2::opt:b": {
    "text": "Amazon Lex"
  },
  "q:cyu-2-7-q2::opt:c": {
    "text": "Amazon Quick"
  },
  "q:cyu-2-7-q2::opt:d": {
    "text": "Amazon SageMaker JumpStart"
  },
  "q:cyu-2-7-q2::incorrect:a": {
    "text": "La inferencia bajo demanda de Bedrock sirve modelos a través de una API administrada; usted no recibe los artefactos ni los aloja por su cuenta."
  },
  "q:cyu-2-7-q2::incorrect:b": {
    "text": "Lex construye bots conversacionales y no implementa modelos fundacionales."
  },
  "q:cyu-2-7-q2::incorrect:c": {
    "text": "Amazon Quick es un espacio de trabajo agéntico y de inteligencia de negocio, no una herramienta de implementación de modelos."
  },
  "q:cyu-2-7-q3": {
    "stem": "Los analistas de negocio de Andes Retail quieren hacer preguntas sobre sus datos de ventas en lenguaje natural, construir tableros (dashboards) y hacer que un asistente ejecute investigaciones de múltiples pasos en fuentes internas y externas. ¿Qué servicio está diseñado para esto?",
    "explanation": "Amazon Quick es la evolución de Amazon QuickSight hacia un espacio de trabajo agéntico para usuarios de negocio: tableros e inteligencia de negocio (BI), análisis en lenguaje natural, agentes de chat, investigación y automatización de flujos de trabajo, todo en una sola experiencia.",
    "takeaway": "Usuarios de negocio más tableros más lenguaje natural más automatización equivale a Amazon Quick."
  },
  "q:cyu-2-7-q3::opt:a": {
    "text": "Amazon Kendra"
  },
  "q:cyu-2-7-q3::opt:b": {
    "text": "Amazon Quick"
  },
  "q:cyu-2-7-q3::opt:c": {
    "text": "Amazon Bedrock AgentCore"
  },
  "q:cyu-2-7-q3::opt:d": {
    "text": "Amazon SageMaker Studio"
  },
  "q:cyu-2-7-q3::incorrect:a": {
    "text": "Kendra proporciona búsqueda empresarial, pero no tableros ni BI."
  },
  "q:cyu-2-7-q3::incorrect:c": {
    "text": "AgentCore es infraestructura para desarrolladores destinada a ejecutar agentes, no un producto de analítica para usuarios de negocio."
  },
  "q:cyu-2-7-q3::incorrect:d": {
    "text": "SageMaker Studio es un entorno de desarrollo para científicos de datos, no una herramienta para analistas de negocio."
  },
  "q:cyu-2-7-q4": {
    "stem": "Un equipo de desarrollo tiene un agente prototipo construido con un SDK de código abierto. Necesitan aislamiento de sesiones, memoria persistente, conectividad estandarizada de herramientas y observabilidad de producción. ¿Cuáles DOS opciones de AWS son más relevantes? (Seleccione DOS).",
    "explanation": "AgentCore Runtime proporciona sesiones aisladas y el entorno de ejecución administrado con observabilidad integrada. AgentCore Gateway proporciona conectividad estandarizada de herramientas al exponer las API, las funciones de AWS Lambda y las especificaciones OpenAPI como herramientas compatibles con MCP, y al conectarse a servidores MCP existentes.",
    "takeaway": "Pasar de un agente prototipo a un agente de producción es la propuesta de AgentCore. Runtime, Memory, Gateway, Identity, Observability."
  },
  "q:cyu-2-7-q4::opt:a": {
    "text": "Amazon Bedrock AgentCore Runtime"
  },
  "q:cyu-2-7-q4::opt:b": {
    "text": "Amazon Bedrock AgentCore Gateway"
  },
  "q:cyu-2-7-q4::opt:c": {
    "text": "Amazon Polly"
  },
  "q:cyu-2-7-q4::opt:d": {
    "text": "AWS Glue DataBrew"
  },
  "q:cyu-2-7-q4::opt:e": {
    "text": "Amazon S3 Glacier"
  },
  "q:cyu-2-7-q4::incorrect:c": {
    "text": "Polly convierte texto en voz y no tiene ningún rol aquí."
  },
  "q:cyu-2-7-q4::incorrect:d": {
    "text": "DataBrew es preparación visual de datos."
  },
  "q:cyu-2-7-q4::incorrect:e": {
    "text": "S3 Glacier es almacenamiento de archivo (archival)."
  },
  "q:cyu-2-7-q5": {
    "stem": "¿Qué afirmación sobre Kiro es correcta según la versión 1.1 de la guía del examen?",
    "explanation": "Kiro es el entorno de desarrollo integrado (IDE) agéntico de AWS. Su característica distintiva es el desarrollo guiado por especificaciones (spec-driven development): produce documentos estructurados de requisitos, diseño y tareas antes de generar código. AWS lo ha posicionado como el sucesor de Amazon Q Developer para la asistencia basada en IDE y lo agregó a la lista de servicios dentro del alcance en la versión 1.1.",
    "takeaway": "Kiro = IDE agéntico guiado por especificaciones. Es nuevo en el examen, por lo que se evaluará de forma literal."
  },
  "q:cyu-2-7-q5::opt:a": {
    "text": "Kiro es un servicio de gobernanza para auditar sistemas de IA."
  },
  "q:cyu-2-7-q5::opt:b": {
    "text": "Kiro es un modelo fundacional administrado, alojado únicamente en Amazon Bedrock."
  },
  "q:cyu-2-7-q5::opt:c": {
    "text": "Kiro es un servicio de base de datos vectorial para almacenar embeddings."
  },
  "q:cyu-2-7-q5::opt:d": {
    "text": "Kiro es un IDE agéntico guiado por especificaciones que genera documentos estructurados de requisitos y diseño antes de escribir código, posicionado por AWS como el sucesor de Amazon Q Developer."
  },
  "q:cyu-2-7-q5::incorrect:a": {
    "text": "La gobernanza y la auditoría las gestionan Config, Audit Manager, CloudTrail y Artifact."
  },
  "q:cyu-2-7-q5::incorrect:b": {
    "text": "Kiro es una herramienta de desarrollo, no un modelo."
  },
  "q:cyu-2-7-q5::incorrect:c": {
    "text": "El almacenamiento vectorial en AWS lo proporcionan OpenSearch Service, Aurora, RDS for PostgreSQL y Neptune."
  },
  "q:cyu-2-8-q1": {
    "stem": "Lumen Legal está preocupada de que la información confidencial de clientes incluida en los prompts pueda usarse para mejorar el modelo fundacional subyacente. ¿Qué es correcto respecto de Amazon Bedrock?",
    "explanation": "AWS declara que el contenido del cliente enviado a Amazon Bedrock no se utiliza para entrenar los modelos fundacionales subyacentes y no se distribuye a los proveedores de los modelos. Esto es una parte central del argumento de privacidad de datos para usar un servicio de IA generativa administrado de AWS.",
    "takeaway": "Bedrock no entrena con sus prompts. Aprenda esta frase textualmente; responde muchas preguntas en dos dominios."
  },
  "q:cyu-2-8-q1::opt:a": {
    "text": "Esta preocupación solo puede abordarse autoalojando el modelo."
  },
  "q:cyu-2-8-q1::opt:b": {
    "text": "Los prompts y las completions no se utilizan para entrenar los modelos fundacionales subyacentes y no se comparten con los proveedores de los modelos."
  },
  "q:cyu-2-8-q1::opt:c": {
    "text": "Los prompts se usan para entrenar los modelos fundacionales base, pero antes se anonimizan."
  },
  "q:cyu-2-8-q1::opt:d": {
    "text": "Los prompts se comparten con todos los proveedores de modelos de la plataforma."
  },
  "q:cyu-2-8-q1::incorrect:a": {
    "text": "El autoalojamiento es una forma de controlar los datos, pero no es necesario para obtener esta garantía."
  },
  "q:cyu-2-8-q1::incorrect:c": {
    "text": "No se realiza ningún entrenamiento con los prompts del cliente, ya sea anonimizados o no."
  },
  "q:cyu-2-8-q1::incorrect:d": {
    "text": "El contenido no se comparte con los proveedores."
  },
  "q:cyu-2-8-q2": {
    "stem": "Una aplicación tiene tráfico estable, alto y predecible hacia un único modelo fundacional, y requiere throughput garantizado. ¿Qué opción de precios es la más apropiada?",
    "explanation": "El throughput aprovisionado reserva capacidad del modelo por un período comprometido, se factura por tiempo y ofrece throughput garantizado y latencia predecible. Un volumen estable, alto y predecible es el perfil de utilización que hace económica la reserva.",
    "takeaway": "Throughput garantizado más volumen alto y estable equivale a throughput aprovisionado. Volumen irregular o bajo equivale a bajo demanda."
  },
  "q:cyu-2-8-q2::opt:a": {
    "text": "Throughput aprovisionado"
  },
  "q:cyu-2-8-q2::opt:b": {
    "text": "Solo almacenamiento en caché de prompts"
  },
  "q:cyu-2-8-q2::opt:c": {
    "text": "Precio de tokens bajo demanda"
  },
  "q:cyu-2-8-q2::opt:d": {
    "text": "Inferencia por lotes"
  },
  "q:cyu-2-8-q2::incorrect:b": {
    "text": "El almacenamiento en caché de prompts reduce el costo de un prefijo repetido, pero no garantiza nada sobre el throughput."
  },
  "q:cyu-2-8-q2::incorrect:c": {
    "text": "El modo bajo demanda es flexible, pero no ofrece garantía de throughput y puede resultar más costoso con un volumen alto sostenido."
  },
  "q:cyu-2-8-q2::incorrect:d": {
    "text": "El modo por lotes es para trabajos asíncronos fuera de línea, no para un servicio que necesita throughput garantizado."
  },
  "q:cyu-2-8-q3": {
    "stem": "¿Cuáles DOS son ventajas de construir aplicaciones de IA generativa sobre servicios administrados de AWS en lugar de autoalojar los modelos? (Seleccione DOS).",
    "explanation": "El objetivo 2.3.2 menciona la accesibilidad, la menor barrera de entrada, la eficiencia, la rentabilidad y la velocidad de salida al mercado. No tener que adquirir ni operar infraestructura de aceleradores, y poder llegar rápidamente a un prototipo funcional, son ambas consecuencias directas del modelo administrado.",
    "takeaway": "Los servicios administrados eliminan el trabajo de infraestructura. No eliminan la alucinación, las obligaciones de cumplimiento normativo ni la mitad que le corresponde a usted en materia de seguridad."
  },
  "q:cyu-2-8-q3::opt:a": {
    "text": "Menor barrera de entrada, ya que no es necesario adquirir ni operar infraestructura de GPU"
  },
  "q:cyu-2-8-q3::opt:b": {
    "text": "Eliminación completa de la alucinación"
  },
  "q:cyu-2-8-q3::opt:c": {
    "text": "Mayor velocidad de salida al mercado, ya que se puede construir un prototipo sin un proyecto de entrenamiento"
  },
  "q:cyu-2-8-q3::opt:d": {
    "text": "Aprobación regulatoria garantizada en todas las jurisdicciones"
  },
  "q:cyu-2-8-q3::opt:e": {
    "text": "Eliminación de la necesidad de cualquier control de seguridad"
  },
  "q:cyu-2-8-q3::incorrect:b": {
    "text": "La alucinación es una propiedad de los modelos generativos sin importar quién los aloje."
  },
  "q:cyu-2-8-q3::incorrect:d": {
    "text": "AWS proporciona artefactos y controles de cumplimiento normativo; no puede garantizar la aprobación, que sigue siendo responsabilidad del cliente."
  },
  "q:cyu-2-8-q3::incorrect:e": {
    "text": "Bajo el modelo de responsabilidad compartida, el cliente siempre conserva la responsabilidad sobre el control de acceso y la protección de datos."
  },
  "q:cyu-2-8-q4": {
    "stem": "Un equipo está decidiendo entre ajustar (fine-tune) un modelo y usar recuperación con un prompt bien diseñado. ¿Qué consideración de costo es más relevante para esa decisión?",
    "explanation": "El ajuste fino es un gasto de entrenamiento único que crea un modelo personalizado persistente con costos de almacenamiento, y servir un modelo personalizado a menudo requiere throughput aprovisionado en lugar de bajo demanda. La recuperación evita todo eso, pero agranda cada prompt, por lo que traslada el costo a los tokens de entrada por solicitud.",
    "takeaway": "Ajuste fino: se paga una vez por entrenar, luego se paga por almacenar y alojar. RAG: se paga un poco más en cada llamada. El volumen decide."
  },
  "q:cyu-2-8-q4::opt:a": {
    "text": "Ninguno de los dos enfoques tiene implicaciones de costo."
  },
  "q:cyu-2-8-q4::opt:b": {
    "text": "La recuperación siempre cuesta más que el ajuste fino."
  },
  "q:cyu-2-8-q4::opt:c": {
    "text": "El ajuste fino agrega el costo de entrenamiento más almacenamiento continuo y, a menudo, alojamiento aprovisionado para el modelo personalizado, mientras que la recuperación agrega tokens de entrada por solicitud, pero ningún costo de entrenamiento."
  },
  "q:cyu-2-8-q4::opt:d": {
    "text": "El ajuste fino no tiene costo continuo una vez completado."
  },
  "q:cyu-2-8-q4::incorrect:a": {
    "text": "Ambos enfoques tienen perfiles de costo claros y distintos, que es exactamente lo que evalúa el objetivo 3.1.5."
  },
  "q:cyu-2-8-q4::incorrect:b": {
    "text": "Cuál resulta más económico depende enteramente del volumen, del tamaño del prompt y de si el conocimiento cambia con frecuencia."
  },
  "q:cyu-2-8-q4::incorrect:d": {
    "text": "Los modelos personalizados conllevan costos de almacenamiento y alojamiento después del entrenamiento."
  },
  "q:cyu-2-8-q5": {
    "stem": "¿Qué capacidad de AWS mantiene el tráfico entre una aplicación en una VPC y un servicio como Amazon Bedrock fuera de la internet pública?",
    "explanation": "AWS PrivateLink proporciona conectividad privada entre una VPC y los servicios de AWS mediante endpoints de interfaz, de modo que el tráfico no atraviesa la internet pública. Se menciona directamente en el objetivo 5.1.1 como un control para proteger los sistemas de IA. Repaso del Dominio 2 Lo que debe poder hacer ☐  Definir token, chunking, embedding, vector, transformer, modelo de difusión, modelo fundacional y LLM en una línea cada uno. ☐  Explicar por qué la búsqueda semántica encuentra pasajes que la búsqueda por palabras clave pasa por alto. ☐  Nombrar las cinco familias de casos de uso de IA generativa y ubicar cualquier escenario en una de ellas. ☐  Enumerar en orden las siete etapas del ciclo de vida del FM y decir en cuáles participa un cliente de Bedrock. ☐  Explicar el precio basado en tokens y nombrar al menos cinco palancas de costo. ☐  Definir la ingeniería de contexto y distinguirla de la ingeniería de prompts. ☐  Explicar por qué la sobrerrecuperación degrada tanto la calidad como el costo. ☐  Definir un agente de IA, describir el bucle del agente y explicar el uso de herramientas. ☐  Distinguir la memoria de corto plazo de la memoria de largo plazo del agente. ☐  Indicar qué es MCP y por qué importa. ☐  Nombrar y distinguir los patrones multiagente, especialmente supervisor frente a enjambre (swarm). ☐  Separar Strands Agents de Amazon Bedrock AgentCore, y nombrar los componentes de AgentCore. ☐  Enumerar las ventajas y las cuatro limitaciones nombradas de la IA generativa. ☐  Nombrar los factores de selección de modelos e identificar cuáles son filtros estrictos. ☐  Ubicar a Bedrock, SageMaker AI, JumpStart, AgentCore, Strands, Kiro, Amazon Q y Amazon Quick en la capa correcta. ☐  Indicar que Bedrock no utiliza los prompts del cliente para entrenar los modelos base. ☐  Explicar cuándo tienen sentido el throughput aprovisionado, el modo por lotes y el almacenamiento en caché de prompts, respectivamente. Tabla comparativa en blanco: complétela de memoria Amazon Bedrock Amazon SageMaker AI Amazon Q / Amazon Quick Propósito principal ¿Quién es el usuario? ¿Usted gestiona la infraestructura? Modelo de precios Elíjalo cuando… Versión completa: el capítulo de matrices comparativas. Diagrama en blanco: la pila agéntica Escriba las cinco capas de la Figura 2.5 de arriba hacia abajo, y nombre el servicio de AWS en cada una. Capa Servicio o componente de AWS Qué hace 1. ____________ 2. ____________ 3. ____________ 4. ____________ 5. ____________ Explique esto con sus propias palabras ↺  RECUERDO ACTIVO 1. ¿Por qué un prompt más largo cuesta más incluso cuando la cantidad de solicitudes se mantiene igual? 2. ¿Cuál es la diferencia entre la ingeniería de prompts y la ingeniería de contexto? 3. ¿Por qué recuperar más documentos puede empeorar una respuesta en lugar de mejorarla? 4. ¿Qué problema resuelve MCP que una integración de API personalizada no resuelve? 5. ¿Dónde termina Strands Agents y dónde empieza AgentCore? 6. ¿Por qué ningún modelo puede certificarse como libre de alucinaciones? Tarjetas de memoria (flashcards) de términos clave del Dominio 2 Respuesta Token La unidad de texto que procesa un modelo; la base de los límites de contexto, el precio y la latencia. Embedding Un vector numérico en el que la similitud semántica corresponde a la proximidad en el espacio vectorial. Chunking Dividir documentos extensos en pasajes lo suficientemente pequeños como para generar embeddings y recuperarlos de forma significativa. Transformer Arquitectura basada en atención detrás de los LLM modernos; procesa secuencias en paralelo. Modelo de difusión Genera imágenes eliminando ruido de forma iterativa, guiado por un prompt. Modelo multimodal Acepta o produce más de una modalidad, por ejemplo texto más imagen. Modelo fundacional Modelo grande preentrenado de forma amplia con datos sin etiquetar, adaptable a muchas tareas posteriores. Ciclo de vida del FM Selección de datos, selección del modelo, preentrenamiento, ajuste fino, evaluación, implementación, retroalimentación. Precio basado en tokens Se factura por token de entrada y de salida, generalmente a tarifas distintas, con la salida más costosa. Reutiliza un prefijo de prompt repetido a una tarifa reducida en lugar del precio completo en cada llamada. Inferencia por lotes Procesamiento masivo asíncrono con un descuento respecto de las tarifas bajo demanda. Throughput aprovisionado Capacidad reservada facturada por tiempo; throughput garantizado, desperdiciado cuando está inactivo. Ingeniería de contexto Decidir qué ocupa la ventana de contexto en cada llamada y de qué forma. Agente de IA Un modelo al que se le da un objetivo, herramientas y memoria, y que planifica y ejecuta acciones de múltiples pasos. Bucle del agente Objetivo, planificar, actuar, observar, repetir hasta que se cumpla el objetivo. Memoria de corto plazo Estado de la sesión mantenido en la ventana de contexto. Memoria de largo plazo Hechos persistidos fuera de la ventana de contexto y recuperados entre sesiones. MCP Estándar abierto para conectar agentes con herramientas y fuentes de datos externas. Patrón de supervisor Un agente líder descompone un objetivo y delega a agentes especialistas. Patrón de enjambre (swarm) Agentes pares colaboran sin un coordinador fijo. Strands Agents SDK de código abierto impulsado por el modelo para construir agentes. Amazon Bedrock AgentCore Infraestructura administrada de agentes: Runtime, Memory, Gateway, Identity, Observability. Kiro IDE agéntico guiado por especificaciones; sucesor de Amazon Q Developer para la asistencia en el IDE. Amazon Quick Evolución de QuickSight: BI más investigación agéntica, chat y automatización para usuarios de negocio. Alucinación Salida fluida y segura que es fácticamente incorrecta o fabricada. No determinismo El mismo prompt puede producir una salida diferente en distintas llamadas. Privacidad de datos de Bedrock Los prompts y las completions del cliente no se usan para entrenar los FM base y no se comparten con los proveedores. Hoja de referencia del Dominio 2",
    "takeaway": "PrivateLink = conectividad privada, sin internet pública. Aparece tanto en el Dominio 2 como en el Dominio 5."
  },
  "q:cyu-2-8-q5::opt:a": {
    "text": "AWS PrivateLink"
  },
  "q:cyu-2-8-q5::opt:b": {
    "text": "Amazon Macie"
  },
  "q:cyu-2-8-q5::opt:c": {
    "text": "Amazon CloudFront"
  },
  "q:cyu-2-8-q5::opt:d": {
    "text": "AWS Artifact"
  },
  "q:cyu-2-8-q5::incorrect:b": {
    "text": "Macie descubre y clasifica datos sensibles en Amazon S3."
  },
  "q:cyu-2-8-q5::incorrect:c": {
    "text": "CloudFront es una red de distribución de contenido (CDN) para distribuir contenido a los usuarios finales."
  },
  "q:cyu-2-8-q5::incorrect:d": {
    "text": "Artifact proporciona acceso bajo demanda a los informes de cumplimiento normativo de AWS."
  },
  "q:cyu-service-selection-1-q4": {
    "stem": "Un equipo quiere implementar un modelo fundacional de código abierto en endpoints dentro de su propia cuenta de AWS, con acceso a los artefactos del modelo. ¿Qué servicio se ajusta a esto?",
    "explanation": "SageMaker JumpStart es el centro de modelos para modelos preentrenados y de código abierto, implementables en endpoints de SageMaker dentro de la propia cuenta del cliente, con los artefactos disponibles.",
    "takeaway": "Pesos abiertos en su propia cuenta equivale a JumpStart. API administrada sin servidor equivale a Bedrock."
  },
  "q:cyu-service-selection-1-q4::opt:a": {
    "text": "Inferencia bajo demanda de Amazon Bedrock"
  },
  "q:cyu-service-selection-1-q4::opt:b": {
    "text": "Amazon Quick"
  },
  "q:cyu-service-selection-1-q4::opt:c": {
    "text": "Amazon Comprehend"
  },
  "q:cyu-service-selection-1-q4::opt:d": {
    "text": "Amazon SageMaker JumpStart"
  },
  "q:cyu-service-selection-1-q4::incorrect:a": {
    "text": "La inferencia bajo demanda de Bedrock sirve modelos a través de una API administrada, sin exponer los artefactos ni alojarlos en su cuenta."
  },
  "q:cyu-service-selection-1-q4::incorrect:b": {
    "text": "Amazon Quick es un espacio de trabajo agéntico y de inteligencia de negocio."
  },
  "q:cyu-service-selection-1-q4::incorrect:c": {
    "text": "Comprehend es un servicio de PLN preentrenado y fijo."
  },
  "q:cyu-service-selection-1-q9": {
    "stem": "¿Qué afirmación describe correctamente la relación entre Strands Agents y Amazon Bedrock AgentCore?",
    "explanation": "Strands Agents proporciona en código el bucle de agente impulsado por el modelo. AgentCore proporciona la capa de producción: runtime con aislamiento de sesiones, memoria, un gateway MCP, identidad y observabilidad. AgentCore es agnóstico respecto del framework, por lo que los agentes construidos con Strands o con otros frameworks pueden ejecutarse en él.",
    "takeaway": "Constrúyalo con Strands, ejecútelo en AgentCore. Esta distinción es nueva en la versión 1.1 y muy probable que se evalúe."
  },
  "q:cyu-service-selection-1-q9::opt:a": {
    "text": "Ambos son modelos fundacionales."
  },
  "q:cyu-service-selection-1-q9::opt:b": {
    "text": "Strands Agents es el SDK de código abierto utilizado para construir un agente; AgentCore es la infraestructura administrada utilizada para ejecutarlo en producción. Suelen usarse juntos."
  },
  "q:cyu-service-selection-1-q9::opt:c": {
    "text": "AgentCore es un SDK y Strands Agents es un runtime de alojamiento."
  },
  "q:cyu-service-selection-1-q9::opt:d": {
    "text": "Son productos competidores y no pueden usarse juntos."
  },
  "q:cyu-service-selection-1-q9::incorrect:a": {
    "text": "Ninguno de los dos es un modelo."
  },
  "q:cyu-service-selection-1-q9::incorrect:c": {
    "text": "Invierte los dos."
  },
  "q:cyu-service-selection-1-q9::incorrect:d": {
    "text": "Están diseñados para complementarse entre sí."
  },
  "q:cyu-service-selection-1-q12": {
    "stem": "¿Qué servicios de AWS usaría un equipo para hacer seguimiento y controlar el gasto en una carga de trabajo de IA generativa?",
    "explanation": "AWS Budgets establece umbrales y envía alertas cuando el gasto se acerca a ellos o los supera, y Cost Explorer analiza y visualiza el costo y el uso a lo largo del tiempo. Ambos están en la categoría de gestión financiera en la nube (Cloud Financial Management) de la lista dentro del alcance.",
    "takeaway": "El control de costos equivale a Budgets más Cost Explorer. Un par pequeño pero que se evalúa de forma confiable."
  },
  "q:cyu-service-selection-1-q12::opt:a": {
    "text": "Amazon Comprehend y Amazon Polly"
  },
  "q:cyu-service-selection-1-q12::opt:b": {
    "text": "AWS Budgets y AWS Cost Explorer"
  },
  "q:cyu-service-selection-1-q12::opt:c": {
    "text": "Amazon Macie y AWS Artifact"
  },
  "q:cyu-service-selection-1-q12::opt:d": {
    "text": "AWS Glue y Amazon EMR"
  },
  "q:cyu-service-selection-1-q12::incorrect:a": {
    "text": "Comprehend y Polly son servicios de IA sin función de gestión de costos."
  },
  "q:cyu-service-selection-1-q12::incorrect:c": {
    "text": "Macie clasifica datos sensibles y Artifact proporciona informes de cumplimiento normativo."
  },
  "q:cyu-service-selection-1-q12::incorrect:d": {
    "text": "Glue y EMR son servicios de procesamiento de datos."
  },
  "q:cyu-service-selection-2-q5": {
    "stem": "Cordillera Bank debe seleccionar un modelo fundacional para un asistente orientado a clientes. ¿Cuáles DOS factores actúan como filtros estrictos que eliminan candidatos directamente, en lugar de disyuntivas que deben equilibrarse? (Seleccione DOS).",
    "explanation": "Un modelo no disponible en una Región permitida no puede usarse en absoluto, sin importar su calidad, y un modelo que no puede aceptar la modalidad requerida no puede realizar la tarea. Ambas son eliminaciones binarias. El costo, la latencia y el tamaño del modelo son criterios de optimización que se sopesan entre los modelos que superan los filtros.",
    "takeaway": "Primero los filtros: modalidad, cumplimiento normativo, Región, ventana de contexto. Optimizar después entre los sobrevivientes."
  },
  "q:cyu-service-selection-2-q5::opt:a": {
    "text": "Disponibilidad en una Región que satisfaga los requisitos de residencia de datos"
  },
  "q:cyu-service-selection-2-q5::opt:b": {
    "text": "Costo por token"
  },
  "q:cyu-service-selection-2-q5::opt:c": {
    "text": "Soporte para las modalidades de entrada y salida requeridas"
  },
  "q:cyu-service-selection-2-q5::opt:d": {
    "text": "Latencia"
  },
  "q:cyu-service-selection-2-q5::opt:e": {
    "text": "Tamaño del modelo"
  },
  "q:cyu-service-selection-2-q5::incorrect:b": {
    "text": "El costo es una disyuntiva, no una prueba de viabilidad."
  },
  "q:cyu-service-selection-2-q5::incorrect:d": {
    "text": "La latencia se sopesa frente a la calidad y el costo."
  },
  "q:cyu-service-selection-2-q5::incorrect:e": {
    "text": "El tamaño del modelo es un indicador indirecto de la capacidad, el costo y la velocidad, todos los cuales son disyuntivas."
  },
  "q:cyu-service-selection-2-q10": {
    "stem": "Relacione cada oferta de AWS con la capa de la pila agéntica que ocupa.",
    "explanation": "Estos cinco son el conjunto más nuevo y más fácil de confundir del examen. Cada uno se ubica en una capa distinta: acceso al modelo, construcción, ejecución, herramientas para desarrolladores y el producto terminado para el usuario de negocio.",
    "takeaway": "Bedrock proporciona el modelo, Strands construye el agente, AgentCore lo ejecuta, Kiro es donde trabajan los desarrolladores, Amazon Quick es lo que reciben los usuarios de negocio."
  },
  "q:cyu-service-selection-2-q10::matchprompt:0": {
    "text": "Amazon Bedrock"
  },
  "q:cyu-service-selection-2-q10::matchprompt:1": {
    "text": "Strands Agents"
  },
  "q:cyu-service-selection-2-q10::matchprompt:2": {
    "text": "Amazon Bedrock AgentCore"
  },
  "q:cyu-service-selection-2-q10::matchprompt:3": {
    "text": "Kiro"
  },
  "q:cyu-service-selection-2-q10::matchprompt:4": {
    "text": "Amazon Quick"
  },
  "q:cyu-service-selection-2-q10::matchoption:0": {
    "text": "Acceso a modelos fundacionales"
  },
  "q:cyu-service-selection-2-q10::matchoption:1": {
    "text": "SDK de agentes"
  },
  "q:cyu-service-selection-2-q10::matchoption:2": {
    "text": "Infraestructura de producción de agentes"
  },
  "q:cyu-service-selection-2-q10::matchoption:3": {
    "text": "IDE para desarrolladores guiado por especificaciones"
  },
  "q:cyu-service-selection-2-q10::matchoption:4": {
    "text": "Espacio de trabajo agéntico para usuarios de negocio"
  }
});
})();
