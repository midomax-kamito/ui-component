import React, { useEffect, useState } from "react";
import { Checkbox } from "./checkbox";
import { Badge } from "./badge";
import { Accordion } from "./accordion";
import { cn } from "../../lib";

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
const cleanObject = (obj: Record<string, any>) => {
    const result: Record<string, any> = {};
    if (obj) {
        Object.keys(obj).forEach((key) => {
            if ((!Array.isArray(obj[key]) && obj[key]) || typeof obj[key] === "number" || obj[key]?.length)
                result[key] = obj[key];
        });
    }
    return result;
};

const TreeSelect = React.forwardRef<HTMLDivElement, TreeSelectProps>(
    ({ treeData, defaultKeyOpen = [], defaultSelectedRowKeys = [], onChange, className, ...props }, ref) => {
        const [_, setSelectedRowKeys] = useState<Key[]>(defaultSelectedRowKeys || []);
        const [treeNode, setTreeNode] = useState(treeData);

        // Function to initialize state with default keys
        useEffect(() => {
            const newTree = updateTreeWithChecked(treeData, new Set(defaultSelectedRowKeys)) as TreeDataType[];
            setTreeNode(newTree);
        }, [defaultSelectedRowKeys]);

        const updateTreeWithChecked = (nodes: TreeDataType[], checkedKeys: Set<Key>) => {
            return nodes.map((node) => {
                const isChecked = checkedKeys.has(node.value);
                if (node.children && node.children.length > 0) {
                    const updatedChildren = updateTreeWithChecked(node.children, checkedKeys) as TreeDataType[];
                    const allChecked = updatedChildren.every((child) => child.checked === true);
                    const someChecked = updatedChildren.some(
                        (child) => child.checked === true || child.checked === "indeterminate"
                    );
                    return {
                        ...node,
                        checked: allChecked ? true : someChecked ? "indeterminate" : false,
                        children: updatedChildren,
                    };
                }
                return {
                    ...node,
                    checked: isChecked,
                };
            });
        };

        const updateTree = (nodes: TreeDataType[], value: Key, checked: boolean) => {
            return nodes.map((node: TreeDataType) => {
                if (node.value === value) {
                    return { ...node, checked, children: updateTreeRecursively(node.children!, checked) };
                }
                if (node.children && node.children.length > 0) {
                    const updatedChildren = updateTree(node.children!, value, checked) as TreeDataType[];
                    const allChecked: boolean =
                        updatedChildren.every((child: TreeDataType) => child.checked === true) || false;
                    const someChecked =
                        updatedChildren.some(
                            (child: TreeDataType) => child.checked === true || child.checked === "indeterminate"
                        ) || false;
                    return {
                        ...node,
                        checked: allChecked ? true : someChecked ? "indeterminate" : false,
                        children: updatedChildren,
                    };
                }
                return { ...node };
            });
        };

        const updateTreeRecursively: any = (nodes: TreeDataType[], checked: boolean) => {
            return nodes?.map((node: TreeDataType) =>
                cleanObject({
                    ...node,
                    checked: node.hidden ? node.checked : checked,
                    indeterminate: false,
                    children: node.children ? updateTreeRecursively(node.children, checked) : [],
                })
            );
        };

        const onSelect = (checked: boolean, value: Key) => {
            const updateTreeNode = updateTree(treeNode, value, checked) as TreeDataType[];
            setTreeNode(updateTreeNode);
            const updatedCheckedKeys = getCheckedIds(updateTreeNode);
            setSelectedRowKeys(updatedCheckedKeys);
            onChange && onChange(updatedCheckedKeys);
        };

        const getCheckedIds = (nodes: TreeDataType[]): Key[] => {
            let checkedIds: Key[] = [];
            nodes.forEach((node) => {
                if (node.checked === true) {
                    checkedIds.push(node.value);
                }
                if (node.children && node.children.length > 0) {
                    checkedIds = checkedIds.concat(getCheckedIds(node.children));
                }
            });
            return checkedIds;
        };

        return (
            <div className={cn("w-full flex flex-col gap-3", className)} ref={ref}>
                {treeNode.map((node) => (
                    <TreeNode
                        key={node.value}
                        record={node}
                        onSelect={onSelect}
                        defaultKeyOpen={defaultKeyOpen}
                        {...props}
                    />
                ))}
            </div>
        );
    }
);

