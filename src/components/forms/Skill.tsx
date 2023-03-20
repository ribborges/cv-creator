import { displayText } from '../../App';
import { Input } from '../input/Input';
import { FormData } from './CvForm';

interface skillProps {
    id: number,
    value?: string,
    lang: displayText,
    className?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

export default function Skill(props: skillProps) {
    return (
        <Input
            className={props.className}
            type="text"
            id={"skill" + props.id}
            name={"skill" + props.id}
            value={props.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id)}
            icon="bi bi-person-fill-gear"
            placeholder={props.lang.skill}
        />
    );
}