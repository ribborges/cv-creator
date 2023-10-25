import { AwardFill, BuildingFill } from 'react-bootstrap-icons';

import { displayText } from '../../types/lang';
import { Input } from '../input/Input';

interface licensesCertifProps {
    id: number,
    value?: {
        licensesCertifName?: string,
        licensesCertifOrg?: string;
    },
    lang: displayText,
    className?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>, index: number, key: "licensesCertifName" | "licensesCertifOrg") => void;
}

export default function Skill(props: licensesCertifProps) {
    return (
        <div className={props.className + " flex-container"}>
            <Input
                type="text"
                id={"skill" + props.id}
                name={"skill" + props.id}
                value={props.value?.licensesCertifName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "licensesCertifName")}
                icon={<AwardFill />}
                placeholder={props.lang.name}
            />
            <Input
                type="text"
                id={"skill" + props.id}
                name={"skill" + props.id}
                value={props.value?.licensesCertifOrg}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "licensesCertifOrg")}
                icon={<BuildingFill />}
                placeholder={props.lang.licensesCertifOrg}
            />
        </div>
    );
}