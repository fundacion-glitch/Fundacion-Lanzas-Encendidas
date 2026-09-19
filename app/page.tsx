import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Boxes,
  Building2,
  HandHeart,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { foundation } from "@/data/foundation";
import { featuredProjects, projects } from "@/data/projects";
import { impact } from "@/data/impact";
import { ProjectCard } from "@/components/project-card";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { VideoEmbed } from "@/components/video-embed";

const areaIcons = [Boxes, Users, BookOpenText, Building2, HeartHandshake, Sparkles];
const gallery = projects[0].gallery;

export default function HomePage() {
  return (
    <>
      <section className="hero-home">
        <Image src="/images/placeholders/community-service-hero.png" alt="Imagen conceptual de personas organizando ayuda comunitaria" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,18,15,.92)_0%,rgba(23,18,15,.72)_46%,rgba(23,18,15,.18)_100%)]" />
        <div className="absolute inset-y-0 left-[7%] hidden w-px bg-gradient-to-b from-transparent via-[#DCAB56]/70 to-transparent lg:block" />
        <div className="page-shell relative flex min-h-[calc(100svh-5rem)] items-end py-14 sm:items-center sm:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#F2C36F]">Fe en acción · República Dominicana</p>
            <h1 className="mt-5 text-[clamp(2.75rem,7vw,6.7rem)] font-semibold leading-[.93] tracking-[-.055em] text-white">Encendidos<br />para servir.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl">Acompañamos a personas, familias y comunidades con ayuda práctica, dignidad y esperanza.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/proyectos" className="button-primary justify-center">Conoce nuestros proyectos <ArrowRight className="size-4" /></Link>
              <Link href="/participa" className="button-light justify-center">Quiero ayudar</Link>
            </div>
          </div>
        </div>
        <p className="absolute bottom-4 right-5 rounded-full bg-black/45 px-3 py-1.5 text-[11px] text-white/75 backdrop-blur-sm">Imagen conceptual · pendiente de sustituir</p>
      </section>

      <section className="section-pad bg-[#FCFBF8]">
        <div className="page-shell grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image src="/images/placeholders/volunteer-packing.png" alt="Imagen conceptual de personas voluntarias preparando recursos" fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-2 max-w-[255px] rounded-2xl bg-[#AF090F] p-5 text-white shadow-2xl sm:-right-8 sm:p-6">
              <p className="text-sm font-semibold leading-6">“La fe debe llevarnos a la acción.”</p>
              <p className="mt-2 text-xs text-white/70">Guía institucional</p>
            </div>
          </div>
          <div>
            <p className="eyebrow">Quiénes somos</p>
            <h2 className="section-title mt-4">Una fundación que convierte la compasión en servicio.</h2>
            <p className="body-large mt-6">{foundation.mission}</p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600">Nuestra identidad cristiana se vive con naturalidad: amar al prójimo, cuidar su dignidad y estar presentes con acciones concretas.</p>
            <Link href="/nosotros" className="text-link mt-8">Conoce nuestra historia <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="section-heading-row">
            <div><p className="eyebrow">Proyectos e historias</p><h2 className="section-title mt-3">El servicio se vuelve visible aquí.</h2></div>
            <Link href="/proyectos" className="text-link">Ver todos <ArrowRight className="size-4" /></Link>
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-stone-500">La jornada en el Batey Cambelaches está respaldada por la guía institucional. Las demás fichas son ejemplos claramente identificados para visualizar futuras campañas.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#AF090F] text-white">
        <div className="page-shell grid lg:grid-cols-[.8fr_1.2fr]">
          <div className="flex flex-col justify-center py-16 lg:border-r lg:border-white/15 lg:pr-14">
            <p className="eyebrow text-[#F2C36F]">Nuestro impacto</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">Resultados que podremos demostrar.</h2>
            <p className="mt-6 leading-7 text-white/75">Las cifras oficiales aún no han sido proporcionadas. Esta estructura queda lista para publicar datos verificables, nunca estimaciones presentadas como hechos.</p>
          </div>
          <div className="grid grid-cols-2 border-t border-white/15 lg:border-t-0">
            {impact.map((item, index) => (
              <div key={item.label} className={`p-6 sm:p-10 ${index % 2 === 0 ? "border-r border-white/15" : ""} ${index < 2 ? "border-b border-white/15" : ""}`}>
                <p className="text-4xl font-semibold text-[#F2C36F] sm:text-6xl">{item.value}</p>
                <p className="mt-3 text-sm leading-5 text-white/80">{item.label}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-white/45">Dato pendiente</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#FCFBF8]">
        <div className="page-shell">
          <div className="max-w-3xl"><p className="eyebrow">Cómo servimos</p><h2 className="section-title mt-4">Un acompañamiento que mira a la persona completa.</h2><p className="body-large mt-5">Las áreas de actuación nacen de los objetivos oficiales de la Fundación.</p></div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-3">
            {foundation.areas.map((area, index) => {
              const Icon = areaIcons[index];
              return <article key={area.title} className="bg-white p-7 sm:p-8"><span className="grid size-11 place-items-center rounded-xl bg-[#AF090F]/8 text-[#AF090F]"><Icon className="size-5" /></span><h3 className="mt-5 text-lg font-semibold text-stone-950">{area.title}</h3><p className="mt-3 text-sm leading-6 text-stone-600">{area.description}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] sm:min-h-[620px]">
            <Image src="/images/placeholders/children-learning.png" alt="Imagen conceptual de una actividad educativa con niños" fill sizes="(max-width:1024px) 100vw, 60vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-stone-800">Historia documentada · imágenes conceptuales</span>
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-10"><p className="eyebrow text-[#F2C36F]">Batey Cambelaches</p><h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight sm:text-5xl">Servir también transforma a quien sirve.</h2></div>
          </div>
          <div className="lg:pl-6">
            <p className="text-lg leading-8 text-stone-700">En esta jornada se llevaron útiles escolares, alimentos, helados, juegos y dinámicas. También se compartió la Palabra de Dios.</p>
            <blockquote className="my-8 border-l-2 border-[#DCAB56] pl-6 text-2xl font-medium leading-9 text-stone-950">Llegamos para llevar algo y también salimos con algo aprendido.</blockquote>
            <p className="text-sm leading-6 text-stone-500">El relato está basado en la guía institucional. Las cifras, la fecha y las fotografías reales todavía deben ser confirmadas.</p>
            <Link href="/proyectos/batey-cambelaches" className="text-link mt-7">Conocer esta historia <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#FCFBF8]">
        <div className="page-shell">
          <div className="section-heading-row"><div><p className="eyebrow">Galería</p><h2 className="section-title mt-3">Personas, encuentros y momentos.</h2></div><p className="max-w-sm text-sm leading-6 text-stone-500">Estas imágenes son conceptuales. La estructura está lista para recibir fotografías reales con fecha, actividad y contexto.</p></div>
          <div className="mt-10"><GalleryLightbox items={gallery} /></div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <div><p className="eyebrow">Historias en movimiento</p><h2 className="section-title mt-4">Un espacio para escuchar las voces de la comunidad.</h2><p className="body-large mt-5">El reproductor queda preparado para videos institucionales o testimonios en YouTube y Vimeo, sin cargar el video hasta que la persona decida reproducirlo.</p></div>
          <VideoEmbed title="Video institucional" caption="Pendiente de agregar" thumbnail="/images/placeholders/community-service-hero.png" />
        </div>
      </section>

      <section className="section-pad bg-[#211A16] text-white">
        <div className="page-shell grid gap-10 lg:grid-cols-[1fr_.85fr] lg:items-center">
          <div><p className="eyebrow text-[#F2C36F]">Transparencia</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">La confianza se construye con evidencia.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">Nuestra estructura institucional contempla contabilidad, estados financieros, inventarios, memorias de gestión y rendición de cuentas. El sitio queda preparado para publicar cada documento cuando esté disponible.</p><Link href="/transparencia" className="button-light mt-8">Conoce nuestra transparencia <ArrowRight className="size-4" /></Link></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {[{icon:ShieldCheck,title:"Gobernanza",text:"Consejo Directivo y responsabilidades definidas."},{icon:BookOpenText,title:"Documentos",text:"Estatutos disponibles y biblioteca preparada."},{icon:HandHeart,title:"Evidencia",text:"Espacio para informes, resultados y memorias."},{icon:HeartHandshake,title:"Rendición",text:"Compromiso con el uso responsable de los recursos."}].map(({icon:Icon,title,text}) => <div key={title} className="rounded-2xl border border-white/10 bg-white/[.055] p-6"><Icon className="size-6 text-[#F2C36F]" /><h3 className="mt-4 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-stone-400">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="text-center"><p className="eyebrow">Participa</p><h2 className="section-title mx-auto mt-4 max-w-3xl">Hay más de una forma de encender esperanza.</h2></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[{icon:HeartHandshake,title:"Donar",text:"Aporta mediante transferencia bancaria cuando los datos oficiales estén habilitados.",href:"/donar",cta:"Ver cómo donar"},{icon:Users,title:"Ser voluntario",text:"Ofrece tiempo, talentos, logística o conocimiento profesional.",href:"/participa#voluntariado",cta:"Quiero participar"},{icon:Building2,title:"Ser aliado",text:"Construyamos colaboraciones con empresas, iglesias e instituciones.",href:"/participa#alianzas",cta:"Conversemos"}].map(({icon:Icon,title,text,href,cta}) => <article key={title} className="rounded-[1.7rem] border border-stone-200 p-7 transition hover:border-[#DCAB56] hover:shadow-lg"><Icon className="size-7 text-[#AF090F]" /><h3 className="mt-5 text-2xl font-semibold">{title}</h3><p className="mt-3 min-h-18 text-sm leading-6 text-stone-600">{text}</p><Link href={href} className="text-link mt-6">{cta} <ArrowRight className="size-4" /></Link></article>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#AF090F] text-white">
        <Image src="/images/brand/isotipo-white.png" alt="" width={620} height={620} className="pointer-events-none absolute -bottom-56 -right-32 w-[500px] opacity-[.055]" />
        <div className="page-shell relative py-20 text-center sm:py-28"><p className="eyebrow text-[#F2C36F]">Una invitación</p><h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-.04em] sm:text-6xl">No fuimos encendidos para quedarnos en el mismo lugar.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">Tu tiempo, tus recursos y tus capacidades pueden convertirse en una respuesta concreta para alguien.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/participa" className="button-light justify-center">Participar ahora <ArrowRight className="size-4" /></Link><Link href="/donar" className="button-outline-light justify-center">Conocer cómo donar</Link></div></div>
      </section>
    </>
  );
}
