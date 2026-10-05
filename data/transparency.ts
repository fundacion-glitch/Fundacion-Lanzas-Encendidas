export type TransparencyDocument = {
  id: string;
  title: string;
} & (
  | { status: "available"; href: string; description: string }
  | { status: "pending" }
);

export type TransparencyCategory = {
  id: string;
  title: string;
  introduction: string;
  emptyMessage: string;
  documents: TransparencyDocument[];
};

export const transparency = {
  institutionalDocuments: {
    id: "documentos-institucionales",
    title: "Documentos institucionales",
    introduction: "Consulta los documentos institucionales disponibles para conocer la organización y su estructura de gobierno.",
    emptyMessage: "No hay documentos institucionales publicados en esta sección.",
    documents: [{
      id: "estatutos",
      title: "Estatutos Fundación Lanzas Encendidas",
      status: "available",
      href: "/documents/estatutos-fundacion-lanzas-encendidas.pdf",
      description: "Documento institucional · PDF",
    }],
  },
  certifications: {
    id: "certificaciones",
    title: "Certificaciones",
    introduction: "Espacio para la publicación de certificaciones oficiales y gubernamentales, cuando se disponga de documentos para su consulta pública.",
    emptyMessage: "Sin certificaciones publicadas. Esta sección no acredita certificaciones ni avales gubernamentales.",
    documents: [],
  },
  training: {
    id: "formacion-y-cursos",
    title: "Formación y cursos",
    introduction: "Aquí se podrán consultar evidencias de formación y cursos realizados por la Fundación o su equipo, cuando estén documentados y disponibles para publicación.",
    emptyMessage: "Sin registros de formación o cursos publicados. Se incorporarán cuando exista documentación disponible.",
    documents: [],
  },
  reports: {
    id: "informes-y-rendicion",
    title: "Informes y rendición de cuentas",
    introduction: "Esta sección reunirá información sobre el uso de los recursos, las actividades realizadas y sus resultados. Las categorías pendientes no representan informes ya elaborados o disponibles.",
    emptyMessage: "No hay informes publicados en esta sección.",
    documents: [
      { id: "memoria-anual", title: "Memoria anual", status: "pending" },
      { id: "estados-financieros", title: "Estados financieros", status: "pending" },
      { id: "informes-proyectos", title: "Informes de proyectos y evidencias", status: "pending" },
      { id: "informe-impacto", title: "Informe de impacto", status: "pending" },
    ],
  },
} satisfies Record<string, TransparencyCategory>;
