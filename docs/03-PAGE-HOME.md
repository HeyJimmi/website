# HeyJimmi — Página de Inicio (`/`)
**Prioridad P1 · Lanzamiento · La página más importante del sitio**

---

## SEO

**Title tag:**
```
HeyJimmi — Software a la medida para PyMEs mexicanas
```

**Meta description:**
```
Tu negocio no necesita software masivo ni agencias caras. HeyJimmi construye plataformas digitales personalizadas desde $2,500 MXN/mes, sin costo inicial.
```

**Canonical:** `https://heyjimmi.com/`

**Keywords primarias:** software para pymes México · plataforma digital para negocios · desarrollo web para pymes · app para mi negocio México · software a la medida Puebla

**JSON-LD adicional en esta página:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "HeyJimmi",
  "url": "https://heyjimmi.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://heyjimmi.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

---

## Objetivo de la página

La home no vende un producto — vende un punto de vista. El visitante tiene que leerla y pensar "estos cuates entienden mi problema" antes de preguntar el precio.

- **Conversión primaria:** clic en "Agenda una demo gratis" → `/demo`
- **Conversión secundaria:** clic en "Escríbenos por WhatsApp"
- **Conversión terciaria:** explorar una vertical `/para/*`

---

## Estructura — 8 Secciones

---

### S1 · NAVBAR
*(Ver 02-GLOBAL-COMPONENTS.md)*

---

### S2 · HERO — Headline + Manifiesto

**Diseño:** Fondo Crema. Una línea horizontal Sol como acento sobre el eyebrow. El texto es el diseño. Sin imágenes, sin ilustraciones.

**Layout:** Centrado. `max-w-prose-narrow mx-auto`. Padding generoso arriba y abajo (`pt-24 pb-16 md:pt-32 md:pb-24`).

#### Eyebrow
```
Software a la medida · Desde $2,500 MXN/mes
```
Estilo: `font-sans font-medium text-label uppercase tracking-widest text-gris`

#### H1 — Fraunces, dos líneas
```
Tu negocio merece
su propia plataforma.
```
Estilo: `font-fraunces font-semibold text-display-xl text-carbon text-balance`

Nota de implementación: "su propia plataforma." va en la segunda línea visualmente. En mobile puede fluir naturalmente.

#### Subheadline
```
Construimos la app de tu negocio en 4 semanas, sin costo inicial.
Software que se adapta a ti, no al revés.
```
Estilo: `font-sans text-body-lg text-gris max-w-md`

#### CTAs

**Primario (Guayaba):**
```
Agenda una demo gratis
```
Link: `/demo`

**Secundario (Carbón outline):**
```
Ver cómo funciona ↓
```
Link: `#como-funciona` (anchor scroll a S5)

---

### S3 · EL MANIFIESTO

Inmediatamente debajo de los CTAs, separado por un `<hr>` fino en color Sol.

**Diseño:**
- Fondo: bloque Carbón (`bg-carbon rounded-card`)
- Texto: Crema (`text-crema`)
- Tipografía: Fraunces weight 300
- Padding: `p-10 md:p-16`
- Max width: `max-w-prose-narrow mx-auto`
- Las frases clave en Sol bold (ver marcado abajo)

**Copy completo del manifiesto:**

```
Tu negocio no necesita un ERP.

No necesita una suite de 300 módulos que te tardaste seis meses en
implementar y que nadie en tu equipo sabe usar. No necesita a una agencia
con 40 personas, presentaciones en PowerPoint de 90 diapositivas y una
cuenta de cobro que parece el PIB de un municipio.

Necesita exactamente lo que necesita. Ni más, ni menos.

Eso es lo que hacemos.

Somos un equipo pequeño — deliberadamente pequeño — que construye
plataformas digitales a la medida para negocios como el tuyo.
Condominios, academias, medios locales, empresas que venden algo real
a personas reales.

Sin costo inicial. Sin sorpresas en la factura.
Sin reuniones para hablar de las reuniones.

$2,500 pesos al mes, IVA incluido. Tu plataforma lista en cuatro semanas.
Y si en algún momento no te sirve, te vas sin penalización.

Creemos que la tecnología no debería ser privilegio de las empresas
grandes. Que una PyME en Puebla merece las mismas herramientas que una
corporación en la Ciudad de México — sin pagar lo mismo que ellos.

No somos para todos. Si buscas cientos de funciones que quizás algún día
uses, hay muchas opciones por ahí. Pero si quieres algo que resuelva tu
problema específico, que funcione desde el primer día y que crezca
contigo — aquí estamos.

— Hector y el equipo de HeyJimmi
```

