"use client";

import { useState, useSyncExternalStore } from "react";
import { Check, Copy, MessageCircle, Share2 } from "lucide-react";

function subscribeToUrlChange(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  window.addEventListener("hashchange", onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener("hashchange", onChange);
  };
}

export function ShareActions({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const url = useSyncExternalStore(subscribeToUrlChange, () => window.location.href, () => "");
  const encoded = encodeURIComponent(url);
  const text = encodeURIComponent(title);

  async function copy() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="flex flex-wrap gap-2" aria-label="Compartir proyecto">
      <a className="share-button" href={`https://wa.me/?text=${text}%20${encoded}`} target="_blank" rel="noreferrer"><MessageCircle className="size-4" />WhatsApp</a>
      <a className="share-button" href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`} target="_blank" rel="noreferrer"><Share2 className="size-4" />Facebook</a>
      <button type="button" className="share-button" onClick={copy}>{copied ? <Check className="size-4" /> : <Copy className="size-4" />}{copied ? "Copiado" : "Copiar enlace"}</button>
    </div>
  );
}
