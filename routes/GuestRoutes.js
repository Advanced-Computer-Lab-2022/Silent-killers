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
     
     async function getCourse(req, res, next) {
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
  <button onclick="getCourse()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div> 
</div>
      //app.use('/api/GuestRoutes',guestroutes)
}

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

module.exports = router}
