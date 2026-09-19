import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import type { Project } from "@/types";

function formatDop(value: number) {
  return new Intl.NumberFormat("es-DO", {
    style: "currency",
    currency: "DOP",
    maximumFractionDigits: 0,
  }).format(value);
}

export function ProjectCard({ project }: { project: Project }) {
  const progress = project.goal ? Math.min(100, Math.round(((project.raised ?? 0) / project.goal) * 100)) : null;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-stone-200 bg-white shadow-[0_10px_35px_rgba(40,25,15,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(40,25,15,.11)]">
      <Link href={`/proyectos/${project.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-stone-800 shadow-sm">
          {project.status}
        </span>
        {project.isDemo && (
          <span className="absolute bottom-4 left-4 rounded-full bg-[#17120F]/85 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white">
            Proyecto de muestra
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="eyebrow">{project.category}</p>
        <h3 className="mt-2 text-xl font-semibold leading-snug text-stone-950">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-stone-600">{project.excerpt}</p>
        <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-stone-500">
          <MapPin className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />{project.location}
        </p>

        <div className="mt-auto pt-6">
          {progress !== null ? (
            <div>
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="font-semibold text-stone-900">{formatDop(project.raised ?? 0)}</span>
                <span className="text-stone-500">Meta {formatDop(project.goal!)}</span>
              </div>
              <Progress value={progress} aria-label={`${progress}% de la meta`} className="h-1.5 bg-[#DCAB56]/25 [&_[data-slot=progress-indicator]]:bg-[#AF090F]" />
              <p className="mt-2 text-xs text-stone-500">{progress}% alcanzado · datos de demostración</p>
            </div>
          ) : (
            <p className="text-xs text-stone-500">Sin meta económica publicada</p>
          )}
          <Link href={`/proyectos/${project.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#97080D] hover:text-[#AF090F]">
            Conocer la historia <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
