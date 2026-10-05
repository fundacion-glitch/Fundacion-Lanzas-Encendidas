"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import type { GalleryMedia } from "@/data/gallery-media";
import { MediaLightbox } from "@/components/media-lightbox";

function formatMediaDuration(seconds: number) {
  const rounded = Math.floor(seconds);
  return `${Math.floor(rounded / 60)}:${String(rounded % 60).padStart(2, "0")}`;
}

export function MediaGallery({ items, initialCount = items.length }: {
  items: readonly GalleryMedia[];
  initialCount?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const returnFocusRef = useRef<HTMLButtonElement>(null);
  const buttons = useRef(new Map<number, HTMLButtonElement>());
  const gridId = useId();
  const visible = expanded ? items : items.slice(0, initialCount);
  return (
    <div>
      <div id={gridId} className="media-editorial-grid">
        {visible.map((item, index) => (
          <figure key={item.id} style={item.type === "video" ? { maxWidth: item.posterWidth } : undefined} className={`media-editorial-item media-editorial-${item.orientation}`}>
            <button ref={(node) => { if (node) buttons.current.set(index, node); else buttons.current.delete(index); }} type="button" className="media-editorial-button" data-media-id={item.id} data-media-type={item.type} onClick={(event) => { returnFocusRef.current = event.currentTarget; setSelected(index); }} aria-label={`${item.type === "video" ? "Abrir video" : "Abrir fotografía"} ${index + 1}${item.type === "video" ? `, duración ${formatMediaDuration(item.durationSeconds)}` : ""}`} aria-haspopup="dialog">
              <Image src={item.type === "video" ? item.poster : item.src} alt={item.alt ?? ""} width={item.type === "video" ? item.posterWidth : item.width} height={item.type === "video" ? item.posterHeight : item.height} loading="lazy" sizes="(max-width: 639px) 94vw, (max-width: 1023px) 48vw, 58vw" className="media-editorial-image" />
              {item.type === "video" ? <><span className="media-play" aria-hidden="true"><Play className="size-6 fill-current" /></span><span className="media-duration" aria-hidden="true">Video · {formatMediaDuration(item.durationSeconds)}</span></> : <span className="media-expand" aria-hidden="true"><ArrowUpRight className="size-5" /></span>}
            </button>
            {item.caption && <figcaption className="mt-3 text-sm leading-6 text-stone-600">{item.caption}</figcaption>}
          </figure>
        ))}
      </div>
      <p className="sr-only" role="status">{visible.length} de {items.length} elementos visibles</p>
      {!expanded && items.length > initialCount && <div className="mt-12 flex justify-center"><button type="button" className="button-secondary" aria-controls={gridId} aria-expanded={false} onClick={() => {
        setExpanded(true);
        requestAnimationFrame(() => buttons.current.get(initialCount)?.focus());
      }}>Ver más <ArrowDown aria-hidden="true" className="size-4" /></button></div>}
      <MediaLightbox items={visible} index={selected} onChange={setSelected} onClose={() => setSelected(null)} returnFocusRef={returnFocusRef} />
    </div>
  );
}
