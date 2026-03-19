import React, { forwardRef, PropsWithChildren } from 'react';
import { cn } from '../../../lib';

export const WrapperEditor = forwardRef(
  (
    {
      children,
      className,
      noStyte,
      isError,
      disabled,
      readOnly,
      ...props
    }: PropsWithChildren<{
      className?: string;
      noStyte?: boolean;
      isError?: boolean;
      disabled?: boolean;
      readOnly?: boolean;
    }>,
    ref,
  ) => {
    const innerRef = React.useRef<HTMLDivElement | null>(null);
    React.useImperativeHandle(ref, () => innerRef.current!, []);
    const styleClass = noStyte
      ? []
      : [
          'border py-[6px] px-2 rounded-lg border-transparent bg-white',
          'hover:bg-gray-100',
          'focus-within:ring-2 focus-within:ring-primary-200',
          'focus-within:hover:bg-white',
          'transition-all duration-300 ease-in-out',
          { 'border-red-500 focus-within:ring-0': isError },
        ];
    return (
      <div
        ref={innerRef}
        className={cn(
          'min-h-[36px] min-w-[150px] w-full flex flex-row items-center gap-2',
          ...styleClass,
          { 'ring-0 opacity-50 hover:bg-transparent': Boolean(disabled) },
          { 'ring-0 opacity-100 hover:bg-transparent focus-within:ring-0': Boolean(readOnly) },
          { 'border-transparent': noStyte },
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

WrapperEditor.displayName = 'WrapperEditor';
