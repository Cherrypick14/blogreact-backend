const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./database/connect");
const PORT = process.env.PORT|| 5000;
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
dotenv.config()

 //middlewares
 app.use(express.json());

 app.use(express.urlencoded({extended:true}))
//routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

connectDB(process.env.MONGO_URL);
app.listen(PORT , ()=>{
    console.log(`server is listening at ${PORT}`);
})