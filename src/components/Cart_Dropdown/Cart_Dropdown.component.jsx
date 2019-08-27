import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './cart-dropdown.styles.css';
import CustomButton from '../Custom_Button/Custom_Button.component';
import CartItem from '../Cart_Item/Cart_Item.component';
import { toggleHidden } from '../../redux/cart/cart.action';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown' >
            <div className='cart-items'>
                {
                    cartItems.map((item) => <CartItem key={item.id} item={item} />)
                }
            </div>
            <CustomButton onClick={() => {
                dispatch(toggleHidden());
                history.push('/checkout/');
            }}>CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems
    }
}

export default withRouter(connect(mapStateToProps)(CartDropdown));