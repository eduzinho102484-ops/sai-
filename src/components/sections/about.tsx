import { CheckCircle2 } from "lucide-react"

import { Reveal } from "@/components/common/reveal"
import { SectionHeading } from "@/components/common/section-heading"
import { WhatsAppLink } from "@/components/common/whatsapp-link"
import { ABOUT_IMAGE } from "@/data/gallery"
import { WHATSAPP_LABEL, WHATSAPP_MESSAGES } from "@/lib/site"

const DIFERENCIAIS = [
  "Conserto, instalação e manutenção reunidos em um único atendimento",
  "Variedade de equipamentos: da cozinha à lavanderia",
  "Contato direto pelo WhatsApp, com a própria empresa",
]

const About = () => (
  <section id="sobre" className="bg-gradient-navy-soft py-16 md:py-24 lg:py-32">
    <div className="container">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 min-w-0 lg:order-1">
          <SectionHeading
            align="left"
            eyebrow="Sobre a empresa"
            title="Assistência técnica para os eletrodomésticos da sua casa"
          />

          <Reveal delay={0.08}>
            <p className="text-body-md mt-5 text-muted-foreground">
              A Lucky Service faz conserto, instalação e manutenção de eletrodomésticos
              em residências. O serviço é combinado de forma prática: você fala com a
              empresa pelo WhatsApp, explica o que está acontecendo com o equipamento e
              acerta o atendimento direto com quem vai executar o serviço.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="mt-7 flex flex-col gap-3">
              {DIFERENCIAIS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                    aria-hidden="true"
                  />
                  <span className="text-body-md text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8">
              <WhatsAppLink label={WHATSAPP_LABEL} size="lg" className="w-full sm:w-auto" />
            </div>
          </Reveal>
        </div>

        <Reveal className="order-1 lg:order-2" delay={0.1} y={24}>
          <img
            src={ABOUT_IMAGE.src}
            alt={ABOUT_IMAGE.alt}
            width={ABOUT_IMAGE.width}
            height={ABOUT_IMAGE.height}
            loading="lazy"
            decoding="async"
            className="aspect-[16/9] w-full rounded-xl border border-border object-cover shadow-lg"
          />
        </Reveal>
      </div>
    </div>
  </section>
)

export { About }
