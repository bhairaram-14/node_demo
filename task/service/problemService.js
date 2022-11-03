const problem=require('../db/problem')
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
    const p1= problem.create({
    title:"key in linkedlist",
    link:"link of problem",
    mark:25
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
    let data=await problem.findById(id);
    if(data)
     resolve( data);
    else
      reject("problem not found for given id");
    }catch(err)
    {
        reject(err.message);
    }
    });
}

async function findAll()
{
    return new Promise(async (resolve,reject)=>{
        try{
            await connect();
            let data= await problem.find();
            if(data.length>0){
                
                console.log(data);
                resolve(data);
            }
            else
             reject("data not found.........!")
        }catch(err)
        {
            reject(err.message);
        }
    });
}


module.exports={findAll,findbyid}