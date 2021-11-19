import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { orderReducer } from './reducers/orderReducers';


const initialState = {};

export const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer
});

const store  = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

type RootState = typeof rootReducer;
export type AppState = ReturnType<RootState>

export default store;