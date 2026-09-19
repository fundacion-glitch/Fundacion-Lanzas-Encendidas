import type { Project } from "@/types";

const activityGallery = [
  {
    src: "/images/placeholders/children-learning.png",
    alt: "Imagen conceptual de una actividad educativa comunitaria",
    caption: "Imagen conceptual. Sustituir por fotografía real de la actividad.",
  },
  {
    src: "/images/placeholders/volunteer-packing.png",
    alt: "Imagen conceptual de personas voluntarias preparando ayudas",
    caption: "Imagen conceptual. Sustituir por evidencia real.",
  },
  {
    src: "/images/placeholders/community-service-hero.png",
    alt: "Imagen conceptual de servicio comunitario",
    caption: "Imagen conceptual. Sustituir por fotografía real.",
  },
];

export const projects: Project[] = [
  {
    slug: "batey-cambelaches",
    title: "Jornada en el Batey Cambelaches",
    excerpt:
      "Una actividad de servicio que integró útiles escolares, alimentos, juegos, dinámicas y un mensaje de esperanza.",
    story: [
      "La visita al Batey Cambelaches es la actividad concreta documentada en la guía institucional de la Fundación.",
      "La jornada reunió ayuda práctica y espacios de alegría para la niñez. También se compartió la Palabra de Dios, en coherencia con una fe que se expresa mediante el servicio.",
      "Las imágenes de esta página son conceptuales y serán reemplazadas por fotografías y testimonios reales de la actividad.",
    ],
    category: "Niñez y comunidad",
    location: "Batey Cambelaches, República Dominicana",
    status: "Finalizado",
    date: "Fecha pendiente de confirmar",
    image: "/images/placeholders/children-learning.png",
    imageAlt: "Imagen conceptual de una actividad con niños en comunidad",
    beneficiaries: "Cantidad pendiente de confirmar",
    objective:
      "Acompañar a la comunidad con recursos educativos, alimentos, actividades recreativas y un mensaje de esperanza.",
    results: [
      "Entrega de útiles escolares y alimentos.",
      "Juegos y dinámicas con los niños.",
      "Espacio para compartir la Palabra de Dios.",
    ],
    updates: [
      {
        date: "Fecha pendiente",
        title: "Actividad realizada",
        body: "La guía institucional confirma la realización de la jornada; faltan fecha, cifras y evidencia fotográfica para completar este registro.",
      },
    ],
    gallery: activityGallery,
    isDemo: false,
    sourceNote: "Actividad respaldada por la guía institucional. Cifras y fecha pendientes.",
  },
  {
    slug: "mochilas-con-proposito",
    title: "Mochilas con propósito",
    excerpt:
      "Concepto de campaña para reunir útiles escolares y acompañar a estudiantes al inicio del año escolar.",
    story: [
      "Este proyecto existe únicamente para demostrar cómo se verán las futuras campañas de la Fundación.",
      "Antes de publicarlo como iniciativa real deben confirmarse su alcance, ubicación, presupuesto, calendario y responsables.",
    ],
    category: "Educación",
    location: "Ubicación por confirmar",
    status: "Activo",
    date: "Fecha por confirmar",
    image: "/images/placeholders/children-learning.png",
    imageAlt: "Imagen conceptual de niños participando en una actividad educativa",
    goal: 150000,
    raised: 64500,
    beneficiaries: "Dato de demostración",
    objective: "Ejemplo de estructura para una futura campaña educativa.",
    results: [],
    updates: [],
    gallery: activityGallery,
    isDemo: true,
    sourceNote: "DEMO_PROJECT — contenido y cifras de demostración.",
  },
  {
    slug: "mesa-compartida",
    title: "Mesa compartida",
    excerpt:
      "Concepto de proyecto para canalizar alimentos y artículos básicos hacia familias en situación de vulnerabilidad.",
    story: [
      "Esta ficha demuestra el tratamiento editorial de un proyecto de ayuda esencial.",
      "No corresponde todavía a una campaña oficialmente anunciada por la Fundación.",
    ],
    category: "Ayuda esencial",
    location: "Ubicación por confirmar",
    status: "Próximamente",
    date: "Fecha por confirmar",
    image: "/images/placeholders/volunteer-packing.png",
    imageAlt: "Imagen conceptual de voluntarios preparando paquetes de ayuda",
    goal: 250000,
    raised: 0,
    beneficiaries: "Dato de demostración",
    objective: "Ejemplo de estructura para una futura campaña de ayuda esencial.",
    results: [],
    updates: [],
    gallery: activityGallery,
    isDemo: true,
    sourceNote: "DEMO_PROJECT — contenido y cifras de demostración.",
  },
  {
    slug: "red-de-esperanza",
    title: "Red de esperanza",
    excerpt:
      "Concepto para visualizar una futura red de alianzas comunitarias, empresariales y de fe.",
    story: [
      "Este proyecto ilustra cómo podrían presentarse alianzas que movilicen recursos, capacidades y personas voluntarias.",
      "Su contenido es de demostración y necesita validación institucional antes de publicarse como iniciativa real.",
    ],
    category: "Alianzas",
    location: "República Dominicana",
    status: "Meta alcanzada",
    date: "Fecha por confirmar",
    image: "/images/placeholders/community-service-hero.png",
    imageAlt: "Imagen conceptual de una comunidad organizando ayuda",
    goal: 100000,
    raised: 100000,
    beneficiaries: "Dato de demostración",
    objective: "Ejemplo de estructura para una futura iniciativa de alianzas.",
    results: ["Resultado de demostración."],
    updates: [],
    gallery: activityGallery,
    isDemo: true,
    sourceNote: "DEMO_PROJECT — contenido y cifras de demostración.",
  },
];

export const featuredProjects = projects.slice(0, 3);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string) {
  return projects.filter((project) => project.slug !== slug).slice(0, 3);
}
