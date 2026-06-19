export type ProjectImage = {
  alt: string;
  caption?: string;
  src?: string;
  variant?: 'screen' | 'detail' | 'mobile' | 'brand';
  aspect?: 'wide' | 'square' | 'portrait';
};

export type ProjectResult = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  clientType: string;
  year: string;
  category: 'PyMEs' | 'Educación' | 'Condominios' | 'Medios';
  tags: string[];
  service: string;
  summary: string;
  description: string;
  longDescription: string;
  challenge: string;
  approach: string;
  hero?: ProjectImage;
  gallery: ProjectImage[];
  features: string[];
  goals: string[];
  results: ProjectResult[];
  accent: 'sol' | 'guayaba' | 'aqua' | 'carbon';
  liveUrl?: string;
  caseStudyUrl?: string;
};

const WHATSAPP = 'https://wa.me/5212205421768';

export { WHATSAPP };

export const projects: Project[] = [
  {
    slug: 'the-woods',
    title: 'The Woods',
    client: 'The Woods',
    clientType: 'Materiales arquitectónicos premium · 15 años, 500+ proyectos',
    year: '2025',
    category: 'PyMEs',
    tags: ['Arquitectura', 'Materiales premium', 'Catálogo', 'Sitio web'],
    service: 'Sitio web + catálogo arquitectónico',
    summary:
      'Superficies que respiran elegancia. Un sitio editorial para una marca de madera y materiales arquitectónicos de lujo: catálogo navegable por colección, cotización directa por WhatsApp y filtros por material.',
    description:
      'Superficies que respiran elegancia. Un sitio editorial para una marca de madera y materiales arquitectónicos de lujo, con catálogo por colección y cotización directa por WhatsApp.',
    longDescription:
      'The Woods es una marca poblana de madera y materiales arquitectónicos premium con 15 años en el mercado y más de 500 proyectos entregados en Lomas, La Vista y Zavaleta. Construimos un sitio editorial al nivel de su producto: hero negro sobre crema, tipografía serif, colecciones navegables (muros y revestimientos, pisos interiores, decks y exteriores, carpintería), catálogo filtrable por material y marca, y cotización directa por WhatsApp.',
    challenge:
      'The Woods llevaba años vendiendo proyectos premium con un sitio que no estaba a la altura de su producto. Arquitectos e interioristas pedían un catálogo navegable por colección y material; los clientes finales necesitaban ver casos reales antes de cotizar. Cada cotización seguía moviéndose por WhatsApp sin un sitio que filtrara mejor a los leads serios.',
    approach:
      'Diseñamos un sitio editorial — hero negro sobre crema, serif clásico, fotografía arquitectónica a sangre — que comunica oficio antes de pedir nada. Colecciones por categoría (muros, pisos, decks, carpintería), catálogo filtrable por material y marca, casos de uso por tipo de espacio, y un único punto de contacto: cotización por WhatsApp con contexto pre-llenado del producto.',
    hero: {
      alt: 'Página de inicio de The Woods con el lema "Superficies que respiran elegancia"',
      src: '/projects/the-woods/01-home.png',
      variant: 'screen',
      aspect: 'wide',
    },
    gallery: [
      {
        alt: 'Sección de testimonios con foto editorial de un interior de The Woods',
        caption: 'Testimonios sobre fondo editorial',
        src: '/projects/the-woods/02-testimonial.png',
        variant: 'screen',
        aspect: 'wide',
      },
      {
        alt: 'Hero de la colección de muros con el título "Muros que cuentan historias"',
        caption: 'Colección · Muros',
        src: '/projects/the-woods/03-walls.png',
        variant: 'screen',
        aspect: 'wide',
      },
      {
        alt: 'Casos de uso por tipo de espacio: salas, recámaras, oficinas',
        caption: 'Casos de uso por espacio',
        src: '/projects/the-woods/04-cases.png',
        variant: 'screen',
        aspect: 'wide',
      },
      {
        alt: 'Catálogo de productos con filtros por material, categoría y marca',
        caption: 'Catálogo filtrable',
        src: '/projects/the-woods/05-catalog.png',
        variant: 'screen',
        aspect: 'wide',
      },
    ],
    features: [
      'Colecciones por categoría: muros, pisos, decks, carpintería, marcas',
      'Catálogo filtrable por material (Nogal Americano, Madera Compuesta, WPC, MDF + Fieltro)',
      'Casos de uso por tipo de espacio (salas, recámaras, oficinas)',
      'Cotización directa por WhatsApp con contexto del producto',
      'Diseño editorial: serif clásico, hero negro sobre crema, fotografía a sangre',
      'Responsive de primera clase para arquitectos e interioristas',
    ],
    goals: [
      'Llevar la presencia digital al nivel del producto premium',
      'Convertir tráfico de arquitectos e interioristas en cotizaciones cualificadas',
      'Dejar que la marca filtre a clientes serios antes del primer mensaje',
    ],
    results: [
      { value: '500+', label: 'Proyectos respaldando la marca' },
      { value: '15 años', label: 'De experiencia comunicados con claridad' },
      { value: '4', label: 'Colecciones navegables' },
    ],
    accent: 'carbon',
    liveUrl: 'https://the-woods-landing.vercel.app/',
  },
  {
    slug: 'the-woods-crm',
    title: 'The Woods CRM',
    client: 'The Woods',
    clientType: 'Herramienta interna · materiales arquitectónicos premium',
    year: '2025',
    category: 'PyMEs',
    tags: ['CRM', 'Herramienta interna', 'Gestión de proyectos', 'Operación'],
    service: 'CRM a la medida · gestión integral de operación',
    summary:
      'El sistema operativo del negocio. Un CRM a la medida para The Woods que unifica proyectos, clientes, cotizaciones, catálogo, inventario, pagos y contabilidad en una sola plataforma interna — del primer contacto a la entrega final.',
    description:
      'Un CRM interno a la medida para The Woods: proyectos, clientes, cotizaciones, catálogo, inventario, pagos y contabilidad en una sola plataforma para correr toda la operación del negocio.',
    longDescription:
      'Después de construir el sitio editorial de The Woods, dimos el siguiente paso: digitalizar toda la operación interna. The Woods CRM es una plataforma a la medida que reemplaza hojas de cálculo, chats sueltos y archivos dispersos por un solo lugar. Desde un dashboard de inicio, el equipo gestiona tareas, proyectos, clientes, cotizaciones, expedientes y un inbox unificado; controla pagos, calendario, catálogo, inventario y requisiciones; y cierra el ciclo con técnicos en campo, documentos, KPIs, reportes y contabilidad. Todo conectado: una cotización aprobada se vuelve proyecto, jala material del catálogo e inventario, agenda técnicos y alimenta los reportes financieros sin recapturar nada.',
    challenge:
      'The Woods entrega proyectos premium con muchas piezas en movimiento — materiales, técnicos, cotizaciones, pagos a proveedores — pero la operación vivía en WhatsApp, Excel y la cabeza de unas cuantas personas. La información se perdía entre cotización y entrega, no había visibilidad de inventario ni de la salud financiera de cada proyecto, y escalar significaba más caos, no más control.',
    approach:
      'Diseñamos un CRM a la medida del flujo real del negocio, no un template genérico. Una sola plataforma con módulos conectados: dashboard de inicio, tareas, proyectos, clientes, cotizaciones, expedientes e inbox; pagos, calendario, catálogo, inventario y requisiciones; técnicos, documentos, KPIs, reportes y contabilidad. UI limpia y consistente para que el equipo la adopte sin curva, y datos que fluyen entre módulos para eliminar la doble captura.',
    hero: {
      alt: 'Dashboard de inicio de The Woods CRM con métricas y resumen de la operación',
      src: '/projects/the-woods-crm/01-inicio.png',
      variant: 'screen',
      aspect: 'wide',
    },
    gallery: [
      {
        alt: 'Módulo de proyectos del CRM con listado y estados de avance',
        caption: 'Proyectos · operación central',
        src: '/projects/the-woods-crm/02-proyectos.png',
        variant: 'screen',
        aspect: 'wide',
      },
      {
        alt: 'Módulo de clientes del CRM con directorio y fichas',
        caption: 'Clientes · directorio',
        src: '/projects/the-woods-crm/03-clientes.png',
        variant: 'screen',
        aspect: 'wide',
      },
      {
        alt: 'Catálogo de productos y materiales dentro del CRM',
        caption: 'Catálogo de materiales',
        src: '/projects/the-woods-crm/04-catalogo.png',
        variant: 'screen',
        aspect: 'wide',
      },
      {
        alt: 'Vista de detalle de un producto del catálogo en el CRM',
        caption: 'Catálogo · detalle de producto',
        src: '/projects/the-woods-crm/05-catalogo-detalle.png',
        variant: 'detail',
        aspect: 'wide',
      },
      {
        alt: 'Calendario del CRM con agenda de proyectos y técnicos',
        caption: 'Calendario · agenda',
        src: '/projects/the-woods-crm/06-calendario.png',
        variant: 'screen',
        aspect: 'wide',
      },
      {
        alt: 'Inbox unificado de comunicación dentro del CRM',
        caption: 'Inbox unificado',
        src: '/projects/the-woods-crm/07-inbox.png',
        variant: 'screen',
        aspect: 'wide',
      },
    ],
    features: [
      'Dashboard de inicio con métricas y salud de la operación',
      'Gestión de proyectos, tareas y expedientes conectados',
      'Clientes, cotizaciones e inbox unificado de comunicación',
      'Catálogo de materiales con inventario y requisiciones',
      'Pagos, contabilidad y reportes financieros por proyecto',
      'Calendario y coordinación de técnicos en campo',
      'KPIs y reportes para decisiones con datos reales',
    ],
    goals: [
      'Reemplazar Excel, WhatsApp y archivos sueltos por una sola plataforma',
      'Conectar el ciclo completo: de la cotización a la entrega y la facturación',
      'Dar visibilidad de inventario, técnicos y finanzas en tiempo real',
    ],
    results: [
      { value: '17', label: 'Módulos en una sola plataforma' },
      { value: '1', label: 'Fuente de verdad para toda la operación' },
      { value: '0', label: 'Doble captura entre cotización y entrega' },
    ],
    accent: 'carbon',
  },
  {
    slug: 'academia-medica',
    title: 'ALES · Academia de Excelencia',
    client: 'ALES',
    clientType: 'Institución académica internacional · medicina estética y regenerativa',
    year: '2024',
    category: 'Educación',
    tags: ['Academia médica', 'Educación', 'Publicaciones', 'Internacional'],
    service: 'Plataforma académica internacional + publicaciones clínicas',
    summary:
      'Excelencia en medicina estética. Plataforma editorial-académica para una institución de élite: especialidades fundamentales, publicaciones científicas, alianzas internacionales y suscripción privada para profesionales de la salud.',
    description:
      'Una plataforma editorial-académica para una institución de élite en medicina estética y regenerativa: especialidades, publicaciones científicas y red internacional bajo una sola marca.',
    longDescription:
      'ALES es una academia de excelencia para profesionales médicos que buscan dominar las técnicas más avanzadas en medicina estética, regenerativa y armonización facial con validez internacional. Construimos una plataforma editorial al nivel de la institución: hero con tipografía serif, cuatro especialidades fundamentales (Neurología, Cardiología, Neumología, Ortopedia), biblioteca de publicaciones científicas con filtros por especialidad, mapa de alianzas internacionales en tres continentes y suscripción privada con acceso por sesión.',
    challenge:
      'ALES necesitaba comunicar el nivel real de su institución a profesionales médicos de élite — no solo cursos, también investigación, alianzas internacionales y prestigio académico. Los sitios institucionales genéricos no transmitían esa profundidad: faltaba estructura para publicaciones científicas, especialidades, equipo y red global; y un acceso privado para suscriptores.',
    approach:
      'Diseñamos un sitio con lenguaje editorial — serif clásico, paleta navy y oro champagne, fotografía clínica con respeto — y una arquitectura institucional clara: especialidades como ejes temáticos, publicaciones científicas con filtros, alianzas internacionales con mapa interactivo, equipo, suscripción privada e inicio de sesión. La marca filtra ella sola a los profesionales serios.',
    hero: {
      alt: 'Página de inicio de ALES con el lema "Excelencia en Medicina Estética"',
      src: '/projects/academia-medica/01-home.png',
      variant: 'screen',
      aspect: 'wide',
    },
    gallery: [
      {
        alt: 'Vista de las 4 Especialidades Fundamentales: Neurología, Cardiología, Neumología y Ortopedia',
        caption: 'Especialidades fundamentales',
        src: '/projects/academia-medica/02-especialidades.png',
        variant: 'screen',
        aspect: 'wide',
      },
      {
        alt: 'Sección de publicaciones científicas con filtros por especialidad',
        caption: 'Investigación y publicaciones',
        src: '/projects/academia-medica/03-publicaciones.png',
        variant: 'screen',
        aspect: 'wide',
      },
      {
        alt: 'Página de detalle de la especialidad de Neurología con ejes temáticos',
        caption: 'Especialidad · Neurología',
        src: '/projects/academia-medica/04-neurologia.png',
        variant: 'screen',
        aspect: 'wide',
      },
      {
        alt: 'Mapa interactivo de la presencia internacional de ALES — sede central y 5 aliados en 3 continentes',
        caption: 'Presencia internacional',
        src: '/projects/academia-medica/05-internacional.png',
        variant: 'screen',
        aspect: 'wide',
      },
    ],
    features: [
      'Especialidades fundamentales con ejes temáticos y resultados de aprendizaje',
      'Biblioteca de publicaciones científicas con filtros por especialidad',
      'Mapa interactivo de alianzas internacionales en 3 continentes',
      'Suscripción privada con inicio de sesión para profesionales',
      'Sección de equipo académico e investigadores',
      'Diseño editorial: serif clásico, paleta navy y oro champagne',
    ],
    goals: [
      'Comunicar el nivel real de la institución a profesionales médicos de élite',
      'Posicionar las publicaciones y la red internacional, no solo los cursos',
      'Crear un acceso privado y digno para la membresía de suscriptores',
    ],
    results: [
      { value: '4', label: 'Especialidades fundamentales' },
      { value: '3 continentes', label: 'Red internacional activa' },
      { value: '5+', label: 'Instituciones aliadas' },
    ],
    accent: 'aqua',
    liveUrl: 'https://grace-academia-platform.vercel.app/',
    caseStudyUrl: '/clientes/academia-latinoamericana',
  },
  {
    slug: 'lomas-news',
    title: 'Lomas News',
    client: 'Lomas News',
    clientType: 'Plataforma comunitaria · Lomas de Angelópolis, hasta 100,000 residentes',
    year: '2023',
    category: 'Condominios',
    tags: ['Comunidad', 'Medios locales', 'Marketplace', 'Empleos'],
    service: 'Plataforma comunitaria editorial + marketplace + empleos',
    summary:
      'Tu comunidad, en un solo lugar. La app oficial de residentes de Lomas de Angelópolis: noticias, comunidad, inmobiliaria, bolsa de trabajo, marketplace, reservas y directorio de negocios.',
    description:
      'La app oficial de residentes de Lomas de Angelópolis. Noticias, inmobiliaria, bolsa de trabajo, marketplace, reservas y directorio — todo en un solo lugar.',
    longDescription:
      'Lomas de Angelópolis es uno de los fraccionamientos más grandes de Puebla: 24,500 hogares, 150+ clusters, hasta 100,000 residentes. Construimos Lomas News, la app oficial de residentes: un feed editorial de noticias locales, secciones de comunidad (salud, bienestar, tendencias), inmobiliaria, bolsa de trabajo con filtros profesionales, marketplace vecinal, reservas de canchas, directorio de negocios y newsletter. Cuentas de usuario con verificación de residente, accesible en web y como PWA.',
    challenge:
      'La administración intentaba comunicar a hasta 100,000 residentes con grupos de WhatsApp y Facebook. Los comunicados urgentes se perdían entre memes; las reservas y los anuncios de empleo eran un caos de mensajes directos; los negocios locales no tenían dónde anunciarse formalmente, y los residentes no tenían un lugar único para ver qué pasaba en su comunidad.',
    approach:
      'Construimos una plataforma editorial-comunitaria al nivel de un medio digital: hero con foto del skyline de Lomas, feed de noticias con categorías, sección de inmobiliaria, bolsa de trabajo con filtros por jornada y categoría, marketplace vecinal, reservas de canchas, directorio de negocios y newsletter. Cuentas de usuario con verificación opcional de residente. Una sola URL — y una sola app — para todo.',
    hero: {
      alt: 'Página principal de Lomas News con el lema "Tu comunidad, en un solo lugar"',
      src: '/projects/lomas-news/01-home.png',
      variant: 'screen',
      aspect: 'wide',
    },
    gallery: [
      {
        alt: 'Sección de Noticias con artículo destacado, categorías y newsletter',
        caption: 'Feed editorial · Noticias',
        src: '/projects/lomas-news/02-noticias.png',
        variant: 'screen',
        aspect: 'wide',
      },
      {
        alt: 'Bolsa de Trabajo con filtros por jornada, categoría y rango salarial',
        caption: 'Bolsa de Trabajo',
        src: '/projects/lomas-news/03-empleos.png',
        variant: 'screen',
        aspect: 'wide',
      },
      {
        alt: 'Vista de un artículo editorial individual con hero y autoría',
        caption: 'Lectura · Artículo',
        src: '/projects/lomas-news/04-articulo.png',
        variant: 'screen',
        aspect: 'wide',
      },
      {
        alt: 'Artículos relacionados y formulario de newsletter al pie del artículo',
        caption: 'Relacionados + newsletter',
        src: '/projects/lomas-news/05-newsletter.png',
        variant: 'screen',
        aspect: 'wide',
      },
    ],
    features: [
      'Feed editorial de noticias locales con categorías (Salud, Bienestar, Tendencias)',
      'Inmobiliaria: listados de propiedades en venta y renta',
      'Bolsa de trabajo con filtros por jornada, categoría y rango salarial',
      'Marketplace vecinal abierto a comercios y residentes',
      'Reservas de canchas y amenidades comunes',
      'Directorio de negocios locales',
      'Newsletter por correo y cuentas con verificación de residente',
      'Accesible en web y como PWA',
    ],
    goals: [
      'Unificar comunicación, clasificados y reservas en una sola app',
      'Posicionar el fraccionamiento como una comunidad con su propio medio',
      'Abrir un canal económico para negocios y residentes',
    ],
    results: [
      { value: '100,000', label: 'Residentes potenciales alcanzados' },
      { value: '150+', label: 'Clusters integrados' },
      { value: '6+', label: 'Módulos unificados en una app' },
    ],
    accent: 'sol',
    liveUrl: 'https://lomas-news-web.vercel.app/',
    caseStudyUrl: '/clientes/lomas-news',
  },
 
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 2): Project[] {
  const current = getProjectBySlug(slug);
  if (!current) return projects.slice(0, limit);
  const sameCategory = projects.filter((p) => p.slug !== slug && p.category === current.category);
  const others = projects.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...sameCategory, ...others].slice(0, limit);
}
