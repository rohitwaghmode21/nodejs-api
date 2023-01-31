const express = require("express");
const router = express.Router();
const User = require("../models/postOrder");

// get specific inventory request
router.get("/inventory/:Inventry_Type", async(req, res) => {
    try{
        const orders = await User.findOne({Inventry_Type : req.params.Inventry_Type})
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

// put request
router.put("/:id", async(req, res) => {
    try{
        const updatedOrders = await User.findOneAndUpdate({_id : req.params.id}, req.body)


        res.status(200).json({
            status : "Sucess",
            message : "Updated successfully",
            updatedOrders
        })

    }catch(e){
        res.status(400).json({
            staus : "Failed",
            message : e.message
        })
    }
})

// Avialabele quantity is out of stock or not
router.get("/inventory/:Item_Name", async(req, res) => {
    try{

        const orders = await User.find({Item_Name : req.params.Item_Name});
        console.log(OrderCount);

        if(OrderCount === 0){
            return res.status(200).json({
                staus : "Sucess",
                message : "Order count is zero"
            })
        }
        res.status(200).json({
            status : "Sucess",
            message : "Given items are present",
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