import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "btn-red-gradient text-white shadow-[0px_4px_6px_-1px_#0000001a,0px_2px_4px_-1px_#0000001a] hover:shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus:text-white",
        destructive:
          "btn-red-gradient text-white shadow-[0px_4px_6px_-1px_#0000001a,0px_2px_4px_-1px_#0000001a] hover:shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus:text-white",
        outline:
          "border-2 border-gray-300 bg-white text-gray-900 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900 focus:text-gray-900 shadow-sm hover:shadow-md transition-all duration-300",
        secondary:
          "bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200 hover:text-gray-900 focus:text-gray-900 transition-all duration-300",
        ghost: "text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:text-gray-900 transition-all duration-300",
        link: "text-red-600 underline-offset-4 hover:underline hover:text-red-700 focus:text-red-700 transition-all duration-300",
        blue: "btn-blue-gradient text-white shadow-[0px_4px_6px_-1px_#0000001a,0px_2px_4px_-1px_#0000001a] hover:shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus:text-white",
        green: "btn-green-gradient text-white shadow-[0px_4px_6px_-1px_#0000001a,0px_2px_4px_-1px_#0000001a] hover:shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus:text-white",
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
