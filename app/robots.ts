import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { allowIndexing } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
