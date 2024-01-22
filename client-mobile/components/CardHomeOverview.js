import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getValueFor } from "../helpers/secureStore";
import { useEffect, useState } from "react";

export default function CardHomeOverview() {
    const [counterOrder, setCounterOrder] = useState('')
    const navigation = useNavigation()

    const counterOrderValue = async () => {
        try {
            const token = await getValueFor('access_token')
            if (token) {
                const response = await fetch('https://036e-2001-448a-10b0-3db1-5032-3503-3f18-bfb6.ngrok-free.app/orders/user', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if (response.ok) {
                    const data = await response.json();
                    setCounterOrder(data.count)
                } else {
                    console.error('Request failed with status:', response.status);
                }
            } else {
                console.error('Access token not found.');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        counterOrderValue()
    }, [])

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
                        <Text style={[styles.mainContent, styles.contentText]}>{counterOrder} Orders</Text>
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