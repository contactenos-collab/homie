import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { meta, PageHero, WhatsAppButton } from "@/components/site";
import { faqs, neighborhoods, services } from "@/content/homi";
import { bookingMessage, waLink, type BookingData } from "@/lib/whatsapp";

export const Route = createFileRoute("/contacto")({
  head: () => meta(
    "Solicitar servicio para estudiantes en Pamplona | HOMI",
    "Cuéntanos qué necesitas y te enviamos presupuesto y disponibilidad por WhatsApp. Preguntas frecuentes de HOMI Pamplona.",
    "/contacto",
  ),
  component: Contacto,
});

const req = (m: string) => z.string().trim().min(1, m);
const schema = z.object({
  nombre: req("Indica tu nombre").max(80),
  telefono: z.string().trim().regex(/^[+\d\s]{9,16}$/, "Introduce un teléfono válido"),
  email: z.string().trim().max(120).email("Correo no válido").or(z.literal("")),
  tipo: req("Elige una opción"),
  servicio: req("Elige un servicio"),
  barrio: req("Elige tu barrio"),
  fecha: req("Indica una fecha"),
  horario: req("Elige un horario"),
  frecuencia: req("Elige la frecuencia"),
  descripcion: z.string().trim().max(600),
  privacidad: z.literal(true, { errorMap: () => ({ message: "Debes aceptar la política de privacidad" }) }),
});

const field = "mt-1 w-full rounded-xl border border-input bg-background px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-ring";

function Contacto() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [link, setLink] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const keys = ["nombre","telefono","email","tipo","servicio","barrio","fecha","horario","frecuencia","descripcion"];
    const base = Object.fromEntries(keys.map((k) => [k, String(raw[k] ?? "")]));
    const parsed = schema.safeParse({ ...base, privacidad: fd.get("privacidad") === "on" });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] ||= i.message));
      setErrors(errs); setLink(null); return;
    }
    setErrors({});
    const url = waLink(bookingMessage(parsed.data as unknown as BookingData));
    setLink(url);
    window.open(url, "_blank", "noopener");
  }

  const Err = ({ n }: { n: string }) => errors[n] ? <p className="mt-1 text-sm text-destructive" role="alert">{errors[n]}</p> : null;
  const Sel = ({ n, label, opts }: { n: string; label: string; opts: string[] }) => (
    <label className="block text-sm font-bold text-navy">{label} *
      <select name={n} defaultValue="" className={field} aria-invalid={!!errors[n]}>
        <option value="" disabled>Selecciona…</option>
        {opts.map((o) => <option key={o}>{o}</option>)}
      </select><Err n={n} />
    </label>
  );

  return (
    <>
      <PageHero eyebrow="Contacto" title="Solicita tu servicio">
        Rellena el formulario y se abrirá WhatsApp con tu solicitud. Te responderemos con presupuesto y disponibilidad; la reserva no queda confirmada hasta entonces.
      </PageHero>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 pt-12 lg:grid-cols-[3fr_2fr]">
        <form onSubmit={onSubmit} noValidate className="card-soft grid gap-4 p-6 sm:grid-cols-2 md:p-8">
          <label className="block text-sm font-bold text-navy">Nombre *<input name="nombre" autoComplete="name" className={field} /><Err n="nombre" /></label>
          <label className="block text-sm font-bold text-navy">Teléfono *<input name="telefono" type="tel" autoComplete="tel" className={field} /><Err n="telefono" /></label>
          <label className="block text-sm font-bold text-navy sm:col-span-2">Correo (opcional)<input name="email" type="email" autoComplete="email" className={field} /><Err n="email" /></label>
          <Sel n="tipo" label="Soy" opts={["Estudiante", "Padre / madre", "Otro"]} />
          <Sel n="servicio" label="Servicio" opts={[...services.map((s) => `${s.name} — ${s.tagline}`), "Plan mensual", "No lo sé, necesito orientación"]} />
          <Sel n="barrio" label="Barrio de Pamplona" opts={neighborhoods} />
          <label className="block text-sm font-bold text-navy">Fecha deseada *<input name="fecha" type="date" className={field} /><Err n="fecha" /></label>
          <Sel n="horario" label="Horario" opts={["Mañana", "Mediodía", "Tarde", "Flexible"]} />
          <Sel n="frecuencia" label="Frecuencia" opts={["Puntual", "Semanal", "Quincenal", "Mensual"]} />
          <label className="block text-sm font-bold text-navy sm:col-span-2">Cuéntanos qué necesitas<textarea name="descripcion" rows={4} maxLength={600} className={field} placeholder="No incluyas tu dirección completa; la pediremos más adelante si hace falta." /></label>
          <label className="flex gap-2 text-sm sm:col-span-2">
            <input type="checkbox" name="privacidad" className="mt-1 size-4 accent-[var(--accent)]" />
            <span>He leído y acepto la <Link to="/legal" className="underline">política de privacidad</Link> y consiento que HOMI use estos datos para responder a mi solicitud. *</span>
          </label>
          <div className="sm:col-span-2"><Err n="privacidad" /></div>
          <button type="submit" className="btn btn-accent sm:col-span-2">Enviar solicitud por WhatsApp</button>
          {link && (
            <p className="rounded-xl bg-secondary p-3 text-sm sm:col-span-2" role="status">
              Hemos preparado tu mensaje. Si WhatsApp no se ha abierto, <a href={link} target="_blank" rel="noopener noreferrer" className="font-bold underline">pulsa aquí</a> y envíalo.
            </p>
          )}
        </form>
        <aside className="space-y-4">
          <div className="rounded-3xl bg-navy p-6 text-navy-foreground">
            <h2 className="text-xl font-semibold text-sun">¿Prefieres escribir directamente?</h2>
            <p className="mt-2 text-sm">Cuéntanos qué necesitas por WhatsApp.</p>
            <WhatsAppButton className="mt-4" />
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-3xl px-4 pt-20" id="faq">
        <h2 className="text-3xl font-semibold">Preguntas frecuentes</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="card-soft group p-5">
              <summary className="cursor-pointer list-none font-bold text-navy">{f.q}</summary>
              <p className="mt-3 text-muted-foreground">{f.a ?? <span className="pending-tag">PENDIENTE: respuesta por confirmar con Valeria</span>}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
