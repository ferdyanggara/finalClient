
import React, { useLayoutEffect, useEffect, useState } from 'react'
import { Text, ActivityIndicator, View, StyleSheet, Image, Pressable, Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import HeaderButton from '../../components/UI/HeaderButton'  
import Card from '../../components/UI/Card'

import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import * as orderActions from '../../store/actions/order';
import axios from 'axios'

const loading = '../../assets/lottie/loading.json';
const cross = '../../assets/lottie/cross.json';
const check = '../../assets/lottie/check.json'


const OrderOverviewScreen = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <HeaderButton
                        title="Refresh"
                        iconName={"refresh"}
                        action={checkJob}
                    ></HeaderButton>
                )
            },
        })
    }, [navigation])

    const dispatch = useDispatch()
    const orderData = useSelector((state) => state.order)

    const [check, setCheck] = useState(false)
    const [status, setStatus] = useState(false)

    const checkJob = async () => {
        setCheck(true);
    //insert axios cal
        // const result = await axios.get('http://10.89.161.2:5000/employee/order', {
        //     params: {
        //         employeeId: "6075e0e815b20c4eb8531adc"
        //     }}).then(result => {
        //         console.log("yes")
        //         setStatus(false);
        //         dispatch(orderActions.addMenu(result.data.data._id, result.data.data.employeeId ,result.data.data.district, result.data.data.batchOrderIds, result.data.data.employeeList));
        //         navigation.navigate('order')
        //     }).catch(err => {
        //         console.log("false")
        //         setStatus(false);
        //         console.log(err);
        //     });
        const result ={
            _id:"6075e0e315b20c4eb8531ad8",
            batchOrderIds:["6075e08f316f055070fe5554",
            "6075e0c964ef7729f4892675","6075e0dd15b20c4eb8531ad4"],
            status:"solved",
            district:"Mongkok",
            employeeList:[{
                _id:"6075e0e315b20c4eb8531ad9",
                itemId:"apple",
                amount:15,
                type:"discrete",
                district:"Mongkok",
                price:25,
                targetPrice : 5,
                employeeId:"60759340913c1765b800a079",
                storeId:"607594c4b77037675c395cff",
                category:"fruit"},
                {
                    _id:"asd",
                    itemId:"pear",
                    amount:15,
                    type:"discrete",
                    district:"Mongkok",
                    price:25,
                    employeeId:"60759340913c1765b800a079",
                    storeId:"607594c4b77037675c395cff",
                    targetPrice : 7,
                    category:"fruit"},
                    {
                        _id:"235",
                        itemId:"banana",
                        amount:15,
                        type:"discrete",
                        district:"Mongkok",
                        price:25,
                        employeeId:"60759340913c1765b800a079",
                        storeId:"607594c4b77037675c395cff",
                        targetPrice : 8.6,
                        category:"fruit"},
                        {
                            _id:"6075e0e315b20cvbn4eb8531ad9",
                            itemId:"melon",
                            amount:15,
                            type:"discrete",
                            district:"Mongkok",
                            price:25,
                            targetPrice : 5,
                            employeeId:"60759340913c1765b800a079",
                            storeId:"607594c4b77037675c395cff",
                            category:"fruit"},
                            {
                                _id:"aqes",
                                itemId:"squash",
                                amount:15,
                                type:"discrete",
                                district:"Mongkok",
                                targetPrice : 10,
                                price:25,
                                employeeId:"60759340913c1765b800a079",
                                storeId:"607594c4b77037675c395cff",
                                category:"fruit"}],
            employeeId:"60759340913c1765b800a079"}
        dispatch(orderActions.addMenu(result._id, result.employeeId, result.district, result.batchOrderIds, result.employeeList))
        setCheck(false)
        navigation.navigate('order')
        setTimeout(() => {createTwoButtonAlert}, 1000);

    }


    const iconSelection = () => {
        if(!check) return(<FontAwesome style={styles.icon} name="search" size={50} color="black"  />)
        if(!orderData.active) {
            return(<Entypo style={styles.icon} name="circle-with-cross" size={50} color="red" />)
        }
        return(<Ionicons name="ios-checkmark-circle" size={50} color="black" />)
    }

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Order Found!",
      "Please purchase the grocery!",
      [
        { text: "OK", onPress: () => navigation.navigate('order') }
      ]
    );

    return (
            <View style={{flex : 1, padding : 20}}>
                <View styles={{flex : 1, flexDirection:'column'}}>
                    <View style={styles.headerView}>
                        <Text style={styles.header}>Hello Diana</Text>
                        <Text style={{fontSize: 15, fontWeight: '500'}}>{"Here's today report"}</Text>
                </View>
                        
                    <View style={{flexDirection:'row', justifyContent:"space-evenly"}}>
                    <Pressable >
                        <View style={styles.box}>
                        <View style={{flex : 1, padding : 20}}>
                            <Text style={styles.boxTitle}>Orders</Text>
                        </View>
                            <View style={{flexDirection: 'row', flex: 1, justifyContent : 'space-evenly'}}>
                                <Text style={{fontSize:25}}>123</Text>
                                <Ionicons name="receipt" size={24} color="black" />
                            </View>
                        </View>
                    </Pressable>
                    <Pressable >
                        <View style={styles.box}>
                        <View style={{flex : 1, padding : 20}}>
                            <Text style={styles.boxTitle}>Money</Text>
                        </View>
                            <View style={{flexDirection: 'row', flex: 1, justifyContent : 'space-evenly'}}>
                                <Text style={{fontSize:20}}>123 HKD</Text>
                                <FontAwesome5 name="money-bill-wave-alt" size={24} color="black" />
                            </View>
                        </View>
                    </Pressable>
                    </View>
                    <View style={styles.bottomCard}>
                    <MaterialIcons name="explore" size={45} color="black" style={{paddingRight: 10}} />
                    <Text style={{fontSize:50, fontWeight:'500'}}>Explore</Text>
                    </View>

                    <Pressable style={styles.bottomSearch} onPress={checkJob}>
                    <View >
                    {status?  <ActivityIndicator size="large" />: iconSelection()}
                    </View>
                    </Pressable>
                </View>
                {/* <View style={styles.headerView}>
                    <Text style={styles.header}>Hello Diana</Text>
                    <Text style={{fontSize: 15, fontWeight: '500'}}>{"Here's today report"}</             Text>
                </View>
                {status?  <ActivityIndicator size="large" />: iconSelection()}
                <Text style={styles.textMessage}>{orderData.district} </Text>
                 */}
            </View>
            
    )
}
// const boxText = (text1, text2, logo, color) => {
//     return (
//     <TouchableOpacity activeOpacity={0.5}>
//       <View style={styles.box}>
//       <View style={{flex : 1, padding : 20}}>
//         <Text style={styles.boxTitle}>Something</Text>
//       </View>
//       <View style={{flexDirection: 'row', flex: 1, justifyContent : 'space-evenly'}}>
//         <Text>test</Text>
//         {logo}
//       </View>
//       </View>
//     </TouchableOpacity>
//     )
//   }

  const styles = StyleSheet.create({
    header : {
      fontWeight : '600',
      fontSize : 40
    },
    headerView : {
      paddingLeft : 10
    },
    box : {
      justifyContent :'space-evenly',
      height : 150,
      marginTop : 10,
      width: 150,
      backgroundColor : 'red',
      borderRadius : 20,
      shadowColor: 'black',
      shadowOpacity: 0.575,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
    },
    boxTitle: {
      fontSize : 30,
      fontWeight : '700'
    },
    bottomCard:{
      flexDirection:"row",
      justifyContent :"center",
      alignItems: "center",
      height : "30%",
      width : "90%",
      backgroundColor : 'rgba(239,255,75,0.4546860980720413)',
      borderRadius : 20,
      margin : 20,
      shadowColor: 'black',
      shadowOpacity: 0.575,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      alignSelf: 'center'
    },
    bottomSearch:{
        flexDirection:"column",
        justifyContent :"center",
        alignItems: "center",
        height : "30%",
        width : "90%",
        backgroundColor : 'rgba(178,255,255,0.48269730255383403)',
        borderRadius : 20,
        margin : 20,
        shadowColor: 'black',
        shadowOpacity: 0.575,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        alignSelf: 'center'
      },
  });

export default OrderOverviewScreen
