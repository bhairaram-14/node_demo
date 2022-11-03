const express=require('express')

const app=express();
app.use(express.json())


app.use(express.urlencoded({extended: false}))

app.use("/user",require('./userRoute'))

app.listen(5555,()=>{console.log("service is running on port :5555")})
