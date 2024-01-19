import { Image, StyleSheet, Text, View, title } from "react-native";

export default function CardStoreList() {
    return (
        <>
            <View style={styles.rectangleShadowBox}>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageCard} source={{
                        uri: 'https://down-id.img.susercontent.com/file/aab3c3c3f07f882a66ac88b80439b82a',
                    }} />
                </View>
                <View style={styles.frameParent}>
                    <View style={styles.headerContainer}>
                        <View style={styles.frameGroup}>
                            <View style={styles.cardTitle}>
                                <Image style={styles.iconLayout} contentMode="cover" source={require('../assets/icons/location.png')} />
                                <Text style={styles.headerCardText}>Toko Pak Anies</Text>

                                {/* <Text style={[status === 'verified' ? styles.verified : styles.unverified, styles.verifiedText]}>verified</Text>
                            {status === 'verified' && <Image style={styles.image1Icon} contentMode="cover" source="image 1.png" />} */}
                                <View style={styles.verifiedParent}>
                                    <Text style={styles.verifiedText}>verified</Text>
                                    <Image style={styles.iconLayout} contentMode="cover" source={require('../assets/icons/verified.png')} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <Image style={styles.separatorsIcon} contentMode="cover" source={require('../assets/icons/separators.png')} />
                    <Text style={styles.address} >Address</Text>
                    <View style={styles.parentContentContainer}>
                        <Image style={styles.iconLayout} contentMode="cover" source={require('../assets/icons/address.png')} />
                        <Text style={styles.addressContent} numberOfLines={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    </View>
                    <Image style={styles.separatorsIcon} contentMode="cover" source={require('../assets/icons/separators.png')} />
                    <Text style={styles.address}>Phone number</Text>
                    <View style={styles.parentContentContainer}>
                        <Image style={styles.iconLayout} contentMode="cover" source={require('../assets/icons/phonegray.png')} />
                        <Text style={styles.addressContent} numberOfLines={2}>+621-67894892</Text>
                    </View>
                </View>
            </View>


            <View style={styles.rectangleShadowBox}>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageCard} source={{
                        uri: 'https://down-id.img.susercontent.com/file/aab3c3c3f07f882a66ac88b80439b82a',
                    }} />
                </View>
                <View style={styles.frameParent}>
                    <View style={styles.headerContainer}>
                        <View style={styles.frameGroup}>
                            <View style={styles.cardTitle}>
                                <Image style={styles.iconLayout} contentMode="cover" source={require('../assets/icons/location.png')} />
                                <Text style={styles.headerCardText}>Toko Pak Anies</Text>

                                {/* <Text style={[status === 'verified' ? styles.verified : styles.unverified, styles.verifiedText]}>verified</Text>
                            {status === 'verified' && <Image style={styles.image1Icon} contentMode="cover" source="image 1.png" />} */}
                                <View style={styles.verifiedParent}>
                                    <Text style={styles.unverified}>unverified</Text>
                                    <Image style={styles.iconLayout} contentMode="cover" source={require('../assets/icons/warning.png')} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <Image style={styles.separatorsIcon} contentMode="cover" source={require('../assets/icons/separators.png')} />
                    <Text style={styles.address} >Address</Text>
                    <View style={styles.parentContentContainer}>
                        <Image style={styles.iconLayout} contentMode="cover" source={require('../assets/icons/address.png')} />
                        <Text style={styles.addressContent} numberOfLines={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    </View>
                    <Image style={styles.separatorsIcon} contentMode="cover" source={require('../assets/icons/separators.png')} />
                    <Text style={styles.address}>Phone number</Text>
                    <View style={styles.parentContentContainer}>
                        <Image style={styles.iconLayout} contentMode="cover" source={require('../assets/icons/phonegray.png')} />
                        <Text style={styles.addressContent} numberOfLines={2}>+621-67894892</Text>
                    </View>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    rectangleShadowBox: {
        marginTop: 40,
        height: 160,
        width: 355,
        shadowOpacity: 1,
        elevation: 2,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: "rgba(0, 0, 0, 0.4)",
        borderRadius: 8,
        backgroundColor: "#fff",
        flexDirection: "row",
        marginBottom: -25
    },
    imageContainer: {
        marginHorizontal: 7,
        marginVertical: 7
    },
    imageCard: {
        height: 145,
        width: 100,
        overflow: "hidden",
        borderRadius: 4
    },
    frameParent: {
        flex: 1,
        marginLeft: 3
    },
    frameGroup: {
        width: "100%",
        flexDirection: "row"
    },
    cardTitle: {
        alignItems: "center",
        flexDirection: "row",
        paddingTop: 12
    },
    iconLayout: {
        height: 16,
        width: 16,
        overflow: "hidden"
    },
    verifiedParent: {
        width: 110,
        justifyContent: "flex-end",
        flexDirection: "row",
        alignItems: "center"
    },
    verifiedText: {
        fontSize: 10,
        textAlign: "left",
        fontFamily: "Mulish-Regular",
        lineHeight: 20,
        color: "#0099fa"
    },
    componentChild: {
        borderRadius: 5
    },
    frameChild: {
        backgroundColor: "#9a9a9a",
        width: 110,
        alignSelf: "stretch",
        borderRadius: 5
    },
    headerCardText: {
        fontSize: 14,
        marginLeft: 4,
        textAlign: "left",
        fontFamily: 'Mulish-Bold',
        lineHeight: 20,
        color: "#2c2c2c"
    },
    headerContainer: {
        justifyContent: "center",
        alignSelf: "stretch",
    },
    separatorsIcon: {
        height: 1,
        marginVertical: 8,
        maxWidth: "100%",
        overflow: "hidden",
        width: "100%"
    },
    address: {
        marginTop: 5,
        alignSelf: "stretch",
        color: "#2c2c2c",
        lineHeight: 10,
        fontSize: 10,
        textAlign: "left",
        fontFamily: "Mulish-Regular"
    },
    addressContent: {
        color: "#6c6c6c",
        marginLeft: 5,
        marginTop: 3,
        flex: 1,
        fontSize: 10,
        fontFamily: 'Mulish-Regular'
    },
    parentContentContainer: {
        alignItems: "center",
        flexDirection: "row"
    },
    unverified: {
        color: "#ffbd1a",
        fontFamily: "Mulish-Regular",
        fontSize: 10
    },
});
