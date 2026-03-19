import React from 'react';
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
export declare function DynamicElement<T extends React.ElementType = 'div'>({ as, children, ...props }: DynamicElementProps<T>): import("react/jsx-runtime").JSX.Element;
declare const BreadCrumb: React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLDivElement>>;
export { BreadCrumb, type DataBreadCrumb };
