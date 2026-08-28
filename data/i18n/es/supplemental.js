(function(){
  "use strict";
  window.I18N_ES_SUPPLEMENTAL = Object.assign({}, window.I18N_ES_SUPPLEMENTAL || {}, {
  "q:supplemental-3-2-2-q1": {
    "stem": "Un equipo de atención al cliente usa un LLM para clasificar mensajes en un conjunto de categorías familiares. El modelo ya realiza la tarea de manera confiable, por lo que el equipo quiere usar prompting zero-shot. ¿Qué debería contener el prompt?",
    "explanation": "El prompting zero-shot utiliza únicamente una instrucción, sin ejemplos. Funciona mejor cuando la tarea ya es familiar para el modelo y no requiere demostraciones para establecer un patrón nuevo. Proporcionar un ejemplo lo convertiría en single-shot, mientras que varios ejemplos lo convertirían en few-shot.",
    "takeaway": "Zero-shot = solo instrucción, cero ejemplos."
  },
  "q:supplemental-3-2-2-q1::opt:a": {
    "text": "Varios mensajes de usuario emparejados con sus categorías correctas como demostraciones."
  },
  "q:supplemental-3-2-2-q1::opt:b": {
    "text": "Un conjunto de datos etiquetado utilizado para actualizar los pesos del modelo antes de la inferencia."
  },
  "q:supplemental-3-2-2-q1::opt:c": {
    "text": "Una instrucción clara que describa la tarea de clasificación, sin ejemplos resueltos."
  },
  "q:supplemental-3-2-2-q1::opt:d": {
    "text": "Un mensaje de usuario emparejado con la categoría correcta como demostración."
  },
  "q:supplemental-3-2-2-q2": {
    "stem": "Un equipo quiere que un LLM devuelva tickets de soporte en una estructura muy específica. El modelo comprende la tarea, pero el formato exacto de la salida es importante. El equipo elige el prompting single-shot. ¿Qué debería proporcionar?",
    "explanation": "El single-shot, también llamado prompting one-shot, incluye un ejemplo resuelto en el prompt. Esto es útil cuando la tarea en sí es comprensible, pero una demostración ayuda a establecer exactamente cómo debe verse la respuesta.",
    "takeaway": "Single-shot = un ejemplo."
  },
  "q:supplemental-3-2-2-q2::opt:a": {
    "text": "Varios ejemplos resueltos de entrada-salida que muestren variaciones de la estructura."
  },
  "q:supplemental-3-2-2-q2::opt:b": {
    "text": "Un ejemplo resuelto de entrada-salida que muestre la estructura requerida."
  },
  "q:supplemental-3-2-2-q2::opt:c": {
    "text": "Un conjunto de datos de entrenamiento etiquetado utilizado para modificar permanentemente el comportamiento del modelo."
  },
  "q:supplemental-3-2-2-q2::opt:d": {
    "text": "Solo una instrucción escrita, porque los ejemplos no se utilizan en el uso de prompts."
  },
  "q:supplemental-3-2-2-q3": {
    "stem": "El chatbot de una empresa de telecomunicaciones usa un LLM para identificar intenciones de clientes altamente especializadas. El equipo decide usar prompting few-shot para mejorar el patrón que sigue el modelo. ¿Qué datos debería contener el prompt?",
    "explanation": "El prompting few-shot proporciona al modelo varios ejemplos resueltos de la relación exacta entrada-salida que necesita reproducir. Para la detección de intenciones, la entrada es un mensaje de usuario y la salida deseada es la etiqueta de intención correcta. Esos ejemplos permanecen dentro del prompt en el momento de la inferencia; no modifican los pesos del modelo.",
    "takeaway": "Los ejemplos de few-shot deben demostrar el mapeo exacto que quieres que el modelo realice."
  },
  "q:supplemental-3-2-2-q3::opt:a": {
    "text": "Un corpus grande sin etiquetar de conversaciones de telecomunicaciones utilizado para el preentrenamiento del modelo."
  },
  "q:supplemental-3-2-2-q3::opt:b": {
    "text": "Un mensaje de usuario emparejado con la respuesta correcta del chatbot para ese mensaje."
  },
  "q:supplemental-3-2-2-q3::opt:c": {
    "text": "Varias respuestas del chatbot emparejadas con el cliente que recibió cada respuesta."
  },
  "q:supplemental-3-2-2-q3::opt:d": {
    "text": "Varios mensajes de usuario emparejados con la intención correcta de cada mensaje."
  },
  "q:supplemental-3-2-2-q4": {
    "stem": "Un analista financiero quiere que un LLM determine si una transacción debe escalarse. La decisión requiere verificar varios indicadores frente a reglas establecidas antes de llegar a una conclusión. ¿Qué técnica de ingeniería de prompts se ajusta mejor a este requisito?",
    "explanation": "El prompting de cadena de pensamiento está pensado para tareas que involucran razonamiento de varios pasos, aritmética o análisis lógico. Pedirle al modelo que considere los indicadores y criterios paso a paso lo alienta a recorrer el proceso de razonamiento antes de producir la conclusión. El compromiso (trade-off) es un mayor número de tokens de salida y, por lo tanto, un mayor costo.",
    "takeaway": "Razonamiento de varios pasos → cadena de pensamiento."
  },
  "q:supplemental-3-2-2-q4::opt:a": {
    "text": "Pedir al modelo que analice los indicadores y criterios paso a paso antes de dar su conclusión."
  },
  "q:supplemental-3-2-2-q4::opt:b": {
    "text": "Almacenar el prompt en una plantilla reutilizable y sustituir el identificador de la transacción en cada solicitud."
  },
  "q:supplemental-3-2-2-q4::opt:c": {
    "text": "No proporcionar ejemplos y solicitar únicamente la respuesta final de sí o no, sin razonamiento intermedio."
  },
  "q:supplemental-3-2-2-q4::opt:d": {
    "text": "Proporcionar un solo ejemplo únicamente para demostrar el formato deseado de la conclusión final."
  },
  "q:supplemental-3-2-2-q5": {
    "stem": "Una empresa utiliza el mismo prompt de resumen de cliente miles de veces, cambiando solo valores como el nombre del cliente, el tipo de cuenta y el período del informe. ¿Qué enfoque se ajusta mejor al requisito?",
    "explanation": "Las plantillas de prompts son estructuras de prompt reutilizables con espacios variables. Son ideales cuando las instrucciones subyacentes permanecen iguales, pero valores individuales, como el nombre de un cliente o una fecha, cambian entre solicitudes.",
    "takeaway": "Misma forma de prompt + valores cambiantes → plantilla de prompt."
  },
  "q:supplemental-3-2-2-q5::opt:a": {
    "text": "Ajustar finamente el modelo cada vez que cambia la información de la cuenta de un cliente."
  },
  "q:supplemental-3-2-2-q5::opt:b": {
    "text": "Agregar varios ejemplos resueltos a cada solicitud para que el modelo infiera la estructura del prompt."
  },
  "q:supplemental-3-2-2-q5::opt:c": {
    "text": "Crear una plantilla de prompt parametrizada con texto reutilizable y espacios variables."
  },
  "q:supplemental-3-2-2-q5::opt:d": {
    "text": "Aumentar el número de pasos de razonamiento que produce el modelo antes de cada resumen."
  },
  "q:supplemental-3-2-2-q6": {
    "stem": "Un minorista quiere que su LLM clasifique mensajes de soporte de producto inusualmente especializados. El equipo quiere el método de adaptación más económico y rápido, y no quiere ejecutar un trabajo de entrenamiento. ¿Qué enfoque se ajusta mejor?",
    "explanation": "El prompting few-shot es una técnica de adaptación en contexto: varios ejemplos se colocan directamente en el prompt, por lo que no hay ningún trabajo de entrenamiento ni modificación de los pesos del modelo. La guía lo describe como la forma más económica de adaptación cuando las demostraciones son suficientes para establecer el patrón requerido.",
    "takeaway": "Necesitas adaptación sin entrenamiento → prompting few-shot."
  },
  "q:supplemental-3-2-2-q6::opt:a": {
    "text": "Continuar el preentrenamiento del modelo con una colección grande sin etiquetar de documentos de soporte de producto."
  },
  "q:supplemental-3-2-2-q6::opt:b": {
    "text": "Incluir varios ejemplos representativos de mensaje a categoría en el prompt en el momento de la inferencia."
  },
  "q:supplemental-3-2-2-q6::opt:c": {
    "text": "Entrenar un modelo fundacional de reemplazo usando el historial completo de soporte al cliente de la empresa."
  },
  "q:supplemental-3-2-2-q6::opt:d": {
    "text": "Ejecutar un trabajo de ajuste fino usando ejemplos representativos de mensaje a categoría antes de la implementación."
  },
  "q:supplemental-3-2-2-q7": {
    "stem": "Dos equipos usan los mismos ejemplos etiquetados para adaptar un LLM. El equipo A incluye los ejemplos dentro de cada solicitud. El equipo B ejecuta un proceso de entrenamiento para que los ejemplos influyan en los pesos del modelo. ¿Qué afirmación es correcta?",
    "explanation": "La distinción está en dónde se utilizan los ejemplos. Los ejemplos de few-shot se incluyen en el prompt en el momento de la inferencia y dejan el modelo sin cambios. El ajuste fino utiliza los ejemplos durante un proceso de entrenamiento y modifica los pesos del modelo, produciendo una adaptación de comportamiento más persistente.",
    "takeaway": "Few-shot → ejemplos en el prompt.\nAjuste fino → ejemplos utilizados para modificar el modelo."
  },
  "q:supplemental-3-2-2-q7::opt:a": {
    "text": "Ambos equipos están haciendo ajuste fino porque los ejemplos siempre modifican el modelo cuando se proporcionan."
  },
  "q:supplemental-3-2-2-q7::opt:b": {
    "text": "El equipo A está usando ajuste fino, mientras que el equipo B está usando prompting few-shot."
  },
  "q:supplemental-3-2-2-q7::opt:c": {
    "text": "Ambos equipos están usando prompting few-shot porque ambos enfoques se basan en ejemplos etiquetados."
  },
  "q:supplemental-3-2-2-q7::opt:d": {
    "text": "El equipo A está usando prompting few-shot, mientras que el equipo B está usando ajuste fino."
  },
  "q:supplemental-3-2-2-q8": {
    "stem": "Un equipo usa el prompting few-shot con éxito, pero ahora cada solicitud contiene varias demostraciones largas y el costo de inferencia va en aumento. ¿Qué característica del prompting few-shot explica esto?",
    "explanation": "El prompting few-shot no realiza ningún entrenamiento. Sus ejemplos residen dentro del prompt, lo que significa que deben enviarse nuevamente en cada solicitud. Por lo tanto, esos ejemplos consumen tokens de entrada, ocupan parte de la ventana de contexto del modelo y contribuyen al costo de inferencia en cada llamada.",
    "takeaway": "Few-shot es económico de implementar, pero pagas por los ejemplos repetidamente en el momento de la inferencia."
  },
  "q:supplemental-3-2-2-q8::opt:a": {
    "text": "Los ejemplos se incluyen nuevamente en el prompt en cada solicitud de inferencia y consumen espacio de la ventana de contexto."
  },
  "q:supplemental-3-2-2-q8::opt:b": {
    "text": "Los ejemplos desencadenan un nuevo trabajo de ajuste fino cada vez que la aplicación envía una solicitud."
  },
  "q:supplemental-3-2-2-q8::opt:c": {
    "text": "Los ejemplos deben almacenarse en una base de datos vectorial antes de que el modelo pueda usarlos durante la inferencia."
  },
  "q:supplemental-3-2-2-q8::opt:d": {
    "text": "Los ejemplos aumentan permanentemente el número de parámetros del modelo después de cada solicitud de inferencia."
  },
  "q:supplemental-3-2-2-q9": {
    "stem": "Una empresa de logística necesita que su LLM clasifique excepciones de envío en seis categorías especializadas. El modelo tiene un desempeño deficiente solo con instrucciones, pero el equipo no puede modificar los pesos del modelo. ¿Qué datos del prompt respaldarían más directamente la técnica requerida?",
    "explanation": "Las instrucciones por sí solas son insuficientes, la tarea es especializada, y no está permitido modificar los pesos del modelo. Eso apunta al prompting few-shot. Las demostraciones deben representar la tarea real que se está aprendiendo: mensaje de envío como entrada → categoría de excepción como salida.",
    "takeaway": "Para la clasificación few-shot, proporciona varios pares representativos de entrada → etiqueta correcta."
  },
  "q:supplemental-3-2-2-q9::opt:a": {
    "text": "Una gran colección de registros de envío sin etiquetar proporcionada fuera del prompt de inferencia."
  },
  "q:supplemental-3-2-2-q9::opt:b": {
    "text": "Un mensaje de envío representativo emparejado con una respuesta pulida dirigida al cliente."
  },
  "q:supplemental-3-2-2-q9::opt:c": {
    "text": "Varios mensajes de envío representativos emparejados con sus categorías de excepción correctas."
  },
  "q:supplemental-3-2-2-q9::opt:d": {
    "text": "Varias categorías de envío acompañadas únicamente de definiciones, sin mensajes de entrada de ejemplo."
  },
  "q:supplemental-3-2-2-q10": {
    "stem": "Un equipo debe elegir entre prompting zero-shot, single-shot y few-shot para tres tareas. ¿Qué asignación es la más apropiada?",
    "explanation": "Esto coincide directamente con los casos de uso recomendados por la guía. Zero-shot es apropiado cuando una tarea común ya se maneja bien. Single-shot proporciona una demostración cuando es necesario establecer un formato específico. Few-shot utiliza varios ejemplos cuando la tarea o el patrón deseado es más especializado.",
    "takeaway": "Tarea común → zero-shot\nSe necesita una demostración → single-shot\nPatrón especializado → few-shot"
  },
  "q:supplemental-3-2-2-q10::opt:a": {
    "text": "Tarea común de sentimiento → few-shot; demostración de formato de salida estricto → zero-shot; patrón de clasificación especializado → single-shot."
  },
  "q:supplemental-3-2-2-q10::opt:b": {
    "text": "Tarea común de sentimiento → zero-shot; demostración de formato de salida estricto → single-shot; patrón de clasificación especializado → few-shot."
  },
  "q:supplemental-3-2-2-q10::opt:c": {
    "text": "Tarea común de sentimiento → cadena de pensamiento; demostración de formato de salida estricto → few-shot; patrón de clasificación especializado → plantilla de prompt."
  },
  "q:supplemental-3-2-2-q10::opt:d": {
    "text": "Tarea común de sentimiento → single-shot; demostración de formato de salida estricto → few-shot; patrón de clasificación especializado → zero-shot."
  }
});
})();
