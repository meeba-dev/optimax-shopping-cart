import { ProductAction } from '../types/actionCreatorsTypes';
import { FETCH_PRODUCTS } from '../types/actionTypes';
import { ProductState } from '../types/stateTypes';

const initialState = {} as ProductState;

/**
 * Fetching products. Making substitute of old state with new one.
 * @param state is the old state of products
 * @param action is the initialized action 
 * @returns new state
 */
export const productsReducer = (state = initialState, action : ProductAction) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { items: action.payload };
        default:
            return state;
    }
};