import { describe, expect, it } from "vitest";
import { plans } from "@/content/homi";
import { serviceMessage, waLink } from "@/lib/whatsapp";

describe("HOMI rules", () => {
  it("plan prices match the brief", () => {
    expect(plans.map((p) => p.price)).toEqual([120, 172, 232]);
  });
  it("WhatsApp link pre-fills the service message", () => {
    const url = waLink(serviceMessage("HOMI CLEAN"), "34600000000");
    expect(url.startsWith("https://wa.me/34600000000?text=")).toBe(true);
    expect(decodeURIComponent(url.split("text=")[1] ?? "")).toBe("Hola, HOMI. Me gustaría solicitar información sobre HOMI CLEAN en Pamplona.");
  });
});
