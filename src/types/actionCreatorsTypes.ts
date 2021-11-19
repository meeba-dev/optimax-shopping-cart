import { ADD_ONE_TO_CART, ADD_TO_CART, CLEAR_ORDER, CREATE_ORDER, FETCH_PRODUCTS, REMOVE_FROM_CART, REMOVE_ONE_FROM_CART, CLEAR_CART } from "./actionTypes";
import { OrderType, ProductType, CartItemsType } from "./elementTypes";


interface ActionAdd {
    type: typeof ADD_TO_CART,
    payload: CartItemsType
}

interface ActionAddOne {
    type: typeof ADD_ONE_TO_CART,
    payload: CartItemsType
}

interface ActionRemove {
    type: typeof REMOVE_FROM_CART,
    payload: CartItemsType
}

interface ActionRemoveOne {
    type: typeof REMOVE_ONE_FROM_CART,
    payload: CartItemsType
}

interface ActionCreateOrder {
    type: typeof CREATE_ORDER,
    payload: OrderType
}

interface ActionClearOrder {
    type: typeof CLEAR_ORDER
}

interface ActionClearCart {
    type: typeof CLEAR_CART
}

interface ProductAction {
    type: typeof FETCH_PRODUCTS,
    payload: ProductType[]
}

type CartAction = ActionAdd | ActionAddOne | ActionRemove | ActionRemoveOne;

type OrderAction = ActionCreateOrder | ActionClearOrder | ActionClearCart;

export type {ProductAction, CartAction, OrderAction};