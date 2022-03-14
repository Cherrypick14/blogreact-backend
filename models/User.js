const{Schema, model} = require("mongoose")


const UserSchema = new Schema({
        username:{
              type: String,
              unique : true,
              required:[true, "username cannot be empty"]
        },

        email: {
             type: String,
             unique: true,
             required :[true,"Email cannot be empty" ]
        },
        password:{
              type: String,
              required: true,
              minlength : 8,

        },
        profilePic:{
             type: String,
             default:""
        },
       


}, {timestamps:true})

module.exports = model("User", UserSchema);