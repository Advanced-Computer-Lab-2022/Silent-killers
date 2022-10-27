const express = require('express')
//import functions
 const {
 addAdmin,addInstructors,addCorporateTrainee  
   } = require('../controllers/AdminController')


const router = express.Router()

//routes
router.post('/addadmin',addAdmin)
router.post('/addCorporateTrainee',addCorporateTrainee)
router.post('/addInstructor',addInstructors)




module.exports = router