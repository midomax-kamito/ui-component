import * as React from 'react';

import { cn } from '../../lib/utils';
import {
  Command,
  // CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from './command';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';
import { CaretUpDown, Check, MagnifyingGlass, X } from '@phosphor-icons/react';
import { Badge, BadgeProps } from './badge';

const comboboxVariants = cva(
  clsx(
    'group w-full rounded-lg px-4 py-2 text-sm leading-[21px] flex items-center gap-2 justify-between text-gray-500 bg-white ',
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
type OptionItemType = {
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
const MultipleSelect = React.forwardRef<
  HTMLDivElement,
  VariantProps<typeof comboboxVariants> & {
    value?: string[];
    onChange?: (value?: string[] | string) => void;
    options: OptionItemType[];
    maxTagCount?: number;
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
    type?: string;
    container?: HTMLElement;
    sideOffset?: number;
    alignOffset?: number;
    align?: 'end' | 'center' | 'start' | undefined;
    isSearchable?: boolean;
    modalPopover?: boolean;
    badgePropsItem?: BadgeProps;
    textEmpty?: string | React.ReactNode;
    customValue?: (
      value: string[],
      options: OptionItemType[],
      handleRemove: (value: string) => void,
    ) => React.ReactNode;
    contentClassName?: string;
    triggerClassName?: string;
    itemClassName?: string;
  }
>(
  (
    {
      variant,
      size,
      onChange,
      value = [],
      options,
      prefixes,
      suffixes,
      disabled,
      placeholder = 'Please select data',
      header,
      footer,
      searchInputOption = {
        placeholderSearch: 'Search',
        icon: <MagnifyingGlass className="w-4 h-4 opacity-50 shrink-0" />,
      },
      maxTagCount = Infinity,
      sideOffset = -50,
      align,
      alignOffset,
      isSearchable,
      modalPopover = false,
      badgePropsItem,
      textEmpty,
      customValue,
      contentClassName,
      triggerClassName,
      itemClassName,
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);
    const [currentValue, setCurrentValue] = React.useState<string[]>(value);
    const [search, setSearch] = React.useState('');
    const [dataOptions, setDataOptions] = React.useState<OptionItemType[]>(
      options ?? [],
    );
    const containerRef = React.useRef<HTMLDivElement>(null);
    React.useImperativeHandle(
      ref,
      () => containerRef.current as HTMLDivElement,
      [],
    );

    React.useEffect(() => {
      setDataOptions(options);
    }, [JSON.stringify(options)]);

    React.useEffect(() => {
      setCurrentValue(value);
    }, [JSON.stringify(value)]);

    const filteredOptions = React.useMemo(
      () =>
        dataOptions.filter(
          (option) =>
            typeof option.title === 'string' && option.title.includes(search),
        ),
      [search, dataOptions],
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

    const hasOptionSelected = React.useMemo(() => {
      return dataOptions.some((option) => currentValue.includes(option.value));
    }, [currentValue, dataOptions]);

    const valueValid = React.useMemo(() => {
      return currentValue.filter((option) =>
        dataOptions.find((o) => o.value === option),
      );
    }, [currentValue, dataOptions]);

    const isHasValue = React.useMemo(() => {
      return valueValid.length > 0 && hasOptionSelected;
    }, [valueValid, hasOptionSelected]);

    return (
      <div ref={containerRef} className="relative w-full h-full">
        <Popover open={open} onOpenChange={setOpen} modal={modalPopover}>
          <PopoverTrigger asChild>
            <button
              role="combobox"
              aria-expanded={open}
              disabled={disabled}
              className={cn(
                comboboxVariants({ variant, size }),
                currentValue.length > 0 && 'text-gray-800',
                {
                  'bg-gray-50 hover:bg-gray-50 hover:ring-0 active:ring-0 active:bg-gray-50':
                    disabled,
                },
                triggerClassName,
              )}
              onClick={() => setOpen((prev) => !prev)}
            >
              <div className="flex flex-1 min-w-0 gap-2">
                {prefixes && (
                  <div className="flex gap-2 ">
                    <div className="group-active:text-primary-500 group-disabled:text-gray-400">
                      {prefixes}
                    </div>
                  </div>
                )}
                <div className="flex flex-wrap items-center gap-2">
                  {customValue && typeof customValue === 'function' ? (
                    <span className="flex gap-2 text-sm text-gray-500">
                      {isHasValue ? (
                        valueValid.length <= maxTagCount ? (
                          customValue(valueValid, dataOptions, handleRemoveTags)
                        ) : (
                          <>
                            {valueValid.slice(0, maxTagCount).map((val) => {
                              const currentValueCustom = valueValid.filter(
                                (value) => value === val,
                              );
                              return customValue(
                                currentValueCustom,
                                dataOptions,
                                handleRemoveTags,
                              );
                            })}
                            <Badge
                              {...badgePropsItem}
                              className={cn(
                                'shadow-none flex-shrink-0',
                                badgePropsItem?.className,
                              )}
                            >
                              +{valueValid.length - maxTagCount}
                            </Badge>
                          </>
                        )
                      ) : (
                        placeholder
                      )}
                    </span>
                  ) : isHasValue ? (
                    valueValid.length <= maxTagCount ? (
                      valueValid.map((val) => {
                        const title = dataOptions.find(
                          (option) => option.value === val,
                        )?.title;
                        return title ? (
                          <Badge
                            key={val}
                            {...badgePropsItem}
                            className={cn(
                              'shadow-none max-w-[120px] truncate flex flex-row items-center gap-2',
                              badgePropsItem?.className,
                            )}
                          >
                            <span className="flex-1 min-w-0 truncate">
                              {
                                dataOptions.find(
                                  (option) => option.value === val,
                                )?.title
                              }
                            </span>
                            {!disabled && (
                              <X
                                size={14}
                                className="flex-shrink-0 text-current"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  handleRemoveTags(val);
                                }}
                              />
                            )}
                          </Badge>
                        ) : null;
                      })
                    ) : (
                      <>
                        {valueValid.slice(0, maxTagCount).map((val) => {
                          const title = dataOptions.find(
                            (option) => option.value === val,
                          )?.title;
                          return title ? (
                            <Badge
                              key={val}
                              {...badgePropsItem}
                              className={cn(
                                'shadow-none max-w-[120px] truncate flex flex-row items-center gap-2',
                                badgePropsItem?.className,
                              )}
                            >
                              <span className="flex-1 min-w-0 truncate">
                                {
                                  dataOptions.find(
                                    (option) => option.value === val,
                                  )?.title
                                }
                              </span>
                              {!disabled && (
                                <X
                                  size={14}
                                  className="flex-shrink-0 text-current"
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    handleRemoveTags(val);
                                  }}
                                />
                              )}
                            </Badge>
                          ) : null;
                        })}
                        <Badge
                          {...badgePropsItem}
                          className={cn(
                            'shadow-none',
                            badgePropsItem?.className,
                          )}
                        >
                          +{valueValid.length - maxTagCount}
                        </Badge>
                      </>
                    )
                  ) : (
                    <span className="text-sm text-gray-500">{placeholder}</span>
                  )}
                </div>
              </div>
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
            </button>
          </PopoverTrigger>
          <PopoverContent
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset ?? 0}
            className={cn(
              'bg-white border border-gray-100 shadow-c5 w-[var(--radix-popper-anchor-width)]',
              contentClassName,
            )}
            onEscapeKeyDown={() => setOpen(false)}
          >
            <Command className="gap-2" shouldFilter={false}>
              {isSearchable && (
                <div className="flex flex-col gap-3">
                  {header && <div>{header}</div>}
                  <CommandInput
                    value={search}
                    onValueChange={setSearch}
                    icon={searchInputOption?.icon}
                    placeholder={searchInputOption?.placeholderSearch}
                  />
                </div>
              )}
              {dataOptions.length > 0 ? (
                filteredOptions.length > 0 && (
                  <div className="h-auto overflow-y-auto max-h-64">
                    <CommandGroup>
                      {filteredOptions.map((option) => (
                        <CommandItem
                          key={option.value}
                          value={option.value}
                          disabled={option.disabled}
                          className={cn(
                            valueValid.includes(option.value) && 'selected',
                            'gap-3 hover:bg-gray-100 cursor-pointer',
                            itemClassName,
                          )}
                          onSelect={() => handleSelect(option.value)}
                        >
                          <div
                            className={cn(
                              'w-5 h-5 shrink-0 bg-gray-100 border border-gray-200 rounded group-hover:border-primary-200 flex items-center justify-center',
                              'group-[&.selected]:bg-primary-500 group-[&.selected]:border-primary-500',
                            )}
                          >
                            <Check
                              className="hidden group-[&.selected]:block group-[&.selected]:text-white"
                              size={20}
                            />
                          </div>
                          <span
                            className="text-sm text-gray-700"
                            title={option.title}
                          >
                            {option.title}
                          </span>
                        </CommandItem>
                      ))}
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

MultipleSelect.displayName = 'MultipleSelect';

export { MultipleSelect, type OptionItemType };
