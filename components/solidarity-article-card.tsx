import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import type { SolidarityArticle } from "@/data/solidarity-articles";

export function SolidarityArticleCard({ article, inquiryUrl }: { article: SolidarityArticle; inquiryUrl: string | null }) {
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-[1.6rem] border border-stone-200 bg-white text-stone-900 shadow-[0_10px_35px_rgba(0,0,0,.1)]">
      <figure>
        <div className="relative aspect-[4/3] bg-[#F5F1EA]">
          <Image src={article.image.src} alt={article.image.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw" className="object-contain" />
        </div>
        {(article.image.caption || article.image.isPlaceholder) && <figcaption className="border-t border-stone-200 bg-[#FCFBF8] px-5 py-3 text-xs leading-5 text-stone-600">{article.image.caption ?? "Imagen ilustrativa · no es el modelo final"}</figcaption>}
      </figure>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-2xl font-semibold tracking-[-.025em]">{article.name}</h3>
        <p className="mt-3 text-sm leading-6 text-stone-600">{article.description}</p>
        {article.status && <p className="mt-4 text-sm font-medium text-stone-600">{article.status}</p>}
        {article.price && <p className="mt-4 text-lg font-semibold">{article.price}</p>}
        <div className="mt-auto pt-6">
          {inquiryUrl ? (
            <a href={inquiryUrl} target="_blank" rel="noreferrer" aria-label={`Consultar por WhatsApp sobre ${article.name}`} className="button-primary w-full justify-center text-sm"><MessageCircle className="size-4 shrink-0" aria-hidden="true" />Consultar por WhatsApp</a>
          ) : (
            <Link href="/contacto" className="button-primary w-full justify-center text-sm">Consultar con la Fundación</Link>
          )}
        </div>
      </div>
    </article>
  );
}
