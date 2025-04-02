import { ReactNode } from "react";
import clsx from "clsx";

interface fieldsetProps {
    legend?: string,
    className?: string,
    children?: ReactNode,
}

export function Fieldset(Props: fieldsetProps) {
    return (
        <fieldset className={clsx(
            Props.className || "",
            "p-2 lg:p-5 rounded-2xl border border-solid border-zinc-400 dark:border-zinc-700"
        )}>
            <legend className="p-2 rounded-2xl border border-solid border-zinc-400 dark:border-zinc-700">{Props.legend}</legend>
            {Props.children}
        </fieldset>
    );
}