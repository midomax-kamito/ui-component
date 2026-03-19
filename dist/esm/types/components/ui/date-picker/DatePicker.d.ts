import { Dayjs } from 'dayjs';
import 'rc-picker/assets/index.css';
import { Locale, PickerRef } from 'rc-picker/lib/interface';
import React from 'react';
import { PickerProps } from 'rc-picker';
import { VariantProps } from 'class-variance-authority';
import './styles.css';
declare const iDatePickerVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    variant?: "default" | "success" | "error" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
type PickerExtend = PickerProps<Dayjs> & React.RefAttributes<PickerRef>;
type IDatePickerProp = VariantProps<typeof iDatePickerVariants> & Omit<PickerExtend, 'locale' | 'generateConfig' | 'value'> & {
    dropdownClassName?: string;
    readOnly?: boolean;
    localeConfig?: Partial<Locale>;
    value?: Dayjs | string | undefined;
    suffixIcon?: boolean;
};
declare const IDatePicker: React.ForwardRefExoticComponent<Omit<IDatePickerProp, "ref"> & React.RefAttributes<unknown>>;
export { IDatePicker, type IDatePickerProp };
