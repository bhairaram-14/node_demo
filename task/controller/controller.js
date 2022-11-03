const studentService = require('../service/studentService');
const problesService=require('../service/problemService');
const solutionService=require('../service/solutionService');

const otp = async(req, res) => {

    const email= req.body.email;

    try {
        let data = await studentService.generateOtp(email);
        res.status(200).send(data);
    }
    catch (err) {
        res.status(500).send(err);
    }


}

 const verify= async (req,res) => {

    try {

        let data = await studentService.verifyOtp(req.body.email, req.body.otp);
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err);
    }


}


const fetchStudents =async (req,res)=>{
    try{
        let data= await studentService.getAll();
        res.status(200).send(data);
    }catch(err)
    {
        res.status(400).send(err);
    }
}

const fetchById= async (req,res)=>{
    console.log(req.params.id);
    try{
        let data= await studentService.getById(req.params.id);
        
        res.status(200).send(data);
    }catch(err)
    {
        res.status(400).send(err);
    }
}



const problems= async (req,res)=>{
    try{
        let data= await problesService.findAll();
        res.status(200).send(data);
    }catch(err){
        res.status(400).send(err);
    }
}

const problemById= async (req,res)=>{
    try{
        let data= await problesService.findbyid(req.params.id);
        res.status(200).send(data);
    }catch(err){
        res.status(400).send(err);
    }
}



const solutions= async (req,res)=>{
    try{
        let data= await solutionService.findAll();
        res.status(200).send(data);
    }catch(err){
        res.status(400).send(err);
    }
}

const solutionById= async (req,res)=>{
    try{
        let data= await solutionService.findbyid(req.params.id);
        res.status(200).send(data);
    }catch(err){
        res.status(400).send(err);
    }
}











const all = async (req, res)=>{
    res.status(404).send("resourse does not exists.......");
}


module.exports={otp,verify,fetchById,fetchStudents,problems,problemById, solutions,solutionById,all};

