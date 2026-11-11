import type { Gift } from "@/types";

// Imagens ficam em public/presentes/. O BASE_URL inclui o "/lista-presentes-casamento/".
const imagem = (arquivo: string) =>
  `${import.meta.env.BASE_URL}presentes/${arquivo}`;

export const gifts: Gift[] = [
  {
    id: "microondas",
    nome: "Micro-ondas",
    categoria: "Cozinha",
    descricao:
      "21 litros, com desodorizador. Tamanho máximo: 56x32 cm, 35 cm de profundidade.",
    status: "disponivel",
    opcoes: [
      {
        nome: "Micro-ondas Panasonic 21 Litros Desodorizador NN-ST27LWRUN",
        imagemUrl: imagem("microondas.png"),
        links: [
          {
            loja: "Magazine Luiza",
            url: "https://www.magazineluiza.com.br/micro-ondas-panasonic-21-litros-desodorizador-nn-st27lwrun/p/ca7c22101h/ed/mond/?seller_id=carrefouroficial",
          },
          {
            loja: "Shopee",
            url: "https://shopee.com.br/product/443109642/23093882310",
          },
        ],
        precoRef: 550
      },
    ],
  },
  {
    id: "cooktop",
    nome: "Cooktop",
    categoria: "Cozinha",
    descricao: "A gás, 4 bocas, tripla chama, mesa de vidro, bivolt.",
    status: "disponivel",
    opcoes: [
      {
        nome: "Cooktop a Gás Fischer 4 Bocas Tripla Chama Infinity com Trempe de ferro fundido Mesa Vidro Bivolt",
        imagemUrl: imagem("cooktop.png"),
        links: [
          {
            loja: "Leroy Merlin",
            url: "https://www.leroymerlin.com.br/cooktop-4-bocas-a-gas-com-acendimento-automatico-vidro-preto-bivolt-infinity-26297-57076-fischer_90874693",
          },
        ],
        precoRef: 739
      },
      {
        nome: "Cooktop 4 Bocas Dako Supreme com Mesa de Vidro e Tripla Chama Preto Bivolt",
        imagemUrl: imagem("cooktop2.png"),
        links: [
          {
            loja: "Mercado Livre",
            url: "https://www.mercadolivre.com.br/cooktop-4-bocas-dako-supreme-com-mesa-de-vidro-e-tripla-chama-preto-bivolt/p/MLB23455094",
          },
        ],
        precoRef: 508
      },
    ],
  },
  {
    id: "forno",
    nome: "Forno elétrico",
    categoria: "Cozinha",
    descricao: "De bancada, 44 litros, com grill, branco, 110 V.",
    status: "disponivel",
    opcoes: [
      {
        nome: "Forno Elétrico de Bancada Fischer Grill 44 litros",
        imagemUrl: imagem("forno.png"),
        links: [
          {
            loja: "Colombo",
            url: "https://www.colombo.com.br/produto/Eletrodomesticos/Forno-Eletrico-44-Litros-Grill-16-Fischer?cor=Branca&espec=110v-seller-1",
          },
        ],
        precoRef: 619
      },
    ],
  },
  {
    id: "travessa",
    nome: "Travessas de vidro",
    categoria: "Cozinha",
    descricao: "Jogo com 3 assadeiras de vidro refratário, retangulares.",
    status: "disponivel",
    opcoes: [
      {
        nome: "Jogo 3 Assadeiras Lasanheira de Vidro Refratária Retangular",
        imagemUrl: imagem("travessa.png"),
        links: [
          {
            loja: "Mercado Livre",
            url: "https://www.mercadolivre.com.br/jogo-3-assadeiras-lasanheira-de-vidro-refrataria-retangular/up/MLBU3330926093",
          },
        ],
        precoRef: 110
      },
    ],
  },
  {
    id: "panelas",
    nome: "Jogo de panelas",
    categoria: "Cozinha",
    descricao: "Antiaderente, das marcas Brinox ou Hercules.",
    status: "disponivel",
    opcoes: [
      {
        nome: "Jogo de Panelas Soft Touch Hercules Antiaderente 5 Peças Cinza PA300-5PCZ",
        imagemUrl: imagem("panelas.png"),
        links: [
          {
            loja: "Mundial",
            url: "https://loja.mundial.com/jogo-de-panelas-soft-touch-hercules-antiaderente-5-pecas-cinza-pa300-5pcz-717276",
          },
        ],
        precoRef: 633
      },
      {
        nome: "Jogo de Panelas Brinox Antiaderente Ceramic Life 8 Peças Smart Plus Vanilla",
        imagemUrl: imagem("panelas2.png"),
        links: [
          {
            loja: "Brinox",
            url: "https://www.brinox.com.br/jogo-de-panelas-brinox-antiaderente-ceramic-life-8-pecas-smart-plus-vanilla_4791105-1-4791105/p",
          },
        ],
        precoRef: 550
      },
    ],
  },
  {
    id: "talheres",
    nome: "Jogo de talheres",
    categoria: "Cozinha",
    descricao: "Faqueiro Tramontina em aço inox, com facas para churrasco.",
    status: "disponivel",
    opcoes: [
      {
        nome: "Faqueiro Tramontina Havana, 36 peças",
        imagemUrl: imagem("talheres.png"),
        links: [
          {
            loja: "Tramontina",
            url: "https://www.tramontina.com.br/faqueiro-tramontina-havana-em-aco-inox-com-facas-para-churrasco-acabamento-em-brilho-36-pecas/66945794.html",
          },
        ],
        precoRef: 250
      },
      {
        nome: "Faqueiro Tramontina Pacific, 36 peças",
        imagemUrl: imagem("talheres2.png"),
        links: [
          {
            loja: "Tramontina",
            url: "https://www.tramontina.com.br/faqueiro-tramontina-pacific-em-aco-inox-com-facas-para-churrasco-acabamento-alto-brilho-com-detalhes-no-cabo-36-pecas/66962134.html",
          },
        ],
        precoRef: 425
      },
      {
        nome: "Faqueiro Tramontina Cosmos, 42 peças",
        imagemUrl: imagem("talheres3.png"),
        links: [
          {
            loja: "Tramontina",
            url: "https://www.tramontina.com.br/faqueiro-tramontina-cosmos-em-aco-inox-com-facas-para-churrasco-acabamento-brilho-e-fosco-42-pecas/66950774.html",
          },
        ],
        precoRef: 383
      },
    ],
  },
  {
    id: "pratos",
    nome: "Jogo de pratos",
    categoria: "Cozinha",
    descricao: "Aparelho de jantar e chá, 30 peças.",
    status: "disponivel",
    opcoes: [
      {
        nome: "Aparelho de Jantar e Chá 30 Peças Oxford Unni Brisa",
        imagemUrl: imagem("pratos.png"),
        links: [
          {
            loja: "Mercado Livre",
            url: "https://www.mercadolivre.com.br/aparelho-de-jantar-e-cha-30-pecas-oxford-unni-brisa/p/MLB32811621",
          },
        ],
        precoRef: 550
      },
    ],
  },
  {
    id: "lava-e-seca",
    nome: "Lava e seca",
    categoria: "Cozinha",
    descricao: "Samsung Ecobubble 11 kg, Smart Check, Inox Look, 110 V.",
    status: "disponivel",
    opcoes: [
      {
        nome: "Lava e Seca Samsung Ecobubble 11 Kg, Smart Check, Inox Look - WD11A",
        imagemUrl: imagem("lava-e-seca.png"),
        links: [
          {
            loja: "Colombo",
            url: "https://www.colombo.com.br/produto/Eletrodomesticos/Lava-e-Seca-Samsung-Ecobubble-11-Kg-Smart-Check-Inox-Look-WD11A?cor=Inox+Look&espec=110v-seller-1",
          },
        ],
        precoRef: 3800
      },
    ],
  },
  {
    id: "toalha-de-mesa",
    nome: "Toalha de mesa",
    categoria: "Sala",
    descricao: "TODO: medida em cm, cor, para qual mesa.",
    status: "disponivel",
    opcoes: [],
  },
  {
    id: "sousplat",
    nome: "Sousplat",
    categoria: "Sala",
    descricao: "TODO: material, cor e quantidade.",
    status: "disponivel",
    opcoes: [],
  },
];
