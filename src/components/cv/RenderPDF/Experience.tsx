import { useCvDataStore } from "../../../lib/store";
import Section from "./Section";

export default function Experience() {
    const { experience } = useCvDataStore();

    return (
        <Section title="Work Experience">
            {
                experience.map((exp, index) => (
                    <ExperienceItem
                        key={index}
                        position={exp.position}
                        company={exp.company}
                        startDate={exp.start_date}
                        endDate={exp.end_date}
                        location={exp.location}
                        details={exp.details}
                    />
                ))
            }
        </Section>
    );
}

function ExperienceItem({
    position,
    company,
    startDate,
    endDate,
    location,
    details
}: {
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    location: string;
    details: string;
}) {
    return (
        <div className="flex flex-col px-2 text-sm">
            <div className="flex justify-between">
                <span className="font-bold">{position}</span>
                <span>{startDate}{startDate && endDate ? " - " : ""}{endDate}</span>
            </div>
            <div>
                <span className="italic">{company}{company && location ? ", " : ""}{location}</span>
            </div>
            {
                details &&
                <div>
                    <p className="indent-2">{details}</p>
                </div>
            }
        </div>
    );
}