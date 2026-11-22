import { createFileRoute, Link } from "@tanstack/react-router";
import { meta, PageHero, WhatsAppButton } from "@/components/site";
import { serviceMessage } from "@/lib/whatsapp";

export const Route = createFileRoute("/familias")({
  head: () => meta(
    "Apoyo para estudiantes en Pamplona: para padres y familias | HOMI",
    "Si tu hijo estudia en Pamplona y vivís lejos, HOMI ofrece apoyo práctico y cercano en su día a día.",
    "/familias",
  ),
  component: () => (
    <>
      <PageHero eyebrow="Para padres y familias" title="Aunque estés lejos, tu hijo puede contar con alguien cerca">
        HOMI ofrece apoyo práctico, atención cercana y soluciones cotidianas para estudiantes que viven lejos de casa.
      </PageHero>
      <section className="mx-auto grid max-w-6xl gap-6 px-4 pt-14 md:grid-cols-3">
        {[
          ["Tranquilidad", "Alguien de confianza en Pamplona para lo cotidiano: limpieza, compras o preparar el piso antes de la llegada."],
          ["Cercanía", "Comunicación directa y trato personalizado."],
          ["Respeto", "Los padres pueden consultar y contratar servicios respetando la privacidad y el consentimiento de sus hijos adultos."],
        ].map(([t, d]) => (
          <div key={t} className="card-soft p-6"><h2 className="text-xl font-semibold">{t}</h2><p className="mt-2 text-muted-foreground">{d}</p></div>
        ))}
      </section>
      <section className="mx-auto mt-12 max-w-6xl px-4">
        <div className="rounded-3xl bg-navy p-8 text-navy-foreground md:p-12">
          <h2 className="text-3xl font-semibold text-sun">Celebraciones a distancia</h2>
          <p className="mt-2 max-w-2xl">Con HOMI MOMENTS podéis preparar un cumpleaños, un regalo o una sorpresa aunque estéis a miles de kilómetros.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/planes" className="btn btn-accent">Quiero conocer los planes HOMI</Link>
            <WhatsAppButton message={serviceMessage("los servicios para familias de estudiantes")} />
          </div>
        </div>
      </section>
    </>
  ),
});
