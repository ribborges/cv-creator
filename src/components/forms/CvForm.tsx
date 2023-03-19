import { useRef, useState } from 'react';
import { Button } from '../input/Button';

import PersonalInfo from './PersonalInfo';
import EduHistory from './EduHistory';
import WorkExp from './WorkExp';
import Spacer from '../separator/Spacer';

export interface FormData {
    name: string,
    phone: string,
    email: string,
    address: string,
    linkedinUrl: string,
    githubUrl: string,
    adicionalInfo: string,
    eduHistory: Array<{
        schoolName: string,
        schoolDegree: string,
        schoolFieldStudy: string,
        schoolLocation: string,
        schoolBgDate: string,
        schoolEdDate: string,
        schoolCurrently: string,
        schoolDetails: string;
    }>,
    workExp: Array<{
        workCompanyName: string,
        workJobTitle: string,
        workLocation: string,
        workBgDate: string,
        workEdDate: string,
        workCurrently: string,
        workDetails: string;
    }>;
}

export default function CvForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        address: '',
        linkedinUrl: '',
        githubUrl: '',
        adicionalInfo: '',
        eduHistory: [{
            schoolName: '',
            schoolDegree: '',
            schoolFieldStudy: '',
            schoolLocation: '',
            schoolBgDate: '',
            schoolEdDate: '',
            schoolCurrently: '',
            schoolDetails: ''
        }],
        workExp: [{
            workCompanyName: '',
            workJobTitle: '',
            workLocation: '',
            workBgDate: '',
            workEdDate: '',
            workCurrently: '',
            workDetails: ''
        }]
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

    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        const name = event.currentTarget.name;

        switch (name) {
            case "export":
                //const form = new FormData(event.currentTarget);
                const data = {
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    address: formData.address,
                    linkedinUrl: formData.linkedinUrl,
                    githubUrl: formData.githubUrl,
                    adicionalInfo: formData.adicionalInfo,
                    eduHistory: formData.eduHistory,
                    workExp: formData.workExp
                };
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

    return (
        <form ref={formRef}>
            <div className="flex-container">
                <div className="flex-1">
                    <h2>Personal information</h2>
                </div>
                <PersonalInfo className="flex-3" data={formData} onChange={handleChange} />
            </div>

            <Spacer />

            <div className="flex-container">
                <div className="flex-1">
                    <h2>Education history</h2>
                </div>
                <div className="flex-container flex-3 flex-col">
                    {
                        formData.eduHistory.map((value, index) => (
                            <div key={index}>
                                <EduHistory className="flex-1" id={index} value={value} onChange={handleEduHistoryChange} />
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
                    <h2>Work experience</h2>
                </div>
                <div className="flex-container flex-3 flex-col">
                    {
                        formData.workExp.map((value, index) => (
                            <div key={index}>
                                <WorkExp className="flex-1" id={index} value={value} onChange={handleWorkExpChange} />
                                <Button type="button" onClick={() => handleRemoveWorkExp(index)}><i className="bi bi-trash-fill" /></Button>
                            </div>
                        ))
                    }
                    <Button type="button" onClick={handleAddWorkExp}><i className="bi bi-plus-lg" /></Button>
                </div>
            </div>

            <Spacer />

            <div className="flex-container">
                <Button className="flex-1" type="button" name="export" onClick={handleSubmit} disabled>Export .json</Button>
                <Button className="flex-1" type="button" name="import" onClick={handleSubmit} disabled>Import .json</Button>
                <Button className="flex-1" type="button" name="create" onClick={handleSubmit}>Create CV</Button>
            </div>
        </form>
    );
}