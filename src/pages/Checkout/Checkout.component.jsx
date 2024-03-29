import React from 'react';
import './checkout.styles.css';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartItemsTotal, selectCartItems } from '../../redux/cart/cart.selector';

import CheckoutItem from '../../components/Checkout_Item/Checkout_Item.component';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        }
        <div className='total'>
            <span>TOTAL: {total}$</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
})

export default connect(mapStateToProps)(CheckoutPage);