import { useState } from "react"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { WhatsAppFloat } from "@/components/layout/whatsapp-float"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Gallery } from "@/components/sections/gallery"
import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Schedule } from "@/components/sections/schedule"
import { Services } from "@/components/sections/services"

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-[0.9375rem] focus:font-semibold focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>

      <SiteHeader onMenuOpenChange={setMenuOpen} />

      <main id="conteudo" className="flex-1">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <HowItWorks />
        <Schedule />
        <Contact />
      </main>

      <SiteFooter />
      <WhatsAppFloat hidden={menuOpen} />
    </div>
  )
}

export default Index
