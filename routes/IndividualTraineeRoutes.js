const express = require('express')
const router = express.Router()
const IndividualTrainee = require('../models/IndividualTrainee')

router.patch('/:id', GetIndividualTrainee, async (req, res) => {
    if (req.body.name != null) {
     res.IndividualTrainee.name = req.body.name
    }
    try {
      const updatedIndividualTrainee = await res.IndividualTrainee.save()
      res.json(updatedIndividualTrainee)
       }                       
      catch (err) {
     res.status(480).json({ message: err.message })
      }
  }   )
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
      //app.use('/api/IndividualTraineeRoutes',indivroutes)
}


module.exports = router 