import './style/_phoneinput.scss';

export interface phoneProps {
    id?: string,
    className?: string,
    name?: string,
    icon: string,
    placeholder?: string,
}

export function InputPhone(Props: phoneProps) {
    return (
        <div className="input-group">
            <span className={Props.icon + " input-addon"}/>
            <input type="tel" placeholder={Props.placeholder} pattern="([0-9]{2})-[0-9]{5}-[0-9]{4}"/>
        </div>
    );
}