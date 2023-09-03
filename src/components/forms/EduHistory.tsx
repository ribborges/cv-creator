import { displayText } from '../../App';
import { Fieldset } from '../input/Fieldset';
import { Input } from '../input/Input';
import { FormData } from './CvForm';

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
    onChange: (event: React.ChangeEvent<HTMLInputElement>, index: number, key: "schoolName" | "schoolDegree" | "schoolFieldStudy" | "schoolLocation" | "schoolBgDate" | "schoolEdDate" | "schoolDetails") => void;
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
                    icon="bi bi-mortarboard-fill"
                    placeholder={props.lang.schoolName}
                />
                <Input
                    type="text"
                    id={"schoolDegree" + props.id}
                    name={"schoolDegree" + props.id}
                    value={props.value?.schoolDegree}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "schoolDegree")}
                    icon="bi bi-award-fill"
                    placeholder={props.lang.schoolDegree}
                />
                <Input
                    type="text"
                    id={"schoolFieldStudy" + props.id}
                    name={"schoolFieldStudy" + props.id}
                    value={props.value?.schoolFieldStudy}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "schoolFieldStudy")}
                    icon="bi bi-binoculars-fill"
                    placeholder={props.lang.schoolFieldStudy}
                />
                <Input
                    type="text"
                    id={"schoolLocation" + props.id}
                    name={"schoolLocation" + props.id}
                    value={props.value?.schoolLocation}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "schoolLocation")}
                    icon="bi bi-geo-alt-fill"
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
                    icon="bi bi-calendar-fill"
                />
                <Input
                    type="month"
                    id={"schoolEdDate" + props.id}
                    name={"schoolEdDate" + props.id}
                    value={props.value?.schoolEdDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "schoolEdDate")}
                    icon="bi bi-calendar-fill"
                />
            </div>
            <Input
                type="textarea"
                id={"schoolDetails" + props.id}
                name={"schoolDetails" + props.id}
                value={props.value?.schoolDetails}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "schoolDetails")}
                icon="bi bi-card-text"
                title={props.lang.details}
            />
        </Fieldset>
    );
}