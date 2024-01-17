import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../style/GlobalStyles";
import CardProductList from "../components/CardProductList";

const ProductList = ({ navigation }) => {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.componentParent}>
                <CardProductList />
                <TouchableOpacity onPress={() => navigation.navigate('OrderList')}>
                    <Text>orderList</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    componentParent: {
        paddingTop: 15,
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