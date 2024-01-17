import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CardStoreList from "../components/CardStoreList";

export default function StoreList({ navigation }) {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.componentParent}>
                <CardStoreList />
                <TouchableOpacity style={styles.createNewStoreButton} onPress={() => navigation.navigate('ProductList')}>
                    <Text style={styles.storeText}>Create new store</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    outerContainer: {
        overflow: "hidden",
        flex: 1,
        backgroundColor: "#fff",
        width: "100%"
    },
    storeText: {
        fontFamily: "Mulish-Bold",
        fontWeight: "700",
        lineHeight: 25,
        textAlign: "left",
        color: "#fff",
        fontSize: 14
    },
    storeList: {
        fontSize: 24,
        color: "#000"
    },
    componentParent: {
        backgroundColor: "#f6f9ff",
        height: 700,
        paddingHorizontal: 26,
        paddingTop: 15,
        paddingBottom: 25,
        right: -8,
        position: "absolute",
        overflow: "hidden"
    },
    createNewStoreButton: {
        top: 10,
        left: 240,
        backgroundColor: "#1b5fe3",
        paddingHorizontal: 6,
        paddingVertical: 4,
        justifyContent: "center",
        borderRadius: 5,
        position: "absolute",
        overflow: "hidden"
    },
});
