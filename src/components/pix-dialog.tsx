import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PIX_CHAVE } from "@/config";
import { linkWhatsapp } from "@/lib/whatsapp";

interface PixDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  presente?: string; // sem presente = valor livre
}

export function PixDialog({ open, onOpenChange, presente }: PixDialogProps) {
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(PIX_CHAVE);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      // se o navegador bloquear, a chave continua visível para copiar à mão
    }
  }

  const destino = presente
    ? `para o presente "${presente}"`
    : "como presente de casamento";
  const mensagem = `Oi! Enviei um Pix de R$ ___ ${destino}. Meu nome: ___`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-heading">Contribuir via Pix</DialogTitle>
          <DialogDescription>
            {presente
              ? `Contribua com o valor que quiser para "${presente}".`
              : "Contribua com o valor que quiser."}{" "}
            Depois de enviar, avise a gente pelo WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <img
          src={`${import.meta.env.BASE_URL}pix-qrcode.png`}
          alt="QR Code do Pix"
          className="mx-auto h-48 w-48 object-contain"
        />

        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Chave Pix
          </p>
          <p className="select-all break-all rounded-md border bg-muted px-3 py-2 text-sm">
            {PIX_CHAVE}
          </p>
          <Button variant="outline" className="w-full" onClick={copiar}>
            {copiado ? "Copiado!" : "Copiar chave"}
          </Button>
        </div>

        <a
          href={linkWhatsapp(mensagem)}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ className: "w-full" })}
        >
          Já enviei, avisar no WhatsApp
        </a>
      </DialogContent>
    </Dialog>
  );
}
