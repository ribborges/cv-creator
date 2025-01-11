import { ReactNode } from 'react';
import { BriefcaseFill, BuildingsFill, CalendarFill, CardText, GeoAltFill } from 'react-bootstrap-icons';

import { displayText } from '../../types/lang';
import { Fieldset } from '../input/Fieldset';
import { Input } from '../input/Input';

interface workExpProps {
    id: number,
    value?: {
        workCompanyName?: string,
        workJobTitle?: string,
        workLocation?: string,
        workBgDate?: string,
        workEdDate?: string,
        workDetails?: string;
    },
    lang: displayText,
    onChange: (event: React.ChangeEvent<HTMLInputElement>, index: number, key: "workCompanyName" | "workJobTitle" | "workLocation" | "workBgDate" | "workEdDate" | "workDetails") => void,
    children: ReactNode
}

export default function WorkExp(props: workExpProps) {
    return (
        <Fieldset legend={props.lang.workExp}>
            <div className="flex gap-1 flex-col">
                <div className='flex gap-1'>
                    <div className='flex flex-col gap-1 flex-1'>
                        <Input
                            type="text"
                            id={"workCompanyName" + props.id}
                            name={"workCompanyName" + props.id}
                            value={props.value?.workCompanyName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "workCompanyName")}
                            icon={<BuildingsFill />}
                            placeholder={props.lang.workCompanyName}
                        />
                        <Input
                            type="text"
                            id={"workJobTitle" + props.id}
                            name={"workJobTitle" + props.id}
                            value={props.value?.workJobTitle}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "workJobTitle")}
                            icon={<BriefcaseFill />}
                            placeholder={props.lang.workJobTitle}
                        />
                        <Input
                            type="month"
                            id={"workBgDate" + props.id}
                            name={"workBgDate" + props.id}
                            value={props.value?.workBgDate}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "workBgDate")}
                            icon={<CalendarFill />}
                        />
                    </div>
                    <div className='flex flex-col gap-1 flex-1'>
                        <Input
                            type="text"
                            id={"workLocation" + props.id}
                            name={"workLocation" + props.id}
                            value={props.value?.workLocation}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "workLocation")}
                            icon={<GeoAltFill />}
                            placeholder={props.lang.location}
                        />
                        <div className='flex-1'></div>
                        <Input
                            type="month"
                            id={"workEdDate" + props.id}
                            name={"workEdDate" + props.id}
                            value={props.value?.workEdDate}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "workEdDate")}
                            icon={<CalendarFill />}
                        />
                    </div>
                </div>
                <Input
                    type="textarea"
                    id={"workDetails" + props.id}
                    name={"workDetails" + props.id}
                    value={props.value?.workDetails}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "workDetails")}
                    icon={<CardText />}
                    title={props.lang.details}
                />
                <div className="flex-container">
                    {props.children}
                </div>
            </div>
        </Fieldset>
    );
}