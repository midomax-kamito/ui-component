import { DotsThreeVertical, PencilSimple, Trash } from '@phosphor-icons/react';
import { useContext, useEffect, useState } from 'react';
import { Options } from '../single-select';
import { CommandItem } from '../../command';
import { SingleSelectContext } from './single-select-context';
import { InputAction } from './input-action';
import { cn } from '../../../../lib';
import { Popover, PopoverContent, PopoverTrigger } from '../../popover';
import { FormInstance } from '../../form';

type SingleSelectItemProps = {
  item: Options;
  handleSelect: (item: Options) => void;
  setOpen: (open: boolean) => void;
  state: {
    itemKey: number | string | null;
    mode: 'view' | 'create' | 'update';
  };
  setState: React.Dispatch<
    React.SetStateAction<{
      itemKey: number | string | null;
      mode: 'view' | 'create' | 'update';
    }>
  >;
  onClose: () => void;
  form: FormInstance;
  remove: (id: number | number[]) => void;
  currentValue: string;
};

const SingleSelectItem = ({
  item,
  handleSelect,
  setOpen,
  state,
  setState,
  onClose,
  form,
  currentValue,
  remove,
}: SingleSelectItemProps) => {
  const { labelAction, onOptionsChange, valueKeyOption } =
    useContext(SingleSelectContext);
  const [isOpenPopover, setIsOpenPopover] = useState(false);

  useEffect(() => {
    const scrollElement = document.getElementById('parent-listbox');
    if (scrollElement) {
      scrollElement.addEventListener('scroll', () => {
        setIsOpenPopover(false);
      });
    }
  }, []);

  if (state.mode === 'update' && state.itemKey! === item.value!) {
    return (
      <CommandItem value={item.value} className="w-full hover:!bg-white p-0">
        <InputAction
          action="update"
          form={form}
          onClose={onClose}
          state={{ itemKey: item.value!, mode: 'update' }}
          defaultValue={{ title: item.title, value: item.value }}
          onSubmited={(title: string, value: string) => {
            form.setFieldValue(['options', item.id!, 'title'], title);
            form.setFieldValue(['options', item.id!, 'value'], value);
            const options = form.getFieldValue('options') ?? [];
            onOptionsChange?.(options);
          }}
        />
      </CommandItem>
    );
  }

  return (
    <CommandItem
      value={item.value}
      className={cn(
        'gap-3 hover:bg-gray-100 [&:not(.selected)]:hover:bg-gray-100 cursor-pointer',
        'flex flex-row min-h-[37px] h-auto items-center p-2',
        currentValue === item.value && 'bg-gray-100 selected hover:bg-gray-100',
      )}
      onSelect={() => handleSelect(item)}
    >
      <div className="flex-1 min-w-0">
        <span
          className="block text-sm text-left text-gray-700"
          title={item.title}
        >
          {item.title}
        </span>
      </div>
      {item.is_modifiable && (
        <Popover open={isOpenPopover} onOpenChange={setIsOpenPopover}>
          <PopoverTrigger
            asChild
            onClick={(event) => {
              event.stopPropagation();
              setIsOpenPopover(true);
            }}
          >
            <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 rounded-md cursor-pointer hover:bg-gray-200">
              <DotsThreeVertical className="text-current" size={20} />
            </div>
          </PopoverTrigger>
          <PopoverContent
            className="max-w-[132px] p-2 z-[101]"
            align="center"
            side="left"
          >
            <div
              className="flex flex-row items-center gap-2 p-2 text-sm text-gray-700 rounded-lg cursor-default hover:bg-gray-100"
              onClick={(e) => {
                e.stopPropagation();
                setState({ itemKey: item.value!, mode: 'update' });
                setOpen(true);
                setIsOpenPopover(false);
              }}
            >
              <PencilSimple
                className="flex-shrink-0 text-current"
                size={20}
                weight="regular"
              />
              <span className="text-current">{labelAction?.update}</span>
            </div>
            <div
              className="flex flex-row items-center gap-2 p-2 text-red-500 rounded-lg cursor-default hover:bg-gray-100"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(true);
                remove(+item.id!);
                const options = form.getFieldValue('options') ?? [];
                onOptionsChange?.(options);
                onClose();
                setIsOpenPopover(false);
                valueKeyOption?.delete(item?.value!);
              }}
            >
              <Trash
                className="flex-shrink-0 text-current"
                size={20}
                weight="regular"
              />
              <span className="text-sm text-current">
                {labelAction?.delete}
              </span>
            </div>
          </PopoverContent>
        </Popover>
      )}
    </CommandItem>
  );
};

export { SingleSelectItem };
