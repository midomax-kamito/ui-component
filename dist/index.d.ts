/// <reference types="react" />
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React$1 from 'react';
import React__default, { PropsWithChildren, FC } from 'react';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { DialogProps } from '@radix-ui/react-dialog';
import { Dayjs } from 'dayjs';
import { PickerRef, Locale } from 'rc-picker/lib/interface';
import { PickerProps, RangePickerProps } from 'rc-picker';
import { ValueType, InputNumberProps as InputNumberProps$2 } from 'rc-input-number';
import * as vaul from 'vaul';
import { Drawer as Drawer$1 } from 'vaul';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { FormProps, FormRef, FormProvider, Field, List, useForm, useWatch, FormInstance } from 'rc-field-form';
export { FormInstance, FormProps, FormProvider } from 'rc-field-form';
import { FieldProps } from 'rc-field-form/lib/Field';
export { FieldProps } from 'rc-field-form/lib/Field';
import { Meta } from 'rc-field-form/lib/interface';
export { Meta } from 'rc-field-form/lib/interface';
import * as _radix_ui_react_context from '@radix-ui/react-context';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { TableProps as TableProps$1 } from 'rc-table';
export { ColumnsType } from 'rc-table';
import { DefaultRecordType, Reference } from 'rc-table/lib/interface';
export { DefaultRecordType } from 'rc-table/lib/interface';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { Toaster as Toaster$1, ExternalToast } from 'sonner';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { ClassValue } from 'clsx';
export { ListProps } from 'rc-field-form/lib/List';

interface AccordionContextType {
    open: boolean;
    icon: React__default.ReactNode;
    animation: animation;
    disabled: boolean;
}
declare function useAccordion(): AccordionContextType;

interface AccordionHeaderProps extends React__default.ComponentProps<"div"> {
    className?: string;
    asChild?: boolean;
    children: React__default.ReactNode;
}
declare const AccordionHeader: React__default.FC<AccordionHeaderProps>;

interface AccordionBodyProps extends React__default.ComponentProps<"div"> {
    className?: string;
    children: React__default.ReactNode;
    asChild?: boolean;
    [key: string]: any;
}
declare const AccordionBody: React__default.FC<AccordionBodyProps>;

