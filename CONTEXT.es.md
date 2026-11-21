# Contexto empresarial de TrackFlow

## Propósito y fuente de referencia

Este documento sintetiza el dominio empresarial de TrackFlow para quienes contribuyen al proyecto y para los agentes de IA. La fuente principal es [`BRIEFING.md`](./BRIEFING.md); consulta ese documento para obtener más detalles. Este contexto es una síntesis, no una confirmación de que los sistemas propuestos ya estén construidos.

No resuelvas silenciosamente las contradicciones de la fuente ni completes vacíos con suposiciones. En particular, el briefing proporciona dos apellidos distintos para el CEO; ambos quedan registrados más abajo hasta que se confirme el dato.

## Identidad de la empresa

TrackFlow es una empresa de entregas de última milla y gestión de almacenes que presta servicios a marcas de comercio electrónico. Almacena el inventario de sus clientes, prepara y empaqueta pedidos, coordina las entregas con transportistas y gestiona devoluciones.

El briefing indica que Thomas creó una unidad interna llamada **TrackFlow Tech** para construir los sistemas, las integraciones y la automatización inteligente necesarios para modernizar la empresa. Como la fuente contradice el apellido de Thomas, refiérete a él como Thomas, sin elegir un apellido mientras no se aclare la discrepancia.

| Dato | Información del briefing |
|---|---|
| Fundación | 2009, en Los Ángeles, Estados Unidos |
| Mercados | Estados Unidos y España |
| Almacenes | Los Ángeles y Zaragoza |
| Tamaño de la empresa | Aproximadamente 130 empleados |
| Facturación anual | Aproximadamente 9 millones de euros |
| Modelo operativo | Servicios B2B para marcas de comercio electrónico; sus operaciones también afectan a los consumidores finales que reciben paquetes |

Son cifras aproximadas del perfil de la empresa, no mediciones operativas en tiempo real.

## Organización y responsabilidades

| Área | Responsable y equipo según el briefing | Responsabilidad |
|---|---|---|
| Dirección ejecutiva | **El nombre del CEO es inconsistente en la fuente:** Thomas Harry, identificado como fundador y CEO con base en Los Ángeles, en la descripción organizacional; Thomas Espinoza aparece como CEO en la sección de Dirección Ejecutiva. La fuente no asocia el segundo nombre con una ubicación. | Dirige la empresa y recibe un informe semanal consolidado. No elijas un apellido sin confirmación. |
| Operaciones de Almacén | Ana Whitfield; aproximadamente 70 operarios y dos jefes de almacén | Supervisa los almacenes de Los Ángeles y Zaragoza. |
| Última Milla y Gestión de Transportistas | Carlos Vega; seis coordinadores logísticos | Asigna transportistas, hace seguimiento de entregas y gestiona incidencias de envíos. |
| Logística Inversa | Sofía Ramos; equipo de cinco personas | Revisa y procesa productos devueltos. |
| Experiencia del Cliente | Valentina Cruz; 15 agentes en Los Ángeles y Zaragoza | Atiende a marcas cliente y consumidores finales mediante los canales de atención. |
| Comercial y Relación con Clientes | Miguel Torres; cuatro account managers y cuatro personas de desarrollo de negocio | Retiene marcas cliente actuales y desarrolla nuevos negocios. |
| Personas | Rafael Sanz; equipo de tres personas en Zaragoza | Contratación, incorporación, políticas internas, consultas del personal y operaciones de Personas en ambos países. |
| Tecnología | Andrés Kim, CTO; equipo de siete personas en Zaragoza | Desarrolladores, ingenieros de datos y técnicos de sistemas que construyen y mantienen la tecnología de la empresa. |

El briefing no detalla otras líneas de reporte más allá de estas descripciones.

## Operaciones actuales, problemas y necesidades declaradas

Las necesidades descritas a continuación son propuestas del briefing. Representan oportunidades, no capacidades implementadas o verificadas.

### Operaciones de Almacén

**Estado actual y problemas**

- Los Ángeles y Zaragoza usan enfoques distintos de gestión de almacenes: un software comercial y una hoja de cálculo avanzada.
- No existe una vista global del inventario en tiempo real. Los pedidos llegan por correo en formatos distintos y se transcriben manualmente; el picking se realiza con listas impresas.
- Las discrepancias de inventario son frecuentes y se detectan tarde.

