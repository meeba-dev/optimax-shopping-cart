import { Dispatch } from "react";
import { OrderAction } from "../types/actionCreatorsTypes";
import { CLEAR_CART, CLEAR_ORDER, CREATE_ORDER } from "../types/actionTypes";
import { OrderType } from "../types/elementTypes";

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

export const testCreateOrder = (order : OrderType) => (dispatch : Dispatch<OrderAction>) => {
    dispatch({
        type: CREATE_ORDER,
        payload: order
    });
};

export const clearOrder = () => (dispatch : Dispatch<OrderAction>) => {
    dispatch({
        type: CLEAR_ORDER
    });
};