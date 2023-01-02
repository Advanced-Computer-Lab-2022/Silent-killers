require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const cors = require("cors")


const CourseRouter = require('./routes/CourseRoutes')
const AdminRouter = require('./routes/AdminRoutes')
const CorporateTraineeRouter = require('./routes/CorporateTraineeRoutes')
const GuestRouter = require('./routes/GuestRoutes')
const IndividualTraineeRouter = require('./routes/IndividualTraineeRoutes')
const InstructorRouter = require('./routes/InstructorRoutes')
const EnrollementRouter=require('./routes/EnrollementRoutes')

// express app
const app = express()

app.use(cors())
// middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/Course',CourseRouter)
app.use('/api/Admin',AdminRouter)
app.use('/api/CorporateTrainee',CorporateTraineeRouter)
app.use('/api/Guest',GuestRouter)
app.use('/api/IndividualTrainee',IndividualTraineeRouter)
app.use('/api/Instructor',InstructorRouter)
app.use('/api/Enrollement',EnrollementRouter)

// connect to db
mongoose.connect("mongodb+srv://OmarAshraf:2912004@cluster0.padqnt9.mongodb.net/test")
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(8000, () => {
      console.log('listening for requests on port', 8000)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 