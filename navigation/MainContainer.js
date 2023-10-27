// App.js or Navigation.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import your screens
import HomeScreen from '../screens/HomeScreen';
import orderScreen from '../screens/orderScreen';
import categoryScreen from '../screens/categoryScreen';
import cartScreen from '../screens/cartScreen'

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = 'home';
                        } else if (route.name === 'Order') {
                            iconName = 'list';
                        } else if (route.name === 'Category') {
                            iconName = 'albums';
                        } else if (route.name === 'Cart') {
                            iconName = 'cart';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Order" component={orderScreen} />
                <Tab.Screen name="Category" component={categoryScreen} />
                <Tab.Screen name="Cart" component={cartScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
