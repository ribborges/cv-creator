import { H3 } from "@/components/Heading";
import { Info as InfoForm } from "@/components/forms/Info";
import Translator from "@/components/Translator";

export default function Info() {
    return (
        <div className="flex flex-col gap-4">
            <H3>
                <Translator path="info.title" />
            </H3>
            <p className="text-zinc-600 dark:text-zinc-400">
                <Translator path="info.description.1" />
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
                <Translator path="info.description.2" />
            </p>

            <InfoForm />
        </div>
    );
}