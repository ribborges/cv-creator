import './style/_colorinput.scss';

export interface colorProps {
    id?: string,
    name?: string,
    icon: string,
}

export function InputColor(Props: colorProps) {
    return (
        <div className="input-group">
            <span className={Props.icon + " input-addon"}/>
            <input type="color"/>
        </div>
    );
}