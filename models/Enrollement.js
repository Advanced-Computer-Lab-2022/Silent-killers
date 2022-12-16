const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EnrollmentSchema = new mongoose.Schema({
  CourseId:{
    type:{ type: mongoose.Types.ObjectId,
        ref: 'Course',
         required: false },
},
StudentId:{
  type:{ type: mongoose.Types.ObjectId,
      ref: 'Course',
       required: false },
},
    
  
   
    
    LessonId:{
        type:{ type: mongoose.Types.ObjectId,
            ref: 'Course',
             required: false },
    },
    Completed:{
      type:String,
      required:false
  }
    }, { timestamps: true })

    module.exports = mongoose.model('Enrollment',EnrollmentSchema)