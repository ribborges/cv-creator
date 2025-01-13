import { Text, View } from "@react-pdf/renderer";

import { useCvDataStore } from "../../../lib/store";
import Translator from "../../Translator";

import style from "./style";

export default function WorkExp() {
    const { workExp } = useCvDataStore();

    return (
        <>
            {
                workExp && workExp.length > 0 ?
                    <>
                        <View style={style.spacer} />
                        <View style={style.section}>
                            <Text style={style.title1}><Translator path="workExp.title" /></Text>
                            {
                                workExp && workExp.map((value, index) => (
                                    <View key={index} style={style.subSection}>
                                        <Text style={style.title2}>{value.workJobTitle}</Text>
                                        <Text style={style.text1}>{value.workCompanyName}</Text>
                                        <Text style={style.text1}>{value.workLocation} {value.workBgDate === "" ? "" : "| " + value.workBgDate?.split("-")[1] + "/" + value.workBgDate?.split("-")[0] + (value.workEdDate === "" ? " - " + Translator({ path: "personalInfo.title" }) : " - " + value.workEdDate?.split("-")[1] + "/" + value.workEdDate?.split("-")[0])}</Text>
                                        <Text style={style.text2}>{value.workDetails}</Text>
                                    </View>
                                ))
                            }
                        </View>
                    </> : ""
            }
        </>
    );
}