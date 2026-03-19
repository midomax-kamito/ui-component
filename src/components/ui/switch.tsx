import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cn } from '../../lib';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const VariantSwitch = cva(
  clsx(
    'peer inline-flex shrink-0 cursor-pointer items-center rounded-full',
    'border-2 border-transparent transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-500 data-[state=unchecked]:bg-gray-300',
  ),
  {
    variants: {
      size: {
        sm: 'h-5 w-10',
        md: 'h-6 w-11',
        lg: 'h-7 w-14',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const thumbVariants = cva(
  clsx(
    'pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0',
  ),{
    variants: {
      size: {
        sm: 'h-4 w-4 data-[state=checked]:translate-x-5',
        md: 'h-5 w-5 data-[state=checked]:translate-x-5',
        lg: 'h-6 w-6 data-[state=checked]:translate-x-7',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> &
    VariantProps<typeof VariantSwitch>
>(({ className, size, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(VariantSwitch({ size }), className)}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(thumbVariants({ size }))}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
