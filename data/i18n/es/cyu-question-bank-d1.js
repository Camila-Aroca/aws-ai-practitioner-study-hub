(function(){
  "use strict";
  window.I18N_ES_CYU = Object.assign({}, window.I18N_ES_CYU || {}, {
  "q:cyu-1-1-q1": {
    "stem": "¿Qué enunciado describe correctamente la relación entre el aprendizaje automático (machine learning) y el aprendizaje profundo (deep learning)?",
    "explanation": "La jerarquía está estrictamente anidada: la IA contiene al ML, y el ML contiene al aprendizaje profundo. El aprendizaje profundo se distingue por el uso de redes neuronales con muchas capas, lo que le permite aprender representaciones jerárquicas directamente a partir de datos no estructurados.",
    "takeaway": "IA ⊃ ML ⊃ aprendizaje profundo ⊃ IA generativa ⊃ IA agéntica. Dibuja los cuadros anidados una sola vez y nunca volverás a fallar esta pregunta."
  },
  "q:cyu-1-1-q1::opt:a": {
    "text": "El aprendizaje profundo y el aprendizaje automático son campos separados sin superposición."
  },
  "q:cyu-1-1-q1::opt:b": {
    "text": "El aprendizaje profundo es un subconjunto del aprendizaje automático que utiliza redes neuronales de múltiples capas."
  },
  "q:cyu-1-1-q1::opt:c": {
    "text": "El aprendizaje profundo reemplazó al aprendizaje automático y lo volvió obsoleto."
  },
  "q:cyu-1-1-q1::opt:d": {
    "text": "El aprendizaje automático es un subconjunto del aprendizaje profundo que evita las redes neuronales."
  },
  "q:cyu-1-1-q1::incorrect:a": {
    "text": "No son campos separados; el aprendizaje profundo está contenido dentro del aprendizaje automático."
  },
  "q:cyu-1-1-q1::incorrect:c": {
    "text": "El ML tradicional sigue siendo la herramienta adecuada para la mayoría de los problemas tabulares, y el examen evalúa activamente ese criterio en el objetivo 1.2.6."
  },
  "q:cyu-1-1-q1::incorrect:d": {
    "text": "Invierte la relación de contención. El aprendizaje automático es la categoría más amplia."
  },
  "q:cyu-1-1-q2": {
    "stem": "Un equipo desarrolla un sistema que marca para revisión manual todo reclamo de seguro que supere un monto fijo. No se utilizan datos para aprender el umbral; un gerente lo eligió. ¿Cómo debe clasificarse este sistema?",
    "explanation": "El aprendizaje automático requiere que el sistema aprenda su comportamiento a partir de datos. En este caso, una persona estableció la regla, por lo que no se aprende nada. Los sistemas basados en reglas y los sistemas expertos se ubican dentro de la definición amplia de IA sin ser ML.",
    "takeaway": "La prueba del ML siempre es: \"¿el comportamiento provino de los datos o de una persona?\""
  },
  "q:cyu-1-1-q2::opt:a": {
    "text": "Es aprendizaje automático, porque toma decisiones automatizadas."
  },
  "q:cyu-1-1-q2::opt:b": {
    "text": "Es IA en el sentido amplio, pero no es aprendizaje automático."
  },
  "q:cyu-1-1-q2::opt:c": {
    "text": "Es aprendizaje profundo, porque procesa los reclamos automáticamente."
  },
  "q:cyu-1-1-q2::opt:d": {
    "text": "Es IA generativa, porque produce una salida."
  },
  "q:cyu-1-1-q2::incorrect:a": {
    "text": "La automatización por sí sola no convierte algo en ML. Falta el criterio de aprender a partir de datos."
  },
  "q:cyu-1-1-q2::incorrect:c": {
    "text": "No hay ninguna red neuronal ni ningún tipo de aprendizaje."
  },
  "q:cyu-1-1-q2::incorrect:d": {
    "text": "Generar una marca no equivale a generar contenido nuevo."
  },
  "q:cyu-1-1-q3": {
    "stem": "¿Cuáles DOS de las siguientes opciones son aprendidas por el algoritmo de entrenamiento en lugar de ser establecidas por un practicante antes de que comience el entrenamiento?",
    "explanation": "Los pesos y los coeficientes de regresión son parámetros del modelo: el algoritmo los ajusta durante el entrenamiento para ajustarse a los datos. La tasa de aprendizaje, k y el número de capas son hiperparámetros, elegidos antes de que comience el entrenamiento.",
    "takeaway": "Los parámetros se aprenden; los hiperparámetros se configuran. Si puedes cambiarlo sin ningún dato, es un hiperparámetro."
  },
  "q:cyu-1-1-q3::opt:a": {
    "text": "Los pesos de una red neuronal"
  },
  "q:cyu-1-1-q3::opt:b": {
    "text": "La tasa de aprendizaje"
  },
  "q:cyu-1-1-q3::opt:c": {
    "text": "Los coeficientes de una regresión lineal"
  },
  "q:cyu-1-1-q3::opt:d": {
    "text": "El número de clústeres, k"
  },
  "q:cyu-1-1-q3::opt:e": {
    "text": "El número de capas ocultas"
  },
  "q:cyu-1-1-q3::incorrect:b": {
    "text": "La tasa de aprendizaje controla cómo avanza el entrenamiento y se establece de antemano."
  },
  "q:cyu-1-1-q3::incorrect:d": {
    "text": "k es elegido por el practicante antes de ejecutar k-means."
  },
  "q:cyu-1-1-q3::incorrect:e": {
    "text": "La profundidad de la red es una decisión arquitectónica que se toma antes del entrenamiento."
  },
  "q:cyu-1-1-q4": {
    "stem": "Relaciona cada término con su definición.",
    "explanation": "Estos cinco son los términos que más se intercambian en los distractores. Observa en particular que \"algoritmo\" describe un proceso y \"modelo\" describe un artefacto; una pregunta que los usa indistintamente está evaluando exactamente esto.",
    "takeaway": "Modelo = sustantivo, el resultado. Algoritmo = la receta. Inferencia = el acto de usar el resultado."
  },
  "q:cyu-1-1-q4::matchprompt:0": {
    "text": "Modelo"
  },
  "q:cyu-1-1-q4::matchprompt:1": {
    "text": "Algoritmo"
  },
  "q:cyu-1-1-q4::matchprompt:2": {
    "text": "Inferencia"
  },
  "q:cyu-1-1-q4::matchprompt:3": {
    "text": "Visión artificial (computer vision)"
  },
  "q:cyu-1-1-q4::matchprompt:4": {
    "text": "Sesgo"
  },
  "q:cyu-1-1-q4::matchoption:0": {
    "text": "El artefacto entrenado que asigna una salida a cada entrada"
  },
  "q:cyu-1-1-q4::matchoption:1": {
    "text": "El procedimiento utilizado para aprender a partir de datos"
  },
  "q:cyu-1-1-q4::matchoption:2": {
    "text": "Usar un modelo entrenado con nuevas entradas"
  },
  "q:cyu-1-1-q4::matchoption:3": {
    "text": "El campo dedicado a extraer significado de las imágenes"
  },
  "q:cyu-1-1-q4::matchoption:4": {
    "text": "Sesgo sistemático e injusto entre grupos"
  },
  "q:cyu-1-1-q5": {
    "stem": "Volta Logistics implementa un sistema que recibe un objetivo (\"resolver este envío retrasado\"), consulta la API de seguimiento, revisa el registro del cliente, redacta una oferta de compensación, la aplica si está por debajo de un umbral y, en caso contrario, la escala. ¿Qué descripción encaja mejor?",
    "explanation": "El sistema planifica una secuencia de pasos, llama a herramientas externas, mantiene el estado a lo largo de esos pasos y toma una acción por sí mismo, escalando solo cuando se cumple una condición. La acción autónoma de múltiples pasos orientada a un objetivo es la propiedad que define a la IA agéntica.",
    "takeaway": "Agéntico = objetivo + planificación + llamadas a herramientas + acción. Si el sistema solo responde, no es agéntico."
  },
  "q:cyu-1-1-q5::opt:a": {
    "text": "Aprendizaje automático supervisado tradicional"
  },
  "q:cyu-1-1-q5::opt:b": {
    "text": "Un pipeline de visión artificial"
  },
  "q:cyu-1-1-q5::opt:c": {
    "text": "Una aplicación de IA agéntica"
  },
  "q:cyu-1-1-q5::opt:d": {
    "text": "Un chatbot de IA generativa"
  },
  "q:cyu-1-1-q5::incorrect:a": {
    "text": "Nada de esto es una única predicción a partir de datos de entrenamiento etiquetados."
  },
  "q:cyu-1-1-q5::incorrect:b": {
    "text": "No hay imágenes involucradas."
  },
  "q:cyu-1-1-q5::incorrect:d": {
    "text": "Un chatbot responde; no llama a APIs ni ejecuta una acción de negocio de principio a fin."
  },
  "q:cyu-1-1-q6": {
    "stem": "Un modelo tiene un desempeño extremadamente bueno con sus datos de entrenamiento, pero deficiente con datos nuevos. ¿Qué término describe esto?",
    "explanation": "El sobreajuste (overfitting) significa que el modelo memorizó los datos de entrenamiento, incluido su ruido, y por lo tanto no logra generalizar. La señal característica es una gran brecha entre el desempeño en entrenamiento y el desempeño en validación o prueba.",
    "takeaway": "Excelente en entrenamiento, malo con datos nuevos = sobreajuste. Malo en ambos = subajuste."
  },
  "q:cyu-1-1-q6::opt:a": {
    "text": "Sobreajuste (overfitting)"
  },
  "q:cyu-1-1-q6::opt:b": {
    "text": "Inferencia"
  },
  "q:cyu-1-1-q6::opt:c": {
    "text": "Subajuste (underfitting)"
  },
  "q:cyu-1-1-q6::opt:d": {
    "text": "Regularización"
  },
  "q:cyu-1-1-q6::incorrect:b": {
    "text": "La inferencia es el uso del modelo, no una descripción de su ajuste."
  },
  "q:cyu-1-1-q6::incorrect:c": {
    "text": "El subajuste es lo opuesto: un desempeño deficiente también en los datos de entrenamiento, porque el modelo es demasiado simple."
  },
  "q:cyu-1-1-q6::incorrect:d": {
    "text": "La regularización es una técnica utilizada para reducir el sobreajuste, no el nombre del problema."
  },
  "q:cyu-1-2-q1": {
    "stem": "Salud Norte procesa videos diagnósticos cargados de hasta 45 minutos de duración. Los médicos cargan un archivo y regresan más tarde para ver los resultados. Las cargas útiles son grandes y el procesamiento toma varios minutos por archivo. ¿Qué tipo de inferencia es más adecuado?",
    "explanation": "La inferencia asíncrona está diseñada para cargas útiles grandes y tiempos de procesamiento prolongados en los que quien realiza la solicitud no espera una respuesta síncrona. Las solicitudes se ponen en cola y los resultados se recuperan cuando están listos, que es exactamente el patrón descrito.",
    "takeaway": "\"Carga útil grande\" más \"procesamiento prolongado\" más \"el usuario no espera\" es la huella distintiva de lo asíncrono."
  },
  "q:cyu-1-2-q1::opt:a": {
    "text": "Inferencia asíncrona"
  },
  "q:cyu-1-2-q1::opt:b": {
    "text": "Inferencia en tiempo real"
  },
  "q:cyu-1-2-q1::opt:c": {
    "text": "Inferencia sin servidor (serverless)"
  },
  "q:cyu-1-2-q1::opt:d": {
    "text": "Inferencia por lotes (batch)"
  },
  "q:cyu-1-2-q1::incorrect:b": {
    "text": "Los endpoints en tiempo real son para respuestas síncronas de menos de un segundo y no son adecuados para procesamientos de varios minutos."
  },
  "q:cyu-1-2-q1::incorrect:c": {
    "text": "Lo sin servidor aborda el tráfico intermitente y el costo por inactividad, no las cargas útiles grandes ni los tiempos de ejecución prolongados."
  },
  "q:cyu-1-2-q1::incorrect:d": {
    "text": "El procesamiento por lotes puntúa un conjunto de datos existente según un cronograma. Aquí, los archivos individuales llegan en momentos impredecibles."
  },
  "q:cyu-1-2-q2": {
    "stem": "Andes Retail puntúa el riesgo de abandono (churn) de toda su base de clientes de 4 millones de filas una vez por semana y escribe las puntuaciones en Amazon S3 para el equipo de marketing. No se necesita ningún endpoint entre ejecuciones. ¿Qué tipo de inferencia es esta?",
    "explanation": "Un conjunto de datos completo, procesado según un cronograma, con resultados escritos en almacenamiento y sin un endpoint persistente, es la definición de inferencia por lotes. También es la opción más económica, porque el cómputo se ejecuta únicamente mientras dura el trabajo.",
    "takeaway": "Conjunto de datos completo + cronograma + escritura en almacenamiento = por lotes."
  },
  "q:cyu-1-2-q2::opt:a": {
    "text": "Tiempo real"
  },
  "q:cyu-1-2-q2::opt:b": {
    "text": "Sin servidor"
  },
  "q:cyu-1-2-q2::opt:c": {
    "text": "Asíncrona"
  },
  "q:cyu-1-2-q2::opt:d": {
    "text": "Por lotes"
  },
  "q:cyu-1-2-q2::incorrect:a": {
    "text": "Nadie está esperando una predicción individual."
  },
  "q:cyu-1-2-q2::incorrect:b": {
    "text": "Lo sin servidor sigue atendiendo solicitudes individuales; simplemente escala a cero cuando está inactivo."
  },
  "q:cyu-1-2-q2::incorrect:c": {
    "text": "Lo asíncrono maneja solicitudes individuales que van llegando, no un barrido programado de un conjunto de datos completo."
  },
  "q:cyu-1-2-q3": {
    "stem": "Una herramienta interna de Lumen Legal recibe aproximadamente 30 solicitudes en una tarde ocupada y ninguna durante varios días seguidos. Las respuestas deben devolverse en menos de un segundo cuando llegan. El equipo quiere evitar pagar por capacidad inactiva. ¿Qué opción de inferencia encaja mejor?",
    "explanation": "La inferencia sin servidor proporciona respuestas de baja latencia mientras escala a cero durante los períodos de inactividad, por lo que no se cobra por la capacidad que no se está utilizando. El tráfico intermitente e impredecible con un requisito de menos de un segundo es el caso de manual.",
    "takeaway": "Cuando un enunciado menciona períodos de inactividad y la falta de disposición a pagar por ellos, lo sin servidor casi siempre es la respuesta."
  },
  "q:cyu-1-2-q3::opt:a": {
    "text": "Un endpoint en tiempo real aprovisionado que se ejecuta de forma continua"
  },
  "q:cyu-1-2-q3::opt:b": {
    "text": "Inferencia por lotes"
  },
  "q:cyu-1-2-q3::opt:c": {
    "text": "Inferencia sin servidor"
  },
  "q:cyu-1-2-q3::opt:d": {
    "text": "Inferencia asíncrona"
  },
  "q:cyu-1-2-q3::incorrect:a": {
    "text": "Esto cumple con el requisito de latencia, pero no cumple con el requisito de costo, que el enunciado indica explícitamente."
  },
  "q:cyu-1-2-q3::incorrect:b": {
    "text": "El procesamiento por lotes no puede entregar una respuesta interactiva de menos de un segundo."
  },
  "q:cyu-1-2-q3::incorrect:d": {
    "text": "Lo asíncrono introduce latencia por la cola de espera y está orientado a cargas útiles grandes o lentas."
  },
  "q:cyu-1-2-q4": {
    "stem": "¿Cuáles DOS de las siguientes opciones son ejemplos de datos no estructurados?",
    "explanation": "Los datos no estructurados no tienen un esquema predefinido. Tanto los documentos escaneados como las grabaciones de audio requieren extracción o transcripción antes de poder analizarse, lo cual es la señal práctica de los datos no estructurados.",
    "takeaway": "Pregúntate: \"¿podría consultar esto con SQL tal como está?\" Si no, es no estructurado."
  },
  "q:cyu-1-2-q4::opt:a": {
    "text": "Una tabla relacional de ventas mensuales por tienda"
  },
  "q:cyu-1-2-q4::opt:b": {
    "text": "Contratos en PDF escaneados"
  },
  "q:cyu-1-2-q4::opt:c": {
    "text": "Llamadas grabadas de un centro de contacto"
  },
  "q:cyu-1-2-q4::opt:d": {
    "text": "Una exportación CSV de datos demográficos de clientes"
  },
  "q:cyu-1-2-q4::opt:e": {
    "text": "Una serie temporal de lecturas de temperatura horarias"
  },
  "q:cyu-1-2-q4::incorrect:a": {
    "text": "Una tabla relacional es estructurada por definición."
  },
  "q:cyu-1-2-q4::incorrect:d": {
    "text": "Un CSV tiene un esquema de columnas fijo, por lo que es estructurado."
  },
  "q:cyu-1-2-q4::incorrect:e": {
    "text": "Una serie temporal es un dato estructurado que, además, tiene un orden temporal."
  },
  "q:cyu-1-2-q5": {
    "stem": "Salud Norte cuenta con 800 imágenes médicas que los radiólogos han etiquetado y 60,000 imágenes sin etiquetar. Etiquetar más resulta costoso. ¿Qué enfoque de aprendizaje aprovecha mejor estos datos?",
    "explanation": "El aprendizaje semisupervisado está diseñado específicamente para un conjunto pequeño de datos etiquetados combinado con un conjunto grande de datos sin etiquetar. Utiliza los ejemplos etiquetados para anclar la tarea mientras aprovecha la estructura de los datos sin etiquetar, que es exactamente la situación descrita.",
    "takeaway": "Conjunto etiquetado pequeño + conjunto sin etiquetar grande + etiquetado costoso = semisupervisado."
  },
  "q:cyu-1-2-q5::opt:a": {
    "text": "Aprendizaje por refuerzo"
  },
  "q:cyu-1-2-q5::opt:b": {
    "text": "Aprendizaje supervisado usando solo las 800 imágenes etiquetadas"
  },
  "q:cyu-1-2-q5::opt:c": {
    "text": "Aprendizaje no supervisado sobre las 60,800 imágenes"
  },
  "q:cyu-1-2-q5::opt:d": {
    "text": "Aprendizaje semisupervisado"
  },
  "q:cyu-1-2-q5::incorrect:a": {
    "text": "Aquí no hay entorno, ni acciones, ni señal de recompensa."
  },
  "q:cyu-1-2-q5::incorrect:b": {
    "text": "Válido pero derrochador: descarta 60,000 imágenes que contienen una señal aprovechable."
  },
  "q:cyu-1-2-q5::incorrect:c": {
    "text": "El aprendizaje no supervisado no puede producir la etiqueta diagnóstica que necesita el hospital, porque nunca ve el objetivo (target)."
  },
  "q:cyu-1-2-q6": {
    "stem": "Ordena lo siguiente de la categoría más amplia a la más específica.",
    "explanation": "La inteligencia artificial es el campo general. El aprendizaje automático es el subconjunto que aprende a partir de datos. El aprendizaje profundo es el subconjunto del ML que utiliza redes neuronales de múltiples capas. La IA generativa se construye sobre arquitecturas de aprendizaje profundo como los transformers y los modelos de difusión. La IA agéntica añade planificación, memoria y uso de herramientas sobre los modelos generativos.",
    "takeaway": "Cinco cuadros anidados, en ese orden, siempre.",
    "sequenceLogic": "Cada paso reduce la definición añadiendo un requisito: aprender a partir de datos, luego profundidad neuronal, luego generación de contenido, luego acción autónoma de múltiples pasos."
  },
  "q:cyu-1-2-q6::orderitem:0": {
    "text": "Aprendizaje profundo"
  },
  "q:cyu-1-2-q6::orderitem:1": {
    "text": "Inteligencia artificial"
  },
  "q:cyu-1-2-q6::orderitem:2": {
    "text": "IA agéntica"
  },
  "q:cyu-1-2-q6::orderitem:3": {
    "text": "Aprendizaje automático"
  },
  "q:cyu-1-2-q6::orderitem:4": {
    "text": "IA generativa"
  },
  "q:cyu-1-3-q1": {
    "stem": "Un equipo de nómina pregunta si el aprendizaje automático debería calcular la retención de impuestos obligatoria para cada empleado. El cálculo está definido por legislación publicada y debe ser exactamente correcto. ¿Cuál es la recomendación adecuada?",
    "explanation": "La guía del examen nombra esta situación directamente: el ML no es apropiado cuando se requiere un resultado específico y exacto en lugar de una predicción. La regla está publicada, es determinista y de cumplimiento legal obligatorio, por lo que aproximarla con un modelo introduce error y costo sin ningún beneficio.",
    "takeaway": "Las respuestas exactas, legisladas y basadas en fórmulas son tarea del código, no de un modelo."
  },
  "q:cyu-1-3-q1::opt:a": {
    "text": "Entrenar un modelo de regresión con registros históricos de nómina."
  },
  "q:cyu-1-3-q1::opt:b": {
    "text": "Usar detección de anomalías para detectar retenciones incorrectas."
  },
  "q:cyu-1-3-q1::opt:c": {
    "text": "Usar un modelo fundacional con prompting few-shot."
  },
  "q:cyu-1-3-q1::opt:d": {
    "text": "Implementar el cálculo publicado como lógica de negocio determinista; el ML no es apropiado."
  },
  "q:cyu-1-3-q1::incorrect:a": {
    "text": "Un modelo de regresión produciría valores aproximados, lo cual es inaceptable para una cifra de carácter legal."
  },
  "q:cyu-1-3-q1::incorrect:b": {
    "text": "La detección de anomalías podría complementar una implementación correcta, pero no reemplaza el cálculo en sí, y la pregunta plantea cómo producir la cifra."
  },
  "q:cyu-1-3-q1::incorrect:c": {
    "text": "Los modelos fundacionales no son deterministas, que es lo opuesto de lo que se requiere."
  },
  "q:cyu-1-3-q2": {
    "stem": "¿Cuáles DOS condiciones sugieren con mayor fuerza que una solución de aprendizaje automático NO es apropiada? (Selecciona DOS.)",
    "explanation": "La guía del examen nombra explícitamente dos condiciones: situaciones en las que se necesita un resultado específico en lugar de una predicción, y situaciones en las que el análisis costo-beneficio no respalda la inversión. Ambas aparecen aquí, en esencia, de manera literal.",
    "takeaway": "Los dos desencadenantes oficiales de \"no usar ML\" son la exactitud y el costo-beneficio. Apréndelos como un par."
  },
  "q:cyu-1-3-q2::opt:a": {
    "text": "La organización cuenta con millones de ejemplos históricos etiquetados."
  },
  "q:cyu-1-3-q2::opt:b": {
    "text": "La tarea debe producir un resultado garantizado y exacto en todo momento."
  },
  "q:cyu-1-3-q2::opt:c": {
    "text": "El problema involucra texto no estructurado."
  },
  "q:cyu-1-3-q2::opt:d": {
    "text": "El beneficio anual esperado es mucho menor que el costo de construir y mantener el modelo."
  },
  "q:cyu-1-3-q2::opt:e": {
    "text": "La salida se utiliza para clasificar elementos para revisión humana."
  },
  "q:cyu-1-3-q2::incorrect:a": {
    "text": "La abundancia de datos etiquetados es un argumento sólido a favor del ML."
  },
  "q:cyu-1-3-q2::incorrect:c": {
    "text": "El texto no estructurado es una fortaleza clásica del ML y de los modelos fundacionales (FM)."
  },
  "q:cyu-1-3-q2::incorrect:e": {
    "text": "Clasificar para revisión humana es uno de los patrones de valor nombrados en el objetivo 1.2.1."
  },
  "q:cyu-1-3-q3": {
    "stem": "Andes Retail debe etiquetar 200,000 fotografías de productos con color, material y categoría. Una persona puede etiquetar unas 60 fotos por hora. ¿Qué patrón de valor aporta una solución de ML en este caso?",
    "explanation": "Es una tarea que una persona puede realizar correctamente, pero no al volumen requerido. Aplicar ML para alcanzar una escala que los humanos no pueden lograr es precisamente el patrón de valor de escalabilidad nombrado en el objetivo 1.2.1.",
    "takeaway": "Patrones de valor que debes poder nombrar: asistencia en la toma de decisiones, escalabilidad, automatización, personalización."
  },
  "q:cyu-1-3-q3::opt:a": {
    "text": "Cumplimiento normativo"
  },
  "q:cyu-1-3-q3::opt:b": {
    "text": "Determinismo"
  },
  "q:cyu-1-3-q3::opt:c": {
    "text": "Escalabilidad"
  },
  "q:cyu-1-3-q3::opt:d": {
    "text": "Gobernanza de datos"
  },
  "q:cyu-1-3-q3::incorrect:a": {
    "text": "El etiquetado de fotos no tiene ningún motivador regulatorio en este escenario."
  },
  "q:cyu-1-3-q3::incorrect:b": {
    "text": "El ML introduce una salida probabilística; no añade determinismo."
  },
  "q:cyu-1-3-q3::incorrect:d": {
    "text": "La gobernanza es una preocupación de control, no el valor que se está creando."
  },
  "q:cyu-1-3-q4": {
    "stem": "Cordillera Bank desarrolla un modelo que clasifica las transacciones según el riesgo de fraude y presenta las 50 principales cada hora a un analista humano, quien toma la decisión final. ¿Qué patrón de valor es este?",
    "explanation": "El modelo reduce un volumen inmanejable a un conjunto revisable, pero la decisión sigue en manos de una persona. La guía del examen nombra \"asistir en la toma de decisiones humanas\" como un patrón de valor distinto de la automatización, y la presencia del revisor humano es el detalle decisivo.",
    "takeaway": "Si una persona sigue decidiendo, es asistencia. Si el sistema actúa, es automatización."
  },
  "q:cyu-1-3-q4::opt:a": {
    "text": "Reducción de dimensionalidad"
  },
  "q:cyu-1-3-q4::opt:b": {
    "text": "Asistir en la toma de decisiones humanas"
  },
  "q:cyu-1-3-q4::opt:c": {
    "text": "Automatización total del proceso de fraude"
  },
  "q:cyu-1-3-q4::opt:d": {
    "text": "Personalización"
  },
  "q:cyu-1-3-q4::incorrect:a": {
    "text": "La reducción de dimensionalidad es una técnica, no un patrón de valor de negocio."
  },
  "q:cyu-1-3-q4::incorrect:c": {
    "text": "La automatización implicaría que el sistema actúa sin el analista. No es el caso."
  },
  "q:cyu-1-3-q4::incorrect:d": {
    "text": "No se está adaptando nada a un usuario final individual."
  },
  "q:cyu-1-3-q5": {
    "stem": "Una startup quiere predecir fallas de equipos, pero ha estado operando durante cuatro meses y ha registrado solo nueve eventos de falla, ninguno con datos de sensores asociados. ¿Cuál es la mejor recomendación?",
    "explanation": "Prácticamente no hay datos de los cuales aprender, por lo que ningún enfoque de modelado puede tener éxito todavía. La recomendación responsable es construir primero la base de datos. Esto evalúa el lado del costo-beneficio y la disponibilidad de datos del objetivo 1.2.2.",
    "takeaway": "Sin datos no hay modelo. La instrumentación es una respuesta legítima para el examen."
  },
  "q:cyu-1-3-q5::opt:a": {
    "text": "Usar un modelo fundacional para generar datos sintéticos de fallas y entrenar únicamente con ellos."
  },
  "q:cyu-1-3-q5::opt:b": {
    "text": "Entrenar un modelo de aprendizaje profundo con los nueve eventos."
  },
  "q:cyu-1-3-q5::opt:c": {
    "text": "Instrumentar el equipo para recopilar datos de sensores y de resultados desde ahora, y retomar el modelado una vez que exista un historial suficiente."
  },
  "q:cyu-1-3-q5::opt:d": {
    "text": "Implementar de inmediato un modelo de detección de anomalías en producción y basar las decisiones de mantenimiento en su salida."
  },
  "q:cyu-1-3-q5::incorrect:a": {
    "text": "Entrenar exclusivamente con datos sintéticos sin ninguna señal real que los fundamente produce un modelo que refleja al generador, no al equipo."
  },
  "q:cyu-1-3-q5::incorrect:b": {
    "text": "Nueve ejemplos no pueden sustentar un modelo de aprendizaje profundo; memorizaría ruido."
  },
  "q:cyu-1-3-q5::incorrect:d": {
    "text": "La detección de anomalías necesita una imagen confiable de la operación normal, que cuatro meses sin datos de sensores no proporcionan, y el enunciado da a entender que las decisiones dependerían de ella."
  },
  "q:cyu-1-4-q1": {
    "stem": "Volta Logistics cuenta con cuatro años de volumen semanal de envíos y quiere proyectar el volumen para las próximas 13 semanas, teniendo en cuenta los picos estacionales. ¿Qué técnica encaja?",
    "explanation": "La entrada es una serie indexada en el tiempo, la salida son valores futuros dentro de un horizonte definido, y la estacionalidad importa. Esa combinación define la previsión (forecasting).",
    "takeaway": "Orden temporal más horizonte futuro más estacionalidad = previsión (forecasting), no regresión simple."
  },
  "q:cyu-1-4-q1::opt:a": {
    "text": "Previsión (forecasting)"
  },
  "q:cyu-1-4-q1::opt:b": {
    "text": "Clasificación"
  },
  "q:cyu-1-4-q1::opt:c": {
    "text": "Reducción de dimensionalidad"
  },
  "q:cyu-1-4-q1::opt:d": {
    "text": "Agrupamiento (clustering)"
  },
  "q:cyu-1-4-q1::incorrect:b": {
    "text": "La clasificación predice una categoría, no una serie numérica futura."
  },
  "q:cyu-1-4-q1::incorrect:c": {
    "text": "La reducción de dimensionalidad comprime características y no predice nada."
  },
  "q:cyu-1-4-q1::incorrect:d": {
    "text": "El agrupamiento encuentra grupos; no produce ninguna proyección hacia adelante."
  },
  "q:cyu-1-4-q2": {
    "stem": "Andes Retail quiere descubrir agrupaciones naturales entre sus compradores. No existen segmentos predefinidos y nadie sabe cuántos grupos debería haber. ¿Qué técnica encaja?",
    "explanation": "No hay etiquetas ni categorías predefinidas, y el objetivo es descubrir estructura. Eso es agrupamiento no supervisado. La ausencia de segmentos predefinidos es el detalle decisivo.",
    "takeaway": "\"Sin categorías predefinidas\" es la señal de agrupamiento. \"Asignar a nuestras categorías existentes\" es la señal de clasificación."
  },
  "q:cyu-1-4-q2::opt:a": {
    "text": "Recomendación"
  },
  "q:cyu-1-4-q2::opt:b": {
    "text": "Regresión"
  },
  "q:cyu-1-4-q2::opt:c": {
    "text": "Clasificación supervisada en tres niveles"
  },
  "q:cyu-1-4-q2::opt:d": {
    "text": "Agrupamiento"
  },
  "q:cyu-1-4-q2::incorrect:a": {
    "text": "La recomendación clasifica elementos para usuarios individuales; no produce segmentos."
  },
  "q:cyu-1-4-q2::incorrect:b": {
    "text": "La regresión predice un valor continuo, no una agrupación."
  },
  "q:cyu-1-4-q2::incorrect:c": {
    "text": "La clasificación requiere que las categorías existan de antemano y que aparezcan en datos de entrenamiento etiquetados."
  },
  "q:cyu-1-4-q3": {
    "stem": "Relaciona cada pregunta de negocio con la técnica de ML que la responde.",
    "explanation": "Cada relación depende del tipo de salida. Sí/no es clasificación; un monto monetario es regresión; grupos descubiertos son agrupamiento; valores futuros de una serie son previsión; la desviación de lo normal es detección de anomalías; una lista clasificada por usuario es recomendación.",
    "takeaway": "Fíjate en la salida que el negocio quiere, no en la entrada que tienen. El tipo de salida determina la técnica."
  },
  "q:cyu-1-4-q3::matchprompt:0": {
    "text": "¿Este cliente se dará de baja (churn) en los próximos 90 días?"
  },
  "q:cyu-1-4-q3::matchprompt:1": {
    "text": "¿Cuánto costará esta reparación?"
  },
  "q:cyu-1-4-q3::matchprompt:2": {
    "text": "¿Qué grupos de comportamiento existen en nuestra base de usuarios?"
  },
  "q:cyu-1-4-q3::matchprompt:3": {
    "text": "¿Cuál será la demanda el próximo trimestre?"
  },
  "q:cyu-1-4-q3::matchprompt:4": {
    "text": "¿Qué lecturas de sensores no se parecen en nada a la operación normal?"
  },
  "q:cyu-1-4-q3::matchprompt:5": {
    "text": "¿Qué deberíamos mostrarle a continuación a este comprador?"
  },
  "q:cyu-1-4-q3::matchoption:0": {
    "text": "Clasificación"
  },
  "q:cyu-1-4-q3::matchoption:1": {
    "text": "Regresión"
  },
  "q:cyu-1-4-q3::matchoption:2": {
    "text": "Agrupamiento"
  },
  "q:cyu-1-4-q3::matchoption:3": {
    "text": "Previsión"
  },
  "q:cyu-1-4-q3::matchoption:4": {
    "text": "Detección de anomalías"
  },
  "q:cyu-1-4-q3::matchoption:5": {
    "text": "Recomendación"
  },
  "q:cyu-1-4-q4": {
    "stem": "Lumen Legal quiere un asistente interno que responda preguntas utilizando únicamente los expedientes de casos y memorandos de precedentes propios de la firma, con citas. ¿Qué categoría de aplicación de la guía del examen representa esto?",
    "explanation": "Responder a partir de un conjunto curado de documentos internos, con citas que remiten a la fuente, es el patrón de base de conocimiento que la versión 1.1 añadió al objetivo 1.2.4. En AWS, esto se implementa con Bedrock Knowledge Bases o Amazon Kendra.",
    "takeaway": "\"Las respuestas deben provenir de nuestros propios documentos, con citas\" = base de conocimiento, lo que significa RAG."
  },
  "q:cyu-1-4-q4::opt:a": {
    "text": "Una base de conocimiento"
  },
  "q:cyu-1-4-q4::opt:b": {
    "text": "Visión artificial"
  },
  "q:cyu-1-4-q4::opt:c": {
    "text": "Reconocimiento de voz"
  },
  "q:cyu-1-4-q4::opt:d": {
    "text": "Previsión"
  },
  "q:cyu-1-4-q4::incorrect:b": {
    "text": "No hay imágenes involucradas."
  },
  "q:cyu-1-4-q4::incorrect:c": {
    "text": "No hay audio involucrado."
  },
  "q:cyu-1-4-q4::incorrect:d": {
    "text": "No se está proyectando nada hacia el futuro."
  },
  "q:cyu-1-4-q5": {
    "stem": "¿Cuáles DOS de las siguientes opciones son ejemplos de aplicaciones de visión artificial?",
    "explanation": "La visión artificial extrae significado de imágenes y video. Tanto detectar daños físicos a partir de fotogramas de cámara como moderar fotografías cargadas por usuarios son tareas de comprensión de imágenes.",
    "takeaway": "Identifica primero la modalidad: píxeles = visión, palabras = PLN (NLP), forma de onda = voz."
  },
  "q:cyu-1-4-q5::opt:a": {
    "text": "Detectar embalajes dañados en una cinta transportadora de almacén a partir de fotogramas de cámara"
  },
  "q:cyu-1-4-q5::opt:b": {
    "text": "Determinar si una reseña de cliente es positiva o negativa"
  },
  "q:cyu-1-4-q5::opt:c": {
    "text": "Moderar fotografías cargadas por usuarios en busca de contenido inseguro"
  },
  "q:cyu-1-4-q5::opt:d": {
    "text": "Transcribir una llamada de soporte grabada"
  },
  "q:cyu-1-4-q5::opt:e": {
    "text": "Prever las ventas del próximo mes"
  },
  "q:cyu-1-4-q5::incorrect:b": {
    "text": "El análisis de sentimiento sobre texto es PLN (NLP), gestionado por Amazon Comprehend."
  },
  "q:cyu-1-4-q5::incorrect:d": {
    "text": "El paso de audio a texto es reconocimiento de voz, gestionado por Amazon Transcribe."
  },
  "q:cyu-1-4-q5::incorrect:e": {
    "text": "La previsión opera sobre datos de series temporales, no sobre imágenes."
  },
  "q:cyu-1-5-q1": {
    "stem": "Salud Norte necesita convertir miles de dictados grabados de médicos en texto para que puedan buscarse. ¿Qué servicio de AWS está diseñado para esto?",
    "explanation": "Amazon Transcribe es el servicio administrado de reconocimiento automático de voz: audio como entrada, texto como salida. También admite vocabulario personalizado, lo cual es importante para la terminología clínica.",
    "takeaway": "Transcribe = audio a texto. Polly = texto a audio. Se intercambian constantemente en los distractores."
  },
  "q:cyu-1-5-q1::opt:a": {
    "text": "Amazon Polly"
  },
  "q:cyu-1-5-q1::opt:b": {
    "text": "Amazon Transcribe"
  },
  "q:cyu-1-5-q1::opt:c": {
    "text": "Amazon Translate"
  },
  "q:cyu-1-5-q1::opt:d": {
    "text": "Amazon Comprehend"
  },
  "q:cyu-1-5-q1::incorrect:a": {
    "text": "Polly hace lo contrario: de texto a voz."
  },
  "q:cyu-1-5-q1::incorrect:c": {
    "text": "Translate convierte entre idiomas; no procesa audio."
  },
  "q:cyu-1-5-q1::incorrect:d": {
    "text": "Comprehend analiza texto que ya existe; no puede procesar audio."
  },
  "q:cyu-1-5-q2": {
    "stem": "Cordillera Bank recibe formularios de solicitud de préstamo escaneados y necesita extraer los valores de campos específicos, incluidas las tablas de ingresos declarados. ¿Qué servicio encaja mejor?",
    "explanation": "Amazon Textract extrae no solo texto sin formato, sino también la estructura de los documentos: pares clave-valor de formularios, tablas y diseño. Los formularios escaneados con campos y tablas son exactamente el escenario para el que fue creado.",
    "takeaway": "Formularios, tablas, pares clave-valor en documentos escaneados = Textract. Una combinación muy común es Textract seguido de Comprehend."
  },
  "q:cyu-1-5-q2::opt:a": {
    "text": "Amazon Textract"
  },
  "q:cyu-1-5-q2::opt:b": {
    "text": "Amazon Rekognition"
  },
  "q:cyu-1-5-q2::opt:c": {
    "text": "Amazon Kendra"
  },
  "q:cyu-1-5-q2::opt:d": {
    "text": "Amazon Comprehend"
  },
  "q:cyu-1-5-q2::incorrect:b": {
    "text": "Rekognition puede detectar texto dentro de imágenes, pero no comprende los campos de formulario ni las tablas como estructura."
  },
  "q:cyu-1-5-q2::incorrect:c": {
    "text": "Kendra busca en documentos; no realiza extracción a nivel de campo."
  },
  "q:cyu-1-5-q2::incorrect:d": {
    "text": "Comprehend analiza el texto una vez que existe; no lee documentos escaneados."
  },
  "q:cyu-1-5-q3": {
    "stem": "Cordillera Bank debe decidir cómo construir un modelo que apruebe o rechace solicitudes de crédito. La regulación nacional exige que el banco entregue a cada solicitante rechazado los factores específicos que llevaron a la decisión. El banco cuenta con 15 años de resultados tabulares etiquetados. ¿Qué enfoque es más apropiado?",
    "explanation": "El objetivo 1.2.6 te pide sopesar la regulación, la explicabilidad y las restricciones operativas. Los datos son tabulares, están etiquetados y son abundantes; se requiere legalmente una explicación a nivel de característica (feature) por cada decisión; y la latencia y el costo por decisión deben ser predecibles. Un modelo basado en árboles con atribución de características, por ejemplo usando SageMaker Clarify, satisface los tres requisitos. Los modelos fundacionales no pueden producir de manera confiable una atribución a nivel de característica defendible para una decisión adversa regulada.",
    "takeaway": "Las decisiones individuales reguladas sobre datos tabulares con un requisito legal de explicación implican ML tradicional. Es exactamente por esto que se añadió el objetivo 1.2.6."
  },
  "q:cyu-1-5-q3::opt:a": {
    "text": "Un flujo de trabajo agéntico que llama a varios modelos fundacionales y toma una decisión por mayoría de votos."
  },
  "q:cyu-1-5-q3::opt:b": {
    "text": "Un modelo de lenguaje grande ajustado (fine-tuned), porque el fine-tuning mejora la precisión."
  },
  "q:cyu-1-5-q3::opt:c": {
    "text": "Un modelo de ML tradicional, como un árbol potenciado por gradiente (gradient-boosted tree), con generación de informes de atribución de características."
  },
  "q:cyu-1-5-q3::opt:d": {
    "text": "Un modelo fundacional en Amazon Bedrock, con un prompt que incluye los detalles de la solicitud."
  },
  "q:cyu-1-5-q3::incorrect:a": {
    "text": "Añadir más modelos opacos multiplica el problema de explicabilidad y el costo por decisión."
  },
  "q:cyu-1-5-q3::incorrect:b": {
    "text": "El fine-tuning no genera explicabilidad, y aplica la misma objeción regulatoria."
  },
  "q:cyu-1-5-q3::incorrect:d": {
    "text": "Un modelo fundacional no puede proporcionar la atribución de características auditable que exige el regulador, y desecha 15 años de datos tabulares etiquetados que son ideales para el aprendizaje supervisado."
  },
  "q:cyu-1-5-q4": {
    "stem": "El mismo banco ahora quiere resumir circulares regulatorias de 200 páginas en informes de dos páginas para los gerentes de sucursal. No existen datos de entrenamiento etiquetados y la salida es de carácter consultivo. ¿Qué enfoque encaja?",
    "explanation": "La entrada es texto largo no estructurado, no hay un conjunto de datos etiquetado, la salida requerida es contenido de nueva generación, y el uso es consultivo en lugar de una decisión regulada sobre un individuo. Todos los factores apuntan hacia un modelo fundacional.",
    "takeaway": "Misma empresa, tarea distinta, respuesta distinta. Evalúa cada caso de uso según la forma de los datos, el tipo de salida y la exposición regulatoria."
  },
  "q:cyu-1-5-q4::opt:a": {
    "text": "Entrenar un modelo de clasificación supervisado."
  },
  "q:cyu-1-5-q4::opt:b": {
    "text": "Usar un algoritmo de agrupamiento sobre el texto de la circular."
  },
  "q:cyu-1-5-q4::opt:c": {
    "text": "Usar un modelo fundacional en Amazon Bedrock."
  },
  "q:cyu-1-5-q4::opt:d": {
    "text": "Usar Amazon Personalize."
  },
  "q:cyu-1-5-q4::incorrect:a": {
    "text": "No hay etiquetas y la salida requerida es prosa generada, no una clase."
  },
  "q:cyu-1-5-q4::incorrect:b": {
    "text": "El agrupamiento agrupa documentos; no redacta un informe."
  },
  "q:cyu-1-5-q4::incorrect:d": {
    "text": "Personalize produce recomendaciones a partir de datos de interacción; no tiene nada que ver con el resumen de textos."
  },
  "q:cyu-1-5-q5": {
    "stem": "Andes Retail quiere construir un asistente de voz en español para el estado de pedidos que responda en voz alta a preguntas habladas. ¿Cuáles DOS servicios formarían el núcleo de esta solución? (Selecciona DOS.)",
    "explanation": "Amazon Lex proporciona la interfaz conversacional, reconociendo la intención y recopilando los slots requeridos, como un número de pedido, con reconocimiento automático de voz integrado. Amazon Polly convierte la respuesta en voz de sonido natural.",
    "takeaway": "Lex para la conversación, Polly para la voz, Transcribe cuando necesitas transcripción independiente de audio existente."
  },
  "q:cyu-1-5-q5::opt:a": {
    "text": "Amazon Lex"
  },
  "q:cyu-1-5-q5::opt:b": {
    "text": "Amazon Polly"
  },
  "q:cyu-1-5-q5::opt:c": {
    "text": "Amazon Textract"
  },
  "q:cyu-1-5-q5::opt:d": {
    "text": "Amazon Personalize"
  },
  "q:cyu-1-5-q5::opt:e": {
    "text": "Amazon Rekognition"
  },
  "q:cyu-1-5-q5::incorrect:c": {
    "text": "Textract procesa documentos escaneados y no tiene ningún papel en una conversación de voz."
  },
  "q:cyu-1-5-q5::incorrect:d": {
    "text": "Personalize produce recomendaciones, no conversación."
  },
  "q:cyu-1-5-q5::incorrect:e": {
    "text": "Rekognition analiza imágenes y video."
  },
  "q:cyu-1-6-q1": {
    "stem": "Ordena estas etapas del pipeline de ML en el orden en que normalmente ocurren.",
    "explanation": "Los datos deben existir antes de que se puedan diseñar características a partir de ellos. Las características son la entrada del entrenamiento. Luego, un modelo entrenado se implementa y, una vez que está atendiendo tráfico, se monitorea en busca de drift y se reentrena según sea necesario.",
    "takeaway": "Datos → características → entrenar → implementar → monitorear. El monitoreo cierra el ciclo en lugar de terminarlo.",
    "sequenceLogic": "Cada etapa consume la salida de la anterior. El monitoreo es la última porque solo puede observar un modelo que ya está en producción, y es lo que desencadena el siguiente ciclo de vuelta a la recopilación de datos."
  },
  "q:cyu-1-6-q1::orderitem:0": {
    "text": "Entrenamiento del modelo"
  },
  "q:cyu-1-6-q1::orderitem:1": {
    "text": "Recopilación de datos"
  },
  "q:cyu-1-6-q1::orderitem:2": {
    "text": "Implementación (deployment)"
  },
  "q:cyu-1-6-q1::orderitem:3": {
    "text": "Ingeniería de características (feature engineering)"
  },
  "q:cyu-1-6-q1::orderitem:4": {
    "text": "Monitoreo y reentrenamiento"
  },
  "q:cyu-1-6-q2": {
    "stem": "¿Qué enunciado diferencia mejor un pipeline de modelo fundacional de un pipeline de ML tradicional?",
    "explanation": "La diferencia definitoria es dónde ocurrió el aprendizaje. Un modelo fundacional llega ya entrenado con un corpus muy grande, por lo que el trabajo del practicante cambia de construir características a moldear el contexto: prompts, documentos recuperados y personalización opcional.",
    "takeaway": "ML tradicional: tú construyes el modelo. Modelos fundacionales: eliges uno y moldeas su contexto."
  },
  "q:cyu-1-6-q2::opt:a": {
    "text": "Los pipelines de ML tradicional nunca requieren monitoreo."
  },
  "q:cyu-1-6-q2::opt:b": {
    "text": "Los pipelines de modelos fundacionales no requieren evaluación."
  },
  "q:cyu-1-6-q2::opt:c": {
    "text": "Los pipelines de modelos fundacionales requieren más ingeniería de características."
  },
  "q:cyu-1-6-q2::opt:d": {
    "text": "Los pipelines de modelos fundacionales normalmente comienzan con un modelo preentrenado en lugar de entrenar desde cero, y sustituyen gran parte del esfuerzo de ingeniería de características por el diseño de prompts y la recuperación (retrieval)."
  },
  "q:cyu-1-6-q2::incorrect:a": {
    "text": "El monitoreo del drift es una parte central de MLOps para los modelos tradicionales."
  },
  "q:cyu-1-6-q2::incorrect:b": {
    "text": "La evaluación es esencial para los FM, con sus propias métricas y su propio objetivo en el Dominio 3."
  },
  "q:cyu-1-6-q2::incorrect:c": {
    "text": "Invierte la relación. La ingeniería de características es una actividad del ML tradicional."
  },
  "q:cyu-1-6-q3": {
    "stem": "Un equipo quiere visibilidad total sobre los pesos de un modelo y la capacidad de ejecutarlo dentro de su propia VPC, en infraestructura que ellos controlan, sin construir un modelo por sí mismos. ¿Qué origen de modelo encaja mejor?",
    "explanation": "Los modelos preentrenados de código abierto dan acceso a los pesos y la libertad de alojarlos, evitando al mismo tiempo el enorme costo del preentrenamiento. SageMaker JumpStart facilita la implementación de estos modelos.",
    "takeaway": "Pesos visibles + autoalojado + no construido por ti = preentrenado de código abierto."
  },
  "q:cyu-1-6-q3::opt:a": {
    "text": "Un motor de reglas"
  },
  "q:cyu-1-6-q3::opt:b": {
    "text": "Un modelo preentrenado de código abierto"
  },
  "q:cyu-1-6-q3::opt:c": {
    "text": "Un modelo propietario al que solo se accede mediante una API administrada"
  },
  "q:cyu-1-6-q3::opt:d": {
    "text": "Un modelo preentrenado desde cero con el corpus propio de la empresa"
  },
  "q:cyu-1-6-q3::incorrect:a": {
    "text": "Un motor de reglas no es un modelo en absoluto."
  },
  "q:cyu-1-6-q3::incorrect:c": {
    "text": "Una API administrada propietaria deliberadamente no expone los pesos y no se ejecuta en infraestructura que tú controlas."
  },
  "q:cyu-1-6-q3::incorrect:d": {
    "text": "Esto cumple con el requisito de control, pero viola la restricción de \"sin construir un modelo por sí mismos\" y es mucho más costoso."
  },
  "q:cyu-1-6-q4": {
    "stem": "¿Qué característica distingue el uso de un servicio de API administrada del autoalojamiento de un modelo?",
    "explanation": "La característica distintiva de un servicio de API administrada como Amazon Bedrock es que el alojamiento del modelo, el escalado, la aplicación de parches y la disponibilidad son responsabilidad de AWS. El cliente es responsable de la solicitud, de los datos enviados y de la aplicación construida alrededor de ella.",
    "takeaway": "API administrada = AWS ejecuta el modelo. Autoalojado = tú ejecutas el modelo. Esa única línea responde la mayoría de estas preguntas."
  },
  "q:cyu-1-6-q4::opt:a": {
    "text": "Los servicios de API administrada no se pueden usar con datos de clientes."
  },
  "q:cyu-1-6-q4::opt:b": {
    "text": "Con un servicio de API administrada, AWS opera el alojamiento y el escalado del modelo, y el cliente llama a un endpoint."
  },
  "q:cyu-1-6-q4::opt:c": {
    "text": "El autoalojamiento siempre es más económico en cualquier escala."
  },
  "q:cyu-1-6-q4::opt:d": {
    "text": "Con un servicio de API administrada, el cliente es responsable de aplicar parches a los servidores de inferencia."
  },
  "q:cyu-1-6-q4::incorrect:a": {
    "text": "Los servicios administrados se usan habitualmente con datos de clientes, aplicando cifrado y controles de acceso."
  },
  "q:cyu-1-6-q4::incorrect:c": {
    "text": "El autoalojamiento puede ser más económico con un volumen muy alto y constante, pero conlleva costo operativo y es más costoso con volumen bajo o variable."
  },
  "q:cyu-1-6-q4::incorrect:d": {
    "text": "Aplicar parches a los servidores de inferencia es una responsabilidad del autoalojamiento."
  },
  "q:cyu-1-6-q5": {
    "stem": "¿Cuáles DOS actividades pertenecen a la etapa de preprocesamiento de datos en lugar de a la etapa de evaluación?",
    "explanation": "Dividir el conjunto de datos y depurarlo son actividades de preparación que ocurren antes de entrenar cualquier modelo. Las puntuaciones F1, las comparaciones entre subgrupos y las matrices de confusión requieren todas un modelo entrenado y datos reservados (held-out), por lo que pertenecen a la evaluación.",
    "takeaway": "Si la actividad necesita predicciones, es evaluación. Si solo necesita datos, es preprocesamiento."
  },
  "q:cyu-1-6-q5::opt:a": {
    "text": "Dividir los datos en conjuntos de entrenamiento, validación y prueba"
  },
  "q:cyu-1-6-q5::opt:b": {
    "text": "Calcular la puntuación F1 sobre datos reservados (held-out)"
  },
  "q:cyu-1-6-q5::opt:c": {
    "text": "Manejar valores faltantes y eliminar duplicados"
  },
  "q:cyu-1-6-q5::opt:d": {
    "text": "Comparar la precisión entre subgrupos demográficos"
  },
  "q:cyu-1-6-q5::opt:e": {
    "text": "Generar una matriz de confusión"
  },
  "q:cyu-1-6-q5::incorrect:b": {
    "text": "El F1 se calcula después del entrenamiento, sobre datos reservados."
  },
  "q:cyu-1-6-q5::incorrect:d": {
    "text": "El análisis por subgrupos es una actividad de evaluación y equidad, cubierta en el Dominio 4."
  },
  "q:cyu-1-6-q5::incorrect:e": {
    "text": "Una matriz de confusión resume predicciones, por lo que presupone un modelo."
  },
  "q:cyu-1-7-q1": {
    "stem": "Salud Norte está evaluando un modelo de detección que marca a pacientes para pruebas de seguimiento. Pasar por alto a un paciente genuinamente enfermo es mucho más perjudicial que llamar innecesariamente a un paciente sano. ¿Qué métrica debería priorizar el equipo?",
    "explanation": "El recall (exhaustividad) mide la proporción de verdaderos positivos que el modelo detecta. Pasar por alto a un paciente enfermo es un falso negativo, y el recall es la métrica que penaliza los falsos negativos. Optimizar el recall implica aceptar más seguimientos innecesarios a cambio de pasar por alto menos casos reales.",
    "takeaway": "Si el falso negativo es peor, se optimiza el recall. Si el falso positivo es peor, se optimiza la precisión."
  },
  "q:cyu-1-7-q1::opt:a": {
    "text": "Precisión"
  },
  "q:cyu-1-7-q1::opt:b": {
    "text": "Error absoluto medio (MAE)"
  },
  "q:cyu-1-7-q1::opt:c": {
    "text": "Exactitud (accuracy)"
  },
  "q:cyu-1-7-q1::opt:d": {
    "text": "Recall (exhaustividad)"
  },
  "q:cyu-1-7-q1::incorrect:a": {
    "text": "La precisión penaliza los falsos positivos, que el enunciado describe explícitamente como el error menos costoso."
  },
  "q:cyu-1-7-q1::incorrect:b": {
    "text": "El MAE se aplica a la regresión, no a una clasificación de marcar/no marcar."
  },
  "q:cyu-1-7-q1::incorrect:c": {
    "text": "La exactitud es engañosa aquí porque la población enferma es pequeña, por lo que un modelo que casi no marca a nadie obtendría un buen puntaje."
  },
  "q:cyu-1-7-q2": {
    "stem": "Un modelo de fraude alcanza un 99.7% de exactitud en un conjunto de datos donde el 0.3% de las transacciones son fraudulentas. ¿Cuál es la interpretación más razonable?",
    "explanation": "Con una tasa de positivos del 0.3%, predecir siempre \"no es fraude\" produce una exactitud del 99.7% sin detectar ningún fraude. La cifra no dice nada sobre el desempeño en la clase que importa, por lo que se necesitan métricas que examinen específicamente la clase positiva.",
    "takeaway": "Una clase positiva poco frecuente junto con una exactitud impresionante es una señal de alerta, no un resultado."
  },
  "q:cyu-1-7-q2::opt:a": {
    "text": "La exactitud no aporta información con este desequilibrio de clases; deberían examinarse la precisión, el recall, el F1 o el AUC."
  },
  "q:cyu-1-7-q2::opt:b": {
    "text": "El conjunto de datos es demasiado pequeño."
  },
  "q:cyu-1-7-q2::opt:c": {
    "text": "El modelo debe estar sobreajustado."
  },
  "q:cyu-1-7-q2::opt:d": {
    "text": "El modelo está funcionando excelentemente y está listo para producción."
  },
  "q:cyu-1-7-q2::incorrect:b": {
    "text": "Nada en el enunciado indica el tamaño del conjunto de datos."
  },
  "q:cyu-1-7-q2::incorrect:c": {
    "text": "El sobreajuste no se puede diagnosticar a partir de una sola cifra de exactitud; requiere comparar el desempeño de entrenamiento y de validación."
  },
  "q:cyu-1-7-q2::incorrect:d": {
    "text": "La cifra de exactitud es consistente con un modelo que no detecta nada."
  },
  "q:cyu-1-7-q3": {
    "stem": "Relaciona cada etapa del pipeline con el servicio de AWS más asociado a ella.",
    "explanation": "Cada uno de estos cinco es la respuesta canónica para su etapa. Glue para la preparación, Feature Store para la reutilización de características, Bedrock para el acceso a FM, Model Monitor para el drift, y S3 como la base de almacenamiento que sustenta todo.",
    "takeaway": "Aprende un servicio insignia por cada etapa del pipeline; eso cubre la mayoría de las preguntas de selección de servicios del Dominio 1."
  },
  "q:cyu-1-7-q3::matchprompt:0": {
    "text": "ETL sin servidor y catalogación de datos"
  },
  "q:cyu-1-7-q3::matchprompt:1": {
    "text": "Repositorio central versionado de características reutilizables"
  },
  "q:cyu-1-7-q3::matchprompt:2": {
    "text": "Acceso mediante API administrada a modelos fundacionales de múltiples proveedores"
  },
  "q:cyu-1-7-q3::matchprompt:3": {
    "text": "Detectar drift de calidad de datos y de calidad del modelo en producción"
  },
  "q:cyu-1-7-q3::matchprompt:4": {
    "text": "Almacenamiento de objetos duradero que actúa como data lake"
  },
  "q:cyu-1-7-q3::matchoption:0": {
    "text": "AWS Glue"
  },
  "q:cyu-1-7-q3::matchoption:1": {
    "text": "Amazon SageMaker Feature Store"
  },
  "q:cyu-1-7-q3::matchoption:2": {
    "text": "Amazon Bedrock"
  },
  "q:cyu-1-7-q3::matchoption:3": {
    "text": "Amazon SageMaker Model Monitor"
  },
  "q:cyu-1-7-q3::matchoption:4": {
    "text": "Amazon S3"
  },
  "q:cyu-1-7-q4": {
    "stem": "Seis meses después de la implementación, la tasa de error de un modelo de demanda se ha duplicado, aunque no se ha cambiado ningún código. El comportamiento de compra cambió tras la entrada de un competidor al mercado. ¿Qué ha ocurrido y cuál es la respuesta apropiada de MLOps?",
    "explanation": "La relación entre las entradas y el objetivo (target) cambió en el mundo real después de la implementación. Eso es drift, y la respuesta de MLOps que nombra el objetivo 1.3.5 es el monitoreo más el reentrenamiento con datos que reflejen las condiciones actuales.",
    "takeaway": "El desempeño que se deteriora con el tiempo sin cambios en el código equivale a drift, y el drift equivale a monitorear más reentrenar."
  },
  "q:cyu-1-7-q4::opt:a": {
    "text": "Subajuste; añadir más características."
  },
  "q:cyu-1-7-q4::opt:b": {
    "text": "Sobreajuste; reducir la complejidad del modelo."
  },
  "q:cyu-1-7-q4::opt:c": {
    "text": "Drift; monitorearlo y reentrenar el modelo con datos recientes."
  },
  "q:cyu-1-7-q4::opt:d": {
    "text": "Un error de software (bug); revertir la implementación."
  },
  "q:cyu-1-7-q4::incorrect:a": {
    "text": "El subajuste significa que el modelo nunca se ajustó bien; aquí se ajustó bien y luego se degradó."
  },
  "q:cyu-1-7-q4::incorrect:b": {
    "text": "El sobreajuste es visible en el momento del entrenamiento como una brecha entre entrenamiento y validación, no como una degradación gradual posterior a la implementación."
  },
  "q:cyu-1-7-q4::incorrect:d": {
    "text": "El código no ha cambiado y se comporta según lo escrito, por lo que revertir restauraría un modelo igualmente desactualizado."
  },
  "q:cyu-1-7-q5": {
    "stem": "¿Cuáles DOS de las siguientes opciones son métricas de negocio en lugar de métricas de desempeño del modelo?",
    "explanation": "El ROI y el costo por usuario miden el resultado comercial del sistema. El F1, el recall y el AUC-ROC miden la calidad estadística de las predicciones del modelo.",
    "takeaway": "Si se mide en dinero, usuarios o satisfacción, es una métrica de negocio. Si se mide contra etiquetas de verdad fundamental (ground truth), es una métrica del modelo."
  },
  "q:cyu-1-7-q5::opt:a": {
    "text": "Puntuación F1"
  },
  "q:cyu-1-7-q5::opt:b": {
    "text": "Retorno de la inversión (ROI)"
  },
  "q:cyu-1-7-q5::opt:c": {
    "text": "Recall"
  },
  "q:cyu-1-7-q5::opt:d": {
    "text": "Costo por usuario"
  },
  "q:cyu-1-7-q5::opt:e": {
    "text": "AUC-ROC"
  },
  "q:cyu-1-7-q5::incorrect:a": {
    "text": "El F1 es una métrica del modelo que combina precisión y recall."
  },
  "q:cyu-1-7-q5::incorrect:c": {
    "text": "El recall es una métrica del modelo."
  },
  "q:cyu-1-7-q5::incorrect:e": {
    "text": "El AUC-ROC es una métrica del modelo que describe la separación entre clases."
  },
  "q:cyu-1-7-q6": {
    "stem": "Un equipo mantiene un registro de cada ejecución de entrenamiento: la versión del conjunto de datos, los hiperparámetros, el commit de código y las métricas resultantes. ¿Qué concepto de MLOps respalda esto más directamente?",
    "explanation": "Registrar la versión del conjunto de datos, los parámetros, el código y los resultados es la práctica de la gestión de experimentos, que existe para que cualquier resultado pueda reproducirse y explicarse más adelante. El objetivo 1.3.5 nombra la experimentación y los procesos repetibles como fundamentos de MLOps. Repaso del Dominio 1 Lo que debes ser capaz de hacer ☐  Indicar la relación anidada entre IA, ML, aprendizaje profundo, IA generativa e IA agéntica, y dar un ejemplo de cada una. ☐  Distinguir un modelo de un algoritmo, y un parámetro de un hiperparámetro. ☐  Elegir entre inferencia en tiempo real, por lotes, asíncrona y sin servidor a partir de la descripción de una carga de trabajo. ☐  Clasificar los datos como etiquetados o sin etiquetar, y como estructurados, semiestructurados o no estructurados, de forma independiente. ☐  Elegir entre aprendizaje supervisado, no supervisado, semisupervisado, autosupervisado y por refuerzo. ☐  Nombrar las dos razones oficiales por las que el ML no es apropiado: se requiere un resultado exacto, o el costo-beneficio no es favorable. ☐  Seleccionar clasificación, regresión, agrupamiento, previsión, recomendación o detección de anomalías a partir de una pregunta de negocio. ☐  Nombrar la capacidad de Comprehend, Transcribe, Translate, Polly, Lex, Rekognition, Textract, Personalize, Kendra y SageMaker AI en una línea cada uno. ☐  Argumentar cuándo el ML tradicional supera a un modelo fundacional por motivos regulatorios, de explicabilidad y operativos. ☐  Enumerar en orden las etapas del pipeline de ML y describir en qué se diferencia el pipeline de FM. ☐  Distinguir la API administrada de la implementación autoalojada. ☐  Nombrar los seis conceptos de MLOps y explicar el drift y el reentrenamiento. ☐  Elegir entre exactitud, precisión, recall, F1, AUC y RMSE, y explicar la trampa de la exactitud en datos desbalanceados. ☐  Separar las métricas del modelo de las métricas de negocio. Diagrama en blanco: complétalo de memoria Escribe los cinco nombres de capas en orden, de la más amplia a la más específica, y luego un ejemplo de cada una. Primero cubre la Figura 1.1. Capa (de la más amplia a la más específica) Propiedad definitoria Ejemplo 1. ______________________ 2. ______________________ 3. ______________________ 4. ______________________ 5. ______________________ Tabla comparativa en blanco: tipos de inferencia Tipo de inferencia Latencia Mejor para Frase decisiva Tiempo real Por lotes Asíncrona Sin servidor Versión completa: Tabla 1.3. Explica esto con tus propias palabras ↺  RECUERDO ACTIVO Di cada uno de estos en voz alta, sin mirar, en no más de tres oraciones: 1. ¿Por qué un motor de reglas es IA pero no aprendizaje automático? 2. ¿Qué cambia exactamente cuando una carga de trabajo pasa de inferencia en tiempo real a inferencia asíncrona? 3. ¿Por qué una exactitud del 99.7% es una señal de alerta en un modelo de fraude? 4. ¿Por qué un banco regulado preferiría un árbol potenciado por gradiente sobre un modelo fundacional para decisiones de crédito? 5. ¿Qué es el drift, y por qué ocurre incluso cuando nada cambia en el código? Tarjetas de memoria de términos clave del Dominio 1 Cubre la columna derecha. Recorre la lista de arriba hacia abajo, di la respuesta en voz alta y luego revélala. Repite hasta completar toda la columna dos veces. Respuesta Modelo frente a algoritmo El algoritmo es el procedimiento de aprendizaje; el modelo es el artefacto entrenado que este produce. Parámetro frente a hiperparámetro Los parámetros se aprenden durante el entrenamiento; los hiperparámetros se establecen antes del entrenamiento. Sobreajuste Excelente en los datos de entrenamiento, deficiente en datos no vistos. El modelo memorizó ruido. Subajuste Deficiente tanto en los datos de entrenamiento como en los no vistos. El modelo es demasiado simple. Inferencia Usar un modelo entrenado para producir una salida a partir de una nueva entrada. Inferencia por lotes Puntuar un conjunto de datos completo según un cronograma; sin endpoint persistente. Inferencia asíncrona Inferencia sin servidor Endpoint de baja latencia que escala a cero cuando está inactivo. Aprendizaje supervisado Aprende a partir de datos etiquetados para predecir un objetivo (target) conocido. Aprendizaje no supervisado Encuentra estructura en datos sin etiquetar: clústeres, anomalías, dimensiones reducidas. Aprendizaje semisupervisado Un conjunto pequeño etiquetado más un conjunto grande sin etiquetar. Aprendizaje por refuerzo Un agente aprende una política a partir de las recompensas recibidas por acciones en un entorno. Clasificación frente a regresión Salida de categoría frente a salida de número continuo. Agrupamiento frente a clasificación Grupos descubiertos frente a categorías conocidas de antemano. Previsión (forecasting) Predecir valores futuros de una serie temporal en la que el orden y la estacionalidad importan. Amazon Comprehend PLN (NLP) sobre texto: sentimiento, entidades, frases clave, idioma, PII. Amazon Textract Extrae texto, formularios, tablas y pares clave-valor de documentos escaneados. Amazon Rekognition Análisis de imágenes y video: objetos, rostros, moderación, texto en imágenes. Amazon Transcribe / Polly Voz a texto / texto a voz. Amazon Lex Bots conversacionales con intents y slots. Amazon Personalize Recomendaciones personalizadas en tiempo real. Amazon Kendra Búsqueda empresarial inteligente en repositorios de documentos. Precisión De lo que marcamos, cuánto fue correcto. Penaliza los falsos positivos. Recall De lo que era verdaderamente positivo, cuánto detectamos. Penaliza los falsos negativos. Puntuación F1 Media armónica de la precisión y el recall; un único número equilibrado. Drift de datos frente a drift del modelo La distribución de entrada cambió frente a la relación entre la entrada y el objetivo (target) cambió. MLOps Aplicar la disciplina de DevOps al ML: experimentación, repetibilidad, escalabilidad, control de la deuda técnica, preparación para producción, monitoreo y reentrenamiento. API administrada frente a autoalojado AWS ejecuta el modelo frente a tú ejecutas el modelo. Hoja de referencia rápida del Dominio 1",
    "takeaway": "El seguimiento de experimentos (experiment tracking) responde a la pregunta \"¿por qué el modelo en producción se comporta así?\" meses después de los hechos."
  },
  "q:cyu-1-7-q6::opt:a": {
    "text": "Residencia de datos"
  },
  "q:cyu-1-7-q6::opt:b": {
    "text": "Sistemas escalables"
  },
  "q:cyu-1-7-q6::opt:c": {
    "text": "Experimentación y reproducibilidad"
  },
  "q:cyu-1-7-q6::opt:d": {
    "text": "Preparación para producción"
  },
  "q:cyu-1-7-q6::incorrect:a": {
    "text": "La residencia de datos es una preocupación de gobernanza sobre dónde residen físicamente los datos, cubierta en el Dominio 5."
  },
  "q:cyu-1-7-q6::incorrect:b": {
    "text": "La escalabilidad se refiere a manejar el crecimiento en volumen y tráfico, algo que esta práctica no aborda."
  },
  "q:cyu-1-7-q6::incorrect:d": {
    "text": "La preparación para producción es más amplia y cubre pruebas, monitoreo y reversión; el seguimiento de experimentos la respalda, pero no es lo mismo."
  },
  "q:cyu-service-selection-1-q1": {
    "stem": "Andes Retail necesita detectar si las reseñas de clientes son positivas o negativas, con un volumen de 80,000 reseñas por semana, sin entrenar ningún modelo. ¿Qué servicio es el más apropiado y económico?",
    "explanation": "El análisis de sentimiento sobre texto es exactamente para lo que se creó Amazon Comprehend. Es una API preentrenada que no requiere entrenamiento, y con 80,000 documentos por semana resulta considerablemente más económica y más determinista que invocar un modelo fundacional de vanguardia (frontier) para una tarea con una salida fija y bien definida.",
    "takeaway": "Cuando una API de IA preentrenada encaja exactamente con la tarea, supera a un modelo fundacional tanto en costo como en previsibilidad."
  },
  "q:cyu-service-selection-1-q1::opt:a": {
    "text": "Amazon Rekognition"
  },
  "q:cyu-service-selection-1-q1::opt:b": {
    "text": "Amazon Personalize"
  },
  "q:cyu-service-selection-1-q1::opt:c": {
    "text": "Amazon Bedrock con un modelo fundacional de vanguardia (frontier)"
  },
  "q:cyu-service-selection-1-q1::opt:d": {
    "text": "Amazon Comprehend"
  },
  "q:cyu-service-selection-1-q1::incorrect:a": {
    "text": "Rekognition analiza imágenes y video, no texto."
  },
  "q:cyu-service-selection-1-q1::incorrect:b": {
    "text": "Personalize produce recomendaciones a partir de datos de interacción."
  },
  "q:cyu-service-selection-1-q1::incorrect:c": {
    "text": "Un modelo fundacional puede hacer esto, pero cuesta más por unidad e introduce no determinismo sin ningún beneficio."
  },
  "q:cyu-service-selection-1-q2": {
    "stem": "Salud Norte recibe formularios de derivación escaneados. Necesita que se extraigan los campos del formulario y luego que el texto clínico se analice en busca de entidades médicas. ¿Qué secuencia de servicios encaja?",
    "explanation": "Textract extrae texto, pares clave-valor de formularios y tablas de documentos escaneados, produciendo texto legible por máquina. Comprehend luego interpreta ese texto para extraer entidades. Esta cadena de dos pasos es una de las combinaciones de servicios que más se evalúan en el examen.",
    "takeaway": "Documento escaneado y luego significado equivale a Textract y luego Comprehend. Aprende la cadena, no solo los servicios."
  },
  "q:cyu-service-selection-1-q2::opt:a": {
    "text": "Amazon Personalize y luego Amazon Lex"
  },
  "q:cyu-service-selection-1-q2::opt:b": {
    "text": "Amazon Kendra y luego Amazon Polly"
  },
  "q:cyu-service-selection-1-q2::opt:c": {
    "text": "Amazon Rekognition y luego Amazon Translate"
  },
  "q:cyu-service-selection-1-q2::opt:d": {
    "text": "Amazon Textract y luego Amazon Comprehend"
  },
  "q:cyu-service-selection-1-q2::incorrect:a": {
    "text": "Personalize y Lex no tienen ningún papel en el procesamiento de documentos."
  },
  "q:cyu-service-selection-1-q2::incorrect:b": {
    "text": "Kendra busca en documentos y Polly convierte texto en voz; ninguno extrae campos de formulario."
  },
  "q:cyu-service-selection-1-q2::incorrect:c": {
    "text": "Rekognition analiza fotografías en lugar de la estructura del documento, y no se requiere traducción."
  },
  "q:cyu-service-selection-1-q5": {
    "stem": "Relaciona cada requisito con el servicio de AWS correcto.",
    "explanation": "Cada servicio se define por su modalidad de entrada y salida. Audio como entrada equivale a Transcribe; audio como salida equivale a Polly; conversión de idioma equivale a Translate; diálogo estructurado equivale a Lex; imágenes equivale a Rekognition.",
    "takeaway": "Primero la modalidad, luego la tarea. Esto resuelve la mayoría de las preguntas de selección de servicios."
  },
  "q:cyu-service-selection-1-q5::matchprompt:0": {
    "text": "Convertir llamadas de soporte grabadas en texto que se pueda buscar"
  },
  "q:cyu-service-selection-1-q5::matchprompt:1": {
    "text": "Leer en voz alta una confirmación de pedido a quien llama"
  },
  "q:cyu-service-selection-1-q5::matchprompt:2": {
    "text": "Publicar el catálogo de productos en tres idiomas"
  },
  "q:cyu-service-selection-1-q5::matchprompt:3": {
    "text": "Recopilar un número de pedido y una fecha de entrega en una conversación"
  },
  "q:cyu-service-selection-1-q5::matchprompt:4": {
    "text": "Marcar contenido inseguro en fotografías cargadas por usuarios"
  },
  "q:cyu-service-selection-1-q5::matchoption:0": {
    "text": "Amazon Transcribe"
  },
  "q:cyu-service-selection-1-q5::matchoption:1": {
    "text": "Amazon Polly"
  },
  "q:cyu-service-selection-1-q5::matchoption:2": {
    "text": "Amazon Translate"
  },
  "q:cyu-service-selection-1-q5::matchoption:3": {
    "text": "Amazon Lex"
  },
  "q:cyu-service-selection-1-q5::matchoption:4": {
    "text": "Amazon Rekognition"
  },
  "q:cyu-service-selection-1-q6": {
    "stem": "Una aseguradora regulada debe producir, para cada decisión, una explicación de qué factores impulsaron cada decisión de reclamo, utilizando quince años de datos tabulares etiquetados. ¿Qué combinación es más apropiada?",
    "explanation": "Los datos son tabulares y están etiquetados, y un regulador exige una explicación auditable a nivel de característica de las decisiones individuales. SageMaker AI entrena el modelo, Clarify proporciona la atribución de características que constituye la explicación, y Model Cards documenta el modelo para fines de gobernanza. Esta es la arquitectura canónica de ML regulado en AWS.",
    "takeaway": "Regulado, tabular, explicación requerida: SageMaker AI más Clarify más Model Cards. Memoriza este trío."
  },
  "q:cyu-service-selection-1-q6::opt:a": {
    "text": "Amazon Personalize con reglas de negocio"
  },
  "q:cyu-service-selection-1-q6::opt:b": {
    "text": "Amazon Kendra con una base de conocimiento de decisiones pasadas"
  },
  "q:cyu-service-selection-1-q6::opt:c": {
    "text": "Amazon SageMaker AI para entrenar el modelo, con SageMaker Clarify para la atribución de características y SageMaker Model Cards para la documentación"
  },
  "q:cyu-service-selection-1-q6::opt:d": {
    "text": "Amazon Bedrock con un modelo de vanguardia (frontier) y prompting de cadena de pensamiento (chain-of-thought)"
  },
  "q:cyu-service-selection-1-q6::incorrect:a": {
    "text": "Personalize es un servicio de recomendación y no puede tomar ni explicar decisiones de reclamos."
  },
  "q:cyu-service-selection-1-q6::incorrect:b": {
    "text": "Kendra recupera documentos; no toma decisiones ni las explica."
  },
  "q:cyu-service-selection-1-q6::incorrect:d": {
    "text": "La cadena de pensamiento produce una narrativa plausible, no una atribución auditable, y un modelo fundacional desecha quince años de datos de entrenamiento ideales."
  },
  "q:cyu-service-selection-2-q3": {
    "stem": "Ordena estos servicios de AWS según el orden en que normalmente se usarían en un proyecto de ML personalizado de extremo a extremo.",
    "explanation": "Los datos sin procesar llegan a Amazon S3 como data lake. AWS Glue los prepara y los cataloga. SageMaker AI entrena el modelo con los datos preparados. Una vez implementado, Model Monitor vigila el drift de calidad de los datos y del modelo.",
    "takeaway": "Almacenar, preparar, entrenar, implementar, monitorear. Aprende un servicio insignia por etapa.",
    "sequenceLogic": "La secuencia sigue el pipeline: almacenar, preparar, entrenar y luego monitorear después de la implementación. El monitoreo solo puede observar un modelo que ya está atendiendo tráfico."
  },
  "q:cyu-service-selection-2-q3::orderitem:0": {
    "text": "Amazon SageMaker Model Monitor"
  },
  "q:cyu-service-selection-2-q3::orderitem:1": {
    "text": "Amazon S3"
  },
  "q:cyu-service-selection-2-q3::orderitem:2": {
    "text": "Trabajo de entrenamiento de Amazon SageMaker AI"
  },
  "q:cyu-service-selection-2-q3::orderitem:3": {
    "text": "AWS Glue"
  },
  "q:cyu-service-selection-2-q6": {
    "stem": "¿Qué opción de inferencia de SageMaker escala a cero entre solicitudes y es la más adecuada para tráfico intermitente con un requisito de latencia inferior a un segundo?",
    "explanation": "La inferencia sin servidor proporciona respuestas de baja latencia mientras escala a cero durante los períodos de inactividad, por lo que no se cobra por la capacidad no utilizada. El tráfico intermitente con un requisito de baja latencia es su caso de uso definitorio.",
    "takeaway": "Períodos de inactividad más baja latencia más falta de disposición a pagar por la inactividad equivale a inferencia sin servidor."
  },
  "q:cyu-service-selection-2-q6::opt:a": {
    "text": "Inferencia sin servidor"
  },
  "q:cyu-service-selection-2-q6::opt:b": {
    "text": "Inferencia asíncrona"
  },
  "q:cyu-service-selection-2-q6::opt:c": {
    "text": "Batch transform (transformación por lotes)"
  },
  "q:cyu-service-selection-2-q6::opt:d": {
    "text": "Un endpoint en tiempo real aprovisionado"
  },
  "q:cyu-service-selection-2-q6::incorrect:b": {
    "text": "La inferencia asíncrona pone las solicitudes en cola y está orientada a cargas útiles grandes y tiempos de procesamiento prolongados."
  },
  "q:cyu-service-selection-2-q6::incorrect:c": {
    "text": "Batch transform procesa un conjunto de datos fuera de línea y no puede atender solicitudes interactivas."
  },
  "q:cyu-service-selection-2-q6::incorrect:d": {
    "text": "Un endpoint aprovisionado cumple con el requisito de latencia, pero cobra de forma continua durante los períodos de inactividad."
  },
  "q:cyu-service-selection-2-q9": {
    "stem": "¿Qué servicio proporciona un repositorio central y versionado de características para que se utilicen las mismas definiciones de características tanto en el entrenamiento como en la inferencia?",
    "explanation": "SageMaker Feature Store es el repositorio diseñado específicamente para almacenar, compartir y versionar características, lo que evita el sesgo entre entrenamiento y servicio (training-serving skew) que surge cuando las características se recalculan de forma distinta en cada lugar.",
    "takeaway": "Características reutilizables, versionadas y compartidas entre equipos equivale a SageMaker Feature Store."
  },
  "q:cyu-service-selection-2-q9::opt:a": {
    "text": "AWS Glue DataBrew"
  },
  "q:cyu-service-selection-2-q9::opt:b": {
    "text": "Amazon SageMaker Feature Store"
  },
  "q:cyu-service-selection-2-q9::opt:c": {
    "text": "Amazon DynamoDB"
  },
  "q:cyu-service-selection-2-q9::opt:d": {
    "text": "Amazon S3"
  },
  "q:cyu-service-selection-2-q9::incorrect:a": {
    "text": "DataBrew es preparación visual de datos, no un repositorio de características."
  },
  "q:cyu-service-selection-2-q9::incorrect:c": {
    "text": "DynamoDB es un almacén de clave-valor de propósito general sin capacidad de gestión de características."
  },
  "q:cyu-service-selection-2-q9::incorrect:d": {
    "text": "S3 almacena objetos, pero no proporciona semántica de características, versionado ni servicio en línea (online serving)."
  }
});
})();