**Frases en Sol bold (usar `<strong class="text-sol">`):**
- "exactamente lo que necesita"
- "deliberadamente pequeño"
- "$2,500 pesos al mes, IVA incluido"
- "tu problema específico"

**Firma:** `— Hector y el equipo de HeyJimmi` en Fraunces italic, tamaño más pequeño, color `text-crema/60`.

**Nota de implementación:** La carta debe aparecer completa. Sin "leer más" / "ver todo". Sin truncar. El lector correcto la termina.

---

### S4 · PRUEBA SOCIAL MÍNIMA

**Diseño:** Fondo Crema. Centrado. Sin ostentosidad — esta sección es pequeña.

**Headline de contexto:**
```
Plataformas activas hoy mismo en Puebla
```
Estilo: `font-sans text-label text-gris uppercase tracking-widest`

**Logos a mostrar:**
- LO+ News (lomasnews.mx)
- Academia Latinoamericana Antienvejecimiento

Logos en escala de grises. Al hover: color completo. Cada logo linkea a su case study en `/clientes/*`.

**Cifra de apoyo (cuando esté confirmada):**
```
Más de 75,000 vecinos conectados a través de nuestras plataformas
```
Estilo: `font-fraunces font-semibold text-display-md text-carbon`

**Nota:** Solo usar cifras verificables. Si no están confirmadas, omitir el número y solo mostrar logos.

---

### S5 · PARA QUIÉN ES HEYJIMMI

**ID de anchor:** `id="para-quien"`

**Headline de sección:**
```
¿A qué tipo de negocio le hacemos plataformas?
```
Estilo: `font-fraunces font-semibold text-display-md text-carbon`

**Subtexto:**
```
No somos un software genérico. Cada plataforma se construye
para un tipo específico de negocio.
```
Estilo: `font-sans text-body-md text-gris`

**Grid:** 3 columnas en desktop, 1 en mobile. Cada card linkea a su vertical.

---

#### Card 1 — Condominios y fraccionamientos

**URL:** `/para/condominios`

**Eyebrow:**
```
Para administradores
```

**Título:**
```
Condominios y fraccionamientos
```

**Descripción:**
```
Reservas de amenidades, directorio vecinal, comunicados push y mucho más.
Para administradores que quieren dejar de depender de WhatsApp y grupos
de chat para gestionar su fraccionamiento.
```

**CTA de card:**
```
Ver plataforma →
```

---

#### Card 2 — Academias y escuelas

**URL:** `/para/academias`

**Eyebrow:**
```
Para directores
```

**Título:**
```
Academias y escuelas
```

**Descripción:**
```
Membresías, cursos en línea, pagos integrados y CRM de alumnos. Para
directores que quieren crecer su academia sin contratar más personal
administrativo.
```

**CTA de card:**
```
Ver plataforma →
```

---

#### Card 3 — Medios de comunicación locales

**URL:** `/para/medios-locales`

**Eyebrow:**
```
Para directores de medios
```

**Título:**
```
Medios de comunicación locales
```

**Descripción:**
```
CMS editorial, directorio de negocios, publicidad digital y analytics.
Para directores que quieren un medio digital profesional — no un blog
mal mantenido.
```

**CTA de card:**
```
Ver plataforma →
```

---

### S6 · CÓMO FUNCIONA (resumen)

