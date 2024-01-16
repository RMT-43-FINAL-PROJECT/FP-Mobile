import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../style/GlobalStyles";

const CardProductList = () => {
  return (
    <View>
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
                  <Text style={styles.textTitle}>
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
            <View style={styles.frameItem} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default CardProductList

const styles = StyleSheet.create({
  frameView: {
    width: '101%',
    padding: 10,
    borderRadius: 8,
    height: 172,
    position: "absolute",
    overflow: "hidden",
  },
  frameViewBg: {
    backgroundColor: 'white',
    overflow: "hidden",
  },
  frameParent: {
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  frameParent1: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  rectangleParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  frameChild: {
    backgroundColor: 'dark',
    width: 110,
    height: 110,
    borderRadius: 8,
  },
  discountQuantityParent: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  discountQuantity: {
    textAlign: "center",
  },
  quantityTypo: {
    color: 'gray',
    lineHeight: 10,
    fontSize: 10,
    alignSelf: "stretch",
  },
  phoneParent: {
    justifyContent: "center",
    marginTop: 2,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
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
  karton1: {
    textAlign: "left",
    flex: 1,
  },
  kartonTypo: {
    marginLeft: 5,
    color: Color.colorDimgray,
    fontFamily: FontFamily.mulishRegular,
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
  },
  frameGroup: {
    width: 198,
    marginLeft: 12,
    alignSelf: "stretch",
  },
  frameWrapper1: {
    flex: 1,
  },
  packageParent: {
    flexDirection: "row",
  },
  packageIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  textTitle: {
    fontSize: 15,
    color: 'black',
    textAlign: "left",
    fontWeight: 'bold'
  },
  available: {
    color: Color.colorMediumaquamarine,
  },
  availableTypo: {
    marginLeft: 3,
    textAlign: "left",
    lineHeight: 20,
    fontFamily: FontFamily.mulishRegular,
    fontSize: FontSize.size_3xs,
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
  bookOpen02Parent: {
    marginTop: 3,
    alignSelf: "stretch",
  },
})