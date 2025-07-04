import { EnvelopeFill, Fonts, GeoAltFill, Github, Globe, Linkedin, PencilFill, PersonBadgeFill, TelephoneFill } from 'react-bootstrap-icons';

import { Input } from '@/components/Input';
import Translator from '@/components/Translator';
import { useCvDataStore } from '@/lib/store';

function Info() {
    const { setInfo, info } = useCvDataStore();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInfo({ ...info, [event.target.name]: event.target.value });
    };

    return (
        <div className="flex flex-3 flex-col gap-1">
            <div className="flex flex-col gap-1">
                <Input
                    type="text"
                    id="name"
                    name="name"
                    value={info.name}
                    onChange={handleChange}
                    icon={<Fonts />}
                    placeholder={Translator({ path: "info.name" })}
                />
                <Input
                    type="text"
                    id="title"
                    name="title"
                    value={info.title}
                    onChange={handleChange}
                    icon={<PersonBadgeFill />}
                    placeholder={Translator({ path: "info.personal_title" })}
                />
                <div className='flex gap-1'>
                    <div className='flex flex-col gap-1 flex-1'>
                        <Input
                            type="phone"
                            id="phone"
                            name="phone"
                            value={info.phone}
                            onChange={handleChange}
                            icon={<TelephoneFill />}
                            placeholder={Translator({ path: "info.phone" })}
                        />
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={info.email}
                            onChange={handleChange}
                            icon={<EnvelopeFill />}
                            placeholder={Translator({ path: "info.email" })}
                        />
                        <Input
                            type="text"
                            id="address"
                            name="address"
                            value={info.address}
                            onChange={handleChange}
                            icon={<GeoAltFill />}
                            placeholder={Translator({ path: "info.address" })}
                        />
                    </div>
                    <div className='flex flex-col gap-1 flex-1'>
                        <Input
                            type="url"
                            id="linkedin"
                            name="linkedin"
                            value={info.linkedin}
                            onChange={handleChange}
                            icon={<Linkedin />}
                            placeholder="LinkedIn"
                        />
                        <Input
                            type="url"
                            id="github"
                            name="github"
                            value={info.github}
                            onChange={handleChange}
                            icon={<Github />}
                            placeholder="GitHub"
                        />
                        <Input
                            type="url"
                            id="website"
                            name="website"
                            value={info.website}
                            onChange={handleChange}
                            icon={<Globe />}
                            placeholder="Website"
                        />
                    </div>
                </div>
            </div>
            <Input
                type="textarea"
                id="summary"
                name="summary"
                value={info.summary}
                onChange={handleChange}
                icon={<PencilFill />}
                label={Translator({ path: "info.summary" })}
            />
        </div>
    );
}

export { Info };