const Admin = require('../models/Admin')
const CorporateTrainee = require('../models/CorporateTrainee')
const Instructor = require('../models/Instructor')
const mongoose = require('mongoose')

//functions here
const addAdmin = async(req,res) => {
   
    const{Username,Password} = req.body;
    try{
        const newAdmin = await Admin.create({Username,Password});
          res.status(200).json(newAdmin)
    }catch(error){
          res.status(400).json({error:error.message})
    }
}
const addInstructors = async(req,res) => {
   
    const{Username,Password} = req.body;
    try{
        const newInstructor = await Instructor.create({Username,Password});
        return  res.status(200).json(newInstructor)
    }catch(error){
        return  res.status(400).json({error:error.message})
    }
}
const addCorporateTrainee = async(req,res) => {
   
    const{Username,Password} = req.body;
    try{
        const newCorporateTrainee = await CorporateTrainee.create({Username,Password});
        return  res.status(200).json(newCorporateTrainee)
    }catch(error){
        return  res.status(400).json({error:error.message})
    }
}





//export the functions here
module.exports = {addAdmin,addInstructors,addCorporateTrainee}