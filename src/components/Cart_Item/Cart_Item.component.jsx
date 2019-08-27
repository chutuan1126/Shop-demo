import React from 'react';
import './cart-item.styles.css';

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt="name"/>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x {price}$</span>
        </div>
    </div>
)

export default CartItem;