import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native'
import React from 'react'

const ContactForm = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/Logo.png')}
                    style={{ width: 258, height: 124 }}
                />
                <Text style={styles.companyName}> Feli Global Market</Text>
                <View style={styles.resetContent}>
                    <Text style={styles.title}>GET IN TOUCH WITH US</Text>
                </View>
            </View>
            <View >
                <Text style={{ marginBottom: 10 }}>Your Name</Text>
                <TextInput
                    //placeholder='Your Name'
                    style={styles.input}
                />
            </View>
            <View >
                <Text style={{ marginBottom: 10 }}>Your Email</Text>
                <TextInput
                    //placeholder='Your Name'
                    style={styles.input}
                />
            </View>
            <View >
                <Text style={{ marginBottom: 10 }}>Your Phone Number</Text>
                <TextInput
                    //placeholder='Your Name'
                    style={styles.input}
                />
            </View>
            <View >
                <Text style={{ marginBottom: 10 }}>Your Message</Text>
                <TextInput
                    multiline={true}
                    //numberOfLines={4}
                    //placeholder='Your Name'
                    style={styles.inputMessage}
                />
            </View>
            <Button title='Send' color="green" />
        </View>
    )
}

export default ContactForm

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
    inputMessage: {
        width: '100%',
        height: 136,
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
        fontSize: 20,
        marginBottom: 20,
        marginLeft: 5,
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontWeight: '700'
    },
})