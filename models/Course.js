const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
Title: {
    type: String,
    required: true
},
INSid: { type: mongoose.Types.ObjectId, ref: 'Instructor', required: true },
TotalHoursOfCourse: {
    type: Number,
    required: true
},
Rating:{
    type: String,
    required: true
},
Subtitles:{
    type:String,
    required:true
},
Exercises:{
    type:Number,
    required:true
},
Price:{
    type:String,
    required:true
},
TotalHoursOfEachSubtitle: {
    type: Number,
    required: true
},

})

module.exports = mongoose.model('Course', CourseSchema)