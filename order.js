const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    jewelleryId: String,
    startDate: String,
    endDate: String,
    totalRent: Number
});

module.exports = mongoose.model("Order", OrderSchema);
