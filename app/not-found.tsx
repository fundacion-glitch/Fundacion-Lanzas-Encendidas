import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return <section className="grid min-h-[70svh] place-items-center bg-[#FCFBF8] px-5 py-20 text-center"><div><p className="text-8xl font-semibold text-[#DCAB56]">404</p><h1 className="mt-5 text-3xl font-semibold tracking-[-.03em] sm:text-5xl">Esta página no está aquí.</h1><p className="mx-auto mt-5 max-w-lg leading-7 text-stone-600">Puede que el enlace haya cambiado o que el contenido todavía no esté disponible.</p><Link href="/" className="button-primary mt-8"><ArrowLeft className="size-4" />Volver al inicio</Link></div></section>;
}
