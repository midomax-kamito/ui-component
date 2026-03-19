import type { InputNumberProps as RcInputNumberProps, ValueType } from 'rc-input-number';
import React from 'react';
type SizeType = 'small' | 'middle' | 'large';
type InputStatus = '' | 'warning' | 'error';
type Variant = 'outlined' | 'borderless' | 'filled';
export interface InputNumberProps<T extends ValueType = ValueType> extends Omit<RcInputNumberProps<T>, 'prefix' | 'size' | 'controls'> {
    prefixCls?: string;
    rootClassName?: string;
    addonBefore?: React.ReactNode;
    addonAfter?: React.ReactNode;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    size?: SizeType;
    disabled?: boolean;
    status?: InputStatus;
    controls?: boolean | {
        upIcon?: React.ReactNode;
        downIcon?: React.ReactNode;
    };
    /**
     * @since 5.13.0
     * @default "outlined"
     */
    variant?: Variant;
    isError?: boolean;
    classNameWrapper?: string;
    readOnly?: boolean;
}
declare const NumberInput: React.ForwardRefExoticComponent<InputNumberProps<ValueType> & React.RefAttributes<HTMLInputElement>>;
export { NumberInput };
