const CorporateTrainee = require('../models/CorporateTrainee')
const Exercises = require('../models/Exercises')
const Course = require('../models/Course')
const Instructor = require('../models/Instructor')

const mongoose = require('mongoose')

//functions here
//37
const viewgrade = async (req,res) =>{
    //const {trainee} = req.body
    try{
        const exercises = await Exercises.find({TraineeUsername:'Test1'})
      res.status (200).json(exercises)
  }
  catch (error) {
    res.status(500).json({error:error.message})
    }}

    //34
    const courseRating = async(req,res) => {
      const id=req.params.id;
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
        const id =params.req.body
        try{
            const course = await Course.findById(id)
             res.status (200).json(course)
         }
        catch (error) {
            res.status(500).json({error:error.message})
            }}

            const insRating = async(req,res) => {
              const id=req.params.id;
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



//export the functions here
module.exports = {viewgrade, courseRating , viewCourseDetails , insRating}