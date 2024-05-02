const express = require("express");
const app = express();
const authRoute = require("./router/auth-router")
const PORT = 5500;
require("dotenv").config();
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./router/contact-router")

// Middlewares
app.use(express.json());
app.use("/api/auth",authRoute); //if url== localhost:5500/api/auth got to authRoute
app.use("/api/form",contactRoute); //if url== localhost:5500/api/form got to contactRoute
app.use(errorMiddleware);

// routes/urls
app.get("/",(req,res)=>{
    res.status(200).send("welcome");
});

//connection
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log("server running on",PORT);
    })
});

