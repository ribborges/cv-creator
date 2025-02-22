import { useCvDataStore } from "../../../lib/store";
import Section from "./Section";

export default function Certifications() {
    const { licensesCertif } = useCvDataStore();
    
    return (
        <Section title="Certifications">
            {
                licensesCertif && licensesCertif.map((value, index) => (
                    <Certification
                        key={index}
                        certification={value.licensesCertifName}
                        organization={value.licensesCertifOrg}
                    />
                ))
            }
        </Section>
    );
}

function Certification({ certification, organization }: { certification: string, organization: string }) {
    return (
        <div className="flex flex-col gap-2 text-sm">
            <div className="flex justify-between">
                <span>{certification}</span>
                <span>{organization}</span>
            </div>
        </div>
    );
}