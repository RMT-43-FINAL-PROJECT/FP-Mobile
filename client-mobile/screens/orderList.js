import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OrderList() {
    return (
        <SafeAreaView style={[styles.wireframesListToko, styles.separatorsIconLayout]}>
            <View style={styles.componentParent}>
                <View style={styles.rectangleParent}>
                    <View style={[styles.componentChild, styles.rectanglePosition]} />
                    <View style={[styles.rectangleGroup, styles.groupParentFlexBox]}>
                        <View style={styles.frameChild} />
                        <View style={styles.frameParent}>
                            <View style={styles.frameWrapper}>
                                <View style={[styles.frameGroup, styles.groupParentFlexBox]}>
                                    <View style={styles.groupParentFlexBox}>
                                        <Image style={[styles.mapPinLine1Icon, styles.iconLayout]} resizeMode="cover" source="map-pin-line 1.png" />
                                        <Text style={styles.tokoPakAnies}>Toko Pak Anies</Text>
                                    </View>
                                    <View style={[styles.verifiedParent, styles.groupParentFlexBox]}>
                                        <Text style={[styles.verified, styles.verifiedTypo]}>verified</Text>
                                        <Image style={[styles.image1Icon, styles.iconLayout]} resizeMode="cover" source="image 1.png" />
                                    </View>
                                </View>
                            </View>
                            <Image style={[styles.separatorsIcon, styles.addressSpaceBlock]} resizeMode="cover" source="Separators.png" />
                            <Text style={[styles.address, styles.addressTypo]}>Address</Text>
                            <View style={[styles.bookOpen02Parent, styles.addressSpaceBlock]}>
                                <Image style={[styles.mapPinLine1Icon, styles.iconLayout]} resizeMode="cover" source="book-open-02.png" />
                                <Text style={[styles.jlSenenRaya, styles.addressTypo]}>Jl. Senen raya nomor 90, jakarta pusat</Text>
                            </View>
                            <Image style={[styles.separatorsIcon, styles.addressSpaceBlock]} resizeMode="cover" source="Separators.png" />
                            <Text style={[styles.address, styles.addressTypo]}>Phone number</Text>
                            <View style={[styles.bookOpen02Parent, styles.addressSpaceBlock]}>
                                <Image style={[styles.mapPinLine1Icon, styles.iconLayout]} resizeMode="cover" source="phone.png" />
                                <Text style={[styles.jlSenenRaya, styles.addressTypo]}>+621898372783</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.rectangleShadowBox}>
                    <View style={[styles.componentChild, styles.rectanglePosition]} />
                    <View style={[styles.rectangleGroup, styles.groupParentFlexBox]}>
                        <View style={styles.frameChild} />
                        <View style={styles.frameParent}>
                            <View style={styles.frameWrapper}>
                                <View style={[styles.frameGroup, styles.groupParentFlexBox]}>
                                    <View style={styles.groupParentFlexBox}>
                                        <Image style={[styles.mapPinLine1Icon, styles.iconLayout]} resizeMode="cover" source="map-pin-line 1.png" />
                                        <Text style={styles.tokoPakAnies}>Toko Pak Anies</Text>
                                    </View>
                                    <View style={[styles.verifiedParent, styles.groupParentFlexBox]}>
                                        <Text style={[styles.verified, styles.verifiedTypo]}>verified</Text>
                                        <Image style={[styles.image1Icon, styles.iconLayout]} resizeMode="cover" source="image 1.png" />
                                    </View>
                                </View>
                            </View>
                            <Image style={[styles.separatorsIcon, styles.addressSpaceBlock]} resizeMode="cover" source="Separators.png" />
                            <Text style={[styles.address, styles.addressTypo]}>Address</Text>
                            <View style={[styles.bookOpen02Parent, styles.addressSpaceBlock]}>
                                <Image style={[styles.mapPinLine1Icon, styles.iconLayout]} resizeMode="cover" source="book-open-02.png" />
                                <Text style={[styles.jlSenenRaya, styles.addressTypo]}>Jl. Senen raya nomor 90, jakarta pusat</Text>
                            </View>
                            <Image style={[styles.separatorsIcon, styles.addressSpaceBlock]} resizeMode="cover" source="Separators.png" />
                            <Text style={[styles.address, styles.addressTypo]}>Phone number</Text>
                            <View style={[styles.bookOpen02Parent, styles.addressSpaceBlock]}>
                                <Image style={[styles.mapPinLine1Icon, styles.iconLayout]} resizeMode="cover" source="phone.png" />
                                <Text style={[styles.jlSenenRaya, styles.addressTypo]}>+621898372783</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.rectangleShadowBox}>
                    <View style={[styles.componentChild, styles.rectanglePosition]} />
                    <View style={[styles.rectangleGroup, styles.groupParentFlexBox]}>
                        <View style={styles.frameChild} />
                        <View style={styles.frameParent}>
                            <View style={styles.frameWrapper}>
                                <View style={styles.groupParentFlexBox}>
                                    <View style={styles.groupParentFlexBox}>
                                        <Image style={[styles.mapPinLine1Icon, styles.iconLayout]} resizeMode="cover" source="map-pin-line 1.png" />
                                        <Text style={styles.tokoPakAnies}>Toko Pak Ganjar</Text>
                                    </View>
                                    <View style={[styles.verifiedParent, styles.groupParentFlexBox]}>
                                        <Text style={[styles.unverified, styles.verifiedTypo]}>unverified</Text>
                                        <Image style={styles.image2Icon} resizeMode="cover" source="image 2.png" />
                                    </View>
                                </View>
                            </View>
                            <Image style={[styles.separatorsIcon, styles.addressSpaceBlock]} resizeMode="cover" source="Separators.png" />
                            <Text style={[styles.address, styles.addressTypo]}>Address</Text>
                            <View style={[styles.bookOpen02Parent, styles.addressSpaceBlock]}>
                                <Image style={[styles.mapPinLine1Icon, styles.iconLayout]} resizeMode="cover" source="book-open-02.png" />
                                <Text style={[styles.jlSenenRaya, styles.addressTypo]}>Jl. Senen raya nomor 90, jakarta pusat</Text>
                            </View>
                            <Image style={[styles.separatorsIcon, styles.addressSpaceBlock]} resizeMode="cover" source="Separators.png" />
                            <Text style={[styles.address, styles.addressTypo]}>Phone number</Text>
                            <View style={[styles.bookOpen02Parent, styles.addressSpaceBlock]}>
                                <Image style={[styles.mapPinLine1Icon, styles.iconLayout]} resizeMode="cover" source="phone.png" />
                                <Text style={[styles.jlSenenRaya, styles.addressTypo]}>+621898372783</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.rectangleShadowBox}>
                    <View style={[styles.componentChild, styles.rectanglePosition]} />
                    <View style={[styles.rectangleGroup, styles.groupParentFlexBox]}>
                        <View style={styles.frameChild} />
                        <View style={styles.frameParent}>
                            <View style={styles.frameWrapper}>
                                <View style={[styles.frameGroup, styles.groupParentFlexBox]}>
                                    <View style={styles.groupParentFlexBox}>
                                        <Image style={[styles.mapPinLine1Icon, styles.iconLayout]} resizeMode="cover" source="map-pin-line 1.png" />
                                        <Text style={styles.tokoPakAnies}>Toko Pak Anies</Text>
                                    </View>
                                    <View style={[styles.verifiedParent, styles.groupParentFlexBox]}>
                                        <Text style={[styles.verified, styles.verifiedTypo]}>verified</Text>
                                        <Image style={[styles.image1Icon, styles.iconLayout]} resizeMode="cover" source="image 1.png" />
                                    </View>
                                </View>
                            </View>
                            <Image style={[styles.separatorsIcon, styles.addressSpaceBlock]} resizeMode="cover" source="Separators.png" />
                            <Text style={[styles.address, styles.addressTypo]}>Address</Text>
                            <View style={[styles.bookOpen02Parent, styles.addressSpaceBlock]}>
                                <Image style={[styles.mapPinLine1Icon, styles.iconLayout]} resizeMode="cover" source="book-open-02.png" />
                                <Text style={[styles.jlSenenRaya, styles.addressTypo]}>Jl. Senen raya nomor 90, jakarta pusat</Text>
                            </View>
                            <Image style={[styles.separatorsIcon, styles.addressSpaceBlock]} resizeMode="cover" source="Separators.png" />
                            <Text style={[styles.address, styles.addressTypo]}>Phone number</Text>
                            <View style={[styles.bookOpen02Parent, styles.addressSpaceBlock]}>
                                <Image style={[styles.mapPinLine1Icon, styles.iconLayout]} resizeMode="cover" source="phone.png" />
                                <Text style={[styles.jlSenenRaya, styles.addressTypo]}>+621898372783</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.view, styles.viewPosition]}>
                <View style={[styles.rectangle, styles.rectanglePosition]} />
                <View style={[styles.timeStyleParent, styles.groupParentFlexBox]}>
                    <View style={styles.timeStyle}>
                        <Text style={[styles.time, styles.timePosition]}>
                            <Text style={styles.text4}>9:4</Text>1
                        </Text>
                    </View>
                    <View style={styles.batteryParent}>
                        <View style={styles.battery}>
                            <View style={styles.border} />
                            <Image style={styles.capIcon} resizeMode="cover" source="Cap.png" />
                            <View style={styles.capacity} />
                        </View>
                        <Image style={styles.wifiIcon} resizeMode="cover" source="Wifi.png" />
                        <Image style={styles.cellularConnectionIcon} resizeMode="cover" source="Cellular Connection.png" />
                    </View>
                </View>
            </View>
            <View style={styles.wireframesListTokoInner}>
                <View>
                    <Text style={[styles.storeList, styles.storeTypo]}>Store List</Text>
                </View>
            </View>
            <View style={[styles.createNewStoreWrapper, styles.groupParentFlexBox]}>
                <Text style={[styles.createNewStore, styles.storeTypo]}>Create new store</Text>
            </View>
            <View style={[styles.barstabBarscompactlight3, styles.viewPosition]} />
            <Image style={styles.wireframesListTokoChild} resizeMode="cover" source="Group 7.png" />
        </SafeAreaView>);
}


