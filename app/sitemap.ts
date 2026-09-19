import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/nosotros", "/proyectos", "/donar", "/participa", "/transparencia", "/contacto", "/privacidad"];
  return [...routes.map((route) => ({ url: `${SITE_URL}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : .7 })), ...projects.map((project) => ({ url: `${SITE_URL}/proyectos/${project.slug}`, changeFrequency: "weekly" as const, priority: .8 }))];
}
