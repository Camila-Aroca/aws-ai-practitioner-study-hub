(function(){
  "use strict";
  window.I18N_ES_ROUNDS = Object.assign({}, window.I18N_ES_ROUNDS || {}, {
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table": {
    "title": "Tabla de características de la IA responsable",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Master Study Guide §4.1.1 Características de la IA responsable. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::dest:bias-meaning": {
    "label": "Sesgo / Significado"
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::dest:bias-failure": {
    "label": "Sesgo / Cómo falla en la práctica"
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::dest:fairness-meaning": {
    "label": "Equidad / Significado"
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::dest:fairness-failure": {
    "label": "Equidad / Cómo falla en la práctica"
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::dest:inclusivity-meaning": {
    "label": "Inclusividad / Significado"
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::dest:inclusivity-failure": {
    "label": "Inclusividad / Cómo falla en la práctica"
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::dest:robustness-meaning": {
    "label": "Robustez / Significado"
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::dest:robustness-failure": {
    "label": "Robustez / Cómo falla en la práctica"
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::dest:safety-meaning": {
    "label": "Seguridad / Significado"
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::dest:safety-failure": {
    "label": "Seguridad / Cómo falla en la práctica"
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::dest:veracity-meaning": {
    "label": "Veracidad / Significado"
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::dest:veracity-failure": {
    "label": "Veracidad / Cómo falla en la práctica"
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::card:d4-411-responsible-ai-feature-table-01": {
    "text": "Error o desviación sistemática en los datos, el modelo o los resultados.",
    "explanation": "Sesgo se completa con la celda de Significado de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::card:d4-411-responsible-ai-feature-table-02": {
    "text": "Un grupo recibe resultados consistentemente peores.",
    "explanation": "Sesgo se completa con la celda de Cómo falla en la práctica de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::card:d4-411-responsible-ai-feature-table-03": {
    "text": "Trato y resultados comparables entre los grupos relevantes.",
    "explanation": "Equidad se completa con la celda de Significado de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::card:d4-411-responsible-ai-feature-table-04": {
    "text": "Un modelo favorece a una población sin justificación.",
    "explanation": "Equidad se completa con la celda de Cómo falla en la práctica de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::card:d4-411-responsible-ai-feature-table-05": {
    "text": "El diseño y los datos consideran a usuarios y contextos diversos.",
    "explanation": "Inclusividad se completa con la celda de Significado de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::card:d4-411-responsible-ai-feature-table-06": {
    "text": "El sistema excluye a los usuarios a los que debería servir.",
    "explanation": "Inclusividad se completa con la celda de Cómo falla en la práctica de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::card:d4-411-responsible-ai-feature-table-07": {
    "text": "Comportamiento confiable ante la variación y el estrés esperados.",
    "explanation": "Robustez se completa con la celda de Significado de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::card:d4-411-responsible-ai-feature-table-08": {
    "text": "Pequeños cambios en la entrada producen resultados inseguros o inestables.",
    "explanation": "Robustez se completa con la celda de Cómo falla en la práctica de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::card:d4-411-responsible-ai-feature-table-09": {
    "text": "Evitar resultados dañinos, peligrosos o inapropiados.",
    "explanation": "Seguridad se completa con la celda de Significado de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::card:d4-411-responsible-ai-feature-table-10": {
    "text": "El modelo proporciona instrucciones o contenido dañino.",
    "explanation": "Seguridad se completa con la celda de Cómo falla en la práctica de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::card:d4-411-responsible-ai-feature-table-11": {
    "text": "Veracidad y fundamentación de los resultados.",
    "explanation": "Veracidad se completa con la celda de Significado de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-411-responsible-ai-feature-table::card:d4-411-responsible-ai-feature-table-12": {
    "text": "El modelo presenta afirmaciones sin fundamento como hechos.",
    "explanation": "Veracidad se completa con la celda de Cómo falla en la práctica de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table": {
    "title": "Capacidades de Amazon Bedrock Guardrails",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Master Study Guide §4.1.2 Herramientas para identificar características de la IA responsable. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::dest:content-does": {
    "label": "Filtros de contenido / Qué hace"
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::dest:content-property": {
    "label": "Filtros de contenido / Propiedad de IA responsable que respalda"
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::dest:denied-does": {
    "label": "Temas denegados / Qué hace"
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::dest:denied-property": {
    "label": "Temas denegados / Propiedad de IA responsable que respalda"
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::dest:word-does": {
    "label": "Filtros de palabras / Qué hace"
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::dest:word-property": {
    "label": "Filtros de palabras / Propiedad de IA responsable que respalda"
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::dest:sensitive-does": {
    "label": "Filtros de información sensible / Qué hace"
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::dest:sensitive-property": {
    "label": "Filtros de información sensible / Propiedad de IA responsable que respalda"
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::dest:grounding-does": {
    "label": "Verificaciones de fundamentación contextual / Qué hace"
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::dest:grounding-property": {
    "label": "Verificaciones de fundamentación contextual / Propiedad de IA responsable que respalda"
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::dest:reasoning-does": {
    "label": "Verificaciones de razonamiento automatizado / Qué hace"
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::dest:reasoning-property": {
    "label": "Verificaciones de razonamiento automatizado / Propiedad de IA responsable que respalda"
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::card:d4-412-guardrails-capability-table-01": {
    "text": "Detecta y bloquea categorías de contenido dañino.",
    "explanation": "Filtros de contenido se completa con la celda de Qué hace de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::card:d4-412-guardrails-capability-table-02": {
    "text": "Seguridad.",
    "explanation": "Filtros de contenido se completa con la celda de Propiedad de IA responsable que respalda de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::card:d4-412-guardrails-capability-table-03": {
    "text": "Bloquea temas que la aplicación no debería tratar.",
    "explanation": "Temas denegados se completa con la celda de Qué hace de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::card:d4-412-guardrails-capability-table-04": {
    "text": "Seguridad y alineación con políticas.",
    "explanation": "Temas denegados se completa con la celda de Propiedad de IA responsable que respalda de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::card:d4-412-guardrails-capability-table-05": {
    "text": "Filtra palabras o frases específicas.",
    "explanation": "Filtros de palabras se completa con la celda de Qué hace de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::card:d4-412-guardrails-capability-table-06": {
    "text": "Seguridad y control de marca.",
    "explanation": "Filtros de palabras se completa con la celda de Propiedad de IA responsable que respalda de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::card:d4-412-guardrails-capability-table-07": {
    "text": "Detecta o redacta datos sensibles como PII.",
    "explanation": "Filtros de información sensible se completa con la celda de Qué hace de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::card:d4-412-guardrails-capability-table-08": {
    "text": "Privacidad y seguridad.",
    "explanation": "Filtros de información sensible se completa con la celda de Propiedad de IA responsable que respalda de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::card:d4-412-guardrails-capability-table-09": {
    "text": "Verifica si las respuestas están fundamentadas en el contexto de origen proporcionado.",
    "explanation": "Verificaciones de fundamentación contextual se completa con la celda de Qué hace de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::card:d4-412-guardrails-capability-table-10": {
    "text": "Veracidad.",
    "explanation": "Verificaciones de fundamentación contextual se completa con la celda de Propiedad de IA responsable que respalda de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::card:d4-412-guardrails-capability-table-11": {
    "text": "Valida las respuestas frente a reglas lógicas cuando están configuradas.",
    "explanation": "Verificaciones de razonamiento automatizado se completa con la celda de Qué hace de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-412-guardrails-capability-table::card:d4-412-guardrails-capability-table-12": {
    "text": "Confiabilidad y corrección.",
    "explanation": "Verificaciones de razonamiento automatizado se completa con la celda de Propiedad de IA responsable que respalda de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-413-responsible-selection-practices": {
    "title": "Prácticas responsables de selección de modelos",
    "instructions": "Empareja cada tarjeta suelta con la etiqueta de origen visible.",
    "sourceNote": "Master Study Guide §4.1.3 Prácticas responsables para seleccionar un modelo. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "slotLabel": "Etiqueta de origen",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain4-source-structure-games::d4-413-responsible-selection-practices::dest:small": {
    "label": "El modelo más pequeño que sea suficiente"
  },
  "domain4-source-structure-games::d4-413-responsible-selection-practices::dest:reuse": {
    "label": "Reutilizar modelos preentrenados"
  },
  "domain4-source-structure-games::d4-413-responsible-selection-practices::dest:prompt-rag": {
    "label": "Ingeniería de prompts y RAG antes del ajuste fino"
  },
  "domain4-source-structure-games::d4-413-responsible-selection-practices::dest:distill": {
    "label": "Destilación"
  },
  "domain4-source-structure-games::d4-413-responsible-selection-practices::dest:batch": {
    "label": "Inferencia por lotes"
  },
  "domain4-source-structure-games::d4-413-responsible-selection-practices::dest:license": {
    "label": "Licenciamiento y procedencia"
  },
  "domain4-source-structure-games::d4-413-responsible-selection-practices::card:d4-413-responsible-selection-practices-01": {
    "text": "Reduce el costo, la latencia y el uso de recursos cuando la calidad es suficiente",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.1.3 Prácticas responsables para seleccionar un modelo."
  },
  "domain4-source-structure-games::d4-413-responsible-selection-practices::card:d4-413-responsible-selection-practices-02": {
    "text": "Evita entrenar innecesariamente desde cero",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.1.3 Prácticas responsables para seleccionar un modelo."
  },
  "domain4-source-structure-games::d4-413-responsible-selection-practices::card:d4-413-responsible-selection-practices-03": {
    "text": "Resuelve muchas necesidades de comportamiento o conocimiento antes de una personalización más costosa",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.1.3 Prácticas responsables para seleccionar un modelo."
  },
  "domain4-source-structure-games::d4-413-responsible-selection-practices::card:d4-413-responsible-selection-practices-04": {
    "text": "Usa un modelo estudiante más pequeño para tareas repetitivas eficientes",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.1.3 Prácticas responsables para seleccionar un modelo."
  },
  "domain4-source-structure-games::d4-413-responsible-selection-practices::card:d4-413-responsible-selection-practices-05": {
    "text": "Ejecuta trabajos no interactivos de manera eficiente en lugar de forzar la inferencia en tiempo real",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.1.3 Prácticas responsables para seleccionar un modelo."
  },
  "domain4-source-structure-games::d4-413-responsible-selection-practices::card:d4-413-responsible-selection-practices-06": {
    "text": "Confirma que el modelo y los datos puedan usarse legalmente",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.1.3 Prácticas responsables para seleccionar un modelo."
  },
  "domain4-source-structure-games::d4-414-legal-risk-table": {
    "title": "Tabla de riesgo legal",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Master Study Guide §4.1.4 Riesgos legales de trabajar con IA generativa. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::dest:ip-appears": {
    "label": "Infracción de propiedad intelectual / Cómo se manifiesta"
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::dest:ip-mitigation": {
    "label": "Infracción de propiedad intelectual / Mitigación"
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::dest:bias-appears": {
    "label": "Resultados sesgados / Cómo se manifiesta"
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::dest:bias-mitigation": {
    "label": "Resultados sesgados / Mitigación"
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::dest:trust-appears": {
    "label": "Pérdida de confianza / Cómo se manifiesta"
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::dest:trust-mitigation": {
    "label": "Pérdida de confianza / Mitigación"
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::dest:enduser-appears": {
    "label": "Riesgo para el usuario final / Cómo se manifiesta"
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::dest:enduser-mitigation": {
    "label": "Riesgo para el usuario final / Mitigación"
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::dest:hallucination-appears": {
    "label": "Alucinaciones / Cómo se manifiesta"
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::dest:hallucination-mitigation": {
    "label": "Alucinaciones / Mitigación"
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::card:d4-414-legal-risk-table-01": {
    "text": "Los resultados o los datos de entrenamiento infringen derechos de autor o licencias.",
    "explanation": "Infracción de propiedad intelectual se completa con la celda de Cómo se manifiesta de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::card:d4-414-legal-risk-table-02": {
    "text": "Usar fuentes aprobadas, verificaciones de procedencia, revisión y licenciamiento.",
    "explanation": "Infracción de propiedad intelectual se completa con la celda de Mitigación de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::card:d4-414-legal-risk-table-03": {
    "text": "Grupos protegidos o subrepresentados reciben un trato dañino.",
    "explanation": "Resultados sesgados se completa con la celda de Cómo se manifiesta de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::card:d4-414-legal-risk-table-04": {
    "text": "Usar datos representativos, pruebas por subgrupos y revisión de equidad.",
    "explanation": "Resultados sesgados se completa con la celda de Mitigación de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::card:d4-414-legal-risk-table-05": {
    "text": "Los usuarios no pueden confiar en el comportamiento de la IA ni entenderlo.",
    "explanation": "Pérdida de confianza se completa con la celda de Cómo se manifiesta de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::card:d4-414-legal-risk-table-06": {
    "text": "Divulgar el uso de IA, explicar sus límites y monitorear la calidad.",
    "explanation": "Pérdida de confianza se completa con la celda de Mitigación de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::card:d4-414-legal-risk-table-07": {
    "text": "El sistema da consejos dañinos o acciones inseguras.",
    "explanation": "Riesgo para el usuario final se completa con la celda de Cómo se manifiesta de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::card:d4-414-legal-risk-table-08": {
    "text": "Revisión humana, Guardrails y casos de uso acotados.",
    "explanation": "Riesgo para el usuario final se completa con la celda de Mitigación de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::card:d4-414-legal-risk-table-09": {
    "text": "Afirmaciones sin fundamento se presentan como hechos.",
    "explanation": "Alucinaciones se completa con la celda de Cómo se manifiesta de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-414-legal-risk-table::card:d4-414-legal-risk-table-10": {
    "text": "Usar RAG, verificaciones de fundamentación, citas y validación.",
    "explanation": "Alucinaciones se completa con la celda de Mitigación de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table": {
    "title": "Características de un buen conjunto de datos",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Master Study Guide §4.1.5 Características de los buenos conjuntos de datos. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table::dest:inclusive-meaning": {
    "label": "Inclusividad / Significado"
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table::dest:inclusive-absent": {
    "label": "Inclusividad / Consecuencia si está ausente"
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table::dest:diverse-meaning": {
    "label": "Diversidad / Significado"
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table::dest:diverse-absent": {
    "label": "Diversidad / Consecuencia si está ausente"
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table::dest:curated-meaning": {
    "label": "Fuentes curadas / Significado"
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table::dest:curated-absent": {
    "label": "Fuentes curadas / Consecuencia si está ausente"
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table::dest:balance-meaning": {
    "label": "Balance / Significado"
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table::dest:balance-absent": {
    "label": "Balance / Consecuencia si está ausente"
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table::card:d4-415-dataset-characteristic-table-01": {
    "text": "Cubre a las personas y situaciones a las que sirve el sistema.",
    "explanation": "Inclusividad se completa con la celda de Significado de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table::card:d4-415-dataset-characteristic-table-02": {
    "text": "Algunos usuarios quedan excluidos o resultan perjudicados.",
    "explanation": "Inclusividad se completa con la celda de Consecuencia si está ausente de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table::card:d4-415-dataset-characteristic-table-03": {
    "text": "Contiene variación significativa entre los ejemplos.",
    "explanation": "Diversidad se completa con la celda de Significado de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table::card:d4-415-dataset-characteristic-table-04": {
    "text": "El modelo falla fuera de patrones estrechos.",
    "explanation": "Diversidad se completa con la celda de Consecuencia si está ausente de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table::card:d4-415-dataset-characteristic-table-05": {
    "text": "Las fuentes se seleccionan por calidad, derechos y relevancia.",
    "explanation": "Fuentes curadas se completa con la celda de Significado de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table::card:d4-415-dataset-characteristic-table-06": {
    "text": "Entran al sistema datos con ruido, de baja calidad o sin licencia.",
    "explanation": "Fuentes curadas se completa con la celda de Consecuencia si está ausente de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table::card:d4-415-dataset-characteristic-table-07": {
    "text": "Las clases y los grupos no están muy desequilibrados.",
    "explanation": "Balance se completa con la celda de Significado de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-415-dataset-characteristic-table::card:d4-415-dataset-characteristic-table-08": {
    "text": "El modelo sobrepredice los casos comunes y pasa por alto los poco frecuentes.",
    "explanation": "Balance se completa con la celda de Consecuencia si está ausente de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-416-bias-variance-table": {
    "title": "Completar la tabla de sesgo y varianza",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Master Study Guide §4.1.6 Efectos del sesgo y la varianza. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::dest:high-bias-symptom": {
    "label": "Sesgo alto / Síntoma en entrenamiento/prueba"
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::dest:high-bias-meaning": {
    "label": "Sesgo alto / Significado"
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::dest:high-bias-remedy": {
    "label": "Sesgo alto / Remedio típico"
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::dest:high-variance-symptom": {
    "label": "Varianza alta / Síntoma en entrenamiento/prueba"
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::dest:high-variance-meaning": {
    "label": "Varianza alta / Significado"
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::dest:high-variance-remedy": {
    "label": "Varianza alta / Remedio típico"
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::dest:tradeoff-symptom": {
    "label": "Equilibrio entre sesgo y varianza / Síntoma en entrenamiento/prueba"
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::dest:tradeoff-meaning": {
    "label": "Equilibrio entre sesgo y varianza / Significado"
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::dest:tradeoff-remedy": {
    "label": "Equilibrio entre sesgo y varianza / Remedio típico"
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::card:d4-416-bias-variance-table-01": {
    "text": "Mal desempeño tanto en entrenamiento como en prueba.",
    "explanation": "Sesgo alto se completa con la celda de Síntoma en entrenamiento/prueba de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::card:d4-416-bias-variance-table-02": {
    "text": "Subajuste (underfitting); el modelo es demasiado simple o pasa por alto patrones.",
    "explanation": "Sesgo alto se completa con la celda de Significado de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::card:d4-416-bias-variance-table-03": {
    "text": "Usar mejores características, un modelo más capaz o entrenar por más tiempo.",
    "explanation": "Sesgo alto se completa con la celda de Remedio típico de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::card:d4-416-bias-variance-table-04": {
    "text": "Buen desempeño en entrenamiento pero mal desempeño en prueba.",
    "explanation": "Varianza alta se completa con la celda de Síntoma en entrenamiento/prueba de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::card:d4-416-bias-variance-table-05": {
    "text": "Sobreajuste (overfitting); el modelo memoriza los datos de entrenamiento.",
    "explanation": "Varianza alta se completa con la celda de Significado de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::card:d4-416-bias-variance-table-06": {
    "text": "Usar más datos, regularización, un modelo más simple o validación.",
    "explanation": "Varianza alta se completa con la celda de Remedio típico de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::card:d4-416-bias-variance-table-07": {
    "text": "Cambiar la complejidad desplaza los errores entre el subajuste y el sobreajuste.",
    "explanation": "Equilibrio entre sesgo y varianza se completa con la celda de Síntoma en entrenamiento/prueba de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::card:d4-416-bias-variance-table-08": {
    "text": "La optimización equilibra la simplicidad y la flexibilidad.",
    "explanation": "Equilibrio entre sesgo y varianza se completa con la celda de Significado de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-416-bias-variance-table::card:d4-416-bias-variance-table-09": {
    "text": "Ajustar la complejidad del modelo usando datos de validación.",
    "explanation": "Equilibrio entre sesgo y varianza se completa con la celda de Remedio típico de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-417-monitoring-tool-match": {
    "title": "Herramientas de monitoreo de IA responsable",
    "instructions": "Empareja cada tarjeta suelta con la etiqueta de origen visible.",
    "sourceNote": "Master Study Guide §4.1.7 Herramientas para detectar y monitorear el sesgo, la confiabilidad y la veracidad. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "slotLabel": "Etiqueta de origen",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain4-source-structure-games::d4-417-monitoring-tool-match::dest:clarify": {
    "label": "SageMaker Clarify"
  },
  "domain4-source-structure-games::d4-417-monitoring-tool-match::dest:monitor": {
    "label": "SageMaker Model Monitor"
  },
  "domain4-source-structure-games::d4-417-monitoring-tool-match::dest:a2i": {
    "label": "Amazon A2I"
  },
  "domain4-source-structure-games::d4-417-monitoring-tool-match::dest:subgroup": {
    "label": "Análisis por subgrupos"
  },
  "domain4-source-structure-games::d4-417-monitoring-tool-match::dest:label": {
    "label": "Análisis de calidad de etiquetas"
  },
  "domain4-source-structure-games::d4-417-monitoring-tool-match::dest:audits": {
    "label": "Auditorías humanas"
  },
  "domain4-source-structure-games::d4-417-monitoring-tool-match::dest:guardrails": {
    "label": "Bedrock Guardrails"
  },
  "domain4-source-structure-games::d4-417-monitoring-tool-match::card:d4-417-monitoring-tool-match-01": {
    "text": "Detecta el sesgo y explica la atribución de características",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.1.7 Herramientas para detectar y monitorear el sesgo, la confiabilidad y la veracidad."
  },
  "domain4-source-structure-games::d4-417-monitoring-tool-match::card:d4-417-monitoring-tool-match-02": {
    "text": "Vigila la calidad y la deriva (drift) del modelo desplegado a lo largo del tiempo",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.1.7 Herramientas para detectar y monitorear el sesgo, la confiabilidad y la veracidad."
  },
  "domain4-source-structure-games::d4-417-monitoring-tool-match::card:d4-417-monitoring-tool-match-03": {
    "text": "Dirige predicciones o resultados a flujos de trabajo de revisión humana",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.1.7 Herramientas para detectar y monitorear el sesgo, la confiabilidad y la veracidad."
  },
  "domain4-source-structure-games::d4-417-monitoring-tool-match::card:d4-417-monitoring-tool-match-04": {
    "text": "Compara el desempeño entre grupos",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.1.7 Herramientas para detectar y monitorear el sesgo, la confiabilidad y la veracidad."
  },
  "domain4-source-structure-games::d4-417-monitoring-tool-match::card:d4-417-monitoring-tool-match-05": {
    "text": "Verifica si las etiquetas de entrenamiento son confiables",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.1.7 Herramientas para detectar y monitorear el sesgo, la confiabilidad y la veracidad."
  },
  "domain4-source-structure-games::d4-417-monitoring-tool-match::card:d4-417-monitoring-tool-match-06": {
    "text": "Las personas inspeccionan el comportamiento del modelo, la documentación y los casos límite",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.1.7 Herramientas para detectar y monitorear el sesgo, la confiabilidad y la veracidad."
  },
  "domain4-source-structure-games::d4-417-monitoring-tool-match::card:d4-417-monitoring-tool-match-07": {
    "text": "Filtra y fundamenta las entradas y salidas de la IA generativa en el momento de la inferencia",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.1.7 Herramientas para detectar y monitorear el sesgo, la confiabilidad y la veracidad."
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix": {
    "title": "Matriz de transparencia frente a explicabilidad",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Master Study Guide §4.2.1 Transparencia frente a explicabilidad. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix::dest:meaning-transparency": {
    "label": "Significado / Transparencia"
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix::dest:meaning-explainability": {
    "label": "Significado / Explicabilidad"
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix::dest:decision-transparency": {
    "label": "Comprensión por decisión / Transparencia"
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix::dest:decision-explainability": {
    "label": "Comprensión por decisión / Explicabilidad"
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix::dest:documentation-transparency": {
    "label": "Documentación / Transparencia"
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix::dest:documentation-explainability": {
    "label": "Documentación / Explicabilidad"
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix::dest:fit-transparency": {
    "label": "Mejor ajuste / Transparencia"
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix::dest:fit-explainability": {
    "label": "Mejor ajuste / Explicabilidad"
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix::card:d4-421-transparency-explainability-matrix-01": {
    "text": "Visibilidad sobre el modelo, los datos, el proceso o la documentación.",
    "explanation": "Significado se completa con la celda de Transparencia de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix::card:d4-421-transparency-explainability-matrix-02": {
    "text": "Comprender por qué un modelo produjo un resultado específico.",
    "explanation": "Significado se completa con la celda de Explicabilidad de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix::card:d4-421-transparency-explainability-matrix-03": {
    "text": "Puede describir el sistema sin explicar una decisión.",
    "explanation": "Comprensión por decisión se completa con la celda de Transparencia de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix::card:d4-421-transparency-explainability-matrix-04": {
    "text": "Se centra en las razones de una decisión o predicción.",
    "explanation": "Comprensión por decisión se completa con la celda de Explicabilidad de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix::card:d4-421-transparency-explainability-matrix-05": {
    "text": "Model cards, fichas de datos y documentación de origen.",
    "explanation": "Documentación se completa con la celda de Transparencia de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix::card:d4-421-transparency-explainability-matrix-06": {
    "text": "Atribución de características, ejemplos o explicaciones.",
    "explanation": "Documentación se completa con la celda de Explicabilidad de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix::card:d4-421-transparency-explainability-matrix-07": {
    "text": "Gobernanza, adquisición y divulgación.",
    "explanation": "Mejor ajuste se completa con la celda de Transparencia de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-421-transparency-explainability-matrix::card:d4-421-transparency-explainability-matrix-08": {
    "text": "Confianza del usuario, depuración y decisiones reguladas.",
    "explanation": "Mejor ajuste se completa con la celda de Explicabilidad de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-422-explainability-tool-match": {
    "title": "Herramientas de transparencia y explicabilidad",
    "instructions": "Empareja cada tarjeta suelta con la etiqueta de origen visible.",
    "sourceNote": "Master Study Guide §4.2.2 Herramientas para identificar modelos transparentes y explicables. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "slotLabel": "Etiqueta de origen",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain4-source-structure-games::d4-422-explainability-tool-match::dest:cards": {
    "label": "SageMaker Model Cards"
  },
  "domain4-source-structure-games::d4-422-explainability-tool-match::dest:clarify": {
    "label": "SageMaker Clarify"
  },
  "domain4-source-structure-games::d4-422-explainability-tool-match::dest:evaluation": {
    "label": "Bedrock Model Evaluation"
  },
  "domain4-source-structure-games::d4-422-explainability-tool-match::dest:open": {
    "label": "Modelos de código abierto"
  },
  "domain4-source-structure-games::d4-422-explainability-tool-match::dest:docs": {
    "label": "Documentación de datos y licenciamiento"
  },
  "domain4-source-structure-games::d4-422-explainability-tool-match::dest:pdp": {
    "label": "Gráficos de dependencia parcial"
  },
  "domain4-source-structure-games::d4-422-explainability-tool-match::dest:importance": {
    "label": "Importancia de características"
  },
  "domain4-source-structure-games::d4-422-explainability-tool-match::card:d4-422-explainability-tool-match-01": {
    "text": "Documenta el propósito, el riesgo, la evaluación y el uso previsto del modelo",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.2.2 Herramientas para identificar modelos transparentes y explicables."
  },
  "domain4-source-structure-games::d4-422-explainability-tool-match::card:d4-422-explainability-tool-match-02": {
    "text": "Proporciona análisis de sesgo y atribución de características",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.2.2 Herramientas para identificar modelos transparentes y explicables."
  },
  "domain4-source-structure-games::d4-422-explainability-tool-match::card:d4-422-explainability-tool-match-03": {
    "text": "Compara la calidad del modelo mediante evaluación automática o humana",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.2.2 Herramientas para identificar modelos transparentes y explicables."
  },
  "domain4-source-structure-games::d4-422-explainability-tool-match::card:d4-422-explainability-tool-match-04": {
    "text": "Puede exponer más detalles de implementación que los modelos cerrados",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.2.2 Herramientas para identificar modelos transparentes y explicables."
  },
  "domain4-source-structure-games::d4-422-explainability-tool-match::card:d4-422-explainability-tool-match-05": {
    "text": "Muestra de dónde provienen los datos y cómo se pueden usar",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.2.2 Herramientas para identificar modelos transparentes y explicables."
  },
  "domain4-source-structure-games::d4-422-explainability-tool-match::card:d4-422-explainability-tool-match-06": {
    "text": "Muestra cómo cambiar una característica afecta el resultado predicho",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.2.2 Herramientas para identificar modelos transparentes y explicables."
  },
  "domain4-source-structure-games::d4-422-explainability-tool-match::card:d4-422-explainability-tool-match-07": {
    "text": "Identifica qué características influyeron más en el resultado del modelo",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.2.2 Herramientas para identificar modelos transparentes y explicables."
  },
  "domain4-source-structure-games::d4-423-tradeoff-table": {
    "title": "Equilibrios entre seguridad, transparencia y desempeño",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Master Study Guide §4.2.3 Equilibrio entre seguridad y transparencia, e interpretabilidad y desempeño. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain4-source-structure-games::d4-423-tradeoff-table::dest:interpret-tension": {
    "label": "Interpretabilidad frente a desempeño / Tensión"
  },
  "domain4-source-structure-games::d4-423-tradeoff-table::dest:interpret-resolution": {
    "label": "Interpretabilidad frente a desempeño / Resolución"
  },
  "domain4-source-structure-games::d4-423-tradeoff-table::dest:security-tension": {
    "label": "Transparencia frente a seguridad / Tensión"
  },
  "domain4-source-structure-games::d4-423-tradeoff-table::dest:security-resolution": {
    "label": "Transparencia frente a seguridad / Resolución"
  },
  "domain4-source-structure-games::d4-423-tradeoff-table::dest:usability-tension": {
    "label": "Nivel de detalle de la explicación frente a usabilidad / Tensión"
  },
  "domain4-source-structure-games::d4-423-tradeoff-table::dest:usability-resolution": {
    "label": "Nivel de detalle de la explicación frente a usabilidad / Resolución"
  },
  "domain4-source-structure-games::d4-423-tradeoff-table::card:d4-423-tradeoff-table-01": {
    "text": "Los modelos más complejos pueden tener mejor desempeño pero ser más difíciles de interpretar.",
    "explanation": "Interpretabilidad frente a desempeño se completa con la celda de Tensión de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-423-tradeoff-table::card:d4-423-tradeoff-table-02": {
    "text": "Adecuar la complejidad del modelo al riesgo y a las necesidades de explicación.",
    "explanation": "Interpretabilidad frente a desempeño se completa con la celda de Resolución de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-423-tradeoff-table::card:d4-423-tradeoff-table-03": {
    "text": "Demasiado detalle puede exponer prompts, controles o rutas de ataque.",
    "explanation": "Transparencia frente a seguridad se completa con la celda de Tensión de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-423-tradeoff-table::card:d4-423-tradeoff-table-04": {
    "text": "Divulgar información útil sin revelar secretos o defensas.",
    "explanation": "Transparencia frente a seguridad se completa con la celda de Resolución de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-423-tradeoff-table::card:d4-423-tradeoff-table-05": {
    "text": "Explicaciones técnicas extensas pueden abrumar a los usuarios.",
    "explanation": "Nivel de detalle de la explicación frente a usabilidad se completa con la celda de Tensión de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-423-tradeoff-table::card:d4-423-tradeoff-table-06": {
    "text": "Adaptar la profundidad de la explicación al público y al riesgo de la decisión.",
    "explanation": "Nivel de detalle de la explicación frente a usabilidad se completa con la celda de Resolución de la tabla de la guía."
  },
  "domain4-source-structure-games::d4-424-human-centered-design": {
    "title": "Principios de diseño centrado en el ser humano",
    "instructions": "Empareja cada tarjeta suelta con la etiqueta de origen visible.",
    "sourceNote": "Master Study Guide §4.2.4 Diseño centrado en el ser humano para la IA explicable. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "slotLabel": "Etiqueta de origen",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain4-source-structure-games::d4-424-human-centered-design::dest:disclose": {
    "label": "Divulgar el uso de IA"
  },
  "domain4-source-structure-games::d4-424-human-centered-design::dest:level": {
    "label": "Explicar al nivel del usuario"
  },
  "domain4-source-structure-games::d4-424-human-centered-design::dest:feedback": {
    "label": "Mecanismos de retroalimentación"
  },
  "domain4-source-structure-games::d4-424-human-centered-design::dest:recourse": {
    "label": "Recurso humano"
  },
  "domain4-source-structure-games::d4-424-human-centered-design::dest:limits": {
    "label": "Confianza y limitaciones"
  },
  "domain4-source-structure-games::d4-424-human-centered-design::dest:actual": {
    "label": "Diseñar para el usuario real"
  },
  "domain4-source-structure-games::d4-424-human-centered-design::card:d4-424-human-centered-design-01": {
    "text": "Informar a los usuarios cuando están interactuando con IA",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.2.4 Diseño centrado en el ser humano para la IA explicable."
  },
  "domain4-source-structure-games::d4-424-human-centered-design::card:d4-424-human-centered-design-02": {
    "text": "Usar un lenguaje que el usuario objetivo pueda comprender",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.2.4 Diseño centrado en el ser humano para la IA explicable."
  },
  "domain4-source-structure-games::d4-424-human-centered-design::card:d4-424-human-centered-design-03": {
    "text": "Permitir que los usuarios reporten resultados incorrectos o dañinos",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.2.4 Diseño centrado en el ser humano para la IA explicable."
  },
  "domain4-source-structure-games::d4-424-human-centered-design::card:d4-424-human-centered-design-04": {
    "text": "Proporcionar una forma de apelar, escalar u obtener ayuda humana",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.2.4 Diseño centrado en el ser humano para la IA explicable."
  },
  "domain4-source-structure-games::d4-424-human-centered-design::card:d4-424-human-centered-design-05": {
    "text": "Mostrar la incertidumbre y los límites del sistema",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.2.4 Diseño centrado en el ser humano para la IA explicable."
  },
  "domain4-source-structure-games::d4-424-human-centered-design::card:d4-424-human-centered-design-06": {
    "text": "Validar la interfaz con las necesidades y el contexto reales del usuario",
    "explanation": "Restaura la estructura de origen de Master Study Guide §4.2.4 Diseño centrado en el ser humano para la IA explicable."
  }
});
})();
