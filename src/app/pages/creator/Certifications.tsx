import { H3 } from "@/components/Heading";
import { CertificationList as CertificationsForm } from "@/components/forms/Certifications";
import Translator from "@/components/Translator";

export default function Certifications() {
    return (
        <div className="flex flex-col gap-4">
            <H3>
                <Translator path="certifications.title" />
            </H3>
            <p className="text-zinc-600 dark:text-zinc-400">
                <Translator path="certifications.description.1" />
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
                <Translator path="certifications.description.2" />
            </p>

            <CertificationsForm />
        </div>
    );
}