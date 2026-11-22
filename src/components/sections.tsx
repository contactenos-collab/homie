import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { services, plans, oneOffPrices, pricesNote, steps, PRICES_VALIDATED } from "@/content/homi";
import { serviceMessage } from "@/lib/whatsapp";
import { WhatsAppButton, serviceIcons } from "./site";

export function ServiceCards({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => {
        const Icon = serviceIcons[s.id];
        return (
          <article key={s.id} id={s.id} className="card-soft flex flex-col p-6">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-sun/30 text-accent"><Icon aria-hidden /></div>
            <h3 className="mt-4 text-xl font-semibold">{s.name}</h3>
            <p className="text-sm font-bold text-accent">{s.tagline}</p>
            <p className="mt-2 text-muted-foreground">{s.description}</p>
            {detailed && (
              <ul className="mt-4 space-y-1.5 text-sm">
                {s.items.map((i) => <li key={i} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />{i}</li>)}
              </ul>
            )}
            <div className="mt-auto pt-5">
              <WhatsAppButton message={serviceMessage(s.name)} label="Consultar disponibilidad" className="w-full text-sm" />
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function PricesPendingNotice() {
  if (PRICES_VALIDATED) return null;
  return (
    <p className="pending-tag !text-sm">Precios orientativos y preliminares, pendientes de validación. Confirmamos el presupuesto antes de cada servicio.</p>
  );
}

export function PlanCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {plans.map((p) => (
        <article key={p.id} className={`card-soft relative flex flex-col p-7 ${p.featured ? "ring-2 ring-accent" : ""}`}>
          {p.featured && <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">Más completo en limpieza</span>}
          <h3 className="text-xl font-semibold">{p.name}</h3>
          <p className="mt-3 font-display text-5xl text-navy">{p.price} €<span className="text-base text-muted-foreground">/mes</span></p>
          <ul className="mt-5 space-y-2">
            {p.features.map((f) => <li key={f} className="flex gap-2"><Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />{f}</li>)}
          </ul>
          <div className="mt-auto pt-6">
            <WhatsAppButton message={serviceMessage(`el plan ${p.name}`)} label="Consultar este plan" className="w-full text-sm" />
          </div>
        </article>
      ))}
    </div>
  );
}

export function OneOffTable() {
  return (
    <div className="card-soft p-6">
      <h3 className="text-xl font-semibold">Servicios puntuales</h3>
      <dl className="mt-4 divide-y">
        {oneOffPrices.map((o) => (
          <div key={o.label} className="flex justify-between py-2.5"><dt>{o.label}</dt><dd className="font-bold text-navy">{o.price}</dd></div>
        ))}
      </dl>
      <p className="mt-4 text-sm text-muted-foreground">{pricesNote}</p>
    </div>
  );
}

export function HowItWorks() {
  return (
    <ol className="grid gap-5 md:grid-cols-3">
      {steps.map((s, i) => (
        <li key={s.title} className="card-soft p-6">
          <span className="flex size-10 items-center justify-center rounded-full bg-accent font-display text-lg text-accent-foreground">{i + 1}</span>
          <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-4">
      <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-sun p-8 md:flex-row md:items-center md:p-12">
        <div>
          <h2 className="text-3xl font-semibold">¿Ya tienes piso en Pamplona?</h2>
          <p className="mt-1 text-lg text-navy">HOMI te ayuda con todo lo demás.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/contacto" className="btn btn-primary">Solicitar servicio</Link>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
