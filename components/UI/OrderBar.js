import React, { useLayoutEffect, useEffect, useState } from 'react'
import { Text, Platform, View, FlatList,StyleSheet, TextInput } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import * as orderActions from '../../store/actions/order'



const OrderBar = ({itemId, actualPrice, price, amount, updatePrice}) => {   
    console.log(itemId, actualPrice, price, amount, updatePrice);
    return (
        <View style={styles.container}>
            <FontAwesome5 name="shopping-bag" size={20} color="black" />
            <View style={styles.middle}>
                <View style={styles.middleTop}>
                    <Text style={{fontSize: 22, fontWeight: "700"}} >{itemId}</Text>
                    <Text>Expected :{price} Item :{amount}</Text>
                </View>
                
            </View>
            <TextInput 
            style={styles.input} 
            value={actualPrice}
            keyboardType = 'numeric'
            onChangeText = {updatePrice}
            onPressOut={()=>{console.log("PRESSOUT")}}
            onEndEditing={()=>{console.log("aedOUT")}}
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
        alignItems : 'left',
        justifyContent :'space-evenly',
        alignSelf: 'flex-start'
    },
    input : { 
      backgroundColor : 'white',
      borderRadius : 10,
      color : 'black',
      borderColor: 'rgba(199,199,199,0.6)',
      borderWidth : 1,
      width : '30%',
      height : "80%",
      textAlignVertical : 'center',
      paddingLeft: 10,
      paddingRight: 10
    }
})

export default OrderBar
