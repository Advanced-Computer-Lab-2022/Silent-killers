const express = require('express')
const { appendFile } = require('fs')
const router = express.Router()
const CorporateTrainee = require('../models/CorporateTrainee')


//Add routes here

router.post('/addCorporateTrainee', (req, res) => {
     var new_user = new CorporateTrainee({
       "Username": "Test 1",

       
     })
     new_user.save(function(err,result){
       if (err){
           console.log(err);
       }
       else{
           console.log(result)
       }
   })
     //user.save();
 });





router.patch('/:id', getCorporateTrainee, async (req, res) => {
   if (req.body.name != null) {
    res.CorporateTrainee.name = req.body.name
   }
   try {
     const updatedCorporateTrainee = await res.CorporateTrainee.save()
     res.json(updatedCorporateTrainee)
      }                       
     catch (err) {
    res.status(480).json({ message: err.message })
     }
 }   )

async function getCorporateTrainee(req, res, next) {
    let CorporateTrainee
    try {
      CorporateTrainee = await CorporateTrainee.findById(req.params.id)
      if (CorporateTrainee == null) {
        return res.status(404).json({ message: 'Cannot find subscriber' })
       }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    } 
      any
    res.CorporateTrainee = CorporateTrainee
    next() 
}
  


module.exports = router