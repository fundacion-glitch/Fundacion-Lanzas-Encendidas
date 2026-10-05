export type SolidarityArticle = {
  id: string;
  name: string;
  description: string;
  image: { src: string; alt: string; isPlaceholder: boolean; caption?: string };
  // Populate only with approved public information when it exists.
  price?: string;
  status?: string;
};

// Product visualizations generated from public/images/galeria/fotos/MERCH.jpg.
// These are not documentary photographs or confirmation of product availability.
export const solidarityArticles: SolidarityArticle[] = [
  {
    id: "poloshirts",
    name: "Poloshirts",
    description: "Una forma de sumarte a nuestra misión y apoyar el trabajo social de la Fundación.",
    image: {
      src: "/images/merch/poloshirt.webp",
      alt: "Visualización de una camiseta blanca de cuello redondo con el logotipo de Fundación Lanzas Encendidas",
      isPlaceholder: false,
    },
  },
  {
    id: "gorras",
    name: "Gorras",
    description: "Otra forma de contribuir a nuestros proyectos, campañas y casos de asistencia.",
    image: {
      src: "/images/merch/gorra.webp",
      alt: "Visualización de una gorra blanca con el símbolo rojo y dorado de Fundación Lanzas Encendidas",
      isPlaceholder: false,
    },
  },
];

export const solidarityArticlesInquiry =
  "Hola, quisiera información sobre los artículos solidarios de Fundación Lanzas Encendidas.";
