import { ReactNode, useState } from 'react';
import { BriefcaseFill, BuildingsFill, CalendarFill, CardText, GeoAltFill, PlusLg, TrashFill } from 'react-bootstrap-icons';

import { Fieldset } from '../input/Fieldset';
import { Input } from '../input/Input';
import Translator from '../Translator';
import { experience } from '../../types/cvData';
import { Button } from '../input/Button';
import { useCvDataStore } from '../../lib/store';

interface experienceProps {
    id: number,
    value?: experience,
    onChange: (event: React.ChangeEvent<HTMLInputElement>, index: number, key: "company" | "position" | "location" | "start_date" | "end_date" | "details") => void,
    children: ReactNode
}

function ExperienceList() {
    const { setExperience, experience } = useCvDataStore();

    const handleExperienceChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number,
        key: "company" | "position" | "location" | "start_date" | "end_date" | "details"
    ) => {
        const { value } = event.target;
        const newExperience = [...experience];
        newExperience[index][key] = value;
        setExperience(newExperience);
    };

    const handleAddExperience = () => {
        const newExperience = [...(experience || []), {
            company: "",
            position: "",
            location: "",
            start_date: "",
            end_date: "",
            details: ""
        }];
        setExperience(newExperience);
    };

    const handleRemoveExperience = (index: number) => {
        const newExperience = [...(experience || [])];
        newExperience.splice(index, 1);
        setExperience(newExperience);
    };

    return (
        <>
            {
                experience.map((value, index) => (
                    <div key={index} className="flex flex-col">
                        <Experience id={index} value={value} onChange={handleExperienceChange}>
                            <Button type="button" onClick={() => handleRemoveExperience(index)}><TrashFill /></Button>
                        </Experience>
                    </div>
                ))
            }
            <Button type="button" onClick={handleAddExperience}><PlusLg /></Button>
        </>
    );
}

function Experience(props: experienceProps) {
    return (
        <Fieldset legend={Translator({ path: "experience.title" })}>
            <div className="flex gap-1 flex-col">
                <div className='flex gap-1'>
                    <div className='flex flex-col gap-1 flex-1'>
                        <Input
                            type="text"
                            id={"company" + props.id}
                            name={"company" + props.id}
                            value={props.value?.company}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "company")}
                            icon={<BuildingsFill />}
                            placeholder={Translator({ path: "experience.company" })}
                        />
                        <Input
                            type="text"
                            id={"position" + props.id}
                            name={"position" + props.id}
                            value={props.value?.position}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "position")}
                            icon={<BriefcaseFill />}
                            placeholder={Translator({ path: "experience.position" })}
                        />
                        <Input
                            type="month"
                            id={"start_date" + props.id}
                            name={"start_date" + props.id}
                            value={props.value?.start_date}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "start_date")}
                            icon={<CalendarFill />}
                            placeholder={Translator({ path: "experience.start_date" })}
                        />
                    </div>
                    <div className='flex flex-col gap-1 flex-1'>
                        <Input
                            type="text"
                            id={"location" + props.id}
                            name={"location" + props.id}
                            value={props.value?.location}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "location")}
                            icon={<GeoAltFill />}
                            placeholder={Translator({ path: "experience.location" })}
                        />
                        <div className='flex-1'></div>
                        <Input
                            type="month"
                            id={"end_date" + props.id}
                            name={"end_date" + props.id}
                            value={props.value?.end_date}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "end_date")}
                            icon={<CalendarFill />}
                            placeholder={Translator({ path: "experience.end_date" })}
                        />
                    </div>
                </div>
                <Input
                    type="textarea"
                    id={"details" + props.id}
                    name={"details" + props.id}
                    value={props.value?.details}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "details")}
                    icon={<CardText />}
                    title={Translator({ path: "experience.details" })}
                />
                <div className="flex-container">
                    {props.children}
                </div>
            </div>
        </Fieldset>
    );
}

export { ExperienceList, Experience };