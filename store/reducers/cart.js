import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart'
import CartItem from '../../models/cart-item'

const initialState = {
    items: {},
    totalAmount: 0,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product
            const prodPrice = addedProduct.price
            const prodTitle = addedProduct.title

            let updatedNewCartItem

            if (state.items[addedProduct.id]) {
                updatedNewCartItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice
                )
            } else {
                updatedNewCartItem = new CartItem(
                    1,
                    prodPrice,
                    prodTitle,
                    prodPrice
                )
            }

            return {
                ...state,
                items: {
                    ...state.items,
                    [addedProduct.id]: updatedNewCartItem,
                },
                totalAmount: state.totalAmount + prodPrice,
            }

        default:
            return state

        case REMOVE_FROM_CART:
            let selectedItem = state.items[action.pid]
            const currentQTY = selectedItem.quantity
            let updatedRemoveCartItem
            if (currentQTY > 1) {
                selectedItem = new CartItem(
                    selectedItem.quantity - 1,
                    selectedItem.productPrice,
                    selectedItem.productTitle,
                    selectedItem.sum - selectedItem.productPrice
                )
                updatedRemoveCartItem = {
                    ...state.items,
                    [action.pid]: selectedItem,
                }
                return {
                    ...state,
                    items: updatedRemoveCartItem,
                    totalAmount: state.totalAmount - selectedItem.productPrice,
                }
            } else {
                // console.log('selected item', selectedItem)
                console.log('staet items', state.items)
                updatedRemoveCartItem = { ...state.items }
                console.log('before delete', updatedRemoveCartItem)
                delete updatedRemoveCartItem[action.pid]
                console.log('after delete', updatedRemoveCartItem)
                return {
                    ...state,
                    items: updatedRemoveCartItem,
                    totalAmount: state.totalAmount - selectedItem.productPrice,
                }
            }
    }
}
