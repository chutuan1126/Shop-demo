import React from 'react';
import './cart-icon.styles.css';
import { connect } from 'react-redux';
import { toggleHidden } from '../../redux/cart/cart.action';
import { ReactComponent as ShopCartIcon } from '../../assets/images/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

const CartIcon = ({ toggleHidden, quantity }) => {
    return (
        <div className='cart-icon' onClick={() => toggleHidden()}>
            <ShopCartIcon className='shopping-icon' />
            <span className='item-count'>{quantity}</span>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        quantity: selectCartItemsCount(state)
    }
}

const mapDispatchToProps = dispatch => ({
    toggleHidden: () => dispatch(toggleHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);