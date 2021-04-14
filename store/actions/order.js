export const ADD_MENU = "ADD_MENU"
export const EDIT_MENU = "EDIT_MENU"
export const DELETE_MENU = "DELETE_MENU"

export const addMenu = (employeeId, district, batchOrderIds, employeeList) => {
    return ({
        type : ADD_MENU,
        menu : {
            employeeId : employeeId,
            district : district,
            batchOrderIds: batchOrderIds,
            employeeList : employeeList
        }
    })
}

export const editMenu = (id, price) =>{
    return ({
        type : EDIT_MENU,
        id : id,
        price : price
    })
} 

export const deleteMenu = () => {
    return ({
        type : DELETE_MENU
    })
}