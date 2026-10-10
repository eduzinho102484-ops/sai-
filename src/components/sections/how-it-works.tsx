import { Reveal } from "@/components/common/reveal"
import { SectionHeading } from "@/components/common/section-heading"

const STEPS = [
  {
    title: "Entre em contato",
    description:
      "Use qualquer botão de WhatsApp do site ou o formulário de contato para falar com a Lucky Service.",
  },
  {
    title: "Explique o problema",
    description:
      "Informe qual é o equipamento e conte o que está acontecendo, para o orçamento sair certo desde a primeira conversa.",
  },
  {
    title: "Combine o atendimento",
    description:
      "A data, o horário e os detalhes do serviço são combinados diretamente com a empresa, na mesma conversa.",
  },
]

const HowItWorks = () => (
  <section id="como-funciona" className="bg-gradient-brand py-16 md:py-24 lg:py-32">
    <div className="container">
      <SectionHeading
        tone="dark"
        eyebrow="Como funciona"
        title="Três passos para resolver"
        description="O caminho é curto: você fala com a empresa, explica o problema e acerta o atendimento."
      />

      <ol className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
        {STEPS.map((step, index) => (
          <li key={step.title} className="relative h-full">
            <Reveal delay={index * 0.08} y={20} className="h-full">
              <div className="surface-on-dark flex h-full flex-col rounded-xl border p-6 backdrop-blur-sm md:p-8">
                <span
                  className="tabular flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp font-display text-base font-bold text-whatsapp-foreground shadow-glow-whatsapp"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <h3 className="mt-5 text-[1.25rem] font-semibold text-brand-foreground">
                  {step.title}
                </h3>
                <p className="text-body-sm mt-3 text-brand-muted">{step.description}</p>
              </div>
            </Reveal>

            {index < STEPS.length - 1 ? (
              <span
                aria-hidden="true"
                className="bg-gradient-divider absolute -right-7 top-1/2 hidden h-px w-6 lg:block"
              />
            ) : null}
          </li>
        ))}
      </ol>

      <Reveal delay={0.2}>
        <p className="mt-10 text-center text-body-sm text-brand-muted">
          Os detalhes do serviço são tratados diretamente pelo WhatsApp, com a própria
          empresa.
        </p>
      </Reveal>
    </div>
  </section>
)

export { HowItWorks }
