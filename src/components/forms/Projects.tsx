import { CardText, KanbanFill, PersonFillGear, PlusLg, TrashFill } from 'react-bootstrap-icons';

import { Input } from '../input/Input';
import Translator from '../Translator';
import { project } from '../../types/cvData';
import { Button } from '../input/Button';
import { useCvDataStore } from '../../lib/store';
import { Fieldset } from '../input/Fieldset';

interface projectProps {
    id: number,
    value?: project,
    className?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>, index: number, key: "name" | "technologies" | "description") => void,
    children?: React.ReactNode;
}

function ProjectsList() {
    const { setProjects, projects } = useCvDataStore();

    const handleLicensesCertifChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number,
        key: "name" | "technologies" | "description"
    ) => {
        const newProject = [...(projects || [])];
        newProject[index][key] = event.target.value;
        setProjects(newProject);
    };

    const handleAddLicensesCertif = () => {
        const newProject = [...(projects || []), {
            name: '',
            technologies: '',
            description: ''
        }];
        setProjects(newProject);
    };

    const handleRemoveLicensesCertif = (index: number) => {
        const newProject = [...(projects || [])];
        newProject.splice(index, 1);
        setProjects(newProject);
    };

    return (
        <>
            {
                projects?.map((value, index) => (
                    <div key={index} className="flex flex-col">
                        <Project id={index} value={value} onChange={handleLicensesCertifChange}>
                            <Button type="button" onClick={() => handleRemoveLicensesCertif(index)}><TrashFill /></Button>
                        </Project>
                    </div>
                ))
            }
            < Button type="button" onClick={handleAddLicensesCertif} > <PlusLg /></Button >
        </>
    );
}

function Project(props: projectProps) {
    return (
        <Fieldset legend={Translator({ path: "projects.project" })} className="flex gap-1 flex-col">
            <Input
                type="text"
                id={"skill" + props.id}
                name={"skill" + props.id}
                value={props.value?.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "name")}
                icon={<KanbanFill />}
                placeholder={Translator({ path: "projects.name" })}
            />
            <Input
                type="text"
                id={"skill" + props.id}
                name={"skill" + props.id}
                value={props.value?.technologies}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "technologies")}
                icon={<PersonFillGear />}
                placeholder={Translator({ path: "projects.skills" })}
            />
            <Input
                type="textarea"
                id={"skill" + props.id}
                name={"skill" + props.id}
                value={props.value?.description}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "description")}
                icon={<CardText />}
                placeholder={Translator({ path: "projects.details" })}
            />
            {props.children}
        </Fieldset>
    );
}

export { ProjectsList, Project };