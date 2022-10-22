require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect(process.env.DB_URL,{useNewUrlParser: true})
const db = mongoose.connection
db.on('error',(error) => console.log(error))
db.once('open',() => console.log('Connected To Database Successfully'))


app.use(express.json())

const AdminRouter = require('./routes/AdminRoutes')
app.use('/Admin',AdminRouter)

const CorporateTraineeRouter = require('./routes/CorporateTraineeRoutes')
app.use('/CorporateTrainee',CorporateTraineeRouter)

const GuestRouter = require('./routes/GuestRoutes')
app.use('/Guest',GuestRouter)

const IndividualTraineeRouter = require('./routes/IndividualTraineeRoutes')
app.use('/IndividualTrainee',IndividualTraineeRouter)

const InstructorRouter = require('./routes/InstructorRoutes')
app.use('/Instructor',InstructorRouter)

app.listen(8000, () => console.log('Server is up and running! YAY!'))
