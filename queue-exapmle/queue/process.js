const { reject } = require('lodash');
const { deleteOne } = require('../db/schema');
const queues=require('./queue')

async function process(work){

    return new Promise((resolve,reject)=>{
  
        try{
            
         queues.empQueue.process(async (job) => { 
          let data =await work(job.data);
         
        });
        resolve("data queued............");
        }catch(err)
        {
         reject(err);
        }


    })
    
}

module.exports= process;
