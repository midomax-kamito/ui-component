import * as React from 'react';
type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
type Style = Omit<NonNullable<TextareaProps['style']>, 'maxHeight' | 'minHeight'> & {
    height?: number;
};
export type TextareaHeightChangeMeta = {
    rowHeight: number;
};
export interface TextareaAutosizeProps extends Omit<TextareaProps, 'style' | 'onChange' | 'value'> {
    style?: Style;
    isError?: boolean;
    classNameRoot?: string;
    noStyte?: boolean;
    onChange?: (value: string) => void;
    value?: string;
}
declare const TextareaAutosize: React.ForwardRefExoticComponent<TextareaAutosizeProps & React.RefAttributes<HTMLTextAreaElement>>;
export { TextareaAutosize };
