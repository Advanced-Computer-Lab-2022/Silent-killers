require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const CourseRouter = require('./routes/CourseRoutes')
const AdminRouter = require('./routes/AdminRoutes')
const CorporateTraineeRouter = require('./routes/CorporateTraineeRoutes')
const GuestRouter = require('./routes/GuestRoutes')
const IndividualTraineeRouter = require('./routes/IndividualTraineeRoutes')
const InstructorRouter = require('./routes/InstructorRoutes')

// express app
const app = express()

// middleware
app.use(express.json())

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

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 