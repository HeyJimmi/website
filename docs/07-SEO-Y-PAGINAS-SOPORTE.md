# HeyJimmi — SEO, Páginas de Soporte y Legal

---

## SEO — Configuración global

### Sitemap

`@astrojs/sitemap` genera `sitemap.xml` automáticamente con todas las páginas estáticas.

En `astro.config.mjs` ya está configurado (ver `00-PROJECT-OVERVIEW.md`).

**Páginas excluidas del sitemap:**
- `/api/*`
- Páginas de error (404, 500)

**Priority por tipo de página:**
- `/` → priority 1.0
- `/para/*`, `/demo` → priority 0.9
- `/nosotros`, `/como-funciona`, `/precios`, `/clientes` → priority 0.8
- `/blog/*` → priority 0.7
- `/aviso-de-privacidad`, `/terminos-y-condiciones` → priority 0.3

---

### Robots.txt

```
User-agent: *
Allow: /

Disallow: /api/

Sitemap: https://heyjimmi.com/sitemap-index.xml
```

---

### Schema Organization (global — en Base.astro)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HeyJimmi",
  "url": "https://heyjimmi.com",
  "logo": "https://heyjimmi.com/logo/heyjimmi-wordmark.svg",
  "description": "Estudio de software productizado que construye plataformas digitales a la medida para PyMEs mexicanas.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Puebla",
    "addressRegion": "PUE",
    "addressCountry": "MX"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "hola@heyjimmi.com",
    "availableLanguage": "Spanish"
  },
  "sameAs": [
    "https://instagram.com/conjimmi",
    "https://tiktok.com/@conjimmi",
    "https://x.com/conjimmi"
  ]
}
```

---

### Schema por tipo de página

**Homepage (`/`):** Organization + WebSite + FAQPage

**Páginas verticales (`/para/*`):** Organization + Service

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Plataforma digital para condominios y fraccionamientos",
  "provider": { "@type": "Organization", "name": "HeyJimmi" },
  "areaServed": { "@type": "Country", "name": "México" },
  "description": "Plataforma web personalizada para administradores de condominios y fraccionamientos.",
  "offers": {
    "@type": "Offer",
    "price": "2500",
    "priceCurrency": "MXN",
    "priceSpecification": { "@type": "RecurringCharge", "billingPeriod": "Month" }
  }
}
```

**Blog posts:** Article + BreadcrumbList

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Título del artículo]",
  "author": { "@type": "Organization", "name": "HeyJimmi" },
  "publisher": { "@type": "Organization", "name": "HeyJimmi", "logo": "..." },
  "datePublished": "[publishDate]",
  "description": "[description]"
}
```

---

### OG Image global

Archivo: `/public/og-default.png`
Dimensiones: 1200 × 630px
Diseño: fondo Carbón (#1C1C1E), wordmark HeyJimmi en Crema centrado, tagline en Sol debajo.

Cada página puede tener su propia OG image pasada al `SEOHead` component. Si no se pasa, usa `/og-default.png`.

---

## `/clientes`

**Prioridad:** P2

**Title tag:**
```
Clientes — HeyJimmi
```

**Meta description:**
```
Casos de éxito de HeyJimmi. Plataformas activas para condominios, academias y medios locales en México.
```

**Headline:**
```
Plataformas reales.
Resultados reales.
```

**Subtexto:**
```
No somos una agencia que muestra mockups. Estos son negocios activos
usando las plataformas que construimos.
```

---

### `/clientes/lomas-news`

**Title tag:**
```
LO+ News — Caso de éxito | HeyJimmi
```

**H1:**
```
Cómo Lomas de Angelópolis conectó a 75,000 vecinos con una sola plataforma.
```

**Copy del caso:**
```
Lomas de Angelópolis es uno de los fraccionamientos más grandes de Puebla.
Más de 24,500 hogares. 150+ clusters. Entre 75,000 y 100,000 residentes.

La administración gestionaba todo por WhatsApp, grupos de Facebook y
correos electrónicos que nadie leía. Los comunicados urgentes se perdían
entre memes. Las reservas de amenidades eran un caos de mensajes directos.

Construimos LO+ News — la plataforma digital de Lomas de Angelópolis.

Qué incluye:
· Noticias y comunicados del fraccionamiento
· Reservas de amenidades en tiempo real
· Directorio vecinal
· Notificaciones push a todos los residentes
· Módulo SOS para emergencias
· Directorio de negocios locales
· Marketplace vecinal

La plataforma es accesible en lomasnews.mx y como Progressive Web App
en iOS y Android.
```

**CTA:**
```
¿Tu fraccionamiento necesita algo similar?
```
→ `Agenda una demo →` → `/demo`

---

### `/clientes/academia-latinoamericana`

**Title tag:**
```
Academia Latinoamericana Antienvejecimiento — Caso de éxito | HeyJimmi
```

**H1:**
```
La plataforma de membresías que necesitaba Academia Latinoamericana Antienvejecimiento.
```

**Copy del caso:**
```
Academia Latinoamericana Antienvejecimiento es una academia de educación
médico-estética con una propuesta clara: membresías mensuales para
profesionales de la salud que quieren especializarse en medicina
antienvejecimiento y estética.

El reto: gestionar membresías, acceso a contenido, pagos y comunicación
con alumnos sin depender de plataformas que cobran comisión sobre cada venta.

Construimos su plataforma propia: membresías, cursos en línea, pagos
integrados sin comisiones de plataforma, y un CRM de alumnos completo.
Todo bajo la marca de la academia.
```

**CTA:**
```
¿Tu academia necesita algo similar?
```
→ `Agenda una demo →` → `/demo`

---

## `/aviso-de-privacidad`

**Prioridad:** Legal — no hay brief de contenido de marketing. Usar un aviso de privacidad estándar conforme a la LFPDPPP (Ley Federal de Protección de Datos Personales en Posesión de los Particulares).

**Datos mínimos requeridos:**
- Nombre del responsable: Orizaba Holdings LLC / Happy Software S.A. de C.V.
- Domicilio
- Datos que se recaban (nombre, email, teléfono, datos de negocio)
- Finalidades del tratamiento
- Derechos ARCO (Acceso, Rectificación, Cancelación, Oposición)
- Contacto para ejercer derechos: privacidad@heyjimmi.com
- Fecha de última actualización

**Nota:** Contratar a un abogado mexicano para redactar el aviso final. El equipo de HeyJimmi provee la estructura; el texto legal lo redacta el abogado.

---

## `/terminos-y-condiciones`

**Prioridad:** Legal — igual que el aviso de privacidad.

**Secciones mínimas:**
- Objeto del sitio y los servicios
- Uso aceptable del sitio
- Propiedad intelectual (el contenido del sitio es de HeyJimmi)
- Limitación de responsabilidad
- Ley aplicable y jurisdicción (leyes mexicanas, tribunales de Puebla)
- Contacto: legal@heyjimmi.com

---

## Páginas futuras (P3 — post-lanzamiento)

### `/ciudades/[ciudad]`

Páginas de SEO local. Una por ciudad objetivo.

**Ciudades a crear:**
- `/ciudades/puebla`
- `/ciudades/cdmx`
- `/ciudades/guadalajara`
- `/ciudades/monterrey`

**Template de ciudad:**

Title: `Software para PyMEs en [Ciudad] — HeyJimmi`

H1: `La plataforma digital para negocios en [Ciudad].`

Copy: adaptar el manifiesto y las verticales a la ciudad específica. Mencionar referencias locales cuando aplique.

---

### `/vs/[alternativa]`

Páginas comparativas para tráfico de intención decisional alta.

**Páginas a crear:**
- `/vs/desarrollo-a-medida`
- `/vs/software-generico`
- `/vs/freelancer`
- `/vs/wordpress`

**Template de comparativa:**

Title: `HeyJimmi vs [Alternativa]: ¿Cuál le conviene a tu negocio?`

Formato: tabla comparativa honesta + pros/contras de cada opción + cuándo HeyJimmi tiene sentido y cuándo no.

**Nota de tono:** Estas páginas son honestas — no destruyen a la competencia. Si para alguien el freelancer o WordPress es la mejor opción, se dice. Genera más confianza que un ataque descarado.
