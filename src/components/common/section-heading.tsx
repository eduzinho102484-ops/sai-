import { Reveal } from "@/components/common/reveal"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: "center" | "left"
  tone?: "light" | "dark"
  className?: string
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) => (
  <Reveal
    className={cn(
      "flex flex-col gap-4",
      align === "center" ? "mx-auto max-w-[760px] items-center text-center" : "items-start text-left",
      className
    )}
  >
    <Badge variant={tone === "dark" ? "on-dark" : "soft"}>{eyebrow}</Badge>
    <h2
      className={cn(
        "text-display-lg font-bold",
        tone === "dark" ? "text-brand-foreground" : "text-foreground"
      )}
    >
      {title}
    </h2>
    {description ? (
      <p
        className={cn(
          "text-body-lg",
          align === "center" && "max-w-[620px]",
          tone === "dark" ? "text-brand-muted" : "text-muted-foreground"
        )}
      >
        {description}
      </p>
    ) : null}
  </Reveal>
)

export { SectionHeading }
