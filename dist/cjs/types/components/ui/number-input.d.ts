import * as React from "react";
import { VariantProps } from "class-variance-authority";
declare const inputNumberVariants: (props?: ({
    variant?: "default" | "success" | "error" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface InputNumberProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof inputNumberVariants> {
    icon?: React.ReactNode;
    placeholder?: string;
    decimal?: number;
    onSubmitValue?: (value: string) => void;
    isShow?: boolean;
}
declare const InputNumber: React.ForwardRefExoticComponent<InputNumberProps & React.RefAttributes<HTMLInputElement>>;
export { InputNumber, inputNumberVariants, type InputNumberProps };
