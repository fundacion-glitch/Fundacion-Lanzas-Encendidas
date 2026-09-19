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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_DO",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: SITE_URL,
  },
  twitter: {
    card: "summary",
    title: siteConfig.name,
    description: siteConfig.description,
  },
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: siteConfig.name,
              url: SITE_URL,
              description: siteConfig.description,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle I, No. 16, Barrio Guachupita",
                addressLocality: "Consuelo",
                addressRegion: "San Pedro de Macorís",
                addressCountry: "DO",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
