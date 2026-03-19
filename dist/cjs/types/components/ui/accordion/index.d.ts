import React from "react";
import { useAccordion } from "./accordion-context";
import { AccordionHeader, AccordionHeaderProps } from "./accordion-header";
import { AccordionBody, AccordionBodyProps } from "./accordion-body";
import { VariantProps } from "class-variance-authority";
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
declare const accordionVariants: (props?: ({
    variant?: "default" | "success" | "error" | null | undefined;
    open?: boolean | null | undefined;
    asChild?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const Accordion: React.FC<VariantProps<typeof accordionVariants> & AccordionProps & {
    asChild?: boolean;
}> & {
    Header: React.FC<AccordionHeaderProps>;
    Body: React.FC<AccordionBodyProps>;
};
export type { AccordionHeaderProps, AccordionBodyProps };
export { Accordion, AccordionHeader, AccordionBody, useAccordion };
