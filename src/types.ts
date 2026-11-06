export type GiftStatus = "disponivel" | "comprado";

export interface Gift {
  id: string;
  nome: string;
  categoria: "Cozinha" | "Sala";
  descricao: string; // modelo, tamanho, cor, voltagem
  valor: number; // valor de referência, em reais
  arrecadado?: number; // opcional: soma dos Pix parciais já recebidos
  imagem?: string;
  links: string[]; // até 3 sites de referência
  status: GiftStatus;
}
