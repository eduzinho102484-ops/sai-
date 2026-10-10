import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"

type RevealProps = {
  children: React.ReactNode
  /** Atraso em segundos, usado para escalonar itens de uma mesma grade. */
  delay?: number
  /** Deslocamento vertical inicial em pixels. */
  y?: number
  className?: string
}

/** Revela o conteúdo com um fade/slide discreto ao entrar na viewport. */
const Reveal = ({ children, delay = 0, y = 16, className }: RevealProps) => {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reduceMotion ? 0.01 : 0.5,
        delay: reduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

export { Reveal }
