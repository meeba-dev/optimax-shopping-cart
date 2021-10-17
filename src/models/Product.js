const mongoose = require('mongoose');
const format = require('../utility/formaters');

var Schema = mongoose.Schema;
var ProductSchema = new Schema({
        _id: { type: String, default: format.generateID },
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

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;