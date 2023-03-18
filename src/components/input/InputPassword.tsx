import './style/_passwordinput.scss';

export interface passwordProps {
    id?: string,
    className?: string,
    name?: string,
    icon: string,
    placeholder?: string,
    minLength?: number,
}

export function InputPassword(Props: passwordProps) {
    return (
        <div className="input-group">
            <span className={Props.icon + " input-addon"}/>
            <input type="password" placeholder={Props.placeholder} minLength={(Props.minLength == null)? 8 : Props.minLength}/>
        </div>
    );
}