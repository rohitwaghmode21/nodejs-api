const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Customer_Id : {
        type : String,
        required : true
    },
    Inventry_ID : {
        type : String,
        required : true
    },
    Item_Name : {
        type : String,
        required : true
    },
    Quantity : {
        type : Number,
        required : true
    }
})

const userCreateOrder = mongoose.model("createOrder", userSchema);

module.exports = userCreateOrder;