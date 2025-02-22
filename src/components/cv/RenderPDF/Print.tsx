import Certifications from "./Certifications";
import Education from "./Education";
import Experience from "./Experience";
import Languages from "./Languages";
import PersonalInfo from "./Info";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Print({ id }: { id?: string }) {
    return (
        <div id={id} className="flex flex-col">
            <div className="flex flex-col gap-4">
                <PersonalInfo />
                <Education />
                <Experience />
                <Skills />
                <Languages />
                <Certifications />
                <Projects />
            </div>
        </div>
    );
}