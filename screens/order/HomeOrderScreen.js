
import React, { useLayoutEffect, useEffect, useState } from 'react'
import { Text, ActivityIndicator, View, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import HeaderButton from '../../components/UI/HeaderButton'

import { Button } from 'react-native-paper'
import {UIActivityIndicator} from 'react-native-indicators'

//border
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import * as orderActions from '../../store/actions/order';
import axios from 'axios'

const loading = '../../assets/lottie/loading.json';
const cross = '../../assets/lottie/cross.json';
const check = '../../assets/lottie/check.json'

const searchText = "Searching..."
const falseText = "Orders not found! Please try again"
const trueText = "Order found! Directing..."

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
    //insert axios cal
        setStatus(true);
        const result = await axios.get('http://10.89.161.2:5000/employee/order', {
            params: {
                employeeId: "6075e0e815b20c4eb8531adc"
            }}).then(result => {
                console.log("yes")
                setStatus(false);
                dispatch(orderActions.addMenu(result.data.data._id, result.data.data.employeeId ,result.data.data.district, result.data.data.batchOrderIds, result.data.data.employeeList));
                navigation.navigate('order')
            }).catch(err => {
                console.log("false")
                setStatus(false);
                console.log(err);
            });
        setCheck(true);
    }


    const iconSelection = () => {
        if(!check) return(<FontAwesome style={styles.icon} name="search" size={170} color="black" />)
        if(!orderData.active) {
            return(<Entypo style={styles.icon} name="circle-with-cross" size={170} color="red" />)
        }
        return(<AntDesign style={styles.icon} name="cheadckcircle" size={170} color="green" />)
    }

    return (
            <View style={{ flex: 1, flexGrow:1, marginTop: 5, alignItems: 'center', justifyContent:"center" }}>
                {status?  <ActivityIndicator size="large" />: iconSelection()}
                <Text style={styles.textMessage}>{orderData.district} </Text>
            </View>
            
    )
}

const styles = StyleSheet.create({
    categories: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
    },
    icon:{
        margin : 10,
    },
    textMessage:{
        padding : 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    button: {
        borderRadius: 25,
        elevation: 10,
    },
    random:{
        width: 20,
        height : 20
    }
    
})

export default OrderOverviewScreen
