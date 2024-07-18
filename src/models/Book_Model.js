const mongoose = require('mongoose');


const Book_Model = new mongoose.Schema({

title:{
    type:String,
    required:true,
    unique:true,
},
author:{
    type:String,
    required:true,
},
deletedId:{
    type:String,
    default:0

}
},{timestamps:true})

module.exports = mongoose.model("Book",Book_Model)