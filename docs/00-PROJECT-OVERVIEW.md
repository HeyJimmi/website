# HeyJimmi — Project Overview
**heyjimmi.com · es-MX · Marketing Site**

---

## What is HeyJimmi

HeyJimmi is a productized software studio that builds custom digital platforms for Mexican SMEs (PyMEs). Fixed price: $2,500 MXN/month IVA included, 24-month minimum, no upfront cost. HeyJimmi owns the code and infrastructure; clients license usage. The "Powered by HeyJimmi" badge on all client platforms is the primary marketing engine.

## Target buyers (three personas)

1. **Condominios y fraccionamientos** — HOA/community admins who manage large residential developments. Problem: everything runs through WhatsApp groups and spreadsheets. They need: amenity bookings, resident directory, push notifications, news, SOS.

2. **Academias y escuelas** — Academy/school directors who want to grow without hiring more admin staff. Problem: student management is manual, online payments are cobbled together. They need: memberships, online courses, integrated payments, student CRM.

3. **Medios de comunicación locales** — Local media directors who want a professional digital presence. Problem: running on WordPress or nothing at all. They need: editorial CMS, business directory, digital advertising, analytics.

## Business model context (informs copy)

- $2,500 MXN/month, IVA included — never say "plus IVA"
- 24-month minimum commitment ($60,000 MXN total per client)
- Zero setup fee — starts billing when the platform launches
- HeyJimmi owns all code and infrastructure
- Clients own their data — always delivered on request
- Platform live in 4 weeks from contract signing

## Active clients (social proof)

- **LO+ News** (lomasnews.mx) — Community platform for Lomas de Angelópolis, Puebla. ~24,500 homes, 75,000–100,000 residents.
- **Academia Latinoamericana Antienvejecimiento** — Medical aesthetic education platform targeting ~1,000 members at $1,000 MXN/month.

---

## Tech Stack

### Framework
- **Astro 4+** with `@astrojs/react` for interactive islands only
- Static-first: every page is SSG unless it explicitly needs SSR (e.g. contact form submission)

### Styling
- **Tailwind CSS** (`@astrojs/tailwind`)
- Custom design tokens in `tailwind.config.mjs` (see Design System doc)

### Content
- **MDX** via `@astrojs/mdx` + Astro Content Collections
- Blog posts and case studies are MDX files with typed frontmatter

### SEO
- `@astrojs/sitemap` — auto-generates sitemap.xml
- JSON-LD injected per-page via `<script type="application/ld+json">`
- OG meta tags per page

### Deployment
- Fully static output (`output: 'static'`)
- Deploy to DigitalOcean Spaces (CDN) or any static host
- Contact form: Astro API route or external service (Resend / Formspree)

### Dependencies to install
```bash
npm create astro@latest heyjimmi-web -- --template minimal
npx astro add react tailwind mdx sitemap
npm install @fontsource-variable/fraunces @fontsource/dm-sans @fontsource/dm-mono
```

---

## Project Structure

```
heyjimmi-web/
├── astro.config.mjs
├── tailwind.config.mjs
├── src/
│   ├── pages/
│   │   ├── index.astro                    # Home + manifiesto
│   │   ├── nosotros.astro
│   │   ├── como-funciona.astro
│   │   ├── precios.astro
│   │   ├── demo.astro
│   │   ├── clientes/
│   │   │   ├── index.astro
│   │   │   ├── lomas-news.astro
│   │   │   └── academia-latinoamericana.astro
│   │   ├── para/
│   │   │   ├── condominios.astro
│   │   │   ├── academias.astro
│   │   │   └── medios-locales.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── aviso-de-privacidad.astro
│   │   └── terminos-y-condiciones.astro
│   ├── content/
│   │   ├── config.ts                      # Content collection schemas
│   │   ├── blog/                          # MDX blog posts
│   │   └── clientes/                      # MDX case studies
│   ├── components/
│   │   ├── astro/                         # Static Astro components
│   │   │   ├── Navbar.astro
│   │   │   ├── Footer.astro
│   │   │   ├── SEOHead.astro
│   │   │   ├── ManifestoSection.astro
│   │   │   ├── VerticalsGrid.astro
│   │   │   ├── HowItWorks.astro
│   │   │   ├── PricingCard.astro
│   │   │   └── CTASection.astro
│   │   └── react/                         # Interactive islands
│   │       ├── FAQAccordion.tsx
│   │       ├── ContactForm.tsx
│   │       └── MobileMenu.tsx
│   ├── layouts/
│   │   ├── Base.astro                     # HTML shell, meta, fonts
│   │   └── BlogPost.astro
│   └── styles/
│       └── global.css
└── public/
    ├── favicon.ico
    ├── og-default.png                     # 1200×630px OG image
    └── logo/
        ├── heyjimmi-wordmark.svg
        └── heyjimmi-wordmark-white.svg
```

---

## astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://heyjimmi.com',
  output: 'static',
  integrations: [
    react(),
    tailwind(),
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
});
```

## Content Collection Schema (src/content/config.ts)

```ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    pillar: z.enum(['condominios', 'academias', 'medios-locales', 'tecnologia-pymes', 'casos-de-exito']),
    author: z.string().default('HeyJimmi'),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const clientes = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    industria: z.enum(['condominio', 'academia', 'medio-local', 'otro']),
    ciudad: z.string(),
    logo: z.string().optional(),
    resumen: z.string(),
    resultado: z.string(),
  }),
});

export const collections = { blog, clientes };
```
