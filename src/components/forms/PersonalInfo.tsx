import { EnvelopeFill, Fonts, GeoAltFill, Github, Globe, Linkedin, PencilFill, TelephoneFill } from 'react-bootstrap-icons';

import { cvData } from '../../types/cvData';
import { Input } from '../input/Input';
import Translator from '../Translator';

interface personalInfoProps {
    data: cvData,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
}

export default function PersonalInfo(props: personalInfoProps) {
    return (
        <div className="flex flex-[3] flex-col gap-1">
            <div className="flex flex-col gap-1">
                <Input
                    type="text"
                    id="name"
                    name="name"
                    value={props.data.name}
                    onChange={props.onChange}
                    icon={<Fonts />}
                    placeholder={Translator({ path: "personalInfo.name" })}
                />
                <div className='flex gap-1'>
                    <div className='flex flex-col gap-1 flex-1'>
                        <Input
                            type="phone"
                            id="phone"
                            name="phone"
                            value={props.data.phone}
                            onChange={props.onChange}
                            icon={<TelephoneFill />}
                            placeholder={Translator({ path: "personalInfo.phone" })}
                        />
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={props.data.email}
                            onChange={props.onChange}
                            icon={<EnvelopeFill />}
                            placeholder={Translator({ path: "personalInfo.email" })}
                        />
                        <Input
                            type="text"
                            id="address"
                            name="address"
                            value={props.data.address}
                            onChange={props.onChange}
                            icon={<GeoAltFill />}
                            placeholder={Translator({ path: "personalInfo.address" })}
                        />
                    </div>
                    <div className='flex flex-col gap-1 flex-1'>
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
                            placeholder={Translator({ path: "personalInfo.portfolio" })}
                        />
                    </div>
                </div>
            </div>
            <Input
                type="textarea"
                id="summary"
                name="summary"
                value={props.data.summary}
                onChange={props.onChange}
                icon={<PencilFill />}
                title={Translator({ path: "personalInfo.summary" })}
            />
        </div>
    );
}