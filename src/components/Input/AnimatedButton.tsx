import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
    id?: string,
    name?: string,
    disabled?: boolean,
    className?: string,
    type?: "button" | "submit" | "reset",
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    children?: ReactNode
}

const buttonStyles = `
    flex basis-[max-content] items-center justify-center content-center gap-2
    p-3 lg:p-4 m-1
    text-center text-zinc-100
    bg-gradient-to-tr from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500
    disabled:from-zinc-300 disabled:to-zinc-700
    rounded-2xl
    hover:shadow-2xl focus:shadow-2xl
    disabled:hover:shadow-none disabled:focus:shadow-none
    hover:shadow-zinc-950/20 focus:shadow-zinc-950/20
    dark:hover:shadow-zinc-200/20 dark:focus:shadow-zinc-200/20
    hover:scale-105 disabled:hover:scale-100
    transition duration-500 ease-in-out
    cursor-pointer disabled:cursor-default select-none
`;

function AnimatedButton(props: ButtonProps) {
    return (
        <button
            id={props.id}
            name={props.name}
            onClick={props.onClick}
            disabled={props.disabled}
            type={props.type}
            className={clsx(buttonStyles, props.className)}
        >
            {props.children}
        </button>
    );
}

export { AnimatedButton };