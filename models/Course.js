const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
Title: {
    type: String,
    required: true
},
TotalHours: {
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
}
})

module.exports = mongoose.model('Course', CourseSchema)