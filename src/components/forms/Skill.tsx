import { PersonFillGear, PlusLg, TrashFill } from 'react-bootstrap-icons';

import { Input } from '../input/Input';
import Translator from '../Translator';
import { Button } from '../input/Button';
import { useCvDataStore } from '../../lib/store';

interface skillProps {
    id: number,
    value?: string,
    className?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

function SkillList() {
    const { setSkills, skills } = useCvDataStore();

    const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newSkills = [...(skills || [])];
        newSkills[index] = event.target.value;
        setSkills(newSkills);
    };

    const handleAddSkills = () => {
        const newSkills = [...(skills || []), ''];
        setSkills(newSkills);
    };

    const handleRemoveSkills = (index: number) => {
        const newSkills = [...(skills || [])];
        newSkills.splice(index, 1);
        setSkills(newSkills);
    };

    return (
        <>
            {
                skills?.map((value, index) => (
                    <div key={index} className="flex gap-1">
                        <Skill id={index} value={value} onChange={handleSkillsChange} />
                        <Button type="button" onClick={() => handleRemoveSkills(index)}><TrashFill /></Button>
                    </div>
                ))
            }
            <Button type="button" onClick={handleAddSkills} > <PlusLg /></Button >
        </>
    );
}

function Skill(props: skillProps) {
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

export { SkillList, Skill };