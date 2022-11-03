const solution=require('../db/solution')
const mongoose=require('mongoose');

async function connect(){
 return  new Promise((resolve,reject)=>{
    mongoose.connect("mongodb://localhost/testdb")
        .then(()=>{resolve()})
        .catch((e)=>{reject(e)});
 })
}




async function save(problemobj)
{
 try{
    await connect();
    const p1= solution.create({
    
 })
 console.log(await p1);
}catch(E)
{
    console.log(E)
}

}



async function findbyid(id)
{
    return new Promise(async (resolve,reject)=>{
        try{

    await connect();
    let data=await solution.findById(id);
    if(data)
     resolve( data);
    else
      reject("data not found for given id");
    }catch(err)
    {
        reject(err.message);
    }
    });
}

async function findAll()
{
   console.log("+++++++++++++++++++++++++++++++++++++++++")
    return new Promise(async (resolve,reject)=>{
        try{
            await connect();
            let data= await solution.find();
           
            if(data.length>0)
             resolve(data);
            else
             reject("data not found.........!")
        }catch(err)
        {
            reject(err.message);
        }
    });
}


module.exports={findAll,findbyid}