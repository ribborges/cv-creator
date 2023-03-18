import { Fieldset } from '../input/Fieldset';
import { Input } from '../input/Input';
import { InputTextArea } from '../input/InputTextArea';
import { InputCheckbox } from '../input/InputToggle';

interface workExpProps {
    id?: string,
    className?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
}

export default function WorkExp(props: workExpProps) {
    return (
        <Fieldset className={props.className} legend="Work experience">
            <div className="flex-container">
                <Input type="text" id={"companyName" + props.id} name={"companyName" + props.id} onChange={props.onChange} icon="bi bi-buildings-fill" placeholder="Company name" />
                <Input type="text" id={"companyJobTitle" + props.id} name={"companyJobTitle" + props.id} onChange={props.onChange} icon="bi bi-briefcase-fill" placeholder="Job title" />
                <Input type="text" id={"companyLocation" + props.id} name={"companyLocation" + props.id} onChange={props.onChange} icon="bi bi-geo-alt-fill" placeholder="Location" />
            </div>
            <div className="flex-container">
                <Input type="date" id={"companyBgDate" + props.id} name={"companyBgDate" + props.id} onChange={props.onChange} icon="bi bi-calendar-fill" />
                <Input type="date" id={"companyEdDate" + props.id} name={"companyEdDate" + props.id} onChange={props.onChange} icon="bi bi-calendar-fill" />
            </div>
            <InputCheckbox id="checkbox-1" value="Checkbox 1" name="checkbox">I currently work here</InputCheckbox>
            <InputTextArea icon="bi bi-card-text" name="Details" />
        </Fieldset>
    );
}