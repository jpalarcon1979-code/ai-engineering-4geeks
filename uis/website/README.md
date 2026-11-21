# Sitio web público de TrackFlow

Este sitio presenta TrackFlow, una empresa de logística para marcas de comercio electrónico que ofrece almacenamiento, preparación de pedidos, distribución y gestión de devoluciones en Estados Unidos y España. Su objetivo es explicar esos servicios y facilitar el inicio de una conversación comercial.

## Alcance actual

El proyecto incluye:

- Una landing page corporativa con información sobre TrackFlow, sus servicios y mercados.
- Un formulario de solicitud comercial con validación en el navegador.

El formulario solo simula el envío: no transmite ni almacena la información ingresada.

## Tecnologías

- **HTML5** para las páginas y el formulario.
- **Tailwind CSS 4** para los estilos; `input.css` importa Tailwind y el comando de compilación genera `output.css`.
- **JavaScript** para validar el formulario en el navegador.
- **Node.js y npm** para ejecutar las pruebas y las herramientas de desarrollo: Tailwind CSS CLI, HTML-Validate y `http-server`.

## Archivos principales

```text
uis/website/
├── index.html                 # Landing page corporativa
├── application.html           # Formulario de solicitud comercial
├── validation.js              # Validación del formulario
├── input.css                  # Entrada de Tailwind CSS
├── output.css                 # CSS compilado
├── favicon.svg                # Icono del sitio
├── package.json               # Scripts y dependencias de desarrollo
├── package-lock.json          # Versiones bloqueadas de dependencias
└── tests/
    └── validation.test.cjs    # Pruebas automatizadas de validación
```

## Ejecución local

Se requiere Node.js y npm. El workflow de GitHub Actions está configurado para usar Node.js 24; `package.json` no declara una versión mínima mediante `engines`.

Desde la raíz del repositorio, entra al directorio del sitio:

```bash
cd uis/website
```

Instala las dependencias definidas en el lockfile:

```bash
npm ci
```

Compila los estilos de Tailwind:

```bash
npm run build
```

Inicia el servidor local:

```bash
npm start
```

El servidor escucha en el puerto `3000`. Abre `http://localhost:3000` para ver la landing page.

## Pruebas y control de calidad

Ejecuta las pruebas automatizadas con:

```bash
npm test
```

Las pruebas cargan el archivo real `validation.js` y simulan las partes del DOM que necesita. **No son pruebas de navegador real** y no verifican compatibilidad entre navegadores ni el despliegue del sitio.

El control de calidad completo se ejecuta con:

```bash
npm run quality
```

Este comando comprueba la sintaxis de `validation.js`, valida el HTML de `index.html` y `application.html`, ejecuta las pruebas automatizadas y compila el CSS de Tailwind.

## GitHub Actions

El workflow `.github/workflows/trackflow-quality.yml` está configurado para ejecutarse en eventos `push` y `pull_request` que incluyan cambios en el sitio o en el propio workflow. Usa Node.js 24, instala dependencias con `npm ci`, ejecuta `npm run quality` y comprueba que la compilación no modifique `output.css`. Esta documentación describe la configuración; no afirma que el workflow ya haya terminado exitosamente en GitHub.

## Limitaciones de este hito

- No hay backend ni base de datos.
- El formulario no envía ni almacena solicitudes.
- No se incluye un portal funcional de seguimiento de paquetes.
- La dirección local `http://localhost:3000` es solo para desarrollo; este README no define un dominio público oficial.
