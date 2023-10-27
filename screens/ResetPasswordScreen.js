import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import React from 'react'

const ResetPasswordScreen = () => {
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
            </View>
            <View >
                <Text style={{ marginBottom: 10 }}>Enter New Password</Text>
                <TextInput
                    secureTextEntry
                    placeholder='Enter New Password'
                    style={styles.input}
                />
            </View>
            <View >
                <Text style={{ marginBottom: 10 }}>Confirm Password</Text>
                <TextInput
                    secureTextEntry
                    placeholder='Confirm Password'
                    style={styles.input}
                />
            </View>
            <Button title='Reset' color="green" />
        </View>
    )
}

export default ResetPasswordScreen

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