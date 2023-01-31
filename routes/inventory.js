const express = require("express");
const router = express.Router();
const Inventory = require("../models/inventory")

// create order
router.post("/createOrders", async(req, res) => {
    try{
        const orders = await Inventory.create({
            Inventry_ID : req.params.Inventry_ID,
            Inventry_Type : req.params.Inventry_Type,
            Item_Name : req.params.Item_Name,
            Avilable_Quantity : req.params.Avilable_Quantity
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
        const orders = await Inventory.find()
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