import { OrderAction } from "../types/actionCreatorsTypes";
import { CLEAR_ORDER, CREATE_ORDER } from "../types/actionTypes";
import { OrderState } from "../types/stateTypes";

const initialState = {} as OrderState;

export const orderReducer = (state = initialState, action : OrderAction): OrderState => {
    switch (action.type) {
        case CREATE_ORDER:
            return { order: action.payload };
        case CLEAR_ORDER:
            return { order: null };
        default:
            return state;
    }
};