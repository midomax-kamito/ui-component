import { CaretRight } from '@phosphor-icons/react';
import React, { Fragment } from 'react';
import { cn } from '../../lib';

type DataBreadCrumb = {
  title: string | React.ReactNode;
  path: string | null;
};

type BreadcrumbProps = {
  data: DataBreadCrumb[];
  className?: string;
  separator?: string | React.ReactNode;
  linkElement?: React.ElementType;
  onItemClick?: (path: string) => void;
};

type DynamicElementProps<T extends React.ElementType> = {
  as?: T;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export function DynamicElement<T extends React.ElementType = 'div'>({
  as,
  children,
  ...props
}: DynamicElementProps<T>) {
  const Component = as || 'div';
  return <Component {...props}>{children}</Component>;
}

const BreadCrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  (
    {
      data = [],
      className,
      separator = <CaretRight size={20} className="text-gray-500" />,
      linkElement = 'a',
      onItemClick,
      ...props
    },
    ref,
  ) => {
    const handleClick = (path: string | null, e: React.MouseEvent) => {
      if (path && onItemClick) {
        e.preventDefault();
        onItemClick(path);
      }
    };
    return (
      <div
        className={cn('flex flex-row gap-1 items-center p-2', className)}
        ref={ref}
        {...props}
      >
        {data.map((item, index) => {
          return (
            <Fragment key={index}>
              {item.path ? (
                <>
                  <DynamicElement
                    as={linkElement}
                    href={item.path}
                    className="text-sm font-medium text-primary-500"
                    onClick={(e: React.MouseEvent) => handleClick(item.path, e)}
                    {...props}
                  >
                    {item.title}
                  </DynamicElement>
                  {separator}
                </>
              ) : (
                <DynamicElement className="text-sm font-medium text-gray-700">
                  {item.title}
                </DynamicElement>
              )}
            </Fragment>
          );
        })}
      </div>
    );
  },
);
BreadCrumb.displayName = 'BreadCrumb';

export { BreadCrumb, type DataBreadCrumb };
