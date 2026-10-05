"use client";

import Image from "next/image";
import { useEffect, useRef, type RefObject } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { GalleryMedia, GalleryVideo } from "@/data/gallery-media";

function RequestedVideo({ item }: { item: GalleryVideo }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    return () => {
      if (!video) return;
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, []);
  return <video ref={ref} src={item.src} poster={item.poster} width={item.width} height={item.height} controls playsInline preload="metadata" className="media-viewer-content" aria-label={item.alt ?? "Video de la galería"} />;
}

export function MediaLightbox({ items, index, onChange, onClose, returnFocusRef }: {
  items: readonly GalleryMedia[];
  index: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
}) {
  const item = index === null ? null : items[index];
  const step = (offset: number) => {
    if (index !== null) onChange((index + offset + items.length) % items.length);
  };
  return (
    <Dialog open={item !== null} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent showCloseButton={false} className="media-viewer" onCloseAutoFocus={(event) => { event.preventDefault(); returnFocusRef.current?.focus(); }} onKeyDown={(event) => {
        // Let native video controls keep their own seek/volume keyboard shortcuts.
        if (event.target instanceof HTMLVideoElement) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          step(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}>
        <div className="flex min-w-0 items-center justify-between gap-3">
          <DialogTitle className="text-base text-white">{item?.type === "video" ? "Video" : "Fotografía"} {index === null ? "" : index + 1} de {items.length}</DialogTitle>
          <DialogClose asChild><button type="button" className="media-viewer-button" aria-label="Cerrar galería"><X aria-hidden="true" className="size-5" /></button></DialogClose>
        </div>
        <DialogDescription className="sr-only">Usa los botones anterior y siguiente para explorar. Pulsa Escape para cerrar. Los videos se reproducen con sus controles.</DialogDescription>
        <div className="media-viewer-stage">
          {item?.type === "image" && <Image key={item.id} src={item.src} alt={item.alt ?? ""} width={item.width} height={item.height} sizes="(max-width: 768px) 94vw, 85vw" className="media-viewer-content" />}
          {item?.type === "video" && <RequestedVideo key={item.id} item={item} />}
        </div>
        {item?.caption && <p className="text-sm text-stone-200">{item.caption}</p>}
        <div className="flex items-center justify-between gap-3">
          <button type="button" className="media-viewer-button" onClick={() => step(-1)} aria-label="Medio anterior"><ArrowLeft className="size-5" aria-hidden="true" /><span>Anterior</span></button>
          <p className="sr-only" aria-live="polite">{item?.type === "video" ? "Video" : "Fotografía"} {index === null ? "" : index + 1} de {items.length}</p>
          <button type="button" className="media-viewer-button" onClick={() => step(1)} aria-label="Medio siguiente"><span>Siguiente</span><ArrowRight className="size-5" aria-hidden="true" /></button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
