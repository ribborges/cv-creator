import './style/_dateinput.scss';

export interface dateProps {
    id?: string,
    name?: string,
    icon: string,
}

export function InputDate(Props: dateProps) {
    return (
        <div className="input-group">
            <span className={Props.icon + " input-addon"}/>
            <input type="date" id={Props.id} name={Props.name}/>
        </div>
    );
}