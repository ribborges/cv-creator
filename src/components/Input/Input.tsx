import { ReactNode, useState, ChangeEvent } from 'react';
import { Check, CircleFill, EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import { clsx } from 'clsx';

import { InputGroup } from './InputGroup';

interface inputProps {
    disabled?: boolean,
    type?: React.HTMLInputTypeAttribute | "textarea" | "option",
    id?: string,
    name?: string,
    onChange?: (e: ChangeEvent<any>) => void,
    pattern?: string,
    minLength?: number,
    accept?: string,
    value?: string | number | boolean,
    className?: string,
    rootClassName?: string,
    icon?: ReactNode,
    placeholder?: string,
    label?: string,
    children?: ReactNode,
}

const inputStyle = `
    h-auto
    bg-transparent
    rounded-2xl
    outline-4 outline-none outline-offset-0 outline-indigo-600/0 focus:outline-indigo-600/50
    transition duration-500
`;

const inputPadding = "p-2 lg:p-4";

function Input(props: inputProps) {
    const [showPassword, setShowPassword] = useState(false);

    switch (props.type) {
        case "textarea":
            return (
                <InputGroup htmlFor={props.id} className="flex-col" rootClassName={props.rootClassName} icon={props.icon} label={props.label} labelInside>
                    <textarea
                        className={clsx(inputStyle, inputPadding)}
                        id={props.id}
                        name={props.name}
                        value={props.value as string}
                        onChange={props.onChange}
                        placeholder={props.placeholder}
                    />
                </InputGroup>
            );
            break;

        case "checkbox":
            return (
                <div className='flex items-center gap-2 relative'>
                    <input
                        className="
                            appearance-none
                            peer
                            shrink-0
                            m-1
                            w-6 h-6
                            border-2 border-solid rounded-lg
                            bg-transparent
                            border-zinc-200 dark:border-zinc-800
                            hover:shadow-2xl focus:shadow-2xl
                            hover:shadow-zinc-950/20 focus:shadow-zinc-950/20
                            dark:hover:shadow-zinc-200/20 dark:focus:shadow-zinc-200/20
                            hover:bg-zinc-200 dark:hover:bg-zinc-800
                            checked:border-slate-400 checked:bg-slate-800/50 hover:checked:bg-slate-800
                            transition duration-500
                        "
                        type={props.type}
                        id={props.id}
                        name={props.name}
                        checked={props.value as boolean}
                        onChange={(e) => {
                            if (props.onChange) {
                                const event = {
                                    currentTarget: {
                                        name: props.name,
                                        value: e.currentTarget.checked
                                    }
                                } as unknown as ChangeEvent<HTMLInputElement>;

                                props.onChange(event);
                            }
                        }}
                        disabled={props.disabled}
                    />
                    <Check className='absolute w-6 h-6 m-[6px] self-center hidden peer-checked:block pointer-events-none' />
                    {
                        props.icon ?
                            <div>
                                {props.icon}
                            </div> : <></>
                    }
                    {
                        props.label ?
                            <label htmlFor={props.id} className="pointer-events-none">
                                {props.label}
                            </label> : <></>
                    }
                </div>
            );
            break;

        case "radio":
            return (
                <div className='flex items-center gap-2'>
                    <input
                        className="
                            appearance-none
                            relative peer
                            shrink-0
                            m-1
                            w-6 h-6
                            border-2 border-solid rounded-full
                            bg-transparent
                            border-zinc-400 dark:border-zinc-700
                            hover:shadow-2xl focus:shadow-2xl
                            hover:shadow-zinc-950/20 focus:shadow-zinc-950/20
                            dark:hover:shadow-zinc-200/20 dark:focus:shadow-zinc-200/20
                            hover:bg-zinc-400 dark:hover:bg-zinc-700
                            checked:bg-slate-400 checked:border-slate-800 hover:checked:bg-slate-800
                        "
                        type={props.type}
                        id={props.id}
                        name={props.name}
                        value={props.value as string}
                        onChange={props.onChange}
                        disabled={props.disabled}
                    />
                    <CircleFill className='absolute w-3 h-3 m-[12px] self-center hidden peer-checked:block pointer-events-none' />
                    {
                        props.icon ?
                            <div>
                                {props.icon}
                            </div> : <></>
                    }
                    {
                        props.label ?
                            <label htmlFor={props.id} className="pointer-events-none">
                                {props.label}
                            </label> : <></>
                    }
                </div>
            );
            break;

        case "range":
            return (
                <InputGroup rootClassName={props.rootClassName} htmlFor={props.id} icon={props.icon} label={props.label}>
                    <div>
                        <input
                            className={clsx(inputStyle, inputPadding)}
                            type={props.type}
                            id={props.id}
                            name={props.name}
                            value={props.value as string}
                            onChange={props.onChange}
                            disabled={props.disabled}
                        />
                    </div>
                </InputGroup>
            );
            break;

        case "select":
            return (
                <InputGroup rootClassName={props.rootClassName} htmlFor={props.id} icon={props.icon} label={props.label}>
                    <select
                        className={clsx(inputStyle, "flex-1")}
                        id={props.id}
                        name={props.name}
                        value={props.value as string}
                        onChange={props.onChange}
                    >
                        {props.children}
                    </select>
                </InputGroup>
            );
            break;

        case "password":
            return (
                <InputGroup rootClassName={props.rootClassName} htmlFor={props.id} className={props.className} icon={props.icon} label={props.label}>
                    <input
                        className={clsx(inputStyle, inputPadding, "w-full")}
                        type={showPassword ? "text" : "password"}
                        id={props.id}
                        name={props.name}
                        value={props.value as string}
                        pattern={props.pattern}
                        minLength={props.minLength}
                        onChange={props.onChange}
                        placeholder={props.placeholder}
                        disabled={props.disabled}
                    />
                    <button className="p-4 hover:opacity-50 transition duration-500" type='button' onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeFill /> : <EyeSlashFill />}
                    </button>
                </InputGroup>
            );
            break;

        case "color":
            return (
                <InputGroup rootClassName={props.rootClassName} htmlFor={props.id} className={props.className} icon={props.icon} label={props.label}>
                    <input
                        className={clsx(inputStyle, "w-full")}
                        type={props.type}
                        id={props.id}
                        name={props.name}
                        value={props.value as string}
                        pattern={props.pattern}
                        accept={props.accept}
                        minLength={props.minLength}
                        onChange={props.onChange}
                        placeholder={props.placeholder}
                        disabled={props.disabled}
                    />
                    <span className="flex items-center p-2 text-sm">{props.value}</span>
                </InputGroup>
            );
            break;

        default:
            return (
                <InputGroup rootClassName={props.rootClassName} htmlFor={props.id} className={props.className} icon={props.icon} label={props.label}>
                    <input
                        className={clsx(inputStyle, inputPadding, "w-full")}
                        type={props.type}
                        id={props.id}
                        name={props.name}
                        value={props.value as string}
                        pattern={props.pattern}
                        accept={props.accept}
                        minLength={props.minLength}
                        onChange={props.onChange}
                        placeholder={props.placeholder}
                        disabled={props.disabled}
                    />
                </InputGroup>
            );
            break;
    }
}

export { Input };