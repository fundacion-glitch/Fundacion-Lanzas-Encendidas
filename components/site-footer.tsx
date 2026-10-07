import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { navItems, siteConfig } from "@/config/site";
import { OfficialSocialLinks } from "@/components/official-social-links";

export function SiteFooter() {
  return (
    <footer className="bg-[#17120F] text-stone-300">
      <div className="page-shell grid gap-12 py-16 md:grid-cols-[1.25fr_.75fr_1fr]">
        <div>
          <Image
            src="/images/brand/logo-white.png"
            alt="Fundación Lanzas Encendidas"
            width={320}
            height={146}
            className="h-auto w-[230px]"
          />
          <p className="mt-6 max-w-md text-base leading-7 text-stone-400">
            Apoyo humanitario, social y comunitario con dignidad, esperanza y una fe que se convierte en servicio.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[.16em] text-[#F2C36F]">Explora</h2>
          <ul className="mt-5 grid gap-3 text-sm">
            {navItems.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} target={item.href.startsWith("https://") ? "_blank" : undefined} rel={item.href.startsWith("https://") ? "noopener noreferrer" : undefined} className="transition hover:text-white">{item.label}</Link>
              </li>
            ))}
            <li><Link href="/donar" className="transition hover:text-white">Donar</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[.16em] text-[#F2C36F]">Información</h2>
          <div className="mt-5 space-y-4 text-sm leading-6 text-stone-400">
            {siteConfig.email ? (
              <a className="flex items-center gap-3 hover:text-white" href={`mailto:${siteConfig.email}`}>
                <Mail className="size-4 text-[#F2C36F]" aria-hidden="true" />{siteConfig.email}
              </a>
            ) : (
              <p className="flex items-center gap-3"><Mail className="size-4 text-[#F2C36F]" aria-hidden="true" />Correo institucional pendiente</p>
            )}
            <OfficialSocialLinks linkClassName="hover:text-white" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="page-shell flex flex-col gap-3 py-5 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Fundación Lanzas Encendidas.</p>
          <div className="flex gap-5">
            <Link href="/privacidad" className="hover:text-stone-300">Privacidad</Link>
            <Link href="/transparencia" className="hover:text-stone-300">Transparencia</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
