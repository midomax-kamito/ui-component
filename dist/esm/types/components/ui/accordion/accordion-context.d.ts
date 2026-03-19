import React from "react";
import { animation } from ".";
export interface AccordionContextType {
    open: boolean;
    icon: React.ReactNode;
    animation: animation;
    disabled: boolean;
}
export declare const AccordionContext: React.Context<AccordionContextType | null>;
export declare function useAccordion(): AccordionContextType;
export interface AccordionContextProviderProps {
    value: AccordionContextType;
    children: React.ReactNode;
}
export declare const AccordionContextProvider: {
    ({ value, children }: AccordionContextProviderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
