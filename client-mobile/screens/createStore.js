import { StyleSheet, View } from "react-native";

export default function CreateStore() {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.componentParent}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    label: {
        fontSize: 14,
        lineHeight: 24,
        color: "#1b5fe3",
        textAlign: "left",
        fontFamily: "Mulish-Regular",
        marginBottom: 4,
        marginTop: 8,
    },

    inputContainer: {
        backgroundColor: "#fff",
        borderColor: '#e8e8e8',
        borderRadius: 5,
        marginBottom: 16,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "rgba(0, 0, 0, 0.2)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 1,
        justifyContent: 'space-between',
    },
    inputText: {
        flex: 1,
        fontSize: 14,
        color: "black",
        textAlign: "left",
        fontFamily: "Mulish-Regular",
        height: 30,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: '#1b5fe3',
        padding: 10,
        borderRadius: 5,
    },
    buttonSubmitText: {
        color: '#fff',
        fontFamily: 'Mulish-Bold',
        textAlign: "center"
    },
    outerContainer: {
        overflow: "hidden",
        flex: 1,
        backgroundColor: "#fff",
        width: "100%"
    },
    componentParent: {
        backgroundColor: "#f6f9ff",
        height: "100%",
        paddingHorizontal: 25,
        paddingTop: 10,
    },
});