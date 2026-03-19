import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { VariantProps } from "class-variance-authority";
declare const Checkbox: React.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & VariantProps<(props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLButtonElement>>;
export { Checkbox };
