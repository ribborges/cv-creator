import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import clsx from "clsx";
import { Award, Briefcase, FileEarmarkPdf, FiletypeJson, Kanban, Mortarboard, Person, PersonGear, Translate, InputCursorText } from "react-bootstrap-icons";

import RenderPDF from "@/components/cv/RenderPDF";
import { AnimatedButton, Button, MenuButton } from "@/components/Input";
import Translator from '@/components/Translator';
import { useCvDataStore } from "@/lib/store";
import { Sidebar, SidebarToggle, SidebarHeader, SidebarContent, SidebarFooter, SidebarItem } from "@/components/Sidebar";

export default function Creator() {
    const [pdfVisible, setPdfVisible] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

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
            <Sidebar>
                <SidebarToggle />
                <SidebarHeader className="md:hidden">
                    <SidebarItem>{(context) => <Button
                        onClick={() => setPdfVisible(!pdfVisible)}
                    >
                        {
                            pdfVisible ? <>
                                <InputCursorText />
                                <span
                                    className={clsx(
                                        "transition duration-500",
                                        context.isExpanded ? "opacity-100 translate-x-0" : "absolute opacity-0 -translate-x-2 w-0"
                                    )}
                                >
                                    <Translator path="menu.edit" />
                                </span>
                            </> : <>
                                <FileEarmarkPdf />
                                <span
                                    className={clsx(
                                        "transition duration-500",
                                        context.isExpanded ? "opacity-100 translate-x-0" : "absolute opacity-0 -translate-x-2 w-0"
                                    )}
                                >
                                    <Translator path="menu.preview" />
                                </span>
                            </>}
                    </Button>
                    }</SidebarItem>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarItem>{(context) => <MenuButton
                        icon={<Person />}
                        label={
                            <span
                                className={clsx(
                                    "text-sm transition duration-500",
                                    context.isExpanded ? "opacity-100 translate-x-0" : "absolute opacity-0 -translate-x-2 w-0"
                                )}
                            ><Translator path="menu.info" /></span>
                        }
                        onClick={() => navigate("/creator")}
                        className={clsx(
                            location.pathname === "/creator" ? "bg-zinc-200 dark:bg-zinc-900" : "",
                            context.isExpanded ? "" : "justify-center"
                        )}
                    />}</SidebarItem>
                    <SidebarItem>{(context) => <MenuButton
                        icon={<Mortarboard />}
                        label={
                            <span
                                className={clsx(
                                    "text-sm transition duration-500",
                                    context.isExpanded ? "opacity-100 translate-x-0" : "absolute opacity-0 -translate-x-2 w-0"
                                )}
                            ><Translator path="menu.education" /></span>
                        }
                        onClick={() => navigate("/creator/education")}
                        className={clsx(
                            location.pathname === "/creator/education" ? "bg-zinc-200 dark:bg-zinc-900" : "",
                            context.isExpanded ? "" : "justify-center"
                        )}
                    />}</SidebarItem>
                    <SidebarItem>{(context) => <MenuButton
                        icon={<Briefcase />}
                        label={
                            <span
                                className={clsx(
                                    "text-sm transition duration-500",
                                    context.isExpanded ? "opacity-100 translate-x-0" : "absolute opacity-0 -translate-x-2 w-0"
                                )}
                            ><Translator path="menu.experience" /></span>
                        }
                        onClick={() => navigate("/creator/experience")}
                        className={clsx(
                            location.pathname === "/creator/experience" ? "bg-zinc-200 dark:bg-zinc-900" : "",
                            context.isExpanded ? "" : "justify-center"
                        )}
                    />}</SidebarItem>
                    <SidebarItem>{(context) => <MenuButton
                        icon={<Award />}
                        label={
                            <span
                                className={clsx(
                                    "text-sm transition duration-500",
                                    context.isExpanded ? "opacity-100 translate-x-0" : "absolute opacity-0 -translate-x-2 w-0"
                                )}
                            ><Translator path="menu.certifications" /></span>
                        }
                        onClick={() => navigate("/creator/certifications")}
                        className={clsx(
                            location.pathname === "/creator/certifications" ? "bg-zinc-200 dark:bg-zinc-900" : "",
                            context.isExpanded ? "" : "justify-center"
                        )}
                    />}</SidebarItem>
                    <SidebarItem>{(context) => <MenuButton
                        icon={<Translate />}
                        label={
                            <span
                                className={clsx(
                                    "text-sm transition duration-500",
                                    context.isExpanded ? "opacity-100 translate-x-0" : "absolute opacity-0 -translate-x-2 w-0"
                                )}
                            ><Translator path="menu.languages" /></span>
                        }
                        onClick={() => navigate("/creator/languages")}
                        className={clsx(
                            location.pathname === "/creator/languages" ? "bg-zinc-200 dark:bg-zinc-900" : "",
                            context.isExpanded ? "" : "justify-center"
                        )}
                    />}</SidebarItem>
                    <SidebarItem>{(context) => <MenuButton
                        icon={<PersonGear />}
                        label={
                            <span
                                className={clsx(
                                    "text-sm transition duration-500",
                                    context.isExpanded ? "opacity-100 translate-x-0" : "absolute opacity-0 -translate-x-2 w-0"
                                )}
                            ><Translator path="menu.skills" /></span>
                        }
                        onClick={() => navigate("/creator/skills")}
                        className={clsx(
                            location.pathname === "/creator/skills" ? "bg-zinc-200 dark:bg-zinc-900" : "",
                            context.isExpanded ? "" : "justify-center"
                        )}
                    />}</SidebarItem>
                    <SidebarItem>{(context) => <MenuButton
                        icon={<Kanban />}
                        label={
                            <span
                                className={clsx(
                                    "text-sm transition duration-500",
                                    context.isExpanded ? "opacity-100 translate-x-0" : "absolute opacity-0 -translate-x-2 w-0"
                                )}
                            ><Translator path="menu.projects" /></span>
                        }
                        onClick={() => navigate("/creator/projects")}
                        className={clsx(
                            location.pathname === "/creator/projects" ? "bg-zinc-200 dark:bg-zinc-900" : "",
                            context.isExpanded ? "" : "justify-center"
                        )}
                    />}</SidebarItem>

                </SidebarContent>
                <SidebarFooter>
                    <SidebarItem>{(context) => <AnimatedButton
                        onClick={() => window.print()}
                    >
                        <FileEarmarkPdf />
                        <span
                            className={clsx(
                                "transition duration-500",
                                context.isExpanded ? "opacity-100 translate-x-0" : "absolute opacity-0 -translate-x-2 w-0"
                            )}
                        >
                            <Translator path="menu.print" />
                        </span>
                    </AnimatedButton>}</SidebarItem>
                    <SidebarItem>{(context) => <Button
                        type="button"
                        name="export"
                        onClick={handleSubmit}
                    >
                        <FiletypeJson />
                        <span
                            className={clsx(
                                "transition duration-500",
                                context.isExpanded ? "opacity-100 translate-x-0" : "absolute opacity-0 -translate-x-2 w-0"
                            )}
                        >
                            <Translator path="menu.export" />
                        </span>
                    </Button>}</SidebarItem>
                </SidebarFooter>
            </Sidebar>
            <div className={clsx("md:flex flex-1 overflow-y-scroll p-6", pdfVisible ? "hidden" : "flex")}>
                <Outlet />
            </div>
            <div className={clsx("md:flex flex-1 flex-col items-stretch p-2 gap-4", pdfVisible ? "flex" : "hidden")}>
                <RenderPDF />
            </div>
        </div>
    );
}
