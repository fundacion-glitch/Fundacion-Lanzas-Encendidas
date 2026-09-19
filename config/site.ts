export const SITE_URL = "https://fundacion-lanzas-encendidas.reynaldoc505.chatgpt.site";

export const siteConfig = {
  name: "Fundación Lanzas Encendidas",
  shortName: "Lanzas Encendidas",
  description:
    "Asociación sin fines de lucro de República Dominicana dedicada al apoyo humanitario, social y comunitario.",
  address:
    "Calle I, No. 16, Barrio Guachupita, Consuelo, San Pedro de Macorís, República Dominicana",
  area: "Todo el territorio nacional",
  email: "",
  rnc: "",
  whatsapp: "",
  whatsappDefaultMessage:
    "Hola, quisiera información sobre cómo realizar una donación a Fundación Lanzas Encendidas.",
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
    youtube: "",
    x: "",
  },
  bank: {
    bank: "PENDIENTE_DE_CONFIGURAR",
    accountType: "PENDIENTE_DE_CONFIGURAR",
    accountNumber: "PENDIENTE_DE_CONFIGURAR",
    holder: "Fundación Lanzas Encendidas",
    rnc: "PENDIENTE_DE_CONFIGURAR",
  },
} as const;

export const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/participa", label: "Participa" },
  { href: "/transparencia", label: "Transparencia" },
  { href: "/contacto", label: "Contacto" },
] as const;
