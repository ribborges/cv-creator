import { Text, View } from "@react-pdf/renderer";

import { useCvDataStore } from "../../../lib/store";
import Translator from "../../Translator";

import style from "./style";

export default function LicensesCertif() {
    const { licensesCertif } = useCvDataStore();

    return (
        <>
            {
                licensesCertif && licensesCertif.length > 0 ?
                    <>
                        <View style={style.spacer} />
                        <View style={style.section}>
                            <Text style={style.title1}><Translator path="licensesCertif.title" /></Text>
                            {
                                licensesCertif && licensesCertif.map((value, index) => (
                                    <View key={index} style={style.subSection}>
                                        <Text style={style.text1}>{value.licensesCertifName}</Text>
                                        <Text style={style.text2}>{value.licensesCertifOrg}</Text>
                                    </View>
                                ))
                            }
                        </View>
                    </> : ""
            }
        </>
    );
}