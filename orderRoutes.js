const router = require("express").Router();
const Order = require("../models/Order");

router.post("/book", async(req,res)=>{
    const order = new Order(req.body);
    await order.save();
    res.json({msg:"Booked"});
});

module.exports = router;