const styles = StyleSheet.create({
    separatorsIconLayout: {
        width: "100%",
        overflow: "hidden"
    },
    rectanglePosition: {
        left: "0%",
        bottom: "0%",
        right: "0%",
        top: "0%",
        height: "100%",
        position: "absolute",
        width: "100%"
    },
    groupParentFlexBox: {
        alignItems: "center",
        flexDirection: "row"
    },
    iconLayout: {
        height: 16,
        width: 16
    },
    verifiedTypo: {
        fontSize: 10,
        textAlign: "left",
        fontFamily: "Mulish-Regular",
        lineHeight: 20
    },
    addressSpaceBlock: {
        marginTop: 5,
        alignSelf: "stretch"
    },
    addressTypo: {
        lineHeight: 10,
        fontSize: 10,
        textAlign: "left",
        fontFamily: "Mulish-Regular"
    },
    viewPosition: {
        display: "none",
        position: "absolute"
    },
    timePosition: {
        top: "50%",
        position: "absolute"
    },
    storeTypo: {
        fontFamily: "Mulish-Bold",
        fontWeight: "700",
        lineHeight: 22,
        textAlign: "left"
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
    mapPinLine1Icon: {
        overflow: "hidden"
    },
    tokoPakAnies: {
        fontSize: 12,
        marginLeft: 4,
        textAlign: "left",
        fontFamily: 'Mulish-Bold',
        lineHeight: 20,
        color: "#2c2c2c"
    },
    verified: {
        color: "#0099fa"
    },
    image1Icon: {
        marginLeft: 1
    },
    verifiedParent: {
        width: 80,
        justifyContent: "flex-end",
        marginLeft: 4
    },
    frameGroup: {
        width: 166
    },
    frameWrapper: {
        justifyContent: "center",
        alignSelf: "stretch"
    },
    separatorsIcon: {
        maxWidth: "100%",
        height: 8,
        overflow: "hidden",
        width: "100%"
    },
    address: {
        marginTop: 5,
        alignSelf: "stretch",
        color: "#2c2c2c",
        lineHeight: 10
    },
    jlSenenRaya: {
        color: "#6c6c6c",
        marginLeft: 5,
        flex: 1
    },
    bookOpen02Parent: {
        alignItems: "center",
        flexDirection: "row"
    },
    frameParent: {
        marginLeft: 12,
        flex: 1
    },
    rectangleGroup: {
        marginTop: -61,
        marginLeft: -160,
        left: "50%",
        width: 310,
        top: "50%",
        position: "absolute"
    },
    rectangleParent: {
        height: 146,
        width: 340,
        shadowOpacity: 1,
        elevation: 2,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: "rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        backgroundColor: "#fff"
    },
    rectangleShadowBox: {
        marginTop: 19,
        height: 146,
        width: 340,
        shadowOpacity: 1,
        elevation: 2,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: "rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        backgroundColor: "#fff"
    },
    unverified: {
        color: "#ffbd1a"
    },
    image2Icon: {
        width: 14,
        height: 14,
        marginLeft: 1
    },
    componentParent: {
        top: 101,
        backgroundColor: "#f6f9ff",
        height: 701,
        paddingHorizontal: 26,
        paddingTop: 15,
        paddingBottom: 25,
        left: 0,
        position: "absolute",
        overflow: "hidden"
    },
    rectangle: {
        backgroundColor: "rgba(255, 255, 255, 0)"
    },
    text4: {
        letterSpacing: 0
    },
    time: {
        marginTop: -8,
        fontWeight: "600",
        fontFamily: "SF Pro Text",
        textAlign: "center",
        color: "#000",
        fontSize: 14,
        width: 54,
        left: 0
    },
    timeStyle: {
        width: 54,
        height: 17,
        overflow: "hidden"
    },
    border: {
        right: 2,
        borderRadius: 3,
        borderStyle: "solid",
        borderColor: "#000",
        borderWidth: 1,
        width: 22,
        opacity: 0.35,
        height: 11,
        top: 0,
        position: "absolute"
    },
    capIcon: {
        top: 4,
        width: 1,
        height: 4,
        opacity: 0.4,
        right: 0,
        position: "absolute"
    },
    capacity: {
        top: 2,
        right: 4,
        borderRadius: 1,
        backgroundColor: "#000",
        width: 18,
        height: 7,
        position: "absolute"
    },
    battery: {
        width: 24,
        height: 11,
        right: 0,
        top: 0,
        position: "absolute"
    },
    wifiIcon: {
        width: 15,
        height: 11
    },
    cellularConnectionIcon: {
        width: 17,
        height: 11
    },
    batteryParent: {
        width: 67,
        height: 11
    },
    timeStyleParent: {
        top: 15,
        right: 14,
        left: 21,
        justifyContent: "space-between",
        height: 17,
        position: "absolute"
    },
    view: {
        height: 44,
        right: 0,
        top: 0,
        left: 0,
        overflow: "hidden"
    },
    storeList: {
        fontSize: 24,
        color: "#000"
    },
    wireframesListTokoInner: {
        top: 71,
        left: 36,
        position: "absolute"
    },
    createNewStore: {
        color: "#fff",
        fontSize: 14
    },
    createNewStoreWrapper: {
        top: 63,
        left: 240,
        backgroundColor: "#1b5fe3",
        paddingHorizontal: 6,
        paddingVertical: 4,
        justifyContent: "center",
        borderRadius: 5,
        position: "absolute",
        overflow: "hidden"
    },
    barstabBarscompactlight3: {
        top: 802,
        left: 1
    },
    wireframesListTokoChild: {
        top: 786,
        left: 176,
        width: 32,
        height: 32,
        position: "absolute"
    },
    wireframesListToko: {
        borderRadius: 20,
        height: 852,
        overflow: "hidden",
        flex: 1,
        backgroundColor: "#fff",
        width: "100%"
    }
});
