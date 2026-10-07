import { sitePhotography } from "@/data/site-photography";
import type { Metadata } from "next";
import Link from "next/link";
import { Building2, CircleCheck, HeartHandshake, LockKeyhole, MessageCircle } from "lucide-react";
import { CopyButton } from "@/components/copy-button";
import { InternalHero } from "@/components/internal-hero";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Donar",
  description: "Información para apoyar a Fundación Lanzas Encendidas mediante transferencia bancaria.",
  alternates: { canonical: "/donar" },
};

export default function DonarPage() {
  const whatsappUrl = getWhatsAppUrl();
  const bankReady = !siteConfig.bank.accountNumber.includes("PENDIENTE");
  return (
    <>
      <InternalHero eyebrow="Donar" title="Tu aporte puede convertirse en una respuesta concreta." intro="En esta primera versión, las donaciones se gestionarán mediante transferencia bancaria y confirmación directa con la Fundación." image={sitePhotography.donateHero.src} imageAlt={sitePhotography.donateHero.alt} imagePosition={sitePhotography.donateHero.position} />
      <section className="section-pad bg-[#FCFBF8]">
        <div className="page-shell grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-xl shadow-stone-200/40 sm:p-10">
            <div className="flex items-center gap-3"><span className="grid size-12 place-items-center rounded-2xl bg-[#AF090F]/8 text-[#AF090F]"><Building2 className="size-6" /></span><div><p className="eyebrow">Transferencia bancaria</p><h2 className="mt-1 text-2xl font-semibold">Datos de la Fundación</h2></div></div>
            {!bankReady && <div className="mt-7 rounded-2xl border border-[#DCAB56]/50 bg-[#FFF8E9] p-4 text-sm leading-6 text-[#6A4A16]">Los datos bancarios oficiales aún no han sido proporcionados. Por seguridad, no se muestra ninguna cuenta hasta que sea confirmada.</div>}
            <dl className="mt-8 divide-y divide-stone-200">
              {[['Banco',siteConfig.bank.bank],['Tipo de cuenta',siteConfig.bank.accountType],['Número de cuenta',siteConfig.bank.accountNumber],['Titular',siteConfig.bank.holder]].map(([label,value]) => <div key={label} className="grid gap-2 py-4 sm:grid-cols-[145px_1fr]"><dt className="text-sm text-stone-500">{label}</dt><dd className="break-words font-semibold text-stone-900">{value.includes('PENDIENTE') ? 'Pendiente de configurar' : value}</dd></div>)}
            </dl>
            <div className="mt-6 flex flex-wrap gap-3"><CopyButton value={siteConfig.bank.accountNumber} label="Copiar número de cuenta" /></div>
          </div>
          <div className="space-y-5">
            <article className="rounded-[2rem] bg-[#AF090F] p-7 text-white sm:p-9"><HeartHandshake className="size-8 text-[#F2C36F]" /><h2 className="mt-6 text-3xl font-semibold">Antes de transferir</h2><ul className="mt-6 space-y-4 text-sm leading-6 text-white/80">{['Confirma que los datos pertenezcan a Fundación Lanzas Encendidas.','Conserva el comprobante de la transferencia.','Consulta el canal oficial antes de hacer una entrega en especie.'].map((item) => <li key={item} className="flex gap-3"><CircleCheck className="mt-0.5 size-5 shrink-0 text-[#F2C36F]" />{item}</li>)}</ul></article>
            <article className="rounded-[2rem] border border-stone-200 bg-white p-7"><LockKeyhole className="size-7 text-[#AF090F]" /><h2 className="mt-4 text-xl font-semibold">Donación segura</h2><p className="mt-3 text-sm leading-6 text-stone-600">Este sitio no solicita números de tarjeta, contraseñas bancarias ni códigos de verificación.</p></article>
            {whatsappUrl ? <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-primary w-full justify-center"><MessageCircle className="size-4" />Consultar o confirmar por WhatsApp</a> : <Link href="/contacto" className="button-primary w-full justify-center"><MessageCircle className="size-4" />Consultar canales de contacto</Link>}
          </div>
        </div>
      </section>
    </>
  );
}
