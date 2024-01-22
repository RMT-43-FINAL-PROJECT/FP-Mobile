import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { formatDate, formatTimestampToDateString, formatTimestampToTimeString } from "../helpers/formatter";

export default function CardHomeScheduleVisit({ data }) {
    const navigation = useNavigation()
    return (
        <>
            <View style={styles.contentContainer}>
                <TouchableOpacity style={styles.rectangleParent} onPress={() => navigation.navigate('DetailVisit', { data: data })}>
                    <Image style={styles.imageStore} source={{
                        uri: 'https://down-id.img.susercontent.com/file/aab3c3c3f07f882a66ac88b80439b82a',
                    }} />
                    <View style={styles.mainContentContainer}>
                        <Text style={styles.mainContentTitle}>{data.storeInformations.name}</Text>
                        <View style={styles.subContentContainer}>
                            <Text style={styles.content}>Date</Text>
                            <Text style={[styles.contentRightColor, styles.contentRight]}>{formatTimestampToDateString(data.time)}</Text>
                        </View>
                        <View style={styles.subContentContainer}>
                            <Text style={styles.content}>Time</Text>
                            <Text style={[styles.contentRightColor, styles.contentRight]}>{formatTimestampToTimeString(data.time)}</Text>
                        </View>
                        <View style={styles.subContentContainer}>
                            <Text style={styles.content}>Status</Text>
                            <Text style={[data.isCompleted ? styles.completedColor : styles.pending, styles.contentRight]}>
                                {data.isCompleted ? 'Completed' : 'Pending'}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
};
const styles = StyleSheet.create({

    contentContainer: {
        marginTop: 5,
        marginBottom: 100,
        marginHorizontal: 30
    },
    rectangleParent: {
        marginTop: 12,
        marginHorizontal: 8,
        width: "100%",
        flexDirection: "row",
        position: "absolute",
        alignItems: "center",
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
