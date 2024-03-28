import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const customButton = {
  customBase: "relative w-max block text-[#fcfcfc] rounded-lg backdrop-blur",
  // pseudoElements:
  //   "before:absolute after:absolute before:h-full after:h-full before:w-full after:w-full left-0 top-0 -z-10 content-none block transition-opacity duration-200 ease-out",
  before:
    "bg-gradient-to-b from-transparent via-[rgba(60, 8, 126, 0.32)] to-[rgba(60, 8, 126, 0.32)] bg-opacity-30 shadow-inner shadow-[#bf97ff3d] inset-0 blur-md opacity-100",
  after:
    "bg-gradient-to-b from-transparent via-[rgba(60, 8, 126, 0.42)] to-[rgba(60, 8, 126, 0.42)] bg-opacity-30 shadow-inner shadow-[#bf97ff70] inset-0 blur-md opacity-100",
  hoverBefore: "opacity-0",
  hoverAfter: "opacity-1",
};

const defaultBase =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300";

const buttonVariants = cva("", {
  variants: {
    variant: {
      default: `${defaultBase} bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90`,
      destructive: `${defaultBase} bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90`,
      outline: `${defaultBase} border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50`,
      secondary: `${defaultBase} bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80`,
      ghost: `${defaultBase} hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50`,
      link: `${defaultBase} text-slate-900 underline-offset-4 hover:underline dark:text-slate-50`,
      custom: `${customButton.customBase}`,
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
      custom: "py-2 px-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    console.log(props);
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {props.children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
