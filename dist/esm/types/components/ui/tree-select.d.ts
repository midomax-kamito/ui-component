import React from "react";
type Key = React.Key;
type TreeDataType = {
    value: Key;
    label: string | React.ReactNode;
    checked: boolean | "indeterminate";
    disabled?: boolean;
    children?: TreeDataType[];
    isControl?: boolean;
    hidden?: boolean;
};
type TreeNodeProps = {
    record: TreeDataType;
    onSelect?: (checked: boolean, value: Key) => void;
    defaultKeyOpen?: Key[];
    className?: string;
    selectedRowKeys?: Key[];
    asChild?: boolean;
    onClickLabel?: () => void;
};
type TreeSelectProps = {
    treeData: TreeDataType[];
    defaultKeyOpen?: Key[];
    defaultSelectedRowKeys?: Key[];
    onChange?: (value: Key[]) => void;
    className?: string;
    onClickLabel?: () => void;
};
declare const TreeSelect: React.ForwardRefExoticComponent<TreeSelectProps & React.RefAttributes<HTMLDivElement>>;
declare const TreeField: ({ value, onChange, data, className, }: {
    value: React.Key[];
    onChange: (value: React.Key[]) => void;
    data: TreeDataType[];
    className?: string | undefined;
    onClickLabel?: (() => void) | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export { TreeSelect, TreeField, type TreeDataType, type TreeNodeProps, type TreeSelectProps };
