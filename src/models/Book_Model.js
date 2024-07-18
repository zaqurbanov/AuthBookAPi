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
}
},{timestamps:true})

module.exports = mongoose.model("Book",Book_Model)