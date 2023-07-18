import { Document, Page, Text, View, StyleSheet, Font, PDFViewer, Link, PDFDownloadLink } from "@react-pdf/renderer";
import { displayText } from "../../App";
import { FormData } from '../forms/CvForm';
import { isMobile } from "react-device-detect";

import FontRobotoSlabBold from './RobotoSlab/RobotoSlab-Bold.ttf';
import FontRobotoSlabRegular from './RobotoSlab/RobotoSlab-Regular.ttf';
import FontRobotoSlabLight from './RobotoSlab/RobotoSlab-Light.ttf';
import FontRobotoSlabThin from './RobotoSlab/RobotoSlab-Thin.ttf';

import FontMavenProBlack from './MavenPro/MavenPro-Black.ttf';
import FontMavenProBold from './MavenPro/MavenPro-Bold.ttf';
import FontMavenProMedium from './MavenPro/MavenPro-Medium.ttf';
import FontMavenProRegular from './MavenPro/MavenPro-Regular.ttf';

Font.register({
    family: 'Maven-Pro',
    src: FontMavenProRegular,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fonts: [{
        src: FontMavenProMedium, fontStyle: 'normal', fontWeight: 'medium'
    },{
        src: FontMavenProBold, fontStyle: 'normal', fontWeight: 'bold'
    },{
        src: FontMavenProBlack, fontStyle: 'normal', fontWeight: 'ultrabold'
    }]
});

Font.register({
    family: 'Roboto-Slab',
    src: FontRobotoSlabThin,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fonts: [{
        src: FontRobotoSlabLight, fontStyle: 'normal', fontWeight: 'medium'
    },{
        src: FontRobotoSlabRegular, fontStyle: 'normal', fontWeight: 'bold'
    },{
        src: FontRobotoSlabBold, fontStyle: 'normal', fontWeight: 'ultrabold'
    }]
});

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#eeeeee",
        color: "#1a1a1a",
    },
    section: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        marginBottom: 10,
    },
    subSection: {
        margin: 10,
    },
    viewer: {
        width: "100%",
        height: "60vh",
    },
    name: {
        color: "#9500ff",
        fontSize: "30",
        fontFamily: 'Roboto-Slab',
        fontWeight: 'ultrabold',
    },
    info1: {
        color: "#1a1a1a",
        fontSize: "10",
        fontFamily: 'Roboto-Slab',
        fontWeight: 'bold',
    },
    info2: {
        color: "#1a1a1a",
        fontSize: "10",
        fontFamily: 'Roboto-Slab',
        textAlign: 'justify',
    },
    spacer: {
        borderBottomColor: "#333333",
        borderBottomWidth: "1px",
    },
    link: {
        color: "#ea00ff",
    },
    title1: {
        color: "#1a1a1a",
        fontSize: "20",
        fontFamily: 'Roboto-Slab',
        fontWeight: 'bold',
    },
    title2: {
        color: "#1a1a1a",
        fontSize: "14",
        fontFamily: 'Roboto-Slab',
        fontWeight: 'bold',
    },
    text1: {
        color: "#1a1a1a",
        fontSize: "12",
        fontFamily: 'Roboto-Slab',
    },
    text2: {
        color: "#1a1a1a",
        fontSize: "10",
        fontFamily: 'Roboto-Slab',
        marginLeft: 15,
        textAlign: 'justify',
    },
});

interface pdfProps {
    data: FormData,
    lang: displayText;
}

export default function PdfRenderer({ data, lang }: pdfProps) {
    return (
        isMobile ?
            <PDFDownloadLink className="button"
                document={<DocCv data={data} lang={lang} />}
                fileName="cv-creator"
            >
                Download pdf
            </PDFDownloadLink>
            :
            <PDFViewer style={styles.viewer}>
                <DocCv data={data} lang={lang} />
            </PDFViewer>
    );
}

