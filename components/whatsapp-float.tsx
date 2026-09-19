import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const url = getWhatsAppUrl();
  if (!url) return null;
  return (
    <a href={url} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp" className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#1FAF63] text-white shadow-[0_12px_30px_rgba(0,0,0,.22)] transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1FAF63]/40">
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  );
}
