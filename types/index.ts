export type ProjectStatus = "Activo" | "Meta alcanzada" | "Finalizado" | "Próximamente";

export type Project = {
  slug: string;
  title: string;
  excerpt: string;
  story: string[];
  category: string;
  location: string;
  status: ProjectStatus;
  date: string;
  image: string;
  imageAlt: string;
  goal?: number;
  raised?: number;
  beneficiaries?: string;
  objective: string;
  results: string[];
  updates: { date: string; title: string; body: string }[];
  gallery: { src: string; alt: string; caption: string }[];
  video?: { provider: "youtube" | "vimeo"; id: string; title: string; caption?: string };
  isDemo: boolean;
  sourceNote: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image?: string;
};
