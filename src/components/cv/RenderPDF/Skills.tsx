import { useCvDataStore } from "../../../lib/store";
import Section from "./Section";

export default function Skills() {
    const { skills } = useCvDataStore();

    return (
        <div className="flex gap-4">
            <Section title="Hard Skills">
                <div className="ml-8 text-sm">
                    <ul className="list-disc">
                        {
                            skills?.hard?.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))
                        }
                    </ul>
                </div>
            </Section>
            <Section title="Soft Skills">
                <div className="ml-8 text-sm">
                    <ul className="list-disc">
                        {
                            skills?.soft?.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))
                        }
                    </ul>
                </div>
            </Section>
        </div>
    );
}