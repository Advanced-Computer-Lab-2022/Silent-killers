const CorporateTrainee = require('../models/CorporateTrainee')
const Exercises = require('../models/Exercises')
const Course = require('../models/Course')
const Instructor = require('../models/Instructor')
const AccessRequest = require('../models/AccessRequests')
const Enrollment = require('../models/Enrollment')
const Reports = require('../models/Reports')

const mongoose = require('mongoose')

//functions here

     //37
const viewgradeCT = async (req,res) =>{
  const {id} = req.query
  try{
      const exercises = await Exercises.find({CTid:id})
    res.status (200).json(exercises)
}
catch (error) {
  res.status(500).json({error:error.message})
  }}

    //34
    const courseRating = async(req,res) => {
      const id=req.query.id;
      let {rating} = req.body;
      try{
          const x = await Course.findById(id);
          const avg = (((x.Rating)*(x.NoRating)) + rating)/(x.NoRating+1)
          const inc = x.NoRating + 1
          const course = await Course.findByIdAndUpdate(id,{Rating:avg , NoRating:inc} )
          console.log(course)
          res.status(200).json(course);
       
          }catch(error){
              res.status(400).json({error:error.message})
          }
      }

      const viewCourseDetails = async (req,res) =>{
        try{
            const course = await Course.findById(req.query.id)
             res.status (200).json(course)
         }
        catch (error) {
            res.status(500).json({error:error.message})
            }}

            const insRating = async(req,res) => {
              const id=req.query.id;
                let {rating} = req.body;
                try{
                    const x = await Instructor.findById(id);
                    const avg = (((x.Rating)*(x.NoRating)) + rating)/(x.NoRating+1)
                    const inc = x.NoRating + 1
                    const instructor = await Instructor.findByIdAndUpdate(id,{Rating:avg , NoRating:inc} )
                    console.log(instructor)
                    res.status(200).json(instructor);
                 
                    }catch(error){
                        res.status(400).json({error:error.message})
                    }
                }

//36
const submitanswerCT = async(req, res) => { 
  //const userId = req.query.userId;
  const {answer} = req.body
  const {id} = req.query
  try{
  const result = await Exercises.findByIdAndUpdate(id,{TraineeSolutions:answer},{new:false})
  res.status(200).json(result)
  }
  catch{
      res.status(400).json({error:"Trainee ID is required"})
  }
    }
//50
const requestaccess = async(req,res) => {
  const {TraineeID,CourseID} = req.query;
  var Status = "Not granted";
  try{
  const result = await AccessRequest.create({TraineeID , CourseID , Status})
  res.status(200).json(result)
  }
  catch(error){
    res.status(400).json({error:error.message})
}

}

//43
const writenotes = async(req,res) => {
  const {notes} = req.body;
  const {CourseId , StudentId} = req.query;
  try{
    const newenrollment = await Enrollment.findOneAndUpdate({StudentId : StudentId, CourseId : CourseId}, {Notes : notes})
    res.status(200).json(newenrollment);
  }catch(error){
    res.status(400).json({error : error.message})
  }
}
const viewreportsCT = async (req,res) =>{
  const {id} = req.query
  try{
      const reports = await Reports.find({CTid:id})
      res.status (200).json(reports)
  }
  catch (error) {
      res.status(500).json({error:error.message})
      }

}
//47
const reportCT = async (req,res) =>{
  const {id} = req.query
  const {course} = req.query
  const {coursetitle} = req.query
  const {problem} = req.body
  try{
      const exercises = await Reports.create({Course:coursetitle,CourseID:course,Problem:problem,Status:"Pending",CTid:id,View:"Unseen"})
    res.status (200).json(exercises)
}
catch (error) {
  res.status(500).json({error:error.message})
  }
}

//export the functions here
module.exports = {viewgradeCT, courseRating , viewCourseDetails , insRating,submitanswerCT , requestaccess , writenotes , viewreportsCT , reportCT }