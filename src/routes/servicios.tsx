import { createFileRoute } from "@tanstack/react-router";
import { meta, PageHero } from "@/components/site";
import { ServiceCards, HowItWorks, CtaBand } from "@/components/sections";

export const Route = createFileRoute("/servicios")({
  head: () => meta(
    "Servicios para universitarios en Pamplona | HOMI",
    "Limpieza de pisos de estudiantes, lavandería, compras y mandados, gestiones cotidianas y celebraciones en Pamplona.",
    "/servicios",
  ),
  component: () => (
    <>
      <PageHero eyebrow="Nuestros servicios" title="Servicios domésticos y apoyo cotidiano para universitarios">
        Para estudiantes de la Universidad de Navarra y otras instituciones de Pamplona. HOMI no es una residencia ni solo una empresa de limpieza: es tu apoyo cercano.
      </PageHero>
      <section className="mx-auto max-w-6xl px-4 pt-14"><ServiceCards detailed /></section>
      <section className="mx-auto max-w-6xl px-4 pt-20">
        <h2 className="mb-8 text-3xl font-semibold">Cómo funciona, en 3 pasos</h2>
        <HowItWorks />
      </section>
      <p className="mx-auto mt-8 max-w-6xl px-4 text-sm text-muted-foreground">HOMI ASSIST cubre gestiones sencillas del día a día; no ofrecemos asesoría especializada.</p>
      <CtaBand />
    </>
  ),
});
