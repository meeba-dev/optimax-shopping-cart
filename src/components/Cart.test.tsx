import React from "react";
import Cart from "./Cart";
import store from "../store";
import { shallow } from "enzyme";
import { Provider } from "react-redux";


describe("Cart component testing", () => {
     
     const wrapper = shallow(<Provider store={store}><Cart /></Provider>);
     it('should find Cart component', () => {
          expect(wrapper.find(Cart)).toBeTruthy();
     });
     it('should find name in Cart component', () => {
          expect(wrapper.find(Cart)).toHaveProperty('name');
     });
});