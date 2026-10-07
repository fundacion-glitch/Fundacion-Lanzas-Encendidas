import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Landmark, ShieldCheck } from "lucide-react";
import { InternalHero } from "@/components/internal-hero";
import { siteConfig } from "@/config/site";
import { foundation } from "@/data/foundation";
import { impact, impactAreas, impactReport } from "@/data/impact";
import { galleryMedia } from "@/data/gallery-media";

export const metadata: Metadata = {
  title: "Transparencia",
  description: "Información institucional, impacto documentado y evidencias del trabajo de Fundación Lanzas Encendidas.",
  alternates: { canonical: "/transparencia" },
};

const evidenceImages = galleryMedia.filter((item) => item.type === "image").slice(0, 2);

export default function TransparenciaPage() {
  return (
    <>
      <InternalHero eyebrow="Transparencia" title="Nuestro compromiso con la transparencia" intro="La confianza se construye con responsabilidad, claridad y rendición de cuentas. En Fundación Lanzas Encendidas documentamos nuestras acciones y resultados para dar a conocer cómo servimos a las personas y comunidades." />

      <section id="informacion-institucional" className="section-pad scroll-mt-24 bg-[#F5F1EA] text-stone-900">
        <div className="page-shell">
          <p className="eyebrow">Qué somos</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">Información institucional</h2>
          <div className="mt-10">
            <dl className="divide-y divide-stone-300/70">
              {[["Nombre", siteConfig.name], ["RNI / Registro", siteConfig.registration], ["Naturaleza jurídica", foundation.legalNature], ["Ámbito institucional", siteConfig.area]].map(([label, value]) => <div key={label} className="grid gap-2 py-4 sm:grid-cols-[150px_1fr]"><dt className="text-sm text-stone-600">{label}</dt><dd className="text-sm leading-7 text-stone-800">{value}</dd></div>)}
            </dl>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-6"><Landmark className="size-6 text-[#AF090F]" aria-hidden="true" /><h3 className="mt-4 text-lg font-semibold">Gobernanza</h3><p className="mt-3 text-sm leading-7 text-stone-600">Asamblea General y Consejo Directivo como órganos de dirección y administración, según los Estatutos.</p></div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6"><ShieldCheck className="size-6 text-[#AF090F]" aria-hidden="true" /><h3 className="mt-4 text-lg font-semibold">Control y rendición</h3><p className="mt-3 text-sm leading-7 text-stone-600">Los Estatutos contemplan contabilidad, inventario y actas como mecanismos de control y rendición de cuentas.</p></div>
          </div>
        </div>
      </section>

      <section id="alcance" className="section-pad scroll-mt-24 border-t border-stone-200 bg-white" aria-labelledby="alcance-title">
        <div className="page-shell">
          <p className="eyebrow">Resultados documentados</p>
          <h2 id="alcance-title" className="section-title mt-4">Alcance e impacto</h2>
          <p className="body-large mt-5">{impactReport.introduction}</p>
          <p className="mt-4 text-sm font-semibold leading-7 text-stone-800">Período documentado: {impactReport.period}</p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {impact.map((item) => (
              <div key={item.id} className="flex min-w-0 flex-col rounded-2xl border border-stone-200 bg-[#FCFBF8] p-6">
                <dt className="mt-3 text-sm font-semibold leading-6 text-stone-800">{item.label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-[#97080D]">{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 max-w-4xl text-sm leading-7 text-stone-600">
            <h3 className="font-semibold text-stone-800">Cómo leer estas cifras</h3>
            <p className="mt-2">{impactReport.methodology}</p>
            <p className="mt-3">{impactReport.calculationNote}</p>
            <p className="mt-4 font-semibold text-stone-800">Fuente: {impactReport.source}</p>
          </div>
          <h3 className="mt-12 text-2xl font-semibold text-stone-950">Áreas de impacto</h3>
          <ul className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {impactAreas.map((area) => (
              <li key={area.id} className="min-w-0 border-t border-stone-200 pt-5"><h4 className="font-semibold leading-6 text-stone-800">{area.title}</h4><p className="mt-2 text-sm leading-7 text-stone-600">{area.description}</p></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-[#FCFBF8]" aria-labelledby="evidencias-title">
        <div className="page-shell grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Evidencia visual</p>
            <h2 id="evidencias-title" className="section-title mt-4">Evidencias de nuestro trabajo</h2>
            <p className="body-large mt-5">Nuestro trabajo también se documenta. Conservamos evidencias fotográficas y audiovisuales de las jornadas y acciones realizadas por la Fundación.</p>
            <Link href="/galeria" className="text-link mt-7">Ver galería <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
          <div className="grid grid-cols-2 items-center gap-3 sm:gap-5">
            {evidenceImages.map((item) => <Image key={item.id} src={item.src} alt={item.alt ?? ""} width={item.width} height={item.height} sizes="(max-width: 1023px) 45vw, 23vw" className="h-auto w-full rounded-2xl" />)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#211A16] text-white">
        <div className="page-shell text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">La confianza también es parte de nuestro servicio.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">Buscamos que colaboradores, donantes, voluntarios y comunidades conozcan qué hacemos, cómo actuamos y a quiénes llegamos.</p>
        </div>
      </section>
    </>
  );
}
