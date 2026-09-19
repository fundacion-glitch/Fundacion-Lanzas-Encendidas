"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import type { Project, ProjectStatus } from "@/types";
import { cn } from "@/lib/utils";

const filters: Array<"Todos" | ProjectStatus> = ["Todos", "Activo", "Finalizado", "Próximamente", "Meta alcanzada"];

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");
  const visible = filter === "Todos" ? projects : projects.filter((project) => project.status === filter);

  return (
    <div>
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filtrar proyectos por estado">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
            className={cn(
              "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AF090F]",
              filter === item ? "border-[#AF090F] bg-[#AF090F] text-white" : "border-stone-200 bg-white text-stone-700 hover:border-stone-400",
            )}
          >
            {item}
          </button>
        ))}
      </div>
      {visible.length ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-stone-300 bg-white p-10 text-center text-stone-600">
          No hay proyectos con este estado por el momento.
        </div>
      )}
    </div>
  );
}
