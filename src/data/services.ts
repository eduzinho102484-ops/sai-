import {
  AirVent,
  CookingPot,
  Flame,
  Grid2x2,
  Microwave,
  Refrigerator,
  Snowflake,
  WashingMachine,
  Waves,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  /** Título exibido no card. */
  title: string;
  /** Descrição curta do que é feito. */
  description: string;
  /** Termo usado na mensagem específica do WhatsApp. */
  term: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    id: "lavadoras",
    title: "Lavadoras",
    description: "Conserto e manutenção de máquinas de lavar roupa.",
    term: "máquina de lavar",
    icon: WashingMachine,
  },
  {
    id: "lava-e-seca",
    title: "Lava e seca",
    description: "Conserto e manutenção de lavadoras com função de secagem.",
    term: "máquina lava e seca",
    icon: Waves,
  },
  {
    id: "geladeiras",
    title: "Geladeiras",
    description: "Conserto e manutenção de geladeiras, com atendimento residencial.",
    term: "geladeira",
    icon: Refrigerator,
  },
  {
    id: "freezers",
    title: "Freezers",
    description: "Conserto e manutenção de freezers e refrigeradores.",
    term: "freezer",
    icon: Snowflake,
  },
  {
    id: "ar-condicionado",
    title: "Ar-condicionado",
    description: "Instalação, manutenção e limpeza de ar-condicionado split.",
    term: "ar-condicionado",
    icon: AirVent,
  },
  {
    id: "micro-ondas",
    title: "Micro-ondas",
    description: "Conserto e manutenção de fornos micro-ondas.",
    term: "micro-ondas",
    icon: Microwave,
  },
  {
    id: "fogoes",
    title: "Fogões",
    description: "Conserto e instalação de fogões residenciais.",
    term: "fogão",
    icon: Flame,
  },
  {
    id: "cooktops",
    title: "Cooktops",
    description: "Instalação e conserto de cooktops a gás e elétricos.",
    term: "cooktop",
    icon: Grid2x2,
  },
  {
    id: "fornos",
    title: "Fornos",
    description: "Instalação e conserto de fornos elétricos e a gás.",
    term: "forno",
    icon: CookingPot,
  },
];

/** Opções do campo "Equipamento" do formulário de contato. */
export const EQUIPMENT_OPTIONS = [
  ...SERVICES.map((service) => service.title),
  "Outro",
] as const;
