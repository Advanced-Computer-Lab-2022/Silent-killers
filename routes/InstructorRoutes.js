const express = require('express')
const{
getInstructors,instructerViewCourseByTitle,addCourse,instructorFilterHisCourseBySubject,searchforcoursebysubjecttitleinstructor,searchformyowncoursebysubjecttitleinstructor,addPreviewVid,AcceptContract, editpassword, editBioEm, addDiscount, addQuestion, viewratingandreviews,forgetpass2,fgpass3,fgpasstry, addYoutubeAndDesc,setanswer
} = require('../controllers/InstructorController')
const{
filtersubjectorrating,filterPrice
}= require('../controllers/CourseController')


const router = express.Router()

//add routes here
router.get('/getinstructor',getInstructors)
router.get('/viewbytitle',instructerViewCourseByTitle)
router.post('/addcourses',addCourse)
router.get('/filtersubject',instructorFilterHisCourseBySubject)
router.get('/searchbythings',searchformyowncoursebysubjecttitleinstructor)
router.get('/searchby',searchforcoursebysubjecttitleinstructor)
router.get('/filterratingorsubject',filtersubjectorrating)
router.get('/filterprice',filterPrice)
router.post('/addpreviewvid/:id',addPreviewVid)
router.post('/AcceptContract/:id',AcceptContract)
router.patch('/EditPassword',editpassword)
router.patch('/EditBio',editBioEm)
router.patch('/adddiscount',addDiscount)
router.post('/addquestion',addQuestion)
router.get('/viewratingsandreviews',viewratingandreviews)
router.post('/forgotpassword',forgetpass2)
router.post('/fgpass',fgpass3)
router.post('/fgpass4/:userId/:token',fgpasstry)
router.post('/Adddesc/:id',addYoutubeAndDesc)
router.patch('/setanswer',setanswer)




module.exports = router