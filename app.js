const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();



app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}))



main().catch((err) => console.log(err))

async function main() {
    await mongoose.connect("mongodb+srv://nitwrohit12345:Rohit12345@cluster0.mjzehea.mongodb.net/assignment?retryWrites=true&w=majority");
    console.log("Sucessful database connection...")
}

const PostOrder = require("./routes/postOrder")
const createCustomer = require("./routes/createCustomer")
const CreateOrders = require("./routes/orders")
const createInventory = require("./routes/inventory")

app.use("/api/v1", PostOrder)
app.use("/api/v1", createCustomer)
app.use("api/v1", CreateOrders)
app.use("/api/v1", createInventory)


app.listen(3005, () => {
    console.log("Server started at 5000 port..")
})