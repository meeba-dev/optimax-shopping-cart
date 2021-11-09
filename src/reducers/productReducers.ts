import { ProductAction } from '../types/actionCreatorsTypes';
import { FETCH_PRODUCTS } from '../types/actionTypes';
import { ProductState } from '../types/stateTypes';

const initialState = {} as ProductState;

export const productsReducer = (state = initialState, action : ProductAction) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { items: action.payload };
        default:
            return state;
    }
};