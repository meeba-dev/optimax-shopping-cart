import { CLEAR_ORDER, CREATE_ORDER } from '../types';
import { clearOrder, createOrder } from './orderActions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('order actions testing', () => {
    
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const store = mockStore();  
    
    beforeEach(() => {
        store.clearActions();
    });

    it('should handle CLEAR_ORDER', () => {
        const expectedActions = [
            {
                type: CLEAR_ORDER
            }
        ];
        store.dispatch(clearOrder());
        expect(store.getActions()).toEqual(expectedActions);
    });
});