**Necesidades futuras declaradas**

- Una API unificada que informe el stock de un SKU en cualquiera de los dos almacenes.
- Ingesta automatizada e interpretación de correos con pedidos.
- Un dashboard de operaciones de almacén y alertas de stock bajo para clientes y el equipo de compras.

### Última Milla y Gestión de Transportistas

**Estado actual y problemas**

- La asignación de transportistas es manual; el equipo consulta por separado los portales de cada transportista para seguir paquetes.
- No hay datos históricos estructurados de rendimiento, como entregas a tiempo, incidencias por ruta y coste por kilogramo.

**Información de transportistas del briefing**

- La empresa trabaja con ocho transportistas en los dos países.
- El desglose por país nombra UPS, FedEx y DHL en Estados Unidos; y MRW, SEUR, DHL y dos transportistas locales en España.
- No se especifican los detalles de selección de transportista ni de sus API.

**Necesidades futuras declaradas**

- Un motor que recomiende transportistas según destino, peso y urgencia.
- Un endpoint unificado de seguimiento, un portal público de seguimiento para destinatarios y un dashboard de rendimiento de transportistas.

### Logística Inversa

**Estado actual y problemas**

- Las devoluciones representan aproximadamente entre el 18 % y el 25 % del volumen, según el cliente y el país.
- Las decisiones sobre devoluciones se revisan manualmente; la inspección de productos es subjetiva y faltan datos sobre patrones y motivos de devolución.

**Necesidades futuras declaradas**

- Reglas configurables por cliente para aprobar devoluciones automáticamente y un flujo automatizado de recogida (aprobación, etiqueta y programación con transportista).
- Clasificación asistida por IA del estado del producto a partir de fotos tomadas por operarios.
- Un dashboard para analizar patrones de devoluciones.

### Experiencia del Cliente

**Estado actual y problemas**

- El equipo atiende tanto a marcas B2B como a consumidores finales B2C por correo, WhatsApp y teléfono, sin un sistema unificado de tickets.
- El briefing estima que el 80 % de las consultas podría responderse automáticamente. No hay base de conocimiento ni cobertura fuera del horario de oficina.

**Necesidades futuras declaradas**

- Un agente de primera línea para consultas de seguimiento de envíos y estado de devoluciones.
- Una base de conocimiento semántica para generación aumentada por recuperación (RAG), gestión unificada de tickets y un dashboard de Experiencia del Cliente en tiempo real.
- Análisis de sentimiento para detectar clientes frustrados antes de una escalada.
- El soporte en español e inglés es opcional, pero muy recomendable, comenzando con un idioma base.

### Comercial y Relación con Clientes

**Estado actual y problemas**

- Los account managers gestionan sus cuentas en hojas de cálculo personales y cadenas de correo; no hay CRM.
- Los informes PDF mensuales para clientes se preparan manualmente a partir de varios sistemas. No hay visibilidad del riesgo de renovación, aunque los contratos son anuales.

**Necesidades futuras declaradas**

- Integración con un CRM y perfiles unificados de clientes.
- Generación automática de informes para clientes, un dashboard de salud de clientes con puntuación de riesgo de renovación y alertas 90 y 30 días antes de la renovación.
- Un agente comercial que sugiera servicios relevantes a prospectos.

### Personas

**Estado actual y problemas**

- La contratación y la incorporación se gestionan por correo y con distintos PDF de bienvenida por país. La incorporación es inconsistente y no comprueba la comprensión de las operaciones de almacén, transportistas y devoluciones.
- Las solicitudes de acceso a sistemas se retrasan por depender de seguimiento manual. Las consultas sobre vacaciones, políticas y beneficios llegan por correo y chat y reciben respuestas distintas.
- No hay métricas de Personas por país; el equipo opera bajo dos marcos laborales diferentes.

**Necesidades futuras declaradas**

