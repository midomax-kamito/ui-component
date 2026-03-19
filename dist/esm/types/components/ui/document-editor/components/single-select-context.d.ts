/// <reference types="react" />
import { Options } from '../single-select';
export type SingleSelectContextType = {
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
export declare const defaultContextValue: SingleSelectContextType;
export declare const SingleSelectContext: import("react").Context<SingleSelectContextType>;
