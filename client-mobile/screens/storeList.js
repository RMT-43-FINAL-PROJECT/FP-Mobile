import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CardStoreList from "../components/CardStoreList";

export default function StoreList({ navigation }) {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.componentParent}>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <Image source={require('../assets/icons/search.png')} style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Search Store .."
                        />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductList')}>
                        <Image source={require('../assets/icons/createblue.png')} style={styles.iconCreate} />

                        {/* <Text style={styles.storeText}>Create new store</Text> */}
                    </TouchableOpacity>
                </View>
                <CardStoreList />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        backgroundColor: "#C3D7FF",
        borderRadius: 5,
        height: 35,
        marginRight: 5
    },
    icon: {
        width: 20,
        height: 20,
        marginHorizontal: 10,
    },
    iconCreate: {
        width: 40,
        height: 40,
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
        paddingHorizontal: 26,
        paddingTop: 10,
        paddingBottom: 25,
        right: -8,
        position: "absolute",
        overflow: "hidden"
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
    createNewStoreButton: {
        backgroundColor: "#1b5fe3",
        borderRadius: 5,
        overflow: "hidden"
    },
});
