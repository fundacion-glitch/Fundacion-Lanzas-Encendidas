import type { Metadata } from "next";
import { InternalHero } from "@/components/internal-hero";
import { ProjectsExplorer } from "@/components/projects-explorer";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Conoce los proyectos, actividades e historias de Fundación Lanzas Encendidas.",
  alternates: { canonical: "/proyectos" },
};

export default function ProyectosPage() {
  return (
    <>
      <InternalHero eyebrow="Proyectos" title="Cada proyecto comienza escuchando una necesidad." intro="Explora actividades documentadas y visualiza cómo presentaremos las próximas iniciativas de la Fundación." image="/images/placeholders/children-learning.png" imageAlt="Imagen conceptual de una actividad comunitaria" />
      <section className="section-pad bg-[#FCFBF8]"><div className="page-shell"><div className="mb-10 max-w-3xl"><p className="eyebrow">Historias y campañas</p><h2 className="section-title mt-4">Servicio que se puede conocer y seguir.</h2><p className="body-large mt-5">Los proyectos de muestra están identificados tanto aquí como en la fuente de datos. No representan campañas activas reales.</p></div><ProjectsExplorer projects={projects} /></div></section>
    </>
  );
}
