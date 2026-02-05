import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_15px_rgba(123,51,126,0.3)] hover:shadow-[0_0_25px_rgba(123,51,126,0.6)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
        outline: "border border-input bg-background/50 hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 backdrop-blur-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
        ghost: "hover:bg-accent/50 hover:text-accent-foreground hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(123,51,126,0.5)] hover:shadow-[0_0_35px_rgba(123,51,126,0.7)] hover:-translate-y-1 transition-all duration-300 font-semibold tracking-wide",
        heroOutline: "border-2 border-white/20 text-white bg-white/5 hover:bg-white/10 backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300 font-semibold tracking-wide",
        glass: "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.02] transition-all duration-300",
        glow: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(123,51,126,0.5)] hover:shadow-[0_0_40px_rgba(123,51,126,0.8)] hover:scale-[1.05] transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
