import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-label-caps transition-colors [&_svg]:size-3.5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border border-transparent bg-primary text-primary-foreground",
        secondary:
          "border border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border border-transparent bg-destructive text-destructive-foreground",
        outline: "border border-border text-foreground",
        soft: "border border-navy-200 bg-navy-50 text-brand-soft-foreground",
        whatsapp: "border border-green-200 bg-whatsapp-soft text-whatsapp-soft-foreground",
        "whatsapp-solid": "border border-transparent bg-whatsapp text-whatsapp-foreground",
        navy: "border border-transparent bg-brand text-brand-foreground",
        "on-dark": "border border-white/15 bg-white/10 text-brand-foreground backdrop-blur-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { Badge, badgeVariants }