**ID de anchor:** `id="como-funciona"`

**Headline de sección:**
```
De cero a tu plataforma en 4 semanas.
```

**Subtexto:**
```
Sin magia. Sin promesas vacías. Solo un proceso claro que hemos
repetido con cada cliente.
```

**4 pasos — layout:** numerados, en columna o grid 2×2 en desktop.

---

**Paso 1 — Platicamos**
```
Una llamada de 30 minutos. Entendemos tu negocio, te mostramos lo
que hemos construido, y te decimos honestamente si podemos ayudarte.
Sin compromiso y sin venderte nada que no necesites.
```

**Paso 2 — Proponemos**
```
Te mandamos una propuesta con alcance, tiempos y precio. Sin letra
chica. Sin "más adelante te cobramos por esto". Lo que dice el
documento es exactamente lo que pagas.
```

**Paso 3 — Construimos**
```
Tu plataforma en cuatro semanas. Con actualizaciones reales durante
el proceso — no silencio radiofónico y una sorpresa al final.
```

**Paso 4 — Crecemos juntos**
```
$2,500 al mes, IVA incluido. Soporte, mantenimiento y nuevas funciones
conforme las necesitas. Sin contratos trampa y sin costos ocultos.
```

**CTA debajo de los pasos:**
```
Agenda tu llamada →
```
Link: `/demo`

**Link secundario:**
```
Ver todos los detalles de cómo funciona →
```
Link: `/como-funciona`

---

### S7 · PRECIO — La tarjeta de precio

**Headline de sección:**
```
Un precio. Sin sorpresas.
```

**Subtexto:**
```
Las agencias tradicionales cobran entre $80,000 y $300,000 MXN solo
por construir la plataforma. Eso sin contar el mantenimiento anual.
Nosotros hacemos algo diferente.
```

**La tarjeta central (fondo blanco, borde Carbón):**

Precio:
```
$2,500 MXN
por mes, IVA incluido
```

Sub del precio:
```
Sin costo de inicio · Contrato mínimo 24 meses
```

**Qué incluye (lista):**
```
✓ Plataforma personalizada para tu negocio
✓ Hosting e infraestructura incluidos
✓ Mantenimiento y actualizaciones de seguridad
✓ Soporte directo con el equipo
✓ Nuevas funciones conforme las necesitas
```

**Lo que no existe (lista negativa):**
```
✗ Setup fee o costo de inicio
✗ Costo por número de usuarios
✗ "Módulos adicionales" que te vendan después
✗ Sorpresas en la factura
```

**Copy de contexto debajo de la tarjeta:**
```
Empiezas a pagar cuando tu plataforma ya está lista y funcionando.
No antes.
```

**Link:**
```
Ver todos los detalles de precios →
```
Link: `/precios`

---

### S8 · FAQ — Preguntas frecuentes

