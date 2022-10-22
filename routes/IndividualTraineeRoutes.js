const express = require('express')
const router = express.Router()
const IndividualTrainee = require('../models/IndividualTrainee')


async function GetIndividualTrainee(req, res, next) {
    let IndividualTrainee
    try {
        IndividualTrainee= await IndividualTrainee.findById(req.params.id)
      if (IndividualTrainee == null) {
        return res.status(404).json({ message: 'Cannot find subscriber' })
       }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    } 
      any
    res.IndividualTrainee = IndividualTrainee
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