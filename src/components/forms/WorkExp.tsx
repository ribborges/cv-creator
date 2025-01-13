import { ReactNode } from 'react';
import { BriefcaseFill, BuildingsFill, CalendarFill, CardText, GeoAltFill } from 'react-bootstrap-icons';

import { Fieldset } from '../input/Fieldset';
import { Input } from '../input/Input';
import Translator from '../Translator';

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
    onChange: (event: React.ChangeEvent<HTMLInputElement>, index: number, key: "workCompanyName" | "workJobTitle" | "workLocation" | "workBgDate" | "workEdDate" | "workDetails") => void,
    children: ReactNode
}

export default function WorkExp(props: workExpProps) {
    return (
        <Fieldset legend={Translator({ path: "workExp.title" })}>
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
                            placeholder={Translator({ path: "workExp.companyName" })}
                        />
                        <Input
                            type="text"
                            id={"workJobTitle" + props.id}
                            name={"workJobTitle" + props.id}
                            value={props.value?.workJobTitle}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "workJobTitle")}
                            icon={<BriefcaseFill />}
                            placeholder={Translator({ path: "workExp.jobTitle" })}
                        />
                        <Input
                            type="month"
                            id={"workBgDate" + props.id}
                            name={"workBgDate" + props.id}
                            value={props.value?.workBgDate}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "workBgDate")}
                            icon={<CalendarFill />}
                            placeholder={Translator({ path: "workExp.bgDate" })}
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
                            placeholder={Translator({ path: "workExp.title" })}
                        />
                        <div className='flex-1'></div>
                        <Input
                            type="month"
                            id={"workEdDate" + props.id}
                            name={"workEdDate" + props.id}
                            value={props.value?.workEdDate}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "workEdDate")}
                            icon={<CalendarFill />}
                            placeholder={Translator({ path: "workExp.edDate" })}
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
                    title={Translator({ path: "workExp.details" })}
                />
                <div className="flex-container">
                    {props.children}
                </div>
            </div>
        </Fieldset>
    );
}