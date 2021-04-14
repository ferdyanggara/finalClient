import React, { useLayoutEffect, useEffect, useState } from 'react'
import { Text, Platform, View, FlatList,StyleSheet, StatusBar } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import HeaderButton from '../../components/UI/HeaderButton'
import order from '../../store/reducers/order'
import { AntDesign } from '@expo/vector-icons'; 
import OrderBar from '../../components/UI/OrderBar'
import * as orderActions from '../../store/actions/order'
import { FontAwesome } from '@expo/vector-icons';


const OrderListScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <HeaderButton
                        title="truck"
                        iconName="refresh"
                        action={()=> console.log("yes")}
                    ></HeaderButton>
                )
            },
        })
    }, [navigation])

    const orderData = useSelector((state)=> state.order);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(orderData);
    }, [orderData])
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <HeaderButton
                        title="Cart"
                        iconName={
                            Platform.OS === 'android' ? 'md-cart' : 'ios-cart'
                        }
                        action={() => {
                            navigation.navigate('CartScreen')
                        }}
                    ></HeaderButton>
                )
            },
        })
    }, [navigation])

    

    return (
        <View style={styles.screen}>
            <FlatList 
            contentContainerStyle={{
                margin : 20,
            }}  
            style={styles.list}
            data={orderData.order}
            renderItem={(itemData)=>{
                console.log(orderData)
                return(<OrderBar 
                    itemId = {itemData.item.order.itemId}
                    actualPrice = {itemData.item.order.actualPrice}
                    price ={itemData.item.order.price}
                    amount = {itemData.item.order.amount}
                    updatePrice={(value) => {
                        console.log(value)
                        if(isNaN(parseFloat(value))){
                            dispatch(orderActions.editMenu(itemData.item.order._id, 0));
                        }
                        else dispatch(orderActions.editMenu(itemData.item.order._id, parseFloat(value)));
                    }}
                    />)
            }}
            keyExtractor={(item)=>item.id.toString()}/>
            <Text>{orderData.district}</Text>
        </View>
    )

   
}

const styles = StyleSheet.create({
    screen: {
        flex : 1,
        height : "100%",
    },
    list :{
    }

})
export default OrderListScreen
