const router=require('express').Router()

const controller=require("../controller/controller")

router.post("/otp", controller.otp)
router.post("/verify",controller.verify)
router.get("/student", controller.fetchStudents)
router.get("/student/:id",controller.fetchById)

router.get("/problems", controller.problems)
router.get("/problem/:id",controller.problemById)


router.get("/solutions", controller.solutions)
router.get("/solution/:id",controller.solutionById)

router.all("*",controller.all)



module.exports=router