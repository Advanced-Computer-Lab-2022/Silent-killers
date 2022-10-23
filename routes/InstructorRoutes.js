const express = require('express')
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
    app.get("/id",async (req, res) => {
        const x = await user.find({title})
        res.status(200).json(x);
      });
      app.get("/id",async (req, res) => {
        const x = await user.find({subject})
        res.status(200).json(x);
      });
      app.get("/id",async (req, res) => {
        const x = await user.find({instructor})
        res.status(200).json(x);
      });
      <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
        <a href="#">England</a>
        <a href="#">France</a>
        <a href="#">Egypt</a>
        </div>
        </div>
      //app.use('/api/InstructorRoutes',instroutes)
}


module.exports = router 