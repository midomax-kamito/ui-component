import { FormInstance } from '../../form';
export declare const InputAction: ({ defaultValue, onClose, action, onSubmited, state, form, }: {
    defaultValue?: {
        title: string;
        value: string;
    } | undefined;
    onClose?: (() => void) | undefined;
    action: 'update' | 'create';
    onSubmited: (title: string, value: string, valueKeyOption?: Set<string>) => void;
    state?: {
        itemKey: number | string | null;
        mode: 'view' | 'create' | 'update';
    } | undefined;
    form: FormInstance;
}) => import("react/jsx-runtime").JSX.Element;
