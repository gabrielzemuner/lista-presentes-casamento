import { useState } from "react";
import { PixDialog } from "@/components/pix-dialog";
import { Button } from "@/components/ui/button";

export function ValorLivre() {
  const [aberto, setAberto] = useState(false);

  return (
    <section className="mx-auto mt-10 max-w-2xl rounded-lg border border-primary/30 bg-primary/5 px-6 py-10 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Presente em dinheiro
      </p>
      <h2 className="mt-2 font-heading text-2xl">Valor livre</h2>
      <div className="mx-auto mt-3 h-px w-16 bg-primary/40" />
      <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
        Valor livre para o casal aproveitar lua de mel e o início da vida a
        dois.
      </p>
      <Button size="lg" className="mt-6" onClick={() => setAberto(true)}>
        Contribuir via Pix
      </Button>
      <PixDialog open={aberto} onOpenChange={setAberto} />
    </section>
  );
}
