import Products from './Products';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { ProductState } from '../types/stateTypes';
import thunk from 'redux-thunk';
import configureMockStore, { MockStore } from 'redux-mock-store';

describe('Products component', () => {

    const initialState : ProductState = { products: 
        {
            items: [
                {
                    "_id": "glasses6",
                    "title": "RB2201V",
                    "image": "/images/RB2201V.png",
                    "description": "about glasses 6",
                    "price": 177,
                    "count": 3
                },
                {
                    "_id": "glasses7",
                    "title": "RX5398",
                    "image": "/images/RX5398.png",
                    "description": "about glasses 7",
                    "price": 187,
                    "count": 1
                },
                {
                    "_id": "glasses8",
                    "title": "RB7046",
                    "image": "/images/RB7046.png",
                    "description": "about glasses 8",
                    "price": 153,
                    "count": 5
                }
            ]
        } 
    };

    let store : MockStore;

    beforeEach(() => {
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);
        store = mockStore(initialState);
        render(<Provider store={store}><Products /></Provider>)
    });

    it('should find all products in Products component', () => {
        expect(screen.getAllByRole('listitem')).toHaveLength(3);
    });
    
});