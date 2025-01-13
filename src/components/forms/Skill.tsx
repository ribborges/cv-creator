import { PersonFillGear } from 'react-bootstrap-icons';

import { Input } from '../input/Input';
import Translator from '../Translator';

interface skillProps {
    id: number,
    value?: string,
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
            icon={<PersonFillGear />}
            placeholder={Translator({ path: "skills.skill" })}
        />
    );
}