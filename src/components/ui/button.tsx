import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // Sem `whitespace-nowrap`: um rótulo longo numa tela estreita precisa poder
  // quebrar em duas linhas em vez de empurrar a largura da página.
  "inline-flex items-center justify-center gap-2 rounded-full text-center font-sans font-semibold leading-snug transition-[color,background-color,border-color,box-shadow,transform] duration-150 ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:-translate-y-[2px] hover:bg-navy-800 hover:shadow-glow-navy active:translate-y-0 active:scale-[0.98]",
        whatsapp:
          "bg-whatsapp text-whatsapp-foreground shadow-glow-whatsapp hover:-translate-y-[2px] hover:bg-whatsapp-hover hover:shadow-glow-whatsapp-strong active:translate-y-0 active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-border bg-background text-foreground hover:border-navy-300 hover:bg-navy-50 active:scale-[0.98]",
        outlineOnDark:
          "border border-white/25 bg-white/5 text-brand-foreground backdrop-blur-sm hover:border-white/45 hover:bg-white/15 active:scale-[0.98]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-navy-100",
        ghost: "text-foreground hover:bg-navy-100",
        ghostOnDark: "text-brand-foreground hover:bg-white/10",
        link: "min-h-0 rounded-sm px-0 text-whatsapp-soft-foreground underline-offset-4 hover:underline",
      },
      size: {
        sm: "min-h-10 px-4 py-2 text-[0.9375rem]",
        default: "min-h-12 px-6 py-2.5 text-base",
        lg: "min-h-14 px-6 py-3 text-[1.0625rem] sm:px-7",
        icon: "h-12 w-12 shrink-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants }
