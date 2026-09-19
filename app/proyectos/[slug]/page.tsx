import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, MapPin, Target, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { ProjectCard } from "@/components/project-card";
import { ShareActions } from "@/components/share-actions";
import { VideoEmbed } from "@/components/video-embed";
import { SITE_URL } from "@/config/site";
import { getProject, getRelatedProjects, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.excerpt,
    alternates: { canonical: `/proyectos/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.excerpt,
      url: `${SITE_URL}/proyectos/${project.slug}`,
      images: [{ url: project.image, alt: project.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: project.title, description: project.excerpt, images: [project.image] },
  };
}

function formatDop(value: number) {
  return new Intl.NumberFormat("es-DO", { style: "currency", currency: "DOP", maximumFractionDigits: 0 }).format(value);
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const progress = project.goal ? Math.min(100, Math.round(((project.raised ?? 0) / project.goal) * 100)) : null;
  const related = getRelatedProjects(project.slug);

  return (
    <>
      <section className="relative min-h-[70svh] overflow-hidden bg-[#17120F] text-white">
        <Image src={project.image} alt={project.imageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17120F] via-[#17120F]/60 to-black/15" />
        <div className="page-shell relative flex min-h-[70svh] flex-col justify-between py-8 sm:py-12">
          <nav aria-label="Migas de pan" className="w-fit rounded-full bg-black/40 px-4 py-2 text-sm font-semibold backdrop-blur">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="text-white/75 hover:text-white">Inicio</Link></li>
              <li aria-hidden="true" className="text-white/45">/</li>
              <li><Link href="/proyectos" className="inline-flex items-center gap-1.5 text-white/75 hover:text-white"><ArrowLeft className="size-3.5" />Proyectos</Link></li>
              <li aria-hidden="true" className="hidden text-white/45 sm:list-item">/</li>
              <li aria-current="page" className="hidden max-w-72 truncate text-white sm:list-item">{project.title}</li>
            </ol>
          </nav>
          <div className="max-w-4xl pt-20">
            <div className="flex flex-wrap gap-2"><span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-stone-900">{project.status}</span><span className="rounded-full bg-[#DCAB56] px-3 py-1.5 text-xs font-semibold text-[#211A16]">{project.category}</span>{project.isDemo && <span className="rounded-full bg-[#AF090F] px-3 py-1.5 text-xs font-semibold text-white">Proyecto de muestra</span>}</div>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.03] tracking-[-.045em] sm:text-6xl lg:text-7xl">{project.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-200">{project.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-300"><span className="inline-flex items-center gap-2"><MapPin className="size-4" />{project.location}</span><span className="inline-flex items-center gap-2"><CalendarDays className="size-4" />{project.date}</span></div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-start">
          <article>
            <p className="eyebrow">La historia</p>
            <div className="mt-5 space-y-5 text-lg leading-8 text-stone-700">{project.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <div className="mt-10 rounded-2xl bg-[#F5F1EA] p-6"><p className="text-xs font-semibold uppercase tracking-wider text-stone-500">Nota de fuente</p><p className="mt-2 text-sm leading-6 text-stone-700">{project.sourceNote}</p></div>
          </article>
          <aside className="sticky top-28 rounded-[1.8rem] border border-stone-200 bg-[#FCFBF8] p-6 sm:p-8">
            <p className="eyebrow">Avance</p>
            {progress !== null ? <><div className="mt-5 flex items-end justify-between gap-4"><div><p className="text-2xl font-semibold">{formatDop(project.raised ?? 0)}</p><p className="mt-1 text-xs text-stone-500">recaudado</p></div><p className="text-sm text-stone-500">Meta {formatDop(project.goal!)}</p></div><Progress value={progress} className="mt-5 h-2 bg-[#DCAB56]/25 [&_[data-slot=progress-indicator]]:bg-[#AF090F]" /><p className="mt-2 text-xs text-stone-500">{progress}% · datos de demostración</p></> : <p className="mt-5 text-sm leading-6 text-stone-600">No se ha publicado una meta económica para esta actividad.</p>}
            <dl className="mt-7 space-y-4 border-t border-stone-200 pt-6 text-sm"><div className="flex gap-3"><Target className="mt-0.5 size-5 shrink-0 text-[#AF090F]" /><div><dt className="font-semibold">Objetivo</dt><dd className="mt-1 leading-6 text-stone-600">{project.objective}</dd></div></div><div className="flex gap-3"><Users className="mt-0.5 size-5 shrink-0 text-[#AF090F]" /><div><dt className="font-semibold">Beneficiarios</dt><dd className="mt-1 leading-6 text-stone-600">{project.beneficiaries}</dd></div></div></dl>
            <Link href="/donar" className="button-primary mt-7 w-full justify-center">Apoyar este proyecto</Link>
            <Link href="/participa#voluntariado" className="button-secondary mt-3 w-full justify-center">Sumarme como voluntario</Link>
          </aside>
        </div>
      </section>

      {project.results.length > 0 && <section className="section-pad bg-[#AF090F] text-white"><div className="page-shell grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow text-[#F2C36F]">Resultados</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">Lo que sabemos hasta ahora.</h2></div><ul className="grid gap-4 sm:grid-cols-2">{project.results.map((result) => <li key={result} className="rounded-2xl border border-white/15 bg-white/[.06] p-6 text-sm leading-6 text-white/85">{result}</li>)}</ul></div></section>}

      <section className="section-pad bg-[#FCFBF8]"><div className="page-shell"><div className="section-heading-row"><div><p className="eyebrow">Galería</p><h2 className="section-title mt-4">Evidencia visual</h2></div><p className="max-w-sm text-sm leading-6 text-stone-500">Las imágenes actuales son conceptuales y no constituyen evidencia de la actividad.</p></div><div className="mt-10"><GalleryLightbox items={project.gallery} /></div></div></section>

      <section className="section-pad bg-white"><div className="page-shell grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-center"><div><p className="eyebrow">Video</p><h2 className="section-title mt-4">Escucha la historia en primera persona.</h2><p className="body-large mt-5">El video oficial de este proyecto aún no ha sido agregado.</p></div><VideoEmbed title={`Video: ${project.title}`} caption="Pendiente de agregar" thumbnail={project.image} provider={project.video?.provider} videoId={project.video?.id} /></div></section>

      {project.updates.length > 0 && <section className="section-pad bg-[#FCFBF8]"><div className="page-shell grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">Actualizaciones</p><h2 className="section-title mt-4">Seguimiento del proyecto.</h2></div><div className="space-y-4">{project.updates.map((update) => <article key={update.title} className="rounded-2xl border border-stone-200 bg-white p-6"><p className="text-xs font-semibold uppercase tracking-wider text-[#AF090F]">{update.date}</p><h3 className="mt-3 text-xl font-semibold">{update.title}</h3><p className="mt-3 text-sm leading-6 text-stone-600">{update.body}</p></article>)}</div></div></section>}

      <section className="section-pad bg-white"><div className="page-shell"><div className="section-heading-row"><div><p className="eyebrow">Comparte</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.03em]">Ayuda a que esta historia llegue más lejos.</h2></div><ShareActions title={project.title} /></div></div></section>

      <section className="section-pad bg-[#211A16] text-white"><div className="page-shell"><div className="section-heading-row"><div><p className="eyebrow text-[#F2C36F]">Más proyectos</p><h2 className="mt-3 text-4xl font-semibold tracking-[-.035em]">Continúa explorando.</h2></div><Link href="/proyectos" className="button-outline-light">Ver todos <ArrowRight className="size-4" /></Link></div><div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3 text-stone-950">{related.map((item) => <ProjectCard key={item.slug} project={item} />)}</div></div></section>
    </>
  );
}
