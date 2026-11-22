import { createFileRoute } from "@tanstack/react-router";
import { meta, PageHero } from "@/components/site";
import { PlanCards, OneOffTable, PricesPendingNotice, CtaBand } from "@/components/sections";

export const Route = createFileRoute("/planes")({
  head: () => meta(
    "Planes y precios de limpieza por horas en Pamplona | HOMI",
    "Planes mensuales y servicios puntuales de limpieza, compras y mandados para estudiantes en Pamplona. Precios orientativos.",
    "/planes",
  ),
  component: () => (
    <>
      <PageHero eyebrow="Planes y precios" title="Planes claros para tu piso de estudiante">
        Elige un plan mensual o pide servicios puntuales cuando los necesites.
      </PageHero>
      <section className="mx-auto max-w-6xl space-y-8 px-4 pt-10">
        <PricesPendingNotice />
        <PlanCards />
        <div className="grid gap-6 md:grid-cols-2">
          <OneOffTable />
          <div className="card-soft p-6">
            <h3 className="text-xl font-semibold">¿Compartes piso?</h3>
            <p className="mt-2 text-muted-foreground">Con HOMI PLUS preparamos planes para pisos compartidos y combinaciones de servicios. Escríbenos y lo vemos juntos.</p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  ),
});
