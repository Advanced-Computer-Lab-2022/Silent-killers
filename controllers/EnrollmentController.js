const Enrollement = require('../models/Enrollment')
const mongoose = require('mongoose')


const getEnrollement = async (req, res) => {
    try {
        const enrollment = await Enrollement.find({});
        console.log("here" + enrollment)
        res.json(enrollment);
      } catch (err) {
        console.log("-----------All course error-------------");
  
        console.log(err);
        return res.status(500).json({ msg: err.message });
      }
}


const addEnrollement = async(req,res) => {
    const{CourseId,StudentId,LessonId,Completed} = req.body;
    console.log("im here")
    
        try{
            const enrollement = await Enrollement.create({CourseId:CourseId,StudentId:StudentId,LessonId:LessonId,Completed:Completed});
            res.status(200).json(enrollement)
            console.log("hhh")
        }catch(error){
            res.status(400).json({error:error.message})
        }
    }

    const enrollementId = async(req,res) => {
        const enrollementbyId = await Enrollement.find({StudentId:req.query.id})
        res.status(200).json(enrollementbyId)
     }  
    module.exports={getEnrollement,addEnrollement,enrollementId}