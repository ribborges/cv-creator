import { ReactNode } from 'react';
import { AwardFill, BinocularsFill, CalendarFill, CardText, GeoAltFill, MortarboardFill, PlusLg, TrashFill } from "react-bootstrap-icons";

import { Fieldset } from '@/components/Input/Fieldset';
import { Input } from '@/components/Input/Input';
import Translator from '../Translator';
import { education } from '../../types/cvData';
import { Button } from '@/components/Input/Button';
import { useCvDataStore } from '../../lib/store';

interface educationProps {
    id: number,
    value?: education,
    onChange: (event: React.ChangeEvent<HTMLInputElement>, index: number, key: "school" | "degree" | "field" | "location" | "start_date" | "end_date" | "details") => void,
    children: ReactNode
}

function EducationList() {
    const { setEducation, education } = useCvDataStore();

    const handleEducationChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number,
        key: "school" | "degree" | "field" | "location" | "start_date" | "end_date" | "details"
    ) => {
        const { value } = event.target;
        const newEducation = [...education];
        newEducation[index][key] = value;
        setEducation(newEducation);
    };

    const handleAddEducation = () => {
        const newEducation = [...(education || []), {
            school: "",
            degree: "",
            field: "",
            location: "",
            start_date: "",
            end_date: "",
            details: ""
        }];
        setEducation(newEducation);
    };

    const handleRemoveEducation = (index: number) => {
        const newEducation = [...(education || [])];
        newEducation.splice(index, 1);
        setEducation(newEducation);
    };

    return (
        <>
            {
                education.map((value, index) => (
                    <div key={index} className="flex flex-col">
                        <Education id={index} value={value} onChange={handleEducationChange}>
                            <Button type="button" onClick={() => handleRemoveEducation(index)}><TrashFill /></Button>
                        </Education>
                    </div>
                ))
            }
            <Button type="button" onClick={handleAddEducation}><PlusLg /></Button>
        </>
    );
}

function Education(props: educationProps) {
    return (
        <Fieldset legend={Translator({ path: "education.title" })} className="flex gap-1 flex-col">
            <div className='flex gap-1'>
                <div className='flex flex-col gap-1 flex-1'>
                    <Input
                        type="text"
                        id={"school" + props.id}
                        name={"school" + props.id}
                        value={props.value?.school}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "school")}
                        icon={<MortarboardFill />}
                        placeholder={Translator({ path: "education.name" })}
                    />
                    <Input
                        type="text"
                        id={"degree" + props.id}
                        name={"degree" + props.id}
                        value={props.value?.degree}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "degree")}
                        icon={<AwardFill />}
                        placeholder={Translator({ path: "education.degree" })}
                    />
                    <Input
                        type="month"
                        id={"start_date" + props.id}
                        name={"start_date" + props.id}
                        value={props.value?.start_date}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "start_date")}
                        icon={<CalendarFill />}
                        placeholder={Translator({ path: "education.start_date" })}
                    />
                </div>
                <div className='flex flex-col gap-1 flex-1'>
                    <Input
                        type="text"
                        id={"field" + props.id}
                        name={"field" + props.id}
                        value={props.value?.field}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "field")}
                        icon={<BinocularsFill />}
                        placeholder={Translator({ path: "education.field" })}
                    />
                    <Input
                        type="text"
                        id={"location" + props.id}
                        name={"location" + props.id}
                        value={props.value?.location}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "location")}
                        icon={<GeoAltFill />}
                        placeholder={Translator({ path: "education.location" })}
                    />
                    <Input
                        type="month"
                        id={"end_date" + props.id}
                        name={"end_date" + props.id}
                        value={props.value?.end_date}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "end_date")}
                        icon={<CalendarFill />}
                        placeholder={Translator({ path: "education.end_date" })}
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
                title={Translator({ path: "education.details" })}
            />
            {props.children}
        </Fieldset>
    );
}

export { EducationList, Education };