import { Document, Page, Text, View, StyleSheet, Font, PDFViewer, Link, PDFDownloadLink } from "@react-pdf/renderer";
import { isMobile } from "react-device-detect";

import FontRobotoSlabBold from '../RobotoSlab/RobotoSlab-Bold.ttf';
import FontRobotoSlabRegular from '../RobotoSlab/RobotoSlab-Regular.ttf';
import FontRobotoSlabLight from '../RobotoSlab/RobotoSlab-Light.ttf';
import FontRobotoSlabThin from '../RobotoSlab/RobotoSlab-Thin.ttf';
import PersonalInfo from "./PersonalInfo";
import WorkExp from "./WorkExp";

import style from "./style";
import EduHistory from "./EduHistory";
import Skills from "./Skills";
import Languages from "./Languages";
import LicensesCertif from "./LicensesCertif";

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

export default function RenderPDF() {
    return (
        isMobile ?
            <PDFDownloadLink className="button"
                document={<DocCv />}
                fileName="cv-creator"
            >
                Download pdf
            </PDFDownloadLink>
            :
            <PDFViewer style={style.viewer}>
                <DocCv />
            </PDFViewer>
    );
}

function DocCv() {
    return (
        <Document>
            <Page size="A4" style={style.page}>
                <PersonalInfo />
                <WorkExp />
                <EduHistory />
                <Skills />
                <Languages />
                <LicensesCertif />
            </Page>
        </Document>
    );
}