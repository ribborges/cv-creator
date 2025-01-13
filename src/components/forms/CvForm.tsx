import { useRef, useState } from 'react';
import { PlusLg, TrashFill } from "react-bootstrap-icons";

import { Button } from '../input/Button';
import PersonalInfo from './PersonalInfo';
import EduHistory from './EduHistory';
import WorkExp from './WorkExp';
import { Spacer } from '../Separator';
import PdfRenderer from '../cv/PdfRenderer';
import Modal from '../Modal';
import Skill from './Skill';
import LicensesCertif from './LicensesCertif';
import Languages from './Languages';
import Upload from '../input/Upload';
import { cleanData, cvData } from '../../types/cvData';
import Collapse from '../Collapse';
import Translator from '../Translator';

export default function CvForm() {
    const [formData, setFormData] = useState<cvData>(cleanData);

    const [disableBtns, setDisableBtns] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleEduHistoryChange = (event: React.ChangeEvent<HTMLInputElement>, index: number, key: "schoolName" | "schoolDegree" | "schoolFieldStudy" | "schoolLocation" | "schoolBgDate" | "schoolEdDate" | "schoolDetails") => {
        const newEduHistory = [...(formData.eduHistory || [])];
        newEduHistory[index][key] = event.target.value;
        setFormData({ ...formData, eduHistory: newEduHistory });
    };

    const handleAddEduHistory = () => {
        const newEduHistory = [...(formData.eduHistory || []), {
            schoolName: '',
            schoolDegree: '',
            schoolFieldStudy: '',
            schoolLocation: '',
            schoolBgDate: '',
            schoolEdDate: '',
            schoolCurrently: '',
            schoolDetails: ''
        }];
        setFormData({ ...formData, eduHistory: newEduHistory });
    };

    const handleRemoveEduHistory = (index: number) => {
        const newEduHistory = [...(formData.eduHistory || [])];
        newEduHistory.splice(index, 1);
        setFormData({ ...formData, eduHistory: newEduHistory });
    };

    const handleWorkExpChange = (event: React.ChangeEvent<HTMLInputElement>, index: number, key: "workCompanyName" | "workJobTitle" | "workLocation" | "workBgDate" | "workEdDate" | "workDetails") => {
        const newWorkExp = [...(formData.workExp || [])];
        newWorkExp[index][key] = event.target.value;
        setFormData({ ...formData, workExp: newWorkExp });
    };

    const handleAddWorkExp = () => {
        const newWorkExp = [...(formData.workExp || []), {
            workCompanyName: '',
            workJobTitle: '',
            workLocation: '',
            workBgDate: '',
            workEdDate: '',
            workCurrently: '',
            workDetails: ''
        }];
        setFormData({ ...formData, workExp: newWorkExp });
    };

    const handleRemoveWorkExp = (index: number) => {
        const newWorkExp = [...(formData.workExp || [])];
        newWorkExp.splice(index, 1);
        setFormData({ ...formData, workExp: newWorkExp });
    };

    const handleLicensesCertifChange = (event: React.ChangeEvent<HTMLInputElement>, index: number, key: "licensesCertifName" | "licensesCertifOrg") => {
        const newLicensesCertif = [...(formData.licensesCertif || [])];
        newLicensesCertif[index][key] = event.target.value;
        setFormData({ ...formData, licensesCertif: newLicensesCertif });
    };

    const handleAddLicensesCertif = () => {
        const newLicensesCertif = [...(formData.licensesCertif || []), {
            licensesCertifName: '',
            licensesCertifOrg: ''
        }];
        setFormData({ ...formData, licensesCertif: newLicensesCertif });
    };

    const handleRemoveLicensesCertif = (index: number) => {
        const newLicensesCertif = [...(formData.licensesCertif || [])];
        newLicensesCertif.splice(index, 1);
        setFormData({ ...formData, licensesCertif: newLicensesCertif });
    };

    const handleLanguagesChange = (event: React.ChangeEvent<HTMLInputElement>, index: number, key: "language" | "level") => {
        const newLanguage = [...formData.languages || []];
        newLanguage[index][key] = event.target.value;
        setFormData({ ...formData, languages: newLanguage });
    };

    const handleAddLanguages = () => {
        const newLanguage = [...(formData.languages || []), {
            language: '',
            level: ''
        }];
        setFormData({ ...formData, languages: newLanguage });
    };

    const handleRemoveLanguages = (index: number) => {
        const newLanguage = [...(formData.languages || [])];
        newLanguage.splice(index, 1);
        setFormData({ ...formData, languages: newLanguage });
    };

    const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newSkills = [...(formData.skills || [])];
        newSkills[index] = event.target.value;
        setFormData({ ...formData, skills: newSkills });
    };

    const handleAddSkills = () => {
        const newSkills = [...(formData.skills || []), ''];
        setFormData({ ...formData, skills: newSkills });
    };

    const handleRemoveSkills = (index: number) => {
        const newSkills = [...(formData.skills || [])];
        newSkills.splice(index, 1);
        setFormData({ ...formData, skills: newSkills });
    };

    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        const name = event.currentTarget.name;

        const data = {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            address: formData.address,
            linkedinUrl: formData.linkedinUrl,
            githubUrl: formData.githubUrl,
            portfolioUrl: formData.portfolioUrl,
            summary: formData.summary,
            eduHistory: formData.eduHistory,
            workExp: formData.workExp,
            licensesCertif: formData.licensesCertif,
            languages: formData.languages,
            skills: formData.skills
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
                setFormData(parsedObject);
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
                <PersonalInfo data={formData} onChange={handleChange} />
            </div>

            <Spacer />

            <Collapse title={<h2><Translator path="eduHistory.title" /></h2>}>
                <div className="flex gap-5">
                    <div className="flex-1">
                    </div>
                    <div className="flex gap-5 flex-[3] flex-col">
                        {
                            formData.eduHistory?.map((value, index) => (
                                <div key={index} className="flex flex-col">
                                    <EduHistory id={index} value={value} onChange={handleEduHistoryChange}>
                                        <Button type="button" onClick={() => handleRemoveEduHistory(index)}><TrashFill /></Button>
                                    </EduHistory>
                                </div>
                            ))
                        }
                        <Button type="button" onClick={handleAddEduHistory}><PlusLg /></Button>
                    </div>
                </div>
            </Collapse>

            <Spacer />

            <Collapse title={<h2><Translator path="workExp.title" /></h2>}>
                <div className="flex gap-5">
                    <div className="flex-1">
                    </div>
                    <div className="flex gap-5 flex-[3] flex-col">
                        {
                            formData.workExp?.map((value, index) => (
                                <div key={index} className="flex flex-col">
                                    <WorkExp id={index} value={value} onChange={handleWorkExpChange}>
                                        <Button type="button" onClick={() => handleRemoveWorkExp(index)}><TrashFill /></Button>
                                    </WorkExp>
                                </div>
                            ))
                        }
                        <Button type="button" onClick={handleAddWorkExp}><PlusLg /></Button>
                    </div>
                </div>
            </Collapse>

            <Spacer />

            <Collapse title={<h2><Translator path="licensesCertif.title" /></h2>}>
                <div className="flex gap-5">
                    <div className="flex-1">
                    </div>
                    <div className="flex gap-1 flex-[3] flex-col">
                        {
                            formData.licensesCertif?.map((value, index) => (
                                <div key={index} className="flex gap-1">
                                    <LicensesCertif id={index} value={value} onChange={handleLicensesCertifChange} />
                                    <Button type="button" onClick={() => handleRemoveLicensesCertif(index)}><TrashFill /></Button>
                                </div>
                            ))
                        }
                        <Button type="button" onClick={handleAddLicensesCertif}><PlusLg /></Button>
                    </div>
                </div>
            </Collapse>

            <Spacer />

            <Collapse title={<h2><Translator path="languages.title" /></h2>}>
                <div className="flex gap-5">
                    <div className="flex-1">
                    </div>
                    <div className="flex gap-5 flex-[3] flex-col">
                        {
                            formData.languages?.map((value, index) => (
                                <div key={index} className="flex gap-1">
                                    <Languages onSelect={setDisableBtns} id={index} value={value} onChange={handleLanguagesChange} />
                                    <Button type="button" onClick={() => handleRemoveLanguages(index)}><TrashFill /></Button>
                                </div>
                            ))
                        }
                        <Button type="button" onClick={handleAddLanguages}><PlusLg /></Button>
                    </div>
                </div>
            </Collapse>

            <Spacer />

            <Collapse title={<h2><Translator path="skills.title" /></h2>}>
                <div className="flex gap-5">
                    <div className="flex-1">
                    </div>
                    <div className="flex gap-5 flex-[3] flex-col">
                        {
                            formData.skills?.map((value, index) => (
                                <div key={index} className="flex gap-1">
                                    <Skill id={index} value={value} onChange={handleSkillsChange} />
                                    <Button type="button" onClick={() => handleRemoveSkills(index)}><TrashFill /></Button>
                                </div>
                            ))
                        }
                        <Button type="button" onClick={handleAddSkills}><PlusLg /></Button>
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
                    <PdfRenderer data={formData} />
                </Modal>
            </div>
        </form>
    );
}