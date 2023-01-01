const express = require('express')
const{
getInstructors,instructerViewCourseByTitle,addCourse,instructorFilterHisCourseBySubjectorprice,searchforcoursebysubjecttitleinstructor,searchformyowncoursebysubjecttitleinstructor,addPreviewVid,AcceptContract, editpassword, editBioEm, addDiscount, addQuestion, viewratingandreviews,forgotPassword, addYoutubeAndDesc,setanswer, getInstructorbyid , getcoursesbypob , viewreportsINS , reportINS , followup , Viewamountowed
} = require('../controllers/InstructorController')
const{
filtersubjectorrating,filterPrice
}= require('../controllers/CourseController')


const router = express.Router()

//add routes here
router.get('/getinstructor',getInstructors)
router.get('/viewbytitle',instructerViewCourseByTitle)
router.post('/addcourses',addCourse)
router.post('/insfilter',instructorFilterHisCourseBySubjectorprice)
router.get('/searchbythings',searchformyowncoursebysubjecttitleinstructor)
//changed get to post in 19 on 1:19 14/12
router.post('/searchby',searchforcoursebysubjecttitleinstructor)
router.get('/filterratingorsubject',filtersubjectorrating)
router.get('/filterprice',filterPrice)
router.patch('/addpreviewvid',addPreviewVid)
router.post('/AcceptContract',AcceptContract)
router.patch('/EditPassword',editpassword)
router.patch('/EditBio',editBioEm)
// router.patch('/editbio',editBioEm)
router.patch('/adddiscount',addDiscount)
router.post('/addquestion',addQuestion)
router.get('/viewratingsandreviews',viewratingandreviews)
router.patch('/Adddesc',addYoutubeAndDesc)
router.patch('/setanswer',setanswer)
router.post('/getinsbyid',getInstructorbyid)
router.get('/mostrating',getcoursesbypob)
router.post('/forgot',forgotPassword)
router.post('/viewreportsINS',viewreportsINS)
router.post('/reportINS',reportINS)
router.patch("/followup",followup)
router.post("/Viewamountowed",Viewamountowed)
router.post('/inssearchby' , searchformyowncoursebysubjecttitleinstructor)



module.exports = router