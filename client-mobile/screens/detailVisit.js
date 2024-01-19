import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DetailVisit() {
    return (
        <View style={styles.wireframesItemList}>
            <View style={styles.mapsContainer}>
                <Image style={styles.maps} contentMode="cover" source={require('../assets/icons/map.png')} />
            </View>
            <View style={styles.rectangleOuterContainer} />
            <View style={styles.contentParent}>
                <View style={styles.contentFrame}>
                    <View style={styles.contentTitleParent}>
                        <Text style={styles.contentHeaderTitle}>Toko Budi</Text>
                        <View style={styles.statusParent}>
                            <Text style={styles.status}>Completed</Text>
                        </View>
                    </View>
                    <Image style={styles.separatorsIcon} resizeMode="cover" source={require('../assets/icons/separators.png')} />
                    <View style={[styles.subContentFrame, styles.ParentFlexBox]}>
                        <Text style={styles.contentLeft}>Date</Text>
                        <Text style={styles.contentRight}>Wed, 29 Nov 2025</Text>
                    </View>
                    <View style={[styles.subContentFrame, styles.ParentFlexBox]}>
                        <Text style={styles.contentLeft}>Time</Text>
                        <Text style={styles.contentRight}>10.00 AM</Text>
                    </View>
                    <View style={[styles.subContentFrame, styles.ParentFlexBox]}>
                        <Text style={styles.contentLeft}>Address</Text>
                        <Text style={styles.contentRightAddress}>Jl. Senen raya nomor 90, jakarta pusat</Text>
                    </View>
                    <Image style={styles.separatorsIcon} resizeMode="cover" source={require('../assets/icons/separators.png')} />
                    <View style={styles.ParentFlexBox}>
                        <View style={styles.iconParent}>
                            <Image style={styles.iconLayout} resizeMode="cover" source={require('../assets/icons/phoneprimary.png')} />
                            <Text style={styles.iconText}>Call</Text>
                        </View>
                        <View style={[styles.directionLineParent, styles.iconParent]}>
                            <Image style={styles.iconLayout} resizeMode="cover" source={require('../assets/icons/direction.png')} />
                            <Text style={styles.iconText}>Direction</Text>
                        </View>
                        <View style={[styles.directionLineParent, styles.iconParent]}>
                            <Image style={styles.iconLayout} resizeMode="cover" source={require('../assets/icons/report.png')} />
                            <Text style={styles.iconText}>Report</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={styles.buttonParent}>
                        <View style={styles.textParent} />
                        <Text style={styles.buttonText}>Im on location</Text>
                    </View>
                </TouchableOpacity>

                <Text style={styles.moreInfoText}>{`Jangan lupa untuk memencet tombol
“im on location” ketika sudah sampai lokasi`}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    wireframesItemList: {
        height: 852,
        overflow: "hidden",
        width: "100%",
        flex: 1,
        backgroundColor: "#fff"
    },
    groupChildPosition: {
        left: 0,
        top: 0,
        position: "absolute",
        alignItems: "flex-end",
    },
    contentParent: {
        top: 169,
        left: 33,
        alignItems: "center",
        position: "absolute",
    },
    contentFrame: {
        borderRadius: 8,
        shadowColor: "rgba(0, 0, 0, 0.2)",
        shadowRadius: 2,
        elevation: 2,
        width: 328,
        height: 255,
        padding: 16,
        alignItems: "center",
        backgroundColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 1,
    },
    contentTitleParent: {
        flexDirection: "row"
    },
    ParentFlexBox: {
        flexDirection: "row",
        marginTop: 8
    },
    contentRight: {
        textAlign: "right",
        color: "#77849D",
        fontFamily: "Mulish-Regular",
        lineHeight: 20,
        fontSize: 14
    },
    iconParent: {
        justifyContent: "center",
        height: 56,
        width: 56,
        alignItems: "center",
    },
    groupChildLayout: {

    },
    maps: {
        height: "100%",
        top: "0%",
        right: "0%",
        bottom: "0%",
        left: "0%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
        width: "100%"
    },
    mapsContainer: {
        width: 393,
        height: 225
    },
    rectangleOuterContainer: {
        backgroundColor: "#f6f9ff",
        width: "100%",
        height: "100%"
    },
    contentHeaderTitle: {
        fontSize: 18,
        textAlign: "left",
        fontFamily: "Mulish-Bold",
        color: "black",
        marginBottom: 6
    },
    statusParent: {
        width: 210,
        justifyContent: "flex-end",
        flexDirection: "row",
        alignItems: "center"
    },
    status: {
        color: "#1dcd9f",
        fontFamily: "Mulish-Bold",
        fontSize: 14
    },
    separatorsIcon: {
        height: 1,
        marginTop: 12,
        maxWidth: "100%",
        overflow: "hidden",
        width: "100%"
    },
    contentLeft: {
        color: "#77849D",
        fontFamily: "Mulish-Regular",
        fontSize: 14,
        lineHeight: 20,
        textAlign: "left"
    },
    subContentFrame: {
        justifyContent: "space-between",
        alignSelf: "stretch",
        flexDirection: "row"
    },
    contentRightAddress: {
        flex: 1,
        textAlign: "right",
        color: "#77849D",
        fontFamily: "Mulish-Regular",
        lineHeight: 20,
        fontSize: 14
    },
    iconLayout: {
        width: 24,
        height: 24,
        overflow: "hidden"
    },
    iconText: {
        lineHeight: 18,
        marginTop: 4,
        textAlign: "center",
        color: "black",
        fontSize: 12,
        fontFamily: "Mulish-Regular"
    },
    directionLineParent: {
        marginLeft: 19
    },

    textParent: {
        borderRadius: 15,
        backgroundColor: "#1B5FE3",
        shadowColor: "rgba(255, 255, 255, 0)",
        shadowRadius: 10,
        elevation: 10,
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 2
        },
        left: 0,
        top: 0,
        position: "absolute",
        height: 42,
        width: 132
    },
    buttonText: {
        top: 10,
        left: 26,
        lineHeight: 22,
        color: "#fff",
        fontSize: 12,
        textAlign: "left",
        fontFamily: "Mulish-Bold",
        fontWeight: "700",
        position: "absolute"
    },
    buttonParent: {
        marginTop: 20,
        height: 42,
        width: 132
    },
    moreInfoText: {
        color: "#1B5FE3",
        marginTop: 20,
        lineHeight: 20,
        textAlign: "center",
        fontSize: 12,
        fontFamily: "Mulish-Regular"
    },

});