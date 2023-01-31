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
   
})

const userInventory = mongoose.model("inventory", userSchema);

module.exports = userInventory;