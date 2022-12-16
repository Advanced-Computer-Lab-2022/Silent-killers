const Enrollement = require('../models/Enrollement')
const mongoose = require('mongoose')


const getEnrollement = async (req, res) => {
    const enrollements = await Enrollement.find({}).sort({createdAt: -1})
  
    for (let index = 0; index < courses.length; index++) {
        const element = enrollements[index];
        console.log(element.id);
    }
    res.status(200).json(enrollements)
}


const addEnrollement = async(req,res) => {
    const{CourseId,StudentId,LessonId,Completed} = req.body;
    console.log("im here")
    
        try{
            const enrollement = await Enrollement.create({CourseId,StudentId,LessonId,Completed});
            res.status(200).json(enrollement)
            console.log("hhh")
        }catch(error){
            res.status(400).json({error:error.message})
        }
    }

 const enrollementId = async(req,res) => {
    const id = req.query;
    const enrollementbyId = await Enrollement.findById(id)
    res.status(200).json(enrollementbyId)
 }   
    module.exports={getEnrollement,addEnrollement,enrollementId}