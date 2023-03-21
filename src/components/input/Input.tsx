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
    icon?: string,
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
                        <span className={Props.icon + " input-addon"} />
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
                <label className={Props.className + " label-container"}>
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
                    <span className={Props.icon + " input-addon"} />
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
                    <span className={Props.icon + " input-addon"} />
                    <select id={Props.id} name={Props.name} value={Props.value} onChange={Props.onChange}>
                        {Props.children}
                    </select>
                </div>
            );
            break;

        default:
            return (
                <div className={Props.className + " input-group"}>
                    <span className={Props.icon + " input-addon"} />
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