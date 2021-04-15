import React, { useLayoutEffect, useEffect, useState } from 'react'
import HeaderButton from '../../components/UI/HeaderButton'
import {View, Text, FlatList, StyleSheet, Button, TouchableOpacity} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import * as orderActions from '../../store/actions/order';
import order from '../../store/reducers/order';

const ChooseStore = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <HeaderButton
                        title="Refresh"
                        iconName={"refresh"}
                    ></HeaderButton>
                )
            },
        })
    }, [navigation])

    const data =[
        {key: 1, data: "Store A"},
        {key : 2, data: 'Store B'}
      ]

  let total = 0
  data.forEach(value => total += value.price)
  const orderData = useSelector((state) => state.order) //later
   const accept = () => {
     //call only the dispatch and shit
    //  dispatch(orderActions.deleteMenu("asfkj"))//insert hardcorde
     navigation.navigate('home')
   }
      
    return (
        <View style={{flex : 1, justifyContent:'flex-start'}}>
            <View style={styles.title}>
                <Text style={{fontSize:60, fontWeight: "700", marginLeft : 20, marginTop : 20}}>Select Store</Text>
            </View>
            <FlatList 
                contentContainerStyle={{
                    margin : 10,
                }}  
                data={data} 
                renderItem={(value)=>{
                  return(
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>{navigation.goBack()}}
                      >
                    <View style={styles.itemList}>
                        <Text style={styles.itemTitle}>{value.item.data}</Text>
                    </View>
                    </TouchableOpacity>
                    )
                }}
                keyExtractor={item => item.key}
                />
    </View>
    )
}


const styles = StyleSheet.create({
    title : {
      flexDirection : "row",
      justifyContent : 'flex-start',
      paddingBottom : 10
    },
    itemList : {
      width : "100%",
      height : 80,
      backgroundColor : 'rgba(255,255,255, 0)',
      flexDirection : 'row',
      padding : 10,
      justifyContent : 'space-between',
      alignItems : 'center',
      borderBottomWidth : 1,
      borderBottomColor : "rgb(210,210,210)"
    },
    itemTitle : {
        fontSize : 30,
        fontWeight : "700"
    },
    itemValue : {
        fontSize : 20
    },
    bottom:{
      width : "100%",
      height : 80,
      backgroundColor : 'rgba(255,255,255, 0)',
      flexDirection : 'row',
      padding : 10,
      alignItems : 'center',
      justifyContent : 'flex-end'
    },
    accept:{
      height:20
    }

  })
export default ChooseStore
