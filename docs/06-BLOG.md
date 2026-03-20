# HeyJimmi — Blog y Estrategia de Contenido
**`/blog` · Motor SEO principal**

---

## Objetivo del blog

El blog captura tráfico de intención informacional — personas que todavía no saben que necesitan una plataforma personalizada, pero están buscando respuestas a problemas reales. Un administrador que busca "cómo gestionar reservas de amenidades" está a un artículo de distancia de conocer HeyJimmi.

Cada artículo tiene un CTA claro al vertical correspondiente o a `/demo`.

---

## Estructura de URLs

```
/blog                           → Índice de todos los artículos
/blog/[slug]                    → Artículo individual
```

No hay sub-carpetas por pilar en la URL — el pilar vive en el frontmatter y en los filtros de la página de índice.

---

## Content Collections — Frontmatter del blog

```yaml
---
title: "Cómo digitalizar la administración de tu condominio en 2025"
description: "Guía práctica para administradores que quieren dejar de depender de WhatsApp y Excel para gestionar su fraccionamiento."
publishDate: 2025-01-15
pillar: condominios          # condominios | academias | medios-locales | tecnologia-pymes | casos-de-exito
author: "HeyJimmi"
image: "/blog/digitalizar-condominio.jpg"    # opcional
draft: false
---
```

---

## Página índice del blog (`/blog`)

**Title tag:**
```
Blog — Software y tecnología para PyMEs mexicanas | HeyJimmi
```

**Meta description:**
```
Artículos sobre tecnología para condominios, academias y medios locales en México. Guías prácticas sin jerigonza técnica.
```

**Headline:**
```
Ideas que le sirven a tu negocio.
```

**Subtexto:**
```
Sin jerigonza tech. Sin teoría que no aplica. Solo lo que funciona
para negocios como el tuyo.
```

**Filtros de pilar** (pills clickables):
```
Todos · Condominios · Academias · Medios locales · Tech para PyMEs · Casos de éxito
```

---

## Los 5 pilares y artículos semilla

### Pilar 1 — Condominios

**URL pattern:** `/blog/[slug]` con `pillar: condominios`

**Artículos a crear (slugs y títulos):**

| Slug | Título |
|------|--------|
| `como-digitalizar-administracion-condominio` | Cómo digitalizar la administración de tu condominio en 2025 |
| `software-reservas-areas-comunes-fraccionamiento` | El mejor software para reservas de áreas comunes en fraccionamientos |
| `comunicacion-vecinal-digital` | Cómo mejorar la comunicación vecinal sin depender de WhatsApp |
| `app-para-fraccionamientos-puebla` | App para fraccionamientos en Puebla: opciones y costos en 2025 |
| `cuotas-mantenimiento-condominio-digital` | Cómo gestionar cuotas de mantenimiento sin papel ni Excel |
| `directorio-vecinal-en-linea` | Por qué tu fraccionamiento necesita un directorio vecinal digital |

---

### Pilar 2 — Academias

**URL pattern:** `/blog/[slug]` con `pillar: academias`

| Slug | Título |
|------|--------|
| `plataforma-academia-en-linea-mexico` | Cómo tener tu propia plataforma de academia en línea en México |
| `como-cobrar-membresias-academia` | Cómo cobrar membresías en tu academia sin perder el 30% en comisiones |
| `crm-para-academias-pequenas` | CRM para academias pequeñas: qué necesitas y qué no |
| `digitalizar-academia-guia-practica` | Guía práctica para digitalizar tu academia en 2025 |
| `hotmart-vs-plataforma-propia-academia` | Hotmart vs plataforma propia: ¿qué le conviene a tu academia? |
| `academia-online-primeros-pasos` | Primeros pasos para lanzar tu academia en línea en México |

---

### Pilar 3 — Medios locales

**URL pattern:** `/blog/[slug]` con `pillar: medios-locales`

| Slug | Título |
|------|--------|
| `cms-para-periodico-local-mexico` | El CMS correcto para un periódico local en México |
| `como-monetizar-medio-digital-local` | Cómo monetizar tu medio digital local más allá de los banners |
| `directorio-negocios-para-medio-local` | Por qué un directorio de negocios puede ser tu mejor fuente de ingresos |
| `wordpress-vs-plataforma-propia-medio` | WordPress vs plataforma propia: la decisión que define tu medio |
| `newsletter-medios-locales-mexico` | Newsletters para medios locales: cómo construir una lista que valga dinero |

