// import React from 'react'
// import { Text, Platform, View, StyleSheet } from 'react-native'

// import { createStackNavigator } from '@react-navigation/stack'
// import OrderList from "../screen/order/OrderListScreen"
// import TotalOrder from "../screen/order/TotnpmalOrderListScreen"
// import HomeOrder from "../screen/order/HomeOrderScreen"
// import HeaderButton from '../../components/UI/HeaderButton'

// const OrderStack = createStackNavigator()

// const OrderStackScreen = ({ navigation }) => (
//     <OrderStack.Navigator>
//         <OrderStack.Screen
//             name="home"
//             component={HomeOrder}
//             options={{
//                 headerTitle: 'Order Search',
//                 // defaultNavOptions,
//                 headerLeft: () => {
//                     return (
//                         <HeaderButton
//                             title="Cart"
//                             iconName={
//                                 Platform.OS === 'android'
//                                     ? 'md-list'
//                                     : 'ios-list'
//                             }
//                             action={() => {
//                                 navigation.openDrawer()
//                             }}
//                         ></HeaderButton>
//                     )
//                 },
//             }}
//         />
//         <OrderStack.Screen
//             name="order"
//             component={OrderList}
//         />
//         <OrderStack.Screen name="total" component={TotalOrder} />
//     </OrderStack.Navigator>
// )

// export default OrderStackScreen
