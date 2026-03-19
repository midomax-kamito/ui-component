import React from "react";
import RCTable, { ColumnsType } from "rc-table";
import { DefaultRecordType, Reference } from "rc-table/lib/interface";
import { Pagination, PaginationProps } from "./pagination";
import { cn } from "../../lib";
import { Checkbox } from "./checkbox";
import { TableProps as TP } from "rc-table";

type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : T;

const tableStyles = {
    table: "[&_.rc-table-content]:overflow-x-auto [&_table]:w-full [&_.rc-table-row]:border-y [&_.rc-table-row]:border-y-gray-200 overflow-hidden",
    thead: "[&_thead]:text-left [&_thead]:rtl:text-right [&_th.rc-table-cell]:uppercase [&_th.rc-table-cell]:text-xs [&_th.rc-table-cell]:font-semibold [&_th.rc-table-cell]:text-gray-700 [&_th.rc-table-cell]:tracking-wide [&_thead]:bg-gray-50 [&_thead]:border-y [&_thead]:border-y-gray-200",
    tCell: "[&_.rc-table-cell]:p-4 [&_th.rc-table-cell]:p-4 [&_td.rc-table-cell]:p-4 [&_td.rc-table-cell]:font-normal [&_td.rc-table-cell]:text-sm [&_td.rc-table-cell]:leanding-[21px] [&_td.rc-table-cell]:text-gray-800",
    //     "[&_thead]:bg-red-500  [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-muted [&_thead]:border-y [&_thead]:border-muted",
    variants: {
        classic: "",
        // "[&_thead]:bg-red-500  [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-muted [&_thead]:border-y [&_thead]:border-muted",
        modern: "",
        // "[&_thead]:bg-muted/50 [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-muted",
        minimal: "",
        // "[&_thead]:bg-muted/50",
        elegant: "",
        // "[&_thead]:border-y [&_thead]:border-muted [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-muted",
    },
    striped: "[&_.rc-table-row:nth-child(2n)_.rc-table-cell]:bg-gray-50",
    striped_column: "[&_.rc-table-cell:nth-child(2n)]:bg-gray-50",
};

interface TableProps<T> extends Omit<TP<T> & React.RefAttributes<Reference>, "className" | "emptyText"> {
    emptyText?: React.ReactElement;
    variant?: keyof typeof tableStyles.variants;
    striped?: boolean | "row" | "column";
    className?: string;
    pagination?: PaginationProps | false;
    checkable?: boolean;
}

function Table<RecordType extends DefaultRecordType>({
    striped,
    variant = "classic",
    emptyText,
    className,
    pagination,
    checkable,
    selectedRowKeys = [],
    onSelectAllRows,
    onSelectRow,
    ...props
}: TableProps<RecordType> & {
    selectedRowKeys?: string[];
    onSelectAllRows?: (checked: boolean) => void;
    onSelectRow?: (id: string, checked: boolean) => void;
}) {
    props.columns;
    const handleSelectAllRows = (checked: boolean) => {
        if (checked) {
            onSelectAllRows?.(true);
        } else {
            onSelectAllRows?.(false);
        }
    };
    const handleSelectRow = (id: string, checked: boolean) => {
        onSelectRow?.(id, checked);
    };

    const columnsWithCheck: ColumnsType<RecordType> = checkable
        ? ([
              {
                  title: (
                      <Checkbox
                          checked={
                              selectedRowKeys.length === props.data!.length
                                  ? true
                                  : selectedRowKeys.length === 0
                                    ? false
                                    : "indeterminate"
                          }
                          onCheckedChange={(checked: boolean) => handleSelectAllRows(checked)}
                      />
                  ),
                  key: "checkbox",
                  fixed: "left",
                  width: 50,
                  render: (_: any, record: any) => (
                      <div className="inline-flex cursor-pointer">
                          <Checkbox
                              checked={selectedRowKeys.includes(record.key)}
                              onCheckedChange={(checked: boolean) => handleSelectRow(record.key, checked)}
                          />
                      </div>
                  ),
              },
              ...props.columns!,
          ] as ColumnsType<RecordType>)
        : (props.columns! as ColumnsType<RecordType>);

    return (
        <RCTable<RecordType>
            className={cn(
                tableStyles.table,
                tableStyles.thead,
                tableStyles.tCell,
                tableStyles.variants[variant],
                striped
                    ? striped === "row"
                        ? tableStyles.striped
                        : striped === "column"
                          ? tableStyles.striped_column
                          : ""
                    : "",

                className
            )}
            emptyText={emptyText ?? "Empty"}
            {...props}
            columns={columnsWithCheck}
            footer={() => {
                if (!pagination) return null;
                return (
                    <div className="bg-gray-50 p-4 border-t border-t-gray ">
                        <div className="flex justify-between items-center">
                            <div className="font-normal text-sm">
                                Showing
                                <strong>
                                    {(pagination.pageIndex - 1) * pagination.pageSize + 1} -
                                    {pagination.pageIndex * pagination.pageSize}
                                </strong>
                                of <strong>{pagination.total}</strong>
                            </div>
                            <Pagination {...pagination} />
                        </div>
                    </div>
                );
            }}
        />
    );
}

Table.displayName = "Table";
export { Table, type ColumnsType, type DefaultRecordType, type TableProps, type ExtractProps };
