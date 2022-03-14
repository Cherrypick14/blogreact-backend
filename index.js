const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./database/connect");

dotenv.config()

connectDB(process.env.MONGO_URL)
app.listen("5000", ()=>{
    console.log("backend is running");
})