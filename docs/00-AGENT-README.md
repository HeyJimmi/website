# HeyJimmi — Instrucciones para el Agente de Código
**Leer esto primero antes de tocar cualquier archivo**

---

## Qué es este proyecto

Sitio web de marketing para HeyJimmi (heyjimmi.com) — un estudio de software que construye plataformas digitales para PyMEs mexicanas. El sitio es principalmente estático, en español mexicano (es-MX), y está optimizado para SEO.

## Stack

- **Astro 4+** (framework principal)
- **React** (solo para islands interactivas: FAQ accordion, mobile menu, contact form)
- **Tailwind CSS** (estilos)
- **MDX** (blog y casos de éxito)
- **@astrojs/sitemap** (sitemap automático)
- Output: **totalmente estático** (`output: 'static'`)

## Archivos de referencia y su orden de lectura

| Archivo | Contenido |
|---------|-----------|
| `00-PROJECT-OVERVIEW.md` | Stack, estructura de carpetas, configuración de Astro y content collections |
| `01-DESIGN-SYSTEM.md` | Colores, tipografía, tokens Tailwind, componentes base, CSS global |
| `02-GLOBAL-COMPONENTS.md` | Navbar, Footer, Base layout, FAQAccordion, MobileMenu |
| `03-PAGE-HOME.md` | Homepage completa con todo el copy |
| `04-PAGES-PRINCIPALES.md` | /nosotros · /como-funciona · /precios · /demo |
| `05-VERTICALS.md` | /para/condominios · /para/academias · /para/medios-locales |
| `06-BLOG.md` | Estructura del blog, content collections, pilares y artículos semilla |
| `07-SEO-Y-PAGINAS-SOPORTE.md` | SEO global, schemas, /clientes, /aviso-de-privacidad, páginas futuras |

## Prioridad de construcción

**P1 — Construir primero (lanzamiento):**
1. Base layout + design system + global CSS
2. Navbar + Footer
3. Homepage (`/`)
4. `/para/condominios`
5. `/para/academias`
6. `/para/medios-locales`
7. `/nosotros`
8. `/como-funciona`
9. `/precios`
10. `/demo`

**P2 — Segunda iteración:**
11. `/clientes` + `/clientes/lomas-news` + `/clientes/academia-latinoamericana`
12. `/blog` índice + template de artículo
13. Primeros 4 artículos de blog (2 por pilar)

**P3 — Escala:**
14. `/ciudades/[ciudad]`
15. `/vs/[alternativa]`

## Reglas críticas de implementación

### Diseño
- El fondo de TODAS las páginas es Crema (`#FFF9F0`). Sin excepciones.
- El botón Guayaba (`#FF5459`) solo se usa en CTAs principales. Nunca como acento decorativo.
- Sol (`#F7C132`) solo como acento: líneas, subrayados, negritas clave. Nunca como fondo de página.
- La sección CTA final de la homepage SÍ tiene fondo Sol — es la única excepción.
- Fraunces para headlines. DM Sans para body. DM Mono para código/URLs.

### Interactividad
- Solo usar React donde hay interactividad real: FAQ accordion, mobile menu, contact form.
- Todo lo demás es Astro puro (HTML estático).
- `client:load` para FAQAccordion (necesita respuesta inmediata).
- `client:idle` para MobileMenu.
- `client:visible` para cualquier componente below the fold.

### SEO
- Cada página tiene su propio `<title>`, `<meta name="description">`, y `<link rel="canonical">`.
- Usar el componente `SEOHead.astro` en cada página.
- JSON-LD se pasa como prop `schema` a `SEOHead`.
- FAQPage schema en la homepage (las 5 preguntas del FAQ).
- Article schema en cada blog post.

### Copy
- TODO el copy del sitio está en los archivos de brief. No inventar copy nuevo.
- Si una sección no tiene copy en los briefs, dejarla como `<!-- TODO: copy pendiente -->` y notificarlo.
- El manifiesto de la homepage es sagrado — no resumir, no truncar, no modificar.

### Fuentes
- Cargar con `@fontsource-variable/fraunces` y `@fontsource/dm-sans`.
- No usar Google Fonts CDN — afecta privacidad y velocidad.
- Las fuentes se importan en `src/styles/global.css`.

### Performance
- Objetivo: LCP < 2.5s · CLS < 0.1 · FID < 100ms
- No cargar librerías JavaScript grandes. Cero librerías de animación.
- Imágenes: formato WebP, con `width` y `height` explícitos para evitar CLS.
- Si no hay imagen real disponible, no poner placeholder — omitir la imagen.

### Mobile
- Mobile-first. El manifiesto debe ser legible en 375px sin zoom.
- El CTA flotante de mobile (botón "Agenda tu demo" fijo abajo) es obligatorio en toda página que tenga CTA.

## Variables de entorno necesarias

```env
# Contact form
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=hola@heyjimmi.com

# WhatsApp (reemplazar con número real)
PUBLIC_WHATSAPP_NUMBER=52XXXXXXXXXX
```

## Preguntas frecuentes del agente

**P: ¿El blog necesita SSR para generarse?**
R: No. Astro genera las páginas de blog en build time con SSG. Solo `/api/contacto` necesita SSR si se implementa como API route — o se puede usar un servicio externo como Formspree.

**P: ¿El CTA de WhatsApp va hardcodeado?**
R: Usar `PUBLIC_WHATSAPP_NUMBER` desde las variables de entorno para construir el link: `https://wa.me/${import.meta.env.PUBLIC_WHATSAPP_NUMBER}?text=Hola,+quiero+saber+más+sobre+HeyJimmi`

**P: ¿Dónde va el Calendly embed?**
R: Solo en `/demo`. Script de Calendly al final del body de esa página. Alternativa: formulario nativo con API route POST a Resend.

**P: ¿Hay i18n para inglés?**
R: No en este momento. El sitio es 100% es-MX. La estructura de i18n se agrega después.

**P: ¿Las páginas de ciudades son dinámicas o estáticas?**
R: Estáticas. Cada ciudad es un archivo `.astro` separado con su propio copy. No hay `getStaticPaths` con datos dinámicos — el contenido está hardcodeado por ciudad.

**P: ¿Qué logo usar?**
R: `/public/logo/heyjimmi-wordmark.svg` (Carbón sobre transparente para uso en fondo Crema) y `/public/logo/heyjimmi-wordmark-white.svg` (Crema sobre transparente para uso en fondo Carbón/oscuro en el footer).

---

## Checklist de QA antes de entregar

- [ ] Todas las páginas P1 construidas y funcionando
- [ ] Sitemap generado correctamente (verificar en `/sitemap-index.xml`)
- [ ] Robots.txt presente
- [ ] Cada página tiene title, meta description y canonical únicos
- [ ] JSON-LD válido en homepage (verificar con schema.org validator)
- [ ] FAQPage schema presente en homepage
- [ ] OG tags funcionando (verificar con opengraph.xyz)
- [ ] Fuentes cargando sin flash (no FOUT)
- [ ] Botón CTA flotante visible en mobile
- [ ] Manifiesto legible en 375px
- [ ] Formulario de /demo enviando correctamente
- [ ] WhatsApp link con número correcto
- [ ] Ninguna página con `noindex`
- [ ] Imágenes con `alt` text en español
- [ ] Links del footer funcionando
- [ ] /aviso-de-privacidad y /terminos-y-condiciones presentes (aunque sea placeholder)
