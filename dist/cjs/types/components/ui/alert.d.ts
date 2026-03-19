import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
type AlertProps = {
    title?: string;
    children?: React.ReactNode;
    icon?: JSX.Element;
    iconClose?: boolean;
    handleClose?: () => void;
    isVisible?: boolean;
    setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>;
};
declare const Alert: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "success" | "primary" | "warning" | "danger" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string>, "children" | "title" | "iconClose"> & AlertProps & React.RefAttributes<HTMLDivElement>>;
export { Alert };
