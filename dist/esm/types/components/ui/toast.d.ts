import React from 'react';
import { Toaster as Sonner, type ExternalToast } from 'sonner';
type ToasterProps = React.ComponentProps<typeof Sonner>;
declare const Toaster: ({ ...props }: ToasterProps) => import("react/jsx-runtime").JSX.Element;
export type NotificationType = 'success' | 'error' | 'warning' | 'info';
interface NotificationProps {
    type: NotificationType;
    options?: ExternalToast;
    title: string | React.ReactNode;
    description?: string | React.ReactNode;
    iconClose?: boolean;
    isShowIcon?: boolean;
    className?: string;
    loading?: React.ReactNode;
    classNameContent?: string;
    classNameTitleBox?: string;
}
declare const toast: React.FC<NotificationProps>;
export { Toaster, toast };
