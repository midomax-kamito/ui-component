import React from 'react';

import { buttonVariants } from './variants';
import { ButtonProps } from './type';
import { cn } from '../../../lib';

/**
 * A button means an operation (or a series of operations). Clicking a button will trigger its corresponding business logic.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      shape,
      icon,
      outline,
      children,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    return (
      <button
        {...props}
        className={cn(
          buttonVariants({
            variant,
            size,
            shape,
            icon,
            outline,
          }),
          className,
        )}
        type={type || 'button'}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants, type ButtonProps };
