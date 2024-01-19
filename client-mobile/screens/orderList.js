import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CardOrderList from "../components/CardOrderList";

export default function OrderList() {
    return (
        <View style={styles.outerContainer}>
            <ScrollView style={styles.componentParent}>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <Image source={require('../assets/icons/search.png')} style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Search Order .."
                        />
                    </View>
                </View>
                <CardOrderList />
                <CardOrderList />
                <CardOrderList />
                <CardOrderList />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
        paddingHorizontal: 5,
        flexDirection: "row"
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        backgroundColor: "#C3D7FF",
        borderRadius: 5,
        height: 35
    },
    icon: {
        width: 20,
        height: 20,
        marginHorizontal: 10,
    },
    input: {
        height: 40,
        padding: 10,
        width: 300
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