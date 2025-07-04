import { H3 } from "@/components/Heading";
import { ExperienceList as ExperienceForm } from "@/components/forms/Experience";
import Translator from "@/components/Translator";

export default function Experience() {
    return (
        <div className="flex flex-col gap-4">
            <H3>
                <Translator path="experience.title" />
            </H3>
            <p className="text-zinc-600 dark:text-zinc-400">
                <Translator path="experience.description.1" />
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
                <Translator path="experience.description.2" />
            </p>

            <ExperienceForm />
        </div>
    );
}