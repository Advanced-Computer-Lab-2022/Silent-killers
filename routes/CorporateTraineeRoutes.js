const express = require('express')
const{
} = require('../controllers/CorporateTraineeController')
const{
searchforcoursebysubjecttitleinstructor
}=require('../controllers/InstructorController')

const router = express.Router()

//add routes here
router.get('/searchby',searchforcoursebysubjecttitleinstructor)



module.exports = router