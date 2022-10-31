const express = require('express')
const{
    filtersubjectByins,DeleteCourse,getInstructors,instructerViewCourseByTitle,addCourse,searchforcoursebysubjecttitleinstructor,searchformyowncoursebysubjecttitleinstructor, editcourse
} = require('../controllers/InstructorController')
const{
filtersubjectorrating
}= require('../controllers/CourseController')


const router = express.Router()

//add routes here
router.delete('/deleteCourse/:id',DeleteCourse)
router.get('/getinstructor',getInstructors)
router.get('/viewbytitle',instructerViewCourseByTitle)
router.post('/addcourses',addCourse)
router.get('/filtersubject',filtersubjectByins)
router.get('/searchbythings',searchformyowncoursebysubjecttitleinstructor)
router.get('/searchby',searchforcoursebysubjecttitleinstructor)
// router.get('/filterratingorsubject',filtersubjectorrating)
// router.get('/filterprice',filterPrice)



module.exports = router