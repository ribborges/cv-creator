import React, { ReactNode } from 'react';
import './_style.scss';

interface togleProps {
    className?: string,
    id?: string,
    value: string,
    name?: string,
    children?: ReactNode,
}

export interface inputProps {
    id?: string,
    name?: string,
    icon: string,
}

interface optionProps extends inputProps {
    children?: ReactNode,
}

interface fieldsetProps {
    legend?: string,
    className?: string,
    children?: ReactNode,
}

interface buttonProps {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    children?: ReactNode,
}

export function InputCheckbox(Props: togleProps) {
    return (
        <label className={Props.className + " label-container"}>
            <input type="checkbox" id={Props.id} value={Props.value} name={Props.name}/>
            <span>{Props.children}</span>
        </label>
    );
}

export function InputRadio(Props: togleProps) {
    return (
        <label className={Props.className + " label-container"}>
            <input type="radio" id={Props.id} value={Props.value} name={Props.name}/>
            <span>{Props.children}</span>
        </label>
    );
}

export function InputRange(Props: inputProps) {
    return (
        <div className="input-group">
            <span className={Props.icon + " input-addon"}/>
            <div className="input-addon">
                <input type="range"/>
            </div>
        </div>
    );
}

export function Fieldset(Props: fieldsetProps) {
    return (
        <fieldset className={Props.className}>
            <legend>{Props.legend}</legend>
            {Props.children}
        </fieldset>
    );
}

export function Button(props: buttonProps) {
    return (
        <button type={props.type} onClick={props.onClick}>{props.children}</button>
    );
}