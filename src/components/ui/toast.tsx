import { Check, Info, Warning, WarningCircle, X } from '@phosphor-icons/react';
import React from 'react';
import {
  Toaster as Sonner,
  toast as sonnerToast,
  type ExternalToast,
} from 'sonner';
import { Button } from './button';
import { cn } from '../../lib';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      {...props}
      className={cn(
        'max-w-full !w-auto !min-h-[56px] !h-auto whitespace-nowrap',
        props.className,
      )}
      toastOptions={{
        classNames: {
          toast: clsx(
            'flex items-center justify-center w-auto whitespace-nowrap',
            'data-[x-position=right]:right-0',
            'data-[x-position=left]:left-0',
            'data-[x-position=center]:left-1/2 data-[x-position=center]:right-1/2',
            props.toastOptions?.classNames?.toast,
          ),
          ...props.toastOptions?.classNames,
        },
        style: {
          '--mobile-offset-left': '0',
          '--mobile-offset-right': '0',
          ...props.toastOptions?.style,
        } as React.CSSProperties,
      }}
    />
  );
};
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

const toastVariants = cva(
  clsx(
    'flex p-3 w-auto h-full items-start gap-3 rounded-lg bg-white shadow-c7',
  ),
  {
    variants: {
      variant: {
        success: clsx('[&>.icon]:bg-green-50 text-green-600'),
        error: clsx('[&>.icon]:bg-red-50 text-red-600'),
        warning: clsx('[&>.icon]:bg-yellow-50 text-yellow-600'),
        info: clsx('[&>.icon]:bg-primary-50 text-primary-600'),
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  },
);

const toast: React.FC<NotificationProps> = ({
  options,
  type,
  title,
  description,
  iconClose = true,
  isShowIcon = true,
  className,
  loading,
  classNameContent,
  classNameTitleBox,
}) => {
  const Iicon = {
    success: <Check size={20} />,
    error: <WarningCircle size={20} />,
    warning: <Warning size={20} />,
    info: <Info size={20} />,
  };
  if (type) {
    sonnerToast.custom(
      (t) => (
        <div
          className={cn(
            toastVariants({ variant: type }),
            { 'items-center': !description },
            className,
          )}
        >
          {isShowIcon &&
            (loading ? (
              loading
            ) : (
              <div className="icon flex w-8 h-8 p-1.5 justify-center items-center flex-shrink-0 rounded-lg">
                {Iicon[type]}
              </div>
            ))}

          <div
            className={cn(
              'flex flex-1 min-w-0 flex-col gap-1',
              classNameContent,
            )}
          >
            <div
              className={cn(
                'flex flex-row gap-3 items-center',
                classNameTitleBox,
              )}
            >
              {typeof title === 'string' ? (
                <div className="flex flex-col gap-1">
                  <span
                    className={cn(
                      'text-sm leading-[21px] not-italic font-semibold',
                      {
                        'font-normal': !description && !isShowIcon,
                      },
                    )}
                  >
                    {title}
                  </span>
                </div>
              ) : (
                title
              )}
              {options?.action &&
                (typeof options.action === 'object' &&
                'onClick' in options.action ? (
                  <Button
                    size="sm"
                    className="flex-shrink-0"
                    onClick={options.action.onClick}
                    style={options.action.actionButtonStyle}
                  >
                    {options.action.label}
                  </Button>
                ) : (
                  options.action
                ))}
            </div>
            {description ? (
              typeof description === 'string' ? (
                <span className="text-gray-700 text-sm leading-[21px] not-italic font-normal">
                  {description}
                </span>
              ) : (
                description
              )
            ) : null}
          </div>
          {iconClose && (
            <Button
              size="sm"
              shape="circle"
              icon
              variant="neutral"
              className="flex-shrink-0 w-6 h-6 p-1 text-gray-800 min-h-6 min-w-6"
              onClick={() => sonnerToast.dismiss(t)}
            >
              <X size={24} />
            </Button>
          )}
        </div>
      ),
      options,
    );
  }
  return null;
};

export { Toaster, toast };
