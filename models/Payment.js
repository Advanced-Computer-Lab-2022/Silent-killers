const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PaymentSchema = new mongoose.Schema({
    CourseId:{
        type: mongoose.Types.ObjectId,
         ref: 'Course',
          required: false },
    UserId:{
        type: mongoose.Types.ObjectId,
         ref: 'IndividualTrainee',
          required: false },
    InstructorId:{
        type: mongoose.Types.ObjectId,
         ref: 'Instructor',
          required: false
    },
    CoursePrice:{
        type:Number,
        required:false
    },
    Creditnumber:{
        type:String,
        required:false
    },Status:{
        type:String,
        required:false
    },
    ExpirationMonth:{
        type:Number,
        required:false
    },
    ExpirationYear:{
        type:Number,
        required:false
    }
    },
    { timestamps: true }
)
module.exports = mongoose.model('Payment',PaymentSchema)