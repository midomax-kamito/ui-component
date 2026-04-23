import { Dayjs } from 'dayjs';
import 'rc-picker/assets/index.css';
import { Locale } from 'rc-picker/lib/interface';
import React from 'react';
import { RangePickerProps } from 'rc-picker';
import { VariantProps } from 'class-variance-authority';
import './styles.css';
declare const iDateRangePickerVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    variant?: "default" | "success" | "error" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
type RangeValue = [Dayjs | null, Dayjs | null] | null;
type IDateRangePickerProp = VariantProps<typeof iDateRangePickerVariants> & Omit<RangePickerProps<Dayjs>, 'locale' | 'generateConfig' | 'value'> & {
    dropdownClassName?: string;
    readOnly?: boolean;
    localeConfig?: Partial<Locale>;
    value?: RangeValue;
    suffixIcon?: boolean;
};
declare const IDateRangePicker: React.ForwardRefExoticComponent<VariantProps<(props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    variant?: "default" | "success" | "error" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & Omit<RangePickerProps<Dayjs>, "value" | "locale" | "generateConfig"> & {
    dropdownClassName?: string | undefined;
    readOnly?: boolean | undefined;
    localeConfig?: Partial<Locale> | undefined;
    value?: RangeValue | undefined;
    suffixIcon?: boolean | undefined;
} & React.RefAttributes<unknown>>;
export { IDateRangePicker, type IDateRangePickerProp };
