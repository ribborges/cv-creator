import './style/_fileinput.scss';

export interface fileProps {
    id?: string,
    name?: string,
    icon: string,
}

export function InputFile(Props: fileProps) {
    return (
        <div className="input-group">
            <span className={Props.icon + " input-addon"}/>
            <input type="file"/>
        </div>
    );
}