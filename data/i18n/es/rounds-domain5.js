(function(){
  "use strict";
  window.I18N_ES_ROUNDS = Object.assign({}, window.I18N_ES_ROUNDS || {}, {
  "domain5-source-structure-games::d5-511-security-service-table": {
    "title": "Servicio de seguridad y su propósito",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Master Study Guide §5.1.1 Servicios y funciones de AWS para proteger sistemas de IA. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain5-source-structure-games::d5-511-security-service-table::dest:iam-purpose": {
    "label": "AWS IAM / Propósito"
  },
  "domain5-source-structure-games::d5-511-security-service-table::dest:agent-id-purpose": {
    "label": "AgentCore Identity / Propósito"
  },
  "domain5-source-structure-games::d5-511-security-service-table::dest:kms-purpose": {
    "label": "AWS KMS / Propósito"
  },
  "domain5-source-structure-games::d5-511-security-service-table::dest:secrets-purpose": {
    "label": "AWS Secrets Manager / Propósito"
  },
  "domain5-source-structure-games::d5-511-security-service-table::dest:macie-purpose": {
    "label": "Amazon Macie / Propósito"
  },
  "domain5-source-structure-games::d5-511-security-service-table::dest:privatelink-purpose": {
    "label": "AWS PrivateLink / Propósito"
  },
  "domain5-source-structure-games::d5-511-security-service-table::dest:guardrails-purpose": {
    "label": "Amazon Bedrock Guardrails / Propósito"
  },
  "domain5-source-structure-games::d5-511-security-service-table::card:d5-511-security-service-table-01": {
    "text": "Controla quién puede acceder a los recursos de AWS y qué acciones puede realizar.",
    "explanation": "AWS IAM se completa con la celda de Propósito de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-511-security-service-table::card:d5-511-security-service-table-02": {
    "text": "Brinda a los agentes integración de identidad y autorización.",
    "explanation": "AgentCore Identity se completa con la celda de Propósito de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-511-security-service-table::card:d5-511-security-service-table-03": {
    "text": "Crea y administra claves de cifrado.",
    "explanation": "AWS KMS se completa con la celda de Propósito de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-511-security-service-table::card:d5-511-security-service-table-04": {
    "text": "Almacena, recupera y rota secretos.",
    "explanation": "AWS Secrets Manager se completa con la celda de Propósito de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-511-security-service-table::card:d5-511-security-service-table-05": {
    "text": "Descubre y clasifica datos sensibles, como PII, en S3.",
    "explanation": "Amazon Macie se completa con la celda de Propósito de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-511-security-service-table::card:d5-511-security-service-table-06": {
    "text": "Proporciona conectividad privada a servicios sin rutas de internet públicas.",
    "explanation": "AWS PrivateLink se completa con la celda de Propósito de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-511-security-service-table::card:d5-511-security-service-table-07": {
    "text": "Aplica controles de contenido, temas denegados, datos sensibles y fundamentación (grounding).",
    "explanation": "Amazon Bedrock Guardrails se completa con la celda de Propósito de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-511-aws-customer-responsibility": {
    "title": "¿Responsabilidad de AWS o del cliente?",
    "instructions": "Empareja cada tarjeta suelta con la etiqueta de origen visible.",
    "sourceNote": "Master Study Guide §5.1.1 Servicios y funciones de AWS para proteger sistemas de IA. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "slotLabel": "Etiqueta de origen",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain5-source-structure-games::d5-511-aws-customer-responsibility::dest:aws": {
    "label": "Responsabilidad de AWS"
  },
  "domain5-source-structure-games::d5-511-aws-customer-responsibility::dest:customer": {
    "label": "Responsabilidad del cliente"
  },
  "domain5-source-structure-games::d5-511-aws-customer-responsibility::card:d5-511-aws-customer-responsibility-01": {
    "text": "Seguridad de la infraestructura de la nube",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.1.1 Servicios y funciones de AWS para proteger sistemas de IA."
  },
  "domain5-source-structure-games::d5-511-aws-customer-responsibility::card:d5-511-aws-customer-responsibility-02": {
    "text": "Instalaciones físicas e infraestructura de servicios administrados",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.1.1 Servicios y funciones de AWS para proteger sistemas de IA."
  },
  "domain5-source-structure-games::d5-511-aws-customer-responsibility::card:d5-511-aws-customer-responsibility-03": {
    "text": "Políticas de IAM de privilegio mínimo",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.1.1 Servicios y funciones de AWS para proteger sistemas de IA."
  },
  "domain5-source-structure-games::d5-511-aws-customer-responsibility::card:d5-511-aws-customer-responsibility-04": {
    "text": "Proteger los prompts, las fuentes de datos y el código de la aplicación",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.1.1 Servicios y funciones de AWS para proteger sistemas de IA."
  },
  "domain5-source-structure-games::d5-511-aws-customer-responsibility::card:d5-511-aws-customer-responsibility-05": {
    "text": "Elegir la configuración de cifrado, registro (logging) y guardrails",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.1.1 Servicios y funciones de AWS para proteger sistemas de IA."
  },
  "domain5-source-structure-games::d5-512-lineage-catalog-citation": {
    "title": "¿Linaje, catálogo, citación o ficha de modelo?",
    "instructions": "Empareja cada tarjeta suelta con la etiqueta de origen visible.",
    "sourceNote": "Master Study Guide §5.1.2 Citación de fuentes y documentación del origen de los datos. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "slotLabel": "Etiqueta de origen",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain5-source-structure-games::d5-512-lineage-catalog-citation::dest:lineage": {
    "label": "Linaje de datos"
  },
  "domain5-source-structure-games::d5-512-lineage-catalog-citation::dest:catalog": {
    "label": "Catalogación de datos"
  },
  "domain5-source-structure-games::d5-512-lineage-catalog-citation::dest:citation": {
    "label": "Citación de fuentes"
  },
  "domain5-source-structure-games::d5-512-lineage-catalog-citation::dest:model-card": {
    "label": "SageMaker Model Cards"
  },
  "domain5-source-structure-games::d5-512-lineage-catalog-citation::dest:glue": {
    "label": "AWS Glue Data Catalog"
  },
  "domain5-source-structure-games::d5-512-lineage-catalog-citation::dest:kb": {
    "label": "Bedrock Knowledge Bases"
  },
  "domain5-source-structure-games::d5-512-lineage-catalog-citation::card:d5-512-lineage-catalog-citation-01": {
    "text": "Registra de dónde provienen los datos y cómo cambiaron",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.1.2 Citación de fuentes y documentación del origen de los datos."
  },
  "domain5-source-structure-games::d5-512-lineage-catalog-citation::card:d5-512-lineage-catalog-citation-02": {
    "text": "Organiza los conjuntos de datos con metadatos para su descubrimiento y gobernanza",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.1.2 Citación de fuentes y documentación del origen de los datos."
  },
  "domain5-source-structure-games::d5-512-lineage-catalog-citation::card:d5-512-lineage-catalog-citation-03": {
    "text": "Muestra qué fuente respalda una respuesta generada",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.1.2 Citación de fuentes y documentación del origen de los datos."
  },
  "domain5-source-structure-games::d5-512-lineage-catalog-citation::card:d5-512-lineage-catalog-citation-04": {
    "text": "Documenta el propósito, el rendimiento, el riesgo y el uso previsto del modelo",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.1.2 Citación de fuentes y documentación del origen de los datos."
  },
  "domain5-source-structure-games::d5-512-lineage-catalog-citation::card:d5-512-lineage-catalog-citation-05": {
    "text": "Catálogo de metadatos de AWS para activos de datos",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.1.2 Citación de fuentes y documentación del origen de los datos."
  },
  "domain5-source-structure-games::d5-512-lineage-catalog-citation::card:d5-512-lineage-catalog-citation-06": {
    "text": "Puede devolver citas de las fuentes de RAG recuperadas",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.1.2 Citación de fuentes y documentación del origen de los datos."
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table": {
    "title": "Tabla de prácticas de ingeniería de datos segura",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Master Study Guide §5.1.3 Prácticas recomendadas para la ingeniería de datos segura. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::dest:quality-purpose": {
    "label": "Calidad de los datos / Propósito"
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::dest:quality-aws": {
    "label": "Calidad de los datos / Implementación en AWS"
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::dest:privacy-purpose": {
    "label": "Técnicas de mejora de la privacidad / Propósito"
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::dest:privacy-aws": {
    "label": "Técnicas de mejora de la privacidad / Implementación en AWS"
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::dest:access-purpose": {
    "label": "Control de acceso / Propósito"
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::dest:access-aws": {
    "label": "Control de acceso / Implementación en AWS"
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::dest:integrity-purpose": {
    "label": "Integridad / Propósito"
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::dest:integrity-aws": {
    "label": "Integridad / Implementación en AWS"
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::dest:encryption-purpose": {
    "label": "Cifrado / Propósito"
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::dest:encryption-aws": {
    "label": "Cifrado / Implementación en AWS"
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::dest:retention-purpose": {
    "label": "Retención y eliminación / Propósito"
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::dest:retention-aws": {
    "label": "Retención y eliminación / Implementación en AWS"
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::card:d5-513-secure-data-practice-table-01": {
    "text": "Mantener los datos precisos, completos y aptos para el uso del modelo.",
    "explanation": "Calidad de los datos se completa con la celda de Propósito de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::card:d5-513-secure-data-practice-table-02": {
    "text": "Trabajos de validación, verificaciones de calidad de datos y flujos de trabajo (pipelines) gobernados.",
    "explanation": "Calidad de los datos se completa con la celda de Implementación en AWS de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::card:d5-513-secure-data-practice-table-03": {
    "text": "Reducir la exposición de datos personales o sensibles.",
    "explanation": "Técnicas de mejora de la privacidad se completa con la celda de Propósito de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::card:d5-513-secure-data-practice-table-04": {
    "text": "Enmascaramiento, minimización, tokenización o desidentificación.",
    "explanation": "Técnicas de mejora de la privacidad se completa con la celda de Implementación en AWS de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::card:d5-513-secure-data-practice-table-05": {
    "text": "Limitar quién puede leer, escribir o modificar datos.",
    "explanation": "Control de acceso se completa con la celda de Propósito de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::card:d5-513-secure-data-practice-table-06": {
    "text": "IAM, políticas de S3 y permisos de Lake Formation.",
    "explanation": "Control de acceso se completa con la celda de Implementación en AWS de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::card:d5-513-secure-data-practice-table-07": {
    "text": "Proteger los datos de cambios no autorizados o accidentales.",
    "explanation": "Integridad se completa con la celda de Propósito de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::card:d5-513-secure-data-practice-table-08": {
    "text": "Versionado de S3, verificaciones y rutas de escritura controladas.",
    "explanation": "Integridad se completa con la celda de Implementación en AWS de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::card:d5-513-secure-data-practice-table-09": {
    "text": "Proteger los datos en reposo y en tránsito.",
    "explanation": "Cifrado se completa con la celda de Propósito de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::card:d5-513-secure-data-practice-table-10": {
    "text": "KMS y TLS.",
    "explanation": "Cifrado se completa con la celda de Implementación en AWS de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::card:d5-513-secure-data-practice-table-11": {
    "text": "Conservar los datos solo durante el tiempo necesario.",
    "explanation": "Retención y eliminación se completa con la celda de Propósito de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-513-secure-data-practice-table::card:d5-513-secure-data-practice-table-12": {
    "text": "Políticas de ciclo de vida de S3 y procesos de eliminación.",
    "explanation": "Retención y eliminación se completa con la celda de Implementación en AWS de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-514-security-consideration-table": {
    "title": "Tabla de consideraciones de seguridad y privacidad",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Master Study Guide §5.1.4 Consideraciones de seguridad y privacidad para sistemas de IA. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::dest:injection-angle": {
    "label": "Inyección de prompts / El enfoque específico de la IA"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::dest:injection-control": {
    "label": "Inyección de prompts / Control"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::dest:leakage-angle": {
    "label": "Prevención de fuga de datos / El enfoque específico de la IA"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::dest:leakage-control": {
    "label": "Prevención de fuga de datos / Control"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::dest:output-angle": {
    "label": "Filtrado y validación de salidas / El enfoque específico de la IA"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::dest:output-control": {
    "label": "Filtrado y validación de salidas / Control"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::dest:audit-angle": {
    "label": "Registro de auditoría (audit trail) de las interacciones con IA / El enfoque específico de la IA"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::dest:audit-control": {
    "label": "Registro de auditoría (audit trail) de las interacciones con IA / Control"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::dest:toxicity-angle": {
    "label": "Toxicidad / El enfoque específico de la IA"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::dest:toxicity-control": {
    "label": "Toxicidad / Control"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::dest:appsec-angle": {
    "label": "Seguridad de aplicaciones / El enfoque específico de la IA"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::dest:appsec-control": {
    "label": "Seguridad de aplicaciones / Control"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::dest:vuln-angle": {
    "label": "Detección de amenazas y gestión de vulnerabilidades / El enfoque específico de la IA"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::dest:vuln-control": {
    "label": "Detección de amenazas y gestión de vulnerabilidades / Control"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::dest:network-angle": {
    "label": "Protección de la infraestructura / El enfoque específico de la IA"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::dest:network-control": {
    "label": "Protección de la infraestructura / Control"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::dest:encryption-angle": {
    "label": "Cifrado en reposo y en tránsito / El enfoque específico de la IA"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::dest:encryption-control": {
    "label": "Cifrado en reposo y en tránsito / Control"
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::card:d5-514-security-consideration-table-01": {
    "text": "Instrucciones ocultas en la entrada del usuario o en el contenido recuperado anulan las instrucciones previstas.",
    "explanation": "Inyección de prompts se completa con la celda de El enfoque específico de la IA de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::card:d5-514-security-consideration-table-02": {
    "text": "Delimitar las instrucciones de los datos, validar la entrada, aplicar Guardrails, restringir el acceso de los agentes a las herramientas y nunca basarse en el texto del prompt para la autorización.",
    "explanation": "Inyección de prompts se completa con la celda de Control de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::card:d5-514-security-consideration-table-03": {
    "text": "Datos sensibles ingresan en un prompt, salen en una respuesta generada (completion) o aparecen en los registros (logs).",
    "explanation": "Prevención de fuga de datos se completa con la celda de El enfoque específico de la IA de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::card:d5-514-security-consideration-table-04": {
    "text": "Detección y redacción de PII con Guardrails o Amazon Comprehend, filtrado de salidas, configuración cuidadosa de registros y recuperación de privilegio mínimo.",
    "explanation": "Prevención de fuga de datos se completa con la celda de Control de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::card:d5-514-security-consideration-table-05": {
    "text": "El modelo produce contenido que es dañino, contrario a la política o estructuralmente inválido.",
    "explanation": "Filtrado y validación de salidas se completa con la celda de El enfoque específico de la IA de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::card:d5-514-security-consideration-table-06": {
    "text": "Guardrails en la ruta de salida, validación de esquema de la salida estructurada y verificaciones de fundamentación (grounding).",
    "explanation": "Filtrado y validación de salidas se completa con la celda de Control de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::card:d5-514-security-consideration-table-07": {
    "text": "Debes poder reconstruir quién preguntó qué, qué modelo respondió y qué dijo.",
    "explanation": "Registro de auditoría (audit trail) de las interacciones con IA se completa con la celda de El enfoque específico de la IA de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::card:d5-514-security-consideration-table-08": {
    "text": "AWS CloudTrail para la actividad de la API, Amazon CloudWatch para registros y métricas, el registro de invocación de modelos de Bedrock y AgentCore Observability para las trazas de los agentes.",
    "explanation": "Registro de auditoría (audit trail) de las interacciones con IA se completa con la celda de Control de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::card:d5-514-security-consideration-table-09": {
    "text": "Contenido dañino, abusivo u ofensivo en la entrada o la salida.",
    "explanation": "Toxicidad se completa con la celda de El enfoque específico de la IA de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::card:d5-514-security-consideration-table-10": {
    "text": "Filtros de contenido de Guardrails, detección de toxicidad de Amazon Comprehend y revisión humana.",
    "explanation": "Toxicidad se completa con la celda de Control de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::card:d5-514-security-consideration-table-11": {
    "text": "La aplicación que rodea al modelo sigue siendo software convencional con vulnerabilidades convencionales.",
    "explanation": "Seguridad de aplicaciones se completa con la celda de El enfoque específico de la IA de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::card:d5-514-security-consideration-table-12": {
    "text": "Prácticas estándar de desarrollo seguro; Amazon Inspector para el análisis de vulnerabilidades.",
    "explanation": "Seguridad de aplicaciones se completa con la celda de Control de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::card:d5-514-security-consideration-table-13": {
    "text": "Detectar compromisos y componentes sin parchear.",
    "explanation": "Detección de amenazas y gestión de vulnerabilidades se completa con la celda de El enfoque específico de la IA de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::card:d5-514-security-consideration-table-14": {
    "text": "Amazon Inspector para vulnerabilidades. Ten en cuenta que Amazon GuardDuty está fuera del alcance de este examen.",
    "explanation": "Detección de amenazas y gestión de vulnerabilidades se completa con la celda de Control de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::card:d5-514-security-consideration-table-15": {
    "text": "Aislamiento de red de la carga de trabajo.",
    "explanation": "Protección de la infraestructura se completa con la celda de El enfoque específico de la IA de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::card:d5-514-security-consideration-table-16": {
    "text": "Amazon VPC, grupos de seguridad y AWS PrivateLink.",
    "explanation": "Protección de la infraestructura se completa con la celda de Control de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::card:d5-514-security-consideration-table-17": {
    "text": "Proteger los datos almacenados y en movimiento.",
    "explanation": "Cifrado en reposo y en tránsito se completa con la celda de El enfoque específico de la IA de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-514-security-consideration-table::card:d5-514-security-consideration-table-18": {
    "text": "AWS KMS y TLS.",
    "explanation": "Cifrado en reposo y en tránsito se completa con la celda de Control de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-515-hallucination-defense-order": {
    "title": "Orden de defensa contra alucinaciones",
    "instructions": "Restaura la secuencia de origen en orden.",
    "sourceNote": "Master Study Guide §5.1.5 Técnicas de detección de alucinaciones y fundamentación (grounding). Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain5-source-structure-games::d5-515-hallucination-defense-order::dest:step-1": {
    "label": "Paso 1",
    "sub": "Coloca aquí el paso de origen correcto."
  },
  "domain5-source-structure-games::d5-515-hallucination-defense-order::dest:step-2": {
    "label": "Paso 2",
    "sub": "Coloca aquí el paso de origen correcto."
  },
  "domain5-source-structure-games::d5-515-hallucination-defense-order::dest:step-3": {
    "label": "Paso 3",
    "sub": "Coloca aquí el paso de origen correcto."
  },
  "domain5-source-structure-games::d5-515-hallucination-defense-order::dest:step-4": {
    "label": "Paso 4",
    "sub": "Coloca aquí el paso de origen correcto."
  },
  "domain5-source-structure-games::d5-515-hallucination-defense-order::dest:step-5": {
    "label": "Paso 5",
    "sub": "Coloca aquí el paso de origen correcto."
  },
  "domain5-source-structure-games::d5-515-hallucination-defense-order::card:d5-515-hallucination-defense-order-01": {
    "text": "Fundamentar",
    "explanation": "Fundamentar pertenece a la posición 1 de la secuencia de la guía."
  },
  "domain5-source-structure-games::d5-515-hallucination-defense-order::card:d5-515-hallucination-defense-order-02": {
    "text": "Verificar",
    "explanation": "Verificar pertenece a la posición 2 de la secuencia de la guía."
  },
  "domain5-source-structure-games::d5-515-hallucination-defense-order::card:d5-515-hallucination-defense-order-03": {
    "text": "Validar",
    "explanation": "Validar pertenece a la posición 3 de la secuencia de la guía."
  },
  "domain5-source-structure-games::d5-515-hallucination-defense-order::card:d5-515-hallucination-defense-order-04": {
    "text": "Puntuar y derivar",
    "explanation": "Puntuar y derivar pertenece a la posición 4 de la secuencia de la guía."
  },
  "domain5-source-structure-games::d5-515-hallucination-defense-order::card:d5-515-hallucination-defense-order-05": {
    "text": "Registrar y aprender",
    "explanation": "Registrar y aprender pertenece a la posición 5 de la secuencia de la guía."
  },
  "domain5-source-structure-games::d5-515-service-to-defense-layer": {
    "title": "Servicio de AWS y capa de defensa",
    "instructions": "Empareja cada tarjeta suelta con la etiqueta de origen visible.",
    "sourceNote": "Master Study Guide §5.1.5 Técnicas de detección de alucinaciones y fundamentación (grounding). Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "slotLabel": "Etiqueta de origen",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain5-source-structure-games::d5-515-service-to-defense-layer::dest:kb": {
    "label": "Bedrock Knowledge Bases"
  },
  "domain5-source-structure-games::d5-515-service-to-defense-layer::dest:grounding": {
    "label": "Verificaciones de fundamentación contextual (grounding) de Guardrails"
  },
  "domain5-source-structure-games::d5-515-service-to-defense-layer::dest:validation": {
    "label": "Validación de la salida de la aplicación"
  },
  "domain5-source-structure-games::d5-515-service-to-defense-layer::dest:confidence": {
    "label": "Puntuación de confianza"
  },
  "domain5-source-structure-games::d5-515-service-to-defense-layer::dest:a2i": {
    "label": "Amazon A2I"
  },
  "domain5-source-structure-games::d5-515-service-to-defense-layer::dest:logging": {
    "label": "Registro (logging)"
  },
  "domain5-source-structure-games::d5-515-service-to-defense-layer::dest:abstain": {
    "label": "Instrucciones de abstención"
  },
  "domain5-source-structure-games::d5-515-service-to-defense-layer::card:d5-515-service-to-defense-layer-01": {
    "text": "Recuperar los pasajes de origen para la respuesta",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.1.5 Técnicas de detección de alucinaciones y fundamentación (grounding)."
  },
  "domain5-source-structure-games::d5-515-service-to-defense-layer::card:d5-515-service-to-defense-layer-02": {
    "text": "Verificar si las afirmaciones de la respuesta están respaldadas por el contexto de origen",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.1.5 Técnicas de detección de alucinaciones y fundamentación (grounding)."
  },
  "domain5-source-structure-games::d5-515-service-to-defense-layer::card:d5-515-service-to-defense-layer-03": {
    "text": "Rechazar JSON con formato incorrecto o salidas de la aplicación no compatibles",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.1.5 Técnicas de detección de alucinaciones y fundamentación (grounding)."
  },
  "domain5-source-structure-games::d5-515-service-to-defense-layer::card:d5-515-service-to-defense-layer-04": {
    "text": "Estimar si la respuesta debe considerarse confiable o escalarse",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.1.5 Técnicas de detección de alucinaciones y fundamentación (grounding)."
  },
  "domain5-source-structure-games::d5-515-service-to-defense-layer::card:d5-515-service-to-defense-layer-05": {
    "text": "Derivar los casos inciertos o de alto riesgo a personas",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.1.5 Técnicas de detección de alucinaciones y fundamentación (grounding)."
  },
  "domain5-source-structure-games::d5-515-service-to-defense-layer::card:d5-515-service-to-defense-layer-06": {
    "text": "Capturar los prompts, las salidas y los resultados para su revisión",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.1.5 Técnicas de detección de alucinaciones y fundamentación (grounding)."
  },
  "domain5-source-structure-games::d5-515-service-to-defense-layer::card:d5-515-service-to-defense-layer-07": {
    "text": "Indicarle al modelo que declare que no sabe la respuesta cuando falte evidencia",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.1.5 Técnicas de detección de alucinaciones y fundamentación (grounding)."
  },
  "domain5-source-structure-games::d5-521-governance-service-match": {
    "title": "Servicios de gobernanza y cumplimiento",
    "instructions": "Empareja cada tarjeta suelta con la etiqueta de origen visible.",
    "sourceNote": "Master Study Guide §5.2.1 Servicios de AWS para la gobernanza y el cumplimiento normativo. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "slotLabel": "Etiqueta de origen",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain5-source-structure-games::d5-521-governance-service-match::dest:cloudtrail": {
    "label": "AWS CloudTrail"
  },
  "domain5-source-structure-games::d5-521-governance-service-match::dest:config": {
    "label": "AWS Config"
  },
  "domain5-source-structure-games::d5-521-governance-service-match::dest:audit": {
    "label": "AWS Audit Manager"
  },
  "domain5-source-structure-games::d5-521-governance-service-match::dest:artifact": {
    "label": "AWS Artifact"
  },
  "domain5-source-structure-games::d5-521-governance-service-match::dest:inspector": {
    "label": "Amazon Inspector"
  },
  "domain5-source-structure-games::d5-521-governance-service-match::dest:trusted": {
    "label": "AWS Trusted Advisor"
  },
  "domain5-source-structure-games::d5-521-governance-service-match::dest:cloudwatch": {
    "label": "Amazon CloudWatch"
  },
  "domain5-source-structure-games::d5-521-governance-service-match::card:d5-521-governance-service-match-01": {
    "text": "Registra las acciones de la API y quién hizo qué",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.2.1 Servicios de AWS para la gobernanza y el cumplimiento normativo."
  },
  "domain5-source-structure-games::d5-521-governance-service-match::card:d5-521-governance-service-match-02": {
    "text": "Registra y evalúa el estado de configuración de los recursos",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.2.1 Servicios de AWS para la gobernanza y el cumplimiento normativo."
  },
  "domain5-source-structure-games::d5-521-governance-service-match::card:d5-521-governance-service-match-03": {
    "text": "Recopila evidencia para auditorías",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.2.1 Servicios de AWS para la gobernanza y el cumplimiento normativo."
  },
  "domain5-source-structure-games::d5-521-governance-service-match::card:d5-521-governance-service-match-04": {
    "text": "Proporciona informes y acuerdos de cumplimiento de AWS",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.2.1 Servicios de AWS para la gobernanza y el cumplimiento normativo."
  },
  "domain5-source-structure-games::d5-521-governance-service-match::card:d5-521-governance-service-match-05": {
    "text": "Detecta vulnerabilidades y exposición del software",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.2.1 Servicios de AWS para la gobernanza y el cumplimiento normativo."
  },
  "domain5-source-structure-games::d5-521-governance-service-match::card:d5-521-governance-service-match-06": {
    "text": "Ofrece recomendaciones de buenas prácticas",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.2.1 Servicios de AWS para la gobernanza y el cumplimiento normativo."
  },
  "domain5-source-structure-games::d5-521-governance-service-match::card:d5-521-governance-service-match-07": {
    "text": "Proporciona métricas, registros, alarmas y visibilidad operativa",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.2.1 Servicios de AWS para la gobernanza y el cumplimiento normativo."
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table": {
    "title": "Tabla de estrategias de gobernanza de datos",
    "instructions": "Completa la tabla de la guía colocando cada celda suelta en la fila y columna correctas.",
    "sourceNote": "Master Study Guide §5.2.2 Estrategias de gobernanza de datos. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::dest:lifecycle-meaning": {
    "label": "Ciclo de vida de los datos / Significado"
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::dest:lifecycle-aws": {
    "label": "Ciclo de vida de los datos / Implementación en AWS"
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::dest:logging-meaning": {
    "label": "Registro (logging) / Significado"
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::dest:logging-aws": {
    "label": "Registro (logging) / Implementación en AWS"
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::dest:residency-meaning": {
    "label": "Residencia de datos / Significado"
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::dest:residency-aws": {
    "label": "Residencia de datos / Implementación en AWS"
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::dest:monitoring-meaning": {
    "label": "Monitoreo y observación / Significado"
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::dest:monitoring-aws": {
    "label": "Monitoreo y observación / Implementación en AWS"
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::dest:retention-meaning": {
    "label": "Retención / Significado"
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::dest:retention-aws": {
    "label": "Retención / Implementación en AWS"
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::dest:classification-meaning": {
    "label": "Clasificación y titularidad / Significado"
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::dest:classification-aws": {
    "label": "Clasificación y titularidad / Implementación en AWS"
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::card:d5-522-data-governance-strategy-table-01": {
    "text": "Gestionar los datos desde su creación hasta el archivado y la eliminación.",
    "explanation": "Ciclo de vida de los datos se completa con la celda de Significado de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::card:d5-522-data-governance-strategy-table-02": {
    "text": "Políticas de ciclo de vida de S3 y S3 Glacier.",
    "explanation": "Ciclo de vida de los datos se completa con la celda de Implementación en AWS de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::card:d5-522-data-governance-strategy-table-03": {
    "text": "Registrar eventos y solicitudes para la trazabilidad.",
    "explanation": "Registro (logging) se completa con la celda de Significado de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::card:d5-522-data-governance-strategy-table-04": {
    "text": "CloudTrail y el registro de invocación de Bedrock.",
    "explanation": "Registro (logging) se completa con la celda de Implementación en AWS de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::card:d5-522-data-governance-strategy-table-05": {
    "text": "Controlar dónde se almacenan y procesan los datos.",
    "explanation": "Residencia de datos se completa con la celda de Significado de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::card:d5-522-data-governance-strategy-table-06": {
    "text": "Selección de región y verificaciones de disponibilidad del servicio.",
    "explanation": "Residencia de datos se completa con la celda de Implementación en AWS de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::card:d5-522-data-governance-strategy-table-07": {
    "text": "Observar el comportamiento, la calidad y las operaciones a lo largo del tiempo.",
    "explanation": "Monitoreo y observación se completa con la celda de Significado de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::card:d5-522-data-governance-strategy-table-08": {
    "text": "CloudWatch, Model Monitor y AgentCore Observability.",
    "explanation": "Monitoreo y observación se completa con la celda de Implementación en AWS de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::card:d5-522-data-governance-strategy-table-09": {
    "text": "Definir cuánto tiempo se conservan los datos.",
    "explanation": "Retención se completa con la celda de Significado de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::card:d5-522-data-governance-strategy-table-10": {
    "text": "Políticas de retención y vencimiento del ciclo de vida.",
    "explanation": "Retención se completa con la celda de Implementación en AWS de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::card:d5-522-data-governance-strategy-table-11": {
    "text": "Etiquetar la sensibilidad y asignar responsabilidad.",
    "explanation": "Clasificación y titularidad se completa con la celda de Significado de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-522-data-governance-strategy-table::card:d5-522-data-governance-strategy-table-12": {
    "text": "Glue Data Catalog, Macie y Lake Formation.",
    "explanation": "Clasificación y titularidad se completa con la celda de Implementación en AWS de la tabla de la guía."
  },
  "domain5-source-structure-games::d5-523-governance-elements": {
    "title": "Elemento de gobernanza y buena práctica",
    "instructions": "Empareja cada tarjeta suelta con la etiqueta de origen visible.",
    "sourceNote": "Master Study Guide §5.2.3 Procesos para seguir los protocolos de gobernanza. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "slotLabel": "Etiqueta de origen",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain5-source-structure-games::d5-523-governance-elements::dest:policies": {
    "label": "Políticas"
  },
  "domain5-source-structure-games::d5-523-governance-elements::dest:cadence": {
    "label": "Frecuencia de revisión"
  },
  "domain5-source-structure-games::d5-523-governance-elements::dest:strategies": {
    "label": "Estrategias de revisión"
  },
  "domain5-source-structure-games::d5-523-governance-elements::dest:frameworks": {
    "label": "Marcos de trabajo (frameworks)"
  },
  "domain5-source-structure-games::d5-523-governance-elements::dest:transparency": {
    "label": "Estándares de transparencia"
  },
  "domain5-source-structure-games::d5-523-governance-elements::dest:training": {
    "label": "Capacitación del equipo"
  },
  "domain5-source-structure-games::d5-523-governance-elements::card:d5-523-governance-elements-01": {
    "text": "Definir el uso permitido de la IA, el manejo de datos y los controles requeridos",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.2.3 Procesos para seguir los protocolos de gobernanza."
  },
  "domain5-source-structure-games::d5-523-governance-elements::card:d5-523-governance-elements-02": {
    "text": "Establecer una revisión periódica en lugar de una aprobación única",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.2.3 Procesos para seguir los protocolos de gobernanza."
  },
  "domain5-source-structure-games::d5-523-governance-elements::card:d5-523-governance-elements-03": {
    "text": "Utilizar verificaciones, auditorías y monitoreo basados en riesgo",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.2.3 Procesos para seguir los protocolos de gobernanza."
  },
  "domain5-source-structure-games::d5-523-governance-elements::card:d5-523-governance-elements-04": {
    "text": "Vincular los controles con estructuras de gobernanza o cumplimiento reconocidas",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.2.3 Procesos para seguir los protocolos de gobernanza."
  },
  "domain5-source-structure-games::d5-523-governance-elements::card:d5-523-governance-elements-05": {
    "text": "Documentar la divulgación, las explicaciones y la información del modelo",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.2.3 Procesos para seguir los protocolos de gobernanza."
  },
  "domain5-source-structure-games::d5-523-governance-elements::card:d5-523-governance-elements-06": {
    "text": "Enseñar a los equipos cómo cumplir con los requisitos de gobernanza de la IA",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.2.3 Procesos para seguir los protocolos de gobernanza."
  },
  "domain5-source-structure-games::d5-523-security-scope-order": {
    "title": "Orden de los alcances de seguridad de la IA generativa",
    "instructions": "Restaura la secuencia de origen en orden.",
    "sourceNote": "Master Study Guide §5.2.3 Procesos para seguir los protocolos de gobernanza. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain5-source-structure-games::d5-523-security-scope-order::dest:step-1": {
    "label": "Paso 1",
    "sub": "Coloca aquí el paso de origen correcto."
  },
  "domain5-source-structure-games::d5-523-security-scope-order::dest:step-2": {
    "label": "Paso 2",
    "sub": "Coloca aquí el paso de origen correcto."
  },
  "domain5-source-structure-games::d5-523-security-scope-order::dest:step-3": {
    "label": "Paso 3",
    "sub": "Coloca aquí el paso de origen correcto."
  },
  "domain5-source-structure-games::d5-523-security-scope-order::dest:step-4": {
    "label": "Paso 4",
    "sub": "Coloca aquí el paso de origen correcto."
  },
  "domain5-source-structure-games::d5-523-security-scope-order::dest:step-5": {
    "label": "Paso 5",
    "sub": "Coloca aquí el paso de origen correcto."
  },
  "domain5-source-structure-games::d5-523-security-scope-order::card:d5-523-security-scope-order-01": {
    "text": "Alcance 1: aplicación de consumo",
    "explanation": "Alcance 1: aplicación de consumo pertenece a la posición 1 de la secuencia de la guía."
  },
  "domain5-source-structure-games::d5-523-security-scope-order::card:d5-523-security-scope-order-02": {
    "text": "Alcance 2: aplicación empresarial",
    "explanation": "Alcance 2: aplicación empresarial pertenece a la posición 2 de la secuencia de la guía."
  },
  "domain5-source-structure-games::d5-523-security-scope-order::card:d5-523-security-scope-order-03": {
    "text": "Alcance 3: API de modelo preentrenado",
    "explanation": "Alcance 3: API de modelo preentrenado pertenece a la posición 3 de la secuencia de la guía."
  },
  "domain5-source-structure-games::d5-523-security-scope-order::card:d5-523-security-scope-order-04": {
    "text": "Alcance 4: modelo ajustado (fine-tuned)",
    "explanation": "Alcance 4: modelo ajustado (fine-tuned) pertenece a la posición 4 de la secuencia de la guía."
  },
  "domain5-source-structure-games::d5-523-security-scope-order::card:d5-523-security-scope-order-05": {
    "text": "Alcance 5: modelo entrenado desde cero",
    "explanation": "Alcance 5: modelo entrenado desde cero pertenece a la posición 5 de la secuencia de la guía."
  },
  "domain5-source-structure-games::d5-523-scenario-to-scope": {
    "title": "Escenario y alcance de seguridad",
    "instructions": "Empareja cada tarjeta suelta con la etiqueta de origen visible.",
    "sourceNote": "Master Study Guide §5.2.3 Procesos para seguir los protocolos de gobernanza. Convertido a partir de la tabla, comparación, secuencia o conjunto de enunciados con nombre de la guía.",
    "slotLabel": "Etiqueta de origen",
    "checkLabel": "Verificar estructura de origen",
    "completionCalloutTitle": "Estructura de origen restaurada",
    "completionCalloutText": "Revisa la tabla, secuencia o mapeo de servicios completado antes de continuar."
  },
  "domain5-source-structure-games::d5-523-scenario-to-scope::dest:s1": {
    "label": "Alcance 1: aplicación de consumo"
  },
  "domain5-source-structure-games::d5-523-scenario-to-scope::dest:s2": {
    "label": "Alcance 2: aplicación empresarial"
  },
  "domain5-source-structure-games::d5-523-scenario-to-scope::dest:s3": {
    "label": "Alcance 3: API de modelo preentrenado"
  },
  "domain5-source-structure-games::d5-523-scenario-to-scope::dest:s4": {
    "label": "Alcance 4: modelo ajustado (fine-tuned)"
  },
  "domain5-source-structure-games::d5-523-scenario-to-scope::dest:s5": {
    "label": "Alcance 5: modelo entrenado desde cero"
  },
  "domain5-source-structure-games::d5-523-scenario-to-scope::card:d5-523-scenario-to-scope-01": {
    "text": "Un empleado usa una aplicación pública de chat de IA para consumidores",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.2.3 Procesos para seguir los protocolos de gobernanza."
  },
  "domain5-source-structure-games::d5-523-scenario-to-scope::card:d5-523-scenario-to-scope-02": {
    "text": "Una empresa implementa una aplicación de IA empresarial para sus empleados",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.2.3 Procesos para seguir los protocolos de gobernanza."
  },
  "domain5-source-structure-games::d5-523-scenario-to-scope::card:d5-523-scenario-to-scope-03": {
    "text": "Una aplicación llama a un FM preentrenado alojado a través de una API",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.2.3 Procesos para seguir los protocolos de gobernanza."
  },
  "domain5-source-structure-games::d5-523-scenario-to-scope::card:d5-523-scenario-to-scope-04": {
    "text": "Una organización ajusta (fine-tunes) un modelo con sus propios datos",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.2.3 Procesos para seguir los protocolos de gobernanza."
  },
  "domain5-source-structure-games::d5-523-scenario-to-scope::card:d5-523-scenario-to-scope-05": {
    "text": "Una organización entrena su propio modelo desde cero",
    "explanation": "Restaura la estructura de origen de Master Study Guide §5.2.3 Procesos para seguir los protocolos de gobernanza."
  }
});
})();