function DocCv({ data, lang }: pdfProps) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.name}>{data.name}</Text>
                    <Text style={styles.info1}>{data.email} {data.phone === "" ? "" : "|"} {data.phone} {data.address === "" ? "" : "|"} {data.address}</Text>
                    <Text style={styles.info1}><Link style={styles.link} src={data.linkedinUrl}>{data.linkedinUrl}</Link> {data.githubUrl === "" ? "" : "|"} <Link style={styles.link} src={data.githubUrl}>{data.githubUrl}</Link> {data.portfolioUrl === "" ? "" : "|"} <Link style={styles.link} src={data.portfolioUrl}>{data.portfolioUrl}</Link></Text>
                    {
                        data.summary === "" ? "" :
                            <View style={styles.subSection}>
                                <Text style={styles.title2}>{lang.summary}</Text>
                                <Text style={styles.info2}>{data.summary}</Text>
                            </View>
                    }
                </View>
                {
                    data.workExp.length <= 0 ? "" :
                        <>
                            <View style={styles.spacer} />
                            <View style={styles.section}>
                                <Text style={styles.title1}>{lang.workExp}</Text>
                                {
                                    data.workExp.map((value, index) => (
                                        <View key={index} style={styles.subSection}>
                                            <Text style={styles.title2}>{value.workJobTitle}</Text>
                                            <Text style={styles.text1}>{value.workCompanyName}</Text>
                                            <Text style={styles.text1}>{value.workLocation} {value.workBgDate === "" ? "" : "| " + value.workBgDate + (value.workEdDate == undefined || " " ? " - " + lang.today : " - " + value.workEdDate)}</Text>
                                            <Text style={styles.text2}>{value.workDetails}</Text>
                                        </View>
                                    ))
                                }
                            </View>
                        </>
                }
                {
                    data.eduHistory.length <= 0 ? "" :
                        <>
                            <View style={styles.spacer} />
                            <View style={styles.section}>
                                <Text style={styles.title1}>{lang.eduHistory}</Text>
                                {
                                    data.eduHistory.map((value, index) => (
                                        <View key={index} style={styles.subSection}>
                                            <Text style={styles.title2}>{value.schoolDegree} {value.schoolFieldStudy === "" ? "" : "|"} {value.schoolFieldStudy}</Text>
                                            <Text style={styles.text1}>{value.schoolName}</Text>
                                            <Text style={styles.text1}>{value.schoolLocation} {value.schoolBgDate === "" ? "" : "| " + value.schoolBgDate + (value.schoolEdDate === "" ? " - " + lang.today : " - " + value.schoolEdDate)}</Text>
                                            <Text style={styles.text2}>{value.schoolDetails}</Text>
                                        </View>
                                    ))
                                }
                            </View>
                        </>
                }
                {
                    data.skills.length <= 0 ? "" :
                        <>
                            <View style={styles.spacer} />
                            <View style={styles.section}>
                                <Text style={styles.title1}>{lang.skills}</Text>
                                <View style={styles.subSection}>
                                    <Text style={styles.text1}>
                                        {
                                            data.skills.map((value, index) => (
                                                value + (index === data.skills.length - 1 ? "." : ", ")
                                            ))
                                        }
                                    </Text>
                                </View>
                            </View>
                        </>
                }
                {
                    data.licensesCertif.length <= 0 ? "" :
                        <>
                            <View style={styles.spacer} />
                            <View style={styles.section}>
                                <Text style={styles.title1}>{lang.licensesCertif}</Text>
                                {
                                    data.licensesCertif.map((value, index) => (
                                        <View key={index} style={styles.subSection}>
                                            <Text style={styles.title2}>{value.licensesCertifName}</Text>
                                            <Text style={styles.text1}>{value.licensesCertifOrg}</Text>
                                        </View>
                                    ))
                                }
                            </View>
                        </>
                }
            </Page>
        </Document>
    );
}