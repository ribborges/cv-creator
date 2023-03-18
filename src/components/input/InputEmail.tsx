import './style/_emailinput.scss';

interface emailProps {
    id?: string,
    name?: string,
    icon: string,
    placeholder?: string,
}

export function InputEmail(Props: emailProps) {
    return (
        <div className="input-group">
            <span className={Props.icon + " input-addon"}/>
            <input type="email" placeholder={Props.placeholder}/>
        </div>
    );
}