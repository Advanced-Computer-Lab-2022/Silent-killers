const express = require('express')
const{
getInstructors,instructerViewCourseByTitle,addCourse,instructorFilterHisCourseBySubject,searchforcoursebysubjecttitleinstructor,searchformyowncoursebysubjecttitleinstructor
} = require('../controllers/InstructorController')


const router = express.Router()

//add routes here
router.get('/getinstructor',getInstructors)
router.get('/viewbytitle',instructerViewCourseByTitle)
router.post('/addcourses',addCourse)
router.get('/filtersubject',instructorFilterHisCourseBySubject)
router.get('/searchbythings',searchformyowncoursebysubjecttitleinstructor)
router.get('/searchby',searchforcoursebysubjecttitleinstructor)



module.exports = router