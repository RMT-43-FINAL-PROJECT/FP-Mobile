import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logoImage} source={require('../assets/logosapa.png')} />
            <Text style={styles.logo}>Login</Text>
            <View style={styles.inputGroup}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                    />
                </View>
                <View style={styles.checkboxContainer}>
                    <View style={styles.checkbox} />
                    <Text style={styles.inputText}>Remember Me</Text>
                </View>
            </View>
            <Text style={styles.forgotPassword}>forgot password?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('StoreList')} style={styles.proceedButton}>
                <Text style={styles.proceedText}>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000',
        marginBottom: 20,
    },
    logoImage: {
        width: 55,
        height: 92,
        marginBottom: 20,
    },
    inputGroup: {
        width: '100%',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
        borderRadius: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        width: 23,
        height: 22,
        backgroundColor: '#d9d9d9',
        marginRight: 10,
    },
    forgotPassword: {
        fontSize: 12,
        color: '#1b5fe3',
        alignSelf: 'flex-end',
        marginBottom: 20,
    },
    proceedButton: {
        backgroundColor: '#1b5fe3',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        height: 50,
        width: '100%',
    },
    proceedText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '700',
        lineHeight: 22
    },
});
