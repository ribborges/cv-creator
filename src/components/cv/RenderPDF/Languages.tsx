import { useCvDataStore } from "../../../lib/store";
import Translator from "../../Translator";
import Section from "./Section";

export default function Languages() {
    const { languages } = useCvDataStore();

    const title = Translator({ path: "languages.title" });

    return (
        languages.length > 0 &&
        <Section title={title}>
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
            <span>
                {language}:
                {" "}
                {
                    level === "elementary" ? <Translator path="languages.novice" /> :
                        level === "limited" ? <Translator path="languages.limited" /> :
                            level === "professional" ? <Translator path="languages.professional" /> :
                                level === "full" ? <Translator path="languages.full" /> :
                                    level === "native" ? <Translator path="languages.native" /> :
                                        <Translator path="languages.select" />
                }
            </span>
        </div>
    );
}