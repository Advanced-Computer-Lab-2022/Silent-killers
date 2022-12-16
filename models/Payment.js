const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PaymentSchema = new mongoose.Schema({
    CourseId:{
        type: mongoose.Types.ObjectId,
         ref: 'Course',
          required: true },
    UserId:{
        type: mongoose.Types.ObjectId,
         ref: 'IndividualTrainee',
          required: true },
    InstructorId:{
        type: mongoose.Types.ObjectId,
         ref: 'Instructor',
          required: true
    },
    CoursePrice:{
        type:Number,
        required:true
    }
    },
    { timestamps: true }
)
module.exports = mongoose.model('Payment',PaymentSchema)