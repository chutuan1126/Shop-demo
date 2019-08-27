import { shopActiontype } from './shop.type';

export const createCollection = collections => ({
    type: shopActiontype.GET_COLLETION_IN_DATABSE,
    createCollection: collections
})