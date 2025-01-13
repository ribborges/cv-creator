import { EnvelopeFill, Fonts, GeoAltFill, Github, Globe, Linkedin, PencilFill, TelephoneFill } from 'react-bootstrap-icons';

import { useCvDataStore } from '../../lib/store';
import { Input } from '../input/Input';
import Translator from '../Translator';

export default function PersonalInfo() {
    const { setPersonalInfo, personalInfo } = useCvDataStore();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPersonalInfo({ ...personalInfo, [event.target.name]: event.target.value });
    };

    return (
        <div className="flex flex-[3] flex-col gap-1">
            <div className="flex flex-col gap-1">
                <Input
                    type="text"
                    id="name"
                    name="name"
                    value={personalInfo.name}
                    onChange={handleChange}
                    icon={<Fonts />}
                    placeholder={Translator({ path: "personalInfo.name" })}
                />
                <div className='flex gap-1'>
                    <div className='flex flex-col gap-1 flex-1'>
                        <Input
                            type="phone"
                            id="phone"
                            name="phone"
                            value={personalInfo.phone}
                            onChange={handleChange}
                            icon={<TelephoneFill />}
                            placeholder={Translator({ path: "personalInfo.phone" })}
                        />
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={personalInfo.email}
                            onChange={handleChange}
                            icon={<EnvelopeFill />}
                            placeholder={Translator({ path: "personalInfo.email" })}
                        />
                        <Input
                            type="text"
                            id="address"
                            name="address"
                            value={personalInfo.address}
                            onChange={handleChange}
                            icon={<GeoAltFill />}
                            placeholder={Translator({ path: "personalInfo.address" })}
                        />
                    </div>
                    <div className='flex flex-col gap-1 flex-1'>
                        <Input
                            type="url"
                            id="linkedinUrl"
                            name="linkedinUrl"
                            value={personalInfo.linkedinUrl}
                            onChange={handleChange}
                            icon={<Linkedin />}
                            placeholder="LinkedIn"
                        />
                        <Input
                            type="url"
                            id="githubUrl"
                            name="githubUrl"
                            value={personalInfo.githubUrl}
                            onChange={handleChange}
                            icon={<Github />}
                            placeholder="GitHub"
                        />
                        <Input
                            type="url"
                            id="portfolioUrl"
                            name="portfolioUrl"
                            value={personalInfo.portfolioUrl}
                            onChange={handleChange}
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
                value={personalInfo.summary}
                onChange={handleChange}
                icon={<PencilFill />}
                title={Translator({ path: "personalInfo.summary" })}
            />
        </div>
    );
}