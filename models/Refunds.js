const mongoose = require('mongoose')

//const Schema = mongoose.Schema

const RefundSchema = new mongoose.Schema({
  CourseId:{
    type: mongoose.Types.ObjectId,
        ref: 'Course',
         required: false, 
},
PaymentId:{
  type: mongoose.Types.ObjectId,
  ref: 'Payment',
  required: false,
},
       
    UserId:{
        type: mongoose.Types.ObjectId,
            ref: 'IndividualTrainee',
             required: false 
    },
    Status:{
      type:String,
      required:false
  }
    }, { timestamps: true })

    module.exports = mongoose.model('Refund',RefundSchema)