interface AccordionProps extends React__default.ComponentProps<"div"> {
    open: boolean;
    icon?: boolean | React__default.ReactNode;
    disabled?: boolean;
    className?: string;
    animation?: animation;
    children: React__default.ReactNode;
}
type animation = {
    initial?: object;
    mount?: object;
    unmount?: object;
};
declare const accordionVariants: (props?: ({
    variant?: "default" | "success" | "error" | null | undefined;
    open?: boolean | null | undefined;
    asChild?: boolean | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
declare const Accordion: React__default.FC<VariantProps<typeof accordionVariants> & AccordionProps & {
    asChild?: boolean;
}> & {
    Header: React__default.FC<AccordionHeaderProps>;
    Body: React__default.FC<AccordionBodyProps>;
};

type AlertProps = {
    title?: string;
    children?: React$1.ReactNode;
    icon?: JSX.Element;
    iconClose?: boolean;
    handleClose?: () => void;
    isVisible?: boolean;
    setIsVisible?: React$1.Dispatch<React$1.SetStateAction<boolean>>;
};
declare const Alert: React$1.ForwardRefExoticComponent<Omit<React$1.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "success" | "primary" | "warning" | "danger" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string>, "children" | "title" | "iconClose"> & AlertProps & React$1.RefAttributes<HTMLDivElement>>;

declare const AlertDialog: React$1.FC<AlertDialogPrimitive.AlertDialogProps>;
declare const AlertDialogTrigger: React$1.ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogPortal: React$1.FC<AlertDialogPrimitive.AlertDialogPortalProps>;
declare const AlertDialogOverlay: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertDialogContent: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertDialogHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogTitle: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const AlertDialogDescription: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const AlertDialogAction: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogActionProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogCancel: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogCancelProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare function AspectRatio({ ...props }: React.ComponentProps<typeof AspectRatioPrimitive.Root>): react_jsx_runtime.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "default" | "success" | "error" | "outline" | "secondary" | "warning" | null | undefined;
    radius?: "sm" | "md" | "lg" | "none" | "xl" | "full" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface BadgeProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
    /**
     * The badge text color
     */
    color?: string;
    /**
     * The badge background color
     */
    bgColor?: string;
}
/**
 *
 * Displays a badge or a component that looks like a badge.
 */
declare function Badge({ className, variant, radius, color, bgColor, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

type DataBreadCrumb = {
    title: string | React__default.ReactNode;
    path: string | null;
};
type BreadcrumbProps = {
    data: DataBreadCrumb[];
    className?: string;
    separator?: string | React__default.ReactNode;
    linkElement?: React__default.ElementType;
    onItemClick?: (path: string) => void;
};
type DynamicElementProps<T extends React__default.ElementType> = {
    as?: T;
    children?: React__default.ReactNode;
} & React__default.ComponentPropsWithoutRef<T>;
declare function DynamicElement<T extends React__default.ElementType = 'div'>({ as, children, ...props }: DynamicElementProps<T>): react_jsx_runtime.JSX.Element;
declare const BreadCrumb: React__default.ForwardRefExoticComponent<BreadcrumbProps & React__default.RefAttributes<HTMLDivElement>>;

declare const buttonVariants: (props?: ({
    variant?: "success" | "gray" | "primary" | "secondary" | "neutral" | "warning" | "danger" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    shape?: "circle" | "rounded" | null | undefined;
    icon?: boolean | null | undefined;
    outline?: boolean | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;

type ButtonVariants = VariantProps<typeof buttonVariants>;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants, PropsWithChildren {
}

/**
 * A button means an operation (or a series of operations). Clicking a button will trigger its corresponding business logic.
 */
declare const Button: React__default.ForwardRefExoticComponent<ButtonProps & React__default.RefAttributes<HTMLButtonElement>>;

declare const Card: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<HTMLDivElement> & React__default.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<HTMLDivElement> & React__default.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<HTMLHeadingElement> & React__default.RefAttributes<HTMLParagraphElement>>;
declare const CardDescription: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<HTMLParagraphElement> & React__default.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<HTMLDivElement> & React__default.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<HTMLDivElement> & React__default.RefAttributes<HTMLDivElement>>;

declare const Checkbox: React$1.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & VariantProps<(props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLButtonElement>>;

declare const Collapsible: React$1.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CollapsibleTrigger: React$1.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const CollapsibleContent: React$1.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleContentProps & React$1.RefAttributes<HTMLDivElement>>;

type OptionItemType = {
    title: string;
    value: string;
    email?: string;
    avatar?: string;
    discription?: React$1.ReactNode | string;
    prefix?: React$1.ReactNode | string;
    suffix?: React$1.ReactNode | string;
    disabled?: boolean;
};
type SearchInputOption$2 = {
    icon?: React$1.ReactNode;
    placeholderSearch?: string;
};
declare const MultipleSelect: React$1.ForwardRefExoticComponent<VariantProps<(props?: ({
    variant?: "default" | "success" | "error" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & {
    value?: string[] | undefined;
    onChange?: ((value?: string[] | string) => void) | undefined;
    options: OptionItemType[];
    maxTagCount?: number | undefined;
    placeholder?: string | undefined;
} & {
    prefixes?: React$1.ReactNode;
    suffixes?: React$1.ReactNode;
    disabled?: boolean | undefined;
    header?: React$1.ReactNode;
    footer?: React$1.ReactNode;
    searchInputOption?: SearchInputOption$2 | undefined;
    suffixItemLeft?: React$1.ReactNode;
    suffixItemRight?: React$1.ReactNode;
    type?: string | undefined;
    container?: HTMLElement | undefined;
    sideOffset?: number | undefined;
    alignOffset?: number | undefined;
    align?: 'end' | 'center' | 'start' | undefined;
    isSearchable?: boolean | undefined;
    modalPopover?: boolean | undefined;
    badgePropsItem?: BadgeProps | undefined;
    textEmpty?: string | React$1.ReactNode;
    customValue?: ((value: string[], options: OptionItemType[], handleRemove: (value: string) => void) => React$1.ReactNode) | undefined;
    contentClassName?: string | undefined;
    triggerClassName?: string | undefined;
    itemClassName?: string | undefined;
} & React$1.RefAttributes<HTMLDivElement>>;

type SearchInputOption$1 = {
    icon?: React$1.ReactNode;
    placeholder?: string;
};
declare const Combobox: React$1.ForwardRefExoticComponent<VariantProps<(props?: ({
    variant?: "default" | "success" | "error" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & {
    value?: string | undefined;
    onChange?: ((value: string) => void) | undefined;
    options: OptionItemType[];
} & {
    prefixes?: React$1.ReactNode;
    suffixes?: React$1.ReactNode;
    disabled?: boolean | undefined;
    placeholder?: string | undefined;
    triggerClassName?: string | undefined;
    contentClassName?: string | undefined;
    itemClassName?: string | undefined;
    header?: React$1.ReactNode;
    footer?: React$1.ReactNode;
    searchInputOption?: SearchInputOption$1 | undefined;
    suffixItemLeft?: React$1.ReactNode;
    suffixItemRight?: React$1.ReactNode;
    searchable?: boolean | undefined;
    customValue?: ((value: string, options: OptionItemType[]) => React$1.ReactNode) | undefined;
    allowClear?: boolean | undefined;
    sideOffset?: number | undefined;
    align?: 'end' | 'center' | 'start' | undefined;
    alignOffset?: number | undefined;
    contentScroll?: string | undefined;
    modalPopover?: boolean | undefined;
    customOption?: ((option: OptionItemType) => string | React$1.ReactNode) | undefined;
    emptyText?: string | React$1.ReactNode;
    textEmpty?: string | React$1.ReactNode;
} & React$1.RefAttributes<HTMLDivElement>>;

declare const Command: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement> | undefined;
} & {
    asChild?: boolean | undefined;
}, "asChild" | "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    label?: string | undefined;
    shouldFilter?: boolean | undefined;
    filter?: ((value: string, search: string, keywords?: string[] | undefined) => number) | undefined;
    defaultValue?: string | undefined;
    value?: string | undefined;
    onValueChange?: ((value: string) => void) | undefined;
    loop?: boolean | undefined;
    disablePointerSelection?: boolean | undefined;
    vimBindings?: boolean | undefined;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandDialog: ({ children, ...props }: DialogProps) => react_jsx_runtime.JSX.Element;
declare const CommandInput: React$1.ForwardRefExoticComponent<Omit<Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof React$1.InputHTMLAttributes<HTMLInputElement>> & {
    ref?: React$1.Ref<HTMLInputElement> | undefined;
} & {
    asChild?: boolean | undefined;
}, "asChild" | "key" | keyof React$1.InputHTMLAttributes<HTMLInputElement>>, "value" | "onChange" | "type"> & {
    value?: string | undefined;
    onValueChange?: ((search: string) => void) | undefined;
} & React$1.RefAttributes<HTMLInputElement>, "ref"> & {
    icon?: React$1.ReactNode;
    onSearch?: ((value: string) => void) | undefined;
    classNameCustom?: string | undefined;
} & React$1.RefAttributes<HTMLInputElement>>;
declare const CommandList: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement> | undefined;
} & {
    asChild?: boolean | undefined;
}, "asChild" | "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    label?: string | undefined;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandEmpty: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement> | undefined;
} & {
    asChild?: boolean | undefined;
}, "asChild" | "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandGroup: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement> | undefined;
} & {
    asChild?: boolean | undefined;
}, "asChild" | "key" | keyof React$1.HTMLAttributes<HTMLDivElement>>, "value" | "heading"> & {
    heading?: React$1.ReactNode;
    value?: string | undefined;
    forceMount?: boolean | undefined;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandSeparator: React$1.ForwardRefExoticComponent<Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement> | undefined;
} & {
    asChild?: boolean | undefined;
}, "asChild" | "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    alwaysRender?: boolean | undefined;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandItem: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement> | undefined;
} & {
    asChild?: boolean | undefined;
}, "asChild" | "key" | keyof React$1.HTMLAttributes<HTMLDivElement>>, "value" | "onSelect" | "disabled"> & {
    disabled?: boolean | undefined;
    onSelect?: ((value: string) => void) | undefined;
    value?: string | undefined;
    keywords?: string[] | undefined;
    forceMount?: boolean | undefined;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const iDatePickerVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    variant?: "default" | "success" | "error" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type PickerExtend = PickerProps<Dayjs> & React__default.RefAttributes<PickerRef>;
type IDatePickerProp = VariantProps<typeof iDatePickerVariants> & Omit<PickerExtend, 'locale' | 'generateConfig' | 'value'> & {
    dropdownClassName?: string;
    readOnly?: boolean;
    localeConfig?: Partial<Locale>;
    value?: Dayjs | string | undefined;
    suffixIcon?: boolean;
};
declare const IDatePicker: React__default.ForwardRefExoticComponent<Omit<IDatePickerProp, "ref"> & React__default.RefAttributes<unknown>>;

type RangeValue = [Dayjs | null, Dayjs | null] | null;
declare const IDateRangePicker: React__default.ForwardRefExoticComponent<VariantProps<(props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    variant?: "default" | "success" | "error" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & Omit<RangePickerProps<Dayjs>, "value" | "locale" | "generateConfig"> & {
    dropdownClassName?: string | undefined;
    readOnly?: boolean | undefined;
    localeConfig?: Partial<Locale> | undefined;
    value?: RangeValue | undefined;
    suffixIcon?: boolean | undefined;
} & React__default.RefAttributes<unknown>>;

declare const Dialog: React__default.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React__default.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React__default.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: React__default.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: React__default.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const DialogContent: React__default.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: React__default.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React__default.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogTitle: React__default.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React__default.RefAttributes<HTMLHeadingElement>, "ref"> & React__default.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React__default.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React__default.RefAttributes<HTMLParagraphElement>, "ref"> & React__default.RefAttributes<HTMLParagraphElement>>;

declare const DatePicker: React__default.ForwardRefExoticComponent<Omit<IDatePickerProp, "ref"> & React__default.RefAttributes<PickerRef>>;

type SingleSelectContextType = {
    labelAction?: {
        create?: string;
        update?: string;
        cancel?: string;
        delete?: string;
    };
    placeholders?: {
        inputTitle?: string;
        inputValue?: string;
        addButton?: string;
    };
    errors?: {
        inputTitleRequired?: string;
        inputValueRequired?: string;
        inputValueNotMatch?: string;
        inputValueAlreadyExited?: string;
    };
    onOptionsChange?: (options: Options[]) => void;
    valueKeyOption?: Set<string>;
};

interface Options extends OptionItemType {
    is_modifiable?: boolean;
    id?: number | string;
    order?: number;
}
declare const SingleSelect: React$1.ForwardRefExoticComponent<{
    value?: string | undefined;
    onChange?: ((value: string) => void) | undefined;
    options: Options[];
} & {
    prefixes?: React$1.ReactNode;
    suffixes?: React$1.ReactNode;
    suffixIcon?: boolean | undefined;
    disabled?: boolean | undefined;
    placeholder?: string | undefined;
    triggerClassName?: string | undefined;
    contentClassName?: string | undefined;
    header?: React$1.ReactNode;
    footer?: React$1.ReactNode;
    suffixItemLeft?: React$1.ReactNode;
    suffixItemRight?: React$1.ReactNode;
    searchable?: boolean | undefined;
    customValue?: ((value: string, options: Options[]) => React$1.ReactNode | boolean) | undefined;
    allowClear?: boolean | undefined;
    sideOffset?: number | undefined;
    align?: 'end' | 'center' | 'start' | undefined;
    alignOffset?: number | undefined;
    contentScroll?: string | undefined;
    modalPopover?: boolean | undefined;
    textEmpty?: string | React$1.ReactElement<any, string | React$1.JSXElementConstructor<any>> | undefined;
    readOnly?: boolean | undefined;
    allowAddOptions?: boolean | undefined;
    optionsContextValue?: SingleSelectContextType | undefined;
    onOptionsChange?: ((options: Options[]) => void) | undefined;
} & React$1.RefAttributes<HTMLDivElement>>;

type SizeType = 'small' | 'middle' | 'large';
type InputStatus = '' | 'warning' | 'error';
type Variant = 'outlined' | 'borderless' | 'filled';
interface InputNumberProps$1<T extends ValueType = ValueType> extends Omit<InputNumberProps$2<T>, 'prefix' | 'size' | 'controls'> {
    prefixCls?: string;
    rootClassName?: string;
    addonBefore?: React__default.ReactNode;
    addonAfter?: React__default.ReactNode;
    prefix?: React__default.ReactNode;
    suffix?: React__default.ReactNode;
    size?: SizeType;
    disabled?: boolean;
    status?: InputStatus;
    controls?: boolean | {
        upIcon?: React__default.ReactNode;
        downIcon?: React__default.ReactNode;
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
declare const NumberInput: React__default.ForwardRefExoticComponent<InputNumberProps$1<ValueType> & React__default.RefAttributes<HTMLInputElement>>;

type TextareaProps = React$1.TextareaHTMLAttributes<HTMLTextAreaElement>;
type Style = Omit<NonNullable<TextareaProps['style']>, 'maxHeight' | 'minHeight'> & {
    height?: number;
};
type TextareaHeightChangeMeta = {
    rowHeight: number;
};
interface TextareaAutosizeProps extends Omit<TextareaProps, 'style' | 'onChange' | 'value'> {
    style?: Style;
    isError?: boolean;
    classNameRoot?: string;
    noStyte?: boolean;
    onChange?: (value: string) => void;
    value?: string;
}
declare const TextareaAutosize: React$1.ForwardRefExoticComponent<TextareaAutosizeProps & React$1.RefAttributes<HTMLTextAreaElement>>;

declare const index_d_DatePicker: typeof DatePicker;
declare const index_d_NumberInput: typeof NumberInput;
type index_d_Options = Options;
declare const index_d_SingleSelect: typeof SingleSelect;
declare const index_d_TextareaAutosize: typeof TextareaAutosize;
type index_d_TextareaAutosizeProps = TextareaAutosizeProps;
type index_d_TextareaHeightChangeMeta = TextareaHeightChangeMeta;
declare namespace index_d {
  export { index_d_DatePicker as DatePicker, type InputNumberProps$1 as InputNumberProps, index_d_NumberInput as NumberInput, type index_d_Options as Options, index_d_SingleSelect as SingleSelect, index_d_TextareaAutosize as TextareaAutosize, type index_d_TextareaAutosizeProps as TextareaAutosizeProps, type index_d_TextareaHeightChangeMeta as TextareaHeightChangeMeta };
}

declare const Drawer: {
    ({ shouldScaleBackground, ...props }: React__default.ComponentProps<typeof Drawer$1.Root>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DrawerTrigger: React__default.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const DrawerPortal: typeof vaul.Portal;
declare const DrawerClose: React__default.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const DrawerOverlay: React__default.ForwardRefExoticComponent<Omit<Omit<DialogPrimitive.DialogOverlayProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const DrawerContent: React__default.ForwardRefExoticComponent<Omit<Omit<DialogPrimitive.DialogContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const DrawerHeader: {
    ({ className, ...props }: React__default.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DrawerFooter: {
    ({ className, ...props }: React__default.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DrawerTitle: React__default.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React__default.RefAttributes<HTMLHeadingElement>, "ref"> & React__default.RefAttributes<HTMLHeadingElement>>;
declare const DrawerDescription: React__default.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React__default.RefAttributes<HTMLParagraphElement>, "ref"> & React__default.RefAttributes<HTMLParagraphElement>>;

declare const DropdownMenu: React__default.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: React__default.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: React__default.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React__default.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: React__default.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: React__default.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: React__default.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React__default.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: React__default.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React__default.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubContent: React__default.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: React__default.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: React__default.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React__default.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: React__default.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: React__default.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React__default.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React__default.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React__default.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuShortcut: {
    ({ className, ...props }: React__default.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type EmptyProps = PropsWithChildren & {
    image?: string | React__default.ReactNode;
    description?: React__default.ReactNode;
    imageStyle?: React__default.CSSProperties;
    className?: string;
};
type EmptyComponent = React__default.FC<EmptyProps> & {
    PRESENTED_IMAGE_DEFAULT: React__default.ReactNode;
    PRESENTED_IMAGE_SIMPLE: React__default.ReactNode;
};
declare const Empty: EmptyComponent;

declare const InternalForm: <Values = any>(props: FormProps<Values> & {
    ref?: React$1.Ref<FormRef<Values>>;
}) => React$1.ReactElement;
type InternalFormType = typeof InternalForm;
interface RefFormType extends InternalFormType {
    FormProvider: typeof FormProvider;
    Field: typeof Field;
    List: typeof List;
    useForm: typeof useForm;
    useWatch: typeof useWatch;
}
declare const Form: RefFormType;
interface ChilProps {
    [name: string]: any;
}
interface FormItemProps extends FieldProps {
    renderItem: ({ control, meta, form, isError, }: {
        control: ChilProps;
        meta: Meta;
        form: FormInstance;
        isError: boolean;
    }) => React$1.ReactNode;
}
declare const FormItem: ({ renderItem, ...propsFormItem }: FormItemProps) => react_jsx_runtime.JSX.Element;

declare const GroupInput: FC<{} & PropsWithChildren>;

declare const MenubarMenu: {
    (props: MenubarPrimitive.MenubarMenuProps & {
        __scopeMenubar?: _radix_ui_react_context.Scope<any>;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const MenubarGroup: React__default.ForwardRefExoticComponent<MenubarPrimitive.MenubarGroupProps & React__default.RefAttributes<HTMLDivElement>>;
declare const MenubarPortal: React__default.FC<MenubarPrimitive.MenubarPortalProps>;
declare const MenubarSub: React__default.FC<MenubarPrimitive.MenubarSubProps>;
declare const MenubarRadioGroup: React__default.ForwardRefExoticComponent<MenubarPrimitive.MenubarRadioGroupProps & React__default.RefAttributes<HTMLDivElement>>;
declare const Menubar: React__default.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const MenubarTrigger: React__default.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarTriggerProps & React__default.RefAttributes<HTMLButtonElement>, "ref"> & React__default.RefAttributes<HTMLButtonElement>>;
declare const MenubarSubTrigger: React__default.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSubTriggerProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React__default.RefAttributes<HTMLDivElement>>;
declare const MenubarSubContent: React__default.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSubContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const MenubarContent: React__default.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const MenubarItem: React__default.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarItemProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React__default.RefAttributes<HTMLDivElement>>;
declare const MenubarCheckboxItem: React__default.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarCheckboxItemProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const MenubarRadioItem: React__default.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarRadioItemProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const MenubarLabel: React__default.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarLabelProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React__default.RefAttributes<HTMLDivElement>>;
declare const MenubarSeparator: React__default.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSeparatorProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const MenubarShortcut: {
    ({ className, ...props }: React__default.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayname: string;
};

type OptionItemSelectGroupType = {
    title: string;
    value: string;
    email?: string;
    avatar?: string;
    discription?: React$1.ReactNode | string;
    prefix?: React$1.ReactNode | string;
    suffix?: React$1.ReactNode | string;
    disabled?: boolean;
};
type SearchInputOption = {
    icon?: React$1.ReactNode;
    placeholderSearch?: string;
};
type DataEmptyType = {
    imageEmpty?: string;
    title?: string | React$1.ReactNode;
    description?: string | React$1.ReactNode;
};
declare const MultipleSelectGroup: React$1.ForwardRefExoticComponent<VariantProps<(props?: ({
    variant?: "default" | "success" | "error" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & {
    value?: string[] | undefined;
    onChange?: ((value?: string[] | string) => void) | undefined;
    options: OptionItemSelectGroupType[];
    placeholder?: string | undefined;
} & {
    prefixes?: React$1.ReactNode;
    suffixes?: React$1.ReactNode;
    disabled?: boolean | undefined;
    header?: React$1.ReactNode;
    footer?: React$1.ReactNode;
    searchInputOption?: SearchInputOption | undefined;
    suffixItemLeft?: React$1.ReactNode;
    suffixItemRight?: React$1.ReactNode;
    customValue?: ((value: {
        id: string;
        email?: string;
        avatar?: string;
    }, options: OptionItemSelectGroupType[]) => React$1.ReactNode) | undefined;
    type?: string | undefined;
    container?: HTMLElement | undefined;
    sideOffset?: number | undefined;
    alignOffset?: number | undefined;
    align?: 'end' | 'center' | 'start' | undefined;
    isSearchable?: boolean | undefined;
    modalPopover?: boolean | undefined;
    textEmpty?: string | undefined;
    dataEmpty?: DataEmptyType | undefined;
    searchEmpty: React$1.ReactNode;
} & React$1.RefAttributes<HTMLDivElement>>;

declare const inputNumberVariants: (props?: ({
    variant?: "default" | "success" | "error" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface InputNumberProps extends Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof inputNumberVariants> {
    icon?: React$1.ReactNode;
    placeholder?: string;
    decimal?: number;
    onSubmitValue?: (value: string) => void;
    isShow?: boolean;
}
declare const InputNumber: React$1.ForwardRefExoticComponent<InputNumberProps & React$1.RefAttributes<HTMLInputElement>>;

type PaginationParams = {
    pageSize: number;
    pageIndex: number;
    total: number;
};
type PaginationProps = {
    nextIcon?: React$1.ReactNode;
    prevIcon?: React$1.ReactNode;
    delta?: number;
    showPages?: boolean;
    onChange?: (value: PaginationParams) => void;
} & PaginationParams;
declare const Pagination: React$1.FC<PaginationProps>;

declare const Popover: React__default.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React__default.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: React__default.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & {
    container?: HTMLElement | undefined;
} & React__default.RefAttributes<HTMLDivElement>>;

declare const Progress: React$1.ForwardRefExoticComponent<Omit<ProgressPrimitive.ProgressProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const RadioGroup: React__default.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const RadioGroupItem: React__default.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & React__default.RefAttributes<HTMLButtonElement>, "ref"> & React__default.RefAttributes<HTMLButtonElement>>;

declare const ScrollArea: React$1.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ScrollBar: React$1.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaScrollbarProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Select: React$1.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React$1.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "success" | "error" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & {
    prefixes?: React$1.ReactNode;
    suffixes?: React$1.ReactNode;
    allowClear?: boolean | undefined;
} & React$1.RefAttributes<HTMLButtonElement>>;
declare const SelectScrollUpButton: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectScrollDownButton: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectContent: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    suffixItemLeft?: React$1.ReactNode;
    suffixItemRight?: React$1.ReactNode;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Separator: React__default.ForwardRefExoticComponent<Omit<SeparatorPrimitive.SeparatorProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;

declare const Sheet: React__default.FC<DialogPrimitive.DialogProps>;
declare const SheetTrigger: React__default.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const SheetClose: React__default.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const SheetPortal: React__default.FC<DialogPrimitive.DialogPortalProps>;
declare const SheetOverlay: React__default.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const sheetVariants: (props?: ({
    side?: "bottom" | "left" | "right" | "top" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface SheetContentProps extends React__default.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, VariantProps<typeof sheetVariants> {
}
declare const SheetContent: React__default.ForwardRefExoticComponent<SheetContentProps & React__default.RefAttributes<HTMLDivElement>>;
declare const SheetHeader: {
    ({ className, ...props }: React__default.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SheetFooter: {
    ({ className, ...props }: React__default.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SheetTitle: React__default.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React__default.RefAttributes<HTMLHeadingElement>, "ref"> & React__default.RefAttributes<HTMLHeadingElement>>;
declare const SheetDescription: React__default.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React__default.RefAttributes<HTMLParagraphElement>, "ref"> & React__default.RefAttributes<HTMLParagraphElement>>;

declare function Skeleton({ className, ...props }: React__default.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

declare const Spin: ({ loading, className, children, fullScreen, size, }: {
    loading?: boolean | undefined;
    className?: string | undefined;
    fullScreen?: boolean | undefined;
    size?: "sm" | "md" | "lg" | "l" | "xs" | null | undefined;
} & {
    children?: React__default.ReactNode;
}) => react_jsx_runtime.JSX.Element;

declare const spinnerVariants: (props?: ({
    variant?: "primary" | "secondary" | null | undefined;
    size?: "sm" | "md" | "lg" | "l" | "xs" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface SpinnerProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof spinnerVariants> {
}
declare const Spinner: React$1.ForwardRefExoticComponent<SpinnerProps & React$1.RefAttributes<HTMLDivElement>>;

declare const Switch: React$1.ForwardRefExoticComponent<Omit<SwitchPrimitives.SwitchProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLButtonElement>>;

type ExtractProps<T> = T extends React__default.ComponentType<infer P> ? P : T;
declare const tableStyles: {
    table: string;
    thead: string;
    tCell: string;
    variants: {
        classic: string;
        modern: string;
        minimal: string;
        elegant: string;
    };
    striped: string;
    striped_column: string;
};
interface TableProps<T> extends Omit<TableProps$1<T> & React__default.RefAttributes<Reference>, "className" | "emptyText"> {
    emptyText?: React__default.ReactElement;
    variant?: keyof typeof tableStyles.variants;
    striped?: boolean | "row" | "column";
    className?: string;
    pagination?: PaginationProps | false;
    checkable?: boolean;
}
declare function Table<RecordType extends DefaultRecordType>({ striped, variant, emptyText, className, pagination, checkable, selectedRowKeys, onSelectAllRows, onSelectRow, ...props }: TableProps<RecordType> & {
    selectedRowKeys?: string[];
    onSelectAllRows?: (checked: boolean) => void;
    onSelectRow?: (id: string, checked: boolean) => void;
}): react_jsx_runtime.JSX.Element;
declare namespace Table {
    var displayName: string;
}

declare function Tabs({ className, ...props }: React$1.ComponentProps<typeof TabsPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function TabsList({ className, ...props }: React$1.ComponentProps<typeof TabsPrimitive.List>): react_jsx_runtime.JSX.Element;
declare function TabsTrigger({ className, ...props }: React$1.ComponentProps<typeof TabsPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function TabsContent({ className, ...props }: React$1.ComponentProps<typeof TabsPrimitive.Content>): react_jsx_runtime.JSX.Element;

declare const inputVariants: (props?: ({
    variant?: "default" | "success" | "error" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface InputProps extends Omit<React$1.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>, VariantProps<typeof inputVariants> {
    suffix?: React$1.ReactNode;
    prefix?: React$1.ReactNode;
    placeholder?: string;
    onPressEnter?: () => void;
    onSubmitValue?: (value: string) => void;
    clearable?: boolean;
}
declare const Input: React$1.ForwardRefExoticComponent<InputProps & React$1.RefAttributes<HTMLInputElement>>;

type ToasterProps = React__default.ComponentProps<typeof Toaster$1>;
declare const Toaster: ({ ...props }: ToasterProps) => react_jsx_runtime.JSX.Element;
type NotificationType = 'success' | 'error' | 'warning' | 'info';
interface NotificationProps {
    type: NotificationType;
    options?: ExternalToast;
    title: string | React__default.ReactNode;
    description?: string | React__default.ReactNode;
    iconClose?: boolean;
    isShowIcon?: boolean;
    className?: string;
    loading?: React__default.ReactNode;
    classNameContent?: string;
    classNameTitleBox?: string;
}
declare const toast: React__default.FC<NotificationProps>;

declare const TooltipProvider: React__default.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: React__default.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React__default.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: React__default.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;

type Key = React__default.Key;
type TreeDataType = {
    value: Key;
    label: string | React__default.ReactNode;
    checked: boolean | "indeterminate";
    disabled?: boolean;
    children?: TreeDataType[];
    isControl?: boolean;
    hidden?: boolean;
};
type TreeNodeProps = {
    record: TreeDataType;
    onSelect?: (checked: boolean, value: Key) => void;
    defaultKeyOpen?: Key[];
    className?: string;
    selectedRowKeys?: Key[];
    asChild?: boolean;
    onClickLabel?: () => void;
};
type TreeSelectProps = {
    treeData: TreeDataType[];
    defaultKeyOpen?: Key[];
    defaultSelectedRowKeys?: Key[];
    onChange?: (value: Key[]) => void;
    className?: string;
    onClickLabel?: () => void;
};
declare const TreeSelect: React__default.ForwardRefExoticComponent<TreeSelectProps & React__default.RefAttributes<HTMLDivElement>>;
declare const TreeField: ({ value, onChange, data, className, }: {
    value: React__default.Key[];
    onChange: (value: React__default.Key[]) => void;
    data: TreeDataType[];
    className?: string | undefined;
    onClickLabel?: (() => void) | undefined;
}) => react_jsx_runtime.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;
declare function objectsToArray(object: Object): any[];
declare function objectsToString(object: Object): string;
declare const removeVietnameseTones: (str: string) => string;
declare const toLowerSnakeCase: (input: string) => string;
declare const REGEX_SNAKE_CASE: RegExp;

type Remove<T, S> = T extends T ? (S extends T ? never : T) : never;

export { Accordion, AccordionBody, type AccordionBodyProps, AccordionHeader, type AccordionHeaderProps, type AccordionProps, Alert, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, AspectRatio, Badge, type BadgeProps, BreadCrumb, Button, type ButtonProps, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, Collapsible, CollapsibleContent, CollapsibleTrigger, Combobox, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, type DataBreadCrumb, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, index_d as DocumentEditor, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, DynamicElement, Empty, type ExtractProps, Form, FormItem, type FormItemProps, GroupInput, IDatePicker, IDateRangePicker, Input, InputNumber, type InputNumberProps, type InputProps, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, MultipleSelect, MultipleSelectGroup, type NotificationType, type OptionItemSelectGroupType, type OptionItemType, Pagination, type PaginationParams, type PaginationProps, Popover, PopoverContent, PopoverTrigger, Progress, REGEX_SNAKE_CASE, RadioGroup, RadioGroupItem, type Remove, ScrollArea, ScrollBar, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, Skeleton, Spin, Spinner, type SpinnerProps, Switch, Table, type TableProps, Tabs, TabsContent, TabsList, TabsTrigger, Toaster, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, type TreeDataType, TreeField, type TreeNodeProps, TreeSelect, type TreeSelectProps, type animation, badgeVariants, buttonVariants, cn, inputNumberVariants, inputVariants, objectsToArray, objectsToString, removeVietnameseTones, spinnerVariants, toLowerSnakeCase, toast, useAccordion };
