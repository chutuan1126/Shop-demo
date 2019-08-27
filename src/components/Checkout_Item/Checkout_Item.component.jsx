import React from 'react';
import './checkout-item.styles.css';
import Plus from '../../assets/images/next.svg';
import Minus from '../../assets/images/back.svg';
import Remove from '../../assets/images/remove.svg';
import { connect } from 'react-redux';
import { RemoveItemId, addItemToCart, minusQuantityItem } from '../../redux/cart/cart.action';

const CheckoutItem = ({ cartItem, removeItem, plusQuantity, minusQuantity }) => (
    <div className='checkout-item' key={cartItem.id}>
        <div className='checkout-block'>
            <img src={cartItem.imageUrl} width={40} height={64} alt={cartItem.name} />
        </div>
        <div className='checkout-block'>
            <span>{cartItem.name}</span>
        </div>
        <div className='checkout-block'>
            <div className='checkout-block-image' onClick={() => { minusQuantity(cartItem) }}>
                <img src={Minus} width={10} height={10} alt="-" />
            </div>
            <span style={{ padding: '0px 5px' }}>{cartItem.quantity}</span>
            <div className='checkout-block-image' onClick={() => { plusQuantity(cartItem) }}>
                <img src={Plus} width={10} height={10} alt="+" />
            </div>
        </div>
        <div className='checkout-block'>
            <span>{cartItem.price}$</span>
        </div>
        <div className='checkout-block remove'>
            <img src={Remove} onClick={() => removeItem(cartItem)} width={32} height={32} alt="Remove" />
        </div>
    </div>
)

const mapDispatchToProps = dispatch => {
    return {
        removeItem: item => dispatch(RemoveItemId(item)),
        plusQuantity: item => dispatch(addItemToCart(item)),
        minusQuantity: item => dispatch(minusQuantityItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CheckoutItem);