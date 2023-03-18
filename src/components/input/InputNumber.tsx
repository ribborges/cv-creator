import './style/_numberinput.scss';

interface numberProps {
    id?: string,
    name?: string,
    icon: string,
    placeholder?: string,
}

export function InputNumber(Props: numberProps) {
    return (
        <div className="input-group">
            <span className={Props.icon + " input-addon"}/>
            <input type="number" placeholder={Props.placeholder}/>
        </div>
    );
}