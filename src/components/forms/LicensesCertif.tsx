import { AwardFill, BuildingFill } from 'react-bootstrap-icons';

import { Input } from '../input/Input';
import Translator from '../Translator';

interface licensesCertifProps {
    id: number,
    value?: {
        licensesCertifName?: string,
        licensesCertifOrg?: string;
    },
    className?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>, index: number, key: "licensesCertifName" | "licensesCertifOrg") => void;
}

export default function Skill(props: licensesCertifProps) {
    return (
        <div className="flex-1 flex gap-1">
            <Input
                type="text"
                id={"skill" + props.id}
                name={"skill" + props.id}
                value={props.value?.licensesCertifName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "licensesCertifName")}
                icon={<AwardFill />}
                placeholder={Translator({ path: "licensesCertif.name" })}
            />
            <Input
                type="text"
                id={"skill" + props.id}
                name={"skill" + props.id}
                value={props.value?.licensesCertifOrg}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "licensesCertifOrg")}
                icon={<BuildingFill />}
                placeholder={Translator({ path: "licensesCertif.org" })}
            />
        </div>
    );
}