const TreeNode: React.FC<TreeNodeProps> = React.forwardRef<HTMLDivElement, TreeNodeProps>(
    (
        {
            record,
            onSelect,
            defaultKeyOpen = [],
            selectedRowKeys = [],
            asChild = false,
            onClickLabel,
            ...propsNodeAccordion
        },
        ref
    ) => {
        const [openKey, setOpenKey] = useState<Key[]>(defaultKeyOpen);
        const [checkedCount, setCheckedCount] = useState(0);

        const handleOpen = (value: Key) => {
            setOpenKey((prev) => {
                const openSet = new Set(prev);
                if (openSet.has(value)) {
                    openSet.delete(value);
                } else {
                    openSet.add(value);
                }
                return Array.from(openSet);
            });
        };

        useEffect(() => {
            const countCheckedChildren = (children: TreeDataType[]) => {
                return children.reduce((count, child) => {
                    if (child.checked === true) count += 1;
                    return count;
                }, 0);
            };

            if (record.children && record.children.length > 0) {
                setCheckedCount(countCheckedChildren(record.children));
            }
        }, [record.children]);

        if (record.hidden) {
            return null;
        }

        return (
            <Accordion
                ref={ref}
                open={record.children! && openKey.includes(record.value)}
                icon={record.children && record.children.length > 0}
                asChild={asChild}
                {...propsNodeAccordion}
            >
                <Accordion.Header onClick={() => handleOpen?.(record.value)} asChild={asChild}>
                    <div
                        className="flex-1 flex items-center gap-3"
                        onClick={(event) => {
                            event.stopPropagation();
                        }}
                    >
                        <div
                            className="flex-1"
                            onClick={(event) => {
                                event.stopPropagation();
                                handleOpen?.(record.value);
                            }}
                        >
                            <label
                                className="flex flex-row items-center gap-3 w-max text-start font-medium text-gray-800 text-base leading-6 cursor-pointer"
                                onClick={(event) => event.stopPropagation()}
                            >
                                <Checkbox
                                    className={cn("flex-shrink-0", { "opacity-50": record.isControl })}
                                    id={`${record.value}`}
                                    checked={record.checked}
                                    disabled={record.disabled}
                                    onCheckedChange={(checked: boolean) => onSelect?.(checked, record.value)}
                                />
                                {record.label}
                            </label>
                        </div>
                    </div>
                    {record.children && record.children.length > 0 && (
                        <Badge
                            variant={checkedCount === 0 ? 'secondary' : 'default'}
                            className="flex-shrink-0 shadow-none min-w-10 flex justify-center items-start px-0">
                            <span className="text-sm leading-[21px] font-medium text-center">
                                {checkedCount}/{record.children.length}
                            </span>
                        </Badge>
                    )}
                </Accordion.Header>
                {record.children && record.children?.length > 0 && (
                    <Accordion.Body asChild={record.children.some((r) => !r.children)}>
                        {record.children.map((r) => {
                            if (r.hidden) return null;
                            return (
                                <TreeNode
                                    key={r.value}
                                    record={r}
                                    onSelect={onSelect}
                                    defaultKeyOpen={defaultKeyOpen}
                                    asChild={!(r.children && r.children?.length > 0)}
                                />
                            );
                        })}
                    </Accordion.Body>
                )}
            </Accordion>
        );
    }
);

TreeNode.displayName = "TreeNode";
TreeSelect.displayName = "TreeSelect";

const TreeField = ({
    value = [],
    onChange,
    data,
    className,
}: {
    value: React.Key[];
    onChange: (value: React.Key[]) => void;
    data: TreeDataType[];
    className?: string;
    onClickLabel?: () => void;
}) => {
    const [checkedKeys, setCheckedKeys] = useState(value);

    React.useEffect(() => {
        setCheckedKeys(value);
    }, [value]);

    const handleChange = (newCheckedKeys: React.Key[]) => {
        let updatedCheckedKeys = [...newCheckedKeys];
        const applyIsControl = (nodes: TreeDataType[]) => {
            nodes.forEach((node) => {
                if (node.children) {
                    const childCheckedKeys = node.children
                        .filter(child => !child.hidden)
                        .map((child) => child.value);
                    const anyChildChecked = childCheckedKeys.some((key) => updatedCheckedKeys.includes(key));

                    if (anyChildChecked) {
                        node.children.forEach((child) => {
                            if (child.isControl && !child.hidden && !updatedCheckedKeys.includes(child.value)) {
                                updatedCheckedKeys.push(child.value);
                            }
                        });
                    }

                    applyIsControl(node.children);
                }
            });
        };

        applyIsControl(data);

        setCheckedKeys(updatedCheckedKeys);
        onChange(updatedCheckedKeys);
    };

    return (
        <TreeSelect
            className={className}
            treeData={data}
            defaultSelectedRowKeys={checkedKeys}
            onChange={handleChange}
        />
    );
};

export { TreeSelect, TreeField, type TreeDataType, type TreeNodeProps, type TreeSelectProps };
