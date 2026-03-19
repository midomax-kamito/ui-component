import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
type OptionItemSelectGroupType = {
    title: string;
    value: string;
    email?: string;
    avatar?: string;
    discription?: React.ReactNode | string;
    prefix?: React.ReactNode | string;
    suffix?: React.ReactNode | string;
    disabled?: boolean;
};
type SearchInputOption = {
    icon?: React.ReactNode;
    placeholderSearch?: string;
};
type DataEmptyType = {
    imageEmpty?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
};
declare const MultipleSelectGroup: React.ForwardRefExoticComponent<VariantProps<(props?: ({
    variant?: "default" | "success" | "error" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & {
    value?: string[] | undefined;
    onChange?: ((value?: string[] | string) => void) | undefined;
    options: OptionItemSelectGroupType[];
    placeholder?: string | undefined;
} & {
    prefixes?: React.ReactNode;
    suffixes?: React.ReactNode;
    disabled?: boolean | undefined;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    searchInputOption?: SearchInputOption | undefined;
    suffixItemLeft?: React.ReactNode;
    suffixItemRight?: React.ReactNode;
    customValue?: ((value: {
        id: string;
        email?: string;
        avatar?: string;
    }, options: OptionItemSelectGroupType[]) => React.ReactNode) | undefined;
    type?: string | undefined;
    container?: HTMLElement | undefined;
    sideOffset?: number | undefined;
    alignOffset?: number | undefined;
    align?: 'end' | 'center' | 'start' | undefined;
    isSearchable?: boolean | undefined;
    modalPopover?: boolean | undefined;
    textEmpty?: string | undefined;
    dataEmpty?: DataEmptyType | undefined;
    searchEmpty: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export { MultipleSelectGroup, type OptionItemSelectGroupType };
