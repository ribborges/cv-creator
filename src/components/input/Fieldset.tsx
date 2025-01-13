import { ReactNode } from "react";
import classConcat from "../../utils/classConcat";

interface fieldsetProps {
    legend?: string,
    className?: string,
    children?: ReactNode,
}

export function Fieldset(Props: fieldsetProps) {
    return (
        <fieldset className={classConcat(
            Props.className || "",
            "p-2 lg:p-5 rounded-xl border border-solid border-zinc-400 dark:border-zinc-700"
        )}>
            <legend className="p-2 rounded-xl border border-solid border-zinc-400 dark:border-zinc-600">{Props.legend}</legend>
            {Props.children}
        </fieldset>
    );
}