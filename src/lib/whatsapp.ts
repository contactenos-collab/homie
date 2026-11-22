import { WHATSAPP_NUMBER } from "@/content/homi";

export function waLink(message: string, number: string = WHATSAPP_NUMBER) {
  const base = number ? `https://wa.me/${number}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function serviceMessage(serviceName?: string) {
  return serviceName
    ? `Hola, HOMI. Me gustaría solicitar información sobre ${serviceName} en Pamplona.`
    : "Hola, HOMI. Me gustaría solicitar información sobre vuestros servicios en Pamplona.";
}

export type BookingData = {
  nombre: string; telefono: string; email: string; tipo: string; servicio: string;
  barrio: string; fecha: string; horario: string; frecuencia: string; descripcion: string;
};

export function bookingMessage(d: BookingData) {
  return [
    "Hola, HOMI. Quiero solicitar un servicio:",
    `• Nombre: ${d.nombre}`,
    `• Teléfono: ${d.telefono}`,
    d.email && `• Correo: ${d.email}`,
    `• Soy: ${d.tipo}`,
    `• Servicio: ${d.servicio}`,
    `• Barrio: ${d.barrio}`,
    `• Fecha: ${d.fecha}`,
    `• Horario: ${d.horario}`,
    `• Frecuencia: ${d.frecuencia}`,
    d.descripcion && `• Detalles: ${d.descripcion}`,
    "Quedo a la espera de presupuesto y disponibilidad. ¡Gracias!",
  ].filter(Boolean).join("\n");
}
