import { PersonFillGear, PlusLg, TrashFill } from 'react-bootstrap-icons';

import { Input } from '../input/Input';
import Translator from '../Translator';
import { Button } from '../input/Button';
import { useCvDataStore } from '../../lib/store';
import { Fieldset } from '../input/Fieldset';

interface skillProps {
    id: number,
    value?: string,
    className?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void
}

function SkillList() {
    const { setSkills, skills } = useCvDataStore();

    const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newSkills = { ...skills, hard: [...(skills.hard || [])], soft: [...(skills.soft || [])] };
        if (index < skills.hard.length) {
            newSkills.hard[index] = event.target.value;
        } else {
            newSkills.soft[index - skills.hard.length] = event.target.value;
        }
        setSkills(newSkills);
    };

    const handleAddSkills = () => {
        const newSkills = { ...skills, hard: [...(skills.hard || []), ''], soft: [...(skills.soft || [])] };
        setSkills(newSkills);
    };

    const handleRemoveSkills = (index: number) => {
        const newSkills = { ...skills, hard: [...(skills.hard || [])], soft: [...(skills.soft || [])] };
        if (index < skills.hard.length) {
            newSkills.hard.splice(index, 1);
        } else {
            newSkills.soft.splice(index - skills.hard.length, 1);
        }
        setSkills(newSkills);
    };

    return (
        <div className="flex flex-[3] flex-col md:flex-row gap-2">
            <Fieldset legend={Translator({ path: "skills.hard" })} className="flex-1">
                {
                    skills?.hard?.map((value, index) => (
                        <div key={index} className="flex gap-1">
                            <Skill id={index} value={value} onChange={handleSkillsChange} />
                            <Button type="button" onClick={() => handleRemoveSkills(index)}><TrashFill /></Button>
                        </div>
                    ))
                }
                <Button type="button" onClick={handleAddSkills} > <PlusLg /></Button >
            </Fieldset>
            <Fieldset legend={Translator({ path: "skills.soft" })} className="flex-1">
                {
                    skills?.soft?.map((value, index) => (
                        <div key={index} className="flex gap-1">
                            <Skill id={index} value={value} onChange={handleSkillsChange} />
                            <Button type="button" onClick={() => handleRemoveSkills(index)}><TrashFill /></Button>
                        </div>
                    ))
                }
                <Button type="button" onClick={handleAddSkills} > <PlusLg /></Button >
            </Fieldset>
        </div>
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