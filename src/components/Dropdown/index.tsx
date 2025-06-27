"use client";

import { type ReactNode, useState } from "react";
import { CaretDownFill } from "react-bootstrap-icons";
import { clsx } from 'clsx';

import { Spacer } from "@/components/Separator";
import { MenuButton, MenuLink } from "@/components/Input";

interface DropdownProps {
    align: 'left' | 'right' | 'center',
    showCaret?: boolean,
    title?: ReactNode,
    items: DropdownItemProps[],
    className?: string,
    disabled?: boolean,
    children?: ReactNode,
}

interface DropdownItemProps {
    type?: 'button' | 'link',
    icon?: ReactNode,
    label: string,
    className?: string,
    onClick?: () => void,
    href?: string
}

export default function Dropdown({ align = 'center', showCaret = true, ...props }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative text-xs" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="
                    flex items-center gap-1 content-center
                    p-2
                    hover:bg-zinc-400 dark:hover:bg-zinc-800
                    text-zinc-900 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-zinc-200 hover:no-underline
                    rounded-xl
                    transition duration-500
                    cursor-pointer
                "
            >
                {props.children && (
                    <div className={props.className}>
                        {props.children}
                    </div>
                )}
                {showCaret && (
                    <div className="text-xs">
                        <CaretDownFill className={clsx(isOpen ? "rotate-180" : "", "transition duration-500")} />
                    </div>
                )}
            </button>
            <div className={clsx(
                "absolute w-fit min-w-52 z-[5]",
                align === 'left' ? "translate-y-full" : "",
                align === 'right' ? "translate-y-full -translate-x-8/12" : "",
                align === 'center' ? "translate-y-full -translate-x-1/2" : ""
            )}>
                <div
                    className={clsx(
                        `
                            overflow-hidden
                            p-6
                            flex-col items-stretch justify-stretch gap-1
                            shadow-2xl shadow-black/10 dark:shadow-white/10
                            border border-solid rounded-4xl
                            border-zinc-400/40 dark:border-zinc-800/40
                            backdrop-blur-md bg-zinc-100/50 dark:bg-zinc-950/50
                            transition-all duration-500
                        `, isOpen ? "flex" : "hidden"
                    )}
                >
                    {props.title &&
                        <>
                            <div className="font-bold">{props.title}</div>
                            <Spacer space={10} />
                        </>
                    }
                    <ul className="flex flex-col items-stretch justify-stretch gap-1">
                        {props.items.map((item, index) => (
                            <li key={index} className="flex flex-col whitespace-nowrap">
                                {item.type === 'button' ?
                                    <MenuButton icon={item.icon} label={item.label} onClick={item.onClick} /> :
                                    <MenuLink icon={item.icon} label={item.label} href={item.href} />
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}