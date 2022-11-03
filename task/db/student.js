const mongoose=require('mongoose')
const problem=require('./problem')

const student =mongoose.Schema({
    name:String,
    college:String,
    email:String,
    otp:Number,
    problemIds:{
     type:[mongoose.SchemaTypes.ObjectId],
     ref:"problem"
     
   },
    islogin:{
        type:Boolean,
        default:false
    },
    totalflag:{
        type:Boolean,
        default:false
    },
    isagreed:{
        type:Boolean,
        default:false
    },
    isFinished:{
        type:Boolean,
        default:false
    },
 
 })
 
 
 
 student.statics.findByEmail=function(email)
 {
      
     return this.find({email: new RegExp(email,"i")});
 }
 
 
 module.exports=mongoose.model("student",student);