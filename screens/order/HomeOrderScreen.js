
import React, { useLayoutEffect, useEffect, useState } from 'react'
import { Text, ActivityIndicator, View, StyleSheet, Image, Pressable, Alert, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import HeaderButton from '../../components/UI/HeaderButton'  
import Card from '../../components/UI/Card'

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { AntDesign } from '@expo/vector-icons'; 
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
        <ImageBackground
        source={require("../../assets/1080ppi/background.png")}
        style={{ width: "100%", height: "100%" }}
      >


        <View style={{ paddingHorizontal: 40, marginTop: 25 }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: '700',
            }}
          >
            Hello Linda,
          </Text>

          <Text
            style={{
              fontSize: 15,
              paddingVertical: 10,
              paddingRight: 80,
              lineHeight: 22,
            }}
          >
            Here's today report
          </Text>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFF",
              borderRadius: 40,
              alignItems: "center",
              justifyContent : 'space-evenly',
              paddingVertical: 10,
              paddingHorizontal: 20,
              marginTop: 30,
            }}
          >
              <View style={{
                height :"100%",
                backgroundColor:"white",
                flexDirection: 'row' }}>
                <Ionicons name="cash" size={20} color="black" />
                <Text>Money : 50</Text>
              </View>

              <View style={{
                height :"100%",
                backgroundColor:"white",
                flexDirection: 'row' }}>
                <Ionicons name="receipt" size={18} color="black" />
                <Text>Orders : 2</Text>
              </View>

              <View style={{
                height :"100%",
                backgroundColor:"white",
                flexDirection: 'row' }}>
                    <AntDesign name="star" size={20} color="black" />
                <Text>Rating : 4.3</Text>
              </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginRight: -40, marginTop: 30 }}
          >
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 66,
                width: 66,
                borderRadius: 50,
                backgroundColor: "#5facdb",
              }}
            >
              <AntDesign name="wallet" size={24} color="black" />
            </TouchableOpacity>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 66,
                width: 66,
                borderRadius: 50,
                backgroundColor: "#ff5c83",
                marginHorizontal: 22,
              }}
            >
              <Icon name="office-building" color="white" size={32} />
            </View>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 66,
                width: 66,
                borderRadius: 50,
                backgroundColor: "#ffa06c",
              }}
            >
              <Icon name="bus" color="white" size={32} />
            </View>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 66,
                width: 66,
                borderRadius: 50,
                backgroundColor: "#bb32fe",
                marginLeft: 22,
              }}
            >
              <Icon name="dots-horizontal" color="white" size={32} />
            </View>
          </ScrollView>

              <View style={{flexDirection : 'row', marginTop : 50}}>
              <Icon name="map-marker" size={25}  />
              <Text
            style={{
            marginleft : 20,
              fontSize: 25,
              fontWeight : '600'
            }}
          >
            Recommended Markets
          </Text>
              </View>
          

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: -40, marginTop: 30 }}
          >
            <View
              style={{
                backgroundColor: "#FEFEFE",
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
              }}
            >
              <Image
                source={require("../../assets/images/market.jpg")}
                style={{ width: 180, borderRadius: 10, height: 130 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                  <Text>Sai Kung market</Text>
                <Icon name="map-marker" size={25} color="#5facdb"  style={{marginleft:10}}/>
              </View>
              <View style={{flexDirection:"row", justifyContent:"flex-start"}}>
              <Ionicons name="star" size={18} color="black" />
              <Ionicons name="star" size={18} color="black" />
              <Ionicons name="star" size={18} color="black" />
              <Ionicons name="star" size={18} color="black" />
           
                
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#FEFEFE",
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
                marginHorizontal: 20,
              }}
            >
              <Image
                source={require("../../assets/images/market2.png")}
                style={{ width: 180, borderRadius: 10, height: 130 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <Text>Hang Hau market</Text>
                <Icon name="map-marker" size={25} color="#5facdb"  style={{marginleft:10}}/>
              </View>
              <View style={{flexDirection:"row", justifyContent:"flex-start"}}>
              <Ionicons name="star" size={18} color="black" />
              <Ionicons name="star" size={18} color="black" />
              <Ionicons name="star" size={18} color="black" />
              <Ionicons name="star" size={18} color="black" />
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#FEFEFE",
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
              }}
            >
              <Image
                source={require("../../assets/images/market3.jpg")}
                style={{ width: 180, borderRadius: 10, height: 130 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <Text>Po Lam market</Text>
                <Icon name="map-marker" size={25} color="#5facdb"  style={{marginleft:10}}/>
              </View>
              <View style={{flexDirection:"row", justifyContent:"flex-start"}}>
              <Ionicons name="star" size={18} color="black" />
              <Ionicons name="star" size={18} color="black" />
              <Ionicons name="star" size={18} color="black" />
              <Ionicons name="star" size={18} color="black" />
       
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
            
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
