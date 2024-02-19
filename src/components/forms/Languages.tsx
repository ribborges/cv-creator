import { BarChartFill, Translate } from 'react-bootstrap-icons';

import { displayText } from '../../types/lang';
import { Input } from '../input/Input';

interface languagesProps {
    id: number,
    value?: {
        language?: string,
        level?: string;
    },
    lang: displayText,
    className?: string,
    onSelect: React.Dispatch<React.SetStateAction<boolean>>,
    onChange: (event: React.ChangeEvent<HTMLInputElement>, index: number, key: "language" | "level") => void;
}

export default function Languages(props: languagesProps) {
    return (
        <div className={props.className + " flex-container"}>
            <Input
                type="text"
                id={"language" + props.id}
                name={"language" + props.id}
                value={props.value?.language}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "language")}
                icon={<Translate />}
                placeholder={props.lang.language}
            />
            <Input
                type="option"
                id={"language" + props.id}
                name={"language" + props.id}
                value={props.value?.level}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "level")}
                icon={<BarChartFill />}
            >
                <option value="select" onSelect={() => props.onSelect(true)}>{props.lang.select}</option>
                <option value="elementary" onSelect={() => props.onSelect(false)}>{props.lang.elementary}</option>
                <option value="limited" onSelect={() => props.onSelect(false)}>{props.lang.limited}</option>
                <option value="professional" onSelect={() => props.onSelect(false)}>{props.lang.professional}</option>
                <option value="full" onSelect={() => props.onSelect(false)}>{props.lang.full}</option>
                <option value="native" onSelect={() => props.onSelect(false)}>{props.lang.native}</option>
            </Input>
        </div>
    );
}