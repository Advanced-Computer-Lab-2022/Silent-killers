const express = require('express')
const router = express.Router()
const Instructor = require('../models/Instructor')


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
    app.get("/api",async (req, res) => {
        const x = await user.find({title})
        res.status(200).json(x);
      });
      app.get("/api",async (req, res) => {
        const x = await user.find({subject})
        res.status(200).json(x);
      });
      app.get("/api",async (req, res) => {
        const x = await user.find({instructor})
        res.status(200).json(x);
      });
}


module.exports = router