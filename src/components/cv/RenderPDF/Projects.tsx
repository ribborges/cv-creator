import { useCvDataStore } from "../../../lib/store";
import Section from "./Section";

export default function Projects() {
    const { projects } = useCvDataStore();

    return (
        <Section title="Projects">
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