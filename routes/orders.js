const express = require("express");
const router = express.Router();

const CreateOrder = require("../models/createOrder")


// create order
router.post("/createOrders", async(req, res) => {
    try{
        const orders = await CreateOrder.create({
            Customer_Id : req.params.Customer_Id,
            Inventry_ID : req.params.Inventry_ID,
            Item_Name : req.params.Item_Name,
            Quantity : req.params.Quantity
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

// get orders
router.get("/orders", async(req, res) => {
    try{
        const orders = await CreateOrder.find()
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