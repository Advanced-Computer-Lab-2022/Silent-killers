const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
Title: {
    type: String,
    required: true
},
iid: { type: Schema.Types.ObjectId, ref: 'Instructor', required: true },
TotalHoursOfCourse: {
    type: int,
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
    type: int,
    required: true
},

})

module.exports = mongoose.model('Course', CourseSchema)