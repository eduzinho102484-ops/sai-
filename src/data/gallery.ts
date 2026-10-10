export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  /** Proporção intrínseca da imagem, para reservar espaço e evitar layout shift. */
  width: number;
  height: number;
};

export const GALLERY: GalleryItem[] = [
  {
    src: "/images/galeria-cozinha.jpg",
    alt: "Cozinha residencial com forno, cooktop, micro-ondas e geladeira embutidos",
    caption: "Cozinha com eletrodomésticos embutidos",
    width: 1400,
    height: 1050,
  },
  {
    src: "/images/galeria-lavanderia.jpg",
    alt: "Lavanderia residencial com máquina de lavar e secadora lado a lado",
    caption: "Lavanderia residencial",
    width: 1400,
    height: 1050,
  },
  {
    src: "/images/galeria-geladeira.jpg",
    alt: "Técnico verificando a borracha de vedação de uma geladeira aberta",
    caption: "Manutenção de geladeira",
    width: 1400,
    height: 1050,
  },
  {
    src: "/images/galeria-ar-condicionado.jpg",
    alt: "Técnico fazendo manutenção e limpeza de ar-condicionado split",
    caption: "Manutenção de ar-condicionado",
    width: 1400,
    height: 1050,
  },
  {
    src: "/images/galeria-fogao.jpg",
    alt: "Fogão inox e micro-ondas em cozinha residencial",
    caption: "Fogão e micro-ondas",
    width: 1400,
    height: 1050,
  },
  {
    src: "/images/galeria-forno.jpg",
    alt: "Técnico testando a resistência de um forno elétrico embutido",
    caption: "Conserto de forno elétrico",
    width: 1400,
    height: 1050,
  },
  {
    src: "/images/galeria-freezer.jpg",
    alt: "Freezer horizontal aberto sendo regulado durante o atendimento",
    caption: "Freezer residencial",
    width: 1400,
    height: 1050,
  },
  {
    src: "/images/galeria-tecnico.jpg",
    alt: "Técnico com maleta de ferramentas chegando para o atendimento residencial",
    caption: "Atendimento residencial",
    width: 1400,
    height: 1050,
  },
];

/** Imagem usada na seção "Sobre a empresa". */
export const ABOUT_IMAGE = {
  src: "/images/sobre-equipe.jpg",
  alt: "Técnico instalando um forno embutido em uma cozinha moderna",
  width: 1600,
  height: 900,
} as const;

/** Fotografia principal do hero. */
export const HERO_IMAGE = {
  src: "/images/hero-tecnico.jpg",
  alt: "Técnico da Lucky Service consertando uma máquina de lavar em uma lavanderia residencial",
  width: 1100,
  height: 1467,
} as const;
