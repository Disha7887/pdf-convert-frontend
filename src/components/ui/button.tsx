import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "btn-red-gradient text-white shadow-[0px_4px_6px_-1px_#0000001a,0px_2px_4px_-1px_#0000001a] hover:shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        destructive:
          "btn-red-gradient text-white shadow-[0px_4px_6px_-1px_#0000001a,0px_2px_4px_-1px_#0000001a] hover:shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        outline:
          "bg-[#ffffff1a] text-white rounded-lg border-2 border-solid border-[#ffffff33] backdrop-blur-[2px] hover:bg-[#ffffff2a] hover:border-[#ffffff44] transition-all duration-200",
        secondary:
          "bg-[#ffffff1a] text-white border border-[#4a5462] hover:bg-[#4a5462] transition-all duration-200",
        ghost: "text-white hover:bg-[#ffffff1a] hover:text-white transition-all duration-200",
        link: "text-red-300 underline-offset-4 hover:underline transition-all duration-200",
        blue: "btn-blue-gradient text-white shadow-[0px_4px_6px_-1px_#0000001a,0px_2px_4px_-1px_#0000001a] hover:shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        green: "btn-green-gradient text-white shadow-[0px_4px_6px_-1px_#0000001a,0px_2px_4px_-1px_#0000001a] hover:shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 rounded-md px-4 text-xs",
        lg: "h-12 rounded-lg px-8 text-base font-semibold",
        icon: "h-10 w-10",
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
