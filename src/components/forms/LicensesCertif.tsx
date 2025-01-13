import { AwardFill, BuildingFill, PlusLg, TrashFill } from 'react-bootstrap-icons';

import { Input } from '../input/Input';
import Translator from '../Translator';
import { licensesCertif } from '../../types/cvData';
import { Button } from '../input/Button';
import { useCvDataStore } from '../../lib/store';

interface licensesCertifProps {
    id: number,
    value?: licensesCertif,
    className?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>, index: number, key: "licensesCertifName" | "licensesCertifOrg") => void;
}

function LicenseCertifList() {
    const { setLicensesCertif, licensesCertif } = useCvDataStore();

    const handleLicensesCertifChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number,
        key: "licensesCertifName" | "licensesCertifOrg"
    ) => {
        const newLicensesCertif = [...(licensesCertif || [])];
        newLicensesCertif[index][key] = event.target.value;
        setLicensesCertif(newLicensesCertif);
    };

    const handleAddLicensesCertif = () => {
        const newLicensesCertif = [...(licensesCertif || []), {
            licensesCertifName: '',
            licensesCertifOrg: ''
        }];
        setLicensesCertif(newLicensesCertif);
    };

    const handleRemoveLicensesCertif = (index: number) => {
        const newLicensesCertif = [...(licensesCertif || [])];
        newLicensesCertif.splice(index, 1);
        setLicensesCertif(newLicensesCertif);
    };

    return (
        <>
            {
                licensesCertif?.map((value, index) => (
                    <div key={index} className="flex gap-1">
                        <LicensesCertif id={index} value={value} onChange={handleLicensesCertifChange} />
                        <Button type="button" onClick={() => handleRemoveLicensesCertif(index)}><TrashFill /></Button>
                    </div>
                ))
            }
            < Button type="button" onClick={handleAddLicensesCertif} > <PlusLg /></Button >
        </>
    );
}

function LicensesCertif(props: licensesCertifProps) {
    return (
        <div className="flex-1 flex gap-1 flex-col lg:flex-row">
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

export { LicenseCertifList, LicensesCertif };