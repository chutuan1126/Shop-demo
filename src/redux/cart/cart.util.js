export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    else
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const minusQuantityItem = (cartItems, cartItemToMinus) => {
    return cartItems.map(cartItem => {
        if (cartItem.quantity > 0 && cartItem.id === cartItemToMinus.id)
            return { ...cartItem, quantity: cartItem.quantity - 1 }
        else return { ...cartItem };
    });
};
