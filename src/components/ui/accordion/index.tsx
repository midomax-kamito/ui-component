import React from "react";
import { AccordionContextProvider, AccordionContextType, useAccordion } from "./accordion-context";
import { AccordionHeader, AccordionHeaderProps } from "./accordion-header";
import { AccordionBody, AccordionBodyProps } from "./accordion-body";
import { cn } from "../../../lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

export interface AccordionProps extends React.ComponentProps<"div"> {
    open: boolean;
    icon?: boolean | React.ReactNode;
    disabled?: boolean;
    className?: string;
    animation?: animation;
    children: React.ReactNode;
}

export type animation = {
    initial?: object;
    mount?: object;
    unmount?: object;
};

const accordionVariants = cva(
    clsx(
        "block relative w-full bg-white",
        "rounded-xl border",
        "text-base text-gray-800 leading-6 text-left font-semibold select-none"
    ),
    {
        variants: {
            variant: {
                default: clsx("border-gray-200"),
                success: clsx("border-green-500"),
                error: clsx("border-red-500 hover:ring-0 active:ring-0"),
            },
            open: {
                true: clsx("border-primary-500 hover:bg-white"),
                false: clsx("border-gray-200"),
            },
            asChild: {
                true: clsx("border-none border-0 rounded-none"),
                false: clsx("border hover:bg-gray-50"),
            },
        },
        compoundVariants: [
            {
                open: true,
                asChild: false,
                className: clsx("border-primary-500 hover:bg-white"),
            }
        ],
        defaultVariants: {
            variant: "default",
            open: false,
            asChild: false,
        },
    }
);

const Accordion: React.FC<
    VariantProps<typeof accordionVariants> &
        AccordionProps & {
            asChild?: boolean;
        }
> & {
    Header: React.FC<AccordionHeaderProps>;
    Body: React.FC<AccordionBodyProps>;
} = ({
    open,
    icon,
    className,
    disabled,
    variant,
    asChild,
    animation = {
        unmount: {},
        mount: {},
    },
    children,
    ...rest
}) => {
    const contextValue = React.useMemo(() => ({ open, icon, animation, disabled }), [open, icon, animation, disabled]);

    return (
        <AccordionContextProvider value={contextValue as AccordionContextType}>
            <div
                {...rest}
                className={cn(
                    accordionVariants({ variant, open, asChild }),
                    { "cursor-not-allowed opacity-50": disabled },
                    className
                )}
            >
                {children}
            </div>
        </AccordionContextProvider>
    );
};

Accordion.displayName = "Accordion";

Accordion.Body = AccordionBody;
Accordion.Header = AccordionHeader;

export type { AccordionHeaderProps, AccordionBodyProps };

export { Accordion, AccordionHeader, AccordionBody, useAccordion };
