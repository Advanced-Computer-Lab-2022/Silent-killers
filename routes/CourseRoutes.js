const express = require('express')
const {
 getCourses, getCoursesPrice,filterRate,editcourse,filterPrice,filterSubject,filtersubjectorrating, courseRating
} = require('../controllers/CourseController')
const router = express.Router()
router.get('/getcourses', getCourses)
router.get('/getcourseprice',getCoursesPrice)
router.get('/filterRate',filterRate)
router.patch('/editcourse/:id',editcourse)
router.get('/filterprice',filterPrice)
router.get('/filtersubject',filterSubject)
router.get('/filterratingorsubject',filtersubjectorrating)
router.post('/ratecourse',courseRating)
module.exports = router