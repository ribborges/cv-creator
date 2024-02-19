import { Children, ReactNode } from "react";
import './style/_button.scss';

interface ButtonProps {
    autofocus?: boolean,
    disabled?: boolean,
    id?: string,
    name?: string
    value?: string,
    className?: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    children?: ReactNode,
}

export function Button({type = "button", autofocus, disabled, id, name, value, onClick, children, className}: ButtonProps) {
    return (
        <button className={"button" + (className ? " " + className : "")} type={type} id={id} name={name} value={value} autoFocus={autofocus} disabled={disabled} onClick={onClick}>{children}</button>
    );
}