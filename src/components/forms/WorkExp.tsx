import { Fieldset } from '../input/Fieldset';
import { Input } from '../input/Input';
import { FormData } from './CvForm';

interface workExpProps {
    id: number,
    value?: {
        workCompanyName: string,
        workJobTitle: string,
        workLocation: string,
        workBgDate: string,
        workEdDate: string,
        workDetails: string;
    },
    className?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>, index: number, key: keyof FormData["workExp"][number]) => void;
}

export default function WorkExp(props: workExpProps) {
    return (
        <Fieldset className={props.className} legend="Work experience">
            <div className="flex-container">
                <Input
                    type="text"
                    id={"workCompanyName" + props.id}
                    name={"workCompanyName" + props.id}
                    value={props.value?.workCompanyName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "workCompanyName")}
                    icon="bi bi-buildings-fill"
                    placeholder="Company name"
                />
                <Input
                    type="text"
                    id={"workJobTitle" + props.id}
                    name={"workJobTitle" + props.id}
                    value={props.value?.workJobTitle}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "workJobTitle")}
                    icon="bi bi-briefcase-fill"
                    placeholder="Job title"
                />
                <Input
                    type="text"
                    id={"workLocation" + props.id}
                    name={"workLocation" + props.id}
                    value={props.value?.workLocation}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "workLocation")}
                    icon="bi bi-geo-alt-fill"
                    placeholder="Location"
                />
            </div>
            <div className="flex-container">
                <Input
                    type="month"
                    id={"workBgDate" + props.id}
                    name={"workBgDate" + props.id}
                    value={props.value?.workBgDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "workBgDate")}
                    icon="bi bi-calendar-fill"
                />
                <Input
                    type="month"
                    id={"workEdDate" + props.id}
                    name={"workEdDate" + props.id}
                    value={props.value?.workEdDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "workEdDate")}
                    icon="bi bi-calendar-fill"
                />
            </div>
            <Input
                type="textarea"
                id={"workDetails" + props.id}
                name={"workDetails" + props.id}
                value={props.value?.workDetails}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "workDetails")}
                icon="bi bi-card-text"
                title="Details"
            />
        </Fieldset>
    );
}