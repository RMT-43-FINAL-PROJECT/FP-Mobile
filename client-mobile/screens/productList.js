import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../style/GlobalStyles";
import CardProductList from "../components/CardProductList";

const ProductList = () => {
    return (
        <View>
            <View style={styles.componentParent}>
                <CardProductList />
            </View>
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    componentParent: {
        top: 10,
        backgroundColor: "#f6f9ff",
        paddingHorizontal: 26,
    },
});