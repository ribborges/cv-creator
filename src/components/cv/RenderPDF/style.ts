import { StyleSheet } from "@react-pdf/renderer";

const style = StyleSheet.create({
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

export default style;