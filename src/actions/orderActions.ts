import { Dispatch } from "react";
import { OrderAction } from "../types/actionCreatorsTypes";
import { CLEAR_CART, CLEAR_ORDER, CREATE_ORDER } from "../types/actionTypes";
import { OrderType } from "../types/elementTypes";

/**
 * Creating the order and cleaning the shopping cart
 * - dispatching the action to the state hub
 * @param order is order's object with all data
 * @returns void
 */
export const createOrder = (order : OrderType) => (dispatch : Dispatch<OrderAction>) => {
    fetch("/api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    }).then((res) => res.json()).then((data) => {
        dispatch({
            type: CREATE_ORDER,
            payload: data
        });
        localStorage.clear();
        dispatch({
            type: CLEAR_CART
        });
    });
};

/**
 * Removing data of order in state hub
 * - dispatching the action to the state hub
 * @returns void
 */
export const clearOrder = () => (dispatch : Dispatch<OrderAction>) => {
    dispatch({
        type: CLEAR_ORDER
    });
};