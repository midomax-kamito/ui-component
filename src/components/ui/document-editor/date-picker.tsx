import { PickerRef } from 'rc-picker/lib/interface';
import React from 'react';

import '../date-picker/styles.css';
import { cn } from '../../../lib';
import { IDatePicker } from '../date-picker';
import { IDatePickerProp } from '../date-picker/DatePicker';

const DatePicker = React.forwardRef<PickerRef, IDatePickerProp>(
  (
    {
      className,
      dropdownClassName,
      picker = 'date',
      placeholder = 'Chọn thời gian...',
      format = 'DD/MM/YYYY',
      disabled,
      readOnly,
      suffixIcon,
      ...props
    },
    ref,
  ) => {
    const pickerRef = React.useRef(null);
    React.useImperativeHandle(ref, () => pickerRef.current! as PickerRef, []);

    return (
      <IDatePicker
        ref={pickerRef}
        placeholder={placeholder}
        format={format}
        picker={picker}
        suffixIcon={suffixIcon}
        className={cn(
          'relative w-full min-h-[36px] shadow-none border-none',
          'group rounded-lg p-2 text-sm flex items-center gap-2 justify-between text-gray-500 bg-white',
          'hover:bg-gray-100 hover:ring-0 active:bg-gray-100 [&.rc-picker-focused]:border-0 [&.rc-picker-focused]:bg-gray-100',
          'focus-visible:rounded-none focus-visible:border-0 focus-visible:border-none focus-visible:outline-none',
          'transition-all duration-300 ease-in',
          '[&_.rc-picker-input]:h-full [&_.rc-picker-input]:min-w-[150px] [&_.rc-picker-input]:gap-2',
          '[&_.rc-picker-clear]:relative [&_.rc-picker-clear]:right-0 [&_.rc-picker-clear]:order-2 [&_.rc-picker-clear]:flex [&_.rc-picker-clear]:items-center',
          '[&_.rc-picker-suffix]:flex [&_.rc-picker-suffix]:order-3 [&_.rc-picker-suffix]:items-center [&_.rc-picker-suffix]:justify-center [&_.rc-picker-suffix]:bg-inherit',
          '[&_input]:bg-inherit [&_input]:placeholder:text-gray-500 [&_input]:placeholder:text-sm [&_input]:outline-none [&_input]:text-gray-800 [&_input]:min-w-[100px]',
          {
            '[&.rc-picker-disabled]:bg-gray-100 [&.rc-picker-disabled]:hover:ring-0 [&.rc-picker-disabled]:cursor-not-allowed [&.rc-picker-disabled_input]:bg-inherit [&.rc-picker-disabled_input]:opacity-50 [&.rc-picker-disabled_.rc-picker-suffix]:opacity-50':
              Boolean(disabled),
          },
          {
            '[&.rc-picker-disabled]:bg-white [&.rc-picker-disabled]:hover:ring-0 [&.rc-picker-disabled]:cursor-default [&.rc-picker-disabled_input]:bg-inherit [&.rc-picker-disabled_input]:opacity-100 [&.rc-picker-disabled_.rc-picker-suffix]:opacity-100':
              Boolean(readOnly),
          },
          className,
        )}
        dropdownClassName={dropdownClassName}
        disabled={disabled || readOnly}
        {...props}
      />
    );
  },
);

DatePicker.displayName = 'DatePicker';

export { DatePicker };
