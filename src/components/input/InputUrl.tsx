import './style/_urlinput.scss';

export interface urlProps {
    id?: string,
    className?: string,
    name?: string,
    icon: string,
    placeholder?: string,
}

export function InputURL(Props: urlProps) {
    return (
        <div className="input-group">
            <span className={Props.icon + " input-addon"}/>
            <input type="url" placeholder={Props.placeholder}/>
        </div>
    );
}