import { useCvDataStore } from "../../../lib/store";
import Section from "./Section";

export default function Certifications() {
    const { certifications } = useCvDataStore();
    
    return (
        <Section title="Certifications">
            {
                certifications && certifications.map((value, index) => (
                    <Certification
                        key={index}
                        certification={value.name}
                        organization={value.organization}
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