const express = require('express')
//const{
  //add functions needed here
//} = require('../controllers/IndividualTraineeController')
const{
  searchforcoursebysubjecttitleinstructor
  }=require('../controllers/InstructorController')
const router = express.Router()

//add routes here
router.get('/searchby',searchforcoursebysubjecttitleinstructor)
// router.get('/filterratingorsubject',filtersubjectorrating)
// router.get('/filterprice',filterPrice)



module.exports = router