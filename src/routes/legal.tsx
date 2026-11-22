import { createFileRoute } from "@tanstack/react-router";
import { meta, PageHero } from "@/components/site";

export const Route = createFileRoute("/legal")({
  head: () => meta("Información legal | HOMI Pamplona", "Aviso legal, privacidad, cookies y condiciones de HOMI Pamplona.", "/legal"),
  component: () => (
    <>
      <PageHero eyebrow="Información legal" title="Aviso legal, privacidad y condiciones" />
      <section className="mx-auto max-w-3xl space-y-8 px-4 pt-12">
        {["Aviso legal y datos fiscales", "Política de privacidad", "Política de cookies", "Condiciones del servicio"].map((t) => (
          <div key={t} id={t}>
            <h2 className="text-2xl font-semibold">{t}</h2>
            <p className="mt-2"><span className="pending-tag">PENDIENTE</span> Texto a redactar y revisar según la normativa aplicable antes de publicar.</p>
          </div>
        ))}
        <p className="text-sm text-muted-foreground">Esta web no utiliza cookies propias de analítica ni publicidad en esta versión.</p>
      </section>
    </>
  ),
});
