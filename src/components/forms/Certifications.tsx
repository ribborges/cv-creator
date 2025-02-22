import { AwardFill, BuildingFill, PlusLg, TrashFill } from 'react-bootstrap-icons';

import { Input } from '../input/Input';
import Translator from '../Translator';
import { certifications } from '../../types/cvData';
import { Button } from '../input/Button';
import { useCvDataStore } from '../../lib/store';

interface certificationsProps {
    id: number,
    value?: certifications,
    className?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>, index: number, key: "name" | "organization") => void;
}

function CertificationList() {
    const { setCertifications, certifications } = useCvDataStore();

    const handleCertificationsChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number,
        key: "name" | "organization"
    ) => {
        const newCertification = [...(certifications || [])];
        newCertification[index][key] = event.target.value;
        setCertifications(newCertification);
    };

    const handleAddCertifications = () => {
        const newCertification = [...(certifications || []), {
            name: '',
            organization: ''
        }];
        setCertifications(newCertification);
    };

    const handleRemoveCertifications = (index: number) => {
        const newCertification = [...(certifications || [])];
        newCertification.splice(index, 1);
        setCertifications(newCertification);
    };

    return (
        <>
            {
                certifications?.map((value, index) => (
                    <div key={index} className="flex gap-1">
                        <Certification id={index} value={value} onChange={handleCertificationsChange} />
                        <Button type="button" onClick={() => handleRemoveCertifications(index)}><TrashFill /></Button>
                    </div>
                ))
            }
            < Button type="button" onClick={handleAddCertifications} > <PlusLg /></Button >
        </>
    );
}

function Certification(props: certificationsProps) {
    return (
        <div className="flex-1 flex gap-1 flex-col lg:flex-row">
            <Input
                type="text"
                id={"skill" + props.id}
                name={"skill" + props.id}
                value={props.value?.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "name")}
                icon={<AwardFill />}
                placeholder={Translator({ path: "certifications.name" })}
            />
            <Input
                type="text"
                id={"skill" + props.id}
                name={"skill" + props.id}
                value={props.value?.organization}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "organization")}
                icon={<BuildingFill />}
                placeholder={Translator({ path: "certifications.organization" })}
            />
        </div>
    );
}

export { CertificationList, Certification };