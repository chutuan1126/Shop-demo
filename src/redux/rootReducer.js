import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer
});

export default rootReducer;