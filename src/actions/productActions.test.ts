import { fetchProducts } from './productActions';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { FETCH_PRODUCTS } from '../types/actionTypes';


describe("product actions testing", () => {
    
    let initialState = {};
    type State = typeof initialState;
    const middlewares = [thunk];
    const mockStore = configureStore<State, ThunkDispatch<State, any, AnyAction>>(middlewares);
    let store = mockStore(initialState);

    it('should handle FETCH_PRODUCTS', () => {
        
        const action = fetchProducts();
        const expectedActions = [
            {
                type: FETCH_PRODUCTS
            }
        ];
        expect(action.type).toEqual(expectedActions.type);
    });
    

});