---
name: trackflow-feature-intake
description: Evalúa solicitudes de nuevas funcionalidades de TrackFlow y determina si están suficientemente definidas para planificarse antes de autorizar su implementación.
---

# TrackFlow Feature Intake

## Objetivo y límites

Convierte una solicitud de funcionalidad en una evaluación estructurada de preparación para desarrollo. Su único objetivo es analizar y recomendar si la solicitud está lista para planificarse o necesita aclaraciones.

Esta skill no implementa código, no crea ni modifica archivos de producto, no aprueba la implementación y no sustituye las autorizaciones de `AGENTS.md`. Una recomendación de “lista para planificarse” no es autorización para programar.

## Cuándo solicitarla

Solicita esta skill cuando una persona quiera definir, revisar, priorizar técnicamente o preparar para planificación una nueva funcionalidad de TrackFlow antes de autorizar su implementación. No afirmes que Copilot u otra herramienta la invoca automáticamente; debe solicitarse o seleccionarse explícitamente.

## Entradas

Recopila, si están disponibles:

- **Descripción de la solicitud:** qué se propone y qué resultado espera la persona solicitante.
- **Problema empresarial:** necesidad que se intenta resolver y su efecto actual.
- **Usuario o área involucrada:** por ejemplo, cliente, consumidor, Experiencia del Cliente, Última Milla u otra área; indica “desconocido” si no consta.
- **Restricciones y criterios proporcionados:** límites de alcance, seguridad, privacidad, cumplimiento, plazos y cómo se juzgará el resultado.
- **Referencias de contexto:** referencias concretas a `BRIEFING.md`, `company-choice.md` y, cuando corresponda, al Memory Bank y a README o componentes existentes.

No completes entradas ausentes con suposiciones. Señala la información faltante y formula preguntas concretas. Si no se conoce el problema empresarial, el usuario afectado o el resultado esperado y esa ausencia impide acotar la solicitud, recomienda “Necesita aclaraciones”; no declares que está lista para planificarse.

## Procedimiento

1. **Identificar la solicitud.** Resume el cambio pedido sin ampliarlo; asigna un nombre breve si no se proporcionó uno. Distingue la funcionalidad solicitada de la solución técnica que alguien haya sugerido.
2. **Contrastar evidencia empresarial.** Consulta `BRIEFING.md` como fuente principal de hechos y `company-choice.md` como propuesta de proyecto. Usa `memory-bank/projectbrief.md`, `memory-bank/techcontext.md` y `memory-bank/progress.md` para el alcance y estado sintetizados, sin tratarlos como sustitutos del briefing. Cita archivo y sección o fragmento verificable.
3. **Separar conocimiento.** Clasifica cada punto pertinente como:
   - **Confirmado:** respaldado directamente por una fuente o por la solicitud.
   - **Inferencia:** interpretación plausible, no decisión; explica en qué evidencia se basa.
   - **Desconocido:** no documentado o no proporcionado.
   No presentes inferencias o desconocidos como requisitos.
4. **Delimitar alcance.** Describe el resultado incluido y las exclusiones. Separa lo solicitado de futuras ampliaciones. Si la solicitud no permite definir límites, formula preguntas y recomienda aclarar.
5. **Revisar seguridad, datos y autoridad humana.** Identifica datos personales, información sensible, permisos de acceso, uso o exposición de datos, acciones externas y posibles consecuencias operativas o económicas. Para acciones sensibles, requiere controles y aprobación humana explícitos; no propongas eludir permisos. Si el tratamiento de datos o la autorización no está claro, márcalo como riesgo o pregunta pendiente.
6. **Ubicar conceptualmente el trabajo.** Si puede determinarse por su responsabilidad, recomienda una ruta futura conforme a `.agents/rules/monorepo-structure.md`: interfaz en `uis/website/` o `uis/backoffice/`, backend en `services/`, agente de producto en `agents/`, o capacidad de producto en `skills/`. Lee el README pertinente y comprueba si la carpeta existe antes de afirmar su estado. Las rutas pueden ser destinos previstos, no aplicaciones implementadas. Si no hay suficiente información, indica “por determinar”; no propongas una estructura paralela ni crees archivos.
7. **Proponer criterios comprobables.** Formula condiciones observables que permitan aceptar o rechazar el resultado sin depender de expresiones vagas como “funciona bien”. Distingue criterios derivados directamente de lo solicitado de propuestas que requieren aprobación. No inventes umbrales, campos, contratos, endpoints, fuentes de datos ni tecnologías. Si falta un umbral o dato para verificar un criterio, regístralo como pendiente.
8. **Identificar dependencias, riesgos y decisiones.** Enumera sistemas, datos, permisos, decisiones técnicas o aprobaciones humanas de los que depende la funcionalidad. Verifica las tecnologías en los archivos existentes; las recomendaciones de README no son decisiones aprobadas. Registra conflictos relevantes entre fuentes y detente para solicitar intervención humana cuando afecten la definición segura o correcta.
9. **Emitir recomendación.** Elige una de estas opciones y justifícala:
   - **Lista para planificarse:** problema, usuario o área, alcance y criterios son suficientemente claros para elaborar un plan. No autoriza implementación.
   - **Necesita aclaraciones:** hay preguntas esenciales que impiden acotar o verificar el resultado.
   - **Bloqueada:** existe un conflicto relevante, riesgo no mitigado o autorización faltante que exige decisión humana antes de continuar.

