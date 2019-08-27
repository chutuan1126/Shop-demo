import cartAction from './cart.type';

export const toggleHidden = () => ({
    type: cartAction.TOGGLE_CART_DROPDOWN_HIDDEN
});

export const addItemToCart = item => ({
    type: cartAction.ADD_ITEM_TO_CART,
    addItem: item
});

export const RemoveItemId = item => ({
    type: cartAction.REMOVE_ITEM_TO_CART,
    RemoveItemId: item.id
});

export const minusQuantityItem = item => ({
    type: cartAction.MINUS_QUANTITY_ITEM,
    minusQuantityItem: item
});