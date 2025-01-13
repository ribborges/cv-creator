import { Document, Page, Text, View, StyleSheet, Font, PDFViewer, Link, PDFDownloadLink } from "@react-pdf/renderer";
import { isMobile } from "react-device-detect";

import FontRobotoSlabBold from './RobotoSlab/RobotoSlab-Bold.ttf';
import FontRobotoSlabRegular from './RobotoSlab/RobotoSlab-Regular.ttf';
import FontRobotoSlabLight from './RobotoSlab/RobotoSlab-Light.ttf';
import FontRobotoSlabThin from './RobotoSlab/RobotoSlab-Thin.ttf';
import { cvData } from "../../types/cvData";
import Translator from "../Translator";

Font.register({
    family: 'Roboto-Slab',
    src: FontRobotoSlabThin,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fonts: [{
        src: FontRobotoSlabLight, fontStyle: 'normal', fontWeight: 'medium'
    }, {
        src: FontRobotoSlabRegular, fontStyle: 'normal', fontWeight: 'bold'
    }, {
        src: FontRobotoSlabBold, fontStyle: 'normal', fontWeight: 'ultrabold'
    }]
});

const styles = StyleSheet.create({
    page: {
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: "#eeeeee",
        color: "#1a1a1a",
    },
    section: {
        paddingLeft: 30,
        paddingRight: 30,
    },
    subSection: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
    },
    viewer: {
        width: "100%",
        height: "60vh",
    },
    name: {
        color: "#9500ff",
        fontSize: "22",
        fontFamily: 'Roboto-Slab',
        fontWeight: 'ultrabold',
    },
    info1: {
        color: "#1a1a1a",
        fontSize: "8",
        fontFamily: 'Roboto-Slab',
        fontWeight: 'bold',
    },
    info2: {
        color: "#1a1a1a",
        fontSize: "9",
        fontFamily: 'Roboto-Slab',
        textAlign: 'justify',
        fontWeight: 'medium',
    },
    spacer: {
        borderBottomColor: "#333333",
        borderBottomWidth: "1px",
        marginTop: 10,
        marginBottom: 10,
    },
    link: {
        color: "#ea00ff",
    },
    title1: {
        color: "#1a1a1a",
        fontSize: "12",
        fontFamily: 'Roboto-Slab',
        fontWeight: 'ultrabold',
    },
    title2: {
        color: "#1a1a1a",
        fontSize: "12",
        fontFamily: 'Roboto-Slab',
        fontWeight: 'bold',
    },
    text1: {
        color: "#1a1a1a",
        fontSize: "11",
        fontFamily: 'Roboto-Slab',
    },
    text2: {
        color: "#1a1a1a",
        fontSize: "10",
        fontFamily: 'Roboto-Slab',
        marginLeft: 15,
        textAlign: 'justify',
        fontWeight: 'medium',
    },
});

interface pdfProps {
    data: cvData
}

export default function PdfRenderer({ data }: pdfProps) {
    return (
        isMobile ?
            <PDFDownloadLink className="button"
                document={<DocCv data={data} />}
                fileName="cv-creator"
            >
                Download pdf
            </PDFDownloadLink>
            :
            <PDFViewer style={styles.viewer}>
                <DocCv data={data} />
            </PDFViewer>
    );
}

