import { useCvDataStore } from "../../../lib/store";
import Translator from "../../Translator";
import Section from "./Section";

export default function Education() {
    const { education } = useCvDataStore();

    const title = Translator({ path: "education.title" });

    return (
        education.length > 0 &&
        <Section title={title}>
            {
                education.map((edu, index) => (
                    <EducationItem
                        key={index}
                        field={edu.field}
                        degree={edu.degree}
                        school={edu.school}
                        endDate={edu.start_date}
                        startDate={edu.end_date}
                        location={edu.location}
                        details={edu.details}
                    />
                ))
            }
        </Section>
    );
}

function EducationItem({
    field,
    degree,
    school,
    startDate,
    endDate,
    location,
    details
}: {
    field: string;
    degree: string;
    school: string;
    startDate: string;
    endDate: string;
    location: string;
    details?: string;
}) {
    return (
        <div className="flex flex-col px-2 text-sm">
            <div className="flex justify-between gap-2">
                <span className="font-bold">{degree}{degree && field ? ", " : ""}{field}</span>
                <span>{startDate}{startDate && endDate ? " - " : ""}{endDate}</span>
            </div>
            <div>
                <span className="italic">{school}{school && location ? ", " : ""}{location}</span>
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