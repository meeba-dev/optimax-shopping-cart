const express = require("express");
const shortid = require("shortid");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/optimax-shopping-cart-db", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const Product = mongoose.model(
    "product", 
    new mongoose.Schema({
        _id: { type: String, default: shortid.generate },
        title: String,
        description: String,
        image: String,
        price: Number
    })
);

app.get("/api/products", async (req, res) => {
    const product = await Product.find({});
    res.send(product);
});

app.post("/api/products", async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
});

app.delete("/api/products/:id", async(req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
});

const Order = mongoose.model(
    "order",
    new mongoose.Schema({
        _id: { type: String, default: shortid.generate },
        email: String,
        name: String,
        address: String,
        total: Number,
        cartItems: [
            {
                _id: String,
                title: String,
                price: Number,
                count: Number
            }
        ]
    },
    {
          timestamps: true
    })
);

app.get("/api/orders", async (req, res) => {
    const order = await Order.find({});
    res.send(order);
});

app.post("/api/orders", async(req, res) => {
    if (!req.body.name || 
        !req.body.email || 
        !req.body.address || 
        !req.body.total || 
        !req.body.cartItems) {
            res.send({ message: "Data is required." })
    }
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.send(savedOrder);
});

app.delete("/api/orders/:id", async(req, res) => {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    res.send(deletedOrder);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server is running..."));