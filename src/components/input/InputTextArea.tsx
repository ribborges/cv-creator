import './style/_textareainput.scss';

export interface textAreaProps {
    id?: string,
    className?: string,
    name?: string,
    icon: string,
    placeholder?: string,
    title?: string,
}

export function InputTextArea(Props: textAreaProps) {
    return (
        <div className="text-area">
            <div className="text-area-title">
                <span className={Props.icon + " input-addon"}/>
                <span className="input-addon">{Props.title}</span>
            </div>
            <div className="text-box">
                <textarea id={Props.id} name={Props.title} placeholder={Props.placeholder}/>
            </div>
        </div>
    );
}