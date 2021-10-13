import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ONE_FROM_CART } from "../types";

export const addToCart = (product) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();
    let alreadyExists = false;
    cartItems.forEach((item) => {
        if (item._id === product._id) {
            alreadyExists = true;
            item.count++;
        }
    });
    if (!alreadyExists) {
        cartItems.push({...product, count: 1});
    }
    dispatch({
        type: ADD_TO_CART,
        payload: { cartItems }
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice().filter((x) => x._id !== product._id);
    dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const takeFromCart = (product) => (dispatch, getState) => {
    let cartItems = getState().cart.cartItems.slice();
    cartItems.forEach((item) => {
        if (item._id === product._id) {
          item.count--;
          if (item.count === 0) {
            cartItems = cartItems.filter( (x) => x._id !== product._id);
          }
        }
      });
    dispatch({ 
        type: REMOVE_ONE_FROM_CART, 
        payload: { cartItems } 
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}