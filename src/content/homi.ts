/**
 * CONTENIDO CENTRAL DE HOMI — edita aquí textos, tarifas y contacto.
 * Todo lo marcado con PENDIENTE debe validarlo Valeria antes de publicar.
 */

/** Número de WhatsApp Business en formato internacional SIN "+" ni espacios (ej. "34600000000").
 *  Vacío = PENDIENTE: los enlaces abren WhatsApp para elegir contacto. */
import heroPhoto from "@/assets/hero-estudiantes.webp";

/** Foto de portada. PENDIENTE: sustituir por fotografía real de HOMI en Pamplona.
 *  Para cambiarla, cambia solo la ruta del import de arriba y pon isReal: true. */
export const heroImage = { src: heroPhoto, width: 516, height: 381, alt: "Imagen ilustrativa de estudiantes en un piso compartido", isReal: false };

export const WHATSAPP_NUMBER = "34680991270";
export const CONTACT_EMAIL = ""; // PENDIENTE
export const PRICES_VALIDATED = false; // Cambiar a true cuando Valeria apruebe las tarifas

export const brand = {
  name: "HOMI",
  city: "Pamplona, Navarra",
  slogan: "Servicios y soluciones para tu vida universitaria",
  emotional: "Lejos de casa, pero nunca sin apoyo.",
  commercial: "¿Ya tienes piso en Pamplona? HOMI te ayuda con todo lo demás.",
};

export type ServiceId = "clean" | "go" | "assist" | "moments" | "plus";

export const services: {
  id: ServiceId;
  name: string;
  tagline: string;
  description: string;
  items: string[];
}[] = [
  {
    id: "clean",
    name: "HOMI CLEAN",
    tagline: "Aseo y organización",
    description: "Tu piso limpio y ordenado sin quitarte horas de estudio.",
    items: ["Limpieza de habitaciones y apartamentos", "Cocinas y baños", "Cambio de ropa de cama", "Lavandería y planchado", "Organización de armarios"],
  },
  {
    id: "go",
    name: "HOMI GO",
    tagline: "Compras y mandados",
    description: "Hacemos los recados por ti y te lo dejamos en casa.",
    items: ["Supermercado", "Farmacia", "Recogida de paquetes", "Compras para el hogar", "Mandados personalizados"],
  },
  {
    id: "assist",
    name: "HOMI ASSIST",
    tagline: "Gestiones y apoyo cotidiano",
    description: "Alguien de confianza para esas gestiones sencillas del día a día.",
    items: ["Coordinación de entregas", "Recepción autorizada de técnicos", "Organización de citas", "Gestiones sencillas", "Preparación del piso antes de tu llegada"],
  },
  {
    id: "moments",
    name: "HOMI MOMENTS",
    tagline: "Celebraciones",
    description: "Que nadie se quede sin su sorpresa, aunque la familia esté lejos.",
    items: ["Decoración de cumpleaños", "Regalos", "Sorpresas familiares", "Celebraciones", "Detalles personalizados"],
  },
  {
    id: "plus",
    name: "HOMI PLUS",
    tagline: "A medida",
    description: "Combinamos servicios según lo que necesitáis tú o tu piso.",
    items: ["Servicios personalizados", "Planes para pisos compartidos", "Atención semanal o mensual", "Combinación de servicios"],
  },
];

export const plans = [
  { id: "esencial", name: "HOMI ESENCIAL", price: 120, features: ["1 visita semanal de 2 h", "4 visitas al mes", "Aseo básico"] },
  { id: "confort", name: "HOMI CONFORT", price: 172, features: ["1 visita semanal de 3 h", "4 visitas al mes", "Limpieza y organización"], featured: true },
  { id: "integral", name: "HOMI INTEGRAL", price: 232, features: ["2 visitas semanales de 2 h", "8 visitas al mes", "Atención recurrente"] },
];

export const oneOffPrices = [
  { label: "Limpieza 2 h", price: "32 €" },
  { label: "Limpieza 3 h", price: "45 €" },
  { label: "Limpieza 4 h", price: "60 €" },
  { label: "Supermercado", price: "desde 18 €" },
  { label: "Mandados", price: "desde 15 €" },
  { label: "Cumpleaños", price: "desde 45 €" },
  { label: "Compra y entrega de regalos", price: "desde 20 €" },
  { label: "Preparación de apartamentos", price: "desde 65 €" },
];

export const pricesNote =
  "Compras, regalos, materiales extraordinarios y desplazamientos especiales se cobran aparte.";

export const benefits = [
  { title: "Atención personalizada", text: "Te conocemos y nos adaptamos a ti y a tu piso." },
  { title: "Flexibilidad", text: "Servicios puntuales o recurrentes, cuando los necesites." },
  { title: "Confianza", text: "Trato cercano y comunicación directa por WhatsApp." },
  { title: "Soluciones prácticas", text: "Resolvemos lo cotidiano para que tú vivas tu etapa." },
];

export const steps = [
  { title: "Cuéntanos qué necesitas", text: "Limpieza, compras, gestiones o celebraciones: dinos el servicio, la ubicación y la fecha." },
  { title: "Te confirmamos por WhatsApp", text: "Te confirmamos disponibilidad y precio antes de nada." },
  { title: "Nos encargamos", text: "HOMI realiza el servicio acordado y tú disfrutas de tu tiempo." },
];

/** answer: null = PENDIENTE de aprobación por Valeria */
export const faqs: { q: string; a: string | null }[] = [
  { q: "¿En qué zonas de Pamplona trabajáis?", a: null },
  { q: "¿Puedo pedir una limpieza puntual sin contratar un plan?", a: "Sí. Puedes solicitar servicios puntuales por horas además de los planes mensuales." },
  { q: "¿Podemos compartir el coste entre compañeros de piso?", a: null },
  { q: "¿Pueden contratar mis padres el servicio?", a: "Sí. Las familias pueden consultar y contratar servicios, siempre respetando la privacidad y el consentimiento del estudiante." },
  { q: "¿Cómo se pagan las compras del supermercado o los regalos?", a: null },
  { q: "¿Cómo funcionan los planes mensuales?", a: "Incluyen un número fijo de visitas al mes según el plan elegido. Las condiciones detalladas están pendientes de publicación." },
  { q: "¿Con cuánta antelación tengo que reservar?", a: null },
  { q: "¿Qué pasa si necesito cancelar?", a: null },
  { q: "¿Cómo gestionáis las llaves y el acceso al piso?", a: null },
  { q: "¿Los productos de limpieza están incluidos?", a: null },
];

export const neighborhoods = [
  "Casco Antiguo", "Ensanche", "Iturrama", "San Juan / Donibane", "Ermitagaña", "Mendebaldea",
  "Milagrosa", "Azpilagaña", "Rochapea", "Txantrea", "San Jorge", "Mendillorri", "Lezkairu",
  "Barañáin", "Burlada", "Villava", "Otro / No lo sé",
];
