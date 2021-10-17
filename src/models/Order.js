const mongoose = require('mongoose');
const format = require('../utility/formaters');

var Schema = mongoose.Schema;
var OrderSchema = new Schema({
        _id: { type: String, default: format.generateID },
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

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;