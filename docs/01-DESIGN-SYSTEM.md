# HeyJimmi — Design System
**Tokens, tipografía, espaciado, componentes base**

---

## Paleta de color

| Nombre   | Hex       | Uso                                           |
|----------|-----------|-----------------------------------------------|
| Crema    | `#FFF9F0` | Siempre el fondo. Nunca usar otro color de fondo en páginas. |
| Carbón   | `#1C1C1E` | Texto principal, navbar fondo opcional        |
| Sol      | `#F7C132` | Acentos decorativos, separadores, negritas clave en el manifiesto |
| Guayaba  | `#FF5459` | CTAs únicamente. Ningún otro uso.             |
| Aqua     | `#00B896` | Estados secundarios, éxito, badges positivos  |
| Gris     | `#888888` | Texto secundario, meta, labels                |
| Borde    | `rgba(28,28,30,0.1)` | Bordes y separadores sutiles        |

### tailwind.config.mjs

```js
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        crema: '#FFF9F0',
        carbon: '#1C1C1E',
        sol: '#F7C132',
        guayaba: '#FF5459',
        aqua: '#00B896',
        gris: '#888888',
      },
      fontFamily: {
        fraunces: ['Fraunces Variable', ...fontFamily.serif],
        sans: ['DM Sans', ...fontFamily.sans],
        mono: ['DM Mono', ...fontFamily.mono],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body-md': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'label': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.06em' }],
      },
      maxWidth: {
        'prose-narrow': '640px',
        'prose-wide': '820px',
        'site': '1200px',
      },
      borderRadius: {
        'card': '12px',
        'btn': '8px',
      },
    },
  },
  plugins: [],
};
```

---

## Tipografía

### Cargar fuentes (Base.astro / global.css)

```css
@import '@fontsource-variable/fraunces';
@import '@fontsource/dm-sans/400.css';
@import '@fontsource/dm-sans/500.css';
@import '@fontsource/dm-mono/400.css';
```

### Jerarquía tipográfica

| Elemento        | Fuente     | Tamaño (móvil → desktop) | Peso |
|-----------------|------------|--------------------------|------|
| H1 principal    | Fraunces   | 2.5rem → 4.5rem          | 600  |
| H2 sección      | Fraunces   | 2rem → 2.25rem           | 600  |
| H3 subsección   | DM Sans    | 1rem                     | 500  |
| Eyebrow         | DM Sans    | 0.6875rem, uppercase     | 500  |
| Body largo      | Fraunces   | 1.0625rem → 1.125rem     | 300 (manifiesto) |
| Body UI         | DM Sans    | 1rem                     | 400  |
| Label / meta    | DM Sans    | 0.6875rem, uppercase     | 500  |
| Código / URL    | DM Mono    | 0.875rem                 | 400  |

**Regla del manifiesto:** el cuerpo del manifiesto usa Fraunces weight 300, tamaño 1.0625rem, line-height 1.85. Se siente literario, no de marketing.

---

## Espaciado

Usa el sistema de espaciado de Tailwind (base 4px). Los valores más usados:

- Padding de sección: `py-24 md:py-32`
- Gap entre elementos de sección: `gap-8 md:gap-12`
- Max width de contenido: `max-w-prose-narrow mx-auto` para texto corrido
- Max width de site: `max-w-site mx-auto px-6 md:px-8`

---

## Componentes base

### Botón primario (Guayaba)

```html
<a href="/demo" class="inline-flex items-center gap-2 bg-guayaba text-white font-sans font-medium text-body-sm px-6 py-3 rounded-btn hover:bg-[#e04043] transition-colors duration-150">
  Agenda una demo gratis
</a>
```

### Botón secundario (Carbón outline)

```html
<a href="/como-funciona" class="inline-flex items-center gap-2 border-2 border-carbon text-carbon font-sans font-medium text-body-sm px-6 py-3 rounded-btn hover:bg-carbon hover:text-crema transition-colors duration-150">
  Ver cómo funciona ↓
</a>
```

### Eyebrow label

