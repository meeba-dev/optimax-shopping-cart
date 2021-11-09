import { OrderType, ProductType } from "./elementTypes"

type CartState = {
    cartItems: Array<ProductType>;
}

type OrderState = {
    order: OrderType;
}

type ProductState = {
    products: {
        items: Array<ProductType>;
    } 
}

type ProductsState = {
    items: Array<ProductType>;
}

export type { CartState, OrderState, ProductState, ProductsState }