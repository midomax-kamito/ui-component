import React from "react";
import { animation } from ".";

export interface AccordionContextType {
    open: boolean;
    icon: React.ReactNode;
    animation: animation;
    disabled: boolean;
}

export const AccordionContext = React.createContext<AccordionContextType | null>(null);
AccordionContext.displayName = "AccordionContext";

export function useAccordion() {
    const context = React.useContext(AccordionContext);

    if (!context) {
        throw new Error(
            "useAccordion() must be used within an Accordion. It happens when you use AccordionHeader or AccordionBody components outside the Accordion component."
        );
    }

    return context;
}

export interface AccordionContextProviderProps {
    value: AccordionContextType;
    children: React.ReactNode;
}

export const AccordionContextProvider = ({ value, children }: AccordionContextProviderProps) => {
    return <AccordionContext.Provider value={value}>{children}</AccordionContext.Provider>;
};

AccordionContextProvider.displayName = "AccordionContextProvider";
