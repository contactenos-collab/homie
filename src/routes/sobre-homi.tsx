import { createFileRoute } from "@tanstack/react-router";
import { meta, PageHero, PhotoPlaceholder } from "@/components/site";
import { CtaBand } from "@/components/sections";
import { brand } from "@/content/homi";

export const Route = createFileRoute("/sobre-homi")({
  head: () => meta(
    "Sobre HOMI: conoce a Valeria | HOMI Pamplona",
    "HOMI nace en Pamplona de la mano de Valeria para ayudar a estudiantes que viven lejos de casa.",
    "/sobre-homi",
  ),
  component: () => (
    <>
      <PageHero eyebrow="Sobre HOMI" title={brand.emotional} />
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-14 md:grid-cols-[2fr_3fr]">
        <PhotoPlaceholder label="PENDIENTE: fotografía real de Valeria" />
        <div>
          <h2 className="text-4xl font-semibold">Hola, soy Valeria</h2>
          <p className="mt-5 text-lg leading-relaxed">Después de mi experiencia trabajando con estudiantes universitarios en Pamplona, decidí crear HOMI. Mi propósito es ayudar a quienes viven lejos de casa, ofreciendo soluciones prácticas para que su día a día sea más sencillo y agradable. Creo en el trabajo bien hecho, la confianza y la importancia de cuidar cada detalle.</p>
          <p className="mt-5 text-muted-foreground">HOMI empieza con Valeria y está pensada para crecer e incorporar colaboradores de confianza.</p>
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-6xl px-4">
        <h2 className="text-2xl font-semibold">Opiniones</h2>
        <div className="mt-4 rounded-3xl border-2 border-dashed border-accent bg-placeholder p-8 text-center font-bold text-navy">PENDIENTE: reseñas verificadas de clientes</div>
      </section>
      <CtaBand />
    </>
  ),
});
