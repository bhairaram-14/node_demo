const Queue=require('bull');
const config=require('../configure/configure')

const empQueue=new Queue('empqueue',{

    redis:{
        host:config.redisConfig.host,
        port:config.redisConfig.port
    }

})
 



module.exports={empQueue};