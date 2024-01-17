import { StyleSheet, View } from "react-native";
import CardOrderList from "../components/CardOrderList";

export default function OrderList() {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.componentParent}>
                <CardOrderList />
                <CardOrderList />
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
    componentParent: {
        backgroundColor: "#f6f9ff",
        height: 900,
        paddingHorizontal: 25,
        paddingTop: 15,
    },
});