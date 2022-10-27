const express = require('express')
const {
 getCourses, addCourse, getCoursesPrice,filterRate
} = require('../controllers/CourseController')
const router = express.Router()
router.get('/getcourses', getCourses)
router.post('/addcourses',addCourse)
router.get('/getcourseprice',getCoursesPrice)
router.get('/filterRating',filterRate)
module.exports = router