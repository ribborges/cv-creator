import { HTMLAttributes } from "react";
import clsx from "clsx";

function H1(props: HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h1 {...props} className={clsx("flex items-center gap-1 text-3xl md:text-4xl lg:text-5xl font-bold leading-normal", props.className)} />
    );
}

function H2(props: HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h2 {...props} className={clsx("flex items-center gap-1 text-2xl md:text-3xl lg:text-4xl font-bold leading-normal", props.className)} />
    );
}

function H3(props: HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3 {...props} className={clsx("flex items-center gap-1 text-xl md:text-2xl lg:text-3xl font-bold leading-normal", props.className)} />
    );
}

function H4(props: HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h4 {...props} className={clsx("flex items-center gap-1 text-lg md:text-xl lg:text-2xl font-bold leading-normal", props.className)} />
    );
}

function H5(props: HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h5 {...props} className={clsx("flex items-center gap-1 text-base md:text-lg lg:text-xl font-bold leading-normal", props.className)} />
    );
}

function H6(props: HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h6 {...props} className={clsx("flex items-center gap-1 text-base md:text-base lg:text-lg font-bold leading-normal", props.className)} />
    );
}

export { H1, H2, H3, H4, H5, H6 };