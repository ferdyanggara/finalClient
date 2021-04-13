import React from 'react'
import ProductOverview from '../screens/shop/ProductOverviewScreen'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Platform } from 'react-native'
import Colors from '../constants/Colors'
import ProductDetailScreen from '../screens/shop/ProductDetailScreen'
import CartScreen from '../screens/shop/CartScreen'
// import { HeaderButtons, Item } from 'react-navigation-header-buttons'

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold',
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
}

const Stack = createStackNavigator()

// const ProductOverview = () => {
//   return (
//     <Text>Hel</Text>
//   )
// }

const ShopNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={defaultNavOptions}
                initialRouteName="ProductOverview"
            >
                <Stack.Screen
                    name="ProductOverview"
                    component={ProductOverview}
                    options={{
                        headerTitle: 'All Products',
                    }}
                />
                <Stack.Screen
                    name="ProductDetailScreen"
                    component={ProductDetailScreen}
                />
                <Stack.Screen name="CartScreen" component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ShopNavigator
