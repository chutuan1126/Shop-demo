import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.action';
import './collection-item.styles.css';
import CustomButton from '../Custom_Button/Custom_Button.component';

const CollectionItem = ({ item, addItem }) => {
    const { name, imageUrl, price } = item;
    return (
        <div className='collection-item'>
            <div className='image'>
                <img src={imageUrl} alt={name} />
            </div>
            <div className='collection-footer'>
                <span className='title'>{name}</span>
                <span className='price'>{price}$</span>
            </div>
            <CustomButton inverted onClick={() => { addItem(item) }} >Add To Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);