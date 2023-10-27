import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'

const ElectronicsHeader = () => {
    return (
        <SafeAreaView>
            <View style={styles.slider}>
                <Text>this is where The Slider will go</Text>
            </View>
        </SafeAreaView>
    )
}

export default ElectronicsHeader

const styles = StyleSheet.create({
    slider: {
        marginTop: 30,
        marginLeft: 30
    }
})