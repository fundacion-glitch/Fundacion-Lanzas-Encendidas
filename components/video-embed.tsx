"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

type Props = {
  title: string;
  caption?: string;
  thumbnail: string;
  provider?: "youtube" | "vimeo";
  videoId?: string;
};

export function VideoEmbed({ title, caption, thumbnail, provider, videoId }: Props) {
  const [playing, setPlaying] = useState(false);
  const src = provider === "vimeo"
    ? `https://player.vimeo.com/video/${videoId}`
    : `https://www.youtube-nocookie.com/embed/${videoId}`;

  return (
    <figure>
      <div className="relative aspect-video overflow-hidden rounded-[1.8rem] bg-stone-900 shadow-xl">
        {playing && videoId ? (
          <iframe
            src={`${src}?autoplay=1`}
            title={title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <Image src={thumbnail} alt="" fill sizes="(max-width: 1024px) 100vw, 70vw" className="object-cover opacity-75" />
            <div className="absolute inset-0 bg-black/30" />
            <button
              type="button"
              onClick={() => videoId && setPlaying(true)}
              disabled={!videoId}
              className="absolute inset-0 grid place-items-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-white disabled:cursor-default"
              aria-label={videoId ? `Reproducir ${title}` : "Video pendiente de agregar"}
            >
              <span className="grid size-20 place-items-center rounded-full bg-white text-[#AF090F] shadow-2xl transition hover:scale-105">
                <Play className="ml-1 size-7 fill-current" aria-hidden="true" />
              </span>
            </button>
            {!videoId && <span className="absolute bottom-5 left-5 rounded-full bg-black/60 px-4 py-2 text-xs font-semibold text-white">Video próximamente</span>}
          </>
        )}
      </div>
      {(title || caption) && <figcaption className="mt-4"><strong className="text-stone-900">{title}</strong>{caption && <span className="ml-2 text-sm text-stone-500">{caption}</span>}</figcaption>}
    </figure>
  );
}
