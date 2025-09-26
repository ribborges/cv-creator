import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import clsx from "clsx";
import { Award, Briefcase, FileEarmarkPdf, FiletypeJson, Kanban, Mortarboard, Person, PersonGear, Translate, InputCursorText, List } from "react-bootstrap-icons";

import RenderPDF from "@/components/cv/RenderPDF";
import { AnimatedButton, Button, MenuButton } from "@/components/Input";
import Translator from '@/components/Translator';
import { useCvDataStore } from "@/lib/store";

export default function Creator() {
    const [sideMenu, setSideMenu] = useState(false);
    const [pdfVisible, setPdfVisible] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const menuTranslations = {
        info: Translator({ path: "menu.info" }),
        education: Translator({ path: "menu.education" }),
        experience: Translator({ path: "menu.experience" }),
        certifications: Translator({ path: "menu.certifications" }),
        languages: Translator({ path: "menu.languages" }),
        skills: Translator({ path: "menu.skills" }),
        projects: Translator({ path: "menu.projects" })
    };

    const {
        info, education, experience, certifications, languages, skills, projects
    } = useCvDataStore();

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

    return (
        <div className="flex flex-row overflow-hidden h-full pt-22 lg:pt-26">
            <div className="flex flex-col border-r border-zinc-200 dark:border-zinc-900 p-2 md:p-4 gap-2">
                <MenuButton
                    icon={<List />}
                    onClick={() => setSideMenu(!sideMenu)}
                    className="md:hidden"
                />
                <div className={clsx("flex-col gap-2", sideMenu ? "flex" : "hidden lg:flex")}>
                    <Button
                        onClick={() => setPdfVisible(!pdfVisible)}
                        className="md:hidden"
                    >
                        {
                            pdfVisible ? <>
                                <InputCursorText /> <Translator path="menu.edit" />
                            </> : <>
                                <FileEarmarkPdf /> <Translator path="menu.preview" />
                            </>}
                    </Button>
                    <MenuButton
                        icon={<Person />}
                        label={menuTranslations.info}
                        onClick={() => navigate("/creator")}
                        className={location.pathname === "/creator" ? "bg-zinc-200 dark:bg-zinc-900" : ""}
                    />
                    <MenuButton
                        icon={<Mortarboard />}
                        label={menuTranslations.education}
                        onClick={() => navigate("/creator/education")}
                        className={location.pathname === "/creator/education" ? "bg-zinc-200 dark:bg-zinc-900" : ""}
                    />
                    <MenuButton
                        icon={<Briefcase />}
                        label={menuTranslations.experience}
                        onClick={() => navigate("/creator/experience")}
                        className={location.pathname === "/creator/experience" ? "bg-zinc-200 dark:bg-zinc-900" : ""}
                    />
                    <MenuButton
                        icon={<Award />}
                        label={menuTranslations.certifications}
                        onClick={() => navigate("/creator/certifications")}
                        className={location.pathname === "/creator/certifications" ? "bg-zinc-200 dark:bg-zinc-900" : ""}
                    />
                    <MenuButton
                        icon={<Translate />}
                        label={menuTranslations.languages}
                        onClick={() => navigate("/creator/languages")}
                        className={location.pathname === "/creator/languages" ? "bg-zinc-200 dark:bg-zinc-900" : ""}
                    />
                    <MenuButton
                        icon={<PersonGear />}
                        label={menuTranslations.skills}
                        onClick={() => navigate("/creator/skills")}
                        className={location.pathname === "/creator/skills" ? "bg-zinc-200 dark:bg-zinc-900" : ""}
                    />
                    <MenuButton
                        icon={<Kanban />}
                        label={menuTranslations.projects}
                        onClick={() => navigate("/creator/projects")}
                        className={location.pathname === "/creator/projects" ? "bg-zinc-200 dark:bg-zinc-900" : ""}
                    />
                    <AnimatedButton
                        onClick={() => window.print()}
                    >
                        <FileEarmarkPdf /> <Translator path="menu.print" />
                    </AnimatedButton>
                    <Button
                        type="button"
                        name="export"
                        onClick={handleSubmit}
                    >
                        <FiletypeJson /> <Translator path="menu.export" />
                    </Button>
                </div>
            </div>
            <div className={clsx("md:flex flex-1 overflow-y-scroll p-6", pdfVisible ? "hidden" : "flex")}>
                <Outlet />
            </div>
            <div className={clsx("md:flex flex-1 flex-col items-stretch p-2 gap-4", pdfVisible ? "flex" : "hidden")}>
                <RenderPDF />
            </div>
        </div>
    );
}