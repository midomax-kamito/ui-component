import { cva } from "class-variance-authority";

export const tooltipVariants = cva("text-sm", {
  variants: {
    variant: {
      primary: "text-primary-500",
      success: "text-green-500",
      danger: "text-red-500",
      gray: "text-gray-400",
    },
    size: {
      sm: "text-sm leading-[21px]",
      md: "text-sm leading-[21px]",
      lg: "text-base leading-6",
    },
    iconVariant: {
      primary: "bg-primary-500",
      success: "bg-green-500",
      danger: "bg-red-500",
      gray: "bg-gray-400",
    },
  },
  defaultVariants: {
    variant: "primary",
    iconVariant: "primary",
    size: "md",
  },
});
