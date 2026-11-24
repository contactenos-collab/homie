import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, MessageCircle, Sparkles, ShoppingBasket, ClipboardCheck, Gift, Puzzle } from "lucide-react";
import logoUrl from "@/assets/logo-homi.jpg";
import { brand, CONTACT_EMAIL, WHATSAPP_NUMBER, type ServiceId } from "@/content/homi";
import { serviceMessage, waLink } from "@/lib/whatsapp";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/planes", label: "Planes" },
  { to: "/familias", label: "Para familias" },
  { to: "/sobre-homi", label: "Sobre HOMI" },
  { to: "/contacto", label: "Contacto" },
] as const;

export const serviceIcons: Record<ServiceId, typeof Sparkles> = {
  clean: Sparkles, go: ShoppingBasket, assist: ClipboardCheck, moments: Gift, plus: Puzzle,
};

export function WhatsAppButton({ message = serviceMessage(), label = "Solicitar por WhatsApp", className = "" }: { message?: string; label?: string; className?: string }) {
  return (
    <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className={`btn btn-whatsapp ${className}`}>
      <MessageCircle className="size-4" aria-hidden /> {label}
    </a>
  );
}

function Logo({ className }: { className: string }) {
  return <img src={logoUrl} alt="HOMI — Servicios y soluciones para tu vida universitaria, Pamplona" className={className} width={1280} height={853} />;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2">
        <Link to="/" aria-label="HOMI, inicio" className="relative block h-12 shrink-0 overflow-hidden md:h-16" style={{ aspectRatio: "820 / 360" }}>
          {/* Recorte de la palabra HOMI (zona x 240–1060, y 0–360 del logo de 1280×853) */}
          <img src={logoUrl} alt="HOMI" width={1280} height={853} className="absolute max-w-none"
            style={{ width: "156.1%", left: "-29.27%", top: "0%" }} />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="rounded-full px-3 py-2 text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-secondary hover:text-accent-text"
              activeProps={{ className: "!text-accent-text bg-secondary", "aria-current": "page" }}>{n.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <WhatsAppButton label="WhatsApp" className="!px-4 !py-2 text-sm" />
          <button className="rounded-full p-2 text-navy lg:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t px-4 pb-4 lg:hidden" aria-label="Móvil">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} activeProps={{ className: "!text-accent-text" }} onClick={() => setOpen(false)} className="block border-b py-3 font-bold uppercase text-navy">{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="inline-block rounded-2xl bg-background p-2"><Logo className="h-32 w-auto md:h-40" /></div>
          <p className="mt-4 font-display text-lg">{brand.emotional}</p>
          <p className="text-sm opacity-80">{brand.city}</p>
        </div>
        <div>
          <h2 className="font-display text-lg text-sun">Navegación</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((n) => <li key={n.to}><Link to={n.to} className="underline-offset-4 hover:text-sun hover:underline">{n.label}</Link></li>)}
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <h2 className="font-display text-lg text-sun">Contacto</h2>
          <p>WhatsApp: {WHATSAPP_NUMBER ? `+${WHATSAPP_NUMBER}` : <span className="pending-tag">PENDIENTE: número</span>}</p>
          <p>Correo: {CONTACT_EMAIL || <span className="pending-tag">PENDIENTE: correo</span>}</p>
          <WhatsAppButton />
          <p className="pt-2"><Link to="/legal" className="underline hover:text-sun">Aviso legal · Privacidad · Cookies · Condiciones</Link></p>
          <p className="text-xs opacity-70">Datos fiscales: <span className="pending-tag">PENDIENTE</span></p>
        </div>
      </div>
      <p className="border-t border-navy-foreground/15 py-4 text-center text-xs opacity-70">© {new Date().getFullYear()} HOMI Pamplona</p>
    </footer>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="bg-secondary">
      <div className="fade-up mx-auto max-w-6xl px-4 py-14 md:py-20">
        <p className="text-sm font-extrabold uppercase tracking-widest text-accent-text">{eyebrow}</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-semibold md:text-5xl">{title}</h1>
        {children && <div className="mt-4 max-w-2xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}

export function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-[4/5] w-full items-center justify-center rounded-3xl border-2 border-dashed border-accent bg-placeholder p-6 text-center font-bold text-navy">
      {label}
    </div>
  );
}

export function meta(title: string, description: string, path: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://www.holahomi.com${path}` },
      { property: "og:image", content: "https://www.holahomi.com/og.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
