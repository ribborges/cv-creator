import { ReactNode } from 'react';
import { AwardFill, BinocularsFill, CalendarFill, CardText, GeoAltFill, MortarboardFill, PlusLg, TrashFill } from "react-bootstrap-icons";

import { Fieldset } from '../input/Fieldset';
import { Input } from '../input/Input';
import Translator from '../Translator';
import { eduHistory } from '../../types/cvData';
import { Button } from '../input/Button';
import { useCvDataStore } from '../../lib/store';

interface eduHistoryProps {
    id: number,
    value?: eduHistory,
    onChange: (event: React.ChangeEvent<HTMLInputElement>, index: number, key: "schoolName" | "schoolDegree" | "schoolFieldStudy" | "schoolLocation" | "schoolBgDate" | "schoolEdDate" | "schoolDetails") => void,
    children: ReactNode
}

function EduHistoryList() {
    const { setEduHistory, eduHistory } = useCvDataStore();

    const handleEduHistoryChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number,
        key: "schoolName" | "schoolDegree" | "schoolFieldStudy" | "schoolLocation" | "schoolBgDate" | "schoolEdDate" | "schoolDetails"
    ) => {
        const { value } = event.target;
        const newEduHistory = [...eduHistory];
        newEduHistory[index][key] = value;
        setEduHistory(newEduHistory);
    };

    const handleAddEduHistory = () => {
        const newEduHistory = [...(eduHistory || []), {
            schoolName: "",
            schoolDegree: "",
            schoolFieldStudy: "",
            schoolLocation: "",
            schoolBgDate: "",
            schoolEdDate: "",
            schoolDetails: ""
        }];
        setEduHistory(newEduHistory);
    };

    const handleRemoveEduHistory = (index: number) => {
        const newEduHistory = [...(eduHistory || [])];
        newEduHistory.splice(index, 1);
        setEduHistory(newEduHistory);
    };

    return (
        <>
            {
                eduHistory.map((value, index) => (
                    <div key={index} className="flex flex-col">
                        <EduHistory id={index} value={value} onChange={handleEduHistoryChange}>
                            <Button type="button" onClick={() => handleRemoveEduHistory(index)}><TrashFill /></Button>
                        </EduHistory>
                    </div>
                ))
            }
            <Button type="button" onClick={handleAddEduHistory}><PlusLg /></Button>
        </>
    );
}

function EduHistory(props: eduHistoryProps) {
    return (
        <Fieldset legend={Translator({ path: "eduHistory.title" })}>
            <div className="flex gap-1 flex-col">
                <div className='flex gap-1'>
                    <div className='flex flex-col gap-1 flex-1'>
                        <Input
                            type="text"
                            id={"schoolName" + props.id}
                            name={"schoolName" + props.id}
                            value={props.value?.schoolName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "schoolName")}
                            icon={<MortarboardFill />}
                            placeholder={Translator({ path: "eduHistory.name" })}
                        />
                        <Input
                            type="text"
                            id={"schoolDegree" + props.id}
                            name={"schoolDegree" + props.id}
                            value={props.value?.schoolDegree}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "schoolDegree")}
                            icon={<AwardFill />}
                            placeholder={Translator({ path: "eduHistory.degree" })}
                        />
                        <Input
                            type="month"
                            id={"schoolBgDate" + props.id}
                            name={"schoolBgDate" + props.id}
                            value={props.value?.schoolBgDate}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "schoolBgDate")}
                            icon={<CalendarFill />}
                            placeholder={Translator({ path: "eduHistory.bgDate" })}
                        />
                    </div>
                    <div className='flex flex-col gap-1 flex-1'>
                        <Input
                            type="text"
                            id={"schoolFieldStudy" + props.id}
                            name={"schoolFieldStudy" + props.id}
                            value={props.value?.schoolFieldStudy}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "schoolFieldStudy")}
                            icon={<BinocularsFill />}
                            placeholder={Translator({ path: "eduHistory.fieldStudy" })}
                        />
                        <Input
                            type="text"
                            id={"schoolLocation" + props.id}
                            name={"schoolLocation" + props.id}
                            value={props.value?.schoolLocation}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "schoolLocation")}
                            icon={<GeoAltFill />}
                            placeholder={Translator({ path: "eduHistory.location" })}
                        />
                        <Input
                            type="month"
                            id={"schoolEdDate" + props.id}
                            name={"schoolEdDate" + props.id}
                            value={props.value?.schoolEdDate}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "schoolEdDate")}
                            icon={<CalendarFill />}
                            placeholder={Translator({ path: "eduHistory.edDate" })}
                        />
                    </div>
                </div>
                <Input
                    type="textarea"
                    id={"schoolDetails" + props.id}
                    name={"schoolDetails" + props.id}
                    value={props.value?.schoolDetails}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "schoolDetails")}
                    icon={<CardText />}
                    title={Translator({ path: "eduHistory.details" })}
                />
                <div className="flex-container">
                    {props.children}
                </div>
            </div>
        </Fieldset>
    );
}

export { EduHistoryList, EduHistory };