const express = require('express')
const{courseRating , viewCourseDetails , insRating , submitanswerCT, viewgradeCT , requestaccess , writenotes , viewreportsCT , reportCT } = require('../controllers/CorporateTraineeController')
const{
searchforcoursebysubjecttitleinstructor
}=require('../controllers/InstructorController')
const{
filtersubjectorrating,filterPrice , viewcoursebyid
}=require('../controllers/CourseController')
const{
    Viewcorrectsolutionsandtraineeanswers
    }=require('../controllers/IndividualTraineeController')
    const {
        getEnrollement,addEnrollement,enrollementId
       } = require('../controllers/EnrollmentController')

const router = express.Router()

//add routes here
//changed get to post in 17 to 21
router.post('/searchby',searchforcoursebysubjecttitleinstructor)
router.post('/filterratingorsubject',filtersubjectorrating)
router.post('/filterprice',filterPrice)
router.post('/viewgradeCT',viewgradeCT)
router.post('/viewanswers',Viewcorrectsolutionsandtraineeanswers)
router.patch('/courseRating',courseRating)
router.get('/ViewCourseDetails',viewCourseDetails)
router.patch('/insRating',insRating)
router.patch('/submitanswerCT',submitanswerCT)
router.post('/requestaccess',requestaccess)
router.patch('/writenotes' , writenotes)
router.post('/enrollid',enrollementId)
router.post('/viewreportsCT',viewreportsCT)
router.post('/reportCT',reportCT)
router.post('/viewcoursebyid' , viewcoursebyid);
module.exports = router