# Regla: organización y ubicación en el monorepo

## Objetivo y alcance

Define dónde ubicar, crear o trasladar archivos dentro del monorepo de TrackFlow. Debe consultarse siempre que una tarea requiera tomar una decisión sobre la ubicación, creación o traslado de archivos. Esta regla complementa `AGENTS.md` y se limita a la organización del repositorio; no sustituye las instrucciones generales de autorización y seguridad.

## Rutas y responsabilidades

| Ruta | Uso |
| --- | --- |
| `uis/website/` | Sitio público futuro de TrackFlow. |
| `uis/backoffice/` | Aplicación interna futura de TrackFlow. |
| `services/` | APIs, servicios backend y workers cuando correspondan. |
| `agents/` | Agentes que forman parte del producto, junto con su documentación y herramientas. |
| `skills/` | Habilidades y recursos reutilizables del producto y sus agentes. |
| `.agents/` | Configuración, reglas y skills para agentes de programación; no contiene agentes ni skills de producto. |
| `.agents/rules/` | Reglas de organización y otras instrucciones especializadas para agentes de programación. |
| `.agents/skills/` | Skills destinadas a agentes de programación; no es una copia del catálogo de `skills/`. |

`uis/website/` y `uis/backoffice/` son destinos previstos por la plantilla, no prueba de que las aplicaciones existan. `services/` existe como carpeta, pero comprueba su contenido antes de asumir que contiene un backend implementado. Confirma el estado real de cualquier ruta antes de usarla.

## Procedimiento para decidir una ubicación

Antes de crear o trasladar cada archivo:

1. Identifica qué es el archivo y qué componente lo consumirá: interfaz, backend, agente de producto, habilidad de producto o configuración de un agente de programación.
2. Selecciona la ruta que corresponda a esa responsabilidad en la tabla. No elijas una ruta solo porque ya exista; debe ser semánticamente correcta.
3. Lee el README de la carpeta de destino y los README de los componentes pertinentes. Si la ruta aún no existe, lee el README de su carpeta padre y verifica la ruta prevista en la documentación.
4. Comprueba en el árbol de trabajo si la carpeta de destino existe y si ya contiene archivos relacionados. No deduzcas existencia a partir de un README o del árbol de ejemplo de la plantilla.
5. Si el destino no existe, no crees automáticamente la aplicación o estructura: comprueba que la solicitud autoriza su creación y pide autorización si el alcance o la ruta no están claros.
6. Respeta las convenciones del README pertinente y documenta el componente según esas instrucciones. No muevas archivos existentes hasta comprobar sus referencias y el alcance autorizado.

## Ejemplos

**Ubicaciones correctas**

- Los archivos de la futura web pública corresponden a `uis/website/`, si la tarea autoriza crear o modificar esa aplicación.
- Los archivos de la futura aplicación administrativa corresponden a `uis/backoffice/`, si está autorizada.
- La implementación de una API o servicio backend corresponde a `services/`.
- Un agente que TrackFlow ofrece como parte del producto corresponde a `agents/`; una capacidad reutilizable de producto corresponde a `skills/`.
- Una regla para agentes de programación corresponde a `.agents/rules/`; una skill para esos agentes corresponde a `.agents/skills/`.

**Ubicaciones incorrectas**

- Crear una segunda web en `website/`, `frontend/` o `apps/` en la raíz, en vez de respetar `uis/website/`.
- Poner la interfaz pública o administrativa dentro de `services/`.
- Poner un agente de producto dentro de `.agents/`, o guardar una regla de programación como si fuera un agente de producto en `agents/`.
- Copiar una skill de producto de `skills/` a `.agents/skills/` sin una necesidad distinta y autorizada.
- Crear una aplicación solo porque la plantilla enumera su ruta futura.

## Detenerse y solicitar autorización

Detente antes de crear o trasladar archivos y solicita intervención humana cuando:

- no haya un README para la ruta prevista o los README discrepen sobre su responsabilidad;
- la carpeta no exista y la solicitud no autorice claramente la nueva estructura o aplicación;
- el destino propuesto duplique una carpeta, componente o responsabilidad existente;
- no sea claro si el contenido es de producto o configuración para agentes de programación;
- un traslado afecte rutas ya usadas, o requiera modificar archivos fuera del alcance autorizado.

Expón la ruta propuesta, la evidencia consultada y la decisión necesaria. No inventes una estructura alternativa para resolver la duda.
