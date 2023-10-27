import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons';
import BeautyAndHealthHeader from '../components/BeautyAndHealthHeader';

const BeautyAndHealth = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <BeautyAndHealthHeader />
                <View style={styles.prod}>
                    <Image source={require('../assets/beautyAndH1.png')} style={styles.image} />
                    <View style={{ flexDirection: 'column', paddingLeft: 30 }}>
                        <Text style={{ color: 'black', fontSize: 16, padding: 10 }}>
                            Lorem Ipsum has been
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, marginTop: 15 }}>
                            <Text>RWF 50,000</Text>
                            <Text>20 orders</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, marginTop: 20 }}>
                            <Text style={{ textDecorationLine: 'line-through' }}>RWF 50,000</Text>
                            <Feather name="more-vertical" size={24} color="black" />
                        </View>
                    </View>
                </View>
                <View style={styles.prod}>
                    <Image source={require('../assets/beautyAndH2.png')} style={styles.image} />
                    <View style={{ flexDirection: 'column', paddingLeft: 30 }}>
                        <Text style={{ color: 'black', fontSize: 16, padding: 10 }}>
                            Lorem Ipsum has been
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, marginTop: 15 }}>
                            <Text>RWF 50,000</Text>
                            <Text>20 orders</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, marginTop: 20 }}>
                            <Text style={{ textDecorationLine: 'line-through' }}>RWF 50,000</Text>
                            <Feather name="more-vertical" size={24} color="black" />
                        </View>
                    </View>
                </View>
                <View style={styles.prod}>
                    <Image source={require('../assets/beautyAndH3.png')} style={styles.image} />
                    <View style={{ flexDirection: 'column', paddingLeft: 30 }}>
                        <Text style={{ color: 'black', fontSize: 16, padding: 10 }}>
                            Lorem Ipsum has been
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, marginTop: 15 }}>
                            <Text>RWF 50,000</Text>
                            <Text>20 orders</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, marginTop: 20 }}>
                            <Text style={{ textDecorationLine: 'line-through' }}>RWF 50,000</Text>
                            <Feather name="more-vertical" size={24} color="black" />
                        </View>
                    </View>
                </View>
                <View style={styles.prod}>
                    <Image source={require('../assets/beautyAndH1.png')} style={styles.image} />
                    <View style={{ flexDirection: 'column', paddingLeft: 30 }}>
                        <Text style={{ color: 'black', fontSize: 16, padding: 10 }}>
                            Lorem Ipsum has been
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, marginTop: 15 }}>
                            <Text>RWF 50,000</Text>
                            <Text>20 orders</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, marginTop: 20 }}>
                            <Text style={{ textDecorationLine: 'line-through' }}>RWF 50,000</Text>
                            <Feather name="more-vertical" size={24} color="black" />
                        </View>
                    </View>
                </View>
                <View style={styles.prod}>
                    <Image source={require('../assets/beautyAndH2.png')} style={styles.image} />
                    <View style={{ flexDirection: 'column', paddingLeft: 30 }}>
                        <Text style={{ color: 'black', fontSize: 16, padding: 10 }}>
                            Lorem Ipsum has been
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, marginTop: 15 }}>
                            <Text>RWF 50,000</Text>
                            <Text>20 orders</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, marginTop: 20 }}>
                            <Text style={{ textDecorationLine: 'line-through' }}>RWF 50,000</Text>
                            <Feather name="more-vertical" size={24} color="black" />
                        </View>
                    </View>
                </View>
                <View style={styles.prod}>
                    <Image source={require('../assets/beautyAndH3.png')} style={styles.image} />
                    <View style={{ flexDirection: 'column', paddingLeft: 30 }}>
                        <Text style={{ color: 'black', fontSize: 16, padding: 10 }}>
                            Lorem Ipsum has been
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, marginTop: 15 }}>
                            <Text>RWF 50,000</Text>
                            <Text>20 orders</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, marginTop: 20 }}>
                            <Text style={{ textDecorationLine: 'line-through' }}>RWF 50,000</Text>
                            <Feather name="more-vertical" size={24} color="black" />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default BeautyAndHealth

const styles = StyleSheet.create({
    prod: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        //paddingLeft: 20,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        width: 340,
        height: 124,
        marginLeft: 30
    },
    image: {
        width: 131,
        height: 124,
        //marginTop: 10
    }
})