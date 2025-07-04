import { H3 } from "@/components/Heading";
import { LanguagesList as LanguagesForm } from "@/components/forms/Languages";
import Translator from "@/components/Translator";

export default function Languages() {
    return (
        <div className="flex flex-col gap-4">
            <H3>
                <Translator path="languages.title" />
            </H3>
            <p className="text-zinc-600 dark:text-zinc-400">
                <Translator path="languages.description.1" />
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
                <Translator path="languages.description.2" />
            </p>

            <LanguagesForm />
        </div>
    );
}