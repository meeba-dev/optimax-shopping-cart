import { CartAction } from "../types/actionCreatorsTypes";
import { ADD_TO_CART, ADD_ONE_TO_CART, REMOVE_FROM_CART, REMOVE_ONE_FROM_CART } from "../types/actionTypes";
import { CartState } from "../types/stateTypes";


const initialState = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") };

export const cartReducer = (state : CartState = initialState, action: CartAction) : CartState => {
        switch (action.type) {
            case ADD_TO_CART:
                return { cartItems: action.payload.cartItems };
            case ADD_ONE_TO_CART:
                return { cartItems: action.payload.cartItems };
            case REMOVE_FROM_CART:
                return { cartItems: action.payload.cartItems };
            case REMOVE_ONE_FROM_CART:
                return { cartItems: action.payload.cartItems };
            default:
                return state;
        }
};