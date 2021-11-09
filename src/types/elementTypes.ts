type ProductType = {
    _id: string;
    title: string;
    image: string;
    description: string;
    price: number;
    count: number;
};

type OrderType = {
    _id: string;
    name: string;
    email: string;
    cartItems: ProductType[];
    total: number;
    date: string
};

type ProductsType = {
    products: {
        items: Array<ProductType>;
    } 
}

type CartItemsType = {
    cartItems: Array<ProductType>;
}

export type { ProductType, OrderType, ProductsType, CartItemsType };