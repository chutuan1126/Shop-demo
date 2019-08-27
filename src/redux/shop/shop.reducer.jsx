import { shopActiontype } from './shop.type';

const shopInitialState = null
const shopReducer = (state = shopInitialState, action) => {
    switch (action.type) {
        case shopActiontype.GET_COLLETION_IN_DATABSE:
            return action.createCollection
        default:
            return state
    }
}

export default shopReducer;