import { Dispatch } from "redux";
import { ProductAction } from "../types/actionCreatorsTypes";
import { FETCH_PRODUCTS } from "../types/actionTypes";

/**
 * Fetching the products from data base
 * - dispatching the action to the state hub
 * @returns void
 */
export const fetchProducts = () => async (dispatch : Dispatch<ProductAction>) => {
    const res = await fetch("/api/products");
    const data = await res.json();
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data
    });
};