/// <reference types="react" />
import { FormInstance } from '../../form';
export default function AddNewOption({ setState, state, onAdd, form, onClose, }: {
    setState: React.Dispatch<React.SetStateAction<{
        itemKey: number | string | null;
        mode: 'view' | 'create' | 'update';
    }>>;
    state: {
        itemKey: number | string | null;
        mode: 'view' | 'create' | 'update';
    };
    onAdd: (title: string, value: string) => void;
    form: FormInstance;
    onClose?: () => void;
}): import("react/jsx-runtime").JSX.Element;
