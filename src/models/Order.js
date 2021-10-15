var mongoose = require('mongoose');
const generateID = require("./src/utility/formaters");

var Schema = mongoose.Schema;
var OrderSchema = new Schema({
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
        total: Number
    },
    {
          timestamps: true,
          versionKey: false
    }
);

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;