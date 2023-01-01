const express = require('express')
//import functions
 const {
 addAdmin,addInstructors,addCorporateTrainee, grantaccess , getAccessReq , setPromotion ,  ViewReportedProblems , MarkReported , Adminrefund , SearchforRefund , ViewAllRefunds
   } = require('../controllers/AdminController')
   const {
    viewcoursebyid
   } = require('../controllers/CourseController')


const router = express.Router()

//routes
router.post('/addadmin',addAdmin)
router.post('/addCorporateTrainee',addCorporateTrainee)
router.post('/addInstructor',addInstructors)
router.patch('/grantaccess', grantaccess)
router.get('/getAccessReq',getAccessReq)
router.post('/viewcoursebyid' , viewcoursebyid);
router.get('/ViewReportedProblems',ViewReportedProblems)
router.patch('/MarkReported',MarkReported)
router.patch('/Adminrefund',Adminrefund)
router.patch('/setPromotion', setPromotion)
router.patch('/SearchforRefund',SearchforRefund)
router.get('/ViewAllRefunds',ViewAllRefunds)
//hii

module.exports = router