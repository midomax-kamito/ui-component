import * as React from 'react';

import { VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';
import { CaretUpDown, X } from '@phosphor-icons/react';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { cn } from '../../lib';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from './command';
import { OptionItemType } from './mutiple-select';

const comboboxVariants = cva(
  clsx(
    'group font-normal text-sm leading-[21px] text-gray-500',
    'data-[state=open]:text-gray-800 data-[state=open]:border-primary-200 px-4 outline-none',
    'flex w-full items-center justify-between rounded-lg hover:z-[2]',
    'disabled:cursor-not-allowed [&>span]:line-clamp-1',
    'transition-all duration-300 ease-in bg-white',
    'hover:ring-2 hover:ring-primary-300 active:ring-primary-200',
  ),
  {
    variants: {
      variant: {
        default: clsx('border border-gray-200'),
        success: clsx('border border-green-500'),
        error: clsx(
          'border border-red-500 hover:ring-0 active:ring-0 data-[state=open]:border-red-500',
        ),
      },
      size: {
        sm: clsx('h-10'),
        md: clsx('h-11'),
        lg: clsx('h-12'),
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  },
);

type SearchInputOption = {
  icon?: React.ReactNode;
  placeholder?: string;
};
const Combobox = React.forwardRef<
  HTMLDivElement,
  VariantProps<typeof comboboxVariants> & {
    value?: string;
    onChange?: (value: string) => void;
    options: OptionItemType[];
  } & {
    prefixes?: React.ReactNode;
    suffixes?: React.ReactNode;
    disabled?: boolean;
    placeholder?: string;
    triggerClassName?: string;
    contentClassName?: string;
    itemClassName?: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    searchInputOption?: SearchInputOption;
    suffixItemLeft?: React.ReactNode;
    suffixItemRight?: React.ReactNode;
    searchable?: boolean;
    customValue?: (value: string, options: OptionItemType[]) => React.ReactNode;
    allowClear?: boolean;
    sideOffset?: number;
    align?: 'end' | 'center' | 'start' | undefined;
    alignOffset?: number;
    contentScroll?: string;
    modalPopover?: boolean;
    customOption?: (option: OptionItemType) => string | React.ReactNode;
    emptyText?: string | React.ReactNode;
    textEmpty?: string | React.ReactNode;
  }
>(
  (
    {
      variant,
      size,
      value = '',
      onChange,
      options,
      prefixes,
      suffixes,
      disabled,
      placeholder = 'Select a item',
      header,
      footer,
      searchInputOption = {
        placeholder: 'Search...',
      },
      triggerClassName = '',
      contentClassName = '',
      itemClassName = '',
      searchable = false,
      customValue,
      allowClear = false,
      sideOffset,
      contentScroll,
      align = 'center',
      alignOffset,
      modalPopover = false,
      customOption,
      emptyText = 'No results found.',
      textEmpty,
      ...props
    },
    _,
  ) => {
    const [open, setOpen] = React.useState(false);
    const [currentValue, setCurrentValue] = React.useState(value);
    const [dataOptions, setDataOptions] = React.useState<OptionItemType[]>(
      options ?? [],
    );
    const [search, setSearch] = React.useState('');
    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      setDataOptions(options);
    }, [options]);

    React.useEffect(() => {
      setCurrentValue(value);
    }, [value]);

    const filteredOptions = React.useMemo(
      () =>
        dataOptions.filter(
          (option) =>
            typeof option.title === 'string' && option.title.includes(search),
        ),
      [search, dataOptions],
    );

    const onClear = (event: React.MouseEvent) => {
      event.stopPropagation();
      setCurrentValue('');
      onChange?.('');
    };

    const text = React.useMemo(() => {
      if (currentValue)
        return dataOptions.find((option) => option.value === currentValue)
          ?.title;

      return '';
    }, [currentValue, dataOptions]);

    const handleOpen = (open: boolean) => {
      if (disabled) return;
      setOpen(open);
      setSearch('');
    };

    const optionItem = (option: OptionItemType) => {
      if (customOption && typeof customOption === 'function') {
        return (
          <CommandItem
            key={option.value}
            value={option.value}
            className={itemClassName}
            onSelect={(currentValue: string) => {
              setCurrentValue(currentValue);
              setOpen(false);
              onChange?.(currentValue);
            }}
          >
            {customOption(option)}
          </CommandItem>
        );
      }

      return (
        <CommandItem
          key={option.value}
          value={option.value}
          className={cn(
            currentValue === option.value &&
              'text-white bg-primary-500 selected',
            itemClassName,
          )}
          onSelect={(currentValue: string) => {
            setCurrentValue(currentValue);
            setOpen(false);
            onChange?.(currentValue);
          }}
        >
          <span className="text-current truncate" title={option.title}>
            {option.title}
          </span>
        </CommandItem>
      );
    };

    const isHasValue = text?.length;

    return (
      <div ref={containerRef} className="relative w-full h-full" {...props}>
        <Popover open={open} onOpenChange={handleOpen} modal={modalPopover}>
          <PopoverTrigger asChild>
            <button
              role="combobox"
              aria-expanded={open}
              disabled={disabled}
              className={cn(
                comboboxVariants({ variant, size }),
                {
                  'bg-gray-50 hover:bg-gray-50 hover:ring-0 active:ring-0':
                    disabled,
                },
                triggerClassName,
                currentValue && 'text-gray-800',
              )}
            >
              <div className="flex flex-1 min-w-0 gap-2">
                {prefixes && (
                  <div className="flex gap-2 ">
                    <div className="group-active:text-primary-500 group-disabled:text-gray-400">
                      {prefixes}
                    </div>
                  </div>
                )}
                {isHasValue ? (
                  typeof customValue === 'function' ? (
                    customValue(currentValue, dataOptions)
                  ) : (
                    <span
                      className={cn(
                        'truncate text-sm leading-[21px] text-gray-800',
                      )}
                    >
                      {text}
                    </span>
                  )
                ) : (
                  <span
                    className={cn(
                      'truncate text-sm leading-[21px] text-gray-500',
                    )}
                  >
                    {placeholder}
                  </span>
                )}
              </div>
              <div className="flex flex-row items-center flex-shrink-0 gap-2">
                {allowClear && (
                  <X
                    size={14}
                    className={cn(
                      'flex-shrink-0 text-gray-500 opacity-0',
                      allowClear && isHasValue && 'opacity-100 cursor-pointer',
                    )}
                    onClick={onClear}
                  />
                )}
                {suffixes ? (
                  <div
                    className={cn(
                      'flex-shrink-0 text-gray-500 group-active:text-gray-500 group-disabled:text-gray-400 group-placeholder-shown:text-red-500 group-data-[state=open]:text-gray-500',
                      {
                        'group-data-[state=open]:text-gray-700 text-gray-700':
                          isHasValue,
                      },
                    )}
                  >
                    {suffixes}
                  </div>
                ) : (
                  <CaretUpDown
                    className={cn(
                      'flex-shrink-0 text-gray-500 group-active:text-gray-500 group-disabled:text-gray-400 group-placeholder-shown:text-red-500 group-data-[state=open]:text-gray-500',
                      {
                        'group-data-[state=open]:text-gray-700 text-gray-700':
                          isHasValue,
                      },
                    )}
                    size={18}
                  />
                )}
              </div>
            </button>
          </PopoverTrigger>
          <PopoverContent
            className={`bg-white border border-gray-100 z-[100] mt-1 shadow-c5 w-[var(--radix-popper-anchor-width)] overflow-auto pointer-events-auto ${contentClassName}`}
            sideOffset={sideOffset ?? -50}
            align={align}
            alignOffset={alignOffset ?? 0}
            onEscapeKeyDown={() => setOpen(false)}
          >
            <Command className="gap-2 overflow-y-auto" shouldFilter={false}>
              {searchable && (
                <>
                  <div className="flex flex-col gap-3">
                    {header && <div>{header}</div>}
                    <CommandInput
                      value={search}
                      onValueChange={setSearch}
                      icon={searchInputOption?.icon}
                      placeholder={searchInputOption?.placeholder}
                    />
                  </div>
                  <CommandEmpty>{emptyText}</CommandEmpty>
                </>
              )}
              {dataOptions.length > 0 ? (
                filteredOptions.length > 0 && (
                  <div
                    ref={(ref) => {
                      const elem = ref;
                      if (elem) {
                        const item = elem.querySelector(
                          `[data-value="${currentValue}"]`,
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
                    <CommandGroup>
                      {filteredOptions.map((option) => optionItem(option))}
                    </CommandGroup>
                  </div>
                )
              ) : (
                <div className="text-center text-sm leading-[21px] text-gray-400">
                  {textEmpty}
                </div>
              )}
              {footer && (
                <div className="pt-3 border-t border-t-gray-200">{footer}</div>
              )}
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
);
Combobox.displayName = 'Combobox';

export { Combobox };
