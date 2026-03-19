import * as React from 'react';
import { OptionItemType } from '../mutiple-select';
import { SingleSelectContextType } from './components/single-select-context';
interface Options extends OptionItemType {
    is_modifiable?: boolean;
    id?: number | string;
    order?: number;
}
declare const SingleSelect: React.ForwardRefExoticComponent<{
    value?: string | undefined;
    onChange?: ((value: string) => void) | undefined;
    options: Options[];
} & {
    prefixes?: React.ReactNode;
    suffixes?: React.ReactNode;
    suffixIcon?: boolean | undefined;
    disabled?: boolean | undefined;
    placeholder?: string | undefined;
    triggerClassName?: string | undefined;
    contentClassName?: string | undefined;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    suffixItemLeft?: React.ReactNode;
    suffixItemRight?: React.ReactNode;
    searchable?: boolean | undefined;
    customValue?: ((value: string, options: Options[]) => React.ReactNode | boolean) | undefined;
    allowClear?: boolean | undefined;
    sideOffset?: number | undefined;
    align?: 'end' | 'center' | 'start' | undefined;
    alignOffset?: number | undefined;
    contentScroll?: string | undefined;
    modalPopover?: boolean | undefined;
    textEmpty?: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    readOnly?: boolean | undefined;
    allowAddOptions?: boolean | undefined;
    optionsContextValue?: SingleSelectContextType | undefined;
    onOptionsChange?: ((options: Options[]) => void) | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export { SingleSelect, Options };
