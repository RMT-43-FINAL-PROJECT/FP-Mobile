import { useState } from "react";
import { Button, Dimensions, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Picker } from '@react-native-picker/picker';

export default function CreateOrder() {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [storeName, setStoreName] = useState('');
    const [isProductNameVisible, setIsProductNameVisible] = useState(false);
    const [isPriceVisible, setIsPriceVisible] = useState(false);
    const [isStoreNameVisible, setIsStoreNameVisible] = useState(false);

    const togglePicker = (pickerName) => {
        switch (pickerName) {
            case 'productName':
                setIsProductNameVisible(!isProductNameVisible);
                setIsPriceVisible(false);
                setIsStoreNameVisible(false)
                break;
            case 'price':
                setIsPriceVisible(!isPriceVisible);
                setIsProductNameVisible(false);
                setIsStoreNameVisible(false)
                break;
            case 'storeName':
                setIsStoreNameVisible(!isStoreNameVisible);
                setIsProductNameVisible(false);
                setIsPriceVisible(false);
                break;
            default:
                break;
        }
    };
    return (
        <View style={styles.outerContainer}>
            <View style={styles.componentParent}>
                <View style={styles.container}>
                    <Text style={styles.label}>Product Name</Text>
                    <TouchableWithoutFeedback onPress={() => togglePicker('productName')}>
                        <View style={styles.pickerContainer}>
                            <Text style={styles.pickerText}>{productName || 'Select Product'}</Text>
                            <View style={styles.iconLayoutParent}>
                                <Image source={require('../assets/icons/arrowdown.png')} style={styles.iconLayout} />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <Modal visible={isProductNameVisible} animationType="slide" transparent={true}>
                        <View style={styles.closeModalContainer}>
                            <TouchableOpacity onPress={() => setIsProductNameVisible(false)} >
                                <Image source={require('../assets/icons/closemodal.png')} style={styles.closeModalIcon} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.modalContainer}>
                            <Picker
                                selectedValue={productName}
                                onValueChange={(itemValue) => {
                                    setProductName(itemValue);
                                    setIsProductNameVisible(false);
                                }}

                                style={styles.picker}
                            >
                                <Picker.Item
                                    label="Product A"
                                    value="Product A"
                                    onPress={() => setIsProductNameVisible(false)}
                                />
                                <Picker.Item
                                    label="Product B"
                                    value="Product B"
                                    onPress={() => setIsProductNameVisible(false)}
                                />
                                <Picker.Item
                                    label="Product C"
                                    value="Product C"
                                    onPress={() => setIsProductNameVisible(false)}
                                />
                                <Picker.Item
                                    label="Product C"
                                    value="Product C"
                                    onPress={() => setIsProductNameVisible(false)}
                                />
                                <Picker.Item
                                    label="Product C"
                                    value="Product C"
                                    onPress={() => setIsProductNameVisible(false)}
                                />
                                <Picker.Item
                                    label="Product C"
                                    value="Product C"
                                    onPress={() => setIsProductNameVisible(false)}
                                />
                                <Picker.Item
                                    label="Product C"
                                    value="Product C"
                                    onPress={() => setIsProductNameVisible(false)}
                                />
                                <Picker.Item
                                    label="Product C"
                                    value="Product C"
                                    onPress={() => setIsProductNameVisible(false)}
                                />
                            </Picker>
                        </View>

                    </Modal>

                    <Text style={styles.label}>Price</Text>
                    <TouchableWithoutFeedback onPress={() => togglePicker('price')}>
                        <View style={styles.pickerContainer}>
                            <Text style={styles.pickerText}>{price || 'Select Price'}</Text>
                            <View style={styles.iconLayoutParent}>
                                <Image source={require('../assets/icons/arrowdown.png')} style={styles.iconLayout} />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <Modal visible={isPriceVisible} animationType="slide" transparent={true}>
                        <View style={styles.closeModalContainer}>
                            <TouchableOpacity onPress={() => setIsPriceVisible(false)} >
                                <Image source={require('../assets/icons/closemodal.png')} style={styles.closeModalIcon} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.modalContainer}>
                            <Picker
                                selectedValue={price}
                                onValueChange={(itemValue) => {
                                    setPrice(itemValue);
                                    setIsPriceVisible(false);
                                }}
                                style={styles.picker}
                            >
                                <Picker.Item
                                    label="$10"
                                    value="10"
                                    onPress={() => setIsPriceVisible(false)}
                                />
                                <Picker.Item
                                    label="$20"
                                    value="20"
                                    onPress={() => setIsPriceVisible(false)}
                                />
                                <Picker.Item
                                    label="$30"
                                    value="30"
                                    onPress={() => setIsPriceVisible(false)}
                                />
                            </Picker>
                        </View>
                    </Modal>

                    <Text style={styles.label}>Store Name</Text>
                    <TouchableWithoutFeedback onPress={() => togglePicker('storeName')}>
                        <View style={styles.pickerContainer}>
                            <Text style={styles.pickerText}>{storeName || 'Select Store Name'}</Text>
                            <View style={styles.iconLayoutParent}>
                                <Image source={require('../assets/icons/arrowdown.png')} style={styles.iconLayout} />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <Modal visible={isStoreNameVisible} animationType="slide" transparent={true}>
                        <View style={styles.closeModalContainer}>
                            <TouchableOpacity onPress={() => setIsStoreNameVisible(false)} >
                                <Image source={require('../assets/icons/closemodal.png')} style={styles.closeModalIcon} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.modalContainer}>
                            <Picker
                                selectedValue={price}
                                onValueChange={(itemValue) => {
                                    setStoreName(itemValue);
                                    setIsStoreNameVisible(false);
                                }}
                                style={styles.picker}
                            >
                                <Picker.Item
                                    label="Toko Anies Bondan"
                                    value="Anies"
                                    onPress={() => setIsStoreNameVisible(false)}
                                />
                                <Picker.Item
                                    label="Toko Prabowo Sigit"
                                    value="Prabowo"
                                    onPress={() => setIsStoreNameVisible(false)}
                                />
                                <Picker.Item
                                    label="Toko Ganjar Purnama"
                                    value="Ganjar"
                                    onPress={() => setIsStoreNameVisible(false)}
                                />
                            </Picker>
                        </View>
                    </Modal>

                    <Text style={styles.label}>Price</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputText}
                            placeholder={price || `automatically adjust price`}
                            value={price}
                            editable={false}
                        />
                    </View>
                    <Text style={styles.label}>Quantity</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Ex: 1000 Karton"
                            keyboardType="numeric"
                        />
                    </View>
                    <TouchableOpacity>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonSubmitText}>Submit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 250,
    },
    container: {
        padding: 16,
    },
    closeModalContainer: {
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    closeModalIcon: {
        height: 30,
        width: 30,
        top: 70,
        left: 330
    },
    label: {
        fontSize: 14,
        lineHeight: 24,
        color: "#1b5fe3",
        textAlign: "left",
        fontFamily: "Mulish-Regular",
        marginBottom: 4,
        marginTop: 8,
    },
    iconLayoutParent: {

    },
    iconLayout: {
        height: 20,
        width: 20
    },
    inputContainer: {
        backgroundColor: "#fff",
        borderColor: '#e8e8e8',
        borderRadius: 5,
        marginBottom: 16,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "rgba(0, 0, 0, 0.2)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 1,
        justifyContent: 'space-between',
    },
    inputText: {
        flex: 1,
        fontSize: 14,
        color: "black",
        textAlign: "left",
        fontFamily: "Mulish-Regular",
        height: 30,
        paddingHorizontal: 10,
    },
    pickerContainer: {
        backgroundColor: "#fff",
        borderColor: '#e8e8e8',
        borderRadius: 5,
        marginBottom: 16,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "rgba(0, 0, 0, 0.2)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 1,
    },

    picker: {
        height: 200,
        width: '100%',
    },
    pickerText: {
        fontSize: 14,
        color: "black",
        textAlign: "left",
        fontFamily: "Mulish-Regular",
        height: 30,
        paddingTop: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        width: 280
    },
    input: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        backgroundColor: '#1b5fe3',
        padding: 10,
        borderRadius: 5,
    },
    buttonSubmitText: {
        color: '#fff',
        fontFamily: 'Mulish-Bold',
        textAlign: "center"
    },
    outerContainer: {
        overflow: "hidden",
        flex: 1,
        backgroundColor: "#fff",
        width: "100%"
    },
    componentParent: {
        backgroundColor: "#f6f9ff",
        height: "100%",
        paddingHorizontal: 25,
        paddingTop: 10,
    },
});