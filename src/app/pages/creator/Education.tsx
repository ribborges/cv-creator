import { H3 } from "@/components/Heading";
import { EducationList as EducationForm } from "@/components/forms/Education";
import Translator from "@/components/Translator";

export default function Education() {
    return (
        <div className="flex flex-col gap-4">
            <H3>
                <Translator path="education.title" />
            </H3>
            <p className="text-zinc-600 dark:text-zinc-400">
                <Translator path="education.description.1" />
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
                <Translator path="education.description.2" />
            </p>

            <EducationForm />
        </div>
    );
}