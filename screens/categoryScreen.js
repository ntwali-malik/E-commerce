import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react'
//import WomenFashion from './screens/WomenFashion';

const categoryScreen = ({ navigation }) => {

    // Define your category data
    const categories = [
        { id: 1, name: 'Women Fashion' },
        { id: 2, name: 'Men Fashion' },
        { id: 3, name: 'Phone & Telecommunication' },
        { id: 4, name: 'Computer, Office & Security' },
        { id: 5, name: 'Jewelry & Watch' },
        { id: 6, name: 'Bags & Shoes' },
        { id: 7, name: 'Tools & Home Improvement' },
        { id: 8, name: 'Beauty, Health & Hair' },
        { id: 9, name: 'Consumer Electronics' },
        { id: 10, name: 'Auto Mobile & Motorcycle' },
        { id: 11, name: 'OutDoor Fun & Sport' },
        { id: 12, name: 'Furniture' },
        // Add more categories as needed
    ];

    const onPressCategory = (categoryName) => {
        // Navigate to the corresponding screen when a category is clicked
        if (categoryName === 'Women Fashion') {
            navigation.navigate('WomenFashion');
        } else if (categoryName === 'Men Fashion') {
            navigation.navigate('MenFashion');
        }
        // Add more conditions for other categories
    };


    return (
        <View style={styles.container}>
            <Text>Category Screen</Text>
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => onPressCategory(item.name)}>
                        <View style={styles.card}>
                            <Text style={styles.categoryName}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default categoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    card: {
        backgroundColor: '#fff', // Card background color
        padding: 16,
        marginVertical: 10,
        borderRadius: 8, // Card border radius
        elevation: 3, // Card shadow for Android
        shadowColor: '#333', // Card shadow color for iOS
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
    },
    categoryName: {
        fontSize: 16,
        fontWeight: '600',
    },
})