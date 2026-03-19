import * as React from "react";
type PaginationParams = {
    pageSize: number;
    pageIndex: number;
    total: number;
};
type PaginationProps = {
    nextIcon?: React.ReactNode;
    prevIcon?: React.ReactNode;
    delta?: number;
    showPages?: boolean;
    onChange?: (value: PaginationParams) => void;
} & PaginationParams;
declare const Pagination: React.FC<PaginationProps>;
export { Pagination, type PaginationParams, type PaginationProps };
