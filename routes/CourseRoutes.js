const express = require('express')
const {
 getCourses, getCoursesPrice,filterRate,editcourse,filterPrice,filterSubject,filtersubjectorrating, courseRating , viewcoursebyid
} = require('../controllers/CourseController')
const router = express.Router()
router.get('/getcourses', getCourses)
router.get('/getcourseprice',getCoursesPrice)
router.get('/filterRate',filterRate)
router.patch('/editcourse/:id',editcourse)
router.post('/filterprice',filterPrice)
router.get('/filtersubject',filterSubject)
router.get('/filterratingorsubject',filtersubjectorrating)
router.post('/ratecourse',courseRating)
router.post('/viewcoursebyid' , viewcoursebyid);
module.exports = router