import { useCvDataStore } from "../../../lib/store";
import Section from "./Section";

export default function Languages() {
    const { languages } = useCvDataStore();
    
    return (
        <Section title="Languages">
            {
                languages && languages.map((value, index) => (
                    <Language key={index} language={value.language} level={value.level} />
                ))
            }
        </Section>
    );
}

function Language({ language, level }: { language: string, level: string }) {
    return (
        <div className="flex gap-2 text-sm">
            <span>{language}: </span>
            <span>{level}</span>
        </div>
    );
}