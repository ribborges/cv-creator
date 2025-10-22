"use client";

import clsx from "clsx";
import { type ReactNode, HTMLAttributeAnchorTarget } from "react";

interface MenuButtonProps {
    label?: ReactNode;
    icon?: ReactNode;
    className?: string;
}

const menuOptStyle = `
    flex items-center gap-2
    p-2
    text-left
    hover:bg-zinc-400 dark:hover:bg-zinc-800
    text-zinc-900 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-zinc-200 hover:no-underline
    rounded-xl
    transition duration-500
    cursor-pointer
`;

export function MenuButton({ label, icon, className, onClick }: { onClick?: () => void } & MenuButtonProps) {
    return (
        <button
            className={clsx(menuOptStyle, className)}
            onClick={onClick}
        >
            {icon && icon}
            {label && label}
        </button>
    );
}

export function MenuLink({ label, icon, className, href, target }: { href?: string, target?: HTMLAttributeAnchorTarget } & MenuButtonProps) {
    return (
        <a
            className={clsx(menuOptStyle, className)}
            href={href}
            target={target}
        >
            {icon && icon}
            {label && label}
        </a>
    );
}