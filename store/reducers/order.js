import {ADD_MENU, EDIT_MENU, DELETE_MENU} from '../actions/order'
import {Order} from '../../models/order'
import axios from 'axios'

const initialState = {
    _id: "",
    active : false,
    district : "none",
    order : [],
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
            for(let i = 0; i < menu.employeeList.length; i++){
                let format = {
                    id : i,
                    order : menu.employeeList[i],
                    actualPrice : 0
                }
                data.push(format);
            } 
            console.log(data);
            return {
                active : true,
                _id : _id,
                district : menu.district,
                order : data
            }
        case EDIT_MENU:
            console.log(action.price)
            console.log(state.order)
            const editMenu = state.order.map(value => {
                if(value.order._id === action.id){
                    return ({
                        ...value,
                        actualPrice : action.price
                    })
                }
                else return value;})
                const result = axios.post('http://localhost:5000/employee/add', {
                    employeeOrderId: state._id,
                    employeeList: editMenu
                  })
                console.log("finsihed saving?")
            return({
                ...state,
                order : editMenu
            })
        default :
            return initialState;
    }
}