---

### Pilar 4 — Tech para PyMEs (sin tecnicismos)

**URL pattern:** `/blog/[slug]` con `pillar: tecnologia-pymes`

Este pilar captura tráfico más amplio. Son artículos para cualquier dueño de PyME que está considerando software, no solo los tres verticales.

| Slug | Título |
|------|--------|
| `cuanto-cuesta-desarrollo-web-mexico` | ¿Cuánto cuesta el desarrollo web en México en 2025? La guía honesta |
| `software-a-medida-vs-generico-pyme` | Software a la medida vs software genérico: cuál le conviene a tu PyME |
| `por-que-no-necesitas-un-erp` | Por qué tu PyME probablemente no necesita un ERP |
| `cuando-contratar-software-propio-negocio` | ¿Cuándo vale la pena pagar por software propio para tu negocio? |
| `whatsapp-business-no-es-suficiente` | Por qué WhatsApp Business ya no es suficiente para tu negocio |
| `pymes-digitales-puebla-casos-reales` | PyMEs digitales en Puebla: casos reales de negocios que sí lo lograron |

---

### Pilar 5 — Casos de éxito

**URL pattern:** `/blog/[slug]` con `pillar: casos-de-exito`

Artículos narrativos sobre los clientes activos. Formato: problema → solución → resultado.

| Slug | Título |
|------|--------|
| `lomas-de-angelopolis-plataforma-vecinal` | Cómo Lomas de Angelópolis digitalizó la gestión de 24,500 hogares |
| `academia-antienvejecimiento-plataforma-membresias` | De Excel a plataforma: el caso de Academia Latinoamericana Antienvejecimiento |

---

## Estructura de un artículo de blog

### Layout del artículo (`/blog/[slug]`)

**Title tag:**
```
[Título del artículo] | HeyJimmi
```

**Estructura de la página:**
1. Eyebrow: pilar en pill (ej. "Condominios")
2. H1: título del artículo
3. Meta: fecha · autor · tiempo de lectura estimado
4. Imagen de portada (opcional — si no hay imagen, no poner placeholder)
5. Cuerpo del artículo en MDX
6. CTA inline a mitad del artículo (relacionado con el vertical del pilar)
7. CTA final al terminar el artículo
8. "Artículos relacionados" — 3 del mismo pilar

### CTA inline (a mitad del artículo)

Bloque Crema con borde Sol, insertado después del segundo o tercer H2:

```
¿Tienes un [condominio / academia / medio local]?
HeyJimmi construye plataformas a la medida desde $2,500 MXN/mes.
[Agenda una demo gratis →]
```

### CTA final (al terminar el artículo)

Bloque Carbón fondo:
```
¿Quieres que tu negocio tenga su propia plataforma?
Platícanos. La primera llamada es gratis.
[Agenda una demo →]
```

---

## Template MDX de artículo de blog

Guardar en `src/content/blog/[slug].mdx`:

```mdx
---
title: "Cómo digitalizar la administración de tu condominio en 2025"
description: "Guía práctica para administradores que quieren dejar de depender de WhatsApp y Excel para gestionar su fraccionamiento."
publishDate: 2025-01-15
pillar: condominios
author: "HeyJimmi"
draft: false
---

## El problema con WhatsApp y los grupos de vecinos

[Cuerpo del artículo en markdown. Párrafos cortos. Un H2 cada 3-4 párrafos.
Listas cuando ayuden a la lectura. Sin jerigonza tech. Tuteo.]

---

## Conclusión

[Párrafo final que lleva naturalmente al CTA]
```

---

## Plan editorial — Primer trimestre

**Meta:** 2 artículos por semana. 1 del pilar principal (condominios o academias), 1 de tech para PyMEs.

**Semana 1:**
- `como-digitalizar-administracion-condominio`
- `cuanto-cuesta-desarrollo-web-mexico`

**Semana 2:**
- `plataforma-academia-en-linea-mexico`
- `software-a-medida-vs-generico-pyme`

**Semana 3:**
- `cms-para-periodico-local-mexico`
- `cuando-contratar-software-propio-negocio`

**Semana 4:**
- `comunicacion-vecinal-digital`
- `por-que-no-necesitas-un-erp`

*(Continuar el patrón alternando verticales)*
