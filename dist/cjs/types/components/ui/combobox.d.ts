import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { OptionItemType } from './mutiple-select';
type SearchInputOption = {
    icon?: React.ReactNode;
    placeholder?: string;
};
declare const Combobox: React.ForwardRefExoticComponent<VariantProps<(props?: ({
    variant?: "default" | "success" | "error" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & {
    value?: string | undefined;
    onChange?: ((value: string) => void) | undefined;
    options: OptionItemType[];
} & {
    prefixes?: React.ReactNode;
    suffixes?: React.ReactNode;
    disabled?: boolean | undefined;
    placeholder?: string | undefined;
    triggerClassName?: string | undefined;
    contentClassName?: string | undefined;
    itemClassName?: string | undefined;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    searchInputOption?: SearchInputOption | undefined;
    suffixItemLeft?: React.ReactNode;
    suffixItemRight?: React.ReactNode;
    searchable?: boolean | undefined;
    customValue?: ((value: string, options: OptionItemType[]) => React.ReactNode) | undefined;
    allowClear?: boolean | undefined;
    sideOffset?: number | undefined;
    align?: 'end' | 'center' | 'start' | undefined;
    alignOffset?: number | undefined;
    contentScroll?: string | undefined;
    modalPopover?: boolean | undefined;
    customOption?: ((option: OptionItemType) => string | React.ReactNode) | undefined;
    emptyText?: string | React.ReactNode;
    textEmpty?: string | React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export { Combobox };
