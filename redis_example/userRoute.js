const router=require('express').Router()

const controller=require("./controller.js")

router.get("/", controller.fetchAll)
router.get("/:id",controller.getByid)


router.all("*",controller.all)



module.exports=router