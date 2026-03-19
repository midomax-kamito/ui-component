import React from "react";
import { domAnimation, LazyMotion, motion } from "framer-motion";
import { useAccordion } from "./accordion-context";
import { cn } from "../../../lib";

export interface AccordionBodyProps extends React.ComponentProps<"div"> {
    className?: string;
    children: React.ReactNode;
    asChild?: boolean;
    [key: string]: any;
}

export const AccordionBody: React.FC<AccordionBodyProps> = React.forwardRef<HTMLDivElement, AccordionBodyProps>(
    ({ className, children, asChild }, ref) => {
        const { open, animation } = useAccordion();

        const heightAnimation = {
            unmount: {
                height: "0px",
                transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
            },
            mount: {
                height: "auto",
                transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
            },
        };

        const mainAnimation = {
            unmount: {
                transition: { duration: 0.3, ease: "linear" },
            },
            mount: {
                transition: { duration: 0.3, ease: "linear" },
            },
        };

        const appliedAnimation = {
            unmount: {
                ...heightAnimation.unmount,
                ...animation.unmount,
            },
            mount: {
                ...heightAnimation.mount,
                ...animation.mount,
            },
        };

        return (
            <LazyMotion features={domAnimation}>
                <motion.div
                    ref={ref}
                    className={cn("overflow-hidden")}
                    initial="unmount"
                    exit="unmount"
                    animate={open ? "mount" : "unmount"}
                    variants={appliedAnimation}
                >
                    <motion.div
                        className={cn(
                            "m-2 mt-0 overflow-hidden",
                            "w-[calc(100%_-_16px)] text-gray-800 antialiased text-base leading-6 font-medium",
                            "flex flex-col gap-5",
                            {
                                "gap-0 border border-gray-200 rounded-xl [&>div:not(:last-child)]:border-b [&>div:not(:last-child)]:border-solid [&>div:not(:last-child)]:border-gray-200":
                                    asChild,
                            },
                            className
                        )}
                        initial="unmount"
                        exit="unmount"
                        animate={open ? "mount" : "unmount"}
                        variants={mainAnimation}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            </LazyMotion>
        );
    }
);

AccordionBody.displayName = "AccordionBody";

export default AccordionBody;
