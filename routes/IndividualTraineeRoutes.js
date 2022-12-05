const express = require('express')
const{
  Viewcorrectsolutionsandtraineeanswers,submitanswer
} = require('../controllers/IndividualTraineeController')
const{
  searchforcoursebysubjecttitleinstructor
  }=require('../controllers/InstructorController')
const{
filtersubjectorrating,filterPrice
}=require('../controllers/CourseController')
const { viewgrade } = require('../controllers/CorporateTraineeController')
const router = express.Router()

//add routes here
router.get('/searchby',searchforcoursebysubjecttitleinstructor)
router.get('/filterratingorsubject',filtersubjectorrating)
router.get('/filterprice',filterPrice)
router.get('/viewanswers',Viewcorrectsolutionsandtraineeanswers)
router.get('/viewgrade',viewgrade)
router.patch('/submitanswer',submitanswer)


module.exports = router