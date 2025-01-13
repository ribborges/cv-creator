import { Text, View, Link } from "@react-pdf/renderer";

import { useCvDataStore } from "../../../lib/store";
import Translator from "../../Translator";

import style from "./style";

export default function PersonalInfo() {
    const { personalInfo } = useCvDataStore();

    return (
        <View style={style.section}>
            {
                personalInfo.name && (
                    <Text style={style.name}>{personalInfo.name}</Text>
                )
            }
            <Text style={style.info1}>
                {personalInfo.email && personalInfo.email !== "" ? personalInfo.email : ""}
                {personalInfo.phone && personalInfo.phone !== "" ? " | " : ""}
                {personalInfo.phone && personalInfo.phone !== "" ? personalInfo.phone : ""}
                {personalInfo.address && personalInfo.address !== "" ? " | " : ""}
                {personalInfo.address && personalInfo.address !== "" ? personalInfo.address : ""}
            </Text>
            <Text style={style.info1}>
                {
                    personalInfo.linkedinUrl && (
                        <Link style={style.link} src={personalInfo.linkedinUrl}>{personalInfo.linkedinUrl}</Link>
                    )
                }
                {personalInfo.githubUrl && personalInfo.githubUrl !== "" ? " | " : ""}
                {
                    personalInfo.githubUrl && (
                        <Link style={style.link} src={personalInfo.githubUrl}>{personalInfo.githubUrl}</Link>
                    )
                }
                {personalInfo.portfolioUrl && personalInfo.portfolioUrl !== "" ? " | " : ""}
                {
                    personalInfo.portfolioUrl && (
                        <Link style={style.link} src={personalInfo.portfolioUrl}>{personalInfo.portfolioUrl}</Link>
                    )
                }
            </Text>
            {
                personalInfo.summary === "" ? "" :
                    <View style={style.subSection}>
                        <Text style={style.title2}><Translator path="personalInfo.summary" /></Text>
                        <Text style={style.info2}>{personalInfo.summary}</Text>
                    </View>
            }
        </View>
    );
}