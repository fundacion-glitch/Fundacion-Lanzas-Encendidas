import { siteConfig } from "@/config/site";

export function getWhatsAppUrl(message: string = siteConfig.whatsappDefaultMessage) {
  const number = siteConfig.whatsapp.replace(/\D/g, "");
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
