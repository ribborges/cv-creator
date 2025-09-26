import { H3 } from "@/components/Heading";
import { ProjectsList as ProjectsForm } from "@/components/forms/Projects";
import Translator from "@/components/Translator";

export default function Projects() {
    return (
        <div className="flex flex-col gap-4">
            <H3>Projects</H3>
            <p className="text-zinc-600 dark:text-zinc-400">
                <Translator path="projects.description.1" />
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
                <Translator path="projects.description.2" />
            </p>
            
            <ProjectsForm />

            <div className="min-h-4" />
        </div>
    );
}