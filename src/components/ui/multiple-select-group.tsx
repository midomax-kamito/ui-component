import * as React from 'react';

import { cn } from '../../lib/utils';
import { Command, CommandGroup, CommandInput, CommandItem } from './command';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';
import { MagnifyingGlass, UserPlus, X } from '@phosphor-icons/react';

const comboboxVariants = cva(
  clsx(
    'group rounded-lg px-4 py-2 text-sm leading-[21px] flex items-center gap-2 justify-between text-gray-500 bg-white ',
    'hover:ring-2 hover:ring-primary-300 hover:bg-white active:ring-2 active:ring-primary-300 active:bg-white',
    'data-[state=open]:text-gray-800 data-[state=open]:border-primary-200 relative hover:z-[2]',
    'disabled:cursor-not-allowed disabled:ring-0',
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
        sm: clsx('h-10 min-h-10'),
        md: clsx('h-11 min-h-11'),
        lg: clsx('h-12 min-h-12'),
      },
    },
    defaultVariants: {
      size: 'sm',
      variant: 'default',
    },
  },
);
type OptionItemSelectGroupType = {
  title: string;
  value: string;
  email?: string;
  avatar?: string;
  discription?: React.ReactNode | string;
  prefix?: React.ReactNode | string;
  suffix?: React.ReactNode | string;
  disabled?: boolean;
};
type SearchInputOption = {
  icon?: React.ReactNode;
  placeholderSearch?: string;
};

type DataEmptyType = {
  imageEmpty?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
};

const MultipleSelectGroup = React.forwardRef<
  HTMLDivElement,
  VariantProps<typeof comboboxVariants> & {
    value?: string[];
    onChange?: (value?: string[] | string) => void;
    options: OptionItemSelectGroupType[];
    placeholder?: string;
  } & {
    prefixes?: React.ReactNode;
    suffixes?: React.ReactNode;
    disabled?: boolean;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    searchInputOption?: SearchInputOption;
    suffixItemLeft?: React.ReactNode;
    suffixItemRight?: React.ReactNode;
    customValue?: (
      value: { id: string; email?: string; avatar?: string },
      options: OptionItemSelectGroupType[],
    ) => React.ReactNode;
    type?: string;
    container?: HTMLElement;
    sideOffset?: number;
    alignOffset?: number;
    align?: 'end' | 'center' | 'start' | undefined;
    isSearchable?: boolean;
    modalPopover?: boolean;
    textEmpty?: string;
    dataEmpty?: DataEmptyType;
    searchEmpty: React.ReactNode;
  }
