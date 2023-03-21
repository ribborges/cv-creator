import { useRef, useState } from 'react';
import { Button } from '../input/Button';

import PersonalInfo from './PersonalInfo';
import EduHistory from './EduHistory';
import WorkExp from './WorkExp';
import Spacer from '../separator/Spacer';
import PdfRenderer from '../cv/PdfRenderer';
import Modal from '../modal/Modal';
import { displayText } from '../../App';
import Skill from './Skill';
import LicensesCertif from './LicensesCertif';
import { Input } from '../input/Input';

export interface FormData {
    name: string,
    phone: string,
    email: string,
    address: string,
    linkedinUrl: string,
    githubUrl: string,
    summary: string,
    eduHistory: Array<{
        schoolName: string,
        schoolDegree: string,
        schoolFieldStudy: string,
        schoolLocation: string,
        schoolBgDate: string,
        schoolEdDate: string,
        schoolDetails: string;
    }>,
    workExp: Array<{
        workCompanyName: string,
        workJobTitle: string,
        workLocation: string,
        workBgDate: string,
        workEdDate: string,
        workDetails: string;
    }>,
    licensesCertif: Array<{
        licensesCertifName: string,
        licensesCertifOrg: string;
    }>,
    skills: Array<string>;
}

interface cvFormProps {
    lang: displayText,
    onChange: any,
}

