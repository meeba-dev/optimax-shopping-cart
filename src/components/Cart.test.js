import React from "react";
import Cart from "./Cart";
import store from "../store";
import { shallow } from "enzyme";


describe("Cart component testing", () => {
     const wrapper = shallow(<Cart store={store}/>);
     it('should find Cart component', () => {
          expect(wrapper.find(Cart)).toBeTruthy();
     });
     it('should find name in Cart component', () => {
          expect(wrapper.find(Cart)).toHaveProperty('name');
     });
});