**JSON-LD adicional (FAQPage schema):**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué pasa si quiero cancelar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El contrato mínimo es 24 meses. Si cancelas antes, no hay penalización económica — pero pierdes acceso a la plataforma, ya que el código y la infraestructura son de HeyJimmi. Tus datos siempre son tuyos: te los entregamos en el formato que necesites en cualquier momento."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo pedir funciones específicas para mi negocio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, ese es exactamente el punto. Cada plataforma se construye según lo que tu negocio necesita hoy. Si en el camino necesitas algo nuevo, lo platicamos y lo integramos. No estás comprando un producto de catálogo — estás contratando un equipo que construye lo que tú necesitas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tarda en estar lista mi plataforma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cuatro semanas desde que firmamos. Si hay un retraso de nuestra parte, no te cobramos esas semanas. El plazo es nuestro compromiso, no una estimación optimista."
      }
    },
    {
      "@type": "Question",
      "name": "¿Necesito saber de tecnología para trabajar con ustedes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para nada. Nosotros hablamos en tu idioma, no en el nuestro. Tu trabajo es describirnos qué necesita tu negocio; el nuestro es construirlo. Nunca te vamos a mandar un documento con siglas que no entiende nadie."
      }
    },
    {
      "@type": "Question",
      "name": "¿Solo trabajan en Puebla?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — trabajamos con negocios en toda la República Mexicana. Puebla es nuestra base, pero hemos entregado plataformas para clientes en otras ciudades y lo hacemos completamente en remoto."
      }
    }
  ]
}
```

**Headline de sección:**
```
Preguntas que nos hacen seguido
```

**Implementar con FAQAccordion.tsx (react island, client:load)**

**Preguntas y respuestas:**

---

**P: ¿Qué pasa si quiero cancelar?**
```
El contrato mínimo es 24 meses. Si cancelas antes, no hay penalización
económica — pero pierdes acceso a la plataforma, ya que el código y la
infraestructura son de HeyJimmi. Tus datos siempre son tuyos: te los
entregamos en el formato que necesites en cualquier momento.
```

**P: ¿Puedo pedir funciones específicas para mi negocio?**
```
Sí, ese es exactamente el punto. Cada plataforma se construye según lo
que tu negocio necesita hoy. Si en el camino necesitas algo nuevo, lo
platicamos y lo integramos. No estás comprando un producto de catálogo
— estás contratando un equipo que construye lo que tú necesitas.
```

**P: ¿Cuánto tarda en estar lista mi plataforma?**
```
Cuatro semanas desde que firmamos. Si hay un retraso de nuestra parte,
no te cobramos esas semanas. El plazo es nuestro compromiso, no una
estimación optimista.
```

**P: ¿Necesito saber de tecnología para trabajar con ustedes?**
```
Para nada. Nosotros hablamos en tu idioma, no en el nuestro. Tu trabajo
es describirnos qué necesita tu negocio; el nuestro es construirlo.
Nunca te vamos a mandar un documento con siglas que no entiende nadie.
```

**P: ¿Solo trabajan en Puebla?**
```
No — trabajamos con negocios en toda la República Mexicana. Puebla es
nuestra base, pero hemos entregado plataformas para clientes en otras
ciudades y lo hacemos completamente en remoto.
```

---

### S9 · CTA FINAL — Cierre de página

**Diseño:** Fondo Sol (`bg-sol`). Texto Carbón. La única sección con fondo de color intenso en la página. Crea contraste visual fuerte al final del scroll.

**Headline:**
```
¿Tu negocio tiene un problema que el software de siempre no resuelve?
```
Estilo: `font-fraunces font-semibold text-display-md text-carbon`

**Subheadline:**
```
Cuéntanos. La primera llamada es gratis, sin compromiso, y sin que
nadie te intente vender algo que no necesitas.
```
Estilo: `font-sans text-body-lg text-carbon/80`

**CTA primario (Carbón — porque el fondo es Sol):**
```
Agenda una demo →
```
Link: `/demo`

**CTA secundario:**
```
Escríbenos por WhatsApp
```
Link: `https://wa.me/52XXXXXXXXXX?text=Hola,+quiero+saber+más+sobre+HeyJimmi`

*(Reemplazar XXXXXXXXXX con el número de WhatsApp real)*

**Micro-copy de confianza:**
```
Respondemos en menos de 24 horas · Puebla, México · hola@heyjimmi.com
```
Estilo: `font-sans text-body-sm text-carbon/60`

---

### S10 · FOOTER
*(Ver 02-GLOBAL-COMPONENTS.md)*

---

## Notas de implementación

- Usar `client:load` en FAQAccordion (necesita interactividad inmediata)
- Usar `client:idle` en MobileMenu
- El manifiesto NO necesita un componente React — es HTML estático puro
- La sección S9 (CTA final) puede tener un sutil patrón de puntos o líneas en Sol oscuro como textura de fondo — opcional
- Core Web Vitals objetivo: LCP < 2.5s · CLS < 0.1 · FID < 100ms
- Probar en 375px (iPhone SE) — el manifiesto debe ser legible sin zoom
