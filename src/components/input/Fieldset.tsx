import { ReactNode } from "react";
import './style/_fieldset.scss';

interface fieldsetProps {
    legend?: string,
    className?: string,
    children?: ReactNode,
}

export function Fieldset(Props: fieldsetProps) {
    return (
        <fieldset className={Props.className}>
            <legend>{Props.legend}</legend>
            {Props.children}
        </fieldset>
    );
}