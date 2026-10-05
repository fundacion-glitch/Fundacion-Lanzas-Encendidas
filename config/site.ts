export const SITE_URL = "https://fundacion-lanzas-encendidas.reynaldoc505.chatgpt.site";

export const siteConfig = {
  name: "Fundación Lanzas Encendidas",
  shortName: "Lanzas Encendidas",
  description:
    "Asociación sin fines de lucro de República Dominicana dedicada al apoyo humanitario, social y comunitario.",
  address:
    "Calle I, No. 16, Barrio Guachupita, Consuelo, San Pedro de Macorís, República Dominicana",
  area: "Todo el territorio nacional",
  email: "Info@fundacionlanzasencendidas.com",
  rnc: "4-30-45171-1",
  registration: "28974/2026",
  provinceMunicipality: "San Pedro de Macorís, Municipio Consuelo",
  whatsapp: "18096158218",
  whatsappDefaultMessage:
    "Hola, quisiera información sobre cómo realizar una donación a Fundación Lanzas Encendidas.",
  social: {
    instagram: "https://www.instagram.com/f_lanzas_encendidas",
    facebook: "https://www.facebook.com/profile.php?id=100071342854297",
    tiktok: "https://www.tiktok.com/@f_lanzas_encendidas",
    youtube: "",
    x: "",
  },
  bank: {
    bank: "PENDIENTE_DE_CONFIGURAR",
    accountType: "PENDIENTE_DE_CONFIGURAR",
    accountNumber: "PENDIENTE_DE_CONFIGURAR",
    holder: "Fundación Lanzas Encendidas",
    rnc: "4-30-45171-1",
  },
} as const;

export const contactWhatsAppUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hola, quisiera comunicarme con Fundación Lanzas Encendidas.")}`;

export const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/galeria", label: "Galería" },
  { href: "/participa", label: "Participa" },
  { href: "/transparencia", label: "Transparencia" },
  { href: "/contacto", label: "Contacto" },
] as const;
