const mongoose = require('mongoose')

const addressSChema = mongoose.Schema({
    street: String,
    city: String
})

const userSchema = mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 18,
        max: 89,
        //custom validation

        validate: {
            validator: v => v % 2 === 0,
            message: props => `${props.value} is not an even number`,
        },
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 5,
        maxLength: 30
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updateAt: {
        type: Date,
        default: () => Date.now(),
    },
    bestfriends: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"user",
    },
    hobbies: [String],
    address: addressSChema,
    // address:{
    //   street:String,
    //   city:String
    // }

})


userSchema.methods.getName= function(){
   
    let name =this.name;
    console.log(`hello my name is ${this.name}`)
    return name;
}

userSchema.statics.findByName=function(name)
{
     
    return this.find({name: new RegExp(name,"i")});
}

userSchema.query.byName=function(name)
{

    return this.where("name").equals(name);
}


userSchema.virtual('namedEmail').get(function(){
    return `${this.name}, ${this.email}`
})

//middleware


userSchema.pre("save",function(next){
    this.updateAt=Date.now();
    next();
})

userSchema.post("save",function(doc,next){
    doc.getName()
    next()
})


module.exports = mongoose.model("user", userSchema)