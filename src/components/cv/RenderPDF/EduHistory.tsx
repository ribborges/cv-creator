import { Text, View } from "@react-pdf/renderer";

import { useCvDataStore } from "../../../lib/store";
import Translator from "../../Translator";

import style from "./style";

export default function EduHistory() {
    const { eduHistory } = useCvDataStore();

    return (
        <>
            {
                eduHistory && eduHistory.length > 0 ?
                    <>
                        <View style={style.spacer} />
                        <View style={style.section}>
                            <Text style={style.title1}><Translator path="eduHistory.title" /></Text>
                            {
                                eduHistory && eduHistory.map((value, index) => (
                                    <View key={index} style={style.subSection}>
                                        <Text style={style.title2}>{value.schoolDegree} {value.schoolFieldStudy === "" ? "" : "|"} {value.schoolFieldStudy}</Text>
                                        <Text style={style.text1}>{value.schoolName}</Text>
                                        <Text style={style.text1}>{value.schoolLocation} {value.schoolBgDate === "" ? "" : "| " + value.schoolBgDate?.split("-")[1] + "/" + value.schoolBgDate?.split("-")[0] + (value.schoolEdDate === "" ? " - " + Translator({ path: "personalInfo.title" }) : " - " + value.schoolEdDate?.split("-")[1] + "/" + value.schoolEdDate?.split("-")[0])}</Text>
                                        <Text style={style.text2}>{value.schoolDetails}</Text>
                                    </View>
                                ))
                            }
                        </View>
                    </> : ""
            }
        </>
    );
}