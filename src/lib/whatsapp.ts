import { WHATSAPP_NUMERO } from "@/config";

export function linkWhatsapp(mensagem: string): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}
