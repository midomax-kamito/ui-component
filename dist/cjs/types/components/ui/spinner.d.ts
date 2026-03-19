import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const spinnerVariants: (props?: ({
    variant?: "primary" | "secondary" | null | undefined;
    size?: "sm" | "md" | "lg" | "l" | "xs" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof spinnerVariants> {
}
declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<HTMLDivElement>>;
export { Spinner, spinnerVariants };
