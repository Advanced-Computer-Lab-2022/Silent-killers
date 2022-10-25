const express = require('express')
const router = express.Router()
const Guest = require('../models/Guest')
router.patch('/:id', GetGuest, async (req, res) => {
    if (req.body.name != null) {
     res.Guest.name = req.body.name
    }
    try {
      const updatedGuest = await res.Guest.save()
      res.json(updatedGuest)
       }                       
      catch (err) {
     res.status(480).json({ message: err.message })
      }
  }   )
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
    //number12
    router.patch('/:id', getCourse, async (req, res) => {
        if (req.body.name != null) {
         res.Guest.Course = req.body.name
        }
        try {
          const updatedGuest = await res.Guest.save()
          res.json(updatedGuest)
           }                       
          catch (err) {
         res.status(480).json({ message: err.message })
          }
      }   )
     
         next()
      
      //app.use('/api/GuestRoutes',guestroutes)
}
            

        // next()



module.exports = router
