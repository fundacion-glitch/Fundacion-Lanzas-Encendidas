import type { Metadata } from "next";
import { SITE_URL, siteConfig } from "@/config/site";

// Only current public pages belong here. Retired projects and API endpoints
// must never become sitemap entries or receive invented project metadata.
export const seoPages = {
  "/": {
    title: "Fundación Lanzas Encendidas | Asistencia social",
    description: "Fundación Lanzas Encendidas brinda asistencia social y apoyo a personas, familias y comunidades en República Dominicana. Conoce nuestra labor y cómo participar.",
  },
  "/nosotros": {
    title: "Nosotros | Fundación Lanzas Encendidas",
    description: "Conoce la misión, visión y valores de Fundación Lanzas Encendidas, dedicada a la asistencia social y al apoyo de poblaciones vulnerables en República Dominicana.",
  },
  "/galeria": {
    title: "Galería | Fundación Lanzas Encendidas",
    description: "Nuestro trabajo en acción: fotografías y videos reales de las jornadas y acciones de Fundación Lanzas Encendidas en apoyo a personas, familias y comunidades.",
  },
  "/participa": {
    title: "Participa | Fundación Lanzas Encendidas",
    description: "Súmate a Fundación Lanzas Encendidas: regístrate como voluntario, consulta nuestros artículos solidarios y conoce cómo apoyar nuestra labor social.",
  },
  "/donar": {
    title: "Donar | Fundación Lanzas Encendidas",
    description: "Conoce cómo apoyar la labor social de Fundación Lanzas Encendidas. Consulta los canales oficiales para coordinar tu aporte y confirmar los datos de donación.",
  },
  "/transparencia": {
    title: "Transparencia | Fundación Lanzas Encendidas",
    description: "Consulta información institucional, resultados documentados de 2021–2026 y áreas de impacto de Fundación Lanzas Encendidas, con evidencias de nuestra labor.",
  },
  "/contacto": {
    title: "Contacto | Fundación Lanzas Encendidas",
    description: "Comunícate con Fundación Lanzas Encendidas por WhatsApp, correo y redes sociales oficiales para consultar sobre donaciones, voluntariado y colaboración.",
  },
  "/privacidad": {
    title: "Política de privacidad | Fundación Lanzas Encendidas",
    description: "Consulta la política de privacidad de Fundación Lanzas Encendidas y la información sobre el uso del sitio y sus canales de comunicación externos.",
  },
} as const;

export type SeoPath = keyof typeof seoPages;
export const allowIndexing = process.env.VERCEL_ENV !== "preview" && process.env.NODE_ENV !== "development";

export function pageMetadata(path: SeoPath): Metadata {
  const page = seoPages[path];
  const image = path === "/galeria"
    ? { url: "/images/galeria/optimized/gallery-01.webp", width: 1600, height: 1142, alt: "Una niña sostiene un regalo junto a varias mujeres" }
    : { url: "/images/home/community-hero.webp", width: 1672, height: 941, alt: "Niñas y una mujer al aire libre durante una actividad de la Fundación" };
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: new URL(path, SITE_URL).href },
    openGraph: {
      type: "website",
      locale: "es_DO",
      siteName: siteConfig.name,
      title: page.title,
      description: page.description,
      url: new URL(path, SITE_URL).href,
      images: [image],
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: [image] },
  };
}

export function institutionalStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NGO",
        "@id": `${SITE_URL}/#organization`,
        name: siteConfig.name,
        url: SITE_URL,
        description: siteConfig.description,
        logo: new URL("/images/brand/logo-color.png", SITE_URL).href,
        email: siteConfig.email,
        sameAs: Object.values(siteConfig.social).filter(Boolean),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: siteConfig.name,
        inLanguage: "es-DO",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}