- Incorporación estructurada para el personal corporativo, que cubra la empresa, sus operaciones, el puesto y los lineamientos internos, con comprobaciones de comprensión y seguimiento del progreso.
- Solicitudes automatizadas de acceso a sistemas; un portal interno de RR. HH. para vacaciones y políticas; y un dashboard de métricas de Personas por país.
- Un agente interno de RR. HH. basado en documentos oficiales de políticas.
- El soporte en español e inglés es opcional, pero muy recomendable, comenzando con un idioma base.

### Tecnología

**Estado actual y problemas**

- El entorno incluye dos enfoques diferentes de gestión de almacenes, un ERP heredado de principios de la década de 2010, scripts de Python punto a punto sin documentar y bases de datos en dos proveedores cloud.
- No hay telemetría centralizada. Las incidencias operativas pueden llegar al equipo técnico de Zaragoza por WhatsApp.
- Desplegar una funcionalidad nueva toma aproximadamente entre una y dos semanas.

**Necesidades futuras declaradas**

- Telemetría y logging centralizados en ambos países; un pipeline de datos para los dashboards de la empresa; monitorización y alertas en tiempo real.
- Un agente de documentación técnica y tareas operativas automatizadas, como backups, comprobaciones de salud y notificaciones de incidencias.

### Dirección Ejecutiva

**Estado actual y problemas**

- Los directores preparan manualmente un informe consolidado el domingo por la noche, dedicando entre tres y cuatro horas cada uno. A las 10:00 del lunes, algunos datos ya tienen uno o dos días.
- No hay una vista unificada por país y las decisiones estratégicas se toman con datos parciales.
- El apellido del CEO no está resuelto en la fuente (ver la tabla de organización).

**Necesidades futuras declaradas**

- Un dashboard global en tiempo real con KPIs de volumen de envíos, entregas a tiempo, costes, devoluciones y satisfacción del cliente (CSAT).
- Un informe semanal generado automáticamente cada lunes a las 7:00; comparativas por país; alertas por umbral; y un asistente de IA en lenguaje natural.

## Sistemas existentes y dependencias conocidas

El briefing identifica como actuales: dos enfoques de gestión de almacenes (software comercial y hoja de cálculo avanzada), un ERP heredado, integraciones de Python sin documentar, bases de datos en dos proveedores cloud, portales de transportistas y comunicación por correo, WhatsApp y teléfono.

El briefing **no** identifica proveedores, productos, versiones, API, proveedores cloud, CRM ni esquemas de datos. Indica que actualmente no hay CRM, sistema unificado de tickets ni base de conocimiento. No inventes esos detalles. Las integraciones propuestas (por ejemplo, con un CRM, API de transportistas o servicio unificado de inventario) dependen de sistemas y accesos que no están identificados en la fuente.

## Restricciones, supuestos y rigor con los datos

- La empresa opera en Estados Unidos y España, con entornos regulatorios y marcos laborales distintos. No se especifican obligaciones legales concretas; no las infieras ni presentes asesoría legal.
- El español y el inglés son relevantes para la operación en dos países. El briefing marca el soporte multilingüe como opcional pero muy recomendable para Experiencia del Cliente y Personas, comenzando con un idioma base.
- Conserva calificadores como “aproximadamente” en las cifras de tamaño, facturación, plantilla y volumen de devoluciones.
- No inventes transportistas adicionales, proveedores de software, comportamiento de API, definiciones de KPIs, niveles de servicio, datos de clientes ni requisitos legales.
- Mantén explícita la discrepancia sobre el apellido del CEO hasta que exista una corrección autorizada. No presentes ninguno de los dos apellidos como confirmado.
- Trata los problemas operativos como información reportada por el briefing, no como telemetría actual verificada de forma independiente.

## Funcionalidad implementada frente a necesidades futuras

Los sistemas y flujos descritos como actuales arriba corresponden a la situación empresarial reportada en el briefing. Los elementos marcados como **Necesidades futuras declaradas** son aspiraciones; no deben describirse como ya desplegadas.

Este contexto empresarial no determina el estado de implementación de las aplicaciones de este repositorio. Antes de afirmar que existe una API, dashboard, agente, integración o automatización propuesta, verifica el código y la documentación de la aplicación correspondiente. Por ejemplo, la necesidad de un portal público de seguimiento no significa que dicho portal ya esté implementado.
