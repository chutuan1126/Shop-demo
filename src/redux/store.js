import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from './rootReducer';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [logger];

export let store = createStore(persistedReducer, applyMiddleware(...middlewares));
export let persistor = persistStore(store);