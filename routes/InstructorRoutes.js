const express = require('express')
const{
getInstructors,instructerViewCourseByTitle,addCourse,instructorFilterHisCourseBySubject,searchforcoursebysubjecttitleinstructor,searchformyowncoursebysubjecttitleinstructor
} = require('../controllers/InstructorController')
const{
filtersubjectorrating,filterPrice
}= require('../controllers/CourseController')


const router = express.Router()

//add routes here
router.get('/getinstructor',getInstructors)
router.get('/viewbytitle',instructerViewCourseByTitle)
router.post('/addcourses',addCourse)
router.get('/filtersubject',instructorFilterHisCourseBySubject)
router.get('/searchbythings',searchformyowncoursebysubjecttitleinstructor)
router.get('/searchby',searchforcoursebysubjecttitleinstructor)
router.get('/filterratingorsubject',filtersubjectorrating)
router.get('/filterprice',filterPrice)



module.exports = router