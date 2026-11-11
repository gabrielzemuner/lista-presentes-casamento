import { useState } from "react";
import { PixDialog } from "@/components/pix-dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { linkWhatsapp } from "@/lib/whatsapp";
import type { Gift } from "@/types";

function Foto({
  src,
  alt,
  comprado,
}: {
  src?: string;
  alt: string;
  comprado?: boolean;
}) {
  return (
    <div className="relative flex h-64 items-center justify-center border-b bg-white p-4">
      {src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn(
            "max-h-full max-w-full object-contain",
            comprado && "opacity-40 grayscale",
          )}
        />
      )}
      {comprado && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-background/20">
          <img
            src={`${import.meta.env.BASE_URL}casal-comemorando-2.png`}
            alt=""
            className="h-20 motion-safe:animate-pular"
          />
          <span className="-rotate-3 rounded border-2 border-primary bg-background/90 px-3 py-1 font-heading text-lg uppercase tracking-widest text-primary">
            Já ganhamos!
          </span>
        </div>
      )}
    </div>
  );
}

export function GiftCard({ gift }: { gift: Gift }) {
  const [indice, setIndice] = useState(0);
  const [pixAberto, setPixAberto] = useState(false);

  const comprado = gift.status === "comprado";
  const varias = gift.opcoes.length > 1;
  const opcao = gift.opcoes[indice];

  const nomeCompleto = opcao ? `${gift.nome} (${opcao.nome})` : gift.nome;
  const mensagemCompra = `Oi! Comprei o presente "${nomeCompleto}". Meu nome: ___`;

  return (
    <Card className="h-full pt-0">
      <div className="relative">
        <Foto
          src={opcao?.imagemUrl}
          alt={opcao?.nome ?? gift.nome}
          comprado={comprado}
        />
        {varias && (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-0.5 text-xs text-primary-foreground">
            Opção {indice + 1}
          </span>
        )}
      </div>

      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="font-heading text-lg">{gift.nome}</CardTitle>
        </div>
        <CardDescription>{gift.descricao}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        {!comprado && varias && (
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Este presente tem {gift.opcoes.length} opções de produto
            </p>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Opções do presente"
            >
              {gift.opcoes.map((o, i) => (
                <Button
                  key={o.nome}
                  size="sm"
                  variant={i === indice ? "default" : "outline"}
                  aria-pressed={i === indice}
                  onClick={() => setIndice(i)}
                >
                  Opção {i + 1}
                </Button>
              ))}
            </div>
          </div>
        )}

        {!comprado && opcao && (
          <div className="space-y-3">
            <p className="text-sm font-medium">
              {varias && (
                <span className="text-muted-foreground">
                  Opção {indice + 1}:{" "}
                </span>
              )}
              {opcao.nome}
            </p>
            <div className="flex flex-wrap gap-2">
              {opcao.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "rounded-full border-primary/40 text-primary",
                  )}
                >
                  {link.loja} ↗
                </a>
              ))}
            </div>
          </div>
        )}

        {comprado && (
          <p className="text-sm text-muted-foreground">
            Presente garantido. Obrigado de coração!
          </p>
        )}
      </CardContent>

      {!comprado && (
        <CardFooter className="flex flex-wrap gap-2">
          <a
            href={linkWhatsapp(mensagemCompra)}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants()}
          >
            Avisar que comprei
          </a>
          <Button variant="outline" onClick={() => setPixAberto(true)}>
            Contribuir via Pix
          </Button>
        </CardFooter>
      )}

      <PixDialog
        open={pixAberto}
        onOpenChange={setPixAberto}
        presente={gift.nome}
      />
    </Card>
  );
}
