import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Share2 } from "lucide-react";
import { InternalHero } from "@/components/internal-hero";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Canales de contacto e información institucional de Fundación Lanzas Encendidas.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  const whatsappUrl = getWhatsAppUrl("Hola, quisiera comunicarme con Fundación Lanzas Encendidas.");
  const socials = Object.entries(siteConfig.social).filter(([, url]) => Boolean(url));
  return (
    <>
      <InternalHero eyebrow="Contacto" title="Conversemos sobre cómo servir juntos." intro="Para donaciones, voluntariado, alianzas o solicitudes de información, utiliza únicamente los canales oficiales publicados aquí." image="/images/placeholders/volunteer-packing.png" imageAlt="Imagen conceptual de personas voluntarias" />
      <section className="section-pad bg-[#FCFBF8]">
        <div className="page-shell grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-2xl border border-stone-200 bg-white p-6"><MessageCircle className="size-7 text-[#AF090F]" /><h2 className="mt-5 text-xl font-semibold">WhatsApp</h2>{whatsappUrl ? <a className="text-link mt-4" href={whatsappUrl} target="_blank" rel="noreferrer">Abrir conversación</a> : <p className="mt-3 text-sm leading-6 text-stone-500">Número oficial pendiente de configurar.</p>}</article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6"><Mail className="size-7 text-[#AF090F]" /><h2 className="mt-5 text-xl font-semibold">Correo</h2>{siteConfig.email ? <a className="text-link mt-4 break-all" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> : <p className="mt-3 text-sm leading-6 text-stone-500">Correo institucional pendiente de configurar.</p>}</article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6"><MapPin className="size-7 text-[#AF090F]" /><h2 className="mt-5 text-xl font-semibold">Domicilio</h2><p className="mt-3 text-sm leading-6 text-stone-500">{siteConfig.address}</p></article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6"><Share2 className="size-7 text-[#AF090F]" /><h2 className="mt-5 text-xl font-semibold">Redes sociales</h2>{socials.length ? <div className="mt-4 flex flex-wrap gap-3">{socials.map(([name,url]) => <a key={name} href={url} target="_blank" rel="noreferrer" className="text-link capitalize">{name}</a>)}</div> : <p className="mt-3 text-sm leading-6 text-stone-500">Perfiles oficiales pendientes de configurar.</p>}</article>
        </div>
        <div className="page-shell mt-8"><div className="rounded-2xl border border-[#DCAB56]/45 bg-[#FFF8E9] p-5 text-sm leading-6 text-[#6A4A16]">El formulario de contacto no se habilita en esta versión porque todavía no existe un servicio de envío configurado. Así evitamos simular que un mensaje fue recibido.</div></div>
      </section>
    </>
  );
}
