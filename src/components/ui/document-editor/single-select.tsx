import * as React from 'react';

import { CaretUpDown, X } from '@phosphor-icons/react';
import { OptionItemType } from '../mutiple-select';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { cn } from '../../../lib';
import { Command, CommandGroup } from '../command';
import { Form } from '../form';
import {
  defaultContextValue,
  SingleSelectContext,
  SingleSelectContextType,
} from './components/single-select-context';
import { SingleSelectItem } from './components/single-select-item';
import AddNewOption from './components/add-new-option';
interface Options extends OptionItemType {
  is_modifiable?: boolean;
  id?: number | string;
  order?: number;
}
const SingleSelect = React.forwardRef<
  HTMLDivElement,
  {
    value?: string;
    onChange?: (value: string) => void;
    options: Options[];
  } & {
    prefixes?: React.ReactNode;
    suffixes?: React.ReactNode;
    suffixIcon?: boolean;
    disabled?: boolean;
    placeholder?: string;
    triggerClassName?: string;
    contentClassName?: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    suffixItemLeft?: React.ReactNode;
    suffixItemRight?: React.ReactNode;
    searchable?: boolean;
    customValue?: (
      value: string,
      options: Options[],
    ) => React.ReactNode | boolean;
    allowClear?: boolean;
    sideOffset?: number;
    align?: 'end' | 'center' | 'start' | undefined;
    alignOffset?: number;
    contentScroll?: string;
    modalPopover?: boolean;
    textEmpty?: React.ReactElement | string;
    readOnly?: boolean;
    allowAddOptions?: boolean;
    optionsContextValue?: SingleSelectContextType;
    onOptionsChange?: (options: Options[]) => void;
  }
