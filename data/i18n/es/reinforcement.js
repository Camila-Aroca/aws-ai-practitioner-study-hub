(function(){
  "use strict";
  window.I18N_ES_REINFORCEMENT = Object.assign({}, window.I18N_ES_REINFORCEMENT || {}, {
  "unit:domain1-inference": {
    "title": "¿Inferencia en tiempo real, por lotes, asíncrona o sin servidor?",
    "shortTitle": "Modos de inferencia",
    "weakArea": "Todavía se confunden la inferencia por lotes y la inferencia asíncrona.",
    "reason": "Se recomienda cuando el Objetivo 1.1.3 está por debajo del 70 % o se fallan preguntas sobre modos de inferencia.",
    "taskStatement": "Unidades de refuerzo del Dominio 1"
  },
  "unit:domain1-inference::rapidReview": {
    "summary": "Elige el modo según la forma de la solicitud, no solo por la palabra \"grande\". Un conjunto de datos completo según un cronograma es inferencia por lotes (batch). Una solicitud individual grande o de procesamiento lento es asíncrona. Una solicitud interactiva individual e inmediata es en tiempo real. El tráfico interactivo inmediato con largos períodos de inactividad es sin servidor (serverless)."
  },
  "unit:domain1-inference::rapidReview::table:0:0": {
    "text": "Inferencia en tiempo real"
  },
  "unit:domain1-inference::rapidReview::table:0:1": {
    "text": "Una solicitud entrante necesita una respuesta inmediata"
  },
  "unit:domain1-inference::rapidReview::table:0:2": {
    "text": "interactivo, proceso de pago, menos de un segundo, mientras el usuario espera"
  },
  "unit:domain1-inference::rapidReview::table:1:0": {
    "text": "Inferencia por lotes o Batch Transform"
  },
  "unit:domain1-inference::rapidReview::table:1:1": {
    "text": "Se procesa un conjunto de datos completo en conjunto, a menudo según un cronograma"
  },
  "unit:domain1-inference::rapidReview::table:1:2": {
    "text": "cada noche, una vez al mes, millones de registros, informe listo por la mañana"
  },
  "unit:domain1-inference::rapidReview::table:2:0": {
    "text": "Inferencia asíncrona"
  },
  "unit:domain1-inference::rapidReview::table:2:1": {
    "text": "Las solicitudes individuales se ponen en cola porque las cargas útiles son grandes o el procesamiento es lento"
  },
  "unit:domain1-inference::rapidReview::table:2:2": {
    "text": "archivo grande, hasta 1 GB, una hora, el usuario regresa más tarde"
  },
  "unit:domain1-inference::rapidReview::table:3:0": {
    "text": "Inferencia sin servidor"
  },
  "unit:domain1-inference::rapidReview::table:3:1": {
    "text": "Se necesita una respuesta interactiva, pero el tráfico es lo suficientemente intermitente como para que el costo de inactividad importe"
  },
  "unit:domain1-inference::rapidReview::table:3:2": {
    "text": "largos períodos de inactividad, tráfico impredecible, escalado a cero, pago solo por uso"
  },
  "unit:domain1-inference::rapidReview::clue:0": {
    "text": "Pregunta primero: ¿conjunto de datos o solicitud individual?"
  },
  "unit:domain1-inference::rapidReview::clue:1": {
    "text": "Luego pregunta: ¿debe esperar quien realiza la llamada?"
  },
  "unit:domain1-inference::rapidReview::clue:2": {
    "text": "Luego verifica: ¿carga útil inusualmente grande o lenta?"
  },
  "unit:domain1-inference::rapidReview::clue:3": {
    "text": "Por último, pregunta: ¿el problema es el costo del endpoint inactivo?"
  },
  "unit:domain1-inference::rapidReview::trap:0": {
    "text": "La inferencia asíncrona no es inferencia en tiempo real de baja latencia; es para solicitudes individuales en cola y de larga duración."
  },
  "unit:domain1-inference::rapidReview::trap:1": {
    "text": "La inferencia sin servidor no es por lotes. Sigue atendiendo solicitudes interactivas individuales, pero puede reducir su escala durante los períodos de inactividad."
  },
  "unit:domain1-inference::rapidReview::comparison:0": {
    "label": "Por lotes frente a asíncrona",
    "text": "La inferencia por lotes procesa un trabajo sobre un conjunto de datos; la asíncrona procesa solicitudes individuales en cola."
  },
  "unit:domain1-inference::rapidReview::comparison:1": {
    "label": "Tiempo real frente a sin servidor",
    "text": "Ambas pueden ser interactivas; se elige la opción sin servidor cuando el tráfico es esporádico y predomina el costo de inactividad."
  },
  "unit:domain1-inference::rapidReview::comparison:2": {
    "label": "Asíncrona frente a tiempo real",
    "text": "La inferencia asíncrona permite que quien realiza la llamada regrese más tarde; la inferencia en tiempo real responde mientras espera."
  },
  "unit:domain1-inference::rapidReview::comparison:3": {
    "label": "Por lotes frente a sin servidor",
    "text": "La inferencia por lotes no tiene un endpoint siempre activo entre trabajos; la sin servidor es un patrón de endpoint para tráfico de solicitudes intermitente."
  },
  "item:reinforce-d1-inference-001": {
    "stem": "Una agencia de salud pública califica un conjunto de datos históricos completo una vez al mes y escribe los resultados en Amazon S3 para un informe matutino.",
    "explanation": "La entrada es un conjunto de datos completo y el trabajo se ejecuta según un cronograma mensual, por lo que Batch Transform es la opción adecuada.",
    "decidingClue": "conjunto de datos históricos completo una vez al mes",
    "whyClosestDistractorIsWrong": "La inferencia asíncrona maneja solicitudes individuales en cola, no un trabajo programado sobre un conjunto de datos completo."
  },
  "item:reinforce-d1-inference-001::opt:a": {
    "text": "Inferencia en tiempo real"
  },
  "item:reinforce-d1-inference-001::opt:b": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-inference-001::opt:c": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-inference-001::opt:d": {
    "text": "Inferencia sin servidor"
  },
  "item:reinforce-d1-inference-002": {
    "stem": "Un equipo de medios envía archivos de video individuales de 900 MB para calificación de calidad. Cada solicitud puede tardar 40 minutos, y quien la envía revisa el resultado almacenado más tarde.",
    "explanation": "Las cargas útiles individuales grandes con procesamiento prolongado y recuperación posterior apuntan a la inferencia asíncrona.",
    "decidingClue": "archivos de video individuales de 900 MB; revisa el resultado almacenado más tarde",
    "whyClosestDistractorIsWrong": "La inferencia por lotes es para un trabajo sobre un conjunto de datos, no para solicitudes en cola que llegan por separado."
  },
  "item:reinforce-d1-inference-002::opt:a": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-inference-002::opt:b": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-inference-002::opt:c": {
    "text": "Inferencia en tiempo real"
  },
  "item:reinforce-d1-inference-002::opt:d": {
    "text": "Inferencia sin servidor"
  },
  "item:reinforce-d1-inference-003": {
    "stem": "Un carrito de compras llama a un modelo de fraude mientras el comprador espera en el proceso de pago. La respuesta debe llegar en menos de un segundo.",
    "explanation": "El comprador espera una única respuesta inmediata, por lo que la inferencia en tiempo real es la adecuada.",
    "decidingClue": "mientras el comprador espera; menos de un segundo",
    "whyClosestDistractorIsWrong": "La inferencia sin servidor también puede ser interactiva, pero el enunciado no menciona períodos de inactividad ni evitar el costo de inactividad."
  },
  "item:reinforce-d1-inference-003::opt:a": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-inference-003::opt:b": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-inference-003::opt:c": {
    "text": "Inferencia en tiempo real"
  },
  "item:reinforce-d1-inference-003::opt:d": {
    "text": "Inferencia sin servidor"
  },
  "item:reinforce-d1-inference-004": {
    "stem": "Una herramienta interna de cumplimiento recibe pocas solicitudes interactivas por semana. Los usuarios necesitan una respuesta inmediata, y el equipo no quiere pagar por la capacidad inactiva del endpoint.",
    "explanation": "La solicitud es interactiva, pero el tráfico es escaso y el costo de inactividad es la principal preocupación, por lo que la inferencia sin servidor es la adecuada.",
    "decidingClue": "pocas solicitudes interactivas por semana; no pagar por la capacidad inactiva del endpoint",
    "whyClosestDistractorIsWrong": "Un endpoint aprovisionado puede ser rápido, pero mantiene capacidad en ejecución durante los períodos de inactividad."
  },
  "item:reinforce-d1-inference-004::opt:a": {
    "text": "Inferencia sin servidor"
  },
  "item:reinforce-d1-inference-004::opt:b": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-inference-004::opt:c": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-inference-004::opt:d": {
    "text": "Inferencia en tiempo real aprovisionada"
  },
  "item:reinforce-d1-inference-005": {
    "stem": "Un banco recalcula las puntuaciones de riesgo de todos los clientes activos cada domingo por la noche. Los analistas leen la tabla de resultados el lunes.",
    "explanation": "Un trabajo programado de calificación sobre toda la población es inferencia por lotes.",
    "decidingClue": "todos los clientes activos cada domingo por la noche",
    "whyClosestDistractorIsWrong": "La inferencia asíncrona es para solicitudes individuales que se ponen en cola y se completan más tarde."
  },
  "item:reinforce-d1-inference-005::opt:a": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-inference-005::opt:b": {
    "text": "Inferencia sin servidor"
  },
  "item:reinforce-d1-inference-005::opt:c": {
    "text": "Inferencia en tiempo real"
  },
  "item:reinforce-d1-inference-005::opt:d": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-inference-006": {
    "stem": "Una aplicación móvil recomienda el siguiente artículo inmediatamente después de que un lector abre la pantalla de inicio.",
    "explanation": "La aplicación necesita una única respuesta inmediata para una acción interactiva.",
    "decidingClue": "inmediatamente después de que un lector abre la pantalla de inicio",
    "whyClosestDistractorIsWrong": "La inferencia por lotes no puede responder mientras un usuario espera dentro de una aplicación."
  },
  "item:reinforce-d1-inference-006::opt:a": {
    "text": "Inferencia en tiempo real"
  },
  "item:reinforce-d1-inference-006::opt:b": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-inference-006::opt:c": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-inference-006::opt:d": {
    "text": "Inferencia sin servidor"
  },
  "item:reinforce-d1-inference-007": {
    "stem": "Un laboratorio sube archivos genómicos individuales que son demasiado grandes para llamadas sincrónicas. El trabajo se pone en cola y se envía una notificación de finalización más tarde.",
    "explanation": "Los archivos individuales grandes y la finalización en cola son pistas de inferencia asíncrona.",
    "decidingClue": "archivos genómicos individuales; en cola; notificación más tarde",
    "whyClosestDistractorIsWrong": "Nada indica que el laboratorio esté procesando un conjunto de datos completo según un cronograma."
  },
  "item:reinforce-d1-inference-007::opt:a": {
    "text": "Inferencia en tiempo real"
  },
  "item:reinforce-d1-inference-007::opt:b": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-inference-007::opt:c": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-inference-007::opt:d": {
    "text": "Inferencia sin servidor"
  },
  "item:reinforce-d1-inference-008": {
    "stem": "Una herramienta de campañas permanece inactiva la mayoría de los días y luego recibe una pequeña ráfaga de predicciones interactivas después de cada lanzamiento de boletín. Los cold starts son aceptables.",
    "explanation": "La inferencia sin servidor es adecuada para tráfico interactivo intermitente cuando los cold starts son aceptables.",
    "decidingClue": "inactiva la mayoría de los días; predicciones interactivas; cold starts aceptables",
    "whyClosestDistractorIsWrong": "Un endpoint siempre activo paga por la capacidad inactiva."
  },
  "item:reinforce-d1-inference-008::opt:a": {
    "text": "Inferencia sin servidor"
  },
  "item:reinforce-d1-inference-008::opt:b": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-inference-008::opt:c": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-inference-008::opt:d": {
    "text": "Endpoint en tiempo real siempre activo"
  },
  "item:reinforce-d1-inference-009": {
    "stem": "Una ciudad procesa millones de registros de sensores después de la medianoche y almacena las puntuaciones de anomalías antes de que llegue el personal.",
    "explanation": "Procesar millones de registros fuera de línea según un cronograma es inferencia por lotes.",
    "decidingClue": "millones de registros después de la medianoche",
    "whyClosestDistractorIsWrong": "La inferencia asíncrona maneja solicitudes individuales de larga duración, no un barrido programado de un conjunto de datos."
  },
  "item:reinforce-d1-inference-009::opt:a": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-inference-009::opt:b": {
    "text": "Inferencia en tiempo real"
  },
  "item:reinforce-d1-inference-009::opt:c": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-inference-009::opt:d": {
    "text": "Inferencia sin servidor"
  },
  "item:reinforce-d1-inference-010": {
    "stem": "Un formulario web valida una imagen enviada y debe mostrar aceptar o rechazar antes de que el usuario pueda continuar.",
    "explanation": "El usuario no puede continuar hasta que se devuelve la respuesta, por lo que esto es tiempo real.",
    "decidingClue": "debe mostrar aceptar o rechazar antes de que el usuario pueda continuar",
    "whyClosestDistractorIsWrong": "La inferencia asíncrona permitiría que el usuario regresara más tarde, lo cual no cumple con el requisito."
  },
  "item:reinforce-d1-inference-010::opt:a": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-inference-010::opt:b": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-inference-010::opt:c": {
    "text": "Inferencia en tiempo real"
  },
  "item:reinforce-d1-inference-010::opt:d": {
    "text": "Inferencia sin conexión"
  },
  "item:reinforce-d1-inference-011": {
    "stem": "Un servicio de documentos acepta un PDF de 700 MB a la vez y almacena los resultados de extracción cuando el modelo de larga duración termina.",
    "explanation": "Una solicitud grande individual con resultados almacenados después de un procesamiento prolongado es inferencia asíncrona.",
    "decidingClue": "un PDF de 700 MB a la vez; almacena los resultados cuando termina",
    "whyClosestDistractorIsWrong": "El enunciado trata sobre documentos que llegan individualmente, no sobre un conjunto de datos completo programado."
  },
  "item:reinforce-d1-inference-011::opt:a": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-inference-011::opt:b": {
    "text": "Inferencia sin servidor"
  },
  "item:reinforce-d1-inference-011::opt:c": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-inference-011::opt:d": {
    "text": "Inferencia en tiempo real"
  },
  "item:reinforce-d1-inference-012": {
    "stem": "Una calculadora estacional recibe solicitudes de predicción inmediata solo durante la semana de planificación trimestral y, por lo demás, permanece sin uso.",
    "explanation": "Las solicitudes inmediatas junto con largos períodos de inactividad apuntan a la inferencia sin servidor.",
    "decidingClue": "solicitudes de predicción inmediata solo durante la semana de planificación trimestral",
    "whyClosestDistractorIsWrong": "La aplicación aún necesita respuestas interactivas; no es un trabajo de conjunto de datos fuera de línea."
  },
  "item:reinforce-d1-inference-012::opt:a": {
    "text": "Inferencia sin servidor"
  },
  "item:reinforce-d1-inference-012::opt:b": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-inference-012::opt:c": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-inference-012::opt:d": {
    "text": "Inferencia en tiempo real aprovisionada"
  },
  "item:reinforce-d1-inference-013": {
    "stem": "Una empresa de suscripciones califica cada cuenta en una exportación CSV al final de cada día. Ninguna aplicación llama al modelo durante el día.",
    "explanation": "Una exportación CSV diaria procesada en conjunto es un trabajo por lotes.",
    "decidingClue": "cada cuenta en una exportación CSV al final de cada día",
    "whyClosestDistractorIsWrong": "La inferencia sin servidor es para tráfico de solicitudes, no para procesamiento programado de archivos."
  },
  "item:reinforce-d1-inference-013::opt:a": {
    "text": "Inferencia en tiempo real"
  },
  "item:reinforce-d1-inference-013::opt:b": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-inference-013::opt:c": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-inference-013::opt:d": {
    "text": "Inferencia sin servidor"
  },
  "item:reinforce-d1-inference-014": {
    "stem": "El escritorio de un centro de llamadas muestra una alerta de riesgo de abandono en cuanto un agente abre el registro del cliente.",
    "explanation": "El agente necesita una alerta inmediata dentro de un flujo de trabajo interactivo.",
    "decidingClue": "en cuanto un agente abre el registro del cliente",
    "whyClosestDistractorIsWrong": "Una calificación mensual no satisfaría el requisito de actualización inmediata en pantalla."
  },
  "item:reinforce-d1-inference-014::opt:a": {
    "text": "Inferencia en tiempo real"
  },
  "item:reinforce-d1-inference-014::opt:b": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-inference-014::opt:c": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-inference-014::opt:d": {
    "text": "Calificación por lotes mensual"
  },
  "item:reinforce-d1-inference-015": {
    "stem": "Un portal de investigación recibe una solicitud de imagen satelital a la vez. Cada imagen es grande, el procesamiento tarda minutos y los usuarios reciben un enlace cuando está lista.",
    "explanation": "Una solicitud grande y lenta con entrega posterior es asíncrona.",
    "decidingClue": "una solicitud de imagen satelital a la vez; los usuarios reciben un enlace cuando está lista",
    "whyClosestDistractorIsWrong": "La inferencia en tiempo real respondería mientras el usuario espera."
  },
  "item:reinforce-d1-inference-015::opt:a": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-inference-015::opt:b": {
    "text": "Inferencia en tiempo real"
  },
  "item:reinforce-d1-inference-015::opt:c": {
    "text": "Inferencia sin servidor"
  },
  "item:reinforce-d1-inference-015::opt:d": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-inference-016": {
    "stem": "Una aplicación de demostración puede no usarse durante semanas, pero cuando un visitante la prueba, espera una respuesta de predicción en pantalla.",
    "explanation": "El visitante aún necesita una respuesta interactiva, y los períodos de inactividad hacen atractivo el escalado a cero.",
    "decidingClue": "sin uso durante semanas; el visitante espera una predicción en pantalla",
    "whyClosestDistractorIsWrong": "La inferencia por lotes no atiende una solicitud interactiva en pantalla de un visitante."
  },
  "item:reinforce-d1-inference-016::opt:a": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-inference-016::opt:b": {
    "text": "Inferencia sin servidor"
  },
  "item:reinforce-d1-inference-016::opt:c": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-inference-016::opt:d": {
    "text": "Inferencia programada"
  },
  "unit:domain1-aws-services": {
    "title": "¿Qué servicio de AWS es realmente el adecuado?",
    "shortTitle": "Selección de servicios de AWS",
    "weakArea": "Repasa los servicios de lenguaje diseñados para un propósito específico frente a las capacidades de los modelos fundacionales.",
    "reason": "Se recomienda cuando los resultados de selección de servicios de los Objetivos 1.2.5 o 1.3.4 están por debajo del 70 %.",
    "taskStatement": "Unidades de refuerzo del Dominio 1"
  },
  "unit:domain1-aws-services::rapidReview": {
    "summary": "Elige el servicio según el verbo de la tarea: visualizar, consultar, almacenar en un data warehouse, transformar, comprender texto, generar con un modelo fundacional, transcribir voz, convertir texto en voz, conversar, buscar documentos, extraer campos de documentos escaneados, compartir features, registrar modelos o monitorear el comportamiento en producción."
  },
  "unit:domain1-aws-services::rapidReview::table:0:0": {
    "text": "Amazon Quick"
  },
  "unit:domain1-aws-services::rapidReview::table:0:1": {
    "text": "Paneles de BI, visualizaciones, información generada por IA, preguntas en lenguaje natural sobre datos empresariales"
  },
  "unit:domain1-aws-services::rapidReview::table:0:2": {
    "text": "No es SQL de Athena, el data warehouse de Redshift ni el ETL de Glue"
  },
  "unit:domain1-aws-services::rapidReview::table:1:0": {
    "text": "Amazon Comprehend"
  },
  "unit:domain1-aws-services::rapidReview::table:1:1": {
    "text": "PLN diseñado para un propósito específico: sentimiento, entidades, frases clave, PII, toxicidad"
  },
  "unit:domain1-aws-services::rapidReview::table:1:2": {
    "text": "Bedrock puede analizar texto mediante prompting, pero Comprehend es la respuesta directa de PLN administrado"
  },
  "unit:domain1-aws-services::rapidReview::table:2:0": {
    "text": "Transcribe / Polly / Lex"
  },
  "unit:domain1-aws-services::rapidReview::table:2:1": {
    "text": "Voz a texto / texto a voz / bots conversacionales"
  },
  "unit:domain1-aws-services::rapidReview::table:2:2": {
    "text": "Analiza las transcripciones después de usar Transcribe; no envíes las llamadas sin procesar a Comprehend"
  },
  "unit:domain1-aws-services::rapidReview::table:3:0": {
    "text": "Kendra / Textract"
  },
  "unit:domain1-aws-services::rapidReview::table:3:1": {
    "text": "Búsqueda empresarial / extracción de documentos escaneados"
  },
  "unit:domain1-aws-services::rapidReview::table:3:2": {
    "text": "Buscar documentos relevantes frente a extraer campos de un documento"
  },
  "unit:domain1-aws-services::rapidReview::table:4:0": {
    "text": "Feature Store / Model Registry / Model Monitor"
  },
  "unit:domain1-aws-services::rapidReview::table:4:1": {
    "text": "Features reutilizables / versiones de modelos y aprobación / calidad y drift en producción"
  },
  "unit:domain1-aws-services::rapidReview::table:4:2": {
    "text": "No confundas el almacenamiento del ciclo de vida con el monitoreo en producción"
  },
  "unit:domain1-aws-services::rapidReview::clue:0": {
    "text": "Panel (dashboard) significa Quick."
  },
  "unit:domain1-aws-services::rapidReview::clue:1": {
    "text": "Voz a texto significa Transcribe."
  },
  "unit:domain1-aws-services::rapidReview::clue:2": {
    "text": "Búsqueda empresarial significa Kendra."
  },
  "unit:domain1-aws-services::rapidReview::clue:3": {
    "text": "Features reutilizables significa Feature Store."
  },
  "unit:domain1-aws-services::rapidReview::clue:4": {
    "text": "Versiones de modelos y aprobación significa Model Registry."
  },
  "unit:domain1-aws-services::rapidReview::trap:0": {
    "text": "Comprehend analiza texto, no el audio original."
  },
  "unit:domain1-aws-services::rapidReview::trap:1": {
    "text": "Model Registry no monitorea el drift; Model Monitor sí lo hace."
  },
  "unit:domain1-aws-services::rapidReview::comparison:0": {
    "label": "Quick frente a Athena",
    "text": "Quick es BI y visualización; Athena es SQL sin servidor."
  },
  "unit:domain1-aws-services::rapidReview::comparison:1": {
    "label": "Comprehend frente a Bedrock",
    "text": "Comprehend es PLN diseñado para un propósito específico; Bedrock es acceso a modelos fundacionales."
  },
  "unit:domain1-aws-services::rapidReview::comparison:2": {
    "label": "Kendra frente a Textract",
    "text": "Kendra encuentra documentos; Textract extrae campos."
  },
  "unit:domain1-aws-services::rapidReview::comparison:3": {
    "label": "Feature Store frente a Model Registry",
    "text": "Las features son entradas del modelo; las entradas del registro son versiones de modelos entrenados."
  },
  "item:reinforce-d1-services-001": {
    "stem": "Un analista de negocio quiere paneles, visualizaciones, información generada por IA y preguntas en lenguaje natural sobre datos de ventas.",
    "explanation": "Amazon Quick es el servicio de BI y paneles con exploración de datos en lenguaje natural.",
    "decidingClue": "paneles; visualizaciones; preguntas en lenguaje natural",
    "whyClosestDistractorIsWrong": "Athena ejecuta consultas SQL sin servidor; no es la capa de paneles y BI."
  },
  "item:reinforce-d1-services-001::opt:a": {
    "text": "Amazon Athena"
  },
  "item:reinforce-d1-services-001::opt:b": {
    "text": "Amazon Quick"
  },
  "item:reinforce-d1-services-001::opt:c": {
    "text": "Amazon Redshift"
  },
  "item:reinforce-d1-services-001::opt:d": {
    "text": "AWS Glue"
  },
  "item:reinforce-d1-services-002": {
    "stem": "Un ingeniero de datos necesita ejecutar SQL ad hoc directamente sobre archivos en Amazon S3 sin administrar un data warehouse.",
    "explanation": "Athena es el servicio de consultas SQL sin servidor para datos en S3.",
    "decidingClue": "SQL directamente sobre archivos en S3",
    "whyClosestDistractorIsWrong": "Redshift es un data warehouse, no la opción ligera de SQL sin servidor sobre S3."
  },
  "item:reinforce-d1-services-002::opt:a": {
    "text": "Amazon Quick"
  },
  "item:reinforce-d1-services-002::opt:b": {
    "text": "Amazon Athena"
  },
  "item:reinforce-d1-services-002::opt:c": {
    "text": "Amazon Redshift"
  },
  "item:reinforce-d1-services-002::opt:d": {
    "text": "AWS Glue"
  },
  "item:reinforce-d1-services-003": {
    "stem": "Una empresa necesita un data warehouse administrado para análisis de alto rendimiento sobre datos empresariales curados.",
    "explanation": "Redshift es el servicio de data warehouse de AWS.",
    "decidingClue": "data warehouse administrado",
    "whyClosestDistractorIsWrong": "Athena consulta los datos en su lugar, pero no es la respuesta de data warehouse."
  },
  "item:reinforce-d1-services-003::opt:a": {
    "text": "AWS Glue"
  },
  "item:reinforce-d1-services-003::opt:b": {
    "text": "Amazon Quick"
  },
  "item:reinforce-d1-services-003::opt:c": {
    "text": "Amazon Redshift"
  },
  "item:reinforce-d1-services-003::opt:d": {
    "text": "Amazon Athena"
  },
  "item:reinforce-d1-services-004": {
    "stem": "Un equipo debe catalogar datos y crear trabajos de ETL que transformen archivos sin procesar en tablas listas para análisis.",
    "explanation": "Glue se utiliza para ETL y el Data Catalog.",
    "decidingClue": "catalogar datos; trabajos de ETL",
    "whyClosestDistractorIsWrong": "Quick es para el consumo de BI, no para la etapa de ETL/catálogo."
  },
  "item:reinforce-d1-services-004::opt:a": {
    "text": "AWS Glue"
  },
  "item:reinforce-d1-services-004::opt:b": {
    "text": "Amazon Quick"
  },
  "item:reinforce-d1-services-004::opt:c": {
    "text": "Amazon Athena"
  },
  "item:reinforce-d1-services-004::opt:d": {
    "text": "Amazon Redshift"
  },
  "item:reinforce-d1-services-005": {
    "stem": "Una plataforma social quiere detectar lenguaje dañino en comentarios en inglés sin entrenar su propio modelo.",
    "explanation": "Amazon Comprehend incluye funciones de confianza y seguridad de texto, como la detección de toxicidad.",
    "decidingClue": "lenguaje dañino en comentarios",
    "whyClosestDistractorIsWrong": "Rekognition analiza imágenes y video, no comentarios de texto."
  },
  "item:reinforce-d1-services-005::opt:a": {
    "text": "Amazon Polly"
  },
  "item:reinforce-d1-services-005::opt:b": {
    "text": "Amazon Comprehend"
  },
  "item:reinforce-d1-services-005::opt:c": {
    "text": "Amazon Lex"
  },
  "item:reinforce-d1-services-005::opt:d": {
    "text": "Amazon Rekognition"
  },
  "item:reinforce-d1-services-006": {
    "stem": "¿Cuáles DOS servicios de AWS pueden identificar el sentimiento en reseñas de hotel escritas, cuando una opción es un servicio de PLN diseñado para un propósito específico y la otra es un servicio de modelos fundacionales?",
    "explanation": "Comprehend es el servicio de análisis de texto diseñado para un propósito específico; los modelos fundacionales de Bedrock pueden clasificar el sentimiento mediante prompting.",
    "decidingClue": "sentimiento en reseñas escritas; dos servicios",
    "whyClosestDistractorIsWrong": "Polly convierte texto en voz; no analiza el sentimiento."
  },
  "item:reinforce-d1-services-006::opt:a": {
    "text": "Amazon Comprehend"
  },
  "item:reinforce-d1-services-006::opt:b": {
    "text": "Amazon Polly"
  },
  "item:reinforce-d1-services-006::opt:c": {
    "text": "Amazon Bedrock"
  },
  "item:reinforce-d1-services-006::opt:d": {
    "text": "Amazon Transcribe"
  },
  "item:reinforce-d1-services-006::opt:e": {
    "text": "Amazon Rekognition"
  },
  "item:reinforce-d1-services-007": {
    "stem": "Un producto necesita resúmenes generados y análisis abierto a partir de un modelo fundacional.",
    "explanation": "Bedrock es el servicio administrado para usar modelos fundacionales en generación y prompting.",
    "decidingClue": "resúmenes generados; modelo fundacional",
    "whyClosestDistractorIsWrong": "Comprehend extrae señales de PLN predefinidas; no es el servicio general de generación con modelos fundacionales."
  },
  "item:reinforce-d1-services-007::opt:a": {
    "text": "Amazon Comprehend"
  },
  "item:reinforce-d1-services-007::opt:b": {
    "text": "Amazon Bedrock"
  },
  "item:reinforce-d1-services-007::opt:c": {
    "text": "Amazon Polly"
  },
  "item:reinforce-d1-services-007::opt:d": {
    "text": "Amazon Lex"
  },
  "item:reinforce-d1-services-008": {
    "stem": "Una empresa quiere convertir anuncios escritos en narración hablada.",
    "explanation": "Polly convierte texto en voz.",
    "decidingClue": "anuncios escritos en narración hablada",
    "whyClosestDistractorIsWrong": "Transcribe hace lo contrario: voz a texto."
  },
  "item:reinforce-d1-services-008::opt:a": {
    "text": "Amazon Polly"
  },
  "item:reinforce-d1-services-008::opt:b": {
    "text": "Amazon Transcribe"
  },
  "item:reinforce-d1-services-008::opt:c": {
    "text": "Amazon Lex"
  },
  "item:reinforce-d1-services-008::opt:d": {
    "text": "Amazon Comprehend"
  },
  "item:reinforce-d1-services-009": {
    "stem": "Un equipo de telecomunicaciones quiere estudiar llamadas de soporte grabadas. ¿Cuál es el primer paso necesario con un servicio de IA de AWS?",
    "explanation": "El audio grabado debe convertirse a texto con Transcribe antes del análisis de texto.",
    "decidingClue": "llamadas de soporte grabadas; primer paso",
    "whyClosestDistractorIsWrong": "Comprehend puede analizar la transcripción más adelante, pero no transcribe audio directamente."
  },
  "item:reinforce-d1-services-009::opt:a": {
    "text": "Amazon Comprehend"
  },
  "item:reinforce-d1-services-009::opt:b": {
    "text": "Amazon Polly"
  },
  "item:reinforce-d1-services-009::opt:c": {
    "text": "Amazon Transcribe"
  },
  "item:reinforce-d1-services-009::opt:d": {
    "text": "Amazon Kendra"
  },
  "item:reinforce-d1-services-010": {
    "stem": "Una empresa de viajes necesita un bot de voz y texto que capture intents y slots para cambios de reserva.",
    "explanation": "Lex es el servicio de interfaz conversacional para bots, intents y slots.",
    "decidingClue": "bot de voz y texto; intents y slots",
    "whyClosestDistractorIsWrong": "Polly solo produce salida de voz; no administra los intents del diálogo."
  },
  "item:reinforce-d1-services-010::opt:a": {
    "text": "Amazon Lex"
  },
  "item:reinforce-d1-services-010::opt:b": {
    "text": "Amazon Polly"
  },
  "item:reinforce-d1-services-010::opt:c": {
    "text": "Amazon Transcribe"
  },
  "item:reinforce-d1-services-010::opt:d": {
    "text": "Amazon Textract"
  },
  "item:reinforce-d1-services-011": {
    "stem": "Una empresa de aprendizaje en línea quiere búsqueda empresarial inteligente en un gran repositorio de materiales educativos.",
    "explanation": "Kendra es el servicio de búsqueda empresarial inteligente para repositorios de documentos.",
    "decidingClue": "búsqueda empresarial en un repositorio",
    "whyClosestDistractorIsWrong": "Textract extrae campos de documentos; no realiza búsquedas en repositorios."
  },
  "item:reinforce-d1-services-011::opt:a": {
    "text": "Amazon Textract"
  },
  "item:reinforce-d1-services-011::opt:b": {
    "text": "Amazon Kendra"
  },
  "item:reinforce-d1-services-011::opt:c": {
    "text": "Amazon Comprehend"
  },
  "item:reinforce-d1-services-011::opt:d": {
    "text": "Amazon Bedrock"
  },
  "item:reinforce-d1-services-012": {
    "stem": "Un prestamista escanea PDF de solicitudes y debe extraer tablas, formularios y campos de clave-valor.",
    "explanation": "Textract extrae texto y elementos estructurados de documentos escaneados.",
    "decidingClue": "escanea PDF; extraer tablas y formularios",
    "whyClosestDistractorIsWrong": "Kendra busca documentos; no extrae campos estructurados de documentos escaneados."
  },
  "item:reinforce-d1-services-012::opt:a": {
    "text": "Amazon Kendra"
  },
  "item:reinforce-d1-services-012::opt:b": {
    "text": "Amazon Textract"
  },
  "item:reinforce-d1-services-012::opt:c": {
    "text": "Amazon Comprehend"
  },
  "item:reinforce-d1-services-012::opt:d": {
    "text": "Amazon Rekognition"
  },
  "item:reinforce-d1-services-013": {
    "stem": "Un equipo ya cuenta con texto limpio de tickets de soporte y quiere extraer entidades y frases clave.",
    "explanation": "Comprehend analiza texto existente para obtener entidades, frases clave, sentimiento y otras señales de PLN relacionadas.",
    "decidingClue": "texto limpio; extraer entidades y frases clave",
    "whyClosestDistractorIsWrong": "Textract sirve para extraer texto de documentos primero."
  },
  "item:reinforce-d1-services-013::opt:a": {
    "text": "Amazon Textract"
  },
  "item:reinforce-d1-services-013::opt:b": {
    "text": "Amazon Comprehend"
  },
  "item:reinforce-d1-services-013::opt:c": {
    "text": "Amazon Kendra"
  },
  "item:reinforce-d1-services-013::opt:d": {
    "text": "Amazon Transcribe"
  },
  "item:reinforce-d1-services-014": {
    "stem": "Varios equipos de ML necesitan compartir variables reutilizables para entrenamiento e inferencia con definiciones consistentes.",
    "explanation": "Feature Store almacena, comparte y administra de forma centralizada las features de ML.",
    "decidingClue": "compartir variables reutilizables; definiciones consistentes",
    "whyClosestDistractorIsWrong": "Data Wrangler prepara y transforma datos; no es el repositorio central de features."
  },
  "item:reinforce-d1-services-014::opt:a": {
    "text": "SageMaker Data Wrangler"
  },
  "item:reinforce-d1-services-014::opt:b": {
    "text": "SageMaker Feature Store"
  },
  "item:reinforce-d1-services-014::opt:c": {
    "text": "SageMaker Clarify"
  },
  "item:reinforce-d1-services-014::opt:d": {
    "text": "SageMaker Model Cards"
  },
  "item:reinforce-d1-services-015": {
    "stem": "Un equipo necesita preparar, limpiar y transformar datos tabulares antes del entrenamiento.",
    "explanation": "Data Wrangler es la herramienta de preparación y transformación de datos.",
    "decidingClue": "preparar, limpiar y transformar datos",
    "whyClosestDistractorIsWrong": "Feature Store almacena features reutilizables después de que se crean o se ingieren."
  },
  "item:reinforce-d1-services-015::opt:a": {
    "text": "SageMaker Feature Store"
  },
  "item:reinforce-d1-services-015::opt:b": {
    "text": "SageMaker Data Wrangler"
  },
  "item:reinforce-d1-services-015::opt:c": {
    "text": "SageMaker Model Registry"
  },
  "item:reinforce-d1-services-015::opt:d": {
    "text": "SageMaker Model Monitor"
  },
  "item:reinforce-d1-services-016": {
    "stem": "Un equipo de riesgo de modelos necesita análisis de sesgo e informes de explicabilidad para un modelo de SageMaker.",
    "explanation": "Clarify admite la detección de sesgo y la explicabilidad.",
    "decidingClue": "análisis de sesgo y explicabilidad",
    "whyClosestDistractorIsWrong": "Model Cards documentan un modelo; no son el analizador de sesgo/explicabilidad."
  },
  "item:reinforce-d1-services-016::opt:a": {
    "text": "SageMaker Clarify"
  },
  "item:reinforce-d1-services-016::opt:b": {
    "text": "SageMaker Model Cards"
  },
  "item:reinforce-d1-services-016::opt:c": {
    "text": "SageMaker Feature Store"
  },
  "item:reinforce-d1-services-016::opt:d": {
    "text": "AWS Glue"
  },
  "item:reinforce-d1-services-017": {
    "stem": "Un equipo necesita documentación estandarizada sobre el uso previsto, las advertencias y los detalles de evaluación de un modelo.",
    "explanation": "Model Cards sirven para la documentación de modelos.",
    "decidingClue": "documentación estandarizada; uso previsto; advertencias",
    "whyClosestDistractorIsWrong": "Feature Store administra features, no documentación de modelos."
  },
  "item:reinforce-d1-services-017::opt:a": {
    "text": "SageMaker Model Cards"
  },
  "item:reinforce-d1-services-017::opt:b": {
    "text": "SageMaker Feature Store"
  },
  "item:reinforce-d1-services-017::opt:c": {
    "text": "SageMaker Data Wrangler"
  },
  "item:reinforce-d1-services-017::opt:d": {
    "text": "Amazon Athena"
  },
  "item:reinforce-d1-services-018": {
    "stem": "Un equipo de plataforma quiere conservar, administrar, versionar, aprobar e implementar varios modelos entrenados.",
    "explanation": "Model Registry administra las versiones de los modelos y el estado de aprobación del ciclo de vida.",
    "decidingClue": "versionar, aprobar e implementar modelos entrenados",
    "whyClosestDistractorIsWrong": "Model Monitor supervisa la calidad y el drift de los modelos en producción; no registra versiones."
  },
  "item:reinforce-d1-services-018::opt:a": {
    "text": "SageMaker Canvas"
  },
  "item:reinforce-d1-services-018::opt:b": {
    "text": "SageMaker Model Registry"
  },
  "item:reinforce-d1-services-018::opt:c": {
    "text": "SageMaker Model Monitor"
  },
  "item:reinforce-d1-services-018::opt:d": {
    "text": "AWS Audit Manager"
  },
  "item:reinforce-d1-services-019": {
    "stem": "Después de la implementación, un equipo quiere alertas cuando cambia la calidad de los datos o aparece drift del modelo.",
    "explanation": "Model Monitor sirve para monitorear la calidad y el drift de los modelos en producción.",
    "decidingClue": "después de la implementación; aparece drift",
    "whyClosestDistractorIsWrong": "El registro rastrea versiones y el estado de aprobación, no el drift en vivo."
  },
  "item:reinforce-d1-services-019::opt:a": {
    "text": "SageMaker Model Registry"
  },
  "item:reinforce-d1-services-019::opt:b": {
    "text": "SageMaker Model Monitor"
  },
  "item:reinforce-d1-services-019::opt:c": {
    "text": "SageMaker Canvas"
  },
  "item:reinforce-d1-services-019::opt:d": {
    "text": "SageMaker Feature Store"
  },
  "item:reinforce-d1-services-020": {
    "stem": "Un usuario de negocio quiere crear un modelo de ML sin código a partir de una hoja de cálculo.",
    "explanation": "Canvas es el espacio de trabajo de ML sin código de SageMaker para usuarios de negocio.",
    "decidingClue": "usuario de negocio; modelo de ML sin código",
    "whyClosestDistractorIsWrong": "Registry administra las versiones de modelos entrenados después de su creación."
  },
  "item:reinforce-d1-services-020::opt:a": {
    "text": "SageMaker Canvas"
  },
  "item:reinforce-d1-services-020::opt:b": {
    "text": "SageMaker Model Registry"
  },
  "item:reinforce-d1-services-020::opt:c": {
    "text": "SageMaker Model Monitor"
  },
  "item:reinforce-d1-services-020::opt:d": {
    "text": "AWS Audit Manager"
  },
  "unit:domain1-reinforcement-lifecycle": {
    "title": "Del objetivo de negocio a producción",
    "shortTitle": "Ciclo de vida y MLOps",
    "weakArea": "Repasa las diferencias entre Feature Store, Model Registry, Model Monitor y CloudWatch.",
    "reason": "Se recomienda cuando los objetivos de ciclo de vida, etapas del pipeline, MLOps o métricas en producción están por debajo del 70 %.",
    "taskStatement": "Unidades de refuerzo del Dominio 1"
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview": {
    "summary": "La definición del problema es previa al trabajo con los datos. Las métricas en producción describen el comportamiento en producción. Las herramientas de MLOps separan la reutilización de features, el control de versiones de modelos, el monitoreo de modelos en producción y las alarmas operativas."
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview::table:0:0": {
    "text": "Objetivo de negocio"
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview::table:0:1": {
    "text": "Problema, métricas de éxito, restricciones legales, obligaciones regulatorias, riesgo aceptable"
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview::table:0:2": {
    "text": "Se establece antes del procesamiento de datos"
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview::table:1:0": {
    "text": "Feature Store"
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview::table:1:1": {
    "text": "Features reutilizables y consistencia"
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview::table:1:2": {
    "text": "Administración de features"
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview::table:2:0": {
    "text": "Model Registry"
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview::table:2:1": {
    "text": "Versiones de modelos, aprobación, ciclo de vida de implementación"
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview::table:2:2": {
    "text": "Estado del ciclo de vida"
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview::table:3:0": {
    "text": "Model Monitor"
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview::table:3:1": {
    "text": "Calidad del modelo y drift después de la implementación"
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview::table:3:2": {
    "text": "Monitoreo de ML"
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview::table:4:0": {
    "text": "CloudWatch"
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview::table:4:1": {
    "text": "Registros, métricas, alarmas"
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview::table:4:2": {
    "text": "Monitoreo de operaciones"
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview::clue:0": {
    "text": "Las obligaciones regulatorias aparecen por primera vez durante la definición del objetivo de negocio."
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview::clue:1": {
    "text": "La latencia promedio de inferencia es una métrica en producción (runtime)."
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview::clue:2": {
    "text": "El tiempo de entrenamiento por época no es una métrica en producción."
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview::trap:0": {
    "text": "Las etapas posteriores verifican el cumplimiento, pero las obligaciones deben conocerse desde el principio."
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview::trap:1": {
    "text": "La satisfacción del cliente es una métrica de negocio, no una métrica de rendimiento del modelo."
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview::comparison:0": {
    "label": "Registry frente a monitor",
    "text": "Registry administra las versiones de los modelos; monitor supervisa el comportamiento en producción."
  },
  "unit:domain1-reinforcement-lifecycle::rapidReview::comparison:1": {
    "label": "Feature Store frente a CloudWatch",
    "text": "Feature Store almacena entradas de ML; CloudWatch registra telemetría operativa."
  },
  "item:reinforce-d1-lifecycle-001": {
    "stem": "Un banco está iniciando un proyecto de ML contra el fraude. ¿Cuándo debe el equipo identificar por primera vez las restricciones legales, las obligaciones regulatorias, el riesgo aceptable y las métricas de éxito?",
    "explanation": "Las obligaciones y las métricas de éxito dan forma a la definición del problema antes de la recopilación y el procesamiento de datos.",
    "decidingClue": "iniciando un proyecto de ML; restricciones legales; métricas de éxito",
    "whyClosestDistractorIsWrong": "El entrenamiento solo puede implementar las restricciones después de haberlas identificado."
  },
  "item:reinforce-d1-lifecycle-001::opt:a": {
    "text": "Al establecer el objetivo de negocio"
  },
  "item:reinforce-d1-lifecycle-001::opt:b": {
    "text": "Después del entrenamiento del modelo"
  },
  "item:reinforce-d1-lifecycle-001::opt:c": {
    "text": "Solo después de la implementación"
  },
  "item:reinforce-d1-lifecycle-001::opt:d": {
    "text": "Después de que el monitoreo detecta drift"
  },
  "item:reinforce-d1-lifecycle-002": {
    "stem": "¿Qué métrica refleja mejor la eficiencia operativa en producción de un modelo en línea?",
    "explanation": "La latencia promedio de inferencia mide el tiempo de respuesta durante la inferencia en producción.",
    "decidingClue": "eficiencia operativa en producción",
    "whyClosestDistractorIsWrong": "El tiempo por época mide el entrenamiento, no la inferencia en producción."
  },
  "item:reinforce-d1-lifecycle-002::opt:a": {
    "text": "Tiempo de entrenamiento por época"
  },
  "item:reinforce-d1-lifecycle-002::opt:b": {
    "text": "Latencia promedio de inferencia"
  },
  "item:reinforce-d1-lifecycle-002::opt:c": {
    "text": "Satisfacción del cliente"
  },
  "item:reinforce-d1-lifecycle-002::opt:d": {
    "text": "Número de ejemplos de entrenamiento"
  },
  "item:reinforce-d1-lifecycle-003": {
    "stem": "Un equipo quiere features reutilizables compartidas entre el entrenamiento y la inferencia.",
    "explanation": "Feature Store almacena y comparte features con definiciones consistentes.",
    "decidingClue": "features reutilizables compartidas entre entrenamiento e inferencia",
    "whyClosestDistractorIsWrong": "Registry administra versiones de modelos, no valores de features."
  },
  "item:reinforce-d1-lifecycle-003::opt:a": {
    "text": "SageMaker Feature Store"
  },
  "item:reinforce-d1-lifecycle-003::opt:b": {
    "text": "SageMaker Model Registry"
  },
  "item:reinforce-d1-lifecycle-003::opt:c": {
    "text": "SageMaker Model Monitor"
  },
  "item:reinforce-d1-lifecycle-003::opt:d": {
    "text": "Amazon CloudWatch"
  },
  "item:reinforce-d1-lifecycle-004": {
    "stem": "La distribución de predicciones de un modelo en producción cambia después de un cambio en el comportamiento de los clientes. ¿Qué servicio monitorea directamente la calidad del modelo y el drift?",
    "explanation": "Model Monitor es la función de SageMaker para monitorear la calidad y el drift de los modelos en producción.",
    "decidingClue": "modelo en producción; cambios en la distribución",
    "whyClosestDistractorIsWrong": "Registry rastrea versiones y el estado de aprobación."
  },
  "item:reinforce-d1-lifecycle-004::opt:a": {
    "text": "SageMaker Model Monitor"
  },
  "item:reinforce-d1-lifecycle-004::opt:b": {
    "text": "SageMaker Model Registry"
  },
  "item:reinforce-d1-lifecycle-004::opt:c": {
    "text": "SageMaker Feature Store"
  },
  "item:reinforce-d1-lifecycle-004::opt:d": {
    "text": "AWS Glue"
  },
  "item:reinforce-d1-lifecycle-005": {
    "stem": "Un equipo quiere registros operativos, métricas y alarmas para un endpoint de inferencia.",
    "explanation": "CloudWatch proporciona registros operativos, métricas y alarmas.",
    "decidingClue": "registros operativos, métricas y alarmas",
    "whyClosestDistractorIsWrong": "Model Cards documentan información del modelo."
  },
  "item:reinforce-d1-lifecycle-005::opt:a": {
    "text": "Amazon CloudWatch"
  },
  "item:reinforce-d1-lifecycle-005::opt:b": {
    "text": "SageMaker Feature Store"
  },
  "item:reinforce-d1-lifecycle-005::opt:c": {
    "text": "SageMaker Model Cards"
  },
  "item:reinforce-d1-lifecycle-005::opt:d": {
    "text": "Amazon Textract"
  },
  "item:reinforce-d1-lifecycle-006": {
    "stem": "Un proceso de lanzamiento requiere que cada versión de modelo aprobada active la automatización de la implementación.",
    "explanation": "Model Registry admite el versionado y el estado de aprobación que pueden impulsar flujos de trabajo de implementación.",
    "decidingClue": "versión de modelo aprobada; automatización de la implementación",
    "whyClosestDistractorIsWrong": "Feature Store no es el flujo de trabajo de aprobación de modelos."
  },
  "item:reinforce-d1-lifecycle-006::opt:a": {
    "text": "SageMaker Model Registry"
  },
  "item:reinforce-d1-lifecycle-006::opt:b": {
    "text": "SageMaker Data Wrangler"
  },
  "item:reinforce-d1-lifecycle-006::opt:c": {
    "text": "SageMaker Feature Store"
  },
  "item:reinforce-d1-lifecycle-006::opt:d": {
    "text": "Amazon Comprehend"
  },
  "item:reinforce-d1-lifecycle-007": {
    "stem": "¿Qué orden de pipeline es más defendible?",
    "explanation": "El objetivo de negocio va primero, seguido de los datos, la preparación, el entrenamiento, la implementación y el monitoreo.",
    "decidingClue": "el objetivo de negocio va primero",
    "whyClosestDistractorIsWrong": "Entrenar antes de definir el problema corre el riesgo de optimizar el resultado equivocado."
  },
  "item:reinforce-d1-lifecycle-007::opt:a": {
    "text": "Entrenar el modelo, definir el objetivo de negocio, recopilar datos, implementar"
  },
  "item:reinforce-d1-lifecycle-007::opt:b": {
    "text": "Definir el objetivo de negocio, recopilar datos, preparar features, entrenar, implementar, monitorear"
  },
  "item:reinforce-d1-lifecycle-007::opt:c": {
    "text": "Implementar, monitorear, recopilar datos, entrenar"
  },
  "item:reinforce-d1-lifecycle-007::opt:d": {
    "text": "Preparar features, implementar, definir el objetivo de negocio, monitorear"
  },
  "item:reinforce-d1-lifecycle-008": {
    "stem": "Un líder pregunta si un proyecto de IA aumentó los ingresos por renovación. ¿Qué tipo de métrica es esta?",
    "explanation": "Los ingresos por renovación miden el impacto en el negocio, no el funcionamiento interno del modelo.",
    "decidingClue": "aumentó los ingresos por renovación",
    "whyClosestDistractorIsWrong": "Las métricas del modelo evalúan las predicciones, no directamente el valor de negocio."
  },
  "item:reinforce-d1-lifecycle-008::opt:a": {
    "text": "Métrica de rendimiento del modelo"
  },
  "item:reinforce-d1-lifecycle-008::opt:b": {
    "text": "Métrica de entrenamiento"
  },
  "item:reinforce-d1-lifecycle-008::opt:c": {
    "text": "Métrica de negocio"
  },
  "item:reinforce-d1-lifecycle-008::opt:d": {
    "text": "Métrica de latencia en producción"
  },
  "unit:domain1-model-evaluation": {
    "title": "¿Qué está haciendo mal el modelo?",
    "shortTitle": "Ajuste del modelo y métricas",
    "weakArea": "Repasa el sobreajuste, la regularización y las pistas para seleccionar métricas.",
    "reason": "Se recomienda cuando los objetivos de ajuste del modelo o de métricas de evaluación están por debajo del 70 %.",
    "taskStatement": "Unidades de refuerzo del Dominio 1"
  },
  "unit:domain1-model-evaluation::rapidReview": {
    "summary": "Un rendimiento de entrenamiento sólido junto con un rendimiento débil en datos no vistos indica sobreajuste. Entre las opciones de respuesta típicas, aumentar la regularización es un buen remedio porque reduce la complejidad. Las métricas de clasificación dependen de qué tipo de error importa; las métricas de regresión describen el error numérico."
  },
  "unit:domain1-model-evaluation::rapidReview::table:0:0": {
    "text": "Exactitud (Accuracy)"
  },
  "unit:domain1-model-evaluation::rapidReview::table:0:1": {
    "text": "Todas las predicciones correctas divididas entre todas las predicciones"
  },
  "unit:domain1-model-evaluation::rapidReview::table:0:2": {
    "text": "Se usa cuando las clases están balanceadas y todos los errores son similares"
  },
  "unit:domain1-model-evaluation::rapidReview::table:1:0": {
    "text": "Precisión (Precision)"
  },
  "unit:domain1-model-evaluation::rapidReview::table:1:1": {
    "text": "Predicciones positivas que realmente son positivas"
  },
  "unit:domain1-model-evaluation::rapidReview::table:1:2": {
    "text": "Se usa cuando los falsos positivos son costosos"
  },
  "unit:domain1-model-evaluation::rapidReview::table:2:0": {
    "text": "Exhaustividad (Recall)"
  },
  "unit:domain1-model-evaluation::rapidReview::table:2:1": {
    "text": "Positivos reales que fueron detectados"
  },
  "unit:domain1-model-evaluation::rapidReview::table:2:2": {
    "text": "Se usa cuando los falsos negativos son costosos"
  },
  "unit:domain1-model-evaluation::rapidReview::table:3:0": {
    "text": "F1"
  },
  "unit:domain1-model-evaluation::rapidReview::table:3:1": {
    "text": "Equilibrio entre precisión y exhaustividad"
  },
  "unit:domain1-model-evaluation::rapidReview::table:3:2": {
    "text": "Se usa cuando importan tanto los falsos positivos como los falsos negativos"
  },
  "unit:domain1-model-evaluation::rapidReview::table:4:0": {
    "text": "MAE / RMSE"
  },
  "unit:domain1-model-evaluation::rapidReview::table:4:1": {
    "text": "Error numérico promedio / error numérico con una penalización más fuerte para errores grandes"
  },
  "unit:domain1-model-evaluation::rapidReview::table:4:2": {
    "text": "Se usa para regresión"
  },
  "unit:domain1-model-evaluation::rapidReview::clue:0": {
    "text": "Entrenamiento sólido, datos nuevos débiles = sobreajuste."
  },
  "unit:domain1-model-evaluation::rapidReview::clue:1": {
    "text": "Elementos marcados que realmente son fraude = precisión."
  },
  "unit:domain1-model-evaluation::rapidReview::clue:2": {
    "text": "Pacientes enfermos detectados = exhaustividad (recall)."
  },
  "unit:domain1-model-evaluation::rapidReview::clue:3": {
    "text": "Error de predicción en dólares = MAE o RMSE."
  },
  "unit:domain1-model-evaluation::rapidReview::trap:0": {
    "text": "Más épocas pueden empeorar el sobreajuste."
  },
  "unit:domain1-model-evaluation::rapidReview::trap:1": {
    "text": "La exactitud puede ocultar fallos en positivos poco frecuentes."
  },
  "unit:domain1-model-evaluation::rapidReview::comparison:0": {
    "label": "Precisión frente a exhaustividad",
    "text": "La precisión reduce las marcas positivas desperdiciadas; la exhaustividad reduce los positivos reales no detectados."
  },
  "unit:domain1-model-evaluation::rapidReview::comparison:1": {
    "label": "MAE frente a RMSE",
    "text": "RMSE penaliza con más fuerza los errores grandes."
  },
  "item:reinforce-d1-eval-001": {
    "stem": "Un modelo de abandono de clientes (churn) es excelente en los datos de entrenamiento, pero débil para clientes nuevos. Entre las opciones, ¿cuál es el mejor remedio?",
    "explanation": "El patrón indica sobreajuste; una regularización más fuerte puede reducir la complejidad y mejorar la generalización.",
    "decidingClue": "rendimiento excelente en entrenamiento; rendimiento débil en clientes nuevos",
    "whyClosestDistractorIsWrong": "Más épocas pueden empeorar el sobreajuste."
  },
  "item:reinforce-d1-eval-001::opt:a": {
    "text": "Entrenar durante más épocas"
  },
  "item:reinforce-d1-eval-001::opt:b": {
    "text": "Aumentar la fuerza de la regularización"
  },
  "item:reinforce-d1-eval-001::opt:c": {
    "text": "Reducir la fuerza de la regularización"
  },
  "item:reinforce-d1-eval-001::opt:d": {
    "text": "Agregar features aleatorias"
  },
  "item:reinforce-d1-eval-002": {
    "stem": "Un clasificador de defectos pide la proporción de todas las imágenes clasificadas correctamente.",
    "explanation": "La exactitud es la proporción de todas las predicciones que son correctas.",
    "decidingClue": "proporción de todas las imágenes clasificadas correctamente",
    "whyClosestDistractorIsWrong": "La precisión trata únicamente sobre las predicciones positivas."
  },
  "item:reinforce-d1-eval-002::opt:a": {
    "text": "Precisión"
  },
  "item:reinforce-d1-eval-002::opt:b": {
    "text": "Exhaustividad"
  },
  "item:reinforce-d1-eval-002::opt:c": {
    "text": "Exactitud"
  },
  "item:reinforce-d1-eval-002::opt:d": {
    "text": "RMSE"
  },
  "item:reinforce-d1-eval-003": {
    "stem": "Un equipo de fraude quiere que se envíen menos pedidos legítimos a revisión manual entre los pedidos que el modelo marca como fraude.",
    "explanation": "La precisión responde: de los positivos predichos, ¿cuántos eran realmente positivos?",
    "decidingClue": "pedidos legítimos entre los pedidos marcados",
    "whyClosestDistractorIsWrong": "La exhaustividad se enfoca en el fraude no detectado, no en las falsas alarmas entre los casos marcados."
  },
  "item:reinforce-d1-eval-003::opt:a": {
    "text": "Exhaustividad"
  },
  "item:reinforce-d1-eval-003::opt:b": {
    "text": "Precisión"
  },
  "item:reinforce-d1-eval-003::opt:c": {
    "text": "MAE"
  },
  "item:reinforce-d1-eval-003::opt:d": {
    "text": "Pérdida de entrenamiento"
  },
  "item:reinforce-d1-eval-004": {
    "stem": "A un equipo de detección le importa sobre todo detectar la mayor cantidad posible de pacientes genuinamente enfermos.",
    "explanation": "La exhaustividad mide la proporción de positivos reales detectados.",
    "decidingClue": "detectar la mayor cantidad posible de pacientes genuinamente enfermos",
    "whyClosestDistractorIsWrong": "La precisión reduciría los falsos positivos, no los pacientes enfermos no detectados."
  },
  "item:reinforce-d1-eval-004::opt:a": {
    "text": "Exhaustividad"
  },
  "item:reinforce-d1-eval-004::opt:b": {
    "text": "Precisión"
  },
  "item:reinforce-d1-eval-004::opt:c": {
    "text": "Exactitud"
  },
  "item:reinforce-d1-eval-004::opt:d": {
    "text": "RMSE"
  },
  "item:reinforce-d1-eval-005": {
    "stem": "Un modelo de moderación necesita una única puntuación que equilibre la precisión y la exhaustividad.",
    "explanation": "F1 equilibra la precisión y la exhaustividad.",
    "decidingClue": "equilibra la precisión y la exhaustividad",
    "whyClosestDistractorIsWrong": "La exactitud puede ocultar errores en la clase minoritaria."
  },
  "item:reinforce-d1-eval-005::opt:a": {
    "text": "Exactitud"
  },
  "item:reinforce-d1-eval-005::opt:b": {
    "text": "Puntuación F1"
  },
  "item:reinforce-d1-eval-005::opt:c": {
    "text": "MAE"
  },
  "item:reinforce-d1-eval-005::opt:d": {
    "text": "Tiempo de entrenamiento"
  },
  "item:reinforce-d1-eval-006": {
    "stem": "Un modelo de precios de vivienda predice valores en dólares, y el equipo quiere el error absoluto promedio en dólares.",
    "explanation": "El error absoluto medio reporta el error numérico absoluto promedio de la predicción.",
    "decidingClue": "error absoluto promedio en dólares",
    "whyClosestDistractorIsWrong": "La exactitud es para clasificación, no para errores numéricos de precio."
  },
  "item:reinforce-d1-eval-006::opt:a": {
    "text": "MAE"
  },
  "item:reinforce-d1-eval-006::opt:b": {
    "text": "Exactitud"
  },
  "item:reinforce-d1-eval-006::opt:c": {
    "text": "Precisión"
  },
  "item:reinforce-d1-eval-006::opt:d": {
    "text": "Exhaustividad"
  },
  "item:reinforce-d1-eval-007": {
    "stem": "Un equipo de pronóstico de demanda quiere una métrica de error de regresión que penalice con más fuerza los errores grandes.",
    "explanation": "RMSE eleva al cuadrado los errores antes de promediarlos, por lo que los errores más grandes cuentan con más peso.",
    "decidingClue": "penaliza con más fuerza los errores grandes",
    "whyClosestDistractorIsWrong": "MAE trata cada error absoluto de forma lineal."
  },
  "item:reinforce-d1-eval-007::opt:a": {
    "text": "Puntuación F1"
  },
  "item:reinforce-d1-eval-007::opt:b": {
    "text": "RMSE"
  },
  "item:reinforce-d1-eval-007::opt:c": {
    "text": "Exhaustividad"
  },
  "item:reinforce-d1-eval-007::opt:d": {
    "text": "Precisión"
  },
  "item:reinforce-d1-eval-008": {
    "stem": "Un modelo tiene un rendimiento deficiente tanto en los datos de entrenamiento como en los de validación. ¿Qué término encaja mejor?",
    "explanation": "Un rendimiento débil tanto en entrenamiento como en validación sugiere que el modelo es demasiado simple o está subentrenado.",
    "decidingClue": "deficiente tanto en entrenamiento como en validación",
    "whyClosestDistractorIsWrong": "El sobreajuste tiene un rendimiento sólido en entrenamiento y débil en datos no vistos."
  },
  "item:reinforce-d1-eval-008::opt:a": {
    "text": "Sobreajuste"
  },
  "item:reinforce-d1-eval-008::opt:b": {
    "text": "Subajuste"
  },
  "item:reinforce-d1-eval-008::opt:c": {
    "text": "Regularización"
  },
  "item:reinforce-d1-eval-008::opt:d": {
    "text": "Inferencia"
  },
  "unit:domain1-reinforcement-checkpoint": {
    "title": "Punto de control de refuerzo del Dominio 1",
    "shortTitle": "Punto de control mixto",
    "weakArea": "Repaso combinado de las áreas débiles actuales del Dominio 1.",
    "reason": "Úsalo después de las unidades enfocadas para verificar que las distinciones se transfieran a un nuevo enunciado.",
    "taskStatement": "Unidades de refuerzo del Dominio 1"
  },
  "unit:domain1-reinforcement-checkpoint::rapidReview": {
    "summary": "Este punto de control combina las distinciones reforzadas sin retroalimentación inmediata en el primer intento. Úsalo para comprobar si las pistas se reconocen de forma automática incluso con un enunciado diferente."
  },
  "unit:domain1-reinforcement-checkpoint::rapidReview::table:0:0": {
    "text": "Modos de inferencia"
  },
  "unit:domain1-reinforcement-checkpoint::rapidReview::table:0:1": {
    "text": "7 preguntas"
  },
  "unit:domain1-reinforcement-checkpoint::rapidReview::table:0:2": {
    "text": "conjunto de datos/cronograma, latencia de la solicitud, carga útil grande, tráfico inactivo"
  },
  "unit:domain1-reinforcement-checkpoint::rapidReview::table:1:0": {
    "text": "Selección de servicios de AWS"
  },
  "unit:domain1-reinforcement-checkpoint::rapidReview::table:1:1": {
    "text": "7 preguntas"
  },
  "unit:domain1-reinforcement-checkpoint::rapidReview::table:1:2": {
    "text": "BI, PLN, voz, búsqueda, extracción, ciclo de vida de SageMaker"
  },
  "unit:domain1-reinforcement-checkpoint::rapidReview::table:2:0": {
    "text": "Ciclo de vida y MLOps"
  },
  "unit:domain1-reinforcement-checkpoint::rapidReview::table:2:1": {
    "text": "3 preguntas"
  },
  "unit:domain1-reinforcement-checkpoint::rapidReview::table:2:2": {
    "text": "objetivo de negocio, métricas en producción, monitoreo en producción"
  },
  "unit:domain1-reinforcement-checkpoint::rapidReview::table:3:0": {
    "text": "Ajuste del modelo y evaluación"
  },
  "unit:domain1-reinforcement-checkpoint::rapidReview::table:3:1": {
    "text": "3 preguntas"
  },
  "unit:domain1-reinforcement-checkpoint::rapidReview::table:3:2": {
    "text": "sobreajuste, regularización, métricas de clasificación y regresión"
  },
  "unit:domain1-reinforcement-checkpoint::rapidReview::clue:0": {
    "text": "Lee primero el requisito de negocio y luego elige el servicio o la métrica."
  },
  "unit:domain1-reinforcement-checkpoint::rapidReview::clue:1": {
    "text": "El sustantivo exacto es menos importante que la pista que hace necesaria la respuesta."
  },
  "unit:domain1-reinforcement-checkpoint::rapidReview::trap:0": {
    "text": "No reutilices ciegamente el patrón de la última respuesta."
  },
  "unit:domain1-reinforcement-checkpoint::rapidReview::trap:1": {
    "text": "No se muestra si la respuesta es correcta hasta que se completa el primer intento."
  },
  "unit:domain1-reinforcement-checkpoint::rapidReview::comparison:0": {
    "label": "Unidades enfocadas frente al punto de control",
    "text": "Las unidades enfocadas enseñan la pista; este punto de control evalúa la transferencia."
  },
  "item:reinforce-d1-checkpoint-001": {
    "stem": "Una agencia de salud pública califica un conjunto de datos históricos completo una vez al mes y escribe los resultados en Amazon S3 para un informe matutino.",
    "explanation": "La entrada es un conjunto de datos completo y el trabajo se ejecuta según un cronograma mensual, por lo que Batch Transform es la opción adecuada.",
    "decidingClue": "conjunto de datos históricos completo una vez al mes",
    "whyClosestDistractorIsWrong": "La inferencia asíncrona maneja solicitudes individuales en cola, no un trabajo programado sobre un conjunto de datos completo."
  },
  "item:reinforce-d1-checkpoint-001::opt:a": {
    "text": "Inferencia en tiempo real"
  },
  "item:reinforce-d1-checkpoint-001::opt:b": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-checkpoint-001::opt:c": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-checkpoint-001::opt:d": {
    "text": "Inferencia sin servidor"
  },
  "item:reinforce-d1-checkpoint-002": {
    "stem": "Un equipo de medios envía archivos de video individuales de 900 MB para calificación de calidad. Cada solicitud puede tardar 40 minutos, y quien la envía revisa el resultado almacenado más tarde.",
    "explanation": "Las cargas útiles individuales grandes con procesamiento prolongado y recuperación posterior apuntan a la inferencia asíncrona.",
    "decidingClue": "archivos de video individuales de 900 MB; revisa el resultado almacenado más tarde",
    "whyClosestDistractorIsWrong": "La inferencia por lotes es para un trabajo sobre un conjunto de datos, no para solicitudes en cola que llegan por separado."
  },
  "item:reinforce-d1-checkpoint-002::opt:a": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-checkpoint-002::opt:b": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-checkpoint-002::opt:c": {
    "text": "Inferencia en tiempo real"
  },
  "item:reinforce-d1-checkpoint-002::opt:d": {
    "text": "Inferencia sin servidor"
  },
  "item:reinforce-d1-checkpoint-003": {
    "stem": "Una herramienta interna de cumplimiento recibe pocas solicitudes interactivas por semana. Los usuarios necesitan una respuesta inmediata, y el equipo no quiere pagar por la capacidad inactiva del endpoint.",
    "explanation": "La solicitud es interactiva, pero el tráfico es escaso y el costo de inactividad es la principal preocupación, por lo que la inferencia sin servidor es la adecuada.",
    "decidingClue": "pocas solicitudes interactivas por semana; no pagar por la capacidad inactiva del endpoint",
    "whyClosestDistractorIsWrong": "Un endpoint aprovisionado puede ser rápido, pero mantiene capacidad en ejecución durante los períodos de inactividad."
  },
  "item:reinforce-d1-checkpoint-003::opt:a": {
    "text": "Inferencia sin servidor"
  },
  "item:reinforce-d1-checkpoint-003::opt:b": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-checkpoint-003::opt:c": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-checkpoint-003::opt:d": {
    "text": "Inferencia en tiempo real aprovisionada"
  },
  "item:reinforce-d1-checkpoint-004": {
    "stem": "Una aplicación móvil recomienda el siguiente artículo inmediatamente después de que un lector abre la pantalla de inicio.",
    "explanation": "La aplicación necesita una única respuesta inmediata para una acción interactiva.",
    "decidingClue": "inmediatamente después de que un lector abre la pantalla de inicio",
    "whyClosestDistractorIsWrong": "La inferencia por lotes no puede responder mientras un usuario espera dentro de una aplicación."
  },
  "item:reinforce-d1-checkpoint-004::opt:a": {
    "text": "Inferencia en tiempo real"
  },
  "item:reinforce-d1-checkpoint-004::opt:b": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-checkpoint-004::opt:c": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-checkpoint-004::opt:d": {
    "text": "Inferencia sin servidor"
  },
  "item:reinforce-d1-checkpoint-005": {
    "stem": "Una ciudad procesa millones de registros de sensores después de la medianoche y almacena las puntuaciones de anomalías antes de que llegue el personal.",
    "explanation": "Procesar millones de registros fuera de línea según un cronograma es inferencia por lotes.",
    "decidingClue": "millones de registros después de la medianoche",
    "whyClosestDistractorIsWrong": "La inferencia asíncrona maneja solicitudes individuales de larga duración, no un barrido programado de un conjunto de datos."
  },
  "item:reinforce-d1-checkpoint-005::opt:a": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-checkpoint-005::opt:b": {
    "text": "Inferencia en tiempo real"
  },
  "item:reinforce-d1-checkpoint-005::opt:c": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-checkpoint-005::opt:d": {
    "text": "Inferencia sin servidor"
  },
  "item:reinforce-d1-checkpoint-006": {
    "stem": "Un servicio de documentos acepta un PDF de 700 MB a la vez y almacena los resultados de extracción cuando el modelo de larga duración termina.",
    "explanation": "Una solicitud grande individual con resultados almacenados después de un procesamiento prolongado es inferencia asíncrona.",
    "decidingClue": "un PDF de 700 MB a la vez; almacena los resultados cuando termina",
    "whyClosestDistractorIsWrong": "El enunciado trata sobre documentos que llegan individualmente, no sobre un conjunto de datos completo programado."
  },
  "item:reinforce-d1-checkpoint-006::opt:a": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-checkpoint-006::opt:b": {
    "text": "Inferencia sin servidor"
  },
  "item:reinforce-d1-checkpoint-006::opt:c": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-checkpoint-006::opt:d": {
    "text": "Inferencia en tiempo real"
  },
  "item:reinforce-d1-checkpoint-007": {
    "stem": "Una aplicación de demostración puede no usarse durante semanas, pero cuando un visitante la prueba, espera una respuesta de predicción en pantalla.",
    "explanation": "El visitante aún necesita una respuesta interactiva, y los períodos de inactividad hacen atractivo el escalado a cero.",
    "decidingClue": "sin uso durante semanas; el visitante espera una predicción en pantalla",
    "whyClosestDistractorIsWrong": "La inferencia por lotes no atiende una solicitud interactiva en pantalla de un visitante."
  },
  "item:reinforce-d1-checkpoint-007::opt:a": {
    "text": "Batch Transform"
  },
  "item:reinforce-d1-checkpoint-007::opt:b": {
    "text": "Inferencia sin servidor"
  },
  "item:reinforce-d1-checkpoint-007::opt:c": {
    "text": "Inferencia asíncrona"
  },
  "item:reinforce-d1-checkpoint-007::opt:d": {
    "text": "Inferencia programada"
  },
  "item:reinforce-d1-checkpoint-008": {
    "stem": "Un analista de negocio quiere paneles, visualizaciones, información generada por IA y preguntas en lenguaje natural sobre datos de ventas.",
    "explanation": "Amazon Quick es el servicio de BI y paneles con exploración de datos en lenguaje natural.",
    "decidingClue": "paneles; visualizaciones; preguntas en lenguaje natural",
    "whyClosestDistractorIsWrong": "Athena ejecuta consultas SQL sin servidor; no es la capa de paneles y BI."
  },
  "item:reinforce-d1-checkpoint-008::opt:a": {
    "text": "Amazon Athena"
  },
  "item:reinforce-d1-checkpoint-008::opt:b": {
    "text": "Amazon Quick"
  },
  "item:reinforce-d1-checkpoint-008::opt:c": {
    "text": "Amazon Redshift"
  },
  "item:reinforce-d1-checkpoint-008::opt:d": {
    "text": "AWS Glue"
  },
  "item:reinforce-d1-checkpoint-009": {
    "stem": "Una plataforma social quiere detectar lenguaje dañino en comentarios en inglés sin entrenar su propio modelo.",
    "explanation": "Amazon Comprehend incluye funciones de confianza y seguridad de texto, como la detección de toxicidad.",
    "decidingClue": "lenguaje dañino en comentarios",
    "whyClosestDistractorIsWrong": "Rekognition analiza imágenes y video, no comentarios de texto."
  },
  "item:reinforce-d1-checkpoint-009::opt:a": {
    "text": "Amazon Polly"
  },
  "item:reinforce-d1-checkpoint-009::opt:b": {
    "text": "Amazon Comprehend"
  },
  "item:reinforce-d1-checkpoint-009::opt:c": {
    "text": "Amazon Lex"
  },
  "item:reinforce-d1-checkpoint-009::opt:d": {
    "text": "Amazon Rekognition"
  },
  "item:reinforce-d1-checkpoint-010": {
    "stem": "Un equipo de telecomunicaciones quiere estudiar llamadas de soporte grabadas. ¿Cuál es el primer paso necesario con un servicio de IA de AWS?",
    "explanation": "El audio grabado debe convertirse a texto con Transcribe antes del análisis de texto.",
    "decidingClue": "llamadas de soporte grabadas; primer paso",
    "whyClosestDistractorIsWrong": "Comprehend puede analizar la transcripción más adelante, pero no transcribe audio directamente."
  },
  "item:reinforce-d1-checkpoint-010::opt:a": {
    "text": "Amazon Comprehend"
  },
  "item:reinforce-d1-checkpoint-010::opt:b": {
    "text": "Amazon Polly"
  },
  "item:reinforce-d1-checkpoint-010::opt:c": {
    "text": "Amazon Transcribe"
  },
  "item:reinforce-d1-checkpoint-010::opt:d": {
    "text": "Amazon Kendra"
  },
  "item:reinforce-d1-checkpoint-011": {
    "stem": "Una empresa de aprendizaje en línea quiere búsqueda empresarial inteligente en un gran repositorio de materiales educativos.",
    "explanation": "Kendra es el servicio de búsqueda empresarial inteligente para repositorios de documentos.",
    "decidingClue": "búsqueda empresarial en un repositorio",
    "whyClosestDistractorIsWrong": "Textract extrae campos de documentos; no realiza búsquedas en repositorios."
  },
  "item:reinforce-d1-checkpoint-011::opt:a": {
    "text": "Amazon Textract"
  },
  "item:reinforce-d1-checkpoint-011::opt:b": {
    "text": "Amazon Kendra"
  },
  "item:reinforce-d1-checkpoint-011::opt:c": {
    "text": "Amazon Comprehend"
  },
  "item:reinforce-d1-checkpoint-011::opt:d": {
    "text": "Amazon Bedrock"
  },
  "item:reinforce-d1-checkpoint-012": {
    "stem": "Varios equipos de ML necesitan compartir variables reutilizables para entrenamiento e inferencia con definiciones consistentes.",
    "explanation": "Feature Store almacena, comparte y administra de forma centralizada las features de ML.",
    "decidingClue": "compartir variables reutilizables; definiciones consistentes",
    "whyClosestDistractorIsWrong": "Data Wrangler prepara y transforma datos; no es el repositorio central de features."
  },
  "item:reinforce-d1-checkpoint-012::opt:a": {
    "text": "SageMaker Data Wrangler"
  },
  "item:reinforce-d1-checkpoint-012::opt:b": {
    "text": "SageMaker Feature Store"
  },
  "item:reinforce-d1-checkpoint-012::opt:c": {
    "text": "SageMaker Clarify"
  },
  "item:reinforce-d1-checkpoint-012::opt:d": {
    "text": "SageMaker Model Cards"
  },
  "item:reinforce-d1-checkpoint-013": {
    "stem": "Un equipo de plataforma quiere conservar, administrar, versionar, aprobar e implementar varios modelos entrenados.",
    "explanation": "Model Registry administra las versiones de los modelos y el estado de aprobación del ciclo de vida.",
    "decidingClue": "versionar, aprobar e implementar modelos entrenados",
    "whyClosestDistractorIsWrong": "Model Monitor supervisa la calidad y el drift de los modelos en producción; no registra versiones."
  },
  "item:reinforce-d1-checkpoint-013::opt:a": {
    "text": "SageMaker Canvas"
  },
  "item:reinforce-d1-checkpoint-013::opt:b": {
    "text": "SageMaker Model Registry"
  },
  "item:reinforce-d1-checkpoint-013::opt:c": {
    "text": "SageMaker Model Monitor"
  },
  "item:reinforce-d1-checkpoint-013::opt:d": {
    "text": "AWS Audit Manager"
  },
  "item:reinforce-d1-checkpoint-014": {
    "stem": "Después de la implementación, un equipo quiere alertas cuando cambia la calidad de los datos o aparece drift del modelo.",
    "explanation": "Model Monitor sirve para monitorear la calidad y el drift de los modelos en producción.",
    "decidingClue": "después de la implementación; aparece drift",
    "whyClosestDistractorIsWrong": "El registro rastrea versiones y el estado de aprobación, no el drift en vivo."
  },
  "item:reinforce-d1-checkpoint-014::opt:a": {
    "text": "SageMaker Model Registry"
  },
  "item:reinforce-d1-checkpoint-014::opt:b": {
    "text": "SageMaker Model Monitor"
  },
  "item:reinforce-d1-checkpoint-014::opt:c": {
    "text": "SageMaker Canvas"
  },
  "item:reinforce-d1-checkpoint-014::opt:d": {
    "text": "SageMaker Feature Store"
  },
  "item:reinforce-d1-checkpoint-015": {
    "stem": "Un banco está iniciando un proyecto de ML contra el fraude. ¿Cuándo debe el equipo identificar por primera vez las restricciones legales, las obligaciones regulatorias, el riesgo aceptable y las métricas de éxito?",
    "explanation": "Las obligaciones y las métricas de éxito dan forma a la definición del problema antes de la recopilación y el procesamiento de datos.",
    "decidingClue": "iniciando un proyecto de ML; restricciones legales; métricas de éxito",
    "whyClosestDistractorIsWrong": "El entrenamiento solo puede implementar las restricciones después de haberlas identificado."
  },
  "item:reinforce-d1-checkpoint-015::opt:a": {
    "text": "Al establecer el objetivo de negocio"
  },
  "item:reinforce-d1-checkpoint-015::opt:b": {
    "text": "Después del entrenamiento del modelo"
  },
  "item:reinforce-d1-checkpoint-015::opt:c": {
    "text": "Solo después de la implementación"
  },
  "item:reinforce-d1-checkpoint-015::opt:d": {
    "text": "Después de que el monitoreo detecta drift"
  },
  "item:reinforce-d1-checkpoint-016": {
    "stem": "¿Qué métrica refleja mejor la eficiencia operativa en producción de un modelo en línea?",
    "explanation": "La latencia promedio de inferencia mide el tiempo de respuesta durante la inferencia en producción.",
    "decidingClue": "eficiencia operativa en producción",
    "whyClosestDistractorIsWrong": "El tiempo por época mide el entrenamiento, no la inferencia en producción."
  },
  "item:reinforce-d1-checkpoint-016::opt:a": {
    "text": "Tiempo de entrenamiento por época"
  },
  "item:reinforce-d1-checkpoint-016::opt:b": {
    "text": "Latencia promedio de inferencia"
  },
  "item:reinforce-d1-checkpoint-016::opt:c": {
    "text": "Satisfacción del cliente"
  },
  "item:reinforce-d1-checkpoint-016::opt:d": {
    "text": "Número de ejemplos de entrenamiento"
  },
  "item:reinforce-d1-checkpoint-017": {
    "stem": "Un equipo quiere registros operativos, métricas y alarmas para un endpoint de inferencia.",
    "explanation": "CloudWatch proporciona registros operativos, métricas y alarmas.",
    "decidingClue": "registros operativos, métricas y alarmas",
    "whyClosestDistractorIsWrong": "Model Cards documentan información del modelo."
  },
  "item:reinforce-d1-checkpoint-017::opt:a": {
    "text": "Amazon CloudWatch"
  },
  "item:reinforce-d1-checkpoint-017::opt:b": {
    "text": "SageMaker Feature Store"
  },
  "item:reinforce-d1-checkpoint-017::opt:c": {
    "text": "SageMaker Model Cards"
  },
  "item:reinforce-d1-checkpoint-017::opt:d": {
    "text": "Amazon Textract"
  },
  "item:reinforce-d1-checkpoint-018": {
    "stem": "Un modelo de abandono de clientes (churn) es excelente en los datos de entrenamiento, pero débil para clientes nuevos. Entre las opciones, ¿cuál es el mejor remedio?",
    "explanation": "El patrón indica sobreajuste; una regularización más fuerte puede reducir la complejidad y mejorar la generalización.",
    "decidingClue": "rendimiento excelente en entrenamiento; rendimiento débil en clientes nuevos",
    "whyClosestDistractorIsWrong": "Más épocas pueden empeorar el sobreajuste."
  },
  "item:reinforce-d1-checkpoint-018::opt:a": {
    "text": "Entrenar durante más épocas"
  },
  "item:reinforce-d1-checkpoint-018::opt:b": {
    "text": "Aumentar la fuerza de la regularización"
  },
  "item:reinforce-d1-checkpoint-018::opt:c": {
    "text": "Reducir la fuerza de la regularización"
  },
  "item:reinforce-d1-checkpoint-018::opt:d": {
    "text": "Agregar features aleatorias"
  },
  "item:reinforce-d1-checkpoint-019": {
    "stem": "Un equipo de fraude quiere que se envíen menos pedidos legítimos a revisión manual entre los pedidos que el modelo marca como fraude.",
    "explanation": "La precisión responde: de los positivos predichos, ¿cuántos eran realmente positivos?",
    "decidingClue": "pedidos legítimos entre los pedidos marcados",
    "whyClosestDistractorIsWrong": "La exhaustividad se enfoca en el fraude no detectado, no en las falsas alarmas entre los casos marcados."
  },
  "item:reinforce-d1-checkpoint-019::opt:a": {
    "text": "Exhaustividad"
  },
  "item:reinforce-d1-checkpoint-019::opt:b": {
    "text": "Precisión"
  },
  "item:reinforce-d1-checkpoint-019::opt:c": {
    "text": "MAE"
  },
  "item:reinforce-d1-checkpoint-019::opt:d": {
    "text": "Pérdida de entrenamiento"
  },
  "item:reinforce-d1-checkpoint-020": {
    "stem": "Un modelo de precios de vivienda predice valores en dólares, y el equipo quiere el error absoluto promedio en dólares.",
    "explanation": "El error absoluto medio reporta el error numérico absoluto promedio de la predicción.",
    "decidingClue": "error absoluto promedio en dólares",
    "whyClosestDistractorIsWrong": "La exactitud es para clasificación, no para errores numéricos de precio."
  },
  "item:reinforce-d1-checkpoint-020::opt:a": {
    "text": "MAE"
  },
  "item:reinforce-d1-checkpoint-020::opt:b": {
    "text": "Exactitud"
  },
  "item:reinforce-d1-checkpoint-020::opt:c": {
    "text": "Precisión"
  },
  "item:reinforce-d1-checkpoint-020::opt:d": {
    "text": "Exhaustividad"
  }
});
})();
