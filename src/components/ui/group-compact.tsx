import { FC, PropsWithChildren } from "react";

export const GroupInput: FC<{} & PropsWithChildren> = ({ children }) => {
    return (
        <div
            className="group flex items-center [&>*]:rounded-none [&>*:last-child]:rounded-e-lg  [&>*:first-child]:rounded-s-lg [&>*:nth-child(n):not(:last-child)]:border-r-0  [&>*:nth-child(n)]:hover:relative "
            data-group="compact"
        >
            {children}
        </div>
    );
};
