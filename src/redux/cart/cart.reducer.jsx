import { addItemToCart, minusQuantityItem } from './cart.util';
import cartAction from './cart.type';

const cartInitialState = {
    hidden: true,
    cartItems: []
}
const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case cartAction.TOGGLE_CART_DROPDOWN_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartAction.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.addItem)
            }
            case cartAction.REMOVE_ITEM_TO_CART:
                return {
                    ...state,
                    cartItems: state.cartItems.filter((CartItem) => CartItem.id !== action.RemoveItemId)
                }
            case cartAction.MINUS_QUANTITY_ITEM:
                return {
                    ...state,
                    cartItems: minusQuantityItem(state.cartItems, action.minusQuantityItem)
                }
        default:
            return state;
    }
}

export default cartReducer;