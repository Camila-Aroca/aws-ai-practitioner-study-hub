(function(){
  "use strict";
  window.I18N_ES_ACTIVITIES = Object.assign({}, window.I18N_ES_ACTIVITIES || {}, {
  "activity:domain1-task11-12": {
    "title": "Emparejamiento de tarjetas del Dominio 1: conceptos de IA y casos de uso",
    "shortDescription": "Vocabulario básico de IA, jerarquía, tipos de inferencia, tipos de datos, paradigmas de aprendizaje, patrones de valor, técnicas de AA, servicios de IA administrados de AWS, y AA tradicional versus modelos fundacionales.",
    "activityType": "Emparejamiento, clasificación y ordenamiento de tarjetas",
    "taskStatement": "Tareas 1.1-1.2"
  },
  "activity:domain1-lifecycle": {
    "title": "Emparejamiento de tarjetas: ciclo de vida de IA/AA",
    "shortDescription": "Etapas del pipeline, pipelines de AA tradicional versus modelos fundacionales, desviación (drift), fuentes de modelos fundacionales y métodos de implementación en producción.",
    "activityType": "Ordenamiento, clasificación y emparejamiento de tarjetas",
    "taskStatement": "Tarea 1.3"
  },
  "activity:domain1-pipeline-services": {
    "title": "Emparejamiento de tarjetas: servicios del pipeline",
    "shortDescription": "Servicios de AWS asociados a las etapas del pipeline de IA/AA, incluidos cambios de nombre de servicios en v1.1.",
    "activityType": "Selección de servicios, clasificación y emparejamiento de tarjetas",
    "taskStatement": "Tarea 1.3"
  },
  "activity:domain1-mlops": {
    "title": "Emparejamiento de tarjetas: MLOps",
    "shortDescription": "Experimentación, repetibilidad, escalabilidad, deuda técnica, preparación para producción, desviación (drift), monitoreo y reentrenamiento.",
    "activityType": "Emparejamiento de tarjetas",
    "taskStatement": "Tarea 1.3"
  },
  "activity:domain1-metrics": {
    "title": "Emparejamiento de tarjetas: métricas",
    "shortDescription": "Métricas del modelo, métricas de negocio, la trampa de la exactitud (accuracy) y selección de métricas basada en escenarios.",
    "activityType": "Emparejamiento de tarjetas y clasificación de escenarios",
    "taskStatement": "Tarea 1.3"
  },
  "activity:domain1-inference": {
    "title": "¿Inferencia en tiempo real, por lotes, asíncrona o sin servidor?",
    "shortDescription": "Recomendado cuando el Objetivo 1.1.3 está por debajo del 70% o se fallan preguntas sobre modos de inferencia.",
    "activityType": "Unidad de refuerzo adaptativo",
    "taskStatement": "Unidades de refuerzo del Dominio 1"
  },
  "activity:domain1-aws-services": {
    "title": "¿Qué servicio de AWS es realmente el adecuado?",
    "shortDescription": "Recomendado cuando los resultados de selección de servicio del Objetivo 1.2.5 o 1.3.4 están por debajo del 70%.",
    "activityType": "Unidad de refuerzo adaptativo",
    "taskStatement": "Unidades de refuerzo del Dominio 1"
  },
  "activity:domain1-reinforcement-lifecycle": {
    "title": "Del objetivo de negocio a la producción",
    "shortDescription": "Recomendado cuando los objetivos de ciclo de vida, etapas del pipeline, MLOps o métricas en tiempo de ejecución están por debajo del 70%.",
    "activityType": "Unidad de refuerzo adaptativo",
    "taskStatement": "Unidades de refuerzo del Dominio 1"
  },
  "activity:domain1-model-evaluation": {
    "title": "¿Qué está haciendo mal el modelo?",
    "shortDescription": "Recomendado cuando los objetivos de ajuste del modelo (fit) o métricas de evaluación están por debajo del 70%.",
    "activityType": "Unidad de refuerzo adaptativo",
    "taskStatement": "Unidades de refuerzo del Dominio 1"
  },
  "activity:domain1-reinforcement-checkpoint": {
    "title": "Punto de control de refuerzo del Dominio 1",
    "shortDescription": "Úsalo después de las unidades enfocadas para verificar que las distinciones se transfieran a un enunciado distinto.",
    "activityType": "Punto de control mixto",
    "taskStatement": "Unidades de refuerzo del Dominio 1"
  },
  "activity:domain1-simulated-exam": {
    "title": "Examen simulado del Dominio 1",
    "shortDescription": "Un examen diagnóstico de 60 preguntas, cronometrado o libre, que cubre todos los objetivos del Dominio 1, con resultados por tarea y por objetivo.",
    "activityType": "Opción múltiple y respuesta múltiple",
    "taskStatement": "Repaso del Dominio 1"
  },
  "activity:domain2-genai-fundamentals": {
    "title": "Emparejamiento de tarjetas: fundamentos de IA generativa",
    "shortDescription": "Vocabulario del Dominio 2, casos de uso, ciclo de vida, ingeniería de contexto, agentes, servicios de IA generativa de AWS, ventajas, limitaciones, métricas y compensaciones de costo.",
    "activityType": "Emparejamiento, clasificación y ordenamiento de tarjetas",
    "taskStatement": "Tareas 2.1-2.3"
  },
  "activity:domain2-addendum": {
    "title": "Dominio 2 — Repaso del addendum de tarjetas",
    "shortDescription": "Repaso enfocado de la estructura fuente para las tablas comparativas del Dominio 2, enunciados de verdadero/falso, procesos ordenados, tablas de propósito de servicios, precios, RAG y decisiones de implementación.",
    "activityType": "Completar tablas, verdadero/falso, ordenamiento y emparejamiento de servicios",
    "taskStatement": "Dominio 2 — Addendum"
  },
  "activity:domain3-source-structure-games": {
    "title": "Dominio 3: juegos de estructura fuente",
    "shortDescription": "Actividades organizadas por objetivo para selección de modelos fundacionales, inferencia, RAG, almacenes de vectores, personalización, agentes, ingeniería de prompts, entrenamiento, ajuste fino y evaluación.",
    "activityType": "Completar tablas, emparejamiento de servicios, ordenamiento y verdadero/falso",
    "taskStatement": "Tareas 3.1-3.4"
  },
  "activity:domain4-source-structure-games": {
    "title": "Dominio 4: juegos de estructura fuente",
    "shortDescription": "Actividades organizadas por objetivo sobre características de la IA responsable, Guardrails, riesgo legal, conjuntos de datos, sesgo y varianza, monitoreo, transparencia, explicabilidad, compensaciones y diseño centrado en el ser humano.",
    "activityType": "Completar tablas, emparejamiento de servicios, ordenamiento y verdadero/falso",
    "taskStatement": "Tareas 4.1-4.2"
  },
  "activity:domain5-source-structure-games": {
    "title": "Dominio 5: juegos de estructura fuente",
    "shortDescription": "Actividades organizadas por objetivo sobre servicios de seguridad, linaje y citación, ingeniería de datos segura, seguridad en tiempo de ejecución, defensa contra alucinaciones, servicios de gobernanza, gobernanza de datos y alcance de seguridad.",
    "activityType": "Completar tablas, emparejamiento de servicios, ordenamiento y verdadero/falso",
    "taskStatement": "Tareas 5.1-5.2"
  }
});
})();
