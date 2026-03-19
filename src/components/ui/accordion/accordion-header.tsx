import React from "react";

import { useAccordion } from "./accordion-context";

import { cn } from "../../../lib";
import { CaretDown } from "@phosphor-icons/react";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

export interface AccordionHeaderProps extends React.ComponentProps<"div"> {
    className?: string;
    asChild?: boolean;
    children: React.ReactNode;
}

const accordionHeaderVariants = cva(
    clsx(
        "flex justify-between p-3 gap-3 items-center w-full antialiased",
        "border-none rounded-xl",
        "text-base leading-6 text-gray-800 text-left font-semibold select-none"
    ),
    {
        variants: {
            variant: {
                default: clsx("border-gray-200"),
                success: clsx("border-green-500"),
                error: clsx("border-red-500 hover:ring-0 active:ring-0"),
            },
            size: {
                sm: clsx("h-10 min-h-10"),
                md: clsx("h-11 min-h-11"),
                lg: clsx("h-12 min-h-12"),
            },
            asChild: {
                true: clsx("border-0 hover:bg-gray-50 hover:rounded-none"),
                false: clsx("border"),
            },
        },
        defaultVariants: {
            size: "md",
            variant: "default",
            asChild: false,
        },
    }
);

export const AccordionHeader: React.FC<AccordionHeaderProps> = React.forwardRef<
    HTMLDivElement,
    VariantProps<typeof accordionHeaderVariants> & AccordionHeaderProps
>(({ className, children, variant, size, asChild, ...rest }, ref) => {
    const { open, icon, disabled } = useAccordion();

    let iConPops: {
        isShow: boolean;
        icon: React.ReactNode;
    };
    if (typeof icon === "boolean") {
        iConPops = {
            isShow: icon,
            icon: (
                <CaretDown
                    size={24}
                    color="#3F3F46"
                    className={cn("transi-rotate duration-300 cursor-pointer", { "rotate-180": open })}
                />
            ),
        };
    } else {
        iConPops = {
            isShow: true,
            icon: icon,
        };
    }

    return (
        <div
            {...rest}
            ref={ref}
            className={cn(
                accordionHeaderVariants({ variant, size, asChild }),
                { "cursor-not-allowed": disabled },
                className
            )}
        >
            {children}
            {iConPops.isShow && iConPops.icon && <span>{iConPops.icon}</span>}
        </div>
    );
});

AccordionHeader.displayName = "AccordionHeader";

export default AccordionHeader;
