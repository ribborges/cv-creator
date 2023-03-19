import { Input } from '../input/Input';
import { displayText, FormData } from './CvForm';

interface personalInfoProps {
    className?: string,
    lang: displayText,
    data: FormData,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
}

export default function PersonalInfo(props: personalInfoProps) {
    return (
        <div className={props.className + " flex-container"}>
            <div className="flex-container">
                <Input
                    type="text"
                    id="name"
                    name="name"
                    value={props.data.name}
                    onChange={props.onChange}
                    icon="bi bi-fonts"
                    placeholder={props.lang.name}
                />
                <Input
                    type="phone"
                    id="phone"
                    name="phone"
                    value={props.data.phone}
                    onChange={props.onChange}
                    icon="bi bi-telephone"
                    placeholder={props.lang.phone}
                />
                <Input
                    type="email"
                    id="email"
                    name="email"
                    value={props.data.email}
                    onChange={props.onChange}
                    icon="bi bi-envelope"
                    placeholder="Email"
                />
                <Input
                    type="text"
                    id="address"
                    name="address"
                    value={props.data.address}
                    onChange={props.onChange}
                    icon="bi bi-geo-alt"
                    placeholder={props.lang.address}
                />
                <Input
                    type="url"
                    id="linkedinUrl"
                    name="linkedinUrl"
                    value={props.data.linkedinUrl}
                    onChange={props.onChange}
                    icon="bi bi-linkedin"
                    placeholder="LinkedIn"
                />
                <Input
                    type="url"
                    id="githubUrl"
                    name="githubUrl"
                    value={props.data.githubUrl}
                    onChange={props.onChange}
                    icon="bi bi-github"
                    placeholder="GitHub"
                />
            </div>
            <Input type="textarea" id="summary" name="summary" value={props.data.summary} onChange={props.onChange} icon="bi bi-card-text" title={props.lang.summary} />
        </div>
    );
}