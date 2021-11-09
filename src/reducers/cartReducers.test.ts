import { ADD_TO_CART } from "../types/actionTypes";
import { cartReducer } from "./cartReducers";


describe('cart reducers', () => {
    
    const initialState = { cartItems: [] };
    
    it('should return the initial state', () => {
        expect(cartReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle ADD_TO_CART', () => {
        const cartItems = [
            {
                "_id": "GY54401995",
                "title": "RB4340",
                "image": "/images/RB4340.png",
                "description": "about glasses 13",
                "price": 186
            }
        ];
        const action = { type: ADD_TO_CART, payload: {cartItems} };
        const expectedState = { 
            cartItems: [
                {
                    "_id": "GY54401995",
                    "title": "RB4340",
                    "image": "/images/RB4340.png",
                    "description": "about glasses 13",
                    "price": 186
                }
            ]
        };
        expect(cartReducer(initialState, action)).toEqual(expectedState);
    });
    
});