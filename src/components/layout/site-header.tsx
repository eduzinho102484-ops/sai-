import { useCallback, useEffect, useState } from "react"
import { useMotionValueEvent, useScroll } from "framer-motion"
import { ArrowUpRight, Menu } from "lucide-react"

import { WhatsAppLink } from "@/components/common/whatsapp-link"
import { Logo } from "@/components/layout/logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NAV_LINKS, SITE, WHATSAPP_MESSAGES, WHATSAPP_SHORT_LABEL } from "@/lib/site"
import { cn } from "@/lib/utils"

type SiteHeaderProps = {
  onMenuOpenChange?: (open: boolean) => void
}

const SiteHeader = ({ onMenuOpenChange }: SiteHeaderProps) => {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState("inicio")
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24)
  })

  const handleMenuOpenChange = useCallback(
    (open: boolean) => {
      setMenuOpen(open)
      onMenuOpenChange?.(open)
    },
    [onMenuOpenChange]
  )

  // Destaca no menu a seção visível no momento.
  useEffect(() => {
    const ids = NAV_LINKS.map((link) => link.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-16 w-full transition-[background-color,border-color,box-shadow] duration-300 ease-standard lg:h-[72px]",
        scrolled
          ? "border-b border-border bg-background/85 shadow-xs backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container flex h-full items-center justify-between gap-4">
        <Logo tone={scrolled ? "dark" : "light"} />

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative rounded-md px-3 py-2 text-body-sm font-medium transition-colors",
                  "after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-whatsapp after:transition-transform after:duration-200 hover:after:scale-x-100",
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-brand-muted hover:text-brand-foreground",
                  isActive && "after:scale-x-100",
                  isActive && (scrolled ? "text-foreground" : "text-brand-foreground")
                )}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppLink
            label={WHATSAPP_SHORT_LABEL}
            message={WHATSAPP_MESSAGES.geral}
            size="sm"
            className="hidden lg:inline-flex"
          />

          <Sheet open={menuOpen} onOpenChange={handleMenuOpenChange}>
            <SheetTrigger asChild>
              <Button
                variant={scrolled ? "ghost" : "ghostOnDark"}
                size="icon"
                className="lg:hidden"
                aria-label="Abrir menu de navegação"
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-[360px] p-0">
              <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="border-b border-border px-6 py-5">
                  <Logo tone="dark" />
                </div>
                <nav
                  aria-label="Seções do site"
                  className="flex flex-1 flex-col overflow-y-auto px-2 py-2"
                >
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => handleMenuOpenChange(false)}
                      className="flex items-center justify-between rounded-lg px-4 py-4 text-[1.0625rem] font-semibold text-foreground transition-colors hover:bg-navy-50"
                    >
                      {link.label}
                      <ArrowUpRight
                        className="h-4 w-4 text-muted-foreground"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </nav>
                <div className="border-t border-border px-6 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
                  <WhatsAppLink
                    label={WHATSAPP_SHORT_LABEL}
                    message={WHATSAPP_MESSAGES.geral}
                    size="lg"
                    className="w-full"
                  />
                  <p className="tabular mt-3 text-center text-[0.75rem] text-muted-foreground">
                    WhatsApp {SITE.phoneDisplay}
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export { SiteHeader }
