import dayjs, { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import enUS from 'rc-picker/lib/locale/en_US';
import 'rc-picker/assets/index.css';
import { cn } from '../../../lib';
import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretRight,
  CaretUpDown,
  X,
} from '@phosphor-icons/react';
import { CaretLeft } from '@phosphor-icons/react/dist/ssr';
import { Locale, PickerRef } from 'rc-picker/lib/interface';
import React, { forwardRef, useState } from 'react';
import Picker, { PickerProps } from 'rc-picker';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import './styles.css';

const iDatePickerVariants = cva(
  clsx(
    'relative w-full shadow-none',
    'group rounded-lg px-4 py-2 text-sm flex items-center gap-2 justify-between text-gray-500 bg-white ',
    'hover:ring-2 hover:ring-primary-300 hover:bg-white',
    'active:ring-2 active:ring-primary-300 active:bg-white',
    'focus-visible:rounded-none focus-visible:border-0 focus-visible:border-none focus-visible:outline-none',
    'transition-[box-shadow] duration-300 ease-in',
    '[&_.rc-picker-input]:h-full [&_.rc-picker-input]:min-w-[150px] [&_.rc-picker-input]:gap-2',
    '[&_.rc-picker-clear]:relative [&_.rc-picker-clear]:right-0 [&_.rc-picker-clear]:order-2 [&_.rc-picker-clear]:flex [&_.rc-picker-clear]:items-center',
    '[&_.rc-picker-suffix]:flex [&_.rc-picker-suffix]:order-3 [&_.rc-picker-suffix]:items-center [&_.rc-picker-suffix]:justify-center [&_.rc-picker-suffix]:bg-inherit',
    '[&_input]:placeholder:text-gray-500 [&_input]:outline-none [&_input]:text-gray-800 [&_input]:min-w-[100px]',
  ),
  {
    variants: {
      size: {
        sm: clsx(
          'h-10 min-h-10 [&_input]:placeholder:text-sm [&_input]:text-sm [&_input]:leading-[21px]',
        ),
        md: clsx(
          'h-11 min-h-11 [&_input]:placeholder:text-sm [&_input]:text-sm [&_input]:leading-[21px]',
        ),
        lg: clsx(
          'h-12 min-h-12 [&_input]:placeholder:text-base [&_input]:text-base [&_input]:leading-6',
        ),
      },
      variant: {
        default: clsx(
          'border border-gray-200 [&_.rc-picker.rc-picker-focused]:border-primary-200',
        ),
        success: clsx('border border-green-500'),
        error: clsx(
          'border border-red-500 hover:ring-0 active:ring-0 data-[state=open]:border-red-500',
        ),
      },
    },
    defaultVariants: {
      size: 'sm',
      variant: 'default',
    },
  },
);

const dropDownVariant = cva(
  clsx(
    'shadow-md border border-gray-100 rounded-lg overflow-hidden',
    '[&_.rc-picker-panel]:bg-white [&_.rc-picker-panel]:min-w-[274px] [&_.rc-picker-panel]:border-none [&_.rc-picker-panel]:outline-none',
    '[&_.rc-picker-date-panel]:px-2 [&_.rc-picker-date-panel]:py-0 [&_.rc-picker-time-panel]:border-l-gray-200',
    '[&_.rc-picker-content]:w-full [&_.rc-picker-content]:max-h-[250px]',
    '[&_.rc-picker-header]:p-2 [&_.rc-picker-header]:h-10 [&_.rc-picker-header]:flex-shink-0 [&_.rc-picker-header]:items-center [&_.rc-picker-header]:gap-2',
    '[&_.rc-picker-header-view]:flex [&_.rc-picker-header-view]:items-center [&_.rc-picker-header-view]:justify-center',
    '[&_.rc-picker-header-view]:text-primary-500 [&_.rc-picker-header-view]:text-sm [&_.rc-picker-header-view]:leading-[21px] [&_.rc-picker-header-view]:font-semibold',
    '[&_.rc-picker-month-btn]:mr-1',
    '[&_th]:min-h-[34px] [&_th]:min-w-[36px] [&_th]:px-1 [&_th]:py-2 [&_th]:text-gray-700 [&_th]:text-xs [&_th]:font-semibold',
    '[&_.rc-picker-cell]:min-h-[34px] [&_.rc-picker-cell]:min-w-[36px] [&_.rc-picker-cell]:items-center',
    '[&_.rc-picker-cell-inner]:h-auto [&_.rc-picker-cell-inner]:w-auto [&_.rc-picker-cell-inner]:flex [&_.rc-picker-cell-inner]:items-center [&_.rc-picker-cell-inner]:justify-center',
    '[&_.rc-picker-cell-in-view_.rc-picker-cell-inner]:text-gray-700',
    '[&_.rc-picker-cell-inner]:text-xs [&_.rc-picker-cell-inner]:leading-[18px] [&_.rc-picker-cell-inner]:font-medium [&_.rc-picker-cell-inner]:px-1.5 [&_.rc-picker-cell-inner]:py-2',
    '[&_.rc-picker-cell-disabled_.rc-picker-cell-inner]:cursor-not-allowed',
    '[&_.rc-picker-footer]:p-[8px_16px] [&_.rc-picker-footer]:border-t [&_.rc-picker-footer]:border-gray-200 [&_.rc-picker-footer]:bg-white',
    '[&_.rc-picker-now-btn]:text-sm [&_.rc-picker-now-btn]:cursor-pointer [&_.rc-picker-now-btn]:text-primary-500 [&_.rc-picker-now-btn]:font-semibold',
    '[&_.rc-picker-ok_button]:text-sm [&_.rc-picker-ok_button]:text-primary-500 [&_.rc-picker-ok_button]:font-semibold',
  ),
);

