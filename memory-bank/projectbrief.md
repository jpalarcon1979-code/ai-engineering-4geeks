# Project Brief — TrackFlow

## Fuentes y autoridad

- **Hechos empresariales:** [BRIEFING.md](../BRIEFING.md), que coincide con el briefing oficial de TrackFlow.
- **Propuesta del proyecto:** [company-choice.md](../company-choice.md).
- [CONTEXT.md](../CONTEXT.md) y [CONTEXT.es.md](../CONTEXT.es.md) siguen siendo placeholders; no son fuentes autorizadas del contexto empresarial.

Este documento sintetiza el contexto necesario para el hito. No sustituye ni reproduce íntegramente el briefing.

## Hechos empresariales

TrackFlow es una empresa de logística de última milla y gestión de almacenes fundada en 2009. Opera en Estados Unidos y España, con almacenes en Los Ángeles y Zaragoza; cuenta con aproximadamente 130 empleados y unos 9 millones de euros de facturación anual.

Los problemas documentados que enmarcan este proyecto son:

- Los almacenes usan sistemas diferentes y carecen de una visión compartida del inventario.
- La asignación y el seguimiento de transportistas se hacen mayormente de forma manual, consultando portales distintos; faltan datos estructurados de rendimiento.
- Las devoluciones requieren revisión humana y no existe una visión adecuada de sus patrones.
- La atención a marcas (B2B) y consumidores (B2C) ocurre por varios canales sin un sistema unificado de tickets ni una base de conocimiento.
- La arquitectura tecnológica es heterogénea y sus integraciones están poco documentadas; las incidencias se conocen tarde.

El briefing describe las necesidades de cada área; este hito no las convierte automáticamente en alcance de implementación.

## Decisión documentada: reto elegido y alcance propuesto

[company-choice.md](../company-choice.md) selecciona la **unificación del seguimiento de envíos y la gestión inteligente de incidencias logísticas** como reto de automatización y propone un agente de seguimiento e incidencias.

La propuesta contempla ayudar a clientes y operadores a consultar envíos, interpretar incidencias y responder con información empresarial verificable. El agente podría:

- Interpretar consultas y obtener datos actuales del envío mediante herramientas autorizadas.
- Consultar políticas oficiales de entrega y devolución mediante RAG.
- Explicar estados registrados y retrasos conocidos, orientar al usuario y preparar o crear tickets cuando cuente con autorización.

La propuesta establece que el agente debe reconocer cuando los datos no bastan. Las acciones sensibles —por ejemplo, modificar pedidos o autorizar excepciones con consecuencias económicas— requieren controles específicos y aprobación humana.

Los usuarios y áreas documentados son los consumidores y las marcas atendidos por Experiencia del Cliente, sus agentes bajo Valentina Cruz, los coordinadores de Última Milla y Gestión de Transportistas bajo Carlos Vega, y Tecnología bajo Andrés Kim.

**Límite:** esto describe una propuesta y un alcance inicial, no aplicaciones, endpoints, herramientas, políticas de permisos ni arquitectura aprobados. Otros problemas de TrackFlow —como inventario, devoluciones, RR. HH. e informes ejecutivos— quedan fuera de este reto inicial salvo autorización posterior.
