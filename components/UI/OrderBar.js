import React, { useLayoutEffect, useEffect, useState } from 'react'
import { Text, Platform, View, FlatList,StyleSheet, TextInput, Pressable } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import * as orderActions from '../../store/actions/order'
import { TouchableOpacity } from 'react-native-gesture-handler';



const OrderBar = ({itemId, price, amount, targetPrice, updatePrice, store}) => {   
    console.log(itemId, price, amount, targetPrice);
    return (
        <View style={styles.container}>
            <Pressable onPress={store}>

            <FontAwesome5 name="shopping-bag" size={30} color="black" />
            </Pressable>
            
            <View style={styles.middle}>
                <View style={styles.middleTop}>
                    <Text style={{fontSize: 22, fontWeight: "700"}} >{itemId}</Text>
                    <Text>Expected :{targetPrice} Item :{amount}</Text>
                </View>
                
            </View>
            <TextInput 
            style={styles.input} 
            value={price}
            keyboardType = 'numeric'
            onChangeText = {updatePrice}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        backgroundColor : "#feffc3",
        borderRadius : 20,  
        padding : 20,
        marginBottom : 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor : "#000",
        shadowOffset : {
            width : 0,
            height : 10
        },
        shadowOpacity :0.3,
        shadowRadius : 20
    },
    middle :{
        height: '100%',
        alignItems : 'flex-end',
        justifyContent :'space-evenly',
        alignSelf: 'flex-start'
    },
    input : { 
      backgroundColor : 'white',
      borderRadius : 10,
      color : 'black',
      borderColor: 'black',
      borderWidth : 1,
      width : '30%',
      height : "80%",
      textAlignVertical : 'center',
      paddingLeft: 10,
      paddingRight: 10
    }
})

export default OrderBar
