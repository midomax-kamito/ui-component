import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib";

const badgeVariants = cva(
    "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default: "border-transparent bg-primary-100 text-primary-700 shadow hover:bg-primary-100/80",
                secondary: "border-transparent bg-gray-100 text-gray-700 hover:bg-gray-100/80",
                error: "border-transparent bg-red-100 text-red-700 shadow hover:bg-red-100/80",
                warning: "border-transparent bg-yellow-100 text-yellow-700 shadow hover:bg-yellow-100/80",
                success: "border-transparent bg-green-100 text-green-700 shadow hover:bg-green-100/80",
                outline: "text-primary-700 border-primary-100",
            },
            radius: {
                none: "rounded-none",
                sm: "rounded",
                md: "rounded-md",
                lg: "rounded-lg",
                xl: "rounded-xl",
                full: "rounded-full",
            },
        },
        defaultVariants: {
            variant: "default",
            radius: "md",
        },
    }
);

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
function Badge({ className, variant = "default", radius = "md", color, bgColor, ...props }: BadgeProps) {
    const style = {
        backgroundColor: bgColor,
        color: color,
    };

    return <div className={cn(badgeVariants({ variant, radius }), className)} style={style} {...props} />;
}

export { Badge, badgeVariants, type BadgeProps };
