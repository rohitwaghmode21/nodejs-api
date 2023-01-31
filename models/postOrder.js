const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Inventry_ID : {
        type : String,
        required : true
    },
    Inventry_Type : {
        type : String,
        required : true
    },
    Item_Name : {
        type : String,
        required : true
    },
    Avilable_Quantity : {
        type : Number,
        required : true
    },
    Customer_Id : {
        type : String,
        required : true
    },
    Customer_Name : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        unique : true
    },
    Quantity : {
        type : Number,
        required : true
    }
})

const userModel = mongoose.model("orders", userSchema);

module.exports = userModel;