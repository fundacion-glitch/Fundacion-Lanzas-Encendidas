"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type GalleryItem = { src: string; alt: string; caption: string };

export function GalleryLightbox({ items }: { items: GalleryItem[] }) {
  const galleryItems = [...items, ...items].slice(0, 6);
  return (
    <div className="gallery-grid">
      {galleryItems.map((item, index) => (
        <Dialog key={`${item.src}-${index}`}>
          <DialogTrigger asChild>
            <button type="button" className="group relative min-h-[220px] overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#AF090F]/40" aria-label={`Abrir imagen ${index + 1}: ${item.alt}`}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-[1.04]" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12 text-left text-xs text-white">Imagen conceptual</span>
            </button>
          </DialogTrigger>
          <DialogContent className="max-h-[92vh] max-w-5xl overflow-auto border-0 bg-[#17120F] p-3 text-white sm:p-5">
            <DialogHeader className="sr-only">
              <DialogTitle>{item.alt}</DialogTitle>
              <DialogDescription>{item.caption}</DialogDescription>
            </DialogHeader>
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
              <Image src={item.src} alt={item.alt} fill sizes="90vw" className="object-contain" />
            </div>
            <p className="px-2 pb-2 text-sm text-stone-300">{item.caption}</p>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
