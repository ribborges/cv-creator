import { ReactNode } from "react";
import clsx from "clsx";

interface inputGroupProps {
    className?: string,
    rootClassName?: string,
    icon?: ReactNode,
    label?: string,
    labelInside?: boolean,
    htmlFor?: string,
    children?: ReactNode
}

function InputGroup(props: inputGroupProps) {
    return (
        <div className={clsx("flex flex-col", props.rootClassName)}>
            {
                props.label && !props.labelInside ?
                    <label htmlFor={props.htmlFor} className="ml-2 font-bold">
                        {props.label}
                    </label> : <></>
            }
            <div className={clsx(
                props.className,
                `
                m-1
                relative
                flex flex-nowrap items-stretch flex-1
                w-auto h-auto
                box-border
                rounded-2xl border-2 border-solid border-zinc-300 dark:border-zinc-800
                hover:shadow-2xl focus:shadow-2xl
                hover:shadow-zinc-950/20 focus:shadow-zinc-950/20
                dark:hover:shadow-zinc-200/20 dark:focus:shadow-zinc-200/20
                transition duration-500
                `
            )}>
                <div className="flex gap-2 items-center p-2 lg:p-4">
                    {
                        props.icon ?
                            <div>
                                {props.icon}
                            </div> : <></>
                    }
                    {
                        props.label && props.labelInside ?
                            <label htmlFor={props.htmlFor} className="ml-2 font-bold">
                                {props.label}
                            </label> : <></>
                    }
                </div>
                {props.children}
            </div>
        </div>
    );
}

export { InputGroup };