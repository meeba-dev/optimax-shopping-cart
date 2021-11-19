import { OrderAction } from "../types/actionCreatorsTypes";
import { CLEAR_ORDER, CREATE_ORDER } from "../types/actionTypes";
import { OrderType, ProductType } from "../types/elementTypes";
import { OrderState } from "../types/stateTypes";
import { orderReducer } from "./orderReducers";

describe('order reducers', () => {

    const initialState : OrderState = {} as OrderState

    it('should return the initial state / handle default case', () => {
        expect(orderReducer(undefined, {} as OrderAction)).toEqual({});
    });
    it('should handle CREATE_ORDER', () => {
        const order : OrderType = {
            _id: "QZ5544321",
            name: "John Doe",
            email: "joedoe@mail.com",
            cartItems: [
                {
                    "_id": "AM12721745",
                    "title": "RB2132",
                    "image": "/images/RB2132.png",
                    "description": "about glasses 11",
                    "price": 159,
                    "count": 5
                }
            ],
            total: 999,
            date: "2021-11-11T19:40:38.000Z"
        }
        const action : OrderAction = {
            type: CREATE_ORDER,
            payload: order
        }
        const expectedState = {
            order: {
                _id: "QZ5544321",
                name: "John Doe",
                email: "joedoe@mail.com",
                cartItems: [
                    {
                        "_id": "AM12721745",
                        "title": "RB2132",
                        "image": "/images/RB2132.png",
                        "description": "about glasses 11",
                        "price": 159,
                        "count": 5
                    }
                ],
                total: 999,
                date: "2021-11-11T19:40:38.000Z"
            }
        };
        expect(orderReducer(initialState, action)).toEqual(expectedState);
    });
    it('should handle CLEAR_ORDER', () => {
        const cartItems : ProductType[] = [
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
        const order : OrderType = {
            _id: "A8891O17Z",
            name: "John Doe",
            email: "johndoe@mail.com",
            cartItems: cartItems,
            total: cartItems.reduce((a, c) => a + c.price * c.count, 0),
            date: "2021-10-21T23:11:31.793Z"
        };
        const initialState : OrderState = {
            order: order
        };
        const action : OrderAction = {
            type: CLEAR_ORDER
        };
        const expectedState : OrderState = { order: null };
        expect(orderReducer(initialState, action)).toEqual(expectedState);
    });
    
}); 