const db=require('./db')


async function getByid(id){
   return new Promise(async (resolve,reject)=>{
      try{
       const connection= await db.getConnection();
       const sql=`SELECT * FROM user WHERE id=${id}`;
       const res= await db.excuteQuery(sql,connection);
       await db.closeConnection(connection);
       resolve(res);
    }
      catch(err)
      {
        reject(err);
      }
    
   });
}


async function fetchAll(){
    return new Promise(async (resolve,reject)=>{
       try{
        const connection= await db.getConnection();
        const sql=`SELECT * FROM user `;
        const res= await db.excuteQuery(sql,connection);
        await db.closeConnection(connection);
        
        resolve(res);
    }
       catch(err)
       {
         reject(err);
       }
     
    });
 }


 module.exports={getByid,fetchAll};