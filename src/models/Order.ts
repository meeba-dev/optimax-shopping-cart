import { Schema, model } from "mongoose";
import { generateID } from '../utility/formaters';

interface OrderModel {
    _id: string;
    email: string;
    name: string;
    cartItems: [
        {
            _id: string;
            title: string;
            price: number;
            count: number;
        }
    ]
}

const OrderSchema = new Schema<OrderModel>({
        _id: { type: String, default: generateID },
        email: String,
        name: String,
        cartItems: [
            {
                _id: String,
                title: String,
                price: Number,
                count: Number
            }
        ],
        total: Number,
        date : { type : Date, default: Date.now }
    },
    {
          timestamps: false,
          versionKey: false
    }
);

const Order = model<OrderModel>('Order', OrderSchema);

export default Order;