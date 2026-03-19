import { type VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';
import * as React from 'react';
import { cn } from '../../lib';

const spinnerVariants = cva(
  clsx('flex flex-shrink-0 animate-spinerCircle rounded-full'),
  {
    variants: {
      variant: {
        primary: clsx('border-4 border-gray-200 border-t-primary-500 '),
        secondary: clsx('border-4 border-white border-t-primary-500'),
      },
      size: {
        xs: 'w-[18px] h-[18px]',
        sm: 'w-7 h-7',
        md: 'w-12 h-12 ',
        l: 'w-[68px] h-[68px]',
        lg: 'w-[100px] h-[100px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <div
        className={cn(spinnerVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Spinner.displayName = 'Spinner';

export { Spinner, spinnerVariants };
