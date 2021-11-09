import { Schema, model } from "mongoose";
import { generateID } from '../utility/formaters';

interface ProductModel {
    _id: string;
    title: string;
    description: string;
    image: string;
    price: string;
    date: Date
};

const ProductSchema : Schema = new Schema({
        _id: { type: String, default: generateID },
        title: String,
        description: String,
        image: String,
        price: Number,
        date : { type : Date, default: Date.now }
    },
    {
        timestamps: false,
        versionKey: false
    }
);

const Product = model<ProductModel>('Product', ProductSchema);

export default Product;