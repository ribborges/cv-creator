import './style/_textinput.scss';

export interface textProps {
    id?: string,
    className?: string,
    name?: string,
    icon: string,
    placeholder?: string,
}

export function InputText(Props: textProps) {
    return (
        <div className={Props.className + " input-group"}>
            <span className={Props.icon + " input-addon"}/>
            <input id={Props.id} type="text" placeholder={Props.placeholder}/>
        </div>
    );
}