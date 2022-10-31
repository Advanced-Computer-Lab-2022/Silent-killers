const express = require('express')
const {
    filtersubject,filterRating,filterprice,getCourses, getCoursesPrice,editcourse
} = require('../controllers/CourseController')
const router = express.Router()
router.get('/getcourses', getCourses)
router.get('/getcourseprice',getCoursesPrice)
router.patch('/editcourse/:id',editcourse)
// router.get('/filterprice',filterPrice)
// router.get('/filtersubject',filterSubject)
// router.get('/filterratingorsubject',filtersubjectorrating)
router.get('/filterPrice',filterprice)
router.get('/filterRating',filterRating)
router.get('/filtersubject',filtersubject)

module.exports = router