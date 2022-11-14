const express = require('express');
const connection = require('./db/connection')
const process = require('./queue/process')
const queues = require('./queue/queue')
const job = require('./db/dbops')


const app = express();
// body parser
app.use(express.json())


app.post("/save", async (req, res) => {

   let queue = queues.empQueue;
   req.body.forEach(element => {
      queue.add(element).then().catch((err) => { console.log(err) });
   });
   try {
      let resp = await process(job);
      console.log(resp);
      res.send(resp);
   }
   catch (err) {

      res.send(err)
   }


})

connection().then(() => {
   app.listen(9090, () => { console.log("port NO: " + 9090) });
}).catch(err => {
   console.log(err);
})

