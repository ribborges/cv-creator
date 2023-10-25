import { ReactNode } from 'react';
import { AwardFill, BinocularsFill, CalendarFill, CardText, GeoAltFill, MortarboardFill } from "react-bootstrap-icons";

import { displayText } from '../../types/lang';
import { Fieldset } from '../input/Fieldset';
import { Input } from '../input/Input';

interface eduHistoryProps {
    id: number,
    value?: {
        schoolName?: string,
        schoolDegree?: string,
        schoolFieldStudy?: string,
        schoolLocation?: string,
        schoolBgDate?: string,
        schoolEdDate?: string,
        schoolDetails?: string;
    },
    lang: displayText,
    className?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>, index: number, key: "schoolName" | "schoolDegree" | "schoolFieldStudy" | "schoolLocation" | "schoolBgDate" | "schoolEdDate" | "schoolDetails") => void,
    children: ReactNode
}

export default function EduHistory(props: eduHistoryProps) {
    return (
        <Fieldset className={props.className} legend={props.lang.eduHistory}>
            <div className="flex-container">
                <Input
                    type="text"
                    id={"schoolName" + props.id}
                    name={"schoolName" + props.id}
                    value={props.value?.schoolName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "schoolName")}
                    icon={<MortarboardFill />}
                    placeholder={props.lang.schoolName}
                />
                <Input
                    type="text"
                    id={"schoolDegree" + props.id}
                    name={"schoolDegree" + props.id}
                    value={props.value?.schoolDegree}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "schoolDegree")}
                    icon={<AwardFill />}
                    placeholder={props.lang.schoolDegree}
                />
                <Input
                    type="text"
                    id={"schoolFieldStudy" + props.id}
                    name={"schoolFieldStudy" + props.id}
                    value={props.value?.schoolFieldStudy}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "schoolFieldStudy")}
                    icon={<BinocularsFill />}
                    placeholder={props.lang.schoolFieldStudy}
                />
                <Input
                    type="text"
                    id={"schoolLocation" + props.id}
                    name={"schoolLocation" + props.id}
                    value={props.value?.schoolLocation}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "schoolLocation")}
                    icon={<GeoAltFill />}
                    placeholder={props.lang.location}
                />
            </div>
            <div className="flex-container">
                <Input
                    type="month"
                    id={"schoolBgDate" + props.id}
                    name={"schoolBgDate" + props.id}
                    value={props.value?.schoolBgDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "schoolBgDate")}
                    icon={<CalendarFill />}
                />
                <Input
                    type="month"
                    id={"schoolEdDate" + props.id}
                    name={"schoolEdDate" + props.id}
                    value={props.value?.schoolEdDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "schoolEdDate")}
                    icon={<CalendarFill />}
                />
            </div>
            <Input
                type="textarea"
                id={"schoolDetails" + props.id}
                name={"schoolDetails" + props.id}
                value={props.value?.schoolDetails}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "schoolDetails")}
                icon={<CardText />}
                title={props.lang.details}
            />
            <div className="flex-container">
                {props.children}
            </div>
        </Fieldset>
    );
}