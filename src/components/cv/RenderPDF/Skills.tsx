import { useCvDataStore } from "@/lib/store";
import Translator from "@/components/Translator";

import Section from "./Section";

export default function Skills() {
    const { skills } = useCvDataStore();

    const titleHard = Translator({ path: "skills.hard" });
    const titleSoft = Translator({ path: "skills.soft" });

    return (
        (skills.hard.length > 0 || skills.soft.length > 0) &&
        <div className="flex gap-4">
            {
                skills.hard.length > 0 &&
                <Section title={titleHard}>
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
            }
            {
                skills.soft.length > 0 &&
                <Section title={titleSoft}>
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
            }
        </div>
    );
}