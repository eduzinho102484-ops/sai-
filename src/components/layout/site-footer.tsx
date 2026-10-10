import { Clock } from "lucide-react"

import { WhatsAppLink } from "@/components/common/whatsapp-link"
import { Logo } from "@/components/layout/logo"
import { SERVICES } from "@/data/services"
import { NAV_LINKS, SITE, WHATSAPP_MESSAGES } from "@/lib/site"

const SiteFooter = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-brand-foreground">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col gap-5 lg:pr-6">
            <Logo tone="light" />
            <p className="text-body-sm text-brand-muted">
              Conserto, instalação e manutenção de eletrodomésticos em residências.
              O contato é direto pelo WhatsApp.
            </p>
            <WhatsAppLink
              label="Falar no WhatsApp"
              message={WHATSAPP_MESSAGES.geral}
              size="sm"
              className="self-start"
            />
          </div>

          <nav aria-label="Navegação do rodapé" className="flex flex-col gap-3">
            <h3 className="text-label-caps text-brand-foreground">Navegação</h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-body-sm text-brand-muted transition-colors hover:text-green-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <h3 className="text-label-caps text-brand-foreground">Serviços</h3>
            <ul className="grid gap-2.5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href="#servicos"
                    className="text-body-sm text-brand-muted transition-colors hover:text-green-400"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-label-caps text-brand-foreground">Contato</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={SITE.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tabular text-body-sm font-semibold text-brand-foreground transition-colors hover:text-green-400"
                >
                  WhatsApp {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2 text-body-sm text-brand-muted">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-green-400" aria-hidden="true" />
                <span className="tabular">
                  {SITE.schedule.day}, {SITE.schedule.hours}
                  <br />
                  Demais dias: consulte pelo WhatsApp
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 pb-24 pt-6 text-[0.8125rem] text-brand-muted sm:flex-row sm:items-center sm:justify-between lg:pb-6">
          <p className="tabular">© {year} {SITE.name}. Todos os direitos reservados.</p>
          <p>{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  )
}

export { SiteFooter }
