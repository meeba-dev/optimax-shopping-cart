import { CLEAR_ORDER, CREATE_ORDER } from "../types/actionTypes";
import { orderReducer } from "./orderReducers";

describe('order reducers', () => {

    it('should return the initial state / handle default case', () => {
        expect(orderReducer(undefined, {})).toEqual({});
    });
    it('should handle CREATE_ORDER', () => {
        const order = {
            cartItems: [
                {
                    "_id": "AM12721745",
                    "title": "RB2132",
                    "image": "/images/RB2132.png",
                    "description": "about glasses 11",
                    "price": 159,
                    "count": 5,
                    "total": 795
                }
            ]
        }
        const action = {
            type: CREATE_ORDER,
            payload: order
        }
        const expectedState = {
            order: {
                cartItems: [
                    {
                        "_id": "AM12721745",
                        "title": "RB2132",
                        "image": "/images/RB2132.png",
                        "description": "about glasses 11",
                        "price": 159,
                        "count": 5,
                        "total": 795
                    }
                ]
            }
        };
        expect(orderReducer(undefined, action)).toEqual(expectedState);
    });
    it('should handle CLEAR_ORDER', () => {
        const cartItems = [
            {
                "_id": "AM12721745",
                "title": "RB2132",
                "image": "/images/RB2132.png",
                "description": "about glasses 11",
                "price": 159,
                "count": 2
            },
            {
                "_id": "GY54401995",
                "title": "RB4340",
                "image": "/images/RB4340.png",
                "description": "about glasses 13",
                "price": 186,
                "count": 1
            }
        ];
        const order = {
            name: "John Doe",
            email: "johndoe@mail.com",
            cartItems: cartItems,
            total: cartItems.reduce((a, c) => a + c.price * c.count, 0),
            date: "2021-10-21T23:11:31.793Z"
        };
        const initialState = {
            order
        };
        const action = {
            type: CLEAR_ORDER,
            payload: null
        };
        const expectedState = { order: null };
        expect(orderReducer(initialState, action)).toEqual(expectedState);
    });
    
}); 