import configureStore, { MockStore } from 'redux-mock-store';
import { CLEAR_ORDER, CREATE_ORDER } from '../types/actionTypes';
import { clearOrder, createOrder } from './orderActions';
import { OrderAction } from '../types/actionCreatorsTypes';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { OrderType } from '../types/elementTypes';
import store from '../store';
import createMockStore from 'redux-mock-store';

describe('order actions testing', () => {

    let initialState = {};
    type State = typeof initialState;
    const middlewares = [thunk];
    const mockStore = configureStore<State, ThunkDispatch<State, any, OrderAction>>(middlewares);
    let store = mockStore(initialState);

    afterEach(() => {
        store.clearActions();
    });

    it('should handle CLEAR_ORDER', () => {
        store.dispatch(clearOrder());
        const action = store.getActions();
        const expectedAction = [
            {
                type: CLEAR_ORDER
            }
        ];
        expect(action).toEqual(expectedAction);
    });
    it('should handle CREATE_ORDER', () => {
        const order : OrderType = {
            _id: "QZ5544321",
            name: "Bob Hope",
            email: "bobhope@gmail.com",
            cartItems: [
                {
                    _id: "PF93785350",
                    title: "RB4165",
                    image: "",
                    description: "",
                    price: 228,
                    count: 2
                }
            ],
            total: 456,
            date: "2021-11-11T19:40:38.000+00:00"
        }
        store.dispatch(createOrder(order));
        const action = store.getActions();
        const expectedAction = [
            {
                type: CREATE_ORDER,
                payload: order
            }
        ];
        expect(action.type).toEqual(expectedAction.type);
        expect(action.payload).toEqual(expectedAction.payload);
    });
});