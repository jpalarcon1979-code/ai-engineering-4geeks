# Protocolo para agentes de programación — TrackFlow

Estas instrucciones aplican a cualquier agente de programación que trabaje en este repositorio. Una solicitud del usuario autoriza únicamente el alcance y las rutas que indique de forma expresa; no autoriza cambios colaterales.

## Inicio obligatorio de cada sesión

Antes de proponer o realizar cambios, lee los documentos en este orden:

1. `AGENTS.md` — este protocolo.
2. `README.es.md` y `README.md` de la raíz — estructura, convenciones y estado descrito por la plantilla.
3. `BRIEFING.md` — fuente empresarial principal y autorizada de TrackFlow.
4. `company-choice.md` — propuesta y alcance de proyecto seleccionados.
5. `memory-bank/projectbrief.md`, `memory-bank/techcontext.md` y `memory-bank/progress.md`, en ese orden — síntesis empresarial, contexto técnico y estado del trabajo.
6. El README del directorio afectado y los README de sus componentes existentes. Comprueba que las rutas mencionadas existan; un README puede describir destinos futuros.
7. El código, las configuraciones y los archivos técnicos relacionados directamente con la tarea. Comprueba el estado de Git antes de editar.

Debes comprender el negocio, la estructura y restricciones reales, las decisiones documentadas y el estado actual antes de proponer cambios. `CONTEXT.md` y `CONTEXT.es.md` son placeholders: no los uses como fuentes autorizadas de hechos empresariales. Si las instrucciones o fuentes discrepan, no elijas silenciosamente una versión; aplica los criterios de detención.

Al comenzar cada tarea, identifica las reglas existentes en `.agents/rules/` y lee las que sean pertinentes antes de planificar o modificar archivos. Para cualquier decisión sobre ubicación, creación o traslado de archivos, consulta obligatoriamente `.agents/rules/monorepo-structure.md`. No supongas que Copilot u otra herramienta carga estas reglas automáticamente: debes localizarlas y consultarlas explícitamente. Si una regla contradice `BRIEFING.md`, este protocolo u otra instrucción general, o una restricción autorizada para la tarea, detente y comunica el conflicto antes de continuar.

Al comenzar cada tarea, identifica las skills disponibles en `.agents/skills/` buscando sus archivos `*/SKILL.md` y lee íntegramente las pertinentes antes de planificar o ejecutar el trabajo al que aplican. Respeta las entradas, el procedimiento, los límites y los criterios de aceptación de cada skill. `.agents/skills/` contiene instrucciones para agentes de programación; `skills/` contiene habilidades y recursos reutilizables del producto. No presupongas que Copilot u otra herramienta carga o ejecuta estas skills automáticamente: debes descubrirlas y consultarlas explícitamente. Si una skill contradice este protocolo, una regla aplicable o una autorización del desarrollador, detente y comunica el conflicto.

## Flujo obligatorio antes de cada commit

Completa y documenta estas etapas en cada tarea:

1. **Inspeccionar:** comprobar rama, cambios existentes y estado de Git; releer las instrucciones aplicables y entender la solicitud.
2. **Delimitar:** identificar alcance, rutas afectadas, dependencias, riesgos y criterios de aceptación. Distinguir hechos, decisiones documentadas y propuestas.
3. **Planificar y autorizar:** presentar el plan y las rutas que se modificarán. Obtener autorización para cada cambio que no esté expresamente incluido en la solicitud vigente. No interpretar una autorización limitada como permiso para ampliar el alcance.
4. **Implementar:** cambiar únicamente lo aprobado. Preservar el trabajo previo y detenerse si aparece un conflicto o una modificación necesaria fuera del alcance.
5. **Verificar:** ejecutar solo las verificaciones autorizadas y pertinentes; inspeccionar el diff, el estado de Git, errores y posibles regresiones. No afirmar que una prueba pasó si no se ejecutó y no hay evidencia de su resultado.
6. **Documentar:** actualizar la documentación y el Memory Bank cuando el cambio autorizado modifique hechos, decisiones, estructura o progreso. Mantener la trazabilidad con las fuentes y marcar lo no confirmado como pendiente.
7. **Revisar el resultado:** confirmar los criterios de aceptación, revisar las rutas modificadas y resumir verificaciones, limitaciones y cualquier trabajo pendiente.
8. **Solicitar aprobación:** mostrar el resultado y pedir aprobación explícita antes de crear un commit. No crear commits automáticamente.

Si no corresponde ejecutar una verificación, indícalo y explica por qué; no la presentes como aprobada.

## Alcance, rutas y acciones que requieren autorización

