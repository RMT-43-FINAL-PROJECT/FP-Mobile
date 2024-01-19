import { Image, StyleSheet, Text, View } from "react-native";

export default function CardOrderList() {
    return (
        <View style={styles.frameParent}>
            <View style={styles.instanceWrapper}>
                <View style={styles.orderNumberParent}>
                    <Text style={styles.orderNumberTitle}>Order Number</Text>
                    <Text style={styles.orderNumberText}>ON-98765434338</Text>
                </View>
            </View>
            <View style={styles.frameGroup}>
                <View style={styles.storeNameParent}>
                    <Text style={styles.contentTitle}>Store Name</Text>
                    <View style={styles.parentMainContent}>
                        <Image style={styles.iconLayout} source={require('../assets/icons/location.png')} />
                        <Text style={styles.mainContent}>Toko Pak Ganjar</Text>
                    </View>
                </View>
                <Image style={styles.separatorsIcon} source={require('../assets/icons/separators.png')} />
                <View style={styles.storeNameParent}>
                    <Text style={styles.contentTitle}>Total Billed</Text>
                    <View style={styles.parentMainContent}>
                        <Image style={styles.iconLayout} source={require('../assets/icons/price.png')} />
                        <Text style={styles.mainContent}>Rp 2.000.000</Text>
                    </View>
                    <Image style={styles.separatorsIcon} source={require('../assets/icons/separators.png')} />
                </View>
                <View style={styles.storeNameParent}>
                    <Text style={styles.contentTitle}>Status</Text>
                    <View style={styles.parentMainContent}>
                        <Text style={styles.confirmStatus}>Confirmed</Text>
                    </View>
                </View>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    frameParent: {
        shadowColor: "rgba(0, 0, 0, 0.2)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 1,
        width: "100%",
        flex: 1,
        marginBottom: 15,
    },
    instanceWrapper: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: "#1b5fe3",
        height: 68,
        alignSelf: "stretch"
    },
    orderNumberTitle: {
        textAlign: "left",
        color: "#fff",
        lineHeight: 18,
        fontFamily: "Mulish-Regular",
        fontSize: 12
    },
    orderNumberText: {
        fontWeight: "700",
        fontFamily: "Mulish-Bold",
        marginTop: 4,
        textAlign: "left",
        lineHeight: 20,
        fontSize: 14,
        color: "#fff"
    },
    frameGroup: {
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: "#fff",
        padding: 12,
        overflow: "hidden",
    },
    contentTitle: {
        textAlign: "left",
        color: "#77849D",
        fontFamily: "Mulish-Bold",
        lineHeight: 18,
        fontSize: 12
    },
    iconLayout: {
        height: 16,
        width: 16,
        overflow: "hidden",
    },
    parentMainContent: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 4
    },
    confirmStatus: {
        color: "#00B407",
        marginLeft: 4,
        lineHeight: 20,
        textAlign: "left",
        fontSize: 12,
        fontFamily: "Mulish-Bold"
    },
    orderNumberParent: {
        marginTop: 14,
        marginLeft: 12,
    },
    mainContent: {
        color: "black",
        marginLeft: 4,
        lineHeight: 20,
        textAlign: "left",
        fontSize: 12,
        fontFamily: "Mulish-Regular"
    },
    storeNameParent: {
        alignSelf: "stretch"
    },
    separatorsIcon: {
        height: 1,
        marginVertical: 7,
        maxWidth: "100%",
        overflow: "hidden",
        width: "100%"
    },
});