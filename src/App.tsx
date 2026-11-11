import { GiftCard } from "@/components/gift-card";
import { Button } from "@/components/ui/button";
import { ValorLivre } from "@/components/valor-livre";
import { gifts } from "@/data/gifts";
import { faixas, presenteNaFaixa } from "@/lib/faixas";
import { useState } from "react";

const categorias = ["Cozinha", "Sala"] as const;

export default function App() {
  const [faixaId, setFaixaId] = useState<string | null>(null);
  const faixa = faixas.find((f) => f.id === faixaId);

  return (
    <>
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
          <span className="font-heading text-2xl">G &amp; K</span>
          <a
            href="https://sites.icasei.com.br/gabrielekawana"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
          >
            Voltar ao site
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12">
        <div className="text-center">
          <h1 className="font-heading text-3xl">Lista de presentes</h1>
          <p className="mx-auto mt-4 max-w-xl text-xs uppercase leading-relaxed tracking-[0.2em] text-muted-foreground">
            Escolha o presente, compre pelo link da loja que preferir ou
            contribua por Pix, e depois nos avise pelo WhatsApp.
          </p>
        </div>

        <ValorLivre />

        <div
          className="mt-6 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Filtrar por faixa de valor"
        >
          <Button
            size="sm"
            variant={!faixaId ? "default" : "outline"}
            aria-pressed={!faixaId}
            onClick={() => setFaixaId(null)}
          >
            Todos
          </Button>
          {faixas.map((f) => (
            <Button
              key={f.id}
              size="sm"
              variant={f.id === faixaId ? "default" : "outline"}
              aria-pressed={f.id === faixaId}
              onClick={() => setFaixaId(f.id)}
            >
              {f.rotulo}
            </Button>
          ))}
        </div>

        <p className="mt-3 text-center text-xs text-muted-foreground">
          Faixas de valor aproximadas, só para ajudar na escolha. Os preços
          variam conforme a loja e mudam com o tempo.
        </p>

        {categorias.map((categoria) => {
          const itens = gifts.filter(
            (g) =>
              g.categoria === categoria &&
              g.opcoes.length > 0 &&
              (!faixa || presenteNaFaixa(g, faixa)),
          );
          if (itens.length === 0) return null;

          return (
            <section key={categoria} className="mt-14">
              <h2 className="text-center font-heading text-xl uppercase tracking-[0.2em]">
                {categoria}
              </h2>
              <div className="mx-auto mt-3 h-px w-16 bg-primary/40" />
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {itens.map((gift) => (
                  <GiftCard key={gift.id} gift={gift} />
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
