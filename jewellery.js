const mongoose = require("mongoose");

const JewellerySchema = new mongoose.Schema({
    name: String,
    category: String,
    rent: Number,
    deposit: Number,
    image: String
});

module.exports = mongoose.model("Jewellery", JewellerySchema);
