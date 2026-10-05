import { sitePhotography } from "@/data/site-photography";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, HandHeart, Heart, HeartHandshake, Scale, ShieldCheck, Sparkles, Users } from "lucide-react";
import { InternalHero } from "@/components/internal-hero";
import { foundation } from "@/data/foundation";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce la misión, la visión y los valores de Fundación Lanzas Encendidas.",
  alternates: { canonical: "/nosotros" },
};

const valueIcons = {
  Solidaridad: HeartHandshake,
  Servicio: HandHeart,
  Dignidad: Scale,
  Transparencia: Eye,
  Integridad: ShieldCheck,
  Compromiso: Users,
  Esperanza: Sparkles,
  Fe: Heart,
};

export default function NosotrosPage() {
  return (
    <>
      <InternalHero eyebrow="Nosotros" title="Apoyo a personas, familias y comunidades." intro="Asistencia social, apoyo a poblaciones vulnerables y desarrollo comunitario en la República Dominicana." image={sitePhotography.aboutHero.src} imageAlt={sitePhotography.aboutHero.alt} imagePosition={sitePhotography.aboutHero.position} />

      <section className="section-pad bg-white">
        <div className="page-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem]">
            <Image src={sitePhotography.aboutIntroduction.src} alt={sitePhotography.aboutIntroduction.alt} width={sitePhotography.aboutIntroduction.width} height={sitePhotography.aboutIntroduction.height} sizes="(max-width:1024px) 100vw, 45vw" className="h-auto w-full" />
          </div>
          <div>
            <p className="eyebrow">Quiénes somos</p>
            <h2 className="section-title mt-4">Asistencia social y desarrollo comunitario.</h2>
            <p className="body-large mt-6">Fundación Lanzas Encendidas es una Organización de Beneficio Público dedicada a la asistencia social, el apoyo a poblaciones vulnerables y el desarrollo comunitario en la República Dominicana.</p>
            <p className="mt-5 leading-8 text-stone-600">Trabajamos para brindar apoyo a personas, familias y comunidades que enfrentan situaciones de vulnerabilidad, mediante iniciativas de ayuda humanitaria, acompañamiento social y acciones orientadas a mejorar sus condiciones de vida.</p>
            <p className="mt-5 leading-8 text-stone-600">Nuestro trabajo se desarrolla con un enfoque basado en la dignidad humana, la solidaridad, el servicio, la responsabilidad y el compromiso con las comunidades.</p>
            <blockquote className="mt-8 border-l-2 border-[#DCAB56] pl-5 text-lg font-medium leading-8 text-stone-900">“{foundation.verse.text}” <span className="block text-sm text-stone-500">{foundation.verse.reference}</span></blockquote>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#FCFBF8]">
        <div className="page-shell grid gap-6">
          <article className="grid gap-6 rounded-[2rem] bg-[#AF090F] p-7 text-white sm:p-10 lg:grid-cols-[.4fr_1fr] lg:gap-10">
            <h2 className="text-3xl font-semibold leading-tight text-[#F2C36F]">Misión</h2>
            <div className="max-w-3xl space-y-6 text-lg leading-8 text-white/80">
              {foundation.mission.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <article className="grid gap-6 rounded-[2rem] border border-stone-200 bg-white p-7 sm:p-10 lg:grid-cols-[.4fr_1fr] lg:gap-10">
            <h2 className="text-3xl font-semibold leading-tight text-stone-950">Visión</h2>
            <div className="max-w-3xl space-y-6 text-lg leading-8 text-stone-600">
              {foundation.vision.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="max-w-3xl"><p className="eyebrow">Valores en acción</p><h2 className="section-title mt-4">Cómo queremos servir.</h2></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{foundation.values.map((value) => {
            const Icon = valueIcons[value];
            return <article key={value} className="rounded-2xl border border-stone-200 p-6"><Icon className="size-6 text-[#AF090F]" aria-hidden="true" /><h3 className="mt-5 text-lg font-semibold">{value}</h3></article>;
          })}</div>
        </div>
      </section>

      <section className="section-pad bg-white"><div className="page-shell rounded-[2rem] bg-[#F5F1EA] p-7 text-center sm:p-14"><p className="eyebrow">Súmate</p><h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-.03em] sm:text-5xl">El propósito se vuelve realidad cuando más personas deciden servir.</h2><Link href="/participa" className="button-primary mt-8">Conoce cómo participar <ArrowRight className="size-4" /></Link></div></section>
    </>
  );
}
