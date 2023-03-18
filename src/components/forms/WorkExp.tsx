import { Fieldset, InputCheckbox } from '../input/Input';
import { InputDate } from '../input/InputDate';
import { InputText } from '../input/InputText';
import { InputTextArea } from '../input/InputTextArea';

interface workExpProps {
    className?: string,
}

export default function WorkExp(props: workExpProps) {
    return (
        <Fieldset className={props.className} legend="Work experience">
            <div className="flex-container">
                <InputText icon="bi bi-buildings-fill" placeholder="Company name" />
                <InputText icon="bi bi-briefcase-fill" placeholder="Job title" />
                <InputText icon="bi bi-geo-alt-fill" placeholder="Location" />
            </div>
            <div className="flex-container">
                <InputDate icon="bi bi-calendar-fill" name="Start date"></InputDate>
                <InputDate icon="bi bi-calendar-fill" name="End date"></InputDate>
            </div>
            <InputCheckbox id="checkbox-1" value="Checkbox 1" name="checkbox">I currently work here</InputCheckbox>
            <InputTextArea icon="bi bi-card-text" name="Details" />
        </Fieldset>
    );
}