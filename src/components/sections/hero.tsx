import { CalendarDays, CheckCircle2, Clock, Wrench } from "lucide-react"

import { Reveal } from "@/components/common/reveal"
import { WhatsAppLink } from "@/components/common/whatsapp-link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { HERO_IMAGE } from "@/data/gallery"
import { SITE, WHATSAPP_LABEL, WHATSAPP_MESSAGES } from "@/lib/site"

const HIGHLIGHTS = [
  { icon: Wrench, label: "Conserto, instalação e manutenção" },
  { icon: CheckCircle2, label: "Atendimento residencial" },
  { icon: CalendarDays, label: `${SITE.schedule.day} · ${SITE.schedule.hours}` },
]

const Hero = () => (
  <section
    id="inicio"
    className="bg-gradient-hero hero-glow relative isolate overflow-hidden pb-16 pt-28 lg:pb-24 lg:pt-36"
  >
    <div className="container relative z-10">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="min-w-0 lg:col-span-7">
          <Reveal>
            <Badge variant="on-dark">{SITE.tagline}</Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-display-xl mt-6 font-extrabold text-brand-foreground">
              Seu eletrodoméstico funcionando perfeitamente novamente
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-body-lg mt-6 max-w-[560px] text-brand-muted">
              Conserto, instalação e manutenção de eletrodomésticos na sua casa. Fale
              direto com a {SITE.name} pelo WhatsApp, informe o equipamento e o problema
              e combine o atendimento com a empresa.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppLink
                label={WHATSAPP_LABEL}
                message={WHATSAPP_MESSAGES.geral}
                size="lg"
                className="w-full sm:w-auto"
              />
              <Button
                asChild
                variant="outlineOnDark"
                size="lg"
                className="w-full sm:w-auto"
              >
                <a href="#servicos">Ver serviços</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
              {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="tabular flex items-center gap-2 text-body-sm font-medium text-brand-muted"
                >
                  <Icon className="h-4 w-4 shrink-0 text-green-400" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.15} y={24}>
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              <div
                aria-hidden="true"
                className="bg-gradient-accent absolute -inset-5 rounded-[2.5rem] opacity-25 blur-2xl"
              />
              <img
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                width={HERO_IMAGE.width}
                height={HERO_IMAGE.height}
                fetchPriority="high"
                decoding="async"
                className="relative aspect-[3/4] w-full rounded-[1.75rem] border border-white/10 object-cover shadow-xl"
              />
              <div className="surface-on-dark relative mt-4 flex items-center gap-3 rounded-xl border px-4 py-3 backdrop-blur-sm lg:absolute lg:inset-x-5 lg:bottom-5 lg:mt-0">
                <Clock className="h-5 w-5 shrink-0 text-green-400" aria-hidden="true" />
                <span className="tabular text-[0.8125rem] font-semibold text-brand-foreground">
                  Atendimento {SITE.schedule.day}, {SITE.schedule.hours}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
)

export { Hero }
