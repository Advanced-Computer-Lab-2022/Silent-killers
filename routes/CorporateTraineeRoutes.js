const express = require('express')
const{ viewgrade , courseRating , viewCourseDetails , insRating} = require('../controllers/CorporateTraineeController')
const{
searchforcoursebysubjecttitleinstructor
}=require('../controllers/InstructorController')
const{
filtersubjectorrating,filterPrice
}=require('../controllers/CourseController')
const{
    Viewcorrectsolutionsandtraineeanswers
    }=require('../controllers/IndividualTraineeController')

const router = express.Router()

//add routes here
router.get('/searchby',searchforcoursebysubjecttitleinstructor)
router.get('/filterratingorsubject',filtersubjectorrating)
router.get('/filterprice',filterPrice)
router.get('/viewgrade',viewgrade)
router.get('/viewanswers',Viewcorrectsolutionsandtraineeanswers)
router.post('/courseRating/:id',courseRating)
router.get('/ViewCourseDetails',viewCourseDetails)
router.post('/insRating/:id',insRating)

module.exports = router