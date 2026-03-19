import * as React from "react";
import clsx from "clsx";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "@phosphor-icons/react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib";

const checkboxVariants = cva(
    clsx(
        "group shrink-0 rounded border border-gray-200 bg-gray-50 hover:border-primary-200 text-white",
        "data-[state=indeterminate]:!bg-primary-500 data-[state=indeterminate]:text-white",
        "data-[state=checked]:!bg-primary-500 data-[state=checked]:text-white",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "transition-all duration-300 ease-in-out"
    ),
    {
        variants: {
            size: {
                sm: "w-4 h-4",
                md: "w-5 h-5",
                lg: "w-6 h-6",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);

const checkboxIndicatorVariants = cva(clsx("flex items-center justify-center text-current"), {
    variants: {
        size: {
            sm: "text-sm",
            md: "text-base",
            lg: "text-xl",
        },
    },
    defaultVariants: {
        size: "md",
    },
});

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
        VariantProps<typeof checkboxVariants> &
        VariantProps<typeof checkboxIndicatorVariants>
>(({ className, size, ...props }, ref) => (
    <CheckboxPrimitive.Root ref={ref} className={cn(checkboxVariants({ size }), className)} {...props}>
        <CheckboxPrimitive.Indicator className={cn(checkboxIndicatorVariants({ size }))}>
            <Minus className="group-data-[state=checked]:hidden" />
            <Check className="group-data-[state=indeterminate]:hidden" />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
