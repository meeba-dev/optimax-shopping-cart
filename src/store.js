import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { orderReducer } from './reducers/orderReducers';

const initialState = {};

const store = createStore(
    combineReducers({ 
        products: productsReducer,
        cart: cartReducer,
        order: orderReducer
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;