import type { Gift } from "../types";

export const gifts: Gift[] = [
  {
    id: "microondas",
    nome: "Microondas",
    categoria: "Cozinha",
    descricao: "TODO: capacidade em litros, cor, voltagem",
    valor: 0, // TODO
    links: [],
    status: "disponivel",
  },
  {
    id: "jogo-de-panelas",
    nome: "Jogo de panelas",
    categoria: "Cozinha",
    descricao: "TODO: marca (Brinox ou Hercules), nº de peças, material, cor",
    valor: 0, // TODO
    links: [],
    status: "disponivel",
  },
  {
    id: "toalha-de-mesa",
    nome: "Toalha de mesa",
    categoria: "Sala",
    descricao: "TODO: medida em cm, cor, para qual mesa",
    valor: 0, // TODO
    links: [],
    status: "disponivel",
  },
];
