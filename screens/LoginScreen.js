import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import React from 'react'
const LoginScreen = () => {
    //const [firstName, setFirstName] = useState('');
    //const [lastName, setLastName] = useState('');
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');

    //const handleRegister = () => {
    // Add your registration logic here, such as sending a request to your backend API.
    //console.log('Registering with email:', email, 'and password:', password);
    // You can make API calls here to register the user and handle the response.
    //};
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/Logo.png')}
                    style={{ width: 258, height: 124 }}
                />
                <Text style={styles.companyName}> Feli Global Market</Text>
                <View style={styles.registerContent}>
                    <Entypo name="login" size={24} color="black" />
                    <Text style={styles.title}>Login</Text>
                </View>
            </View>
            <View >
                <Text style={{ marginBottom: 5 }}>Email Address</Text>
                <TextInput
                    placeholder='Your Email Address'
                    style={styles.input}
                />
            </View>
            <View >
                <Text style={{ marginBottom: 5 }}>Password</Text>
                <TextInput
                    secureTextEntry
                    placeholder='Your Email Address'
                    style={styles.input}
                />
            </View>
            <Button title='Login' color="green" />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerContent: {
        flexDirection: 'row',

    },
    title: {
        fontSize: 17,
        marginBottom: 20,
        marginLeft: 5
    },

    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 16,
        paddingLeft: 10,
    },
    buttonR: {
        borderRadius: 20,
    },
});
export default LoginScreen;