"use client";

import { useId, useRef, useState, useSyncExternalStore } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, LoaderCircle, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { volunteerActivities, volunteerSchema, type VolunteerFormValues } from "@/lib/volunteer-schema";

const personalFields = [
  { name: "fullName", label: "Nombre completo", type: "text", autoComplete: "name", maxLength: 150 },
  { name: "cedula", label: "Cédula", type: "text", autoComplete: "off", maxLength: 13 },
  { name: "phone", label: "Teléfono / WhatsApp", type: "tel", autoComplete: "tel", maxLength: 30 },
  { name: "email", label: "Correo electrónico", type: "email", autoComplete: "email", maxLength: 254 },
] as const;

// Keep native fields disabled before hydration so the form cannot submit without JS.
const subscribe = () => () => {};
const clientReady = () => true;
const serverReady = () => false;

function FieldError({ id, message }: { id: string; message?: string }) {
  return <p id={id} aria-live="polite" className="text-sm leading-6 text-[#AF090F]">{message}</p>;
}

export function VolunteerForm() {
  const id = useId();
  const ready = useSyncExternalStore(subscribe, clientReady, serverReady);
  const inFlight = useRef(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { register, control, handleSubmit, reset, formState: { errors, isValid } } = useForm<VolunteerFormValues>({
    resolver: zodResolver(volunteerSchema),
    mode: "onChange",
    shouldUnregister: true,
    defaultValues: { fullName: "", cedula: "", phone: "", email: "", activities: [], otherActivity: "", availability: "" },
  });
  const activities = useWatch({ control, name: "activities", defaultValue: [] });
  const showOther = activities.includes("Otra");

  async function submit(values: VolunteerFormValues) {
    if (inFlight.current) return;
    inFlight.current = true;
    setStatus("submitting");
    try {
      const response = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, otherActivity: values.otherActivity ?? "" }),
        cache: "no-store",
        signal: AbortSignal.timeout(30_000),
      });
      const result: unknown = await response.json();
      if (!response.ok || !result || typeof result !== "object" || !("success" in result) || result.success !== true) {
        throw new Error("Submission not confirmed");
      }
      reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      inFlight.current = false;
    }
  }

  return (
    <form
      id="registro-voluntario"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-status ${id}-privacy`}
      noValidate
      aria-busy={status === "submitting"}
      onSubmit={(event) => { void handleSubmit(submit)(event); }}
      className="scroll-mt-24 rounded-[2rem] border border-stone-200 bg-[#FCFBF8] p-5 sm:p-8"
    >
      <Users className="size-8 text-[#AF090F]" aria-hidden="true" />
      <h3 id={`${id}-title`} className="mt-5 text-2xl font-semibold">Registro de voluntarios</h3>
      <div id={`${id}-status`} role="status" aria-live="polite" aria-atomic="true">
        {status === "success" && (
          <div className="mt-4 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <p>¡Gracias por querer formar parte de Lanzas Encendidas! Hemos recibido tu solicitud. Nos pondremos en contacto contigo cuando tengamos una oportunidad de voluntariado acorde a tu disponibilidad.</p>
          </div>
        )}
        {status === "error" && <p className="mt-4 rounded-xl border border-[#AF090F]/20 bg-red-50 p-4 text-sm leading-6 text-[#AF090F]">No pudimos confirmar que tu solicitud se haya completado. Conservamos tus datos en el formulario; por favor, inténtalo de nuevo en unos momentos.</p>}
        {status === "submitting" && <p className="mt-4 text-sm leading-6 text-stone-600">Estamos enviando tu solicitud. Por favor, espera un momento.</p>}
      </div>
      <p className="mt-5 text-sm text-stone-600">Los campos marcados con * son obligatorios.</p>
      <fieldset disabled={!ready || status === "submitting"} className="mt-6 min-w-0 space-y-8">
        <legend className="sr-only">Datos de inscripción al voluntariado</legend>
        <fieldset className="min-w-0 space-y-5">
          <legend className="mb-4 text-lg font-semibold text-stone-900">Información personal</legend>
          {personalFields.map((field) => (
            <div key={field.name} className="space-y-2">
              <label htmlFor={`${id}-${field.name}`} className="block text-sm font-semibold text-stone-800">{field.label} <span aria-hidden="true">*</span></label>
              <Input
                {...register(field.name)}
                id={`${id}-${field.name}`}
                type={field.type}
                autoComplete={field.autoComplete}
                maxLength={field.maxLength}
                inputMode={field.name === "cedula" ? "numeric" : undefined}
                required
                aria-invalid={Boolean(errors[field.name])}
                aria-describedby={`${id}-${field.name}-error${field.name === "cedula" ? ` ${id}-cedula-hint` : ""}`}
                className="h-12 rounded-xl bg-white text-base md:text-base"
              />
              {field.name === "cedula" && <p id={`${id}-cedula-hint`} className="text-xs leading-5 text-stone-500">11 dígitos, con o sin guiones.</p>}
              <FieldError id={`${id}-${field.name}-error`} message={errors[field.name]?.message} />
            </div>
          ))}
        </fieldset>

        <fieldset className="min-w-0" aria-describedby={`${id}-activities-hint ${id}-activities-error`}>
          <legend className="text-lg font-semibold leading-7 text-stone-900">¿En qué actividades te gustaría apoyar?</legend>
          <p id={`${id}-activities-hint`} className="mt-2 text-sm leading-6 text-stone-600">Puedes seleccionar varias opciones. Este campo es opcional.</p>
          <div className="mt-4 space-y-2">
            {volunteerActivities.map((activity, index) => (
              <label key={activity} htmlFor={`${id}-activity-${index}`} className="flex min-h-11 cursor-pointer items-start gap-3 rounded-xl border border-stone-200 bg-white p-3 text-sm leading-6 text-stone-700 hover:border-stone-400">
                <input {...register("activities")} id={`${id}-activity-${index}`} type="checkbox" value={activity} className="mt-1 size-4 shrink-0 accent-[#AF090F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#AF090F]" />
                <span>{activity}</span>
              </label>
            ))}
          </div>
          <FieldError id={`${id}-activities-error`} message={errors.activities?.message} />
          {showOther && (
            <div className="mt-5 space-y-2">
              <label htmlFor={`${id}-otherActivity`} className="block text-sm font-semibold text-stone-800">Especifica la otra actividad <span aria-hidden="true">*</span></label>
              <Input {...register("otherActivity")} id={`${id}-otherActivity`} required maxLength={300} autoComplete="off" aria-invalid={Boolean(errors.otherActivity)} aria-describedby={`${id}-otherActivity-error`} className="h-12 rounded-xl bg-white text-base md:text-base" />
              <FieldError id={`${id}-otherActivity-error`} message={errors.otherActivity?.message} />
            </div>
          )}
        </fieldset>

        <div className="space-y-2">
          <label htmlFor={`${id}-availability`} className="block text-lg font-semibold text-stone-900">Disponibilidad <span className="text-sm font-normal text-stone-500">(opcional)</span></label>
          <p id={`${id}-availability-hint`} className="text-sm leading-6 text-stone-600">Cuéntanos qué días, horarios o frecuencia te resultarían convenientes.</p>
          <Textarea {...register("availability")} id={`${id}-availability`} rows={4} maxLength={1000} autoComplete="off" aria-invalid={Boolean(errors.availability)} aria-describedby={`${id}-availability-hint ${id}-availability-error`} className="min-h-32 rounded-xl bg-white text-base md:text-base" />
          <FieldError id={`${id}-availability-error`} message={errors.availability?.message} />
        </div>
      </fieldset>

      <p id={`${id}-privacy`} className="mt-8 text-sm leading-6 text-stone-600">La información que envíes se guardará en Google Sheets y se utilizará para contactarte sobre oportunidades de voluntariado. Este formulario no guarda tus datos en el almacenamiento del navegador.</p>
      <button type="submit" disabled={!ready || !isValid || status === "submitting"} aria-describedby={`${id}-status`} className="button-primary mt-6 w-full justify-center text-sm disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0">{status === "submitting" ? <><LoaderCircle className="size-4 animate-spin motion-reduce:animate-none" aria-hidden="true" /> ENVIANDO SOLICITUD…</> : "QUIERO SER VOLUNTARIO"}</button>
    </form>
  );
}
