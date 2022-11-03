const express= require('express')

const app= express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/app",require('./routes/routes'))

// app.get("/" ,(req,res)=>{
//    res.send("hello man");
// })

app.listen(9087,()=>{console.log("server started at port: 9087")})