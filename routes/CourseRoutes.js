const express = require('express')
const {
 getCourses, getCoursesPrice,filterRate,editCourse,filterPrice,filterSubject
} = require('../controllers/CourseController')
const router = express.Router()
router.get('/getcourses', getCourses)
router.get('/getcourseprice',getCoursesPrice)
router.get('/filterRate',filterRate)
router.patch('/editcourse/:id',editCourse)
router.get('/filterprice',filterPrice)
router.get('/filtersubject',filterSubject)
module.exports = router