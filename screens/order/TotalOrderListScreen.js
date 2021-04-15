import React, { useLayoutEffect, useEffect, useState } from 'react'
import HeaderButton from '../../components/UI/HeaderButton'
import {View, Text, FlatList, StyleSheet, Button} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import * as orderActions from '../../store/actions/order';
import order from '../../store/reducers/order';

const TotalOrderListScreen = ({navigation}) => {
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

    const data = [{
      id : 1,
      itemId : "cabbage",
      price : 10
    },
    {
      id : 2,
      itemId : "asd",
      price : 351
    },
    {
      id : 3,
      itemId : "kajshd",
      price : 54451
    },
  ]

  let total = 0
  data.forEach(value => total += value.price)
  const orderData = useSelector((state) => state.order) //later
  const dispatch = useDispatch()

   const accept = () => {
     //call only the dispatch and shit
    //  dispatch(orderActions.deleteMenu("asfkj"))//insert hardcorde
     navigation.navigate('home')
   }
      
    return (
        <View style={{flex : 1, justifyContent:'space-between'}}>
            <View style={styles.title}>
                <Text style={{fontSize:60, fontWeight: 700, marginLeft : 20, marginTop : 20}}>Total</Text>
            </View>
            <View>
                <FlatList 
                contentContainerStyle={{
                    margin : 10,
                }}  
                data={data} 
                renderItem={ListCard}
                keyExtractor={item => item.key}
                />
            </View>
            <View>
              <View style={{width:"90%", alignSelf:'center',height: 1, borderRadius:10, borderColor:'grey', borderWidth: 3}}/>
            <View style={styles.bottom}>
              <View style={{paddingRight : 50}}>
              <Text style={{fontSize :30, fontWeight: 700,textAlign : 'left'}}>TOTAL</Text>
              </View>
              <Text style={{fontSize: 20, textAlign: 'right', paddingRight :10, paddingleft :30}}>{total} HKD</Text>
            </View>
            <Button
            style={styles.accept}
                onPress={accept}
              title="Accept"
              color="green"
              accessibilityLabel="Learn more about this purple button"
            />
            </View>
    </View>
    )
}

const ListCard = ({item}) => {
    return(
    <View style={styles.itemList}>
        <Text style={styles.itemTitle}>{item.itemId}</Text>
        <Text style={styles.itemValue}>{item.price} HKD</Text>
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
      height : "80",
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
        fontWeight : 700
    },
    itemValue : {
        fontSize : 20
    },
    bottom:{
      width : "100%",
      height : "80",
      backgroundColor : 'rgba(255,255,255, 0)',
      flexDirection : 'row',
      padding : 10,
      alignItems : 'center',
      justifyContent : 'flex-end'
    },
    accept:{
      height:"20"
    }

  })
export default TotalOrderListScreen
