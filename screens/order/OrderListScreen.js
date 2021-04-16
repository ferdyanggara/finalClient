import React, { useLayoutEffect, useEffect, useState } from 'react'
import { Text, Platform, View, FlatList,StyleSheet, Button , ImageBackground} from 'react-native'
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
                            navigation.navigate('total')
                        }}
                    ></HeaderButton>
                )
            },
        })
    }, [navigation])

    const goBack = () => {
        navigation.navigate("store")
    }

    return (
        <ImageBackground source={require("../../assets/1080ppi/background.png")}style={styles.screen}>
            <FlatList 
            contentContainerStyle={{
                margin : 20
            }}  
            style={styles.list}
            data={orderData.employeeList}
            renderItem={(itemData)=>{
                console.log(itemData,'per item', itemData.item.id)
                return(<OrderBar 
                    itemId = {itemData.item.itemId}
                    price ={itemData.item.price}
                    targetPrice = {itemData.item.targetPrice}
                    amount = {itemData.item.amount}
                    store ={goBack}
                    updatePrice={(value) => {
                        console.log(value)
                        if(isNaN(parseFloat(value))){
                            dispatch(orderActions.editMenu(itemData.item._id, 0));
                        }
                        else dispatch(orderActions.editMenu(itemData.item._id, parseFloat(value)));
                    }}
                    />)
            }}
            keyExtractor={(item)=>item.id.toString()}/>
        </ImageBackground>
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
