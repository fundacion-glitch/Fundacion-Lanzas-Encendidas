import { z } from "zod";

export const volunteerActivities = [
  "Jornadas de asistencia social",
  "Entrega de alimentos",
  "Actividades comunitarias",
  "Visitas a hospitales",
  "Campañas humanitarias",
  "Recolección y distribución de donaciones",
  "Apoyo logístico",
  "Comunicación y redes sociales",
  "Fotografía / video",
  "Otra",
] as const;

// Format checks only: these do not verify identity or ownership of contact details.
export const volunteerSchema = z.object({
  fullName: z.string().trim().min(2, "Escribe tu nombre completo.").max(150, "Usa un máximo de 150 caracteres."),
  cedula: z.string().trim().regex(/^(?:\d{11}|\d{3}-\d{7}-\d)$/, "Escribe los 11 dígitos de tu cédula, con o sin guiones."),
  phone: z.string().trim().regex(/^\+?[\d\s().-]+$/, "Escribe un teléfono válido; puedes incluir el código de país.")
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 7 && digits.length <= 15;
    }, "Escribe un teléfono de entre 7 y 15 dígitos."),
  email: z.string().trim().min(1, "Escribe tu correo electrónico.").email("Escribe un correo electrónico válido.").max(254, "El correo electrónico es demasiado largo."),
  activities: z.array(z.enum(volunteerActivities)),
  otherActivity: z.string().trim().max(300, "Usa un máximo de 300 caracteres.").optional(),
  availability: z.string().trim().max(1000, "Usa un máximo de 1000 caracteres."),
}).superRefine((values, context) => {
  if (values.activities.includes("Otra") && !values.otherActivity) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["otherActivity"],
      message: "Indica en qué otra actividad te gustaría apoyar.",
    });
  }
});

export type VolunteerFormValues = z.infer<typeof volunteerSchema>;
