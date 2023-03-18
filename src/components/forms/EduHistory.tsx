import { Fieldset } from '../input/Fieldset';
import { Input } from '../input/Input';
import { InputTextArea } from '../input/InputTextArea';
import { InputCheckbox } from '../input/InputToggle';

interface eduHistoryProps {
    id?: string,
    className?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
}

export default function EduHistory(props: eduHistoryProps) {
    return (
        <Fieldset className={props.className + " flex-container"} legend="Education history">
            <div className="flex-container">
                <Input type="text" id={"schoolName" + props.id} name={"schoolName" + props.id} onChange={props.onChange} icon="bi bi-mortarboard-fill" placeholder="School name" />
                <Input type="text" id={"schoolDegree" + props.id} name={"schoolDegree" + props.id} onChange={props.onChange} icon="bi bi-award-fill" placeholder="Degree" />
                <Input type="text" id={"schoolFieldStudy" + props.id} name={"schoolFieldStudy" + props.id} onChange={props.onChange} icon="bi bi-binoculars-fill" placeholder="Field of study" />
                <Input type="text" id={"schoolLocation" + props.id} name={"schoolLocation" + props.id} onChange={props.onChange} icon="bi bi-geo-alt-fill" placeholder="Location" />
            </div>
            <div className="flex-container">
                <Input type="date" id={"schoolBgDate" + props.id} name={"schoolBgDate" + props.id} onChange={props.onChange} icon="bi bi-calendar-fill" />
                <Input type="date" id={"schoolEdDate" + props.id} name={"schoolEdDate" + props.id} onChange={props.onChange} icon="bi bi-calendar-fill" />
            </div>
            <InputCheckbox id="checkbox-1" value="Checkbox 1" name="checkbox">I currently study here</InputCheckbox>
            <InputTextArea icon="bi bi-card-text" name="Details" />
        </Fieldset>
    );
}