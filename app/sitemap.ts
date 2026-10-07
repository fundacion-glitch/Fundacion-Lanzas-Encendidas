import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { allowIndexing, seoPages } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!allowIndexing) return [];
  // No fabricated last-modified dates: these pages have no editorial timestamps.
  return Object.keys(seoPages).map((path) => ({ url: new URL(path, SITE_URL).href }));
}
