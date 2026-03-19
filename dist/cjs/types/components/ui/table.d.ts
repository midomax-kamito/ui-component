import React from "react";
import { ColumnsType } from "rc-table";
import { DefaultRecordType, Reference } from "rc-table/lib/interface";
import { PaginationProps } from "./pagination";
import { TableProps as TP } from "rc-table";
type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : T;
declare const tableStyles: {
    table: string;
    thead: string;
    tCell: string;
    variants: {
        classic: string;
        modern: string;
        minimal: string;
        elegant: string;
    };
    striped: string;
    striped_column: string;
};
interface TableProps<T> extends Omit<TP<T> & React.RefAttributes<Reference>, "className" | "emptyText"> {
    emptyText?: React.ReactElement;
    variant?: keyof typeof tableStyles.variants;
    striped?: boolean | "row" | "column";
    className?: string;
    pagination?: PaginationProps | false;
    checkable?: boolean;
}
declare function Table<RecordType extends DefaultRecordType>({ striped, variant, emptyText, className, pagination, checkable, selectedRowKeys, onSelectAllRows, onSelectRow, ...props }: TableProps<RecordType> & {
    selectedRowKeys?: string[];
    onSelectAllRows?: (checked: boolean) => void;
    onSelectRow?: (id: string, checked: boolean) => void;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Table {
    var displayName: string;
}
export { Table, type ColumnsType, type DefaultRecordType, type TableProps, type ExtractProps };