>(
  (
    {
      value = '',
      onChange,
      options,
      prefixes,
      suffixes,
      suffixIcon = true,
      disabled,
      placeholder = 'Select a item',
      header,
      footer,
      triggerClassName = '',
      contentClassName = '',
      customValue,
      allowClear = false,
      sideOffset,
      contentScroll,
      align = 'start',
      alignOffset,
      modalPopover = false,
      textEmpty = 'Nodata',
      readOnly,
      allowAddOptions,
      optionsContextValue,
      onOptionsChange,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);
    const [currentItem, setCurrentItem] = React.useState<Options | null>(
      options?.find((option) => option.value === value) ?? null,
    );
    const [stateOptions, setStateOptions] = React.useState<Options[]>(
      options ?? [],
    );
    const containerRef = React.useRef<HTMLDivElement>(null);
    React.useImperativeHandle(ref, () => containerRef.current!, []);

    const [form] = Form.useForm();

    const formOptions = (Form.useWatch('options', form) as Options[]) ?? [];

    const [state, setState] = React.useState<{
      itemKey: number | string | null;
      mode: 'view' | 'create' | 'update';
    }>({
      itemKey: null,
      mode: 'view',
    });

    React.useEffect(() => {
      setCurrentItem(options?.find((option) => option.value === value) ?? null);
    }, [value]);

    const onClear = (event: React.MouseEvent) => {
      event.stopPropagation();
      setCurrentItem(null);
      onChange?.('');
    };

    const text = React.useMemo(() => {
      if (currentItem) {
        return stateOptions.find(
          (option) =>
            option.value === value || option.order === currentItem.order,
        )?.title;
      }
      return placeholder;
    }, [stateOptions, value, currentItem]);

    const handleOpen = (open: boolean) => {
      if (disabled || readOnly) return;
      setOpen(open);
      setState({
        mode: 'view',
        itemKey: null,
      });
    };

    React.useEffect(() => {
      setStateOptions(options);
    }, [options]);

    React.useEffect(() => {
      if (open) {
        setStateOptions(formOptions);
      }
    }, [open, formOptions]);

    const initialValues = React.useMemo(() => {
      return {
        options,
      };
    }, [options]);

    React.useEffect(() => {
      form.setFieldsValue(initialValues);
    }, [initialValues]);

    return (
      <SingleSelectContext.Provider
        value={{
          ...defaultContextValue,
          ...optionsContextValue,
          onOptionsChange,
        }}
      >
        <div ref={containerRef} className="h-auto w-full relative" {...props}>
          <Popover open={open} onOpenChange={handleOpen} modal={modalPopover}>
            <PopoverTrigger asChild>
              <button
                role="combobox"
                aria-controls={`${containerRef.current?.id}-listbox`}
                id={`${containerRef.current?.id}-listbox`}
                aria-haspopup="listbox"
                aria-expanded={open}
                disabled={Boolean(disabled || readOnly)}
                className={cn(
                  'group font-normal text-sm leading-[21px] text-gray-500 min-h-[36px] h-auto w-full',
                  'data-[state=open]:text-gray-800 data-[state=open]:border-primary-200 px-2 outline-none data-[state=open]:bg-gray-100',
                  'flex flex-1 min-w-0 flex-row gap-2 items-center w-full rounded-lg hover:z-[2]',
                  '[&>span]:line-clamp-1',
                  'transition-all duration-300 ease-in bg-inherit',
                  'hover:bg-gray-100',
                  {
                    'bg-white hover:bg-white hover:ring-0 active:ring-0 opacity-50 disabled:cursor-not-allowed ':
                      Boolean(disabled),
                  },
                  {
                    'bg-white hover:bg-white hover:ring-0 active:ring-0 opacity-100 cursor-default':
                      Boolean(readOnly),
                  },
                  triggerClassName,
                  currentItem && text && 'text-gray-800',
                )}
              >
                {prefixes && (
                  <div className="flex flex-shrink-0 gap-2">
                    <div className="group-active:text-primary-500 group-disabled:text-gray-400">
                      {prefixes}
                    </div>
                  </div>
                )}
                <span
                  className={cn(
                    'block flex-1 min-w-0 text-left text-sm leading-[21px] text-gray-700 truncate',
                    {
                      'text-gray-500': !(currentItem && text),
                    },
                  )}
                  {...(currentItem && text ? { title: text } : {})}
                >
                  {currentItem && text
                    ? customValue instanceof Function
                      ? customValue(currentItem.value, options)
                      : text
                    : placeholder}
                </span>
                {allowClear && (
                  <X
                    size={14}
                    className={cn(
                      'flex-shrink-0 opacity-0 text-gray-500',
                      allowClear &&
                        currentItem &&
                        text &&
                        'opacity-100 cursor-pointer',
                    )}
                    onClick={onClear}
                  />
                )}
                {suffixes ? (
                  <div
                    className={cn(
                      'flex-shrink-0 text-gray-500 group-active:text-gray-500 group-placeholder-shown:text-red-500 group-data-[state=open]:text-gray-500',
                      { 'group-disabled:text-gray-400': disabled },
                      { 'group-disabled:text-gray-500': readOnly },
                      {
                        'group-data-[state=open]:text-gray-700 text-gray-700':
                          currentItem && text,
                      },
                    )}
                  >
                    {suffixes}
                  </div>
                ) : (
                  suffixIcon && (
                    <CaretUpDown
                      className={cn(
                        'flex-shrink-0 text-gray-500 group-active:text-gray-500 group-placeholder-shown:text-red-500 group-data-[state=open]:text-gray-500',
                        { 'group-disabled:text-gray-400': disabled },
                        { 'group-disabled:text-gray-500': readOnly },
                        {
                          'group-data-[state=open]:text-gray-700 text-gray-700':
                            currentItem && text,
                        },
                      )}
                      size={18}
                    />
                  )
                )}
              </button>
            </PopoverTrigger>
            <PopoverContent
              className={`bg-white border border-gray-100 rounded-xl z-[100] mt-1 p-0 shadow-c5 min-w-[426px] max-w-[var(--radix-popper-anchor-width)] w-auto overflow-auto pointer-events-auto ${contentClassName}`}
              sideOffset={sideOffset ?? -50}
              align={align}
              alignOffset={alignOffset ?? 0}
              onEscapeKeyDown={() => setOpen(false)}
            >
              <Form
                name="form-single-select"
                form={form}
                initialValues={initialValues}
              >
                <Command className="gap-2 overflow-y-auto" shouldFilter={false}>
                  <Form.List name="options">
                    {(fields, { add, remove }) => {
                      return (
                        <div>
                          {fields.length > 0 ? (
                            <div
                              id="parent-listbox"
                              ref={(ref) => {
                                const elem = ref;
                                if (elem) {
                                  const item = elem.querySelector(
                                    `[data-value="${currentItem?.value}"]`,
                                  );
                                  if (item) {
                                    item.scrollIntoView();
                                  }
                                }
                              }}
                              className={cn(
                                'max-h-64 h-auto overflow-y-auto block',
                                contentScroll,
                              )}
                            >
                              <CommandGroup className="p-2">
                                <div className="flex flex-col gap-2">
                                  {fields.map((field) => (
                                    <SingleSelectItem
                                      item={{
                                        id: field.name,
                                        order:
                                          formOptions?.[field.name]?.order ??
                                          field.name,
                                        value:
                                          formOptions?.[field.name]?.value ??
                                          '',
                                        title:
                                          formOptions?.[field.name]?.title ??
                                          '',
                                        is_modifiable:
                                          formOptions?.[field.name]
                                            ?.is_modifiable ?? false,
                                      }}
                                      handleSelect={(item: Options) => {
                                        setCurrentItem(item);
                                        setOpen(false);
                                        onChange?.(item.value);
                                      }}
                                      setOpen={setOpen}
                                      state={state}
                                      setState={setState}
                                      currentValue={currentItem?.value ?? ''}
                                      onClose={() =>
                                        setState({
                                          itemKey: null,
                                          mode: 'view',
                                        })
                                      }
                                      key={field.name}
                                      form={form}
                                      remove={remove}
                                    />
                                  ))}
                                </div>
                              </CommandGroup>
                            </div>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-center text-sm leading-[21px] text-gray-500 font-normal p-2">
                              {textEmpty}
                            </div>
                          )}
                          {allowAddOptions && (
                            <AddNewOption
                              form={form}
                              setState={setState}
                              state={state}
                              key={fields.length}
                              onAdd={(title: string, value: string) => {
                                add({
                                  id: Math.random(),
                                  order: Math.random(),
                                  title: title,
                                  value: value,
                                  is_modifiable: true,
                                });
                              }}
                              onClose={() =>
                                setState({
                                  itemKey: null,
                                  mode: 'view',
                                })
                              }
                            />
                          )}
                        </div>
                      );
                    }}
                  </Form.List>
                </Command>
              </Form>
            </PopoverContent>
          </Popover>
        </div>
      </SingleSelectContext.Provider>
    );
  },
);
SingleSelect.displayName = 'SingleSelect';

export { SingleSelect, Options };
