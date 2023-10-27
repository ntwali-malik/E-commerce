import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { FontAwesome } from '@expo/vector-icons';
import ProductItem from '../components/ProductItem';

const HomeScreen = ({ }) => {
    return (
        <SafeAreaView>
            <ScrollView>

                {/*header */}

                <Header />

                {/* New Arrival */}

                <View style={styles.newArrival}>
                    <View style={styles.title}>
                        <Text>New Arrival</Text>
                        <FontAwesome name="arrow-right" size={24} color="black" />
                    </View>
                    <ScrollView
                        style={{ flexDirection: 'column' }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </ScrollView>
                </View>

                {/* Most Popular */}
                <View style={styles.mostPopular}>
                    <View style={styles.title2}>
                        <Text>Most Popular</Text>
                        <FontAwesome name="arrow-right" size={24} color="black" />
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </ScrollView>
                </View>
                {/* Other Products*/}
                <View style={styles.mostPopular}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    newArrival: {
        marginTop: 10,
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
        marginLeft: 10
    },
    mostPopular: {
        flexDirection: 'column',
    },
    title2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
        marginLeft: 10
    },
    scrollViewContent: {
        paddingHorizontal: 10,
    },
})