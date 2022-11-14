const mongoose=require('mongoose');

const userschema=mongoose.Schema({
   name:String,
   companyName:String
})

module.exports=mongoose.model("employee",userschema);