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
            for(let i = 0; i < menu.employeeList.length; i++){
                let format = {
                    id : i,
                    ...menu.employeeList[i],
                    price : 0
                }
                data.push(format);
            } 
            console.log({
                active : true,
                _id : _id,
                district : menu.district,
                employeeList : data
            }, "from add");
            return {
                active : true,
                _id : _id,
                district : menu.district,
                employeeList : data
            }
        case EDIT_MENU:
            console.log("EDIT", state.employeeList)
            console.log("CHECK", action.price, action.id)
            const sendData = state.employeeList.map( value => {

                if(action.id === value._id){
                    let updated = {
                        ...value,
                        price : action.price
                    }
                    return({
                        ...updated  
                    })
                }
                else{
                    return {
                        ...value
                    }
                }
            })
            axios.post('http://10.89.161.2:5000/employee/add', {
                employeeOrderId : state._id,
                employeeList : sendData
            }).catch(e => console.log(e));
            console.log(sendData)
            return({
                ...state,
                employeeList : sendData.map(value => value),
            })
        case DELETE_MENU:
            console.log("go to menu")
            axios.post('http://10.89.161.2:5000/employee/solve',  {
                employeeOrderId : state.employeeOrderId
            }, {method: 'POST', contentType : 'application/json', })
            return initialState;
        default :
            console.log("initial")
            return initialState;
    }
}


