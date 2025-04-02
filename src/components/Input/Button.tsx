import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
    autofocus?: boolean,
    disabled?: boolean,
    id?: string,
    name?: string
    value?: string,
    className?: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    children?: ReactNode,
}

interface ButtonLinkProps {
    id?: string,
    href?: string,
    className?: string,
    target?: React.HTMLAttributeAnchorTarget | undefined,
    children?: ReactNode,
}

const buttonStyles = `
    flex basis-[max-content] items-center justify-center content-center gap-2
    p-3 lg:p-4 m-1
    text-sm lg:text-base
    text-zinc-800 dark:text-zinc-200 disabled:text-zinc-500/40
    bg-transparent hover:bg-purple-700 focus:bg-purple-700
    disabled:bg-transparent
    rounded-2xl border
    border-purple-700 disabled:border-zinc-500/40
    hover:shadow-2xl focus:shadow-2xl
    disabled:hover:shadow-none disabled:focus:shadow-none
    hover:shadow-zinc-950/20 focus:shadow-zinc-950/20
    dark:hover:shadow-zinc-200/20 dark:focus:shadow-zinc-200/20
    transition duration-500
    cursor-pointer disabled:cursor-default select-none
`;

function Button({ type = "button", autofocus, disabled, id, name, value, onClick, children, className }: ButtonProps) {
    return (
        <button
            className={clsx(buttonStyles, className)}
            type={type}
            id={id}
            name={name}
            value={value}
            autoFocus={autofocus}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

function ButtonLink({ target = "_blank", ...props }: ButtonLinkProps) {
    return (
        <a
            id={props.id}
            className={clsx(buttonStyles, props.className)}
            href={props.href}
            target={target}
            rel="noopener noreferrer"
        >
            {props.children}
        </a>
    );
}

export { Button, ButtonLink, buttonStyles };