- Solo modifica las rutas cubiertas expresamente por la solicitud actual. Para modificar otros archivos, crear archivos nuevos o ampliar el alcance, presenta el cambio y solicita autorización antes de hacerlo.
- Cambiar `BRIEFING.md`, `company-choice.md`, `CONTEXT.md`, `CONTEXT.es.md` o el contenido empresarial del Memory Bank requiere autorización expresa. `BRIEFING.md` sigue siendo la fuente empresarial principal: no inventes hechos ni alteres su significado.
- Solicita autorización expresa antes de modificar o añadir dependencias y sus manifiestos o lockfiles; configuraciones de aplicaciones, entorno, CI/CD o herramientas; archivos Docker o infraestructura; despliegues; migraciones; permisos; o archivos que puedan contener secretos.
- Nunca publiques secretos, credenciales ni datos sensibles en el repositorio, logs, respuestas o commits. No fabriques valores de configuración para sustituir secretos.
- Acciones destructivas —borrar o sobrescribir trabajo, resets, reescritura de historial o cambios irreversibles— requieren autorización expresa y un alcance concreto. Conserva siempre los cambios preexistentes.
- Commit, push y merge requieren aprobación explícita para la acción correspondiente. No despliegues ni ejecutes acciones externas con efectos persistentes sin autorización explícita.
- No crees carpetas paralelas, aplicaciones, servicios, endpoints, skills ni reglas que la solicitud no exija.

## Estructura del monorepo

Respeta las responsabilidades y rutas definidas por la plantilla:

- `uis/website/`: destino del sitio público de TrackFlow.
- `uis/backoffice/`: destino de la aplicación interna de administración.
- `services/`: destino de APIs y servicios backend, incluidos workers cuando correspondan.
- `agents/`: agentes que forman parte del producto, con sus herramientas y documentación.
- `skills/`: habilidades o componentes reutilizables del producto/agentes, con recursos asociados.
- `.agents/`: espacio de configuración e instrucciones para agentes de programación; no es una carpeta de agentes de producto ni una copia de `agents/` o `skills/`.

`uis/website/` y `uis/backoffice/` son destinos descritos por la documentación y no deben suponerse existentes. Comprueba el estado real antes de utilizarlos. `services/` contiene actualmente documentación, no una API ya implementada. No crees esas aplicaciones o carpetas alternativas salvo que la tarea las requiera y esté autorizada. No crees `.agents/rules/` ni `.agents/skills/` sin una solicitud que lo autorice.

Las guías pueden mencionar tecnologías como recomendaciones o ejemplos. No las presentes como decisiones aprobadas para TrackFlow ni añadas una tecnología por inferencia. Verifica los archivos y configuraciones actuales y solicita autorización cuando una elección técnica no esté documentada.

## Gestión y trazabilidad del contexto

- `BRIEFING.md` es la fuente principal para hechos empresariales. `company-choice.md` documenta la elección y propuesta del proyecto, no sustituye al briefing.
- Mantén el Memory Bank conciso y sin duplicar íntegramente el briefing: usa `projectbrief.md` para contexto empresarial y alcance; `techcontext.md` para estructura y decisiones técnicas; y `progress.md` para estado, riesgos y próximos pasos.
- Actualiza el documento pertinente cuando un cambio autorizado altere hechos confirmados, decisiones, arquitectura real, alcance o estado. No actualices otros archivos por conveniencia si quedan fuera del alcance aprobado.
- Registra decisiones como decisiones solo cuando exista una fuente o aprobación verificable. Conserva la referencia a su fuente; distingue claramente hechos, decisiones documentadas, recomendaciones y pendientes. No inventes fechas, requisitos o aprobaciones.
- `CONTEXT.md` y `CONTEXT.es.md` siguen siendo placeholders y no son fuentes autorizadas de contexto empresarial, aunque la guía de la plantilla describa su uso futuro.
- Si las fuentes contradicen información relevante —incluida la discrepancia Thomas Harry / Thomas Espinoza del briefing— registra el conflicto como pendiente y solicita confirmación humana. No edites el briefing para resolverlo.

## Criterios de detención

Detente, evita cambios afectados y solicita intervención humana cuando:

- encuentres contradicciones relevantes entre fuentes o decisiones;
- detectes un riesgo de seguridad, exposición de secretos o tratamiento no autorizado de datos;
- la solución requiera modificar rutas o componentes fuera del alcance aprobado;
- falten criterios, permisos o información necesarios para actuar con seguridad;
- no haya evidencia para confirmar una verificación o un criterio de aceptación;
- el estado de Git revele cambios preexistentes que puedan verse afectados.

Explica qué encontraste, qué no pudiste verificar y qué decisión o autorización necesitas. No ocultes el problema ni completes datos con suposiciones.

## Entrega y preparación de Pull Request

Antes de proponer un Pull Request:

1. Comprueba que el diff solo incluya cambios autorizados y que se cumplan los criterios de aceptación.
2. Resume propósito, alcance y archivos afectados; relaciona el trabajo con los requisitos aprobados.
3. Documenta las verificaciones ejecutadas con sus resultados observables. Separa las no ejecutadas, fallidas o no verificables y explica las limitaciones.
4. Declara riesgos, decisiones pendientes y cualquier discrepancia no resuelta.
5. Solicita aprobación humana antes de crear el Pull Request o publicar la rama. Push, merge y despliegue requieren autorización explícita independiente cuando no estén incluidos expresamente en la solicitud.

No afirmes que el trabajo está listo para integrar si faltan verificaciones requeridas, hay cambios fuera de alcance o persisten bloqueos relevantes.
