const express = require('express')
const router = express.Router()
const Guest = require('../models/Guest')

async function GetGuest(req, res, next) {
    let Guest
    try {
      Guest = await Guest.findById(req.params.id)
      if (Guest == null) {
        return res.status(404).json({ message: 'Cannot find subscriber' })
       }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    } 
      any
    res.Guest = Guest
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