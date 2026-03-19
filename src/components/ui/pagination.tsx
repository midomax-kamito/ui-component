import * as React from "react";

import { ButtonProps, buttonVariants } from "./button";
import { DotsThree } from "@phosphor-icons/react";
import { cn } from "../../lib";

const WrapPagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
    <nav role="navigation" aria-label="wrappagination" className={cn("", className)} {...props} />
);
WrapPagination.displayName = "WrapPagination";

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
    ({ className, ...props }, ref) => (
        <ul ref={ref} className={cn("flex flex-row items-center [&>*]:-ml-[1px]", className)} {...props} />
    )
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
    <li ref={ref} className={cn("first:[>]:bg-red-500 last:rounded-e-lg", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<ButtonProps, "size"> &
    React.ComponentProps<"button">;

const PaginationLink = ({ className, isActive, size = "md", ...props }: PaginationLinkProps) => (
    <button
        aria-current={isActive ? "page" : undefined}
        className={cn(
            buttonVariants({
                variant: isActive ? "primary" : "neutral",
                size: "sm",
            }),
            "rounded-none h-9 min-h-9 p-1 min-w-8 border border-gray-200",
            isActive ? "!text-white !bg-primary-500 " : "",
            "text-gray-800 font-medium text-xs hover:bg-gray-50 hover:text-gray-900 active:text-white active:bg-primary-500 !ring-0",
            className
        )}
        {...props}
    />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({ className, children, ...props }: React.ComponentProps<typeof PaginationLink>) => (
    <PaginationLink
        aria-label="Go to previous page"
        className={cn("text-sm leading-[21px] first:rounded-s-lg min-w-11 disabled:text-gray-400 px-3", className)}
        {...props}
    >
        {children}
    </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, children, ...props }: React.ComponentProps<typeof PaginationLink>) => (
    <PaginationLink
        aria-label="Go to next page"
        className={cn("text-sm leading-[21px] last:rounded-e-lg min-w-11 disabled:text-gray-400 px-3", className)}
        {...props}
    >
        {children}
    </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
    <span
        aria-hidden
        className={cn(
            "flex h-9 min-h-9 bg-white min-w-12 items-center justify-center border border-gray-200",
            className
        )}
        {...props}
    >
        {/* <MoreHorizontal className="h-4 w-4" /> */}
        <DotsThree size={24} weight="bold" />
        <span className="sr-only">More pages</span>
    </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

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
const Pagination: React.FC<PaginationProps> = ({
    pageSize,
    pageIndex,
    total,
    prevIcon,
    nextIcon,
    delta = 2,
    showPages = true,
    onChange,
}) => {
    const pageCount = Math.ceil(total / pageSize);
    const pagination = (current: number, last: number) => {
        const left = current - delta;
        const right = current + delta + 1;
        const range = [];
        const rangeWithDots = [];
        let l;

        for (let i = 1; i <= last; i++) {
            if (i == 1 || i == last || (i >= left && i < right)) {
                range.push(i);
            }
        }

        for (let i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push("...");
                }
            }
            rangeWithDots.push(i);
            l = i;
        }

        return rangeWithDots;
    };
    const pages = pagination(pageIndex, Math.ceil(total / pageSize));

    const handlePrevClick = () => {
        if (pageIndex > 1 && onChange) {
            onChange({ pageSize, pageIndex: pageIndex - 1, total });
        }
    };
    const handleNextClick = () => {
        if (pageIndex < pageCount && onChange) {
            onChange({ pageSize, pageIndex: pageIndex + 1, total });
        }
    };
    const handlePageClick = (page: number) => {
        if (page !== pageIndex && onChange) {
            onChange({ pageSize, pageIndex: page, total });
        }
    };

    return (
        <WrapPagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        className={pageIndex === 1 ? "disabled" : ""}
                        onClick={handlePrevClick}
                        disabled={pageIndex === 1}
                    >
                        {prevIcon ?? "Previous"}
                    </PaginationPrevious>
                </PaginationItem>
                {showPages && (
                    <>
                        {pages.map((page, index) => (
                            <PaginationItem key={index}>
                                {typeof page === "number" ? (
                                    <>
                                        <PaginationLink
                                            isActive={page === pageIndex}
                                            onClick={() => handlePageClick(page)}
                                        >
                                            {page}
                                        </PaginationLink>
                                    </>
                                ) : (
                                    <PaginationEllipsis />
                                )}
                            </PaginationItem>
                        ))}
                    </>
                )}
                <PaginationItem>
                    <PaginationNext
                        className={pageIndex === pageCount ? "disabled" : ""}
                        onClick={handleNextClick}
                        disabled={pageIndex === pageCount}
                    >
                        {nextIcon ?? "Next"}
                    </PaginationNext>
                </PaginationItem>
            </PaginationContent>
        </WrapPagination>
    );
};

export { Pagination, type PaginationParams, type PaginationProps };
