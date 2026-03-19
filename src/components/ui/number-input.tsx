import * as React from "react";

import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { Minus, Plus } from "@phosphor-icons/react";
import { cn } from "../../lib";
import { Button } from "./button";

const inputNumberVariants = cva(
    clsx("group bg-white flex items-center gap-2.5 w-full pl-4 rounded-lg transition-all duration-300 ease-in overflow-hidden"),
    {
        variants: {
            variant: {
                default: clsx(
                    "default text-gray-800 border border-gray-200 bg-white hover:ring-2 hover:ring-primary-300 hover:bg-white",
                    "active:ring-2 active:ring-primary-300 active:bg-white"
                ),
                success: clsx("success border border-green-500 bg-white"),
                error: clsx("error border border-red-500 hover:ring-0 active:ring-0 data-[state=open]:border-red-500"),
            },
            size: {
                sm: clsx("h-10 text-sm leading-[21px]"),
                md: clsx("h-11 text-sm leading-[21px]"),
                lg: clsx("h-12 text-base leading-6"),
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
);

interface InputNumberProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
        // dung omit định dạng lại type input
        VariantProps<typeof inputNumberVariants> {
    icon?: React.ReactNode;
    placeholder?: string;
    decimal?: number;
    onSubmitValue?: (value: string) => void;
    isShow?: boolean;
}

const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
    (
        {
            className,
            type = "number",
            variant,
            size,
            min,
            max,
            icon,
            placeholder = "",
            decimal = 10,
            onSubmitValue,
            ...props
        },
        ref
    ) => {
        const inputRef = React.useRef<HTMLInputElement>(null);

        React.useImperativeHandle(ref, () => inputRef.current!, []);

        const minusInput = () => {

            if (inputRef.current) {
                let value = parseFloat(inputRef.current.value);
                if (!isNaN(value)) {
                    value -= 1;
                    if (typeof min === "number" && value < min) {
                        value = min;
                    }
                    inputRef.current.value = parseFloat(value.toFixed(decimal)).toString()?.trim();
                    if (onSubmitValue) {
                        onSubmitValue(parseFloat(value.toFixed(decimal)).toString()?.trim());
                    }
                }
            }
        };
        const plusInput = () => {
            if (inputRef.current) {
                let value = parseFloat(inputRef.current.value);
                if (!isNaN(value)) {
                    value += 1;
                    if (typeof max === "number" && value > max) {
                        value = max;
                    }
                    inputRef.current.value = parseFloat(value.toFixed(decimal)).toString().trim();
                    if (onSubmitValue) {
                        onSubmitValue(parseFloat(value.toFixed(decimal)).toString().trim());
                    }
                }
            }
        };
        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            let { value } = e.target;
            const numericValue = parseFloat(value);
            if (new RegExp(/^-?(\d{1,3}(,\d{3})*)(\.\d{1,3}(,\d{3})*)?$/).test(value)) {
                if (!isNaN(numericValue)) {
                    let formatedValue;
                    if (typeof min === "number" && numericValue < min) {
                        formatedValue = min;
                    }
                    if (typeof max === "number" && numericValue > max) {
                        formatedValue = max;
                    }
                    inputRef.current!.value = formatedValue ? formatedValue.toString()?.trim() : value?.trim();
                } else {
                    inputRef.current!.value = "";
                }
            } else {
                if (!isNaN(numericValue)) {
                    let formatedValue = numericValue;
                    if (typeof min === "number" && numericValue < min) {
                        formatedValue = min;
                    }
                    if (typeof max === "number" && numericValue > max) {
                        formatedValue = max;
                    }
                    inputRef.current!.value = formatedValue ? formatedValue.toString()?.trim() : value?.trim();
                } else {
                    inputRef.current!.value = "";
                }
            }

            if (onSubmitValue) {
                onSubmitValue(inputRef.current!.value?.trim() || "");
            }
        };

        return (
            <div
                className={cn(
                    inputNumberVariants({ variant, size }),
                    "",
                    {
                        "bg-gray-50 hover:bg-gray-50 hover:ring-0 active:ring-0 disabled:cursor-not-allowed":
                            props.disabled,
                    },
                    className
                )}
            >
                <input
                    type={type}
                    className={cn(
                        "w-full h-full inline-block bg-transparent outline-none peer",
                        "placeholder:text-gray-500",
                        "disabled:text-gray-400 disabled:placeholder:text-gray-400",
                        "text-gray-800 focus:text-gray-800 disabled:!ring-0 disabled:ring-transparent disabled:focus:ring-0 disabled:hover:!ring-0"
                    )}
                    placeholder={placeholder}
                    ref={inputRef}
                    disabled={props.disabled}
                    onChange={handleInputChange}
                    // onKeyDown={(event) => {
                    //     if ([37, 38, 39, 40].includes(event.keyCode)) {
                    //         event.preventDefault();
                    //     }
                    // }}
                    // onBlur={(event) => {
                    //     console.log("blur", event);
                    // }}
                    {...props}
                />
                {icon && (
                    <div
                        className={clsx(
                            "flex flex-none -order-1 text-gray-500 peer-hover:text-gray-500 peer-[:not(:placeholder-shown)]:text-gray-800",
                            { "!text-gray-400": props.disabled }
                        )}
                    >
                        {icon}
                    </div>
                )}

                <div className="flex justify-center text-center group" onClick={(e) => e.stopPropagation()}>
                    <Button
                        disabled={props.disabled}
                        onClick={minusInput}
                        className="ring-0 focus:ring-0 focus:bg-gray-100 disabled:!bg-gray-100 disabled:hover:bg-gray-100 disabled:active:bg-gray-100 rounded-none text-xl text-primary-500 border-l border-l-gray-200 disabled:text-gray-700"
                        size={size}
                        icon
                        variant="gray"
                        type="button"
                    >
                        <Minus />
                    </Button>
                    <Button
                        disabled={props.disabled}
                        onClick={plusInput}
                        className="ring-0 focus:ring-0 focus:bg-gray-100 disabled:!bg-gray-100 disabled:hover:bg-gray-100 disabled:active:bg-gray-100 rounded-none text-xl text-primary-500 border-l border-l-gray-200 disabled:text-gray-700"
                        size={size}
                        icon
                        variant="gray"
                        type="button"
                    >
                        <Plus />
                    </Button>
                </div>
            </div>
        );
    }
);
InputNumber.displayName = "InputNumber";

export { InputNumber, inputNumberVariants, type InputNumberProps };
