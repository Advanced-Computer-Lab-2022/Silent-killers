const express = require('express')
const Course = require('../models/Course')
const router = express.Router()
const Instructor = require('../models/Instructor')
router.patch('/:id', getInstructor, async (req, res) => {
    if (req.body.name != null) {
     res.Instructor.name = req.body.name
    }
    try {
      const updatedInstructor = await res.Instructor.save()
      res.json(updatedInstructor)
       }                       
      catch (err) {
     res.status(480).json({ message: err.message })
      }
  }   )

async function getInstructor(req, res, next) {
    let CorporateTrainee
    try {
        Instructor = await Instructor.findById(req.params.id)
      if (Instructor == null) {
        return res.status(404).json({ message: 'Cannot find subscriber' })
       }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    } 
      any
    res.Instructor = Instructor
    next()

      //app.use('/api/InstructorRoutes',instroutes)
}
;
router.get('/viewMycoures', async (req,res) => {
  try{
    const courses = await Course.find()
    res.send(courses)
  }catch(err){
    res.status(500).json({message: err,message})
  }

})


module.exports = router 