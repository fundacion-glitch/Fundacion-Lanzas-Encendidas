import type { Metadata } from "next";
import { InternalHero } from "@/components/internal-hero";
import { MediaGallery } from "@/components/media-gallery";
import { galleryItems, initialGalleryCount } from "@/data/gallery-presentation";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Galería",
  description: "Fotografías y videos del trabajo de Fundación Lanzas Encendidas. Nuestro trabajo en acción.",
  alternates: { canonical: "/galeria" },
  openGraph: {
    title: "Galería | Fundación Lanzas Encendidas",
    description: "Nuestro trabajo en acción. Fotografías y videos de la Fundación.",
    url: `${SITE_URL}/galeria`,
    type: "website",
    images: [{ url: `${SITE_URL}/images/galeria/optimized/gallery-01.webp`, width: 1600, height: 1142 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galería | Fundación Lanzas Encendidas",
    description: "Nuestro trabajo en acción. Fotografías y videos de la Fundación.",
    images: [`${SITE_URL}/images/galeria/optimized/gallery-01.webp`],
  },
};

export default function GaleriaPage() {
  return <>
    <InternalHero eyebrow="Galería" title="Nuestro trabajo en acción" intro="Una mirada a nuestra labor a través de fotografías y videos de la Fundación." />
    <section className="section-pad bg-[#FCFBF8]" aria-label="Fotografías y videos de la Fundación">
      <div className="page-shell"><MediaGallery items={galleryItems} initialCount={initialGalleryCount} /></div>
    </section>
  </>;
}
