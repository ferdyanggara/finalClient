import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Platform } from 'react-native'
import Colors from '../constants/Colors'
import HomeOrder from "../screens/order/HomeOrderScreen"
import OrderList from "../screens/order/OrderListScreen"
import TotalOrder from '../screens/order/TotalOrderListScreen'

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

const OrderNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={defaultNavOptions}
                initialRouteName="home"
            >
                <Stack.Screen
                    name="home"
                    component={HomeOrder}
                    options={{
                        headerTitle: 'Order',
                    }}
                />
                 <Stack.Screen
                    name="order"
                    component={OrderList}
                    options={{
                        headerTitle: 'Grocery List',
                    }}
                />
                <Stack.Screen
                    name="total"
                    component={TotalOrder}
                    options={{
                        headerTitle: 'done',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default OrderNavigator
