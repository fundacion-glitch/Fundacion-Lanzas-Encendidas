import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, BookOpenText, FileClock, FileText, Landmark, Scale, ShieldCheck } from "lucide-react";
import { InternalHero } from "@/components/internal-hero";
import { siteConfig } from "@/config/site";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Transparencia",
  description: "Información institucional, documentos y estructura de rendición de cuentas de Fundación Lanzas Encendidas.",
  alternates: { canonical: "/transparencia" },
};

const pendingDocuments = ["Memoria anual", "Estados financieros", "Informes de proyectos", "Informe de impacto"];

export default function TransparenciaPage() {
  return (
    <>
      <InternalHero eyebrow="Transparencia" title="La responsabilidad también forma parte del servicio." intro="Organizamos información, documentos y evidencias para que cada persona pueda conocer cómo se gobierna y cómo rinde cuentas la Fundación." image="/images/placeholders/community-service-hero.png" imageAlt="Imagen conceptual de colaboración comunitaria" />
      <section className="section-pad bg-white">
        <div className="page-shell grid gap-6 md:grid-cols-3">
          {[{icon:Scale,title:"Naturaleza",text:"Asociación sin fines de lucro conforme a la Ley 122-05 y su Reglamento 40-08."},{icon:Landmark,title:"Gobernanza",text:"Asamblea General y Consejo Directivo como órganos de dirección y administración."},{icon:ShieldCheck,title:"Control",text:"Contabilidad, inventario, actas, estados financieros y memoria de gestión previstos en los Estatutos."}].map(({icon:Icon,title,text}) => <article key={title} className="rounded-[1.7rem] border border-stone-200 p-7"><Icon className="size-7 text-[#AF090F]" /><h2 className="mt-5 text-xl font-semibold">{title}</h2><p className="mt-3 text-sm leading-6 text-stone-600">{text}</p></article>)}
        </div>
      </section>

      <section className="section-pad bg-[#FCFBF8]">
        <div className="page-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="eyebrow">Documentos</p><h2 className="section-title mt-4">Información institucional disponible.</h2><p className="body-large mt-5">Solo publicamos archivos realmente proporcionados. La biblioteca crecerá a medida que existan documentos oficiales y reportes verificables.</p></div>
          <div className="space-y-4">
            <a href="/documents/estatutos-fundacion-lanzas-encendidas.pdf" target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 transition hover:border-[#AF090F]"><span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#AF090F]/8 text-[#AF090F]"><FileText className="size-6" /></span><span className="min-w-0 flex-1"><strong className="block text-stone-950">Estatutos Fundación Lanzas Encendidas</strong><span className="mt-1 block text-sm text-stone-500">Documento institucional · PDF</span></span><ArrowDownToLine className="size-5 text-stone-400 group-hover:text-[#AF090F]" /></a>
            {pendingDocuments.map((doc) => <div key={doc} className="flex items-center gap-4 rounded-2xl border border-dashed border-stone-300 bg-white/60 p-5"><span className="grid size-12 shrink-0 place-items-center rounded-xl bg-stone-100 text-stone-400"><FileClock className="size-6" /></span><span><strong className="block text-stone-700">{doc}</strong><span className="mt-1 block text-sm text-stone-400">Pendiente de publicar</span></span></div>)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#211A16] text-white">
        <div className="page-shell grid gap-10 lg:grid-cols-2">
          <div><p className="eyebrow text-[#F2C36F]">Información institucional</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.035em]">Datos confirmados</h2><dl className="mt-8 divide-y divide-white/10">{[["Nombre",siteConfig.name],["Naturaleza","Asociación sin fines de lucro"],["Domicilio",siteConfig.address],["Área geográfica",siteConfig.area],["RNC",siteConfig.rnc || "Pendiente de incorporar al sitio"]].map(([label,value]) => <div key={label} className="grid gap-2 py-4 sm:grid-cols-[150px_1fr]"><dt className="text-sm text-stone-500">{label}</dt><dd className="text-sm leading-6 text-stone-200">{value}</dd></div>)}</dl></div>
          <div><p className="eyebrow text-[#F2C36F]">Consejo Directivo</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.035em]">Estructura vigente en los Estatutos</h2><ul className="mt-8 space-y-3">{team.map((member) => <li key={member.name} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 text-sm"><span className="text-stone-200">{member.name}</span><span className="text-[#F2C36F]">{member.role}</span></li>)}</ul><Link href="/nosotros" className="button-outline-light mt-7"><BookOpenText className="size-4" />Conocer el equipo</Link></div>
        </div>
      </section>
    </>
  );
}
