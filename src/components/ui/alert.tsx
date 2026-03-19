import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import clsx from 'clsx';
import { Button } from './button';
import { X } from '@phosphor-icons/react';
import { cn } from '../../lib';

const alertVariants = cva(
  'relative rounded-lg border p-3 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-gray-800',
  {
    variants: {
      variant: {
        primary: clsx('bg-primary-500/[0.1]', 'border-primary-400'),
        warning: clsx('bg-yellow-500/[0.1]', 'border-yellow-400'),
        danger: clsx('bg-red-500/[0.1]', 'border-red-400'),
        success: clsx('bg-green-500/[0.1]', 'border-green-400'),
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

type AlertProps = {
  title?: string;
  children?: React.ReactNode;
  icon?: JSX.Element;
  iconClose?: boolean;
  handleClose?: () => void;
  isVisible?: boolean;
  setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Alert = React.forwardRef<
  HTMLDivElement,
  Omit<
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>,
    'title' | 'children' | 'iconClose'
  > &
    AlertProps
>(({ title, children, icon, className, handleClose, isVisible, setIsVisible, variant, iconClose, ...props }, ref) => {

  return (
    <>
      {isVisible && (
          <div
            ref={ref}
            role="alert"
            className={cn(
              alertVariants({ variant }),
              { 'p-4': title },
              className,
            )}
            {...props}
          >
            <div className="flex justify-between gap-3">
              {title ? (
                <>
                  <div
                    className={`flex gap-3 ${alertTitleVariants({ variant })}`}
                  >
                    {icon}
                    <h5>{title}</h5>
                  </div>
                  <div className="flex items-center mt-1.5">
                    <AlertDescription variant={variant}>
                      {children}
                    </AlertDescription>
                  </div>
                </>
              ) : (
                <div className="flex items-center">
                  <AlertDescription variant={variant}>
                    {children}
                  </AlertDescription>
                </div>
              )}
              {iconClose && (
                <Button
                  size="sm"
                  shape="circle"
                  icon
                  variant="neutral"
                  className="h-6 w-6 min-h-6 min-w-6 p-1"
                  onClick={handleClose}
                >
                  <X className="text-gray-800" />
                </Button>
              )}
            </div>
          </div>
      )}
    </>
  );
});
Alert.displayName = 'Alert';

const alertTitleVariants = cva('font-medium leading-none tracking-tight', {
  variants: {
    variant: {
      primary: clsx('text-primary-700'),
      warning: clsx('text-yellow-700'),
      danger: clsx('text-red-700'),
      success: clsx('text-green-700'),
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
const alertDescriptionVariants = cva(
  'text-sm leading-[21px] [&_p]:leading-relaxed',
  {
    variants: {
      variant: {
        primary: clsx('text-primary-700'),
        warning: clsx('text-yellow-700'),
        danger: clsx('text-red-700'),
        success: clsx('text-green-700'),
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);
const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof alertDescriptionVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(alertDescriptionVariants({ variant }), className)}
    {...props}
  />
));

AlertDescription.displayName = 'AlertDescription';
Alert.displayName = 'Alert';
export { Alert };
