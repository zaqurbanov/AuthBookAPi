const mongoose = require('mongoose');


const User_Model = new mongoose.Schema({

username:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
}
},{timestamps:true})

module.exports = mongoose.model("User",User_Model)