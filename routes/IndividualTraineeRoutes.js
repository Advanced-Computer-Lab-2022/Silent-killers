const express = require('express')
const{
  Viewcorrectsolutionsandtraineeanswers,submitanswerIT, viewgradeIT,getwallet,createwallet,pay , creditcard , pdf , viewreportsIT,reportIT , Refund2 , Payment1 , viewpaymentbyid , viewallExercises
} = require('../controllers/IndividualTraineeController')
const{
  searchforcoursebysubjecttitleinstructor
  }=require('../controllers/InstructorController')
const{
filtersubjectorrating,filterPrice
}=require('../controllers/CourseController')
const {courseRating,insRating , writenotes , viewCourseDetails} = require('../controllers/CorporateTraineeController')
const {
  getEnrollement,addEnrollement,enrollementId
 } = require('../controllers/EnrollmentController')
//const { viewgrade } = require('../controllers/CorporateTraineeController')
const router = express.Router()

//add routes here
//changed get to post on 16 to 20
router.post('/searchby',searchforcoursebysubjecttitleinstructor)
router.post('/filterratingorsubject',filtersubjectorrating)
router.post('/filterprice',filterPrice)
router.post('/viewanswers',Viewcorrectsolutionsandtraineeanswers)
router.post('/viewgradeIT',viewgradeIT)
router.post('/submitanswerIT',submitanswerIT)
router.patch('/courseRating',courseRating)
router.patch('/insRating',insRating)
router.get('/getwallet',getwallet)
router.post('/createwallet',createwallet)
router.patch('/writenotes' , writenotes)
router.post('/createpayment',pay)
router.patch('/creditcard',creditcard)
router.post('/pdf',pdf)
router.post('/enrollid',enrollementId)
router.post('/viewreportsIT',viewreportsIT)
router.post('/reportIT',reportIT)
// router.post('/refund',Refund2)
router.get('/ViewCourseDetails',viewCourseDetails)
router.post('/refund',Refund2)
router.get("/getpayment",Payment1)
router.post('/viewpaymentbyid' , viewpaymentbyid);
router.post('/viewallExercises',viewallExercises)

module.exports = router