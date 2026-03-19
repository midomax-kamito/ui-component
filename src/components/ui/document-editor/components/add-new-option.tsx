import { useContext } from 'react';
import { SingleSelectContext } from './single-select-context';
import { Plus } from '@phosphor-icons/react';
import { InputAction } from './input-action';
import { FormInstance } from '../../form';
import { cn } from '../../../../lib';

export default function AddNewOption({
  setState,
  state,
  onAdd,
  form,
  onClose,
}: {
  setState: React.Dispatch<
    React.SetStateAction<{
      itemKey: number | string | null;
      mode: 'view' | 'create' | 'update';
    }>
  >;
  state: {
    itemKey: number | string | null;
    mode: 'view' | 'create' | 'update';
  };
  onAdd: (title: string, value: string) => void;
  form: FormInstance;
  onClose?: () => void;
}) {
  const { placeholders, onOptionsChange } = useContext(SingleSelectContext);
  if (state.mode === 'create')
    return (
      <InputAction
        action="create"
        form={form}
        state={state}
        onClose={onClose}
        onSubmited={(title: string, value: string) => {
          onAdd(title, value);
          const options = form.getFieldValue('options');
          onOptionsChange?.(options) ?? [];
        }}
      />
    );

  return (
    <div
      onClick={(event) => {
        event.stopPropagation();
        setState({ itemKey: null, mode: 'create' });
      }}
      className={cn(
        'flex flex-row items-center gap-2 p-2 text-sm cursor-pointer text-primary-500 hover:bg-gray-50 h-11',
      )}
    >
      <Plus size={20} weight="regular" className="text-current" />
      <span className="text-current">{placeholders?.addButton}</span>
    </div>
  );
}
