import { useRef, useState } from 'react';
import pdfToText from 'react-pdftotext';

import { Button, Upload } from '@/components/Input';
import { Spacer } from '@/components/Separator';
import RenderPDF from '@/components/cv/RenderPDF';
import Collapse from '@/components/Collapse';
import Translator from '@/components/Translator';
import { H2 } from '@/components/Heading';
import { useCvDataStore } from '@/lib/store';
import { cvData } from '@/types/cvData';
import { askData } from '@/services/ai.service';
import useModal from '@/hooks/useModal';

import { Info } from './Info';
import { EducationList } from './Education';
import { ExperienceList } from './Experience';
import { SkillList } from './Skill';
import { CertificationList } from './Certifications';
import { LanguagesList } from './Languages';
import { ProjectsList } from './Projects';

export default function CvForm() {
    const [loading, setLoading] = useState(false);

    const { show } = useModal();
    const modalTitle = Translator({ path: "buttons.view" });

    const renderModal = () => {
        show({
            title: modalTitle,
            content: <RenderPDF />,
        })
    }

    const formRef = useRef<HTMLFormElement>(null);

    const {
        info, education, experience, certifications, languages, skills, projects,
        setInfo, setEducation, setExperience, setCertifications, setLanguages, setSkills, setProjects
    } = useCvDataStore();

    const handleJsonFile = (data: cvData) => {
        if (data.info) setInfo(data.info);
        if (data.education) setEducation(data.education);
        if (data.experience) setExperience(data.experience);
        if (data.certifications) setCertifications(data.certifications);
        if (data.languages) setLanguages(data.languages);
        if (data.skills) setSkills(data.skills);
        if (data.projects) setProjects(data.projects);
    }

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        const name = event.currentTarget.name;

        const data = {
            info,
            education,
            experience,
            certifications,
            languages,
            skills,
            projects
        };

        switch (name) {
            case "export":
                const jsonString = JSON.stringify(data, null, 2);
                const blob = new Blob([jsonString], { type: "application/json" });
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = "cv-creator-data.json";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
                break;

            case "import":
                alert("Wow, theres nothing here!!! 😬");
                break;

            case "create":
                alert("Wow, theres nothing here!!! 😬");
                break;

            default:
                alert("Huummm, there's something wrong here!!! 🤔");
                break;
        }
    };

    const readFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileType = event.target.files?.[0].type;


        if (fileType === "application/pdf") {
            setLoading(true);
            const file = event.target.files?.[0];
            file && pdfToText(file)
                .then(async (text) => {
                    console.log("Extracted text: ", text);
                    const data = await askData(text);

                    if (data) {
                        console.log("Converted text: ", data);
                        handleJsonFile(data);
                    } else {
                        console.error("Failed to format the converted text");
                    }
                })
                .catch(error => console.error("Failed to extract text from pdf"))
                .finally(() => setLoading(false));
            return;
        }

        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target?.result as string;
                const parsedObject = JSON.parse(content);
                handleJsonFile(parsedObject);
                event.target.value = "";
            };
            reader.readAsText(file);
        }
    };

    return (
        <form ref={formRef}>
            <div className="flex gap-5 flex-col lg:flex-row">
                <div className="flex-1">
                    <H2><Translator path="info.title" /></H2>
                </div>
                <Info />
            </div>

            <Spacer />

            <Collapse title={<H2><Translator path="education.title" /></H2>}>
                <div className="flex gap-5">
                    <div className="flex-1 hidden lg:block">
                    </div>
                    <div className="flex gap-5 flex-3 flex-col">
                        <EducationList />
                    </div>
                </div>
            </Collapse>

            <Spacer />

            <Collapse title={<H2><Translator path="experience.title" /></H2>}>
                <div className="flex gap-5">
                    <div className="flex-1 hidden lg:block">
                    </div>
                    <div className="flex gap-5 flex-3 flex-col">
                        <ExperienceList />
                    </div>
                </div>
            </Collapse>

            <Spacer />

            <Collapse title={<H2><Translator path="certifications.title" /></H2>}>
                <div className="flex gap-5">
                    <div className="flex-1 hidden lg:block">
                    </div>
                    <div className="flex gap-1 flex-3 flex-col">
                        <CertificationList />
                    </div>
                </div>
            </Collapse>

            <Spacer />

            <Collapse title={<H2><Translator path="languages.title" /></H2>}>
                <div className="flex gap-5">
                    <div className="flex-1 hidden lg:block">
                    </div>
                    <div className="flex gap-5 flex-3 flex-col">
                        <LanguagesList />
                    </div>
                </div>
            </Collapse>

            <Spacer />

            <Collapse title={<H2><Translator path="skills.title" /></H2>}>
                <div className="flex gap-5">
                    <div className="flex-1 hidden lg:block">
                    </div>
                    <div className="flex gap-5 flex-3 flex-col">
                        <SkillList />
                    </div>
                </div>
            </Collapse>

            <Spacer />

            <Collapse title={<H2><Translator path="projects.title" /></H2>}>
                <div className="flex gap-5">
                    <div className="flex-1 hidden lg:block">
                    </div>
                    <div className="flex gap-5 flex-3 flex-col">
                        <ProjectsList />
                    </div>
                </div>
            </Collapse>

            <Spacer />

            <div className="flex gap-5 flex-col lg:flex-row">
                <Button className="flex-1" type="button" name="export" onClick={handleSubmit}>
                    <Translator path="buttons.export" />
                </Button>
                <Upload className="flex-1" accept=".json, .pdf" onChange={readFile} disabled={loading} loading={loading}>
                    <Translator path="buttons.import" />
                </Upload>
                <Button className="flex-1" type="button" onClick={renderModal}>
                    <Translator path="buttons.view" />
                </Button>
            </div>
        </form>
    );
}