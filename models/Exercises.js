const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ExercisesSchema = new mongoose.Schema({
    ExerciseNumber: {
        type: Number,
        required: true
    },
    InstructorID: {
        type : Number,
        required : false
    },
    TraineeUsername: {
        type:String,
        required:false
    },
    INSid: { type: mongoose.Types.ObjectId,
      ref: 'Instructor',
      required: false
  },
  CTid: { type: mongoose.Types.ObjectId,
      ref: 'CorporateTrainee',
      required: false
  },
  ITid: { type: mongoose.Types.ObjectId,
      ref: 'IndividualTrainee',
      required: false
  },
    Questions:
        [
            {
              type: String,
              required: true,
            },
          ],
    
    CorrectSolutions:[
        {
          type: String,
          required: true,
        },
      ],
    CourseTitle:{
        Type: String,
        required: false
    },
    TraineeSolutions:
        [
            {
              type: String,
              required: true,
            },
          ],
    
    CourseId:{
        type:{ type: mongoose.Types.ObjectId,
            ref: 'Course',
             required: false },
    },
    Grade:{
      type:String,
      required:false
  }
    }, { timestamps: true })

    module.exports = mongoose.model('Exercises', ExercisesSchema)