function DocCv({ data }: pdfProps) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    {
                        data.name && (
                            <Text style={styles.name}>{data.name}</Text>
                        )
                    }
                    <Text style={styles.info1}>
                        {data.email && data.email !== "" ? data.email : ""}
                        {data.phone && data.phone !== "" ? " | " : ""}
                        {data.phone && data.phone !== "" ? data.phone : ""}
                        {data.address && data.address !== "" ? " | " : ""}
                        {data.address && data.address !== "" ? data.address : ""}
                    </Text>
                    <Text style={styles.info1}>
                        {
                            data.linkedinUrl && (
                                <Link style={styles.link} src={data.linkedinUrl}>{data.linkedinUrl}</Link>
                            )
                        }
                        {data.githubUrl && data.githubUrl !== "" ? " | " : ""}
                        {
                            data.githubUrl && (
                                <Link style={styles.link} src={data.githubUrl}>{data.githubUrl}</Link>
                            )
                        }
                        {data.portfolioUrl && data.portfolioUrl !== "" ? " | " : ""}
                        {
                            data.portfolioUrl && (
                                <Link style={styles.link} src={data.portfolioUrl}>{data.portfolioUrl}</Link>
                            )
                        }
                    </Text>
                    {
                        data.summary === "" ? "" :
                            <View style={styles.subSection}>
                                <Text style={styles.title2}><Translator path="personalInfo.title" /></Text>
                                <Text style={styles.info2}>{data.summary}</Text>
                            </View>
                    }
                </View>
                {
                    data.workExp && data.workExp.length > 0 ?
                        <>
                            <View style={styles.spacer} />
                            <View style={styles.section}>
                                <Text style={styles.title1}><Translator path="personalInfo.title" /></Text>
                                {
                                    data.workExp && data.workExp.map((value, index) => (
                                        <View key={index} style={styles.subSection}>
                                            <Text style={styles.title2}>{value.workJobTitle}</Text>
                                            <Text style={styles.text1}>{value.workCompanyName}</Text>
                                            <Text style={styles.text1}>{value.workLocation} {value.workBgDate === "" ? "" : "| " + value.workBgDate?.split("-")[1] + "/" + value.workBgDate?.split("-")[0] + (value.workEdDate === "" ? " - " + Translator({ path: "personalInfo.title" }) : " - " + value.workEdDate?.split("-")[1] + "/" + value.workEdDate?.split("-")[0])}</Text>
                                            <Text style={styles.text2}>{value.workDetails}</Text>
                                        </View>
                                    ))
                                }
                            </View>
                        </> : ""
                }
                {
                    data.eduHistory && data.eduHistory.length > 0 ?
                        <>
                            <View style={styles.spacer} />
                            <View style={styles.section}>
                                <Text style={styles.title1}><Translator path="personalInfo.title" /></Text>
                                {
                                    data.eduHistory && data.eduHistory.map((value, index) => (
                                        <View key={index} style={styles.subSection}>
                                            <Text style={styles.title2}>{value.schoolDegree} {value.schoolFieldStudy === "" ? "" : "|"} {value.schoolFieldStudy}</Text>
                                            <Text style={styles.text1}>{value.schoolName}</Text>
                                            <Text style={styles.text1}>{value.schoolLocation} {value.schoolBgDate === "" ? "" : "| " + value.schoolBgDate?.split("-")[1] + "/" + value.schoolBgDate?.split("-")[0] + (value.schoolEdDate === "" ? " - " + Translator({ path: "personalInfo.title" }) : " - " + value.schoolEdDate?.split("-")[1] + "/" + value.schoolEdDate?.split("-")[0])}</Text>
                                            <Text style={styles.text2}>{value.schoolDetails}</Text>
                                        </View>
                                    ))
                                }
                            </View>
                        </> : ""
                }
                {
                    data.skills && data.skills.length > 0 ?
                        <>
                            <View style={styles.spacer} />
                            <View style={styles.section} wrap={false}>
                                <Text style={styles.title1}><Translator path="personalInfo.title" /></Text>
                                <View style={styles.subSection}>
                                    <Text style={styles.text2}>
                                        {
                                            data.skills && data.skills.map((value, index) => (
                                                value + (data.skills && index === data.skills.length - 1 ? "." : ", ")
                                            ))
                                        }
                                    </Text>
                                </View>
                            </View>
                        </> : ""
                }
                {
                    data.languages && data.languages.length > 0 ?
                        <>
                            <View style={styles.spacer} />
                            <View style={styles.section}>
                                <Text style={styles.title1}><Translator path="personalInfo.title" /></Text>
                                {
                                    data.languages && data.languages.map((value, index) => (
                                        <View key={index} style={styles.subSection}>
                                            <Text style={styles.text1}>{value.language}</Text>
                                            <Text style={styles.text2}>
                                                {value.level === "select" ? "" : ""}
                                                {value.level === "elementary" ? Translator({ path: "personalInfo.title" }) : ""}
                                                {value.level === "limited" ? Translator({ path: "personalInfo.title" }) : ""}
                                                {value.level === "professional" ? Translator({ path: "personalInfo.title" }) : ""}
                                                {value.level === "full" ? Translator({ path: "personalInfo.title" }) : ""}
                                                {value.level === "native" ? Translator({ path: "personalInfo.title" }) : ""}
                                            </Text>
                                        </View>
                                    ))
                                }
                            </View>
                        </> : ""
                }
                {
                    data.licensesCertif && data.licensesCertif.length > 0 ?
                        <>
                            <View style={styles.spacer} />
                            <View style={styles.section}>
                                <Text style={styles.title1}><Translator path="personalInfo.title" /></Text>
                                {
                                    data.licensesCertif && data.licensesCertif.map((value, index) => (
                                        <View key={index} style={styles.subSection}>
                                            <Text style={styles.text1}>{value.licensesCertifName}</Text>
                                            <Text style={styles.text2}>{value.licensesCertifOrg}</Text>
                                        </View>
                                    ))
                                }
                            </View>
                        </> : ""
                }
            </Page>
        </Document>
    );
}