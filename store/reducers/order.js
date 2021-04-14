import {ADD_MENU, EDIT_MENU, DELETE_MENU} from '../actions/order'
import {Order} from '../../models/order'

const initialState = {
    active : false,
    district : "none",
    order : [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_MENU:
            console.log("entered", action.menu)
            const {employeeId,
                 district, 
                 batchOrderIds,
                 employeeList
                  } = action.menu;
            const menu = new Order(
                employeeId,
                district, 
                batchOrderIds,
                employeeList)
            let data = []
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
                ...state,
                district : menu.district,
                order : data
            }
        case EDIT_MENU:
            const editMenu = state.order.map(value => {
                if(value.order._id === action.id){
                    return ({
                        ...value,
                        actualPrice : action.price
                    })
                }
                else return value;})
            return({
                ...state,
                order : editMenu
            })
        default :
            return initialState;
    }
}


