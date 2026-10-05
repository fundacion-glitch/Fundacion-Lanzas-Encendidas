export const impactReport = {
  period: "2021–2026",
  source: "Memoria de Actividades y Evidencias Institucionales 2021–2026",
  title: "Impacto que podemos respaldar.",
  introduction: "Una mirada al alcance de nuestra labor social y a las distintas formas de asistencia brindadas entre 2021 y 2026.",
  summaryNote: "Son registros documentados de asistencia; pueden incluir personas o familias atendidas en más de una jornada. No representan un total de beneficiarios únicos.",
  methodology: "Las cifras presentadas corresponden a registros documentados de distintas acciones realizadas entre 2021 y 2026. Cuando una categoría reúne registros de varias jornadas, las cifras representan atenciones documentadas y no necesariamente personas o familias únicas.",
  calculationNote: "Las categorías no se suman entre sí. El registro de niñez de 2022 es aproximado; no se presenta como un conteo exacto de personas únicas.",
} as const;

export interface ImpactIndicator {
  id: string;
  value: string;
  label: string;
  period: string;
  source: string;
  status: "documented";
  sourceRecords: readonly string[];
  calculation: string;
}

// Source: verified report extracts supplied by the Foundation for this implementation.
// These are the authorized conservative display figures, not independently verified
// unique beneficiaries. Keep activity names internal and never sum across categories.
// “More than” thresholds are added without inventing exact counts; the child record
// for 2022 is approximate, so +260 must not be described as an exact statistical minimum.
export const impact: readonly ImpactIndicator[] = [
  {
    id: "familias",
    value: "+267",
    label: "Atenciones a familias",
    period: impactReport.period,
    source: impactReport.source,
    status: "documented",
    sourceRecords: [
      "Más de 30 familias — Batey Euskarduna, 2021",
      "Más de 30 familias — Batey Margarita, 2022",
      "Más de 40 familias — Hato Mayor del Rey, 2022",
      "Más de 50 familias — asistencia con canastas navideñas, 2024",
      "Más de 117 familias — Operación Canastas Navideñas, 2025",
    ],
    calculation: "30 + 30 + 40 + 50 + 117 = 267. Atenciones a familias; no hogares únicos.",
  },
  {
    id: "ninez",
    value: "+260",
    label: "Niños y niñas alcanzados",
    period: impactReport.period,
    source: impactReport.source,
    status: "documented",
    sourceRecords: [
      "Más de 30 niños y niñas, 2021",
      "Alrededor de 80 niños y niñas, 2022 (registro aproximado)",
      "Más de 150 niños y niñas — celebración del Día de Reyes, 2026",
    ],
    calculation: "30 + aproximadamente 80 + 150 = referencia de 260. Cifra autorizada; posibles repeticiones entre jornadas. Se excluyen grupos mixtos sin conteo separado.",
  },
  {
    id: "mujeres",
    value: "+100",
    label: "Mujeres acompañadas",
    period: impactReport.period,
    source: impactReport.source,
    status: "documented",
    sourceRecords: ["Más de 100 mujeres privadas de libertad recibieron asistencia y acompañamiento."],
    calculation: "Umbral del registro de más de 100; no total histórico de mujeres atendidas.",
  },
  {
    id: "maternidad",
    value: "+50",
    label: "Madres y gestantes",
    period: impactReport.period,
    source: impactReport.source,
    status: "documented",
    sourceRecords: [
      "Más de 20 madres en situación de vulnerabilidad y sus recién nacidos.",
      "Más de 30 gestantes.",
    ],
    calculation: "20 + 30 = 50. Se excluyen los recién nacidos del cálculo; no se presupone que sean personas únicas entre registros.",
  },
  {
    id: "salud",
    value: "+50",
    label: "Pacientes atendidos",
    period: impactReport.period,
    source: impactReport.source,
    status: "documented",
    sourceRecords: ["Más de 50 pacientes hospitalizados alcanzados mediante asistencia hospitalaria."],
    calculation: "Umbral del registro de más de 50 pacientes; no total histórico.",
  },
];

export const impactAreas = [
  { id: "alimentacion", title: "Alimentación", description: "Alimentos, refrigerios y canastas de asistencia.", homepage: true },
  { id: "educacion", title: "Apoyo educativo", description: "Útiles y recursos escolares.", homepage: true },
  { id: "higiene", title: "Higiene y cuidado personal", description: "Kits de higiene y artículos esenciales.", homepage: false },
  { id: "maternidad", title: "Maternidad y primera infancia", description: "Artículos esenciales para madres, gestantes y recién nacidos.", homepage: true },
  { id: "salud", title: "Salud y bienestar", description: "Acompañamiento y asistencia a personas hospitalizadas y poblaciones vulnerables.", homepage: true },
  { id: "vivienda", title: "Vivienda y recuperación", description: "Materiales y apoyo para rehabilitación y acondicionamiento.", homepage: false },
  { id: "comunidad", title: "Apoyo comunitario", description: "Pinturas, materiales y apoyo a iglesias y espacios comunitarios.", homepage: false },
  { id: "asistencia", title: "Asistencia social", description: "Ropa y otros recursos esenciales para personas y familias.", homepage: false },
  { id: "ninez", title: "Niñez", description: "Asistencia, recursos y acciones dirigidas a niños y niñas.", homepage: false },
  { id: "mujeres", title: "Mujeres", description: "Apoyo y acompañamiento a mujeres en condiciones de vulnerabilidad.", homepage: false },
  { id: "mayores", title: "Adultos mayores", description: "Asistencia social dentro de las poblaciones vulnerables atendidas.", homepage: false },
] as const;
