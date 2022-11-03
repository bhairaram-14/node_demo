const service = require('./service.js')
const redis = require('redis')

const redisclient = redis.createClient();

const EXPIRATIOND_TIME = 36000;




const fetchAll = async (req, res) => {
    try {

        await redisclient.connect()
        const value = await redisclient.get("users") 
    
        if(value){
           console.log("values exists............") 
           await redisclient.QUIT()
           res.json(JSON.parse(value));
        }
        else{
            console.log("data not ......exists................") 
          
            let users = await service.fetchAll();
            redisclient.setEx("users", EXPIRATIOND_TIME, JSON.stringify(users));

            await redisclient.QUIT()
            res.json(JSON.parse(JSON.stringify(users)))        
        

        }
    } catch (err) {
        res.send(err.message);
    }

}
const getByid = async (req, res) => {
    
    
    try {

         await redisclient.connect()
         let id = req.params.id;
          
         let user =await redisclient.get(`user_${id}`)
         if(user.length>2)
         {
           redisclient.QUIT(); 
           console.log("---------------",user.length)
           res.json(JSON.parse(user)); 
         }else{
            let user =await service.getByid(id);
            if(user)
             console.log()
            redisclient.set(`user_${id}`,JSON.stringify(user));
            redisclient.QUIT()
            res.json(JSON.parse(JSON.stringify(user)))
         }


    } catch (err) {
        res.json(err.message);
    }

}

const all = async (req, res) => {
    res.status(404).send("resourse does not exists.......");
}




module.exports = { fetchAll, getByid, all };