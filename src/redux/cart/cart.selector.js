import { createSelector } from 'reselect';

const selectCart = (state) => state.cart

export const selectHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumalatedQuantity, cartItems) => accumalatedQuantity + cartItems.quantity, 0)
)

export const selectCartItemsTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumalatedPrice, cartItems) => accumalatedPrice + cartItems.price * cartItems.quantity, 0)
)