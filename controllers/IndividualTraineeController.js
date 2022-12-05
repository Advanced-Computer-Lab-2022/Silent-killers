const IndividualTrainee = require('../models/IndividualTrainee')
const mongoose = require('mongoose');
const Exercises = require('../models/Exercises');
//functions here
//38
const Viewcorrectsolutionsandtraineeanswers = async (req,res) =>{
    const {Username,Exerciseno} = req.body
    try{
        const exercises = await Exercises.find({TraineeUsername:Username,ExerciseNumber:Exerciseno})
      res.status (200).json(exercises)
  }
  catch (error) {
    res.status(500).json({error:error.message})
    }}
//37
const viewgrade = async (req,res) =>{
  const {instructor} = req.body
  try{
      const exercises = await Exercises.find({InstructorID:instructor})
    res.status (200).json(exercises)
}
catch (error) {
  res.status(500).json({error:error.message})
  }}

  //36
  const submitanswer = async(req, res) => { 
    //const userId = req.query.userId;
    const {answer} = req.body
    const {exercisenumber} = req.body
    const {trainee} = req.body
    try{
    const result = await Exercises.findOneAndUpdate({TraineeUsername:trainee,ExerciseNumber:exercisenumber},{TraineeSolutions:answer},{new:false})
    res.status(200).json(result)
    }
    catch{
        res.status(400).json({error:"Trainee ID is required"})
    }
      }


//export the functions here
module.exports = {Viewcorrectsolutionsandtraineeanswers,viewgrade , submitanswer}