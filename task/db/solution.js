const mongoose=require('mongoose')

 const solution=mongoose.Schema({
    email:String,
    pid:Number,
    code:String,
    input:String,
    output:String,
    totalflag:Number,
})


module.exports =mongoose.model("solution",solution);