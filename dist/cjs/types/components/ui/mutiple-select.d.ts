import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { BadgeProps } from './badge';
type OptionItemType = {
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
declare const MultipleSelect: React.ForwardRefExoticComponent<VariantProps<(props?: ({
    variant?: "default" | "success" | "error" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & {
    value?: string[] | undefined;
    onChange?: ((value?: string[] | string) => void) | undefined;
    options: OptionItemType[];
    maxTagCount?: number | undefined;
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
    type?: string | undefined;
    container?: HTMLElement | undefined;
    sideOffset?: number | undefined;
    alignOffset?: number | undefined;
    align?: 'end' | 'center' | 'start' | undefined;
    isSearchable?: boolean | undefined;
    modalPopover?: boolean | undefined;
    badgePropsItem?: BadgeProps | undefined;
    textEmpty?: string | React.ReactNode;
    customValue?: ((value: string[], options: OptionItemType[], handleRemove: (value: string) => void) => React.ReactNode) | undefined;
    contentClassName?: string | undefined;
    triggerClassName?: string | undefined;
    itemClassName?: string | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export { MultipleSelect, type OptionItemType };