## Formato del informe

Entrega el informe usando esta estructura. Escribe “No indicado” o “Por determinar” donde corresponda; no dejes que un campo vacío parezca una decisión:

```markdown
# Evaluación de solicitud: <nombre o identificador>

- **Recomendación:** Lista para planificarse | Necesita aclaraciones | Bloqueada
- **Problema empresarial:**
- **Objetivo esperado:**
- **Usuario o área:**
- **Evidencia empresarial:** hechos citados con archivo y sección; inferencias y desconocidos separados
- **Alcance incluido:**
- **Exclusiones:**
- **Ubicación/componente candidato:** ruta y razón, o “Por determinar”; existencia comprobada o no comprobada
- **Criterios de aceptación verificables:**
  - ...
- **Dependencias:**
- **Riesgos y controles:** seguridad, datos, permisos y aprobación humana
- **Preguntas y decisiones pendientes:**
- **Fundamento de la recomendación:**
```

Cuando un criterio sea una propuesta y no un requisito ya aprobado, etiquétalo como **propuesta para confirmar**. Cita las fuentes que sustentan hechos; si una fuente no puede consultarse, decláralo como limitación.

## Criterios de aceptación de esta skill

La evaluación es satisfactoria solo si:

- mantiene trazabilidad a fuentes verificables;
- separa requisitos confirmados, inferencias y desconocidos sin inventar requisitos o tecnologías;
- define el alcance y las exclusiones, o registra por qué siguen pendientes;
- incluye criterios de aceptación observables y verificables, identificando las propuestas que requieren aprobación;
- identifica riesgos relevantes, dependencias, autorizaciones y decisiones pendientes;
- emite una recomendación fundamentada;
- no crea ni modifica archivos de producto ni implementa código.

## Ejemplo breve de aplicación

**Solicitud de ejemplo:** “Quiero que clientes y operadores puedan saber dónde está un envío y entender una incidencia.”

**Evaluación de escritorio basada en las fuentes disponibles:**

- **Problema y evidencia:** `BRIEFING.md`, sección “Última Milla y Gestión de Transportistas”, indica que el seguimiento se hace consultando portales de transportistas por separado y que la gestión de incidencias es mayormente manual. `company-choice.md`, “Reto de automatización seleccionado” y “My AI Agent Idea”, propone unificar el seguimiento y ayudar a clientes y operadores con información verificable.
- **Confirmado:** el problema de consultas fragmentadas y la propuesta de seguimiento/incidencias.
- **Inferencia:** una respuesta comprensible sobre el estado puede reducir consultas manuales; el beneficio no está cuantificado en las fuentes.
- **Desconocido:** sistemas y datos disponibles, cómo se identifica un envío, permisos por tipo de usuario, estados y causas de incidencia reconocidos, canal de atención, integraciones autorizadas, umbrales de calidad y si se solicita un agente, una interfaz o ambos. No se presupone ningún endpoint ni transportista concreto.
- **Alcance candidato:** informar el estado registrado y explicar incidencias únicamente cuando existan datos autorizados y verificables. Cambiar pedidos, autorizar devoluciones o realizar acciones con consecuencias económicas queda excluido sin controles y aprobación humana explícitos.
- **Ubicación candidata:** `agents/` si se solicita un agente de producto; `services/` si se requiere una API backend; una interfaz sería en la futura ruta correspondiente de `uis/`. La elección final depende del alcance. Las rutas candidatas y la existencia del componente deben verificarse antes de planificar implementación.
- **Criterios propuestos para confirmar:** (1) para cada caso de prueba con un estado disponible en una fuente autorizada, la respuesta coincide con ese estado; (2) si no hay evidencia suficiente o el envío no puede identificarse, la respuesta lo declara y pide el dato faltante o deriva la consulta; (3) no ejecuta acciones sensibles sin autorización humana explícita. Los casos de prueba, fuentes autorizadas, método de derivación y controles concretos están pendientes de definición.
- **Recomendación:** **Necesita aclaraciones** antes de planificarse: faltan la fuente y el acceso autorizados a datos de seguimiento, la identidad/permisos de los usuarios, el componente solicitado y criterios aprobados para verificar la calidad. No se ha implementado ni modificado ningún componente.
