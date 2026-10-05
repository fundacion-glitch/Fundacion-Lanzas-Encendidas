import { ArrowDownToLine, FileClock, FileText } from "lucide-react";
import type { TransparencyCategory } from "@/data/transparency";

export function TransparencyDocumentSection({ category }: { category: TransparencyCategory }) {
  return (
    <section id={category.id} aria-labelledby={`${category.id}-title`} className="section-pad scroll-mt-24 border-t border-stone-200 bg-[#FCFBF8]">
      <div className="page-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <h2 id={`${category.id}-title`} className="section-title">{category.title}</h2>
          <p className="mt-5 text-base leading-8 text-stone-600">{category.introduction}</p>
        </div>
        <div className="space-y-4">
          {category.documents.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-6">
              <FileClock className="size-7 text-stone-500" aria-hidden="true" />
              <p className="mt-4 text-sm leading-7 text-stone-600">{category.emptyMessage}</p>
            </div>
          ) : category.documents.map((document) => document.status === "available" ? (
            <a key={document.id} href={document.href} target="_blank" rel="noreferrer" className="group flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5 transition hover:border-[#AF090F] focus-visible:outline-2 focus-visible:outline-[#AF090F]">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#AF090F]/8 text-[#AF090F]"><FileText className="size-6" aria-hidden="true" /></span>
              <span className="min-w-0 flex-1">
                <strong className="block text-stone-950">{document.title}</strong>
                <span className="mt-1 block text-sm text-stone-600">{document.description}</span>
                <span className="mt-2 block text-xs font-semibold text-[#97080D]">Disponible · Abrir documento en una nueva pestaña</span>
              </span>
              <ArrowDownToLine className="mt-1 size-5 shrink-0 text-stone-500 group-hover:text-[#AF090F]" aria-hidden="true" />
            </a>
          ) : (
            <div key={document.id} className="flex items-start gap-4 rounded-2xl border border-dashed border-stone-300 bg-white/60 p-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-stone-100 text-stone-500"><FileClock className="size-6" aria-hidden="true" /></span>
              <div><h3 className="font-semibold text-stone-700">{document.title}</h3><p className="mt-1 text-sm text-stone-600">Pendiente de publicación · Sin documento disponible</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
