import { useRef, useState } from 'react';

import { Button } from '../input/Button';
import PersonalInfo from './PersonalInfo';
import { EduHistoryList } from './EduHistory';
import { WorkExpList } from './WorkExp';
import { Spacer } from '../Separator';
import RenderPDF from '../cv/RenderPDF';
import Modal from '../Modal';
import { SkillList } from './Skill';
import { LicenseCertifList } from './LicensesCertif';
import { LanguagesList } from './Languages';
import Upload from '../input/Upload';
import { cvData } from '../../types/cvData';
import Collapse from '../Collapse';
import Translator from '../Translator';
import { useCvDataStore } from '../../lib/store';

export default function CvForm() {
    const [disableBtns, setDisableBtns] = useState(false);

    const formRef = useRef<HTMLFormElement>(null);

    const {
        personalInfo, eduHistory, workExp, licensesCertif, languages, skills,
        setPersonalInfo, setEduHistory, setWorkExp, setLicensesCertif, setLanguages, setSkills
    } = useCvDataStore();

    const handleJsonFile = (data: cvData) => {
        if (data.personalInfo) setPersonalInfo(data.personalInfo);
        if (data.eduHistory) setEduHistory(data.eduHistory);
        if (data.workExp) setWorkExp(data.workExp);
        if (data.licensesCertif) setLicensesCertif(data.licensesCertif);
        if (data.languages) setLanguages(data.languages);
        if (data.skills) setSkills(data.skills);
    }

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        const name = event.currentTarget.name;

        const data = {
            personalInfo: personalInfo,
            eduHistory: eduHistory,
            workExp: workExp,
            licensesCertif: licensesCertif,
            languages: languages,
            skills: skills
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

    const readFile = (event: React.ChangeEvent<HTMLInputElement>) => {
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
            <div className="flex gap-5">
                <div className="flex-1">
                    <h2><Translator path="personalInfo.title" /></h2>
                </div>
                <PersonalInfo />
            </div>

            <Spacer />

            <Collapse title={<h2><Translator path="eduHistory.title" /></h2>}>
                <div className="flex gap-5">
                    <div className="flex-1">
                    </div>
                    <div className="flex gap-5 flex-[3] flex-col">
                        <EduHistoryList />
                    </div>
                </div>
            </Collapse>

            <Spacer />

            <Collapse title={<h2><Translator path="workExp.title" /></h2>}>
                <div className="flex gap-5">
                    <div className="flex-1">
                    </div>
                    <div className="flex gap-5 flex-[3] flex-col">
                        <WorkExpList />
                    </div>
                </div>
            </Collapse>

            <Spacer />

            <Collapse title={<h2><Translator path="licensesCertif.title" /></h2>}>
                <div className="flex gap-5">
                    <div className="flex-1">
                    </div>
                    <div className="flex gap-1 flex-[3] flex-col">
                        <LicenseCertifList />
                    </div>
                </div>
            </Collapse>

            <Spacer />

            <Collapse title={<h2><Translator path="languages.title" /></h2>}>
                <div className="flex gap-5">
                    <div className="flex-1">
                    </div>
                    <div className="flex gap-5 flex-[3] flex-col">
                        <LanguagesList setDisableBtns={setDisableBtns} />
                    </div>
                </div>
            </Collapse>

            <Spacer />

            <Collapse title={<h2><Translator path="skills.title" /></h2>}>
                <div className="flex gap-5">
                    <div className="flex-1">
                    </div>
                    <div className="flex gap-5 flex-[3] flex-col">
                        <SkillList />
                    </div>
                </div>
            </Collapse>

            <Spacer />

            <div className="flex gap-5">
                <Button className="flex-1" type="button" name="export" onClick={handleSubmit} disabled={disableBtns} >
                    <Translator path="buttons.export" />
                </Button>
                <Upload className="flex-1" accept=".json" onChange={readFile}>
                    <Translator path="buttons.import" />
                </Upload>
                <Modal className="flex-1" title={Translator({ path: "buttons.view" })} buttonText={Translator({ path: "buttons.view" })} disabled={disableBtns}>
                    <RenderPDF />
                </Modal>
            </div>
        </form>
    );
}