"use client"

import { createContext, useContext, useState, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import clsx from "clsx";

interface SidebarContextType {
    isExpanded: boolean,
    setIsExpanded: (value: boolean) => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

function useSidebar() {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a Sidebar component");
    }
    return context;
}

interface SidebarProps {
    children?: ReactNode,
    defaultExpanded?: boolean,
    className?: string
}

interface SidebarToggleProps {
    className?: string
}

interface SidebarContainerProps {
    children?: React.ReactNode
    className?: string
}

interface SidebarItemProps {
    children?: (context: SidebarContextType) => React.ReactNode
}

function Sidebar({ children, defaultExpanded = true, className }: SidebarProps) {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    return (
        <SidebarContext.Provider value={{ isExpanded, setIsExpanded }}>
            <aside
                className={clsx(
                    "relative border-r border-zinc-200 dark:border-zinc-900 transition-all duration-500 ease-in-out",
                    isExpanded ? "w-48 md:w-64" : "w-18 md:w-20",
                    className
                )}
            >
                <div className="flex flex-col h-full">
                    {children}
                </div>
            </aside>
        </SidebarContext.Provider>
    );
}

function SidebarToggle({ className }: SidebarToggleProps) {
    const { isExpanded, setIsExpanded } = useSidebar();

    return (
        <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={clsx(
                `
                absolute -right-4 top-4 z-10
                flex items-center justify-center
                h-8 w-8 p-2
                rounded-full
                bg-white dark:bg-black
                border border-zinc-200 dark:border-zinc-900
                shadow-md
                hover:scale-110
                transition-all duration-200 ease-in-out
                `,
                className
            )}
            aria-label={isExpanded ? "Recolher menu" : "Expandir menu"}
        >
            {isExpanded ? <ChevronLeft /> : <ChevronRight />}
        </button>
    );
}

function SidebarHeader({ children, className }: SidebarContainerProps) {
    return (
        <div className={clsx("flex flex-col border-b border-zinc-200 dark:border-zinc-900 p-3", className)}>
            {children}
        </div>
    )
}

function SidebarContent({ children, className }: SidebarContainerProps) {
    return <nav className={clsx("flex-1 flex flex-col gap-2 p-3", className)}>{children}</nav>
}

function SidebarFooter({ children, className }: SidebarContainerProps) {
    return (
        <div className={clsx("flex flex-col border-t border-zinc-200 dark:border-zinc-900 p-3", className)}>
            {children}
        </div>
    )
}

function SidebarItem({ children }: SidebarItemProps) {
    const context = useSidebar()
    return <>{children && children(context)}</>
}

export { Sidebar, SidebarToggle, SidebarHeader, SidebarContent, SidebarFooter, SidebarItem, useSidebar };