```html
<p class="font-sans font-medium text-label uppercase tracking-widest text-gris mb-3">
  Software a la medida · Desde $2,500 MXN/mes
</p>
```

### Separador Sol

```html
<div class="w-12 h-1 bg-sol rounded-full my-8"></div>
```

### Card de sección

```html
<div class="bg-white border border-[rgba(28,28,30,0.1)] rounded-card p-6 md:p-8">
  <!-- contenido -->
</div>
```

### Card de vertical (con hover)

```html
<a href="/para/condominios" class="group block bg-white border border-[rgba(28,28,30,0.1)] rounded-card p-6 md:p-8 hover:border-carbon transition-colors duration-200">
  <p class="font-mono text-label text-gris mb-3 uppercase">/para/condominios</p>
  <h3 class="font-fraunces text-display-md text-carbon mb-3">Condominios y fraccionamientos</h3>
  <p class="font-sans text-body-md text-gris mb-6">...</p>
  <span class="font-sans font-medium text-body-sm text-carbon group-hover:underline">Ver plataforma →</span>
</a>
```

---

## Global CSS (src/styles/global.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    @apply bg-crema text-carbon font-sans;
  }

  ::selection {
    @apply bg-sol text-carbon;
  }

  /* Manifesto typography */
  .prose-manifesto p {
    @apply font-fraunces font-light text-[1.0625rem] leading-[1.85] text-carbon mb-6;
  }

  .prose-manifesto p:last-child {
    @apply mb-0;
  }

  .prose-manifesto strong {
    @apply font-semibold text-carbon;
    /* Key phrases get Sol underline accent */
    text-decoration: underline;
    text-decoration-color: #F7C132;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
  }

  .prose-manifesto em {
    @apply italic;
  }

  /* Blog prose */
  .prose-blog h2 {
    @apply font-fraunces font-semibold text-display-md text-carbon mt-12 mb-4;
  }

  .prose-blog p {
    @apply font-sans text-body-md text-carbon mb-5;
  }

  .prose-blog ul {
    @apply list-disc list-inside mb-5 space-y-2;
  }

  .prose-blog a {
    @apply text-carbon underline decoration-sol decoration-2 underline-offset-2 hover:decoration-guayaba transition-colors;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

---

## SEOHead Component (src/components/astro/SEOHead.astro)

Receives props per page. Renders all meta tags and JSON-LD.

```astro
---
interface Props {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  schema?: object;
}

const {
  title,
  description,
  canonicalUrl,
  ogImage = '/og-default.png',
  schema,
} = Astro.props;

const fullTitle = title.includes('HeyJimmi') ? title : `${title} — HeyJimmi`;
---

<title>{fullTitle}</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonicalUrl} />

<!-- OG -->
<meta property="og:title" content={fullTitle} />
<meta property="og:description" content={description} />
<meta property="og:url" content={canonicalUrl} />
<meta property="og:image" content={`https://heyjimmi.com${ogImage}`} />
<meta property="og:locale" content="es_MX" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="HeyJimmi" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={fullTitle} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={`https://heyjimmi.com${ogImage}`} />

<!-- JSON-LD -->
{schema && (
  <script type="application/ld+json" set:html={JSON.stringify(schema)} />
)}
```

---

## Animaciones

Mínimas e intencionales. Todo con CSS — sin librerías de animación.

```css
/* Fade in al entrar al viewport — usar con IntersectionObserver */
.fade-in {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

IntersectionObserver en un script inline al final del body:

```js
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0.1 }
);
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
```

Usar `fade-in` solo en secciones grandes (manifiesto, cards de verticales, FAQ). No en cada elemento individual.

---

## Lo que nunca va en el sitio

- Imágenes de stock de personas sonriendo
- Ilustraciones genéricas de "tecnología" (cohetes, engranajes, cerebros digitales)
- Gradientes de color
- Fondos oscuros en páginas (solo el manifiesto puede tener un bloque Carbón)
- Animaciones que distraigan de leer
- Emojis
- Jerigonza tech sin explicación
