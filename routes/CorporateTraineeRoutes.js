const express = require('express')
const{
} = require('../controllers/CorporateTraineeController')
const{
searchforcoursebysubjecttitleinstructor
}=require('../controllers/InstructorController')
const{
filtersubjectorrating,filterPrice
}=require('../controllers/CourseController')

const router = express.Router()

//add routes here
router.get('/searchby',searchforcoursebysubjecttitleinstructor)
router.get('/filterratingorsubject',filtersubjectorrating)
router.get('/filterprice',filterPrice)


module.exports = router