import { Text, View } from "@react-pdf/renderer";

import { useCvDataStore } from "../../../lib/store";
import Translator from "../../Translator";

import style from "./style";

export default function Skills() {
    const { skills } = useCvDataStore();

    return (
        <>
            {
                skills && skills.length > 0 ?
                    <>
                        <View style={style.spacer} />
                        <View style={style.section} wrap={false}>
                            <Text style={style.title1}><Translator path="skills.title" /></Text>
                            <View style={style.subSection}>
                                <Text style={style.text2}>
                                    {
                                        skills && skills.map((value, index) => (
                                            value + (skills && index === skills.length - 1 ? "." : ", ")
                                        ))
                                    }
                                </Text>
                            </View>
                        </View>
                    </> : ""
            }
        </>
    );
}