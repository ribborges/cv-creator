import { Text, View } from "@react-pdf/renderer";

import { useCvDataStore } from "../../../lib/store";
import Translator from "../../Translator";

import style from "./style";

export default function Languages() {
    const { languages } = useCvDataStore();

    return (
        <>
            {
                languages && languages.length > 0 ?
                    <>
                        <View style={style.spacer} />
                        <View style={style.section}>
                            <Text style={style.title1}><Translator path="languages.title" /></Text>
                            {
                                languages && languages.map((value, index) => (
                                    <View key={index} style={style.subSection}>
                                        <Text style={style.text1}>{value.language}</Text>
                                        <Text style={style.text2}>
                                            {value.level === "select" ? "" : ""}
                                            {value.level === "elementary" ? Translator({ path: "languages.novice" }) : ""}
                                            {value.level === "limited" ? Translator({ path: "languages.limited" }) : ""}
                                            {value.level === "professional" ? Translator({ path: "languages.professional" }) : ""}
                                            {value.level === "full" ? Translator({ path: "languages.full" }) : ""}
                                            {value.level === "native" ? Translator({ path: "languages.native" }) : ""}
                                        </Text>
                                    </View>
                                ))
                            }
                        </View>
                    </> : ""
            }
        </>
    );
}