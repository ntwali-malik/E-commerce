import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-web';

const RegisterScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // Add your registration logic here, such as sending a request to your backend API.
        //console.log('Registering with email:', email, 'and password:', password);
        // You can make API calls here to register the user and handle the response.
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/Logo.png')}
                    style={{ width: 258, height: 124 }}
                />
                <Text style={styles.companyName}> Feli Global Market</Text>
                <View style={styles.registerContent}>
                    <MaterialCommunityIcons name="account-plus" size={24} color="black" />
                    <Text style={styles.title}>Register</Text>
                </View>
            </View>
            <View style={styles.formField}>
                <Text style={{ marginBottom: 5 }}>First Name</Text>
                <TextInput
                    placeholder="Enter your First Name"
                    value={firstName}
                    onChangeText={text => setFirstName(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.formField}>
                <Text style={{ marginBottom: 5 }}>Last Name</Text>
                <TextInput
                    placeholder="Enter your Last Name"
                    value={lastName}
                    onChangeText={text => setLastName(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.formField}>
                <Text style={{ marginBottom: 5 }}>Email Address</Text>
                <TextInput
                    placeholder="Enter Email Address"
                    secureTextEntry
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.formField}>
                <Text style={{ marginBottom: 5 }}>Password</Text>
                <TextInput
                    placeholder="Enter Your Password"
                    secureTextEntry
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                />
            </View>
            <Button title="Register" onPress={handleRegister} color="green" style={styles.buttonR} />
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
    companyName: {
        fontSize: 20,
        marginBottom: 40,
        fontWeight: '400',
        fontStyle: 'normal',
        alignItems: 'center',
        lineHeight: 'normal'
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

export default RegisterScreen;
