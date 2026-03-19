import React from 'react';
import { buttonVariants } from './variants';
import { ButtonProps } from './type';
/**
 * A button means an operation (or a series of operations). Clicking a button will trigger its corresponding business logic.
 */
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants, type ButtonProps };
