import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
declare const inputVariants: (props?: ({
    variant?: "default" | "success" | "error" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>, VariantProps<typeof inputVariants> {
    suffix?: React.ReactNode;
    prefix?: React.ReactNode;
    placeholder?: string;
    onPressEnter?: () => void;
    onSubmitValue?: (value: string) => void;
    clearable?: boolean;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input, inputVariants, type InputProps };
