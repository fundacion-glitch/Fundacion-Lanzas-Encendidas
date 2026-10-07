import { allowIndexing, institutionalStructuredData } from "@/lib/seo";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { SITE_URL, siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fundación Lanzas Encendidas",
    template: "%s | Fundación Lanzas Encendidas",
  },
  description: siteConfig.description,
  robots: { index: allowIndexing, follow: true, googleBot: { index: allowIndexing, follow: true, "max-image-preview": "large" } },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <a href="#contenido" className="skip-link">Saltar al contenido</a>
        <SiteHeader />
        <main id="contenido">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(institutionalStructuredData()).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
