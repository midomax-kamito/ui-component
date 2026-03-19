/// <reference types="react" />
import { Options } from '../single-select';
import { FormInstance } from '../../form';
type SingleSelectItemProps = {
    item: Options;
    handleSelect: (item: Options) => void;
    setOpen: (open: boolean) => void;
    state: {
        itemKey: number | string | null;
        mode: 'view' | 'create' | 'update';
    };
    setState: React.Dispatch<React.SetStateAction<{
        itemKey: number | string | null;
        mode: 'view' | 'create' | 'update';
    }>>;
    onClose: () => void;
    form: FormInstance;
    remove: (id: number | number[]) => void;
    currentValue: string;
};
declare const SingleSelectItem: ({ item, handleSelect, setOpen, state, setState, onClose, form, currentValue, remove, }: SingleSelectItemProps) => import("react/jsx-runtime").JSX.Element;
export { SingleSelectItem };