export default function CvForm(props: cvFormProps) {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        address: '',
        linkedinUrl: '',
        githubUrl: '',
        summary: '',
        eduHistory: [],
        workExp: [],
        licensesCertif: [],
        skills: []
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleEduHistoryChange = (event: React.ChangeEvent<HTMLInputElement>, index: number, key: keyof FormData["eduHistory"][number]) => {
        const newEduHistory = [...formData.eduHistory];
        newEduHistory[index][key] = event.target.value;
        setFormData({ ...formData, eduHistory: newEduHistory });
    };

    const handleAddEduHistory = () => {
        const newEduHistory = [...formData.eduHistory, {
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
        const newEduHistory = [...formData.eduHistory];
        newEduHistory.splice(index, 1);
        setFormData({ ...formData, eduHistory: newEduHistory });
    };

    const handleWorkExpChange = (event: React.ChangeEvent<HTMLInputElement>, index: number, key: keyof FormData["workExp"][number]) => {
        const newWorkExp = [...formData.workExp];
        newWorkExp[index][key] = event.target.value;
        setFormData({ ...formData, workExp: newWorkExp });
    };

    const handleAddWorkExp = () => {
        const newWorkExp = [...formData.workExp, {
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
        const newWorkExp = [...formData.workExp];
        newWorkExp.splice(index, 1);
        setFormData({ ...formData, workExp: newWorkExp });
    };

    const handleLicensesCertifChange = (event: React.ChangeEvent<HTMLInputElement>, index: number, key: keyof FormData["licensesCertif"][number]) => {
        const newLicensesCertif = [...formData.licensesCertif];
        newLicensesCertif[index][key] = event.target.value;
        setFormData({ ...formData, licensesCertif: newLicensesCertif });
    };

    const handleAddLicensesCertif = () => {
        const newLicensesCertif = [...formData.licensesCertif, {
            licensesCertifName: '',
            licensesCertifOrg: ''
        }];
        setFormData({ ...formData, licensesCertif: newLicensesCertif });
    };

    const handleRemoveLicensesCertif = (index: number) => {
        const newLicensesCertif = [...formData.licensesCertif];
        newLicensesCertif.splice(index, 1);
        setFormData({ ...formData, licensesCertif: newLicensesCertif });
    };

    const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newSkills = [...formData.skills];
        newSkills[index] = event.target.value;
        setFormData({ ...formData, skills: newSkills });
    };

    const handleAddSkills = () => {
        const newSkills = [...formData.skills, ''];
        setFormData({ ...formData, skills: newSkills });
    };

    const handleRemoveSkills = (index: number) => {
        const newSkills = [...formData.skills];
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
            summary: formData.summary,
            eduHistory: formData.eduHistory,
            workExp: formData.workExp,
            licensesCertif: formData.licensesCertif,
            skills: formData.skills
        };

        switch (name) {
            case "export":
                //const form = new FormData(event.currentTarget);
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
            <div className="flex-container">
                <div className="flex-1">
                    <h2>{props.lang.personalInfo}</h2>
                </div>
                <PersonalInfo className="flex-3 flex-col" lang={props.lang} data={formData} onChange={handleChange} />
            </div>

            <Spacer />

            <div className="flex-container">
                <div className="flex-1">
                    <h2>{props.lang.eduHistory}</h2>
                </div>
                <div className="flex-container flex-3 flex-col">
                    {
                        formData.eduHistory.map((value, index) => (
                            <div key={index} className="flex-container flex-col">
                                <EduHistory className="flex-1" lang={props.lang} id={index} value={value} onChange={handleEduHistoryChange} />
                                <Button type="button" onClick={() => handleRemoveEduHistory(index)}><i className="bi bi-trash-fill" /></Button>
                            </div>
                        ))
                    }
                    <Button type="button" onClick={handleAddEduHistory}><i className="bi bi-plus-lg" /></Button>
                </div>
            </div>

            <Spacer />

            <div className="flex-container">
                <div className="flex-1">
                    <h2>{props.lang.workExp}</h2>
                </div>
                <div className="flex-container flex-3 flex-col">
                    {
                        formData.workExp.map((value, index) => (
                            <div key={index} className="flex-container flex-col">
                                <WorkExp className="flex-1" lang={props.lang} id={index} value={value} onChange={handleWorkExpChange} />
                                <Button type="button" onClick={() => handleRemoveWorkExp(index)}><i className="bi bi-trash-fill" /></Button>
                            </div>
                        ))
                    }
                    <Button type="button" onClick={handleAddWorkExp}><i className="bi bi-plus-lg" /></Button>
                </div>
            </div>

            <Spacer />

            <div className="flex-container">
                <div className="flex-1">
                    <h2>{props.lang.licensesCertif}</h2>
                </div>
                <div className="flex-container flex-3 flex-col">
                    {
                        formData.licensesCertif.map((value, index) => (
                            <div className="flex-container">
                                <LicensesCertif className="flex-1" lang={props.lang} id={index} value={value} onChange={handleLicensesCertifChange} />
                                <Button type="button" onClick={() => handleRemoveLicensesCertif(index)}><i className="bi bi-trash-fill" /></Button>
                            </div>
                        ))
                    }
                    <Button type="button" onClick={handleAddLicensesCertif}><i className="bi bi-plus-lg" /></Button>
                </div>
            </div>

            <Spacer />

            <div className="flex-container">
                <div className="flex-1">
                    <h2>{props.lang.skills}</h2>
                </div>
                <div className="flex-container flex-3 flex-col">
                    {
                        formData.skills.map((value, index) => (
                            <div className="flex-container">
                                <Skill className="flex-1" lang={props.lang} id={index} value={value} onChange={handleSkillsChange} />
                                <Button type="button" onClick={() => handleRemoveSkills(index)}><i className="bi bi-trash-fill" /></Button>
                            </div>
                        ))
                    }
                    <Button type="button" onClick={handleAddSkills}><i className="bi bi-plus-lg" /></Button>
                </div>
            </div>

            <Spacer />

            <div className="flex-container">
                <Button className="flex-1" type="button" name="export" onClick={handleSubmit} >{props.lang.export} .json</Button>
                <div className="flex-1 flex-container flex-col button" style={{ textAlign: 'center' }}>{props.lang.import} .json <Input icon="bi-filetype-json" accept=".json" type="file" placeholder="Importar .json" onChange={readFile} /></div>
                <Modal className="flex-1" title={props.lang.viewTitle} buttonText={props.lang.view + " .pdf"}>
                    <PdfRenderer lang={props.lang} data={formData} />
                </Modal>
            </div>
        </form>
    );
}

// <Button className="flex-1" type="button" name="import" onClick={handleSubmit} disabled>{props.lang.import} .json</Button>