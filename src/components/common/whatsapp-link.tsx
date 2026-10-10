import * as React from "react"
import { MessageCircle } from "lucide-react"

import { Button, type ButtonProps } from "@/components/ui/button"
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "@/lib/site"

type WhatsAppLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "children"
> & {
  /** Texto já pronto enviado ao WhatsApp. */
  message?: string
  label: React.ReactNode
  variant?: ButtonProps["variant"]
  size?: ButtonProps["size"]
  showIcon?: boolean
}

/**
 * Todo link de WhatsApp do site passa por aqui: garante a URL comercial
 * correta, abertura em nova aba e o ícone acessível.
 */
const WhatsAppLink = React.forwardRef<HTMLAnchorElement, WhatsAppLinkProps>(
  (
    {
      message = WHATSAPP_MESSAGES.geral,
      label,
      variant = "whatsapp",
      size = "default",
      showIcon = true,
      className,
      ...props
    },
    ref
  ) => (
    <Button asChild variant={variant} size={size} className={className}>
      <a
        ref={ref}
        href={buildWhatsAppUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {showIcon ? <MessageCircle aria-hidden="true" /> : null}
        <span>{label}</span>
      </a>
    </Button>
  )
)
WhatsAppLink.displayName = "WhatsAppLink"

export { WhatsAppLink }
