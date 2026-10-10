import { Reveal } from "@/components/common/reveal"
import { SectionHeading } from "@/components/common/section-heading"
import { GALLERY } from "@/data/gallery"
import { cn } from "@/lib/utils"

const Gallery = () => (
  <section id="galeria" className="bg-background py-16 md:py-24 lg:py-32">
    <div className="container">
      <SectionHeading
        eyebrow="Galeria"
        title="Eletrodomésticos, cozinhas e lavanderias"
        description="Exemplos de equipamentos e ambientes residenciais que fazem parte do nosso dia a dia de atendimento."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:mt-16 lg:grid-cols-4">
        {GALLERY.map((item, index) => (
          <Reveal
            key={item.src}
            delay={(index % 4) * 0.05}
            y={18}
            className={cn("h-full", index === 0 && "col-span-2 md:col-span-1")}
          >
            <figure className="group relative h-full overflow-hidden rounded-xl border border-border bg-navy-100">
              <img
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 ease-entrance group-hover:scale-[1.04]"
              />
              <figcaption className="bg-gradient-image-overlay absolute inset-0 flex items-end p-4 opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
                <span className="text-label-caps text-brand-foreground">
                  {item.caption}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export { Gallery }