>(
  (
    {
      variant,
      size,
      onChange,
      value = [],
      options,
      disabled,
      placeholder = 'Please select data',
      customValue = () => null,
      header,
      footer,
      searchInputOption = {
        placeholderSearch: 'Search',
        icon: <MagnifyingGlass className="h-4 w-4 shrink-0 opacity-50" />,
      },
      sideOffset = -50,
      align,
      alignOffset,
      isSearchable,
      modalPopover = false,
      textEmpty,
      dataEmpty,
      searchEmpty,
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);
    const [currentValue, setCurrentValue] = React.useState<string[]>(value);
    const [search, setSearch] = React.useState('');
    const containerRef = React.useRef<HTMLDivElement>(null);
    React.useImperativeHandle(
      ref,
      () => containerRef.current as HTMLDivElement,
      [],
    );

    React.useEffect(() => {
      setCurrentValue(value);
    }, [value]);

    const filteredOptions = options.filter(
      (option) =>
        (typeof option.title === 'string' &&
          option.title.toLowerCase().includes(search.toLowerCase())) ||
        (typeof option.email === 'string' &&
          option.email.toLowerCase().includes(search.toLowerCase())),
    );

    const handleSelect = (selectedValue: string) => {
      if (currentValue.includes(selectedValue)) {
        setCurrentValue(currentValue.filter((val) => val !== selectedValue));
        onChange?.(currentValue.filter((val) => val !== selectedValue));
      } else {
        setCurrentValue([...currentValue, selectedValue]);
        onChange?.([...currentValue, selectedValue]);
      }
    };
    const handleRemoveTags = (tagValue: string) => {
      const newSelectedValues = currentValue.includes(tagValue)
        ? currentValue.filter((value) => value !== tagValue)
        : [...currentValue, tagValue];
      setCurrentValue(newSelectedValues);
      onChange?.(newSelectedValues);
    };

    const currentAccountSelect = options
      .filter((item) =>
        (value.length > 0 ? value : currentValue)?.includes(item?.value),
      )
      .map((r) => r);

    return (
      <div ref={containerRef} className="h-full w-full relative">
        <Popover open={open} onOpenChange={setOpen} modal={modalPopover}>
          <PopoverTrigger asChild>
            <button
              role="combobox"
              aria-expanded={open}
              disabled={disabled}
              className={cn(
                comboboxVariants({ variant, size }),
                currentValue.length > 0 && 'text-gray-800',
                'w-full h-auto bg-gray-100 hover:bg-gray-200 hover:ring-0 transition-all duration-300 border-none',
                {
                  'bg-gray-50 hover:bg-gray-50 hover:ring-0 active:ring-0 active:bg-gray-50':
                    disabled,
                },
              )}
              onClick={() => setOpen((prev) => !prev)}
            >
              <div className="flex gap-2 w-full">
                <div className="flex items-center gap-2 flex-wrap w-full">
                  <div className="flex justify-center items-center w-full space-x-2">
                    <UserPlus
                      className="text-primary-500"
                      weight="regular"
                      size={20}
                    />
                    <span className="text-primary-500 text-sm font-medium">
                      {placeholder}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </PopoverTrigger>
          <PopoverContent
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset ?? 0}
            className="bg-white border border-gray-100 shadow-c5 w-[var(--radix-popper-anchor-width)]"
            onEscapeKeyDown={() => setOpen(false)}
          >
            <Command className="gap-2" shouldFilter={false}>
              {isSearchable && (
                <div className="flex flex-col gap-3 pt-1 px-1">
                  {header && <div>{header}</div>}
                  <CommandInput
                    value={search}
                    onValueChange={setSearch}
                    icon={searchInputOption?.icon}
                    placeholder={searchInputOption?.placeholderSearch}
                    classNameCustom="hover:ring-2 hover:ring-primary-300 transition-all duration-300 ease-in"
                  />
                </div>
              )}
              {options.length > 0 ? (
                filteredOptions.length > 0 ? (
                  <div className="max-h-64 h-auto overflow-y-auto">
                    <CommandGroup>
                      {filteredOptions.map((option) => (
                        <CommandItem
                          key={option.value}
                          value={option.value}
                          className={cn(
                            currentValue.includes(option.value) && 'selected',
                            'gap-2 hover:bg-gray-100 flex p-2',
                          )}
                          onSelect={() => handleSelect(option.value)}
                        >
                          {customValue(
                            {
                              id: option.value,
                              email: option.email,
                              avatar: option.avatar,
                            },
                            options,
                          )}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </div>
                ) : (
                  searchEmpty
                )
              ) : (
                <div className="text-center text-sm leading-[21px] text-gray-400">
                  {textEmpty}
                </div>
              )}
              {footer && (
                <div className="border-t border-t-gray-200 pt-3">{footer}</div>
              )}
            </Command>
          </PopoverContent>
        </Popover>
        {currentAccountSelect.length > 0 ? (
          <div className="h-[320px] max-h-[325px] overflow-auto border border-gray-200 rounded-xl mt-4">
            {currentAccountSelect.map((item) => {
              return (
                <div
                  className="flex flex-row gap-3 w-full items-center border-b border-gray-200 py-2 px-3"
                  key={item.value}
                >
                  <img
                    src={item?.avatar}
                    alt="avatar"
                    width={26}
                    height={26}
                    className="rounded-full flex-shrink-0"
                  />
                  <div className="flex flex-col flex-1 w-4/5">
                    <span
                      className="line-clamp-1 text-sm text-gray-700"
                      title={item?.title}
                    >
                      {item?.title}
                    </span>
                    <span
                      className="line-clamp-1 text-xs text-gray-700 block text-ellipsis"
                      title={item?.email}
                    >
                      {item.email}
                    </span>
                  </div>

                  <button
                    className="bg-gray-100 w-7 h-7 text-gray-700 rounded-[30px] p-1 hover:bg-gray-100"
                    onClick={() => {
                      handleRemoveTags(item.value);
                    }}
                    type="button"
                  >
                    <X
                      name="X"
                      className="text-current hover:text-red-500"
                      size={20}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex border-dashed border-2 border-gray-300 rounded-xl p-5 gap-3 text-center items-center mt-4 h-[320px] max-h-[325px]">
            <div className="flex flex-col gap-3 items-center">
              <img
                width={120}
                height={120}
                src={dataEmpty?.imageEmpty}
                alt="Nhóm tài khoản"
              />
              <div className="flex flex-col items-center">
                <div className="text-base items-center text-gray-700 font-medium">
                  {dataEmpty?.title}
                </div>
                <p className="text-gray-500 text-xs">
                  {dataEmpty?.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  },
);

MultipleSelectGroup.displayName = 'MultipleSelectGroup';

export { MultipleSelectGroup, type OptionItemSelectGroupType };
