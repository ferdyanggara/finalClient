import { FlatList } from 'react-native'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import { Text, Platform, View, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'
import * as cartActions from '../../store/actions/cart'
import HeaderButton from '../../components/UI/HeaderButton'
import Colors from '../../constants/Colors'
import { TouchableWithoutFeedback } from 'react-native'
import { Button } from 'react-native-paper'
import OrderBar from '../../components/UI/OrderBar'

//border
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import Card from '../../components/UI/Card';
import * as orderActions from '../../store/actions/order';
import axios from 'axios'
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
    const [getter, setGetter] = useState("Havent")

    const checkJob = async () => {
    //insert axios cal
        let success = false;
        // const result = await  axios.get('http://localhost:5000/employee/order', {
        // params: {
        //     employeeId: "60759340913c1765b800a079"
        // }
        // });
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
                employeeId:"60759340913c1765b800a079",
                storeId:"607594c4b77037675c395cff",
                category:"fruit"},
                {
                    _id:"6075e0e315b20c4eb8531ad9",
                    itemId:"apple",
                    amount:15,
                    type:"discrete",
                    district:"Mongkok",
                    price:25,
                    employeeId:"60759340913c1765b800a079",
                    storeId:"607594c4b77037675c395cff",
                    category:"fruit"},
                    {
                        _id:"6075e0e315b20c4eb8531ad9",
                        itemId:"apple",
                        amount:15,
                        type:"discrete",
                        district:"Mongkok",
                        price:25,
                        employeeId:"60759340913c1765b800a079",
                        storeId:"607594c4b77037675c395cff",
                        category:"fruit"},
                        {
                            _id:"6075e0e315b20c4eb8531ad9",
                            itemId:"apple",
                            amount:15,
                            type:"discrete",
                            district:"Mongkok",
                            price:25,
                            employeeId:"60759340913c1765b800a079",
                            storeId:"607594c4b77037675c395cff",
                            category:"fruit"},
                            {
                                _id:"6075e0e315b20c4eb8531ad9",
                                itemId:"apple",
                                amount:15,
                                type:"discrete",
                                district:"Mongkok",
                                price:25,
                                employeeId:"60759340913c1765b800a079",
                                storeId:"607594c4b77037675c395cff",
                                category:"fruit"}],
            employeeId:"60759340913c1765b800a079"}
        if(result !== undefined) success = true;
        if(success){
        // dispatch(orderActions.addMenu(result.data.data._id, "60759340913c1765b800a079" ,result.data.data.district, result.data.data.batchOrderIds, result.data.data.employeeList))
        dispatch(orderActions.addMenu(result._id, result.employeeId, result.district, result.batchOrderIds, result.employeeList))
        setTimeout(() => {  navigation.navigate('order'); }, 1);
        }
        console.log(result);
        setCheck(true)
    }

    const iconSelection = () => {
        console.log("ENTER", orderData);
        if(!check) return(<FontAwesome style={styles.icon} name="search" size={170} color="black" />)
        if(!orderData.active) {
            return(<Entypo style={styles.icon} name="circle-with-cross" size={170} color="red" />)
        }
        return(<AntDesign style={styles.icon} name="checkcircle" size={170} color="green" />)
    }

    return (
            <View style={{ flex: 1, flexGrow:1, marginTop: '5px', flex:'column', alignItems: 'center', justifyContent:"center" }}>
                {iconSelection()}
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
    
})

export default OrderOverviewScreen
