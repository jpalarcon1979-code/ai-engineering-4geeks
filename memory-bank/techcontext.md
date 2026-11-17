# Tech Context — TrackFlow

## Estructura existente

El repositorio es un monorepo con estas carpetas de primer nivel: `agents/`, `data/`, `docs/`, `infra/`, `internal/`, `mcps/`, `packages/`, `scripts/`, `services/`, `shared/`, `skills/`, `uis/` y `workflows/`, además de los README y documentos de contexto en la raíz.

- `uis/` contiene sus README, pero `uis/website/` y `uis/backoffice/` **no existen**. Su README los describe como destinos previstos para la web pública y la aplicación interna de administración.
- `services/` solo contiene sus README; no hay servicios implementados. La guía raíz describe el destino como backend centralizado de la empresa y menciona FastAPI como recomendación.
- `agents/` contiene README, `_template/` y `tools/`; no hay un agente de TrackFlow implementado.
- `skills/` contiene README, `_template/`, `code-review/`, `data-analysis/` y `research/`; incluye un script de limpieza con pandas y recursos de ejemplo.
- `.agents/rules/` contiene `monorepo-structure.md`, y `.agents/skills/` contiene `trackflow-feature-intake/SKILL.md`. Son instrucciones y recursos para agentes de programación, no componentes del producto.
- `packages/shared/` contiene metadata para `@repo/shared-types` y tipos TypeScript. No hay runner de workspace en la raíz.
- También existen README para `data/`, `docs/`, `infra/`, `internal/`, `mcps/`, `scripts/`, `shared/` y `workflows/`. No existe `docker-compose.yml` en la raíz.

## Tecnologías: hechos frente a recomendaciones

**Existentes o configuradas (hechos comprobados en archivos):**

- `packages/shared/types/index.ts` contiene tipos TypeScript y `packages/shared/package.json` declara el paquete `@repo/shared-types`.
- Existe un script Python que importa pandas como ejemplo de limpieza de datos.
- `.devcontainer/devcontainer.json` configura Python 3.12, Node.js 22, Docker y GitHub CLI; también configura JupyterLab, Corepack/pnpm y uv.

**Mencionadas como ejemplos o recomendaciones (no son decisiones aprobadas para TrackFlow):**

- FastAPI para un backend centralizado, en el README raíz.
- n8n, Make y Zapier como ejemplos de herramientas para workflows.
- Docker, Terraform, Kubernetes y Nginx como ejemplos en la guía de infraestructura.
- Website/backoffice son categorías de producto previstas; no se documenta un framework frontend.

No se encontró una API, aplicación frontend, base de datos, proveedor de LLM ni framework de agentes implementado. La presencia de herramientas en el devcontainer o de ejemplos en documentación no aprueba su uso en la solución.

## Destino y restricciones de arquitectura

- Según `uis/README.md` y `uis/README.es.md`, cuando se autoricen, `uis/website/` alojará la presencia web pública y `uis/backoffice/` la aplicación administrativa interna. No crear esas aplicaciones como parte de este Memory Bank.
- `services/` es el destino documentado para backend, APIs y workers. La guía raíz recomienda evitar microservicios al inicio y describe una API centralizada; FastAPI es una recomendación, no una decisión aprobada para TrackFlow.
- Mantener las responsabilidades del monorepo: interfaces en `uis/`, backend en `services/`, agentes de producto en `agents/` y capacidades reutilizables en `skills/`.
- No inferir endpoints, servicios, frameworks, infraestructura ni contratos técnicos a partir de las necesidades empresariales.

## `.agents/` frente a `agents/` y `skills/`

`agents/` y `skills/` son carpetas de producto documentadas en el monorepo: alojan agentes, herramientas y capacidades reutilizables con sus recursos. `.agents/` contiene configuración e instrucciones para agentes de programación; actualmente incluye la regla `.agents/rules/monorepo-structure.md` y la skill `.agents/skills/trackflow-feature-intake/SKILL.md`. No deben copiarse allí agentes ni skills de producto, ni duplicarse sus contenidos.

## Decisiones técnicas pendientes

- Stack y estructura de las aplicaciones web y backoffice.
- Framework y despliegue del backend, si se implementa.
- Framework de agentes, proveedor de modelos y herramientas autorizadas.
- Almacenamiento, recuperación documental/RAG y gestión de permisos.
- Mecanismo de carga automática, si existe, para reglas y skills de `.agents/`; actualmente `AGENTS.md` exige descubrirlas y consultarlas explícitamente, sin afirmar carga automática.
- Resolución del nombre del CEO contradictorio en el briefing, registrada en [progress.md](./progress.md).
