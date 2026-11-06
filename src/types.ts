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
}

export interface Gift {
  id: string;
  nome: string;
  categoria: GiftCategory;
  descricao: string;
  opcoes: GiftOption[];
  status: GiftStatus;
}
