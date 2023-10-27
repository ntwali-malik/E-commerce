import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import React from 'react'

const ResetScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/Logo.png')}
                    style={{ width: 258, height: 124 }}
                />
                <Text style={styles.companyName}> Feli Global Market</Text>
                <View style={styles.resetContent}>
                    <Entypo name="login" size={24} color="black" />
                    <Text style={styles.title}>Reset Password</Text>
                </View>
                <Text style={{ fontSize: 12, marginBottom: 10, textAlign: 'justify' }}>lost your password? Please enter your email address. You will receive a code to create a new password via email</Text>
            </View>
            <View >
                <Text style={{ marginBottom: 10 }}>Email Address</Text>
                <TextInput
                    placeholder='Your Email Address'
                    style={styles.input}
                />
            </View>
            <Button title='Send' color="green" />
        </View>
    )
}

export default ResetScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    companyName: {
        fontSize: 20,
        marginBottom: 40,
        fontWeight: '400',
        fontStyle: 'normal',
        alignItems: 'center',
        lineHeight: 'normal'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
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
    resetContent: {
        flexDirection: 'row',
        marginBottom: 10

    },
    title: {
        fontSize: 17,
        marginBottom: 20,
        marginLeft: 5,
        fontWeight: 'bold'
    },

})