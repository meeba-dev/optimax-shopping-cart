import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import API from "./src/constants.json";

import Product from "./src/models/Product";
import Order from "./src/models/Order";

const app = express();
app.use(bodyParser.json());

app.use("/", express.static(__dirname + "/build"));
app.get("/", (req, res) => res.sendFile(__dirname + "/build/index.html"));

if (process.env.DB_URL) {
    mongoose.connect(process.env.DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}).then(() => console.log('MongoDB is connected by heroku server'))
	  .catch((err) => console.log(err));
} else {
    mongoose.connect(API.DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}).then(() => console.log('MongoDB is connected by local machine'))
	  .catch((err) => console.log(err));
}

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

app.get("/api/orders", async (req, res) => {
    const order = await Order.find({});
    res.send(order);
});

app.post("/api/orders", async(req, res) => {
    if (!req.body.name || 
        !req.body.email || 
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