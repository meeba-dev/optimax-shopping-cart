import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { orderReducer } from './reducers/orderReducers';


const initialState = {};


/**
 * rootReducer is a element of application. It combines all reducers.
 */
export const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer
});

/**
 * Store is a redux store hub. Here you can find all states of application.
 */
const store  = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

type RootState = typeof rootReducer;
export type AppState = ReturnType<RootState>

export default store;