const mongoose = require('mongoose')


const problem = mongoose.Schema({
    
     title: String,
     link:String,
     mark:Number

})
module.exports = mongoose.model("problem", problem)