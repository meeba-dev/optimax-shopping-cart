import { ADD_TO_CART } from "../types/actionTypes";
import { cartReducer } from "./cartReducers";
import { CartState } from "../types/stateTypes";
import { CartAction } from "../types/actionCreatorsTypes";
import { ProductType } from "../types/elementTypes";

describe('cart reducers', () => {
    
    const initialState : CartState = { cartItems: [] };
    
    it('should return the initial state', () => {
        expect(cartReducer(undefined, {} as CartAction)).toEqual(initialState);
    });

    it('should handle ADD_TO_CART', () => {
        const cartItems : ProductType[] = [
            {
                "_id": "GY54401995",
                "title": "RB4340",
                "image": "/images/RB4340.png",
                "description": "about glasses 13",
                "price": 186,
                "count": 1 
            }
        ];
        const action : CartAction = { type: ADD_TO_CART, payload: {cartItems} };
        const expectedState = { 
            cartItems: [
                {
                    "_id": "GY54401995",
                    "title": "RB4340",
                    "image": "/images/RB4340.png",
                    "description": "about glasses 13",
                    "price": 186,
                    "count": 1
                }
            ]
        };
        expect(cartReducer(initialState, action)).toEqual(expectedState);
    });
    
});