const employee=require('./schema');



async function saveToDB(data)
{
    return new Promise(async (resolve,reject)=>{
        try{
            const emp= await employee.create(data)
            resolve(emp);
        }catch(err)
        {
            reject(err);
        }
    });
}

module.exports=saveToDB;
