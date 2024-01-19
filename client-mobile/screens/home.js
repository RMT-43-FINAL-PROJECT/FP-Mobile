import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import CardHomeOverview from "../components/CardHomeOverview";
import CardHomeScheduleVisit from "../components/CardHomeScheduleVisit";

export default function Home() {
    return (
        <ScrollView style={styles.outerContainer}>
            <View style={styles.containerSalesName}>
                <Image style={styles.notifIconPosition} contentMode="cover" source={{ uri: "https://m.media-amazon.com/images/M/MV5BMmY2OGM1NjEtNGRiZi00NGY5LThjMzMtOTViYTMwOGM2YmE0XkEyXkFqcGdeQXVyNzY1ODU1OTk@._V1_FMjpg_UX1000_.jpg" }} />
                <Text style={styles.salesNameText}>Budi Budiman</Text>
                <View style={styles.headerIconContainer}>
                    <View style={styles.iconsParent}>
                        <Image style={styles.notifIconLayout} contentMode="cover" source={require('../assets/icons/notif.png')} />
                        <View style={styles.counterLayout}>
                            <Image style={styles.circleCounter} contentMode="cover" source={require('../assets/icons/counter.png')} />
                            <Text style={styles.counterText}>1</Text>
                        </View>
                    </View>
                    <Image style={styles.settingsLineIcon} contentMode="cover" source={require('../assets/icons/settings.png')} />
                </View>
            </View>
            <View style={styles.componentParent}>
                <Text style={styles.headerTitleOverview}>Sales Overview</Text>
                <View style={styles.overviewParent}>
                    <CardHomeOverview />
                </View>
                <Text style={styles.headerTitle}>Scheduled Visit</Text>
                <View style={styles.scheduleParent}>
                    <CardHomeScheduleVisit />
                    <CardHomeScheduleVisit />
                    <CardHomeScheduleVisit />
                    <CardHomeScheduleVisit />
                    <CardHomeScheduleVisit />
                    <CardHomeScheduleVisit />
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({

    outerContainer: {
        overflow: "hidden",
        flex: 1,
        backgroundColor: "#fff",
        width: "100%"
    },
    overviewParent: {
        backgroundColor: "#f6f9ff",
        height: "100%",
        paddingHorizontal: 25,
        flex: 1
    },
    scheduleParent: {
        backgroundColor: "#f6f9ff",
        height: "100%",
        paddingHorizontal: 25,
        flex: 1,
        gap: 90,
    },
    componentParent: {
        backgroundColor: "#f6f9ff",
        height: "100%",
        paddingHorizontal: 25,
        paddingTop: 15,
    },
    headerTitleOverview: {
        color: "#000",
        textAlign: "left",
        fontSize: 16,
        fontFamily: "Mulish-Bold",
        width: "100%",
    },
    containerSalesName: {
        alignItems: "center",
        flexDirection: "row",
        height: 50,
        paddingHorizontal: 30
    },
    headerIconContainer: {
        width: 182,
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row",
        height: 50,
    },
    iconsParent: {
        marginLeft: 8,
        height: 24,
        width: 24,
    },
    notifIconPosition: {
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        borderRadius: 50
    },
    notifIconLayout: {
        height: 24,
        width: 24,
        overflow: "hidden",
        left: 0,
        top: 0,
        position: "absolute"
    },
    counterLayout: {
        height: 14,
        width: "100%",
        top: 0,
        position: "absolute",
    },
    circleCounter: {
        height: 14,
        width: 14,
        top: 0,
        position: "absolute",
        left: 12
    },
    counterText: {
        top: 1,
        left: 17,
        fontSize: 8,
        fontFamily: "Mulish-Bold",
        color: "rgba(255, 255, 255, 0.9)",
        textAlign: "left",
        position: "absolute"
    },
    salesNameText: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: "600",
        fontFamily: "Mulish-SemiBold",
        marginLeft: 10,
        textAlign: "left"
    },

    settingsLineIcon: {
        overflow: "hidden",
        marginLeft: 8,
    },
    groupParent: {
        flex: 1,
        width: "100%",
        height: 226,
    },
    headerTitleContainer: {
        backgroundColor: "red",
    },
    headerTitle: {
        fontSize: 16,
        fontFamily: "Mulish-Bold",
        textAlign: "left",
        color: "black",
        marginTop: 10,
    },

});