import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CardHomeOverview() {
    const navigation = useNavigation()
    return (

        <View style={styles.frameWrapper}>
            <View style={styles.groupParent}>
                <View style={styles.rectangleLayout}>
                    <TouchableOpacity onPress={() => navigation.navigate('MonthlySales')}>
                        <View style={[styles.groupBlue, styles.groupLayout]} />
                        <Text style={[styles.contentTextTitle, styles.contentText]}>Monthly sales</Text>
                        <Text style={[styles.mainContent, styles.contentText]}>Rp 100.000.000</Text>
                        <Image style={styles.iconArrow} contentMode="cover" source={require('../assets/icons/toprightarrow.png')} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
                    <TouchableOpacity onPress={() => navigation.navigate('StoreList')}>
                        <View style={[styles.groupGreen, styles.groupLayout]} />
                        <Image style={styles.iconArrow} contentMode="cover" source={require('../assets/icons/toprightarrow.png')} />
                        <Text style={[styles.contentTextTitle, styles.contentText]}>Store List</Text>
                        <Text style={[styles.mainContent, styles.contentText]}>100 Stores</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.groupContainer}>
                <View style={styles.rectangleLayout}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductList')}>
                        <View style={[styles.groupYellow, styles.groupLayout]} />
                        <Image style={styles.iconArrow} contentMode="cover" source={require('../assets/icons/toprightarrow.png')} />
                        <Text style={[styles.contentTextTitle, styles.contentText]}>Product List</Text>
                        <Text style={[styles.mainContent, styles.contentText]}>1000 Products</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
                    <TouchableOpacity onPress={() => navigation.navigate('OrderList')}>
                        <View style={[styles.groupGray, styles.groupLayout]} />
                        <Text style={[styles.contentTextTitle, styles.contentText]}>Order List</Text>
                        <Image style={styles.iconArrow} contentMode="cover" source={require('../assets/icons/toprightarrow.png')} />
                        <Text style={[styles.mainContent, styles.contentText]}>30 Orders</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    frameWrapper: {
        marginTop: 15,
        alignItems: "center"
    },
    groupLayout: {
        borderRadius: 8,
        left: 0,
        top: 0,
        position: "absolute",
        height: 156,
        width: 156,
    },
    groupParent: {
        flexDirection: "row"
    },
    rectangleLayout: {
        height: 156,
        width: 156,
    },
    groupBlue: {
        backgroundColor: "#1b5fe3"
    },
    contentText: {
        color: "#fff",
        left: 14,
        position: "absolute",
        textAlign: "left",
        fontSize: 16,
    },
    contentTextTitle: {
        top: 32,
        fontFamily: "Mulish-Bold",
        fontWeight: "700",
        left: 14,
    },
    mainContent: {
        top: 118,
        fontWeight: "600",
        fontFamily: "Mulish-SemiBold"
    },
    iconArrow: {
        top: 10,
        left: 126,
        width: 20,
        height: 20,
        position: "absolute"
    },
    groupGreen: {
        backgroundColor: "#1dcd9f"
    },
    rectangleGroup: {
        marginLeft: 15
    },
    groupYellow: {
        backgroundColor: "#f4b718"
    },
    groupGray: {
        backgroundColor: "#537780"
    },
    groupContainer: {
        marginTop: 10,
        flexDirection: "row"
    },
});