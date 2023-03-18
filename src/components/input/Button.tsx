import { Children, ReactNode } from "react";
import './style/_button.scss';

interface ButtonProps {
    autofocus?: boolean,
    disabled?: boolean,
    className?: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    children?: ReactNode,
}

export function Button({type = "button", autofocus, disabled, onClick, children, className}: ButtonProps) {
    return (
        <button className={className + " button"} type={type} autoFocus={autofocus} disabled={disabled} onClick={onClick}>{children}</button>
    );
}