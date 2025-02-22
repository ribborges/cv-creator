import { useCvDataStore } from "../../../lib/store";
import Translator from "../../Translator";
import Section from "./Section";

export default function Certifications() {
    const { certifications } = useCvDataStore();

    const title = Translator({ path: "certifications.title" });

    return (
        certifications.length > 0 &&
        <Section title={title}>
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