/**
 * Dados reais da Lucky Service. Tudo que aparece no site e que envolve contato
 * ou horário vem daqui — nenhum valor inventado (preços, endereço, garantias,
 * avaliações ou horários de outros dias).
 */
export const SITE = {
  name: "Lucky Service",
  tagline: "Assistência técnica de eletrodomésticos",
  phoneDisplay: "(11) 94683-4494",
  whatsappNumber: "5511946834494",
  whatsappBaseUrl: "https://wa.me/5511946834494",
  /** Único horário confirmado pela empresa. */
  schedule: {
    day: "Sexta-feira",
    hours: "08h30 às 18h",
  },
} as const;

export const WHATSAPP_LABEL = "Solicitar orçamento pelo WhatsApp";
export const WHATSAPP_SHORT_LABEL = "Orçamento no WhatsApp";

export const buildWhatsAppUrl = (message: string) =>
  `${SITE.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_MESSAGES = {
  geral: "Olá, Lucky Service! Gostaria de solicitar um orçamento.",
  servico: (termo: string) =>
    `Olá, Lucky Service! Gostaria de solicitar um orçamento para ${termo}.`,
  horario:
    "Olá, Lucky Service! Vi que o atendimento é na sexta-feira, das 08h30 às 18h. Gostaria de solicitar um orçamento.",
  formulario: (dados: {
    nome: string;
    telefone: string;
    equipamento: string;
    descricao: string;
  }) =>
    [
      `Olá, Lucky Service! Meu nome é ${dados.nome}.`,
      `Telefone: ${dados.telefone}.`,
      `Equipamento: ${dados.equipamento}.`,
      `Problema: ${dados.descricao}`,
    ].join(" "),
} as const;

export const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#horario", label: "Horário" },
  { href: "#contato", label: "Contato" },
] as const;
