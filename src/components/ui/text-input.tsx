import * as React from 'react';

import { VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';
import { X } from '@phosphor-icons/react';
import { cn } from '../../lib';

const inputVariants = cva(
  clsx(
    'group flex items-center gap-2 w-full rounded-lg transition-all duration-300 ease-in ',
  ),
  {
    variants: {
      variant: {
        default: clsx(
          'default bg-white text-gray-800 border border-gray-200 hover:ring-2 hover:ring-primary-300 hover:bg-white active:ring-2 active:ring-primary-300 active:bg-white',
        ),
        success: clsx('success border border-green-500'),
        error: clsx('error border border-red-500'),
      },
      size: {
        sm: clsx('h-10 text-sm leading-[21px]'),
        md: clsx('h-11 text-sm leading-[21px]'),
        lg: clsx('h-12 text-base leading-6'),
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);
interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>,
    // dung momit định dạng lại type input
    VariantProps<typeof inputVariants> {
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  placeholder?: string;
  onPressEnter?: () => void;
  onSubmitValue?: (value: string) => void;
  clearable?: boolean;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      variant,
      size,
      suffix,
      prefix,
      clearable = true,
      placeholder = 'Input',
      onPressEnter,
      onSubmitValue,
      ...props
    },
    ref,
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => inputRef.current!, []);

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onPressEnter) {
        onPressEnter();
      }
    };
    const clearInput = () => {
      if (inputRef.current) {
        inputRef.current.value = '';
        inputRef.current.focus();
        if (onSubmitValue) onSubmitValue('');
      }
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onSubmitValue) onSubmitValue(event.target.value || '');
    };
    return (
      <div
        className={cn(
          inputVariants({ variant, size }),
          type === 'search' ? 'px-3' : 'px-4',
          {
            'bg-gray-50 hover:bg-gray-50 hover:ring-0 active:ring-0 cursor-not-allowed':
              props.disabled,
          },
          className,
        )}
      >
        <input
          type={type === 'search' ? 'text' : type}
          className="w-full h-full inline-block bg-transparent outline-none peer placeholder:text-gray-500 disabled:placeholder:text-gray-400 text-gray-800 focus:text-gray-800 disabled:text-gray-400 disabled:!ring-0 disabled:ring-transparent disabled:focus:ring-0 disabled:hover:!ring-0"
          placeholder={placeholder}
          onKeyPress={handleKeyPress}
          ref={inputRef}
          onChange={handleOnChange}
          {...props}
        />
        {prefix && (
          <div
            className={clsx(
              'flex flex-none -order-1 text-gray-500 peer-hover:text-gray-500 peer-[:not(:placeholder-shown)]:text-gray-800',
              { '!text-gray-400': props.disabled },
            )}
          >
            {prefix}
          </div>
        )}
        {clearable && (
          <span
            onClick={clearInput}
            className="visible opacity-100 peer-placeholder-shown:invisible peer-placeholder-shown:opacity-0 peer-disabled-[not(:placeholder-shown)]:invisible peer-disabled-[not(:placeholder-shown)]:opacity-0"
          >
            <X className="text-gray-500 cursor-pointer" size={14} />
          </span>
        )}
        {suffix && (
          <div
            className={clsx(
              'flex flex-none peer-hover:text-gray-500 peer-[:placeholder-shown]:hidden peer-disabled-[not(:placeholder-shown)]:hidden',
              { '!text-gray-400': props.disabled },
            )}
          >
            {suffix}
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input, inputVariants, type InputProps };
