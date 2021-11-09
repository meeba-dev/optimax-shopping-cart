import React from 'react';
import Products from './Products';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'

describe('Products component', () => {

    const initialState = { 
        cartItems: [
            {
                "_id": "AM12721745",
                "title": "RB2132",
                "image": "/images/RB2132.png",
                "description": "about glasses 11",
                "price": 159
            },
            {
                "_id": "GY54401995",
                "title": "RB4340",
                "image": "/images/RB4340.png",
                "description": "about glasses 13",
                "price": 186
            }
        ] 
    };
    const mockStore = configureStore();
    let component;
    let store;

    beforeEach(() => {
        store = mockStore(initialState);
        component = shallow(<Products store={store}/>);
    });

    it('should render Products component', () => {
        expect(component.length).toEqual(1);
    });
    
});