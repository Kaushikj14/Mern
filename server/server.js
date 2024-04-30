const express = require("express");
const app = express();
const router = require("./router/auth-router")
const PORT = 5500;
require("dotenv").config();
const connectDb = require("./utils/db");

app.use(express.json());
app.use("/api/auth",router);

app.get("/",(req,res)=>{
    res.status(200).send("welcome");
});

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log("server running on",PORT);
    })
});

