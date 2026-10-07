import { pageMetadata } from "@/lib/seo";
import { sitePhotography } from "@/data/site-photography";
import Link from "next/link";
import { ArrowRight, HeartHandshake, MessageCircle, Shirt } from "lucide-react";
import { InternalHero } from "@/components/internal-hero";
import { VolunteerForm } from "@/components/volunteer-form";
import { SolidarityArticleCard } from "@/components/solidarity-article-card";
import { SolidarityCauseGuide } from "@/components/solidarity-cause-guide";
import { solidarityArticles, solidarityArticlesInquiry } from "@/data/solidarity-articles";
import { OfficialSocialLinks } from "@/components/official-social-links";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = pageMetadata("/participa");

export default function ParticipaPage() {
  const whatsappUrl = getWhatsAppUrl("Hola, quisiera información para participar con Fundación Lanzas Encendidas.");
  const articlesWhatsAppUrl = getWhatsAppUrl(solidarityArticlesInquiry);

  return (
    <>
      <InternalHero eyebrow="Participa" title="Tu tiempo, tus recursos y tu compromiso pueden convertirse en esperanza." intro="En Fundación Lanzas Encendidas creemos que todos podemos contribuir a transformar una vida y fortalecer nuestras comunidades. Puedes participar como voluntario, apoyar una causa específica o adquirir nuestros artículos solidarios." image={sitePhotography.participateHero.src} imageAlt={sitePhotography.participateHero.alt} imagePosition={sitePhotography.participateHero.position} />

      <section id="voluntariado" className="section-pad scroll-mt-24 bg-white">
        <div className="page-shell grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <div>
            <p className="eyebrow">01 · Voluntariado</p>
            <h2 className="section-title mt-4">Sé voluntario</h2>
            <p className="body-large mt-5">¿Quieres formar parte de nuestras jornadas y proyectos?</p>
            <p className="mt-5 text-base leading-8 text-stone-600">Regístrate como voluntario y cuéntanos en qué tipo de actividades te gustaría colaborar. Mantenemos nuestra comunidad de voluntarios informada sobre próximas jornadas, campañas y oportunidades de servicio a través de nuestros canales oficiales.</p>
          </div>
          <div>
            <VolunteerForm />
            <a href={whatsappUrl ?? "/contacto"} target={whatsappUrl ? "_blank" : undefined} rel={whatsappUrl ? "noreferrer" : undefined} className="button-primary mt-6"><MessageCircle className="size-4 shrink-0" aria-hidden="true" />Consultar sobre voluntariado</a>
            <p className="mt-6 text-sm leading-7 text-stone-600">Las convocatorias para actividades específicas serán anunciadas a través de nuestras redes sociales oficiales. Síguenos y mantente pendiente de nuestras próximas jornadas.</p>
            <OfficialSocialLinks className="mt-4" linkClassName="text-link" />
          </div>
        </div>
      </section>

      <section id="articulos-solidarios" className="section-pad scroll-mt-24 bg-[#211A16] text-white">
        {/* Keep the existing homepage /participa#alianzas link working. */}
        <span id="alianzas" className="block scroll-mt-24" aria-hidden="true" />
        <div className="page-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-[#F2C36F]">02 · Artículos solidarios</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">Apoya una causa con nuestros artículos solidarios</h2>
            <p className="mt-6 text-lg leading-8 text-stone-300">También puedes formar parte de nuestra misión adquiriendo nuestros poloshirts, gorras y otros artículos de voluntariado.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[.055] p-7 sm:p-10">
            <Shirt className="size-10 text-[#F2C36F]" aria-hidden="true" />
            <p className="mt-6 text-base leading-8 text-stone-300">Cada compra representa una forma de apoyar nuestro trabajo social. Los recursos generados por estas ventas son destinados a proyectos, campañas y casos de asistencia que la Fundación tenga activos, de acuerdo con las necesidades y prioridades establecidas.</p>
            <p className="mt-5 text-sm leading-6 text-stone-300">Contacta a la Fundación para conocer qué artículos solidarios están disponibles actualmente y sus detalles.</p>
            <a href={articlesWhatsAppUrl ?? "/contacto"} target={articlesWhatsAppUrl ? "_blank" : undefined} rel={articlesWhatsAppUrl ? "noreferrer" : undefined} className="button-light mt-7"><MessageCircle className="size-4 shrink-0" aria-hidden="true" />Consultar artículos solidarios</a>
          </div>
        </div>
        <div className="page-shell mt-12">
          <p className="text-sm leading-7 text-stone-300">Estas imágenes muestran el diseño de referencia de nuestros artículos solidarios; consulta los modelos y la disponibilidad con la Fundación.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
            {solidarityArticles.map((article) => <SolidarityArticleCard key={article.id} article={article} inquiryUrl={articlesWhatsAppUrl} />)}
          </div>
          <p className="mt-6 text-sm leading-7 text-stone-300">Más adelante, podremos sumar otros artículos solidarios y de voluntariado.</p>
          <div className="mt-12"><SolidarityCauseGuide /></div>
        </div>
      </section>

      <section id="donaciones" className="section-pad scroll-mt-24 bg-[#FCFBF8]">
        <div className="page-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] bg-[#AF090F] p-8 text-white sm:p-12">
            <HeartHandshake className="size-9 text-[#F2C36F]" aria-hidden="true" />
            <p className="eyebrow mt-6 text-[#F2C36F]">03 · Donaciones</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">También puedes donar</h2>
            <p className="mt-5 leading-7 text-white/80">Además de ser voluntario o adquirir nuestros artículos, puedes realizar una contribución directa para apoyar nuestras iniciativas.</p>
          </div>
          <div>
            <p className="body-large">Tu aporte puede convertirse en alimentos para una familia, recursos para una comunidad, apoyo para una emergencia o parte de una solución para una familia que necesita una vivienda digna.</p>
            <Link href="/donar" className="button-primary mt-8">QUIERO DONAR <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell rounded-[2rem] border border-stone-200 p-8 text-center sm:p-14">
          <HeartHandshake className="mx-auto size-9 text-[#AF090F]" aria-hidden="true" />
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-[-.03em] sm:text-5xl">Hay muchas formas de servir.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-600">Puedes aportar tu tiempo, tus recursos, tus habilidades o simplemente compartir nuestra misión.</p>
          <p className="mx-auto mt-5 max-w-2xl font-semibold leading-7 text-[#97080D]">Juntos podemos hacer que la esperanza se convierta en acción.</p>
        </div>
      </section>
    </>
  );
}
