import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Card, Button, Title, Paragraph } from 'react-native-paper';

const ProductItem = ({ title, price, imageUrl }) => {
    return (
        <View style={styles.card}>
            <Image source={require('../assets/prod3.png')} style={styles.image} />
            <Text style={styles.title}>Lorem Ipsum has been the an</Text>
            <View style={styles.priceS}>
                <Text style={styles.price}>$50.00</Text>
                <Text style={{ color: 'black', fontSize: 16, padding: 10 }}>$60.00</Text>
            </View>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        //padding: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        width: 200,
        height: 230
    },
    image: {
        width: '100%',
        height: 120,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    title: {
        fontSize: 17,
        marginVertical: 5,
        padding: 10
    },
    price: {
        fontSize: 16,
        color: 'green',
        padding: 10
    },
    priceS: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    }
})