import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../style/GlobalStyles";

const ProductList = () => {
    return (
        <View style={[styles.wireframesItemList, styles.frameViewBg]}>
            <View style={styles.componentParent}>
                <View style={styles.frameWrapper}>
                    <View>
                        <View style={[styles.frameContainer, styles.frameShadowBox]}>
                            <View style={[styles.frameView, styles.frameViewBg]}>
                                <View style={styles.frameParent}>
                                    <View style={styles.rectangleParent}>
                                        <View style={styles.frameChild} />
                                        <View style={styles.discountQuantityParent}>
                                            <Text
                                                style={[styles.discountQuantity, styles.quantityTypo]}
                                            >
                                                Discount Quantity
                                            </Text>
                                            <View style={[styles.phoneParent, styles.parentFlexBox]}>
                                                <Image
                                                    style={styles.phoneIcon}
                                                    contentFit="cover"
                                                />
                                                <Text style={[styles.karton, styles.kartonTypo]}>
                                                    1000 Karton
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.frameGroup}>
                                        <View style={styles.frameParent1}>
                                            <View style={styles.frameWrapper1}>
                                                <View style={styles.packageParent}>
                                                    <Image
                                                        style={styles.packageIcon}
                                                        contentFit="cover"
                                                    />
                                                    <Text style={styles.indomieGoreng}>
                                                        Indomie Goreng
                                                    </Text>
                                                </View>
                                            </View>
                                            <Text style={[styles.available, styles.availableTypo]}>
                                                available
                                            </Text>
                                        </View>
                                        <Image
                                            style={styles.separatorsIcon}
                                            contentFit="cover"
                                        />
                                        <Text style={[styles.quantity, styles.quantityTypo]}>
                                            Quantity
                                        </Text>
                                        <View
                                            style={[styles.bookOpen02Parent, styles.parentFlexBox]}
                                        >
                                            <Image
                                                style={styles.phoneIcon}
                                                contentFit="cover"
                                            />
                                            <Text style={[styles.karton1, styles.kartonTypo]}>
                                                10.000.000 Karton
                                            </Text>
                                        </View>
                                        <Image
                                            style={styles.separatorsIcon}
                                            contentFit="cover"
                                        />
                                        <Text style={[styles.quantity, styles.quantityTypo]}>
                                            Price
                                        </Text>
                                        <View
                                            style={[styles.bookOpen02Parent, styles.parentFlexBox]}
                                        >
                                            <Image
                                                style={styles.phoneIcon}
                                                contentFit="cover"
                                            />
                                            <Text style={[styles.karton1, styles.kartonTypo]}>
                                                +621898372783
                                            </Text>
                                        </View>
                                        <Image
                                            style={styles.separatorsIcon}
                                            contentFit="cover"
                                        />
                                        <Text style={[styles.quantity, styles.quantityTypo]}>
                                            Category
                                        </Text>
                                        <View
                                            style={[styles.bookOpen02Parent, styles.parentFlexBox]}
                                        >
                                            <Image
                                                style={styles.phoneIcon}
                                                contentFit="cover"
                                            />
                                            <Text style={[styles.karton1, styles.kartonTypo]}>
                                                +621898372783
                                            </Text>
                                        </View>
                                        <View style={styles.frameItem} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.frameWrapper2}>
                    <View>
                        <View style={[styles.groupView, styles.frameShadowBox]}>
                            <View style={[styles.frameView, styles.frameViewBg]}>
                                <View style={styles.frameParent}>
                                    <View style={styles.rectangleParent}>
                                        <View style={styles.frameChild} />
                                        <View style={styles.discountQuantityParent}>
                                            <Text
                                                style={[styles.discountQuantity, styles.quantityTypo]}
                                            >
                                                Discount Quantity
                                            </Text>
                                            <View style={[styles.phoneParent, styles.parentFlexBox]}>
                                                <Image
                                                    style={styles.phoneIcon}
                                                    contentFit="cover"
                                                />
                                                <Text style={[styles.karton, styles.kartonTypo]}>
                                                    1000 Karton
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.frameGroup}>
                                        <View style={styles.frameParent1}>
                                            <View style={styles.frameWrapper1}>
                                                <View style={styles.packageParent}>
                                                    <Image
                                                        style={styles.packageIcon}
                                                        contentFit="cover"
                                                    />
                                                    <Text style={styles.indomieGoreng}>
                                                        Indomie Goreng
                                                    </Text>
                                                </View>
                                            </View>
                                            <Text style={[styles.available1, styles.availableTypo]}>
                                                not available
                                            </Text>
                                        </View>
                                        <Image
                                            style={styles.separatorsIcon}
                                            contentFit="cover"
                                        />
                                        <Text style={[styles.quantity, styles.quantityTypo]}>
                                            Quantity
                                        </Text>
                                        <View
                                            style={[styles.bookOpen02Parent, styles.parentFlexBox]}
                                        >
                                            <Image
                                                style={styles.phoneIcon}
                                                contentFit="cover"
                                            />
                                            <Text style={[styles.karton1, styles.kartonTypo]}>
                                                10.000.000 Karton
                                            </Text>
                                        </View>
                                        <Image
                                            style={styles.separatorsIcon}
                                            contentFit="cover"
                                        />
                                        <Text style={[styles.quantity, styles.quantityTypo]}>
                                            Price
                                        </Text>
                                        <View
                                            style={[styles.bookOpen02Parent, styles.parentFlexBox]}
                                        >
                                            <Image
                                                style={styles.phoneIcon}
                                                contentFit="cover"
                                            />
                                            <Text style={[styles.karton1, styles.kartonTypo]}>
                                                +621898372783
                                            </Text>
                                        </View>
                                        <Image
                                            style={styles.separatorsIcon}
                                            contentFit="cover"
                                        />
                                        <Text style={[styles.quantity, styles.quantityTypo]}>
                                            Category
                                        </Text>
                                        <View
                                            style={[styles.bookOpen02Parent, styles.parentFlexBox]}
                                        >
                                            <Image
                                                style={styles.phoneIcon}
                                                contentFit="cover"
                                            />
                                            <Text style={[styles.karton1, styles.kartonTypo]}>
                                                +621898372783
                                            </Text>
                                        </View>
                                        <View style={styles.frameItem} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.frameWrapper2}>
                    <View>
                        <View style={[styles.frameWrapper6, styles.frameShadowBox]}>
                            <View style={[styles.frameView, styles.frameViewBg]}>
                                <View style={styles.frameParent}>
                                    <View style={styles.rectangleParent}>
                                        <View style={styles.frameChild} />
                                        <View style={styles.discountQuantityParent}>
                                            <Text
                                                style={[styles.discountQuantity, styles.quantityTypo]}
                                            >
                                                Discount Quantity
                                            </Text>
                                            <View style={[styles.phoneParent, styles.parentFlexBox]}>
                                                <Image
                                                    style={styles.phoneIcon}
                                                    contentFit="cover"
                                                />
                                                <Text style={[styles.karton, styles.kartonTypo]}>
                                                    1000 Karton
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.frameGroup}>
                                        <View style={styles.frameParent1}>
                                            <View style={styles.frameWrapper1}>
                                                <View style={styles.packageParent}>
                                                    <Image
                                                        style={styles.packageIcon}
                                                        contentFit="cover"
                                                    />
                                                    <Text style={styles.indomieGoreng}>
                                                        Indomie Goreng
                                                    </Text>
                                                </View>
                                            </View>
                                            <Text style={[styles.available, styles.availableTypo]}>
                                                available
                                            </Text>
                                        </View>
                                        <Image
                                            style={styles.separatorsIcon}
                                            contentFit="cover"
                                        />
                                        <Text style={[styles.quantity, styles.quantityTypo]}>
                                            Quantity
                                        </Text>
                                        <View
                                            style={[styles.bookOpen02Parent, styles.parentFlexBox]}
                                        >
                                            <Image
                                                style={styles.phoneIcon}
                                                contentFit="cover"
                                            />
                                            <Text style={[styles.karton1, styles.kartonTypo]}>
                                                10.000.000 Karton
                                            </Text>
                                        </View>
                                        <Image
                                            style={styles.separatorsIcon}
                                            contentFit="cover"
                                        />
                                        <Text style={[styles.quantity, styles.quantityTypo]}>
                                            Price
                                        </Text>
                                        <View
                                            style={[styles.bookOpen02Parent, styles.parentFlexBox]}
                                        >
                                            <Image
                                                style={styles.phoneIcon}
                                                contentFit="cover"
                                            />
                                            <Text style={[styles.karton1, styles.kartonTypo]}>
                                                +621898372783
                                            </Text>
                                        </View>
                                        <Image
                                            style={styles.separatorsIcon}
                                            contentFit="cover"
                                        />
                                        <Text style={[styles.quantity, styles.quantityTypo]}>
                                            Category
                                        </Text>
                                        <View
                                            style={[styles.bookOpen02Parent, styles.parentFlexBox]}
                                        >
                                            <Image
                                                style={styles.phoneIcon}
                                                contentFit="cover"
                                            />
                                            <Text style={[styles.karton1, styles.kartonTypo]}>
                                                +621898372783
                                            </Text>
                                        </View>
                                        <View style={styles.frameItem} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.barstabBarscompactlight3}>
                <Image
                    style={styles.backgroundIcon}
                    contentFit="cover"
                />
                <View style={[styles.tab2, styles.tabLayout]}>
                    <Text style={[styles.label, styles.timePosition]}>Tab 2</Text>
                    <Image
                        style={[styles.tab2Child, styles.borderLayout]}
                        contentFit="cover"
                    />
                </View>
                <View style={[styles.tab1, styles.tabLayout]}>
                    <Text style={[styles.label, styles.timePosition]}>Tab 1</Text>
                    <Image
                        style={[styles.tab2Child, styles.borderLayout]}
                        contentFit="cover"
                    />
                </View>
            </View>
            <View style={styles.wireframesItemListInner}>
                <View>
                    <Text style={styles.itemList}>Item List</Text>
                </View>
            </View>
            <View style={[styles.view, styles.viewPosition]}>
                <View style={styles.rectangle} />
                <View style={[styles.timeStyleParent, styles.parentFlexBox]}>
                    <View style={styles.timeStyle}>
                        <Text style={[styles.time, styles.timePosition]}>
                            <Text style={styles.text6}>9:4</Text>1
                        </Text>
                    </View>
                    <View style={styles.batteryParent}>
                        <View style={[styles.battery, styles.viewPosition]}>
                            <View style={[styles.border, styles.borderLayout]} />
                            <Image
                                style={[styles.capIcon, styles.viewPosition]}
                                contentFit="cover"
                            />
                            <View style={styles.capacity} />
                        </View>
                        <Image
                            style={styles.wifiIcon}
                            contentFit="cover"
                        />
                        <Image
                            style={styles.cellularConnectionIcon}
                            contentFit="cover"
                        />
                    </View>
                </View>
            </View>
            <Image
                style={styles.wireframesItemListChild}
                contentFit="cover"
            />
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    frameViewBg: {
        backgroundColor: Color.colorWhite,
        overflow: "hidden",
    },
    frameShadowBox: {
        shadowOpacity: 1,
        elevation: 2,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowColor: "rgba(0, 0, 0, 0.04)",
        height: 172,
        alignSelf: "stretch",
    },
    quantityTypo: {
        color: Color.colorGray_100,
        fontFamily: FontFamily.mulishRegular,
        lineHeight: 10,
        fontSize: FontSize.size_3xs,
        alignSelf: "stretch",
    },
    parentFlexBox: {
        alignItems: "center",
        flexDirection: "row",
    },
    kartonTypo: {
        marginLeft: 5,
        color: Color.colorDimgray,
        fontFamily: FontFamily.mulishRegular,
        lineHeight: 10,
        fontSize: FontSize.size_3xs,
    },
    availableTypo: {
        marginLeft: 3,
        textAlign: "left",
        lineHeight: 20,
        fontFamily: FontFamily.mulishRegular,
        fontSize: FontSize.size_3xs,
    },
    tabLayout: {
        height: 49,
        width: "12.8%",
        top: 0,
        position: "absolute",
    },
    timePosition: {
        fontFamily: FontFamily.sFProText,
        top: "50%",
        color: Color.colorBlack,
        textAlign: "center",
        left: 0,
        position: "absolute",
    },
    borderLayout: {
        width: 22,
        position: "absolute",
    },
    viewPosition: {
        right: 0,
        position: "absolute",
    },
    frameChild: {
        backgroundColor: Color.colorDarkgray,
        width: 110,
        height: 110,
        borderRadius: Border.br_8xs,
    },
    discountQuantity: {
        textAlign: "center",
    },
    phoneIcon: {
        width: 16,
        height: 16,
        overflow: "hidden",
    },
    karton: {
        width: 66,
        textAlign: "center",
    },
    phoneParent: {
        justifyContent: "center",
        marginTop: 2,
        alignSelf: "stretch",
    },
    discountQuantityParent: {
        marginTop: 10,
        alignSelf: "stretch",
    },
    rectangleParent: {
        alignSelf: "stretch",
        flex: 1,
    },
    packageIcon: {
        width: 20,
        height: 20,
        overflow: "hidden",
    },
    indomieGoreng: {
        fontSize: FontSize.size_xs,
        color: Color.dark70,
        marginLeft: 4,
        textAlign: "left",
        lineHeight: 20,
        fontFamily: FontFamily.mulishRegular,
    },
    packageParent: {
        flexDirection: "row",
    },
    frameWrapper1: {
        flex: 1,
    },
    available: {
        color: Color.colorMediumaquamarine,
    },
    frameParent1: {
        flexDirection: "row",
        alignSelf: "stretch",
    },
    separatorsIcon: {
        maxWidth: "100%",
        height: 8,
        marginTop: 3,
        alignSelf: "stretch",
        overflow: "hidden",
        width: "100%",
    },
    quantity: {
        marginTop: 3,
        textAlign: "left",
    },
    karton1: {
        textAlign: "left",
        flex: 1,
    },
    bookOpen02Parent: {
        marginTop: 3,
        alignSelf: "stretch",
    },
    frameItem: {
        marginTop: 3,
    },
    frameGroup: {
        width: 198,
        marginLeft: 12,
        alignSelf: "stretch",
    },
    frameParent: {
        flexDirection: "row",
        alignSelf: "stretch",
        flex: 1,
    },
    frameView: {
        width: 340,
        padding: Padding.p_3xs,
        borderRadius: Border.br_8xs,
        top: 0,
        height: 172,
        left: 0,
        position: "absolute",
        overflow: "hidden",
    },
    frameContainer: {
        height: 172,
    },
    frameWrapper: {
        borderRadius: Border.br_5xs,
    },
    available1: {
        color: "#ff0000",
    },
    groupView: {
        height: 172,
    },
    frameWrapper2: {
        marginTop: 19,
        borderRadius: Border.br_5xs,
    },
    frameWrapper6: {
        height: 172,
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
    },
    backgroundIcon: {
        width: 392,
        height: 50,
        zIndex: 0,
    },
    label: {
        marginTop: 9.5,
        fontWeight: "500",
        width: 50,
        color: Color.colorBlack,
        letterSpacing: 0,
        fontSize: FontSize.size_3xs,
        top: "50%",
    },
    tab2Child: {
        top: 8,
        left: 13,
        height: 22,
    },
    tab2: {
        right: "18.93%",
        left: "68.27%",
        zIndex: 1,
    },
    tab1: {
        right: "68.27%",
        left: "18.93%",
        zIndex: 2,
    },
    barstabBarscompactlight3: {
        top: 802,
        left: 1,
        position: "absolute",
    },
    itemList: {
        fontSize: 24,
        lineHeight: 22,
        fontWeight: "700",
        fontFamily: FontFamily.mulishBold,
        color: Color.colorBlack,
        textAlign: "left",
    },
    wireframesItemListInner: {
        top: 72,
        left: 26,
        position: "absolute",
    },
    rectangle: {
        height: "100%",
        top: "0%",
        right: "0%",
        bottom: "0%",
        left: "0%",
        backgroundColor: Color.colorGray_200,
        position: "absolute",
        width: "100%",
    },
    text6: {
        letterSpacing: 0,
    },
    time: {
        marginTop: -8,
        fontSize: FontSize.size_sm,
        fontWeight: "600",
        width: 54,
        color: Color.colorBlack,
    },
    timeStyle: {
        width: 54,
        height: 17,
        overflow: "hidden",
    },
    border: {
        right: 2,
        borderRadius: 3,
        borderStyle: "solid",
        borderColor: Color.colorBlack,
        borderWidth: 1,
        opacity: 0.35,
        height: 11,
        top: 0,
    },
    capIcon: {
        top: 4,
        width: 1,
        height: 4,
        opacity: 0.4,
    },
    capacity: {
        top: 2,
        right: 4,
        borderRadius: 1,
        backgroundColor: Color.colorBlack,
        width: 18,
        height: 7,
        position: "absolute",
    },
    battery: {
        width: 24,
        height: 11,
        top: 0,
    },
    wifiIcon: {
        width: 15,
        height: 11,
    },
    cellularConnectionIcon: {
        width: 17,
        height: 11,
    },
    batteryParent: {
        width: 67,
        height: 11,
    },
    timeStyleParent: {
        top: 15,
        right: 14,
        left: 21,
        justifyContent: "space-between",
        height: 17,
        position: "absolute",
    },
    view: {
        height: 44,
        top: 0,
        left: 0,
        overflow: "hidden",
    },
    wireframesItemListChild: {
        top: 786,
        left: 176,
        width: 32,
        height: 32,
        position: "absolute",
    },
    wireframesItemList: {
        borderRadius: 20,
        height: 852,
        overflow: "hidden",
        width: "100%",
        flex: 1,
    },
});