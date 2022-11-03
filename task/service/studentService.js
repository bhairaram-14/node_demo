const student = require("../db/student")
const mongoose = require('mongoose');

async function connect() {
return new Promise((resolve,reject)=>{
   mongoose.connect("mongodb://localhost/testdb")
   .then(() => {resolve() })
   .catch((err) => { reject(err)});

})
   
}

async function existsEmail(emailid) {
  
   await connect();
   const obj = await student.exists({ email: emailid });
   if(obj)
    return true;
   else 
   return false; 
}

async function studentByEmail(emailid)
{
  return await student.find({email:emailid})

}

function generateNumber()
{
  return  Math.floor(Math.random()*1000000) 
  
}


async function save(studentobj) {
   return new Promise(async(resolve,reject)=>{

      try {
         await connect();
         const obj = student.create({
            name: "rommy",
            email: "arry@m.com",
            college: "icici",
            problemIds: ["63620158500b4ef19d102b3a", "6362014a1c971be5d0746f21"],
         })
   
         resolve(obj);
         console.log(await obj)
      } catch (e) {
         console.log(e)
         reject(e);
      }
   
   })
   
   
}
async function getAll(){
   return new Promise(async (resolve,reject)=>{
      try{
         await  connect();
         let data= await student.find();
         if(data.length>0)
          resolve(data);
         else
          reject("no data found !")
      }catch(err)
      {
         reject(err.message);
      }
   });
}

async function getById(id){
   return new Promise(async (resolve,reject)=>{
      try{
         await  connect();
         let data= await student.findById(id);
         console.log("++++++++++++++++++++++++++++++++++++++++++++++++++")
         console.log(data);
         if(data!==null)
          resolve(data);
         else
          reject("no data found !")
      }catch(err)
      {
         reject(err.message);
      }
   });
}


async function generateOtp(email) {

return new Promise(async (resolve,reject)=>{
   const ok = await existsEmail(email);
   if(ok){ 
      const stu= await studentByEmail(email);
      if(!stu[0].islogin)
      {
         stu[0].otp=generateNumber();
         await stu[0].save();
         resolve({ "otp":stu[0].otp});
      }
      else 
       reject("otp  already generated........");
       
   }
   else 
    reject("email not exist");
});
   
}

async function verifyOtp(email, otp)
{
   return new Promise(async (resolve,reject)=>{

      if(await existsEmail(email))
      {
       const stu =await studentByEmail(email);
       
       if(stu[0].islogin)
       {
          reject("you are not eligible");
       }

       if(stu[0].otp+""===otp)
       {
         stu[0].islogin=true;
          await stu[0].save();
          resolve("verified") ;
       }
       else
        reject("invalid otp");  
      }
      else
      reject("email not exists");
    
   });


}


module.exports={getAll,getById,generateOtp,verifyOtp};
