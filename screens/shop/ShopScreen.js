import React from 'react'
import { Text, Platform, View, StyleSheet } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import ProductDetailScreen from './ProductDetailScreen'
import CartScreen from './CartScreen'
import ProductOverview from './ProductOverviewScreen'
import HeaderButton from '../../components/UI/HeaderButton'

const ShopStack = createStackNavigator()

const ShopStackScreen = ({ navigation }) => (
    <ShopStack.Navigator>
        <ShopStack.Screen
            name="ProductOverview"
            component={ProductOverview}
            options={{
                headerTitle: 'All Products',
                // defaultNavOptions,
                headerLeft: () => {
                    return (
                        <HeaderButton
                            title="Cart"
                            iconName={
                                Platform.OS === 'android'
                                    ? 'md-list'
                                    : 'ios-list'
                            }
                            action={() => {
                                navigation.openDrawer()
                            }}
                        ></HeaderButton>
                    )
                },
            }}
        />
        <ShopStack.Screen
            name="ProductDetailScreen"
            component={ProductDetailScreen}
        />
        <ShopStack.Screen name="CartScreen" component={CartScreen} />
    </ShopStack.Navigator>
)

export default ShopStackScreen
