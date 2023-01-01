const mongoose = require('mongoose')

//const Schema = mongoose.Schema

const EnrollmentSchema = new mongoose.Schema({
  CourseId:{
    type: mongoose.Types.ObjectId,
        ref: 'Course',
         required: true 
},
StudentId:{
  type: mongoose.Types.ObjectId,
  ref: 'IndividualTrainee',
  required: true
},
       
    LessonId:{
        type: mongoose.Types.ObjectId,
            ref: 'Exercises',
             required: false 
    },
    Completed:{
      type:Number,
      required:false
  },
  Notes:{
    type: String,
    required:false
  }
    }, { timestamps: true })

    module.exports = mongoose.model('Enrollement',EnrollmentSchema)