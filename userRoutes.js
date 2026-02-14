const router = require("express").Router();
const User = require("../models/User");

router.post("/login", async(req,res)=>{
    const user = await User.findOne(req.body);
    if(user) res.json({msg:"Login Success"});
    else res.json({msg:"Invalid"});
});

module.exports = router;
