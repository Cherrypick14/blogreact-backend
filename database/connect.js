const mongoose= require("mongoose");

const connectDB =(url)=>{
    mongoose.connect(url).then(
        ()=>{
            console.log("db is connected");
        }
    ).catch((err)=>{
        console.log(err);
    })
}
module.exports = connectDB