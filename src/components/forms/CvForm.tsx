import { useRef, useState } from 'react';
import { Button } from '../input/Button';

import PersonalInfo from './PersonalInfo';
import EduHistory from './EduHistory';
import WorkExp from './WorkExp';
import Spacer from '../separator/Spacer';
import PdfRenderer from '../cv/PdfRenderer';
import Modal from '../modal/Modal';
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
    }>;
}

export interface displayText {
    language: string,
    personalInfo: string,
    eduHistory: string,
    workExp: string,
    export: string,
    import: string,
    view: string,
    viewTitle: string,
    name: string,
    phone: string,
    address: string,
    summary: string,
    schoolName: string,
    schoolDegree: string,
    schoolFieldStudy: string,
    workCompanyName: string,
    workJobTitle: string,
    location: string,
    details: string,
    resetForm: string;
}

export default function CvForm() {
    const [lang, setLang] = useState<displayText>({
        language: "Language",
        personalInfo: "Personal information",
        eduHistory: "Education history",
        workExp: "Work experience",
        export: "Export",
        import: "Import",
        view: "View",
        viewTitle: "PDF view",
        name: "Name",
        phone: "Phone",
        address: "Address",
        summary: "Summary",
        schoolName: "School name",
        schoolDegree: "Degree",
        schoolFieldStudy: "Field of study",
        workCompanyName: "Company name",
        workJobTitle: "Job title",
        location: "Location",
        details: "Details",
        resetForm: "Reset form"
    });

    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        address: '',
        linkedinUrl: '',
        githubUrl: '',
        summary: '',
        eduHistory: [],
        workExp: []
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

        const data = {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            address: formData.address,
            linkedinUrl: formData.linkedinUrl,
            githubUrl: formData.githubUrl,
            summary: formData.summary,
            eduHistory: formData.eduHistory,
            workExp: formData.workExp
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

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const lang = event.target.value;

        switch (lang) {
            case "en":
                setLang({
                    language: "Language",
                    personalInfo: "Personal information",
                    eduHistory: "Education history",
                    workExp: "Work experience",
                    export: "Export",
                    import: "Import",
                    view: "View",
                    viewTitle: "PDF view",
                    name: "Name",
                    phone: "Phone",
                    address: "Address",
                    summary: "Summary",
                    schoolName: "School name",
                    schoolDegree: "Degree",
                    schoolFieldStudy: "Field of study",
                    workCompanyName: "Company name",
                    workJobTitle: "Job title",
                    location: "Location",
                    details: "Details",
                    resetForm: "Reset form"
                })
                break;
            case "pt":
                setLang({
                    language: "Linguagem",
                    personalInfo: "Informações pessoais",
                    eduHistory: "Histórico acadêmico",
                    workExp: "Experiência de trabalho",
                    export: "Exportar",
                    import: "Importar",
                    view: "Vizualizar",
                    viewTitle: "Vizualizador de PDF",
                    name: "Nome",
                    phone: "Telefone",
                    address: "Endereço",
                    summary: "Sumário",
                    schoolName: "Nome da instituição",
                    schoolDegree: "Gráu",
                    schoolFieldStudy: "Curso",
                    workCompanyName: "Nome da empresa",
                    workJobTitle: "Cargo",
                    location: "Localização",
                    details: "Detalhes",
                    resetForm: "Resetar formulário"
                })
                break;
        }
    };

    return (
        <form ref={formRef}>
            <div className="flex-container">
                <div className="flex-5">
                    <h2>{lang.language}</h2>
                </div>
                <Input icon="bi bi-translate" type="option" onChange={handleLanguageChange}>
                    <option value="en">English</option>
                    <option value="pt">Português</option>
                </Input>
            </div>

            <Spacer />

            <div className="flex-container">
                <div className="flex-1">
                    <h2>{lang.personalInfo}</h2>
                </div>
                <PersonalInfo className="flex-3" lang={lang} data={formData} onChange={handleChange} />
            </div>

            <Spacer />

            <div className="flex-container">
                <div className="flex-1">
                    <h2>{lang.eduHistory}</h2>
                </div>
                <div className="flex-container flex-3 flex-col">
                    {
                        formData.eduHistory.map((value, index) => (
                            <div key={index} className="flex-container flex-col">
                                <EduHistory className="flex-1" lang={lang} id={index} value={value} onChange={handleEduHistoryChange} />
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
                    <h2>{lang.workExp}</h2>
                </div>
                <div className="flex-container flex-3 flex-col">
                    {
                        formData.workExp.map((value, index) => (
                            <div key={index} className="flex-container flex-col">
                                <WorkExp className="flex-1" lang={lang} id={index} value={value} onChange={handleWorkExpChange} />
                                <Button type="button" onClick={() => handleRemoveWorkExp(index)}><i className="bi bi-trash-fill" /></Button>
                            </div>
                        ))
                    }
                    <Button type="button" onClick={handleAddWorkExp}><i className="bi bi-plus-lg" /></Button>
                </div>
            </div>

            <Spacer />

            <div className="flex-container">
                <Modal className="flex-1" title={lang.viewTitle} buttonText={lang.view + " .pdf"}>
                    <PdfRenderer lang={lang} data={formData} />
                </Modal>
            </div>
        </form>
    );
}

// <Button className="flex-1" type="button" name="export" onClick={handleSubmit} >{lang.export} .json</Button>
// <Button className="flex-1" type="button" name="import" onClick={handleSubmit} disabled>{lang.import} .json</Button>