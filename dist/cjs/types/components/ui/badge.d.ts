import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const badgeVariants: (props?: ({
    variant?: "default" | "success" | "error" | "outline" | "secondary" | "warning" | null | undefined;
    radius?: "sm" | "md" | "lg" | "none" | "xl" | "full" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
    /**
     * The badge text color
     */
    color?: string;
    /**
     * The badge background color
     */
    bgColor?: string;
}
/**
 *
 * Displays a badge or a component that looks like a badge.
 */
declare function Badge({ className, variant, radius, color, bgColor, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export { Badge, badgeVariants, type BadgeProps };
