import { sitePhotography } from "@/data/site-photography";
import type { Metadata } from "next";
import { Mail, MessageCircle, Share2 } from "lucide-react";
import { InternalHero } from "@/components/internal-hero";
import { OfficialSocialLinks } from "@/components/official-social-links";
import { contactWhatsAppUrl, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Canales de contacto e información institucional de Fundación Lanzas Encendidas.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  const whatsappUrl = contactWhatsAppUrl;
  return (
    <>
      <InternalHero eyebrow="Contacto" title="Conversemos sobre cómo servir juntos." intro="Para donaciones, voluntariado, alianzas o solicitudes de información, utiliza únicamente los canales oficiales publicados aquí." image={sitePhotography.contactHero.src} imageAlt={sitePhotography.contactHero.alt} imagePosition={sitePhotography.contactHero.position} />
      <section className="section-pad bg-[#FCFBF8]">
        <div className="page-shell grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-stone-200 bg-white p-6"><MessageCircle className="size-7 text-[#AF090F]" /><h2 className="mt-5 text-xl font-semibold">WhatsApp</h2>{whatsappUrl ? <a className="text-link mt-4" href={whatsappUrl} target="_blank" rel="noreferrer">Abrir conversación</a> : <p className="mt-3 text-sm leading-6 text-stone-500">Número oficial pendiente de configurar.</p>}</article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6"><Mail className="size-7 text-[#AF090F]" /><h2 className="mt-5 text-xl font-semibold">Correo</h2>{siteConfig.email ? <a className="text-link mt-4 break-all" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> : <p className="mt-3 text-sm leading-6 text-stone-500">Correo institucional pendiente de configurar.</p>}</article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6"><Share2 className="size-7 text-[#AF090F]" /><h2 className="mt-5 text-xl font-semibold">Redes sociales</h2><OfficialSocialLinks className="mt-4 gap-3" linkClassName="text-link" emptyMessage="Perfiles oficiales pendientes de configurar." /></article>
        </div>
      </section>
    </>
  );
}
