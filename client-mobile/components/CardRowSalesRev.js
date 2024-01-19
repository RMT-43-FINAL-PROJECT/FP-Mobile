import { Image, StyleSheet, Text, View } from 'react-native'

export default function CardRowSalesRev() {
    return (
        <>
            <View style={[styles.labelContainer, styles.labelFlexBox2]}>
                <Text style={[styles.label3, styles.labelTypo]}>January</Text>
                <Text style={[styles.label4, styles.labelTypo]}>Rp 200.000.000</Text>
            </View>
            <Image style={styles.separatorsIconLayout} resizeMode="cover" source={require('../assets/icons/separators.png')} />
            {/* <View style={[styles.labelContainer, styles.labelFlexBox2]}>
                <Text style={[styles.label3, styles.labelTypo]}>February</Text>
                <Text style={[styles.label4, styles.labelTypo]}>Rp 200.000.000</Text>
            </View>
            <Image style={styles.separatorsIconLayout} resizeMode="cover" source={require('../assets/icons/separators.png')} />
            <View style={[styles.labelContainer, styles.labelFlexBox2]}>
                <Text style={[styles.label3, styles.labelTypo]}>March</Text>
                <Text style={[styles.label4, styles.labelTypo]}>Rp 200.000.000</Text>
            </View>
            <Image style={styles.separatorsIconLayout} resizeMode="cover" source={require('../assets/icons/separators.png')} />
            <View style={[styles.labelContainer, styles.labelFlexBox2]}>
                <Text style={[styles.label3, styles.labelTypo]}>April</Text>
                <Text style={[styles.label4, styles.labelTypo]}>Rp 200.000.000</Text>
            </View>
            <Image style={styles.separatorsIconLayout} resizeMode="cover" source={require('../assets/icons/separators.png')} />
            <View style={[styles.labelContainer, styles.labelFlexBox2]}>
                <Text style={[styles.label3, styles.labelTypo]}>May</Text>
                <Text style={[styles.label4, styles.labelTypo]}>Rp 200.000.000</Text>
            </View>
            <Image style={styles.separatorsIconLayout} resizeMode="cover" source={require('../assets/icons/separators.png')} />
            <View style={[styles.labelParent4, styles.labelFlexBox2]}>
                <Text style={[styles.label3, styles.labelTypo]}>June</Text>
                <Text style={[styles.label4, styles.labelTypo]}>Rp 200.000.000</Text>
            </View>
            <Image style={styles.separatorsIconLayout} resizeMode="cover" source={require('../assets/icons/separators.png')} />
            <View style={[styles.labelParent4, styles.labelFlexBox2]}>
                <Text style={[styles.label3, styles.labelTypo]}>July</Text>
                <Text style={[styles.label4, styles.labelTypo]}>Rp 200.000.000</Text>
            </View>
            <Image style={styles.separatorsIconLayout} resizeMode="cover" source={require('../assets/icons/separators.png')} />
            <View style={[styles.labelParent4, styles.labelFlexBox2]}>
                <Text style={[styles.label3, styles.labelTypo]}>August</Text>
                <Text style={[styles.label4, styles.labelTypo]}>Rp 200.000.000</Text>
            </View>
            <Image style={styles.separatorsIconLayout} resizeMode="cover" source={require('../assets/icons/separators.png')} />
            <View style={[styles.labelParent4, styles.labelFlexBox2]}>
                <Text style={[styles.label3, styles.labelTypo]}>September</Text>
                <Text style={[styles.label4, styles.labelTypo]}>Rp 200.000.000</Text>
            </View>
            <Image style={styles.separatorsIconLayout} resizeMode="cover" source={require('../assets/icons/separators.png')} />
            <View style={[styles.labelParent4, styles.labelFlexBox2]}>
                <Text style={[styles.label3, styles.labelTypo]}>October</Text>
                <Text style={[styles.label4, styles.labelTypo]}>Rp 200.000.000</Text>
            </View>
            <Image style={styles.separatorsIconLayout} resizeMode="cover" source={require('../assets/icons/separators.png')} />
            <View style={[styles.labelParent4, styles.labelFlexBox2]}>
                <Text style={[styles.label3, styles.labelTypo]}>November</Text>
                <Text style={[styles.label4, styles.labelTypo]}>Rp 200.000.000</Text>
            </View>
            <Image style={styles.separatorsIconLayout} resizeMode="cover" source={require('../assets/icons/separators.png')} />
            <View style={[styles.labelParent4, styles.labelFlexBox2]}>
                <Text style={[styles.label3, styles.labelTypo]}>December</Text>
                <Text style={[styles.label4, styles.labelTypo]}>Rp 200.000.000</Text>
            </View>
            <Image style={styles.separatorsIconLayout} resizeMode="cover" source={require('../assets/icons/separators.png')} />
            <View style={styles.labelTotal}>
                <Text style={styles.labelTotalText}>Total Revenue</Text>
                <Text style={styles.labelContentTotalText}>Rp 1.200.000.000</Text>
            </View> */}
        </>
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
        height: "100%",
        paddingHorizontal: 26,
        paddingTop: 10,
        paddingBottom: 25,
        position: "absolute",
        overflow: "hidden",
        width: "100%"
    },
    labelFlexBox1: {
        width: 80,
        alignItems: "center",
        display: "flex",
        textAlign: "left"
    },
    labelFlexBox: {
        marginLeft: 12,
        textAlign: "center",
        flex: 1
    },
    separatorsIconLayout: {
        height: 1,
        overflow: "hidden",
        maxWidth: "100%",
        width: "100%",
        marginTop: 12
    },
    labelFlexBox2: {
        flexDirection: "row",
        width: 328,
        marginLeft: 20,
        marginBottom: 5
    },
    labelTotal: {
        flexDirection: "row",
        width: "100%",
        height: 50,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: "#1B5FE3",
        alignItems: "center",
    },
    labelTotalText: {
        width: 100,
        alignItems: "center",
        display: "flex",
        textAlign: "left",
        color: "black",
        fontFamily: "Mulish-Bold",
        lineHeight: 14,
        fontSize: 14,
        marginLeft: 20,
        color: "#fff"

    },
    labelContentTotalText: {
        color: "black",
        fontFamily: "Mulish-Bold",
        lineHeight: 14,
        fontSize: 14,
        textAlign: "center",
        flex: 1,
        color: "#fff"
    },
    labelTypo: {
        color: "black",
        fontFamily: "Mulish-Regular",
        lineHeight: 14,
        fontSize: 14
    },
    label4: {
        marginLeft: 12,
        textAlign: "center",
        flex: 1
    },
    label3: {
        width: 80,
        alignItems: "center",
        display: "flex",
        textAlign: "left",
    },
    label: {
        fontSize: 20,
        textAlign: "center",
        color: "#1B5FE3",
        fontFamily: "Mulish-Bold",
        marginTop: 10,
    },
    label1: {
        lineHeight: 14,
        fontSize: 14,
        color: "#1B5FE3",
        fontFamily: "Mulish-Bold",
        fontWeight: "700"
    },
    label2: {
        lineHeight: 14,
        fontSize: 14,
        color: "#1B5FE3",
        fontFamily: "Mulish-Bold",
        fontWeight: "700"
    },
    label4: {
        marginLeft: 12,
        textAlign: "center",
        flex: 1
    },
    labelContainer: {
        marginTop: 12
    },
    frameParent: {
        marginTop: 15,
        width: "100%",
    },
    labelParent4: {
        marginTop: 15
    },
    labelParent: {
        flex: 1,
        marginTop: 8,
        backgroundColor: "#fff",
        height: 680,
        width: "100%",
        shadowOpacity: 1,
        elevation: 2,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: "rgba(0, 0, 0, 0.4)",
        borderRadius: 8,
        marginBottom: 15,
    }
})