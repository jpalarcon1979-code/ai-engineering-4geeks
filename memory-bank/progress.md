# Progress — Hito de agentes, TrackFlow

## Estado inicial

La auditoría inicial de solo lectura confirmó la rama `feature/agent-memory-bank` y que al comenzar este hito aún no existía `memory-bank/`. El briefing local coincide exactamente con el briefing oficial de TrackFlow en `00-general-contexts`. `CONTEXT.md` y `CONTEXT.es.md` continúan siendo placeholders, no fuentes autorizadas del contexto empresarial.

## Artefactos del hito

Se crearon los seis documentos de infraestructura y contexto siguientes:

- `memory-bank/projectbrief.md`: síntesis empresarial y reto de seguimiento/incidencias elegido.
- `memory-bank/techcontext.md`: estructura real, tecnologías comprobadas, recomendaciones y decisiones pendientes.
- `memory-bank/progress.md`: estado, verificaciones y siguientes pasos de este hito.
- `AGENTS.md`: protocolo de trabajo y autorizaciones para agentes de programación.
- `.agents/rules/monorepo-structure.md`: regla de ubicación y organización del monorepo.
- `.agents/skills/trackflow-feature-intake/SKILL.md`: evaluación de preparación de solicitudes de funcionalidades.

Los README raíz también recibieron una corrección limitada para reflejar que `AGENTS.md` existe.

## Estado: creado, validado y pendiente

**Creado:** los seis documentos de la lista anterior. No se crearon aplicaciones, servicios, endpoints ni código de producto.

**Validado mediante lectura estática:** se revisaron las fuentes empresariales y técnicas y se comprobaron las responsabilidades de rutas. `AGENTS.md` define ocho etapas antes del commit y exige descubrir reglas y skills explícitamente. La regla y la skill describen sus alcances y límites. No se ejecutaron aplicaciones ni pruebas de producto.

**Pendiente de validación formal:** no se confirmó la disponibilidad de PyYAML porque no se configuró el entorno Python. Los parsers locales inspeccionados (Ruby, yq, yamllint, dasel y módulos YAML de Node) no estaban disponibles. Por tanto, el front matter de la skill no cuenta con validación formal YAML.

## Componentes e infraestructura

**Existente:** documentación y plantillas del monorepo; `.agents/rules/monorepo-structure.md`; `.agents/skills/trackflow-feature-intake/SKILL.md`; tipos compartidos TypeScript; y herramientas de desarrollo configuradas en `.devcontainer/devcontainer.json`.

**Pendiente:** agente de seguimiento/incidencias de TrackFlow y cualquier aplicación, servicio, endpoint o integración que lo respalde. `uis/website/` y `uis/backoffice/` siguen siendo rutas futuras no creadas; `services/` contiene README, no un backend de TrackFlow implementado.

## Riesgos y decisiones pendientes

- **Contradicción empresarial:** [BRIEFING.md](../BRIEFING.md) nombra a Thomas Harry como fundador y CEO en la descripción organizativa y a Thomas Espinoza como CEO en Dirección Ejecutiva. La contradicción aparece también en la fuente oficial; no se ha resuelto ni se modificó el briefing.
- **Decisiones técnicas:** stack de aplicaciones, framework y despliegue backend, framework/proveedor de agentes, fuentes de datos autorizadas, permisos, almacenamiento y mecanismo de carga automática de `.agents/` siguen sin estar aprobados o comprobados.
- **Descubrimiento explícito:** [AGENTS.md](../AGENTS.md) exige listar las skills de `.agents/skills/` y leer las pertinentes; no afirma que Copilot u otra herramienta las cargue automáticamente.

## Próximos pasos

1. Completar la validación final del conjunto de seis documentos y su coherencia antes de solicitar aprobación para commit.
2. Ejecutar y documentar las ocho etapas del flujo precommit de `AGENTS.md` antes de cualquier commit; el flujo no se ha ejecutado como preparación de commit.
3. Obtener autorización antes de crear un commit o preparar/publicar un Pull Request. El Pull Request está pendiente.
4. Si se requiere validación YAML recurrente, acordar primero una solución reproducible de desarrollo; no se instalaron dependencias ni se añadieron scripts o CI.

No se realizaron commits, push, merges ni despliegues.
