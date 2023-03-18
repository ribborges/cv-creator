import { ReactNode } from "react";

import './style/_optioninput.scss';

export interface optionProps {
    id?: string,
    name?: string,
    icon: string,
    children?: ReactNode,
}

export function InputOption(Props: optionProps) {
    return (
        <div className="input-group">
            <span className={Props.icon + " input-addon"}/>
            <select name={Props.name} id={Props.id}>
                {Props.children}
            </select>
        </div>
    );
}