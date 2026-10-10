import { Clock, MessageCircle } from "lucide-react"

import { Reveal } from "@/components/common/reveal"
import { SectionHeading } from "@/components/common/section-heading"
import { WhatsAppLink } from "@/components/common/whatsapp-link"
import { SITE, WHATSAPP_MESSAGES } from "@/lib/site"

const Schedule = () => (
  <section id="horario" className="bg-background py-16 md:py-24 lg:py-32">
    <div className="container">
      <SectionHeading
        eyebrow="Horário"
        title="Quando você pode falar com a gente"
        description="Horário de atendimento informado pela empresa."
      />

      <Reveal className="mt-12" y={20}>
        <div className="mx-auto flex max-w-[640px] flex-col gap-6 rounded-xl border border-border bg-card p-6 shadow-md md:p-10">
          <div className="flex items-start gap-4">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-whatsapp-soft text-whatsapp-soft-foreground"
              aria-hidden="true"
            >
              <Clock className="h-6 w-6" />
            </span>
            <div>
              <p className="text-label-caps text-muted-foreground">Atendimento</p>
              <p className="tabular text-display-md mt-1 font-bold text-foreground">
                {SITE.schedule.day}, {SITE.schedule.hours}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-border bg-navy-50 p-4">
            <MessageCircle
              className="mt-0.5 h-5 w-5 shrink-0 text-whatsapp"
              aria-hidden="true"
            />
            <p className="text-body-sm text-muted-foreground">
              Nos demais dias, consulte pelo WhatsApp: a empresa confirma o melhor dia e
              horário para o seu atendimento.
            </p>
          </div>

          <WhatsAppLink
            label="Consultar pelo WhatsApp"
            message={WHATSAPP_MESSAGES.horario}
            size="lg"
            className="w-full sm:w-auto sm:self-start"
          />
        </div>
      </Reveal>
    </div>
  </section>
)

export { Schedule }
