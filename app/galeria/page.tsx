import { pageMetadata } from "@/lib/seo";
import { InternalHero } from "@/components/internal-hero";
import { MediaGallery } from "@/components/media-gallery";
import { galleryItems, initialGalleryCount } from "@/data/gallery-presentation";

export const metadata = pageMetadata("/galeria");

export default function GaleriaPage() {
  return <>
    <InternalHero eyebrow="Galería" title="Nuestro trabajo en acción" intro="Una mirada a nuestra labor a través de fotografías y videos de la Fundación." />
    <section className="section-pad bg-[#FCFBF8]" aria-label="Fotografías y videos de la Fundación">
      <div className="page-shell"><MediaGallery items={galleryItems} initialCount={initialGalleryCount} /></div>
    </section>
  </>;
}
