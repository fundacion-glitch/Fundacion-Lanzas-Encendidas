# Fundación Lanzas Encendidas — Sitio web MVP

Sitio institucional construido con Next.js, TypeScript, Tailwind CSS y App Router. La V1 es informativa: no procesa pagos, no guarda datos personales y no incluye backend financiero.

## Ejecutar el proyecto

```bash
pnpm install
pnpm dev
```

Validaciones:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

## Estructura principal

- `app/`: páginas, metadata, sitemap, robots y 404.
- `components/`: navegación, tarjetas, galería, video, botones de copiar y compartir.
- `config/site.ts`: contacto, WhatsApp, redes, banco y URL pública.
- `data/foundation.ts`: misión, propósito, áreas y objetivos.
- `data/projects.ts`: catálogo y contenido de cada proyecto.
- `data/team.ts`: Consejo Directivo.
- `data/impact.ts`: cifras de impacto.
- `public/images/brand/`: logos e isotipos oficiales.
- `public/images/placeholders/`: imágenes conceptuales temporales.
- `public/documents/`: documentos públicos de transparencia.

## Actualizar contenido

### Logos y tipografía

Reemplaza los archivos dentro de `public/images/brand/` conservando los nombres actuales, o modifica las rutas utilizadas en los componentes. La tipografía está en `public/Montserrat-Medium.otf`.

### Fotografías

Guarda las imágenes en `public/images/` y cambia su ruta en `data/projects.ts` o en la página correspondiente. Mantén proporciones similares para evitar ajustes visuales. Las imágenes actuales dentro de `placeholders/` son conceptuales, no evidencia de actividades reales.

### Agregar o modificar proyectos

Edita el arreglo `projects` en `data/projects.ts`. Cada proyecto necesita un `slug` único, estado, categoría, ubicación, imagen, relato y nota de fuente. Marca `isDemo: false` solo cuando toda la información esté validada.

Para actualizar el avance de una campaña cambia `goal` y `raised`. Las cantidades se muestran en DOP.

### Datos bancarios, WhatsApp, correo y redes

Edita `config/site.ts`:

- `bank`: banco, tipo de cuenta, número, titular y RNC.
- `whatsapp`: número internacional, solo dígitos y código de país.
- `whatsappDefaultMessage`: mensaje inicial.
- `email`: correo institucional.
- `social`: enlaces completos de cada red. Los valores vacíos no se muestran.

### Equipo y cifras

- Consejo Directivo: `data/team.ts`.
- Impacto: `data/impact.ts`. Sustituye los guiones por cifras verificadas y cambia `placeholder` a `false`.

### Videos

El componente `VideoEmbed` admite YouTube y Vimeo. Agrega `provider` e `id` en el proyecto o pásalos como propiedades del componente. El video se carga solo después de pulsar reproducir.

### Documentos de transparencia

Agrega cada PDF a `public/documents/` y crea su tarjeta en `app/transparencia/page.tsx`. No publiques borradores ni documentos con información sensible.

## Despliegue

El proyecto está preparado para publicación mediante Sites. Antes de una publicación pública, completa `CONTENT_CHECKLIST.md`, ejecuta las tres validaciones y revisa la web en móvil y escritorio.
