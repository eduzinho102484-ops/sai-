import { Reveal } from "@/components/common/reveal"
import { SectionHeading } from "@/components/common/section-heading"
import { WhatsAppLink } from "@/components/common/whatsapp-link"
import { SERVICES } from "@/data/services"
import { WHATSAPP_MESSAGES, WHATSAPP_SHORT_LABEL } from "@/lib/site"

const Services = () => (
  <section id="servicos" className="bg-background py-16 md:py-24 lg:py-32">
    <div className="container">
      <SectionHeading
        eyebrow="Serviços"
        title="O que consertamos e instalamos"
        description="Atendemos os principais eletrodomésticos da casa. Escolha o equipamento e solicite o orçamento direto pelo WhatsApp."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {SERVICES.map((service, index) => {
          const Icon = service.icon
          return (
            <Reveal key={service.id} delay={(index % 3) * 0.06} y={20} className="h-full">
              <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-[transform,border-color,box-shadow] duration-200 ease-standard hover:-translate-y-1 hover:border-navy-200 hover:shadow-lg md:p-8">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-soft text-brand-soft-foreground transition-transform duration-200 ease-standard group-hover:scale-[1.06]"
                  aria-hidden="true"
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>

                <h3 className="mt-5 text-[1.125rem] font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-body-sm mt-2 text-muted-foreground">
                  {service.description}
                </p>

                <div className="mt-auto pt-6">
                  <WhatsAppLink
                    label={WHATSAPP_SHORT_LABEL}
                    message={WHATSAPP_MESSAGES.servico(service.term)}
                    size="sm"
                    className="w-full"
                    aria-label={`${WHATSAPP_SHORT_LABEL} para ${service.title}`}
                  />
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </div>
  </section>
)

export { Services }
