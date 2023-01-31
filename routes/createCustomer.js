const express = require("express");
const router = express.Router();
const CreateCustomer = require("../models/createCustomer")

// create Customer
router.post("/createOrders", async(req, res) => {
    try{
        const orders = await CreateCustomer.create({
            Customer_Id : req.params.Customer_Id,
            Customer_Name : req.params.Customer_Name,
            Email : req.params.Email
        })
        res.status(200).json({
            status : "Success",
            message : "Order created",
            orders
        })
    }catch(e){
        res.status(400).json({
            status : "Failed",
            message : e.message
        })
    }
})

// get customer
router.get("/orders", async(req, res) => {
    try{
        const orders = await CreateCustomer.find()
        res.status(200).json({
            status : "Sucess",
            orders
        })

    }catch(e){
        res.status(400).json({
            staus : "Failed",
            message : e.message
        })
    }
})


module.exports = router;