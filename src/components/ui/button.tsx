import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[14px] text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-amber-500 text-background shadow-glow hover:bg-amber-400 hover:-translate-y-px",
        secondary: "border border-border bg-secondary text-secondary-foreground hover:bg-card",
        outline: "border border-border bg-transparent text-foreground hover:border-amber-500 hover:text-foreground",
        ghost: "bg-transparent text-foreground hover:bg-card",
        destructive: "bg-destructive text-destructive-foreground hover:brightness-110",
        subtle: "bg-card text-foreground hover:bg-secondary",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 rounded-[12px] px-4 text-xs",
        lg: "h-12 rounded-[16px] px-6 text-base",
        icon: "h-11 w-11",
        "icon-sm": "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
