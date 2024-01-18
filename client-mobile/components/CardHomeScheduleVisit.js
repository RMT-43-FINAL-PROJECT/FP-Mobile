import { Image, StyleSheet, Text, View } from "react-native";

export default function CardHomeScheduleVisit() {
    return (
        <>
            <View style={styles.contentContainer}>
                <View style={styles.rectangleParent}>
                    <Image style={styles.imageStore} source={{
                        uri: 'https://down-id.img.susercontent.com/file/aab3c3c3f07f882a66ac88b80439b82a',
                    }} />
                    <View style={styles.mainContentContainer}>
                        <Text style={styles.mainContentTitle}>Toko Budi</Text>
                        <View style={styles.subContentContainer}>
                            <Text style={styles.content}>Date</Text>
                            <Text style={[styles.contentRightColor, styles.contentRight]}>Wed, 29 Nov 2025</Text>
                        </View>
                        <View style={styles.subContentContainer}>
                            <Text style={styles.content}>Time</Text>
                            <Text style={[styles.contentRightColor, styles.contentRight]}>10.00 AM</Text>
                        </View>
                        <View style={styles.subContentContainer}>
                            <Text style={styles.content}>Status</Text>
                            <Text style={[styles.completedColor, styles.contentRight]}>Completed</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.contentContainer}>
                <View style={styles.rectangleParent}>
                    <Image style={styles.imageStore} source={{
                        uri: 'https://down-id.img.susercontent.com/file/aab3c3c3f07f882a66ac88b80439b82a',
                    }} />
                    <View style={styles.mainContentContainer}>
                        <Text style={styles.mainContentTitle}>Toko Budi</Text>
                        <View style={styles.subContentContainer}>
                            <Text style={styles.content}>Date</Text>
                            <Text style={[styles.contentRightColor, styles.contentRight]}>Wed, 29 Nov 2025</Text>
                        </View>
                        <View style={styles.subContentContainer}>
                            <Text style={styles.content}>Time</Text>
                            <Text style={[styles.contentRightColor, styles.contentRight]}>10.00 AM</Text>
                        </View>
                        <View style={styles.subContentContainer}>
                            <Text style={styles.content}>Status</Text>
                            <Text style={[styles.pending, styles.contentRight]}>Pending</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};
const styles = StyleSheet.create({

    contentContainer: {
        marginTop: 11,
        backgroundColor: "red"
    },
    rectangleParent: {
        marginTop: 12,
        marginHorizontal: 8,
        width: "100%",
        flexDirection: "row",
        position: "absolute",
        alignItems: "center"
    },
    contentRight: {
        marginLeft: 6,
        fontFamily: "Mulish-Regular",
        fontSize: 10,
        textAlign: "left",
        lineHeight: 14
    },
    imageStore: {
        borderRadius: 8,
        backgroundColor: "black",
        width: 72,
        height: 72
    },
    mainContentContainer: {
        justifyContent: "center",
        marginLeft: 10
    },
    mainContentTitle: {
        fontSize: 14,
        fontFamily: "Mulish-SemiBold"
    },
    subContentContainer: {
        marginTop: 5,
        flexDirection: "row"
    },
    content: {
        fontFamily: "Mulish-Regular",
        fontSize: 10,
        textAlign: "left",
        color: "black",
    },
    contentRightColor: {
        color: "#1b5fe3"
    },

    completedColor: {
        color: "#1dcd9f"
    },
    pending: {
        color: "#f4b718"
    },
    frameContainer: {
        marginTop: 11
    },

})
