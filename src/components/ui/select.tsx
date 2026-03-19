import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { ArrowDown, ArrowUp, CaretUpDown } from "@phosphor-icons/react";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { cn } from "../../lib";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;
const selectTriggerVariants = cva(
    clsx(
        "group font-normal bg-white border text-sm leading-[21px] text-gray-500",
        "data-[state=open]:text-gray-800 data-[state=open]:border-primary-200",
        "px-4 outline-none flex w-full items-center justify-between rounded-lg hover:z-[2]",
        "disabled:cursor-not-allowed disabled:ring-0 [&>span]:line-clamp-1 transition-all duration-300 ease-in"
    ),
    {
        variants: {
            variant: {
                default: clsx("border-gray-200 bg-white hover:ring-2 hover:ring-primary-300 active:ring-primary-200 "),
                success: clsx("border-green-500"),
                error: clsx("border-red-500 hover:ring-0 active:ring-0 data-[state=open]:border-red-500"),
            },
            size: {
                sm: clsx("h-10 "),
                md: clsx("h-11"),
                lg: clsx("h-12"),
            },
        },
        defaultVariants: {
            size: "sm",
            variant: "default",
        },
    }
);
const SelectTrigger = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> &
        VariantProps<typeof selectTriggerVariants> & {
            prefixes?: React.ReactNode;
            suffixes?: React.ReactNode;
            allowClear?: boolean;
        }
>(({ className, children, variant, size, prefixes, suffixes, allowClear, ...props }, ref) => (
    <SelectPrimitive.Trigger
        ref={ref}
        className={cn(
            selectTriggerVariants({ variant, size }),
            { "bg-gray-50 hover:bg-gray-50 hover:ring-0 active:ring-0": props.disabled },
            className
        )}
        {...props}
    >
        {/* <SelectPrimitive.Icon asChild> */}
        {prefixes ? (
            <div className="flex gap-2 [&>span]:line-clamp-1 ">
                <div className="text-gray-400 group-active:text-gray-700 group-disabled:text-gray-400">{prefixes}</div>
                {children}
            </div>
        ) : (
            <>{children}</>
        )}
        {/* </SelectPrimitive.Icon> */}

        <SelectPrimitive.Icon asChild>
            {/* {allowClear && (
                <XCircle
                    size={20}
                    className={cn(
                        "flex-shrink-0 text-gray-400 hover:text-gray-700 opacity-0",
                        allowClear && currentValue && "opacity-100 cursor-pointer"
                    )}
                    onClick={onClear}
                />
            )} */}
            {suffixes ? (
                <div className="text-gray-700 group-active:text-gray-700 group-disabled:text-gray-400">{suffixes}</div>
            ) : (
                <CaretUpDown
                    className="text-gray-700 group-active:text-gray-700 group-disabled:text-gray-400"
                    size={18}
                />
            )}
            {/* <ArrowDown className="h-4 w-4 opacity-50" /> */}
        </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
    <SelectPrimitive.ScrollUpButton
        ref={ref}
        className={cn("flex cursor-default items-center justify-center py-1", className)}
        {...props}
    >
        <ArrowUp className="h-4 w-4" />
    </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
    <SelectPrimitive.ScrollDownButton
        ref={ref}
        className={cn("flex cursor-default items-center justify-center py-1", className)}
        {...props}
    >
        <ArrowDown className="h-4 w-4" />
    </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
    <SelectPrimitive.Portal>
        <SelectPrimitive.Content
            ref={ref}
            className={cn(
                "relative z-50 bg-white max-h-96 min-w-[8rem] overflow-hidden rounded-xl border border-gray-100 p-0 shadow-c5 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                position === "popper" &&
                    "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
                className
            )}
            position={position}
            {...props}
        >
            <SelectScrollUpButton />
            <SelectPrimitive.Viewport
                className={cn(
                    "p-4",
                    position === "popper" &&
                        "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                )}
            >
                {children}
            </SelectPrimitive.Viewport>
            <SelectScrollDownButton />
        </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
    <SelectPrimitive.Label ref={ref} className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)} {...props} />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
        suffixItemLeft?: React.ReactNode;
        suffixItemRight?: React.ReactNode;
    }
>(({ className, children, suffixItemRight, suffixItemLeft, ...props }, ref) => {
    return (
        <SelectPrimitive.Item
            ref={ref}
            className={cn(
                "relative aria-selected:bg-primary-500 flex gap-3 items-center rounded-lg p-3 text-sm w-full cursor-default select-none outline-none aria-selected:text-white",
                "hover:bg-gray-100 focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:bg-white data-[disabled]:opacity-50",
                className
            )}
            {...props}
        >
            {suffixItemLeft && <span className="text-left">{suffixItemLeft}</span>}
            <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
    );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <SelectPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
    SelectScrollUpButton,
    SelectScrollDownButton,
};
