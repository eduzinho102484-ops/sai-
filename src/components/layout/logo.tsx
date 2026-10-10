import * as React from "react"
import { cn } from "@/lib/utils"
import { Wrench } from "lucide-react"
import { SITE } from "@/lib/site"

type LogoProps = {
  tone?: "light" | "dark"
  className?: string
}

/** Wordmark da Lucky Service — tipografia + ícone, sem marca inventada. */
const Logo = React.forwardRef<HTMLAnchorElement, LogoProps>(
  ({ tone = "light", className }, ref) => (
    <a
      ref={ref}
      href="#inicio"
      className={cn("group inline-flex items-center gap-3 rounded-md", className)}
      aria-label={`${SITE.name} — voltar ao início`}
    >
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
          tone === "light"
            ? "bg-whatsapp text-whatsapp-foreground shadow-glow-whatsapp"
            : "bg-primary text-primary-foreground"
        )}
        aria-hidden="true"
      >
        <Wrench className="h-5 w-5" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.0625rem] font-extrabold tracking-tight",
            tone === "light" ? "text-brand-foreground" : "text-foreground"
          )}
        >
          {SITE.name}
        </span>
        <span
          className={cn(
            "mt-0.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em]",
            tone === "light" ? "text-brand-muted" : "text-muted-foreground"
          )}
        >
          Assistência técnica
        </span>
      </span>
    </a>
  )
)
Logo.displayName = "Logo"

export { Logo }
