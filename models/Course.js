const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CourseSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    INSid: { type: mongoose.Types.ObjectId,
         ref: 'Instructor',
          required: true },
    InstructorName: {
        type:String,
        required : false
    },
    TotalHoursOfCourse: {
        type: Number,
        required: false
    },
    Rating:{
        type: String,
        required: false
    },
    Subtitles:{
        type:String,
        required:true
    },
    Subject:{
        type: String,
        required : false
    },
    Summary:{
        type:String,
        required:false
    },
    Exercises:{
        type:Number,
        required:false
    },
    Price:{
        type:String,
        required:true
    },
    TotalHoursOfEachSubtitle: {
        type: Number,
        required: false
    },
    
    }, { timestamps: true })

    module.exports = mongoose.model('Course', CourseSchema)