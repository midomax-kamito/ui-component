import { cva } from "class-variance-authority";
import clsx from "clsx";

export const buttonVariants = cva(
  clsx(
    "inline-flex justify-center gap-2 items-center whitespace-nowrap",
    "font-medium transition-colors disabled:cursor-not-allowed",
    "active:ring-0 disabled:bg-opacity-50 disabled:text-opacity-50",
    "outline-none"
  ),
  {
    variants: {
      variant: {
        primary: clsx(
          "bg-primary-500 text-white",
          "hover:bg-primary-600",
          "active:bg-primary-700"
        ),
        secondary: clsx(
          "bg-secondary",
          "hover:bg-gray-200",
          "focus-visible:bg-gray-100 focus-visible:ring-gray-200",
          "active:bg-gray-300"
        ),
        neutral: clsx("bg-white text-primary-500"),
        success: clsx(
          "bg-green-500 text-white",
          "hover:bg-green-600",
          "focus-visible:bg-green-500 focus-visible:ring-green-200",
          "active:bg-green-700"
        ),
        warning: clsx(
          "bg-yellow-500 text-white",
          "hover:bg-yellow-600",
          "focus-visible:bg-yellow-500 focus-visible:ring-yellow-200",
          "active:bg-yellow-700"
        ),
        danger: clsx(
          "bg-red-500 text-white",
          "hover:bg-red-600",
          "focus-visible:bg-red-500 focus-visible:ring-red-200",
          "active:bg-red-700"
        ),
        gray: clsx(
          "bg-gray-100 text-gray-700",
          "hover:bg-gray-200",
          "focus-visible:bg-gray-100 focus-visible:ring-gray-200",
          "active:bg-gray-300"
        ),
      },
      size: {
        sm: "text-sm leading-[21px] h-10 px-4 py-2.5",
        md: "text-sm leading-[21px] h-11 px-4 py-3",
        lg: "text-base leading-6 h-12 px-4 py-3.5",
      },
      shape: {
        rounded: "rounded-lg",
        circle: "rounded-full",
      },
      icon: {
        true: "",
        false: "",
      },
      outline: {
        true: clsx(
          "bg-white ring-1 active:ring-1",
          "focus:bg-white focus:ring-2"
        ),
        false: "",
      },
    },
    compoundVariants: [
      { icon: true, size: "sm", class: "w-10 min-w-10 px-2.5" },
      { icon: true, size: "md", class: "w-11 min-w-11 px-3" },
      { icon: true, size: "lg", class: "w-12 min-w-12 px-3.5" },
      {
        outline: true,
        variant: "primary",
        class: clsx(
          "text-primary-700 ring-primary-700",
          "hover:bg-primary-50",
          "focus-visible:ring-primary-700",
          "active:bg-primary-100 active:ring-primary-700"
        ),
      },
      {
        outline: true,
        variant: "secondary",
        class: clsx(
          "text-primary-500 ring-gray-300",
          "hover:bg-gray-50 hover:ring-gray-300",
          "focus-visible:ring-gray-400",
          "active:bg-gray-100 active:ring-gray-300"
        ),
      },
      {
        outline: true,
        variant: "neutral",
        class: clsx(
          "text-primary-500 ring-gray-200",
          "hover:bg-gray-50 hover:ring-gray-200",
          "focus-visible:ring-gray-200",
          "active:bg-gray-100 active:ring-gray-200"
        ),
      },
      {
        outline: true,
        variant: "success",
        class: clsx(
          "text-green-700 ring-green-700",
          "hover:bg-green-50 hover:ring-green-700",
          "focus-visible:ring-green-700",
          "active:bg-green-100 active:ring-green-700"
        ),
      },
      {
        outline: true,
        variant: "warning",
        class: clsx(
          "text-yellow-700 ring-yellow-700",
          "hover:bg-yellow-50 hover:ring-yellow-700",
          "focus-visible:ring-yellow-700",
          "active:bg-yellow-100 active:ring-yellow-700"
        ),
      },
      {
        outline: true,
        variant: "danger",
        class: clsx(
          "text-red-700 ring-red-700",
          "hover:bg-red-50 hover:ring-red-700",
          "focus-visible:ring-red-700",
          "active:bg-red-100 active:ring-red-700"
        ),
      },
      {
        outline: true,
        variant: "gray",
        class: clsx(
          "text-gray-700 ring-gray-400",
          "hover:bg-gray-50 hover:ring-gray-400",
          "focus-visible:ring-gray-400",
          "active:bg-gray-100 active:ring-gray-400"
        ),
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      shape: "rounded",
      icon: false,
      outline: false,
    },
  }
);
