import { useCvDataStore } from "../../../lib/store";
import Translator from "../../Translator";
import Section from "./Section";

export default function Info() {
    const { info } = useCvDataStore();

    const summary = Translator({ path: "info.summary" })

    return (
        <div>
            <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-indigo-500">
                    {info.name}
                </span>
                {
                    info.title && info.title !== "" &&
                    <span className="text-lg text-gray-700">
                        {info.title}
                    </span>
                }
                <span className="text-black text-sm">
                    {info.address && info.address !== "" ? info.address : ""}
                    {info.address && info.address !== "" && info.phone && info.phone !== "" ? " | " : ""}
                    {(info.address && info.address !== "" && info.email && info.email !== "") && info.phone && info.phone === "" ? " | " : ""}
                    {info.phone && info.phone !== "" ? info.phone : ""}
                    {info.phone && info.phone !== "" && info.email && info.email !== "" ? " | " : ""}
                    {info.email && info.email !== "" ? info.email : ""}
                </span>
                <span className="text-sm">
                    {
                        info.linkedin && info.linkedin !== "" ?
                            <a className="text-indigo-500 hover:text-indigo-800" href={info.linkedin} target="_blank" rel="noreferrer">
                                {info.linkedin && info.linkedin !== "" ? info.linkedin : ""}
                            </a> : ""
                    }
                    {info.linkedin && info.linkedin !== "" && info.github && info.github !== "" ? " | " : ""}
                    {(info.linkedin && info.linkedin !== "" && info.website && info.website !== "") && info.github && info.github === "" ? " | " : ""}
                    {
                        info.github && info.github !== "" ?
                            <a className="text-indigo-500 hover:text-indigo-800" href={info
                                .github} target="_blank" rel="noreferrer">
                                {info.github && info.github !== "" ? info.github : ""}
                            </a> : ""
                    }
                    {info.github && info.github !== "" && info.website && info.website !== "" ? " | " : ""}
                    {
                        info.website && info.website !== "" ?
                            <a className="text-indigo-500 hover:text-indigo-800" href={info.website} target="_blank" rel="noreferrer">
                                {info.website && info.website !== "" ? info.website : ""}
                            </a> : ""
                    }
                </span>
            </div>
            {
                info.summary && info.summary !== "" &&
                <Section title={summary}>
                    <p className="indent-12 text-sm">
                        {info.summary}
                    </p>
                </Section>
            }
        </div>
    );
}