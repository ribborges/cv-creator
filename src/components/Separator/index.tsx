import { clsx } from 'clsx';

interface SeparatorProps {
    space?: number;
    vertical?: boolean;
    className?: string;
}

function Spacer({ space = 120, vertical, className }: SeparatorProps) {
    return <hr
        style={ vertical? { marginRight: `${space / 2}px`, marginLeft: `${space / 2}px` } : { marginTop: `${space / 2}px`, marginBottom: `${space / 2}px` }}
        className={clsx(
            "box-border border-solid border-zinc-200 dark:border-zinc-900",
            vertical ? "h-full border-r" : "w-full border-t",
            className || ""
        )}/>;
}

function Blanckspace({ space = 60, vertical, className }: SeparatorProps) {
    return <hr
        style={ vertical? { width: `${space}px` } : { height: `${space}px` }}
        className={clsx(
            "border-none",
            className || ""
        )}
    />;
}

export { Spacer, Blanckspace };