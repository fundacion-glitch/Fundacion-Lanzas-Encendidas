import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Boxes, Building2, Clock3, HeartHandshake, Lightbulb, MessageCircle, Truck, Users } from "lucide-react";
import { InternalHero } from "@/components/internal-hero";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Participa",
  description: "Conoce cómo ser voluntario, aliado o realizar donaciones en especie a Fundación Lanzas Encendidas.",
  alternates: { canonical: "/participa" },
};

const volunteerWays = [
  { icon: Clock3, title: "Tiempo", text: "Acompaña jornadas, preparación y seguimiento de actividades." },
  { icon: Lightbulb, title: "Talentos", text: "Comparte conocimientos profesionales, educativos o creativos." },
  { icon: Truck, title: "Logística", text: "Apoya clasificación, transporte, montaje y distribución responsable." },
  { icon: Users, title: "Comunidad", text: "Ayuda a escuchar necesidades y fortalecer vínculos locales." },
];

export default function ParticipaPage() {
  const whatsappUrl = getWhatsAppUrl("Hola, quisiera información para participar con Fundación Lanzas Encendidas.");
  const contactCta = whatsappUrl ?? "/contacto";
  return (
    <>
      <InternalHero eyebrow="Participa" title="Tu forma de ayudar también cuenta." intro="Puedes sumar tiempo, experiencia, recursos o conexiones. Cada aporte comienza con escuchar qué se necesita realmente." image="/images/placeholders/volunteer-packing.png" imageAlt="Imagen conceptual de personas voluntarias" />
      <section id="voluntariado" className="section-pad scroll-mt-24 bg-white">
        <div className="page-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div><p className="eyebrow">Voluntariado</p><h2 className="section-title mt-4">Servir con lo que sabes y con lo que tienes.</h2><p className="body-large mt-5">No siempre se necesita mucho dinero para comenzar. La disposición, el tiempo y el conocimiento también pueden abrir una puerta.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">{volunteerWays.map(({icon:Icon,title,text}) => <article key={title} className="rounded-2xl border border-stone-200 p-6"><Icon className="size-6 text-[#AF090F]" /><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-stone-600">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="alianzas" className="section-pad scroll-mt-24 bg-[#211A16] text-white">
        <div className="page-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div><p className="eyebrow text-[#F2C36F]">Alianzas</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">Multiplicar el impacto requiere trabajar juntos.</h2><p className="mt-6 text-lg leading-8 text-stone-300">La Fundación puede establecer alianzas con empresas, iglesias, organizaciones, instituciones y donantes para canalizar recursos y desarrollar proyectos sociales.</p><a href={contactCta} target={whatsappUrl ? "_blank" : undefined} rel={whatsappUrl ? "noreferrer" : undefined} className="button-light mt-8">Conversemos <ArrowRight className="size-4" /></a></div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.055] p-8 sm:p-12"><Building2 className="size-10 text-[#F2C36F]" /><h3 className="mt-7 text-2xl font-semibold">Una alianza puede aportar</h3><ul className="mt-6 grid gap-4 text-sm leading-6 text-stone-300"><li>Recursos económicos o en especie.</li><li>Capacidad logística y transporte.</li><li>Conocimiento técnico y formación.</li><li>Conexiones con comunidades y organizaciones.</li><li>Voluntariado corporativo o comunitario.</li></ul></div>
        </div>
      </section>

      <section className="section-pad bg-[#FCFBF8]">
        <div className="page-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] bg-[#AF090F] p-8 text-white sm:p-12"><Boxes className="size-9 text-[#F2C36F]" /><h2 className="mt-6 text-3xl font-semibold">Donaciones en especie</h2><p className="mt-5 leading-7 text-white/80">Los Estatutos contemplan alimentos, ropa, artículos básicos, medicamentos, colchones, útiles y otros recursos esenciales.</p></div>
          <div><p className="eyebrow">Primero, consulta</p><h2 className="section-title mt-4">Entregar lo que realmente hace falta.</h2><p className="body-large mt-5">Las necesidades cambian según la comunidad y el momento. Antes de organizar una entrega, confirma con la Fundación qué artículos se requieren, cómo deben prepararse y dónde recibirlos.</p><a href={contactCta} target={whatsappUrl ? "_blank" : undefined} rel={whatsappUrl ? "noreferrer" : undefined} className="button-primary mt-8"><MessageCircle className="size-4" />Consultar necesidades actuales</a></div>
        </div>
      </section>

      <section className="section-pad bg-white"><div className="page-shell rounded-[2rem] border border-stone-200 p-8 text-center sm:p-14"><HeartHandshake className="mx-auto size-9 text-[#AF090F]" /><h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-[-.03em] sm:text-5xl">El primer paso es decir: aquí estoy.</h2><p className="mx-auto mt-5 max-w-xl text-stone-600">Cuéntanos cómo te gustaría aportar y construiremos la mejor forma de hacerlo.</p><Link href="/contacto" className="text-link mt-8">Ir a contacto <ArrowRight className="size-4" /></Link></div></section>
    </>
  );
}
