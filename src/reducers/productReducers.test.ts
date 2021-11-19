import { ProductAction } from "../types/actionCreatorsTypes";
import { ProductState } from "../types/stateTypes";
import { productsReducer } from "./productReducers";

describe('product reducers', () => {

    const initialState : ProductState = {} as ProductState;

    it('should return the initial state / handle default case', () => {
        expect(productsReducer(undefined, {} as ProductAction)).toEqual({});
    });
});