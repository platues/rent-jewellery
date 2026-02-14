const router = require("express").Router();
const Jewellery = require("../models/Jewellery");

router.get("/", async(req,res)=>{
    const data = await Jewellery.find();
    res.json(data);
});

module.exports = router;
