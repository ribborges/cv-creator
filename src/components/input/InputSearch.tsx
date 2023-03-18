import './style/_searchinput.scss';

export interface searchProps {
    id?: string,
    className?: string,
    name?: string,
    icon: string,
    placeholder?: string,
}

export function InputSearch(Props: searchProps) {
    return (
        <div className="input-group">
            <span className={Props.icon + " input-addon"}/>
            <input type="search" placeholder={Props.placeholder}/>
        </div>
    );
}