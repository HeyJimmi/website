# HeyJimmi — Componentes Globales
**Navbar, Footer, y componentes reutilizables**

---

## Navbar (src/components/astro/Navbar.astro)

### Comportamiento
- Sticky en la parte superior
- Fondo Crema por defecto
- Al scrollear más de 60px: `backdrop-blur-sm bg-crema/90 shadow-sm` (transición suave)
- En mobile: hamburger menu — el menú se abre como drawer o dropdown full-width
- El botón CTA se mantiene visible en mobile como botón flotante fijo en la parte inferior de la pantalla

### Estructura desktop

```
[HeyJimmi wordmark]   [Nosotros] [Cómo funciona] [Precios] [Blog]   [Agenda tu demo →]
```

### Estructura mobile

```
[HeyJimmi wordmark]   [☰]
---
  [Nosotros]
  [Cómo funciona]
  [Precios]
  [Blog]
  [Agenda tu demo →]  ← botón Guayaba
```

Además: botón flotante fijo en la parte inferior de la pantalla en mobile:
```
[━━━━━━━ Agenda tu demo ━━━━━━━]
```
Fondo Guayaba, ancho completo, altura 52px, safe-area-bottom para notch.

### Links del navbar

| Label          | URL              |
|----------------|------------------|
| Nosotros       | /nosotros        |
| Cómo funciona  | /como-funciona   |
| Precios        | /precios         |
| Blog           | /blog            |
| Agenda tu demo | /demo (botón CTA)|

### Copy del CTA

```
Agenda tu demo
```

---

## Footer (src/components/astro/Footer.astro)

### Layout
4 columnas en desktop. 2 columnas en tablet. 1 columna en mobile. Fondo Carbón. Texto Crema.

### Columna 1 — Marca
```
HeyJimmi
La app de tu negocio, sin complicaciones.

Instagram: @conjimmi
TikTok: @conjimmi
X: @conjimmi
```

### Columna 2 — Para quién
```
Para quién
/para/condominios → Condominios y fraccionamientos
/para/academias → Academias y escuelas
/para/medios-locales → Medios locales
```

### Columna 3 — Empresa
```
Empresa
/nosotros → Nosotros
/como-funciona → Cómo funciona
/precios → Precios
/clientes → Clientes
```

### Columna 4 — Blog
```
Blog
/blog → Todos los artículos
(últimos 3 posts dinámicos desde content collections)
```

### Barra inferior
```
© 2025 Orizaba Holdings LLC · /aviso-de-privacidad · /terminos-y-condiciones
```
Borde superior sutil `border-t border-crema/10`.

---

## Base Layout (src/layouts/Base.astro)

```astro
---
import SEOHead from '../components/astro/SEOHead.astro';
import Navbar from '../components/astro/Navbar.astro';
import Footer from '../components/astro/Footer.astro';
import '../styles/global.css';

interface Props {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  schema?: object;
}

const props = Astro.props;
const siteUrl = 'https://heyjimmi.com';

// Organization schema siempre presente
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HeyJimmi",
  "url": siteUrl,
  "logo": `${siteUrl}/logo/heyjimmi-wordmark.svg`,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Puebla",
    "addressCountry": "MX"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "hola@heyjimmi.com"
  },
  "sameAs": [
    "https://instagram.com/conjimmi",
    "https://tiktok.com/@conjimmi",
    "https://x.com/conjimmi"
  ]
};
---

<!DOCTYPE html>
<html lang="es-MX">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

    <!-- Fonts preload -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />

    <SEOHead {...props} />

    <!-- Base org schema on every page -->
    <script type="application/ld+json" set:html={JSON.stringify(orgSchema)} />
  </head>
  <body>
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />

    <!-- Fade-in observer -->
    <script>
      const observer = new IntersectionObserver(
        (entries) => entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        }),
        { threshold: 0.08 }
      );
      document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    </script>
  </body>
</html>
```

---

## FAQ Accordion (src/components/react/FAQAccordion.tsx)

Interactive island. Receives array of Q&A pairs. One open at a time.

```tsx
'use client';
import { useState } from 'react';

interface FAQItem {
  pregunta: string;
  respuesta: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[rgba(28,28,30,0.1)]">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-start gap-4 py-5 text-left"
          >
            <span className="font-sans font-medium text-body-md text-carbon">
              {item.pregunta}
            </span>
            <span className="text-gris mt-0.5 flex-shrink-0 text-lg leading-none">
              {open === i ? '−' : '+'}
            </span>
          </button>
          {open === i && (
            <p className="font-sans text-body-md text-gris pb-5 pr-8 leading-relaxed">
              {item.respuesta}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
```

---

## Mobile Menu (src/components/react/MobileMenu.tsx)

```tsx
'use client';
import { useState } from 'react';

const links = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Cómo funciona', href: '/como-funciona' },
  { label: 'Precios', href: '/precios' },
  { label: 'Blog', href: '/blog' },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 text-carbon"
        aria-label="Menú"
      >
        {open ? '✕' : '☰'}
      </button>

      {open && (
        <div className="fixed inset-0 top-16 bg-crema z-50 flex flex-col p-6 md:hidden">
          <nav className="flex flex-col gap-6 flex-1">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-fraunces text-2xl text-carbon hover:text-guayaba transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="/demo"
            className="w-full text-center bg-guayaba text-white font-sans font-medium py-4 rounded-btn text-body-md"
          >
            Agenda tu demo
          </a>
        </div>
      )}
    </>
  );
}
```
