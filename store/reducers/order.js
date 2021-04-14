import {ADD_MENU, EDIT_MENU, DELETE_MENU} from '../actions/order'
import {Order} from '../../models/order'
import axios from 'axios'

const initialState = {
    _id: "",
    active : false,
    district : "none",
    employeeList : [],
}


export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_MENU:
            console.log("entered", action.menu)
            const {
                _id,
                employeeId,
                 district, 
                 batchOrderIds,
                 employeeList
                  } = action.menu;
            console.log(action.menu);
            const menu = new Order(
                _id,
                employeeId,
                district, 
                batchOrderIds,
                employeeList)
            let data = []
            console.log(menu.employeeList,"KJFDHGSKJHGF")
            console.log(menu.employeeList.length, "LENGTTTTTTTH")
            for(let i = 0; i < menu.employeeList.length; i++){
                let format = {
                    id : i,
                    ...menu.employeeList[i]
                }
                data.push(format);
            } 
            console.log(data);
            return {
                active : true,
                _id : _id,
                district : menu.district,
                employeeList : data
            }
        case EDIT_MENU:
            // console.log(state.employeeList)
            console.log(action, 'hgkrdughk')
            
            let newData = []
            let sendData = state.employeeList.map( value => {
                console.log(value, 'value')
                if(action.id === value._id){
                    let updated = {
                        ...value,
                        price : action.price
                    }
                    console.log(updated, 'sdf')
                    newData.push(updated);
                    return({
                        ...updated
                    })
                }
                else{
                    newData.push(value)
                    return (value)
                }
            })

            console.log(newData, sendData)

            axios.post('http://10.89.161.2:5000/employee/add', {
                employeeOrderId : state._id,
                employeeList : sendData
            }).catch(e => console.log(e));
            //axios call
            return({
                ...state,
                order : newData
            })
        case DELETE_MENU:
            axios.post('http://10.89.161.2:5000/employee/solve',  {
                employeeOrderId : state.employeeOrderId
            }, {method: 'POST', contentType : 'application/json', })
            return initialState;
        default :
            return initialState;
    }
}


