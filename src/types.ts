export type GiftStatus = "disponivel" | "comprado";
export type GiftCategory = "Cozinha" | "Sala";

export interface GiftLink {
  loja: string;
  url: string;
}

export interface GiftOption {
  nome: string;
  imagemUrl?: string;
  links: GiftLink[];
  precoRef?: number; // valor aproximado em reais, só para o filtro
}

export interface Gift {
  id: string;
  nome: string;
  categoria: GiftCategory;
  descricao: string;
  opcoes: GiftOption[];
  status: GiftStatus;
}
