const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Customer_Id: {
    type: String,
    required: true,
  },
  Customer_Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    unique: true,
  },
});

const userCreateCustomer = mongoose.model("createCustomer", userSchema);

module.exports = userCreateCustomer;
