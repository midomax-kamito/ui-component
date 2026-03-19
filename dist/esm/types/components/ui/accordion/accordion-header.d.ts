import React from "react";
export interface AccordionHeaderProps extends React.ComponentProps<"div"> {
    className?: string;
    asChild?: boolean;
    children: React.ReactNode;
}
export declare const AccordionHeader: React.FC<AccordionHeaderProps>;
export default AccordionHeader;
