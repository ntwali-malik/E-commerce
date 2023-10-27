import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, Alert, SafeAreaView } from 'react-native'
import React from 'react'
import { Entypo, Ionicons, EvilIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import registerScreen from '../screens/RegisterScreen';

const Header = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image
                    source={require('../assets/headerImage.png')}
                    style={styles.Image}
                />

                <View style={styles.overLay}>
                    {/* Menu Icon*/}

                    <Entypo name="menu" size={24} color="white" />

                    {/* Search Bar*/}

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderWidth: 1,
                        borderColor: '#C0C0C0',
                        borderRadius: 7,
                        marginLeft: 62,
                        marginRight: 60
                    }}>
                        <TextInput
                            placeHolder="Search For Product"
                            style={{
                                width: 160,
                                color: 'white',
                            }} />
                        <EvilIcons name="search" size={24} color="white" />
                    </View>

                    {/* Account Icon*/}
                    <Ionicons name="person" size={24} color="white" />
                </View>
                <View style={styles.title}>
                    <Text style={{ color: 'white' }}>welcome to Thousand</Text>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Feli Global market</Text>
                </View>
                {/* Buttons*/}
                <View style={styles.btn}>
                    {/* Buttons*/}
                    <TouchableOpacity style={{ backgroundColor: '#000000', alignItems: 'center', padding: 10 }} >
                        <Text style={{ color: 'white', fontSize: 16 }}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: 'white', alignItems: 'center', borderRadius: 20, padding: 10, marginLeft: 20 }}>
                        <Text style={{ color: 'black', fontSize: 16 }}>SignUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15
    },
    Image: {
        width: '100%',
        height: 200
    },
    overLay: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        padding: 10,
    },
    title: {
        position: 'absolute',
        justifyContent: 'center',
        marginTop: 80,
        marginLeft: 130
    },
    btn: {
        position: 'absolute',
        marginTop: 140,
        marginLeft: 120,
        flexDirection: 'row',

    },
})