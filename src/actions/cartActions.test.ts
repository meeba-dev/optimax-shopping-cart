import { ADD_TO_CART } from './../types/actionTypes';
import { addToCart } from './cartActions';
import { AnyAction } from 'redux';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from "redux-thunk";
import { ProductType } from '../types/elementTypes';
import { CartAction } from '../types/actionCreatorsTypes';
import fetchMock from "jest-fetch-mock";


describe('cart actions testing', () => {
    let initialState = {};
    type State = typeof initialState;
    const middlewares = [thunk];
    const mockStore = configureStore<State, ThunkDispatch<State, any, CartAction>>(middlewares);
    let store = mockStore(initialState);

    it('should handle ADD_TO_CART', () => {
        const product : ProductType = {
            _id: "glasses8",
            title: "RB7046",
            image: "/images/RB7046.png",
            description: "about glasses 8",
            price: 153,
            count: 1
        };
        const action = addToCart(product);
        const expectedAction = [
            {
                type: ADD_TO_CART,
                payload: { 
                    cartItems: [
                        {
                            _id: "glasses8",
                            title: "RB7046",
                            image: "/images/RB7046.png",
                            description: "about glasses 8",
                            price: 153,
                            count: 1
                        }
                    ]
                }
            }
        ];
        expect(action.type).toEqual(expectedAction.type);
        expect(action.payload).toEqual(expectedAction.payload);
    });
});