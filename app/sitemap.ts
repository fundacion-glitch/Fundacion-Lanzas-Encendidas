import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/nosotros", "/galeria", "/donar", "/participa", "/transparencia", "/contacto", "/privacidad"];
  return routes.map((route) => ({ url: `${SITE_URL}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : .7 }));
}
