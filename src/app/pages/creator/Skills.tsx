import { H3 } from "@/components/Heading";
import { SkillList as SkillsForm } from "@/components/forms/Skill";
import Translator from "@/components/Translator";

export default function Skills() {
    return (
        <div className="flex flex-col gap-4">
            <H3>
                <Translator path="skills.title" />
            </H3>
            <p className="text-zinc-600 dark:text-zinc-400">
                <Translator path="skills.description.1" />
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
                <Translator path="skills.description.2" />
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
                <Translator path="skills.description.3" />
            </p>

            <SkillsForm />

            <div className="min-h-4" />
        </div>
    );
}