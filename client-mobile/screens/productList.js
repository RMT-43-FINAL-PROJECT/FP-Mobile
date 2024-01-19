import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../style/GlobalStyles";
import CardProductList from "../components/CardProductList";

const ProductList = ({ navigation }) => {
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
                </View>
                <CardProductList />
            </View>
        </View>
    )
}

export default ProductList

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
    componentParent: {
        paddingTop: 10,
        backgroundColor: "#f6f9ff",
        paddingHorizontal: 20,
    },
    outerContainer: {
        overflow: "hidden",
        flex: 1,
        backgroundColor: "#f6f9ff",
        width: "100%"
    },
});