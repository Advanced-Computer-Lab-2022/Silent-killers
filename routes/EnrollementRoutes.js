// const express = require('express')
// const{ getEnrollement,addEnrollement,enrollementId}=require("../controllers/EnrollementController")

// const router = express.Router()
const express = require('express')
//import functions
const {
    getEnrollement,addEnrollement,enrollementId
   } = require('../controllers/EnrollementController')


const router = express.Router()

router.get("/getenroll",getEnrollement)
router.post('/addenroll',addEnrollement)
router.get('/enrollid',enrollementId)
module.exports = router