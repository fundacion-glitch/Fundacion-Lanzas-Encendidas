import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Scale, Sparkles, Users } from "lucide-react";
import { InternalHero } from "@/components/internal-hero";
import { foundation } from "@/data/foundation";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce la misión, el propósito, los valores y el Consejo Directivo de Fundación Lanzas Encendidas.",
  alternates: { canonical: "/nosotros" },
};

const values = [
  { icon: Heart, title: "Servicio", text: "Ponemos nuestras capacidades al servicio de quienes enfrentan una necesidad." },
  { icon: Scale, title: "Dignidad", text: "Cada persona merece respeto, escucha y un acompañamiento que no la reduzca a su necesidad." },
  { icon: Sparkles, title: "Fe activa", text: "Nuestra identidad cristiana se expresa con amor, esperanza y acciones concretas." },
  { icon: Users, title: "Comunidad", text: "Creemos en vínculos, alianzas y soluciones que se construyen junto a las personas." },
];

export default function NosotrosPage() {
  return (
    <>
      <InternalHero eyebrow="Nosotros" title="Una fe que sale al encuentro de la necesidad." intro="Somos una asociación sin fines de lucro dominicana dedicada al apoyo humanitario, social y comunitario." image="/images/placeholders/volunteer-packing.png" imageAlt="Imagen conceptual de voluntarios preparando ayuda" />

      <section className="section-pad bg-white">
        <div className="page-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-square overflow-hidden rounded-[2rem]">
            <Image src="/images/placeholders/community-service-hero.png" alt="Imagen conceptual de servicio comunitario" fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" />
            <span className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1.5 text-xs text-white">Imagen conceptual</span>
          </div>
          <div>
            <p className="eyebrow">Nuestro origen</p>
            <h2 className="section-title mt-4">Encendidos para ser enviados.</h2>
            <p className="body-large mt-6">El nombre Lanzas Encendidas representa a personas encendidas por Dios, con un corazón dispuesto a servir y ser enviadas donde existe una necesidad.</p>
            <p className="mt-5 leading-8 text-stone-600">La Fundación fue formalizada en 2026 como una asociación sin fines de lucro. Su trabajo se proyecta en todo el territorio nacional y puede articular cooperación con organizaciones dentro y fuera de la República Dominicana.</p>
            <blockquote className="mt-8 border-l-2 border-[#DCAB56] pl-5 text-lg font-medium leading-8 text-stone-900">“{foundation.verse.text}” <span className="block text-sm text-stone-500">{foundation.verse.reference}</span></blockquote>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#FCFBF8]">
        <div className="page-shell grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] bg-[#AF090F] p-7 text-white sm:p-10"><p className="eyebrow text-[#F2C36F]">Misión oficial</p><h2 className="mt-5 text-3xl font-semibold leading-tight">Servir con solidaridad y promover el desarrollo integral.</h2><p className="mt-6 text-lg leading-8 text-white/80">{foundation.mission}</p></article>
          <article className="rounded-[2rem] border border-stone-200 bg-white p-7 sm:p-10"><p className="eyebrow">Propósito comunicacional</p><h2 className="mt-5 text-3xl font-semibold leading-tight text-stone-950">Ayuda práctica, esperanza y acompañamiento.</h2><p className="mt-6 text-lg leading-8 text-stone-600">{foundation.purpose}</p><p className="mt-5 text-xs leading-5 text-stone-400">Este texto resume el tono de la guía institucional; no sustituye la misión oficial.</p></article>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="max-w-3xl"><p className="eyebrow">Valores en acción</p><h2 className="section-title mt-4">Cómo queremos servir.</h2><p className="body-large mt-5">Estos principios sintetizan la misión, los objetivos y el mensaje institucional de la Fundación.</p></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{values.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-stone-200 p-6"><Icon className="size-6 text-[#AF090F]" /><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-stone-600">{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section-pad bg-[#211A16] text-white">
        <div className="page-shell">
          <div className="max-w-3xl"><p className="eyebrow text-[#F2C36F]">Consejo Directivo</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">Dirección y responsabilidad institucional.</h2><p className="mt-5 text-stone-300">Los nombres y cargos aparecen en los Estatutos firmados el 23 de febrero de 2026. Las fotografías y perfiles ampliados están pendientes.</p></div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{team.map((member) => <article key={member.name} className="rounded-2xl border border-white/10 bg-white/[.055] p-6"><div className="grid size-16 place-items-center rounded-full bg-[#DCAB56] text-xl font-semibold text-[#211A16]">{member.name.split(" ").slice(0,2).map((part) => part[0]).join("")}</div><h3 className="mt-5 text-lg font-semibold">{member.name}</h3><p className="mt-1 text-sm font-semibold text-[#F2C36F]">{member.role}</p><p className="mt-3 text-sm leading-6 text-stone-400">{member.bio}</p></article>)}</div>
        </div>
      </section>

      <section className="section-pad bg-white"><div className="page-shell rounded-[2rem] bg-[#F5F1EA] p-7 text-center sm:p-14"><p className="eyebrow">Súmate</p><h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-.03em] sm:text-5xl">El propósito se vuelve realidad cuando más personas deciden servir.</h2><Link href="/participa" className="button-primary mt-8">Conoce cómo participar <ArrowRight className="size-4" /></Link></div></section>
    </>
  );
}
