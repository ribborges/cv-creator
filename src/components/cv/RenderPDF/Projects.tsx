import { useCvDataStore } from "@/lib/store";
import Translator from "@/components/Translator";

import Section from "./Section";

export default function Projects() {
    const { projects } = useCvDataStore();

    const title = Translator({ path: "projects.title" });

    return (
        projects.length > 0 &&
        <Section title={title}>
            {
                projects?.map((project, index) => (
                    <Project
                        key={index}
                        name={project.name}
                        tech={project.technologies}
                        description={project.description}
                    />
                ))
            }
        </Section>
    );
}

function Project({
    name,
    tech,
    description
}: {
    name: string,
    tech: string,
    description: string
}) {
    return (
        <div className="flex flex-col gap-1 text-sm">
            {name && <span className="font-bold">{name}</span>}
            {tech && <span className="text-sm italic">{tech}</span>}
            {description && <span>{description}</span>}
        </div>
    );
}