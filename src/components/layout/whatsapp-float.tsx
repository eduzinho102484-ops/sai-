import { useState } from "react"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { MessageCircle } from "lucide-react"

import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "@/lib/site"

type WhatsAppFloatProps = {
  /** Ocultado enquanto o menu mobile está aberto. */
  hidden?: boolean
}

const WhatsAppFloat = ({ hidden = false }: WhatsAppFloatProps) => {
  const [passedHero, setPassedHero] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setPassedHero(latest > 420)
  })

  const visible = passedHero && !hidden

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 lg:bottom-8 lg:right-8"
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            aria-hidden="true"
            className="animate-pulse-ring absolute inset-0 rounded-full bg-whatsapp/50"
          />
          <a
            href={buildWhatsAppUrl(WHATSAPP_MESSAGES.geral)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a Lucky Service no WhatsApp"
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-glow-whatsapp-strong transition-[background-color,transform,box-shadow] duration-200 ease-standard hover:scale-[1.06] hover:bg-whatsapp-hover active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:h-16 lg:w-16"
          >
            <MessageCircle className="h-6 w-6 lg:h-7 lg:w-7" aria-hidden="true" />
            <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-navy-900 px-3 py-2 text-[0.8125rem] font-semibold text-brand-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 lg:block">
              Falar no WhatsApp
            </span>
          </a>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export { WhatsAppFloat }
