import { useState } from 'react';
import { useNavigate } from 'react-router';
import pdfToText from 'react-pdftotext';

import { H1, H2 } from "@/components/Heading";
import { AnimatedButton, Upload } from "@/components/Input";
import Translator from '@/components/Translator';
import { askData } from '@/services/ai.service';
import { useCvDataStore } from '@/lib/store';
import { cvData, cleanData } from '@/types/cvData';
import { cvDataSchema } from '@/lib/validation/cvData';
import useModal from '@/hooks/useModal';

export default function Home() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const {
        setInfo, setEducation, setExperience, setCertifications, setLanguages, setSkills, setProjects
    } = useCvDataStore();

    const { show } = useModal();

    const renderModal = () => {
        show({
            title: "The .json file you provided is invalid",
            content: <div className="flex flex-col gap-2 p-8">
                <p className="text-zinc-600 dark:text-zinc-400">
                    The .json file you uploaded does not match the expected format.
                    <br />
                    Please ensure that the file contains valid CV data in the correct structure.
                    <br />
                    <br />
                    <br />
                    <span className="font-bold">Important:</span> The CV Maker does not support the import of .json files that were not created by it.
                    <br />
                    If you want to import a CV from another source, please use a .pdf file instead.
                </p>
            </div>
        })
    }

    const validateData = (data: cvData) => {
        const parsedData = cvDataSchema.safeParse(data);
        if (!parsedData.success) {
            console.error("Invalid CV data:", parsedData.error);
            return false;
        }
        return true;
    }

    const storeDataFromJson = (data: cvData) => {
        // Clear previous data
        setInfo(cleanData.info);
        setEducation(cleanData.education ?? []);
        setExperience(cleanData.experience ?? []);
        setCertifications(cleanData.certifications ?? []);
        setLanguages(cleanData.languages ?? []);
        setSkills(cleanData.skills ?? { hard: [], soft: [] });
        setProjects(cleanData.projects ?? []);

        if (data.info) setInfo(data.info);
        if (data.education) setEducation(data.education);
        if (data.experience) setExperience(data.experience);
        if (data.certifications) setCertifications(data.certifications);
        if (data.languages) setLanguages(data.languages);
        if (data.skills) setSkills(data.skills);
        if (data.projects) setProjects(data.projects);
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
                        storeDataFromJson(data);
                    } else {
                        console.error("Failed to format the converted text");
                    }
                })
                .catch(error => console.error("Failed to extract text from pdf"))
                .finally(() => {
                    setLoading(false);
                    event.target.value = "";
                    navigate('/creator');
                });
            return;
        };

        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target?.result as string;
                const parsedObject = JSON.parse(content);
                if (!validateData(parsedObject)) {
                    renderModal();
                    event.target.value = "";
                    return;
                }
                storeDataFromJson(parsedObject);
                event.target.value = "";
                navigate('/creator');
            };
            reader.readAsText(file);
        };
    };

    return (
        <div className="flex flex-col md:flex-row gap-2 items-center justify-evenly h-full p-2">
            <div className="flex flex-col gap-2 items-center justify-center">
                <H1 className="text-center text-purple-600">
                    <Translator path="homePage.title" />
                </H1>
                <H2 className="text-center">
                    <Translator path="homePage.subtitle" />
                </H2>
                <p className="text-center text-zinc-600 dark:text-zinc-400">
                    <Translator path="homePage.description.1" />
                    <br />
                    <Translator path="homePage.description.2" />
                </p>
            </div>
            <div className="flex flex-col gap-2 items-stretch">
                <AnimatedButton
                    className="font-bold text-xl"
                    onClick={() => navigate('/creator')}
                >
                    <Translator path="homePage.start" />
                </AnimatedButton>
                <span className="text-center">or</span>
                <Upload className="flex-1" accept=".json, .pdf" onChange={readFile} disabled={loading} loading={loading}>
                    <Translator path="homePage.import" />
                </Upload>
            </div>
        </div>
    );
}