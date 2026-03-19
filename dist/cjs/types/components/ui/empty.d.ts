import React, { PropsWithChildren } from "react";
type EmptyProps = PropsWithChildren & {
    image?: string | React.ReactNode;
    description?: React.ReactNode;
    imageStyle?: React.CSSProperties;
    className?: string;
};
type EmptyComponent = React.FC<EmptyProps> & {
    PRESENTED_IMAGE_DEFAULT: React.ReactNode;
    PRESENTED_IMAGE_SIMPLE: React.ReactNode;
};
declare const Empty: EmptyComponent;
export { Empty };
