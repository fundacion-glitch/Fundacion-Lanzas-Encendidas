"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeartHandshake, Menu } from "lucide-react";
import { navItems } from "@/config/site";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/95 backdrop-blur-xl">
      <div className="page-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="Fundación Lanzas Encendidas — Inicio" className="shrink-0">
          <Image
            src="/images/brand/logo-color.png"
            alt="Fundación Lanzas Encendidas"
            width={246}
            height={112}
            priority
            className="h-auto w-[168px] sm:w-[196px]"
          />
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                target={item.href.startsWith("https://") ? "_blank" : undefined}
                rel={item.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-100 hover:text-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AF090F]",
                  active && "bg-[#AF090F]/8 text-[#8F070C]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Link href="/donar" className="button-primary">
              <HeartHandshake aria-hidden="true" className="size-4" />
              Donar
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <button type="button" className="icon-button grid lg:hidden" aria-label="Abrir menú">
                <Menu className="size-5" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent className="w-[min(92vw,390px)] border-l-stone-200 bg-[#FCFBF8] p-0">
              <SheetHeader className="border-b border-stone-200 p-6 text-left">
                <Image
                  src="/images/brand/logo-color.png"
                  alt="Fundación Lanzas Encendidas"
                  width={220}
                  height={100}
                  className="h-auto w-[185px]"
                />
                <SheetTitle className="sr-only">Menú principal</SheetTitle>
                <SheetDescription className="sr-only">Enlaces principales del sitio</SheetDescription>
              </SheetHeader>
              <nav aria-label="Navegación móvil" className="flex flex-col p-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      target={item.href.startsWith("https://") ? "_blank" : undefined}
                      rel={item.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                      className={cn(
                        "rounded-xl px-4 py-3.5 text-base font-medium text-stone-800 hover:bg-white",
                        pathname === item.href && "bg-white text-[#AF090F] shadow-sm",
                      )}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link href="/donar" className="button-primary mt-5 justify-center">
                    <HeartHandshake aria-hidden="true" className="size-4" />
                    Donar
                  </Link>
                </SheetClose>
              </nav>
              <p className="mt-auto p-6 text-sm leading-relaxed text-stone-500">
                Fe que sirve. Comunidad que transforma.
              </p>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
