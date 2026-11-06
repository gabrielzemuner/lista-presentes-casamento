import { useEffect, useState } from "react";
import { PixDialog } from "@/components/pix-dialog";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { linkWhatsapp } from "@/lib/whatsapp";
import type { Gift, GiftOption } from "@/types";

function Foto({ src, alt }: { src?: string; alt: string }) {
  return (
    <div className="flex h-64 items-center justify-center border-b bg-white p-4">
      {src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="max-h-full max-w-full object-contain"
        />
      )}
    </div>
  );
}

export function GiftCard({ gift }: { gift: Gift }) {
  const [api, setApi] = useState<CarouselApi>();
  const [indice, setIndice] = useState(0);
  const [pixAberto, setPixAberto] = useState(false);

  useEffect(() => {
    if (!api) return;
    const aoMudar = () => setIndice(api.selectedScrollSnap());
    api.on("select", aoMudar);
    return () => {
      api.off("select", aoMudar);
    };
  }, [api]);

  const comprado = gift.status === "comprado";
  const varias = gift.opcoes.length > 1;
  const opcao: GiftOption | undefined = gift.opcoes[indice];

  const nomeCompleto = opcao ? `${gift.nome} (${opcao.nome})` : gift.nome;
  const mensagemCompra = `Oi! Comprei o presente "${nomeCompleto}". Meu nome: ___`;

  return (
    <Card className={cn("h-full pt-0", comprado && "opacity-60")}>
      {varias ? (
        <div className="relative">
          <Carousel setApi={setApi} opts={{ loop: true }}>
            <CarouselContent className="ml-0">
              {gift.opcoes.map((o) => (
                <CarouselItem key={o.nome} className="pl-0">
                  <Foto src={o.imagemUrl} alt={o.nome} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <Button
            variant="secondary"
            size="sm"
            aria-label="Opção anterior"
            className="absolute left-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full p-0"
            onClick={() => api?.scrollPrev()}
          >
            ‹
          </Button>
          <Button
            variant="secondary"
            size="sm"
            aria-label="Próxima opção"
            className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full p-0"
            onClick={() => api?.scrollNext()}
          >
            ›
          </Button>
          <span className="absolute bottom-2 right-3 rounded-full bg-background/80 px-2 py-0.5 text-xs text-muted-foreground">
            {indice + 1}/{gift.opcoes.length}
          </span>
        </div>
      ) : (
        <Foto src={opcao?.imagemUrl} alt={gift.nome} />
      )}

      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="font-heading text-lg">{gift.nome}</CardTitle>
          {comprado && <Badge>Já ganhamos!</Badge>}
        </div>
        <CardDescription>{gift.descricao}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 space-y-3">
        {opcao && (
          <>
            <p className="text-sm font-medium">{opcao.nome}</p>
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
          </>
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