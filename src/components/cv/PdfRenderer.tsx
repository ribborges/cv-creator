import { Document, Page, Text, View, StyleSheet, Font, PDFViewer, Link } from "@react-pdf/renderer";
import { displayText, FormData } from '../forms/CvForm';

import FontRobotoSlabBlack from './RobotoSlab/RobotoSlab-Black.ttf';
import FontRobotoSlabBold from './RobotoSlab/RobotoSlab-Bold.ttf';
import FontRobotoSlabRegular from './RobotoSlab/RobotoSlab-Regular.ttf';

Font.register({
    family: 'Roboto-Slab',
    fonts: [
        {
            src: FontRobotoSlabRegular,
        },
        {
            src: FontRobotoSlabBold,
            fontWeight: 'bold',
        },
        {
            src: FontRobotoSlabBlack,
            fontWeight: 'black',
        },
    ],
});

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#eeeeee",
        color: "#1a1a1a",
    },
    section: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 20,
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
        fontWeight: 'black',
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
        fontSize: "15",
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
    },
});

interface pdfProps {
    data: FormData,
    lang: displayText;
}

export default function PdfRenderer({ data, lang }: pdfProps) {
    return (
        <PDFViewer style={styles.viewer}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text style={styles.name}>{data.name}</Text>
                        <Text style={styles.info1}>{data.email} {data.phone == undefined || " " ? "" : "|"} {data.phone} {data.address == undefined || " " ? "" : "|"} {data.address}</Text>
                        <Text style={styles.info1}><Link style={styles.link} src={data.linkedinUrl}>{data.linkedinUrl}</Link> {data.githubUrl == undefined || " " ? "" : "|"} <Link style={styles.link} src={data.githubUrl}>{data.githubUrl}</Link></Text>
                        <View style={styles.subSection}>
                            <Text style={styles.title2}>{data.summary === "" ? "" : lang.summary}</Text>
                            <Text style={styles.info2}>{data.summary}</Text>
                        </View>
                    </View>
                    {
                        data.workExp === undefined || [] ? "" : <View style={styles.spacer} />
                    }
                    <View style={styles.section}>
                        <Text style={styles.title1}>{data.workExp.length <= 0 ? "" : lang.workExp}</Text>
                        {
                            data.workExp.map((value, index) => (
                                <View key={index} style={styles.subSection}>
                                    <Text style={styles.title2}>{value.workJobTitle}</Text>
                                    <Text style={styles.text1}>{value.workCompanyName}</Text>
                                    <Text style={styles.text1}>{value.workLocation} {value.workBgDate.length === undefined || " " ? "" : "| " + value.workBgDate + (value.workEdDate == undefined || " " ? " - Today" : " - " + value.workEdDate)}</Text>
                                    <Text style={styles.text2}>{value.workDetails}</Text>
                                </View>
                            ))
                        }
                    </View>
                    {
                        data.eduHistory === undefined || [] ? "" : <View style={styles.spacer} />
                    }
                    <View style={styles.section}>
                        <Text style={styles.title1}>{data.eduHistory.length <= 0 ? "" : lang.eduHistory}</Text>
                        {
                            data.eduHistory.map((value, index) => (
                                <View key={index} style={styles.subSection}>
                                    <Text style={styles.title2}>{value.schoolDegree} {value.schoolFieldStudy == undefined || " " ? "" : "|"} {value.schoolFieldStudy}</Text>
                                    <Text style={styles.text1}>{value.schoolName}</Text>
                                    <Text style={styles.text1}>{value.schoolLocation} {value.schoolBgDate == undefined || " " ? "" : "| " + value.schoolBgDate + (value.schoolEdDate == undefined || " " ? " - Today" : " - " + value.schoolEdDate)}</Text>
                                    <Text style={styles.text2}>{value.schoolDetails}</Text>
                                </View>
                            ))
                        }
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
}