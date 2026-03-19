import { VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";
import { buttonVariants } from ".";
export type ButtonVariants = VariantProps<typeof buttonVariants>;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants, PropsWithChildren {
}
