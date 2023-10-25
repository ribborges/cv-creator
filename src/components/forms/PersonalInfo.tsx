import { EnvelopeFill, Fonts, GeoAltFill, Github, Globe, Linkedin, PencilFill, TelephoneFill } from 'react-bootstrap-icons';

import { cvData } from '../../types/cvData';
import { displayText } from '../../types/lang';
import { Input } from '../input/Input';

interface personalInfoProps {
    className?: string,
    lang: displayText,
    data: cvData,
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
                    icon={<Fonts />}
                    placeholder={props.lang.name}
                />
                <Input
                    type="phone"
                    id="phone"
                    name="phone"
                    value={props.data.phone}
                    onChange={props.onChange}
                    icon={<TelephoneFill />}
                    placeholder={props.lang.phone}
                />
                <Input
                    type="email"
                    id="email"
                    name="email"
                    value={props.data.email}
                    onChange={props.onChange}
                    icon={<EnvelopeFill />}
                    placeholder="Email"
                />
                <Input
                    type="text"
                    id="address"
                    name="address"
                    value={props.data.address}
                    onChange={props.onChange}
                    icon={<GeoAltFill />}
                    placeholder={props.lang.address}
                />
                <Input
                    type="url"
                    id="linkedinUrl"
                    name="linkedinUrl"
                    value={props.data.linkedinUrl}
                    onChange={props.onChange}
                    icon={<Linkedin />}
                    placeholder="LinkedIn"
                />
                <Input
                    type="url"
                    id="githubUrl"
                    name="githubUrl"
                    value={props.data.githubUrl}
                    onChange={props.onChange}
                    icon={<Github />}
                    placeholder="GitHub"
                />
                <Input
                    type="url"
                    id="portfolioUrl"
                    name="portfolioUrl"
                    value={props.data.portfolioUrl}
                    onChange={props.onChange}
                    icon={<Globe />}
                    placeholder="Portfolio"
                />
            </div>
            <Input type="textarea" id="summary" name="summary" value={props.data.summary} onChange={props.onChange} icon={<PencilFill />} title={props.lang.summary} />
        </div>
    );
}