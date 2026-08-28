(function(){
  "use strict";
  window.I18N_ES_CYU = Object.assign({}, window.I18N_ES_CYU || {}, {
  "q:cyu-4-1-q1": {
    "stem": "Una empresa debe garantizar que su asistente de cara al cliente nunca hable de los productos de la competencia y nunca devuelva PII de los clientes. ¿Qué funcionalidad de AWS aborda ambos requisitos?",
    "explanation": "Bedrock Guardrails ofrece temas denegados (denied topics), que bloquean temas definidos descritos en lenguaje natural, y filtros de información sensible, que detectan y redactan o bloquean la PII tanto en las entradas como en las salidas. Una sola funcionalidad cubre ambos requisitos planteados.",
    "takeaway": "Guardrails = filtros de contenido, temas denegados, filtros de palabras, filtros de PII, verificaciones de fundamentación contextual (contextual grounding checks). Es la respuesta predeterminada para \"nunca debe decir\"."
  },
  "q:cyu-4-1-q1::opt:a": {
    "text": "Amazon Bedrock Guardrails"
  },
  "q:cyu-4-1-q1::opt:b": {
    "text": "Amazon Macie"
  },
  "q:cyu-4-1-q1::opt:c": {
    "text": "Amazon SageMaker Model Monitor"
  },
  "q:cyu-4-1-q1::opt:d": {
    "text": "AWS CloudTrail"
  },
  "q:cyu-4-1-q1::incorrect:b": {
    "text": "Macie descubre y clasifica datos sensibles en Amazon S3; no filtra las respuestas del modelo en tiempo real."
  },
  "q:cyu-4-1-q1::incorrect:c": {
    "text": "Model Monitor detecta la deriva (drift) de calidad de los datos y del modelo para modelos implementados en SageMaker; no filtra contenido conversacional."
  },
  "q:cyu-4-1-q1::incorrect:d": {
    "text": "CloudTrail registra la actividad de la API con fines de auditoría; no bloquea nada."
  },
  "q:cyu-4-1-q2": {
    "stem": "Una interfaz de voz funciona bien para hablantes de la capital, pero falla con frecuencia para hablantes con acentos regionales. ¿Qué característica de la IA responsable se ve comprometida más directamente?",
    "explanation": "La inclusividad se refiere a si el sistema funciona para toda la gama de personas a las que sirve. Fallar para un subconjunto de hablantes definido por el acento es un fallo de inclusividad, y normalmente se origina en datos de entrenamiento no representativos.",
    "takeaway": "Funciona para unos grupos y no para otros = inclusividad, y detrás de eso, la representatividad de los datos."
  },
  "q:cyu-4-1-q2::opt:a": {
    "text": "Robustez"
  },
  "q:cyu-4-1-q2::opt:b": {
    "text": "Veracidad"
  },
  "q:cyu-4-1-q2::opt:c": {
    "text": "Inclusividad"
  },
  "q:cyu-4-1-q2::opt:d": {
    "text": "Explicabilidad"
  },
  "q:cyu-4-1-q2::incorrect:a": {
    "text": "La robustez se refiere al comportamiento ante entradas ruidosas o adversariales, no a un rendimiento sistemáticamente peor para un grupo de usuarios."
  },
  "q:cyu-4-1-q2::incorrect:b": {
    "text": "La veracidad tiene que ver con la fidelidad a la verdad del contenido generado."
  },
  "q:cyu-4-1-q2::incorrect:d": {
    "text": "La explicabilidad se refiere a si una decisión puede entenderse, que no es lo que falla en este caso."
  },
  "q:cyu-4-1-q3": {
    "stem": "¿Cuáles DOS afirmaciones sobre Amazon Bedrock Guardrails son correctas? (Seleccione DOS).",
    "explanation": "Guardrails opera por fuera del modelo, de modo que una sola política puede aplicarse en distintos modelos fundacionales. Las verificaciones de fundamentación contextual evalúan si una respuesta está fundamentada en la fuente proporcionada y es relevante para la consulta, y pueden bloquear las respuestas que no lo estén.",
    "takeaway": "Guardrails es una capa de políticas alrededor del modelo, tanto a la entrada como a la salida. Nunca modifica el modelo."
  },
  "q:cyu-4-1-q3::opt:a": {
    "text": "Guardrails se aplica únicamente a las salidas del modelo, nunca a las entradas."
  },
  "q:cyu-4-1-q3::opt:b": {
    "text": "Guardrails puede aplicarse de manera consistente en distintos modelos fundacionales."
  },
  "q:cyu-4-1-q3::opt:c": {
    "text": "Guardrails incluye verificaciones de fundamentación contextual que evalúan si una respuesta está respaldada por el material fuente proporcionado."
  },
  "q:cyu-4-1-q3::opt:d": {
    "text": "Guardrails elimina la necesidad de cualquier revisión humana."
  },
  "q:cyu-4-1-q3::opt:e": {
    "text": "Guardrails reentrena el modelo para eliminar comportamientos dañinos."
  },
  "q:cyu-4-1-q3::incorrect:a": {
    "text": "Guardrails evalúa tanto las entradas como las salidas."
  },
  "q:cyu-4-1-q3::incorrect:d": {
    "text": "Guardrails reduce el riesgo, pero no elimina la necesidad de supervisión humana en casos de uso de alto riesgo."
  },
  "q:cyu-4-1-q3::incorrect:e": {
    "text": "Guardrails filtra y bloquea; nunca modifica los pesos del modelo."
  },
  "q:cyu-4-1-q4": {
    "stem": "Relacione cada fallo con la característica de la IA responsable que compromete.",
    "explanation": "Cada fallo se corresponde claramente con una de las seis características mencionadas. El sesgo tiene que ver con resultados desiguales entre grupos; la robustez, con el comportamiento ante entradas difíciles; la seguridad, con el contenido dañino; la veracidad, con la verdad; y la inclusividad, con para quién funciona el sistema.",
    "takeaway": "El examen describe el daño y espera que usted nombre la característica. Aprenda las seis y sus señales características de fallo."
  },
  "q:cyu-4-1-q4::matchprompt:0": {
    "text": "Las tasas de aprobación de préstamos difieren marcadamente entre grupos demográficos con un riesgo similar"
  },
  "q:cyu-4-1-q4::matchprompt:1": {
    "text": "El clasificador falla por completo cuando recibe una entrada ligeramente malformada"
  },
  "q:cyu-4-1-q4::matchprompt:2": {
    "text": "El asistente produce consejos médicos inseguros"
  },
  "q:cyu-4-1-q4::matchprompt:3": {
    "text": "El modelo cita una normativa que no existe"
  },
  "q:cyu-4-1-q4::matchprompt:4": {
    "text": "La interfaz falla para usuarios con acentos regionales"
  },
  "q:cyu-4-1-q4::matchoption:0": {
    "text": "Sesgo"
  },
  "q:cyu-4-1-q4::matchoption:1": {
    "text": "Robustez"
  },
  "q:cyu-4-1-q4::matchoption:2": {
    "text": "Seguridad"
  },
  "q:cyu-4-1-q4::matchoption:3": {
    "text": "Veracidad"
  },
  "q:cyu-4-1-q4::matchoption:4": {
    "text": "Inclusividad"
  },
  "q:cyu-4-1-q5": {
    "stem": "¿Qué funcionalidad de Guardrails reduce más directamente las alucinaciones en una aplicación RAG?",
    "explanation": "Las verificaciones de fundamentación contextual puntúan si la respuesta de un modelo está realmente respaldada por el material fuente que se le proporcionó y si es relevante para la consulta, y pueden bloquear las respuestas que queden por debajo de un umbral. Es un control directo sobre las salidas fabricadas y sin fundamento.",
    "takeaway": "Las verificaciones de fundamentación son el control de alucinaciones dentro de Guardrails. Esto se vincula directamente con el objetivo 5.1.5."
  },
  "q:cyu-4-1-q5::opt:a": {
    "text": "Temas denegados"
  },
  "q:cyu-4-1-q5::opt:b": {
    "text": "Verificaciones de fundamentación contextual"
  },
  "q:cyu-4-1-q5::opt:c": {
    "text": "Filtros de palabras"
  },
  "q:cyu-4-1-q5::opt:d": {
    "text": "Filtros de contenido para discurso de odio"
  },
  "q:cyu-4-1-q5::incorrect:a": {
    "text": "Los temas denegados restringen el contenido temático, no la fundamentación factual."
  },
  "q:cyu-4-1-q5::incorrect:c": {
    "text": "Los filtros de palabras bloquean términos específicos, lo cual no aborda si una respuesta está respaldada por sus fuentes."
  },
  "q:cyu-4-1-q5::incorrect:d": {
    "text": "Los filtros de discurso de odio abordan el contenido dañino, no la fabricación de información."
  },
  "q:cyu-4-1-q6": {
    "stem": "¿Qué característica de la IA responsable se ocupa de si la salida generada es veraz en lugar de fabricada?",
    "explanation": "La veracidad es la característica de la IA responsable que se refiere a la fidelidad a la verdad y la fundamentación de la salida. Es la dimensión que las alucinaciones vulneran directamente.",
    "takeaway": "La veracidad es la característica anti-alucinaciones. Recuérdela como la \"V\" en la lista de seis."
  },
  "q:cyu-4-1-q6::opt:a": {
    "text": "Robustez"
  },
  "q:cyu-4-1-q6::opt:b": {
    "text": "Inclusividad"
  },
  "q:cyu-4-1-q6::opt:c": {
    "text": "Equidad"
  },
  "q:cyu-4-1-q6::opt:d": {
    "text": "Veracidad"
  },
  "q:cyu-4-1-q6::incorrect:a": {
    "text": "La robustez se refiere a la fiabilidad ante entradas difíciles."
  },
  "q:cyu-4-1-q6::incorrect:b": {
    "text": "La inclusividad se refiere a si el sistema sirve a toda la gama de usuarios."
  },
  "q:cyu-4-1-q6::incorrect:c": {
    "text": "La equidad se refiere al trato equitativo de los grupos."
  },
  "q:cyu-4-1-q7": {
    "stem": "Una organización usa modelos fundacionales de tres proveedores distintos en Amazon Bedrock y necesita una política de seguridad consistente en todos ellos. ¿Cuál es el enfoque más eficiente?",
    "explanation": "Guardrails se configura como un recurso de política independiente y se aplica en el momento de la invocación, sin importar qué modelo fundacional se use. Esto brinda una única política de seguridad aplicada de manera consistente en varios modelos, en lugar de tres enfoques divergentes basados en prompts.",
    "takeaway": "Un solo guardrail, muchos modelos. Ese es el argumento arquitectónico a favor de Guardrails frente a las reglas basadas en prompts."
  },
  "q:cyu-4-1-q7::opt:a": {
    "text": "Usar una Región de AWS distinta para cada modelo."
  },
  "q:cyu-4-1-q7::opt:b": {
    "text": "Escribir las reglas de seguridad en el system prompt de cada modelo por separado."
  },
  "q:cyu-4-1-q7::opt:c": {
    "text": "Definir un Bedrock Guardrail una sola vez y aplicarlo en todos los modelos, ya que los guardrails operan de forma independiente del modelo."
  },
  "q:cyu-4-1-q7::opt:d": {
    "text": "Realizar fine-tuning en cada modelo con ejemplos de seguridad."
  },
  "q:cyu-4-1-q7::incorrect:a": {
    "text": "La elección de la Región no tiene ninguna relación con la política de seguridad."
  },
  "q:cyu-4-1-q7::incorrect:b": {
    "text": "Las instrucciones en el prompt pueden ser anuladas mediante inyección y pueden divergir entre tres copias separadas. Un prompt no es un mecanismo de cumplimiento forzoso."
  },
  "q:cyu-4-1-q7::incorrect:d": {
    "text": "Aplicar fine-tuning a tres modelos por motivos de seguridad es costoso, lento y aun así no se aplica de manera consistente."
  },
  "q:cyu-4-1-q8": {
    "stem": "Un agente con permiso para emitir reembolsos procesa una solicitud malformada y emite un reembolso incorrecto sin escalarlo. ¿Qué características de la IA responsable están más directamente implicadas?",
    "explanation": "El sistema falló ante una entrada inusual, lo cual corresponde a la robustez, y tomó una acción dañina e irreversible en lugar de escalarla, lo cual corresponde a la seguridad. En los sistemas agénticos, la seguridad pasa a ser una cuestión sobre las acciones tomadas, no solo sobre el contenido generado.",
    "takeaway": "Para los agentes, la seguridad significa las acciones que se les permite tomar, no solo las palabras que producen."
  },
  "q:cyu-4-1-q8::opt:a": {
    "text": "Equidad y transparencia"
  },
  "q:cyu-4-1-q8::opt:b": {
    "text": "Veracidad e inclusividad"
  },
  "q:cyu-4-1-q8::opt:c": {
    "text": "Sesgo y explicabilidad"
  },
  "q:cyu-4-1-q8::opt:d": {
    "text": "Robustez y seguridad"
  },
  "q:cyu-4-1-q8::incorrect:a": {
    "text": "Ningún grupo está recibiendo un trato inequitativo, y el fallo no tiene que ver con explicar una decisión."
  },
  "q:cyu-4-1-q8::incorrect:b": {
    "text": "Nada aquí se relaciona con la veracidad del contenido generado ni con a quién sirve el sistema."
  },
  "q:cyu-4-1-q8::incorrect:c": {
    "text": "No hay evidencia de un sesgo demográfico."
  },
  "q:cyu-4-2-q1": {
    "stem": "Cordillera Bank quiere medir si su modelo de crédito produce tasas de aprobación distintas para diferentes grupos demográficos, y explicar qué características (features) impulsaron decisiones individuales. ¿Qué servicio de AWS ofrece ambas cosas?",
    "explanation": "SageMaker Clarify calcula métricas de sesgo entre grupos, tanto en los datos como en las predicciones del modelo, y proporciona explicaciones de atribución de características (feature attribution) que muestran qué entradas contribuyeron a una predicción determinada. Ambas funcionalidades están en un solo servicio.",
    "takeaway": "Clarify = detección de sesgo más atribución de características. Es la respuesta insignia del Dominio 4."
  },
  "q:cyu-4-2-q1::opt:a": {
    "text": "AWS Audit Manager"
  },
  "q:cyu-4-2-q1::opt:b": {
    "text": "Amazon SageMaker Clarify"
  },
  "q:cyu-4-2-q1::opt:c": {
    "text": "Amazon Macie"
  },
  "q:cyu-4-2-q1::opt:d": {
    "text": "Amazon Comprehend"
  },
  "q:cyu-4-2-q1::incorrect:a": {
    "text": "Audit Manager recopila evidencia para auditorías de cumplimiento; no analiza el comportamiento del modelo."
  },
  "q:cyu-4-2-q1::incorrect:c": {
    "text": "Macie descubre y clasifica datos sensibles en Amazon S3."
  },
  "q:cyu-4-2-q1::incorrect:d": {
    "text": "Comprehend realiza NLP sobre texto y no tiene ninguna función de análisis de sesgo para modelos tabulares."
  },
  "q:cyu-4-2-q2": {
    "stem": "Se sospecha que un modelo implementado hace nueve meses se ha vuelto sesgado a medida que cambió la población de clientes. ¿Qué servicio está diseñado para detectar esto a lo largo del tiempo?",
    "explanation": "Model Monitor supervisa de manera continua los modelos implementados y puede detectar la deriva (drift) de calidad de los datos, de calidad del modelo, de sesgo y de atribución de características. Detectar un cambio desde la implementación es exactamente su propósito.",
    "takeaway": "Clarify para un análisis puntual en el tiempo. Model Monitor para la deriva continua posterior a la implementación."
  },
  "q:cyu-4-2-q2::opt:a": {
    "text": "AWS CloudTrail"
  },
  "q:cyu-4-2-q2::opt:b": {
    "text": "Amazon SageMaker Model Monitor"
  },
  "q:cyu-4-2-q2::opt:c": {
    "text": "Amazon Bedrock Guardrails"
  },
  "q:cyu-4-2-q2::opt:d": {
    "text": "Amazon Kendra"
  },
  "q:cyu-4-2-q2::incorrect:a": {
    "text": "CloudTrail registra la actividad de la API; no evalúa el comportamiento del modelo."
  },
  "q:cyu-4-2-q2::incorrect:c": {
    "text": "Guardrails filtra contenido en aplicaciones generativas; no supervisa un modelo tabular implementado en busca de deriva de sesgo."
  },
  "q:cyu-4-2-q2::incorrect:d": {
    "text": "Kendra es un servicio de búsqueda empresarial."
  },
  "q:cyu-4-2-q3": {
    "stem": "Salud Norte quiere que las predicciones por debajo de un umbral de confianza sean revisadas por un profesional clínico antes de actuar sobre ellas. ¿Qué servicio de AWS implementa este patrón?",
    "explanation": "Amazon A2I incorpora flujos de trabajo de revisión humana en las predicciones de machine learning, enrutando los resultados de baja confianza o una muestra aleatoria hacia revisores humanos. Es el servicio de AWS designado para la revisión con humano en el circuito (human-in-the-loop).",
    "takeaway": "Humano en el circuito sobre predicciones equivale a Amazon A2I. Se menciona directamente en el objetivo 4.1.7."
  },
  "q:cyu-4-2-q3::opt:a": {
    "text": "Amazon Personalize"
  },
  "q:cyu-4-2-q3::opt:b": {
    "text": "Amazon Textract"
  },
  "q:cyu-4-2-q3::opt:c": {
    "text": "AWS Config"
  },
  "q:cyu-4-2-q3::opt:d": {
    "text": "Amazon Augmented AI (Amazon A2I)"
  },
  "q:cyu-4-2-q3::incorrect:a": {
    "text": "Personalize genera recomendaciones."
  },
  "q:cyu-4-2-q3::incorrect:b": {
    "text": "Textract extrae datos de documentos; puede alimentar a A2I, pero no proporciona el flujo de trabajo de revisión."
  },
  "q:cyu-4-2-q3::incorrect:c": {
    "text": "Config evalúa el cumplimiento de la configuración de los recursos."
  },
  "q:cyu-4-2-q4": {
    "stem": "Un modelo tiene un desempeño deficiente tanto en el conjunto de entrenamiento como en el conjunto de prueba. ¿Qué indica esto?",
    "explanation": "Un desempeño deficiente tanto en los datos de entrenamiento como en datos no vistos significa que el modelo no ha captado en absoluto el patrón subyacente. En el marco de sesgo-varianza, esto es sesgo alto (high bias), que corresponde a subajuste (underfitting).",
    "takeaway": "Mal en ambos = subajuste = sesgo alto. Excelente en entrenamiento, mal en prueba = sobreajuste = varianza alta."
  },
  "q:cyu-4-2-q4::opt:a": {
    "text": "Deriva de datos (data drift)"
  },
  "q:cyu-4-2-q4::opt:b": {
    "text": "Varianza alta, lo cual indica sobreajuste"
  },
  "q:cyu-4-2-q4::opt:c": {
    "text": "Sesgo alto, lo cual indica subajuste"
  },
  "q:cyu-4-2-q4::opt:d": {
    "text": "Sesgo demográfico en los datos de entrenamiento"
  },
  "q:cyu-4-2-q4::incorrect:a": {
    "text": "La deriva ocurre después de la implementación, a medida que cambian las condiciones, no durante el entrenamiento."
  },
  "q:cyu-4-2-q4::incorrect:b": {
    "text": "La varianza alta se manifiesta como un desempeño excelente en entrenamiento con un desempeño deficiente en prueba."
  },
  "q:cyu-4-2-q4::incorrect:d": {
    "text": "El sesgo demográfico produce un desempeño distinto entre grupos, no un desempeño uniformemente deficiente."
  },
  "q:cyu-4-2-q5": {
    "stem": "¿Cuáles DOS son riesgos legales de trabajar con IA generativa, según se mencionan en la guía del examen? (Seleccione DOS).",
    "explanation": "El objetivo 4.1.4 menciona las reclamaciones por infracción de propiedad intelectual, las salidas sesgadas del modelo, la pérdida de confianza del cliente, el riesgo para el usuario final y las alucinaciones. Ambas opciones seleccionadas aparecen en esa lista y ambas conllevan una consecuencia legal genuina.",
    "takeaway": "Los cinco riesgos legales: infracción de propiedad intelectual, salidas sesgadas, pérdida de confianza, daño al usuario final, alucinaciones."
  },
  "q:cyu-4-2-q5::opt:a": {
    "text": "Reclamaciones por infracción de propiedad intelectual"
  },
  "q:cyu-4-2-q5::opt:b": {
    "text": "Mayor latencia de inferencia"
  },
  "q:cyu-4-2-q5::opt:c": {
    "text": "Salidas sesgadas del modelo que generan exposición a discriminación"
  },
  "q:cyu-4-2-q5::opt:d": {
    "text": "Mayores costos de almacenamiento"
  },
  "q:cyu-4-2-q5::opt:e": {
    "text": "Ventanas de contexto más grandes"
  },
  "q:cyu-4-2-q5::incorrect:b": {
    "text": "La latencia es una preocupación operativa, no un riesgo legal."
  },
  "q:cyu-4-2-q5::incorrect:d": {
    "text": "El costo de almacenamiento es una preocupación financiera."
  },
  "q:cyu-4-2-q5::incorrect:e": {
    "text": "El tamaño de la ventana de contexto es una capacidad técnica."
  },
  "q:cyu-4-2-q6": {
    "stem": "¿Qué práctica de selección de modelos refleja mejor las consideraciones ambientales y de sostenibilidad?",
    "explanation": "Los modelos más grandes consumen sustancialmente más energía por inferencia, y el preentrenamiento (pre-training) es, con diferencia, la etapa más intensiva en energía del ciclo de vida del modelo. Dimensionar correctamente (right-sizing) y reutilizar modelos existentes son las dos prácticas que más reducen el impacto ambiental, y a la vez reducen el costo.",
    "takeaway": "El modelo más pequeño que sea suficiente, reutilizar en lugar de reentrenar. Lo ecológico y lo económico apuntan en la misma dirección."
  },
  "q:cyu-4-2-q6::opt:a": {
    "text": "Seleccionar el modelo más pequeño que cumpla con el requisito, y preferir un modelo preentrenado existente en lugar de entrenar uno nuevo."
  },
  "q:cyu-4-2-q6::opt:b": {
    "text": "Ejecutar toda la inferencia en endpoints en tiempo real, sin importar los requisitos de latencia."
  },
  "q:cyu-4-2-q6::opt:c": {
    "text": "Entrenar un modelo fundacional personalizado para cada caso de uso."
  },
  "q:cyu-4-2-q6::opt:d": {
    "text": "Seleccionar siempre el modelo disponible más grande para maximizar la calidad."
  },
  "q:cyu-4-2-q6::incorrect:b": {
    "text": "La capacidad en tiempo real inactiva desperdicia cómputo donde bastaría con un procesamiento por lotes (batch)."
  },
  "q:cyu-4-2-q6::incorrect:c": {
    "text": "El preentrenamiento por cada caso de uso es el enfoque posible más intensivo en energía."
  },
  "q:cyu-4-2-q6::incorrect:d": {
    "text": "Los modelos sobredimensionados desperdician energía y dinero sin ningún beneficio de calidad en tareas que un modelo más pequeño puede manejar."
  },
  "q:cyu-4-2-q7": {
    "stem": "Un equipo informa que un modelo tiene una precisión (accuracy) general del 91% y lo considera listo para su lanzamiento. ¿Cuál es el análisis adicional más importante antes del lanzamiento?",
    "explanation": "La precisión agregada puede ocultar grandes disparidades entre grupos: un modelo puede tener una precisión del 91% en general y, aun así, tener un desempeño mucho peor para un grupo minoritario. El análisis por subgrupos se menciona en el objetivo 4.1.7 precisamente porque las métricas agregadas ocultan problemas de equidad.",
    "takeaway": "Un solo número agregado nunca demuestra equidad. Siempre desglose la métrica por grupo."
  },
  "q:cyu-4-2-q7::opt:a": {
    "text": "Análisis por subgrupos, midiendo el desempeño por separado para cada grupo afectado."
  },
  "q:cyu-4-2-q7::opt:b": {
    "text": "Reducir la ventana de contexto."
  },
  "q:cyu-4-2-q7::opt:c": {
    "text": "Aumentar el tamaño del modelo."
  },
  "q:cyu-4-2-q7::opt:d": {
    "text": "Recalcular la precisión sobre el conjunto de entrenamiento."
  },
  "q:cyu-4-2-q7::incorrect:b": {
    "text": "La ventana de contexto es irrelevante para una evaluación de equidad."
  },
  "q:cyu-4-2-q7::incorrect:c": {
    "text": "El tamaño del modelo no aborda si los resultados son equitativos."
  },
  "q:cyu-4-2-q7::incorrect:d": {
    "text": "La precisión sobre el conjunto de entrenamiento indica el ajuste, no la equidad, y ya se sabe que es optimista."
  },
  "q:cyu-4-2-q8": {
    "stem": "Relacione cada necesidad con la herramienta de AWS que la resuelve.",
    "explanation": "Estas cuatro herramientas cubren el conjunto de herramientas de IA responsable del Dominio 4. Clarify analiza, Model Monitor observa a lo largo del tiempo, A2I incorpora humanos, y Guardrails aplica políticas sobre las entradas y salidas generativas.",
    "takeaway": "Analizar (Clarify), observar (Model Monitor), escalar a humanos (A2I), aplicar políticas (Guardrails)."
  },
  "q:cyu-4-2-q8::matchprompt:0": {
    "text": "Medir el sesgo entre grupos demográficos y explicar las contribuciones de las características"
  },
  "q:cyu-4-2-q8::matchprompt:1": {
    "text": "Detectar la deriva en la calidad de los datos, la calidad del modelo y el sesgo después de la implementación"
  },
  "q:cyu-4-2-q8::matchprompt:2": {
    "text": "Enrutar predicciones de baja confianza hacia revisores humanos"
  },
  "q:cyu-4-2-q8::matchprompt:3": {
    "text": "Bloquear contenido dañino y respuestas sin fundamento en una aplicación generativa"
  },
  "q:cyu-4-2-q8::matchoption:0": {
    "text": "Amazon SageMaker Clarify"
  },
  "q:cyu-4-2-q8::matchoption:1": {
    "text": "Amazon SageMaker Model Monitor"
  },
  "q:cyu-4-2-q8::matchoption:2": {
    "text": "Amazon Augmented AI"
  },
  "q:cyu-4-2-q8::matchoption:3": {
    "text": "Amazon Bedrock Guardrails"
  },
  "q:cyu-4-2-q9": {
    "stem": "¿Cuál es la forma más eficaz de reducir el riesgo para el usuario final cuando un asistente generativo brinda orientación en un contexto de atención médica?",
    "explanation": "El riesgo para el usuario final surge cuando una persona actúa según una salida incorrecta y resulta perjudicada. Las mitigaciones mencionadas en los objetivos 4.1.4 y 4.2.4 son la supervisión humana para decisiones consecuentes, la restricción del alcance y la transparencia de que una persona está interactuando con un sistema de IA.",
    "takeaway": "Salida consecuente más un usuario vulnerable equivale a humano en el circuito, alcance restringido y divulgación."
  },
  "q:cyu-4-2-q9::opt:a": {
    "text": "Eliminar los registros de auditoría para reducir la responsabilidad legal."
  },
  "q:cyu-4-2-q9::opt:b": {
    "text": "Mantener a un humano calificado en el circuito para las salidas consecuentes, restringir el alcance del asistente y divulgar claramente que se está usando IA."
  },
  "q:cyu-4-2-q9::opt:c": {
    "text": "Aumentar la temperature para que el modelo ofrezca más opciones."
  },
  "q:cyu-4-2-q9::opt:d": {
    "text": "Eliminar todos los guardrails para que el modelo pueda responder cualquier pregunta."
  },
  "q:cyu-4-2-q9::incorrect:a": {
    "text": "Destruir los registros de auditoría aumenta la exposición legal e incumple los requisitos de gobernanza del Dominio 5."
  },
  "q:cyu-4-2-q9::incorrect:c": {
    "text": "Una mayor variabilidad aumenta el riesgo en lugar de reducirlo."
  },
  "q:cyu-4-2-q9::incorrect:d": {
    "text": "Eliminar los guardrails elimina por completo la capa de seguridad."
  },
  "q:cyu-4-2-q10": {
    "stem": "Un conjunto de datos de entrenamiento contiene un 96% de ejemplos de una categoría de producto y un 4% distribuido entre las siete restantes. ¿Qué característica del conjunto de datos falta?",
    "explanation": "El balance significa que ninguna clase o grupo está sobrerrepresentado o subrepresentado de manera desproporcionada en relación con el uso previsto. Una división de 96/4 hará que el modelo aprenda la categoría mayoritaria y tenga un desempeño deficiente en las otras siete.",
    "takeaway": "Las cuatro características de un conjunto de datos: inclusividad, diversidad, fuentes curadas, balance."
  },
  "q:cyu-4-2-q10::opt:a": {
    "text": "Compresión"
  },
  "q:cyu-4-2-q10::opt:b": {
    "text": "Cifrado"
  },
  "q:cyu-4-2-q10::opt:c": {
    "text": "Normalización"
  },
  "q:cyu-4-2-q10::opt:d": {
    "text": "Balance"
  },
  "q:cyu-4-2-q10::incorrect:a": {
    "text": "La compresión se refiere a la eficiencia de almacenamiento."
  },
  "q:cyu-4-2-q10::incorrect:b": {
    "text": "El cifrado es un control de seguridad, no una característica de calidad del conjunto de datos."
  },
  "q:cyu-4-2-q10::incorrect:c": {
    "text": "La normalización reescala los valores de las características; no corrige el desequilibrio de clases."
  },
  "q:cyu-4-3-q1": {
    "stem": "Un equipo de gobernanza exige documentación del uso previsto, los datos de entrenamiento, los resultados de evaluación y las limitaciones conocidas de cada modelo. ¿Qué funcionalidad de AWS está diseñada para esto?",
    "explanation": "SageMaker Model Cards proporciona un registro estructurado y versionado de un modelo que abarca el uso previsto, los datos de entrenamiento, los resultados de evaluación, las limitaciones, las consideraciones éticas y el estado de aprobación. Es el artefacto de documentación y transparencia mencionado en los objetivos 4.2.2 y 5.1.2.",
    "takeaway": "La documentación de modelos para gobernanza equivale a SageMaker Model Cards. Responde preguntas en dos dominios."
  },
  "q:cyu-4-3-q1::opt:a": {
    "text": "AWS CloudTrail"
  },
  "q:cyu-4-3-q1::opt:b": {
    "text": "Amazon SageMaker Model Monitor"
  },
  "q:cyu-4-3-q1::opt:c": {
    "text": "Amazon SageMaker Model Cards"
  },
  "q:cyu-4-3-q1::opt:d": {
    "text": "Amazon Bedrock Guardrails"
  },
  "q:cyu-4-3-q1::incorrect:a": {
    "text": "CloudTrail registra las llamadas a la API, no las características del modelo."
  },
  "q:cyu-4-3-q1::incorrect:b": {
    "text": "Model Monitor detecta la deriva en modelos implementados; no es un artefacto de documentación."
  },
  "q:cyu-4-3-q1::incorrect:d": {
    "text": "Guardrails aplica la política de contenido en el momento de la inferencia."
  },
  "q:cyu-4-3-q2": {
    "stem": "¿Qué afirmación distingue correctamente la transparencia de la explicabilidad?",
    "explanation": "La transparencia es divulgación: datos de entrenamiento, uso previsto, limitaciones, desempeño y rendición de cuentas. La explicabilidad es la comprensión por decisión individual: qué entradas impulsaron esta salida en particular. Un modelo puede tener una sin la otra.",
    "takeaway": "Transparencia = qué es. Explicabilidad = por qué hizo eso. No las confunda entre sí."
  },
  "q:cyu-4-3-q2::opt:a": {
    "text": "La transparencia se refiere a la divulgación de qué es el modelo, cómo se construyó y cómo se desempeña; la explicabilidad se refiere a comprender por qué se produjo una salida específica."
  },
  "q:cyu-4-3-q2::opt:b": {
    "text": "Son sinónimos."
  },
  "q:cyu-4-3-q2::opt:c": {
    "text": "La explicabilidad es una actividad de documentación y la transparencia es una actividad técnica."
  },
  "q:cyu-4-3-q2::opt:d": {
    "text": "La transparencia se aplica únicamente a los modelos de código abierto; la explicabilidad se aplica únicamente a los modelos propietarios."
  },
  "q:cyu-4-3-q2::incorrect:b": {
    "text": "Describen propiedades distintas y se evalúan como conceptos diferenciados."
  },
  "q:cyu-4-3-q2::incorrect:c": {
    "text": "Invierte los dos conceptos."
  },
  "q:cyu-4-3-q2::incorrect:d": {
    "text": "Los modelos propietarios pueden publicar model cards, y los modelos de código abierto no son automáticamente explicables."
  },
  "q:cyu-4-3-q3": {
    "stem": "Una aseguradora regulada debe elegir entre una red neuronal profunda con un 93% de precisión y un árbol con gradient boosting con un 90% de precisión y atribución de características. La normativa exige que cada reclamación rechazada se explique mediante los factores que impulsaron la decisión. ¿Qué elección es la apropiada y por qué?",
    "explanation": "El objetivo 4.2.3 le pide sopesar la interpretabilidad frente al desempeño. Cuando un requisito legal exige una explicación por decisión individual, un modelo no explicable resulta inutilizable sin importar su precisión. La diferencia de tres puntos no compensa el incumplimiento de una obligación regulatoria vinculante.",
    "takeaway": "Cuando la normativa exige una explicación, la interpretabilidad se convierte en un requisito ineludible, no en una preferencia."
  },
  "q:cyu-4-3-q3::opt:a": {
    "text": "La red neuronal, porque la precisión siempre tiene prioridad."
  },
  "q:cyu-4-3-q3::opt:b": {
    "text": "La red neuronal, porque la atribución de características nunca es necesaria en los seguros."
  },
  "q:cyu-4-3-q3::opt:c": {
    "text": "Ninguno de los dos; en contextos regulados solo se pueden usar sistemas basados en reglas."
  },
  "q:cyu-4-3-q3::opt:d": {
    "text": "El árbol con gradient boosting, porque el requisito regulatorio de una explicación por decisión individual pesa más que la diferencia de tres puntos en precisión."
  },
  "q:cyu-4-3-q3::incorrect:a": {
    "text": "La precisión no prevalece sobre un requisito legal."
  },
  "q:cyu-4-3-q3::incorrect:b": {
    "text": "La atribución de características es precisamente lo que exigen las decisiones adversas reguladas."
  },
  "q:cyu-4-3-q3::incorrect:c": {
    "text": "Los modelos estadísticos con una explicabilidad adecuada se usan ampliamente en contextos regulados; los sistemas basados en reglas no son la única opción."
  },
  "q:cyu-4-3-q4": {
    "stem": "¿Cuáles DOS prácticas reflejan un diseño centrado en el ser humano para la IA explicable? (Seleccione DOS).",
    "explanation": "El objetivo 4.2.4 menciona explícitamente los mecanismos de retroalimentación del usuario y la transparencia en las decisiones de la IA. Los canales de retroalimentación sacan a la luz fallos que el equipo no puede ver, y la divulgación junto con el recurso humano son el núcleo de la toma de decisiones transparente en la IA.",
    "takeaway": "Divulgar, explicar al nivel del usuario, recopilar retroalimentación, ofrecer recurso humano."
  },
  "q:cyu-4-3-q4::opt:a": {
    "text": "Ofrecer mecanismos de retroalimentación del usuario, como calificaciones y una vía de corrección"
  },
  "q:cyu-4-3-q4::opt:b": {
    "text": "Ocultar a los usuarios que hay un sistema de IA involucrado, para evitar confundirlos"
  },
  "q:cyu-4-3-q4::opt:c": {
    "text": "Divulgar que un sistema de IA contribuyó a la decisión y ofrecer una vía de revisión humana"
  },
  "q:cyu-4-3-q4::opt:d": {
    "text": "Presentar los pesos crudos del modelo a los usuarios finales"
  },
  "q:cyu-4-3-q4::opt:e": {
    "text": "Eliminar todos los indicadores de confianza para que la interfaz parezca decisiva"
  },
  "q:cyu-4-3-q4::incorrect:b": {
    "text": "Ocultar la participación de la IA es lo opuesto a la transparencia en las decisiones."
  },
  "q:cyu-4-3-q4::incorrect:d": {
    "text": "Los pesos crudos carecen de sentido para un usuario final; las explicaciones deben ajustarse a la audiencia."
  },
  "q:cyu-4-3-q4::incorrect:e": {
    "text": "Suprimir la incertidumbre hace que el sistema parezca más confiable de lo que en realidad es, lo cual aumenta el riesgo para el usuario final."
  },
  "q:cyu-4-3-q5": {
    "stem": "¿Qué técnica proporciona explicabilidad para una predicción individual en lugar de transparencia sobre el modelo en general?",
    "explanation": "La atribución de características responde a la pregunta por decisión individual: para esta entrada específica, qué características empujaron la salida en qué dirección. Las otras tres opciones son divulgación sobre el modelo en su conjunto, lo cual es transparencia.",
    "takeaway": "Por decisión individual = explicabilidad. Sobre el modelo en su conjunto = transparencia."
  },
  "q:cyu-4-3-q5::opt:a": {
    "text": "Enumerar las fuentes de los datos de entrenamiento"
  },
  "q:cyu-4-3-q5::opt:b": {
    "text": "Atribución de características que muestra qué entradas contribuyeron más a esa predicción"
  },
  "q:cyu-4-3-q5::opt:c": {
    "text": "Publicar la model card"
  },
  "q:cyu-4-3-q5::opt:d": {
    "text": "Documentar el uso previsto del modelo"
  },
  "q:cyu-4-3-q5::incorrect:a": {
    "text": "La divulgación de los datos de entrenamiento es transparencia."
  },
  "q:cyu-4-3-q5::incorrect:c": {
    "text": "Una model card documenta el modelo, no una decisión individual."
  },
  "q:cyu-4-3-q5::incorrect:d": {
    "text": "La documentación del uso previsto es transparencia."
  },
  "q:cyu-4-3-q6": {
    "stem": "¿Por qué podría una organización limitar deliberadamente la cantidad de detalles que publica sobre un modelo implementado?",
    "explanation": "El objetivo 4.2.3 menciona la compensación (tradeoff) entre la seguridad del modelo y la transparencia. La divulgación detallada de la arquitectura, los umbrales y los datos de entrenamiento puede habilitar ataques adversariales o la extracción de datos, por lo que las organizaciones divulgan el uso previsto, las limitaciones y los resultados de evaluación, mientras retienen los detalles que principalmente ayudarían a un atacante.",
    "takeaway": "Divulgue lo suficiente para rendir cuentas, pero no tanto como para armar a un atacante."
  },
  "q:cyu-4-3-q6::opt:a": {
    "text": "Porque AWS prohíbe publicar información del modelo."
  },
  "q:cyu-4-3-q6::opt:b": {
    "text": "Porque las model cards no se pueden editar."
  },
  "q:cyu-4-3-q6::opt:c": {
    "text": "Porque la transparencia no tiene ningún valor."
  },
  "q:cyu-4-3-q6::opt:d": {
    "text": "Porque la divulgación completa puede ayudar a los adversarios a diseñar ataques o intentar extraer datos de entrenamiento, lo cual crea una compensación entre la transparencia y la seguridad."
  },
  "q:cyu-4-3-q6::incorrect:a": {
    "text": "No existe tal prohibición."
  },
  "q:cyu-4-3-q6::incorrect:b": {
    "text": "Las model cards se pueden editar y están versionadas."
  },
  "q:cyu-4-3-q6::incorrect:c": {
    "text": "La transparencia es un objetivo de IA responsable mencionado explícitamente a lo largo de este dominio."
  },
  "q:cyu-4-3-q7": {
    "stem": "Relacione cada artefacto con la propiedad que principalmente ofrece.",
    "explanation": "Todo lo que documente qué es el modelo, cómo se construyó o cómo se desempeña ofrece transparencia. Todo lo que muestre por qué una predicción en particular resultó como resultó ofrece explicabilidad.",
    "takeaway": "Documentos sobre el modelo = transparencia. Análisis de una decisión = explicabilidad."
  },
  "q:cyu-4-3-q7::matchprompt:0": {
    "text": "SageMaker Model Cards"
  },
  "q:cyu-4-3-q7::matchprompt:1": {
    "text": "Atribución de características de SageMaker Clarify"
  },
  "q:cyu-4-3-q7::matchprompt:2": {
    "text": "Fuentes de datos de entrenamiento publicadas y su licenciamiento"
  },
  "q:cyu-4-3-q7::matchprompt:3": {
    "text": "Gráficos de dependencia parcial (partial dependence plots)"
  },
  "q:cyu-4-3-q7::matchprompt:4": {
    "text": "Resultados de Amazon Bedrock Model Evaluation"
  },
  "q:cyu-4-3-q7::matchoption:0": {
    "text": "Transparencia"
  },
  "q:cyu-4-3-q7::matchoption:1": {
    "text": "Explicabilidad"
  },
  "q:cyu-4-3-q8": {
    "stem": "Un asistente presenta todas las respuestas con una redacción igualmente segura, incluidas las respuestas que derivó de material fuente débil o inexistente. ¿Qué principio de diseño centrado en el ser humano se está incumpliendo?",
    "explanation": "Presentar una salida incierta con la misma autoridad que una salida bien fundamentada impide que los usuarios calibren cuánto confiar en ella, lo cual aumenta directamente el riesgo para el usuario final. Señalar la confianza y las limitaciones es un principio central de diseño centrado en el ser humano para la IA explicable. Repaso del Dominio 4 Lo que debe ser capaz de hacer ☐  Nombrar las seis características de la IA responsable e identificar cuál de ellas compromete un fallo descrito. ☐  Enumerar las funcionalidades de Amazon Bedrock Guardrails y explicar que los guardrails se aplican a la entrada y a la salida, independientemente del modelo. ☐  Explicar por qué el modelo más pequeño que sea suficiente es a la vez la opción sostenible y la económica. ☐  Nombrar los cinco riesgos legales de la IA generativa y una mitigación para cada uno. ☐  Nombrar las cuatro características de un buen conjunto de datos. ☐  Distinguir el sesgo estadístico del sesgo social, y el sesgo alto de la varianza alta. ☐  Relacionar Clarify, Model Monitor, A2I y Guardrails con sus propósitos. ☐  Explicar por qué la precisión agregada nunca demuestra equidad. ☐  Distinguir la transparencia de la explicabilidad, con un ejemplo de cada una. ☐  Nombrar las herramientas que ofrecen transparencia y las que ofrecen explicabilidad. ☐  Argumentar la compensación entre interpretabilidad y desempeño en un contexto regulado. ☐  Enumerar los principios de diseño centrado en el ser humano, incluidos los mecanismos de retroalimentación y la transparencia en las decisiones de la IA. Tabla comparativa en blanco: herramientas de IA responsable Herramienta Qué hace Cuándo es la respuesta Amazon SageMaker Clarify Amazon SageMaker Model Monitor Amazon Augmented AI (A2I) Amazon Bedrock Guardrails Amazon SageMaker Model Cards Versiones completas: Tablas 4.2, 4.4 y 4.6. Diagrama en blanco: el espectro sesgo-varianza Posición Nombre Síntoma en los datos de entrenamiento Síntoma en los datos de prueba Remedio Demasiado simple Adecuado Demasiado complejo Explique esto con sus propias palabras ↺  RECUERDO ACTIVO 1. ¿Por qué un system prompt que dice \"sea justo\" no es un control de equidad? 2. ¿Cuál es la diferencia entre los dos significados de \"sesgo\" (bias) en este examen? 3. ¿Por qué un modelo con una precisión general del 91% aún necesita un análisis por subgrupos? 4. ¿Cuándo tiene la interpretabilidad prioridad sobre la precisión, y por qué? 5. ¿Por qué la transparencia tiene un costo de seguridad? 6. ¿Qué le proporciona un mecanismo de retroalimentación del usuario que la evaluación interna no proporciona? Tarjetas de términos clave del Dominio 4 Respuesta Las seis características de la IA responsable Sesgo, equidad, inclusividad, robustez, seguridad, veracidad. Veracidad Fidelidad a la verdad y fundamentación de la salida; la dimensión que vulneran las alucinaciones. Inclusividad El sistema funciona para toda la gama de personas a las que sirve. Robustez Comportamiento fiable ante entradas inusuales, ruidosas o adversariales. Bedrock Guardrails Filtros de contenido, temas denegados, filtros de palabras, filtros de información sensible, verificaciones de fundamentación contextual. Se aplica a la entrada y a la salida, independientemente del modelo. Verificación de fundamentación contextual Puntúa si una respuesta está respaldada por la fuente proporcionada y es relevante para la consulta; la bloquea si no lo está. Selección sostenible de modelos El modelo más pequeño que sea suficiente; reutilizar un modelo preentrenado en lugar de entrenar uno nuevo. Cinco riesgos legales Infracción de propiedad intelectual, salidas sesgadas, pérdida de confianza del cliente, riesgo para el usuario final, alucinaciones. Características del conjunto de datos Inclusividad, diversidad, fuentes curadas, balance. Sesgo alto Subajuste: demasiado simple, deficiente en entrenamiento y en prueba. Varianza alta Sobreajuste: demasiado sensible a los datos de entrenamiento, deficiente en datos no vistos. Sesgo social Resultados sistemáticamente injustos entre grupos demográficos. SageMaker Clarify Métricas de sesgo entre grupos más explicaciones de atribución de características. SageMaker Model Monitor Detección de deriva posterior a la implementación: calidad de los datos, calidad del modelo, sesgo, atribución de características. Amazon A2I Flujos de trabajo de revisión humana incorporados en las predicciones de ML. Análisis por subgrupos Medir el desempeño por grupo en lugar de solo en conjunto. Transparencia Divulgación de qué es el modelo, cómo se construyó, cómo se desempeña, sus limitaciones. Explicabilidad Comprender por qué se produjo una salida específica para una entrada específica. SageMaker Model Cards Documentación estructurada del modelo: uso previsto, datos, evaluación, limitaciones, aprobación. Interpretabilidad frente a desempeño Los modelos más interpretables suelen ser menos precisos; la normativa puede hacer obligatoria la interpretabilidad. Transparencia frente a seguridad La divulgación completa puede ayudar a los adversarios; divulgue información de rendición de cuentas, no la superficie de ataque. Diseño centrado en el ser humano Divulgar el uso de la IA, explicar al nivel del usuario, recopilar retroalimentación, ofrecer recurso humano, señalar la incertidumbre. Hoja de referencia rápida del Dominio 4",
    "takeaway": "Una confianza uniforme sobre evidencia no uniforme es un fallo de diseño, no una elección de estilo."
  },
  "q:cyu-4-3-q8::opt:a": {
    "text": "Minimizar la latencia"
  },
  "q:cyu-4-3-q8::opt:b": {
    "text": "Comunicar la confianza y las limitaciones al usuario"
  },
  "q:cyu-4-3-q8::opt:c": {
    "text": "Reducir el costo de tokens"
  },
  "q:cyu-4-3-q8::opt:d": {
    "text": "Maximizar el throughput"
  },
  "q:cyu-4-3-q8::incorrect:a": {
    "text": "La latencia es una propiedad operativa, no un principio de diseño para la explicabilidad."
  },
  "q:cyu-4-3-q8::incorrect:c": {
    "text": "El costo es una preocupación comercial."
  },
  "q:cyu-4-3-q8::incorrect:d": {
    "text": "El throughput es una preocupación de capacidad."
  },
  "q:cyu-service-selection-1-q8": {
    "stem": "Un pipeline de procesamiento de documentos construido sobre Amazon Textract debe enrutar las extracciones por debajo de un umbral de confianza hacia un humano. ¿Qué servicio ofrece esto?",
    "explanation": "Amazon A2I incorpora flujos de trabajo de revisión humana en las predicciones de ML mediante umbrales de confianza o muestreo aleatorio, y se integra de forma nativa con Amazon Textract y Amazon Rekognition.",
    "takeaway": "La revisión humana de predicciones equivale a A2I. El etiquetado de un conjunto de datos equivale a Ground Truth. Antes frente a después."
  },
  "q:cyu-service-selection-1-q8::opt:a": {
    "text": "Amazon Augmented AI (A2I)"
  },
  "q:cyu-service-selection-1-q8::opt:b": {
    "text": "Amazon SageMaker Ground Truth"
  },
  "q:cyu-service-selection-1-q8::opt:c": {
    "text": "AWS Config"
  },
  "q:cyu-service-selection-1-q8::opt:d": {
    "text": "Amazon Macie"
  },
  "q:cyu-service-selection-1-q8::incorrect:b": {
    "text": "Ground Truth crea conjuntos de datos etiquetados antes del entrenamiento; no revisa predicciones en vivo."
  },
  "q:cyu-service-selection-1-q8::incorrect:c": {
    "text": "Config evalúa el cumplimiento de la configuración de los recursos."
  },
  "q:cyu-service-selection-1-q8::incorrect:d": {
    "text": "Macie descubre datos sensibles en S3."
  },
  "q:cyu-service-selection-2-q2": {
    "stem": "Un asistente de cara al cliente nunca debe brindar asesoría legal, debe redactar cualquier número de tarjeta que aparezca en la conversación, y debe negarse a responder cuando las fuentes recuperadas no respalden una respuesta. ¿Qué única funcionalidad aborda las tres cosas?",
    "explanation": "Guardrails ofrece temas denegados para la restricción de temas, filtros de información sensible para detectar y redactar datos como números de tarjeta, y verificaciones de fundamentación contextual que bloquean las respuestas no respaldadas por las fuentes proporcionadas. Los tres requisitos se cubren con un único guardrail configurado.",
    "takeaway": "Los temas denegados, más los filtros de PII, más las verificaciones de fundamentación, todos residen en Guardrails. Es la navaja suiza del Dominio 4."
  },
  "q:cyu-service-selection-2-q2::opt:a": {
    "text": "Amazon Macie"
  },
  "q:cyu-service-selection-2-q2::opt:b": {
    "text": "AWS Config"
  },
  "q:cyu-service-selection-2-q2::opt:c": {
    "text": "Amazon SageMaker Model Monitor"
  },
  "q:cyu-service-selection-2-q2::opt:d": {
    "text": "Amazon Bedrock Guardrails"
  },
  "q:cyu-service-selection-2-q2::incorrect:a": {
    "text": "Macie descubre datos sensibles en S3; no filtra conversaciones en vivo."
  },
  "q:cyu-service-selection-2-q2::incorrect:b": {
    "text": "Config evalúa el cumplimiento de la configuración de los recursos."
  },
  "q:cyu-service-selection-2-q2::incorrect:c": {
    "text": "Model Monitor detecta la deriva en modelos de SageMaker implementados."
  }
});
})();
