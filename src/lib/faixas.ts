import type { Gift } from "@/types";

export interface Faixa {
  id: string;
  rotulo: string;
  min: number;
  max: number;
}

// Ajuste os limites depois de preencher os preços de referência.
export const faixas: Faixa[] = [
  { id: "ate-200", rotulo: "Até R$ 200", min: 0, max: 200 },
  { id: "200-500", rotulo: "R$ 200 a 500", min: 200, max: 500 },
  { id: "500-1000", rotulo: "R$ 500 a 1.000", min: 500, max: 1000 },
  { id: "acima-1000", rotulo: "Acima de R$ 1.000", min: 1000, max: Infinity },
];

export function presenteNaFaixa(gift: Gift, faixa: Faixa): boolean {
  return gift.opcoes.some(
    (o) =>
      o.precoRef !== undefined &&
      o.precoRef >= faixa.min &&
      o.precoRef < faixa.max,
  );
}
