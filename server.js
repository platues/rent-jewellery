const express = require("express");
const cors = require("cors");
require("./db");

const jewelleryRoutes = require("./routes/jewelleryRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/jewellery", jewelleryRoutes);
app.use("/api/user", userRoutes);
app.use("/api/order", orderRoutes);

app.listen(5000, ()=>console.log("Server running"));
