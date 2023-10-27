import { StyleSheet, Text, View, Image, Dimensions, ViewPropTypes, SafeAreaView } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native';
//import Carousel from 'react-native-snap-carousel';
const WomenHeader = () => {

    return (
        <SafeAreaView>
            <View style={styles.slider}>
                <Text>this is where The Slider will go</Text>
            </View>
        </SafeAreaView>
    )
};

export default WomenHeader

const styles = StyleSheet.create({
    slider: {
        marginTop: 30,
        marginLeft: 30
    }
})