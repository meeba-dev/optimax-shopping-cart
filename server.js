const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const format = require("./src/utility/formaters");
const config = require('./src/config.json');

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
    mongoose.connect(config.DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}).then(() => console.log('MongoDB is connected by local machine'))
	  .catch((err) => console.log(err));
}

const Product = mongoose.model(
    "product", 
    new mongoose.Schema({
        _id: { type: String, default: format.generateID },
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
        _id: { type: String, default: format.generateID },
        email: String,
        name: String,
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