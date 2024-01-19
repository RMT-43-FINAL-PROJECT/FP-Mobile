import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import CardRowSalesRev from "../components/CardRowSalesRev";

export default function MonthlySales() {
    return (
        <View style={styles.outerContainer}>
            <ScrollView style={styles.componentParent}>
                <View style={styles.labelParent}>
                    <Text style={styles.label}>Year 2023</Text>
                    <View style={styles.frameParent}>
                        <View style={styles.labelFlexBox2}>
                            <Text style={[styles.label1, styles.labelFlexBox1]}>Months</Text>
                            <Text style={[styles.label2, styles.labelFlexBox]}>Generated Revenue</Text>
                        </View>
                        <Image style={styles.separatorsIconLayout} resizeMode="cover" source={require('../assets/icons/separators.png')} />
                        <CardRowSalesRev />
                        <CardRowSalesRev />
                        <CardRowSalesRev />
                        <CardRowSalesRev />
                        <CardRowSalesRev />
                        <CardRowSalesRev />
                        <CardRowSalesRev />
                        <CardRowSalesRev />
                        <CardRowSalesRev />
                        <CardRowSalesRev />
                        <CardRowSalesRev />
                        <CardRowSalesRev />
                        <View style={styles.labelTotal}>
                            <Text style={styles.labelTotalText}>Total Revenue</Text>
                            <Text style={styles.labelContentTotalText}>Rp 1.200.000.000</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    outerContainer: {
        overflow: "hidden",
        flex: 1,
        backgroundColor: "#fff",
        width: "100%"
    },
    componentParent: {
        backgroundColor: "#f6f9ff",
        height: "100%",
        paddingHorizontal: 26,
        paddingTop: 10,
        paddingBottom: 25,
        position: "absolute",
        overflow: "hidden",
        width: "100%"
    },
    labelFlexBox1: {
        width: 80,
        alignItems: "center",
        display: "flex",
        textAlign: "left"
    },
    labelFlexBox: {
        marginLeft: 12,
        textAlign: "center",
        flex: 1
    },
    separatorsIconLayout: {
        height: 1,
        overflow: "hidden",
        maxWidth: "100%",
        width: "100%",
        marginTop: 12
    },
    labelFlexBox2: {
        flexDirection: "row",
        width: 328,
        marginLeft: 20,
        marginBottom: 5
    },
    labelTotal: {
        flexDirection: "row",
        width: "100%",
        height: 50,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: "#1B5FE3",
        alignItems: "center",
    },
    labelTotalText: {
        width: 100,
        alignItems: "center",
        display: "flex",
        textAlign: "left",
        color: "black",
        fontFamily: "Mulish-Bold",
        lineHeight: 14,
        fontSize: 14,
        marginLeft: 20,
        color: "#fff"

    },
    labelContentTotalText: {
        color: "black",
        fontFamily: "Mulish-Bold",
        lineHeight: 14,
        fontSize: 14,
        textAlign: "center",
        flex: 1,
        color: "#fff"
    },
    labelTypo: {
        color: "black",
        fontFamily: "Mulish-Regular",
        lineHeight: 14,
        fontSize: 14
    },
    label4: {
        marginLeft: 12,
        textAlign: "center",
        flex: 1
    },
    label3: {
        width: 80,
        alignItems: "center",
        display: "flex",
        textAlign: "left",
    },
    label: {
        fontSize: 20,
        textAlign: "center",
        color: "#1B5FE3",
        fontFamily: "Mulish-Bold",
        marginTop: 10,
    },
    label1: {
        lineHeight: 14,
        fontSize: 14,
        color: "#1B5FE3",
        fontFamily: "Mulish-Bold",
        fontWeight: "700"
    },
    label2: {
        lineHeight: 14,
        fontSize: 14,
        color: "#1B5FE3",
        fontFamily: "Mulish-Bold",
        fontWeight: "700"
    },
    label4: {
        marginLeft: 12,
        textAlign: "center",
        flex: 1
    },
    labelContainer: {
        marginTop: 12
    },
    frameParent: {
        marginTop: 15,
        width: "100%",
    },
    labelParent4: {
        marginTop: 15
    },
    labelParent: {
        flex: 1,
        marginTop: 8,
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
        shadowOpacity: 1,
        elevation: 2,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: "rgba(0, 0, 0, 0.4)",
        borderRadius: 8,
        marginBottom: 15,
    }
})