import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartHandshake, Clock, ShieldCheck, Lightbulb } from "lucide-react";
import { benefits, brand, heroImage } from "@/content/homi";
import { meta, WhatsAppButton } from "@/components/site";
import { ServiceCards, HowItWorks, CtaBand, PlanCards, PricesPendingNotice } from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => {
    const h = meta(
      "HOMI Pamplona | Servicios para estudiantes universitarios",
      "Limpieza de pisos para estudiantes, compras, mandados y apoyo cotidiano en Pamplona. Lejos de casa, pero nunca sin apoyo.",
      "/",
    );
    return { ...h, links: [...h.links, { rel: "preload", as: "image", href: heroImage.src, type: "image/webp", fetchPriority: "high" }] };
  },
  component: Index,
});

const icons = [HeartHandshake, Clock, ShieldCheck, Lightbulb];

function Index() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
        <div className="fade-up">
          <p className="inline-block rounded-full bg-sun/40 px-3 py-1 text-sm font-bold text-navy">📍 Pamplona · {brand.slogan}</p>
          <h1 className="mt-5 text-5xl font-semibold md:text-6xl">Tu vida universitaria, <span className="text-accent-text">mucho más fácil</span></h1>
          <p className="mt-5 text-lg text-muted-foreground">En HOMI nos encargamos de esos pequeños y grandes detalles del día a día para que tú disfrutes tu etapa universitaria.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/servicios" className="btn btn-primary">Explorar servicios</Link>
            <WhatsAppButton label="Solicitar servicio por WhatsApp" />
          </div>
          <p className="mt-6 font-display text-lg text-navy">{brand.emotional}</p>
        </div>
        <div className="relative">
          <div className="absolute -right-3 -top-3 size-24 rounded-full bg-sun" aria-hidden />
          <img src={heroImage.src} alt={heroImage.alt} width={heroImage.width} height={heroImage.height} fetchPriority="high" decoding="async"
            className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" />
          {!heroImage.isReal && <p className="relative mt-3"><span className="pending-tag !text-sm">PENDIENTE: sustituir por fotografía real de HOMI en Pamplona</span></p>}
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold md:text-4xl">Qué es HOMI: tu apoyo cercano en Pamplona</h2>
          <p className="mt-2 mb-8 max-w-2xl text-muted-foreground">No somos una residencia ni solo una empresa de limpieza: te ayudamos con el día a día mientras vives lejos de casa.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const Icon = icons[i] ?? Lightbulb;
            return (
              <div key={b.title} className="card-soft p-6">
                <Icon className="text-accent" aria-hidden />
                <h3 className="mt-3 text-lg font-semibold">{b.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
              </div>
            );
          })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20">
        <h2 className="text-3xl font-semibold md:text-4xl">Servicios que te ahorran tiempo</h2>
        <p className="mt-2 mb-8 text-muted-foreground">Limpieza por horas, compras, gestiones y celebraciones. Tú eliges lo que necesitas.</p>
        <ServiceCards />
        <Link to="/servicios" className="btn btn-outline mt-8">Ver todos los servicios</Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20">
        <h2 className="text-3xl font-semibold md:text-4xl">Planes mensuales para despreocuparte</h2>
        <p className="mt-2 mb-6 text-muted-foreground">Un plan fijo para tu piso o servicios puntuales cuando los necesites.</p>
        <div className="mb-6"><PricesPendingNotice /></div>
        <PlanCards />
        <Link to="/planes" className="btn btn-outline mt-8">Ver planes y precios</Link>
      </section>

      <section className="mx-auto mt-20 grid max-w-6xl gap-6 px-4 md:grid-cols-2">
        <div className="rounded-3xl bg-navy p-8 text-navy-foreground shadow-xl">
          <h2 className="text-2xl font-semibold text-sun">Para familias: tranquilidad aunque estéis lejos</h2>
          <p className="mt-2">Aunque estés lejos, tu hijo puede contar con alguien cerca.</p>
          <Link to="/familias" className="btn btn-accent mt-6">Ver apoyo para familias</Link>
        </div>
        <div className="card-soft p-8">
          <h2 className="text-2xl font-semibold">Hola, soy Valeria</h2>
          <p className="mt-2 text-muted-foreground">Creé HOMI para ayudar a quienes viven lejos de casa a tener un día a día más sencillo.</p>
          <Link to="/sobre-homi" className="btn btn-outline mt-6">Conoce HOMI</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20">
        <h2 className="text-3xl font-semibold md:text-4xl">Cómo solicitar un servicio, en 3 pasos</h2>
        <p className="mt-2 mb-8 text-muted-foreground">Sin formularios largos: todo se confirma por WhatsApp.</p>
        <HowItWorks />
      </section>

      <CtaBand />
    </>
  );
}
