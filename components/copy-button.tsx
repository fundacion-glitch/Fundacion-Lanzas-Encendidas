"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const unavailable = value.includes("PENDIENTE");

  async function copy() {
    if (unavailable) return;
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button type="button" onClick={copy} disabled={unavailable} className="button-secondary text-sm disabled:cursor-not-allowed disabled:opacity-45" aria-live="polite">
      {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
      {copied ? "Copiado" : label}
    </button>
  );
}
