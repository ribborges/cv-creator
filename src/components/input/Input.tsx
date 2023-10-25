import { ReactNode } from 'react';

import './_style.scss';

export interface inputProps {
    disabled?: boolean,
    type?: React.HTMLInputTypeAttribute | "textarea" | "option",
    id?: string,
    name?: string,
    onChange?: any,
    pattern?: string,
    minLength?: number,
    accept?: string,
    value?: string,
    className?: string,
    icon?: ReactNode,
    placeholder?: string,
    title?: string,
    children?: ReactNode,
}

export function Input(Props: inputProps) {
    switch (Props.type) {
        case "textarea":
            return (
                <div className="text-area">
                    <div className="text-area-title">
                        <span className="input-addon">
                            {Props.icon}
                        </span>
                        <span className="input-addon">{Props.title}</span>
                    </div>
                    <textarea
                        id={Props.id}
                        name={Props.name}
                        value={Props.value}
                        onChange={Props.onChange}
                        placeholder={Props.placeholder}
                    />
                </div>
            );
            break;

        case "checkbox": case "radius":
            return (
                <label className={"label-container" + (Props.className ? " " + Props.className : "")}>
                    <input
                        type={Props.type}
                        id={Props.id}
                        name={Props.name}
                        value={Props.value}
                        onChange={Props.onChange}
                        disabled={Props.disabled}
                    />
                    <span>{Props.children}</span>
                </label>
            );
            break;

        case "range":
            return (
                <div className="input-group">
                    <span className="input-addon">
                        {Props.icon}
                    </span>
                    <div className="input-addon">
                        <input
                            type={Props.type}
                            id={Props.id}
                            name={Props.name}
                            value={Props.value}
                            onChange={Props.onChange}
                            disabled={Props.disabled}
                        />
                    </div>
                </div>
            );
            break;

        case "option":
            return (
                <div className="input-group">
                    <span className="input-addon">
                        {Props.icon}
                    </span>
                    <select id={Props.id} name={Props.name} value={Props.value} onChange={Props.onChange}>
                        {Props.children}
                    </select>
                </div>
            );
            break;

        default:
            return (
                <div className={Props.className + " input-group"}>
                    <span className="input-addon">
                        {Props.icon}
                    </span>
                    <input
                        type={Props.type}
                        id={Props.id}
                        name={Props.name}
                        value={Props.value}
                        pattern={Props.pattern}
                        accept={Props.accept}
                        minLength={Props.minLength}
                        onChange={Props.onChange}
                        placeholder={Props.placeholder}
                        disabled={Props.disabled}
                    />
                </div>
            );
            break;
    }
}