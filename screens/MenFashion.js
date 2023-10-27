import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import MenHeader from '../components/MenHeader'
import { Feather } from '@expo/vector-icons';

const MenFashion = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <MenHeader />
                <View style={styles.prod}>
                    <Image source={require('../assets/mfashion1.png')} style={styles.image} />
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
                    <Image source={require('../assets/mfashion2.png')} style={styles.image} />
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
                    <Image source={require('../assets/mfashion3.png')} style={styles.image} />
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
                    <Image source={require('../assets/mfashion4.png')} style={styles.image} />
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
                    <Image source={require('../assets/mfashion5.png')} style={styles.image} />
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
                    <Image source={require('../assets/mfashion1.png')} style={styles.image} />
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

export default MenFashion

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