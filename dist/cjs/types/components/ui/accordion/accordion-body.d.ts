import React from "react";
export interface AccordionBodyProps extends React.ComponentProps<"div"> {
    className?: string;
    children: React.ReactNode;
    asChild?: boolean;
    [key: string]: any;
}
export declare const AccordionBody: React.FC<AccordionBodyProps>;
export default AccordionBody;
