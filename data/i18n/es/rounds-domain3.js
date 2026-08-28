(function(){
  "use strict";
  window.I18N_ES_ROUNDS = Object.assign({}, window.I18N_ES_ROUNDS || {}, {
  "domain3-source-structure-games::d3-311-model-selection-criteria-table": {
    "title": "Tabla de criterios de selección de modelos",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Guía de estudio maestra §3.1.1 Criterios de selección para elegir un modelo fundacional. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "checkLabel": "Verificar estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios completada antes de continuar."
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::dest:modality-question": {
    "label": "Modalidad / Pregunta que hacer"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::dest:modality-effect": {
    "label": "Modalidad / Cómo afecta la selección"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::dest:capability-question": {
    "label": "Precisión y capacidad / Pregunta que hacer"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::dest:capability-effect": {
    "label": "Precisión y capacidad / Cómo afecta la selección"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::dest:latency-question": {
    "label": "Latencia / Pregunta que hacer"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::dest:latency-effect": {
    "label": "Latencia / Cómo afecta la selección"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::dest:cost-question": {
    "label": "Costo / Pregunta que hacer"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::dest:cost-effect": {
    "label": "Costo / Cómo afecta la selección"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::dest:compliance-question": {
    "label": "Cumplimiento / Pregunta que hacer"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::dest:compliance-effect": {
    "label": "Cumplimiento / Cómo afecta la selección"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::dest:region-question": {
    "label": "Disponibilidad regional / Pregunta que hacer"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::dest:region-effect": {
    "label": "Disponibilidad regional / Cómo afecta la selección"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::dest:context-question": {
    "label": "Longitud de entrada/salida / Pregunta que hacer"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::dest:context-effect": {
    "label": "Longitud de entrada/salida / Cómo afecta la selección"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::dest:custom-question": {
    "label": "Compatibilidad con personalización / Pregunta que hacer"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::dest:custom-effect": {
    "label": "Compatibilidad con personalización / Cómo afecta la selección"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::dest:cache-question": {
    "label": "Almacenamiento en caché de prompts / Pregunta que hacer"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::dest:cache-effect": {
    "label": "Almacenamiento en caché de prompts / Cómo afecta la selección"
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::card:d3-311-model-selection-criteria-table-01": {
    "text": "¿El caso de uso necesita entrada y salida de texto, imagen, video, voz o multimodal?",
    "explanation": "Modalidad se completa con la celda Pregunta que hacer de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::card:d3-311-model-selection-criteria-table-02": {
    "text": "Elimina los modelos que no pueden procesar la entrada requerida o producir la salida requerida.",
    "explanation": "Modalidad se completa con la celda Cómo afecta la selección de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::card:d3-311-model-selection-criteria-table-03": {
    "text": "¿Qué tan compleja es la tarea de razonamiento, generación o dominio?",
    "explanation": "Precisión y capacidad se completa con la celda Pregunta que hacer de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::card:d3-311-model-selection-criteria-table-04": {
    "text": "Inclina la selección hacia modelos más potentes cuando la calidad de la tarea importa más que la velocidad o el costo.",
    "explanation": "Precisión y capacidad se completa con la celda Cómo afecta la selección de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::card:d3-311-model-selection-criteria-table-05": {
    "text": "¿Con qué rapidez debe el modelo devolver una respuesta?",
    "explanation": "Latencia se completa con la celda Pregunta que hacer de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::card:d3-311-model-selection-criteria-table-06": {
    "text": "Favorece a los modelos más pequeños o rápidos para cargas de trabajo interactivas y en tiempo real.",
    "explanation": "Latencia se completa con la celda Cómo afecta la selección de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::card:d3-311-model-selection-criteria-table-07": {
    "text": "¿Cuál es el volumen de tokens y el presupuesto esperados por interacción?",
    "explanation": "Costo se completa con la celda Pregunta que hacer de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::card:d3-311-model-selection-criteria-table-08": {
    "text": "Favorece modelos más económicos, prompts más cortos, procesamiento por lotes o almacenamiento en caché para cargas de trabajo de alto volumen.",
    "explanation": "Costo se completa con la celda Cómo afecta la selección de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::card:d3-311-model-selection-criteria-table-09": {
    "text": "¿La carga de trabajo tiene restricciones legales, de privacidad o de una industria regulada?",
    "explanation": "Cumplimiento se completa con la celda Pregunta que hacer de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::card:d3-311-model-selection-criteria-table-10": {
    "text": "Actúa como un filtro de viabilidad estricto antes de optimizar por precio o velocidad.",
    "explanation": "Cumplimiento se completa con la celda Cómo afecta la selección de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::card:d3-311-model-selection-criteria-table-11": {
    "text": "¿Está el modelo disponible en la Región donde debe ejecutarse la carga de trabajo?",
    "explanation": "Disponibilidad regional se completa con la celda Pregunta que hacer de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::card:d3-311-model-selection-criteria-table-12": {
    "text": "Evita elegir un modelo que no pueda cumplir con los requisitos de residencia o implementación.",
    "explanation": "Disponibilidad regional se completa con la celda Cómo afecta la selección de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::card:d3-311-model-selection-criteria-table-13": {
    "text": "¿Cabrán el prompt completo, el contexto recuperado y la respuesta dentro de la ventana de contexto?",
    "explanation": "Longitud de entrada/salida se completa con la celda Pregunta que hacer de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::card:d3-311-model-selection-criteria-table-14": {
    "text": "Requiere un modelo con suficiente longitud de contexto o un diseño diferente, como la fragmentación (chunking) o RAG.",
    "explanation": "Longitud de entrada/salida se completa con la celda Cómo afecta la selección de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::card:d3-311-model-selection-criteria-table-15": {
    "text": "¿El modelo admite el método de personalización requerido?",
    "explanation": "Compatibilidad con personalización se completa con la celda Pregunta que hacer de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::card:d3-311-model-selection-criteria-table-16": {
    "text": "Importa cuando la ingeniería de prompts o RAG no son suficientes para moldear el comportamiento.",
    "explanation": "Compatibilidad con personalización se completa con la celda Cómo afecta la selección de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::card:d3-311-model-selection-criteria-table-17": {
    "text": "¿Se puede reutilizar un prefijo de prompt estable entre solicitudes?",
    "explanation": "Almacenamiento en caché de prompts se completa con la celda Pregunta que hacer de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-311-model-selection-criteria-table::card:d3-311-model-selection-criteria-table-18": {
    "text": "Puede reducir la latencia y el costo cuando se envía contexto repetido a modelos compatibles.",
    "explanation": "Almacenamiento en caché de prompts se completa con la celda Cómo afecta la selección de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-311-hard-filter-vs-optimization": {
    "title": "¿Restricción estricta u optimización?",
    "instructions": "Empareja cada tarjeta suelta con la etiqueta de origen visible.",
    "sourceNote": "Guía de estudio maestra §3.1.1 Criterios de selección para elegir un modelo fundacional. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "slotLabel": "Etiqueta de origen",
    "checkLabel": "Verificar estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios completada antes de continuar."
  },
  "domain3-source-structure-games::d3-311-hard-filter-vs-optimization::dest:hard": {
    "label": "Filtro de viabilidad estricto"
  },
  "domain3-source-structure-games::d3-311-hard-filter-vs-optimization::dest:optimize": {
    "label": "Optimización después de la viabilidad"
  },
  "domain3-source-structure-games::d3-311-hard-filter-vs-optimization::card:d3-311-hard-filter-vs-optimization-01": {
    "text": "Modalidad requerida",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.1 Criterios de selección para elegir un modelo fundacional."
  },
  "domain3-source-structure-games::d3-311-hard-filter-vs-optimization::card:d3-311-hard-filter-vs-optimization-02": {
    "text": "Requisito de cumplimiento",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.1 Criterios de selección para elegir un modelo fundacional."
  },
  "domain3-source-structure-games::d3-311-hard-filter-vs-optimization::card:d3-311-hard-filter-vs-optimization-03": {
    "text": "Región de AWS requerida",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.1 Criterios de selección para elegir un modelo fundacional."
  },
  "domain3-source-structure-games::d3-311-hard-filter-vs-optimization::card:d3-311-hard-filter-vs-optimization-04": {
    "text": "Ventana de contexto que pueda contener la solicitud",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.1 Criterios de selección para elegir un modelo fundacional."
  },
  "domain3-source-structure-games::d3-311-hard-filter-vs-optimization::card:d3-311-hard-filter-vs-optimization-05": {
    "text": "Menor latencia una vez que el modelo es viable",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.1 Criterios de selección para elegir un modelo fundacional."
  },
  "domain3-source-structure-games::d3-311-hard-filter-vs-optimization::card:d3-311-hard-filter-vs-optimization-06": {
    "text": "Menor costo de tokens una vez que se cumplen las restricciones",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.1 Criterios de selección para elegir un modelo fundacional."
  },
  "domain3-source-structure-games::d3-311-hard-filter-vs-optimization::card:d3-311-hard-filter-vs-optimization-07": {
    "text": "Modelo más pequeño para una calidad suficiente",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.1 Criterios de selección para elegir un modelo fundacional."
  },
  "domain3-source-structure-games::d3-311-hard-filter-vs-optimization::card:d3-311-hard-filter-vs-optimization-08": {
    "text": "Almacenamiento en caché de prompts para prefijos repetidos",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.1 Criterios de selección para elegir un modelo fundacional."
  },
  "domain3-source-structure-games::d3-311-nova-model-selection": {
    "title": "Selección de modelos de Amazon Nova",
    "instructions": "Empareja cada tarjeta suelta con la etiqueta de origen visible.",
    "sourceNote": "Guía de estudio maestra §3.1.1 Criterios de selección para elegir un modelo fundacional. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "slotLabel": "Etiqueta de origen",
    "checkLabel": "Verificar estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios completada antes de continuar."
  },
  "domain3-source-structure-games::d3-311-nova-model-selection::dest:micro": {
    "label": "Amazon Nova Micro"
  },
  "domain3-source-structure-games::d3-311-nova-model-selection::dest:lite": {
    "label": "Amazon Nova Lite"
  },
  "domain3-source-structure-games::d3-311-nova-model-selection::dest:pro": {
    "label": "Amazon Nova Pro"
  },
  "domain3-source-structure-games::d3-311-nova-model-selection::dest:premier": {
    "label": "Amazon Nova Premier"
  },
  "domain3-source-structure-games::d3-311-nova-model-selection::card:d3-311-nova-model-selection-01": {
    "text": "Modelo de solo texto centrado en una latencia muy baja y un costo bajo",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.1 Criterios de selección para elegir un modelo fundacional."
  },
  "domain3-source-structure-games::d3-311-nova-model-selection::card:d3-311-nova-model-selection-02": {
    "text": "Modelo multimodal de bajo costo para tareas rápidas de imagen, video y texto",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.1 Criterios de selección para elegir un modelo fundacional."
  },
  "domain3-source-structure-games::d3-311-nova-model-selection::card:d3-311-nova-model-selection-03": {
    "text": "Modelo multimodal equilibrado con mayor capacidad para cargas de trabajo comunes",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.1 Criterios de selección para elegir un modelo fundacional."
  },
  "domain3-source-structure-games::d3-311-nova-model-selection::card:d3-311-nova-model-selection-04": {
    "text": "El modelo Nova más capaz y candidato a modelo maestro para destilación donde sea compatible",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.1 Criterios de selección para elegir un modelo fundacional."
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table": {
    "title": "Tabla de parámetros de inferencia",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Guía de estudio maestra §3.1.2 Parámetros de inferencia. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "checkLabel": "Verificar estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios completada antes de continuar."
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::dest:temperature-controls": {
    "label": "Temperatura / Qué controla"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::dest:temperature-raise": {
    "label": "Temperatura / Auméntala para"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::dest:temperature-lower": {
    "label": "Temperatura / Redúcela para"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::dest:top-p-controls": {
    "label": "Top-p / Qué controla"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::dest:top-p-raise": {
    "label": "Top-p / Auméntalo para"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::dest:top-p-lower": {
    "label": "Top-p / Redúcelo para"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::dest:top-k-controls": {
    "label": "Top-k / Qué controla"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::dest:top-k-raise": {
    "label": "Top-k / Auméntalo para"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::dest:top-k-lower": {
    "label": "Top-k / Redúcelo para"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::dest:max-output-controls": {
    "label": "Longitud máxima de salida / Qué controla"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::dest:max-output-raise": {
    "label": "Longitud máxima de salida / Auméntala para"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::dest:max-output-lower": {
    "label": "Longitud máxima de salida / Redúcela para"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::dest:stop-controls": {
    "label": "Secuencias de parada / Qué controla"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::dest:stop-raise": {
    "label": "Secuencias de parada / Auméntalas para"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::dest:stop-lower": {
    "label": "Secuencias de parada / Redúcelas para"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::card:d3-312-inference-parameter-table-01": {
    "text": "Aleatoriedad en la selección de tokens.",
    "explanation": "Temperatura se completa con la celda Qué controla de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::card:d3-312-inference-parameter-table-02": {
    "text": "Aumentar la creatividad y la variedad.",
    "explanation": "Temperatura se completa con la celda Auméntala para de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::card:d3-312-inference-parameter-table-03": {
    "text": "Aumentar el determinismo, la consistencia y la repetibilidad.",
    "explanation": "Temperatura se completa con la celda Redúcela para de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::card:d3-312-inference-parameter-table-04": {
    "text": "El umbral de probabilidad acumulada utilizado para determinar el conjunto de tokens candidatos.",
    "explanation": "Top-p se completa con la celda Qué controla de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::card:d3-312-inference-parameter-table-05": {
    "text": "Permitir una masa de probabilidad más amplia y, por lo general, opciones de tokens más diversas.",
    "explanation": "Top-p se completa con la celda Auméntalo para de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::card:d3-312-inference-parameter-table-06": {
    "text": "Restringir el muestreo a una masa de probabilidad más estrecha de los tokens más probables.",
    "explanation": "Top-p se completa con la celda Redúcelo para de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::card:d3-312-inference-parameter-table-07": {
    "text": "El número fijo de tokens de mayor probabilidad considerados.",
    "explanation": "Top-k se completa con la celda Qué controla de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::card:d3-312-inference-parameter-table-08": {
    "text": "Considerar un número fijo mayor de tokens candidatos.",
    "explanation": "Top-k se completa con la celda Auméntalo para de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::card:d3-312-inference-parameter-table-09": {
    "text": "Considerar un número fijo menor de tokens candidatos.",
    "explanation": "Top-k se completa con la celda Redúcelo para de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::card:d3-312-inference-parameter-table-10": {
    "text": "Límite estricto en la cantidad de tokens generados.",
    "explanation": "Longitud máxima de salida se completa con la celda Qué controla de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::card:d3-312-inference-parameter-table-11": {
    "text": "Permitir respuestas más largas.",
    "explanation": "Longitud máxima de salida se completa con la celda Auméntala para de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::card:d3-312-inference-parameter-table-12": {
    "text": "Forzar respuestas más cortas y reducir el costo de tokens y la latencia.",
    "explanation": "Longitud máxima de salida se completa con la celda Redúcela para de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::card:d3-312-inference-parameter-table-13": {
    "text": "Cadenas o patrones que detienen la generación cuando se producen.",
    "explanation": "Secuencias de parada se completa con la celda Qué controla de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::card:d3-312-inference-parameter-table-14": {
    "text": "No aplica: las secuencias de parada se configuran en lugar de aumentarse.",
    "explanation": "Secuencias de parada se completa con la celda Auméntalas para de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-312-inference-parameter-table::card:d3-312-inference-parameter-table-15": {
    "text": "Úsalas para finalizar la generación de forma limpia en un límite estructural definido.",
    "explanation": "Secuencias de parada se completa con la celda Redúcelas para de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-312-inference-parameters-in-practice": {
    "title": "Parámetros de inferencia en la práctica",
    "instructions": "Empareja los requisitos concretos de generación con el parámetro o ajuste de inferencia que mejor los resuelve.",
    "sourceNote": "Guía de estudio maestra §3.1.2 Parámetros de inferencia. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "slotLabel": "Mejor ajuste",
    "checkLabel": "Verificar estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios completada antes de continuar."
  },
  "domain3-source-structure-games::d3-312-inference-parameters-in-practice::dest:lower-temperature": {
    "label": "Reducir la temperatura"
  },
  "domain3-source-structure-games::d3-312-inference-parameters-in-practice::dest:raise-temperature": {
    "label": "Aumentar la temperatura"
  },
  "domain3-source-structure-games::d3-312-inference-parameters-in-practice::dest:top-p": {
    "label": "Top-p"
  },
  "domain3-source-structure-games::d3-312-inference-parameters-in-practice::dest:top-k": {
    "label": "Top-k"
  },
  "domain3-source-structure-games::d3-312-inference-parameters-in-practice::dest:lower-max-output": {
    "label": "Reducir la longitud máxima de salida"
  },
  "domain3-source-structure-games::d3-312-inference-parameters-in-practice::dest:raise-max-output": {
    "label": "Aumentar la longitud máxima de salida"
  },
  "domain3-source-structure-games::d3-312-inference-parameters-in-practice::dest:stop-sequence": {
    "label": "Secuencia de parada"
  },
  "domain3-source-structure-games::d3-312-inference-parameters-in-practice::card:d3-312-inference-parameters-in-practice-01": {
    "text": "Un banco extrae los mismos campos de las solicitudes de préstamo en una estructura JSON fija y quiere que el resultado sea altamente repetible entre ejecuciones.",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.2 Parámetros de inferencia."
  },
  "domain3-source-structure-games::d3-312-inference-parameters-in-practice::card:d3-312-inference-parameters-in-practice-02": {
    "text": "Un equipo de marketing le pide al mismo modelo varios titulares de campaña alternativos y quiere que los resultados difieran notablemente entre sí.",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.2 Parámetros de inferencia."
  },
  "domain3-source-structure-games::d3-312-inference-parameters-in-practice::card:d3-312-inference-parameters-in-practice-03": {
    "text": "El conjunto de candidatos debe contener la cantidad de tokens siguientes más probables que sea necesaria para cubrir aproximadamente el 90 % de la distribución de probabilidad del modelo.",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.2 Parámetros de inferencia."
  },
  "domain3-source-structure-games::d3-312-inference-parameters-in-practice::card:d3-312-inference-parameters-in-practice-04": {
    "text": "Para una predicción, solo unos pocos tokens representan casi toda la probabilidad. Para otra, la probabilidad se distribuye entre muchos tokens. La aplicación debe permitir que el tamaño del conjunto de candidatos se adapte automáticamente a esta diferencia.",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.2 Parámetros de inferencia."
  },
  "domain3-source-structure-games::d3-312-inference-parameters-in-practice::card:d3-312-inference-parameters-in-practice-05": {
    "text": "En cada paso de generación, la aplicación debe considerar un conjunto fijo de los 20 candidatos a siguiente token más probables.",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.2 Parámetros de inferencia."
  },
  "domain3-source-structure-games::d3-312-inference-parameters-in-practice::card:d3-312-inference-parameters-in-practice-06": {
    "text": "El equipo de desarrollo quiere que el conjunto de candidatos mantenga el mismo tamaño, sin importar si la probabilidad se concentra en unos pocos tokens o se distribuye entre muchos.",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.2 Parámetros de inferencia."
  },
  "domain3-source-structure-games::d3-312-inference-parameters-in-practice::card:d3-312-inference-parameters-in-practice-07": {
    "text": "Un asistente de soporte produce respuestas innecesariamente largas, lo que aumenta tanto el tiempo de respuesta como los cargos por tokens.",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.2 Parámetros de inferencia."
  },
  "domain3-source-structure-games::d3-312-inference-parameters-in-practice::card:d3-312-inference-parameters-in-practice-08": {
    "text": "Una tarea de generación de informes se detiene repetidamente antes de que el modelo pueda terminar todas las secciones requeridas.",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.2 Parámetros de inferencia."
  },
  "domain3-source-structure-games::d3-312-inference-parameters-in-practice::card:d3-312-inference-parameters-in-practice-09": {
    "text": "Una respuesta estructurada generada debe finalizar cuando aparece un delimitador de cierre predefinido, en lugar de continuar con comentarios adicionales.",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.2 Parámetros de inferencia."
  },
  "domain3-source-structure-games::d3-312-inference-parameters-in-practice::card:d3-312-inference-parameters-in-practice-10": {
    "text": "La generación debe terminar tan pronto como el modelo produzca el marcador \"### END\".",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.2 Parámetros de inferencia."
  },
  "domain3-source-structure-games::d3-312-inference-parameter-truths": {
    "title": "Verificación de verdad sobre temperatura y muestreo",
    "instructions": "Clasifica cada enunciado como verdadero o falso y luego revisa la razón derivada de la fuente.",
    "sourceNote": "Guía de estudio maestra §3.1.2 Parámetros de inferencia. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "checkLabel": "Verificar estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios completada antes de continuar."
  },
  "domain3-source-structure-games::d3-312-inference-parameter-truths::dest:true": {
    "label": "Verdadero"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-truths::dest:false": {
    "label": "Falso"
  },
  "domain3-source-structure-games::d3-312-inference-parameter-truths::card:d3-312-inference-parameter-truths-01": {
    "text": "La temperatura controla la variabilidad de la salida, no la exactitud factual.",
    "explanation": "La exactitud factual proviene de la fundamentación (grounding), la evaluación y controles que van más allá de la configuración de muestreo."
  },
  "domain3-source-structure-games::d3-312-inference-parameter-truths::card:d3-312-inference-parameter-truths-02": {
    "text": "Establecer la temperatura en cero garantiza que el modelo no pueda alucinar.",
    "explanation": "Una respuesta determinista aún puede ser incorrecta o no estar respaldada."
  },
  "domain3-source-structure-games::d3-312-inference-parameter-truths::card:d3-312-inference-parameter-truths-03": {
    "text": "La longitud máxima de salida puede controlar el costo porque los tokens generados son facturables.",
    "explanation": "Las respuestas generadas más cortas reducen los tokens de salida."
  },
  "domain3-source-structure-games::d3-312-inference-parameter-truths::card:d3-312-inference-parameter-truths-04": {
    "text": "Las secuencias de parada se utilizan para finalizar la generación en un delimitador o límite deseado.",
    "explanation": "Son un control de formato y de límites."
  },
  "domain3-source-structure-games::d3-313-rag-ingestion-order": {
    "title": "Orden de ingesta de RAG",
    "instructions": "Restaura la secuencia de la fuente en orden.",
    "sourceNote": "Guía de estudio maestra §3.1.3 Generación aumentada por recuperación (RAG). Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "checkLabel": "Verificar estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios completada antes de continuar."
  },
  "domain3-source-structure-games::d3-313-rag-ingestion-order::dest:step-1": {
    "label": "Paso 1",
    "sub": "Coloca aquí el paso correcto de la fuente."
  },
  "domain3-source-structure-games::d3-313-rag-ingestion-order::dest:step-2": {
    "label": "Paso 2",
    "sub": "Coloca aquí el paso correcto de la fuente."
  },
  "domain3-source-structure-games::d3-313-rag-ingestion-order::dest:step-3": {
    "label": "Paso 3",
    "sub": "Coloca aquí el paso correcto de la fuente."
  },
  "domain3-source-structure-games::d3-313-rag-ingestion-order::dest:step-4": {
    "label": "Paso 4",
    "sub": "Coloca aquí el paso correcto de la fuente."
  },
  "domain3-source-structure-games::d3-313-rag-ingestion-order::card:d3-313-rag-ingestion-order-01": {
    "text": "Recopilar documentos fuente",
    "explanation": "Recopilar documentos fuente corresponde a la posición 1 de la secuencia de la guía."
  },
  "domain3-source-structure-games::d3-313-rag-ingestion-order::card:d3-313-rag-ingestion-order-02": {
    "text": "Fragmentar documentos",
    "explanation": "Fragmentar documentos corresponde a la posición 2 de la secuencia de la guía."
  },
  "domain3-source-structure-games::d3-313-rag-ingestion-order::card:d3-313-rag-ingestion-order-03": {
    "text": "Crear embeddings",
    "explanation": "Crear embeddings corresponde a la posición 3 de la secuencia de la guía."
  },
  "domain3-source-structure-games::d3-313-rag-ingestion-order::card:d3-313-rag-ingestion-order-04": {
    "text": "Almacenar vectores en una base de datos vectorial",
    "explanation": "Almacenar vectores en una base de datos vectorial corresponde a la posición 4 de la secuencia de la guía."
  },
  "domain3-source-structure-games::d3-313-rag-query-order": {
    "title": "Orden de consulta de RAG",
    "instructions": "Restaura el diagrama del pipeline de RAG de la guía. Cada tarjeta de colocación necesita el nombre de la etapa y la explicación de la fuente sobre en qué consiste esa etapa.",
    "sourceNote": "Guía de estudio maestra §3.1.3 Generación aumentada por recuperación (RAG). Convertido a partir del diagrama del pipeline de RAG de la guía.",
    "checkLabel": "Verificar estructura de la fuente",
    "completionCalloutTitle": "Pipeline de RAG restaurado",
    "completionCalloutText": "Revisa el diagrama completo de la guía: la ingesta ocurre cuando se preparan los documentos, y luego cada solicitud pasa por las etapas de consulta, recuperación, aumento y generación."
  },
  "domain3-source-structure-games::d3-313-rag-query-order::dest:rag-stage-1": {
    "label": "Etapa de RAG 1",
    "sub": "Coloca aquí el nombre de la etapa de la fuente y su explicación."
  },
  "domain3-source-structure-games::d3-313-rag-query-order::dest:rag-stage-2": {
    "label": "Etapa de RAG 2",
    "sub": "Coloca aquí el nombre de la etapa de la fuente y su explicación."
  },
  "domain3-source-structure-games::d3-313-rag-query-order::dest:rag-stage-3": {
    "label": "Etapa de RAG 3",
    "sub": "Coloca aquí el nombre de la etapa de la fuente y su explicación."
  },
  "domain3-source-structure-games::d3-313-rag-query-order::dest:rag-stage-4": {
    "label": "Etapa de RAG 4",
    "sub": "Coloca aquí el nombre de la etapa de la fuente y su explicación."
  },
  "domain3-source-structure-games::d3-313-rag-query-order::dest:rag-stage-5": {
    "label": "Etapa de RAG 5",
    "sub": "Coloca aquí el nombre de la etapa de la fuente y su explicación."
  },
  "domain3-source-structure-games::d3-313-rag-query-order::slottype:stageName": {
    "label": "Nombre de la etapa"
  },
  "domain3-source-structure-games::d3-313-rag-query-order::slottype:whatConsists": {
    "label": "En qué consiste"
  },
  "domain3-source-structure-games::d3-313-rag-query-order::concept:rag-stage-1": {
    "name": "Etapa de RAG 1",
    "stageName": "Ingesta",
    "whatConsists": "Los documentos se recopilan, se fragmentan en pasajes, se convierten en embeddings mediante un modelo de embeddings y se almacenan junto con sus vectores en una base de datos vectorial.",
    "explanation": "La ingesta corresponde a la posición 1 del diagrama de la guía."
  },
  "domain3-source-structure-games::d3-313-rag-query-order::concept:rag-stage-2": {
    "name": "Etapa de RAG 2",
    "stageName": "Consulta",
    "whatConsists": "La pregunta del usuario se convierte en embedding con el mismo modelo de embeddings que se utilizó para los documentos.",
    "explanation": "La consulta corresponde a la posición 2 del diagrama de la guía."
  },
  "domain3-source-structure-games::d3-313-rag-query-order::concept:rag-stage-3": {
    "name": "Etapa de RAG 3",
    "stageName": "Recuperación",
    "whatConsists": "Una búsqueda de similitud encuentra los pasajes más cercanos al vector de la pregunta. Opcionalmente, los resultados se vuelven a clasificar (re-ranking).",
    "explanation": "La recuperación corresponde a la posición 3 del diagrama de la guía."
  },
  "domain3-source-structure-games::d3-313-rag-query-order::concept:rag-stage-4": {
    "name": "Etapa de RAG 4",
    "stageName": "Aumento",
    "whatConsists": "Los pasajes recuperados se insertan en el prompt como contexto, junto con la pregunta y las instrucciones del sistema.",
    "explanation": "El aumento corresponde a la posición 4 del diagrama de la guía."
  },
  "domain3-source-structure-games::d3-313-rag-query-order::concept:rag-stage-5": {
    "name": "Etapa de RAG 5",
    "stageName": "Generación",
    "whatConsists": "El modelo fundacional responde utilizando el contexto proporcionado y puede citar los pasajes fuente.",
    "explanation": "La generación corresponde a la posición 5 del diagrama de la guía."
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning": {
    "title": "Comparación entre RAG y ajuste fino (fine-tuning)",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Guía de estudio maestra §3.1.3 Generación aumentada por recuperación (RAG). Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "checkLabel": "Verificar estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios completada antes de continuar."
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning::dest:weights-rag": {
    "label": "Pesos del modelo / RAG"
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning::dest:weights-tuning": {
    "label": "Pesos del modelo / Ajuste fino (fine-tuning)"
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning::dest:knowledge-rag": {
    "label": "Conocimiento externo / RAG"
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning::dest:knowledge-tuning": {
    "label": "Conocimiento externo / Ajuste fino"
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning::dest:fresh-rag": {
    "label": "Información cambiante / RAG"
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning::dest:fresh-tuning": {
    "label": "Información cambiante / Ajuste fino"
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning::dest:citations-rag": {
    "label": "Citas / RAG"
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning::dest:citations-tuning": {
    "label": "Citas / Ajuste fino"
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning::card:d3-313-rag-vs-fine-tuning-01": {
    "text": "No modifica los pesos del modelo.",
    "explanation": "Pesos del modelo se completa con la celda RAG de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning::card:d3-313-rag-vs-fine-tuning-02": {
    "text": "Modifica o adapta el comportamiento del modelo mediante entrenamiento.",
    "explanation": "Pesos del modelo se completa con la celda Ajuste fino de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning::card:d3-313-rag-vs-fine-tuning-03": {
    "text": "Proporciona conocimiento recuperado en el momento de la inferencia.",
    "explanation": "Conocimiento externo se completa con la celda RAG de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning::card:d3-313-rag-vs-fine-tuning-04": {
    "text": "Aprende patrones a partir de los datos de entrenamiento en lugar de obtener datos actualizados.",
    "explanation": "Conocimiento externo se completa con la celda Ajuste fino de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning::card:d3-313-rag-vs-fine-tuning-05": {
    "text": "Es la mejor opción para conocimiento que cambia con frecuencia o es privado.",
    "explanation": "Información cambiante se completa con la celda RAG de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning::card:d3-313-rag-vs-fine-tuning-06": {
    "text": "No es una buena opción cuando los datos cambian con frecuencia.",
    "explanation": "Información cambiante se completa con la celda Ajuste fino de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning::card:d3-313-rag-vs-fine-tuning-07": {
    "text": "Puede proporcionar citas de origen a partir de los pasajes recuperados.",
    "explanation": "Citas se completa con la celda RAG de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-313-rag-vs-fine-tuning::card:d3-313-rag-vs-fine-tuning-08": {
    "text": "No cita fuentes de forma inherente.",
    "explanation": "Citas se completa con la celda Ajuste fino de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-313-bedrock-knowledge-bases": {
    "title": "Emparejamiento de capacidades de Bedrock Knowledge Bases",
    "instructions": "Empareja cada tarjeta suelta con la etiqueta de origen visible.",
    "sourceNote": "Guía de estudio maestra §3.1.3 Generación aumentada por recuperación (RAG). Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "slotLabel": "Etiqueta de origen",
    "checkLabel": "Verificar estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios completada antes de continuar."
  },
  "domain3-source-structure-games::d3-313-bedrock-knowledge-bases::dest:does": {
    "label": "Lo que hace Knowledge Bases"
  },
  "domain3-source-structure-games::d3-313-bedrock-knowledge-bases::dest:not": {
    "label": "Lo que Knowledge Bases no hace"
  },
  "domain3-source-structure-games::d3-313-bedrock-knowledge-bases::card:d3-313-bedrock-knowledge-bases-01": {
    "text": "Organiza la ingesta, la fragmentación, los embeddings, la integración con almacenamiento vectorial, la recuperación y las citas para RAG",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.3 Generación aumentada por recuperación (RAG)."
  },
  "domain3-source-structure-games::d3-313-bedrock-knowledge-bases::card:d3-313-bedrock-knowledge-bases-02": {
    "text": "Recupera datos estructurados cuando la fuente configurada lo admite",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.3 Generación aumentada por recuperación (RAG)."
  },
  "domain3-source-structure-games::d3-313-bedrock-knowledge-bases::card:d3-313-bedrock-knowledge-bases-03": {
    "text": "Preentrena un modelo fundacional desde cero",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.3 Generación aumentada por recuperación (RAG)."
  },
  "domain3-source-structure-games::d3-313-bedrock-knowledge-bases::card:d3-313-bedrock-knowledge-bases-04": {
    "text": "Modifica los pesos del modelo base",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.3 Generación aumentada por recuperación (RAG)."
  },
  "domain3-source-structure-games::d3-313-bedrock-knowledge-bases::card:d3-313-bedrock-knowledge-bases-05": {
    "text": "Construye la interfaz de usuario de la aplicación",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.3 Generación aumentada por recuperación (RAG)."
  },
  "domain3-source-structure-games::d3-314-vector-store-table": {
    "title": "Tabla de almacenes vectoriales de AWS",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Guía de estudio maestra §3.1.4 Servicios de AWS para almacenar embeddings en bases de datos vectoriales. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "checkLabel": "Verificar estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios completada antes de continuar."
  },
  "domain3-source-structure-games::d3-314-vector-store-table::dest:opensearch-capability": {
    "label": "Amazon OpenSearch Service / Capacidad vectorial"
  },
  "domain3-source-structure-games::d3-314-vector-store-table::dest:opensearch-choose": {
    "label": "Amazon OpenSearch Service / Elígelo cuando..."
  },
  "domain3-source-structure-games::d3-314-vector-store-table::dest:aurora-capability": {
    "label": "Amazon Aurora (compatible con PostgreSQL) / Capacidad vectorial"
  },
  "domain3-source-structure-games::d3-314-vector-store-table::dest:aurora-choose": {
    "label": "Amazon Aurora (compatible con PostgreSQL) / Elígelo cuando..."
  },
  "domain3-source-structure-games::d3-314-vector-store-table::dest:rds-capability": {
    "label": "Amazon RDS for PostgreSQL / Capacidad vectorial"
  },
  "domain3-source-structure-games::d3-314-vector-store-table::dest:rds-choose": {
    "label": "Amazon RDS for PostgreSQL / Elígelo cuando..."
  },
  "domain3-source-structure-games::d3-314-vector-store-table::dest:neptune-capability": {
    "label": "Amazon Neptune / Capacidad vectorial"
  },
  "domain3-source-structure-games::d3-314-vector-store-table::dest:neptune-choose": {
    "label": "Amazon Neptune / Elígelo cuando..."
  },
  "domain3-source-structure-games::d3-314-vector-store-table::card:d3-314-vector-store-table-01": {
    "text": "Motor vectorial con búsqueda k-NN, incluido OpenSearch Serverless. El almacén vectorial predeterminado para Bedrock Knowledge Bases.",
    "explanation": "Amazon OpenSearch Service se completa con la celda Capacidad vectorial de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-314-vector-store-table::card:d3-314-vector-store-table-02": {
    "text": "Quieres un motor de búsqueda y vectorial diseñado específicamente para ese fin, con búsqueda híbrida por palabras clave y semántica.",
    "explanation": "Amazon OpenSearch Service se completa con la celda Elígelo cuando... de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-314-vector-store-table::card:d3-314-vector-store-table-03": {
    "text": "Almacenamiento vectorial y búsqueda de similitud mediante la extensión pgvector.",
    "explanation": "Amazon Aurora (compatible con PostgreSQL) se completa con la celda Capacidad vectorial de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-314-vector-store-table::card:d3-314-vector-store-table-04": {
    "text": "Ya utilizas Aurora y quieres tener vectores junto con tus datos relacionales. Se agregó recientemente a la lista dentro del alcance en la v1.1.",
    "explanation": "Amazon Aurora (compatible con PostgreSQL) se completa con la celda Elígelo cuando... de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-314-vector-store-table::card:d3-314-vector-store-table-05": {
    "text": "Almacenamiento y búsqueda vectorial mediante pgvector.",
    "explanation": "Amazon RDS for PostgreSQL se completa con la celda Capacidad vectorial de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-314-vector-store-table::card:d3-314-vector-store-table-06": {
    "text": "Necesitas un almacén vectorial administrado de PostgreSQL sin Aurora.",
    "explanation": "Amazon RDS for PostgreSQL se completa con la celda Elígelo cuando... de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-314-vector-store-table::card:d3-314-vector-store-table-07": {
    "text": "Base de datos de grafos con búsqueda vectorial sobre datos de grafos (Neptune Analytics).",
    "explanation": "Amazon Neptune se completa con la celda Capacidad vectorial de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-314-vector-store-table::card:d3-314-vector-store-table-08": {
    "text": "Las relaciones entre entidades importan tanto como la similitud semántica.",
    "explanation": "Amazon Neptune se completa con la celda Elígelo cuando... de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-314-vector-service-scenarios": {
    "title": "Del caso de uso al servicio vectorial",
    "instructions": "Empareja cada tarjeta suelta con la etiqueta de origen visible.",
    "sourceNote": "Guía de estudio maestra §3.1.4 Servicios de AWS para almacenar embeddings en bases de datos vectoriales. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "slotLabel": "Etiqueta de origen",
    "checkLabel": "Verificar estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios completada antes de continuar."
  },
  "domain3-source-structure-games::d3-314-vector-service-scenarios::dest:opensearch": {
    "label": "OpenSearch"
  },
  "domain3-source-structure-games::d3-314-vector-service-scenarios::dest:aurora": {
    "label": "Aurora PostgreSQL"
  },
  "domain3-source-structure-games::d3-314-vector-service-scenarios::dest:rds": {
    "label": "RDS for PostgreSQL"
  },
  "domain3-source-structure-games::d3-314-vector-service-scenarios::dest:neptune": {
    "label": "Neptune"
  },
  "domain3-source-structure-games::d3-314-vector-service-scenarios::card:d3-314-vector-service-scenarios-01": {
    "text": "Búsqueda híbrida por palabras clave y semántica para un portal de documentos",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.4 Servicios de AWS para almacenar embeddings en bases de datos vectoriales."
  },
  "domain3-source-structure-games::d3-314-vector-service-scenarios::card:d3-314-vector-service-scenarios-02": {
    "text": "Embeddings almacenados junto con los registros relacionales de clientes existentes en Aurora",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.4 Servicios de AWS para almacenar embeddings en bases de datos vectoriales."
  },
  "domain3-source-structure-games::d3-314-vector-service-scenarios::card:d3-314-vector-service-scenarios-03": {
    "text": "Almacenamiento vectorial administrado de PostgreSQL sin Aurora",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.4 Servicios de AWS para almacenar embeddings en bases de datos vectoriales."
  },
  "domain3-source-structure-games::d3-314-vector-service-scenarios::card:d3-314-vector-service-scenarios-04": {
    "text": "Relaciones de grafo de conocimiento junto con similitud vectorial",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.4 Servicios de AWS para almacenar embeddings en bases de datos vectoriales."
  },
  "domain3-source-structure-games::d3-315-customization-cost-table": {
    "title": "Tabla de compensaciones de costos de personalización",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Guía de estudio maestra §3.1.5 Compensaciones de costos entre los enfoques de personalización de modelos fundacionales (FM). Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "checkLabel": "Verificar estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios completada antes de continuar."
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::dest:prompt-changes": {
    "label": "Ingeniería de prompts / Qué modifica"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::dest:prompt-cost": {
    "label": "Ingeniería de prompts / Costo relativo"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::dest:prompt-best": {
    "label": "Ingeniería de prompts / Ideal para"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::dest:rag-changes": {
    "label": "RAG / Qué modifica"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::dest:rag-cost": {
    "label": "RAG / Costo relativo"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::dest:rag-best": {
    "label": "RAG / Ideal para"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::dest:distill-changes": {
    "label": "Destilación de modelos / Qué modifica"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::dest:distill-cost": {
    "label": "Destilación de modelos / Costo relativo"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::dest:distill-best": {
    "label": "Destilación de modelos / Ideal para"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::dest:fine-tune-changes": {
    "label": "Ajuste fino / Qué modifica"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::dest:fine-tune-cost": {
    "label": "Ajuste fino / Costo relativo"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::dest:fine-tune-best": {
    "label": "Ajuste fino / Ideal para"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::dest:continued-changes": {
    "label": "Preentrenamiento continuo / Qué modifica"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::dest:continued-cost": {
    "label": "Preentrenamiento continuo / Costo relativo"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::dest:continued-best": {
    "label": "Preentrenamiento continuo / Ideal para"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::dest:scratch-changes": {
    "label": "Preentrenamiento desde cero / Qué modifica"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::dest:scratch-cost": {
    "label": "Preentrenamiento desde cero / Costo relativo"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::dest:scratch-best": {
    "label": "Preentrenamiento desde cero / Ideal para"
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::card:d3-315-customization-cost-table-01": {
    "text": "Modifica las instrucciones enviadas en el momento de la inferencia.",
    "explanation": "Ingeniería de prompts se completa con la celda Qué modifica de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::card:d3-315-customization-cost-table-02": {
    "text": "El más bajo.",
    "explanation": "Ingeniería de prompts se completa con la celda Costo relativo de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::card:d3-315-customization-cost-table-03": {
    "text": "Mejoras rápidas de comportamiento y formato.",
    "explanation": "Ingeniería de prompts se completa con la celda Ideal para de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::card:d3-315-customization-cost-table-04": {
    "text": "Agrega contexto externo recuperado en el momento de la inferencia.",
    "explanation": "RAG se completa con la celda Qué modifica de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::card:d3-315-customization-cost-table-05": {
    "text": "De bajo a medio.",
    "explanation": "RAG se completa con la celda Costo relativo de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::card:d3-315-customization-cost-table-06": {
    "text": "Conocimiento actualizado, privado o con citas de origen.",
    "explanation": "RAG se completa con la celda Ideal para de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::card:d3-315-customization-cost-table-07": {
    "text": "Transfiere el comportamiento de un modelo maestro más grande a un modelo más pequeño.",
    "explanation": "Destilación de modelos se completa con la celda Qué modifica de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::card:d3-315-customization-cost-table-08": {
    "text": "Medio.",
    "explanation": "Destilación de modelos se completa con la celda Costo relativo de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::card:d3-315-customization-cost-table-09": {
    "text": "Tareas específicas de alto volumen que requieren menor latencia o costo.",
    "explanation": "Destilación de modelos se completa con la celda Ideal para de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::card:d3-315-customization-cost-table-10": {
    "text": "Adapta los pesos del modelo para el comportamiento o el estilo.",
    "explanation": "Ajuste fino se completa con la celda Qué modifica de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::card:d3-315-customization-cost-table-11": {
    "text": "De medio a alto.",
    "explanation": "Ajuste fino se completa con la celda Costo relativo de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::card:d3-315-customization-cost-table-12": {
    "text": "Comportamiento persistente de estilo, formato o tarea.",
    "explanation": "Ajuste fino se completa con la celda Ideal para de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::card:d3-315-customization-cost-table-13": {
    "text": "Continúa el entrenamiento sobre grandes corpus de dominio.",
    "explanation": "Preentrenamiento continuo se completa con la celda Qué modifica de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::card:d3-315-customization-cost-table-14": {
    "text": "Alto.",
    "explanation": "Preentrenamiento continuo se completa con la celda Costo relativo de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::card:d3-315-customization-cost-table-15": {
    "text": "Adaptación lingüística profunda al dominio.",
    "explanation": "Preentrenamiento continuo se completa con la celda Ideal para de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::card:d3-315-customization-cost-table-16": {
    "text": "Construye un modelo desde el principio.",
    "explanation": "Preentrenamiento desde cero se completa con la celda Qué modifica de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::card:d3-315-customization-cost-table-17": {
    "text": "El más alto.",
    "explanation": "Preentrenamiento desde cero se completa con la celda Costo relativo de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-315-customization-cost-table::card:d3-315-customization-cost-table-18": {
    "text": "Casos poco frecuentes con necesidades masivas de datos, cómputo y propiedad del modelo.",
    "explanation": "Preentrenamiento desde cero se completa con la celda Ideal para de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-315-cost-ladder": {
    "title": "Escalera de costos de personalización",
    "instructions": "Restaura la secuencia de la fuente en orden.",
    "sourceNote": "Guía de estudio maestra §3.1.5 Compensaciones de costos entre los enfoques de personalización de modelos fundacionales (FM). Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "checkLabel": "Verificar estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios completada antes de continuar."
  },
  "domain3-source-structure-games::d3-315-cost-ladder::dest:step-1": {
    "label": "Paso 1",
    "sub": "Coloca aquí el paso correcto de la fuente."
  },
  "domain3-source-structure-games::d3-315-cost-ladder::dest:step-2": {
    "label": "Paso 2",
    "sub": "Coloca aquí el paso correcto de la fuente."
  },
  "domain3-source-structure-games::d3-315-cost-ladder::dest:step-3": {
    "label": "Paso 3",
    "sub": "Coloca aquí el paso correcto de la fuente."
  },
  "domain3-source-structure-games::d3-315-cost-ladder::dest:step-4": {
    "label": "Paso 4",
    "sub": "Coloca aquí el paso correcto de la fuente."
  },
  "domain3-source-structure-games::d3-315-cost-ladder::dest:step-5": {
    "label": "Paso 5",
    "sub": "Coloca aquí el paso correcto de la fuente."
  },
  "domain3-source-structure-games::d3-315-cost-ladder::dest:step-6": {
    "label": "Paso 6",
    "sub": "Coloca aquí el paso correcto de la fuente."
  },
  "domain3-source-structure-games::d3-315-cost-ladder::card:d3-315-cost-ladder-01": {
    "text": "Ingeniería de prompts",
    "explanation": "Ingeniería de prompts corresponde a la posición 1 de la secuencia de la guía."
  },
  "domain3-source-structure-games::d3-315-cost-ladder::card:d3-315-cost-ladder-02": {
    "text": "RAG",
    "explanation": "RAG corresponde a la posición 2 de la secuencia de la guía."
  },
  "domain3-source-structure-games::d3-315-cost-ladder::card:d3-315-cost-ladder-03": {
    "text": "Destilación de modelos",
    "explanation": "Destilación de modelos corresponde a la posición 3 de la secuencia de la guía."
  },
  "domain3-source-structure-games::d3-315-cost-ladder::card:d3-315-cost-ladder-04": {
    "text": "Ajuste fino",
    "explanation": "Ajuste fino corresponde a la posición 4 de la secuencia de la guía."
  },
  "domain3-source-structure-games::d3-315-cost-ladder::card:d3-315-cost-ladder-05": {
    "text": "Preentrenamiento continuo",
    "explanation": "Preentrenamiento continuo corresponde a la posición 5 de la secuencia de la guía."
  },
  "domain3-source-structure-games::d3-315-cost-ladder::card:d3-315-cost-ladder-06": {
    "text": "Preentrenamiento desde cero",
    "explanation": "Preentrenamiento desde cero corresponde a la posición 6 de la secuencia de la guía."
  },
  "domain3-source-structure-games::d3-315-customization-use-when": {
    "title": "Enfoque de personalización: cuándo usarlo",
    "instructions": "Empareja cada requisito con el enfoque de compensación de costos de personalización que la guía indica usar cuando ese requisito es el factor decisivo.",
    "sourceNote": "Guía de estudio maestra §3.1.5 Compensaciones de costos entre los enfoques de personalización de modelos fundacionales (FM). Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "slotLabel": "Usar cuando",
    "checkLabel": "Verificar estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios completada antes de continuar."
  },
  "domain3-source-structure-games::d3-315-customization-use-when::dest:prompt": {
    "label": "Ingeniería de prompts"
  },
  "domain3-source-structure-games::d3-315-customization-use-when::dest:rag": {
    "label": "RAG"
  },
  "domain3-source-structure-games::d3-315-customization-use-when::dest:distill": {
    "label": "Destilación de modelos"
  },
  "domain3-source-structure-games::d3-315-customization-use-when::dest:fine-tune": {
    "label": "Ajuste fino"
  },
  "domain3-source-structure-games::d3-315-customization-use-when::dest:continued": {
    "label": "Preentrenamiento continuo"
  },
  "domain3-source-structure-games::d3-315-customization-use-when::dest:scratch": {
    "label": "Preentrenamiento desde cero"
  },
  "domain3-source-structure-games::d3-315-customization-use-when::card:d3-315-customization-use-when-01": {
    "text": "Mejoras rápidas de comportamiento y formato.",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.5 Compensaciones de costos entre los enfoques de personalización de modelos fundacionales (FM)."
  },
  "domain3-source-structure-games::d3-315-customization-use-when::card:d3-315-customization-use-when-02": {
    "text": "Conocimiento actualizado, privado o con citas de origen.",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.5 Compensaciones de costos entre los enfoques de personalización de modelos fundacionales (FM)."
  },
  "domain3-source-structure-games::d3-315-customization-use-when::card:d3-315-customization-use-when-03": {
    "text": "Tareas específicas de alto volumen que requieren menor latencia o costo.",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.5 Compensaciones de costos entre los enfoques de personalización de modelos fundacionales (FM)."
  },
  "domain3-source-structure-games::d3-315-customization-use-when::card:d3-315-customization-use-when-04": {
    "text": "Comportamiento persistente de estilo, formato o tarea.",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.5 Compensaciones de costos entre los enfoques de personalización de modelos fundacionales (FM)."
  },
  "domain3-source-structure-games::d3-315-customization-use-when::card:d3-315-customization-use-when-05": {
    "text": "Adaptación lingüística profunda al dominio.",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.5 Compensaciones de costos entre los enfoques de personalización de modelos fundacionales (FM)."
  },
  "domain3-source-structure-games::d3-315-customization-use-when::card:d3-315-customization-use-when-06": {
    "text": "Casos poco frecuentes con necesidades masivas de datos, cómputo y propiedad del modelo.",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.5 Compensaciones de costos entre los enfoques de personalización de modelos fundacionales (FM)."
  },
  "domain3-source-structure-games::d3-316-agent-assistant-workflow": {
    "title": "¿Agente, asistente o flujo de trabajo fijo?",
    "instructions": "Empareja cada tarjeta suelta con la etiqueta de origen visible.",
    "sourceNote": "Guía de estudio maestra §3.1.6 Rol de los agentes de IA y aplicaciones empresariales. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "slotLabel": "Etiqueta de origen",
    "checkLabel": "Verificar estructura de la fuente",
    "completionCalloutTitle": "Estructura de la fuente restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o asignación de servicios completada antes de continuar."
  },
  "domain3-source-structure-games::d3-316-agent-assistant-workflow::dest:agent": {
    "label": "Agente"
  },
  "domain3-source-structure-games::d3-316-agent-assistant-workflow::dest:assistant": {
    "label": "Asistente"
  },
  "domain3-source-structure-games::d3-316-agent-assistant-workflow::dest:workflow": {
    "label": "Flujo de trabajo fijo"
  },
  "domain3-source-structure-games::d3-316-agent-assistant-workflow::card:d3-316-agent-assistant-workflow-01": {
    "text": "Planifica dinámicamente a través de varios pasos y elige herramientas",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.6 Rol de los agentes de IA y aplicaciones empresariales."
  },
  "domain3-source-structure-games::d3-316-agent-assistant-workflow::card:d3-316-agent-assistant-workflow-02": {
    "text": "Responde preguntas o ayuda a un usuario, pero principalmente reacciona",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.6 Rol de los agentes de IA y aplicaciones empresariales."
  },
  "domain3-source-structure-games::d3-316-agent-assistant-workflow::card:d3-316-agent-assistant-workflow-03": {
    "text": "Sigue ramificaciones predeterminadas y pasos ordenados",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.6 Rol de los agentes de IA y aplicaciones empresariales."
  },
  "domain3-source-structure-games::d3-316-agent-assistant-workflow::card:d3-316-agent-assistant-workflow-04": {
    "text": "Utiliza APIs externas y estado para completar una acción empresarial",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.6 Rol de los agentes de IA y aplicaciones empresariales."
  },
  "domain3-source-structure-games::d3-316-agent-assistant-workflow::card:d3-316-agent-assistant-workflow-05": {
    "text": "Resume un documento sin tomar ninguna acción",
    "explanation": "Restaura la estructura de la fuente de la Guía de estudio maestra §3.1.6 Rol de los agentes de IA y aplicaciones empresariales."
  },
  "domain3-source-structure-games::d3-316-agent-services": {
    "title": "Servicios relevantes de agentes de AWS",
    "instructions": "Relaciona cada tarjeta suelta con la etiqueta de origen visible.",
    "sourceNote": "Guía de estudio maestra §3.1.6 Función de los agentes de IA y las aplicaciones empresariales. Convertido a partir de la tabla, comparación, secuencia o conjunto de afirmaciones con nombre de la guía.",
    "slotLabel": "Etiqueta de origen",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain3-source-structure-games::d3-316-agent-services::dest:bedrock-agents": {
    "label": "Amazon Bedrock Agents"
  },
  "domain3-source-structure-games::d3-316-agent-services::dest:agentcore": {
    "label": "Amazon Bedrock AgentCore"
  },
  "domain3-source-structure-games::d3-316-agent-services::dest:identity": {
    "label": "AgentCore Identity"
  },
  "domain3-source-structure-games::d3-316-agent-services::dest:observability": {
    "label": "AgentCore Observability"
  },
  "domain3-source-structure-games::d3-316-agent-services::dest:flows": {
    "label": "Bedrock Flows"
  },
  "domain3-source-structure-games::d3-316-agent-services::card:d3-316-agent-services-01": {
    "text": "Crea agentes que pueden razonar, seleccionar acciones e invocar herramientas o API",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.1.6 Función de los agentes de IA y las aplicaciones empresariales."
  },
  "domain3-source-structure-games::d3-316-agent-services::card:d3-316-agent-services-02": {
    "text": "Proporciona capacidades de tiempo de ejecución para implementar y operar agentes",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.1.6 Función de los agentes de IA y las aplicaciones empresariales."
  },
  "domain3-source-structure-games::d3-316-agent-services::card:d3-316-agent-services-03": {
    "text": "Brinda a los agentes integración de identidad y autorización para el acceso entrante y saliente",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.1.6 Función de los agentes de IA y las aplicaciones empresariales."
  },
  "domain3-source-structure-games::d3-316-agent-services::card:d3-316-agent-services-04": {
    "text": "Rastrea, supervisa y ayuda a depurar el comportamiento de los agentes",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.1.6 Función de los agentes de IA y las aplicaciones empresariales."
  },
  "domain3-source-structure-games::d3-316-agent-services::card:d3-316-agent-services-05": {
    "text": "Compone pasos de prompt, modelo y servicio en un flujo de trabajo visual",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.1.6 Función de los agentes de IA y las aplicaciones empresariales."
  },
  "domain3-source-structure-games::d3-321-prompt-constructs": {
    "title": "De componente del prompt a definición",
    "instructions": "Relaciona cada tarjeta suelta con la etiqueta de origen visible.",
    "sourceNote": "Guía de estudio maestra §3.2.1 Componentes del prompt. Convertido a partir de la tabla, comparación, secuencia o conjunto de afirmaciones con nombre de la guía.",
    "slotLabel": "Etiqueta de origen",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain3-source-structure-games::d3-321-prompt-constructs::dest:instruction": {
    "label": "Instrucción"
  },
  "domain3-source-structure-games::d3-321-prompt-constructs::dest:context": {
    "label": "Contexto"
  },
  "domain3-source-structure-games::d3-321-prompt-constructs::dest:input": {
    "label": "Datos de entrada"
  },
  "domain3-source-structure-games::d3-321-prompt-constructs::dest:output": {
    "label": "Indicador de salida"
  },
  "domain3-source-structure-games::d3-321-prompt-constructs::dest:negative": {
    "label": "Prompt negativo"
  },
  "domain3-source-structure-games::d3-321-prompt-constructs::dest:system": {
    "label": "Prompt del sistema"
  },
  "domain3-source-structure-games::d3-321-prompt-constructs::card:d3-321-prompt-constructs-01": {
    "text": "La tarea que el modelo debe realizar",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.2.1 Componentes del prompt."
  },
  "domain3-source-structure-games::d3-321-prompt-constructs::card:d3-321-prompt-constructs-02": {
    "text": "Información de contexto que el modelo debe usar",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.2.1 Componentes del prompt."
  },
  "domain3-source-structure-games::d3-321-prompt-constructs::card:d3-321-prompt-constructs-03": {
    "text": "El contenido específico que se debe transformar, clasificar, resumir o sobre el que se debe responder",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.2.1 Componentes del prompt."
  },
  "domain3-source-structure-games::d3-321-prompt-constructs::card:d3-321-prompt-constructs-04": {
    "text": "La estructura, el formato o el esquema solicitado para la respuesta",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.2.1 Componentes del prompt."
  },
  "domain3-source-structure-games::d3-321-prompt-constructs::card:d3-321-prompt-constructs-05": {
    "text": "Instrucciones sobre qué evitar",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.2.1 Componentes del prompt."
  },
  "domain3-source-structure-games::d3-321-prompt-constructs::card:d3-321-prompt-constructs-06": {
    "text": "Instrucción de comportamiento de nivel superior proporcionada fuera del prompt del usuario",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.2.1 Componentes del prompt."
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table": {
    "title": "Tabla de técnicas de ingeniería de prompts",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Guía de estudio maestra §3.2.2 Técnicas de ingeniería de prompts. Convertido a partir de la tabla, comparación, secuencia o conjunto de afirmaciones con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::dest:zero-means": {
    "label": "Zero-shot / Qué significa"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::dest:zero-use": {
    "label": "Zero-shot / Cuándo usarlo"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::dest:zero-tradeoff": {
    "label": "Zero-shot / Compensación"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::dest:one-means": {
    "label": "One-shot / Qué significa"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::dest:one-use": {
    "label": "One-shot / Cuándo usarlo"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::dest:one-tradeoff": {
    "label": "One-shot / Compensación"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::dest:few-means": {
    "label": "Few-shot / Qué significa"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::dest:few-use": {
    "label": "Few-shot / Cuándo usarlo"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::dest:few-tradeoff": {
    "label": "Few-shot / Compensación"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::dest:cot-means": {
    "label": "Chain-of-thought / Qué significa"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::dest:cot-use": {
    "label": "Chain-of-thought / Cuándo usarlo"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::dest:cot-tradeoff": {
    "label": "Chain-of-thought / Compensación"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::dest:template-means": {
    "label": "Plantilla de prompt / Qué significa"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::dest:template-use": {
    "label": "Plantilla de prompt / Cuándo usarlo"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::dest:template-tradeoff": {
    "label": "Plantilla de prompt / Compensación"
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::card:d3-322-prompt-technique-table-01": {
    "text": "No se incluyen ejemplos.",
    "explanation": "Zero-shot se completa con la celda Qué significa de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::card:d3-322-prompt-technique-table-02": {
    "text": "La tarea es simple o familiar para el modelo.",
    "explanation": "Zero-shot se completa con la celda Cuándo usarlo de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::card:d3-322-prompt-technique-table-03": {
    "text": "El menor costo de tokens de ejemplo.",
    "explanation": "Zero-shot se completa con la celda Compensación de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::card:d3-322-prompt-technique-table-04": {
    "text": "Se incluye un ejemplo.",
    "explanation": "One-shot se completa con la celda Qué significa de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::card:d3-322-prompt-technique-table-05": {
    "text": "Un solo patrón es suficiente para mostrar el formato deseado.",
    "explanation": "One-shot se completa con la celda Cuándo usarlo de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::card:d3-322-prompt-technique-table-06": {
    "text": "Usa más contexto que zero-shot.",
    "explanation": "One-shot se completa con la celda Compensación de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::card:d3-322-prompt-technique-table-07": {
    "text": "Se incluyen varios ejemplos.",
    "explanation": "Few-shot se completa con la celda Qué significa de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::card:d3-322-prompt-technique-table-08": {
    "text": "El modelo necesita ejemplos de un formato o mapeo.",
    "explanation": "Few-shot se completa con la celda Cuándo usarlo de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::card:d3-322-prompt-technique-table-09": {
    "text": "Los ejemplos consumen contexto y tokens por solicitud.",
    "explanation": "Few-shot se completa con la celda Compensación de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::card:d3-322-prompt-technique-table-10": {
    "text": "Incita al modelo a razonar paso a paso (chain-of-thought) cuando resulta apropiado.",
    "explanation": "Chain-of-thought se completa con la celda Qué significa de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::card:d3-322-prompt-technique-table-11": {
    "text": "Una tarea se beneficia de la descomposición.",
    "explanation": "Chain-of-thought se completa con la celda Cuándo usarlo de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::card:d3-322-prompt-technique-table-12": {
    "text": "Puede aumentar la longitud y el costo de la salida.",
    "explanation": "Chain-of-thought se completa con la celda Compensación de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::card:d3-322-prompt-technique-table-13": {
    "text": "Estructura de prompt reutilizable con variables.",
    "explanation": "Plantilla de prompt se completa con la celda Qué significa de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::card:d3-322-prompt-technique-table-14": {
    "text": "Necesitas prompts consistentes entre solicitudes.",
    "explanation": "Plantilla de prompt se completa con la celda Cuándo usarlo de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-322-prompt-technique-table::card:d3-322-prompt-technique-table-15": {
    "text": "Requiere control de versiones y pruebas a medida que evoluciona.",
    "explanation": "Plantilla de prompt se completa con la celda Compensación de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-323-prompt-practice-benefit": {
    "title": "De práctica de prompts a beneficio",
    "instructions": "Relaciona cada tarjeta suelta con la etiqueta de origen visible.",
    "sourceNote": "Guía de estudio maestra §3.2.3 Beneficios y prácticas recomendadas para la ingeniería de prompts. Convertido a partir de la tabla, comparación, secuencia o conjunto de afirmaciones con nombre de la guía.",
    "slotLabel": "Etiqueta de origen",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain3-source-structure-games::d3-323-prompt-practice-benefit::dest:specific": {
    "label": "Sé específico y conciso"
  },
  "domain3-source-structure-games::d3-323-prompt-practice-benefit::dest:format": {
    "label": "Indica el formato de salida"
  },
  "domain3-source-structure-games::d3-323-prompt-practice-benefit::dest:context": {
    "label": "Proporciona contexto relevante"
  },
  "domain3-source-structure-games::d3-323-prompt-practice-benefit::dest:examples": {
    "label": "Usa ejemplos"
  },
  "domain3-source-structure-games::d3-323-prompt-practice-benefit::dest:guardrail": {
    "label": "Aplica Guardrails"
  },
  "domain3-source-structure-games::d3-323-prompt-practice-benefit::dest:delimit": {
    "label": "Usa delimitadores"
  },
  "domain3-source-structure-games::d3-323-prompt-practice-benefit::card:d3-323-prompt-practice-benefit-01": {
    "text": "Reduce la ambigüedad en la instrucción del modelo",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.2.3 Beneficios y prácticas recomendadas para la ingeniería de prompts."
  },
  "domain3-source-structure-games::d3-323-prompt-practice-benefit::card:d3-323-prompt-practice-benefit-02": {
    "text": "Facilita que una aplicación procese la salida",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.2.3 Beneficios y prácticas recomendadas para la ingeniería de prompts."
  },
  "domain3-source-structure-games::d3-323-prompt-practice-benefit::card:d3-323-prompt-practice-benefit-03": {
    "text": "Le proporciona al modelo los hechos que debe utilizar",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.2.3 Beneficios y prácticas recomendadas para la ingeniería de prompts."
  },
  "domain3-source-structure-games::d3-323-prompt-practice-benefit::card:d3-323-prompt-practice-benefit-04": {
    "text": "Muestra patrones de respuesta inusuales o personalizados",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.2.3 Beneficios y prácticas recomendadas para la ingeniería de prompts."
  },
  "domain3-source-structure-games::d3-323-prompt-practice-benefit::card:d3-323-prompt-practice-benefit-05": {
    "text": "Añade aplicación de políticas fuera del prompt",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.2.3 Beneficios y prácticas recomendadas para la ingeniería de prompts."
  },
  "domain3-source-structure-games::d3-323-prompt-practice-benefit::card:d3-323-prompt-practice-benefit-06": {
    "text": "Separa la instrucción del contenido proporcionado por el usuario",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.2.3 Beneficios y prácticas recomendadas para la ingeniería de prompts."
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table": {
    "title": "Tabla de riesgos de la ingeniería de prompts",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Guía de estudio maestra §3.2.4 Riesgos y limitaciones de la ingeniería de prompts. Convertido a partir de la tabla, comparación, secuencia o conjunto de afirmaciones con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table::dest:injection-definition": {
    "label": "Inyección de prompts (prompt injection) / Definición"
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table::dest:injection-mitigation": {
    "label": "Inyección de prompts / Mitigación"
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table::dest:jailbreak-definition": {
    "label": "Jailbreaking / Definición"
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table::dest:jailbreak-mitigation": {
    "label": "Jailbreaking / Mitigación"
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table::dest:leaking-definition": {
    "label": "Filtración de prompts (prompt leaking) / Definición"
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table::dest:leaking-mitigation": {
    "label": "Filtración de prompts / Mitigación"
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table::dest:poisoning-definition": {
    "label": "Envenenamiento (poisoning) / Definición"
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table::dest:poisoning-mitigation": {
    "label": "Envenenamiento / Mitigación"
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table::card:d3-324-prompt-risk-table-01": {
    "text": "El contenido del usuario intenta anular las instrucciones o manipular el uso de herramientas.",
    "explanation": "Inyección de prompts se completa con la celda Definición de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table::card:d3-324-prompt-risk-table-02": {
    "text": "Usa delimitadores, autorización externa, validación de entradas y Guardrails.",
    "explanation": "Inyección de prompts se completa con la celda Mitigación de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table::card:d3-324-prompt-risk-table-03": {
    "text": "Intentos de eludir las restricciones de seguridad.",
    "explanation": "Jailbreaking se completa con la celda Definición de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table::card:d3-324-prompt-risk-table-04": {
    "text": "Usa Guardrails, evaluación de seguridad y controles de la aplicación.",
    "explanation": "Jailbreaking se completa con la celda Mitigación de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table::card:d3-324-prompt-risk-table-05": {
    "text": "El modelo revela contenido oculto del prompt o instrucciones sensibles.",
    "explanation": "Filtración de prompts se completa con la celda Definición de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table::card:d3-324-prompt-risk-table-06": {
    "text": "Evita incluir secretos en los prompts y sepáralos en Secrets Manager.",
    "explanation": "Filtración de prompts se completa con la celda Mitigación de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table::card:d3-324-prompt-risk-table-07": {
    "text": "Las fuentes de conocimiento o los datos de entrenamiento se contaminan para influir en las salidas.",
    "explanation": "Envenenamiento se completa con la celda Definición de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-324-prompt-risk-table::card:d3-324-prompt-risk-table-08": {
    "text": "Protege el acceso de escritura, rastrea el linaje y valida la calidad de la fuente.",
    "explanation": "Envenenamiento se completa con la celda Mitigación de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-325-prompt-management-capabilities": {
    "title": "Capacidades de Bedrock Prompt Management",
    "instructions": "Relaciona cada tarjeta suelta con la etiqueta de origen visible.",
    "sourceNote": "Guía de estudio maestra §3.2.5 Control de versiones y administración de prompts con Amazon Bedrock Prompt Management. Convertido a partir de la tabla, comparación, secuencia o conjunto de afirmaciones con nombre de la guía.",
    "slotLabel": "Etiqueta de origen",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain3-source-structure-games::d3-325-prompt-management-capabilities::dest:library": {
    "label": "Biblioteca central de prompts"
  },
  "domain3-source-structure-games::d3-325-prompt-management-capabilities::dest:versions": {
    "label": "Control de versiones"
  },
  "domain3-source-structure-games::d3-325-prompt-management-capabilities::dest:variables": {
    "label": "Variables"
  },
  "domain3-source-structure-games::d3-325-prompt-management-capabilities::dest:testing": {
    "label": "Pruebas antes de la promoción"
  },
  "domain3-source-structure-games::d3-325-prompt-management-capabilities::dest:identifier": {
    "label": "Referencia por identificador"
  },
  "domain3-source-structure-games::d3-325-prompt-management-capabilities::dest:flows": {
    "label": "Integración con Bedrock Flows"
  },
  "domain3-source-structure-games::d3-325-prompt-management-capabilities::card:d3-325-prompt-management-capabilities-01": {
    "text": "Reutiliza prompts aprobados entre equipos y aplicaciones",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.2.5 Control de versiones y administración de prompts con Amazon Bedrock Prompt Management."
  },
  "domain3-source-structure-games::d3-325-prompt-management-capabilities::card:d3-325-prompt-management-capabilities-02": {
    "text": "Rastrea y promueve los cambios de prompts de forma segura",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.2.5 Control de versiones y administración de prompts con Amazon Bedrock Prompt Management."
  },
  "domain3-source-structure-games::d3-325-prompt-management-capabilities::card:d3-325-prompt-management-capabilities-03": {
    "text": "Inserta valores específicos de la solicitud en un prompt controlado",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.2.5 Control de versiones y administración de prompts con Amazon Bedrock Prompt Management."
  },
  "domain3-source-structure-games::d3-325-prompt-management-capabilities::card:d3-325-prompt-management-capabilities-04": {
    "text": "Evalúa un prompt antes de que se convierta en la versión de producción",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.2.5 Control de versiones y administración de prompts con Amazon Bedrock Prompt Management."
  },
  "domain3-source-structure-games::d3-325-prompt-management-capabilities::card:d3-325-prompt-management-capabilities-05": {
    "text": "Permite que las aplicaciones llamen a un prompt administrado en lugar de copiar texto",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.2.5 Control de versiones y administración de prompts con Amazon Bedrock Prompt Management."
  },
  "domain3-source-structure-games::d3-325-prompt-management-capabilities::card:d3-325-prompt-management-capabilities-06": {
    "text": "Usa prompts administrados dentro de flujos de trabajo compuestos de Bedrock",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.2.5 Control de versiones y administración de prompts con Amazon Bedrock Prompt Management."
  },
  "domain3-source-structure-games::d3-331-training-approach-table": {
    "title": "Tabla de enfoques de entrenamiento",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Guía de estudio maestra §3.3.1 Elementos clave del entrenamiento de un modelo fundacional. Convertido a partir de la tabla, comparación, secuencia o conjunto de afirmaciones con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain3-source-structure-games::d3-331-training-approach-table::dest:pretrain-happens": {
    "label": "Preentrenamiento / Qué sucede"
  },
  "domain3-source-structure-games::d3-331-training-approach-table::dest:pretrain-data": {
    "label": "Preentrenamiento / Datos requeridos"
  },
  "domain3-source-structure-games::d3-331-training-approach-table::dest:pretrain-owner": {
    "label": "Preentrenamiento / Quién normalmente lo hace"
  },
  "domain3-source-structure-games::d3-331-training-approach-table::dest:continued-happens": {
    "label": "Preentrenamiento continuo / Qué sucede"
  },
  "domain3-source-structure-games::d3-331-training-approach-table::dest:continued-data": {
    "label": "Preentrenamiento continuo / Datos requeridos"
  },
  "domain3-source-structure-games::d3-331-training-approach-table::dest:continued-owner": {
    "label": "Preentrenamiento continuo / Quién normalmente lo hace"
  },
  "domain3-source-structure-games::d3-331-training-approach-table::dest:fine-happens": {
    "label": "Ajuste fino (fine-tuning) / Qué sucede"
  },
  "domain3-source-structure-games::d3-331-training-approach-table::dest:fine-data": {
    "label": "Ajuste fino / Datos requeridos"
  },
  "domain3-source-structure-games::d3-331-training-approach-table::dest:fine-owner": {
    "label": "Ajuste fino / Quién normalmente lo hace"
  },
  "domain3-source-structure-games::d3-331-training-approach-table::dest:distill-happens": {
    "label": "Destilación / Qué sucede"
  },
  "domain3-source-structure-games::d3-331-training-approach-table::dest:distill-data": {
    "label": "Destilación / Datos requeridos"
  },
  "domain3-source-structure-games::d3-331-training-approach-table::dest:distill-owner": {
    "label": "Destilación / Quién normalmente lo hace"
  },
  "domain3-source-structure-games::d3-331-training-approach-table::card:d3-331-training-approach-table-01": {
    "text": "Un modelo base aprende patrones generales a partir de corpus masivos.",
    "explanation": "Preentrenamiento se completa con la celda Qué sucede de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-331-training-approach-table::card:d3-331-training-approach-table-02": {
    "text": "Un corpus general enorme y sin etiquetar.",
    "explanation": "Preentrenamiento se completa con la celda Datos requeridos de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-331-training-approach-table::card:d3-331-training-approach-table-03": {
    "text": "Proveedores de modelos u organizaciones con capacidad de cómputo muy grande.",
    "explanation": "Preentrenamiento se completa con la celda Quién normalmente lo hace de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-331-training-approach-table::card:d3-331-training-approach-table-04": {
    "text": "El entrenamiento continúa con datos sin etiquetar específicos de un dominio.",
    "explanation": "Preentrenamiento continuo se completa con la celda Qué sucede de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-331-training-approach-table::card:d3-331-training-approach-table-05": {
    "text": "Un corpus de dominio grande y sin etiquetar.",
    "explanation": "Preentrenamiento continuo se completa con la celda Datos requeridos de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-331-training-approach-table::card:d3-331-training-approach-table-06": {
    "text": "Equipos especializados que adaptan un modelo al lenguaje de un dominio.",
    "explanation": "Preentrenamiento continuo se completa con la celda Quién normalmente lo hace de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-331-training-approach-table::card:d3-331-training-approach-table-07": {
    "text": "Un modelo se entrena con ejemplos etiquetados para ajustarse a un comportamiento o tarea.",
    "explanation": "Ajuste fino se completa con la celda Qué sucede de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-331-training-approach-table::card:d3-331-training-approach-table-08": {
    "text": "Pares de prompt-respuesta o datos de tareas etiquetados.",
    "explanation": "Ajuste fino se completa con la celda Datos requeridos de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-331-training-approach-table::card:d3-331-training-approach-table-09": {
    "text": "Equipos que personalizan un modelo fundacional.",
    "explanation": "Ajuste fino se completa con la celda Quién normalmente lo hace de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-331-training-approach-table::card:d3-331-training-approach-table-10": {
    "text": "Un modelo más pequeño aprende de un modelo maestro más potente.",
    "explanation": "Destilación se completa con la celda Qué sucede de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-331-training-approach-table::card:d3-331-training-approach-table-11": {
    "text": "Salidas o demostraciones del modelo maestro.",
    "explanation": "Destilación se completa con la celda Datos requeridos de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-331-training-approach-table::card:d3-331-training-approach-table-12": {
    "text": "Equipos que optimizan el costo y la latencia.",
    "explanation": "Destilación se completa con la celda Quién normalmente lo hace de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-331-training-lifecycle-order": {
    "title": "Orden del ciclo de vida del entrenamiento",
    "instructions": "Restaura la secuencia de origen en el orden correcto.",
    "sourceNote": "Guía de estudio maestra §3.3.1 Elementos clave del entrenamiento de un modelo fundacional. Convertido a partir de la tabla, comparación, secuencia o conjunto de afirmaciones con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain3-source-structure-games::d3-331-training-lifecycle-order::dest:step-1": {
    "label": "Paso 1",
    "sub": "Coloca aquí el paso de origen correcto."
  },
  "domain3-source-structure-games::d3-331-training-lifecycle-order::dest:step-2": {
    "label": "Paso 2",
    "sub": "Coloca aquí el paso de origen correcto."
  },
  "domain3-source-structure-games::d3-331-training-lifecycle-order::dest:step-3": {
    "label": "Paso 3",
    "sub": "Coloca aquí el paso de origen correcto."
  },
  "domain3-source-structure-games::d3-331-training-lifecycle-order::dest:step-4": {
    "label": "Paso 4",
    "sub": "Coloca aquí el paso de origen correcto."
  },
  "domain3-source-structure-games::d3-331-training-lifecycle-order::dest:step-5": {
    "label": "Paso 5",
    "sub": "Coloca aquí el paso de origen correcto."
  },
  "domain3-source-structure-games::d3-331-training-lifecycle-order::card:d3-331-training-lifecycle-order-01": {
    "text": "Recopilar y preparar los datos",
    "explanation": "Recopilar y preparar los datos pertenece a la posición 1 de la secuencia de la guía."
  },
  "domain3-source-structure-games::d3-331-training-lifecycle-order::card:d3-331-training-lifecycle-order-02": {
    "text": "Entrenar o adaptar el modelo",
    "explanation": "Entrenar o adaptar el modelo pertenece a la posición 2 de la secuencia de la guía."
  },
  "domain3-source-structure-games::d3-331-training-lifecycle-order::card:d3-331-training-lifecycle-order-03": {
    "text": "Evaluar el comportamiento del modelo",
    "explanation": "Evaluar el comportamiento del modelo pertenece a la posición 3 de la secuencia de la guía."
  },
  "domain3-source-structure-games::d3-331-training-lifecycle-order::card:d3-331-training-lifecycle-order-04": {
    "text": "Implementar para inferencia",
    "explanation": "Implementar para inferencia pertenece a la posición 4 de la secuencia de la guía."
  },
  "domain3-source-structure-games::d3-331-training-lifecycle-order::card:d3-331-training-lifecycle-order-05": {
    "text": "Supervisar y mejorar con el tiempo",
    "explanation": "Supervisar y mejorar con el tiempo pertenece a la posición 5 de la secuencia de la guía."
  },
  "domain3-source-structure-games::d3-332-fine-tuning-methods": {
    "title": "De método de ajuste fino a definición",
    "instructions": "Relaciona cada tarjeta suelta con la etiqueta de origen visible.",
    "sourceNote": "Guía de estudio maestra §3.3.2 Métodos de ajuste fino. Convertido a partir de la tabla, comparación, secuencia o conjunto de afirmaciones con nombre de la guía.",
    "slotLabel": "Etiqueta de origen",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain3-source-structure-games::d3-332-fine-tuning-methods::dest:instruction": {
    "label": "Ajuste por instrucciones (instruction tuning)"
  },
  "domain3-source-structure-games::d3-332-fine-tuning-methods::dest:domain": {
    "label": "Adaptación de dominio"
  },
  "domain3-source-structure-games::d3-332-fine-tuning-methods::dest:transfer": {
    "label": "Aprendizaje por transferencia (transfer learning)"
  },
  "domain3-source-structure-games::d3-332-fine-tuning-methods::dest:continued": {
    "label": "Preentrenamiento continuo"
  },
  "domain3-source-structure-games::d3-332-fine-tuning-methods::dest:rlhf": {
    "label": "RLHF"
  },
  "domain3-source-structure-games::d3-332-fine-tuning-methods::card:d3-332-fine-tuning-methods-01": {
    "text": "Enseña al modelo a seguir instrucciones mediante ejemplos de instrucción-respuesta",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.3.2 Métodos de ajuste fino."
  },
  "domain3-source-structure-games::d3-332-fine-tuning-methods::card:d3-332-fine-tuning-methods-02": {
    "text": "Mejora el ajuste al vocabulario y los patrones de un dominio",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.3.2 Métodos de ajuste fino."
  },
  "domain3-source-structure-games::d3-332-fine-tuning-methods::card:d3-332-fine-tuning-methods-03": {
    "text": "Parte de un modelo ya entrenado y lo adapta a una tarea relacionada",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.3.2 Métodos de ajuste fino."
  },
  "domain3-source-structure-games::d3-332-fine-tuning-methods::card:d3-332-fine-tuning-methods-04": {
    "text": "Usa un gran volumen de texto de dominio sin etiquetar para continuar el entrenamiento del modelo",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.3.2 Métodos de ajuste fino."
  },
  "domain3-source-structure-games::d3-332-fine-tuning-methods::card:d3-332-fine-tuning-methods-05": {
    "text": "Usa clasificaciones de preferencia humana y una señal de recompensa",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.3.2 Métodos de ajuste fino."
  },
  "domain3-source-structure-games::d3-332-rlhf-order": {
    "title": "Orden de RLHF",
    "instructions": "Restaura la secuencia de origen en el orden correcto.",
    "sourceNote": "Guía de estudio maestra §3.3.2 Métodos de ajuste fino. Convertido a partir de la tabla, comparación, secuencia o conjunto de afirmaciones con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain3-source-structure-games::d3-332-rlhf-order::dest:step-1": {
    "label": "Paso 1",
    "sub": "Coloca aquí el paso de origen correcto."
  },
  "domain3-source-structure-games::d3-332-rlhf-order::dest:step-2": {
    "label": "Paso 2",
    "sub": "Coloca aquí el paso de origen correcto."
  },
  "domain3-source-structure-games::d3-332-rlhf-order::dest:step-3": {
    "label": "Paso 3",
    "sub": "Coloca aquí el paso de origen correcto."
  },
  "domain3-source-structure-games::d3-332-rlhf-order::card:d3-332-rlhf-order-01": {
    "text": "Los humanos clasifican las salidas",
    "explanation": "Los humanos clasifican las salidas pertenece a la posición 1 de la secuencia de la guía."
  },
  "domain3-source-structure-games::d3-332-rlhf-order::card:d3-332-rlhf-order-02": {
    "text": "Entrenar un modelo de recompensa",
    "explanation": "Entrenar un modelo de recompensa pertenece a la posición 2 de la secuencia de la guía."
  },
  "domain3-source-structure-games::d3-332-rlhf-order::card:d3-332-rlhf-order-03": {
    "text": "Optimizar el modelo con base en la señal de recompensa",
    "explanation": "Optimizar el modelo con base en la señal de recompensa pertenece a la posición 3 de la secuencia de la guía."
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements": {
    "title": "Tabla de requisitos de datos para el ajuste fino",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Guía de estudio maestra §3.3.3 Preparación de datos para el ajuste fino de un modelo fundacional. Convertido a partir de la tabla, comparación, secuencia o conjunto de afirmaciones con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::dest:curation-good": {
    "label": "Curaduría / Qué aspecto tiene cuando está bien hecho"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::dest:curation-failure": {
    "label": "Curaduría / Qué sale mal sin ello"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::dest:governance-good": {
    "label": "Gobernanza / Qué aspecto tiene cuando está bien hecho"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::dest:governance-failure": {
    "label": "Gobernanza / Qué sale mal sin ello"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::dest:size-good": {
    "label": "Tamaño / Qué aspecto tiene cuando está bien hecho"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::dest:size-failure": {
    "label": "Tamaño / Qué sale mal sin ello"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::dest:labeling-good": {
    "label": "Etiquetado / Qué aspecto tiene cuando está bien hecho"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::dest:labeling-failure": {
    "label": "Etiquetado / Qué sale mal sin ello"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::dest:represent-good": {
    "label": "Representatividad / Qué aspecto tiene cuando está bien hecho"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::dest:represent-failure": {
    "label": "Representatividad / Qué sale mal sin ello"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::dest:balance-good": {
    "label": "Equilibrio y diversidad / Qué aspecto tiene cuando está bien hecho"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::dest:balance-failure": {
    "label": "Equilibrio y diversidad / Qué sale mal sin ello"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::dest:preference-good": {
    "label": "Datos de preferencia de RLHF / Qué aspecto tiene cuando está bien hecho"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::dest:preference-failure": {
    "label": "Datos de preferencia de RLHF / Qué sale mal sin ello"
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::card:d3-333-fine-tuning-data-requirements-01": {
    "text": "Se seleccionan intencionalmente ejemplos relevantes y de alta calidad.",
    "explanation": "Curaduría se completa con la celda Qué aspecto tiene cuando está bien hecho de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::card:d3-333-fine-tuning-data-requirements-02": {
    "text": "El ruido enseña el comportamiento incorrecto.",
    "explanation": "Curaduría se completa con la celda Qué sale mal sin ello de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::card:d3-333-fine-tuning-data-requirements-03": {
    "text": "Los permisos, el linaje, la retención y los derechos de uso están claros.",
    "explanation": "Gobernanza se completa con la celda Qué aspecto tiene cuando está bien hecho de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::card:d3-333-fine-tuning-data-requirements-04": {
    "text": "El proyecto genera riesgo de cumplimiento o privacidad.",
    "explanation": "Gobernanza se completa con la celda Qué sale mal sin ello de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::card:d3-333-fine-tuning-data-requirements-05": {
    "text": "Suficientes ejemplos para el método de personalización.",
    "explanation": "Tamaño se completa con la celda Qué aspecto tiene cuando está bien hecho de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::card:d3-333-fine-tuning-data-requirements-06": {
    "text": "El modelo no aprende el patrón objetivo de forma confiable.",
    "explanation": "Tamaño se completa con la celda Qué sale mal sin ello de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::card:d3-333-fine-tuning-data-requirements-07": {
    "text": "Las etiquetas o respuestas son precisas y consistentes.",
    "explanation": "Etiquetado se completa con la celda Qué aspecto tiene cuando está bien hecho de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::card:d3-333-fine-tuning-data-requirements-08": {
    "text": "El modelo aprende salidas inconsistentes.",
    "explanation": "Etiquetado se completa con la celda Qué sale mal sin ello de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::card:d3-333-fine-tuning-data-requirements-09": {
    "text": "Los ejemplos reflejan a los usuarios y las tareas reales.",
    "explanation": "Representatividad se completa con la celda Qué aspecto tiene cuando está bien hecho de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::card:d3-333-fine-tuning-data-requirements-10": {
    "text": "El modelo tiene un rendimiento deficiente en los grupos o casos faltantes.",
    "explanation": "Representatividad se completa con la celda Qué sale mal sin ello de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::card:d3-333-fine-tuning-data-requirements-11": {
    "text": "Las clases, los estilos y los casos extremos no están sesgados.",
    "explanation": "Equilibrio y diversidad se completa con la celda Qué aspecto tiene cuando está bien hecho de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::card:d3-333-fine-tuning-data-requirements-12": {
    "text": "El modelo sobreajusta los ejemplos comunes y falla en los casos poco frecuentes.",
    "explanation": "Equilibrio y diversidad se completa con la celda Qué sale mal sin ello de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::card:d3-333-fine-tuning-data-requirements-13": {
    "text": "Las clasificaciones humanas capturan las salidas preferidas.",
    "explanation": "Datos de preferencia de RLHF se completa con la celda Qué aspecto tiene cuando está bien hecho de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-333-fine-tuning-data-requirements::card:d3-333-fine-tuning-data-requirements-14": {
    "text": "La señal de recompensa optimiza el comportamiento incorrecto.",
    "explanation": "Datos de preferencia de RLHF se completa con la celda Qué sale mal sin ello de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table": {
    "title": "Tabla de enfoques de evaluación",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Guía de estudio maestra §3.4.1 Enfoques para evaluar el rendimiento de un modelo fundacional. Convertido a partir de la tabla, comparación, secuencia o conjunto de afirmaciones con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::dest:bench-works": {
    "label": "Conjuntos de datos de referencia (benchmark) / Cómo funciona"
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::dest:bench-strength": {
    "label": "Conjuntos de datos de referencia / Fortaleza"
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::dest:bench-weakness": {
    "label": "Conjuntos de datos de referencia / Debilidad"
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::dest:auto-works": {
    "label": "Métricas automatizadas / Cómo funciona"
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::dest:auto-strength": {
    "label": "Métricas automatizadas / Fortaleza"
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::dest:auto-weakness": {
    "label": "Métricas automatizadas / Debilidad"
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::dest:human-works": {
    "label": "Evaluación humana / Cómo funciona"
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::dest:human-strength": {
    "label": "Evaluación humana / Fortaleza"
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::dest:human-weakness": {
    "label": "Evaluación humana / Debilidad"
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::dest:judge-works": {
    "label": "LLM-as-a-judge (LLM como juez) / Cómo funciona"
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::dest:judge-strength": {
    "label": "LLM-as-a-judge / Fortaleza"
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::dest:judge-weakness": {
    "label": "LLM-as-a-judge / Debilidad"
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::card:d3-341-evaluation-approach-table-01": {
    "text": "Ejecuta el modelo contra conjuntos de datos establecidos.",
    "explanation": "Conjuntos de datos de referencia se completa con la celda Cómo funciona de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::card:d3-341-evaluation-approach-table-02": {
    "text": "Comparable y repetible.",
    "explanation": "Conjuntos de datos de referencia se completa con la celda Fortaleza de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::card:d3-341-evaluation-approach-table-03": {
    "text": "Puede no coincidir con tu tarea empresarial.",
    "explanation": "Conjuntos de datos de referencia se completa con la celda Debilidad de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::card:d3-341-evaluation-approach-table-04": {
    "text": "Calcula puntuaciones como ROUGE, BLEU, BERTScore o perplejidad.",
    "explanation": "Métricas automatizadas se completa con la celda Cómo funciona de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::card:d3-341-evaluation-approach-table-05": {
    "text": "Rápido y escalable.",
    "explanation": "Métricas automatizadas se completa con la celda Fortaleza de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::card:d3-341-evaluation-approach-table-06": {
    "text": "No puede evaluar completamente la utilidad o la seguridad.",
    "explanation": "Métricas automatizadas se completa con la celda Debilidad de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::card:d3-341-evaluation-approach-table-07": {
    "text": "Las personas evalúan la calidad, la utilidad, la seguridad o la preferencia.",
    "explanation": "Evaluación humana se completa con la celda Cómo funciona de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::card:d3-341-evaluation-approach-table-08": {
    "text": "Captura matices sobre la idoneidad para la tarea.",
    "explanation": "Evaluación humana se completa con la celda Fortaleza de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::card:d3-341-evaluation-approach-table-09": {
    "text": "Más lento y más costoso.",
    "explanation": "Evaluación humana se completa con la celda Debilidad de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::card:d3-341-evaluation-approach-table-10": {
    "text": "Un modelo califica las salidas usando una rúbrica.",
    "explanation": "LLM-as-a-judge se completa con la celda Cómo funciona de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::card:d3-341-evaluation-approach-table-11": {
    "text": "Escala la evaluación cualitativa.",
    "explanation": "LLM-as-a-judge se completa con la celda Fortaleza de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-341-evaluation-approach-table::card:d3-341-evaluation-approach-table-12": {
    "text": "Necesita validación porque el juez puede estar sesgado o equivocado.",
    "explanation": "LLM-as-a-judge se completa con la celda Debilidad de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-342-metric-table": {
    "title": "Tabla de métricas del modelo fundacional",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Guía de estudio maestra §3.4.2 Métricas para evaluar el rendimiento de un modelo fundacional. Convertido a partir de la tabla, comparación, secuencia o conjunto de afirmaciones con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain3-source-structure-games::d3-342-metric-table::dest:rouge-measures": {
    "label": "ROUGE / Qué mide"
  },
  "domain3-source-structure-games::d3-342-metric-table::dest:rouge-use": {
    "label": "ROUGE / Uso principal"
  },
  "domain3-source-structure-games::d3-342-metric-table::dest:rouge-limit": {
    "label": "ROUGE / Limitación"
  },
  "domain3-source-structure-games::d3-342-metric-table::dest:bleu-measures": {
    "label": "BLEU / Qué mide"
  },
  "domain3-source-structure-games::d3-342-metric-table::dest:bleu-use": {
    "label": "BLEU / Uso principal"
  },
  "domain3-source-structure-games::d3-342-metric-table::dest:bleu-limit": {
    "label": "BLEU / Limitación"
  },
  "domain3-source-structure-games::d3-342-metric-table::dest:bertscore-measures": {
    "label": "BERTScore / Qué mide"
  },
  "domain3-source-structure-games::d3-342-metric-table::dest:bertscore-use": {
    "label": "BERTScore / Uso principal"
  },
  "domain3-source-structure-games::d3-342-metric-table::dest:bertscore-limit": {
    "label": "BERTScore / Limitación"
  },
  "domain3-source-structure-games::d3-342-metric-table::dest:llmjudge-measures": {
    "label": "LLM-as-a-judge / Qué mide"
  },
  "domain3-source-structure-games::d3-342-metric-table::dest:llmjudge-use": {
    "label": "LLM-as-a-judge / Uso principal"
  },
  "domain3-source-structure-games::d3-342-metric-table::dest:llmjudge-limit": {
    "label": "LLM-as-a-judge / Limitación"
  },
  "domain3-source-structure-games::d3-342-metric-table::dest:perplexity-measures": {
    "label": "Perplejidad / Qué mide"
  },
  "domain3-source-structure-games::d3-342-metric-table::dest:perplexity-use": {
    "label": "Perplejidad / Uso principal"
  },
  "domain3-source-structure-games::d3-342-metric-table::dest:perplexity-limit": {
    "label": "Perplejidad / Limitación"
  },
  "domain3-source-structure-games::d3-342-metric-table::card:d3-342-metric-table-01": {
    "text": "Superposición con el texto de referencia.",
    "explanation": "ROUGE se completa con la celda Qué mide de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-342-metric-table::card:d3-342-metric-table-02": {
    "text": "Resumen.",
    "explanation": "ROUGE se completa con la celda Uso principal de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-342-metric-table::card:d3-342-metric-table-03": {
    "text": "La superposición no demuestra veracidad ni utilidad.",
    "explanation": "ROUGE se completa con la celda Limitación de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-342-metric-table::card:d3-342-metric-table-04": {
    "text": "Superposición de n-gramas con traducciones de referencia.",
    "explanation": "BLEU se completa con la celda Qué mide de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-342-metric-table::card:d3-342-metric-table-05": {
    "text": "Traducción.",
    "explanation": "BLEU se completa con la celda Uso principal de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-342-metric-table::card:d3-342-metric-table-06": {
    "text": "Puede pasar por alto paráfrasis válidas.",
    "explanation": "BLEU se completa con la celda Limitación de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-342-metric-table::card:d3-342-metric-table-07": {
    "text": "Similitud semántica mediante embeddings.",
    "explanation": "BERTScore se completa con la celda Qué mide de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-342-metric-table::card:d3-342-metric-table-08": {
    "text": "Paráfrasis y coincidencia semántica.",
    "explanation": "BERTScore se completa con la celda Uso principal de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-342-metric-table::card:d3-342-metric-table-09": {
    "text": "Aún depende de referencias y no demuestra seguridad.",
    "explanation": "BERTScore se completa con la celda Limitación de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-342-metric-table::card:d3-342-metric-table-10": {
    "text": "Juicio del modelo basado en una rúbrica.",
    "explanation": "LLM-as-a-judge se completa con la celda Qué mide de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-342-metric-table::card:d3-342-metric-table-11": {
    "text": "Utilidad y calidad en tareas abiertas.",
    "explanation": "LLM-as-a-judge se completa con la celda Uso principal de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-342-metric-table::card:d3-342-metric-table-12": {
    "text": "El juez puede ser inconsistente o estar sesgado.",
    "explanation": "LLM-as-a-judge se completa con la celda Limitación de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-342-metric-table::card:d3-342-metric-table-13": {
    "text": "Qué tan bien predice un modelo los tokens de una secuencia.",
    "explanation": "Perplejidad se completa con la celda Qué mide de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-342-metric-table::card:d3-342-metric-table-14": {
    "text": "Predicción de secuencias durante el desarrollo del modelo.",
    "explanation": "Perplejidad se completa con la celda Uso principal de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-342-metric-table::card:d3-342-metric-table-15": {
    "text": "Una perplejidad más baja no garantiza mejores resultados para el usuario.",
    "explanation": "Perplejidad se completa con la celda Limitación de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-343-business-question-metric": {
    "title": "De pregunta empresarial a métrica",
    "instructions": "Relaciona cada tarjeta suelta con la etiqueta de origen visible.",
    "sourceNote": "Guía de estudio maestra §3.4.3 Determinar si un FM cumple los objetivos empresariales. Convertido a partir de la tabla, comparación, secuencia o conjunto de afirmaciones con nombre de la guía.",
    "slotLabel": "Etiqueta de origen",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain3-source-structure-games::d3-343-business-question-metric::dest:productivity": {
    "label": "Productividad"
  },
  "domain3-source-structure-games::d3-343-business-question-metric::dest:adoption": {
    "label": "Adopción"
  },
  "domain3-source-structure-games::d3-343-business-question-metric::dest:commercial": {
    "label": "Resultado comercial"
  },
  "domain3-source-structure-games::d3-343-business-question-metric::dest:economic": {
    "label": "Viabilidad económica"
  },
  "domain3-source-structure-games::d3-343-business-question-metric::dest:safety": {
    "label": "Seguridad"
  },
  "domain3-source-structure-games::d3-343-business-question-metric::card:d3-343-business-question-metric-01": {
    "text": "Tareas completadas por hora",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.4.3 Determinar si un FM cumple los objetivos empresariales."
  },
  "domain3-source-structure-games::d3-343-business-question-metric::card:d3-343-business-question-metric-02": {
    "text": "Tasa de uso recurrente y adopción",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.4.3 Determinar si un FM cumple los objetivos empresariales."
  },
  "domain3-source-structure-games::d3-343-business-question-metric::card:d3-343-business-question-metric-03": {
    "text": "Tasa de conversión o resolución",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.4.3 Determinar si un FM cumple los objetivos empresariales."
  },
  "domain3-source-structure-games::d3-343-business-question-metric::card:d3-343-business-question-metric-04": {
    "text": "Costo por interacción",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.4.3 Determinar si un FM cumple los objetivos empresariales."
  },
  "domain3-source-structure-games::d3-343-business-question-metric::card:d3-343-business-question-metric-05": {
    "text": "Volumen de quejas o tasa de intervención de guardrails",
    "explanation": "Restaura la estructura de origen de la Guía de estudio maestra §3.4.3 Determinar si un FM cumple los objetivos empresariales."
  },
  "domain3-source-structure-games::d3-344-application-evaluation-table": {
    "title": "Tabla de evaluación de aplicaciones de FM",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Guía de estudio maestra §3.4.4 Evaluación de aplicaciones construidas con modelos fundacionales. Convertido a partir de la tabla, comparación, secuencia o conjunto de afirmaciones con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain3-source-structure-games::d3-344-application-evaluation-table::dest:rag-evaluate": {
    "label": "RAG / Qué evaluar"
  },
  "domain3-source-structure-games::d3-344-application-evaluation-table::dest:rag-failure": {
    "label": "RAG / Modo de falla típico"
  },
  "domain3-source-structure-games::d3-344-application-evaluation-table::dest:agents-evaluate": {
    "label": "Agentes / Qué evaluar"
  },
  "domain3-source-structure-games::d3-344-application-evaluation-table::dest:agents-failure": {
    "label": "Agentes / Modo de falla típico"
  },
  "domain3-source-structure-games::d3-344-application-evaluation-table::dest:workflows-evaluate": {
    "label": "Flujos de trabajo / Qué evaluar"
  },
  "domain3-source-structure-games::d3-344-application-evaluation-table::dest:workflows-failure": {
    "label": "Flujos de trabajo / Modo de falla típico"
  },
  "domain3-source-structure-games::d3-344-application-evaluation-table::card:d3-344-application-evaluation-table-01": {
    "text": "Calidad de la recuperación, fundamentación (groundedness), relevancia de la respuesta y precisión de las citas.",
    "explanation": "RAG se completa con la celda Qué evaluar de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-344-application-evaluation-table::card:d3-344-application-evaluation-table-02": {
    "text": "La respuesta parece fluida, pero no está respaldada o cita la fuente incorrecta.",
    "explanation": "RAG se completa con la celda Modo de falla típico de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-344-application-evaluation-table::card:d3-344-application-evaluation-table-03": {
    "text": "Finalización de la tarea, selección de herramientas, pasos, recuperación, costo y seguridad.",
    "explanation": "Agentes se completa con la celda Qué evaluar de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-344-application-evaluation-table::card:d3-344-application-evaluation-table-04": {
    "text": "El agente elige la herramienta incorrecta o realiza acciones inseguras.",
    "explanation": "Agentes se completa con la celda Modo de falla típico de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-344-application-evaluation-table::card:d3-344-application-evaluation-table-05": {
    "text": "Cada paso, transferencia, validación y calidad de la salida.",
    "explanation": "Flujos de trabajo se completa con la celda Qué evaluar de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-344-application-evaluation-table::card:d3-344-application-evaluation-table-06": {
    "text": "Un paso fijo falla y la salida posterior se vuelve incorrecta.",
    "explanation": "Flujos de trabajo se completa con la celda Modo de falla típico de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table": {
    "title": "Métricas de alineación con los objetivos empresariales",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Guía de estudio maestra §3.4.5 Métricas de alineación con los objetivos empresariales. Convertido a partir de la tabla, comparación, secuencia o conjunto de afirmaciones con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::dest:completion-definition": {
    "label": "Tasa de finalización de tareas / Definición"
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::dest:completion-poor": {
    "label": "Tasa de finalización de tareas / Qué indica un resultado deficiente"
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::dest:satisfaction-definition": {
    "label": "Satisfacción del usuario / Definición"
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::dest:satisfaction-poor": {
    "label": "Satisfacción del usuario / Qué indica un resultado deficiente"
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::dest:cost-definition": {
    "label": "Costo por interacción / Definición"
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::dest:cost-poor": {
    "label": "Costo por interacción / Qué indica un resultado deficiente"
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::dest:escalation-definition": {
    "label": "Tasa de escalamiento / Definición"
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::dest:escalation-poor": {
    "label": "Tasa de escalamiento / Qué indica un resultado deficiente"
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::dest:resolution-definition": {
    "label": "Tiempo de resolución / Definición"
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::dest:resolution-poor": {
    "label": "Tiempo de resolución / Qué indica un resultado deficiente"
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::card:d3-345-alignment-metric-table-01": {
    "text": "Proporción de tareas del usuario completadas con éxito.",
    "explanation": "Tasa de finalización de tareas se completa con la celda Definición de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::card:d3-345-alignment-metric-table-02": {
    "text": "La aplicación no está resolviendo el flujo de trabajo previsto.",
    "explanation": "Tasa de finalización de tareas se completa con la celda Qué indica un resultado deficiente de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::card:d3-345-alignment-metric-table-03": {
    "text": "Calificación o sentimiento del usuario sobre la experiencia de IA.",
    "explanation": "Satisfacción del usuario se completa con la celda Definición de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::card:d3-345-alignment-metric-table-04": {
    "text": "Las salidas pueden ser técnicamente correctas, pero no útiles.",
    "explanation": "Satisfacción del usuario se completa con la celda Qué indica un resultado deficiente de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::card:d3-345-alignment-metric-table-05": {
    "text": "Costo promedio de atender una solicitud o tarea.",
    "explanation": "Costo por interacción se completa con la celda Definición de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::card:d3-345-alignment-metric-table-06": {
    "text": "La solución puede no ser económicamente viable.",
    "explanation": "Costo por interacción se completa con la celda Qué indica un resultado deficiente de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::card:d3-345-alignment-metric-table-07": {
    "text": "Con qué frecuencia el trabajo pasa a un humano o a una ruta de respaldo.",
    "explanation": "Tasa de escalamiento se completa con la celda Definición de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::card:d3-345-alignment-metric-table-08": {
    "text": "La IA no puede manejar los casos previstos.",
    "explanation": "Tasa de escalamiento se completa con la celda Qué indica un resultado deficiente de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::card:d3-345-alignment-metric-table-09": {
    "text": "Tiempo requerido para completar el resultado del usuario.",
    "explanation": "Tiempo de resolución se completa con la celda Definición de la tabla de la guía."
  },
  "domain3-source-structure-games::d3-345-alignment-metric-table::card:d3-345-alignment-metric-table-10": {
    "text": "El sistema es demasiado lento o añade fricción.",
    "explanation": "Tiempo de resolución se completa con la celda Qué indica un resultado deficiente de la tabla de la guía."
  }
});
})();
