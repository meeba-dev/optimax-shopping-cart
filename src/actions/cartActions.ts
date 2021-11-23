import { AppState } from './../store';
import { Dispatch } from "redux";
import { CartAction } from "../types/actionCreatorsTypes";
import { ADD_TO_CART, REMOVE_FROM_CART, ADD_ONE_TO_CART, REMOVE_ONE_FROM_CART } from "../types/actionTypes";
import { ProductType } from "../types/elementTypes";


/**
 * Adding choosen product to the shopping cart
 * - dispatching the action to the state hub
 * - setting new cartItems object to a localStorage
 * @param product is product's object with all data
 * @returns void
 */
export const addToCart = (product : ProductType) => (dispatch : Dispatch<CartAction>, getState : () => AppState): void => {
    const cartItems = getState().cart.cartItems.slice();
    let alreadyExists = false;
    cartItems.forEach((item : ProductType) => {
        if (item._id === product._id) {
            alreadyExists = true;
            item.count++;
        }
    });
    if (!alreadyExists) {
        cartItems.unshift({...product, count: 1});
    }
    dispatch({
        type: ADD_TO_CART,
        payload: { cartItems }
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

/**
 * Incrementing product's quantity in the shopping cart
 * - dispatching the action to the state hub
 * - setting new cartItems object to a localStorage
 * @param product is product's object with all data
 * @returns void
 */
export const addOneToCart = (product : ProductType) => (dispatch : Dispatch<CartAction>, getState : () => AppState): void => {
    const cartItems = getState().cart.cartItems.slice();
    cartItems.forEach((item : ProductType) => {
        if (item._id === product._id) {
            item.count++;
        }
    });
    dispatch({
        type: ADD_ONE_TO_CART,
        payload: { cartItems }
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

/**
 * Searching a product by his id and removing it after that
 * - dispatching the action to the state hub
 * - setting new cartItems object to a localStorage
 * @param product is product's object with all data
 * @returns void
 */
export const removeFromCart = (product : ProductType) => (dispatch : Dispatch<CartAction>, getState : () => AppState): void => {
    const cartItems = getState().cart.cartItems.slice().filter((x : ProductType) => x._id !== product._id);
    dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

/**
 * Decrementing product's quantity in the shopping cart
 * - dispatching the action to the state hub
 * - setting new cartItems object to a localStorage
 * @param product is product's object with all data
 * @returns void
 */
export const removeOneFromCart = (product : ProductType) => (dispatch : Dispatch<CartAction>, getState : () => AppState): void => {
    let cartItems = getState().cart.cartItems.slice();
    cartItems.forEach((item : ProductType) => {
        if (item._id === product._id) {
          item.count--;
          if (item.count === 0) {
            cartItems = cartItems.filter( (x : ProductType) => x._id !== product._id);
          }
        }
      });
    dispatch({ 
        type: REMOVE_ONE_FROM_CART, 
        payload: { cartItems } 
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}