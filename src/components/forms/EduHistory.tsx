import { Fieldset, InputCheckbox } from '../input/Input';
import { InputDate } from '../input/InputDate';
import { InputText } from '../input/InputText';
import { InputTextArea } from '../input/InputTextArea';

interface eduHistoryProps {
    className?: string,
}

export default function EduHistory(props: eduHistoryProps) {
    return (
        <Fieldset className={props.className + " flex-container"} legend="Education history">
            <div className="flex-container">
                <InputText icon="bi bi-mortarboard-fill" placeholder="School name" />
                <InputText icon="bi bi-award-fill" placeholder="Degree" />
                <InputText icon="bi bi-binoculars-fill" placeholder="Field of study" />
                <InputText icon="bi bi-geo-alt-fill" placeholder="Location" />
            </div>
            <div className="flex-container">
                <InputDate icon="bi bi-calendar-fill" name="Start date"></InputDate>
                <InputDate icon="bi bi-calendar-fill" name="End date"></InputDate>
            </div>
            <InputCheckbox id="checkbox-1" value="Checkbox 1" name="checkbox">I currently study here</InputCheckbox>
            <InputTextArea icon="bi bi-card-text" name="Details" />
        </Fieldset>
    );
}