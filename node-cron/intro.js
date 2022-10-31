let cron=require('node-cron')



console.log("hroo")

 
// var task=cron.schedule('*/5 * * * *',()=>{

//     console.log("minutes: ",Date.now()/1000/60)
// },{
//     scheduled:true
// });


var task=cron.schedule('* 0-59 * * * *',()=>{

    console.log("minutes: ",Date.now()/1000/60)
},{
    scheduled:true
});


task.start();