type PickerExtend = PickerProps<Dayjs> & React.RefAttributes<PickerRef>;

type IDatePickerProp = VariantProps<typeof iDatePickerVariants> &
  Omit<PickerExtend, 'locale' | 'generateConfig' | 'value'> & {
    dropdownClassName?: string;
    readOnly?: boolean;
    localeConfig?: Partial<Locale>;
    value?: Dayjs | string | undefined;
    suffixIcon?: boolean;
  };

const IDatePicker = forwardRef(
  (
    {
      className,
      dropdownClassName,
      picker = 'date',
      allowClear = {
        clearIcon: <X size={14} className="flex-shrink-0" />,
      },
      onChange: onChangeValue,
      value,
      size,
      variant,
      disabledDate,
      getPopupContainer,
      placeholder = 'Chọn thời gian...',
      disabled,
      readOnly,
      localeConfig,
      format = 'DD/MM/YYYY',
      suffixIcon = true,
      ...props
    }: IDatePickerProp,
    ref,
  ) => {
    const pickerRef = React.useRef(null);
    React.useImperativeHandle(ref, () => pickerRef.current! as PickerRef, []);
    const [_value, setValue] = useState<Dayjs | string | undefined>(value);
    const localeObject: Locale = {
      ...enUS,
      ...(localeConfig ?? {}),
    };

    const onChange = (
      newValue: Dayjs | Dayjs[] | null,
      newString: string | string[],
    ) => {
      if (Array.isArray(newValue)) {
        setValue(newValue[0]!);
        if (onChangeValue) {
          onChangeValue?.(newValue[0]!, newString as string);
        }
      } else {
        setValue(newValue!);
        if (onChangeValue) {
          onChangeValue?.(newValue!, newString as string);
        }
      }
    };

    return (
      <Picker<Dayjs>
        ref={pickerRef}
        value={_value ? dayjs(_value) : undefined}
        onChange={onChange}
        generateConfig={dayjsGenerateConfig}
        locale={localeObject}
        placeholder={placeholder}
        format={format}
        picker={picker}
        classNames={{
          popup: cn(
            dropDownVariant(),
            {
              '[&_.rc-picker-ranges]:flex [&_.rc-picker-ranges]:justify-center':
                props.showNow,
            },
            dropdownClassName,
          ),
        }}
        className={cn(
          iDatePickerVariants({ size, variant }),
          {
            '[&.rc-picker-disabled]:bg-gray-100 [&.rc-picker-disabled]:hover:ring-0 [&.rc-picker-disabled]:cursor-not-allowed [&.rc-picker-disabled_input]:bg-inherit [&.rc-picker-disabled_input]:opacity-50 [&.rc-picker-disabled_.rc-picker-suffix]:opacity-50':
              Boolean(disabled),
          },
          {
            '[&.rc-picker-disabled]:bg-white [&.rc-picker-disabled]:hover:ring-0 [&.rc-picker-disabled]:cursor-default [&.rc-picker-disabled_input]:bg-white [&.rc-picker-disabled_input]:opacity-100 [&.rc-picker-disabled_.rc-picker-suffix]:opacity-100':
              Boolean(readOnly),
          },
          className,
        )}
        suffixIcon={
          suffixIcon && (
            <CaretUpDown
              className={cn(
                'flex-shrink-0 text-gray-500 group-active:text-gray-500 group-disabled:text-gray-400 group-placeholder-shown:text-red-500',
                { 'text-gray-700': Boolean(_value) },
              )}
              size={18}
            />
          )
        }
        superPrevIcon={
          <CaretDoubleLeft
            size={16}
            className="text-current flex-shrink-0"
            weight="regular"
          />
        }
        superNextIcon={
          <CaretDoubleRight
            size={16}
            className="text-current flex-shrink-0"
            weight="regular"
          />
        }
        prevIcon={
          <CaretLeft
            size={16}
            className="text-current flex-shrink-0"
            weight="regular"
          />
        }
        nextIcon={
          <CaretRight
            size={16}
            className="text-current flex-shrink-0"
            weight="regular"
          />
        }
        disabled={disabled || readOnly}
        allowClear={allowClear}
        inputReadOnly={true}
        disabledDate={disabledDate}
        getPopupContainer={getPopupContainer}
        popupAlign={props.popupAlign ?? { offset: [0, -50] }}
        {...props}
      />
    );
  },
);

IDatePicker.displayName = 'IDatePicker';

export { IDatePicker, type IDatePickerProp };
