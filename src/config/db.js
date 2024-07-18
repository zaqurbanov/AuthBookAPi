const mongoose = require('mongoose');

class Mongo{

    constructor(){
        this.db = null
    }

static connect = async(path)=>{


    try {
console.log("Connecting");
        mongoose.connect(path);
        console.log("Connected");
    } catch (error) {
        console.log(error.message);
    }

}
}

module.exports = Mongo