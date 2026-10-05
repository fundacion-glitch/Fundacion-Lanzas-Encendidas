import { contactWhatsAppUrl } from "@/config/site";
import { sitePhotography } from "@/data/site-photography";
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
import { homepageGalleryItems } from "@/data/gallery-presentation";
import { impact, impactAreas, impactReport } from "@/data/impact";
import { MediaGallery } from "@/components/media-gallery";

const areaIcons = [Boxes, Users, BookOpenText, Building2, HeartHandshake, Sparkles];

export default function HomePage() {
  return (
    <>
      <section className="hero-home">
        <Image src="/images/home/community-hero.webp" alt="Un grupo de niñas y una mujer al aire libre, con árboles y otras personas al fondo" fill priority sizes="100vw" className="object-cover object-[58%_top] min-[375px]:object-[60%_top] md:object-[65%_top] lg:object-[center_top]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,18,15,.92)_0%,rgba(23,18,15,.72)_46%,rgba(23,18,15,.18)_100%)] max-lg:bg-black/50" />
        <div className="absolute inset-y-0 left-[7%] hidden w-px bg-gradient-to-b from-transparent via-[#DCAB56]/70 to-transparent lg:block" />
        <div className="page-shell relative flex min-h-[calc(100svh-5rem)] items-end py-14 sm:items-center sm:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#F2C36F]">Fe en acción · República Dominicana</p>
            <h1 className="mt-5 text-[clamp(2.75rem,7vw,6.7rem)] font-semibold leading-[.93] tracking-[-.055em] text-white">Asistencia Social y Apoyo a Poblaciones Vulnerables</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl">Organización de Beneficio Público dedicada a la asistencia social y al apoyo de poblaciones vulnerables, con enfoque en el desarrollo comunitario y la ayuda humanitaria, donde la esperanza se convierte en acción.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/galeria" className="button-primary justify-center">Nuestro trabajo en acción <ArrowRight className="size-4" /></Link>
              <Link href="/participa" className="button-light self-start justify-center sm:self-auto">Quiero ayudar</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#FCFBF8]">
        <div className="page-shell grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="overflow-hidden rounded-[2rem]">
              <Image src={sitePhotography.homeAbout.src} alt={sitePhotography.homeAbout.alt} width={sitePhotography.homeAbout.width} height={sitePhotography.homeAbout.height} sizes="(max-width:1024px) 100vw, 45vw" className="h-auto w-full" />
            </div>
            <div className="absolute -bottom-5 -right-2 max-w-[255px] rounded-2xl bg-[#AF090F] p-5 text-white shadow-2xl sm:-right-8 sm:p-6">
              <p className="text-sm font-semibold leading-6">“La fe debe llevarnos a la acción.”</p>
              <p className="mt-2 text-xs text-white/70">Guía institucional</p>
            </div>
          </div>
          <div>
            <p className="eyebrow">Quiénes somos</p>
            <h2 className="section-title mt-4">Apoyo a personas, familias y comunidades.</h2>
            <p className="body-large mt-6">Somos una Organización de Beneficio Público dedicada a la asistencia social, el apoyo a poblaciones vulnerables y el desarrollo comunitario en la República Dominicana.</p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600">Brindamos ayuda humanitaria y acompañamiento social con dignidad humana, solidaridad, servicio, responsabilidad y compromiso con las comunidades.</p>
            <Link href="/nosotros" className="text-link mt-8">Conoce nuestra historia <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white" aria-labelledby="home-gallery-title">
        <div className="page-shell">
          <div className="section-heading-row">
            <div><p className="eyebrow">Galería</p><h2 id="home-gallery-title" className="section-title mt-3">Nuestro trabajo en acción</h2></div>
            <Link href="/galeria" className="text-link">Ver galería completa <ArrowRight className="size-4" /></Link>
          </div>
          <div className="mt-10"><MediaGallery items={homepageGalleryItems} /></div>
        </div>
      </section>

      <section className="section-pad bg-[#AF090F] text-white" aria-labelledby="home-impact-title">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#F2C36F]">Nuestro impacto</p>
            <h2 id="home-impact-title" className="mt-4 text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">{impactReport.title}</h2>
            <p className="mt-6 leading-7 text-white/85">{impactReport.introduction}</p>
          </div>
          <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-5">
            {impact.map((item) => (
              <div key={item.id} className="flex min-w-0 flex-col border-t border-white/25 pt-5">
                <dt className="mt-3 text-sm font-semibold leading-6">{item.label}</dt>
                <dd className="order-first text-4xl font-semibold tracking-tight text-[#F2C36F]">{item.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-white/85">{impactReport.summaryNote}</p>
          <div className="mt-10 border-t border-white/25 pt-8">
            <h3 className="text-2xl font-semibold">Áreas de impacto</h3>
            <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {impactAreas.filter((area) => area.homepage).map((area) => (
                <li key={area.id} className="min-w-0"><h4 className="text-sm font-semibold leading-6">{area.title}</h4><p className="mt-2 text-sm leading-6 text-white/85">{area.description}</p></li>
              ))}
            </ul>
            <Link href="/transparencia#alcance" className="button-light mt-7">Ver áreas y contexto en Transparencia <ArrowRight className="size-4 shrink-0" aria-hidden="true" /></Link>
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

      <section className="section-pad bg-[#211A16] text-white">
        <div className="page-shell grid gap-10 lg:grid-cols-[1fr_.85fr] lg:items-center">
          <div><p className="eyebrow text-[#F2C36F]">Transparencia</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">La confianza se construye con evidencia.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">Nuestra labor está respaldada por información institucional, registros de actividades y evidencias fotográficas y audiovisuales. Documentamos nuestras acciones y resultados para que conozcas qué hacemos, cómo actuamos y a quiénes acompañamos.</p><Link href="/transparencia" className="button-light mt-8">Conoce nuestra transparencia <ArrowRight className="size-4" /></Link></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {[{icon:ShieldCheck,title:"Gobernanza",text:"Consejo Directivo y responsabilidades definidas."},{icon:BookOpenText,title:"Documentos",text:"Estatutos y memoria de actividades como respaldo institucional."},{icon:HandHeart,title:"Evidencia",text:"Resultados documentados y fotografías y videos de nuestra labor."},{icon:HeartHandshake,title:"Rendición",text:"Compromiso con el uso responsable de los recursos."}].map(({icon:Icon,title,text}) => <div key={title} className="rounded-2xl border border-white/10 bg-white/[.055] p-6"><Icon className="size-6 text-[#F2C36F]" /><h3 className="mt-4 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-stone-400">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="text-center"><p className="eyebrow">Participa</p><h2 className="section-title mx-auto mt-4 max-w-3xl">Hay más de una forma de encender esperanza.</h2></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[{icon:HeartHandshake,title:"Donar",text:"Aporta mediante transferencia bancaria cuando los datos oficiales estén habilitados.",href:"/donar",cta:"Ver cómo donar"},{icon:Users,title:"Ser voluntario",text:"Ofrece tiempo, talentos, logística o conocimiento profesional.",href:"/participa#voluntariado",cta:"Quiero participar"},{icon:Building2,title:"Ser aliado",text:"Construyamos colaboraciones con empresas, iglesias e instituciones.",href:contactWhatsAppUrl,cta:"Conversemos"}].map(({icon:Icon,title,text,href,cta}) => <article key={title} className="rounded-[1.7rem] border border-stone-200 p-7 transition hover:border-[#DCAB56] hover:shadow-lg"><Icon className="size-7 text-[#AF090F]" /><h3 className="mt-5 text-2xl font-semibold">{title}</h3><p className="mt-3 min-h-18 text-sm leading-6 text-stone-600">{text}</p><Link href={href} target={href.startsWith("https://") ? "_blank" : undefined} rel={href.startsWith("https://") ? "noopener noreferrer" : undefined} className="text-link mt-6">{cta} <ArrowRight className="size-4" /></Link></article>)}
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
