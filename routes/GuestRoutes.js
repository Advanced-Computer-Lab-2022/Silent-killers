const express = require('express')
const{
  signUp , login, logout
} = require('../controllers/GuestController')
const{
  searchforcoursebysubjecttitleinstructor
  }=require('../controllers/InstructorController')
const{
filtersubjectorrating,filterPrice
}=require('../controllers/CourseController')

const router = express.Router()

//add routes here
router.post('/searchby',searchforcoursebysubjecttitleinstructor)
router.post('/filterratingorsubject',filtersubjectorrating)
router.post('/filterprice',filterPrice)
router.post('/signup',signUp)
router.post('/login',login)
router.get('/logout',logout)


module.exports = router