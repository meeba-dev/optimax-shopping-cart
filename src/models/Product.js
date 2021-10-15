var mongoose = require('mongoose');
const generateID = require("./src/utility/formaters");

var Schema = mongoose.Schema;
var ProductSchema = new Schema({
        _id: { type: String, default: generateID },
        title: String,
        description: String,
        image: String,
        price: Number
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;